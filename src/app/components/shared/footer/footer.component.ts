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
    :host{--p:#00C9A7;--s:#00BFA6;--a:#20E3C7;--bg:#FFF;--bg2:#F8FFFE;--dark:#2A2A2A;--txt:#2D3748;--txt2:#718096;--light:#FFF;--brd:#E2E8F0;--grad:linear-gradient(135deg,var(--p) 0%,var(--s) 100%);--grad2:linear-gradient(135deg,rgba(0,201,167,.1) 0%,rgba(0,191,166,.1) 100%)}

    .footer{background:var(--dark);color:var(--light);margin-top:auto}
    .footer-content{position:relative;overflow:hidden}

    .container{max-width:1200px;margin:0 auto;padding:0 2rem;position:relative;z-index:1}
    .footer-main{display:grid;grid-template-columns:2fr 1fr 1fr 1.5fr;gap:3rem;padding:4rem 0 2rem}
    .footer-brand{display:flex;flex-direction:column;gap:1.5rem}
    .brand-icon{width:60px;height:60px;background:var(--grad);border-radius:15px;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 25px rgba(0,201,167,.3)}
    .icon-text{color:var(--light);font-weight:700;font-size:1.5rem;letter-spacing:-.02em}
    .brand-info{flex:1}
    .brand-name{font-size:1.5rem;font-weight:700;color:var(--light);margin:0 0 .5rem 0}
    .brand-title{font-size:1rem;color:var(--p);font-weight:600;margin:0 0 1rem 0}
    .brand-description{font-size:.95rem;color:rgba(255,255,255,.7);line-height:1.6;margin:0}

    .footer-section{display:flex;flex-direction:column;gap:1.5rem}
    .section-title{font-size:1.1rem;font-weight:600;color:var(--light);margin:0;padding-bottom:.5rem;border-bottom:2px solid var(--p);display:inline-block}
    .footer-nav{display:flex;flex-direction:column;gap:.75rem}
    .footer-link{color:rgba(255,255,255,.7);text-decoration:none;font-size:.95rem;transition:all .3s ease;padding:.25rem 0}
    .footer-link:hover{color:var(--p);text-decoration:none;padding-left:.5rem}

    .expertise-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.75rem}
    .expertise-list li{color:rgba(255,255,255,.7);font-size:.95rem;position:relative;padding-left:1rem;transition:color .3s ease}
    .expertise-list li::before{content:'▸';color:var(--p);position:absolute;left:0;font-weight:bold}
    .expertise-list li:hover{color:var(--light)}

    .contact-info{display:flex;flex-direction:column;gap:1rem;margin-bottom:1.5rem}
    .contact-item{display:flex;align-items:center;gap:.75rem;color:rgba(255,255,255,.7);font-size:.95rem}
    .contact-item mat-icon{color:var(--p);font-size:1.2rem;width:1.2rem;height:1.2rem}
    .social-links{display:flex;gap:1rem}
    .social-link{width:45px;height:45px;background:rgba(255,255,255,.1);border:1px solid rgba(0,201,167,.3);border-radius:12px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.7);text-decoration:none;transition:all .3s ease}
    .social-link:hover{background:var(--p);border-color:var(--p);color:var(--light);transform:translateY(-2px);box-shadow:0 8px 25px rgba(0,201,167,.4)}
    .social-link.whatsapp:hover{background:#25d366;border-color:#25d366}
    .social-link mat-icon{font-size:1.2rem;width:1.2rem;height:1.2rem}

    .footer-bottom{border-top:1px solid rgba(255,255,255,.1);padding:2rem 0;margin-top:2rem}
    .footer-bottom-content{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem}
    .copyright p{color:rgba(255,255,255,.6);font-size:.9rem;margin:0}
    .footer-meta{display:flex;gap:2rem;align-items:center}
    .built-with,.location{color:rgba(255,255,255,.6);font-size:.85rem}
    .location{display:flex;align-items:center;gap:.5rem}

    @media (max-width:1024px){.footer-main{grid-template-columns:1fr 1fr;gap:2rem}.footer-brand{grid-column:span 2}}
    @media (max-width:768px){.footer-main{grid-template-columns:1fr;gap:2rem;padding:3rem 0 2rem}.footer-brand{grid-column:span 1}.footer-bottom-content{flex-direction:column;text-align:center;gap:1rem}.footer-meta{flex-direction:column;gap:.5rem}.social-links{justify-content:center}.container{padding:0 1rem}}
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}