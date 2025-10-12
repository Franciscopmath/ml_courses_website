import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';

interface WorkExperience {
  id: number;
  company: string;
  role: string;
  location: string;
  period: string;
  startDate: Date;
  description: string;
  achievements: string[];
  technologies: string[];
  category: 'current' | 'past' | 'academic';
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss'
})
export class Timeline {
  experiences: WorkExperience[] = [
    {
      id: 1,
      company: 'Axity (Client: Walmart México)',
      role: 'Senior Data Scientist, Consultant',
      location: 'CDMX',
      period: 'AUG 2025 - PRESENT',
      startDate: new Date(2025, 7),
      description: 'Leading data science efforts in a collaborative team of 5 to develop an automated forecasting system for Walmart México\'s checkout operations.',
      achievements: [
        'Developed and implemented ensemble forecasting models combining ARIMA, SARIMA, Random Forest, XGBoost, and Prophet',
        'Achieved measurable improvement in forecasting accuracy for 8 out of 25 perishable product time series',
        'Designed and deployed models on Google Cloud Platform (GCP) infrastructure using BigQuery',
        'Collaborated with data scientists from multiple consulting firms (Axity and K2) and ML engineers'
      ],
      technologies: ['Python', 'Scikit-Learn', 'XGBoost', 'Prophet', 'Random Forest', 'ARIMA', 'SARIMA', 'GCP', 'BigQuery', 'GitHub'],
      category: 'current'
    },
    {
      id: 2,
      company: 'Coppel',
      role: 'Senior Data Scientist',
      location: 'CDMX',
      period: 'JAN 2022 - JUL 2025',
      startDate: new Date(2022, 0),
      description: 'Led multiple data science initiatives spanning pricing optimization, predictive modeling, and computer vision applications across retail operations.',
      achievements: [
        'Spearheaded predictive modeling for motorcycle agency expansion targeting 542 localities by 2030',
        'Enhanced national queue management system using clustering algorithms and queueing theory',
        'Achieved 5-20% profitability improvement through MIT collaboration on furniture pricing optimization',
        'Developed advanced pricing models using Neural Networks and LSTM for clothing category',
        'Created facial expression recognition models and computer vision automation systems',
        'Led team of 4 in visual search demo on Google Cloud Platform'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Keras', 'Scikit-Learn', 'XGBoost', 'OpenCV', 'IBM Cloud Pack', 'IBM CPLEX', 'GCP', 'Docker', 'PySpark'],
      category: 'past'
    },
    {
      id: 3,
      company: 'Consejo de la Judicatura Federal',
      role: 'Data Scientist',
      location: 'CDMX',
      period: 'NOV 2017 - DEC 2021',
      startDate: new Date(2017, 10),
      description: 'Developed sophisticated machine learning models and statistical algorithms for judicial data analysis and census operations.',
      achievements: [
        'Implemented innovative unsupervised clustering algorithm for time series data in judicial statistics',
        'Led development of NLP text classification model for National Census of Federal Justice',
        'Migrated initial SPSS implementation to R for enhanced data analysis capabilities',
        'Achieved accurate pre-classification of federal offenses using NLP techniques'
      ],
      technologies: ['Python', 'R', 'SPSS', 'NLP', 'Machine Learning', 'Text Classification', 'Hierarchical Clustering', 'Microsoft SQL Server'],
      category: 'past'
    },
    {
      id: 4,
      company: 'National Autonomous University of Mexico (UNAM)',
      role: 'Professor',
      location: 'CDMX',
      period: 'JAN 2012 - JUL 2017',
      startDate: new Date(2012, 0),
      description: 'Served as professor at the Faculty of Science, UNAM, designing and conducting diverse courses in mathematics, statistics, and actuarial science.',
      achievements: [
        'Taught courses including Probability, Bayesian Statistics, Mathematics for Biology and Physics',
        'Conducted seminars on Actuarial Applications, Algebra, and Stochastic Processes',
        'Delivered courses on Mathematical Analysis, Differential Equations, and Risk Theory',
        'Mentored students in advanced mathematical concepts and applications'
      ],
      technologies: ['Matlab', 'R', 'Statistical Software', 'Educational Technology'],
      category: 'academic'
    }
  ];

  getIconByCategory(category: string): string {
    switch (category) {
      case 'current':
        return 'work';
      case 'past':
        return 'work_history';
      case 'academic':
        return 'school';
      default:
        return 'work';
    }
  }

  getCategoryLabel(category: string): string {
    switch (category) {
      case 'current':
        return 'Current Position';
      case 'past':
        return 'Previous Experience';
      case 'academic':
        return 'Academic Experience';
      default:
        return '';
    }
  }
}
