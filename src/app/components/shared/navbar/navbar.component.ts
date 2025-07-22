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
        
        <nav class="nav-links">
          <a mat-button routerLink="/home" routerLinkActive="active" class="nav-link">Home</a>
          <a mat-button routerLink="/about" routerLinkActive="active" class="nav-link">About</a>
          <a mat-button routerLink="/projects" routerLinkActive="active" class="nav-link">Projects</a>
          <a mat-button routerLink="/contact" routerLinkActive="active" class="nav-link">Contact</a>
        </nav>
        
        <div class="action-section">
          <a href="https://www.icloud.com/iclouddrive/09aZZfT4mMCyWxQqvdEGF9QbA#Fco_perez_cv_2025" target="_blank" class="resume-btn" mat-stroked-button>
            <mat-icon>description</mat-icon>
            Resume
          </a>
        </div>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .navbar-container {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--neutral-200);
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
      padding: 0 var(--space-xl);
      height: 100%;
    }

    .logo-section {
      display: flex;
      align-items: center;
      gap: var(--space-md);
    }

    .brand-icon {
      width: 48px;
      height: 48px;
      background: var(--primary-gradient);
      border-radius: var(--radius-xl);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow-sm);
    }

    .icon-text {
      color: white;
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
      color: var(--neutral-900);
      line-height: 1.2;
    }

    .brand-title {
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--neutral-600);
      text-transform: uppercase;
      letter-spacing: 0.025em;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: var(--space-xs);
    }

    .nav-link {
      position: relative;
      font-weight: 500;
      color: var(--neutral-600);
      padding: var(--space-sm) var(--space-lg);
      border-radius: var(--radius-lg);
      transition: all 0.2s ease;
    }

    .nav-link:hover {
      color: var(--primary-700);
      background: var(--primary-50);
    }

    .nav-link.active {
      color: var(--primary-700);
      background: var(--primary-100);
      font-weight: 600;
    }

    .action-section {
      display: flex;
      align-items: center;
      gap: var(--space-md);
    }

    .resume-btn {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      color: var(--primary-600);
      border-color: var(--primary-300);
      font-weight: 500;
      transition: all 0.2s ease;
    }

    .resume-btn:hover {
      background: var(--primary-50);
      border-color: var(--primary-400);
      color: var(--primary-700);
    }

    .resume-btn mat-icon {
      font-size: 1.125rem;
      width: 1.125rem;
      height: 1.125rem;
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

      .nav-links {
        gap: 0;
      }

      .nav-link {
        padding: var(--space-sm);
        font-size: 0.875rem;
      }

      .resume-btn {
        padding: var(--space-sm);
      }

      .resume-btn span {
        display: none;
      }
    }

    @media (max-width: 480px) {
      .nav-links {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: white;
        border-top: 1px solid var(--neutral-200);
        padding: var(--space-sm);
        justify-content: space-around;
        box-shadow: var(--shadow-lg);
      }

      .action-section {
        display: none;
      }
    }
  `]
})
export class NavbarComponent {}