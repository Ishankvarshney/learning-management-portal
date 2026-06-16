import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  menuItems = [

  {
    label: 'Dashboard',
    route: '/dashboard'
  },

  {
    label: 'Employees',
    route: '/employees'
  },

  {
    label: 'Courses',
    route: '/courses'
  },

  {
    label: 'Registrations',
    route: '/registrations'
  },

  {
    label: 'Settings',
    route: '/settings'
  }

];
}
