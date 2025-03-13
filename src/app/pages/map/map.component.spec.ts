import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapComponent } from './map.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import {
  provideAnimations,
  provideNoopAnimations,
} from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapComponent, NzIconModule, NzTabsModule],
      providers: [
        provideAnimationsAsync(),
        provideAnimations(),
        provideNoopAnimations(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render tab titles correctly', () => {
    const tabTitles =
      fixture.nativeElement.querySelectorAll('.ant-tabs-tab-btn');
    expect(tabTitles[0].textContent).toContain('Formulário padrão');
    expect(tabTitles[1].textContent).toContain('Formulário melhorado');
  });
});
