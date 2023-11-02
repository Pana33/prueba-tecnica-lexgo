import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EPathRoutes } from './shared/models/e-path-routes';

const routes: Routes = [
  {
    path: EPathRoutes.EMPLOYEES, component: EmployeesComponent,
  },
  {
    path: EPathRoutes.DEPARTMENTS, loadChildren: () => import("./pages/departments/module/departments.module").then(m => m.DepartmentsModule)
  },
  {
    path: EPathRoutes.ORGANIZATION_CHART, loadChildren: () => import("./pages/organization-chart/module/organization-chart-routing.module").then(m => m.OrganizationChartRoutingModule)
  },
  {
    path: `${EPathRoutes.ADD_OR_EDIT_PAGE}/:typeDocument/:action`, loadChildren: () => import("./pages/add/module/add.module").then(m => m.AddModule)
  },
  {
    path: '**', redirectTo: EPathRoutes.EMPLOYEES, pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
