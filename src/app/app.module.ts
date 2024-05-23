import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { ProductModule } from './product/product.module';
// import { DataBindingModule } from './data-binding/data-binding.module';
import { CheckboxModule } from './b2-checkbox/checkbox.module';
// import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CompoAComponent } from './compo-a/compo-a.component';
// import { CompoBComponent } from './compo-b/compo-b.component';
// import { CompoCComponent } from './compo-c/compo-c.component';
// import { CompoDComponent } from './compo-d/compo-d.component';

@NgModule({
  declarations: [
    AppComponent,
    // CompoAComponent,
    // CompoBComponent,
    // CompoCComponent,
    // CompoDComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // ProductModule,
    // DataBindingModule,
    CheckboxModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
