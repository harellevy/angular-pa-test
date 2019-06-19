import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    PortalModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [
  ],
  providers: [
  ],
  exports: [
    PortalModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
    MatButtonModule
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
