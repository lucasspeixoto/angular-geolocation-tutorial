import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
  ActivatedRoute,
  provideRouter,
  RouterLink,
  RouterOutlet,
  withViewTransitions,
} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, ReactiveFormsModule],
      providers: [provideRouter(routes, withViewTransitions())],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
