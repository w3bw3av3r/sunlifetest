import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.page.html',
	styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {
	constructor() {}

	segmentModel = 'ilas';

	ngOnInit() {}

	segmentChanged(ev) {
		console.log('Segment changed', ev);
		console.log(this.segmentModel);
	}
}
