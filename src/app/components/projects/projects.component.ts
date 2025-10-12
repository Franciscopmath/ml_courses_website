import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  impacts: string[];
  keyFeatures: string;
  duration?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    MatCardModule, 
    MatChipsModule, 
    MatButtonModule, 
    MatIconModule, 
    MatButtonToggleModule,
    NavbarComponent,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    
    <div class="hero-section">
      <div class="container">
        <h1 class="page-title">My <span class="gradient-text">Projects</span></h1>
        <p class="page-subtitle">Data Science & Machine Learning Solutions</p>
      </div>
    </div>

    <div class="content-section">
      <div class="container">
        
        <!-- Filter Buttons -->
        <div class="filter-section">
          <mat-button-toggle-group 
            [(ngModel)]="selectedFilter" 
            (change)="filterProjects($event.value)"
            class="filter-group">
            <mat-button-toggle value="all">All Projects</mat-button-toggle>
            <mat-button-toggle value="ml">Machine Learning</mat-button-toggle>
            <mat-button-toggle value="pricing">Pricing</mat-button-toggle>
            <mat-button-toggle value="cv">Computer Vision</mat-button-toggle>
            <mat-button-toggle value="nlp">NLP</mat-button-toggle>
          </mat-button-toggle-group>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
          <mat-card 
            *ngFor="let project of filteredProjects" 
            class="project-card"
            [attr.data-category]="project.category">
            
            <mat-card-header>
              <div class="header-content">
                <mat-card-title class="project-title">{{project.title}}</mat-card-title>
                <div class="project-category-badge">{{getCategoryLabel(project.category)}}</div>
              </div>
            </mat-card-header>
            
            <mat-card-content class="card-content">
              <p class="project-description">{{project.description}}</p>
              
              <!-- Impact Badges -->
              <div class="impact-section" *ngIf="project.impacts.length > 0">
                <mat-chip-set>
                  <mat-chip *ngFor="let impact of project.impacts" class="impact-chip">
                    {{impact}}
                  </mat-chip>
                </mat-chip-set>
              </div>
              
              <!-- Technologies -->
              <div class="tech-section">
                <h4>Technologies Used:</h4>
                <mat-chip-set>
                  <mat-chip *ngFor="let tech of project.technologies" class="tech-chip">
                    {{tech}}
                  </mat-chip>
                </mat-chip-set>
              </div>
              
              <!-- Key Features -->
              <div class="features-section">
                <p><strong>Key Features:</strong> {{project.keyFeatures}}</p>
                <p *ngIf="project.duration"><strong>Duration:</strong> {{project.duration}}</p>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
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
    .filter-section{display:flex;justify-content:center;margin-bottom:3rem}
    .filter-group{background:var(--bg);border-radius:25px;box-shadow:0 10px 30px rgba(0,201,167,.1);border:1px solid var(--brd);overflow:hidden}
    .filter-group mat-button-toggle{border:none;padding:.75rem 1.5rem;font-weight:600;transition:all .3s ease;color:var(--txt)}
    .filter-group mat-button-toggle.mat-button-toggle-checked{background:var(--grad);color:var(--light)}
    .filter-group mat-button-toggle:hover:not(.mat-button-toggle-checked){background:var(--grad2);color:var(--p)}

    .projects-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));gap:2rem}
    .project-card{position:relative;border-radius:15px;box-shadow:0 10px 30px rgba(0,201,167,.1);border:1px solid var(--brd);transition:all .3s ease;overflow:hidden;margin-bottom:2rem;background:var(--bg)}
    .project-card::before{content:'';position:absolute;top:0;left:0;width:100%;height:5px;background:var(--grad)}
    .project-card:hover{transform:translateY(-5px);box-shadow:0 20px 50px rgba(0,201,167,.15);border-color:var(--p)}

    .header-content{display:flex;justify-content:space-between;align-items:flex-start;width:100%;gap:1rem}
    .project-category-badge{background:var(--grad);color:var(--light);padding:.5rem 1rem;border-radius:20px;font-size:.8rem;font-weight:600;white-space:nowrap;flex-shrink:0;align-self:flex-start;box-shadow:0 2px 8px rgba(0,201,167,.3)}
    .project-title{color:var(--txt);font-weight:700;font-size:1.2rem;margin:0;line-height:1.4;word-wrap:break-word;overflow-wrap:break-word;flex:1}
    .card-content{padding-top:1rem}
    .project-description{color:var(--txt2);line-height:1.6;margin-bottom:1.5rem;font-size:1rem}
    .impact-section{margin-bottom:1.5rem}

    .impact-chip{background:rgba(0,201,167,.1);color:var(--s);font-size:.85rem;font-weight:600;margin:.25rem;border:1px solid rgba(0,201,167,.2);transition:all .3s ease}
    .impact-chip:hover{background:var(--p);color:var(--light);border-color:var(--p)}
    .tech-section{margin-bottom:1.5rem}
    .tech-section h4{color:var(--txt);font-size:1rem;margin-bottom:.5rem;font-weight:600}
    .tech-chip{background:var(--grad2);color:var(--txt);font-size:.85rem;margin:.25rem;border:1px solid rgba(0,201,167,.15);transition:all .3s ease}
    .tech-chip:hover{background:var(--a);color:var(--light);border-color:var(--a)}
    .features-section p{color:var(--txt2);line-height:1.6;margin-bottom:.5rem}
    .features-section strong{color:var(--txt)}

    @media (max-width:768px){.projects-grid{grid-template-columns:1fr}.filter-group{flex-wrap:wrap}.header-content{flex-direction:column;align-items:flex-start;gap:.5rem}.project-category-badge{align-self:flex-start}.project-title{font-size:1.1rem}.content-section{padding:2rem 0}.container{padding:0 1rem}.page-title{font-size:2.2rem}}
  `]
})
export class ProjectsComponent implements OnInit {
  selectedFilter = 'all';
  filteredProjects: Project[] = [];
  
  projects: Project[] = [
    {
      id: 1,
      title: 'Automated Checkout Forecasting System for Walmart México',
      description: 'Leading data science efforts in a collaborative team to develop an automated forecasting system for Walmart México\'s checkout operations. The project leverages ensemble forecasting models combining ARIMA, SARIMA, Random Forest, XGBoost, and Prophet algorithms to predict demand for perishable goods.',
      category: 'ml',
      technologies: ['Python', 'Scikit-Learn', 'XGBoost', 'Prophet', 'Random Forest', 'ARIMA', 'SARIMA', 'GCP', 'BigQuery', 'GitHub'],
      impacts: ['Ensemble Methods', 'GCP Deployment', 'Team Collaboration'],
      keyFeatures: 'Achieved measurable improvement in forecasting accuracy for 8 out of 25 perishable product time series. Ensemble methods outperformed individual models.',
      duration: 'AUG 2025 - PRESENT'
    },
    {
      id: 2,
      title: 'MIT Collaboration: Furniture Pricing Optimization',
      description: 'Cutting-edge pricing optimization project in collaboration with MIT, targeting profitability improvements of 5-20% through strategic implementation of machine learning algorithms and web application deployment.',
      category: 'pricing,ml',
      technologies: ['NumPy', 'Pandas', 'Scikit-Learn', 'IBM Cloud Pack', 'IBM CPLEX', 'SQL'],
      impacts: ['5-20% Profitability Increase', 'National Scale Deployment'],
      keyFeatures: 'Web application deployment, time series analysis, forecasting models, optimization algorithms',
      duration: 'JAN 2022 - JUL 2025'
    },
    {
      id: 3,
      title: 'Advanced Clothing Pricing with Neural Networks',
      description: 'Developed cutting-edge pricing models using Feedforward Neural Networks (FNN) and LSTM networks, incorporating Time Series Clustering for demand analysis across national clothing markets.',
      category: 'pricing,ml',
      technologies: ['Keras', 'TensorFlow', 'Azure Data Studio', 'SQL Server', 'Matplotlib', 'Seaborn'],
      impacts: ['Neural Network Innovation', 'Time Series Clustering'],
      keyFeatures: 'LSTM networks, demand forecasting, unsupervised clustering, short-term forecasting',
      duration: 'JAN 2022 - JUL 2025'
    },
    {
      id: 4,
      title: 'Motorcycle Agency Expansion Prediction',
      description: 'Spearheaded predictive modeling initiative to guide expansion strategy targeting 542 localities by 2030. Built and validated machine learning models using 117-119 locality-level variables from multiple data sources.',
      category: 'ml',
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'SQL', 'INEGI Data', 'Geo Data'],
      impacts: ['542 Locations Analyzed', '2030 Strategic Planning'],
      keyFeatures: 'Feature engineering, external data integration, ranking algorithms, sales prediction models',
      duration: 'JAN 2022 - JUL 2025'
    },
    {
      id: 5,
      title: 'CV-Driven Process Automation',
      description: 'Led conceptualization and execution of Computer Vision automation system using transfer learning with MobileNet network, integrated into API for bot automation.',
      category: 'cv',
      technologies: ['TensorFlow', 'PyTorch', 'OpenCV', 'MobileNet', 'SCRUM'],
      impacts: ['Process Automation', 'API Integration'],
      keyFeatures: 'Transfer learning, image classification, automated workflows, API development',
      duration: 'JAN 2022 - JUL 2025'
    },
    {
      id: 6,
      title: 'Facial Expression Recognition for Retail',
      description: 'Developed FER model for in-store customer analysis using transfer learning with Xception and Inception architectures to understand customer reactions and emotions.',
      category: 'cv',
      technologies: ['TensorFlow', 'PyTorch', 'OpenCV', 'Xception', 'Inception', 'Google Colab'],
      impacts: ['Customer Analysis', 'Emotion Recognition'],
      keyFeatures: 'Transfer learning, emotion classification, retail analytics, real-time processing',
      duration: 'JAN 2022 - JUL 2025'
    },
    {
      id: 7,
      title: 'Visual Search on Google Cloud Platform',
      description: 'Led team of 4 in creating visual search demo leveraging Google Cloud Platform with object detection and semantic segmentation capabilities.',
      category: 'cv',
      technologies: ['GCP', 'Docker', 'TensorFlow', 'PyTorch', 'Flask', 'Git', 'Linux'],
      impacts: ['Team Leadership', 'Cloud Deployment'],
      keyFeatures: 'Object detection, semantic segmentation, cloud repositories, scalable deployment',
      duration: 'JAN 2022 - JUL 2025'
    },
    {
      id: 8,
      title: 'Federal Justice Text Classification',
      description: 'Led development of sophisticated NLP model for "National Census of Federal Justice Impartation" to pre-classify federal offenses using natural language processing techniques.',
      category: 'nlp',
      technologies: ['NLP', 'Machine Learning', 'Text Classification', 'Feature Engineering', 'Microsoft SQL Server'],
      impacts: ['National Census', 'Legal AI'],
      keyFeatures: 'Legal text analysis, offense classification, feature engineering, automated processing',
      duration: 'NOV 2017 - DEC 2021'
    },
    {
      id: 9,
      title: 'Time Series Clustering for Judicial Statistics',
      description: 'Implemented innovative unsupervised clustering algorithm for strategic human resource allocation based on time-series patterns in judicial data.',
      category: 'ml',
      technologies: ['SPSS', 'R', 'Hierarchical Clustering', 'Time Series Analysis', 'Microsoft Office'],
      impacts: ['Resource Optimization', 'Statistical Innovation'],
      keyFeatures: 'Unsupervised learning, hierarchical clustering, pattern recognition, resource allocation',
      duration: 'NOV 2017 - DEC 2021'
    },
    {
      id: 10,
      title: 'National Queue Management System',
      description: 'Enhanced queue management for retail stores nationwide using clustering algorithms and queueing theory to optimize customer flow dynamics and create performance KPIs.',
      category: 'ml',
      technologies: ['NumPy', 'Pandas', 'Scikit-Learn', 'Queueing Theory', 'Jupyter Notebook', 'DBeaver'],
      impacts: ['National Scale', 'Customer Flow Optimization'],
      keyFeatures: 'Store clustering, KPI development, queueing optimization, national implementation',
      duration: 'JAN 2022 - JUL 2025'
    },
    {
      id: 11,
      title: 'Pagerank-Based Personalized Recommendations',
      description: 'Developed algorithm delivering personalized recommendations using Pagerank principles with multiprocessing for scalable execution and rapid response times.',
      category: 'ml',
      technologies: ['PySpark', 'Pagerank Algorithm', 'Multiprocessing', 'Big Data'],
      impacts: ['Personalization', 'Scalable Architecture'],
      keyFeatures: 'Graph algorithms, parallel processing, personalization engine, big data handling',
      duration: 'JAN 2022 - JUL 2025'
    },
    {
      id: 12,
      title: 'Apolonio v1: Mathematical Visualization Tool',
      description: 'Developed graphical interface for teaching generalizations of geometric curves (circle, ellipse, parabola, hyperbola) for the Laboratory of Scientific Computation at UNAM.',
      category: 'academic',
      technologies: ['Matlab', 'Mathematical Visualization', 'GUI Development', 'Educational Technology'],
      impacts: ['Educational Innovation', 'UNAM Research'],
      keyFeatures: 'Interactive visualization, mathematical education, curve generation, academic research tool',
      duration: 'JAN 2007 - DEC 2010'
    }
  ];

  ngOnInit() {
    this.filteredProjects = this.projects;
  }

  filterProjects(filter: string) {
    this.selectedFilter = filter;
    if (filter === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => 
        project.category.includes(filter)
      );
    }
  }

  getCategoryLabel(category: string): string {
    const categoryMap: {[key: string]: string} = {
      'pricing,ml': 'Pricing Optimization',
      'ml': 'Machine Learning',
      'cv': 'Computer Vision',
      'nlp': 'NLP',
      'academic': 'Academic Research'
    };
    
    return categoryMap[category] || 'Machine Learning';
  }
}