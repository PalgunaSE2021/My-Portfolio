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
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Todo-List',
      description: 'This is a brief description of Project 1.',
      technologies: 'Technology used: Angular',
      imageUrl: 'assets/images/todo-list.png',
      websiteUrl: 'https://personal-todos-list.netlify.app/',
      codeUrl: 'https://github.com/PalgunaSE2021/todo-list',
    },
    {
      name: 'Github-User-Search',
      description: 'This is a brief description of Project 1.',
      technologies: 'Technology used: Angular',
      imageUrl: 'assets/images/githubUserSearch.png',
      websiteUrl: 'https://find-github-user-repos.netlify.app/',
      codeUrl: 'https://github.com/PalgunaSE2021/githubUserSearch',
    },
  ];
}
