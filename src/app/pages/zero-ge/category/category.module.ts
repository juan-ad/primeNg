import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryQuerySectionComponent } from './category-query-section/category-query-section.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryGestionComponent } from './category-gestion/category-gestion.component';


@NgModule({
  declarations: [
    CategoryQuerySectionComponent,
    CategoryGestionComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule
  ]
})
export class CategoryModule { }
