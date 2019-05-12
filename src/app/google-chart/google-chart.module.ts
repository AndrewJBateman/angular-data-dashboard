import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceModule } from './service/service.module';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { TableChartComponent } from './table-chart/table-chart.component';

@NgModule({
	declarations: [LineChartComponent, PieChartComponent, TableChartComponent],
	imports: [
		CommonModule,
		ServiceModule
	],
	exports: [LineChartComponent, PieChartComponent, TableChartComponent],
	providers : []
})
export class GoogleChartModule { }
