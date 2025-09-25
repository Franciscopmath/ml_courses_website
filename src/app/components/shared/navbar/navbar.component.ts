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
    <header class="navbar">
      <div class="nav-container">
        <!-- Logo Section -->
        <div class="logo-section" routerLink="/home">
          <div class="brand-logo">
            <div class="logo-rings">
              <div class="ring ring-1"></div>
              <div class="ring ring-2"></div>
              <div class="ring ring-3"></div>
            </div>
            <div class="logo-center">
              <mat-icon class="logo-icon">psychology</mat-icon>
            </div>
          </div>
          <div class="brand-info">
            <h1 class="brand-name">Francisco Perez</h1>
            <p class="brand-title">Senior Data Scientist</p>
          </div>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="desktop-nav">
          <a routerLink="/home" routerLinkActive="nav-active" class="nav-link">
            <span>Home</span>
          </a>
          <a routerLink="/about" routerLinkActive="nav-active" class="nav-link">
            <span>About</span>
          </a>
          <a routerLink="/projects" routerLinkActive="nav-active" class="nav-link">
            <span>Projects</span>
          </a>
          <a routerLink="/contact" routerLinkActive="nav-active" class="nav-link">
            <span>Contact</span>
          </a>
        </nav>
        
        <!-- Desktop CTA -->
        <div class="desktop-cta">
          <a href="https://www.icloud.com/iclouddrive/09aZZfT4mMCyWxQqvdEGF9QbA#Fco_perez_cv_2025" 
             target="_blank" 
             class="resume-button">
            <mat-icon>description</mat-icon>
            <span>Resume</span>
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button 
          class="mobile-toggle"
          [class.is-open]="isMobileMenuOpen"
          (click)="toggleMobileMenu()"
          aria-label="Toggle mobile menu">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>

      <!-- Mobile Menu Overlay -->
      <div class="mobile-overlay" [class.is-open]="isMobileMenuOpen" (click)="closeMobileMenu()"></div>

      <!-- Mobile Navigation -->
      <nav class="mobile-nav" [class.is-open]="isMobileMenuOpen">
        <div class="mobile-nav-header">
          <div class="mobile-brand">
            <div class="mobile-logo">
              <mat-icon>psychology</mat-icon>
            </div>
            <div>
              <h2 class="mobile-brand-name">Francisco Perez</h2>
              <p class="mobile-brand-title">Senior Data Scientist</p>
            </div>
          </div>
        </div>

        <div class="mobile-nav-links">
          <a routerLink="/home" 
             routerLinkActive="mobile-active" 
             class="mobile-nav-link" 
             (click)="closeMobileMenu()">
            <mat-icon>home</mat-icon>
            <span>Home</span>
          </a>
          <a routerLink="/about" 
             routerLinkActive="mobile-active" 
             class="mobile-nav-link" 
             (click)="closeMobileMenu()">
            <mat-icon>person</mat-icon>
            <span>About</span>
          </a>
          <a routerLink="/projects" 
             routerLinkActive="mobile-active" 
             class="mobile-nav-link" 
             (click)="closeMobileMenu()">
            <mat-icon>work</mat-icon>
            <span>Projects</span>
          </a>
          <a routerLink="/contact" 
             routerLinkActive="mobile-active" 
             class="mobile-nav-link" 
             (click)="closeMobileMenu()">
            <mat-icon>email</mat-icon>
            <span>Contact</span>
          </a>
        </div>

        <div class="mobile-nav-footer">
          <a href="https://www.icloud.com/iclouddrive/09aZZfT4mMCyWxQqvdEGF9QbA#Fco_perez_cv_2025" 
             target="_blank" 
             class="mobile-resume-button"
             (click)="closeMobileMenu()">
            <mat-icon>description</mat-icon>
            <span>Download Resume</span>
          </a>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    /* CSS Variables */
    :host {
      --primary: #00C9A7;
      --primary-dark: #00BFA6;
      --primary-light: #20E3C7;
      --white: #FFFFFF;
      --gray-50: #F8FFFE;
      --gray-100: #F1F5F9;
      --gray-600: #718096;
      --gray-800: #2D3748;
      --gray-900: #1A202C;
      --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      --gradient: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
      --gradient-subtle: linear-gradient(135deg, rgba(0,201,167,0.1) 0%, rgba(0,191,166,0.05) 100%);
      --blur: blur(20px);
      --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Main Navbar */
    .navbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: var(--blur);
      border-bottom: 1px solid rgba(0, 201, 167, 0.1);
      box-shadow: 0 2px 20px rgba(0, 201, 167, 0.08);
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    /* Logo Section */
    .logo-section {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      transition: var(--transition);
      text-decoration: none;
    }

    .logo-section:hover .brand-name {
      color: var(--primary);
    }

    .logo-section:hover .brand-title {
      color: var(--primary-dark);
    }

    .brand-logo {
      width: 56px;
      height: 56px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .logo-rings {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .ring {
      position: absolute;
      border: 2px solid;
      border-radius: 50%;
      animation: rotate 8s linear infinite;
    }

    .ring-1 {
      width: 100%;
      height: 100%;
      border-color: var(--primary);
      opacity: 0.8;
    }

    .ring-2 {
      width: 80%;
      height: 80%;
      top: 10%;
      left: 10%;
      border-color: var(--primary-dark);
      opacity: 0.6;
      animation-duration: 6s;
      animation-direction: reverse;
    }

    .ring-3 {
      width: 60%;
      height: 60%;
      top: 20%;
      left: 20%;
      border-color: var(--primary-light);
      opacity: 0.4;
      animation-duration: 10s;
    }

    .logo-center {
      width: 40px;
      height: 40px;
      background: var(--gradient);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 20px rgba(0, 201, 167, 0.3);
      z-index: 2;
      transition: var(--transition);
    }

    .logo-icon {
      color: var(--white);
      font-size: 1.5rem;
      width: 1.5rem;
      height: 1.5rem;
      transition: var(--transition);
    }

    .brand-logo:hover {
      transform: scale(1.05);
    }

    .brand-logo:hover .logo-center {
      transform: scale(1.1);
      box-shadow: 0 8px 30px rgba(0, 201, 167, 0.5);
    }

    .brand-logo:hover .logo-icon {
      transform: rotate(15deg);
    }

    .brand-logo:hover .ring {
      animation-play-state: paused;
      border-width: 3px;
    }

    .brand-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .brand-name {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--gray-800);
      margin: 0;
      line-height: 1.2;
      transition: var(--transition);
    }

    .brand-title {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--gray-600);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin: 0;
      transition: var(--transition);
    }

    /* Desktop Navigation */
    .desktop-nav {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .nav-link {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0.75rem 1.5rem;
      font-weight: 500;
      color: var(--gray-600);
      text-decoration: none;
      border-radius: 12px;
      transition: var(--transition);
      overflow: hidden;
    }

    .nav-link::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--gradient-subtle);
      opacity: 0;
      transition: var(--transition);
      z-index: -1;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: var(--gradient);
      transition: var(--transition);
      transform: translateX(-50%);
    }

    .nav-link:hover,
    .nav-link.nav-active {
      color: var(--primary);
      transform: translateY(-1px);
    }

    .nav-link:hover::before,
    .nav-link.nav-active::before {
      opacity: 1;
    }

    .nav-link:hover::after,
    .nav-link.nav-active::after {
      width: 80%;
    }

    /* Resume Button */
    .resume-button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      font-weight: 600;
      color: var(--primary);
      text-decoration: none;
      border: 2px solid var(--primary);
      border-radius: 12px;
      background: transparent;
      transition: var(--transition);
      position: relative;
      overflow: hidden;
    }

    .resume-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: var(--gradient);
      transition: var(--transition);
      z-index: -1;
    }

    .resume-button:hover {
      color: var(--white);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 201, 167, 0.4);
    }

    .resume-button:hover::before {
      left: 0;
    }

    .resume-button mat-icon {
      font-size: 1.2rem;
      width: 1.2rem;
      height: 1.2rem;
      transition: var(--transition);
    }

    .resume-button:hover mat-icon {
      transform: rotate(10deg) scale(1.1);
    }

    /* Mobile Toggle Button */
    .mobile-toggle {
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      border-radius: 12px;
      transition: var(--transition);
      z-index: 1001;
    }

    .mobile-toggle:hover {
      background: var(--gradient-subtle);
    }

    .hamburger-line {
      width: 24px;
      height: 2px;
      background: var(--gray-800);
      transition: var(--transition);
      margin: 3px 0;
      transform-origin: center;
    }

    .mobile-toggle.is-open .hamburger-line:nth-child(1) {
      transform: rotate(45deg) translate(6px, 6px);
    }

    .mobile-toggle.is-open .hamburger-line:nth-child(2) {
      opacity: 0;
    }

    .mobile-toggle.is-open .hamburger-line:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
    }

    /* Mobile Menu */
    .mobile-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(5px);
      opacity: 0;
      visibility: hidden;
      transition: var(--transition);
      z-index: 999;
    }

    .mobile-overlay.is-open {
      opacity: 1;
      visibility: visible;
    }

    .mobile-nav {
      position: fixed;
      top: 0;
      right: -100%;
      width: 320px;
      height: 100vh;
      background: var(--white);
      box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
      transition: var(--transition);
      z-index: 1000;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
    }

    .mobile-nav.is-open {
      right: 0;
    }

    .mobile-nav-header {
      padding: 2rem;
      border-bottom: 1px solid var(--gray-100);
      background: var(--gradient-subtle);
    }

    .mobile-brand {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .mobile-logo {
      width: 50px;
      height: 50px;
      background: var(--gradient);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 15px rgba(0, 201, 167, 0.3);
    }

    .mobile-logo mat-icon {
      color: var(--white);
      font-size: 1.5rem;
      width: 1.5rem;
      height: 1.5rem;
    }

    .mobile-brand-name {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--gray-800);
      margin: 0 0 0.25rem 0;
    }

    .mobile-brand-title {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--gray-600);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin: 0;
    }

    .mobile-nav-links {
      flex: 1;
      padding: 1rem 0;
    }

    .mobile-nav-link {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 2rem;
      font-weight: 500;
      color: var(--gray-600);
      text-decoration: none;
      transition: var(--transition);
      position: relative;
    }

    .mobile-nav-link::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: var(--gradient);
      opacity: 0;
      transition: var(--transition);
    }

    .mobile-nav-link:hover,
    .mobile-nav-link.mobile-active {
      color: var(--primary);
      background: var(--gradient-subtle);
      transform: translateX(5px);
    }

    .mobile-nav-link:hover::before,
    .mobile-nav-link.mobile-active::before {
      opacity: 1;
    }

    .mobile-nav-link mat-icon {
      font-size: 1.25rem;
      width: 1.25rem;
      height: 1.25rem;
      transition: var(--transition);
    }

    .mobile-nav-link:hover mat-icon {
      transform: scale(1.1);
    }

    .mobile-nav-footer {
      padding: 2rem;
      border-top: 1px solid var(--gray-100);
    }

    .mobile-resume-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 100%;
      padding: 1rem;
      font-weight: 600;
      color: var(--white);
      text-decoration: none;
      background: var(--gradient);
      border-radius: 12px;
      transition: var(--transition);
      box-shadow: 0 4px 15px rgba(0, 201, 167, 0.3);
    }

    .mobile-resume-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 201, 167, 0.5);
    }

    .mobile-resume-button mat-icon {
      font-size: 1.25rem;
      width: 1.25rem;
      height: 1.25rem;
    }

    /* Animations */
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .nav-container {
        padding: 0 1rem;
      }
    }

    @media (max-width: 768px) {
      .brand-info,
      .desktop-nav,
      .desktop-cta {
        display: none;
      }

      .mobile-toggle {
        display: flex;
      }

      .mobile-nav {
        width: 280px;
      }
    }

    @media (max-width: 480px) {
      .nav-container {
        padding: 0 1rem;
      }

      .mobile-nav {
        width: 100%;
        right: -100%;
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