import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.services'; 
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
})
export class AlbumsComponent implements OnInit {
  private albumService = inject(AlbumService);
  private router = inject(Router);

  albums: Album[] = [];
  loading = true;

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  goToDetail(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  delete(event: Event, id: number): void {
    event.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter((a) => a.id !== id);
    });
  }
}