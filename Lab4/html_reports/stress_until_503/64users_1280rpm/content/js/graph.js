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
        data: {"result": {"minY": 521.0, "minX": 0.0, "maxY": 1208.0, "series": [{"data": [[0.0, 521.0], [0.1, 522.0], [0.2, 523.0], [0.3, 524.0], [0.4, 524.0], [0.5, 529.0], [0.6, 530.0], [0.7, 531.0], [0.8, 534.0], [0.9, 535.0], [1.0, 539.0], [1.1, 541.0], [1.2, 543.0], [1.3, 545.0], [1.4, 549.0], [1.5, 550.0], [1.6, 550.0], [1.7, 554.0], [1.8, 554.0], [1.9, 556.0], [2.0, 557.0], [2.1, 558.0], [2.2, 559.0], [2.3, 561.0], [2.4, 564.0], [2.5, 565.0], [2.6, 567.0], [2.7, 568.0], [2.8, 570.0], [2.9, 571.0], [3.0, 573.0], [3.1, 575.0], [3.2, 577.0], [3.3, 580.0], [3.4, 581.0], [3.5, 582.0], [3.6, 583.0], [3.7, 584.0], [3.8, 584.0], [3.9, 584.0], [4.0, 585.0], [4.1, 586.0], [4.2, 588.0], [4.3, 591.0], [4.4, 591.0], [4.5, 593.0], [4.6, 595.0], [4.7, 599.0], [4.8, 600.0], [4.9, 602.0], [5.0, 603.0], [5.1, 605.0], [5.2, 610.0], [5.3, 611.0], [5.4, 614.0], [5.5, 617.0], [5.6, 617.0], [5.7, 619.0], [5.8, 620.0], [5.9, 628.0], [6.0, 631.0], [6.1, 636.0], [6.2, 636.0], [6.3, 640.0], [6.4, 646.0], [6.5, 648.0], [6.6, 649.0], [6.7, 650.0], [6.8, 653.0], [6.9, 654.0], [7.0, 656.0], [7.1, 659.0], [7.2, 665.0], [7.3, 667.0], [7.4, 668.0], [7.5, 670.0], [7.6, 670.0], [7.7, 672.0], [7.8, 672.0], [7.9, 683.0], [8.0, 685.0], [8.1, 685.0], [8.2, 686.0], [8.3, 690.0], [8.4, 692.0], [8.5, 694.0], [8.6, 699.0], [8.7, 702.0], [8.8, 702.0], [8.9, 703.0], [9.0, 705.0], [9.1, 707.0], [9.2, 708.0], [9.3, 708.0], [9.4, 708.0], [9.5, 712.0], [9.6, 712.0], [9.7, 715.0], [9.8, 716.0], [9.9, 719.0], [10.0, 721.0], [10.1, 723.0], [10.2, 727.0], [10.3, 728.0], [10.4, 730.0], [10.5, 730.0], [10.6, 733.0], [10.7, 736.0], [10.8, 740.0], [10.9, 743.0], [11.0, 745.0], [11.1, 746.0], [11.2, 747.0], [11.3, 748.0], [11.4, 753.0], [11.5, 755.0], [11.6, 756.0], [11.7, 758.0], [11.8, 758.0], [11.9, 760.0], [12.0, 761.0], [12.1, 764.0], [12.2, 764.0], [12.3, 769.0], [12.4, 772.0], [12.5, 774.0], [12.6, 775.0], [12.7, 776.0], [12.8, 778.0], [12.9, 779.0], [13.0, 779.0], [13.1, 784.0], [13.2, 786.0], [13.3, 787.0], [13.4, 790.0], [13.5, 791.0], [13.6, 791.0], [13.7, 794.0], [13.8, 795.0], [13.9, 795.0], [14.0, 796.0], [14.1, 797.0], [14.2, 798.0], [14.3, 798.0], [14.4, 800.0], [14.5, 801.0], [14.6, 802.0], [14.7, 803.0], [14.8, 803.0], [14.9, 803.0], [15.0, 805.0], [15.1, 807.0], [15.2, 809.0], [15.3, 810.0], [15.4, 812.0], [15.5, 812.0], [15.6, 813.0], [15.7, 813.0], [15.8, 814.0], [15.9, 816.0], [16.0, 818.0], [16.1, 819.0], [16.2, 819.0], [16.3, 819.0], [16.4, 819.0], [16.5, 819.0], [16.6, 819.0], [16.7, 819.0], [16.8, 819.0], [16.9, 819.0], [17.0, 820.0], [17.1, 820.0], [17.2, 820.0], [17.3, 820.0], [17.4, 820.0], [17.5, 820.0], [17.6, 820.0], [17.7, 821.0], [17.8, 821.0], [17.9, 821.0], [18.0, 821.0], [18.1, 822.0], [18.2, 822.0], [18.3, 822.0], [18.4, 822.0], [18.5, 822.0], [18.6, 822.0], [18.7, 822.0], [18.8, 822.0], [18.9, 823.0], [19.0, 823.0], [19.1, 823.0], [19.2, 823.0], [19.3, 823.0], [19.4, 824.0], [19.5, 824.0], [19.6, 824.0], [19.7, 824.0], [19.8, 824.0], [19.9, 824.0], [20.0, 825.0], [20.1, 825.0], [20.2, 825.0], [20.3, 825.0], [20.4, 825.0], [20.5, 825.0], [20.6, 825.0], [20.7, 825.0], [20.8, 826.0], [20.9, 826.0], [21.0, 826.0], [21.1, 826.0], [21.2, 826.0], [21.3, 826.0], [21.4, 826.0], [21.5, 826.0], [21.6, 826.0], [21.7, 827.0], [21.8, 827.0], [21.9, 827.0], [22.0, 827.0], [22.1, 827.0], [22.2, 827.0], [22.3, 827.0], [22.4, 827.0], [22.5, 827.0], [22.6, 827.0], [22.7, 827.0], [22.8, 827.0], [22.9, 828.0], [23.0, 828.0], [23.1, 828.0], [23.2, 828.0], [23.3, 828.0], [23.4, 829.0], [23.5, 829.0], [23.6, 829.0], [23.7, 829.0], [23.8, 829.0], [23.9, 829.0], [24.0, 829.0], [24.1, 829.0], [24.2, 829.0], [24.3, 830.0], [24.4, 830.0], [24.5, 830.0], [24.6, 830.0], [24.7, 830.0], [24.8, 830.0], [24.9, 830.0], [25.0, 830.0], [25.1, 830.0], [25.2, 831.0], [25.3, 831.0], [25.4, 831.0], [25.5, 831.0], [25.6, 831.0], [25.7, 831.0], [25.8, 831.0], [25.9, 831.0], [26.0, 831.0], [26.1, 831.0], [26.2, 832.0], [26.3, 832.0], [26.4, 832.0], [26.5, 832.0], [26.6, 832.0], [26.7, 832.0], [26.8, 833.0], [26.9, 833.0], [27.0, 833.0], [27.1, 833.0], [27.2, 833.0], [27.3, 833.0], [27.4, 833.0], [27.5, 833.0], [27.6, 833.0], [27.7, 833.0], [27.8, 833.0], [27.9, 833.0], [28.0, 833.0], [28.1, 833.0], [28.2, 833.0], [28.3, 833.0], [28.4, 833.0], [28.5, 834.0], [28.6, 834.0], [28.7, 834.0], [28.8, 834.0], [28.9, 834.0], [29.0, 834.0], [29.1, 834.0], [29.2, 834.0], [29.3, 834.0], [29.4, 835.0], [29.5, 835.0], [29.6, 835.0], [29.7, 835.0], [29.8, 835.0], [29.9, 835.0], [30.0, 835.0], [30.1, 835.0], [30.2, 835.0], [30.3, 835.0], [30.4, 835.0], [30.5, 836.0], [30.6, 836.0], [30.7, 836.0], [30.8, 836.0], [30.9, 836.0], [31.0, 836.0], [31.1, 836.0], [31.2, 836.0], [31.3, 836.0], [31.4, 836.0], [31.5, 836.0], [31.6, 836.0], [31.7, 836.0], [31.8, 836.0], [31.9, 836.0], [32.0, 836.0], [32.1, 836.0], [32.2, 836.0], [32.3, 836.0], [32.4, 836.0], [32.5, 836.0], [32.6, 836.0], [32.7, 836.0], [32.8, 836.0], [32.9, 837.0], [33.0, 837.0], [33.1, 837.0], [33.2, 837.0], [33.3, 837.0], [33.4, 837.0], [33.5, 837.0], [33.6, 837.0], [33.7, 837.0], [33.8, 838.0], [33.9, 838.0], [34.0, 838.0], [34.1, 838.0], [34.2, 838.0], [34.3, 838.0], [34.4, 838.0], [34.5, 838.0], [34.6, 838.0], [34.7, 838.0], [34.8, 838.0], [34.9, 839.0], [35.0, 839.0], [35.1, 839.0], [35.2, 839.0], [35.3, 839.0], [35.4, 839.0], [35.5, 839.0], [35.6, 839.0], [35.7, 839.0], [35.8, 839.0], [35.9, 839.0], [36.0, 839.0], [36.1, 839.0], [36.2, 839.0], [36.3, 839.0], [36.4, 839.0], [36.5, 839.0], [36.6, 839.0], [36.7, 839.0], [36.8, 839.0], [36.9, 839.0], [37.0, 839.0], [37.1, 839.0], [37.2, 839.0], [37.3, 839.0], [37.4, 839.0], [37.5, 840.0], [37.6, 840.0], [37.7, 840.0], [37.8, 840.0], [37.9, 840.0], [38.0, 840.0], [38.1, 840.0], [38.2, 840.0], [38.3, 840.0], [38.4, 840.0], [38.5, 840.0], [38.6, 840.0], [38.7, 840.0], [38.8, 840.0], [38.9, 840.0], [39.0, 840.0], [39.1, 840.0], [39.2, 840.0], [39.3, 841.0], [39.4, 841.0], [39.5, 841.0], [39.6, 841.0], [39.7, 841.0], [39.8, 841.0], [39.9, 841.0], [40.0, 841.0], [40.1, 841.0], [40.2, 841.0], [40.3, 841.0], [40.4, 841.0], [40.5, 841.0], [40.6, 841.0], [40.7, 841.0], [40.8, 841.0], [40.9, 841.0], [41.0, 841.0], [41.1, 841.0], [41.2, 841.0], [41.3, 841.0], [41.4, 841.0], [41.5, 842.0], [41.6, 842.0], [41.7, 842.0], [41.8, 842.0], [41.9, 842.0], [42.0, 842.0], [42.1, 842.0], [42.2, 842.0], [42.3, 842.0], [42.4, 842.0], [42.5, 842.0], [42.6, 842.0], [42.7, 842.0], [42.8, 842.0], [42.9, 842.0], [43.0, 842.0], [43.1, 842.0], [43.2, 842.0], [43.3, 842.0], [43.4, 842.0], [43.5, 842.0], [43.6, 842.0], [43.7, 842.0], [43.8, 842.0], [43.9, 842.0], [44.0, 842.0], [44.1, 842.0], [44.2, 842.0], [44.3, 843.0], [44.4, 843.0], [44.5, 843.0], [44.6, 843.0], [44.7, 843.0], [44.8, 843.0], [44.9, 843.0], [45.0, 843.0], [45.1, 843.0], [45.2, 843.0], [45.3, 843.0], [45.4, 843.0], [45.5, 843.0], [45.6, 843.0], [45.7, 843.0], [45.8, 843.0], [45.9, 844.0], [46.0, 844.0], [46.1, 844.0], [46.2, 844.0], [46.3, 844.0], [46.4, 844.0], [46.5, 844.0], [46.6, 844.0], [46.7, 844.0], [46.8, 844.0], [46.9, 844.0], [47.0, 844.0], [47.1, 844.0], [47.2, 844.0], [47.3, 844.0], [47.4, 844.0], [47.5, 844.0], [47.6, 845.0], [47.7, 845.0], [47.8, 845.0], [47.9, 845.0], [48.0, 845.0], [48.1, 845.0], [48.2, 845.0], [48.3, 845.0], [48.4, 845.0], [48.5, 845.0], [48.6, 845.0], [48.7, 845.0], [48.8, 845.0], [48.9, 845.0], [49.0, 845.0], [49.1, 845.0], [49.2, 845.0], [49.3, 845.0], [49.4, 845.0], [49.5, 845.0], [49.6, 845.0], [49.7, 845.0], [49.8, 845.0], [49.9, 846.0], [50.0, 846.0], [50.1, 846.0], [50.2, 846.0], [50.3, 846.0], [50.4, 846.0], [50.5, 846.0], [50.6, 846.0], [50.7, 846.0], [50.8, 846.0], [50.9, 846.0], [51.0, 846.0], [51.1, 846.0], [51.2, 846.0], [51.3, 846.0], [51.4, 846.0], [51.5, 846.0], [51.6, 846.0], [51.7, 846.0], [51.8, 847.0], [51.9, 847.0], [52.0, 847.0], [52.1, 847.0], [52.2, 847.0], [52.3, 847.0], [52.4, 847.0], [52.5, 847.0], [52.6, 847.0], [52.7, 847.0], [52.8, 847.0], [52.9, 847.0], [53.0, 847.0], [53.1, 847.0], [53.2, 847.0], [53.3, 847.0], [53.4, 847.0], [53.5, 847.0], [53.6, 847.0], [53.7, 847.0], [53.8, 847.0], [53.9, 848.0], [54.0, 848.0], [54.1, 848.0], [54.2, 848.0], [54.3, 848.0], [54.4, 848.0], [54.5, 848.0], [54.6, 848.0], [54.7, 848.0], [54.8, 848.0], [54.9, 848.0], [55.0, 848.0], [55.1, 848.0], [55.2, 848.0], [55.3, 848.0], [55.4, 848.0], [55.5, 848.0], [55.6, 848.0], [55.7, 848.0], [55.8, 848.0], [55.9, 848.0], [56.0, 848.0], [56.1, 848.0], [56.2, 848.0], [56.3, 848.0], [56.4, 848.0], [56.5, 848.0], [56.6, 848.0], [56.7, 849.0], [56.8, 849.0], [56.9, 849.0], [57.0, 849.0], [57.1, 849.0], [57.2, 849.0], [57.3, 849.0], [57.4, 849.0], [57.5, 849.0], [57.6, 849.0], [57.7, 849.0], [57.8, 849.0], [57.9, 849.0], [58.0, 849.0], [58.1, 849.0], [58.2, 849.0], [58.3, 849.0], [58.4, 849.0], [58.5, 849.0], [58.6, 849.0], [58.7, 849.0], [58.8, 849.0], [58.9, 849.0], [59.0, 850.0], [59.1, 850.0], [59.2, 850.0], [59.3, 850.0], [59.4, 850.0], [59.5, 850.0], [59.6, 850.0], [59.7, 850.0], [59.8, 850.0], [59.9, 850.0], [60.0, 850.0], [60.1, 850.0], [60.2, 850.0], [60.3, 850.0], [60.4, 850.0], [60.5, 850.0], [60.6, 850.0], [60.7, 850.0], [60.8, 850.0], [60.9, 850.0], [61.0, 850.0], [61.1, 850.0], [61.2, 850.0], [61.3, 850.0], [61.4, 850.0], [61.5, 851.0], [61.6, 851.0], [61.7, 851.0], [61.8, 851.0], [61.9, 851.0], [62.0, 851.0], [62.1, 851.0], [62.2, 851.0], [62.3, 851.0], [62.4, 851.0], [62.5, 851.0], [62.6, 851.0], [62.7, 851.0], [62.8, 851.0], [62.9, 851.0], [63.0, 851.0], [63.1, 851.0], [63.2, 851.0], [63.3, 851.0], [63.4, 851.0], [63.5, 851.0], [63.6, 851.0], [63.7, 851.0], [63.8, 851.0], [63.9, 851.0], [64.0, 851.0], [64.1, 851.0], [64.2, 851.0], [64.3, 851.0], [64.4, 851.0], [64.5, 851.0], [64.6, 851.0], [64.7, 852.0], [64.8, 852.0], [64.9, 852.0], [65.0, 852.0], [65.1, 852.0], [65.2, 852.0], [65.3, 852.0], [65.4, 852.0], [65.5, 852.0], [65.6, 852.0], [65.7, 852.0], [65.8, 852.0], [65.9, 852.0], [66.0, 852.0], [66.1, 852.0], [66.2, 852.0], [66.3, 852.0], [66.4, 852.0], [66.5, 852.0], [66.6, 852.0], [66.7, 852.0], [66.8, 853.0], [66.9, 853.0], [67.0, 853.0], [67.1, 853.0], [67.2, 853.0], [67.3, 853.0], [67.4, 853.0], [67.5, 853.0], [67.6, 853.0], [67.7, 853.0], [67.8, 853.0], [67.9, 853.0], [68.0, 853.0], [68.1, 853.0], [68.2, 853.0], [68.3, 853.0], [68.4, 853.0], [68.5, 854.0], [68.6, 854.0], [68.7, 854.0], [68.8, 854.0], [68.9, 854.0], [69.0, 854.0], [69.1, 854.0], [69.2, 854.0], [69.3, 854.0], [69.4, 854.0], [69.5, 854.0], [69.6, 854.0], [69.7, 854.0], [69.8, 854.0], [69.9, 854.0], [70.0, 854.0], [70.1, 854.0], [70.2, 854.0], [70.3, 855.0], [70.4, 855.0], [70.5, 855.0], [70.6, 855.0], [70.7, 855.0], [70.8, 855.0], [70.9, 855.0], [71.0, 855.0], [71.1, 855.0], [71.2, 855.0], [71.3, 855.0], [71.4, 855.0], [71.5, 855.0], [71.6, 855.0], [71.7, 855.0], [71.8, 856.0], [71.9, 856.0], [72.0, 856.0], [72.1, 856.0], [72.2, 856.0], [72.3, 856.0], [72.4, 856.0], [72.5, 856.0], [72.6, 856.0], [72.7, 856.0], [72.8, 856.0], [72.9, 856.0], [73.0, 856.0], [73.1, 856.0], [73.2, 856.0], [73.3, 856.0], [73.4, 857.0], [73.5, 857.0], [73.6, 857.0], [73.7, 857.0], [73.8, 857.0], [73.9, 857.0], [74.0, 857.0], [74.1, 857.0], [74.2, 857.0], [74.3, 857.0], [74.4, 857.0], [74.5, 857.0], [74.6, 857.0], [74.7, 857.0], [74.8, 857.0], [74.9, 857.0], [75.0, 857.0], [75.1, 857.0], [75.2, 857.0], [75.3, 858.0], [75.4, 858.0], [75.5, 858.0], [75.6, 858.0], [75.7, 858.0], [75.8, 858.0], [75.9, 858.0], [76.0, 858.0], [76.1, 858.0], [76.2, 858.0], [76.3, 858.0], [76.4, 858.0], [76.5, 858.0], [76.6, 859.0], [76.7, 859.0], [76.8, 859.0], [76.9, 859.0], [77.0, 859.0], [77.1, 859.0], [77.2, 859.0], [77.3, 859.0], [77.4, 859.0], [77.5, 859.0], [77.6, 859.0], [77.7, 859.0], [77.8, 859.0], [77.9, 859.0], [78.0, 859.0], [78.1, 859.0], [78.2, 860.0], [78.3, 860.0], [78.4, 860.0], [78.5, 860.0], [78.6, 860.0], [78.7, 860.0], [78.8, 860.0], [78.9, 860.0], [79.0, 860.0], [79.1, 860.0], [79.2, 860.0], [79.3, 860.0], [79.4, 860.0], [79.5, 860.0], [79.6, 860.0], [79.7, 860.0], [79.8, 860.0], [79.9, 860.0], [80.0, 860.0], [80.1, 860.0], [80.2, 861.0], [80.3, 861.0], [80.4, 861.0], [80.5, 861.0], [80.6, 861.0], [80.7, 861.0], [80.8, 861.0], [80.9, 861.0], [81.0, 861.0], [81.1, 861.0], [81.2, 861.0], [81.3, 861.0], [81.4, 861.0], [81.5, 861.0], [81.6, 862.0], [81.7, 862.0], [81.8, 862.0], [81.9, 862.0], [82.0, 862.0], [82.1, 862.0], [82.2, 862.0], [82.3, 863.0], [82.4, 863.0], [82.5, 863.0], [82.6, 863.0], [82.7, 863.0], [82.8, 863.0], [82.9, 863.0], [83.0, 863.0], [83.1, 863.0], [83.2, 863.0], [83.3, 863.0], [83.4, 863.0], [83.5, 863.0], [83.6, 864.0], [83.7, 864.0], [83.8, 864.0], [83.9, 864.0], [84.0, 864.0], [84.1, 864.0], [84.2, 864.0], [84.3, 864.0], [84.4, 864.0], [84.5, 864.0], [84.6, 864.0], [84.7, 864.0], [84.8, 864.0], [84.9, 864.0], [85.0, 864.0], [85.1, 864.0], [85.2, 865.0], [85.3, 865.0], [85.4, 865.0], [85.5, 865.0], [85.6, 865.0], [85.7, 865.0], [85.8, 866.0], [85.9, 866.0], [86.0, 866.0], [86.1, 866.0], [86.2, 866.0], [86.3, 866.0], [86.4, 866.0], [86.5, 866.0], [86.6, 866.0], [86.7, 866.0], [86.8, 866.0], [86.9, 867.0], [87.0, 867.0], [87.1, 867.0], [87.2, 867.0], [87.3, 867.0], [87.4, 867.0], [87.5, 867.0], [87.6, 867.0], [87.7, 867.0], [87.8, 867.0], [87.9, 867.0], [88.0, 867.0], [88.1, 868.0], [88.2, 868.0], [88.3, 868.0], [88.4, 868.0], [88.5, 868.0], [88.6, 868.0], [88.7, 868.0], [88.8, 868.0], [88.9, 869.0], [89.0, 869.0], [89.1, 869.0], [89.2, 869.0], [89.3, 869.0], [89.4, 870.0], [89.5, 870.0], [89.6, 870.0], [89.7, 870.0], [89.8, 870.0], [89.9, 870.0], [90.0, 870.0], [90.1, 870.0], [90.2, 870.0], [90.3, 870.0], [90.4, 870.0], [90.5, 871.0], [90.6, 871.0], [90.7, 871.0], [90.8, 871.0], [90.9, 871.0], [91.0, 871.0], [91.1, 871.0], [91.2, 871.0], [91.3, 871.0], [91.4, 872.0], [91.5, 872.0], [91.6, 872.0], [91.7, 872.0], [91.8, 873.0], [91.9, 873.0], [92.0, 873.0], [92.1, 873.0], [92.2, 873.0], [92.3, 873.0], [92.4, 873.0], [92.5, 873.0], [92.6, 873.0], [92.7, 874.0], [92.8, 874.0], [92.9, 874.0], [93.0, 874.0], [93.1, 874.0], [93.2, 874.0], [93.3, 875.0], [93.4, 875.0], [93.5, 875.0], [93.6, 875.0], [93.7, 875.0], [93.8, 875.0], [93.9, 876.0], [94.0, 876.0], [94.1, 876.0], [94.2, 876.0], [94.3, 877.0], [94.4, 877.0], [94.5, 877.0], [94.6, 878.0], [94.7, 878.0], [94.8, 878.0], [94.9, 879.0], [95.0, 879.0], [95.1, 879.0], [95.2, 879.0], [95.3, 879.0], [95.4, 879.0], [95.5, 880.0], [95.6, 880.0], [95.7, 880.0], [95.8, 881.0], [95.9, 881.0], [96.0, 881.0], [96.1, 882.0], [96.2, 882.0], [96.3, 883.0], [96.4, 883.0], [96.5, 883.0], [96.6, 884.0], [96.7, 885.0], [96.8, 886.0], [96.9, 886.0], [97.0, 887.0], [97.1, 888.0], [97.2, 888.0], [97.3, 889.0], [97.4, 890.0], [97.5, 890.0], [97.6, 891.0], [97.7, 893.0], [97.8, 893.0], [97.9, 895.0], [98.0, 896.0], [98.1, 896.0], [98.2, 896.0], [98.3, 896.0], [98.4, 897.0], [98.5, 898.0], [98.6, 900.0], [98.7, 900.0], [98.8, 903.0], [98.9, 906.0], [99.0, 913.0], [99.1, 919.0], [99.2, 934.0], [99.3, 944.0], [99.4, 948.0], [99.5, 978.0], [99.6, 1044.0], [99.7, 1051.0], [99.8, 1054.0], [99.9, 1206.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 500.0, "maxY": 1547.0, "series": [{"data": [[600.0, 71.0], [1200.0, 2.0], [700.0, 105.0], [800.0, 1547.0], [900.0, 18.0], [500.0, 88.0], [1000.0, 7.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 107.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1731.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 107.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1731.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 14.252336448598124, "minX": 1.78906158E12, "maxY": 54.460093896713616, "series": [{"data": [[1.78906158E12, 14.252336448598124], [1.7890617E12, 54.460093896713616], [1.78906164E12, 50.72469325153383]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 64 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890617E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 569.1666666666665, "minX": 1.0, "maxY": 871.0833333333334, "series": [{"data": [[2.0, 647.25], [3.0, 621.2], [4.0, 576.75], [5.0, 570.7777777777777], [6.0, 569.1666666666665], [7.0, 579.3], [8.0, 582.2666666666667], [9.0, 587.875], [10.0, 603.7142857142858], [11.0, 628.1999999999999], [12.0, 642.8666666666664], [13.0, 662.35], [14.0, 686.8947368421053], [15.0, 708.578947368421], [16.0, 725.5909090909091], [17.0, 751.2727272727271], [18.0, 769.7999999999998], [19.0, 788.05], [20.0, 799.7142857142859], [21.0, 815.9545454545454], [22.0, 825.0434782608696], [23.0, 838.6190476190476], [24.0, 835.3333333333333], [25.0, 841.818181818182], [26.0, 850.25], [27.0, 842.5217391304346], [28.0, 847.5217391304348], [29.0, 846.0000000000001], [30.0, 848.6315789473684], [31.0, 851.75], [32.0, 847.3809523809525], [33.0, 849.45], [34.0, 849.1428571428571], [35.0, 852.8636363636364], [36.0, 855.8333333333334], [37.0, 851.5263157894738], [38.0, 851.12], [39.0, 846.7894736842106], [40.0, 862.5652173913045], [41.0, 852.05], [42.0, 859.6666666666666], [43.0, 856.2380952380953], [44.0, 856.8695652173911], [45.0, 853.7777777777779], [46.0, 859.6521739130434], [47.0, 858.6500000000001], [48.0, 858.0], [49.0, 861.5], [50.0, 854.4347826086956], [51.0, 857.1999999999999], [52.0, 865.2666666666668], [53.0, 852.217391304348], [54.0, 871.0833333333334], [55.0, 851.7826086956521], [56.0, 858.8095238095237], [57.0, 861.6315789473684], [58.0, 860.36], [59.0, 857.0909090909091], [60.0, 859.05], [61.0, 857.7391304347824], [62.0, 853.8260869565216], [63.0, 865.8571428571429], [64.0, 849.6839546191244], [1.0, 731.5]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[44.78781284004358, 823.642546245919]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 64.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 560.9, "minX": 1.78906158E12, "maxY": 5020.4, "series": [{"data": [[1.78906158E12, 1235.85], [1.7890617E12, 820.05], [1.78906164E12, 5020.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78906158E12, 845.3], [1.7890617E12, 560.9], [1.78906164E12, 3433.866666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890617E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 689.0965732087228, "minX": 1.78906158E12, "maxY": 852.9201877934277, "series": [{"data": [[1.78906158E12, 689.0965732087228], [1.7890617E12, 852.9201877934277], [1.78906164E12, 851.980828220859]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7890617E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 689.0062305295946, "minX": 1.78906158E12, "maxY": 852.8873239436624, "series": [{"data": [[1.78906158E12, 689.0062305295946], [1.7890617E12, 852.8873239436624], [1.78906164E12, 851.9593558282206]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7890617E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.05828220858895703, "minX": 1.78906158E12, "maxY": 0.1526479750778816, "series": [{"data": [[1.78906158E12, 0.1526479750778816], [1.7890617E12, 0.07042253521126764], [1.78906164E12, 0.05828220858895703]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7890617E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 521.0, "minX": 1.78906158E12, "maxY": 620.0, "series": [{"data": [[1.78906158E12, 620.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78906158E12, 521.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78906158E12, 611.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78906158E12, 620.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78906158E12, 571.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78906158E12, 617.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906158E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 524.0, "minX": 1.0, "maxY": 856.0, "series": [{"data": [[1.0, 619.0], [4.0, 580.5], [8.0, 533.5], [16.0, 572.5], [17.0, 583.0], [9.0, 550.0], [19.0, 613.0], [5.0, 560.0], [10.0, 524.0], [13.0, 554.0], [15.0, 599.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[15.0, 640.0], [16.0, 846.0], [17.0, 845.5], [18.0, 853.5], [19.0, 845.5], [20.0, 835.0], [21.0, 836.5], [22.0, 845.0], [23.0, 852.0], [24.0, 853.0], [25.0, 851.0], [26.0, 847.0], [27.0, 856.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 524.0, "minX": 1.0, "maxY": 856.0, "series": [{"data": [[1.0, 615.0], [4.0, 580.5], [8.0, 533.5], [16.0, 572.5], [17.0, 583.0], [9.0, 550.0], [19.0, 613.0], [5.0, 560.0], [10.0, 524.0], [13.0, 554.0], [15.0, 599.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[15.0, 640.0], [16.0, 846.0], [17.0, 845.5], [18.0, 853.5], [19.0, 845.5], [20.0, 835.0], [21.0, 836.5], [22.0, 845.0], [23.0, 852.0], [24.0, 853.0], [25.0, 851.0], [26.0, 847.0], [27.0, 856.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 27.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.2, "minX": 1.78906158E12, "maxY": 21.766666666666666, "series": [{"data": [[1.78906158E12, 5.666666666666667], [1.7890617E12, 3.2], [1.78906164E12, 21.766666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890617E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.55, "minX": 1.78906158E12, "maxY": 21.733333333333334, "series": [{"data": [[1.78906158E12, 5.35], [1.7890617E12, 3.55], [1.78906164E12, 21.733333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890617E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7833333333333334, "minX": 1.78906158E12, "maxY": 21.733333333333334, "series": [{"data": [[1.78906158E12, 1.7833333333333334]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78906158E12, 3.566666666666667], [1.7890617E12, 3.55], [1.78906164E12, 21.733333333333334]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7890617E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7833333333333334, "minX": 1.78906158E12, "maxY": 21.733333333333334, "series": [{"data": [[1.78906158E12, 1.7833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78906158E12, 3.566666666666667], [1.7890617E12, 3.55], [1.78906164E12, 21.733333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7890617E12, "title": "Total Transactions Per Second"}},
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

