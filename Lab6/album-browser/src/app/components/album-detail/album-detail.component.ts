import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
})
export class AlbumDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumService = inject(AlbumService);
  private cdr = inject(ChangeDetectorRef);

  album: Album | null = null;
  editTitle = '';
  loading = true;
  saving = false;
  saved = false;
  saveError = false;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editTitle = data.title;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }

  save(): void {
    if (!this.album || !this.editTitle.trim()) return;

    this.saving = true;
    this.saved = false;
    this.saveError = false;

    const updated: Album = { ...this.album, title: this.editTitle.trim() };

    this.albumService.updateAlbum(updated).subscribe({
      next: () => {
        this.album = updated;
        this.saving = false;
        this.saved = true;
        this.cdr.detectChanges();

        setTimeout(() => {
          this.saved = false;
          this.cdr.detectChanges();
        }, 2500);
      },
      error: () => {
        this.saving = false;
        this.saveError = true;
        this.cdr.detectChanges();

        setTimeout(() => {
          this.saveError = false;
          this.cdr.detectChanges();
        }, 2500);
      },
    });
  }

  viewPhotos(): void {
    if (!this.album) return;
    this.router.navigate(['/albums', this.album.id, 'photos']);
  }

  back(): void {
    this.router.navigate(['/albums']);
  }
}