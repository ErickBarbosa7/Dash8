import { Component, EventEmitter, Input, Output,  } from "@angular/core";
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-side-menu-history',
  standalone: true,
    imports: [CommonModule, 
    TitleCasePipe,],
  templateUrl: './side-menu-history.component.html',
})
export class SideMenuHistoryComponent {
    @Input() history: string[] = [];
  @Output() tagClicked = new EventEmitter<string>();

  onTagClick(tag: string): void {
    this.tagClicked.emit(tag);
  }
}