import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./cases/home/home.component').then(
        ({ HomeComponent }) => HomeComponent,
      ),
  },
  {
    path: 'without-defer',
    loadComponent: () =>
      import('./cases/without-defer/without-defer.component').then(
        ({ WithoutDeferComponent }) => WithoutDeferComponent,
      ),
  },
  {
    path: 'with-defer',
    loadComponent: () =>
      import('./cases/with-defer/with-defer.component').then(
        ({ WithDeferComponent }) => WithDeferComponent,
      ),
  },
  {
    path: 'with-defer-placeholder',
    loadComponent: () =>
      import(
        './cases/with-defer-placeholder/with-defer-placeholder.component'
      ).then(
        ({ WithDeferPlaceholderComponent }) => WithDeferPlaceholderComponent,
      ),
  },
  {
    path: 'with-defer-trigger-cond',
    loadComponent: () =>
      import('./cases/with-trigger-cond/with-trigger-cond.component').then(
        ({ WithTriggerCondComponent }) => WithTriggerCondComponent,
      ),
  },
  {
    path: 'with-defer-trigger-viewport',
    loadComponent: () =>
      import(
        './cases/with-trigger-viewport/with-trigger-viewport.component'
      ).then(
        ({ WithTriggerViewportComponent }) => WithTriggerViewportComponent,
      ),
  },
  {
    path: 'with-defer-trigger-interaction',
    loadComponent: () =>
      import(
        './cases/with-trigger-interaction/with-trigger-interaction.component'
      ).then(
        ({ WithTriggerInteractionComponent }) =>
          WithTriggerInteractionComponent,
      ),
  },
  {
    path: 'with-defer-trigger-interaction-and-prefetch',
    loadComponent: () =>
      import(
        './cases/with-trigger-interaction-and-prefetch/with-trigger-interaction-and-prefetch.component'
      ).then(
        ({ WithTriggerInteractionAndPrefetchComponent }) =>
          WithTriggerInteractionAndPrefetchComponent,
      ),
  },
];
