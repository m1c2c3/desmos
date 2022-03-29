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
import { GraphingCalculator } from './MathTools/graphing.component';
import { HomeLayoutComponent } from './homepage/home-layout.component';
import { ScientificCalculator } from './MathTools/scientific.component';
import { FourFunctionCalculator } from './MathTools/fourfunction.component';
import { MatrixCalculator } from './MathTools/matrix.component';
import { TestPractice } from './OtherMathTools/testpractice.component';
import { GeometryTool } from './OtherMathTools/geometrytool.component';
import { BlackHeader } from './Navigation/blackheader.component';
import { UserInfoComponent } from './user-info/user-info.component';
import {HttpClientModule} from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddFinalistCardComponent } from './ContestFinalistCard/add-finalist-card/add-finalist-card.component';
import { FormsModule } from '@angular/forms';

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
    MatrixCalculator,
    TestPractice,
    GeometryTool,
    BlackHeader,
    UserInfoComponent,
    AddFinalistCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
