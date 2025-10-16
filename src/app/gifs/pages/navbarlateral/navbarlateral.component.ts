import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';




interface MenuItem {
  icon: string;
  title: string;
  subtitle: string;
  route: string;
  active?: boolean;
}

@Component({
  selector: 'app-navbarlateral',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbarlateral.component.html',
  styleUrls: ['./navbarlateral.component.scss']
})
export class NavbarlateralComponent {
  userName = 'Edward Tompson';
  userAvatar = 'https://i.pinimg.com/736x/30/43/a9/3043a937158c4cf5191752f160e84078.jpg';

menuItems: MenuItem[] = [
  {
    icon: 'dashboard',
    title: 'Dashboard',
    subtitle: 'Data Overview',
    route: '/dashboard',
    active: true
  },
  {
    icon: 'database',
    title: 'Database',
    subtitle: 'Database Manager',
    route: '/database',
    active: false
  },
  {
    icon: 'cloud',
    title: 'Cloud Storage',
    subtitle: 'Manage Cloud Storage',
    route: '/cloud-storage',
    active: false
  },
  {
    icon: 'flag',
    title: 'Reports',
    subtitle: 'Manage Reports',
    route: '/reports',
    active: false
  },
  {
    icon: 'key',
    title: 'Security',
    subtitle: 'Generate Security Keys',
    route: '/security',
    active: false
  },
  {
    icon: 'extension',
    title: 'Extensions',
    subtitle: 'Manage Extensions',
    route: '/extensions',
    active: false
  },
  {
    icon: 'settings',
    title: 'Settings',
    subtitle: 'Edit App Settings',
    route: '/settings',
    active: false
  }
];
}