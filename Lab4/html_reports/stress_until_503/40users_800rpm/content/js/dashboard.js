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

    var data = {"OkPercent": 8.860759493670885, "KoPercent": 91.13924050632912};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.04430379746835443, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.04430379746835443, 500, 1500, "GET / config=3"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 1185, 1080, 91.13924050632912, 659.510548523206, 524, 1394, 662.0, 686.0, 693.0, 744.1000000000015, 13.087993284810198, 2.952467235147613, 2.019436463867198], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["GET / config=3", 1185, 1080, 91.13924050632912, 659.510548523206, 524, 1394, 662.0, 686.0, 693.0, 744.1000000000015, 13.087993284810198, 2.952467235147613, 2.019436463867198], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 710 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 623 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.18518518518518517, 0.16877637130801687], "isController": false}, {"data": ["The operation lasted too long: It took 690 milliseconds, but should not have lasted longer than 620 milliseconds.", 9, 0.8333333333333334, 0.759493670886076], "isController": false}, {"data": ["The operation lasted too long: It took 680 milliseconds, but should not have lasted longer than 620 milliseconds.", 11, 1.0185185185185186, 0.9282700421940928], "isController": false}, {"data": ["The operation lasted too long: It took 675 milliseconds, but should not have lasted longer than 620 milliseconds.", 14, 1.2962962962962963, 1.1814345991561181], "isController": false}, {"data": ["The operation lasted too long: It took 655 milliseconds, but should not have lasted longer than 620 milliseconds.", 36, 3.3333333333333335, 3.037974683544304], "isController": false}, {"data": ["The operation lasted too long: It took 700 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.2777777777777778, 0.25316455696202533], "isController": false}, {"data": ["The operation lasted too long: It took 705 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.2777777777777778, 0.25316455696202533], "isController": false}, {"data": ["The operation lasted too long: It took 670 milliseconds, but should not have lasted longer than 620 milliseconds.", 16, 1.4814814814814814, 1.350210970464135], "isController": false}, {"data": ["The operation lasted too long: It took 628 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 742 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 697 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.2777777777777778, 0.25316455696202533], "isController": false}, {"data": ["The operation lasted too long: It took 633 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.37037037037037035, 0.33755274261603374], "isController": false}, {"data": ["The operation lasted too long: It took 665 milliseconds, but should not have lasted longer than 620 milliseconds.", 40, 3.7037037037037037, 3.3755274261603376], "isController": false}, {"data": ["The operation lasted too long: It took 638 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.37037037037037035, 0.33755274261603374], "isController": false}, {"data": ["The operation lasted too long: It took 883 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 757 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.18518518518518517, 0.16877637130801687], "isController": false}, {"data": ["The operation lasted too long: It took 635 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 712 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 667 milliseconds, but should not have lasted longer than 620 milliseconds.", 28, 2.5925925925925926, 2.3628691983122363], "isController": false}, {"data": ["The operation lasted too long: It took 687 milliseconds, but should not have lasted longer than 620 milliseconds.", 10, 0.9259259259259259, 0.8438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 715 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 645 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 648 milliseconds, but should not have lasted longer than 620 milliseconds.", 11, 1.0185185185185186, 0.9282700421940928], "isController": false}, {"data": ["The operation lasted too long: It took 677 milliseconds, but should not have lasted longer than 620 milliseconds.", 21, 1.9444444444444444, 1.7721518987341771], "isController": false}, {"data": ["The operation lasted too long: It took 668 milliseconds, but should not have lasted longer than 620 milliseconds.", 25, 2.314814814814815, 2.109704641350211], "isController": false}, {"data": ["The operation lasted too long: It took 683 milliseconds, but should not have lasted longer than 620 milliseconds.", 12, 1.1111111111111112, 1.0126582278481013], "isController": false}, {"data": ["The operation lasted too long: It took 679 milliseconds, but should not have lasted longer than 620 milliseconds.", 11, 1.0185185185185186, 0.9282700421940928], "isController": false}, {"data": ["The operation lasted too long: It took 693 milliseconds, but should not have lasted longer than 620 milliseconds.", 10, 0.9259259259259259, 0.8438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 672 milliseconds, but should not have lasted longer than 620 milliseconds.", 19, 1.7592592592592593, 1.6033755274261603], "isController": false}, {"data": ["The operation lasted too long: It took 658 milliseconds, but should not have lasted longer than 620 milliseconds.", 44, 4.074074074074074, 3.7130801687763713], "isController": false}, {"data": ["The operation lasted too long: It took 652 milliseconds, but should not have lasted longer than 620 milliseconds.", 25, 2.314814814814815, 2.109704641350211], "isController": false}, {"data": ["The operation lasted too long: It took 625 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 702 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 678 milliseconds, but should not have lasted longer than 620 milliseconds.", 24, 2.2222222222222223, 2.0253164556962027], "isController": false}, {"data": ["The operation lasted too long: It took 673 milliseconds, but should not have lasted longer than 620 milliseconds.", 12, 1.1111111111111112, 1.0126582278481013], "isController": false}, {"data": ["The operation lasted too long: It took 662 milliseconds, but should not have lasted longer than 620 milliseconds.", 30, 2.7777777777777777, 2.5316455696202533], "isController": false}, {"data": ["The operation lasted too long: It took 708 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 689 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 0.5555555555555556, 0.5063291139240507], "isController": false}, {"data": ["The operation lasted too long: It took 701 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 698 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.18518518518518517, 0.16877637130801687], "isController": false}, {"data": ["The operation lasted too long: It took 692 milliseconds, but should not have lasted longer than 620 milliseconds.", 9, 0.8333333333333334, 0.759493670886076], "isController": false}, {"data": ["The operation lasted too long: It took 659 milliseconds, but should not have lasted longer than 620 milliseconds.", 21, 1.9444444444444444, 1.7721518987341771], "isController": false}, {"data": ["The operation lasted too long: It took 649 milliseconds, but should not have lasted longer than 620 milliseconds.", 15, 1.3888888888888888, 1.2658227848101267], "isController": false}, {"data": ["The operation lasted too long: It took 688 milliseconds, but should not have lasted longer than 620 milliseconds.", 11, 1.0185185185185186, 0.9282700421940928], "isController": false}, {"data": ["The operation lasted too long: It took 663 milliseconds, but should not have lasted longer than 620 milliseconds.", 27, 2.5, 2.278481012658228], "isController": false}, {"data": ["The operation lasted too long: It took 858 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.18518518518518517, 0.16877637130801687], "isController": false}, {"data": ["The operation lasted too long: It took 643 milliseconds, but should not have lasted longer than 620 milliseconds.", 9, 0.8333333333333334, 0.759493670886076], "isController": false}, {"data": ["The operation lasted too long: It took 717 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 682 milliseconds, but should not have lasted longer than 620 milliseconds.", 11, 1.0185185185185186, 0.9282700421940928], "isController": false}, {"data": ["The operation lasted too long: It took 669 milliseconds, but should not have lasted longer than 620 milliseconds.", 14, 1.2962962962962963, 1.1814345991561181], "isController": false}, {"data": ["The operation lasted too long: It took 711 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.18518518518518517, 0.16877637130801687], "isController": false}, {"data": ["The operation lasted too long: It took 775 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 653 milliseconds, but should not have lasted longer than 620 milliseconds.", 25, 2.314814814814815, 2.109704641350211], "isController": false}, {"data": ["The operation lasted too long: It took 686 milliseconds, but should not have lasted longer than 620 milliseconds.", 9, 0.8333333333333334, 0.759493670886076], "isController": false}, {"data": ["The operation lasted too long: It took 1,293 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 731 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 644 milliseconds, but should not have lasted longer than 620 milliseconds.", 11, 1.0185185185185186, 0.9282700421940928], "isController": false}, {"data": ["The operation lasted too long: It took 716 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.18518518518518517, 0.16877637130801687], "isController": false}, {"data": ["The operation lasted too long: It took 654 milliseconds, but should not have lasted longer than 620 milliseconds.", 24, 2.2222222222222223, 2.0253164556962027], "isController": false}, {"data": ["The operation lasted too long: It took 696 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 0.5555555555555556, 0.5063291139240507], "isController": false}, {"data": ["The operation lasted too long: It took 691 milliseconds, but should not have lasted longer than 620 milliseconds.", 7, 0.6481481481481481, 0.5907172995780591], "isController": false}, {"data": ["The operation lasted too long: It took 676 milliseconds, but should not have lasted longer than 620 milliseconds.", 19, 1.7592592592592593, 1.6033755274261603], "isController": false}, {"data": ["The operation lasted too long: It took 1,318 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 639 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.37037037037037035, 0.33755274261603374], "isController": false}, {"data": ["The operation lasted too long: It took 674 milliseconds, but should not have lasted longer than 620 milliseconds.", 22, 2.037037037037037, 1.8565400843881856], "isController": false}, {"data": ["The operation lasted too long: It took 671 milliseconds, but should not have lasted longer than 620 milliseconds.", 24, 2.2222222222222223, 2.0253164556962027], "isController": false}, {"data": ["The operation lasted too long: It took 642 milliseconds, but should not have lasted longer than 620 milliseconds.", 10, 0.9259259259259259, 0.8438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 681 milliseconds, but should not have lasted longer than 620 milliseconds.", 13, 1.2037037037037037, 1.0970464135021096], "isController": false}, {"data": ["The operation lasted too long: It took 684 milliseconds, but should not have lasted longer than 620 milliseconds.", 12, 1.1111111111111112, 1.0126582278481013], "isController": false}, {"data": ["The operation lasted too long: It took 661 milliseconds, but should not have lasted longer than 620 milliseconds.", 39, 3.611111111111111, 3.2911392405063293], "isController": false}, {"data": ["The operation lasted too long: It took 664 milliseconds, but should not have lasted longer than 620 milliseconds.", 26, 2.4074074074074074, 2.1940928270042193], "isController": false}, {"data": ["The operation lasted too long: It took 632 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.18518518518518517, 0.16877637130801687], "isController": false}, {"data": ["The operation lasted too long: It took 647 milliseconds, but should not have lasted longer than 620 milliseconds.", 14, 1.2962962962962963, 1.1814345991561181], "isController": false}, {"data": ["The operation lasted too long: It took 626 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 1,394 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 713 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 709 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 703 milliseconds, but should not have lasted longer than 620 milliseconds.", 3, 0.2777777777777778, 0.25316455696202533], "isController": false}, {"data": ["The operation lasted too long: It took 637 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 651 milliseconds, but should not have lasted longer than 620 milliseconds.", 22, 2.037037037037037, 1.8565400843881856], "isController": false}, {"data": ["The operation lasted too long: It took 657 milliseconds, but should not have lasted longer than 620 milliseconds.", 50, 4.62962962962963, 4.219409282700422], "isController": false}, {"data": ["The operation lasted too long: It took 636 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 694 milliseconds, but should not have lasted longer than 620 milliseconds.", 4, 0.37037037037037035, 0.33755274261603374], "isController": false}, {"data": ["The operation lasted too long: It took 734 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 641 milliseconds, but should not have lasted longer than 620 milliseconds.", 11, 1.0185185185185186, 0.9282700421940928], "isController": false}, {"data": ["The operation lasted too long: It took 656 milliseconds, but should not have lasted longer than 620 milliseconds.", 35, 3.240740740740741, 2.9535864978902953], "isController": false}, {"data": ["The operation lasted too long: It took 621 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 704 milliseconds, but should not have lasted longer than 620 milliseconds.", 2, 0.18518518518518517, 0.16877637130801687], "isController": false}, {"data": ["The operation lasted too long: It took 830 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 646 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 0.5555555555555556, 0.5063291139240507], "isController": false}, {"data": ["The operation lasted too long: It took 660 milliseconds, but should not have lasted longer than 620 milliseconds.", 31, 2.8703703703703702, 2.6160337552742616], "isController": false}, {"data": ["The operation lasted too long: It took 640 milliseconds, but should not have lasted longer than 620 milliseconds.", 6, 0.5555555555555556, 0.5063291139240507], "isController": false}, {"data": ["The operation lasted too long: It took 836 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}, {"data": ["The operation lasted too long: It took 685 milliseconds, but should not have lasted longer than 620 milliseconds.", 14, 1.2962962962962963, 1.1814345991561181], "isController": false}, {"data": ["The operation lasted too long: It took 666 milliseconds, but should not have lasted longer than 620 milliseconds.", 25, 2.314814814814815, 2.109704641350211], "isController": false}, {"data": ["The operation lasted too long: It took 650 milliseconds, but should not have lasted longer than 620 milliseconds.", 16, 1.4814814814814814, 1.350210970464135], "isController": false}, {"data": ["The operation lasted too long: It took 627 milliseconds, but should not have lasted longer than 620 milliseconds.", 1, 0.09259259259259259, 0.08438818565400844], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 1185, 1080, "The operation lasted too long: It took 657 milliseconds, but should not have lasted longer than 620 milliseconds.", 50, "The operation lasted too long: It took 658 milliseconds, but should not have lasted longer than 620 milliseconds.", 44, "The operation lasted too long: It took 665 milliseconds, but should not have lasted longer than 620 milliseconds.", 40, "The operation lasted too long: It took 661 milliseconds, but should not have lasted longer than 620 milliseconds.", 39, "The operation lasted too long: It took 655 milliseconds, but should not have lasted longer than 620 milliseconds.", 36], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["GET / config=3", 1185, 1080, "The operation lasted too long: It took 657 milliseconds, but should not have lasted longer than 620 milliseconds.", 50, "The operation lasted too long: It took 658 milliseconds, but should not have lasted longer than 620 milliseconds.", 44, "The operation lasted too long: It took 665 milliseconds, but should not have lasted longer than 620 milliseconds.", 40, "The operation lasted too long: It took 661 milliseconds, but should not have lasted longer than 620 milliseconds.", 39, "The operation lasted too long: It took 655 milliseconds, but should not have lasted longer than 620 milliseconds.", 36], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
