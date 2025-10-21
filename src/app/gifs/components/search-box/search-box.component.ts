import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { GifsService } from '../../services/GifsService.service';

@Component({
  selector: 'gifs-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  private gifsService = inject(GifsService);

  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}