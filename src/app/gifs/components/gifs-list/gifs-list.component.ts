import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/GifsService.service';
import { GifCardComponent } from '../gif-card/gif-card.component';

@Component({
  selector: 'gifs-list',
  standalone: true,
  imports: [CommonModule, GifCardComponent],
  templateUrl: './gifs-list.component.html',
})
export class GifsListComponent {
  private gifsService = inject(GifsService);

  get gifs(): Gif[] {
    return this.gifsService.gifList();
  }
}