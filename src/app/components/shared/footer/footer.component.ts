import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterModule],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="container">
          
          <!-- Main Footer Content -->
          <div class="footer-main">
            
            <!-- Brand Section -->
            <div class="footer-brand">
              <div class="brand-icon">
                <span class="icon-text">FP</span>
              </div>
              <div class="brand-info">
                <h3 class="brand-name">Francisco Perez</h3>
                <p class="brand-title">Senior Data Scientist</p>
                <p class="brand-description">
                  Transforming complex data challenges into strategic business advantages through 
                  machine learning and statistical modeling.
                </p>
              </div>
            </div>

            <!-- Quick Links -->
            <div class="footer-section">
              <h4 class="section-title">Quick Links</h4>
              <nav class="footer-nav">
                <a routerLink="/home" class="footer-link">Home</a>
                <a routerLink="/about" class="footer-link">About</a>
                <a routerLink="/projects" class="footer-link">Projects</a>
                <a routerLink="/contact" class="footer-link">Contact</a>
              </nav>
            </div>

            <!-- Expertise Areas -->
            <div class="footer-section">
              <h4 class="section-title">Expertise</h4>
              <ul class="expertise-list">
                <li>Machine Learning & AI</li>
                <li>Computer Vision</li>
                <li>Pricing Optimization</li>
                <li>Statistical Analysis</li>
                <li>Data Visualization</li>
              </ul>
            </div>

            <!-- Contact & Social -->
            <div class="footer-section">
              <h4 class="section-title">Connect</h4>
              <div class="contact-info">
                <div class="contact-item">
                  <mat-icon>email</mat-icon>
                  <span>franciscoperezc&#64;gmail.com</span>
                </div>
                <div class="contact-item">
                  <mat-icon>phone</mat-icon>
                  <span>+52 55 18 35 52 87</span>
                </div>
                <div class="contact-item">
                  <mat-icon>location_on</mat-icon>
                  <span>Mexico City, Mexico</span>
                </div>
              </div>
              
              <div class="social-links">
                <a href="https://linkedin.com/in/pacomath" target="_blank" class="social-link" title="LinkedIn">
                  <mat-icon>work</mat-icon>
                </a>
                <a href="https://twitter.com/Frankmathhuman" target="_blank" class="social-link" title="Twitter">
                  <mat-icon>alternate_email</mat-icon>
                </a>
                <a href="#" class="social-link" title="GitHub">
                  <mat-icon>code</mat-icon>
                </a>
                <a href="https://wa.me/525518355287" target="_blank" class="social-link whatsapp" title="WhatsApp">
                  <mat-icon>message</mat-icon>
                </a>
              </div>
            </div>
          </div>

          <!-- Footer Bottom -->
          <div class="footer-bottom">
            <div class="footer-bottom-content">
              <div class="copyright">
                <p>&copy; {{currentYear}} Francisco Perez. All rights reserved.</p>
              </div>
              <div class="footer-meta">
                <span class="built-with">Built with Angular & Material Design</span>
                <span class="location">Made in Mexico City 🇲🇽</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
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

    .footer {
      background: var(--bg-dark);
      color: var(--text-light);
      margin-top: auto;
    }

    .footer-content {
      position: relative;
      overflow: hidden;
    }

    .footer-content::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="%2300C9A7" stroke-width="1" opacity="0.05"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>');
      z-index: 0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      position: relative;
      z-index: 1;
    }

    .footer-main {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: 3rem;
      padding: 4rem 0 2rem;
    }

    .footer-brand {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .brand-icon {
      width: 60px;
      height: 60px;
      background: var(--gradient-primary);
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 25px rgba(0, 201, 167, 0.3);
    }

    .icon-text {
      color: var(--text-light);
      font-weight: 700;
      font-size: 1.5rem;
      letter-spacing: -0.02em;
    }

    .brand-info {
      flex: 1;
    }

    .brand-name {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-light);
      margin: 0 0 0.5rem 0;
    }

    .brand-title {
      font-size: 1rem;
      color: var(--color-primary);
      font-weight: 600;
      margin: 0 0 1rem 0;
    }

    .brand-description {
      font-size: 0.95rem;
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.6;
      margin: 0;
    }

    .footer-section {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .section-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--text-light);
      margin: 0;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--color-primary);
      display: inline-block;
    }

    .footer-nav {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .footer-link {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      font-size: 0.95rem;
      transition: all 0.3s ease;
      padding: 0.25rem 0;
    }

    .footer-link:hover {
      color: var(--color-primary);
      text-decoration: none;
      padding-left: 0.5rem;
    }

    .expertise-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .expertise-list li {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.95rem;
      position: relative;
      padding-left: 1rem;
      transition: color 0.3s ease;
    }

    .expertise-list li::before {
      content: '▸';
      color: var(--color-primary);
      position: absolute;
      left: 0;
      font-weight: bold;
    }

    .expertise-list li:hover {
      color: var(--text-light);
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.95rem;
    }

    .contact-item mat-icon {
      color: var(--color-primary);
      font-size: 1.2rem;
      width: 1.2rem;
      height: 1.2rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      width: 45px;
      height: 45px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(0, 201, 167, 0.3);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: var(--color-primary);
      border-color: var(--color-primary);
      color: var(--text-light);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 201, 167, 0.4);
    }

    .social-link.whatsapp:hover {
      background: #25d366;
      border-color: #25d366;
    }

    .social-link mat-icon {
      font-size: 1.2rem;
      width: 1.2rem;
      height: 1.2rem;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 2rem 0;
      margin-top: 2rem;
    }

    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .copyright p {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
      margin: 0;
    }

    .footer-meta {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .built-with,
    .location {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.85rem;
    }

    .location {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    @media (max-width: 1024px) {
      .footer-main {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }

      .footer-brand {
        grid-column: span 2;
      }
    }

    @media (max-width: 768px) {
      .footer-main {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 3rem 0 2rem;
      }

      .footer-brand {
        grid-column: span 1;
      }

      .footer-bottom-content {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }

      .footer-meta {
        flex-direction: column;
        gap: 0.5rem;
      }

      .social-links {
        justify-content: center;
      }

      .container {
        padding: 0 1rem;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}