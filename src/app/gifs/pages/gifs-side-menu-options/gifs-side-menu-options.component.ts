// gifs-side-menu-options.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsSideMenuOptionComponent } from '../gifs-side-menu-option/gifs-side-menu-option.component';

@Component({
  selector: 'app-gifs-side-menu-options', 
  standalone: true,
  imports: [
    CommonModule,
    GifsSideMenuOptionComponent 
  ],
  templateUrl: './gifs-side-menu-options.component.html',
})
export class GifsSideMenuOptionsComponent {
  public menuOptions = [
    { icon: 'fa-solid fa-gauge', title: 'Dashboard', subtitle: 'Data and stats', router: '/dashboard' },
    { icon: 'fa-solid fa-chart-line', title: 'Trending', subtitle: 'The best gifs', router: '/trending' },
    { icon: 'fa-solid fa-magnifying-glass', title: 'Search', subtitle: 'Find your gifs', router: '/search' },
  ];
}