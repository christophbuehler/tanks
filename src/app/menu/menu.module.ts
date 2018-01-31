import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    MenuComponent
  ],
  declarations: [
    MenuComponent
  ]
})
export class MenuModule { }
