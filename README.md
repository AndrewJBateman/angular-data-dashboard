# :zap: Angular Data Dashboard

* Angular app using [Google Charts](https://developers.google.com/chart/) to create a dashboard with a [line-chart](https://developers.google.com/chart/interactive/docs/gallery/linechart), [pie-chart](https://developers.google.com/chart/interactive/docs/gallery/piechart) and [table-chart](https://developers.google.com/chart/interactive/docs/gallery/table).
* Tutorial code from [Jay Raj](https://blog.jscrambler.com/author/jay-raj) at [jscrambler](https://jscrambler.com/) - see [:clap: Inspiration](#clap-inspiration) below.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-data-dashboard?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-data-dashboard?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-data-dashboard?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-data-dashboard?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Angular Data Dashboard](#zap-angular-data-dashboard)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Google chart tools have a wide range of interactive charts and data tools.
* The Google Charts script files from `https://www.gstatic.com/charts/loader.js` are loaded into `assets/js/loader.js` and this path is included in the scripts section of the `angular.json` file.
* A `google-chart.service` module is added so the Google Charts script can be used by multiple charts in the app.

## :camera: Screenshots

![Example screenshot](./img/charts.png)

## :signal_strength: Technologies

* [Angular framework v15](https://angular.io/)
* [Google Charts](https://developers.google.com/chart/) based on pure html/svg.

## :floppy_disk: Setup

* Run `npm i` to install dependencies.
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Run `npm run build` to build the project. The build artifacts will be stored in the `docs/` directory.

## :computer: Code Examples

```typescript
// method using the Google Charts library with the gLib variable
// create a new chart using the LineChart method, passing in the container div to show the line chart.
private drawChart() {
  const data = this.gLib.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  ]);

  const options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  const chart = new this.gLib.visualization.LineChart(document.getElementById('divLineChart'));

  chart.draw(data, options);
}j

```

## :cool: Features

* Cross-browser compatibility.
* Dashboards can be used to manage multiple charts that share the same data.
* Data can also be fetched from a REST API endpoint or database service call.

## :clipboard: Status & To-Do List

* Status: Working & deployed to GitHub.
* To-Do: Nothing
* Note: App is designed for PC/tablet and does not resize well for phones - could use angular mat cards or flex-grid to make it fully responsive

## :clap: Inspiration

* [jscrambler blog by Jay Raj: Creating a Sales Dashboard Using Angular and Google Charts](https://blog.jscrambler.com/creating-a-sales-dashboard-using-angular-and-google-charts/)
* [Google Charts Developers Guide](https://developers.google.com/chart/interactive/docs/gallery/controls)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
  