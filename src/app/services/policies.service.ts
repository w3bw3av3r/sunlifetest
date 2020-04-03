import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class PoliciesService {
	private endpoint = '../assets/data/data-db.json';

	constructor(private http: HttpClient) {}

	getAllPolicies(): Observable<any> {
		return this.http.get(this.endpoint).pipe(
			map(res => {
				console.log(res);
				return res;
			})
		);
	}
}
