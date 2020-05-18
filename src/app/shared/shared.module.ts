import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './guards/auth.guard';
import { UserRoleGuard } from './guards/user-role.guard';

@NgModule({
  imports: [
  CommonModule,  
  ],
  providers: [
    AuthGuard,
    UserRoleGuard,
  ],
  exports: [
  ]
})
export class SharedModule { }
