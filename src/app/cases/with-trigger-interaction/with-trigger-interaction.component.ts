import { Component } from '@angular/core';
import { HeavyComponentComponent } from '../../components/heavy-component/heavy-component.component';

@Component({
  selector: 'app-with-trigger-interaction',
  standalone: true,
  imports: [HeavyComponentComponent],
  templateUrl: './with-trigger-interaction.component.html',
  styleUrl: './with-trigger-interaction.component.css',
})
export class WithTriggerInteractionComponent {}
