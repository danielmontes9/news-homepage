import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule
  ]
})
export class HomeModule { }
