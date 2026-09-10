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
        data: {"result": {"minY": 521.0, "minX": 0.0, "maxY": 1227.0, "series": [{"data": [[0.0, 521.0], [0.1, 522.0], [0.2, 524.0], [0.3, 524.0], [0.4, 526.0], [0.5, 528.0], [0.6, 529.0], [0.7, 529.0], [0.8, 529.0], [0.9, 532.0], [1.0, 535.0], [1.1, 536.0], [1.2, 536.0], [1.3, 538.0], [1.4, 538.0], [1.5, 541.0], [1.6, 542.0], [1.7, 545.0], [1.8, 546.0], [1.9, 546.0], [2.0, 548.0], [2.1, 549.0], [2.2, 552.0], [2.3, 554.0], [2.4, 558.0], [2.5, 561.0], [2.6, 563.0], [2.7, 563.0], [2.8, 563.0], [2.9, 564.0], [3.0, 564.0], [3.1, 565.0], [3.2, 568.0], [3.3, 572.0], [3.4, 576.0], [3.5, 576.0], [3.6, 579.0], [3.7, 579.0], [3.8, 580.0], [3.9, 583.0], [4.0, 584.0], [4.1, 584.0], [4.2, 586.0], [4.3, 586.0], [4.4, 592.0], [4.5, 595.0], [4.6, 598.0], [4.7, 602.0], [4.8, 603.0], [4.9, 604.0], [5.0, 605.0], [5.1, 607.0], [5.2, 608.0], [5.3, 608.0], [5.4, 609.0], [5.5, 616.0], [5.6, 619.0], [5.7, 620.0], [5.8, 621.0], [5.9, 622.0], [6.0, 622.0], [6.1, 623.0], [6.2, 624.0], [6.3, 625.0], [6.4, 630.0], [6.5, 634.0], [6.6, 636.0], [6.7, 637.0], [6.8, 638.0], [6.9, 640.0], [7.0, 641.0], [7.1, 644.0], [7.2, 647.0], [7.3, 649.0], [7.4, 650.0], [7.5, 651.0], [7.6, 652.0], [7.7, 653.0], [7.8, 655.0], [7.9, 655.0], [8.0, 656.0], [8.1, 660.0], [8.2, 661.0], [8.3, 664.0], [8.4, 664.0], [8.5, 668.0], [8.6, 670.0], [8.7, 672.0], [8.8, 673.0], [8.9, 673.0], [9.0, 674.0], [9.1, 677.0], [9.2, 677.0], [9.3, 678.0], [9.4, 679.0], [9.5, 680.0], [9.6, 684.0], [9.7, 686.0], [9.8, 687.0], [9.9, 692.0], [10.0, 694.0], [10.1, 694.0], [10.2, 694.0], [10.3, 695.0], [10.4, 698.0], [10.5, 701.0], [10.6, 701.0], [10.7, 703.0], [10.8, 703.0], [10.9, 708.0], [11.0, 708.0], [11.1, 710.0], [11.2, 713.0], [11.3, 714.0], [11.4, 717.0], [11.5, 720.0], [11.6, 721.0], [11.7, 723.0], [11.8, 724.0], [11.9, 725.0], [12.0, 728.0], [12.1, 729.0], [12.2, 731.0], [12.3, 732.0], [12.4, 732.0], [12.5, 734.0], [12.6, 735.0], [12.7, 736.0], [12.8, 738.0], [12.9, 738.0], [13.0, 739.0], [13.1, 739.0], [13.2, 739.0], [13.3, 740.0], [13.4, 740.0], [13.5, 741.0], [13.6, 742.0], [13.7, 742.0], [13.8, 744.0], [13.9, 744.0], [14.0, 744.0], [14.1, 744.0], [14.2, 745.0], [14.3, 745.0], [14.4, 745.0], [14.5, 745.0], [14.6, 745.0], [14.7, 746.0], [14.8, 746.0], [14.9, 746.0], [15.0, 747.0], [15.1, 748.0], [15.2, 748.0], [15.3, 748.0], [15.4, 749.0], [15.5, 749.0], [15.6, 749.0], [15.7, 750.0], [15.8, 750.0], [15.9, 752.0], [16.0, 752.0], [16.1, 752.0], [16.2, 752.0], [16.3, 752.0], [16.4, 753.0], [16.5, 753.0], [16.6, 753.0], [16.7, 753.0], [16.8, 753.0], [16.9, 754.0], [17.0, 754.0], [17.1, 754.0], [17.2, 754.0], [17.3, 754.0], [17.4, 755.0], [17.5, 755.0], [17.6, 755.0], [17.7, 755.0], [17.8, 755.0], [17.9, 755.0], [18.0, 755.0], [18.1, 756.0], [18.2, 756.0], [18.3, 756.0], [18.4, 756.0], [18.5, 756.0], [18.6, 756.0], [18.7, 756.0], [18.8, 756.0], [18.9, 756.0], [19.0, 757.0], [19.1, 757.0], [19.2, 757.0], [19.3, 757.0], [19.4, 758.0], [19.5, 758.0], [19.6, 758.0], [19.7, 758.0], [19.8, 758.0], [19.9, 758.0], [20.0, 758.0], [20.1, 758.0], [20.2, 758.0], [20.3, 759.0], [20.4, 759.0], [20.5, 759.0], [20.6, 759.0], [20.7, 759.0], [20.8, 760.0], [20.9, 760.0], [21.0, 760.0], [21.1, 760.0], [21.2, 760.0], [21.3, 760.0], [21.4, 760.0], [21.5, 760.0], [21.6, 760.0], [21.7, 761.0], [21.8, 761.0], [21.9, 761.0], [22.0, 761.0], [22.1, 761.0], [22.2, 761.0], [22.3, 761.0], [22.4, 761.0], [22.5, 761.0], [22.6, 761.0], [22.7, 761.0], [22.8, 761.0], [22.9, 761.0], [23.0, 761.0], [23.1, 761.0], [23.2, 761.0], [23.3, 761.0], [23.4, 762.0], [23.5, 762.0], [23.6, 762.0], [23.7, 762.0], [23.8, 762.0], [23.9, 762.0], [24.0, 762.0], [24.1, 762.0], [24.2, 762.0], [24.3, 763.0], [24.4, 763.0], [24.5, 763.0], [24.6, 763.0], [24.7, 763.0], [24.8, 763.0], [24.9, 763.0], [25.0, 763.0], [25.1, 763.0], [25.2, 763.0], [25.3, 764.0], [25.4, 764.0], [25.5, 764.0], [25.6, 764.0], [25.7, 764.0], [25.8, 764.0], [25.9, 764.0], [26.0, 764.0], [26.1, 764.0], [26.2, 764.0], [26.3, 764.0], [26.4, 764.0], [26.5, 764.0], [26.6, 764.0], [26.7, 764.0], [26.8, 764.0], [26.9, 764.0], [27.0, 764.0], [27.1, 764.0], [27.2, 764.0], [27.3, 764.0], [27.4, 764.0], [27.5, 764.0], [27.6, 765.0], [27.7, 765.0], [27.8, 765.0], [27.9, 765.0], [28.0, 765.0], [28.1, 765.0], [28.2, 765.0], [28.3, 765.0], [28.4, 765.0], [28.5, 765.0], [28.6, 765.0], [28.7, 765.0], [28.8, 765.0], [28.9, 765.0], [29.0, 765.0], [29.1, 765.0], [29.2, 765.0], [29.3, 765.0], [29.4, 765.0], [29.5, 765.0], [29.6, 765.0], [29.7, 765.0], [29.8, 766.0], [29.9, 766.0], [30.0, 766.0], [30.1, 766.0], [30.2, 766.0], [30.3, 766.0], [30.4, 766.0], [30.5, 766.0], [30.6, 766.0], [30.7, 766.0], [30.8, 766.0], [30.9, 766.0], [31.0, 766.0], [31.1, 766.0], [31.2, 766.0], [31.3, 766.0], [31.4, 766.0], [31.5, 766.0], [31.6, 766.0], [31.7, 766.0], [31.8, 766.0], [31.9, 766.0], [32.0, 766.0], [32.1, 767.0], [32.2, 767.0], [32.3, 767.0], [32.4, 767.0], [32.5, 767.0], [32.6, 767.0], [32.7, 767.0], [32.8, 767.0], [32.9, 767.0], [33.0, 767.0], [33.1, 768.0], [33.2, 768.0], [33.3, 768.0], [33.4, 768.0], [33.5, 768.0], [33.6, 768.0], [33.7, 768.0], [33.8, 768.0], [33.9, 768.0], [34.0, 768.0], [34.1, 768.0], [34.2, 768.0], [34.3, 768.0], [34.4, 769.0], [34.5, 769.0], [34.6, 769.0], [34.7, 769.0], [34.8, 769.0], [34.9, 769.0], [35.0, 769.0], [35.1, 769.0], [35.2, 769.0], [35.3, 769.0], [35.4, 769.0], [35.5, 769.0], [35.6, 769.0], [35.7, 769.0], [35.8, 769.0], [35.9, 769.0], [36.0, 769.0], [36.1, 769.0], [36.2, 769.0], [36.3, 769.0], [36.4, 769.0], [36.5, 769.0], [36.6, 769.0], [36.7, 769.0], [36.8, 769.0], [36.9, 769.0], [37.0, 769.0], [37.1, 769.0], [37.2, 769.0], [37.3, 770.0], [37.4, 770.0], [37.5, 770.0], [37.6, 770.0], [37.7, 770.0], [37.8, 770.0], [37.9, 770.0], [38.0, 770.0], [38.1, 770.0], [38.2, 770.0], [38.3, 770.0], [38.4, 770.0], [38.5, 770.0], [38.6, 770.0], [38.7, 770.0], [38.8, 770.0], [38.9, 770.0], [39.0, 770.0], [39.1, 770.0], [39.2, 770.0], [39.3, 770.0], [39.4, 770.0], [39.5, 770.0], [39.6, 770.0], [39.7, 770.0], [39.8, 770.0], [39.9, 770.0], [40.0, 770.0], [40.1, 770.0], [40.2, 770.0], [40.3, 770.0], [40.4, 770.0], [40.5, 770.0], [40.6, 770.0], [40.7, 771.0], [40.8, 771.0], [40.9, 771.0], [41.0, 771.0], [41.1, 771.0], [41.2, 771.0], [41.3, 771.0], [41.4, 771.0], [41.5, 771.0], [41.6, 771.0], [41.7, 771.0], [41.8, 771.0], [41.9, 771.0], [42.0, 771.0], [42.1, 771.0], [42.2, 771.0], [42.3, 771.0], [42.4, 771.0], [42.5, 771.0], [42.6, 771.0], [42.7, 771.0], [42.8, 771.0], [42.9, 771.0], [43.0, 771.0], [43.1, 771.0], [43.2, 771.0], [43.3, 771.0], [43.4, 771.0], [43.5, 771.0], [43.6, 772.0], [43.7, 772.0], [43.8, 772.0], [43.9, 772.0], [44.0, 772.0], [44.1, 772.0], [44.2, 772.0], [44.3, 772.0], [44.4, 772.0], [44.5, 772.0], [44.6, 772.0], [44.7, 772.0], [44.8, 772.0], [44.9, 772.0], [45.0, 772.0], [45.1, 772.0], [45.2, 772.0], [45.3, 773.0], [45.4, 773.0], [45.5, 773.0], [45.6, 773.0], [45.7, 773.0], [45.8, 773.0], [45.9, 773.0], [46.0, 773.0], [46.1, 773.0], [46.2, 773.0], [46.3, 773.0], [46.4, 773.0], [46.5, 773.0], [46.6, 773.0], [46.7, 773.0], [46.8, 773.0], [46.9, 773.0], [47.0, 773.0], [47.1, 773.0], [47.2, 774.0], [47.3, 774.0], [47.4, 774.0], [47.5, 774.0], [47.6, 774.0], [47.7, 774.0], [47.8, 774.0], [47.9, 774.0], [48.0, 774.0], [48.1, 774.0], [48.2, 774.0], [48.3, 774.0], [48.4, 774.0], [48.5, 774.0], [48.6, 774.0], [48.7, 774.0], [48.8, 774.0], [48.9, 774.0], [49.0, 774.0], [49.1, 774.0], [49.2, 774.0], [49.3, 774.0], [49.4, 774.0], [49.5, 774.0], [49.6, 774.0], [49.7, 774.0], [49.8, 774.0], [49.9, 774.0], [50.0, 774.0], [50.1, 774.0], [50.2, 774.0], [50.3, 774.0], [50.4, 775.0], [50.5, 775.0], [50.6, 775.0], [50.7, 775.0], [50.8, 775.0], [50.9, 775.0], [51.0, 775.0], [51.1, 775.0], [51.2, 775.0], [51.3, 775.0], [51.4, 775.0], [51.5, 775.0], [51.6, 775.0], [51.7, 775.0], [51.8, 775.0], [51.9, 775.0], [52.0, 775.0], [52.1, 775.0], [52.2, 775.0], [52.3, 775.0], [52.4, 775.0], [52.5, 775.0], [52.6, 775.0], [52.7, 775.0], [52.8, 775.0], [52.9, 775.0], [53.0, 775.0], [53.1, 775.0], [53.2, 775.0], [53.3, 775.0], [53.4, 775.0], [53.5, 775.0], [53.6, 775.0], [53.7, 775.0], [53.8, 775.0], [53.9, 775.0], [54.0, 775.0], [54.1, 775.0], [54.2, 775.0], [54.3, 775.0], [54.4, 776.0], [54.5, 776.0], [54.6, 776.0], [54.7, 776.0], [54.8, 776.0], [54.9, 776.0], [55.0, 776.0], [55.1, 776.0], [55.2, 776.0], [55.3, 776.0], [55.4, 776.0], [55.5, 776.0], [55.6, 776.0], [55.7, 776.0], [55.8, 776.0], [55.9, 776.0], [56.0, 776.0], [56.1, 776.0], [56.2, 776.0], [56.3, 776.0], [56.4, 776.0], [56.5, 776.0], [56.6, 776.0], [56.7, 776.0], [56.8, 777.0], [56.9, 777.0], [57.0, 777.0], [57.1, 777.0], [57.2, 777.0], [57.3, 777.0], [57.4, 777.0], [57.5, 777.0], [57.6, 777.0], [57.7, 777.0], [57.8, 777.0], [57.9, 777.0], [58.0, 777.0], [58.1, 777.0], [58.2, 778.0], [58.3, 778.0], [58.4, 778.0], [58.5, 778.0], [58.6, 778.0], [58.7, 778.0], [58.8, 778.0], [58.9, 778.0], [59.0, 778.0], [59.1, 778.0], [59.2, 778.0], [59.3, 778.0], [59.4, 778.0], [59.5, 778.0], [59.6, 778.0], [59.7, 778.0], [59.8, 778.0], [59.9, 778.0], [60.0, 778.0], [60.1, 779.0], [60.2, 779.0], [60.3, 779.0], [60.4, 779.0], [60.5, 779.0], [60.6, 779.0], [60.7, 779.0], [60.8, 779.0], [60.9, 779.0], [61.0, 779.0], [61.1, 779.0], [61.2, 779.0], [61.3, 779.0], [61.4, 779.0], [61.5, 779.0], [61.6, 779.0], [61.7, 779.0], [61.8, 779.0], [61.9, 779.0], [62.0, 779.0], [62.1, 779.0], [62.2, 779.0], [62.3, 779.0], [62.4, 779.0], [62.5, 780.0], [62.6, 780.0], [62.7, 780.0], [62.8, 780.0], [62.9, 780.0], [63.0, 780.0], [63.1, 780.0], [63.2, 780.0], [63.3, 780.0], [63.4, 780.0], [63.5, 780.0], [63.6, 780.0], [63.7, 780.0], [63.8, 780.0], [63.9, 780.0], [64.0, 780.0], [64.1, 780.0], [64.2, 780.0], [64.3, 780.0], [64.4, 780.0], [64.5, 780.0], [64.6, 780.0], [64.7, 780.0], [64.8, 780.0], [64.9, 780.0], [65.0, 780.0], [65.1, 780.0], [65.2, 780.0], [65.3, 781.0], [65.4, 781.0], [65.5, 781.0], [65.6, 781.0], [65.7, 781.0], [65.8, 781.0], [65.9, 781.0], [66.0, 781.0], [66.1, 781.0], [66.2, 781.0], [66.3, 781.0], [66.4, 781.0], [66.5, 781.0], [66.6, 781.0], [66.7, 781.0], [66.8, 781.0], [66.9, 781.0], [67.0, 781.0], [67.1, 781.0], [67.2, 781.0], [67.3, 781.0], [67.4, 781.0], [67.5, 781.0], [67.6, 781.0], [67.7, 781.0], [67.8, 782.0], [67.9, 782.0], [68.0, 782.0], [68.1, 782.0], [68.2, 782.0], [68.3, 782.0], [68.4, 782.0], [68.5, 782.0], [68.6, 782.0], [68.7, 782.0], [68.8, 782.0], [68.9, 782.0], [69.0, 782.0], [69.1, 782.0], [69.2, 782.0], [69.3, 782.0], [69.4, 783.0], [69.5, 783.0], [69.6, 783.0], [69.7, 783.0], [69.8, 783.0], [69.9, 783.0], [70.0, 783.0], [70.1, 783.0], [70.2, 783.0], [70.3, 783.0], [70.4, 783.0], [70.5, 783.0], [70.6, 783.0], [70.7, 783.0], [70.8, 783.0], [70.9, 783.0], [71.0, 784.0], [71.1, 784.0], [71.2, 784.0], [71.3, 784.0], [71.4, 784.0], [71.5, 784.0], [71.6, 784.0], [71.7, 784.0], [71.8, 784.0], [71.9, 784.0], [72.0, 784.0], [72.1, 784.0], [72.2, 784.0], [72.3, 784.0], [72.4, 784.0], [72.5, 784.0], [72.6, 784.0], [72.7, 784.0], [72.8, 784.0], [72.9, 785.0], [73.0, 785.0], [73.1, 785.0], [73.2, 785.0], [73.3, 785.0], [73.4, 785.0], [73.5, 785.0], [73.6, 785.0], [73.7, 785.0], [73.8, 785.0], [73.9, 785.0], [74.0, 785.0], [74.1, 785.0], [74.2, 785.0], [74.3, 785.0], [74.4, 785.0], [74.5, 785.0], [74.6, 785.0], [74.7, 785.0], [74.8, 785.0], [74.9, 785.0], [75.0, 786.0], [75.1, 786.0], [75.2, 786.0], [75.3, 786.0], [75.4, 786.0], [75.5, 786.0], [75.6, 786.0], [75.7, 786.0], [75.8, 786.0], [75.9, 786.0], [76.0, 786.0], [76.1, 786.0], [76.2, 786.0], [76.3, 786.0], [76.4, 786.0], [76.5, 786.0], [76.6, 786.0], [76.7, 786.0], [76.8, 786.0], [76.9, 786.0], [77.0, 786.0], [77.1, 787.0], [77.2, 787.0], [77.3, 787.0], [77.4, 787.0], [77.5, 787.0], [77.6, 787.0], [77.7, 787.0], [77.8, 787.0], [77.9, 787.0], [78.0, 787.0], [78.1, 787.0], [78.2, 788.0], [78.3, 788.0], [78.4, 788.0], [78.5, 788.0], [78.6, 788.0], [78.7, 788.0], [78.8, 788.0], [78.9, 788.0], [79.0, 788.0], [79.1, 788.0], [79.2, 788.0], [79.3, 788.0], [79.4, 788.0], [79.5, 788.0], [79.6, 788.0], [79.7, 788.0], [79.8, 789.0], [79.9, 789.0], [80.0, 789.0], [80.1, 789.0], [80.2, 789.0], [80.3, 789.0], [80.4, 789.0], [80.5, 789.0], [80.6, 789.0], [80.7, 789.0], [80.8, 789.0], [80.9, 789.0], [81.0, 789.0], [81.1, 790.0], [81.2, 790.0], [81.3, 790.0], [81.4, 790.0], [81.5, 790.0], [81.6, 790.0], [81.7, 790.0], [81.8, 790.0], [81.9, 790.0], [82.0, 790.0], [82.1, 790.0], [82.2, 790.0], [82.3, 790.0], [82.4, 790.0], [82.5, 790.0], [82.6, 790.0], [82.7, 790.0], [82.8, 790.0], [82.9, 791.0], [83.0, 791.0], [83.1, 791.0], [83.2, 791.0], [83.3, 791.0], [83.4, 792.0], [83.5, 792.0], [83.6, 792.0], [83.7, 792.0], [83.8, 792.0], [83.9, 792.0], [84.0, 792.0], [84.1, 792.0], [84.2, 792.0], [84.3, 792.0], [84.4, 792.0], [84.5, 792.0], [84.6, 792.0], [84.7, 793.0], [84.8, 793.0], [84.9, 793.0], [85.0, 793.0], [85.1, 793.0], [85.2, 793.0], [85.3, 793.0], [85.4, 793.0], [85.5, 793.0], [85.6, 793.0], [85.7, 793.0], [85.8, 793.0], [85.9, 793.0], [86.0, 793.0], [86.1, 794.0], [86.2, 794.0], [86.3, 794.0], [86.4, 794.0], [86.5, 794.0], [86.6, 794.0], [86.7, 794.0], [86.8, 794.0], [86.9, 794.0], [87.0, 794.0], [87.1, 795.0], [87.2, 795.0], [87.3, 795.0], [87.4, 795.0], [87.5, 795.0], [87.6, 795.0], [87.7, 795.0], [87.8, 795.0], [87.9, 796.0], [88.0, 796.0], [88.1, 796.0], [88.2, 796.0], [88.3, 796.0], [88.4, 796.0], [88.5, 796.0], [88.6, 796.0], [88.7, 796.0], [88.8, 796.0], [88.9, 796.0], [89.0, 797.0], [89.1, 797.0], [89.2, 797.0], [89.3, 797.0], [89.4, 797.0], [89.5, 797.0], [89.6, 797.0], [89.7, 797.0], [89.8, 798.0], [89.9, 798.0], [90.0, 798.0], [90.1, 798.0], [90.2, 798.0], [90.3, 798.0], [90.4, 798.0], [90.5, 798.0], [90.6, 798.0], [90.7, 799.0], [90.8, 799.0], [90.9, 800.0], [91.0, 800.0], [91.1, 800.0], [91.2, 800.0], [91.3, 800.0], [91.4, 800.0], [91.5, 800.0], [91.6, 800.0], [91.7, 800.0], [91.8, 800.0], [91.9, 800.0], [92.0, 801.0], [92.1, 801.0], [92.2, 801.0], [92.3, 801.0], [92.4, 801.0], [92.5, 801.0], [92.6, 802.0], [92.7, 802.0], [92.8, 802.0], [92.9, 802.0], [93.0, 802.0], [93.1, 803.0], [93.2, 803.0], [93.3, 803.0], [93.4, 803.0], [93.5, 803.0], [93.6, 804.0], [93.7, 804.0], [93.8, 804.0], [93.9, 805.0], [94.0, 805.0], [94.1, 805.0], [94.2, 806.0], [94.3, 806.0], [94.4, 807.0], [94.5, 807.0], [94.6, 808.0], [94.7, 808.0], [94.8, 809.0], [94.9, 809.0], [95.0, 809.0], [95.1, 810.0], [95.2, 810.0], [95.3, 810.0], [95.4, 810.0], [95.5, 811.0], [95.6, 811.0], [95.7, 811.0], [95.8, 812.0], [95.9, 812.0], [96.0, 813.0], [96.1, 813.0], [96.2, 814.0], [96.3, 814.0], [96.4, 815.0], [96.5, 815.0], [96.6, 815.0], [96.7, 816.0], [96.8, 817.0], [96.9, 817.0], [97.0, 818.0], [97.1, 819.0], [97.2, 819.0], [97.3, 821.0], [97.4, 822.0], [97.5, 822.0], [97.6, 822.0], [97.7, 823.0], [97.8, 823.0], [97.9, 825.0], [98.0, 825.0], [98.1, 826.0], [98.2, 827.0], [98.3, 829.0], [98.4, 830.0], [98.5, 832.0], [98.6, 834.0], [98.7, 834.0], [98.8, 837.0], [98.9, 841.0], [99.0, 841.0], [99.1, 849.0], [99.2, 856.0], [99.3, 867.0], [99.4, 877.0], [99.5, 891.0], [99.6, 892.0], [99.7, 913.0], [99.8, 947.0], [99.9, 996.0], [100.0, 1227.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 1301.0, "series": [{"data": [[600.0, 94.0], [1200.0, 1.0], [700.0, 1301.0], [800.0, 143.0], [900.0, 4.0], [500.0, 75.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 93.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1525.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 93.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1525.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 31.869696969696946, "minX": 1.78906152E12, "maxY": 53.54936305732482, "series": [{"data": [[1.78906158E12, 53.54936305732482], [1.78906152E12, 31.869696969696946]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 56 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906158E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 558.9, "minX": 1.0, "maxY": 995.0, "series": [{"data": [[2.0, 995.0], [3.0, 618.25], [4.0, 572.875], [5.0, 558.9], [6.0, 561.5], [7.0, 562.9285714285714], [8.0, 576.3333333333334], [9.0, 598.1538461538462], [10.0, 609.7222222222221], [11.0, 627.6999999999998], [12.0, 651.7058823529412], [13.0, 664.5999999999999], [14.0, 684.5263157894736], [15.0, 705.7368421052631], [16.0, 722.2380952380954], [17.0, 735.3684210526316], [18.0, 749.4736842105264], [19.0, 757.5499999999998], [20.0, 769.1428571428572], [21.0, 776.5], [22.0, 773.9523809523808], [23.0, 775.6249999999999], [24.0, 776.9473684210527], [25.0, 779.5], [26.0, 777.4999999999999], [27.0, 778.0], [28.0, 778.9000000000001], [29.0, 779.3181818181819], [30.0, 774.578947368421], [31.0, 778.4736842105261], [32.0, 779.64], [33.0, 790.1333333333332], [34.0, 781.8260869565217], [35.0, 778.9411764705883], [36.0, 786.1818181818181], [37.0, 786.7272727272726], [38.0, 788.1111111111111], [39.0, 777.695652173913], [40.0, 786.6315789473684], [41.0, 796.157894736842], [42.0, 782.7083333333334], [43.0, 784.3125], [44.0, 780.08], [45.0, 786.6], [46.0, 780.9473684210527], [47.0, 795.6818181818182], [48.0, 778.9545454545455], [49.0, 785.2916666666664], [50.0, 783.5625], [51.0, 791.2499999999999], [52.0, 784.6086956521739], [53.0, 793.9411764705883], [54.0, 785.4761904761904], [55.0, 788.6190476190476], [56.0, 777.7293354943276], [1.0, 691.5]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[40.2843016069221, 760.4227441285542]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 56.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1653.7333333333333, "minX": 1.78906152E12, "maxY": 3811.5, "series": [{"data": [[1.78906158E12, 2417.8], [1.78906152E12, 3811.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78906158E12, 1653.7333333333333], [1.78906152E12, 2607.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906158E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 750.3686868686877, "minX": 1.78906152E12, "maxY": 776.2722929936302, "series": [{"data": [[1.78906158E12, 776.2722929936302], [1.78906152E12, 750.3686868686877]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906158E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 750.3111111111114, "minX": 1.78906152E12, "maxY": 776.2547770700638, "series": [{"data": [[1.78906158E12, 776.2547770700638], [1.78906152E12, 750.3111111111114]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906158E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.06528662420382167, "minX": 1.78906152E12, "maxY": 0.08181818181818194, "series": [{"data": [[1.78906158E12, 0.06528662420382167], [1.78906152E12, 0.08181818181818194]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906158E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 521.0, "minX": 1.78906152E12, "maxY": 620.0, "series": [{"data": [[1.78906152E12, 620.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78906152E12, 521.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78906152E12, 607.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78906152E12, 620.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78906152E12, 564.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78906152E12, 616.3]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906152E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 529.0, "minX": 1.0, "maxY": 1107.0, "series": [{"data": [[1.0, 609.0], [8.0, 529.0], [16.0, 585.0], [19.0, 605.0], [10.0, 530.5], [6.0, 543.0], [14.0, 563.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 1107.0], [11.0, 785.0], [12.0, 773.5], [13.0, 794.0], [14.0, 780.0], [15.0, 783.0], [16.0, 776.5], [17.0, 762.0], [18.0, 780.0], [19.0, 774.0], [20.0, 776.5], [21.0, 774.0], [22.0, 778.5], [23.0, 774.0], [24.0, 770.5], [25.0, 779.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 529.0, "minX": 1.0, "maxY": 1107.0, "series": [{"data": [[1.0, 604.0], [8.0, 529.0], [16.0, 584.5], [19.0, 605.0], [10.0, 530.0], [6.0, 543.0], [14.0, 563.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 1107.0], [11.0, 785.0], [12.0, 773.5], [13.0, 794.0], [14.0, 780.0], [15.0, 783.0], [16.0, 776.5], [17.0, 762.0], [18.0, 780.0], [19.0, 773.5], [20.0, 776.5], [21.0, 774.0], [22.0, 778.5], [23.0, 774.0], [24.0, 770.5], [25.0, 779.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 25.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.266666666666667, "minX": 1.78906152E12, "maxY": 16.7, "series": [{"data": [[1.78906158E12, 10.266666666666667], [1.78906152E12, 16.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906158E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.466666666666667, "minX": 1.78906152E12, "maxY": 16.5, "series": [{"data": [[1.78906158E12, 10.466666666666667], [1.78906152E12, 16.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906158E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.55, "minX": 1.78906152E12, "maxY": 14.95, "series": [{"data": [[1.78906152E12, 1.55]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78906158E12, 10.466666666666667], [1.78906152E12, 14.95]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906158E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.55, "minX": 1.78906152E12, "maxY": 14.95, "series": [{"data": [[1.78906152E12, 1.55]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78906158E12, 10.466666666666667], [1.78906152E12, 14.95]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906158E12, "title": "Total Transactions Per Second"}},
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

