import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

interface Project {
  name: string;
  description: string;
  technologies: string;
  imageUrl: string;
  websiteUrl: string;
  codeUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardModule, CommonModule, ButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      name: 'Todo-List',
      description: 'This is a brief description of Project 1.',
      technologies: 'Stack used: Angular',
      imageUrl: 'assets/images/todo-list.png',
      websiteUrl: 'https://personal-todos-list.netlify.app/',
      codeUrl: 'https://github.com/PalgunaSE2021/todo-list',
    },
    {
      name: 'Project 1',
      description: 'This is a brief description of Project 1.',
      technologies: 'Stack used: Angular',
      imageUrl: 'img.jpg',
      websiteUrl: 'https://project1.com',
      codeUrl: 'https://github.com/username/project1',
    },
    {
      name: 'Project 1',
      description: 'This is a brief description of Project 1.',
      technologies: 'Stack used: Angular',
      imageUrl: 'img.jpg',
      websiteUrl: 'https://project1.com',
      codeUrl: 'https://github.com/username/project1',
    },
    {
      name: 'Project 1',
      description: 'This is a brief description of Project 1.',
      technologies: 'Stack used: Angular',
      imageUrl: 'img.jpg',
      websiteUrl: 'https://project1.com',
      codeUrl: 'https://github.com/username/project1',
    },
  ];

  projectRows: Project[][] = [];

  ngOnInit() {
    this.groupProjects();
  }

  groupProjects() {
    const chunkSize = 2;
    for (let i = 0; i < this.projects.length; i += chunkSize) {
      this.projectRows.push(this.projects.slice(i, i + chunkSize));
    }
  }
}
