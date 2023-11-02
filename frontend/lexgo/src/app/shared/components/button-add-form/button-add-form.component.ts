import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EPathRoutes } from '../../models/e-path-routes';

@Component({
  selector: 'app-button-add-form',
  templateUrl: './button-add-form.component.html',
  styleUrls: ['./button-add-form.component.scss']
})
export class ButtonAddFormComponent {

  constructor(private router:Router){}

  navigateToAddOrEditPage(){
    this.router.navigate([EPathRoutes.ADD_OR_EDIT_PAGE,this.router.url.slice(1),"add"])
  }

}
