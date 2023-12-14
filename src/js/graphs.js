/* Graphs - HighCharts.js */

/************
/* Theming
/************/

// Light HighCharts theme
Highcharts.lightTheme = {
  colors: ['#8ba6c9', '#122e51', '#48a463', '#0071bb', '#e59393'],
  chart: {
    borderRadius: 3,
    spacing: [55, 40, 35, 40],
    style: {
      "fontFamily":"\"Source Sans Pro\",\"Lucida Grande\", \"Lucida Sans Unicode\", Verdana, Arial, Helvetica, sans-serif",
      "fontSize":"15px",
      "font-weight": 100
    },
    zoomType: 'xy'
  },
  title: {
    y: -10,
    style: {
      color: '#212121',
      font: 'bold 19px "Source Sans Pro", Helvetica, Verdana, sans-serif'
    }
  },
  subtitle: {
    y: 15,
    style: {
      color: '#323a44',
      font: '500 17px "Source Sans Pro", Helvetica, Verdana, sans-serif'
    }
  },
  yAxis: {
    lineWidth: 0,
    lineColor: "#d6d7d9",
    title: {
      style: {
        color: '#5b616a'
      },
      x: -15
    },
    labels: {
      style: {
        color: '#5b616a',
        font: 'bold 15px "Source Sans Pro", Helvetica, Verdana, sans-serif'
      }
    }
  },
  xAxis: {
    lineColor: "#d6d7d9",
    labels: {
      y: 30,
      style: {
        color: '#5b616a',
        font: 'bold 15px "Source Sans Pro", Helvetica, Verdana, sans-serif',
      }
    },
  },
  legend: {
    itemDistance: 30,
    itemStyle: {
      font: '15px "Source Sans Pro", Helvetica, Verdana, sans-serif',
      'font-weight': 900,
      color: '#323a44',
    },
    itemHoverStyle:{
      color: '#5b616b'
    },
    symbolWidth: 20,
    margin: 30
  },
  tooltip: {
    backgroundColor: "rgba(250,250,250,1)",
    borderWidth: 0,
    style: {
      "color": '#212121',
      "fontSize": "15px"
    },
    headerFormat: '<span style="font-size: 15px">{point.key}</span><br/>',
    pointFormat: '<span style="font-size: 18px; color:{point.color}">\u25CF</span> {series.name}: {point.y}<br/>'
  },
  plotOptions: {
    series: {
        marker: {
            radius: 6
        }
    }
}
};

// Apply the lightTheme as a default
Highcharts.setOptions(Highcharts.lightTheme);


// Dark HighCharts theme
var darkTheme = {
  colors: ['#9bdaf1', '#f9c642', '#48a463', '#ffffff', '#e59393'],
  chart: {
    backgroundColor: '#112e51',
  },
  title: {
    style: {
      color: '#FFFFFF'
    }
  },
  subtitle: {
    style: {
      color: 'rgba(250,250,250,0.7)'
    }
  },
  yAxis: {
    gridLineColor: 'rgba(250,250,250,0.29)',
    title: {
      style: {
        color: 'rgba(250,250,250,0.7)'
      },
      x: -15
    },
    labels: {
      style: {
        color: 'rgba(250,250,250,0.7)',
        font: 'bold 15px "Source Sans Pro", Helvetica, Verdana, sans-serif'
      }
    }
  },
  xAxis: {
    lineColor: 'rgba(250,250,250,0.29)',
    tickColor: 'rgba(250,250,250,0.29)',
    labels: {
      style: {
        color: 'rgba(250,250,250,0.7)',
        font: 'bold 15px "Source Sans Pro", Helvetica, Verdana, sans-serif'
      }
    }
  },
  legend: {
    itemStyle: {
      color: '#FFFFFF'
    },
    itemHoverStyle:{
      color: '#d6d7d9'
    }
  }
};

/*******************
/* Chart Creation
/*******************/

if ($('#testChart').length !== 0) { // Wrapping so that this is only called when testChart is on the page - Graphs/Charts page
  var myChart = new Highcharts.Chart('testChart', {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Temperature'
    },
    subtitle: {
      text: '11/02/2015 - 9/12/2016'
    },
    xAxis: {
      categories: ["Nov '15", "Jan '16", "Mar '16", "May '16", "Jul '16", "Sep '16"]
    },
    yAxis: {
      type: 'linear',
      title: {
        text: 'Degrees (Farenheit)'
      }
    },
    series: [{
      name: 'Jane',
      data: [81, 86.6, 79.8, 81, 86.6, 70]
    }, {
      name: 'John',
      data: [86.7, 80, 70, 86.7, 80, 70]
    }, {
      name: 'Jake',
      data: [72.5, 83.7, 73, 76.4, 82, 79]
    }, {
      name: 'Jill',
      data: [67.8, 72.2, 86.6, 68.1, 71.5, 68.6]
    }, {
      name: 'Joel',
      data: [62.3, 65, 63, 63.5, 66, 87]
    }]
  });
}

if ($('#testChartTwo').length !== 0) {

  var myChartTwo = new Highcharts.Chart('testChartTwo', Highcharts.merge(darkTheme, {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Temperature'
    },
    subtitle: {
      text: '11/02/2015 - 9/12/2016'
    },
    xAxis: {
      categories: ["Nov '15", "Jan '16", "Mar '16", "May '16", "Jul '16", "Sep '16"]
    },
    yAxis: {
      type: 'linear',
      title: {
        text: 'Degrees (Farenheit)'
      },
      plotBands: [{
        color: 'rgba(250,250,250,0.1)', // Color value
        from: 70, // Start of the plot band
        to: 80 // End of the plot band
      }]
    },
    series: [{
      name: 'Jane',
      data: [81, 86.6, 79.8, 81, 86.6, 70]
    }, {
      name: 'John',
      data: [86.7, 80, 70, 86.7, 80, 70]
    }, {
      name: 'Jake',
      data: [72.5, 83.7, 73, 76.4, 82, 79]
    }, {
      name: 'Jill',
      data: [67.8, 72.2, 86.6, 68.1, 71.5, 68.6]
    }, {
      name: 'Joel',
      data: [62.3, 65, 63, 63.5, 66, 87]
    }]
  }));
}



