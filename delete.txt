import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private http = inject(HttpClient);
  private base = 'https://jsonplaceholder.typicode.com';
  private titlesKey = 'album_titles';
  private deletedKey = 'album_deleted';

  private getSavedTitles(): Record<number, string> {
    const raw = localStorage.getItem(this.titlesKey);
    return raw ? JSON.parse(raw) : {};
  }

  private saveTitle(id: number, title: string): void {
    const titles = this.getSavedTitles();
    titles[id] = title;
    localStorage.setItem(this.titlesKey, JSON.stringify(titles));
  }

  private getDeletedIds(): number[] {
    const raw = localStorage.getItem(this.deletedKey);
    return raw ? JSON.parse(raw) : [];
  }

  private saveDeletedId(id: number): void {
    const deleted = this.getDeletedIds();
    if (!deleted.includes(id)) {
      deleted.push(id);
      localStorage.setItem(this.deletedKey, JSON.stringify(deleted));
    }
  }

  private applyLocalState(albums: Album[]): Album[] {
    const titles = this.getSavedTitles();
    const deleted = this.getDeletedIds();
    return albums
      .filter((a) => !deleted.includes(a.id))
      .map((a) => (titles[a.id] ? { ...a, title: titles[a.id] } : a));
  }

  getAlbums(): Observable<Album[]> {
    return this.http
      .get<Album[]>(`${this.base}/albums`)
      .pipe(map((albums) => this.applyLocalState(albums)));
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.base}/albums/${id}`).pipe(
      map((album) => {
        const titles = this.getSavedTitles();
        return titles[id] ? { ...album, title: titles[id] } : album;
      })
    );
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.base}/albums/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.base}/albums/${album.id}`, album).pipe(
      map(() => {
        this.saveTitle(album.id, album.title);
        return album;
      })
    );
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/albums/${id}`).pipe(
      map(() => {
        this.saveDeletedId(id);
      })
    );
  }
}