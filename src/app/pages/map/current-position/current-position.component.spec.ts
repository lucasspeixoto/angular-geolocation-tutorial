import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentPositionComponent } from './current-position.component';

describe('CurrentPositionComponent', () => {
  let component: CurrentPositionComponent;
  let fixture: ComponentFixture<CurrentPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentPositionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
