import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, 
    MatIconModule,
    NavbarComponent,
    FooterComponent
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
                  <p>franciscoperezc&#64;gmail.com</p>
                </div>
              </div>
              
              <div class="contact-method">
                <mat-icon class="contact-icon">phone</mat-icon>
                <div class="contact-details">
                  <h4>Phone</h4>
                  <p>+52 55 18 35 52 87</p>
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

            <!-- Location Map -->
            <div class="location-section">
              <h3>My Location</h3>
              <div class="map-container">
                <div class="location-card">
                  <div class="location-info">
                    <div class="location-header">
                      <mat-icon class="location-icon">place</mat-icon>
                      <div class="location-text">
                        <h4>Mexico City, Mexico</h4>
                        <p>Available for remote collaboration worldwide</p>
                      </div>
                    </div>
                    <div class="location-stats">
                      <div class="stat-item">
                        <mat-icon>schedule</mat-icon>
                        <span>GMT-6 (CST)</span>
                      </div>
                      <div class="stat-item">
                        <mat-icon>language</mat-icon>
                        <span>Spanish & English</span>
                      </div>
                    </div>
                  </div>
                  <div class="interactive-map">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5346326853073!2d-99.16440732580765!3d19.432607881837243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f96c2b0b7e19%3A0x7d1bd38e6f8b9a9e!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1729875600000!5m2!1sen!2sus"
                      loading="lazy" 
                      referrerpolicy="no-referrer-when-downgrade"
                      title="Mexico City Location">
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- WhatsApp Floating Button -->
    <a href="https://wa.me/525518355287" target="_blank" class="whatsapp-float" title="Chat on WhatsApp">
      <mat-icon>message</mat-icon>
    </a>

    <app-footer></app-footer>
  `,
  styles: [`
    :host{--p:#00C9A7;--s:#00BFA6;--a:#20E3C7;--bg:#FFF;--bg2:#F8FFFE;--txt:#2D3748;--txt2:#718096;--brd:#E2E8F0}
    .hero-section{background:var(--grad2);min-height:40vh;display:flex;align-items:center;position:relative;overflow:hidden}
    .container{max-width:1200px;margin:0 auto;padding:0 2rem}
    .page-title{font-size:2.5rem;font-weight:700;color:var(--txt);text-align:center;margin-bottom:1rem}
    .gradient-text{background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .page-subtitle{font-size:1.2rem;color:var(--txt2);text-align:center;margin-bottom:2rem}
    .content-section{padding:4rem 0;background:var(--bg)}
    .contact-content{display:flex;justify-content:center;align-items:center}
    .contact-info{max-width:800px;width:100%}
    .contact-info h2{color:var(--txt);font-weight:700;margin-bottom:1.5rem;font-size:2rem}
    .intro-text{color:var(--txt2);line-height:1.8;margin-bottom:2.5rem;font-size:1.1rem}
    .contact-methods{margin-bottom:3rem}
    .contact-method{display:flex;align-items:center;gap:1rem;margin-bottom:2rem;padding:1.5rem;background:var(--bg);border-radius:12px;box-shadow:0 10px 30px rgba(0,201,167,.1);border:1px solid var(--brd);transition:all .3s ease}
    .contact-method:hover{transform:translateY(-3px);box-shadow:0 15px 40px rgba(0,201,167,.15);border-color:var(--p)}
    .contact-icon{color:var(--p);font-size:2rem;width:2rem;height:2rem}
    .contact-details h4{color:var(--txt);margin:0 0 .5rem 0;font-weight:600}
    .contact-details p{color:var(--txt2);margin:0}
    .cv-section{margin-bottom:3rem}
    .cv-section h3,.social-section h3,.expertise-section h3,.location-section h3{color:var(--txt);font-weight:600;margin-bottom:1.5rem;font-size:1.3rem}
    .cv-download-card{background:var(--bg);border-radius:15px;padding:1.5rem;box-shadow:0 10px 30px rgba(0,201,167,.1);border:1px solid var(--brd);transition:all .3s ease;display:flex;justify-content:space-between;align-items:center;gap:1rem}
    .cv-download-card:hover{transform:translateY(-3px);box-shadow:0 15px 40px rgba(0,201,167,.15);border-color:var(--p)}
    .cv-info{display:flex;align-items:center;gap:1rem;flex:1}
    .cv-icon{width:60px;height:60px;background:var(--grad2);border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
    .cv-icon mat-icon{font-size:2rem;width:2rem;height:2rem;color:var(--p)}
    .cv-details h4{color:var(--txt);font-size:1.1rem;font-weight:600;margin:0 0 .5rem 0;line-height:1.3}
    .cv-details p{color:var(--txt2);font-size:.95rem;line-height:1.5;margin:0 0 .75rem 0}
    .cv-meta{display:flex;gap:1rem;align-items:center}
    .file-type{background:rgba(220,53,69,.1);color:#dc3545;padding:.25rem .5rem;border-radius:4px;font-size:.75rem;font-weight:600;text-transform:uppercase}
    .file-updated{color:var(--txt2);font-size:.85rem}
    .cv-download-btn{display:flex;align-items:center;gap:.5rem;padding:.75rem 1.5rem;background:var(--grad);color:#FFF;text-decoration:none;border-radius:8px;font-weight:600;font-size:.95rem;box-shadow:0 4px 15px rgba(0,201,167,.3);transition:all .3s ease;flex-shrink:0}
    .cv-download-btn:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(0,201,167,.4);text-decoration:none;color:#FFF}
    .cv-download-btn mat-icon{font-size:1rem;width:1rem;height:1rem}
    .social-links{display:flex;gap:1rem;margin-bottom:3rem}
    .social-link{display:flex;align-items:center;gap:.5rem;padding:.75rem 1.5rem;background:var(--bg);border-radius:25px;text-decoration:none;color:var(--txt);border:1px solid var(--brd);box-shadow:0 3px 10px rgba(0,201,167,.1);transition:all .3s ease;font-weight:500}
    .social-link:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(0,201,167,.15);border-color:var(--p)}
    .social-link.linkedin:hover{background:#007;color:#FFF;border-color:#007}
    .social-link.twitter:hover{background:#1da;color:#FFF;border-color:#1da}
    .social-link.github:hover{background:#222;color:#FFF;border-color:#222}
    .expertise-list{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
    .expertise-item{display:flex;align-items:center;gap:.75rem;padding:1rem;background:var(--grad2);border-radius:8px;color:var(--txt);font-weight:500;border:1px solid var(--brd);transition:all .3s ease}
    .expertise-item:hover{border-color:var(--p);transform:translateY(-1px)}
    .expertise-item mat-icon{color:var(--p)}
    .location-section{margin-bottom:2rem}
    .location-card{background:var(--bg);border-radius:20px;overflow:hidden;box-shadow:0 15px 40px rgba(0,201,167,.1);border:1px solid var(--brd);transition:all .3s ease}
    .location-card:hover{transform:translateY(-3px);box-shadow:0 20px 50px rgba(0,201,167,.15);border-color:var(--p)}
    .location-info{padding:2rem;background:var(--grad2)}
    .location-header{display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem}
    .location-icon{color:var(--p);font-size:2rem;width:2rem;height:2rem}
    .location-text h4{color:var(--txt);font-size:1.2rem;font-weight:600;margin:0 0 .25rem 0}
    .location-text p{color:var(--txt2);margin:0;font-size:.95rem}
    .location-stats{display:flex;gap:2rem}
    .stat-item{display:flex;align-items:center;gap:.5rem;color:var(--txt2);font-size:.9rem}
    .stat-item mat-icon{color:var(--p);font-size:1.2rem;width:1.2rem;height:1.2rem}
    .interactive-map{height:250px;position:relative}
    .interactive-map iframe{width:100%;height:100%;border:none;filter:grayscale(20%) contrast(1.1);transition:filter .3s ease}
    .interactive-map:hover iframe{filter:grayscale(0%) contrast(1.2)}
    .whatsapp-float{position:fixed;bottom:20px;right:20px;width:60px;height:60px;background:linear-gradient(135deg,#25d366 0%,#128c7e 100%);border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 25px rgba(37,211,102,.3);transition:all .3s ease;z-index:1000;text-decoration:none;animation:whatsapp-pulse 2s infinite}
    .whatsapp-float:hover{transform:translateY(-3px) scale(1.05);box-shadow:0 12px 35px rgba(37,211,102,.4);text-decoration:none}
    .whatsapp-float mat-icon{color:white;font-size:1.8rem;width:1.8rem;height:1.8rem}
    @keyframes whatsapp-pulse{0%{box-shadow:0 8px 25px rgba(37,211,102,.3)}50%{box-shadow:0 8px 25px rgba(37,211,102,.5),0 0 0 10px rgba(37,211,102,.1)}100%{box-shadow:0 8px 25px rgba(37,211,102,.3)}}
    @media (max-width:768px){.page-title{font-size:2rem}.location-stats{flex-direction:column;gap:1rem}.cv-download-card{flex-direction:column;text-align:center;gap:1.5rem;padding:1.5rem 1rem}.cv-info{flex-direction:column;text-align:center;gap:1rem;width:100%}.cv-icon{width:50px;height:50px;align-self:center}.cv-details{width:100%}.cv-details h4{font-size:1rem;line-height:1.4}.cv-details p{font-size:.9rem;line-height:1.4}.cv-meta{justify-content:center;flex-wrap:wrap;gap:.5rem 1rem}.cv-download-btn{width:100%;justify-content:center;padding:1rem;font-size:1rem}.social-links{flex-direction:column;gap:.75rem}.social-link{justify-content:center;padding:1rem}.expertise-list{grid-template-columns:1fr}.expertise-item{padding:1rem .75rem}.contact-method{padding:1rem;flex-direction:column;text-align:center;gap:.75rem}.contact-icon{align-self:center}.interactive-map{height:200px}.location-info{padding:1.5rem}.content-section{padding:2rem 0}.container{padding:0 1rem}.whatsapp-float{width:55px;height:55px;bottom:15px;right:15px}.whatsapp-float mat-icon{font-size:1.6rem;width:1.6rem;height:1.6rem}}
  `]
})
export class ContactComponent {
}