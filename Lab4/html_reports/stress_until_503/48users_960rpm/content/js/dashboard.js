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

    var data = {"OkPercent": 7.544483985765124, "KoPercent": 92.45551601423487};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.03772241992882562, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.03772241992882562, 500, 1500, "GET / config=3"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 1405, 1299, 92.45551601423487, 707.3800711743758, 526, 1250, 712.0, 736.4000000000001, 748.0, 909.6400000000003, 15.507383942959317, 3.4982477449449236, 2.3927408818238005], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["GET / config=3", 1405, 1299, 92.45551601423487, 707.3800711743758, 526, 1250, 712.0, 736.4000000000001, 748.0, 909.6400000000003, 15.507383942959317, 3.4982477449449236, 2.3927408818238005], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 814 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 710 milliseconds, but should not have lasted longer than 620 milliseconds.", 54, 4.157043879907621, 3.8434163701067616], "isController": false}, {"data": ["The operation lasted too long: It took 769 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 856 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 623 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 690 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.15396458814472672, 0.1423487544483986], "isController": false}, {"data": ["The operation lasted too long: It took 752 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 680 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 720 milliseconds, but should not have lasted longer than 620 milliseconds.", 20, 1.539645881447267, 1.4234875444839858], "isController": false}, {"data": ["The operation lasted too long: It took 655 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.15396458814472672, 0.1423487544483986], "isController": false}, {"data": ["The operation lasted too long: It took 727 milliseconds, but should not have lasted longer than 620 milliseconds.", 23, 1.7705927636643572, 1.6370106761565837], "isController": false}, {"data": ["The operation lasted too long: It took 700 milliseconds, but should not have lasted longer than 620 milliseconds.", 26, 2.001539645881447, 1.8505338078291815], "isController": false}, {"data": ["The operation lasted too long: It took 762 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.15396458814472672, 0.1423487544483986], "isController": false}, {"data": ["The operation lasted too long: It took 1,247 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 774 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 705 milliseconds, but should not have lasted longer than 620 milliseconds.", 15, 1.1547344110854503, 1.0676156583629892], "isController": false}, {"data": ["The operation lasted too long: It took 1,002 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 628 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 1,029 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 747 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 742 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.3849114703618168, 0.35587188612099646], "isController": false}, {"data": ["The operation lasted too long: It took 697 milliseconds, but should not have lasted longer than 620 milliseconds.", 22, 1.6936104695919938, 1.5658362989323844], "isController": false}, {"data": ["The operation lasted too long: It took 737 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 0.4618937644341801, 0.42704626334519574], "isController": false}, {"data": ["The operation lasted too long: It took 665 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 784 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 757 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.15396458814472672, 0.1423487544483986], "isController": false}, {"data": ["The operation lasted too long: It took 1,165 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 635 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 754 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.23094688221709006, 0.21352313167259787], "isController": false}, {"data": ["The operation lasted too long: It took 1,200 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 712 milliseconds, but should not have lasted longer than 620 milliseconds.", 37, 2.8483448806774443, 2.6334519572953736], "isController": false}, {"data": ["The operation lasted too long: It took 667 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 715 milliseconds, but should not have lasted longer than 620 milliseconds.", 35, 2.6943802925327174, 2.491103202846975], "isController": false}, {"data": ["The operation lasted too long: It took 735 milliseconds, but should not have lasted longer than 620 milliseconds.", 9, 0.6928406466512702, 0.6405693950177936], "isController": false}, {"data": ["The operation lasted too long: It took 732 milliseconds, but should not have lasted longer than 620 milliseconds.", 16, 1.2317167051578137, 1.1387900355871887], "isController": false}, {"data": ["The operation lasted too long: It took 992 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 767 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 645 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.23094688221709006, 0.21352313167259787], "isController": false}, {"data": ["The operation lasted too long: It took 725 milliseconds, but should not have lasted longer than 620 milliseconds.", 15, 1.1547344110854503, 1.0676156583629892], "isController": false}, {"data": ["The operation lasted too long: It took 648 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.15396458814472672, 0.1423487544483986], "isController": false}, {"data": ["The operation lasted too long: It took 722 milliseconds, but should not have lasted longer than 620 milliseconds.", 31, 2.386451116243264, 2.206405693950178], "isController": false}, {"data": ["The operation lasted too long: It took 766 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 683 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 745 milliseconds, but should not have lasted longer than 620 milliseconds.", 7, 0.5388760585065435, 0.498220640569395], "isController": false}, {"data": ["The operation lasted too long: It took 828 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 679 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 693 milliseconds, but should not have lasted longer than 620 milliseconds.", 12, 0.9237875288683602, 0.8540925266903915], "isController": false}, {"data": ["The operation lasted too long: It took 672 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.23094688221709006, 0.21352313167259787], "isController": false}, {"data": ["The operation lasted too long: It took 658 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 699 milliseconds, but should not have lasted longer than 620 milliseconds.", 29, 2.2324865280985375, 2.0640569395017794], "isController": false}, {"data": ["The operation lasted too long: It took 625 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 702 milliseconds, but should not have lasted longer than 620 milliseconds.", 23, 1.7705927636643572, 1.6370106761565837], "isController": false}, {"data": ["The operation lasted too long: It took 678 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.23094688221709006, 0.21352313167259787], "isController": false}, {"data": ["The operation lasted too long: It took 842 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 776 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 708 milliseconds, but should not have lasted longer than 620 milliseconds.", 33, 2.540415704387991, 2.3487544483985765], "isController": false}, {"data": ["The operation lasted too long: It took 701 milliseconds, but should not have lasted longer than 620 milliseconds.", 29, 2.2324865280985375, 2.0640569395017794], "isController": false}, {"data": ["The operation lasted too long: It took 740 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.3849114703618168, 0.35587188612099646], "isController": false}, {"data": ["The operation lasted too long: It took 698 milliseconds, but should not have lasted longer than 620 milliseconds.", 10, 0.7698229407236336, 0.7117437722419929], "isController": false}, {"data": ["The operation lasted too long: It took 692 milliseconds, but should not have lasted longer than 620 milliseconds.", 10, 0.7698229407236336, 0.7117437722419929], "isController": false}, {"data": ["The operation lasted too long: It took 659 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 688 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.15396458814472672, 0.1423487544483986], "isController": false}, {"data": ["The operation lasted too long: It took 707 milliseconds, but should not have lasted longer than 620 milliseconds.", 31, 2.386451116243264, 2.206405693950178], "isController": false}, {"data": ["The operation lasted too long: It took 736 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 0.4618937644341801, 0.42704626334519574], "isController": false}, {"data": ["The operation lasted too long: It took 750 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.15396458814472672, 0.1423487544483986], "isController": false}, {"data": ["The operation lasted too long: It took 765 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.15396458814472672, 0.1423487544483986], "isController": false}, {"data": ["The operation lasted too long: It took 717 milliseconds, but should not have lasted longer than 620 milliseconds.", 32, 2.4634334103156275, 2.2775800711743774], "isController": false}, {"data": ["The operation lasted too long: It took 682 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.15396458814472672, 0.1423487544483986], "isController": false}, {"data": ["The operation lasted too long: It took 669 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.15396458814472672, 0.1423487544483986], "isController": false}, {"data": ["The operation lasted too long: It took 1,189 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 711 milliseconds, but should not have lasted longer than 620 milliseconds.", 36, 2.771362586605081, 2.5622775800711746], "isController": false}, {"data": ["The operation lasted too long: It took 730 milliseconds, but should not have lasted longer than 620 milliseconds.", 15, 1.1547344110854503, 1.0676156583629892], "isController": false}, {"data": ["The operation lasted too long: It took 1,250 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 653 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.15396458814472672, 0.1423487544483986], "isController": false}, {"data": ["The operation lasted too long: It took 910 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 746 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 0.4618937644341801, 0.42704626334519574], "isController": false}, {"data": ["The operation lasted too long: It took 686 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.30792917628945343, 0.2846975088967972], "isController": false}, {"data": ["The operation lasted too long: It took 731 milliseconds, but should not have lasted longer than 620 milliseconds.", 20, 1.539645881447267, 1.4234875444839858], "isController": false}, {"data": ["The operation lasted too long: It took 629 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 748 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.30792917628945343, 0.2846975088967972], "isController": false}, {"data": ["The operation lasted too long: It took 644 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 716 milliseconds, but should not have lasted longer than 620 milliseconds.", 37, 2.8483448806774443, 2.6334519572953736], "isController": false}, {"data": ["The operation lasted too long: It took 954 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 654 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.15396458814472672, 0.1423487544483986], "isController": false}, {"data": ["The operation lasted too long: It took 721 milliseconds, but should not have lasted longer than 620 milliseconds.", 24, 1.8475750577367205, 1.708185053380783], "isController": false}, {"data": ["The operation lasted too long: It took 986 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 706 milliseconds, but should not have lasted longer than 620 milliseconds.", 24, 1.8475750577367205, 1.708185053380783], "isController": false}, {"data": ["The operation lasted too long: It took 741 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 0.4618937644341801, 0.42704626334519574], "isController": false}, {"data": ["The operation lasted too long: It took 634 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.23094688221709006, 0.21352313167259787], "isController": false}, {"data": ["The operation lasted too long: It took 696 milliseconds, but should not have lasted longer than 620 milliseconds.", 20, 1.539645881447267, 1.4234875444839858], "isController": false}, {"data": ["The operation lasted too long: It took 691 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.23094688221709006, 0.21352313167259787], "isController": false}, {"data": ["The operation lasted too long: It took 726 milliseconds, but should not have lasted longer than 620 milliseconds.", 31, 2.386451116243264, 2.206405693950178], "isController": false}, {"data": ["The operation lasted too long: It took 676 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 763 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.15396458814472672, 0.1423487544483986], "isController": false}, {"data": ["The operation lasted too long: It took 639 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.15396458814472672, 0.1423487544483986], "isController": false}, {"data": ["The operation lasted too long: It took 758 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 674 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.15396458814472672, 0.1423487544483986], "isController": false}, {"data": ["The operation lasted too long: It took 718 milliseconds, but should not have lasted longer than 620 milliseconds.", 43, 3.310238645111624, 3.0604982206405693], "isController": false}, {"data": ["The operation lasted too long: It took 671 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 642 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.15396458814472672, 0.1423487544483986], "isController": false}, {"data": ["The operation lasted too long: It took 761 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 880 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 879 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 738 milliseconds, but should not have lasted longer than 620 milliseconds.", 13, 1.0007698229407236, 0.9252669039145908], "isController": false}, {"data": ["The operation lasted too long: It took 728 milliseconds, but should not have lasted longer than 620 milliseconds.", 19, 1.4626635873749039, 1.3523131672597866], "isController": false}, {"data": ["The operation lasted too long: It took 793 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 632 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.15396458814472672, 0.1423487544483986], "isController": false}, {"data": ["The operation lasted too long: It took 751 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.30792917628945343, 0.2846975088967972], "isController": false}, {"data": ["The operation lasted too long: It took 647 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 713 milliseconds, but should not have lasted longer than 620 milliseconds.", 35, 2.6943802925327174, 2.491103202846975], "isController": false}, {"data": ["The operation lasted too long: It took 709 milliseconds, but should not have lasted longer than 620 milliseconds.", 31, 2.386451116243264, 2.206405693950178], "isController": false}, {"data": ["The operation lasted too long: It took 904 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 703 milliseconds, but should not have lasted longer than 620 milliseconds.", 39, 3.0023094688221708, 2.775800711743772], "isController": false}, {"data": ["The operation lasted too long: It took 864 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 719 milliseconds, but should not have lasted longer than 620 milliseconds.", 24, 1.8475750577367205, 1.708185053380783], "isController": false}, {"data": ["The operation lasted too long: It took 724 milliseconds, but should not have lasted longer than 620 milliseconds.", 17, 1.308698999230177, 1.209964412811388], "isController": false}, {"data": ["The operation lasted too long: It took 637 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 817 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 631 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 744 milliseconds, but should not have lasted longer than 620 milliseconds.", 9, 0.6928406466512702, 0.6405693950177936], "isController": false}, {"data": ["The operation lasted too long: It took 657 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.15396458814472672, 0.1423487544483986], "isController": false}, {"data": ["The operation lasted too long: It took 988 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 723 milliseconds, but should not have lasted longer than 620 milliseconds.", 17, 1.308698999230177, 1.209964412811388], "isController": false}, {"data": ["The operation lasted too long: It took 781 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 694 milliseconds, but should not have lasted longer than 620 milliseconds.", 21, 1.6166281755196306, 1.4946619217081851], "isController": false}, {"data": ["The operation lasted too long: It took 967 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 734 milliseconds, but should not have lasted longer than 620 milliseconds.", 7, 0.5388760585065435, 0.498220640569395], "isController": false}, {"data": ["The operation lasted too long: It took 729 milliseconds, but should not have lasted longer than 620 milliseconds.", 11, 0.8468052347959969, 0.7829181494661922], "isController": false}, {"data": ["The operation lasted too long: It took 641 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.15396458814472672, 0.1423487544483986], "isController": false}, {"data": ["The operation lasted too long: It took 778 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 695 milliseconds, but should not have lasted longer than 620 milliseconds.", 20, 1.539645881447267, 1.4234875444839858], "isController": false}, {"data": ["The operation lasted too long: It took 782 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 621 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 704 milliseconds, but should not have lasted longer than 620 milliseconds.", 19, 1.4626635873749039, 1.3523131672597866], "isController": false}, {"data": ["The operation lasted too long: It took 830 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 733 milliseconds, but should not have lasted longer than 620 milliseconds.", 13, 1.0007698229407236, 0.9252669039145908], "isController": false}, {"data": ["The operation lasted too long: It took 660 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.15396458814472672, 0.1423487544483986], "isController": false}, {"data": ["The operation lasted too long: It took 768 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 753 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.30792917628945343, 0.2846975088967972], "isController": false}, {"data": ["The operation lasted too long: It took 739 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.23094688221709006, 0.21352313167259787], "isController": false}, {"data": ["The operation lasted too long: It took 714 milliseconds, but should not have lasted longer than 620 milliseconds.", 47, 3.618167821401078, 3.3451957295373664], "isController": false}, {"data": ["The operation lasted too long: It took 836 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.15396458814472672, 0.1423487544483986], "isController": false}, {"data": ["The operation lasted too long: It took 759 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 772 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 650 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.23094688221709006, 0.21352313167259787], "isController": false}, {"data": ["The operation lasted too long: It took 788 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 749 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.30792917628945343, 0.2846975088967972], "isController": false}, {"data": ["The operation lasted too long: It took 1,176 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.07698229407236336, 0.0711743772241993], "isController": false}, {"data": ["The operation lasted too long: It took 743 milliseconds, but should not have lasted longer than 620 milliseconds.", 7, 0.5388760585065435, 0.498220640569395], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 1405, 1299, "The operation lasted too long: It took 710 milliseconds, but should not have lasted longer than 620 milliseconds.", 54, "The operation lasted too long: It took 714 milliseconds, but should not have lasted longer than 620 milliseconds.", 47, "The operation lasted too long: It took 718 milliseconds, but should not have lasted longer than 620 milliseconds.", 43, "The operation lasted too long: It took 703 milliseconds, but should not have lasted longer than 620 milliseconds.", 39, "The operation lasted too long: It took 712 milliseconds, but should not have lasted longer than 620 milliseconds.", 37], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["GET / config=3", 1405, 1299, "The operation lasted too long: It took 710 milliseconds, but should not have lasted longer than 620 milliseconds.", 54, "The operation lasted too long: It took 714 milliseconds, but should not have lasted longer than 620 milliseconds.", 47, "The operation lasted too long: It took 718 milliseconds, but should not have lasted longer than 620 milliseconds.", 43, "The operation lasted too long: It took 703 milliseconds, but should not have lasted longer than 620 milliseconds.", 39, "The operation lasted too long: It took 712 milliseconds, but should not have lasted longer than 620 milliseconds.", 37], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
