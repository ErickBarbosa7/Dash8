import { SideMenuHistoryComponent } from './side-menu-history/side-menu-history.component';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsService } from '../../../services/GifsService.service';
import { RouterLink } from '@angular/router';
import { SideMenuHeaderComponent } from './side-menu-header/side-menu-header.component';
import { SideMenuOptionsComponent } from './side-menu-options/side-menu-options.component';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [ CommonModule, SideMenuHeaderComponent, SideMenuOptionsComponent,SideMenuHistoryComponent ],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  
  private gifsService = inject(GifsService);

  public history = this.gifsService.history;

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