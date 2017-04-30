import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { register } from './register.component';

export const routes = [
  { path: '', component: register, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    register
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class registerModule {
  static routes = routes;
}
