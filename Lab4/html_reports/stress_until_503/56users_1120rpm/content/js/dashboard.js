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

    var data = {"OkPercent": 5.7478368355995055, "KoPercent": 94.2521631644005};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.028739184177997527, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.028739184177997527, 500, 1500, "GET / config=3"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 1618, 1525, 94.2521631644005, 760.4227441285542, 521, 1227, 774.0, 798.0, 809.05, 842.6199999999999, 17.845916285225833, 4.025787755749186, 2.7535691143219543], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["GET / config=3", 1618, 1525, 94.2521631644005, 760.4227441285542, 521, 1227, 774.0, 798.0, 809.05, 842.6199999999999, 17.845916285225833, 4.025787755749186, 2.7535691143219543], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 814 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.26229508196721313, 0.24721878862793573], "isController": false}, {"data": ["The operation lasted too long: It took 710 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 769 milliseconds, but should not have lasted longer than 620 milliseconds.", 47, 3.081967213114754, 2.904820766378245], "isController": false}, {"data": ["The operation lasted too long: It took 856 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 623 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 752 milliseconds, but should not have lasted longer than 620 milliseconds.", 8, 0.5245901639344263, 0.49443757725587145], "isController": false}, {"data": ["The operation lasted too long: It took 680 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 720 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 794 milliseconds, but should not have lasted longer than 620 milliseconds.", 16, 1.0491803278688525, 0.9888751545117429], "isController": false}, {"data": ["The operation lasted too long: It took 675 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 655 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.26229508196721313, 0.24721878862793573], "isController": false}, {"data": ["The operation lasted too long: It took 762 milliseconds, but should not have lasted longer than 620 milliseconds.", 15, 0.9836065573770492, 0.927070457354759], "isController": false}, {"data": ["The operation lasted too long: It took 774 milliseconds, but should not have lasted longer than 620 milliseconds.", 51, 3.3442622950819674, 3.1520395550061804], "isController": false}, {"data": ["The operation lasted too long: It took 809 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.32786885245901637, 0.30902348578491967], "isController": false}, {"data": ["The operation lasted too long: It took 705 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 670 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 747 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 742 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19672131147540983, 0.18541409147095178], "isController": false}, {"data": ["The operation lasted too long: It took 779 milliseconds, but should not have lasted longer than 620 milliseconds.", 40, 2.622950819672131, 2.4721878862793574], "isController": false}, {"data": ["The operation lasted too long: It took 898 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 824 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 665 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 784 milliseconds, but should not have lasted longer than 620 milliseconds.", 30, 1.9672131147540983, 1.854140914709518], "isController": false}, {"data": ["The operation lasted too long: It took 799 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.26229508196721313, 0.24721878862793573], "isController": false}, {"data": ["The operation lasted too long: It took 638 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 802 milliseconds, but should not have lasted longer than 620 milliseconds.", 7, 0.45901639344262296, 0.4326328800988875], "isController": false}, {"data": ["The operation lasted too long: It took 764 milliseconds, but should not have lasted longer than 620 milliseconds.", 37, 2.4262295081967213, 2.2867737948084055], "isController": false}, {"data": ["The operation lasted too long: It took 757 milliseconds, but should not have lasted longer than 620 milliseconds.", 7, 0.45901639344262296, 0.4326328800988875], "isController": false}, {"data": ["The operation lasted too long: It took 754 milliseconds, but should not have lasted longer than 620 milliseconds.", 9, 0.5901639344262295, 0.5562422744128553], "isController": false}, {"data": ["The operation lasted too long: It took 687 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19672131147540983, 0.18541409147095178], "isController": false}, {"data": ["The operation lasted too long: It took 715 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 834 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 789 milliseconds, but should not have lasted longer than 620 milliseconds.", 22, 1.4426229508196722, 1.3597033374536465], "isController": false}, {"data": ["The operation lasted too long: It took 735 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 786 milliseconds, but should not have lasted longer than 620 milliseconds.", 34, 2.2295081967213113, 2.1013597033374536], "isController": false}, {"data": ["The operation lasted too long: It took 732 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19672131147540983, 0.18541409147095178], "isController": false}, {"data": ["The operation lasted too long: It took 767 milliseconds, but should not have lasted longer than 620 milliseconds.", 17, 1.1147540983606556, 1.0506798516687268], "isController": false}, {"data": ["The operation lasted too long: It took 812 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 725 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 722 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 841 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19672131147540983, 0.18541409147095178], "isController": false}, {"data": ["The operation lasted too long: It took 677 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19672131147540983, 0.18541409147095178], "isController": false}, {"data": ["The operation lasted too long: It took 796 milliseconds, but should not have lasted longer than 620 milliseconds.", 19, 1.2459016393442623, 1.1742892459826946], "isController": false}, {"data": ["The operation lasted too long: It took 668 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 770 milliseconds, but should not have lasted longer than 620 milliseconds.", 55, 3.6065573770491803, 3.3992583436341164], "isController": false}, {"data": ["The operation lasted too long: It took 832 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 766 milliseconds, but should not have lasted longer than 620 milliseconds.", 36, 2.360655737704918, 2.2249690976514214], "isController": false}, {"data": ["The operation lasted too long: It took 683 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 745 milliseconds, but should not have lasted longer than 620 milliseconds.", 8, 0.5245901639344263, 0.49443757725587145], "isController": false}, {"data": ["The operation lasted too long: It took 679 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 822 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.32786885245901637, 0.30902348578491967], "isController": false}, {"data": ["The operation lasted too long: It took 849 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 843 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 672 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 658 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 652 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 625 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 678 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 673 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19672131147540983, 0.18541409147095178], "isController": false}, {"data": ["The operation lasted too long: It took 776 milliseconds, but should not have lasted longer than 620 milliseconds.", 39, 2.557377049180328, 2.4103831891223733], "isController": false}, {"data": ["The operation lasted too long: It took 755 milliseconds, but should not have lasted longer than 620 milliseconds.", 11, 0.7213114754098361, 0.6798516687268232], "isController": false}, {"data": ["The operation lasted too long: It took 708 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19672131147540983, 0.18541409147095178], "isController": false}, {"data": ["The operation lasted too long: It took 760 milliseconds, but should not have lasted longer than 620 milliseconds.", 15, 0.9836065573770492, 0.927070457354759], "isController": false}, {"data": ["The operation lasted too long: It took 701 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.26229508196721313, 0.24721878862793573], "isController": false}, {"data": ["The operation lasted too long: It took 740 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.26229508196721313, 0.24721878862793573], "isController": false}, {"data": ["The operation lasted too long: It took 698 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 692 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 1,227 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 819 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 785 milliseconds, but should not have lasted longer than 620 milliseconds.", 34, 2.2295081967213113, 2.1013597033374536], "isController": false}, {"data": ["The operation lasted too long: It took 823 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19672131147540983, 0.18541409147095178], "isController": false}, {"data": ["The operation lasted too long: It took 649 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 829 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19672131147540983, 0.18541409147095178], "isController": false}, {"data": ["The operation lasted too long: It took 813 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19672131147540983, 0.18541409147095178], "isController": false}, {"data": ["The operation lasted too long: It took 736 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 750 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19672131147540983, 0.18541409147095178], "isController": false}, {"data": ["The operation lasted too long: It took 765 milliseconds, but should not have lasted longer than 620 milliseconds.", 37, 2.4262295081967213, 2.2867737948084055], "isController": false}, {"data": ["The operation lasted too long: It took 717 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 756 milliseconds, but should not have lasted longer than 620 milliseconds.", 14, 0.9180327868852459, 0.865265760197775], "isController": false}, {"data": ["The operation lasted too long: It took 711 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 730 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 804 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.26229508196721313, 0.24721878862793573], "isController": false}, {"data": ["The operation lasted too long: It took 624 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 833 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 775 milliseconds, but should not have lasted longer than 620 milliseconds.", 65, 4.262295081967213, 4.017305315203956], "isController": false}, {"data": ["The operation lasted too long: It took 653 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 891 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 746 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.32786885245901637, 0.30902348578491967], "isController": false}, {"data": ["The operation lasted too long: It took 686 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 892 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 731 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 629 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 748 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 0.39344262295081966, 0.37082818294190356], "isController": false}, {"data": ["The operation lasted too long: It took 644 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 773 milliseconds, but should not have lasted longer than 620 milliseconds.", 31, 2.0327868852459017, 1.915945611866502], "isController": false}, {"data": ["The operation lasted too long: It took 835 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 721 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 867 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 825 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19672131147540983, 0.18541409147095178], "isController": false}, {"data": ["The operation lasted too long: It took 741 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 634 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 622 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19672131147540983, 0.18541409147095178], "isController": false}, {"data": ["The operation lasted too long: It took 795 milliseconds, but should not have lasted longer than 620 milliseconds.", 13, 0.8524590163934426, 0.8034610630407911], "isController": false}, {"data": ["The operation lasted too long: It took 763 milliseconds, but should not have lasted longer than 620 milliseconds.", 16, 1.0491803278688525, 0.9888751545117429], "isController": false}, {"data": ["The operation lasted too long: It took 803 milliseconds, but should not have lasted longer than 620 milliseconds.", 9, 0.5901639344262295, 0.5562422744128553], "isController": false}, {"data": ["The operation lasted too long: It took 758 milliseconds, but should not have lasted longer than 620 milliseconds.", 14, 0.9180327868852459, 0.865265760197775], "isController": false}, {"data": ["The operation lasted too long: It took 877 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 996 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 805 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.32786885245901637, 0.30902348578491967], "isController": false}, {"data": ["The operation lasted too long: It took 674 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 761 milliseconds, but should not have lasted longer than 620 milliseconds.", 26, 1.7049180327868851, 1.6069221260815822], "isController": false}, {"data": ["The operation lasted too long: It took 837 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 808 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19672131147540983, 0.18541409147095178], "isController": false}, {"data": ["The operation lasted too long: It took 684 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 661 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 783 milliseconds, but should not have lasted longer than 620 milliseconds.", 26, 1.7049180327868851, 1.6069221260815822], "isController": false}, {"data": ["The operation lasted too long: It took 818 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19672131147540983, 0.18541409147095178], "isController": false}, {"data": ["The operation lasted too long: It took 780 milliseconds, but should not have lasted longer than 620 milliseconds.", 45, 2.9508196721311477, 2.781211372064277], "isController": false}, {"data": ["The operation lasted too long: It took 664 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19672131147540983, 0.18541409147095178], "isController": false}, {"data": ["The operation lasted too long: It took 738 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 947 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 728 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 790 milliseconds, but should not have lasted longer than 620 milliseconds.", 28, 1.8360655737704918, 1.73053152039555], "isController": false}, {"data": ["The operation lasted too long: It took 793 milliseconds, but should not have lasted longer than 620 milliseconds.", 23, 1.5081967213114753, 1.4215080346106304], "isController": false}, {"data": ["The operation lasted too long: It took 632 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 751 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 815 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.26229508196721313, 0.24721878862793573], "isController": false}, {"data": ["The operation lasted too long: It took 647 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19672131147540983, 0.18541409147095178], "isController": false}, {"data": ["The operation lasted too long: It took 787 milliseconds, but should not have lasted longer than 620 milliseconds.", 18, 1.180327868852459, 1.1124845488257107], "isController": false}, {"data": ["The operation lasted too long: It took 713 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 630 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 811 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.32786885245901637, 0.30902348578491967], "isController": false}, {"data": ["The operation lasted too long: It took 703 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 724 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 797 milliseconds, but should not have lasted longer than 620 milliseconds.", 12, 0.7868852459016393, 0.7416563658838071], "isController": false}, {"data": ["The operation lasted too long: It took 637 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 651 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 798 milliseconds, but should not have lasted longer than 620 milliseconds.", 14, 0.9180327868852459, 0.865265760197775], "isController": false}, {"data": ["The operation lasted too long: It took 817 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 791 milliseconds, but should not have lasted longer than 620 milliseconds.", 9, 0.5901639344262295, 0.5562422744128553], "isController": false}, {"data": ["The operation lasted too long: It took 777 milliseconds, but should not have lasted longer than 620 milliseconds.", 23, 1.5081967213114753, 1.4215080346106304], "isController": false}, {"data": ["The operation lasted too long: It took 810 milliseconds, but should not have lasted longer than 620 milliseconds.", 7, 0.45901639344262296, 0.4326328800988875], "isController": false}, {"data": ["The operation lasted too long: It took 744 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 0.39344262295081966, 0.37082818294190356], "isController": false}, {"data": ["The operation lasted too long: It took 806 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19672131147540983, 0.18541409147095178], "isController": false}, {"data": ["The operation lasted too long: It took 771 milliseconds, but should not have lasted longer than 620 milliseconds.", 46, 3.0163934426229506, 2.8430160692212607], "isController": false}, {"data": ["The operation lasted too long: It took 723 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 792 milliseconds, but should not have lasted longer than 620 milliseconds.", 20, 1.3114754098360655, 1.2360939431396787], "isController": false}, {"data": ["The operation lasted too long: It took 781 milliseconds, but should not have lasted longer than 620 milliseconds.", 40, 2.622950819672131, 2.4721878862793574], "isController": false}, {"data": ["The operation lasted too long: It took 821 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 800 milliseconds, but should not have lasted longer than 620 milliseconds.", 17, 1.1147540983606556, 1.0506798516687268], "isController": false}, {"data": ["The operation lasted too long: It took 636 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 694 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.32786885245901637, 0.30902348578491967], "isController": false}, {"data": ["The operation lasted too long: It took 734 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 729 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 641 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 827 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 695 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 778 milliseconds, but should not have lasted longer than 620 milliseconds.", 30, 1.9672131147540983, 1.854140914709518], "isController": false}, {"data": ["The operation lasted too long: It took 987 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 656 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 782 milliseconds, but should not have lasted longer than 620 milliseconds.", 26, 1.7049180327868851, 1.6069221260815822], "isController": false}, {"data": ["The operation lasted too long: It took 621 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 820 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 826 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 830 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 816 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.19672131147540983, 0.18541409147095178], "isController": false}, {"data": ["The operation lasted too long: It took 660 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 768 milliseconds, but should not have lasted longer than 620 milliseconds.", 21, 1.3770491803278688, 1.2978986402966626], "isController": false}, {"data": ["The operation lasted too long: It took 753 milliseconds, but should not have lasted longer than 620 milliseconds.", 7, 0.45901639344262296, 0.4326328800988875], "isController": false}, {"data": ["The operation lasted too long: It took 739 milliseconds, but should not have lasted longer than 620 milliseconds.", 5, 0.32786885245901637, 0.30902348578491967], "isController": false}, {"data": ["The operation lasted too long: It took 640 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 714 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 801 milliseconds, but should not have lasted longer than 620 milliseconds.", 11, 0.7213114754098361, 0.6798516687268232], "isController": false}, {"data": ["The operation lasted too long: It took 759 milliseconds, but should not have lasted longer than 620 milliseconds.", 9, 0.5901639344262295, 0.5562422744128553], "isController": false}, {"data": ["The operation lasted too long: It took 772 milliseconds, but should not have lasted longer than 620 milliseconds.", 28, 1.8360655737704918, 1.73053152039555], "isController": false}, {"data": ["The operation lasted too long: It took 650 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.13114754098360656, 0.12360939431396786], "isController": false}, {"data": ["The operation lasted too long: It took 788 milliseconds, but should not have lasted longer than 620 milliseconds.", 26, 1.7049180327868851, 1.6069221260815822], "isController": false}, {"data": ["The operation lasted too long: It took 807 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.26229508196721313, 0.24721878862793573], "isController": false}, {"data": ["The operation lasted too long: It took 749 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.26229508196721313, 0.24721878862793573], "isController": false}, {"data": ["The operation lasted too long: It took 913 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}, {"data": ["The operation lasted too long: It took 743 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.06557377049180328, 0.06180469715698393], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 1618, 1525, "The operation lasted too long: It took 775 milliseconds, but should not have lasted longer than 620 milliseconds.", 65, "The operation lasted too long: It took 770 milliseconds, but should not have lasted longer than 620 milliseconds.", 55, "The operation lasted too long: It took 774 milliseconds, but should not have lasted longer than 620 milliseconds.", 51, "The operation lasted too long: It took 769 milliseconds, but should not have lasted longer than 620 milliseconds.", 47, "The operation lasted too long: It took 771 milliseconds, but should not have lasted longer than 620 milliseconds.", 46], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["GET / config=3", 1618, 1525, "The operation lasted too long: It took 775 milliseconds, but should not have lasted longer than 620 milliseconds.", 65, "The operation lasted too long: It took 770 milliseconds, but should not have lasted longer than 620 milliseconds.", 55, "The operation lasted too long: It took 774 milliseconds, but should not have lasted longer than 620 milliseconds.", 51, "The operation lasted too long: It took 769 milliseconds, but should not have lasted longer than 620 milliseconds.", 47, "The operation lasted too long: It took 771 milliseconds, but should not have lasted longer than 620 milliseconds.", 46], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
