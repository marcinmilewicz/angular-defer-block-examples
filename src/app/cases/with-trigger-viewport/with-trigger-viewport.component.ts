import { Component } from '@angular/core';
import { HeavyComponentComponent } from '../../components/heavy-component/heavy-component.component';

@Component({
  selector: 'app-with-trigger-viewport',
  standalone: true,
  imports: [HeavyComponentComponent],
  templateUrl: './with-trigger-viewport.component.html',
  styleUrl: './with-trigger-viewport.component.css',
})
export class WithTriggerViewportComponent {}
