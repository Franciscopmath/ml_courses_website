import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, 
    MatIconModule,
    NavbarComponent
  ],
  template: `
    <app-navbar></app-navbar>
    
    <div class="hero-section">
      <div class="container">
        <h1 class="page-title">Get In <span class="gradient-text">Touch</span></h1>
        <p class="page-subtitle">Let's discuss your next data science project</p>
      </div>
    </div>

    <div class="content-section">
      <div class="container">
        <div class="contact-content">
          
          <!-- Contact Information -->
          <div class="contact-info">
            <h2>Contact Information</h2>
            <p class="intro-text">
              Ready to transform your data into actionable insights? 
              I'd love to hear about your project and explore how we can work together.
            </p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <mat-icon class="contact-icon">email</mat-icon>
                <div class="contact-details">
                  <h4>Email</h4>
                  <p>franciscoperezc@gmail.com</p>
                </div>
              </div>
              
              <div class="contact-method">
                <mat-icon class="contact-icon">phone</mat-icon>
                <div class="contact-details">
                  <h4>Phone</h4>
                  <p>Available upon request</p>
                </div>
              </div>
              
              <div class="contact-method">
                <mat-icon class="contact-icon">location_on</mat-icon>
                <div class="contact-details">
                  <h4>Location</h4>
                  <p>Mexico City, Mexico</p>
                </div>
              </div>
            </div>

            <!-- CV Download -->
            <div class="cv-section">
              <h3>My Resume</h3>
              <div class="cv-download-card">
                <div class="cv-info">
                  <div class="cv-icon">
                    <mat-icon>description</mat-icon>
                  </div>
                  <div class="cv-details">
                    <h4>Francisco Perez - Resume 2025</h4>
                    <p>Complete overview of my experience in Data Science, Machine Learning, and AI projects</p>
                    <div class="cv-meta">
                      <span class="file-type">PDF</span>
                      <span class="file-updated">Updated January 2025</span>
                    </div>
                  </div>
                </div>
                <a href="https://www.icloud.com/iclouddrive/09aZZfT4mMCyWxQqvdEGF9QbA#Fco_perez_cv_2025" target="_blank" class="cv-download-btn">
                  <mat-icon>download</mat-icon>
                  <span>Download</span>
                </a>
              </div>
            </div>

            <!-- Social Links -->
            <div class="social-section">
              <h3>Connect With Me</h3>
              <div class="social-links">
                <a href="https://linkedin.com/in/pacomath" target="_blank" class="social-link linkedin">
                  <mat-icon>work</mat-icon>
                  <span>LinkedIn</span>
                </a>
                <a href="https://twitter.com/Frankmathhuman" target="_blank" class="social-link twitter">
                  <mat-icon>alternate_email</mat-icon>
                  <span>Twitter</span>
                </a>
                <a href="#" class="social-link github">
                  <mat-icon>code</mat-icon>
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <!-- Expertise Areas -->
            <div class="expertise-section">
              <h3>Areas of Expertise</h3>
              <div class="expertise-list">
                <div class="expertise-item">
                  <mat-icon>psychology</mat-icon>
                  <span>Machine Learning & AI</span>
                </div>
                <div class="expertise-item">
                  <mat-icon>visibility</mat-icon>
                  <span>Computer Vision</span>
                </div>
                <div class="expertise-item">
                  <mat-icon>trending_up</mat-icon>
                  <span>Pricing Optimization</span>
                </div>
                <div class="expertise-item">
                  <mat-icon>analytics</mat-icon>
                  <span>Statistical Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hero-section {
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
      min-height: 40vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
    }

    .hero-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="%23667eea" stroke-width="1" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>');
      z-index: -1;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .page-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #495057;
      text-align: center;
      margin-bottom: 1rem;
    }

    .gradient-text {
      background: linear-gradient(135deg, #2563eb 0%, #9333ea 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .page-subtitle {
      font-size: 1.2rem;
      color: #6c757d;
      text-align: center;
      margin-bottom: 2rem;
    }

    .content-section {
      padding: 4rem 0;
      background: rgba(255, 255, 255, 0.9);
    }

    .contact-content {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .contact-info {
      max-width: 800px;
      width: 100%;
    }

    .contact-info h2 {
      color: #495057;
      font-weight: 700;
      margin-bottom: 1.5rem;
      font-size: 2rem;
    }

    .intro-text {
      color: #6c757d;
      line-height: 1.8;
      margin-bottom: 2.5rem;
      font-size: 1.1rem;
    }

    .contact-methods {
      margin-bottom: 3rem;
    }

    .contact-method {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 12px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease;
    }

    .contact-method:hover {
      transform: translateY(-2px);
    }

    .contact-icon {
      color: #2563eb;
      font-size: 2rem;
      width: 2rem;
      height: 2rem;
    }

    .contact-details h4 {
      color: #495057;
      margin: 0 0 0.5rem 0;
      font-weight: 600;
    }

    .contact-details p {
      color: #6c757d;
      margin: 0;
    }

    .cv-section {
      margin-bottom: 3rem;
    }

    .cv-section h3,
    .social-section h3,
    .expertise-section h3 {
      color: #495057;
      font-weight: 600;
      margin-bottom: 1.5rem;
      font-size: 1.3rem;
    }

    .cv-download-card {
      background: white;
      border-radius: 15px;
      padding: 1.5rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(102, 126, 234, 0.1);
      transition: all 0.3s ease;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    .cv-download-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
      border-color: rgba(102, 126, 234, 0.2);
    }

    .cv-info {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex: 1;
    }

    .cv-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .cv-icon mat-icon {
      font-size: 2rem;
      width: 2rem;
      height: 2rem;
      color: #2563eb;
    }

    .cv-details h4 {
      color: #495057;
      font-size: 1.1rem;
      font-weight: 600;
      margin: 0 0 0.5rem 0;
      line-height: 1.3;
    }

    .cv-details p {
      color: #6c757d;
      font-size: 0.95rem;
      line-height: 1.5;
      margin: 0 0 0.75rem 0;
    }

    .cv-meta {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .file-type {
      background: rgba(220, 53, 69, 0.1);
      color: #dc3545;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    .file-updated {
      color: #6c757d;
      font-size: 0.85rem;
    }

    .cv-download-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: linear-gradient(135deg, #2563eb 0%, #9333ea 100%);
      color: white;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: 0.95rem;
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
      transition: all 0.3s ease;
      flex-shrink: 0;
    }

    .cv-download-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
      text-decoration: none;
      color: white;
    }

    .cv-download-btn mat-icon {
      font-size: 1rem;
      width: 1rem;
      height: 1rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-bottom: 3rem;
    }

    .social-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: white;
      border-radius: 25px;
      text-decoration: none;
      color: #495057;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .social-link:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }

    .social-link.linkedin:hover {
      background: #0077b5;
      color: white;
    }

    .social-link.twitter:hover {
      background: #1da1f2;
      color: white;
    }

    .social-link.github:hover {
      background: #333;
      color: white;
    }

    .expertise-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .expertise-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      background: rgba(102, 126, 234, 0.05);
      border-radius: 8px;
      color: #495057;
      font-weight: 500;
    }

    .expertise-item mat-icon {
      color: #2563eb;
    }


    @media (max-width: 768px) {
      .cv-download-card {
        flex-direction: column;
        text-align: center;
        gap: 1.5rem;
      }

      .cv-info {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }

      .cv-meta {
        justify-content: center;
      }

      .cv-download-btn {
        align-self: stretch;
        justify-content: center;
      }

      .social-links {
        flex-direction: column;
      }

      .expertise-list {
        grid-template-columns: 1fr;
      }

      .content-section {
        padding: 2rem 0;
      }

      .container {
        padding: 0 1rem;
      }
    }
  `]
})
export class ContactComponent {
}