import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IonicModule } from '@ionic/angular';

import { PoliciesService } from '../services/policies.service';

import { AllPoliciesPage } from './all-policies.page';

describe('AllPoliciesPage', () => {
	let component: AllPoliciesPage;
	let fixture: ComponentFixture<AllPoliciesPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AllPoliciesPage],
			imports: [
				IonicModule.forRoot(),
				HttpClientTestingModule,
				RouterTestingModule,
			],
			providers: [PoliciesService],
		}).compileComponents();

		fixture = TestBed.createComponent(AllPoliciesPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('Page should be created', () => {
		expect(component).toBeTruthy();
	});
});
