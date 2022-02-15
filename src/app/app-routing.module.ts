import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GraphingCalculator } from './calculators/graphing.component';
import { HomeLayoutComponent } from './homepage/home-layout.component';
import { ScientificCalculator } from './calculators/scientific.component';
import { FourFunctionCalculator } from './calculators/fourfunction.component';
import { MatrixCalculator } from './calculators/matrix.component';

const routes:Routes = [
  {path: 'graphing', component: GraphingCalculator},
  {path: 'scientific', component: ScientificCalculator},
  {path: 'fourfunction', component: FourFunctionCalculator},
  {path: 'matrix', component: MatrixCalculator},

  {path: '', component: HomeLayoutComponent}

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
exports: [
  RouterModule

]

})
export class AppRoutingModule { }
