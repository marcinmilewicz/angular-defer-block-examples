import { Component } from '@angular/core';
import { HeavyComponentComponent } from '../../components/heavy-component/heavy-component.component';

@Component({
  selector: 'app-with-defer',
  standalone: true,
  imports: [HeavyComponentComponent],
  templateUrl: './with-defer.component.html',
})
export class WithDeferComponent {}
