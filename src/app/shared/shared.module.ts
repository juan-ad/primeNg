import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { TreeModule } from 'primeng/tree';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContextMenuModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    PasswordModule,
    TreeModule
  ],
  exports: [
    ContextMenuModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    PasswordModule,
    TreeModule
  ]
})
export class SharedModule { }
