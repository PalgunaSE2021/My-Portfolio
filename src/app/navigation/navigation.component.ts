import { Component } from '@angular/core';
import { RedirectionService } from '../redirection.service';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  constructor(private redirectionService: RedirectionService) {}

  scrollTo(sectionId: string): void {
    this.redirectionService.scrollToSection(sectionId);
  }
}
