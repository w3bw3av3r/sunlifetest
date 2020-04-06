import { TestBed, inject } from '@angular/core/testing';

import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';

import { HttpEvent, HttpEventType } from '@angular/common/http';

import { PoliciesService } from './policies.service';

describe('PoliciesService', () => {
	let service: PoliciesService;
	beforeEach(() =>
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [PoliciesService],
		})
	);

	it('Policies Service should be created', () => {
		const service = TestBed.get(PoliciesService);
		expect(service).toBeTruthy();
	});

	it('should return an Observable of All Policies', inject(
		[HttpTestingController, PoliciesService],
		(httpMock: HttpTestingController, dataService: PoliciesService) => {
			const service = TestBed.get(PoliciesService);
			const mockPolicies = {
				allPolicies: [{ name: 'Policy 1' }, { name: 'Policy 2' }],
			};
			service.getAllPolicies().subscribe((data: any) => {
				expect(data.allPolicies.length).toBe(2);
				expect(data).toEqual(mockPolicies);
			});

			const mockReq = httpMock.expectOne(dataService.endpoint);

			expect(mockReq.cancelled).toBeFalsy();
			mockReq.flush(mockPolicies);

			httpMock.verify();
		}
	));
});
