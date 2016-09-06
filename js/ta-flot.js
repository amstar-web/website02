// This is code from http://dev.amstardmc.com
var active_graph_type='l'; // l = lines, b=bars

var active_period_type='d'; // d = days, w = weeks, m = months

var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var ticks_months = [
    [0, ""], [1, "Jan"], [2, "Feb"], [3, "Mar"], [4, "Apr"], [5, "May"], [6, "Jun"], [7, "Jul"], [8, "Aug"], [9, "Sep"], [10, "Oct"], [11, "Nov"], [12, "Dec"]
];
var ticks_weeks = [
[14, ""], [15, "15th"], [16, "16th"], [17, "17th"], [18, "18th"]];

//Days
var data1 = [
[gd(2016, 4, 4), 2110.00], [gd(2016, 4, 5), 346.00], [gd(2016, 4, 6), 6025.10], [gd(2016, 4, 8), 3280.00], [gd(2016, 4, 12), 11637.00], [gd(2016, 4, 13), 446.00], [gd(2016, 4, 20), 2619.00], [gd(2016, 4, 21), 11880.50], [gd(2016, 4, 22), 3414.00], [gd(2016, 4, 23), 1127.00], [gd(2016, 4, 25), 471.00], [gd(2016, 4, 26), 90.00], [gd(2016, 5, 1), 471.00]];

//Days
var data_days = [
[gd(2016, 4, 4), 2110.00], [gd(2016, 4, 5), 346.00], [gd(2016, 4, 6), 6025.10], [gd(2016, 4, 8), 3280.00], [gd(2016, 4, 12), 11637.00], [gd(2016, 4, 13), 446.00], [gd(2016, 4, 20), 2619.00], [gd(2016, 4, 21), 11880.50], [gd(2016, 4, 22), 3414.00], [gd(2016, 4, 23), 1127.00], [gd(2016, 4, 25), 471.00], [gd(2016, 4, 26), 90.00], [gd(2016, 5, 1), 471.00]];

// Weeks
var data_weeks = [
[14, 11761.10], [15, 12083.00], [16, 19040.50], [17, 1032.00], [18, 0.00]];

// Months
var data_months = [
[04, 43445.60], [05, 471.00]];

var dataset = [
    {
        data: data_days,
        color: "#FF0000",
        points: { fillColor: "#FF0000", show: true },
        lines: { show: true }
    }
];

var dataset_bars = [
    {
        data: data_days,
        color: "#FF0000",
        points: { show: false},
        lines: { show: false }
    }
];


var dataset_days = [
    {
        data: data_days,
        color: "#FF0000",
        points: { fillColor: "#FF0000", show: true },
        lines: { show: true }
    }
];

var dataset_days_bars = [
    {
        data: data_days,
        color: "#FF0000",
        points: { show: false},
        lines: { show: false }
    }
];

var dataset_weeks = [
    {
        data: data_weeks,
        color: "#FF0000",
        points: { fillColor: "#FF0000", show: true },
        lines: { show: true }
    }
];

var dataset_weeks_bars = [
    {
        data: data_weeks,
        color: "#FF0000",
        points: { show: false},
        lines: { show: false }
    }
];

var dataset_months = [
    {
        data: data_months,
        color: "#FF0000",
        points: { fillColor: "#FF0000", show: true },
        lines: { show: true }
    }
];

var dataset_months_bars = [
    {
        data: data_months,
        color: "#FF0000",
        points: { show: false },
        lines: { show: false }
    }
];

var dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

var options = {
    series: {
        shadowSize: 5
    },
    xaxis: 
    {
        mode: "time",
        timeformat: "%d/%m",
        tickSize: [3, "day"],
        color: "black",        
        axisLabel: "Date",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 10
    },
    yaxis: {        
        color: "black",
        tickDecimals: 2,
        axisLabel: "USD",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 5
    },
    legend: {
        noColumns: 0,
        labelFormatter: function (label, series) {
            return "<font color=\"white\">" + label + "</font>";
        },
        backgroundColor: "#000",
        backgroundOpacity: 0.9,
        labelBoxBorderColor: "#000000",
        position: "nw"
    },
    grid: {
        hoverable: true,
        borderWidth: 3,
        mouseActiveRadius: 50,
        backgroundColor: { colors: ["#ffffff", "#EDF5FF"] },
        axisMargin: 20
    }
};

var options_days = {
    series: {
        shadowSize: 5
    },
    xaxis: 
    {
        mode: "time",
        timeformat: "%d/%m",
        tickSize: [3, "day"],
        color: "black",        
        axisLabel: "Date",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 10
    },
    yaxis: {        
        color: "black",
        tickDecimals: 2,
        axisLabel: "USD",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 5
    },
    legend: {
        noColumns: 0,
        labelFormatter: function (label, series) {
            return "<font color=\"white\">" + label + "</font>";
        },
        backgroundColor: "#000",
        backgroundOpacity: 0.9,
        labelBoxBorderColor: "#000000",
        position: "nw"
    },
    grid: {
        hoverable: true,
        borderWidth: 3,
        mouseActiveRadius: 50,
        backgroundColor: { colors: ["#ffffff", "#EDF5FF"] },
        axisMargin: 20
    }
};

var options_weeks = {
    series: {
        shadowSize: 5
    },
    xaxis: 
    {
  ticks: ticks_weeks,
        color: "black",        
        axisLabel: "Week",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 10
    },
    yaxis: {        
        color: "black",
        tickDecimals: 2,
        axisLabel: "USD",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 5
    },
    legend: {
        noColumns: 0,
        labelFormatter: function (label, series) {
            return "<font color=\"white\">" + label + "</font>";
        },
        backgroundColor: "#000",
        backgroundOpacity: 0.9,
        labelBoxBorderColor: "#000000",
        position: "nw"
    },
    grid: {
        hoverable: true,
        borderWidth: 3,
        mouseActiveRadius: 50,
        backgroundColor: { colors: ["#ffffff", "#EDF5FF"] },
        axisMargin: 20
    }
};

var options_months = {
    series: {
        shadowSize: 5
    },
    xaxis: 
    {
  ticks: ticks_months,
        color: "black",        
        axisLabel: "Month",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 10
    },
    yaxis: {        
        color: "black",
        tickDecimals: 2,
        axisLabel: "USD",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 5
    },
    legend: {
        noColumns: 0,
        labelFormatter: function (label, series) {
            return "<font color=\"white\">" + label + "</font>";
        },
        backgroundColor: "#000",
        backgroundOpacity: 0.9,
        labelBoxBorderColor: "#000000",
        position: "nw"
    },
    grid: {
        hoverable: true,
        borderWidth: 3,
        mouseActiveRadius: 50,
        backgroundColor: { colors: ["#ffffff", "#EDF5FF"] },
        axisMargin: 20
    }
};

var options_bars = {
    series: {
      bars: {
        show: true
      },
      shadowSize: 0
    },
    bars: {
  barWidth: 60000000,
  align: 'center'
    },
    xaxis: 
    {
        mode: "time",
        timeformat: "%d/%m",
        tickSize: [3, "day"],
        color: "black",        
        axisLabel: "Date",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 10
    },
    yaxis: {        
        color: "black",
        tickDecimals: 2,
        axisLabel: "USD",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 5
    },
    legend: {
        noColumns: 0,
        labelFormatter: function (label, series) {
            return "<font color=\"white\">" + label + "</font>";
        },
        backgroundColor: "#000",
        backgroundOpacity: 0.9,
        labelBoxBorderColor: "#000000",
        position: "nw"
    },
    grid: {
        hoverable: true,
        borderWidth: 3,
        mouseActiveRadius: 50,
        backgroundColor: { colors: ["#ffffff", "#EDF5FF"] },
        axisMargin: 20
    }
};

var options_bars_days = options_bars;

var options_bars_weeks = {
    series: {
      bars: {
        show: true
      },
      shadowSize: 0
    },
    bars: {
  barWidth: .5,
  align: 'center'
    },
    xaxis: 
    {
  ticks: ticks_weeks,
        color: "black",        
        axisLabel: "Week",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 10
    },
    yaxis: {        
        color: "black",
        tickDecimals: 2,
        axisLabel: "USD",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 5
    },
    legend: {
        noColumns: 0,
        labelFormatter: function (label, series) {
            return "<font color=\"white\">" + label + "</font>";
        },
        backgroundColor: "#000",
        backgroundOpacity: 0.9,
        labelBoxBorderColor: "#000000",
        position: "nw"
    },
    grid: {
        hoverable: true,
        borderWidth: 3,
        mouseActiveRadius: 50,
        backgroundColor: { colors: ["#ffffff", "#EDF5FF"] },
        axisMargin: 20
    }
};

var options_bars_months = {
    series: {
      bars: {
        show: true
      },
      shadowSize: 0
    },
    bars: {
  barWidth: .5,
  align: 'center'
    },
    xaxis: 
    {
  ticks: ticks_months,
        color: "black",        
        axisLabel: "Month",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 10
    },
    yaxis: {        
        color: "black",
        tickDecimals: 2,
        axisLabel: "USD",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 5
    },
    legend: {
        noColumns: 0,
        labelFormatter: function (label, series) {
            return "<font color=\"white\">" + monthNames[label-1] + "</font>";
        },
        backgroundColor: "#000",
        backgroundOpacity: 0.9,
        labelBoxBorderColor: "#000000",
        position: "nw"
    },
    grid: {
        hoverable: true,
        borderWidth: 3,
        mouseActiveRadius: 50,
        backgroundColor: { colors: ["#ffffff", "#EDF5FF"] },
        axisMargin: 20
    }
};

var pie_dataset = [
    { label: "Direct Sale", data: 84.00, color: "#ED7B00" }
, 
    { label: "Offline Sales", data: 43832.60, color: "#992B00" }
];

var pie_options = {
  series: {
          pie: {
                    show: true,
        label: {show: true}
                }
  },
  legend: {
    show: false,
          noColumns: 0
  },
  grid: {
      hoverable: true
  }
};

function InitGraph() {
  if(active_graph_type=='l') {
    $.plot($("#flot-placeholder"), dataset, options);
    $("#flot-placeholder").UseTooltip();
  } else {
    $.plot($("#flot-placeholder"), dataset_bars, options_bars);
    $("#flot-placeholder").UseTooltip();
  }

  $('#lines').on('click', function (e) {
    active_graph_type='l';
    $('#bars').removeClass('active');
    $(this).addClass('active');
    $.plot($("#flot-placeholder"), dataset, options);
    e.preventDefault();
  });

  $('#bars').on('click', function (e) {
    active_graph_type='b';
    $('#lines').removeClass('active');
    $(this).addClass('active');
    $.plot($("#flot-placeholder"), dataset_bars, options_bars);
    e.preventDefault();
  });

  $.plot($("#pie-placeholder"), pie_dataset, pie_options);
}

function gd(year, month, day) {
    return new Date(year, month - 1, day).getTime();
}

var previousPoint = null, previousLabel = null;


$.fn.UseTooltip = function () {
    $(this).bind("plothover", function (event, pos, item) {
        if (item) {
            if ((previousLabel != item.series.label) || (previousPoint != item.dataIndex)) {
                previousPoint = item.dataIndex;
                previousLabel = item.series.label;
                $("#tooltip").remove();
                
                var x = item.datapoint[0];
                var y = item.datapoint[1];
                var date = new Date(x);
                var color = item.series.color;

    if(active_period_type=='d') {
                showTooltip(item.pageX, item.pageY, color,
                           (monthNames[date.getMonth()]) + " " + date.getDate() +
                            " : <strong>" + y.toFixed(2) + "</strong>");
    }
    if(active_period_type=='w') {
                showTooltip(item.pageX, item.pageY, color,
                           "week "+x+" : <strong>" + y.toFixed(2) + "</strong>");
    }
    if(active_period_type=='m') {
                showTooltip(item.pageX, item.pageY, color,
                           (monthNames[x-1]) + " : <strong>" + y.toFixed(2) + "</strong>");
    }
            }
        } else {
            $("#tooltip").remove();
            previousPoint = null;
        }
    });
};

function showTooltip(x, y, color, contents) {
    $('<div id="tooltip">' + contents + '</div>').css({
        position: 'absolute',
        display: 'none',
        top: y - 40,
        left: x - 120,
        border: '2px solid ' + color,
        padding: '3px',
        'font-size': '9px',
        'border-radius': '5px',
        'background-color': '#fff',
        'font-family': 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
        opacity: 0.9
    }).appendTo("body").fadeIn(200);
}

function DoShowGraphs(graph_type) {
  active_period_type=graph_type;
  document.getElementById('btnd').className='btn_notactive';
  document.getElementById('btnw').className='btn_notactive';
  document.getElementById('btnm').className='btn_notactive';
  if(graph_type=='d') {
    dataset=dataset_days;
    dataset_bars=dataset_days_bars;
    options=options_days;
    options_bars=options_bars_days;
    document.getElementById('btnd').className='btn_active';
  }
  if(graph_type=='m') {
    dataset=dataset_months;
    dataset_bars=dataset_months_bars;
    options=options_months;
    options_bars=options_bars_months;
    document.getElementById('btnm').className='btn_active';
  }
  if(graph_type=='w') {
    dataset=dataset_weeks;
    dataset_bars=dataset_weeks_bars;
    options=options_weeks;
    options_bars=options_bars_weeks;
    document.getElementById('btnw').className='btn_active';
  }
  InitGraph();
}
