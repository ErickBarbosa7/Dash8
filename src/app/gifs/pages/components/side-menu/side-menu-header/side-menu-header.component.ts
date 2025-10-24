import { Component } from "@angular/core";
import { environment } from "../../../../../../environments/environment.development";

@Component({
  selector: 'app-side-menu-header',
  standalone: true,
  templateUrl: './side-menu-header.component.html',
})
export class SideMenuHeaderComponent {
    envs = environment;
}