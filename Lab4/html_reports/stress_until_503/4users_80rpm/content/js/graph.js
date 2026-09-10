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
        data: {"result": {"minY": 513.0, "minX": 0.0, "maxY": 1286.0, "series": [{"data": [[0.0, 513.0], [0.1, 513.0], [0.2, 513.0], [0.3, 513.0], [0.4, 513.0], [0.5, 513.0], [0.6, 513.0], [0.7, 513.0], [0.8, 513.0], [0.9, 514.0], [1.0, 514.0], [1.1, 514.0], [1.2, 514.0], [1.3, 514.0], [1.4, 514.0], [1.5, 514.0], [1.6, 514.0], [1.7, 514.0], [1.8, 514.0], [1.9, 514.0], [2.0, 514.0], [2.1, 514.0], [2.2, 514.0], [2.3, 514.0], [2.4, 514.0], [2.5, 514.0], [2.6, 514.0], [2.7, 514.0], [2.8, 514.0], [2.9, 514.0], [3.0, 514.0], [3.1, 514.0], [3.2, 514.0], [3.3, 515.0], [3.4, 515.0], [3.5, 515.0], [3.6, 515.0], [3.7, 515.0], [3.8, 515.0], [3.9, 515.0], [4.0, 515.0], [4.1, 515.0], [4.2, 515.0], [4.3, 515.0], [4.4, 515.0], [4.5, 515.0], [4.6, 515.0], [4.7, 515.0], [4.8, 515.0], [4.9, 515.0], [5.0, 515.0], [5.1, 515.0], [5.2, 515.0], [5.3, 515.0], [5.4, 515.0], [5.5, 515.0], [5.6, 515.0], [5.7, 515.0], [5.8, 515.0], [5.9, 515.0], [6.0, 515.0], [6.1, 515.0], [6.2, 515.0], [6.3, 515.0], [6.4, 515.0], [6.5, 515.0], [6.6, 515.0], [6.7, 515.0], [6.8, 515.0], [6.9, 515.0], [7.0, 515.0], [7.1, 515.0], [7.2, 515.0], [7.3, 515.0], [7.4, 515.0], [7.5, 515.0], [7.6, 515.0], [7.7, 515.0], [7.8, 515.0], [7.9, 515.0], [8.0, 515.0], [8.1, 515.0], [8.2, 515.0], [8.3, 515.0], [8.4, 515.0], [8.5, 515.0], [8.6, 515.0], [8.7, 515.0], [8.8, 515.0], [8.9, 515.0], [9.0, 515.0], [9.1, 515.0], [9.2, 515.0], [9.3, 515.0], [9.4, 515.0], [9.5, 515.0], [9.6, 515.0], [9.7, 515.0], [9.8, 515.0], [9.9, 515.0], [10.0, 515.0], [10.1, 515.0], [10.2, 515.0], [10.3, 515.0], [10.4, 515.0], [10.5, 515.0], [10.6, 516.0], [10.7, 516.0], [10.8, 516.0], [10.9, 516.0], [11.0, 516.0], [11.1, 516.0], [11.2, 516.0], [11.3, 516.0], [11.4, 516.0], [11.5, 516.0], [11.6, 516.0], [11.7, 516.0], [11.8, 516.0], [11.9, 516.0], [12.0, 516.0], [12.1, 516.0], [12.2, 516.0], [12.3, 516.0], [12.4, 516.0], [12.5, 516.0], [12.6, 516.0], [12.7, 516.0], [12.8, 516.0], [12.9, 516.0], [13.0, 516.0], [13.1, 516.0], [13.2, 516.0], [13.3, 516.0], [13.4, 516.0], [13.5, 516.0], [13.6, 516.0], [13.7, 516.0], [13.8, 516.0], [13.9, 516.0], [14.0, 516.0], [14.1, 516.0], [14.2, 516.0], [14.3, 516.0], [14.4, 516.0], [14.5, 516.0], [14.6, 516.0], [14.7, 516.0], [14.8, 516.0], [14.9, 516.0], [15.0, 516.0], [15.1, 516.0], [15.2, 516.0], [15.3, 516.0], [15.4, 516.0], [15.5, 516.0], [15.6, 516.0], [15.7, 516.0], [15.8, 516.0], [15.9, 516.0], [16.0, 516.0], [16.1, 516.0], [16.2, 516.0], [16.3, 516.0], [16.4, 516.0], [16.5, 516.0], [16.6, 516.0], [16.7, 516.0], [16.8, 516.0], [16.9, 516.0], [17.0, 516.0], [17.1, 516.0], [17.2, 516.0], [17.3, 516.0], [17.4, 516.0], [17.5, 516.0], [17.6, 516.0], [17.7, 516.0], [17.8, 516.0], [17.9, 516.0], [18.0, 516.0], [18.1, 516.0], [18.2, 516.0], [18.3, 516.0], [18.4, 516.0], [18.5, 516.0], [18.6, 516.0], [18.7, 516.0], [18.8, 516.0], [18.9, 516.0], [19.0, 516.0], [19.1, 516.0], [19.2, 516.0], [19.3, 516.0], [19.4, 516.0], [19.5, 516.0], [19.6, 517.0], [19.7, 517.0], [19.8, 517.0], [19.9, 517.0], [20.0, 517.0], [20.1, 517.0], [20.2, 517.0], [20.3, 517.0], [20.4, 517.0], [20.5, 517.0], [20.6, 517.0], [20.7, 517.0], [20.8, 517.0], [20.9, 517.0], [21.0, 517.0], [21.1, 517.0], [21.2, 517.0], [21.3, 517.0], [21.4, 517.0], [21.5, 517.0], [21.6, 517.0], [21.7, 517.0], [21.8, 517.0], [21.9, 517.0], [22.0, 517.0], [22.1, 517.0], [22.2, 517.0], [22.3, 517.0], [22.4, 517.0], [22.5, 517.0], [22.6, 517.0], [22.7, 517.0], [22.8, 517.0], [22.9, 517.0], [23.0, 517.0], [23.1, 517.0], [23.2, 517.0], [23.3, 517.0], [23.4, 517.0], [23.5, 517.0], [23.6, 518.0], [23.7, 518.0], [23.8, 518.0], [23.9, 518.0], [24.0, 518.0], [24.1, 518.0], [24.2, 518.0], [24.3, 518.0], [24.4, 518.0], [24.5, 518.0], [24.6, 518.0], [24.7, 518.0], [24.8, 518.0], [24.9, 518.0], [25.0, 518.0], [25.1, 518.0], [25.2, 518.0], [25.3, 518.0], [25.4, 518.0], [25.5, 518.0], [25.6, 518.0], [25.7, 518.0], [25.8, 518.0], [25.9, 518.0], [26.0, 518.0], [26.1, 518.0], [26.2, 518.0], [26.3, 518.0], [26.4, 518.0], [26.5, 518.0], [26.6, 518.0], [26.7, 518.0], [26.8, 518.0], [26.9, 525.0], [27.0, 525.0], [27.1, 525.0], [27.2, 525.0], [27.3, 525.0], [27.4, 525.0], [27.5, 525.0], [27.6, 525.0], [27.7, 527.0], [27.8, 527.0], [27.9, 527.0], [28.0, 527.0], [28.1, 527.0], [28.2, 527.0], [28.3, 527.0], [28.4, 527.0], [28.5, 527.0], [28.6, 527.0], [28.7, 527.0], [28.8, 527.0], [28.9, 527.0], [29.0, 527.0], [29.1, 527.0], [29.2, 527.0], [29.3, 527.0], [29.4, 527.0], [29.5, 527.0], [29.6, 527.0], [29.7, 527.0], [29.8, 527.0], [29.9, 527.0], [30.0, 527.0], [30.1, 528.0], [30.2, 528.0], [30.3, 528.0], [30.4, 528.0], [30.5, 528.0], [30.6, 528.0], [30.7, 528.0], [30.8, 528.0], [30.9, 528.0], [31.0, 528.0], [31.1, 528.0], [31.2, 528.0], [31.3, 528.0], [31.4, 528.0], [31.5, 528.0], [31.6, 528.0], [31.7, 528.0], [31.8, 528.0], [31.9, 528.0], [32.0, 528.0], [32.1, 528.0], [32.2, 528.0], [32.3, 528.0], [32.4, 528.0], [32.5, 528.0], [32.6, 528.0], [32.7, 528.0], [32.8, 528.0], [32.9, 528.0], [33.0, 528.0], [33.1, 528.0], [33.2, 528.0], [33.3, 528.0], [33.4, 529.0], [33.5, 529.0], [33.6, 529.0], [33.7, 529.0], [33.8, 529.0], [33.9, 529.0], [34.0, 529.0], [34.1, 529.0], [34.2, 529.0], [34.3, 529.0], [34.4, 529.0], [34.5, 529.0], [34.6, 529.0], [34.7, 529.0], [34.8, 529.0], [34.9, 529.0], [35.0, 530.0], [35.1, 530.0], [35.2, 530.0], [35.3, 530.0], [35.4, 530.0], [35.5, 530.0], [35.6, 530.0], [35.7, 530.0], [35.8, 530.0], [35.9, 530.0], [36.0, 530.0], [36.1, 530.0], [36.2, 530.0], [36.3, 530.0], [36.4, 530.0], [36.5, 530.0], [36.6, 531.0], [36.7, 531.0], [36.8, 531.0], [36.9, 531.0], [37.0, 531.0], [37.1, 531.0], [37.2, 531.0], [37.3, 531.0], [37.4, 531.0], [37.5, 531.0], [37.6, 531.0], [37.7, 531.0], [37.8, 531.0], [37.9, 531.0], [38.0, 531.0], [38.1, 531.0], [38.2, 531.0], [38.3, 531.0], [38.4, 531.0], [38.5, 531.0], [38.6, 531.0], [38.7, 531.0], [38.8, 531.0], [38.9, 531.0], [39.0, 531.0], [39.1, 532.0], [39.2, 532.0], [39.3, 532.0], [39.4, 532.0], [39.5, 532.0], [39.6, 532.0], [39.7, 532.0], [39.8, 532.0], [39.9, 532.0], [40.0, 532.0], [40.1, 532.0], [40.2, 532.0], [40.3, 532.0], [40.4, 532.0], [40.5, 532.0], [40.6, 532.0], [40.7, 533.0], [40.8, 533.0], [40.9, 533.0], [41.0, 533.0], [41.1, 533.0], [41.2, 533.0], [41.3, 533.0], [41.4, 533.0], [41.5, 533.0], [41.6, 533.0], [41.7, 533.0], [41.8, 533.0], [41.9, 533.0], [42.0, 533.0], [42.1, 533.0], [42.2, 533.0], [42.3, 533.0], [42.4, 533.0], [42.5, 533.0], [42.6, 533.0], [42.7, 533.0], [42.8, 533.0], [42.9, 533.0], [43.0, 533.0], [43.1, 534.0], [43.2, 534.0], [43.3, 534.0], [43.4, 534.0], [43.5, 534.0], [43.6, 534.0], [43.7, 534.0], [43.8, 534.0], [43.9, 534.0], [44.0, 534.0], [44.1, 534.0], [44.2, 534.0], [44.3, 534.0], [44.4, 534.0], [44.5, 534.0], [44.6, 534.0], [44.7, 534.0], [44.8, 534.0], [44.9, 534.0], [45.0, 534.0], [45.1, 534.0], [45.2, 534.0], [45.3, 534.0], [45.4, 534.0], [45.5, 534.0], [45.6, 534.0], [45.7, 534.0], [45.8, 534.0], [45.9, 534.0], [46.0, 534.0], [46.1, 534.0], [46.2, 534.0], [46.3, 534.0], [46.4, 535.0], [46.5, 535.0], [46.6, 535.0], [46.7, 535.0], [46.8, 535.0], [46.9, 535.0], [47.0, 535.0], [47.1, 535.0], [47.2, 535.0], [47.3, 535.0], [47.4, 535.0], [47.5, 535.0], [47.6, 535.0], [47.7, 535.0], [47.8, 535.0], [47.9, 535.0], [48.0, 535.0], [48.1, 535.0], [48.2, 535.0], [48.3, 535.0], [48.4, 535.0], [48.5, 535.0], [48.6, 535.0], [48.7, 535.0], [48.8, 536.0], [48.9, 536.0], [49.0, 536.0], [49.1, 536.0], [49.2, 536.0], [49.3, 536.0], [49.4, 536.0], [49.5, 536.0], [49.6, 536.0], [49.7, 536.0], [49.8, 536.0], [49.9, 536.0], [50.0, 536.0], [50.1, 536.0], [50.2, 536.0], [50.3, 536.0], [50.4, 536.0], [50.5, 536.0], [50.6, 536.0], [50.7, 536.0], [50.8, 536.0], [50.9, 536.0], [51.0, 536.0], [51.1, 536.0], [51.2, 536.0], [51.3, 536.0], [51.4, 536.0], [51.5, 536.0], [51.6, 536.0], [51.7, 536.0], [51.8, 536.0], [51.9, 536.0], [52.0, 536.0], [52.1, 537.0], [52.2, 537.0], [52.3, 537.0], [52.4, 537.0], [52.5, 537.0], [52.6, 537.0], [52.7, 537.0], [52.8, 537.0], [52.9, 537.0], [53.0, 537.0], [53.1, 537.0], [53.2, 537.0], [53.3, 537.0], [53.4, 537.0], [53.5, 537.0], [53.6, 537.0], [53.7, 537.0], [53.8, 537.0], [53.9, 537.0], [54.0, 537.0], [54.1, 537.0], [54.2, 537.0], [54.3, 537.0], [54.4, 537.0], [54.5, 537.0], [54.6, 537.0], [54.7, 537.0], [54.8, 537.0], [54.9, 537.0], [55.0, 537.0], [55.1, 537.0], [55.2, 537.0], [55.3, 538.0], [55.4, 538.0], [55.5, 538.0], [55.6, 538.0], [55.7, 538.0], [55.8, 538.0], [55.9, 538.0], [56.0, 538.0], [56.1, 538.0], [56.2, 538.0], [56.3, 538.0], [56.4, 538.0], [56.5, 538.0], [56.6, 538.0], [56.7, 538.0], [56.8, 538.0], [56.9, 538.0], [57.0, 538.0], [57.1, 538.0], [57.2, 538.0], [57.3, 538.0], [57.4, 538.0], [57.5, 538.0], [57.6, 538.0], [57.7, 538.0], [57.8, 538.0], [57.9, 538.0], [58.0, 538.0], [58.1, 538.0], [58.2, 538.0], [58.3, 538.0], [58.4, 538.0], [58.5, 538.0], [58.6, 538.0], [58.7, 538.0], [58.8, 538.0], [58.9, 538.0], [59.0, 538.0], [59.1, 538.0], [59.2, 538.0], [59.3, 538.0], [59.4, 539.0], [59.5, 539.0], [59.6, 539.0], [59.7, 539.0], [59.8, 539.0], [59.9, 539.0], [60.0, 539.0], [60.1, 539.0], [60.2, 539.0], [60.3, 539.0], [60.4, 539.0], [60.5, 539.0], [60.6, 539.0], [60.7, 539.0], [60.8, 539.0], [60.9, 539.0], [61.0, 539.0], [61.1, 539.0], [61.2, 539.0], [61.3, 539.0], [61.4, 539.0], [61.5, 539.0], [61.6, 539.0], [61.7, 539.0], [61.8, 539.0], [61.9, 539.0], [62.0, 539.0], [62.1, 539.0], [62.2, 539.0], [62.3, 539.0], [62.4, 539.0], [62.5, 539.0], [62.6, 539.0], [62.7, 539.0], [62.8, 539.0], [62.9, 539.0], [63.0, 539.0], [63.1, 539.0], [63.2, 539.0], [63.3, 539.0], [63.4, 539.0], [63.5, 539.0], [63.6, 539.0], [63.7, 539.0], [63.8, 539.0], [63.9, 539.0], [64.0, 539.0], [64.1, 539.0], [64.2, 539.0], [64.3, 539.0], [64.4, 539.0], [64.5, 539.0], [64.6, 539.0], [64.7, 539.0], [64.8, 539.0], [64.9, 539.0], [65.0, 539.0], [65.1, 539.0], [65.2, 539.0], [65.3, 539.0], [65.4, 539.0], [65.5, 539.0], [65.6, 539.0], [65.7, 539.0], [65.8, 539.0], [65.9, 540.0], [66.0, 540.0], [66.1, 540.0], [66.2, 540.0], [66.3, 540.0], [66.4, 540.0], [66.5, 540.0], [66.6, 540.0], [66.7, 540.0], [66.8, 540.0], [66.9, 540.0], [67.0, 540.0], [67.1, 540.0], [67.2, 540.0], [67.3, 540.0], [67.4, 540.0], [67.5, 540.0], [67.6, 540.0], [67.7, 540.0], [67.8, 540.0], [67.9, 540.0], [68.0, 540.0], [68.1, 540.0], [68.2, 540.0], [68.3, 541.0], [68.4, 541.0], [68.5, 541.0], [68.6, 541.0], [68.7, 541.0], [68.8, 541.0], [68.9, 541.0], [69.0, 541.0], [69.1, 541.0], [69.2, 541.0], [69.3, 541.0], [69.4, 541.0], [69.5, 541.0], [69.6, 541.0], [69.7, 541.0], [69.8, 541.0], [69.9, 541.0], [70.0, 541.0], [70.1, 541.0], [70.2, 541.0], [70.3, 541.0], [70.4, 541.0], [70.5, 541.0], [70.6, 541.0], [70.7, 541.0], [70.8, 541.0], [70.9, 541.0], [71.0, 541.0], [71.1, 541.0], [71.2, 541.0], [71.3, 541.0], [71.4, 541.0], [71.5, 541.0], [71.6, 541.0], [71.7, 541.0], [71.8, 541.0], [71.9, 541.0], [72.0, 541.0], [72.1, 541.0], [72.2, 541.0], [72.3, 541.0], [72.4, 542.0], [72.5, 542.0], [72.6, 542.0], [72.7, 542.0], [72.8, 542.0], [72.9, 542.0], [73.0, 542.0], [73.1, 542.0], [73.2, 542.0], [73.3, 542.0], [73.4, 542.0], [73.5, 542.0], [73.6, 542.0], [73.7, 542.0], [73.8, 542.0], [73.9, 542.0], [74.0, 542.0], [74.1, 542.0], [74.2, 542.0], [74.3, 542.0], [74.4, 542.0], [74.5, 542.0], [74.6, 542.0], [74.7, 542.0], [74.8, 542.0], [74.9, 542.0], [75.0, 542.0], [75.1, 542.0], [75.2, 542.0], [75.3, 542.0], [75.4, 542.0], [75.5, 542.0], [75.6, 542.0], [75.7, 542.0], [75.8, 542.0], [75.9, 542.0], [76.0, 542.0], [76.1, 542.0], [76.2, 542.0], [76.3, 542.0], [76.4, 542.0], [76.5, 542.0], [76.6, 542.0], [76.7, 542.0], [76.8, 542.0], [76.9, 542.0], [77.0, 542.0], [77.1, 542.0], [77.2, 542.0], [77.3, 543.0], [77.4, 543.0], [77.5, 543.0], [77.6, 543.0], [77.7, 543.0], [77.8, 543.0], [77.9, 543.0], [78.0, 543.0], [78.1, 543.0], [78.2, 543.0], [78.3, 543.0], [78.4, 543.0], [78.5, 543.0], [78.6, 543.0], [78.7, 543.0], [78.8, 543.0], [78.9, 543.0], [79.0, 543.0], [79.1, 543.0], [79.2, 543.0], [79.3, 543.0], [79.4, 543.0], [79.5, 543.0], [79.6, 543.0], [79.7, 543.0], [79.8, 543.0], [79.9, 543.0], [80.0, 543.0], [80.1, 543.0], [80.2, 543.0], [80.3, 543.0], [80.4, 543.0], [80.5, 544.0], [80.6, 544.0], [80.7, 544.0], [80.8, 544.0], [80.9, 544.0], [81.0, 544.0], [81.1, 544.0], [81.2, 544.0], [81.3, 544.0], [81.4, 544.0], [81.5, 544.0], [81.6, 544.0], [81.7, 544.0], [81.8, 544.0], [81.9, 544.0], [82.0, 544.0], [82.1, 544.0], [82.2, 545.0], [82.3, 545.0], [82.4, 545.0], [82.5, 545.0], [82.6, 545.0], [82.7, 545.0], [82.8, 545.0], [82.9, 545.0], [83.0, 545.0], [83.1, 545.0], [83.2, 545.0], [83.3, 545.0], [83.4, 545.0], [83.5, 545.0], [83.6, 545.0], [83.7, 545.0], [83.8, 545.0], [83.9, 545.0], [84.0, 545.0], [84.1, 545.0], [84.2, 545.0], [84.3, 545.0], [84.4, 545.0], [84.5, 545.0], [84.6, 545.0], [84.7, 545.0], [84.8, 545.0], [84.9, 545.0], [85.0, 545.0], [85.1, 545.0], [85.2, 545.0], [85.3, 545.0], [85.4, 546.0], [85.5, 546.0], [85.6, 546.0], [85.7, 546.0], [85.8, 546.0], [85.9, 546.0], [86.0, 546.0], [86.1, 546.0], [86.2, 546.0], [86.3, 546.0], [86.4, 546.0], [86.5, 546.0], [86.6, 546.0], [86.7, 546.0], [86.8, 546.0], [86.9, 546.0], [87.0, 547.0], [87.1, 547.0], [87.2, 547.0], [87.3, 547.0], [87.4, 547.0], [87.5, 547.0], [87.6, 547.0], [87.7, 547.0], [87.8, 547.0], [87.9, 547.0], [88.0, 547.0], [88.1, 547.0], [88.2, 547.0], [88.3, 547.0], [88.4, 547.0], [88.5, 547.0], [88.6, 547.0], [88.7, 548.0], [88.8, 548.0], [88.9, 548.0], [89.0, 548.0], [89.1, 548.0], [89.2, 548.0], [89.3, 548.0], [89.4, 548.0], [89.5, 550.0], [89.6, 550.0], [89.7, 550.0], [89.8, 550.0], [89.9, 550.0], [90.0, 550.0], [90.1, 550.0], [90.2, 550.0], [90.3, 550.0], [90.4, 550.0], [90.5, 550.0], [90.6, 550.0], [90.7, 550.0], [90.8, 550.0], [90.9, 550.0], [91.0, 550.0], [91.1, 557.0], [91.2, 557.0], [91.3, 557.0], [91.4, 557.0], [91.5, 557.0], [91.6, 557.0], [91.7, 557.0], [91.8, 557.0], [91.9, 562.0], [92.0, 562.0], [92.1, 562.0], [92.2, 562.0], [92.3, 562.0], [92.4, 562.0], [92.5, 562.0], [92.6, 562.0], [92.7, 562.0], [92.8, 562.0], [92.9, 562.0], [93.0, 562.0], [93.1, 562.0], [93.2, 562.0], [93.3, 562.0], [93.4, 562.0], [93.5, 573.0], [93.6, 573.0], [93.7, 573.0], [93.8, 573.0], [93.9, 573.0], [94.0, 573.0], [94.1, 573.0], [94.2, 573.0], [94.3, 573.0], [94.4, 576.0], [94.5, 576.0], [94.6, 576.0], [94.7, 576.0], [94.8, 576.0], [94.9, 576.0], [95.0, 576.0], [95.1, 576.0], [95.2, 586.0], [95.3, 586.0], [95.4, 586.0], [95.5, 586.0], [95.6, 586.0], [95.7, 586.0], [95.8, 586.0], [95.9, 586.0], [96.0, 603.0], [96.1, 603.0], [96.2, 603.0], [96.3, 603.0], [96.4, 603.0], [96.5, 603.0], [96.6, 603.0], [96.7, 603.0], [96.8, 619.0], [96.9, 619.0], [97.0, 619.0], [97.1, 619.0], [97.2, 619.0], [97.3, 619.0], [97.4, 619.0], [97.5, 619.0], [97.6, 824.0], [97.7, 824.0], [97.8, 824.0], [97.9, 824.0], [98.0, 824.0], [98.1, 824.0], [98.2, 824.0], [98.3, 824.0], [98.4, 1074.0], [98.5, 1074.0], [98.6, 1074.0], [98.7, 1074.0], [98.8, 1074.0], [98.9, 1074.0], [99.0, 1074.0], [99.1, 1074.0], [99.2, 1286.0], [99.3, 1286.0], [99.4, 1286.0], [99.5, 1286.0], [99.6, 1286.0], [99.7, 1286.0], [99.8, 1286.0], [99.9, 1286.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 118.0, "series": [{"data": [[1200.0, 1.0], [600.0, 2.0], [800.0, 1.0], [500.0, 118.0], [1000.0, 1.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 120.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 120.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.761904761904761, "minX": 1.78906044E12, "maxY": 3.8888888888888893, "series": [{"data": [[1.78906044E12, 3.761904761904761], [1.7890605E12, 3.8888888888888893]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 4 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890605E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 538.25, "minX": 1.0, "maxY": 548.070796460177, "series": [{"data": [[1.0, 539.6666666666666], [2.0, 539.6666666666666], [4.0, 548.070796460177], [3.0, 538.25]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[3.845528455284552, 547.3414634146343]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 4.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 110.6, "minX": 1.78906044E12, "maxY": 311.85, "series": [{"data": [[1.78906044E12, 161.7], [1.7890605E12, 311.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78906044E12, 110.6], [1.7890605E12, 213.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890605E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 532.6904761904761, "minX": 1.78906044E12, "maxY": 554.9382716049383, "series": [{"data": [[1.78906044E12, 532.6904761904761], [1.7890605E12, 554.9382716049383]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7890605E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 532.4047619047618, "minX": 1.78906044E12, "maxY": 554.888888888889, "series": [{"data": [[1.78906044E12, 532.4047619047618], [1.7890605E12, 554.888888888889]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7890605E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.08641975308641973, "minX": 1.78906044E12, "maxY": 0.5, "series": [{"data": [[1.78906044E12, 0.5], [1.7890605E12, 0.08641975308641973]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7890605E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 513.0, "minX": 1.78906044E12, "maxY": 619.0, "series": [{"data": [[1.78906044E12, 562.0], [1.7890605E12, 619.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78906044E12, 514.0], [1.7890605E12, 513.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78906044E12, 546.4], [1.7890605E12, 550.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78906044E12, 562.0], [1.7890605E12, 619.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78906044E12, 533.5], [1.7890605E12, 536.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78906044E12, 559.75], [1.7890605E12, 576.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890605E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 534.5, "minX": 1.0, "maxY": 1074.0, "series": [{"data": [[1.0, 534.5], [2.0, 535.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[3.0, 1074.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 534.5, "minX": 1.0, "maxY": 1073.0, "series": [{"data": [[1.0, 534.5], [2.0, 535.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[3.0, 1073.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.7166666666666667, "minX": 1.78906044E12, "maxY": 1.3333333333333333, "series": [{"data": [[1.78906044E12, 0.7166666666666667], [1.7890605E12, 1.3333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890605E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.7, "minX": 1.78906044E12, "maxY": 1.35, "series": [{"data": [[1.78906044E12, 0.7], [1.7890605E12, 1.35]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890605E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.78906044E12, "maxY": 1.3, "series": [{"data": [[1.78906044E12, 0.7], [1.7890605E12, 1.3]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.7890605E12, 0.05]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7890605E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.05, "minX": 1.78906044E12, "maxY": 1.3, "series": [{"data": [[1.78906044E12, 0.7], [1.7890605E12, 1.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7890605E12, 0.05]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7890605E12, "title": "Total Transactions Per Second"}},
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

