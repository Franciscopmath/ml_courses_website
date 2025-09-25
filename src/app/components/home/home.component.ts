import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule, MatChipsModule, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    
    <div class="hero-section">
      <canvas #particleCanvas class="particle-canvas"></canvas>
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
            <span #nameText class="hero-name"></span><br>
            <span #titleText class="hero-subtitle"></span>
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
                <div class="tech-badge">M.S. in Mathematics</div>
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

    <app-footer></app-footer>
  `,
  styles: [`
    :host{--p:#00C9A7;--s:#00BFA6;--a:#20E3C7;--bg:#FFF;--bg2:#F8FFFE;--dark:#2A2A2A;--txt:#2D3748;--txt2:#718096;--light:#FFF;--brd:#E2E8F0;--grad:linear-gradient(135deg,var(--p) 0%,var(--s) 100%);--grad2:linear-gradient(135deg,rgba(0,201,167,.1) 0%,rgba(0,191,166,.1) 100%)}

    .hero-section{position:relative;min-height:calc(100vh - 80px);display:flex;align-items:center;background:var(--bg2);overflow:hidden}
    .particle-canvas{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0}
    .hero-background{position:absolute;top:0;left:0;right:0;bottom:0;background:radial-gradient(circle at 30% 20%,rgba(0,201,167,.05) 0%,transparent 50%),radial-gradient(circle at 70% 80%,rgba(0,191,166,.05) 0%,transparent 50%);z-index:1}

    .hero-content{position:relative;z-index:2;max-width:1200px;margin:0 auto;padding:3rem 2rem;display:grid;grid-template-columns:1fr 400px;gap:3rem;align-items:center}
    .status-indicator{margin-bottom:2rem}
    .availability-badge{display:inline-flex;align-items:center;gap:.5rem;background:rgba(0,201,167,.1);color:var(--s);padding:.5rem 1rem;border-radius:20px;border:1px solid rgba(0,201,167,.2);font-size:.875rem;font-weight:500}
    .status-dot{width:8px;height:8px;background:var(--p);border-radius:50%;animation:gentle-pulse 2s ease-in-out infinite}
    @keyframes gentle-pulse{0%,100%{opacity:1}50%{opacity:.6}}

    .hero-title{font-size:3.5rem;font-weight:700;line-height:1.1;color:var(--txt);margin-bottom:1.5rem}
    .hero-name{display:block;position:relative}
    .hero-name::after{content:'';position:absolute;right:-3px;top:0;width:3px;height:100%;background:var(--p);animation:blink 1s infinite;opacity:var(--cursor-opacity, 1)}
    .hero-subtitle{font-size:1.5rem;font-weight:400;color:var(--p);display:block;position:relative}
    .hero-subtitle::after{content:'';position:absolute;right:-3px;top:0;width:3px;height:100%;background:var(--p);animation:blink 1s infinite;opacity:0}
    .hero-subtitle.typing::after{opacity:1}
    @keyframes blink{0%,50%{opacity:1}51%,100%{opacity:0}}
    .hero-description{font-size:1.125rem;line-height:1.7;color:var(--txt2);margin-bottom:2rem}
    .key-metrics{display:flex;gap:2rem;margin-bottom:2rem}
    .metric{display:flex;flex-direction:column;align-items:flex-start}
    .metric-number{font-size:2rem;font-weight:700;color:var(--p);line-height:1}
    .metric-label{font-size:.875rem;color:var(--txt2);font-weight:500;margin-top:.5rem}

    .cta-buttons{display:flex;gap:1rem}
    .btn-primary{background:var(--grad);color:var(--light);padding:1rem 2rem;font-size:1rem;font-weight:600;border-radius:8px;border:none;box-shadow:0 4px 15px rgba(0,201,167,.3);transition:all .3s ease}
    .btn-primary:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(0,201,167,.4)}
    .btn-secondary{color:var(--txt);border:1px solid var(--brd);padding:1rem 2rem;font-size:1rem;font-weight:600;border-radius:8px;background:var(--bg);transition:all .3s ease}
    .btn-secondary:hover{background:var(--bg2);border-color:var(--p);transform:translateY(-1px);box-shadow:0 4px 15px rgba(0,201,167,.1)}

    .hero-visual{display:flex;justify-content:center;align-items:center}
    .visual-container{position:relative;width:100%;max-width:400px}
    .profile-card{position:relative;background:var(--bg);border-radius:20px;padding:1.5rem;box-shadow:0 20px 60px rgba(0,201,167,.1);border:1px solid var(--brd);transition:all .3s ease}
    .profile-card:hover{transform:translateY(-5px);box-shadow:0 30px 80px rgba(0,201,167,.15)}
    .profile-image{width:100%;height:auto;border-radius:12px;display:block}
    .profile-overlay{position:absolute;bottom:1.5rem;left:1.5rem;right:1.5rem}
    .tech-badge{background:var(--grad);color:var(--light);padding:.5rem 1rem;border-radius:8px;font-size:.875rem;font-weight:600;display:inline-block;box-shadow:0 4px 15px rgba(0,201,167,.3)}

    .floating-elements{position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}
    .tech-icon{position:absolute;background:var(--bg);width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.5rem;box-shadow:0 10px 30px rgba(0,201,167,.15);border:2px solid var(--brd);animation:gentle-float 6s ease-in-out infinite}
    .tech-icon.python{top:10%;right:-10%;animation-delay:0s}
    .tech-icon.ml{bottom:20%;left:-15%;animation-delay:2s}
    .tech-icon.stats{top:40%;right:-20%;animation-delay:4s}

    .expertise-section{padding:3rem 0;background:var(--bg)}
    .section-header{text-align:center;margin-bottom:3rem}
    .section-title{font-size:2.5rem;font-weight:700;color:var(--txt);margin-bottom:1rem}
    .section-subtitle{font-size:1.25rem;color:var(--txt2);font-weight:400;margin:0}
    .expertise-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:2rem;margin-bottom:3rem}
    .expertise-card{background:var(--bg);border:1px solid var(--brd);border-radius:20px;padding:2rem;transition:all .3s ease;position:relative;overflow:hidden;box-shadow:0 10px 30px rgba(0,201,167,.05)}
    .expertise-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:var(--grad)}
    .expertise-card:hover{transform:translateY(-5px);box-shadow:0 20px 50px rgba(0,201,167,.15);border-color:var(--p)}

    .card-icon{margin-bottom:1.5rem}
    .icon{font-size:3rem;display:block}
    .card-content h3{font-size:1.5rem;font-weight:600;color:var(--txt);margin-bottom:1rem}
    .card-content p{color:var(--txt2);line-height:1.6;margin-bottom:1.5rem}
    .tech-stack{display:flex;flex-wrap:wrap;gap:.5rem}
    .tech-tag{background:var(--grad2);color:var(--s);padding:.25rem .75rem;border-radius:8px;font-size:.875rem;font-weight:500;border:1px solid rgba(0,201,167,.2);transition:all .3s ease}
    .tech-tag:hover{background:var(--p);color:var(--light);border-color:var(--p)}
    .section-cta{text-align:center}

    @media (max-width:1024px){.hero-content{grid-template-columns:1fr;gap:2rem;text-align:center}.hero-visual{order:-1}.visual-container{max-width:300px}}
    @media (max-width:768px){.hero-title{font-size:2.5rem}.hero-subtitle{font-size:1.25rem}.key-metrics{justify-content:center;gap:1.5rem}.cta-buttons{flex-direction:column;align-items:center;gap:1rem}.btn-primary,.btn-secondary{width:100%;max-width:280px;justify-content:center}.expertise-grid{grid-template-columns:1fr;gap:1.5rem}.section-title{font-size:2rem}.tech-icon{display:none}}
    @media (max-width:480px){.hero-title{font-size:2rem}.key-metrics{flex-direction:column;gap:1rem;align-items:center;text-align:center}.expertise-card{padding:1.5rem}}
  `]
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('particleCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('nameText', { static: true }) nameTextRef!: ElementRef<HTMLSpanElement>;
  @ViewChild('titleText', { static: true }) titleTextRef!: ElementRef<HTMLSpanElement>;

  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private mathWaves: MathWave[] = [];
  private floatingNumbers: FloatingNumber[] = [];
  private floatingFormulas: FloatingFormula[] = [];
  private animationId: number = 0;
  private isAnimating = false;
  private animationTime = 0;

  constructor(private animationService: AnimationService, private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initializeCanvas();
    this.createParticles();
    this.createMathWaves();
    this.createFloatingNumbers();
    this.createFloatingFormulas();
    this.startAnimation();
    this.startTypewriterAnimation();
    
    // Initialize page animations
    setTimeout(() => {
      this.animationService.initPageAnimations();
      this.animationService.addFloatingAnimation('.profile-image');
      this.animationService.addPulseAnimation('.specialty-chip');
    }, 100);
  }

  private initializeCanvas() {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
  }

  private resizeCanvas() {
    const rect = this.canvas.parentElement!.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
    this.createParticles();
    this.createMathWaves();
    this.createFloatingNumbers();
    this.createFloatingFormulas();
  }

  private createParticles() {
    this.particles = [];
    const numParticles = Math.min(80, Math.floor((this.canvas.width * this.canvas.height) / 8000));
    
    for (let i = 0; i < numParticles; i++) {
      this.particles.push(new Particle(this.canvas.width, this.canvas.height));
    }
  }

  private createMathWaves() {
    this.mathWaves = [];
    // Create sine and cosine waves
    this.mathWaves.push(new MathWave(this.canvas.width, this.canvas.height, 'sin', 0));
    this.mathWaves.push(new MathWave(this.canvas.width, this.canvas.height, 'cos', Math.PI / 4));
  }

  private createFloatingNumbers() {
    this.floatingNumbers = [];
    const numbers = ['3.14159', '2.718', '1.618', '0.577', '∞', '1.414', '0.693', '2.302', '6.626', '9.109', '1.381', '6.022', '299792458', '0.007297', 'e^π', 'π²/6', '√2', 'log₂(10)', '42'];
    
    numbers.forEach((number, index) => {
      this.floatingNumbers.push(new FloatingNumber(
        number,
        this.canvas.width,
        this.canvas.height,
        index
      ));
    });
  }

  private createFloatingFormulas() {
    this.floatingFormulas = [];
    const formulas = ['∑', '∫', '∂', 'σ²', 'μ', 'λ', '∇', 'α'];
    
    formulas.forEach((formula, index) => {
      this.floatingFormulas.push(new FloatingFormula(
        formula,
        this.canvas.width,
        this.canvas.height,
        index
      ));
    });
  }

  private startAnimation() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.animate();
  }

  private animate() {
    this.animationTime += 0.016; // ~60fps
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw math waves (background)
    this.mathWaves.forEach(wave => {
      wave.update(this.animationTime);
      wave.draw(this.ctx);
    });
    
    // Update and draw particles
    this.particles.forEach(particle => {
      particle.update(this.canvas.width, this.canvas.height);
      particle.draw(this.ctx);
    });
    
    // Draw connections
    this.drawConnections();
    
    // Draw floating numbers
    this.floatingNumbers.forEach(number => {
      number.update(this.animationTime);
      number.draw(this.ctx);
    });
    
    // Draw floating formulas
    this.floatingFormulas.forEach(formula => {
      formula.update(this.animationTime);
      formula.draw(this.ctx);
    });
    
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  private drawConnections() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          const opacity = (1 - distance / 120) * 0.3;
          this.ctx.strokeStyle = `rgba(0, 201, 167, ${opacity})`;
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }

  private async startTypewriterAnimation() {
    const nameText = 'Francisco Perez';
    const titleText = 'Científico de Datos';
    
    await this.typeText(this.nameTextRef.nativeElement, nameText, 100);
    
    // Hide name cursor and start title
    this.nameTextRef.nativeElement.style.setProperty('--cursor-opacity', '0');
    this.renderer.addClass(this.titleTextRef.nativeElement, 'typing');
    
    await this.typeText(this.titleTextRef.nativeElement, titleText, 80);
    
    // Hide title cursor after completion
    setTimeout(() => {
      this.renderer.removeClass(this.titleTextRef.nativeElement, 'typing');
    }, 1000);
  }

  private typeText(element: HTMLElement, text: string, speed: number): Promise<void> {
    return new Promise((resolve) => {
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          element.textContent = text.substring(0, i + 1);
          i++;
        } else {
          clearInterval(timer);
          resolve();
        }
      }, speed);
    });
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    this.isAnimating = false;
    window.removeEventListener('resize', () => this.resizeCanvas());
  }
}

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
    this.opacity = Math.random() * 0.8 + 0.2;
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
    if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;
    
    this.x = Math.max(0, Math.min(canvasWidth, this.x));
    this.y = Math.max(0, Math.min(canvasHeight, this.y));
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = `rgba(0, 201, 167, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

class MathWave {
  private startY: number;
  private amplitude: number;
  private frequency: number;
  private phase: number;
  private speed: number;
  private type: 'sin' | 'cos';
  private canvasWidth: number;
  private canvasHeight: number;

  constructor(canvasWidth: number, canvasHeight: number, type: 'sin' | 'cos', initialPhase: number) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.type = type;
    this.startY = canvasHeight * (type === 'sin' ? 0.3 : 0.7);
    this.amplitude = Math.min(40, canvasHeight * 0.08);
    this.frequency = 0.008;
    this.phase = initialPhase;
    this.speed = type === 'sin' ? 0.02 : 0.015;
  }

  update(time: number) {
    this.phase = time * this.speed;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = this.type === 'sin' ? 'rgba(0, 201, 167, 0.15)' : 'rgba(0, 191, 166, 0.12)';
    ctx.lineWidth = 2;
    ctx.beginPath();

    for (let x = 0; x < this.canvasWidth; x += 4) {
      const y = this.startY + this.amplitude * (this.type === 'sin' 
        ? Math.sin(x * this.frequency + this.phase)
        : Math.cos(x * this.frequency + this.phase));
      
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  }
}

class FloatingNumber {
  private number: string;
  private x: number;
  private y: number;
  private initialX: number;
  private initialY: number;
  private floatAmplitude: number;
  private floatSpeed: number;
  private opacity: number;
  private size: number;
  private rotationSpeed: number;
  private rotation: number;
  private canvasWidth: number;
  private canvasHeight: number;

  constructor(number: string, canvasWidth: number, canvasHeight: number, index: number) {
    this.number = number;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.initialX = Math.random() * canvasWidth * 0.9 + canvasWidth * 0.05;
    this.initialY = Math.random() * canvasHeight * 0.8 + canvasHeight * 0.1;
    this.x = this.initialX;
    this.y = this.initialY;
    this.floatAmplitude = 20 + Math.random() * 15;
    this.floatSpeed = 0.008 + Math.random() * 0.012;
    this.opacity = 0.08 + Math.random() * 0.12;
    this.size = 12 + Math.random() * 8;
    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    this.rotation = 0;
  }

  update(time: number) {
    this.x = this.initialX + Math.sin(time * this.floatSpeed + this.initialX * 0.01) * this.floatAmplitude;
    this.y = this.initialY + Math.cos(time * this.floatSpeed * 0.8 + this.initialY * 0.01) * this.floatAmplitude * 0.6;
    this.rotation += this.rotationSpeed;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.fillStyle = `rgba(0, 201, 167, ${this.opacity})`;
    ctx.font = `${this.size}px 'JetBrains Mono', monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.number, 0, 0);
    ctx.restore();
  }
}

class FloatingFormula {
  private symbol: string;
  private x: number;
  private y: number;
  private initialX: number;
  private initialY: number;
  private floatAmplitude: number;
  private floatSpeed: number;
  private opacity: number;
  private size: number;
  private canvasWidth: number;
  private canvasHeight: number;

  constructor(symbol: string, canvasWidth: number, canvasHeight: number, index: number) {
    this.symbol = symbol;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.initialX = Math.random() * canvasWidth * 0.8 + canvasWidth * 0.1;
    this.initialY = Math.random() * canvasHeight * 0.6 + canvasHeight * 0.2;
    this.x = this.initialX;
    this.y = this.initialY;
    this.floatAmplitude = 15 + Math.random() * 10;
    this.floatSpeed = 0.01 + Math.random() * 0.01;
    this.opacity = 0.1 + Math.random() * 0.15;
    this.size = 20 + Math.random() * 15;
  }

  update(time: number) {
    this.x = this.initialX + Math.sin(time * this.floatSpeed) * this.floatAmplitude * 0.5;
    this.y = this.initialY + Math.cos(time * this.floatSpeed * 0.7) * this.floatAmplitude;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = `rgba(0, 201, 167, ${this.opacity})`;
    ctx.font = `${this.size}px 'JetBrains Mono', monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.symbol, this.x, this.y);
  }
}