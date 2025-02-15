import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './categorydetails/category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListproductComponent } from './productdetails/listproduct/listproduct.component';
import { AdminpanelComponent } from './admindashboard/adminpanel/adminpanel.component';
import { CustomerpanelComponent } from './customerdashboard/customerpanel/customerpanel.component';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfoundcomp/pagenotfound/pagenotfound.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ListproductComponent,
    AdminpanelComponent,
    CustomerpanelComponent,
    PagenotfoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,NgxPaginationModule,FormsModule,FlexLayoutModule,
    RouterModule.forRoot([
        {path:"admin",component:AdminpanelComponent},
        {path:"",redirectTo:"customer",pathMatch:"full"},
        {path:"customer",component:CustomerpanelComponent},
        {path:"**",component:PagenotfoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
