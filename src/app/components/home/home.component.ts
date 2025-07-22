import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule, MatChipsModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    
    <div class="hero-section">
      <div class="hero-background"></div>
      <div class="hero-content">
        <div class="hero-text">
          <div class="status-indicator">
            <div class="availability-badge">
              <div class="status-dot"></div>
              <span>Available for Senior Roles</span>
            </div>
          </div>
          
          <h1 class="hero-title">
            Senior Data Scientist<br>
            <span class="hero-subtitle">Driving Business Impact Through AI</span>
          </h1>
          
          <p class="hero-description">
            I'm Francisco Perez, an experienced data scientist specializing in machine learning solutions 
            for enterprise environments. With proven expertise in computer vision, pricing optimization, 
            and statistical modeling, I transform complex data challenges into strategic business advantages.
          </p>
          
          <div class="key-metrics">
            <div class="metric">
              <span class="metric-number">5+</span>
              <span class="metric-label">Years Experience</span>
            </div>
            <div class="metric">
              <span class="metric-number">20%</span>
              <span class="metric-label">Avg. ROI Improvement</span>
            </div>
            <div class="metric">
              <span class="metric-number">50+</span>
              <span class="metric-label">Projects Delivered</span>
            </div>
          </div>
          
          <div class="cta-buttons">
            <button mat-flat-button class="btn-primary" routerLink="/projects">View Portfolio</button>
            <button mat-stroked-button class="btn-secondary" routerLink="/contact">Get in Touch</button>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="visual-container">
            <div class="profile-card">
              <img src="assets/perfil.png" alt="Francisco Perez Carbajal" class="profile-image">
              <div class="profile-overlay">
                <div class="tech-badge">MS in Data Science</div>
              </div>
            </div>
            <div class="floating-elements">
              <div class="tech-icon python">🐍</div>
              <div class="tech-icon ml">🤖</div>
              <div class="tech-icon stats">📊</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Expertise Overview Section -->
    <section class="expertise-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Technical Expertise</h2>
          <p class="section-subtitle">Specialized skills that drive measurable business outcomes</p>
        </div>
        
        <div class="expertise-grid">
          <div class="expertise-card">
            <div class="card-icon">
              <span class="icon">🧠</span>
            </div>
            <div class="card-content">
              <h3>Machine Learning Engineering</h3>
              <p>End-to-end ML pipeline development, model deployment, and performance optimization at scale</p>
              <div class="tech-stack">
                <span class="tech-tag">Python</span>
                <span class="tech-tag">TensorFlow</span>
                <span class="tech-tag">PyTorch</span>
                <span class="tech-tag">MLOps</span>
              </div>
            </div>
          </div>
          
          <div class="expertise-card">
            <div class="card-icon">
              <span class="icon">👁️</span>
            </div>
            <div class="card-content">
              <h3>Computer Vision</h3>
              <p>Advanced image processing, object detection, and automated quality control systems</p>
              <div class="tech-stack">
                <span class="tech-tag">OpenCV</span>
                <span class="tech-tag">YOLO</span>
                <span class="tech-tag">Detectron2</span>
                <span class="tech-tag">PIL/Pillow</span>
              </div>
            </div>
          </div>
          
          <div class="expertise-card">
            <div class="card-icon">
              <span class="icon">💰</span>
            </div>
            <div class="card-content">
              <h3>Pricing Intelligence</h3>
              <p>Dynamic pricing strategies and market optimization models for retail environments</p>
              <div class="tech-stack">
                <span class="tech-tag">Statistical Modeling</span>
                <span class="tech-tag">A/B Testing</span>
                <span class="tech-tag">Time Series</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="section-cta">
          <button mat-flat-button routerLink="/about" class="btn-secondary">
            View Full Technical Profile
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      position: relative;
      min-height: calc(100vh - 80px);
      display: flex;
      align-items: center;
      background: var(--neutral-50);
      overflow: hidden;
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
                  radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.05) 0%, transparent 50%);
      z-index: 0;
    }

    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--space-3xl) var(--space-xl);
      display: grid;
      grid-template-columns: 1fr 400px;
      gap: var(--space-3xl);
      align-items: center;
    }

    .status-indicator {
      margin-bottom: var(--space-xl);
    }

    .availability-badge {
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      background: var(--success-50);
      color: var(--success-700);
      padding: var(--space-sm) var(--space-lg);
      border-radius: var(--radius-xl);
      border: 1px solid var(--success-200);
      font-size: 0.875rem;
      font-weight: 500;
    }

    .status-dot {
      width: 8px;
      height: 8px;
      background: var(--success-500);
      border-radius: 50%;
      animation: gentle-pulse 2s ease-in-out infinite;
    }

    @keyframes gentle-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.6; }
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.1;
      color: var(--neutral-900);
      margin-bottom: var(--space-lg);
    }

    .hero-subtitle {
      font-size: 1.5rem;
      font-weight: 400;
      color: var(--primary-600);
      display: block;
    }

    .hero-description {
      font-size: 1.125rem;
      line-height: 1.7;
      color: var(--neutral-700);
      margin-bottom: var(--space-2xl);
    }

    .key-metrics {
      display: flex;
      gap: var(--space-2xl);
      margin-bottom: var(--space-2xl);
    }

    .metric {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .metric-number {
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-600);
      line-height: 1;
    }

    .metric-label {
      font-size: 0.875rem;
      color: var(--neutral-600);
      font-weight: 500;
      margin-top: var(--space-xs);
    }

    .cta-buttons {
      display: flex;
      gap: var(--space-md);
    }

    .btn-primary {
      background: var(--primary-600);
      color: white;
      padding: var(--space-md) var(--space-2xl);
      font-size: 1rem;
      font-weight: 600;
      border-radius: var(--radius-md);
      border: none;
      box-shadow: var(--shadow-sm);
      transition: all 0.2s ease;
    }

    .btn-primary:hover {
      background: var(--primary-700);
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }

    .btn-secondary {
      color: var(--neutral-700);
      border: 1px solid var(--neutral-300);
      padding: var(--space-md) var(--space-2xl);
      font-size: 1rem;
      font-weight: 600;
      border-radius: var(--radius-md);
      background: white;
      transition: all 0.2s ease;
    }

    .btn-secondary:hover {
      background: var(--neutral-50);
      border-color: var(--neutral-400);
      transform: translateY(-1px);
      box-shadow: var(--shadow-sm);
    }

    .hero-visual {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .visual-container {
      position: relative;
      width: 100%;
      max-width: 400px;
    }

    .profile-card {
      position: relative;
      background: white;
      border-radius: var(--radius-xl);
      padding: var(--space-lg);
      box-shadow: var(--shadow-lg);
      border: 1px solid var(--neutral-200);
    }

    .profile-image {
      width: 100%;
      height: auto;
      border-radius: var(--radius-lg);
      display: block;
    }

    .profile-overlay {
      position: absolute;
      bottom: var(--space-lg);
      left: var(--space-lg);
      right: var(--space-lg);
    }

    .tech-badge {
      background: var(--primary-600);
      color: white;
      padding: var(--space-sm) var(--space-md);
      border-radius: var(--radius-md);
      font-size: 0.875rem;
      font-weight: 600;
      display: inline-block;
      box-shadow: var(--shadow-sm);
    }

    .floating-elements {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
    }

    .tech-icon {
      position: absolute;
      background: white;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      box-shadow: var(--shadow-md);
      border: 2px solid var(--neutral-200);
      animation: gentle-float 6s ease-in-out infinite;
    }

    .tech-icon.python {
      top: 10%;
      right: -10%;
      animation-delay: 0s;
    }

    .tech-icon.ml {
      bottom: 20%;
      left: -15%;
      animation-delay: 2s;
    }

    .tech-icon.stats {
      top: 40%;
      right: -20%;
      animation-delay: 4s;
    }

    .expertise-section {
      padding: var(--space-3xl) 0;
      background: white;
    }

    .section-header {
      text-align: center;
      margin-bottom: var(--space-3xl);
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--neutral-900);
      margin-bottom: var(--space-md);
    }

    .section-subtitle {
      font-size: 1.25rem;
      color: var(--neutral-600);
      font-weight: 400;
      margin: 0;
    }

    .expertise-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: var(--space-2xl);
      margin-bottom: var(--space-3xl);
    }

    .expertise-card {
      background: white;
      border: 1px solid var(--neutral-200);
      border-radius: var(--radius-xl);
      padding: var(--space-2xl);
      transition: all 0.2s ease;
      position: relative;
      overflow: hidden;
    }

    .expertise-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--primary-gradient);
    }

    .expertise-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
      border-color: var(--primary-200);
    }

    .card-icon {
      margin-bottom: var(--space-lg);
    }

    .icon {
      font-size: 3rem;
      display: block;
    }

    .card-content h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin-bottom: var(--space-md);
    }

    .card-content p {
      color: var(--neutral-700);
      line-height: 1.6;
      margin-bottom: var(--space-lg);
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-sm);
    }

    .tech-tag {
      background: var(--primary-50);
      color: var(--primary-700);
      padding: var(--space-xs) var(--space-md);
      border-radius: var(--radius-md);
      font-size: 0.875rem;
      font-weight: 500;
      border: 1px solid var(--primary-200);
    }

    .section-cta {
      text-align: center;
    }

    @media (max-width: 1024px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: var(--space-2xl);
        text-align: center;
      }

      .hero-visual {
        order: -1;
      }

      .visual-container {
        max-width: 300px;
      }
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1.25rem;
      }

      .key-metrics {
        justify-content: center;
        gap: var(--space-xl);
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
        gap: var(--space-md);
      }

      .btn-primary,
      .btn-secondary {
        width: 100%;
        max-width: 280px;
        justify-content: center;
      }

      .expertise-grid {
        grid-template-columns: 1fr;
        gap: var(--space-xl);
      }

      .section-title {
        font-size: 2rem;
      }

      .tech-icon {
        display: none;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }

      .key-metrics {
        flex-direction: column;
        gap: var(--space-lg);
        align-items: center;
        text-align: center;
      }

      .expertise-card {
        padding: var(--space-xl);
      }
    }
  `]
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private animationService: AnimationService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    // Initialize page animations
    setTimeout(() => {
      this.animationService.initPageAnimations();
      this.animationService.addFloatingAnimation('.profile-image');
      this.animationService.addPulseAnimation('.specialty-chip');
    }, 100);
  }
}