import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsService } from '../../../services/GifsService.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  
  private gifsService = inject(GifsService);
  get history(): string[] {
    return this.gifsService.history();
  }

  searchTag(tag: string): void {
    this.gifsService.searchTag(tag);
  }
}