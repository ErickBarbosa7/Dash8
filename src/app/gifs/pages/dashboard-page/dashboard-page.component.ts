import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "../components/side-menu/side-menu.component";
import { SearchBoxComponent } from '../../components/search-box/search-box.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, SideMenuComponent, SearchBoxComponent],
  templateUrl: './dashboard-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardPageComponent { }
