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
        data: {"result": {"minY": 521.0, "minX": 0.0, "maxY": 1443.0, "series": [{"data": [[0.0, 521.0], [0.1, 521.0], [0.2, 523.0], [0.3, 525.0], [0.4, 525.0], [0.5, 531.0], [0.6, 531.0], [0.7, 531.0], [0.8, 531.0], [0.9, 536.0], [1.0, 536.0], [1.1, 536.0], [1.2, 537.0], [1.3, 538.0], [1.4, 538.0], [1.5, 538.0], [1.6, 538.0], [1.7, 539.0], [1.8, 539.0], [1.9, 541.0], [2.0, 541.0], [2.1, 542.0], [2.2, 542.0], [2.3, 543.0], [2.4, 543.0], [2.5, 543.0], [2.6, 543.0], [2.7, 543.0], [2.8, 543.0], [2.9, 543.0], [3.0, 543.0], [3.1, 544.0], [3.2, 544.0], [3.3, 544.0], [3.4, 544.0], [3.5, 545.0], [3.6, 545.0], [3.7, 546.0], [3.8, 548.0], [3.9, 548.0], [4.0, 548.0], [4.1, 549.0], [4.2, 549.0], [4.3, 549.0], [4.4, 549.0], [4.5, 550.0], [4.6, 551.0], [4.7, 551.0], [4.8, 551.0], [4.9, 551.0], [5.0, 552.0], [5.1, 552.0], [5.2, 553.0], [5.3, 554.0], [5.4, 554.0], [5.5, 554.0], [5.6, 555.0], [5.7, 555.0], [5.8, 555.0], [5.9, 555.0], [6.0, 558.0], [6.1, 558.0], [6.2, 558.0], [6.3, 558.0], [6.4, 560.0], [6.5, 560.0], [6.6, 561.0], [6.7, 562.0], [6.8, 563.0], [6.9, 563.0], [7.0, 563.0], [7.1, 565.0], [7.2, 565.0], [7.3, 566.0], [7.4, 566.0], [7.5, 567.0], [7.6, 567.0], [7.7, 568.0], [7.8, 570.0], [7.9, 571.0], [8.0, 571.0], [8.1, 571.0], [8.2, 571.0], [8.3, 571.0], [8.4, 571.0], [8.5, 571.0], [8.6, 572.0], [8.7, 572.0], [8.8, 572.0], [8.9, 572.0], [9.0, 572.0], [9.1, 572.0], [9.2, 572.0], [9.3, 572.0], [9.4, 572.0], [9.5, 572.0], [9.6, 572.0], [9.7, 572.0], [9.8, 572.0], [9.9, 572.0], [10.0, 572.0], [10.1, 572.0], [10.2, 572.0], [10.3, 572.0], [10.4, 572.0], [10.5, 572.0], [10.6, 572.0], [10.7, 572.0], [10.8, 572.0], [10.9, 573.0], [11.0, 573.0], [11.1, 573.0], [11.2, 573.0], [11.3, 573.0], [11.4, 573.0], [11.5, 573.0], [11.6, 573.0], [11.7, 573.0], [11.8, 573.0], [11.9, 573.0], [12.0, 573.0], [12.1, 573.0], [12.2, 573.0], [12.3, 573.0], [12.4, 573.0], [12.5, 573.0], [12.6, 573.0], [12.7, 573.0], [12.8, 573.0], [12.9, 573.0], [13.0, 573.0], [13.1, 573.0], [13.2, 573.0], [13.3, 573.0], [13.4, 573.0], [13.5, 573.0], [13.6, 573.0], [13.7, 573.0], [13.8, 573.0], [13.9, 573.0], [14.0, 573.0], [14.1, 573.0], [14.2, 573.0], [14.3, 573.0], [14.4, 573.0], [14.5, 573.0], [14.6, 573.0], [14.7, 573.0], [14.8, 573.0], [14.9, 573.0], [15.0, 573.0], [15.1, 573.0], [15.2, 573.0], [15.3, 573.0], [15.4, 573.0], [15.5, 573.0], [15.6, 574.0], [15.7, 574.0], [15.8, 574.0], [15.9, 574.0], [16.0, 574.0], [16.1, 574.0], [16.2, 574.0], [16.3, 574.0], [16.4, 574.0], [16.5, 574.0], [16.6, 574.0], [16.7, 574.0], [16.8, 574.0], [16.9, 574.0], [17.0, 574.0], [17.1, 574.0], [17.2, 574.0], [17.3, 574.0], [17.4, 574.0], [17.5, 574.0], [17.6, 574.0], [17.7, 574.0], [17.8, 574.0], [17.9, 574.0], [18.0, 574.0], [18.1, 574.0], [18.2, 574.0], [18.3, 574.0], [18.4, 574.0], [18.5, 574.0], [18.6, 574.0], [18.7, 574.0], [18.8, 574.0], [18.9, 574.0], [19.0, 574.0], [19.1, 574.0], [19.2, 574.0], [19.3, 574.0], [19.4, 574.0], [19.5, 574.0], [19.6, 574.0], [19.7, 574.0], [19.8, 574.0], [19.9, 574.0], [20.0, 574.0], [20.1, 574.0], [20.2, 574.0], [20.3, 574.0], [20.4, 574.0], [20.5, 574.0], [20.6, 574.0], [20.7, 574.0], [20.8, 574.0], [20.9, 574.0], [21.0, 574.0], [21.1, 574.0], [21.2, 574.0], [21.3, 574.0], [21.4, 574.0], [21.5, 575.0], [21.6, 575.0], [21.7, 575.0], [21.8, 575.0], [21.9, 575.0], [22.0, 575.0], [22.1, 575.0], [22.2, 575.0], [22.3, 575.0], [22.4, 575.0], [22.5, 575.0], [22.6, 575.0], [22.7, 575.0], [22.8, 575.0], [22.9, 575.0], [23.0, 575.0], [23.1, 575.0], [23.2, 575.0], [23.3, 575.0], [23.4, 575.0], [23.5, 575.0], [23.6, 575.0], [23.7, 575.0], [23.8, 575.0], [23.9, 575.0], [24.0, 575.0], [24.1, 575.0], [24.2, 575.0], [24.3, 575.0], [24.4, 576.0], [24.5, 576.0], [24.6, 576.0], [24.7, 576.0], [24.8, 576.0], [24.9, 576.0], [25.0, 576.0], [25.1, 576.0], [25.2, 576.0], [25.3, 576.0], [25.4, 576.0], [25.5, 576.0], [25.6, 576.0], [25.7, 576.0], [25.8, 576.0], [25.9, 576.0], [26.0, 576.0], [26.1, 576.0], [26.2, 576.0], [26.3, 576.0], [26.4, 576.0], [26.5, 576.0], [26.6, 576.0], [26.7, 576.0], [26.8, 576.0], [26.9, 576.0], [27.0, 576.0], [27.1, 576.0], [27.2, 576.0], [27.3, 576.0], [27.4, 576.0], [27.5, 576.0], [27.6, 576.0], [27.7, 576.0], [27.8, 576.0], [27.9, 576.0], [28.0, 576.0], [28.1, 576.0], [28.2, 576.0], [28.3, 576.0], [28.4, 576.0], [28.5, 576.0], [28.6, 576.0], [28.7, 576.0], [28.8, 576.0], [28.9, 576.0], [29.0, 576.0], [29.1, 576.0], [29.2, 576.0], [29.3, 576.0], [29.4, 576.0], [29.5, 576.0], [29.6, 576.0], [29.7, 576.0], [29.8, 576.0], [29.9, 576.0], [30.0, 576.0], [30.1, 576.0], [30.2, 576.0], [30.3, 576.0], [30.4, 576.0], [30.5, 576.0], [30.6, 576.0], [30.7, 576.0], [30.8, 577.0], [30.9, 577.0], [31.0, 577.0], [31.1, 577.0], [31.2, 577.0], [31.3, 577.0], [31.4, 577.0], [31.5, 577.0], [31.6, 577.0], [31.7, 577.0], [31.8, 577.0], [31.9, 577.0], [32.0, 577.0], [32.1, 577.0], [32.2, 577.0], [32.3, 577.0], [32.4, 577.0], [32.5, 577.0], [32.6, 577.0], [32.7, 577.0], [32.8, 577.0], [32.9, 577.0], [33.0, 577.0], [33.1, 577.0], [33.2, 577.0], [33.3, 577.0], [33.4, 577.0], [33.5, 577.0], [33.6, 577.0], [33.7, 577.0], [33.8, 577.0], [33.9, 577.0], [34.0, 577.0], [34.1, 577.0], [34.2, 577.0], [34.3, 577.0], [34.4, 577.0], [34.5, 577.0], [34.6, 577.0], [34.7, 577.0], [34.8, 577.0], [34.9, 577.0], [35.0, 577.0], [35.1, 578.0], [35.2, 578.0], [35.3, 578.0], [35.4, 578.0], [35.5, 578.0], [35.6, 578.0], [35.7, 578.0], [35.8, 578.0], [35.9, 578.0], [36.0, 578.0], [36.1, 578.0], [36.2, 578.0], [36.3, 578.0], [36.4, 578.0], [36.5, 578.0], [36.6, 578.0], [36.7, 578.0], [36.8, 578.0], [36.9, 578.0], [37.0, 578.0], [37.1, 578.0], [37.2, 578.0], [37.3, 578.0], [37.4, 578.0], [37.5, 578.0], [37.6, 578.0], [37.7, 578.0], [37.8, 578.0], [37.9, 578.0], [38.0, 578.0], [38.1, 578.0], [38.2, 578.0], [38.3, 578.0], [38.4, 578.0], [38.5, 578.0], [38.6, 578.0], [38.7, 579.0], [38.8, 579.0], [38.9, 579.0], [39.0, 579.0], [39.1, 579.0], [39.2, 579.0], [39.3, 579.0], [39.4, 579.0], [39.5, 579.0], [39.6, 579.0], [39.7, 579.0], [39.8, 579.0], [39.9, 579.0], [40.0, 579.0], [40.1, 579.0], [40.2, 579.0], [40.3, 579.0], [40.4, 579.0], [40.5, 579.0], [40.6, 579.0], [40.7, 579.0], [40.8, 579.0], [40.9, 579.0], [41.0, 579.0], [41.1, 579.0], [41.2, 579.0], [41.3, 579.0], [41.4, 579.0], [41.5, 579.0], [41.6, 579.0], [41.7, 579.0], [41.8, 579.0], [41.9, 579.0], [42.0, 579.0], [42.1, 579.0], [42.2, 579.0], [42.3, 579.0], [42.4, 579.0], [42.5, 579.0], [42.6, 579.0], [42.7, 579.0], [42.8, 579.0], [42.9, 579.0], [43.0, 579.0], [43.1, 579.0], [43.2, 579.0], [43.3, 579.0], [43.4, 579.0], [43.5, 579.0], [43.6, 579.0], [43.7, 579.0], [43.8, 579.0], [43.9, 579.0], [44.0, 579.0], [44.1, 579.0], [44.2, 579.0], [44.3, 579.0], [44.4, 580.0], [44.5, 580.0], [44.6, 580.0], [44.7, 580.0], [44.8, 580.0], [44.9, 580.0], [45.0, 580.0], [45.1, 580.0], [45.2, 580.0], [45.3, 580.0], [45.4, 580.0], [45.5, 580.0], [45.6, 580.0], [45.7, 580.0], [45.8, 580.0], [45.9, 580.0], [46.0, 580.0], [46.1, 580.0], [46.2, 580.0], [46.3, 580.0], [46.4, 580.0], [46.5, 580.0], [46.6, 580.0], [46.7, 580.0], [46.8, 580.0], [46.9, 580.0], [47.0, 580.0], [47.1, 580.0], [47.2, 580.0], [47.3, 581.0], [47.4, 581.0], [47.5, 581.0], [47.6, 581.0], [47.7, 581.0], [47.8, 581.0], [47.9, 581.0], [48.0, 581.0], [48.1, 581.0], [48.2, 581.0], [48.3, 581.0], [48.4, 581.0], [48.5, 581.0], [48.6, 581.0], [48.7, 581.0], [48.8, 581.0], [48.9, 581.0], [49.0, 581.0], [49.1, 581.0], [49.2, 581.0], [49.3, 581.0], [49.4, 581.0], [49.5, 581.0], [49.6, 581.0], [49.7, 581.0], [49.8, 581.0], [49.9, 581.0], [50.0, 581.0], [50.1, 581.0], [50.2, 581.0], [50.3, 581.0], [50.4, 581.0], [50.5, 581.0], [50.6, 582.0], [50.7, 582.0], [50.8, 582.0], [50.9, 582.0], [51.0, 582.0], [51.1, 582.0], [51.2, 582.0], [51.3, 582.0], [51.4, 582.0], [51.5, 582.0], [51.6, 582.0], [51.7, 582.0], [51.8, 582.0], [51.9, 582.0], [52.0, 582.0], [52.1, 582.0], [52.2, 582.0], [52.3, 582.0], [52.4, 582.0], [52.5, 582.0], [52.6, 582.0], [52.7, 582.0], [52.8, 582.0], [52.9, 582.0], [53.0, 582.0], [53.1, 582.0], [53.2, 583.0], [53.3, 583.0], [53.4, 583.0], [53.5, 583.0], [53.6, 583.0], [53.7, 583.0], [53.8, 583.0], [53.9, 583.0], [54.0, 583.0], [54.1, 583.0], [54.2, 583.0], [54.3, 583.0], [54.4, 583.0], [54.5, 583.0], [54.6, 583.0], [54.7, 583.0], [54.8, 583.0], [54.9, 583.0], [55.0, 583.0], [55.1, 583.0], [55.2, 583.0], [55.3, 583.0], [55.4, 583.0], [55.5, 583.0], [55.6, 583.0], [55.7, 583.0], [55.8, 583.0], [55.9, 583.0], [56.0, 583.0], [56.1, 583.0], [56.2, 583.0], [56.3, 583.0], [56.4, 583.0], [56.5, 583.0], [56.6, 583.0], [56.7, 583.0], [56.8, 583.0], [56.9, 583.0], [57.0, 583.0], [57.1, 583.0], [57.2, 583.0], [57.3, 583.0], [57.4, 583.0], [57.5, 583.0], [57.6, 583.0], [57.7, 583.0], [57.8, 583.0], [57.9, 583.0], [58.0, 583.0], [58.1, 583.0], [58.2, 583.0], [58.3, 583.0], [58.4, 583.0], [58.5, 584.0], [58.6, 584.0], [58.7, 584.0], [58.8, 584.0], [58.9, 584.0], [59.0, 584.0], [59.1, 584.0], [59.2, 584.0], [59.3, 584.0], [59.4, 584.0], [59.5, 584.0], [59.6, 584.0], [59.7, 584.0], [59.8, 584.0], [59.9, 584.0], [60.0, 584.0], [60.1, 584.0], [60.2, 584.0], [60.3, 584.0], [60.4, 584.0], [60.5, 584.0], [60.6, 584.0], [60.7, 584.0], [60.8, 584.0], [60.9, 584.0], [61.0, 584.0], [61.1, 584.0], [61.2, 584.0], [61.3, 584.0], [61.4, 584.0], [61.5, 584.0], [61.6, 584.0], [61.7, 584.0], [61.8, 584.0], [61.9, 584.0], [62.0, 584.0], [62.1, 584.0], [62.2, 584.0], [62.3, 584.0], [62.4, 584.0], [62.5, 584.0], [62.6, 584.0], [62.7, 584.0], [62.8, 584.0], [62.9, 584.0], [63.0, 584.0], [63.1, 584.0], [63.2, 584.0], [63.3, 585.0], [63.4, 585.0], [63.5, 585.0], [63.6, 585.0], [63.7, 585.0], [63.8, 585.0], [63.9, 585.0], [64.0, 585.0], [64.1, 585.0], [64.2, 585.0], [64.3, 585.0], [64.4, 585.0], [64.5, 585.0], [64.6, 585.0], [64.7, 585.0], [64.8, 585.0], [64.9, 585.0], [65.0, 585.0], [65.1, 585.0], [65.2, 585.0], [65.3, 585.0], [65.4, 585.0], [65.5, 585.0], [65.6, 585.0], [65.7, 585.0], [65.8, 585.0], [65.9, 585.0], [66.0, 585.0], [66.1, 585.0], [66.2, 585.0], [66.3, 585.0], [66.4, 585.0], [66.5, 585.0], [66.6, 585.0], [66.7, 585.0], [66.8, 585.0], [66.9, 585.0], [67.0, 585.0], [67.1, 585.0], [67.2, 585.0], [67.3, 585.0], [67.4, 585.0], [67.5, 585.0], [67.6, 585.0], [67.7, 585.0], [67.8, 585.0], [67.9, 585.0], [68.0, 585.0], [68.1, 586.0], [68.2, 586.0], [68.3, 586.0], [68.4, 586.0], [68.5, 586.0], [68.6, 586.0], [68.7, 586.0], [68.8, 586.0], [68.9, 586.0], [69.0, 586.0], [69.1, 586.0], [69.2, 586.0], [69.3, 586.0], [69.4, 586.0], [69.5, 586.0], [69.6, 586.0], [69.7, 586.0], [69.8, 586.0], [69.9, 586.0], [70.0, 586.0], [70.1, 586.0], [70.2, 586.0], [70.3, 586.0], [70.4, 587.0], [70.5, 587.0], [70.6, 587.0], [70.7, 587.0], [70.8, 587.0], [70.9, 587.0], [71.0, 587.0], [71.1, 587.0], [71.2, 587.0], [71.3, 587.0], [71.4, 587.0], [71.5, 587.0], [71.6, 587.0], [71.7, 587.0], [71.8, 588.0], [71.9, 588.0], [72.0, 588.0], [72.1, 588.0], [72.2, 588.0], [72.3, 588.0], [72.4, 588.0], [72.5, 588.0], [72.6, 588.0], [72.7, 588.0], [72.8, 589.0], [72.9, 589.0], [73.0, 589.0], [73.1, 589.0], [73.2, 589.0], [73.3, 589.0], [73.4, 589.0], [73.5, 589.0], [73.6, 589.0], [73.7, 589.0], [73.8, 589.0], [73.9, 589.0], [74.0, 590.0], [74.1, 590.0], [74.2, 590.0], [74.3, 590.0], [74.4, 590.0], [74.5, 590.0], [74.6, 590.0], [74.7, 590.0], [74.8, 590.0], [74.9, 590.0], [75.0, 590.0], [75.1, 590.0], [75.2, 590.0], [75.3, 590.0], [75.4, 591.0], [75.5, 591.0], [75.6, 591.0], [75.7, 591.0], [75.8, 591.0], [75.9, 591.0], [76.0, 591.0], [76.1, 591.0], [76.2, 591.0], [76.3, 591.0], [76.4, 591.0], [76.5, 591.0], [76.6, 591.0], [76.7, 591.0], [76.8, 591.0], [76.9, 591.0], [77.0, 591.0], [77.1, 591.0], [77.2, 592.0], [77.3, 592.0], [77.4, 592.0], [77.5, 592.0], [77.6, 592.0], [77.7, 592.0], [77.8, 592.0], [77.9, 593.0], [78.0, 593.0], [78.1, 593.0], [78.2, 593.0], [78.3, 593.0], [78.4, 593.0], [78.5, 593.0], [78.6, 593.0], [78.7, 593.0], [78.8, 593.0], [78.9, 593.0], [79.0, 593.0], [79.1, 593.0], [79.2, 593.0], [79.3, 593.0], [79.4, 593.0], [79.5, 593.0], [79.6, 593.0], [79.7, 593.0], [79.8, 593.0], [79.9, 593.0], [80.0, 594.0], [80.1, 594.0], [80.2, 594.0], [80.3, 594.0], [80.4, 594.0], [80.5, 594.0], [80.6, 594.0], [80.7, 594.0], [80.8, 594.0], [80.9, 594.0], [81.0, 594.0], [81.1, 595.0], [81.2, 595.0], [81.3, 595.0], [81.4, 595.0], [81.5, 596.0], [81.6, 596.0], [81.7, 596.0], [81.8, 597.0], [81.9, 597.0], [82.0, 597.0], [82.1, 597.0], [82.2, 598.0], [82.3, 598.0], [82.4, 598.0], [82.5, 598.0], [82.6, 598.0], [82.7, 598.0], [82.8, 598.0], [82.9, 599.0], [83.0, 599.0], [83.1, 599.0], [83.2, 599.0], [83.3, 600.0], [83.4, 600.0], [83.5, 600.0], [83.6, 601.0], [83.7, 601.0], [83.8, 602.0], [83.9, 602.0], [84.0, 602.0], [84.1, 602.0], [84.2, 602.0], [84.3, 602.0], [84.4, 602.0], [84.5, 603.0], [84.6, 603.0], [84.7, 603.0], [84.8, 603.0], [84.9, 603.0], [85.0, 603.0], [85.1, 604.0], [85.2, 605.0], [85.3, 605.0], [85.4, 605.0], [85.5, 605.0], [85.6, 605.0], [85.7, 605.0], [85.8, 605.0], [85.9, 606.0], [86.0, 606.0], [86.1, 606.0], [86.2, 606.0], [86.3, 606.0], [86.4, 606.0], [86.5, 607.0], [86.6, 607.0], [86.7, 607.0], [86.8, 607.0], [86.9, 607.0], [87.0, 608.0], [87.1, 608.0], [87.2, 608.0], [87.3, 608.0], [87.4, 608.0], [87.5, 608.0], [87.6, 608.0], [87.7, 608.0], [87.8, 608.0], [87.9, 608.0], [88.0, 608.0], [88.1, 609.0], [88.2, 609.0], [88.3, 609.0], [88.4, 609.0], [88.5, 609.0], [88.6, 609.0], [88.7, 610.0], [88.8, 610.0], [88.9, 610.0], [89.0, 610.0], [89.1, 610.0], [89.2, 610.0], [89.3, 610.0], [89.4, 611.0], [89.5, 611.0], [89.6, 611.0], [89.7, 611.0], [89.8, 611.0], [89.9, 612.0], [90.0, 612.0], [90.1, 612.0], [90.2, 612.0], [90.3, 612.0], [90.4, 613.0], [90.5, 613.0], [90.6, 613.0], [90.7, 613.0], [90.8, 613.0], [90.9, 614.0], [91.0, 614.0], [91.1, 614.0], [91.2, 614.0], [91.3, 614.0], [91.4, 614.0], [91.5, 614.0], [91.6, 614.0], [91.7, 614.0], [91.8, 614.0], [91.9, 615.0], [92.0, 615.0], [92.1, 615.0], [92.2, 616.0], [92.3, 616.0], [92.4, 616.0], [92.5, 616.0], [92.6, 618.0], [92.7, 618.0], [92.8, 618.0], [92.9, 618.0], [93.0, 619.0], [93.1, 620.0], [93.2, 620.0], [93.3, 621.0], [93.4, 621.0], [93.5, 621.0], [93.6, 621.0], [93.7, 621.0], [93.8, 622.0], [93.9, 622.0], [94.0, 622.0], [94.1, 623.0], [94.2, 624.0], [94.3, 624.0], [94.4, 624.0], [94.5, 626.0], [94.6, 626.0], [94.7, 626.0], [94.8, 628.0], [94.9, 628.0], [95.0, 628.0], [95.1, 633.0], [95.2, 633.0], [95.3, 634.0], [95.4, 634.0], [95.5, 635.0], [95.6, 635.0], [95.7, 635.0], [95.8, 638.0], [95.9, 641.0], [96.0, 641.0], [96.1, 641.0], [96.2, 647.0], [96.3, 650.0], [96.4, 658.0], [96.5, 658.0], [96.6, 659.0], [96.7, 672.0], [96.8, 672.0], [96.9, 674.0], [97.0, 674.0], [97.1, 675.0], [97.2, 675.0], [97.3, 676.0], [97.4, 685.0], [97.5, 685.0], [97.6, 690.0], [97.7, 804.0], [97.8, 926.0], [97.9, 926.0], [98.0, 970.0], [98.1, 973.0], [98.2, 1034.0], [98.3, 1034.0], [98.4, 1040.0], [98.5, 1040.0], [98.6, 1040.0], [98.7, 1040.0], [98.8, 1041.0], [98.9, 1056.0], [99.0, 1056.0], [99.1, 1095.0], [99.2, 1125.0], [99.3, 1125.0], [99.4, 1175.0], [99.5, 1176.0], [99.6, 1178.0], [99.7, 1178.0], [99.8, 1217.0], [99.9, 1443.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 601.0, "series": [{"data": [[1100.0, 4.0], [600.0, 104.0], [1200.0, 1.0], [1400.0, 1.0], [800.0, 1.0], [900.0, 3.0], [500.0, 601.0], [1000.0, 7.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 49.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 673.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 673.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 49.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 12.414634146341461, "minX": 1.7890611E12, "maxY": 23.968750000000007, "series": [{"data": [[1.7890611E12, 12.414634146341461], [1.78906122E12, 20.012820512820504], [1.78906116E12, 23.968750000000007]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 24 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906122E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 538.9999999999999, "minX": 1.0, "maxY": 727.8571428571429, "series": [{"data": [[2.0, 560.75], [8.0, 547.4444444444445], [9.0, 562.5999999999999], [10.0, 567.0909090909091], [11.0, 575.8], [3.0, 560.1666666666666], [12.0, 585.4], [13.0, 582.8333333333334], [14.0, 586.0833333333334], [15.0, 593.4], [1.0, 591.5], [4.0, 554.25], [16.0, 589.8235294117648], [17.0, 605.1666666666667], [18.0, 589.9999999999999], [19.0, 591.1666666666667], [5.0, 538.9999999999999], [20.0, 588.9230769230768], [21.0, 587.5], [22.0, 600.75], [23.0, 584.6000000000001], [6.0, 554.75], [24.0, 598.5786407766996], [7.0, 727.8571428571429]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[20.916897506925196, 595.6232686980607]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 24.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 205.4, "minX": 1.7890611E12, "maxY": 1848.0, "series": [{"data": [[1.7890611E12, 631.4], [1.78906122E12, 300.3], [1.78906116E12, 1848.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7890611E12, 431.8666666666667], [1.78906122E12, 205.4], [1.78906116E12, 1264.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906122E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 589.5914634146342, "minX": 1.7890611E12, "maxY": 639.717948717949, "series": [{"data": [[1.7890611E12, 589.5914634146342], [1.78906122E12, 639.717948717949], [1.78906116E12, 590.5187500000001]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906122E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 589.4695121951222, "minX": 1.7890611E12, "maxY": 639.6923076923075, "series": [{"data": [[1.7890611E12, 589.4695121951222], [1.78906122E12, 639.6923076923075], [1.78906116E12, 590.4729166666664]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906122E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.06250000000000003, "minX": 1.7890611E12, "maxY": 0.3231707317073169, "series": [{"data": [[1.7890611E12, 0.3231707317073169], [1.78906122E12, 0.06410256410256408], [1.78906116E12, 0.06250000000000003]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906122E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 521.0, "minX": 1.7890611E12, "maxY": 620.0, "series": [{"data": [[1.7890611E12, 618.0], [1.78906122E12, 614.0], [1.78906116E12, 620.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7890611E12, 521.0], [1.78906122E12, 572.0], [1.78906116E12, 571.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7890611E12, 599.5], [1.78906122E12, 602.0], [1.78906116E12, 602.4000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7890611E12, 616.9], [1.78906122E12, 614.0], [1.78906116E12, 616.88]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7890611E12, 580.0], [1.78906122E12, 578.5], [1.78906116E12, 581.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7890611E12, 610.25], [1.78906122E12, 609.5], [1.78906116E12, 609.2]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906122E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 545.5, "minX": 3.0, "maxY": 1050.5, "series": [{"data": [[4.0, 583.5], [8.0, 545.5], [9.0, 575.0], [5.0, 561.0], [10.0, 585.5], [11.0, 580.0], [3.0, 579.0], [6.0, 582.5], [12.0, 580.5], [7.0, 583.0], [14.0, 580.0], [15.0, 576.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 621.0], [11.0, 1045.0], [6.0, 1050.5], [3.0, 634.5], [7.0, 623.0], [14.0, 628.0], [15.0, 1006.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 545.0, "minX": 3.0, "maxY": 1050.5, "series": [{"data": [[4.0, 583.5], [8.0, 545.0], [9.0, 575.0], [5.0, 561.0], [10.0, 585.5], [11.0, 580.0], [3.0, 579.0], [6.0, 582.5], [12.0, 580.5], [7.0, 583.0], [14.0, 580.0], [15.0, 576.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[9.0, 621.0], [11.0, 1045.0], [6.0, 1050.5], [3.0, 634.5], [7.0, 623.0], [14.0, 628.0], [15.0, 1006.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.1833333333333333, "minX": 1.7890611E12, "maxY": 8.066666666666666, "series": [{"data": [[1.7890611E12, 2.783333333333333], [1.78906122E12, 1.1833333333333333], [1.78906116E12, 8.066666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906122E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.3, "minX": 1.7890611E12, "maxY": 8.0, "series": [{"data": [[1.7890611E12, 2.7333333333333334], [1.78906122E12, 1.3], [1.78906116E12, 8.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906122E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.7890611E12, "maxY": 7.583333333333333, "series": [{"data": [[1.7890611E12, 2.566666666666667], [1.78906122E12, 1.0666666666666667], [1.78906116E12, 7.583333333333333]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.7890611E12, 0.16666666666666666], [1.78906122E12, 0.23333333333333334], [1.78906116E12, 0.4166666666666667]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906122E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.7890611E12, "maxY": 7.583333333333333, "series": [{"data": [[1.7890611E12, 2.566666666666667], [1.78906122E12, 1.0666666666666667], [1.78906116E12, 7.583333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7890611E12, 0.16666666666666666], [1.78906122E12, 0.23333333333333334], [1.78906116E12, 0.4166666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906122E12, "title": "Total Transactions Per Second"}},
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

