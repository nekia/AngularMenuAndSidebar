import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatSidenavModule } from "@angular/material";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { CmpAComponent } from "./cmp-a/cmp-a.component";
import { CmpBComponent } from "./cmp-b/cmp-b.component";
import { CmpCComponent } from "./cmp-c/cmp-c.component";

const routes: Routes = [
  {path: 'a', component: CmpAComponent},
  {path: 'b', component: CmpBComponent},
  {path: 'c', component: CmpCComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    CmpAComponent,
    CmpBComponent,
    CmpCComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
