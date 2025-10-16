import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsSideMenuOptionsComponent } from "./side-menu-options/gifs-side-menu-options.component";
import { GifsSideMenuHeaderComponent } from "./side-menu-header/gifs-side-menu-header.component";

@Component({
  selector: 'app-side-menu',
  imports: [GifsSideMenuOptionsComponent, GifsSideMenuHeaderComponent],
  templateUrl: './side-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent { }
