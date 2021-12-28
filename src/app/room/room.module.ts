import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { fromAbout, fromProduct } from './components';
import { RoomPageComponent } from './containers';
import { RoomRoutingModule } from './room-routing.module';

const COMPONENTS = [fromProduct.COMPONENTS, fromAbout.COMPONENTS];
const CONTAINERS = [RoomPageComponent];

@NgModule({
  imports: [CommonModule, RoomRoutingModule, CarouselModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class RoomModule {}
