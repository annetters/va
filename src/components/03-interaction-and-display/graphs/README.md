## UX Guidelines

[Veteran's Affairs UX Guide - Graphs](#)

### Code Guidance

* There are two available themes for graphs: light and dark. The correct theme can be activated for your chart through the instantiation of the chart in the JavaScript file. In order to create a new HighChart the following syntax is appropriate:
  * ```var myChart = new Highcharts.Chart('chartID', {
  options });```
* The following is how to create a Highchart with a dark theme:
  * ```var myChartTwo = new Highcharts.Chart('chartID', Highcharts.merge(darkTheme, {
  options });```
* Accessibility factors can be programmed into individual charts by following the instructions under the ['Configuring an Accessbile Chart'](https://www.highcharts.com/docs/chart-concepts/accessibility)