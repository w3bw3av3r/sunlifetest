import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.page.html',
	styleUrls: ['./dashboard.page.scss'],
	providers: [DatePipe]
})
export class DashboardPage implements OnInit {
	segmentModel = 'ilas';
	_timePeriod = new Date();
	timePeriod: string;

	constructor(private datePipe: DatePipe) {
		this.timePeriod = this.datePipe.transform(this._timePeriod, 'aaa');
	}

	ngOnInit() {}

	segmentChanged(ev) {
		console.log('Segment changed', ev);
		console.log(this.segmentModel);
	}
}
