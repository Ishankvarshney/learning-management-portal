import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    Navbar,Footer, Sidebar
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  standalone:true
})
export class MainLayout {}
