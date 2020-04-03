import { Component, OnInit } from '@angular/core';
import { PoliciesService } from '../services/policies.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-all-policies',
	templateUrl: './all-policies.page.html',
	styleUrls: ['./all-policies.page.scss']
})
export class AllPoliciesPage implements OnInit {
	policies: Observable<any>;

	constructor(private policyService: PoliciesService) {}

	ngOnInit() {
		this.policies = this.policyService.getAllPolicies();
		// .subscribe(data => {
		// 	this.policies = data;
		// 	console.log(this.policies);
		// });
	}
}
