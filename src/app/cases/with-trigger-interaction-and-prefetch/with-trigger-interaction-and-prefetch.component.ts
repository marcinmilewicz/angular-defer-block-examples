import { Component } from '@angular/core';
import { HeavyComponentComponent } from '../../components/heavy-component/heavy-component.component';

@Component({
  selector: 'app-with-trigger-interaction-and-prefetch',
  standalone: true,
  imports: [HeavyComponentComponent],
  templateUrl: './with-trigger-interaction-and-prefetch.component.html',
  styleUrl: './with-trigger-interaction-and-prefetch.component.css',
})
export class WithTriggerInteractionAndPrefetchComponent {}
