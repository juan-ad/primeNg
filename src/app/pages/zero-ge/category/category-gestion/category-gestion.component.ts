import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-gestion',
  templateUrl: './category-gestion.component.html',
  styleUrls: ['./category-gestion.component.css']
})
export class CategoryGestionComponent implements OnInit {

  name: boolean = false;
  code: boolean = false;

  constructor(private _activatedRouter: ActivatedRoute) { 
    this._activatedRouter.queryParams.subscribe( 
      params => {
        this.name = params["name"] ? params["name"] : false;
        this.code = params["code"] ? params["code"] : false;
      });
  }

  ngOnInit(): void {
    console.log(this.name, this.code);
  }

}
