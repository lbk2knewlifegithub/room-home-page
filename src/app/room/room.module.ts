import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { fromAbout, fromProduct } from './components';
import { RoomPageComponent } from './containers';
import { RoomRoutingModule } from './room-routing.module';

const COMPONENTS = [fromProduct.COMPONENTS, fromAbout.COMPONENTS];
const CONTAINERS = [RoomPageComponent];

@NgModule({
  imports: [CommonModule, RoomRoutingModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class RoomModule {}
