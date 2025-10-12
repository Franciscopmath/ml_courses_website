import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatIconModule, MatTabsModule, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    
    <div class="hero-section">
      <div class="container">
        <h1 class="page-title">About <span class="gradient-text">Francisco Perez</span></h1>
        <p class="page-subtitle">Senior Data Scientist & Machine Learning Expert</p>
      </div>
    </div>

    <div class="content-section">
      <div class="container">
        <mat-tab-group mat-align-tabs="center" class="main-tabs">
          
          <!-- Overview Tab -->
          <mat-tab label="Overview">
            <div class="tab-content">
              <div class="overview-grid">
                <div class="bio-section">
                  <h2>About Me</h2>
                  <p class="lead">
                    Senior Data Scientist with over 7 years of experience applying machine learning algorithms to solve
                    complex business problems, coupled with more than 10 years of academic expertise.
                  </p>
                  <p>
                    I have a proven track record leading end-to-end data science initiatives across retail and consulting
                    sectors, with deep expertise in forecasting, pricing optimization, and strategic modeling. I'm specialized
                    in time series forecasting and ensemble methods for demand prediction, comfortable translating analytical
                    insights into actionable business decisions.
                  </p>
                  <p>
                    My commitment to driving transformative change has led me to contribute significantly to various projects,
                    including advanced forecasting systems, process automation with computer vision, and visual search. Currently,
                    I'm working as a Senior Data Scientist Consultant at Axity for Walmart México, developing automated forecasting
                    systems using ensemble methods.
                  </p>
                </div>
                
                <div class="specializations">
                  <mat-card class="info-card">
                    <mat-card-header>
                      <mat-card-title>Specializations</mat-card-title>
                    </mat-card-header>
                    <mat-card-content>
                      <ul>
                        <li>Time Series Forecasting & Ensemble Methods</li>
                        <li>Machine Learning & Deep Learning</li>
                        <li>Computer Vision & Image Processing</li>
                        <li>Pricing Optimization & Strategic Modeling</li>
                      </ul>
                    </mat-card-content>
                  </mat-card>
                  
                  <mat-card class="info-card">
                    <mat-card-header>
                      <mat-card-title>Industries</mat-card-title>
                    </mat-card-header>
                    <mat-card-content>
                      <ul>
                        <li>Retail & E-commerce (Walmart, Coppel)</li>
                        <li>Consulting (Axity)</li>
                        <li>Government & Public Sector</li>
                        <li>Academia & Research (UNAM)</li>
                      </ul>
                    </mat-card-content>
                  </mat-card>
                </div>
              </div>
            </div>
          </mat-tab>

          <!-- Technical Skills Tab -->
          <mat-tab label="Technical Skills">
            <div class="tab-content">
              <div class="skills-grid">
                
                <mat-card class="skill-category">
                  <mat-card-header>
                    <mat-icon mat-card-avatar>psychology</mat-icon>
                    <mat-card-title>Machine Learning Frameworks</mat-card-title>
                  </mat-card-header>
                  <mat-card-content>
                    <mat-chip-set>
                      <mat-chip>NumPy</mat-chip>
                      <mat-chip>Pandas</mat-chip>
                      <mat-chip>Scikit-Learn</mat-chip>
                      <mat-chip>Keras</mat-chip>
                      <mat-chip>TensorFlow</mat-chip>
                      <mat-chip>PyTorch</mat-chip>
                      <mat-chip>OpenCV</mat-chip>
                    </mat-chip-set>
                  </mat-card-content>
                </mat-card>

                <mat-card class="skill-category">
                  <mat-card-header>
                    <mat-icon mat-card-avatar>code</mat-icon>
                    <mat-card-title>Programming Languages</mat-card-title>
                  </mat-card-header>
                  <mat-card-content>
                    <mat-chip-set>
                      <mat-chip>Python</mat-chip>
                      <mat-chip>R</mat-chip>
                      <mat-chip>SQL</mat-chip>
                      <mat-chip>Fortran</mat-chip>
                      <mat-chip>C#</mat-chip>
                      <mat-chip>Matlab</mat-chip>
                    </mat-chip-set>
                  </mat-card-content>
                </mat-card>

                <mat-card class="skill-category">
                  <mat-card-header>
                    <mat-icon mat-card-avatar>visibility</mat-icon>
                    <mat-card-title>Computer Vision</mat-card-title>
                  </mat-card-header>
                  <mat-card-content>
                    <mat-chip-set>
                      <mat-chip>Object Detection</mat-chip>
                      <mat-chip>Semantic Segmentation</mat-chip>
                      <mat-chip>Facial Recognition</mat-chip>
                      <mat-chip>Image Similarity</mat-chip>
                      <mat-chip>Transfer Learning</mat-chip>
                    </mat-chip-set>
                  </mat-card-content>
                </mat-card>

                <mat-card class="skill-category">
                  <mat-card-header>
                    <mat-icon mat-card-avatar>cloud</mat-icon>
                    <mat-card-title>Cloud Platforms</mat-card-title>
                  </mat-card-header>
                  <mat-card-content>
                    <mat-chip-set>
                      <mat-chip>Google Cloud Platform</mat-chip>
                      <mat-chip>IBM Cloud Paks</mat-chip>
                      <mat-chip>BigQuery</mat-chip>
                      <mat-chip>Docker</mat-chip>
                    </mat-chip-set>
                  </mat-card-content>
                </mat-card>

                <mat-card class="skill-category">
                  <mat-card-header>
                    <mat-icon mat-card-avatar>bar_chart</mat-icon>
                    <mat-card-title>Data Visualization</mat-card-title>
                  </mat-card-header>
                  <mat-card-content>
                    <mat-chip-set>
                      <mat-chip>Matplotlib</mat-chip>
                      <mat-chip>Seaborn</mat-chip>
                      <mat-chip>Plotly</mat-chip>
                    </mat-chip-set>
                  </mat-card-content>
                </mat-card>

                <mat-card class="skill-category">
                  <mat-card-header>
                    <mat-icon mat-card-avatar>storage</mat-icon>
                    <mat-card-title>Big Data Technologies</mat-card-title>
                  </mat-card-header>
                  <mat-card-content>
                    <mat-chip-set>
                      <mat-chip>PySpark</mat-chip>
                      <mat-chip>SQL Server</mat-chip>
                      <mat-chip>DBeaver</mat-chip>
                    </mat-chip-set>
                  </mat-card-content>
                </mat-card>

              </div>
            </div>
          </mat-tab>

          <!-- Education Tab -->
          <mat-tab label="Education">
            <div class="tab-content">
              <div class="education-timeline">
                
                <mat-card class="education-card">
                  <mat-card-header>
                    <mat-icon mat-card-avatar>school</mat-icon>
                    <mat-card-title>PhD in Mathematics</mat-card-title>
                    <mat-card-subtitle>National Autonomous University of Mexico (UNAM)</mat-card-subtitle>
                  </mat-card-header>
                  <mat-card-content>
                    <p><strong>Expected Graduation:</strong> August 2026</p>
                    <p><strong>Period:</strong> 2012-2017</p>
                  </mat-card-content>
                </mat-card>

                <mat-card class="education-card">
                  <mat-card-header>
                    <mat-icon mat-card-avatar>school</mat-icon>
                    <mat-card-title>M.S. in Mathematics</mat-card-title>
                    <mat-card-subtitle>National Autonomous University of Mexico (UNAM)</mat-card-subtitle>
                  </mat-card-header>
                  <mat-card-content>
                    <p><strong>Graduated:</strong> June 2012</p>
                    <p><strong>Period:</strong> 2010-2012</p>
                  </mat-card-content>
                </mat-card>

                <mat-card class="education-card">
                  <mat-card-header>
                    <mat-icon mat-card-avatar>school</mat-icon>
                    <mat-card-title>Bachelor of Mathematics</mat-card-title>
                    <mat-card-subtitle>National Autonomous University of Mexico (UNAM)</mat-card-subtitle>
                  </mat-card-header>
                  <mat-card-content>
                    <p><strong>Graduated:</strong> January 2010</p>
                    <p><strong>Period:</strong> 2006-2009</p>
                  </mat-card-content>
                </mat-card>

                <mat-card class="education-card">
                  <mat-card-header>
                    <mat-icon mat-card-avatar>school</mat-icon>
                    <mat-card-title>Bachelor of Actuarial Science</mat-card-title>
                    <mat-card-subtitle>National Autonomous University of Mexico (UNAM)</mat-card-subtitle>
                  </mat-card-header>
                  <mat-card-content>
                    <p><strong>Expected Graduation:</strong> August 2026</p>
                    <p><strong>Period:</strong> 2005-2007</p>
                  </mat-card-content>
                </mat-card>

              </div>
            </div>
          </mat-tab>

          <!-- Additional Info Tab -->
          <mat-tab label="Additional Info">
            <div class="tab-content">
              <div class="additional-grid">
                
                <mat-card class="info-card">
                  <mat-card-header>
                    <mat-icon mat-card-avatar>star</mat-icon>
                    <mat-card-title>General Skills</mat-card-title>
                  </mat-card-header>
                  <mat-card-content>
                    <p>Collaborative Team Player, Problem Solving, Effective Communication,
                    Adaptability, Creativity, Solution-Oriented, Teamwork, Analytical Thinking,
                    Innovation, Cross-Functional Collaboration.</p>
                  </mat-card-content>
                </mat-card>

                <mat-card class="info-card">
                  <mat-card-header>
                    <mat-icon mat-card-avatar>translate</mat-icon>
                    <mat-card-title>Languages</mat-card-title>
                  </mat-card-header>
                  <mat-card-content>
                    <p><strong>English:</strong> Fluent</p>
                    <p><strong>Spanish:</strong> Native</p>
                  </mat-card-content>
                </mat-card>

                <mat-card class="info-card">
                  <mat-card-header>
                    <mat-icon mat-card-avatar>interests</mat-icon>
                    <mat-card-title>Interests</mat-card-title>
                  </mat-card-header>
                  <mat-card-content>
                    <ul>
                      <li>Exploring emerging trends in AI, machine learning, and automotive technology</li>
                      <li>Contributing to open-source data science projects</li>
                      <li>Advanced forecasting methodologies and time series analysis</li>
                    </ul>
                  </mat-card-content>
                </mat-card>

                <mat-card class="info-card">
                  <mat-card-header>
                    <mat-icon mat-card-avatar>record_voice_over</mat-icon>
                    <mat-card-title>Lectures</mat-card-title>
                  </mat-card-header>
                  <mat-card-content>
                    <p><strong>DÉCIMA SEMANA INTERNACIONAL DE LA ESTADÍSTICA Y LA PROBABILIDAD</strong><br>
                    "Reconstrucción booleana de materiales porosos" - Puebla, June 2017</p>
                    
                    <p><strong>XLII CONGRESO NACIONAL DE LA SOCIEDAD MATEMÁTICA</strong><br>
                    "Una aplicación de la Teoría Ergódica en la búsqueda de Google" - Zacatecas, October 2017</p>
                  </mat-card-content>
                </mat-card>

              </div>
            </div>
          </mat-tab>

        </mat-tab-group>
      </div>
    </div>

    <app-footer></app-footer>
  `,
  styles: [`
    :host{--p:#00C9A7;--s:#00BFA6;--a:#20E3C7;--bg:#FFF;--bg2:#F8FFFE;--dark:#2A2A2A;--txt:#2D3748;--txt2:#718096;--light:#FFF;--brd:#E2E8F0;--grad:linear-gradient(135deg,var(--p) 0%,var(--s) 100%);--grad2:linear-gradient(135deg,rgba(0,201,167,.1) 0%,rgba(0,191,166,.1) 100%)}

    .hero-section{background:linear-gradient(135deg, var(--p) 0%, var(--s) 50%, var(--a) 100%);min-height:50vh;display:flex;align-items:center;position:relative;overflow:hidden}
    .hero-section::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:radial-gradient(circle at 20% 80%, rgba(32,227,199,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,191,166,0.15) 0%, transparent 50%);pointer-events:none}
    .hero-section::after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);animation:shine 3s infinite}
    @keyframes shine{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}
    @keyframes glow{0%{text-shadow:0 0 30px rgba(255,255,255,0.5)}100%{text-shadow:0 0 40px rgba(255,255,255,0.8), 0 0 60px rgba(32,227,199,0.3)}}

    .container{max-width:1200px;margin:0 auto;padding:0 2rem;position:relative;z-index:1}
    .page-title{font-size:3.2rem;font-weight:800;color:var(--light);text-align:center;margin-bottom:1.5rem;text-shadow:0 4px 12px rgba(0,0,0,0.2);letter-spacing:-0.02em}
    .gradient-text{background:linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.8) 50%, #ffffff 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;text-shadow:0 0 30px rgba(255,255,255,0.5);animation:glow 2s ease-in-out infinite alternate}
    .page-subtitle{font-size:1.4rem;color:rgba(255,255,255,0.9);text-align:center;margin-bottom:3rem;font-weight:400;text-shadow:0 2px 8px rgba(0,0,0,0.1);line-height:1.6}
    .content-section{padding:4rem 0;background:var(--bg)}

    .main-tabs{background:var(--bg);border-radius:15px;box-shadow:0 10px 30px rgba(0,201,167,.1);border:1px solid var(--brd);overflow:hidden}
    .main-tabs:hover{box-shadow:0 15px 40px rgba(0,201,167,.15)}
    .tab-content{padding:3rem 2rem}
    .overview-grid{display:grid;grid-template-columns:2fr 1fr;gap:3rem}
    .bio-section h2{color:var(--txt);font-weight:700;margin-bottom:1.5rem}
    .lead{font-size:1.2rem;font-weight:500;color:var(--txt);margin-bottom:1.5rem}
    .bio-section p{line-height:1.8;color:var(--txt2);margin-bottom:1.5rem}
    .specializations{display:flex;flex-direction:column;gap:1.5rem}

    .info-card{border-radius:15px;box-shadow:0 10px 30px rgba(0,201,167,.1);border:1px solid var(--brd);transition:all .3s ease;background:var(--bg)}
    .info-card:hover{transform:translateY(-5px);box-shadow:0 15px 40px rgba(0,201,167,.15);border-color:var(--p)}
    .info-card ul{list-style:none;padding:0}
    .info-card li{padding:.5rem 0;border-bottom:1px solid var(--brd);position:relative;padding-left:1.5rem;color:var(--txt2)}
    .info-card li:last-child{border-bottom:none}
    .info-card li::before{content:'•';color:var(--p);font-weight:bold;position:absolute;left:0}

    .skills-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:2rem}
    .skill-category{border-radius:15px;box-shadow:0 10px 30px rgba(0,201,167,.1);border:1px solid var(--brd);transition:all .3s ease;position:relative;overflow:hidden;background:var(--bg)}
    .skill-category:hover{transform:translateY(-5px);box-shadow:0 15px 40px rgba(0,201,167,.15);border-color:var(--p)}
    .skill-category::before{content:'';position:absolute;top:0;left:0;width:100%;height:4px;background:var(--grad)}
    .skill-category mat-chip{margin:.25rem;background:var(--grad2);color:var(--txt);border:1px solid rgba(0,201,167,.2);transition:all .3s ease}
    .skill-category mat-chip:hover{background:var(--p);color:var(--light);border-color:var(--p)}

    .education-timeline{display:flex;flex-direction:column;gap:2rem}
    .education-card{border-radius:15px;box-shadow:0 10px 30px rgba(0,201,167,.1);border:1px solid var(--brd);transition:all .3s ease;position:relative;overflow:hidden;background:var(--bg)}
    .education-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--grad)}
    .education-card:hover{transform:translateY(-5px);box-shadow:0 15px 40px rgba(0,201,167,.15);border-color:var(--p)}
    .additional-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem}

    @media (max-width:768px){.overview-grid{grid-template-columns:1fr;gap:2rem}.skills-grid{grid-template-columns:1fr}.tab-content{padding:2rem 1rem}.page-title{font-size:2.2rem}}
  `]
})
export class AboutComponent {}