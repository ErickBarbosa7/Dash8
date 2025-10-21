import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsService } from '../../../services/GifsService.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  
  private gifsService = inject(GifsService);
  public menuItems = [
    { 
      label: 'Dashboard', 
      subtitle: 'GIFs mas populares', 
      icon: 'dashboard',
      routerLink: '/dashboard' 
    },
    { 
      label: 'Trending', 
      subtitle: 'Los mejores GIFs', 
      icon: 'trending_up',
      routerLink: './trending' 
    },
    { 
      label: 'Search', 
      subtitle: 'Busca tu GIF', 
      icon: 'search',
      routerLink: './search' 
    },
  ];
  get history(): string[] {
    return this.gifsService.history();
  }

  handleMenuClick(label: string): void {
    if (label === 'Dashboard' || label === 'Search') {
      this.gifsService.fetchDashboardGifs();
    } else if (label === 'Trending') {
      this.gifsService.fetchTrendingGifs();
    }
  }
  searchTag(tag: string): void {
    this.gifsService.searchTag(tag);
  }
}