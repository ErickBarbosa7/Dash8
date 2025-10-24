import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

// Esta interfaz la definiste en tu código, la mantengo aquí
export interface MenuItem {
  label: string;
  routerLink: string;
  icon: string;
  subtitle: string;
}

@Component({
  selector: 'app-side-menu-options',
  standalone: true,
  imports: [
    CommonModule, 
    TitleCasePipe, 
    RouterLink, 
    RouterLinkActive
  ],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {

  @Input({ required: true }) menuItems: MenuItem[] = [];
  @Input() history: string[] = [];

  @Output() menuItemClicked = new EventEmitter<string>();
  
  @Output() tagClicked = new EventEmitter<string>();

  onMenuClick(label: string): void {
    this.menuItemClicked.emit(label);
  }

  onTagClick(tag: string): void {
    this.tagClicked.emit(tag);
  }
  
}

