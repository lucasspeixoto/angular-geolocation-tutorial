import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-current-position',
  imports: [],
  template: ` <div class="container"></div>`,
  styles: [
    `
      .container {
        height: 100vh;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentPositionComponent {}
