import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { ControlsComponent } from './controls.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    GameComponent
  ],
  declarations: [
    GameComponent,
    ControlsComponent,
    SliderComponent,
  ],
  providers: [
  ]
})
export class GameModule { }
