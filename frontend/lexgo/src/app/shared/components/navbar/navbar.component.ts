import { Component } from '@angular/core';
import { EPathRoutes } from '../../models/e-path-routes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  readonly pathRoutes = EPathRoutes
}
