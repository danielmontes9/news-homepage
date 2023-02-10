import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { NewsComponent } from './news/news.component';
import { NewnessComponent } from './newness/newness.component';
import { TrendsComponent } from './trends/trends.component';



@NgModule({
  declarations: [
    NewsComponent,
    NewnessComponent,
    TrendsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
