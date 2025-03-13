import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { CurrentPositionComponent } from './current-position/current-position.component';

@Component({
  selector: 'app-map',
  imports: [NzIconModule, NzTabsModule, CurrentPositionComponent],
  template: `
    <nz-tabset #tabset>
      <nz-tab nzTitle="Posicionamento atual">
        <app-current-position />
      </nz-tab>
    </nz-tabset>
  `,
})
export class MapComponent {}
