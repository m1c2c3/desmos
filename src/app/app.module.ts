import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { ContestFinalistCard } from './ContestFinalistCard/ContestFinalistCard.component';
import { FooterComponent } from './footer/footer.component';
import { Footer2Component } from './footer2/footer2.component';
import { Header } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { GraphingCalculator } from './calculators/graphing.component';
import { HomeLayoutComponent } from './homepage/home-layout.component';
import { ScientificCalculator } from './calculators/scientific.component';
import { FourFunctionCalculator } from './calculators/fourfunction.component';
import { MatrixCalculator } from './calculators/matrix.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    FooterComponent,
    Footer2Component,
    Card1Component,
    Card2Component,
    ContestFinalistCard,
    GraphingCalculator,
    HomeLayoutComponent,
    ScientificCalculator,
    FourFunctionCalculator,
    MatrixCalculator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
