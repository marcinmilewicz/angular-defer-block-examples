import { Component } from '@angular/core';
import { HeavyComponentComponent } from '../../components/heavy-component/heavy-component.component';

@Component({
  selector: 'app-without-defer',
  standalone: true,
  imports: [HeavyComponentComponent],
  templateUrl: './without-defer.component.html',
})
export class WithoutDeferComponent {}
