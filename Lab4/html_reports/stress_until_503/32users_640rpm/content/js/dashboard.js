/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 50.62893081761006, "KoPercent": 49.37106918238994};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.2531446540880503, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.2531446540880503, 500, 1500, "GET / config=3"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 954, 471, 49.37106918238994, 621.377358490567, 523, 938, 620.0, 645.0, 655.0, 686.9000000000001, 10.542018896071607, 2.378131215813028, 1.6266005718547984], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["GET / config=3", 954, 471, 49.37106918238994, 621.377358490567, 523, 938, 620.0, 645.0, 655.0, 686.9000000000001, 10.542018896071607, 2.378131215813028, 1.6266005718547984], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 686 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.21231422505307856, 0.10482180293501048], "isController": false}, {"data": ["The operation lasted too long: It took 629 milliseconds, but should not have lasted longer than 620 milliseconds.", 17, 3.6093418259023355, 1.7819706498951782], "isController": false}, {"data": ["The operation lasted too long: It took 644 milliseconds, but should not have lasted longer than 620 milliseconds.", 16, 3.397027600849257, 1.6771488469601676], "isController": false}, {"data": ["The operation lasted too long: It took 623 milliseconds, but should not have lasted longer than 620 milliseconds.", 28, 5.944798301486199, 2.9350104821802936], "isController": false}, {"data": ["The operation lasted too long: It took 654 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.8492569002123143, 0.4192872117400419], "isController": false}, {"data": ["The operation lasted too long: It took 721 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.21231422505307856, 0.10482180293501048], "isController": false}, {"data": ["The operation lasted too long: It took 720 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.21231422505307856, 0.10482180293501048], "isController": false}, {"data": ["The operation lasted too long: It took 675 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.21231422505307856, 0.10482180293501048], "isController": false}, {"data": ["The operation lasted too long: It took 655 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.8492569002123143, 0.4192872117400419], "isController": false}, {"data": ["The operation lasted too long: It took 634 milliseconds, but should not have lasted longer than 620 milliseconds.", 17, 3.6093418259023355, 1.7819706498951782], "isController": false}, {"data": ["The operation lasted too long: It took 622 milliseconds, but should not have lasted longer than 620 milliseconds.", 28, 5.944798301486199, 2.9350104821802936], "isController": false}, {"data": ["The operation lasted too long: It took 670 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.42462845010615713, 0.20964360587002095], "isController": false}, {"data": ["The operation lasted too long: It took 676 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.42462845010615713, 0.20964360587002095], "isController": false}, {"data": ["The operation lasted too long: It took 628 milliseconds, but should not have lasted longer than 620 milliseconds.", 7, 1.4861995753715498, 0.7337526205450734], "isController": false}, {"data": ["The operation lasted too long: It took 938 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.21231422505307856, 0.10482180293501048], "isController": false}, {"data": ["The operation lasted too long: It took 633 milliseconds, but should not have lasted longer than 620 milliseconds.", 9, 1.910828025477707, 0.9433962264150944], "isController": false}, {"data": ["The operation lasted too long: It took 639 milliseconds, but should not have lasted longer than 620 milliseconds.", 14, 2.9723991507430996, 1.4675052410901468], "isController": false}, {"data": ["The operation lasted too long: It took 665 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.21231422505307856, 0.10482180293501048], "isController": false}, {"data": ["The operation lasted too long: It took 638 milliseconds, but should not have lasted longer than 620 milliseconds.", 18, 3.821656050955414, 1.8867924528301887], "isController": false}, {"data": ["The operation lasted too long: It took 671 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.21231422505307856, 0.10482180293501048], "isController": false}, {"data": ["The operation lasted too long: It took 635 milliseconds, but should not have lasted longer than 620 milliseconds.", 11, 2.335456475583864, 1.1530398322851152], "isController": false}, {"data": ["The operation lasted too long: It took 642 milliseconds, but should not have lasted longer than 620 milliseconds.", 18, 3.821656050955414, 1.8867924528301887], "isController": false}, {"data": ["The operation lasted too long: It took 667 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.42462845010615713, 0.20964360587002095], "isController": false}, {"data": ["The operation lasted too long: It took 661 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.42462845010615713, 0.20964360587002095], "isController": false}, {"data": ["The operation lasted too long: It took 664 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.21231422505307856, 0.10482180293501048], "isController": false}, {"data": ["The operation lasted too long: It took 645 milliseconds, but should not have lasted longer than 620 milliseconds.", 13, 2.760084925690021, 1.3626834381551363], "isController": false}, {"data": ["The operation lasted too long: It took 632 milliseconds, but should not have lasted longer than 620 milliseconds.", 12, 2.5477707006369426, 1.2578616352201257], "isController": false}, {"data": ["The operation lasted too long: It took 937 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.21231422505307856, 0.10482180293501048], "isController": false}, {"data": ["The operation lasted too long: It took 648 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.8492569002123143, 0.4192872117400419], "isController": false}, {"data": ["The operation lasted too long: It took 677 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.6369426751592356, 0.31446540880503143], "isController": false}, {"data": ["The operation lasted too long: It took 647 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 1.2738853503184713, 0.6289308176100629], "isController": false}, {"data": ["The operation lasted too long: It took 626 milliseconds, but should not have lasted longer than 620 milliseconds.", 10, 2.1231422505307855, 1.0482180293501049], "isController": false}, {"data": ["The operation lasted too long: It took 668 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.6369426751592356, 0.31446540880503143], "isController": false}, {"data": ["The operation lasted too long: It took 709 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.21231422505307856, 0.10482180293501048], "isController": false}, {"data": ["The operation lasted too long: It took 630 milliseconds, but should not have lasted longer than 620 milliseconds.", 17, 3.6093418259023355, 1.7819706498951782], "isController": false}, {"data": ["The operation lasted too long: It took 637 milliseconds, but should not have lasted longer than 620 milliseconds.", 15, 3.1847133757961785, 1.5723270440251573], "isController": false}, {"data": ["The operation lasted too long: It took 651 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.6369426751592356, 0.31446540880503143], "isController": false}, {"data": ["The operation lasted too long: It took 658 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.42462845010615713, 0.20964360587002095], "isController": false}, {"data": ["The operation lasted too long: It took 652 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 1.0615711252653928, 0.5241090146750524], "isController": false}, {"data": ["The operation lasted too long: It took 631 milliseconds, but should not have lasted longer than 620 milliseconds.", 11, 2.335456475583864, 1.1530398322851152], "isController": false}, {"data": ["The operation lasted too long: It took 625 milliseconds, but should not have lasted longer than 620 milliseconds.", 20, 4.246284501061571, 2.0964360587002098], "isController": false}, {"data": ["The operation lasted too long: It took 702 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.42462845010615713, 0.20964360587002095], "isController": false}, {"data": ["The operation lasted too long: It took 657 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.42462845010615713, 0.20964360587002095], "isController": false}, {"data": ["The operation lasted too long: It took 673 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.42462845010615713, 0.20964360587002095], "isController": false}, {"data": ["The operation lasted too long: It took 636 milliseconds, but should not have lasted longer than 620 milliseconds.", 21, 4.45859872611465, 2.20125786163522], "isController": false}, {"data": ["The operation lasted too long: It took 641 milliseconds, but should not have lasted longer than 620 milliseconds.", 10, 2.1231422505307855, 1.0482180293501049], "isController": false}, {"data": ["The operation lasted too long: It took 656 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.21231422505307856, 0.10482180293501048], "isController": false}, {"data": ["The operation lasted too long: It took 621 milliseconds, but should not have lasted longer than 620 milliseconds.", 12, 2.5477707006369426, 1.2578616352201257], "isController": false}, {"data": ["The operation lasted too long: It took 659 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 1.2738853503184713, 0.6289308176100629], "isController": false}, {"data": ["The operation lasted too long: It took 649 milliseconds, but should not have lasted longer than 620 milliseconds.", 8, 1.6985138004246285, 0.8385744234800838], "isController": false}, {"data": ["The operation lasted too long: It took 688 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.21231422505307856, 0.10482180293501048], "isController": false}, {"data": ["The operation lasted too long: It took 646 milliseconds, but should not have lasted longer than 620 milliseconds.", 7, 1.4861995753715498, 0.7337526205450734], "isController": false}, {"data": ["The operation lasted too long: It took 660 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.42462845010615713, 0.20964360587002095], "isController": false}, {"data": ["The operation lasted too long: It took 643 milliseconds, but should not have lasted longer than 620 milliseconds.", 12, 2.5477707006369426, 1.2578616352201257], "isController": false}, {"data": ["The operation lasted too long: It took 640 milliseconds, but should not have lasted longer than 620 milliseconds.", 14, 2.9723991507430996, 1.4675052410901468], "isController": false}, {"data": ["The operation lasted too long: It took 875 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.21231422505307856, 0.10482180293501048], "isController": false}, {"data": ["The operation lasted too long: It took 666 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.42462845010615713, 0.20964360587002095], "isController": false}, {"data": ["The operation lasted too long: It took 650 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.6369426751592356, 0.31446540880503143], "isController": false}, {"data": ["The operation lasted too long: It took 624 milliseconds, but should not have lasted longer than 620 milliseconds.", 19, 4.033970276008493, 1.9916142557651992], "isController": false}, {"data": ["The operation lasted too long: It took 653 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.42462845010615713, 0.20964360587002095], "isController": false}, {"data": ["The operation lasted too long: It took 627 milliseconds, but should not have lasted longer than 620 milliseconds.", 11, 2.335456475583864, 1.1530398322851152], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 954, 471, "The operation lasted too long: It took 623 milliseconds, but should not have lasted longer than 620 milliseconds.", 28, "The operation lasted too long: It took 622 milliseconds, but should not have lasted longer than 620 milliseconds.", 28, "The operation lasted too long: It took 636 milliseconds, but should not have lasted longer than 620 milliseconds.", 21, "The operation lasted too long: It took 625 milliseconds, but should not have lasted longer than 620 milliseconds.", 20, "The operation lasted too long: It took 624 milliseconds, but should not have lasted longer than 620 milliseconds.", 19], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["GET / config=3", 954, 471, "The operation lasted too long: It took 623 milliseconds, but should not have lasted longer than 620 milliseconds.", 28, "The operation lasted too long: It took 622 milliseconds, but should not have lasted longer than 620 milliseconds.", 28, "The operation lasted too long: It took 636 milliseconds, but should not have lasted longer than 620 milliseconds.", 21, "The operation lasted too long: It took 625 milliseconds, but should not have lasted longer than 620 milliseconds.", 20, "The operation lasted too long: It took 624 milliseconds, but should not have lasted longer than 620 milliseconds.", 19], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
