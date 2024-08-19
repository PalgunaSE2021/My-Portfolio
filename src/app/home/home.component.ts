import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    NavigationComponent,
    ProfileComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
