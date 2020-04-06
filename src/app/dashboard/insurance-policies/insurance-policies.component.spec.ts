import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IonicModule } from '@ionic/angular';

import { InsurancePoliciesComponent } from './insurance-policies.component';

describe('InsurancePoliciesComponent', () => {
	let component: InsurancePoliciesComponent;
	let fixture: ComponentFixture<InsurancePoliciesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [InsurancePoliciesComponent],
			imports: [IonicModule.forRoot(), RouterTestingModule],
		}).compileComponents();

		fixture = TestBed.createComponent(InsurancePoliciesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('Component should be created', () => {
		expect(component).toBeTruthy();
	});
});
