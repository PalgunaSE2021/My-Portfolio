import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display correct name, role, and bio', () => {
    const compiled = fixture.nativeElement;

    const nameElement = compiled.querySelector('.name');
    const roleElement = compiled.querySelector('.role');
    const bioElement = compiled.querySelector('.bio');

    expect(nameElement.textContent).toContain('Palguna M S');
    expect(roleElement.textContent).toContain('Aspiring frontend developer');
    expect(bioElement.textContent).toContain(
      'Eager to learn and build something great every day.'
    );
  });
});
