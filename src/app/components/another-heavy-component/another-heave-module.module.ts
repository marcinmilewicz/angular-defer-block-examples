import { NgModule } from '@angular/core';
import { AnotherHeavyComponentComponent } from './another-heavy-component.component';

@NgModule({
  declarations: [AnotherHeavyComponentComponent],
  exports: [AnotherHeavyComponentComponent],
})
export class AnotherHeaveModuleModule {}
