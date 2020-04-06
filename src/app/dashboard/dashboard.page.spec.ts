import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';

describe('DashboardPage', () => {
	let component: DashboardPage;
	let fixture: ComponentFixture<DashboardPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DashboardPage],
			imports: [IonicModule.forRoot()],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();

		fixture = TestBed.createComponent(DashboardPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('Dashboard Page should be created', () => {
		expect(component).toBeTruthy();
	});
});
