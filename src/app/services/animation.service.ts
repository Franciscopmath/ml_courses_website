import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  // Intersection Observer for animations on scroll
  observeElements(selector: string, animationClass: string) {
    const elements = document.querySelectorAll(selector);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => {
      observer.observe(element);
    });
  }

  // Stagger animations
  staggerAnimation(selector: string, animationClass: string, delay: number = 100) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add(animationClass);
      }, index * delay);
    });
  }

  // Page load animations
  initPageAnimations() {
    // Animate hero section on load
    setTimeout(() => {
      const heroElements = document.querySelectorAll('.hero-text > *');
      this.staggerAnimation('.hero-text > *', 'fade-in-up', 200);
    }, 100);

    // Observe cards for scroll animations
    this.observeElements('.project-card', 'fade-in-up');
    this.observeElements('.skill-card', 'fade-in-up');
    this.observeElements('.education-card', 'fade-in-left');
    this.observeElements('.info-card', 'fade-in-up');
  }

  // Smooth scroll to element
  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Add floating animation to elements
  addFloatingAnimation(selector: string) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.classList.add('float');
    });
  }

  // Add pulse animation to elements
  addPulseAnimation(selector: string) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.classList.add('pulse');
    });
  }
}