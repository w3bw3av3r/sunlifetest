import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { InsurancePoliciesComponent } from './insurance-policies/insurance-policies.component';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, DashboardPageRoutingModule],
	declarations: [DashboardPage, InsurancePoliciesComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardPageModule {}
