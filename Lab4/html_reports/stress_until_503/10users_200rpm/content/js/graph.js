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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 513.0, "minX": 0.0, "maxY": 1213.0, "series": [{"data": [[0.0, 513.0], [0.1, 513.0], [0.2, 513.0], [0.3, 513.0], [0.4, 513.0], [0.5, 513.0], [0.6, 513.0], [0.7, 515.0], [0.8, 515.0], [0.9, 515.0], [1.0, 516.0], [1.1, 516.0], [1.2, 516.0], [1.3, 516.0], [1.4, 517.0], [1.5, 517.0], [1.6, 517.0], [1.7, 518.0], [1.8, 518.0], [1.9, 518.0], [2.0, 518.0], [2.1, 518.0], [2.2, 518.0], [2.3, 518.0], [2.4, 518.0], [2.5, 518.0], [2.6, 518.0], [2.7, 521.0], [2.8, 521.0], [2.9, 521.0], [3.0, 524.0], [3.1, 524.0], [3.2, 524.0], [3.3, 525.0], [3.4, 525.0], [3.5, 525.0], [3.6, 525.0], [3.7, 525.0], [3.8, 525.0], [3.9, 525.0], [4.0, 527.0], [4.1, 527.0], [4.2, 527.0], [4.3, 527.0], [4.4, 527.0], [4.5, 527.0], [4.6, 527.0], [4.7, 527.0], [4.8, 527.0], [4.9, 527.0], [5.0, 528.0], [5.1, 528.0], [5.2, 528.0], [5.3, 529.0], [5.4, 529.0], [5.5, 529.0], [5.6, 529.0], [5.7, 529.0], [5.8, 529.0], [5.9, 529.0], [6.0, 529.0], [6.1, 529.0], [6.2, 529.0], [6.3, 529.0], [6.4, 529.0], [6.5, 529.0], [6.6, 529.0], [6.7, 529.0], [6.8, 529.0], [6.9, 529.0], [7.0, 529.0], [7.1, 529.0], [7.2, 529.0], [7.3, 529.0], [7.4, 529.0], [7.5, 529.0], [7.6, 529.0], [7.7, 529.0], [7.8, 529.0], [7.9, 529.0], [8.0, 529.0], [8.1, 529.0], [8.2, 529.0], [8.3, 529.0], [8.4, 529.0], [8.5, 529.0], [8.6, 529.0], [8.7, 529.0], [8.8, 529.0], [8.9, 530.0], [9.0, 530.0], [9.1, 530.0], [9.2, 530.0], [9.3, 530.0], [9.4, 530.0], [9.5, 530.0], [9.6, 530.0], [9.7, 530.0], [9.8, 530.0], [9.9, 530.0], [10.0, 530.0], [10.1, 530.0], [10.2, 530.0], [10.3, 530.0], [10.4, 530.0], [10.5, 530.0], [10.6, 530.0], [10.7, 530.0], [10.8, 530.0], [10.9, 530.0], [11.0, 530.0], [11.1, 530.0], [11.2, 530.0], [11.3, 530.0], [11.4, 530.0], [11.5, 530.0], [11.6, 530.0], [11.7, 530.0], [11.8, 530.0], [11.9, 530.0], [12.0, 530.0], [12.1, 530.0], [12.2, 530.0], [12.3, 530.0], [12.4, 530.0], [12.5, 530.0], [12.6, 530.0], [12.7, 530.0], [12.8, 530.0], [12.9, 530.0], [13.0, 530.0], [13.1, 530.0], [13.2, 530.0], [13.3, 530.0], [13.4, 531.0], [13.5, 531.0], [13.6, 531.0], [13.7, 531.0], [13.8, 531.0], [13.9, 531.0], [14.0, 531.0], [14.1, 531.0], [14.2, 531.0], [14.3, 531.0], [14.4, 531.0], [14.5, 531.0], [14.6, 531.0], [14.7, 531.0], [14.8, 531.0], [14.9, 531.0], [15.0, 531.0], [15.1, 531.0], [15.2, 531.0], [15.3, 531.0], [15.4, 531.0], [15.5, 531.0], [15.6, 531.0], [15.7, 531.0], [15.8, 531.0], [15.9, 531.0], [16.0, 531.0], [16.1, 531.0], [16.2, 531.0], [16.3, 531.0], [16.4, 531.0], [16.5, 531.0], [16.6, 531.0], [16.7, 531.0], [16.8, 531.0], [16.9, 531.0], [17.0, 531.0], [17.1, 531.0], [17.2, 531.0], [17.3, 531.0], [17.4, 531.0], [17.5, 531.0], [17.6, 531.0], [17.7, 531.0], [17.8, 531.0], [17.9, 531.0], [18.0, 531.0], [18.1, 531.0], [18.2, 531.0], [18.3, 531.0], [18.4, 531.0], [18.5, 531.0], [18.6, 531.0], [18.7, 531.0], [18.8, 531.0], [18.9, 531.0], [19.0, 531.0], [19.1, 531.0], [19.2, 531.0], [19.3, 531.0], [19.4, 531.0], [19.5, 531.0], [19.6, 531.0], [19.7, 531.0], [19.8, 531.0], [19.9, 531.0], [20.0, 531.0], [20.1, 531.0], [20.2, 531.0], [20.3, 531.0], [20.4, 531.0], [20.5, 531.0], [20.6, 531.0], [20.7, 531.0], [20.8, 531.0], [20.9, 531.0], [21.0, 531.0], [21.1, 531.0], [21.2, 531.0], [21.3, 531.0], [21.4, 531.0], [21.5, 531.0], [21.6, 531.0], [21.7, 531.0], [21.8, 531.0], [21.9, 531.0], [22.0, 531.0], [22.1, 531.0], [22.2, 531.0], [22.3, 531.0], [22.4, 531.0], [22.5, 531.0], [22.6, 532.0], [22.7, 532.0], [22.8, 532.0], [22.9, 532.0], [23.0, 532.0], [23.1, 532.0], [23.2, 532.0], [23.3, 532.0], [23.4, 532.0], [23.5, 532.0], [23.6, 532.0], [23.7, 532.0], [23.8, 532.0], [23.9, 532.0], [24.0, 532.0], [24.1, 532.0], [24.2, 532.0], [24.3, 532.0], [24.4, 532.0], [24.5, 532.0], [24.6, 532.0], [24.7, 532.0], [24.8, 532.0], [24.9, 532.0], [25.0, 532.0], [25.1, 532.0], [25.2, 532.0], [25.3, 532.0], [25.4, 532.0], [25.5, 532.0], [25.6, 532.0], [25.7, 532.0], [25.8, 532.0], [25.9, 532.0], [26.0, 532.0], [26.1, 532.0], [26.2, 532.0], [26.3, 532.0], [26.4, 532.0], [26.5, 532.0], [26.6, 532.0], [26.7, 532.0], [26.8, 532.0], [26.9, 532.0], [27.0, 532.0], [27.1, 532.0], [27.2, 532.0], [27.3, 532.0], [27.4, 532.0], [27.5, 532.0], [27.6, 532.0], [27.7, 532.0], [27.8, 532.0], [27.9, 532.0], [28.0, 532.0], [28.1, 532.0], [28.2, 532.0], [28.3, 532.0], [28.4, 532.0], [28.5, 532.0], [28.6, 532.0], [28.7, 532.0], [28.8, 532.0], [28.9, 532.0], [29.0, 532.0], [29.1, 532.0], [29.2, 532.0], [29.3, 532.0], [29.4, 532.0], [29.5, 532.0], [29.6, 532.0], [29.7, 532.0], [29.8, 532.0], [29.9, 532.0], [30.0, 532.0], [30.1, 532.0], [30.2, 532.0], [30.3, 532.0], [30.4, 532.0], [30.5, 532.0], [30.6, 532.0], [30.7, 532.0], [30.8, 532.0], [30.9, 532.0], [31.0, 532.0], [31.1, 533.0], [31.2, 533.0], [31.3, 533.0], [31.4, 533.0], [31.5, 533.0], [31.6, 533.0], [31.7, 533.0], [31.8, 533.0], [31.9, 533.0], [32.0, 533.0], [32.1, 533.0], [32.2, 533.0], [32.3, 533.0], [32.4, 533.0], [32.5, 533.0], [32.6, 533.0], [32.7, 533.0], [32.8, 533.0], [32.9, 533.0], [33.0, 533.0], [33.1, 533.0], [33.2, 533.0], [33.3, 533.0], [33.4, 533.0], [33.5, 533.0], [33.6, 533.0], [33.7, 533.0], [33.8, 533.0], [33.9, 533.0], [34.0, 533.0], [34.1, 533.0], [34.2, 533.0], [34.3, 533.0], [34.4, 533.0], [34.5, 533.0], [34.6, 533.0], [34.7, 533.0], [34.8, 533.0], [34.9, 533.0], [35.0, 533.0], [35.1, 533.0], [35.2, 533.0], [35.3, 533.0], [35.4, 533.0], [35.5, 533.0], [35.6, 533.0], [35.7, 534.0], [35.8, 534.0], [35.9, 534.0], [36.0, 534.0], [36.1, 534.0], [36.2, 534.0], [36.3, 534.0], [36.4, 534.0], [36.5, 534.0], [36.6, 534.0], [36.7, 534.0], [36.8, 534.0], [36.9, 534.0], [37.0, 534.0], [37.1, 534.0], [37.2, 534.0], [37.3, 534.0], [37.4, 534.0], [37.5, 534.0], [37.6, 534.0], [37.7, 534.0], [37.8, 534.0], [37.9, 534.0], [38.0, 534.0], [38.1, 534.0], [38.2, 534.0], [38.3, 534.0], [38.4, 534.0], [38.5, 534.0], [38.6, 534.0], [38.7, 534.0], [38.8, 534.0], [38.9, 534.0], [39.0, 534.0], [39.1, 534.0], [39.2, 534.0], [39.3, 534.0], [39.4, 534.0], [39.5, 534.0], [39.6, 534.0], [39.7, 534.0], [39.8, 534.0], [39.9, 534.0], [40.0, 534.0], [40.1, 534.0], [40.2, 535.0], [40.3, 535.0], [40.4, 535.0], [40.5, 535.0], [40.6, 535.0], [40.7, 535.0], [40.8, 535.0], [40.9, 535.0], [41.0, 535.0], [41.1, 535.0], [41.2, 535.0], [41.3, 535.0], [41.4, 535.0], [41.5, 535.0], [41.6, 536.0], [41.7, 536.0], [41.8, 536.0], [41.9, 536.0], [42.0, 536.0], [42.1, 536.0], [42.2, 536.0], [42.3, 536.0], [42.4, 536.0], [42.5, 536.0], [42.6, 536.0], [42.7, 536.0], [42.8, 536.0], [42.9, 536.0], [43.0, 536.0], [43.1, 536.0], [43.2, 537.0], [43.3, 537.0], [43.4, 537.0], [43.5, 537.0], [43.6, 537.0], [43.7, 537.0], [43.8, 538.0], [43.9, 538.0], [44.0, 538.0], [44.1, 538.0], [44.2, 538.0], [44.3, 538.0], [44.4, 538.0], [44.5, 539.0], [44.6, 539.0], [44.7, 539.0], [44.8, 540.0], [44.9, 540.0], [45.0, 540.0], [45.1, 541.0], [45.2, 541.0], [45.3, 541.0], [45.4, 541.0], [45.5, 541.0], [45.6, 541.0], [45.7, 541.0], [45.8, 541.0], [45.9, 541.0], [46.0, 541.0], [46.1, 542.0], [46.2, 542.0], [46.3, 542.0], [46.4, 542.0], [46.5, 542.0], [46.6, 542.0], [46.7, 542.0], [46.8, 542.0], [46.9, 542.0], [47.0, 542.0], [47.1, 542.0], [47.2, 542.0], [47.3, 542.0], [47.4, 543.0], [47.5, 543.0], [47.6, 543.0], [47.7, 543.0], [47.8, 543.0], [47.9, 543.0], [48.0, 543.0], [48.1, 543.0], [48.2, 543.0], [48.3, 543.0], [48.4, 543.0], [48.5, 543.0], [48.6, 543.0], [48.7, 543.0], [48.8, 543.0], [48.9, 543.0], [49.0, 543.0], [49.1, 543.0], [49.2, 543.0], [49.3, 543.0], [49.4, 543.0], [49.5, 543.0], [49.6, 543.0], [49.7, 543.0], [49.8, 543.0], [49.9, 543.0], [50.0, 544.0], [50.1, 544.0], [50.2, 544.0], [50.3, 544.0], [50.4, 544.0], [50.5, 544.0], [50.6, 544.0], [50.7, 544.0], [50.8, 544.0], [50.9, 544.0], [51.0, 544.0], [51.1, 544.0], [51.2, 544.0], [51.3, 544.0], [51.4, 544.0], [51.5, 544.0], [51.6, 544.0], [51.7, 544.0], [51.8, 544.0], [51.9, 544.0], [52.0, 544.0], [52.1, 544.0], [52.2, 544.0], [52.3, 544.0], [52.4, 544.0], [52.5, 544.0], [52.6, 544.0], [52.7, 544.0], [52.8, 544.0], [52.9, 544.0], [53.0, 544.0], [53.1, 544.0], [53.2, 544.0], [53.3, 545.0], [53.4, 545.0], [53.5, 545.0], [53.6, 545.0], [53.7, 545.0], [53.8, 545.0], [53.9, 545.0], [54.0, 545.0], [54.1, 545.0], [54.2, 545.0], [54.3, 545.0], [54.4, 545.0], [54.5, 545.0], [54.6, 545.0], [54.7, 545.0], [54.8, 545.0], [54.9, 545.0], [55.0, 545.0], [55.1, 545.0], [55.2, 545.0], [55.3, 545.0], [55.4, 545.0], [55.5, 545.0], [55.6, 545.0], [55.7, 545.0], [55.8, 545.0], [55.9, 546.0], [56.0, 546.0], [56.1, 546.0], [56.2, 546.0], [56.3, 546.0], [56.4, 546.0], [56.5, 546.0], [56.6, 546.0], [56.7, 546.0], [56.8, 546.0], [56.9, 546.0], [57.0, 546.0], [57.1, 546.0], [57.2, 546.0], [57.3, 546.0], [57.4, 546.0], [57.5, 546.0], [57.6, 546.0], [57.7, 546.0], [57.8, 546.0], [57.9, 547.0], [58.0, 547.0], [58.1, 547.0], [58.2, 547.0], [58.3, 547.0], [58.4, 547.0], [58.5, 547.0], [58.6, 547.0], [58.7, 547.0], [58.8, 547.0], [58.9, 547.0], [59.0, 547.0], [59.1, 547.0], [59.2, 547.0], [59.3, 547.0], [59.4, 547.0], [59.5, 547.0], [59.6, 547.0], [59.7, 547.0], [59.8, 547.0], [59.9, 548.0], [60.0, 548.0], [60.1, 548.0], [60.2, 548.0], [60.3, 548.0], [60.4, 548.0], [60.5, 548.0], [60.6, 548.0], [60.7, 548.0], [60.8, 548.0], [60.9, 548.0], [61.0, 548.0], [61.1, 548.0], [61.2, 548.0], [61.3, 548.0], [61.4, 548.0], [61.5, 548.0], [61.6, 548.0], [61.7, 548.0], [61.8, 548.0], [61.9, 548.0], [62.0, 548.0], [62.1, 548.0], [62.2, 548.0], [62.3, 548.0], [62.4, 548.0], [62.5, 549.0], [62.6, 549.0], [62.7, 549.0], [62.8, 549.0], [62.9, 549.0], [63.0, 549.0], [63.1, 549.0], [63.2, 549.0], [63.3, 549.0], [63.4, 549.0], [63.5, 549.0], [63.6, 549.0], [63.7, 549.0], [63.8, 549.0], [63.9, 549.0], [64.0, 549.0], [64.1, 549.0], [64.2, 549.0], [64.3, 549.0], [64.4, 549.0], [64.5, 549.0], [64.6, 549.0], [64.7, 549.0], [64.8, 549.0], [64.9, 549.0], [65.0, 549.0], [65.1, 550.0], [65.2, 550.0], [65.3, 550.0], [65.4, 550.0], [65.5, 550.0], [65.6, 550.0], [65.7, 550.0], [65.8, 550.0], [65.9, 550.0], [66.0, 550.0], [66.1, 550.0], [66.2, 550.0], [66.3, 550.0], [66.4, 550.0], [66.5, 550.0], [66.6, 550.0], [66.7, 550.0], [66.8, 550.0], [66.9, 550.0], [67.0, 550.0], [67.1, 550.0], [67.2, 550.0], [67.3, 550.0], [67.4, 551.0], [67.5, 551.0], [67.6, 551.0], [67.7, 552.0], [67.8, 552.0], [67.9, 552.0], [68.0, 552.0], [68.1, 552.0], [68.2, 552.0], [68.3, 552.0], [68.4, 552.0], [68.5, 552.0], [68.6, 552.0], [68.7, 552.0], [68.8, 552.0], [68.9, 552.0], [69.0, 552.0], [69.1, 552.0], [69.2, 552.0], [69.3, 553.0], [69.4, 553.0], [69.5, 553.0], [69.6, 553.0], [69.7, 553.0], [69.8, 553.0], [69.9, 553.0], [70.0, 553.0], [70.1, 553.0], [70.2, 553.0], [70.3, 553.0], [70.4, 553.0], [70.5, 553.0], [70.6, 553.0], [70.7, 553.0], [70.8, 553.0], [70.9, 553.0], [71.0, 554.0], [71.1, 554.0], [71.2, 554.0], [71.3, 554.0], [71.4, 554.0], [71.5, 554.0], [71.6, 554.0], [71.7, 554.0], [71.8, 554.0], [71.9, 554.0], [72.0, 554.0], [72.1, 554.0], [72.2, 554.0], [72.3, 554.0], [72.4, 554.0], [72.5, 554.0], [72.6, 555.0], [72.7, 555.0], [72.8, 555.0], [72.9, 555.0], [73.0, 555.0], [73.1, 555.0], [73.2, 555.0], [73.3, 555.0], [73.4, 555.0], [73.5, 555.0], [73.6, 555.0], [73.7, 555.0], [73.8, 555.0], [73.9, 555.0], [74.0, 555.0], [74.1, 555.0], [74.2, 556.0], [74.3, 556.0], [74.4, 556.0], [74.5, 556.0], [74.6, 556.0], [74.7, 556.0], [74.8, 556.0], [74.9, 556.0], [75.0, 556.0], [75.1, 556.0], [75.2, 556.0], [75.3, 556.0], [75.4, 556.0], [75.5, 557.0], [75.6, 557.0], [75.7, 557.0], [75.8, 557.0], [75.9, 557.0], [76.0, 557.0], [76.1, 557.0], [76.2, 557.0], [76.3, 557.0], [76.4, 557.0], [76.5, 557.0], [76.6, 557.0], [76.7, 557.0], [76.8, 557.0], [76.9, 557.0], [77.0, 557.0], [77.1, 557.0], [77.2, 557.0], [77.3, 557.0], [77.4, 557.0], [77.5, 558.0], [77.6, 558.0], [77.7, 558.0], [77.8, 558.0], [77.9, 558.0], [78.0, 558.0], [78.1, 558.0], [78.2, 558.0], [78.3, 558.0], [78.4, 558.0], [78.5, 558.0], [78.6, 558.0], [78.7, 558.0], [78.8, 558.0], [78.9, 558.0], [79.0, 558.0], [79.1, 559.0], [79.2, 559.0], [79.3, 559.0], [79.4, 559.0], [79.5, 559.0], [79.6, 559.0], [79.7, 559.0], [79.8, 559.0], [79.9, 559.0], [80.0, 559.0], [80.1, 559.0], [80.2, 559.0], [80.3, 559.0], [80.4, 560.0], [80.5, 560.0], [80.6, 560.0], [80.7, 560.0], [80.8, 560.0], [80.9, 560.0], [81.0, 560.0], [81.1, 560.0], [81.2, 560.0], [81.3, 560.0], [81.4, 560.0], [81.5, 560.0], [81.6, 560.0], [81.7, 561.0], [81.8, 561.0], [81.9, 561.0], [82.0, 561.0], [82.1, 562.0], [82.2, 562.0], [82.3, 562.0], [82.4, 562.0], [82.5, 562.0], [82.6, 562.0], [82.7, 562.0], [82.8, 562.0], [82.9, 562.0], [83.0, 562.0], [83.1, 562.0], [83.2, 562.0], [83.3, 562.0], [83.4, 562.0], [83.5, 562.0], [83.6, 562.0], [83.7, 563.0], [83.8, 563.0], [83.9, 563.0], [84.0, 564.0], [84.1, 564.0], [84.2, 564.0], [84.3, 564.0], [84.4, 564.0], [84.5, 564.0], [84.6, 564.0], [84.7, 564.0], [84.8, 564.0], [84.9, 564.0], [85.0, 566.0], [85.1, 566.0], [85.2, 566.0], [85.3, 566.0], [85.4, 566.0], [85.5, 566.0], [85.6, 566.0], [85.7, 567.0], [85.8, 567.0], [85.9, 567.0], [86.0, 567.0], [86.1, 567.0], [86.2, 567.0], [86.3, 568.0], [86.4, 568.0], [86.5, 568.0], [86.6, 568.0], [86.7, 568.0], [86.8, 568.0], [86.9, 568.0], [87.0, 568.0], [87.1, 568.0], [87.2, 568.0], [87.3, 568.0], [87.4, 568.0], [87.5, 568.0], [87.6, 568.0], [87.7, 568.0], [87.8, 568.0], [87.9, 568.0], [88.0, 569.0], [88.1, 569.0], [88.2, 569.0], [88.3, 570.0], [88.4, 570.0], [88.5, 570.0], [88.6, 571.0], [88.7, 571.0], [88.8, 571.0], [88.9, 572.0], [89.0, 572.0], [89.1, 572.0], [89.2, 572.0], [89.3, 572.0], [89.4, 572.0], [89.5, 572.0], [89.6, 572.0], [89.7, 572.0], [89.8, 572.0], [89.9, 573.0], [90.0, 573.0], [90.1, 573.0], [90.2, 575.0], [90.3, 575.0], [90.4, 575.0], [90.5, 575.0], [90.6, 576.0], [90.7, 576.0], [90.8, 576.0], [90.9, 576.0], [91.0, 576.0], [91.1, 576.0], [91.2, 577.0], [91.3, 577.0], [91.4, 577.0], [91.5, 577.0], [91.6, 582.0], [91.7, 582.0], [91.8, 582.0], [91.9, 586.0], [92.0, 586.0], [92.1, 586.0], [92.2, 587.0], [92.3, 587.0], [92.4, 587.0], [92.5, 592.0], [92.6, 592.0], [92.7, 592.0], [92.8, 592.0], [92.9, 596.0], [93.0, 596.0], [93.1, 596.0], [93.2, 600.0], [93.3, 600.0], [93.4, 600.0], [93.5, 615.0], [93.6, 615.0], [93.7, 615.0], [93.8, 615.0], [93.9, 615.0], [94.0, 615.0], [94.1, 615.0], [94.2, 624.0], [94.3, 624.0], [94.4, 624.0], [94.5, 642.0], [94.6, 642.0], [94.7, 642.0], [94.8, 647.0], [94.9, 647.0], [95.0, 647.0], [95.1, 672.0], [95.2, 672.0], [95.3, 672.0], [95.4, 672.0], [95.5, 700.0], [95.6, 700.0], [95.7, 700.0], [95.8, 702.0], [95.9, 702.0], [96.0, 702.0], [96.1, 772.0], [96.2, 772.0], [96.3, 772.0], [96.4, 772.0], [96.5, 812.0], [96.6, 812.0], [96.7, 812.0], [96.8, 847.0], [96.9, 847.0], [97.0, 847.0], [97.1, 901.0], [97.2, 901.0], [97.3, 901.0], [97.4, 967.0], [97.5, 967.0], [97.6, 967.0], [97.7, 967.0], [97.8, 1049.0], [97.9, 1049.0], [98.0, 1049.0], [98.1, 1064.0], [98.2, 1064.0], [98.3, 1064.0], [98.4, 1108.0], [98.5, 1108.0], [98.6, 1108.0], [98.7, 1141.0], [98.8, 1141.0], [98.9, 1141.0], [99.0, 1141.0], [99.1, 1143.0], [99.2, 1143.0], [99.3, 1143.0], [99.4, 1168.0], [99.5, 1168.0], [99.6, 1168.0], [99.7, 1213.0], [99.8, 1213.0], [99.9, 1213.0], [100.0, 1213.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 285.0, "series": [{"data": [[1100.0, 4.0], [600.0, 7.0], [1200.0, 1.0], [700.0, 3.0], [800.0, 2.0], [900.0, 2.0], [500.0, 285.0], [1000.0, 2.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 18.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 288.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 288.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 18.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.092105263157892, "minX": 1.78906074E12, "maxY": 9.662337662337663, "series": [{"data": [[1.78906074E12, 9.092105263157892], [1.7890608E12, 9.662337662337663]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 10 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890608E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 529.2, "minX": 1.0, "maxY": 823.5, "series": [{"data": [[1.0, 556.0], [2.0, 537.4], [4.0, 592.5714285714286], [8.0, 823.5], [9.0, 540.7142857142858], [5.0, 529.2], [10.0, 558.9503816793896], [3.0, 546.5], [6.0, 531.0], [7.0, 541.4]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[9.37908496732026, 564.738562091504]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 400.26666666666665, "minX": 1.78906074E12, "maxY": 592.9, "series": [{"data": [[1.78906074E12, 585.2], [1.7890608E12, 592.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78906074E12, 400.26666666666665], [1.7890608E12, 405.53333333333336]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890608E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 550.6513157894736, "minX": 1.78906074E12, "maxY": 578.6428571428573, "series": [{"data": [[1.78906074E12, 550.6513157894736], [1.7890608E12, 578.6428571428573]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7890608E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 550.5460526315788, "minX": 1.78906074E12, "maxY": 578.5714285714284, "series": [{"data": [[1.78906074E12, 550.5460526315788], [1.7890608E12, 578.5714285714284]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7890608E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.09090909090909097, "minX": 1.78906074E12, "maxY": 0.20394736842105238, "series": [{"data": [[1.78906074E12, 0.20394736842105238], [1.7890608E12, 0.09090909090909097]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7890608E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 513.0, "minX": 1.78906074E12, "maxY": 615.0, "series": [{"data": [[1.78906074E12, 615.0], [1.7890608E12, 615.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78906074E12, 513.0], [1.7890608E12, 527.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78906074E12, 560.6], [1.7890608E12, 568.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78906074E12, 599.49], [1.7890608E12, 608.55]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78906074E12, 536.0], [1.7890608E12, 544.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78906074E12, 568.0], [1.7890608E12, 576.85]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890608E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 531.0, "minX": 1.0, "maxY": 1102.5, "series": [{"data": [[1.0, 556.0], [4.0, 536.0], [8.0, 551.0], [2.0, 546.0], [5.0, 531.0], [3.0, 555.0], [6.0, 533.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 801.5], [2.0, 847.0], [4.0, 718.0], [3.0, 642.0], [6.0, 1102.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 531.0, "minX": 1.0, "maxY": 1102.5, "series": [{"data": [[1.0, 552.0], [4.0, 535.5], [8.0, 551.0], [2.0, 546.0], [5.0, 531.0], [3.0, 555.0], [6.0, 533.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 801.5], [2.0, 847.0], [4.0, 717.5], [3.0, 642.0], [6.0, 1102.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.55, "minX": 1.78906074E12, "maxY": 2.55, "series": [{"data": [[1.78906074E12, 2.55], [1.7890608E12, 2.55]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890608E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.533333333333333, "minX": 1.78906074E12, "maxY": 2.566666666666667, "series": [{"data": [[1.78906074E12, 2.533333333333333], [1.7890608E12, 2.566666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890608E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.78906074E12, "maxY": 2.433333333333333, "series": [{"data": [[1.78906074E12, 2.433333333333333], [1.7890608E12, 2.3666666666666667]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78906074E12, 0.1], [1.7890608E12, 0.2]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7890608E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.1, "minX": 1.78906074E12, "maxY": 2.433333333333333, "series": [{"data": [[1.78906074E12, 2.433333333333333], [1.7890608E12, 2.3666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78906074E12, 0.1], [1.7890608E12, 0.2]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7890608E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

