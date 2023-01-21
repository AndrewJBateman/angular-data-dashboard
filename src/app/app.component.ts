import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [`.header{
    text-align: center;
    margin: 20px;
    font-family: serif;
  }`],
})
export class AppComponent {
  title = "angular-data-dashboard";
}
