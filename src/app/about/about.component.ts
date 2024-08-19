import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FieldsetModule, AvatarModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
