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
        data: {"result": {"minY": 524.0, "minX": 0.0, "maxY": 1394.0, "series": [{"data": [[0.0, 524.0], [0.1, 524.0], [0.2, 525.0], [0.3, 528.0], [0.4, 529.0], [0.5, 529.0], [0.6, 531.0], [0.7, 534.0], [0.8, 535.0], [0.9, 538.0], [1.0, 538.0], [1.1, 539.0], [1.2, 540.0], [1.3, 540.0], [1.4, 540.0], [1.5, 542.0], [1.6, 543.0], [1.7, 543.0], [1.8, 544.0], [1.9, 544.0], [2.0, 545.0], [2.1, 545.0], [2.2, 546.0], [2.3, 547.0], [2.4, 547.0], [2.5, 547.0], [2.6, 548.0], [2.7, 548.0], [2.8, 549.0], [2.9, 549.0], [3.0, 549.0], [3.1, 553.0], [3.2, 553.0], [3.3, 553.0], [3.4, 554.0], [3.5, 554.0], [3.6, 554.0], [3.7, 555.0], [3.8, 557.0], [3.9, 557.0], [4.0, 559.0], [4.1, 559.0], [4.2, 560.0], [4.3, 560.0], [4.4, 561.0], [4.5, 562.0], [4.6, 563.0], [4.7, 563.0], [4.8, 564.0], [4.9, 565.0], [5.0, 565.0], [5.1, 566.0], [5.2, 567.0], [5.3, 569.0], [5.4, 569.0], [5.5, 571.0], [5.6, 574.0], [5.7, 575.0], [5.8, 575.0], [5.9, 576.0], [6.0, 578.0], [6.1, 580.0], [6.2, 581.0], [6.3, 582.0], [6.4, 582.0], [6.5, 585.0], [6.6, 585.0], [6.7, 588.0], [6.8, 590.0], [6.9, 592.0], [7.0, 594.0], [7.1, 599.0], [7.2, 600.0], [7.3, 600.0], [7.4, 601.0], [7.5, 604.0], [7.6, 606.0], [7.7, 607.0], [7.8, 607.0], [7.9, 608.0], [8.0, 609.0], [8.1, 610.0], [8.2, 610.0], [8.3, 610.0], [8.4, 612.0], [8.5, 612.0], [8.6, 614.0], [8.7, 617.0], [8.8, 620.0], [8.9, 621.0], [9.0, 623.0], [9.1, 623.0], [9.2, 626.0], [9.3, 627.0], [9.4, 628.0], [9.5, 632.0], [9.6, 632.0], [9.7, 633.0], [9.8, 633.0], [9.9, 633.0], [10.0, 635.0], [10.1, 636.0], [10.2, 637.0], [10.3, 638.0], [10.4, 638.0], [10.5, 638.0], [10.6, 639.0], [10.7, 639.0], [10.8, 639.0], [10.9, 640.0], [11.0, 640.0], [11.1, 640.0], [11.2, 640.0], [11.3, 640.0], [11.4, 641.0], [11.5, 641.0], [11.6, 641.0], [11.7, 641.0], [11.8, 641.0], [11.9, 641.0], [12.0, 641.0], [12.1, 641.0], [12.2, 641.0], [12.3, 641.0], [12.4, 642.0], [12.5, 642.0], [12.6, 642.0], [12.7, 642.0], [12.8, 642.0], [12.9, 642.0], [13.0, 642.0], [13.1, 642.0], [13.2, 643.0], [13.3, 643.0], [13.4, 643.0], [13.5, 643.0], [13.6, 643.0], [13.7, 643.0], [13.8, 643.0], [13.9, 643.0], [14.0, 644.0], [14.1, 644.0], [14.2, 644.0], [14.3, 644.0], [14.4, 644.0], [14.5, 644.0], [14.6, 644.0], [14.7, 644.0], [14.8, 644.0], [14.9, 645.0], [15.0, 646.0], [15.1, 646.0], [15.2, 646.0], [15.3, 646.0], [15.4, 646.0], [15.5, 647.0], [15.6, 647.0], [15.7, 647.0], [15.8, 647.0], [15.9, 647.0], [16.0, 647.0], [16.1, 647.0], [16.2, 647.0], [16.3, 647.0], [16.4, 647.0], [16.5, 647.0], [16.6, 647.0], [16.7, 648.0], [16.8, 648.0], [16.9, 648.0], [17.0, 648.0], [17.1, 648.0], [17.2, 648.0], [17.3, 648.0], [17.4, 648.0], [17.5, 648.0], [17.6, 649.0], [17.7, 649.0], [17.8, 649.0], [17.9, 649.0], [18.0, 649.0], [18.1, 649.0], [18.2, 649.0], [18.3, 649.0], [18.4, 649.0], [18.5, 649.0], [18.6, 649.0], [18.7, 649.0], [18.8, 649.0], [18.9, 650.0], [19.0, 650.0], [19.1, 650.0], [19.2, 650.0], [19.3, 650.0], [19.4, 650.0], [19.5, 650.0], [19.6, 650.0], [19.7, 650.0], [19.8, 650.0], [19.9, 650.0], [20.0, 650.0], [20.1, 650.0], [20.2, 651.0], [20.3, 651.0], [20.4, 651.0], [20.5, 651.0], [20.6, 651.0], [20.7, 651.0], [20.8, 651.0], [20.9, 651.0], [21.0, 651.0], [21.1, 651.0], [21.2, 651.0], [21.3, 651.0], [21.4, 651.0], [21.5, 651.0], [21.6, 651.0], [21.7, 651.0], [21.8, 651.0], [21.9, 651.0], [22.0, 651.0], [22.1, 652.0], [22.2, 652.0], [22.3, 652.0], [22.4, 652.0], [22.5, 652.0], [22.6, 652.0], [22.7, 652.0], [22.8, 652.0], [22.9, 652.0], [23.0, 652.0], [23.1, 652.0], [23.2, 652.0], [23.3, 652.0], [23.4, 652.0], [23.5, 652.0], [23.6, 652.0], [23.7, 652.0], [23.8, 652.0], [23.9, 652.0], [24.0, 652.0], [24.1, 652.0], [24.2, 653.0], [24.3, 653.0], [24.4, 653.0], [24.5, 653.0], [24.6, 653.0], [24.7, 653.0], [24.8, 653.0], [24.9, 653.0], [25.0, 653.0], [25.1, 653.0], [25.2, 653.0], [25.3, 653.0], [25.4, 653.0], [25.5, 653.0], [25.6, 653.0], [25.7, 653.0], [25.8, 653.0], [25.9, 653.0], [26.0, 653.0], [26.1, 653.0], [26.2, 653.0], [26.3, 654.0], [26.4, 654.0], [26.5, 654.0], [26.6, 654.0], [26.7, 654.0], [26.8, 654.0], [26.9, 654.0], [27.0, 654.0], [27.1, 654.0], [27.2, 654.0], [27.3, 654.0], [27.4, 654.0], [27.5, 654.0], [27.6, 654.0], [27.7, 654.0], [27.8, 654.0], [27.9, 654.0], [28.0, 654.0], [28.1, 654.0], [28.2, 654.0], [28.3, 655.0], [28.4, 655.0], [28.5, 655.0], [28.6, 655.0], [28.7, 655.0], [28.8, 655.0], [28.9, 655.0], [29.0, 655.0], [29.1, 655.0], [29.2, 655.0], [29.3, 655.0], [29.4, 655.0], [29.5, 655.0], [29.6, 655.0], [29.7, 655.0], [29.8, 655.0], [29.9, 655.0], [30.0, 655.0], [30.1, 655.0], [30.2, 655.0], [30.3, 655.0], [30.4, 655.0], [30.5, 655.0], [30.6, 655.0], [30.7, 655.0], [30.8, 655.0], [30.9, 655.0], [31.0, 655.0], [31.1, 655.0], [31.2, 655.0], [31.3, 655.0], [31.4, 656.0], [31.5, 656.0], [31.6, 656.0], [31.7, 656.0], [31.8, 656.0], [31.9, 656.0], [32.0, 656.0], [32.1, 656.0], [32.2, 656.0], [32.3, 656.0], [32.4, 656.0], [32.5, 656.0], [32.6, 656.0], [32.7, 656.0], [32.8, 656.0], [32.9, 656.0], [33.0, 656.0], [33.1, 656.0], [33.2, 656.0], [33.3, 656.0], [33.4, 656.0], [33.5, 656.0], [33.6, 656.0], [33.7, 656.0], [33.8, 656.0], [33.9, 656.0], [34.0, 656.0], [34.1, 656.0], [34.2, 656.0], [34.3, 657.0], [34.4, 657.0], [34.5, 657.0], [34.6, 657.0], [34.7, 657.0], [34.8, 657.0], [34.9, 657.0], [35.0, 657.0], [35.1, 657.0], [35.2, 657.0], [35.3, 657.0], [35.4, 657.0], [35.5, 657.0], [35.6, 657.0], [35.7, 657.0], [35.8, 657.0], [35.9, 657.0], [36.0, 657.0], [36.1, 657.0], [36.2, 657.0], [36.3, 657.0], [36.4, 657.0], [36.5, 657.0], [36.6, 657.0], [36.7, 657.0], [36.8, 657.0], [36.9, 657.0], [37.0, 657.0], [37.1, 657.0], [37.2, 657.0], [37.3, 657.0], [37.4, 657.0], [37.5, 657.0], [37.6, 657.0], [37.7, 657.0], [37.8, 657.0], [37.9, 657.0], [38.0, 657.0], [38.1, 657.0], [38.2, 657.0], [38.3, 657.0], [38.4, 657.0], [38.5, 658.0], [38.6, 658.0], [38.7, 658.0], [38.8, 658.0], [38.9, 658.0], [39.0, 658.0], [39.1, 658.0], [39.2, 658.0], [39.3, 658.0], [39.4, 658.0], [39.5, 658.0], [39.6, 658.0], [39.7, 658.0], [39.8, 658.0], [39.9, 658.0], [40.0, 658.0], [40.1, 658.0], [40.2, 658.0], [40.3, 658.0], [40.4, 658.0], [40.5, 658.0], [40.6, 658.0], [40.7, 658.0], [40.8, 658.0], [40.9, 658.0], [41.0, 658.0], [41.1, 658.0], [41.2, 658.0], [41.3, 658.0], [41.4, 658.0], [41.5, 658.0], [41.6, 658.0], [41.7, 658.0], [41.8, 658.0], [41.9, 658.0], [42.0, 658.0], [42.1, 658.0], [42.2, 659.0], [42.3, 659.0], [42.4, 659.0], [42.5, 659.0], [42.6, 659.0], [42.7, 659.0], [42.8, 659.0], [42.9, 659.0], [43.0, 659.0], [43.1, 659.0], [43.2, 659.0], [43.3, 659.0], [43.4, 659.0], [43.5, 659.0], [43.6, 659.0], [43.7, 659.0], [43.8, 659.0], [43.9, 659.0], [44.0, 660.0], [44.1, 660.0], [44.2, 660.0], [44.3, 660.0], [44.4, 660.0], [44.5, 660.0], [44.6, 660.0], [44.7, 660.0], [44.8, 660.0], [44.9, 660.0], [45.0, 660.0], [45.1, 660.0], [45.2, 660.0], [45.3, 660.0], [45.4, 660.0], [45.5, 660.0], [45.6, 660.0], [45.7, 660.0], [45.8, 660.0], [45.9, 660.0], [46.0, 660.0], [46.1, 660.0], [46.2, 660.0], [46.3, 660.0], [46.4, 660.0], [46.5, 660.0], [46.6, 661.0], [46.7, 661.0], [46.8, 661.0], [46.9, 661.0], [47.0, 661.0], [47.1, 661.0], [47.2, 661.0], [47.3, 661.0], [47.4, 661.0], [47.5, 661.0], [47.6, 661.0], [47.7, 661.0], [47.8, 661.0], [47.9, 661.0], [48.0, 661.0], [48.1, 661.0], [48.2, 661.0], [48.3, 661.0], [48.4, 661.0], [48.5, 661.0], [48.6, 661.0], [48.7, 661.0], [48.8, 661.0], [48.9, 661.0], [49.0, 661.0], [49.1, 661.0], [49.2, 661.0], [49.3, 661.0], [49.4, 661.0], [49.5, 661.0], [49.6, 661.0], [49.7, 661.0], [49.8, 661.0], [49.9, 662.0], [50.0, 662.0], [50.1, 662.0], [50.2, 662.0], [50.3, 662.0], [50.4, 662.0], [50.5, 662.0], [50.6, 662.0], [50.7, 662.0], [50.8, 662.0], [50.9, 662.0], [51.0, 662.0], [51.1, 662.0], [51.2, 662.0], [51.3, 662.0], [51.4, 662.0], [51.5, 662.0], [51.6, 662.0], [51.7, 662.0], [51.8, 662.0], [51.9, 662.0], [52.0, 662.0], [52.1, 662.0], [52.2, 662.0], [52.3, 662.0], [52.4, 662.0], [52.5, 663.0], [52.6, 663.0], [52.7, 663.0], [52.8, 663.0], [52.9, 663.0], [53.0, 663.0], [53.1, 663.0], [53.2, 663.0], [53.3, 663.0], [53.4, 663.0], [53.5, 663.0], [53.6, 663.0], [53.7, 663.0], [53.8, 663.0], [53.9, 663.0], [54.0, 663.0], [54.1, 663.0], [54.2, 663.0], [54.3, 663.0], [54.4, 663.0], [54.5, 663.0], [54.6, 663.0], [54.7, 664.0], [54.8, 664.0], [54.9, 664.0], [55.0, 664.0], [55.1, 664.0], [55.2, 664.0], [55.3, 664.0], [55.4, 664.0], [55.5, 664.0], [55.6, 664.0], [55.7, 664.0], [55.8, 664.0], [55.9, 664.0], [56.0, 664.0], [56.1, 664.0], [56.2, 664.0], [56.3, 664.0], [56.4, 664.0], [56.5, 664.0], [56.6, 664.0], [56.7, 664.0], [56.8, 664.0], [56.9, 665.0], [57.0, 665.0], [57.1, 665.0], [57.2, 665.0], [57.3, 665.0], [57.4, 665.0], [57.5, 665.0], [57.6, 665.0], [57.7, 665.0], [57.8, 665.0], [57.9, 665.0], [58.0, 665.0], [58.1, 665.0], [58.2, 665.0], [58.3, 665.0], [58.4, 665.0], [58.5, 665.0], [58.6, 665.0], [58.7, 665.0], [58.8, 665.0], [58.9, 665.0], [59.0, 665.0], [59.1, 665.0], [59.2, 665.0], [59.3, 665.0], [59.4, 665.0], [59.5, 665.0], [59.6, 665.0], [59.7, 665.0], [59.8, 665.0], [59.9, 665.0], [60.0, 665.0], [60.1, 665.0], [60.2, 665.0], [60.3, 666.0], [60.4, 666.0], [60.5, 666.0], [60.6, 666.0], [60.7, 666.0], [60.8, 666.0], [60.9, 666.0], [61.0, 666.0], [61.1, 666.0], [61.2, 666.0], [61.3, 666.0], [61.4, 666.0], [61.5, 666.0], [61.6, 666.0], [61.7, 666.0], [61.8, 666.0], [61.9, 666.0], [62.0, 666.0], [62.1, 666.0], [62.2, 666.0], [62.3, 666.0], [62.4, 667.0], [62.5, 667.0], [62.6, 667.0], [62.7, 667.0], [62.8, 667.0], [62.9, 667.0], [63.0, 667.0], [63.1, 667.0], [63.2, 667.0], [63.3, 667.0], [63.4, 667.0], [63.5, 667.0], [63.6, 667.0], [63.7, 667.0], [63.8, 667.0], [63.9, 667.0], [64.0, 667.0], [64.1, 667.0], [64.2, 667.0], [64.3, 667.0], [64.4, 667.0], [64.5, 667.0], [64.6, 667.0], [64.7, 667.0], [64.8, 668.0], [64.9, 668.0], [65.0, 668.0], [65.1, 668.0], [65.2, 668.0], [65.3, 668.0], [65.4, 668.0], [65.5, 668.0], [65.6, 668.0], [65.7, 668.0], [65.8, 668.0], [65.9, 668.0], [66.0, 668.0], [66.1, 668.0], [66.2, 668.0], [66.3, 668.0], [66.4, 668.0], [66.5, 668.0], [66.6, 668.0], [66.7, 668.0], [66.8, 668.0], [66.9, 669.0], [67.0, 669.0], [67.1, 669.0], [67.2, 669.0], [67.3, 669.0], [67.4, 669.0], [67.5, 669.0], [67.6, 669.0], [67.7, 669.0], [67.8, 669.0], [67.9, 669.0], [68.0, 669.0], [68.1, 670.0], [68.2, 670.0], [68.3, 670.0], [68.4, 670.0], [68.5, 670.0], [68.6, 670.0], [68.7, 670.0], [68.8, 670.0], [68.9, 670.0], [69.0, 670.0], [69.1, 670.0], [69.2, 670.0], [69.3, 670.0], [69.4, 671.0], [69.5, 671.0], [69.6, 671.0], [69.7, 671.0], [69.8, 671.0], [69.9, 671.0], [70.0, 671.0], [70.1, 671.0], [70.2, 671.0], [70.3, 671.0], [70.4, 671.0], [70.5, 671.0], [70.6, 671.0], [70.7, 671.0], [70.8, 671.0], [70.9, 671.0], [71.0, 671.0], [71.1, 671.0], [71.2, 671.0], [71.3, 671.0], [71.4, 672.0], [71.5, 672.0], [71.6, 672.0], [71.7, 672.0], [71.8, 672.0], [71.9, 672.0], [72.0, 672.0], [72.1, 672.0], [72.2, 672.0], [72.3, 672.0], [72.4, 672.0], [72.5, 672.0], [72.6, 672.0], [72.7, 672.0], [72.8, 672.0], [72.9, 672.0], [73.0, 673.0], [73.1, 673.0], [73.2, 673.0], [73.3, 673.0], [73.4, 673.0], [73.5, 673.0], [73.6, 673.0], [73.7, 673.0], [73.8, 673.0], [73.9, 673.0], [74.0, 673.0], [74.1, 674.0], [74.2, 674.0], [74.3, 674.0], [74.4, 674.0], [74.5, 674.0], [74.6, 674.0], [74.7, 674.0], [74.8, 674.0], [74.9, 674.0], [75.0, 674.0], [75.1, 674.0], [75.2, 674.0], [75.3, 674.0], [75.4, 674.0], [75.5, 674.0], [75.6, 674.0], [75.7, 674.0], [75.8, 674.0], [75.9, 675.0], [76.0, 675.0], [76.1, 675.0], [76.2, 675.0], [76.3, 675.0], [76.4, 675.0], [76.5, 675.0], [76.6, 675.0], [76.7, 675.0], [76.8, 675.0], [76.9, 675.0], [77.0, 675.0], [77.1, 676.0], [77.2, 676.0], [77.3, 676.0], [77.4, 676.0], [77.5, 676.0], [77.6, 676.0], [77.7, 676.0], [77.8, 676.0], [77.9, 676.0], [78.0, 676.0], [78.1, 676.0], [78.2, 676.0], [78.3, 676.0], [78.4, 676.0], [78.5, 676.0], [78.6, 676.0], [78.7, 677.0], [78.8, 677.0], [78.9, 677.0], [79.0, 677.0], [79.1, 677.0], [79.2, 677.0], [79.3, 677.0], [79.4, 677.0], [79.5, 677.0], [79.6, 677.0], [79.7, 677.0], [79.8, 677.0], [79.9, 677.0], [80.0, 677.0], [80.1, 677.0], [80.2, 677.0], [80.3, 677.0], [80.4, 677.0], [80.5, 678.0], [80.6, 678.0], [80.7, 678.0], [80.8, 678.0], [80.9, 678.0], [81.0, 678.0], [81.1, 678.0], [81.2, 678.0], [81.3, 678.0], [81.4, 678.0], [81.5, 678.0], [81.6, 678.0], [81.7, 678.0], [81.8, 678.0], [81.9, 678.0], [82.0, 678.0], [82.1, 678.0], [82.2, 678.0], [82.3, 678.0], [82.4, 678.0], [82.5, 679.0], [82.6, 679.0], [82.7, 679.0], [82.8, 679.0], [82.9, 679.0], [83.0, 679.0], [83.1, 679.0], [83.2, 679.0], [83.3, 679.0], [83.4, 680.0], [83.5, 680.0], [83.6, 680.0], [83.7, 680.0], [83.8, 680.0], [83.9, 680.0], [84.0, 680.0], [84.1, 680.0], [84.2, 680.0], [84.3, 680.0], [84.4, 681.0], [84.5, 681.0], [84.6, 681.0], [84.7, 681.0], [84.8, 681.0], [84.9, 681.0], [85.0, 681.0], [85.1, 681.0], [85.2, 681.0], [85.3, 681.0], [85.4, 681.0], [85.5, 682.0], [85.6, 682.0], [85.7, 682.0], [85.8, 682.0], [85.9, 682.0], [86.0, 682.0], [86.1, 682.0], [86.2, 682.0], [86.3, 682.0], [86.4, 683.0], [86.5, 683.0], [86.6, 683.0], [86.7, 683.0], [86.8, 683.0], [86.9, 683.0], [87.0, 683.0], [87.1, 683.0], [87.2, 683.0], [87.3, 683.0], [87.4, 684.0], [87.5, 684.0], [87.6, 684.0], [87.7, 684.0], [87.8, 684.0], [87.9, 684.0], [88.0, 684.0], [88.1, 684.0], [88.2, 684.0], [88.3, 684.0], [88.4, 685.0], [88.5, 685.0], [88.6, 685.0], [88.7, 685.0], [88.8, 685.0], [88.9, 685.0], [89.0, 685.0], [89.1, 685.0], [89.2, 685.0], [89.3, 685.0], [89.4, 685.0], [89.5, 685.0], [89.6, 686.0], [89.7, 686.0], [89.8, 686.0], [89.9, 686.0], [90.0, 686.0], [90.1, 686.0], [90.2, 686.0], [90.3, 687.0], [90.4, 687.0], [90.5, 687.0], [90.6, 687.0], [90.7, 687.0], [90.8, 687.0], [90.9, 687.0], [91.0, 687.0], [91.1, 687.0], [91.2, 688.0], [91.3, 688.0], [91.4, 688.0], [91.5, 688.0], [91.6, 688.0], [91.7, 688.0], [91.8, 688.0], [91.9, 688.0], [92.0, 688.0], [92.1, 689.0], [92.2, 689.0], [92.3, 689.0], [92.4, 689.0], [92.5, 689.0], [92.6, 690.0], [92.7, 690.0], [92.8, 690.0], [92.9, 690.0], [93.0, 690.0], [93.1, 690.0], [93.2, 690.0], [93.3, 690.0], [93.4, 691.0], [93.5, 691.0], [93.6, 691.0], [93.7, 691.0], [93.8, 691.0], [93.9, 691.0], [94.0, 692.0], [94.1, 692.0], [94.2, 692.0], [94.3, 692.0], [94.4, 692.0], [94.5, 692.0], [94.6, 692.0], [94.7, 693.0], [94.8, 693.0], [94.9, 693.0], [95.0, 693.0], [95.1, 693.0], [95.2, 693.0], [95.3, 693.0], [95.4, 693.0], [95.5, 693.0], [95.6, 694.0], [95.7, 694.0], [95.8, 694.0], [95.9, 696.0], [96.0, 696.0], [96.1, 696.0], [96.2, 696.0], [96.3, 696.0], [96.4, 697.0], [96.5, 697.0], [96.6, 697.0], [96.7, 698.0], [96.8, 700.0], [96.9, 700.0], [97.0, 700.0], [97.1, 701.0], [97.2, 702.0], [97.3, 703.0], [97.4, 703.0], [97.5, 704.0], [97.6, 704.0], [97.7, 705.0], [97.8, 705.0], [97.9, 708.0], [98.0, 709.0], [98.1, 710.0], [98.2, 711.0], [98.3, 711.0], [98.4, 713.0], [98.5, 715.0], [98.6, 716.0], [98.7, 716.0], [98.8, 717.0], [98.9, 731.0], [99.0, 742.0], [99.1, 757.0], [99.2, 757.0], [99.3, 775.0], [99.4, 830.0], [99.5, 858.0], [99.6, 858.0], [99.7, 883.0], [99.8, 1293.0], [99.9, 1318.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 1062.0, "series": [{"data": [[600.0, 1062.0], [1200.0, 1.0], [1300.0, 2.0], [700.0, 30.0], [800.0, 5.0], [500.0, 85.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 105.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1080.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 105.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1080.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 6.5194805194805205, "minX": 1.78906128E12, "maxY": 36.897610921501695, "series": [{"data": [[1.7890614E12, 36.897610921501695], [1.78906134E12, 32.28957055214721], [1.78906128E12, 6.5194805194805205]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 40 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890614E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 544.8888888888889, "minX": 1.0, "maxY": 929.0, "series": [{"data": [[2.0, 576.75], [32.0, 670.5000000000001], [33.0, 675.9375], [34.0, 929.0], [35.0, 665.8749999999999], [36.0, 680.6], [37.0, 671.4999999999999], [38.0, 673.3333333333335], [39.0, 677.6666666666666], [40.0, 664.0679012345678], [3.0, 572.8333333333334], [4.0, 562.4285714285714], [5.0, 544.8888888888889], [6.0, 556.3333333333333], [7.0, 554.2857142857143], [8.0, 562.2666666666667], [9.0, 579.8461538461539], [10.0, 595.1875], [11.0, 610.3846153846155], [12.0, 624.9999999999999], [13.0, 637.9999999999999], [14.0, 650.3333333333333], [15.0, 658.8124999999999], [1.0, 618.5], [16.0, 661.9411764705883], [17.0, 669.1176470588235], [18.0, 670.7272727272727], [19.0, 671.8750000000001], [20.0, 665.7894736842106], [21.0, 666.7857142857142], [22.0, 673.3846153846154], [23.0, 668.5909090909091], [24.0, 661.375], [25.0, 676.1578947368421], [26.0, 667.5384615384615], [27.0, 676.9375000000001], [28.0, 672.2142857142857], [29.0, 669.5294117647057], [30.0, 665.923076923077], [31.0, 679.2500000000001]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[31.754430379746868, 659.510548523206]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 202.76666666666668, "minX": 1.78906128E12, "maxY": 3137.75, "series": [{"data": [[1.7890614E12, 1128.05], [1.78906134E12, 3137.75], [1.78906128E12, 296.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7890614E12, 771.5666666666667], [1.78906134E12, 2146.1666666666665], [1.78906128E12, 202.76666666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890614E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 554.4675324675326, "minX": 1.78906128E12, "maxY": 668.058895705522, "series": [{"data": [[1.7890614E12, 663.3378839590441], [1.78906134E12, 668.058895705522], [1.78906128E12, 554.4675324675326]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7890614E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 554.3246753246754, "minX": 1.78906128E12, "maxY": 668.0122699386502, "series": [{"data": [[1.7890614E12, 663.3242320819106], [1.78906134E12, 668.0122699386502], [1.78906128E12, 554.3246753246754]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7890614E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.06748466257668706, "minX": 1.78906128E12, "maxY": 0.44155844155844165, "series": [{"data": [[1.7890614E12, 0.09897610921501705], [1.78906134E12, 0.06748466257668706], [1.78906128E12, 0.44155844155844165]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7890614E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 524.0, "minX": 1.78906128E12, "maxY": 620.0, "series": [{"data": [[1.78906134E12, 620.0], [1.78906128E12, 610.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78906134E12, 575.0], [1.78906128E12, 524.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78906134E12, 614.3], [1.78906128E12, 577.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78906134E12, 620.0], [1.78906128E12, 610.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78906134E12, 604.0], [1.78906128E12, 553.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78906134E12, 618.65], [1.78906128E12, 583.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906134E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 543.0, "minX": 1.0, "maxY": 682.5, "series": [{"data": [[1.0, 581.0], [4.0, 552.5], [9.0, 543.0], [11.0, 553.0], [6.0, 554.5], [12.0, 603.5], [7.0, 543.0], [14.0, 571.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 682.5], [16.0, 663.0], [17.0, 671.0], [18.0, 670.0], [10.0, 664.0], [11.0, 672.5], [12.0, 655.0], [13.0, 662.0], [14.0, 656.5], [15.0, 668.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 543.0, "minX": 1.0, "maxY": 682.5, "series": [{"data": [[1.0, 577.0], [4.0, 552.5], [9.0, 543.0], [11.0, 553.0], [6.0, 554.5], [12.0, 603.0], [7.0, 543.0], [14.0, 571.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8.0, 682.5], [16.0, 663.0], [17.0, 671.0], [18.0, 670.0], [10.0, 664.0], [11.0, 672.5], [12.0, 655.0], [13.0, 662.0], [14.0, 656.0], [15.0, 668.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.4, "minX": 1.78906128E12, "maxY": 13.616666666666667, "series": [{"data": [[1.7890614E12, 4.733333333333333], [1.78906134E12, 13.616666666666667], [1.78906128E12, 1.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890614E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.78906128E12, "maxY": 13.583333333333334, "series": [{"data": [[1.7890614E12, 4.883333333333334], [1.78906134E12, 13.583333333333334], [1.78906128E12, 1.2833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890614E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.78906128E12, "maxY": 13.116666666666667, "series": [{"data": [[1.78906134E12, 0.4666666666666667], [1.78906128E12, 1.2833333333333334]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.7890614E12, 4.883333333333334], [1.78906134E12, 13.116666666666667]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7890614E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.78906128E12, "maxY": 13.116666666666667, "series": [{"data": [[1.78906134E12, 0.4666666666666667], [1.78906128E12, 1.2833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7890614E12, 4.883333333333334], [1.78906134E12, 13.116666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7890614E12, "title": "Total Transactions Per Second"}},
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

