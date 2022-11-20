import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryQuerySectionComponent } from './category-query-section/category-query-section.component';

const routes: Routes = [
  {
    path: "show/:hash",
    component: CategoryQuerySectionComponent,
    data: {
      'label': 'Category'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
