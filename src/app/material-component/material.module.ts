import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ViewBillProductsComponent } from './dialog/view-bill-products/view-bill-products.component';
import { ChangePasswordComponent } from './dialog/change-password/change-password.component';
import { MaterialModule } from '../shared/material-module';
import { MaterialRoutes } from './material.module.routing';
import { ManageCategoryComponent } from './manage-category/manage-category.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [],
  declarations: [
    ViewBillProductsComponent,
    ChangePasswordComponent,
    ManageCategoryComponent,
    
  ]
})
export class MaterialComponentsModule {}
