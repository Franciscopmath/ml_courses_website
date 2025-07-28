import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  template: `
    <mat-toolbar class="navbar-container">
      <div class="navbar-content">
        <div class="logo-section">
          <div class="brand-icon">
            <span class="icon-text">FP</span>
          </div>
          <div class="brand-info">
            <span class="brand-name">Francisco Perez</span>
            <span class="brand-title">Senior Data Scientist</span>
          </div>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="nav-links desktop-nav">
          <a mat-button routerLink="/home" routerLinkActive="active" class="nav-link">Home</a>
          <a mat-button routerLink="/about" routerLinkActive="active" class="nav-link">About</a>
          <a mat-button routerLink="/projects" routerLinkActive="active" class="nav-link">Projects</a>
          <a mat-button routerLink="/contact" routerLinkActive="active" class="nav-link">Contact</a>
        </nav>
        
        <!-- Desktop Action Section -->
        <div class="action-section desktop-action">
          <a href="https://www.icloud.com/iclouddrive/09aZZfT4mMCyWxQqvdEGF9QbA#Fco_perez_cv_2025" target="_blank" class="resume-btn" mat-stroked-button>
            <mat-icon>description</mat-icon>
            Resume
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button mat-icon-button class="mobile-menu-button" (click)="toggleMobileMenu()" [attr.aria-expanded]="isMobileMenuOpen" aria-label="Toggle mobile menu">
          <mat-icon>{{ isMobileMenuOpen ? 'close' : 'menu' }}</mat-icon>
        </button>
      </div>

      <!-- Mobile Navigation Menu -->
      <div class="mobile-menu" [class.mobile-menu-open]="isMobileMenuOpen">
        <nav class="mobile-nav-links">
          <a mat-button routerLink="/home" routerLinkActive="active" class="mobile-nav-link" (click)="closeMobileMenu()">
            <mat-icon>home</mat-icon>
            Home
          </a>
          <a mat-button routerLink="/about" routerLinkActive="active" class="mobile-nav-link" (click)="closeMobileMenu()">
            <mat-icon>person</mat-icon>
            About
          </a>
          <a mat-button routerLink="/projects" routerLinkActive="active" class="mobile-nav-link" (click)="closeMobileMenu()">
            <mat-icon>work</mat-icon>
            Projects
          </a>
          <a mat-button routerLink="/contact" routerLinkActive="active" class="mobile-nav-link" (click)="closeMobileMenu()">
            <mat-icon>email</mat-icon>
            Contact
          </a>
          <div class="mobile-action-section">
            <a href="https://www.icloud.com/iclouddrive/09aZZfT4mMCyWxQqvdEGF9QbA#Fco_perez_cv_2025" target="_blank" class="mobile-resume-btn" mat-stroked-button (click)="closeMobileMenu()">
              <mat-icon>description</mat-icon>
              Resume
            </a>
          </div>
        </nav>
      </div>

      <!-- Mobile Menu Overlay -->
      <div class="mobile-menu-overlay" [class.mobile-menu-overlay-open]="isMobileMenuOpen" (click)="closeMobileMenu()"></div>
    </mat-toolbar>
  `,
  styles: [`
    :host {
      --color-primary: #00C9A7;
      --color-secondary: #00BFA6;
      --color-accent: #20E3C7;
      --bg-primary: #FFFFFF;
      --bg-secondary: #F8FFFE;
      --bg-dark: #2A2A2A;
      --text-primary: #2D3748;
      --text-secondary: #718096;
      --text-light: #FFFFFF;
      --border-color: #E2E8F0;
      --gradient-primary: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
      --gradient-hero: linear-gradient(135deg, rgba(0, 201, 167, 0.1) 0%, rgba(0, 191, 166, 0.1) 100%);
    }

    .navbar-container {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border-color);
      position: sticky;
      top: 0;
      z-index: 1000;
      height: 80px;
      padding: 0;
    }

    .navbar-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      height: 100%;
    }

    .logo-section {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .brand-icon {
      width: 48px;
      height: 48px;
      background: var(--gradient-primary);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 15px rgba(0, 201, 167, 0.3);
      transition: all 0.3s ease;
    }

    .brand-icon:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(0, 201, 167, 0.4);
    }

    .icon-text {
      color: var(--text-light);
      font-weight: 700;
      font-size: 1.25rem;
      letter-spacing: -0.02em;
    }

    .brand-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .brand-name {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--text-primary);
      line-height: 1.2;
    }

    .brand-title {
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.025em;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .nav-link {
      position: relative;
      font-weight: 500;
      color: var(--text-secondary);
      padding: 0.5rem 1rem;
      border-radius: 8px;
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .nav-link:hover {
      color: var(--color-primary);
      background: var(--gradient-hero);
      text-decoration: none;
    }

    .nav-link.active {
      color: var(--color-primary);
      background: rgba(0, 201, 167, 0.15);
      font-weight: 600;
    }

    .action-section {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .resume-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--color-primary);
      border-color: var(--color-primary);
      font-weight: 500;
      transition: all 0.3s ease;
      border-radius: 8px;
    }

    .resume-btn:hover {
      background: var(--gradient-primary);
      border-color: var(--color-primary);
      color: var(--text-light);
      transform: translateY(-1px);
      box-shadow: 0 4px 15px rgba(0, 201, 167, 0.3);
    }

    .resume-btn mat-icon {
      font-size: 1.125rem;
      width: 1.125rem;
      height: 1.125rem;
    }

    /* Mobile Menu Button - Hidden on Desktop */
    .mobile-menu-button {
      display: none;
      color: var(--text-secondary);
    }

    /* Mobile Menu */
    .mobile-menu {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(15px);
      border-top: 1px solid var(--border-color);
      box-shadow: 0 20px 60px rgba(0, 201, 167, 0.1);
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 999;
    }

    .mobile-menu-open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }

    .mobile-nav-links {
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      gap: 0.5rem;
    }

    .mobile-nav-link {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      font-weight: 500;
      color: var(--text-secondary);
      text-align: left;
      justify-content: flex-start;
      width: 100%;
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .mobile-nav-link:hover {
      background: var(--gradient-hero);
      color: var(--color-primary);
      text-decoration: none;
    }

    .mobile-nav-link.active {
      background: rgba(0, 201, 167, 0.15);
      color: var(--color-primary);
      font-weight: 600;
    }

    .mobile-nav-link mat-icon {
      font-size: 1.25rem;
      width: 1.25rem;
      height: 1.25rem;
    }

    .mobile-action-section {
      margin-top: 1.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border-color);
    }

    .mobile-resume-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 100%;
      padding: 1rem;
      color: var(--color-primary);
      border-color: var(--color-primary);
      font-weight: 500;
      transition: all 0.3s ease;
      border-radius: 8px;
    }

    .mobile-resume-btn:hover {
      background: var(--gradient-primary);
      border-color: var(--color-primary);
      color: var(--text-light);
      transform: translateY(-1px);
      box-shadow: 0 4px 15px rgba(0, 201, 167, 0.3);
    }

    /* Mobile Menu Overlay */
    .mobile-menu-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 998;
    }

    .mobile-menu-overlay-open {
      opacity: 1;
      visibility: visible;
    }

    @media (max-width: 1024px) {
      .navbar-content {
        padding: 0 var(--space-lg);
      }
    }

    @media (max-width: 768px) {
      .navbar-content {
        padding: 0 var(--space-md);
      }

      .brand-info {
        display: none;
      }

      /* Hide desktop navigation on mobile */
      .desktop-nav,
      .desktop-action {
        display: none;
      }

      /* Show mobile menu button */
      .mobile-menu-button {
        display: flex;
      }
    }
  `]
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}