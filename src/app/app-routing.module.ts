import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GraphingCalculator } from './MathTools/graphing.component';
import { HomeLayoutComponent } from './homepage/home-layout.component';
import { ScientificCalculator } from './MathTools/scientific.component';
import { FourFunctionCalculator } from './MathTools/fourfunction.component';
import { MatrixCalculator } from './MathTools/matrix.component';
import { TestPractice } from './OtherMathTools/testpractice.component';
import { GeometryTool } from './OtherMathTools/geometrytool.component';
import { AddFinalistCardComponent } from './ContestFinalistCard/add-finalist-card/add-finalist-card.component';

const routes:Routes = [
  {path: 'graphing', component: GraphingCalculator},
  {path: 'scientific', component: ScientificCalculator},
  {path: 'fourfunction', component: FourFunctionCalculator},
  {path: 'matrix', component: MatrixCalculator},
  {path: 'testpractice', component: TestPractice},
  {path: 'geometrytool', component: GeometryTool},
  {path: 'addfinalistcard', component: AddFinalistCardComponent},


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
