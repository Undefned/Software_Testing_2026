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
        data: {"result": {"minY": 523.0, "minX": 0.0, "maxY": 938.0, "series": [{"data": [[0.0, 523.0], [0.1, 523.0], [0.2, 528.0], [0.3, 529.0], [0.4, 533.0], [0.5, 534.0], [0.6, 535.0], [0.7, 535.0], [0.8, 537.0], [0.9, 540.0], [1.0, 540.0], [1.1, 541.0], [1.2, 543.0], [1.3, 543.0], [1.4, 547.0], [1.5, 548.0], [1.6, 548.0], [1.7, 548.0], [1.8, 549.0], [1.9, 550.0], [2.0, 551.0], [2.1, 551.0], [2.2, 551.0], [2.3, 551.0], [2.4, 551.0], [2.5, 552.0], [2.6, 552.0], [2.7, 552.0], [2.8, 553.0], [2.9, 555.0], [3.0, 555.0], [3.1, 555.0], [3.2, 556.0], [3.3, 557.0], [3.4, 558.0], [3.5, 558.0], [3.6, 558.0], [3.7, 559.0], [3.8, 561.0], [3.9, 561.0], [4.0, 562.0], [4.1, 562.0], [4.2, 563.0], [4.3, 564.0], [4.4, 564.0], [4.5, 564.0], [4.6, 565.0], [4.7, 565.0], [4.8, 566.0], [4.9, 566.0], [5.0, 567.0], [5.1, 569.0], [5.2, 569.0], [5.3, 569.0], [5.4, 570.0], [5.5, 571.0], [5.6, 572.0], [5.7, 572.0], [5.8, 572.0], [5.9, 576.0], [6.0, 576.0], [6.1, 578.0], [6.2, 580.0], [6.3, 581.0], [6.4, 581.0], [6.5, 584.0], [6.6, 584.0], [6.7, 584.0], [6.8, 585.0], [6.9, 586.0], [7.0, 587.0], [7.1, 587.0], [7.2, 588.0], [7.3, 588.0], [7.4, 588.0], [7.5, 588.0], [7.6, 589.0], [7.7, 590.0], [7.8, 590.0], [7.9, 591.0], [8.0, 592.0], [8.1, 593.0], [8.2, 594.0], [8.3, 595.0], [8.4, 597.0], [8.5, 598.0], [8.6, 599.0], [8.7, 599.0], [8.8, 599.0], [8.9, 599.0], [9.0, 600.0], [9.1, 601.0], [9.2, 601.0], [9.3, 603.0], [9.4, 604.0], [9.5, 604.0], [9.6, 604.0], [9.7, 604.0], [9.8, 604.0], [9.9, 604.0], [10.0, 604.0], [10.1, 604.0], [10.2, 604.0], [10.3, 604.0], [10.4, 604.0], [10.5, 605.0], [10.6, 605.0], [10.7, 605.0], [10.8, 605.0], [10.9, 605.0], [11.0, 605.0], [11.1, 605.0], [11.2, 605.0], [11.3, 605.0], [11.4, 605.0], [11.5, 605.0], [11.6, 605.0], [11.7, 605.0], [11.8, 605.0], [11.9, 605.0], [12.0, 605.0], [12.1, 605.0], [12.2, 605.0], [12.3, 605.0], [12.4, 606.0], [12.5, 606.0], [12.6, 606.0], [12.7, 606.0], [12.8, 606.0], [12.9, 606.0], [13.0, 606.0], [13.1, 606.0], [13.2, 606.0], [13.3, 606.0], [13.4, 606.0], [13.5, 606.0], [13.6, 606.0], [13.7, 606.0], [13.8, 606.0], [13.9, 606.0], [14.0, 606.0], [14.1, 606.0], [14.2, 606.0], [14.3, 606.0], [14.4, 606.0], [14.5, 606.0], [14.6, 606.0], [14.7, 606.0], [14.8, 606.0], [14.9, 606.0], [15.0, 606.0], [15.1, 606.0], [15.2, 606.0], [15.3, 606.0], [15.4, 606.0], [15.5, 606.0], [15.6, 607.0], [15.7, 607.0], [15.8, 607.0], [15.9, 607.0], [16.0, 607.0], [16.1, 607.0], [16.2, 607.0], [16.3, 607.0], [16.4, 607.0], [16.5, 607.0], [16.6, 607.0], [16.7, 607.0], [16.8, 607.0], [16.9, 607.0], [17.0, 607.0], [17.1, 607.0], [17.2, 607.0], [17.3, 607.0], [17.4, 607.0], [17.5, 607.0], [17.6, 607.0], [17.7, 607.0], [17.8, 607.0], [17.9, 607.0], [18.0, 608.0], [18.1, 608.0], [18.2, 608.0], [18.3, 608.0], [18.4, 608.0], [18.5, 608.0], [18.6, 608.0], [18.7, 608.0], [18.8, 608.0], [18.9, 608.0], [19.0, 608.0], [19.1, 608.0], [19.2, 608.0], [19.3, 608.0], [19.4, 608.0], [19.5, 608.0], [19.6, 608.0], [19.7, 608.0], [19.8, 608.0], [19.9, 608.0], [20.0, 608.0], [20.1, 609.0], [20.2, 609.0], [20.3, 609.0], [20.4, 609.0], [20.5, 609.0], [20.6, 609.0], [20.7, 609.0], [20.8, 609.0], [20.9, 609.0], [21.0, 609.0], [21.1, 609.0], [21.2, 609.0], [21.3, 609.0], [21.4, 609.0], [21.5, 609.0], [21.6, 609.0], [21.7, 609.0], [21.8, 609.0], [21.9, 609.0], [22.0, 609.0], [22.1, 609.0], [22.2, 609.0], [22.3, 609.0], [22.4, 609.0], [22.5, 609.0], [22.6, 609.0], [22.7, 609.0], [22.8, 610.0], [22.9, 610.0], [23.0, 610.0], [23.1, 610.0], [23.2, 610.0], [23.3, 610.0], [23.4, 610.0], [23.5, 610.0], [23.6, 610.0], [23.7, 610.0], [23.8, 610.0], [23.9, 610.0], [24.0, 610.0], [24.1, 610.0], [24.2, 610.0], [24.3, 610.0], [24.4, 610.0], [24.5, 611.0], [24.6, 611.0], [24.7, 611.0], [24.8, 611.0], [24.9, 611.0], [25.0, 611.0], [25.1, 611.0], [25.2, 611.0], [25.3, 611.0], [25.4, 611.0], [25.5, 611.0], [25.6, 611.0], [25.7, 611.0], [25.8, 611.0], [25.9, 611.0], [26.0, 611.0], [26.1, 611.0], [26.2, 611.0], [26.3, 612.0], [26.4, 612.0], [26.5, 612.0], [26.6, 612.0], [26.7, 612.0], [26.8, 612.0], [26.9, 612.0], [27.0, 612.0], [27.1, 612.0], [27.2, 612.0], [27.3, 612.0], [27.4, 612.0], [27.5, 612.0], [27.6, 612.0], [27.7, 612.0], [27.8, 612.0], [27.9, 612.0], [28.0, 612.0], [28.1, 612.0], [28.2, 612.0], [28.3, 612.0], [28.4, 612.0], [28.5, 612.0], [28.6, 612.0], [28.7, 612.0], [28.8, 612.0], [28.9, 612.0], [29.0, 612.0], [29.1, 612.0], [29.2, 612.0], [29.3, 612.0], [29.4, 612.0], [29.5, 612.0], [29.6, 613.0], [29.7, 613.0], [29.8, 613.0], [29.9, 613.0], [30.0, 613.0], [30.1, 613.0], [30.2, 613.0], [30.3, 613.0], [30.4, 613.0], [30.5, 613.0], [30.6, 613.0], [30.7, 613.0], [30.8, 613.0], [30.9, 613.0], [31.0, 613.0], [31.1, 613.0], [31.2, 613.0], [31.3, 613.0], [31.4, 613.0], [31.5, 613.0], [31.6, 613.0], [31.7, 613.0], [31.8, 613.0], [31.9, 613.0], [32.0, 613.0], [32.1, 613.0], [32.2, 613.0], [32.3, 613.0], [32.4, 613.0], [32.5, 613.0], [32.6, 613.0], [32.7, 613.0], [32.8, 613.0], [32.9, 613.0], [33.0, 613.0], [33.1, 613.0], [33.2, 613.0], [33.3, 613.0], [33.4, 613.0], [33.5, 613.0], [33.6, 613.0], [33.7, 613.0], [33.8, 613.0], [33.9, 613.0], [34.0, 614.0], [34.1, 614.0], [34.2, 614.0], [34.3, 614.0], [34.4, 614.0], [34.5, 614.0], [34.6, 614.0], [34.7, 614.0], [34.8, 614.0], [34.9, 614.0], [35.0, 614.0], [35.1, 614.0], [35.2, 614.0], [35.3, 614.0], [35.4, 614.0], [35.5, 614.0], [35.6, 614.0], [35.7, 614.0], [35.8, 614.0], [35.9, 614.0], [36.0, 614.0], [36.1, 614.0], [36.2, 614.0], [36.3, 614.0], [36.4, 614.0], [36.5, 614.0], [36.6, 614.0], [36.7, 614.0], [36.8, 614.0], [36.9, 614.0], [37.0, 614.0], [37.1, 614.0], [37.2, 614.0], [37.3, 614.0], [37.4, 614.0], [37.5, 614.0], [37.6, 614.0], [37.7, 615.0], [37.8, 615.0], [37.9, 615.0], [38.0, 615.0], [38.1, 615.0], [38.2, 615.0], [38.3, 615.0], [38.4, 615.0], [38.5, 615.0], [38.6, 615.0], [38.7, 615.0], [38.8, 615.0], [38.9, 615.0], [39.0, 615.0], [39.1, 615.0], [39.2, 615.0], [39.3, 615.0], [39.4, 615.0], [39.5, 615.0], [39.6, 615.0], [39.7, 615.0], [39.8, 615.0], [39.9, 615.0], [40.0, 616.0], [40.1, 616.0], [40.2, 616.0], [40.3, 616.0], [40.4, 616.0], [40.5, 616.0], [40.6, 616.0], [40.7, 616.0], [40.8, 616.0], [40.9, 616.0], [41.0, 616.0], [41.1, 616.0], [41.2, 616.0], [41.3, 616.0], [41.4, 616.0], [41.5, 616.0], [41.6, 616.0], [41.7, 616.0], [41.8, 616.0], [41.9, 616.0], [42.0, 616.0], [42.1, 616.0], [42.2, 616.0], [42.3, 616.0], [42.4, 616.0], [42.5, 616.0], [42.6, 616.0], [42.7, 616.0], [42.8, 616.0], [42.9, 616.0], [43.0, 616.0], [43.1, 616.0], [43.2, 616.0], [43.3, 616.0], [43.4, 616.0], [43.5, 616.0], [43.6, 617.0], [43.7, 617.0], [43.8, 617.0], [43.9, 617.0], [44.0, 617.0], [44.1, 617.0], [44.2, 617.0], [44.3, 617.0], [44.4, 617.0], [44.5, 617.0], [44.6, 617.0], [44.7, 617.0], [44.8, 617.0], [44.9, 617.0], [45.0, 617.0], [45.1, 618.0], [45.2, 618.0], [45.3, 618.0], [45.4, 618.0], [45.5, 618.0], [45.6, 618.0], [45.7, 618.0], [45.8, 618.0], [45.9, 618.0], [46.0, 618.0], [46.1, 618.0], [46.2, 618.0], [46.3, 618.0], [46.4, 618.0], [46.5, 618.0], [46.6, 618.0], [46.7, 618.0], [46.8, 618.0], [46.9, 618.0], [47.0, 618.0], [47.1, 619.0], [47.2, 619.0], [47.3, 619.0], [47.4, 619.0], [47.5, 619.0], [47.6, 619.0], [47.7, 619.0], [47.8, 619.0], [47.9, 619.0], [48.0, 619.0], [48.1, 619.0], [48.2, 619.0], [48.3, 619.0], [48.4, 619.0], [48.5, 619.0], [48.6, 620.0], [48.7, 620.0], [48.8, 620.0], [48.9, 620.0], [49.0, 620.0], [49.1, 620.0], [49.2, 620.0], [49.3, 620.0], [49.4, 620.0], [49.5, 620.0], [49.6, 620.0], [49.7, 620.0], [49.8, 620.0], [49.9, 620.0], [50.0, 620.0], [50.1, 620.0], [50.2, 620.0], [50.3, 620.0], [50.4, 620.0], [50.5, 620.0], [50.6, 620.0], [50.7, 621.0], [50.8, 621.0], [50.9, 621.0], [51.0, 621.0], [51.1, 621.0], [51.2, 621.0], [51.3, 621.0], [51.4, 621.0], [51.5, 621.0], [51.6, 621.0], [51.7, 621.0], [51.8, 621.0], [51.9, 622.0], [52.0, 622.0], [52.1, 622.0], [52.2, 622.0], [52.3, 622.0], [52.4, 622.0], [52.5, 622.0], [52.6, 622.0], [52.7, 622.0], [52.8, 622.0], [52.9, 622.0], [53.0, 622.0], [53.1, 622.0], [53.2, 622.0], [53.3, 622.0], [53.4, 622.0], [53.5, 622.0], [53.6, 622.0], [53.7, 622.0], [53.8, 622.0], [53.9, 622.0], [54.0, 622.0], [54.1, 622.0], [54.2, 622.0], [54.3, 622.0], [54.4, 622.0], [54.5, 622.0], [54.6, 622.0], [54.7, 622.0], [54.8, 622.0], [54.9, 623.0], [55.0, 623.0], [55.1, 623.0], [55.2, 623.0], [55.3, 623.0], [55.4, 623.0], [55.5, 623.0], [55.6, 623.0], [55.7, 623.0], [55.8, 623.0], [55.9, 623.0], [56.0, 623.0], [56.1, 623.0], [56.2, 623.0], [56.3, 623.0], [56.4, 623.0], [56.5, 623.0], [56.6, 623.0], [56.7, 623.0], [56.8, 623.0], [56.9, 623.0], [57.0, 623.0], [57.1, 623.0], [57.2, 623.0], [57.3, 623.0], [57.4, 623.0], [57.5, 623.0], [57.6, 623.0], [57.7, 623.0], [57.8, 624.0], [57.9, 624.0], [58.0, 624.0], [58.1, 624.0], [58.2, 624.0], [58.3, 624.0], [58.4, 624.0], [58.5, 624.0], [58.6, 624.0], [58.7, 624.0], [58.8, 624.0], [58.9, 624.0], [59.0, 624.0], [59.1, 624.0], [59.2, 624.0], [59.3, 624.0], [59.4, 624.0], [59.5, 624.0], [59.6, 624.0], [59.7, 624.0], [59.8, 625.0], [59.9, 625.0], [60.0, 625.0], [60.1, 625.0], [60.2, 625.0], [60.3, 625.0], [60.4, 625.0], [60.5, 625.0], [60.6, 625.0], [60.7, 625.0], [60.8, 625.0], [60.9, 625.0], [61.0, 625.0], [61.1, 625.0], [61.2, 625.0], [61.3, 625.0], [61.4, 625.0], [61.5, 625.0], [61.6, 625.0], [61.7, 625.0], [61.8, 625.0], [61.9, 626.0], [62.0, 626.0], [62.1, 626.0], [62.2, 626.0], [62.3, 626.0], [62.4, 626.0], [62.5, 626.0], [62.6, 626.0], [62.7, 626.0], [62.8, 626.0], [62.9, 627.0], [63.0, 627.0], [63.1, 627.0], [63.2, 627.0], [63.3, 627.0], [63.4, 627.0], [63.5, 627.0], [63.6, 627.0], [63.7, 627.0], [63.8, 627.0], [63.9, 627.0], [64.0, 627.0], [64.1, 628.0], [64.2, 628.0], [64.3, 628.0], [64.4, 628.0], [64.5, 628.0], [64.6, 628.0], [64.7, 628.0], [64.8, 629.0], [64.9, 629.0], [65.0, 629.0], [65.1, 629.0], [65.2, 629.0], [65.3, 629.0], [65.4, 629.0], [65.5, 629.0], [65.6, 629.0], [65.7, 629.0], [65.8, 629.0], [65.9, 629.0], [66.0, 629.0], [66.1, 629.0], [66.2, 629.0], [66.3, 629.0], [66.4, 629.0], [66.5, 629.0], [66.6, 630.0], [66.7, 630.0], [66.8, 630.0], [66.9, 630.0], [67.0, 630.0], [67.1, 630.0], [67.2, 630.0], [67.3, 630.0], [67.4, 630.0], [67.5, 630.0], [67.6, 630.0], [67.7, 630.0], [67.8, 630.0], [67.9, 630.0], [68.0, 630.0], [68.1, 630.0], [68.2, 630.0], [68.3, 630.0], [68.4, 631.0], [68.5, 631.0], [68.6, 631.0], [68.7, 631.0], [68.8, 631.0], [68.9, 631.0], [69.0, 631.0], [69.1, 631.0], [69.2, 631.0], [69.3, 631.0], [69.4, 631.0], [69.5, 632.0], [69.6, 632.0], [69.7, 632.0], [69.8, 632.0], [69.9, 632.0], [70.0, 632.0], [70.1, 632.0], [70.2, 632.0], [70.3, 632.0], [70.4, 632.0], [70.5, 632.0], [70.6, 632.0], [70.7, 632.0], [70.8, 633.0], [70.9, 633.0], [71.0, 633.0], [71.1, 633.0], [71.2, 633.0], [71.3, 633.0], [71.4, 633.0], [71.5, 633.0], [71.6, 633.0], [71.7, 634.0], [71.8, 634.0], [71.9, 634.0], [72.0, 634.0], [72.1, 634.0], [72.2, 634.0], [72.3, 634.0], [72.4, 634.0], [72.5, 634.0], [72.6, 634.0], [72.7, 634.0], [72.8, 634.0], [72.9, 634.0], [73.0, 634.0], [73.1, 634.0], [73.2, 634.0], [73.3, 634.0], [73.4, 634.0], [73.5, 635.0], [73.6, 635.0], [73.7, 635.0], [73.8, 635.0], [73.9, 635.0], [74.0, 635.0], [74.1, 635.0], [74.2, 635.0], [74.3, 635.0], [74.4, 635.0], [74.5, 635.0], [74.6, 635.0], [74.7, 636.0], [74.8, 636.0], [74.9, 636.0], [75.0, 636.0], [75.1, 636.0], [75.2, 636.0], [75.3, 636.0], [75.4, 636.0], [75.5, 636.0], [75.6, 636.0], [75.7, 636.0], [75.8, 636.0], [75.9, 636.0], [76.0, 636.0], [76.1, 636.0], [76.2, 636.0], [76.3, 636.0], [76.4, 636.0], [76.5, 636.0], [76.6, 636.0], [76.7, 636.0], [76.8, 636.0], [76.9, 637.0], [77.0, 637.0], [77.1, 637.0], [77.2, 637.0], [77.3, 637.0], [77.4, 637.0], [77.5, 637.0], [77.6, 637.0], [77.7, 637.0], [77.8, 637.0], [77.9, 637.0], [78.0, 637.0], [78.1, 637.0], [78.2, 637.0], [78.3, 637.0], [78.4, 637.0], [78.5, 638.0], [78.6, 638.0], [78.7, 638.0], [78.8, 638.0], [78.9, 638.0], [79.0, 638.0], [79.1, 638.0], [79.2, 638.0], [79.3, 638.0], [79.4, 638.0], [79.5, 638.0], [79.6, 638.0], [79.7, 638.0], [79.8, 638.0], [79.9, 638.0], [80.0, 638.0], [80.1, 638.0], [80.2, 638.0], [80.3, 639.0], [80.4, 639.0], [80.5, 639.0], [80.6, 639.0], [80.7, 639.0], [80.8, 639.0], [80.9, 639.0], [81.0, 639.0], [81.1, 639.0], [81.2, 639.0], [81.3, 639.0], [81.4, 639.0], [81.5, 639.0], [81.6, 639.0], [81.7, 639.0], [81.8, 640.0], [81.9, 640.0], [82.0, 640.0], [82.1, 640.0], [82.2, 640.0], [82.3, 640.0], [82.4, 640.0], [82.5, 640.0], [82.6, 640.0], [82.7, 640.0], [82.8, 640.0], [82.9, 640.0], [83.0, 640.0], [83.1, 640.0], [83.2, 640.0], [83.3, 641.0], [83.4, 641.0], [83.5, 641.0], [83.6, 641.0], [83.7, 641.0], [83.8, 641.0], [83.9, 641.0], [84.0, 641.0], [84.1, 641.0], [84.2, 641.0], [84.3, 642.0], [84.4, 642.0], [84.5, 642.0], [84.6, 642.0], [84.7, 642.0], [84.8, 642.0], [84.9, 642.0], [85.0, 642.0], [85.1, 642.0], [85.2, 642.0], [85.3, 642.0], [85.4, 642.0], [85.5, 642.0], [85.6, 642.0], [85.7, 642.0], [85.8, 642.0], [85.9, 642.0], [86.0, 642.0], [86.1, 642.0], [86.2, 643.0], [86.3, 643.0], [86.4, 643.0], [86.5, 643.0], [86.6, 643.0], [86.7, 643.0], [86.8, 643.0], [86.9, 643.0], [87.0, 643.0], [87.1, 643.0], [87.2, 643.0], [87.3, 643.0], [87.4, 643.0], [87.5, 644.0], [87.6, 644.0], [87.7, 644.0], [87.8, 644.0], [87.9, 644.0], [88.0, 644.0], [88.1, 644.0], [88.2, 644.0], [88.3, 644.0], [88.4, 644.0], [88.5, 644.0], [88.6, 644.0], [88.7, 644.0], [88.8, 644.0], [88.9, 644.0], [89.0, 644.0], [89.1, 645.0], [89.2, 645.0], [89.3, 645.0], [89.4, 645.0], [89.5, 645.0], [89.6, 645.0], [89.7, 645.0], [89.8, 645.0], [89.9, 645.0], [90.0, 645.0], [90.1, 645.0], [90.2, 645.0], [90.3, 645.0], [90.4, 645.0], [90.5, 646.0], [90.6, 646.0], [90.7, 646.0], [90.8, 646.0], [90.9, 646.0], [91.0, 646.0], [91.1, 646.0], [91.2, 647.0], [91.3, 647.0], [91.4, 647.0], [91.5, 647.0], [91.6, 647.0], [91.7, 647.0], [91.8, 647.0], [91.9, 648.0], [92.0, 648.0], [92.1, 648.0], [92.2, 648.0], [92.3, 649.0], [92.4, 649.0], [92.5, 649.0], [92.6, 649.0], [92.7, 649.0], [92.8, 649.0], [92.9, 649.0], [93.0, 649.0], [93.1, 650.0], [93.2, 650.0], [93.3, 650.0], [93.4, 651.0], [93.5, 651.0], [93.6, 651.0], [93.7, 651.0], [93.8, 652.0], [93.9, 652.0], [94.0, 652.0], [94.1, 652.0], [94.2, 652.0], [94.3, 653.0], [94.4, 653.0], [94.5, 654.0], [94.6, 654.0], [94.7, 654.0], [94.8, 654.0], [94.9, 655.0], [95.0, 655.0], [95.1, 655.0], [95.2, 655.0], [95.3, 656.0], [95.4, 657.0], [95.5, 657.0], [95.6, 658.0], [95.7, 658.0], [95.8, 658.0], [95.9, 659.0], [96.0, 659.0], [96.1, 659.0], [96.2, 659.0], [96.3, 659.0], [96.4, 659.0], [96.5, 660.0], [96.6, 660.0], [96.7, 661.0], [96.8, 661.0], [96.9, 664.0], [97.0, 665.0], [97.1, 666.0], [97.2, 666.0], [97.3, 667.0], [97.4, 667.0], [97.5, 668.0], [97.6, 668.0], [97.7, 668.0], [97.8, 670.0], [97.9, 670.0], [98.0, 670.0], [98.1, 671.0], [98.2, 673.0], [98.3, 673.0], [98.4, 675.0], [98.5, 676.0], [98.6, 676.0], [98.7, 677.0], [98.8, 677.0], [98.9, 677.0], [99.0, 686.0], [99.1, 688.0], [99.2, 702.0], [99.3, 702.0], [99.4, 709.0], [99.5, 720.0], [99.6, 721.0], [99.7, 875.0], [99.8, 937.0], [99.9, 938.0], [100.0, 938.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 861.0, "series": [{"data": [[600.0, 861.0], [700.0, 5.0], [800.0, 1.0], [900.0, 2.0], [500.0, 85.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 471.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 483.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 483.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 471.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 22.284188034188038, "minX": 1.78906122E12, "maxY": 30.93004115226338, "series": [{"data": [[1.78906122E12, 22.284188034188038], [1.78906128E12, 30.93004115226338]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 32 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906128E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 554.0, "minX": 1.0, "maxY": 637.6666666666667, "series": [{"data": [[2.0, 575.0], [32.0, 626.3693843594008], [3.0, 566.8333333333333], [4.0, 554.0], [5.0, 565.0], [6.0, 561.8181818181819], [7.0, 565.3076923076923], [8.0, 571.9090909090909], [9.0, 585.7], [10.0, 587.8333333333334], [11.0, 597.1666666666667], [12.0, 608.1538461538462], [13.0, 613.4615384615386], [14.0, 625.0000000000001], [15.0, 629.888888888889], [1.0, 595.0], [16.0, 636.3], [17.0, 626.4705882352941], [18.0, 620.9090909090909], [19.0, 633.6363636363636], [20.0, 626.4166666666666], [21.0, 630.6666666666666], [22.0, 624.6428571428571], [23.0, 633.8181818181819], [24.0, 625.1428571428571], [25.0, 637.6666666666667], [26.0, 628.2857142857141], [27.0, 635.0833333333334], [28.0, 633.625], [29.0, 629.2352941176471], [30.0, 632.5999999999999], [31.0, 626.8666666666666]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[26.68867924528301, 621.377358490567]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 32.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1232.4, "minX": 1.78906122E12, "maxY": 1871.1, "series": [{"data": [[1.78906122E12, 1801.8], [1.78906128E12, 1871.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78906122E12, 1232.4], [1.78906128E12, 1279.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906128E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 617.0683760683762, "minX": 1.78906122E12, "maxY": 625.5267489711937, "series": [{"data": [[1.78906122E12, 617.0683760683762], [1.78906128E12, 625.5267489711937]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906128E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 617.0149572649577, "minX": 1.78906122E12, "maxY": 625.4999999999999, "series": [{"data": [[1.78906122E12, 617.0149572649577], [1.78906128E12, 625.4999999999999]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906128E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0699588477366255, "minX": 1.78906122E12, "maxY": 0.14102564102564094, "series": [{"data": [[1.78906122E12, 0.14102564102564094], [1.78906128E12, 0.0699588477366255]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906128E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 523.0, "minX": 1.78906122E12, "maxY": 620.0, "series": [{"data": [[1.78906122E12, 620.0], [1.78906128E12, 620.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78906122E12, 523.0], [1.78906128E12, 604.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78906122E12, 619.0], [1.78906128E12, 616.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78906122E12, 620.0], [1.78906128E12, 620.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78906122E12, 609.0], [1.78906128E12, 611.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78906122E12, 620.0], [1.78906128E12, 618.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906128E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 561.5, "minX": 2.0, "maxY": 645.0, "series": [{"data": [[2.0, 561.5], [8.0, 616.0], [9.0, 590.0], [10.0, 614.0], [11.0, 572.0], [12.0, 611.0], [13.0, 613.0], [14.0, 613.0], [4.0, 566.0], [16.0, 615.0], [5.0, 617.0], [6.0, 607.0], [7.0, 606.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 642.0], [8.0, 645.0], [4.0, 632.0], [9.0, 638.0], [10.0, 629.0], [5.0, 628.0], [11.0, 635.0], [12.0, 636.0], [6.0, 637.0], [13.0, 634.0], [14.0, 638.0], [7.0, 632.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 559.5, "minX": 2.0, "maxY": 645.0, "series": [{"data": [[2.0, 559.5], [8.0, 616.0], [9.0, 590.0], [10.0, 614.0], [11.0, 572.0], [12.0, 611.0], [13.0, 613.0], [14.0, 613.0], [4.0, 565.0], [16.0, 615.0], [5.0, 617.0], [6.0, 607.0], [7.0, 606.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 642.0], [8.0, 645.0], [4.0, 632.0], [9.0, 638.0], [10.0, 629.0], [5.0, 628.0], [11.0, 635.0], [12.0, 636.0], [6.0, 637.0], [13.0, 634.0], [14.0, 638.0], [7.0, 632.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.933333333333334, "minX": 1.78906122E12, "maxY": 7.966666666666667, "series": [{"data": [[1.78906122E12, 7.966666666666667], [1.78906128E12, 7.933333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906128E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.8, "minX": 1.78906122E12, "maxY": 8.1, "series": [{"data": [[1.78906122E12, 7.8], [1.78906128E12, 8.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906128E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.7666666666666666, "minX": 1.78906122E12, "maxY": 4.283333333333333, "series": [{"data": [[1.78906122E12, 3.7666666666666666], [1.78906128E12, 4.283333333333333]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78906122E12, 4.033333333333333], [1.78906128E12, 3.816666666666667]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906128E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.7666666666666666, "minX": 1.78906122E12, "maxY": 4.283333333333333, "series": [{"data": [[1.78906122E12, 3.7666666666666666], [1.78906128E12, 4.283333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78906122E12, 4.033333333333333], [1.78906128E12, 3.816666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906128E12, "title": "Total Transactions Per Second"}},
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

