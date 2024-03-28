import { Component, signal } from '@angular/core';
import { HeavyComponentComponent } from '../../components/heavy-component/heavy-component.component';

@Component({
  selector: 'app-with-trigger-cond',
  standalone: true,
  imports: [HeavyComponentComponent],
  templateUrl: './with-trigger-cond.component.html',
})
export class WithTriggerCondComponent {
  counter = signal(0);

  increment() {
    this.counter.update((value) => value + 1);
  }
}
