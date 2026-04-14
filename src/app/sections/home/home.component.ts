import { Component } from '@angular/core';
// Inside home.component.ts
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Change .css to .scss
})
export class HomeComponent {
  activeTab: string = 'frontend'; // Default tab

  skills = [
  // Frontend
  { name: 'Angular', icon: 'devicon-angularjs-plain colored', category: 'frontend' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored', category: 'frontend' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored', category: 'frontend' },
  { name: 'HTML5', icon: 'devicon-html5-plain colored', category: 'frontend' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored', category: 'frontend' },
  { name: 'React', icon: 'devicon-react-original colored', category: 'frontend' },

  // Backend
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored', category: 'backend' },
  { name: 'Python', icon: 'devicon-python-plain colored', category: 'backend' },
  { name: 'Django', icon: 'devicon-django-plain colored', category: 'backend' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored', category: 'backend' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', category: 'backend' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', category: 'backend' },

  // Tools
  { name: 'GitHub', icon: 'devicon-github-original colored', category: 'tools' },
  { name: 'Git', icon: 'devicon-git-plain colored', category: 'tools' },
  { name: 'Postman', icon: 'devicon-postman-plain colored', category: 'tools' },
  { name: 'VS Code', icon: 'devicon-vscode-plain colored', category: 'tools' },
  { name: 'Figma', icon: 'devicon-figma-plain colored', category: 'tools' }
];

  // Helper function to filter skills based on active tab
  get filteredSkills() {
    return this.skills.filter(skill => skill.category === this.activeTab);
  }

  setTab(tabName: string) {
    this.activeTab = tabName;
  }

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