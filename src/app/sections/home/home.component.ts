import { Component } from '@angular/core';
// Inside home.component.ts
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Change .css to .scss
})
export class HomeComponent {
  // Data from Technical Skills
  skills = [
    { name: 'Angular', icon: '🅰️' },
    { name: 'TypeScript', icon: '🟦' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'Python', icon: '🐍' },
    { name: 'Django', icon: '🎸' },
    { name: 'Node.js', icon: '🌲' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'REST APIs', icon: '🌐' }
  ];

  // Data from Key Projects
  projects = [
  {
    name: 'Whispering Pines',
    description: 'Enterprise hotel booking platform with end-to-end workflows and role-based interfaces.',
    tech: ['HTML','Angular', 'TypeScript', 'Dynamic Tables', 'API Integration'],
    color: '#81ecec',
    icon: '🏨'
  },
  {
    name: 'VMS - Navyojna',
    description: 'Vendor Management System using API-driven workflows, improving processing efficiency by 25%.',
    tech: ['HTML','Angular', 'API Integration', 'TypeScript'],
    color: '#ff7675',
    icon: '🤝'
  },
  {
    name: 'FMS - Navyojna',
    description: 'Financial Management System with reusable components and complex API integration.',
    tech: ['HTML','Angular','TypeScript', 'Financial APIs', 'UI Components'],
    color: '#ffeaa7',
    icon: '💰'
  },
  {
    name: 'MIAS',
    description: 'Internal workflow automation platform.',
    tech: ['HTML','Angular', 'TypeScript'],
    color: '#a29bfe',
    icon: '⚙️'
  },
  {
    name: 'GTTT',
    description: 'Full stack project with Django backend.',
    tech: ['HTML','Angular', 'Python', 'Django'],
    color: '#55efc4',
    icon: '🧩'
  }
];
}