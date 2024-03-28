import { Component } from '@angular/core';
import { HeavyComponentComponent } from '../../components/heavy-component/heavy-component.component';

@Component({
  selector: 'app-with-defer-placeholder',
  standalone: true,
  imports: [HeavyComponentComponent],
  templateUrl: './with-defer-placeholder.component.html',
})
export class WithDeferPlaceholderComponent {}
