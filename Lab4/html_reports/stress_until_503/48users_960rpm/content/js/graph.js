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
        data: {"result": {"minY": 526.0, "minX": 0.0, "maxY": 1250.0, "series": [{"data": [[0.0, 526.0], [0.1, 537.0], [0.2, 539.0], [0.3, 545.0], [0.4, 549.0], [0.5, 549.0], [0.6, 549.0], [0.7, 550.0], [0.8, 550.0], [0.9, 550.0], [1.0, 550.0], [1.1, 551.0], [1.2, 551.0], [1.3, 552.0], [1.4, 554.0], [1.5, 554.0], [1.6, 554.0], [1.7, 555.0], [1.8, 557.0], [1.9, 557.0], [2.0, 557.0], [2.1, 558.0], [2.2, 558.0], [2.3, 558.0], [2.4, 558.0], [2.5, 559.0], [2.6, 560.0], [2.7, 560.0], [2.8, 562.0], [2.9, 562.0], [3.0, 563.0], [3.1, 564.0], [3.2, 564.0], [3.3, 566.0], [3.4, 566.0], [3.5, 566.0], [3.6, 566.0], [3.7, 566.0], [3.8, 568.0], [3.9, 568.0], [4.0, 574.0], [4.1, 577.0], [4.2, 578.0], [4.3, 578.0], [4.4, 579.0], [4.5, 579.0], [4.6, 580.0], [4.7, 582.0], [4.8, 582.0], [4.9, 583.0], [5.0, 585.0], [5.1, 585.0], [5.2, 589.0], [5.3, 590.0], [5.4, 593.0], [5.5, 594.0], [5.6, 595.0], [5.7, 598.0], [5.8, 598.0], [5.9, 599.0], [6.0, 600.0], [6.1, 601.0], [6.2, 604.0], [6.3, 604.0], [6.4, 604.0], [6.5, 607.0], [6.6, 607.0], [6.7, 607.0], [6.8, 608.0], [6.9, 610.0], [7.0, 612.0], [7.1, 614.0], [7.2, 616.0], [7.3, 617.0], [7.4, 619.0], [7.5, 620.0], [7.6, 621.0], [7.7, 625.0], [7.8, 628.0], [7.9, 629.0], [8.0, 632.0], [8.1, 632.0], [8.2, 634.0], [8.3, 634.0], [8.4, 637.0], [8.5, 639.0], [8.6, 639.0], [8.7, 641.0], [8.8, 642.0], [8.9, 644.0], [9.0, 645.0], [9.1, 645.0], [9.2, 647.0], [9.3, 648.0], [9.4, 650.0], [9.5, 650.0], [9.6, 650.0], [9.7, 653.0], [9.8, 654.0], [9.9, 655.0], [10.0, 655.0], [10.1, 657.0], [10.2, 658.0], [10.3, 659.0], [10.4, 660.0], [10.5, 665.0], [10.6, 667.0], [10.7, 669.0], [10.8, 671.0], [10.9, 672.0], [11.0, 672.0], [11.1, 674.0], [11.2, 676.0], [11.3, 678.0], [11.4, 678.0], [11.5, 679.0], [11.6, 680.0], [11.7, 682.0], [11.8, 683.0], [11.9, 686.0], [12.0, 686.0], [12.1, 688.0], [12.2, 688.0], [12.3, 690.0], [12.4, 691.0], [12.5, 691.0], [12.6, 692.0], [12.7, 692.0], [12.8, 692.0], [12.9, 692.0], [13.0, 692.0], [13.1, 692.0], [13.2, 692.0], [13.3, 692.0], [13.4, 693.0], [13.5, 693.0], [13.6, 693.0], [13.7, 693.0], [13.8, 693.0], [13.9, 693.0], [14.0, 693.0], [14.1, 693.0], [14.2, 694.0], [14.3, 694.0], [14.4, 694.0], [14.5, 694.0], [14.6, 694.0], [14.7, 694.0], [14.8, 694.0], [14.9, 694.0], [15.0, 694.0], [15.1, 694.0], [15.2, 694.0], [15.3, 694.0], [15.4, 694.0], [15.5, 694.0], [15.6, 694.0], [15.7, 695.0], [15.8, 695.0], [15.9, 695.0], [16.0, 695.0], [16.1, 695.0], [16.2, 695.0], [16.3, 695.0], [16.4, 695.0], [16.5, 695.0], [16.6, 695.0], [16.7, 695.0], [16.8, 695.0], [16.9, 695.0], [17.0, 695.0], [17.1, 696.0], [17.2, 696.0], [17.3, 696.0], [17.4, 696.0], [17.5, 696.0], [17.6, 696.0], [17.7, 696.0], [17.8, 696.0], [17.9, 696.0], [18.0, 696.0], [18.1, 696.0], [18.2, 696.0], [18.3, 696.0], [18.4, 696.0], [18.5, 696.0], [18.6, 697.0], [18.7, 697.0], [18.8, 697.0], [18.9, 697.0], [19.0, 697.0], [19.1, 697.0], [19.2, 697.0], [19.3, 697.0], [19.4, 697.0], [19.5, 697.0], [19.6, 697.0], [19.7, 697.0], [19.8, 697.0], [19.9, 697.0], [20.0, 697.0], [20.1, 698.0], [20.2, 698.0], [20.3, 698.0], [20.4, 698.0], [20.5, 698.0], [20.6, 698.0], [20.7, 698.0], [20.8, 699.0], [20.9, 699.0], [21.0, 699.0], [21.1, 699.0], [21.2, 699.0], [21.3, 699.0], [21.4, 699.0], [21.5, 699.0], [21.6, 699.0], [21.7, 699.0], [21.8, 699.0], [21.9, 699.0], [22.0, 699.0], [22.1, 699.0], [22.2, 699.0], [22.3, 699.0], [22.4, 699.0], [22.5, 699.0], [22.6, 699.0], [22.7, 699.0], [22.8, 699.0], [22.9, 700.0], [23.0, 700.0], [23.1, 700.0], [23.2, 700.0], [23.3, 700.0], [23.4, 700.0], [23.5, 700.0], [23.6, 700.0], [23.7, 700.0], [23.8, 700.0], [23.9, 700.0], [24.0, 700.0], [24.1, 700.0], [24.2, 700.0], [24.3, 700.0], [24.4, 700.0], [24.5, 700.0], [24.6, 700.0], [24.7, 701.0], [24.8, 701.0], [24.9, 701.0], [25.0, 701.0], [25.1, 701.0], [25.2, 701.0], [25.3, 701.0], [25.4, 701.0], [25.5, 701.0], [25.6, 701.0], [25.7, 701.0], [25.8, 701.0], [25.9, 701.0], [26.0, 701.0], [26.1, 701.0], [26.2, 701.0], [26.3, 701.0], [26.4, 701.0], [26.5, 701.0], [26.6, 701.0], [26.7, 701.0], [26.8, 702.0], [26.9, 702.0], [27.0, 702.0], [27.1, 702.0], [27.2, 702.0], [27.3, 702.0], [27.4, 702.0], [27.5, 702.0], [27.6, 702.0], [27.7, 702.0], [27.8, 702.0], [27.9, 702.0], [28.0, 702.0], [28.1, 702.0], [28.2, 702.0], [28.3, 702.0], [28.4, 703.0], [28.5, 703.0], [28.6, 703.0], [28.7, 703.0], [28.8, 703.0], [28.9, 703.0], [29.0, 703.0], [29.1, 703.0], [29.2, 703.0], [29.3, 703.0], [29.4, 703.0], [29.5, 703.0], [29.6, 703.0], [29.7, 703.0], [29.8, 703.0], [29.9, 703.0], [30.0, 703.0], [30.1, 703.0], [30.2, 703.0], [30.3, 703.0], [30.4, 703.0], [30.5, 703.0], [30.6, 703.0], [30.7, 703.0], [30.8, 703.0], [30.9, 703.0], [31.0, 703.0], [31.1, 703.0], [31.2, 704.0], [31.3, 704.0], [31.4, 704.0], [31.5, 704.0], [31.6, 704.0], [31.7, 704.0], [31.8, 704.0], [31.9, 704.0], [32.0, 704.0], [32.1, 704.0], [32.2, 704.0], [32.3, 704.0], [32.4, 704.0], [32.5, 704.0], [32.6, 705.0], [32.7, 705.0], [32.8, 705.0], [32.9, 705.0], [33.0, 705.0], [33.1, 705.0], [33.2, 705.0], [33.3, 705.0], [33.4, 705.0], [33.5, 705.0], [33.6, 706.0], [33.7, 706.0], [33.8, 706.0], [33.9, 706.0], [34.0, 706.0], [34.1, 706.0], [34.2, 706.0], [34.3, 706.0], [34.4, 706.0], [34.5, 706.0], [34.6, 706.0], [34.7, 706.0], [34.8, 706.0], [34.9, 706.0], [35.0, 706.0], [35.1, 706.0], [35.2, 706.0], [35.3, 706.0], [35.4, 707.0], [35.5, 707.0], [35.6, 707.0], [35.7, 707.0], [35.8, 707.0], [35.9, 707.0], [36.0, 707.0], [36.1, 707.0], [36.2, 707.0], [36.3, 707.0], [36.4, 707.0], [36.5, 707.0], [36.6, 707.0], [36.7, 707.0], [36.8, 707.0], [36.9, 707.0], [37.0, 707.0], [37.1, 707.0], [37.2, 707.0], [37.3, 707.0], [37.4, 707.0], [37.5, 707.0], [37.6, 708.0], [37.7, 708.0], [37.8, 708.0], [37.9, 708.0], [38.0, 708.0], [38.1, 708.0], [38.2, 708.0], [38.3, 708.0], [38.4, 708.0], [38.5, 708.0], [38.6, 708.0], [38.7, 708.0], [38.8, 708.0], [38.9, 708.0], [39.0, 708.0], [39.1, 708.0], [39.2, 708.0], [39.3, 708.0], [39.4, 708.0], [39.5, 708.0], [39.6, 708.0], [39.7, 708.0], [39.8, 708.0], [39.9, 709.0], [40.0, 709.0], [40.1, 709.0], [40.2, 709.0], [40.3, 709.0], [40.4, 709.0], [40.5, 709.0], [40.6, 709.0], [40.7, 709.0], [40.8, 709.0], [40.9, 709.0], [41.0, 709.0], [41.1, 709.0], [41.2, 709.0], [41.3, 709.0], [41.4, 709.0], [41.5, 709.0], [41.6, 709.0], [41.7, 709.0], [41.8, 709.0], [41.9, 709.0], [42.0, 709.0], [42.1, 710.0], [42.2, 710.0], [42.3, 710.0], [42.4, 710.0], [42.5, 710.0], [42.6, 710.0], [42.7, 710.0], [42.8, 710.0], [42.9, 710.0], [43.0, 710.0], [43.1, 710.0], [43.2, 710.0], [43.3, 710.0], [43.4, 710.0], [43.5, 710.0], [43.6, 710.0], [43.7, 710.0], [43.8, 710.0], [43.9, 710.0], [44.0, 710.0], [44.1, 710.0], [44.2, 710.0], [44.3, 710.0], [44.4, 710.0], [44.5, 710.0], [44.6, 710.0], [44.7, 710.0], [44.8, 710.0], [44.9, 710.0], [45.0, 710.0], [45.1, 710.0], [45.2, 710.0], [45.3, 710.0], [45.4, 710.0], [45.5, 710.0], [45.6, 710.0], [45.7, 710.0], [45.8, 710.0], [45.9, 710.0], [46.0, 711.0], [46.1, 711.0], [46.2, 711.0], [46.3, 711.0], [46.4, 711.0], [46.5, 711.0], [46.6, 711.0], [46.7, 711.0], [46.8, 711.0], [46.9, 711.0], [47.0, 711.0], [47.1, 711.0], [47.2, 711.0], [47.3, 711.0], [47.4, 711.0], [47.5, 711.0], [47.6, 711.0], [47.7, 711.0], [47.8, 711.0], [47.9, 711.0], [48.0, 711.0], [48.1, 711.0], [48.2, 711.0], [48.3, 711.0], [48.4, 711.0], [48.5, 712.0], [48.6, 712.0], [48.7, 712.0], [48.8, 712.0], [48.9, 712.0], [49.0, 712.0], [49.1, 712.0], [49.2, 712.0], [49.3, 712.0], [49.4, 712.0], [49.5, 712.0], [49.6, 712.0], [49.7, 712.0], [49.8, 712.0], [49.9, 712.0], [50.0, 712.0], [50.1, 712.0], [50.2, 712.0], [50.3, 712.0], [50.4, 712.0], [50.5, 712.0], [50.6, 712.0], [50.7, 712.0], [50.8, 712.0], [50.9, 712.0], [51.0, 712.0], [51.1, 712.0], [51.2, 713.0], [51.3, 713.0], [51.4, 713.0], [51.5, 713.0], [51.6, 713.0], [51.7, 713.0], [51.8, 713.0], [51.9, 713.0], [52.0, 713.0], [52.1, 713.0], [52.2, 713.0], [52.3, 713.0], [52.4, 713.0], [52.5, 713.0], [52.6, 713.0], [52.7, 713.0], [52.8, 713.0], [52.9, 713.0], [53.0, 713.0], [53.1, 713.0], [53.2, 713.0], [53.3, 713.0], [53.4, 713.0], [53.5, 713.0], [53.6, 714.0], [53.7, 714.0], [53.8, 714.0], [53.9, 714.0], [54.0, 714.0], [54.1, 714.0], [54.2, 714.0], [54.3, 714.0], [54.4, 714.0], [54.5, 714.0], [54.6, 714.0], [54.7, 714.0], [54.8, 714.0], [54.9, 714.0], [55.0, 714.0], [55.1, 714.0], [55.2, 714.0], [55.3, 714.0], [55.4, 714.0], [55.5, 714.0], [55.6, 714.0], [55.7, 714.0], [55.8, 714.0], [55.9, 714.0], [56.0, 714.0], [56.1, 714.0], [56.2, 714.0], [56.3, 714.0], [56.4, 714.0], [56.5, 714.0], [56.6, 714.0], [56.7, 714.0], [56.8, 714.0], [56.9, 714.0], [57.0, 715.0], [57.1, 715.0], [57.2, 715.0], [57.3, 715.0], [57.4, 715.0], [57.5, 715.0], [57.6, 715.0], [57.7, 715.0], [57.8, 715.0], [57.9, 715.0], [58.0, 715.0], [58.1, 715.0], [58.2, 715.0], [58.3, 715.0], [58.4, 715.0], [58.5, 715.0], [58.6, 715.0], [58.7, 715.0], [58.8, 715.0], [58.9, 715.0], [59.0, 715.0], [59.1, 715.0], [59.2, 715.0], [59.3, 715.0], [59.4, 715.0], [59.5, 716.0], [59.6, 716.0], [59.7, 716.0], [59.8, 716.0], [59.9, 716.0], [60.0, 716.0], [60.1, 716.0], [60.2, 716.0], [60.3, 716.0], [60.4, 716.0], [60.5, 716.0], [60.6, 716.0], [60.7, 716.0], [60.8, 716.0], [60.9, 716.0], [61.0, 716.0], [61.1, 716.0], [61.2, 716.0], [61.3, 716.0], [61.4, 716.0], [61.5, 716.0], [61.6, 716.0], [61.7, 716.0], [61.8, 716.0], [61.9, 716.0], [62.0, 716.0], [62.1, 717.0], [62.2, 717.0], [62.3, 717.0], [62.4, 717.0], [62.5, 717.0], [62.6, 717.0], [62.7, 717.0], [62.8, 717.0], [62.9, 717.0], [63.0, 717.0], [63.1, 717.0], [63.2, 717.0], [63.3, 717.0], [63.4, 717.0], [63.5, 717.0], [63.6, 717.0], [63.7, 717.0], [63.8, 717.0], [63.9, 717.0], [64.0, 717.0], [64.1, 717.0], [64.2, 717.0], [64.3, 717.0], [64.4, 718.0], [64.5, 718.0], [64.6, 718.0], [64.7, 718.0], [64.8, 718.0], [64.9, 718.0], [65.0, 718.0], [65.1, 718.0], [65.2, 718.0], [65.3, 718.0], [65.4, 718.0], [65.5, 718.0], [65.6, 718.0], [65.7, 718.0], [65.8, 718.0], [65.9, 718.0], [66.0, 718.0], [66.1, 718.0], [66.2, 718.0], [66.3, 718.0], [66.4, 718.0], [66.5, 718.0], [66.6, 718.0], [66.7, 718.0], [66.8, 718.0], [66.9, 718.0], [67.0, 718.0], [67.1, 718.0], [67.2, 718.0], [67.3, 718.0], [67.4, 718.0], [67.5, 719.0], [67.6, 719.0], [67.7, 719.0], [67.8, 719.0], [67.9, 719.0], [68.0, 719.0], [68.1, 719.0], [68.2, 719.0], [68.3, 719.0], [68.4, 719.0], [68.5, 719.0], [68.6, 719.0], [68.7, 719.0], [68.8, 719.0], [68.9, 719.0], [69.0, 719.0], [69.1, 719.0], [69.2, 720.0], [69.3, 720.0], [69.4, 720.0], [69.5, 720.0], [69.6, 720.0], [69.7, 720.0], [69.8, 720.0], [69.9, 720.0], [70.0, 720.0], [70.1, 720.0], [70.2, 720.0], [70.3, 720.0], [70.4, 720.0], [70.5, 720.0], [70.6, 721.0], [70.7, 721.0], [70.8, 721.0], [70.9, 721.0], [71.0, 721.0], [71.1, 721.0], [71.2, 721.0], [71.3, 721.0], [71.4, 721.0], [71.5, 721.0], [71.6, 721.0], [71.7, 721.0], [71.8, 721.0], [71.9, 721.0], [72.0, 721.0], [72.1, 721.0], [72.2, 721.0], [72.3, 722.0], [72.4, 722.0], [72.5, 722.0], [72.6, 722.0], [72.7, 722.0], [72.8, 722.0], [72.9, 722.0], [73.0, 722.0], [73.1, 722.0], [73.2, 722.0], [73.3, 722.0], [73.4, 722.0], [73.5, 722.0], [73.6, 722.0], [73.7, 722.0], [73.8, 722.0], [73.9, 722.0], [74.0, 722.0], [74.1, 722.0], [74.2, 722.0], [74.3, 722.0], [74.4, 722.0], [74.5, 723.0], [74.6, 723.0], [74.7, 723.0], [74.8, 723.0], [74.9, 723.0], [75.0, 723.0], [75.1, 723.0], [75.2, 723.0], [75.3, 723.0], [75.4, 723.0], [75.5, 723.0], [75.6, 723.0], [75.7, 724.0], [75.8, 724.0], [75.9, 724.0], [76.0, 724.0], [76.1, 724.0], [76.2, 724.0], [76.3, 724.0], [76.4, 724.0], [76.5, 724.0], [76.6, 724.0], [76.7, 724.0], [76.8, 724.0], [76.9, 725.0], [77.0, 725.0], [77.1, 725.0], [77.2, 725.0], [77.3, 725.0], [77.4, 725.0], [77.5, 725.0], [77.6, 725.0], [77.7, 725.0], [77.8, 725.0], [77.9, 725.0], [78.0, 726.0], [78.1, 726.0], [78.2, 726.0], [78.3, 726.0], [78.4, 726.0], [78.5, 726.0], [78.6, 726.0], [78.7, 726.0], [78.8, 726.0], [78.9, 726.0], [79.0, 726.0], [79.1, 726.0], [79.2, 726.0], [79.3, 726.0], [79.4, 726.0], [79.5, 726.0], [79.6, 726.0], [79.7, 726.0], [79.8, 726.0], [79.9, 726.0], [80.0, 726.0], [80.1, 726.0], [80.2, 727.0], [80.3, 727.0], [80.4, 727.0], [80.5, 727.0], [80.6, 727.0], [80.7, 727.0], [80.8, 727.0], [80.9, 727.0], [81.0, 727.0], [81.1, 727.0], [81.2, 727.0], [81.3, 727.0], [81.4, 727.0], [81.5, 727.0], [81.6, 727.0], [81.7, 727.0], [81.8, 728.0], [81.9, 728.0], [82.0, 728.0], [82.1, 728.0], [82.2, 728.0], [82.3, 728.0], [82.4, 728.0], [82.5, 728.0], [82.6, 728.0], [82.7, 728.0], [82.8, 728.0], [82.9, 728.0], [83.0, 728.0], [83.1, 728.0], [83.2, 729.0], [83.3, 729.0], [83.4, 729.0], [83.5, 729.0], [83.6, 729.0], [83.7, 729.0], [83.8, 729.0], [83.9, 729.0], [84.0, 730.0], [84.1, 730.0], [84.2, 730.0], [84.3, 730.0], [84.4, 730.0], [84.5, 730.0], [84.6, 730.0], [84.7, 730.0], [84.8, 730.0], [84.9, 730.0], [85.0, 731.0], [85.1, 731.0], [85.2, 731.0], [85.3, 731.0], [85.4, 731.0], [85.5, 731.0], [85.6, 731.0], [85.7, 731.0], [85.8, 731.0], [85.9, 731.0], [86.0, 731.0], [86.1, 731.0], [86.2, 731.0], [86.3, 731.0], [86.4, 731.0], [86.5, 732.0], [86.6, 732.0], [86.7, 732.0], [86.8, 732.0], [86.9, 732.0], [87.0, 732.0], [87.1, 732.0], [87.2, 732.0], [87.3, 732.0], [87.4, 732.0], [87.5, 732.0], [87.6, 733.0], [87.7, 733.0], [87.8, 733.0], [87.9, 733.0], [88.0, 733.0], [88.1, 733.0], [88.2, 733.0], [88.3, 733.0], [88.4, 733.0], [88.5, 734.0], [88.6, 734.0], [88.7, 734.0], [88.8, 734.0], [88.9, 734.0], [89.0, 735.0], [89.1, 735.0], [89.2, 735.0], [89.3, 735.0], [89.4, 735.0], [89.5, 735.0], [89.6, 735.0], [89.7, 736.0], [89.8, 736.0], [89.9, 736.0], [90.0, 736.0], [90.1, 737.0], [90.2, 737.0], [90.3, 737.0], [90.4, 737.0], [90.5, 738.0], [90.6, 738.0], [90.7, 738.0], [90.8, 738.0], [90.9, 738.0], [91.0, 738.0], [91.1, 738.0], [91.2, 738.0], [91.3, 738.0], [91.4, 739.0], [91.5, 739.0], [91.6, 739.0], [91.7, 740.0], [91.8, 740.0], [91.9, 740.0], [92.0, 741.0], [92.1, 741.0], [92.2, 741.0], [92.3, 741.0], [92.4, 742.0], [92.5, 742.0], [92.6, 742.0], [92.7, 742.0], [92.8, 743.0], [92.9, 743.0], [93.0, 743.0], [93.1, 743.0], [93.2, 743.0], [93.3, 744.0], [93.4, 744.0], [93.5, 744.0], [93.6, 744.0], [93.7, 744.0], [93.8, 744.0], [93.9, 745.0], [94.0, 745.0], [94.1, 745.0], [94.2, 745.0], [94.3, 745.0], [94.4, 746.0], [94.5, 746.0], [94.6, 746.0], [94.7, 746.0], [94.8, 746.0], [94.9, 748.0], [95.0, 748.0], [95.1, 748.0], [95.2, 749.0], [95.3, 749.0], [95.4, 749.0], [95.5, 750.0], [95.6, 751.0], [95.7, 751.0], [95.8, 751.0], [95.9, 752.0], [96.0, 753.0], [96.1, 753.0], [96.2, 753.0], [96.3, 754.0], [96.4, 754.0], [96.5, 757.0], [96.6, 758.0], [96.7, 759.0], [96.8, 762.0], [96.9, 762.0], [97.0, 763.0], [97.1, 765.0], [97.2, 765.0], [97.3, 767.0], [97.4, 768.0], [97.5, 769.0], [97.6, 774.0], [97.7, 776.0], [97.8, 781.0], [97.9, 782.0], [98.0, 784.0], [98.1, 793.0], [98.2, 814.0], [98.3, 828.0], [98.4, 830.0], [98.5, 836.0], [98.6, 842.0], [98.7, 856.0], [98.8, 879.0], [98.9, 880.0], [99.0, 904.0], [99.1, 954.0], [99.2, 967.0], [99.3, 988.0], [99.4, 992.0], [99.5, 1002.0], [99.6, 1165.0], [99.7, 1176.0], [99.8, 1200.0], [99.9, 1247.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 500.0, "maxY": 1058.0, "series": [{"data": [[1100.0, 3.0], [600.0, 237.0], [1200.0, 3.0], [700.0, 1058.0], [800.0, 11.0], [900.0, 7.0], [500.0, 84.0], [1000.0, 2.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 106.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1299.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 106.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1299.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 19.275053304904052, "minX": 1.7890614E12, "maxY": 44.84829059829061, "series": [{"data": [[1.7890614E12, 19.275053304904052], [1.78906146E12, 44.84829059829061]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 48 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906146E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 562.9000000000001, "minX": 1.0, "maxY": 925.4, "series": [{"data": [[2.0, 605.25], [32.0, 727.9230769230769], [33.0, 720.0], [34.0, 728.6428571428572], [35.0, 722.4782608695652], [36.0, 718.5000000000001], [37.0, 728.8235294117648], [38.0, 925.4], [39.0, 717.5625], [40.0, 721.55], [41.0, 722.6428571428571], [42.0, 725.6363636363637], [43.0, 730.1875], [44.0, 717.8823529411765], [45.0, 726.4999999999998], [46.0, 725.2307692307692], [47.0, 721.5000000000001], [3.0, 585.3333333333333], [48.0, 713.1480916030542], [4.0, 578.5714285714286], [5.0, 562.9000000000001], [6.0, 569.2727272727273], [7.0, 569.5384615384615], [8.0, 580.9999999999999], [9.0, 588.0], [10.0, 600.2222222222223], [11.0, 624.0000000000001], [12.0, 633.1764705882352], [13.0, 648.2941176470588], [14.0, 669.125], [15.0, 686.1176470588234], [1.0, 649.5], [16.0, 698.8333333333334], [17.0, 743.2777777777777], [18.0, 776.5555555555557], [19.0, 718.6315789473684], [20.0, 713.4], [21.0, 718.4999999999999], [22.0, 724.9333333333333], [23.0, 717.3333333333333], [24.0, 718.9375], [25.0, 722.5], [26.0, 720.5714285714287], [27.0, 716.1999999999999], [28.0, 729.0], [29.0, 720.1999999999999], [30.0, 726.5384615384615], [31.0, 720.3750000000001]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[36.31174377224199, 707.3800711743758]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 48.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1235.0333333333333, "minX": 1.7890614E12, "maxY": 3603.6, "series": [{"data": [[1.7890614E12, 1805.65], [1.78906146E12, 3603.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7890614E12, 1235.0333333333333], [1.78906146E12, 2464.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906146E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 681.7590618336884, "minX": 1.7890614E12, "maxY": 720.2179487179491, "series": [{"data": [[1.7890614E12, 681.7590618336884], [1.78906146E12, 720.2179487179491]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906146E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 681.6759061833693, "minX": 1.7890614E12, "maxY": 720.1901709401707, "series": [{"data": [[1.7890614E12, 681.6759061833693], [1.78906146E12, 720.1901709401707]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906146E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.060897435897435896, "minX": 1.7890614E12, "maxY": 0.16417910447761183, "series": [{"data": [[1.7890614E12, 0.16417910447761183], [1.78906146E12, 0.060897435897435896]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906146E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 526.0, "minX": 1.7890614E12, "maxY": 620.0, "series": [{"data": [[1.7890614E12, 620.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7890614E12, 526.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7890614E12, 608.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7890614E12, 620.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7890614E12, 567.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7890614E12, 615.3]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890614E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 549.0, "minX": 1.0, "maxY": 726.0, "series": [{"data": [[1.0, 594.0], [16.0, 616.0], [17.0, 589.0], [9.0, 549.0], [5.0, 557.0], [10.0, 556.0], [3.0, 562.0], [6.0, 558.0], [12.0, 559.0], [14.0, 573.0], [15.0, 607.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 721.0], [12.0, 706.0], [13.0, 722.0], [14.0, 709.5], [15.0, 713.0], [16.0, 705.0], [17.0, 702.0], [18.0, 718.0], [19.0, 716.0], [20.0, 714.0], [21.0, 718.5], [22.0, 726.0], [23.0, 721.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 549.0, "minX": 1.0, "maxY": 726.0, "series": [{"data": [[1.0, 591.0], [16.0, 616.0], [17.0, 589.0], [9.0, 549.0], [5.0, 557.0], [10.0, 556.0], [3.0, 562.0], [6.0, 558.0], [12.0, 558.5], [14.0, 573.0], [15.0, 607.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[11.0, 721.0], [12.0, 706.0], [13.0, 722.0], [14.0, 709.5], [15.0, 713.0], [16.0, 705.0], [17.0, 702.0], [18.0, 718.0], [19.0, 716.0], [20.0, 714.0], [21.0, 718.5], [22.0, 726.0], [23.0, 721.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 23.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.966666666666667, "minX": 1.7890614E12, "maxY": 15.45, "series": [{"data": [[1.7890614E12, 7.966666666666667], [1.78906146E12, 15.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906146E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.816666666666666, "minX": 1.7890614E12, "maxY": 15.6, "series": [{"data": [[1.7890614E12, 7.816666666666666], [1.78906146E12, 15.6]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906146E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7666666666666666, "minX": 1.7890614E12, "maxY": 15.6, "series": [{"data": [[1.7890614E12, 1.7666666666666666]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.7890614E12, 6.05], [1.78906146E12, 15.6]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906146E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7666666666666666, "minX": 1.7890614E12, "maxY": 15.6, "series": [{"data": [[1.7890614E12, 1.7666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7890614E12, 6.05], [1.78906146E12, 15.6]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906146E12, "title": "Total Transactions Per Second"}},
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

