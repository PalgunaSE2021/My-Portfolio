import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private tooltipTimeout: any;

  constructor(private renderer: Renderer2) {}

  showTooltip(event: MouseEvent, text: string): void {
    const target = event.target as HTMLElement;
    const tooltip = target.querySelector('.tooltip-text');

    this.tooltipTimeout = setTimeout(() => {
      this.renderer.addClass(target, 'show-tooltip');
    }, 500); // Delay of 1 second
  }

  hideTooltip(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    this.renderer.removeClass(target, 'show-tooltip');

    if (this.tooltipTimeout) {
      clearTimeout(this.tooltipTimeout);
    }
  }
}
