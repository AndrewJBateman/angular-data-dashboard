import { Injectable } from "@angular/core";
import { ServiceModule } from "./service.module";

// const refers to the Google Charts library script - path included in angular.json.
declare const google: any;

@Injectable({
  providedIn: ServiceModule,
})
export class GoogleChartService {
  private google: any;
  constructor() {
    this.google = google;
  }

  getGoogle() {
    return this.google;
  }
}
