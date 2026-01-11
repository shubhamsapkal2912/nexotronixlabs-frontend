import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MenubarModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  isMobileMenuOpen = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
        command: () => this.navigateTo('/')
      },
      {
        label: 'Services',
        icon: 'pi pi-briefcase',
        routerLink: '/services',
        command: () => this.navigateTo('/services')
      },
      {
        label: 'About',
        icon: 'pi pi-info-circle',
        routerLink: '/about',
        command: () => this.navigateTo('/about')
      },
      {
        label: 'Careers',
        icon: 'pi pi-users',
        routerLink: '/careers',
        command: () => this.navigateTo('/careers')
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: '/contact',
        command: () => this.navigateTo('/contact')
      }
    ];
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
    this.closeMobileMenu();
  }

  getQuote() {
    this.router.navigate(['/contact']);
    this.closeMobileMenu();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    // Prevent body scroll when menu is open
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
handleMobileNavigation(item: any) {
    this.closeMobileMenu();
    if (item.command) {
      item.command({});
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }
}