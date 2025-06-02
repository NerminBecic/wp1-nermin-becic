import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false 
})
export class HeaderComponent {
  @ViewChild('homeLink') homeLink!: ElementRef;
  @ViewChild('aboutLink') aboutLink!: ElementRef;
  @ViewChild('gamesLink') gamesLink!: ElementRef;

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}