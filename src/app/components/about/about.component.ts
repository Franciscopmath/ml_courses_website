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
                    Senior Expert Data Scientist with over 10 years of combined experience bridging 
                    the gap between theoretical knowledge and practical solutions in both industry and academia.
                  </p>
                  <p>
                    My expertise spans retail analytics, computer vision, and machine learning applications. 
                    I've successfully led transformative projects including national pricing optimization 
                    initiatives using IBM Cloud Pak for Data, delivering measurable impact with profitability 
                    improvements of 5-20%.
                  </p>
                  <p>
                    My academic foundation includes a PhD in Mathematics from UNAM, where I also served as 
                    a professor teaching courses in probability, statistics, and mathematical analysis. 
                    This unique combination of academic rigor and industry experience enables me to tackle 
                    complex data science challenges with both theoretical depth and practical insight.
                  </p>
                </div>
                
                <div class="specializations">
                  <mat-card class="info-card">
                    <mat-card-header>
                      <mat-card-title>Specializations</mat-card-title>
                    </mat-card-header>
                    <mat-card-content>
                      <ul>
                        <li>Machine Learning & Deep Learning</li>
                        <li>Computer Vision & Image Processing</li>
                        <li>Pricing Optimization & Forecasting</li>
                        <li>Statistical Analysis & Modeling</li>
                      </ul>
                    </mat-card-content>
                  </mat-card>
                  
                  <mat-card class="info-card">
                    <mat-card-header>
                      <mat-card-title>Industries</mat-card-title>
                    </mat-card-header>
                    <mat-card-content>
                      <ul>
                        <li>Retail & E-commerce</li>
                        <li>Fashion & Apparel</li>
                        <li>Government & Public Sector</li>
                        <li>Academia & Research</li>
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
                      <mat-chip>Image Segmentation</mat-chip>
                      <mat-chip>Facial Recognition</mat-chip>
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
                      <mat-chip>IBM Cloud Pak for Data</mat-chip>
                      <mat-chip>Azure Data Studio</mat-chip>
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
                    <p><strong>Expected Graduation:</strong> August 2024</p>
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
                    <p><strong>Expected Graduation:</strong> August 2024</p>
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
                    Adaptability, Creativity, Solution-Oriented, Affable, Teamwork.</p>
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

    .hero-section{background:var(--grad2);min-height:40vh;display:flex;align-items:center;position:relative;overflow:hidden}

    .container{max-width:1200px;margin:0 auto;padding:0 2rem}
    .page-title{font-size:2.5rem;font-weight:700;color:var(--txt);text-align:center;margin-bottom:1rem}
    .gradient-text{background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .page-subtitle{font-size:1.2rem;color:var(--txt2);text-align:center;margin-bottom:2rem}
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

    @media (max-width:768px){.overview-grid{grid-template-columns:1fr;gap:2rem}.skills-grid{grid-template-columns:1fr}.tab-content{padding:2rem 1rem}.page-title{font-size:2rem}}
  `]
})
export class AboutComponent {}