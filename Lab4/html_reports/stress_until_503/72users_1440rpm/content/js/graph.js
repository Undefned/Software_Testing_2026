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
        data: {"result": {"minY": 524.0, "minX": 0.0, "maxY": 1450.0, "series": [{"data": [[0.0, 524.0], [0.1, 527.0], [0.2, 530.0], [0.3, 531.0], [0.4, 534.0], [0.5, 535.0], [0.6, 536.0], [0.7, 537.0], [0.8, 539.0], [0.9, 540.0], [1.0, 546.0], [1.1, 546.0], [1.2, 549.0], [1.3, 550.0], [1.4, 551.0], [1.5, 553.0], [1.6, 557.0], [1.7, 558.0], [1.8, 560.0], [1.9, 561.0], [2.0, 562.0], [2.1, 562.0], [2.2, 565.0], [2.3, 566.0], [2.4, 567.0], [2.5, 568.0], [2.6, 569.0], [2.7, 569.0], [2.8, 571.0], [2.9, 573.0], [3.0, 577.0], [3.1, 583.0], [3.2, 584.0], [3.3, 586.0], [3.4, 587.0], [3.5, 589.0], [3.6, 597.0], [3.7, 600.0], [3.8, 601.0], [3.9, 603.0], [4.0, 606.0], [4.1, 607.0], [4.2, 608.0], [4.3, 610.0], [4.4, 616.0], [4.5, 618.0], [4.6, 622.0], [4.7, 623.0], [4.8, 625.0], [4.9, 626.0], [5.0, 628.0], [5.1, 631.0], [5.2, 634.0], [5.3, 636.0], [5.4, 640.0], [5.5, 641.0], [5.6, 643.0], [5.7, 646.0], [5.8, 648.0], [5.9, 652.0], [6.0, 656.0], [6.1, 656.0], [6.2, 660.0], [6.3, 664.0], [6.4, 666.0], [6.5, 667.0], [6.6, 676.0], [6.7, 678.0], [6.8, 682.0], [6.9, 682.0], [7.0, 683.0], [7.1, 687.0], [7.2, 694.0], [7.3, 697.0], [7.4, 698.0], [7.5, 701.0], [7.6, 704.0], [7.7, 709.0], [7.8, 711.0], [7.9, 712.0], [8.0, 716.0], [8.1, 718.0], [8.2, 719.0], [8.3, 721.0], [8.4, 723.0], [8.5, 726.0], [8.6, 727.0], [8.7, 732.0], [8.8, 735.0], [8.9, 743.0], [9.0, 744.0], [9.1, 747.0], [9.2, 750.0], [9.3, 752.0], [9.4, 752.0], [9.5, 756.0], [9.6, 759.0], [9.7, 759.0], [9.8, 760.0], [9.9, 761.0], [10.0, 763.0], [10.1, 765.0], [10.2, 773.0], [10.3, 775.0], [10.4, 779.0], [10.5, 783.0], [10.6, 785.0], [10.7, 787.0], [10.8, 787.0], [10.9, 790.0], [11.0, 791.0], [11.1, 794.0], [11.2, 797.0], [11.3, 799.0], [11.4, 800.0], [11.5, 803.0], [11.6, 804.0], [11.7, 805.0], [11.8, 808.0], [11.9, 811.0], [12.0, 814.0], [12.1, 820.0], [12.2, 822.0], [12.3, 823.0], [12.4, 826.0], [12.5, 827.0], [12.6, 828.0], [12.7, 830.0], [12.8, 832.0], [12.9, 833.0], [13.0, 834.0], [13.1, 835.0], [13.2, 838.0], [13.3, 839.0], [13.4, 842.0], [13.5, 843.0], [13.6, 848.0], [13.7, 848.0], [13.8, 849.0], [13.9, 850.0], [14.0, 853.0], [14.1, 853.0], [14.2, 854.0], [14.3, 857.0], [14.4, 860.0], [14.5, 866.0], [14.6, 872.0], [14.7, 874.0], [14.8, 875.0], [14.9, 876.0], [15.0, 879.0], [15.1, 880.0], [15.2, 881.0], [15.3, 883.0], [15.4, 885.0], [15.5, 885.0], [15.6, 887.0], [15.7, 890.0], [15.8, 891.0], [15.9, 891.0], [16.0, 892.0], [16.1, 892.0], [16.2, 892.0], [16.3, 893.0], [16.4, 893.0], [16.5, 895.0], [16.6, 895.0], [16.7, 895.0], [16.8, 895.0], [16.9, 896.0], [17.0, 896.0], [17.1, 896.0], [17.2, 896.0], [17.3, 896.0], [17.4, 897.0], [17.5, 897.0], [17.6, 897.0], [17.7, 897.0], [17.8, 898.0], [17.9, 898.0], [18.0, 898.0], [18.1, 898.0], [18.2, 899.0], [18.3, 899.0], [18.4, 900.0], [18.5, 900.0], [18.6, 901.0], [18.7, 901.0], [18.8, 902.0], [18.9, 902.0], [19.0, 902.0], [19.1, 902.0], [19.2, 902.0], [19.3, 902.0], [19.4, 902.0], [19.5, 903.0], [19.6, 903.0], [19.7, 903.0], [19.8, 904.0], [19.9, 904.0], [20.0, 904.0], [20.1, 905.0], [20.2, 905.0], [20.3, 905.0], [20.4, 906.0], [20.5, 906.0], [20.6, 906.0], [20.7, 907.0], [20.8, 907.0], [20.9, 907.0], [21.0, 907.0], [21.1, 908.0], [21.2, 908.0], [21.3, 908.0], [21.4, 908.0], [21.5, 908.0], [21.6, 908.0], [21.7, 909.0], [21.8, 909.0], [21.9, 909.0], [22.0, 909.0], [22.1, 909.0], [22.2, 909.0], [22.3, 909.0], [22.4, 909.0], [22.5, 910.0], [22.6, 910.0], [22.7, 910.0], [22.8, 910.0], [22.9, 911.0], [23.0, 911.0], [23.1, 912.0], [23.2, 912.0], [23.3, 912.0], [23.4, 912.0], [23.5, 912.0], [23.6, 912.0], [23.7, 913.0], [23.8, 913.0], [23.9, 913.0], [24.0, 913.0], [24.1, 913.0], [24.2, 913.0], [24.3, 913.0], [24.4, 913.0], [24.5, 913.0], [24.6, 913.0], [24.7, 913.0], [24.8, 914.0], [24.9, 914.0], [25.0, 914.0], [25.1, 914.0], [25.2, 914.0], [25.3, 914.0], [25.4, 915.0], [25.5, 915.0], [25.6, 915.0], [25.7, 915.0], [25.8, 915.0], [25.9, 915.0], [26.0, 915.0], [26.1, 915.0], [26.2, 915.0], [26.3, 916.0], [26.4, 916.0], [26.5, 916.0], [26.6, 916.0], [26.7, 916.0], [26.8, 916.0], [26.9, 916.0], [27.0, 916.0], [27.1, 916.0], [27.2, 916.0], [27.3, 916.0], [27.4, 916.0], [27.5, 916.0], [27.6, 917.0], [27.7, 917.0], [27.8, 917.0], [27.9, 917.0], [28.0, 917.0], [28.1, 917.0], [28.2, 917.0], [28.3, 917.0], [28.4, 918.0], [28.5, 918.0], [28.6, 918.0], [28.7, 918.0], [28.8, 918.0], [28.9, 919.0], [29.0, 919.0], [29.1, 919.0], [29.2, 919.0], [29.3, 919.0], [29.4, 919.0], [29.5, 919.0], [29.6, 919.0], [29.7, 919.0], [29.8, 920.0], [29.9, 920.0], [30.0, 920.0], [30.1, 920.0], [30.2, 920.0], [30.3, 920.0], [30.4, 920.0], [30.5, 920.0], [30.6, 920.0], [30.7, 920.0], [30.8, 920.0], [30.9, 920.0], [31.0, 920.0], [31.1, 920.0], [31.2, 920.0], [31.3, 921.0], [31.4, 921.0], [31.5, 921.0], [31.6, 921.0], [31.7, 921.0], [31.8, 921.0], [31.9, 921.0], [32.0, 921.0], [32.1, 922.0], [32.2, 922.0], [32.3, 922.0], [32.4, 922.0], [32.5, 922.0], [32.6, 922.0], [32.7, 922.0], [32.8, 922.0], [32.9, 922.0], [33.0, 922.0], [33.1, 922.0], [33.2, 922.0], [33.3, 922.0], [33.4, 922.0], [33.5, 922.0], [33.6, 923.0], [33.7, 923.0], [33.8, 923.0], [33.9, 923.0], [34.0, 923.0], [34.1, 923.0], [34.2, 923.0], [34.3, 923.0], [34.4, 923.0], [34.5, 923.0], [34.6, 923.0], [34.7, 923.0], [34.8, 923.0], [34.9, 923.0], [35.0, 923.0], [35.1, 923.0], [35.2, 923.0], [35.3, 923.0], [35.4, 923.0], [35.5, 924.0], [35.6, 924.0], [35.7, 924.0], [35.8, 924.0], [35.9, 924.0], [36.0, 924.0], [36.1, 924.0], [36.2, 924.0], [36.3, 924.0], [36.4, 924.0], [36.5, 924.0], [36.6, 924.0], [36.7, 924.0], [36.8, 925.0], [36.9, 925.0], [37.0, 925.0], [37.1, 925.0], [37.2, 925.0], [37.3, 925.0], [37.4, 925.0], [37.5, 925.0], [37.6, 926.0], [37.7, 926.0], [37.8, 926.0], [37.9, 926.0], [38.0, 926.0], [38.1, 926.0], [38.2, 926.0], [38.3, 926.0], [38.4, 926.0], [38.5, 926.0], [38.6, 926.0], [38.7, 926.0], [38.8, 926.0], [38.9, 926.0], [39.0, 926.0], [39.1, 927.0], [39.2, 927.0], [39.3, 927.0], [39.4, 927.0], [39.5, 927.0], [39.6, 927.0], [39.7, 927.0], [39.8, 927.0], [39.9, 927.0], [40.0, 927.0], [40.1, 927.0], [40.2, 927.0], [40.3, 927.0], [40.4, 927.0], [40.5, 927.0], [40.6, 927.0], [40.7, 927.0], [40.8, 927.0], [40.9, 927.0], [41.0, 927.0], [41.1, 927.0], [41.2, 927.0], [41.3, 927.0], [41.4, 927.0], [41.5, 928.0], [41.6, 928.0], [41.7, 928.0], [41.8, 928.0], [41.9, 928.0], [42.0, 928.0], [42.1, 928.0], [42.2, 928.0], [42.3, 928.0], [42.4, 928.0], [42.5, 928.0], [42.6, 928.0], [42.7, 929.0], [42.8, 929.0], [42.9, 929.0], [43.0, 929.0], [43.1, 929.0], [43.2, 929.0], [43.3, 929.0], [43.4, 929.0], [43.5, 929.0], [43.6, 929.0], [43.7, 929.0], [43.8, 929.0], [43.9, 929.0], [44.0, 929.0], [44.1, 929.0], [44.2, 929.0], [44.3, 929.0], [44.4, 929.0], [44.5, 930.0], [44.6, 930.0], [44.7, 930.0], [44.8, 930.0], [44.9, 930.0], [45.0, 930.0], [45.1, 930.0], [45.2, 930.0], [45.3, 930.0], [45.4, 930.0], [45.5, 930.0], [45.6, 930.0], [45.7, 930.0], [45.8, 930.0], [45.9, 930.0], [46.0, 930.0], [46.1, 930.0], [46.2, 930.0], [46.3, 930.0], [46.4, 930.0], [46.5, 931.0], [46.6, 931.0], [46.7, 931.0], [46.8, 931.0], [46.9, 931.0], [47.0, 931.0], [47.1, 931.0], [47.2, 931.0], [47.3, 931.0], [47.4, 931.0], [47.5, 931.0], [47.6, 931.0], [47.7, 931.0], [47.8, 931.0], [47.9, 931.0], [48.0, 932.0], [48.1, 932.0], [48.2, 932.0], [48.3, 932.0], [48.4, 932.0], [48.5, 932.0], [48.6, 932.0], [48.7, 932.0], [48.8, 932.0], [48.9, 932.0], [49.0, 932.0], [49.1, 932.0], [49.2, 933.0], [49.3, 933.0], [49.4, 933.0], [49.5, 933.0], [49.6, 933.0], [49.7, 933.0], [49.8, 933.0], [49.9, 933.0], [50.0, 933.0], [50.1, 933.0], [50.2, 933.0], [50.3, 933.0], [50.4, 933.0], [50.5, 933.0], [50.6, 933.0], [50.7, 933.0], [50.8, 933.0], [50.9, 933.0], [51.0, 933.0], [51.1, 933.0], [51.2, 933.0], [51.3, 933.0], [51.4, 934.0], [51.5, 934.0], [51.6, 934.0], [51.7, 934.0], [51.8, 934.0], [51.9, 934.0], [52.0, 934.0], [52.1, 934.0], [52.2, 934.0], [52.3, 934.0], [52.4, 934.0], [52.5, 934.0], [52.6, 934.0], [52.7, 934.0], [52.8, 934.0], [52.9, 934.0], [53.0, 934.0], [53.1, 934.0], [53.2, 934.0], [53.3, 934.0], [53.4, 934.0], [53.5, 934.0], [53.6, 934.0], [53.7, 935.0], [53.8, 935.0], [53.9, 935.0], [54.0, 935.0], [54.1, 935.0], [54.2, 935.0], [54.3, 935.0], [54.4, 935.0], [54.5, 935.0], [54.6, 935.0], [54.7, 935.0], [54.8, 935.0], [54.9, 935.0], [55.0, 935.0], [55.1, 935.0], [55.2, 935.0], [55.3, 935.0], [55.4, 935.0], [55.5, 935.0], [55.6, 935.0], [55.7, 935.0], [55.8, 936.0], [55.9, 936.0], [56.0, 936.0], [56.1, 936.0], [56.2, 936.0], [56.3, 936.0], [56.4, 936.0], [56.5, 936.0], [56.6, 936.0], [56.7, 936.0], [56.8, 937.0], [56.9, 937.0], [57.0, 937.0], [57.1, 937.0], [57.2, 937.0], [57.3, 937.0], [57.4, 937.0], [57.5, 937.0], [57.6, 937.0], [57.7, 937.0], [57.8, 937.0], [57.9, 937.0], [58.0, 937.0], [58.1, 937.0], [58.2, 937.0], [58.3, 937.0], [58.4, 937.0], [58.5, 937.0], [58.6, 937.0], [58.7, 937.0], [58.8, 938.0], [58.9, 938.0], [59.0, 938.0], [59.1, 938.0], [59.2, 938.0], [59.3, 938.0], [59.4, 938.0], [59.5, 938.0], [59.6, 938.0], [59.7, 938.0], [59.8, 938.0], [59.9, 938.0], [60.0, 938.0], [60.1, 938.0], [60.2, 938.0], [60.3, 938.0], [60.4, 938.0], [60.5, 939.0], [60.6, 939.0], [60.7, 939.0], [60.8, 939.0], [60.9, 939.0], [61.0, 939.0], [61.1, 939.0], [61.2, 939.0], [61.3, 939.0], [61.4, 939.0], [61.5, 939.0], [61.6, 939.0], [61.7, 939.0], [61.8, 939.0], [61.9, 939.0], [62.0, 940.0], [62.1, 940.0], [62.2, 940.0], [62.3, 940.0], [62.4, 940.0], [62.5, 940.0], [62.6, 940.0], [62.7, 940.0], [62.8, 940.0], [62.9, 940.0], [63.0, 940.0], [63.1, 940.0], [63.2, 940.0], [63.3, 940.0], [63.4, 940.0], [63.5, 940.0], [63.6, 940.0], [63.7, 940.0], [63.8, 940.0], [63.9, 940.0], [64.0, 940.0], [64.1, 940.0], [64.2, 940.0], [64.3, 940.0], [64.4, 940.0], [64.5, 940.0], [64.6, 941.0], [64.7, 941.0], [64.8, 941.0], [64.9, 941.0], [65.0, 941.0], [65.1, 941.0], [65.2, 941.0], [65.3, 941.0], [65.4, 941.0], [65.5, 941.0], [65.6, 941.0], [65.7, 941.0], [65.8, 941.0], [65.9, 941.0], [66.0, 941.0], [66.1, 941.0], [66.2, 941.0], [66.3, 941.0], [66.4, 941.0], [66.5, 941.0], [66.6, 941.0], [66.7, 942.0], [66.8, 942.0], [66.9, 942.0], [67.0, 942.0], [67.1, 942.0], [67.2, 942.0], [67.3, 942.0], [67.4, 942.0], [67.5, 942.0], [67.6, 942.0], [67.7, 943.0], [67.8, 943.0], [67.9, 943.0], [68.0, 943.0], [68.1, 943.0], [68.2, 943.0], [68.3, 943.0], [68.4, 943.0], [68.5, 943.0], [68.6, 943.0], [68.7, 944.0], [68.8, 944.0], [68.9, 944.0], [69.0, 944.0], [69.1, 944.0], [69.2, 944.0], [69.3, 944.0], [69.4, 944.0], [69.5, 944.0], [69.6, 944.0], [69.7, 944.0], [69.8, 944.0], [69.9, 944.0], [70.0, 944.0], [70.1, 944.0], [70.2, 944.0], [70.3, 944.0], [70.4, 944.0], [70.5, 945.0], [70.6, 945.0], [70.7, 945.0], [70.8, 945.0], [70.9, 945.0], [71.0, 945.0], [71.1, 945.0], [71.2, 945.0], [71.3, 945.0], [71.4, 945.0], [71.5, 945.0], [71.6, 945.0], [71.7, 945.0], [71.8, 945.0], [71.9, 946.0], [72.0, 946.0], [72.1, 946.0], [72.2, 946.0], [72.3, 946.0], [72.4, 946.0], [72.5, 946.0], [72.6, 946.0], [72.7, 947.0], [72.8, 947.0], [72.9, 947.0], [73.0, 947.0], [73.1, 947.0], [73.2, 947.0], [73.3, 947.0], [73.4, 947.0], [73.5, 947.0], [73.6, 947.0], [73.7, 947.0], [73.8, 947.0], [73.9, 948.0], [74.0, 948.0], [74.1, 948.0], [74.2, 948.0], [74.3, 948.0], [74.4, 948.0], [74.5, 948.0], [74.6, 948.0], [74.7, 948.0], [74.8, 948.0], [74.9, 948.0], [75.0, 948.0], [75.1, 949.0], [75.2, 949.0], [75.3, 949.0], [75.4, 949.0], [75.5, 949.0], [75.6, 949.0], [75.7, 949.0], [75.8, 949.0], [75.9, 949.0], [76.0, 949.0], [76.1, 949.0], [76.2, 949.0], [76.3, 949.0], [76.4, 949.0], [76.5, 949.0], [76.6, 949.0], [76.7, 949.0], [76.8, 949.0], [76.9, 949.0], [77.0, 949.0], [77.1, 950.0], [77.2, 950.0], [77.3, 950.0], [77.4, 950.0], [77.5, 950.0], [77.6, 950.0], [77.7, 950.0], [77.8, 950.0], [77.9, 951.0], [78.0, 951.0], [78.1, 951.0], [78.2, 951.0], [78.3, 951.0], [78.4, 951.0], [78.5, 951.0], [78.6, 951.0], [78.7, 951.0], [78.8, 951.0], [78.9, 951.0], [79.0, 951.0], [79.1, 951.0], [79.2, 952.0], [79.3, 952.0], [79.4, 952.0], [79.5, 952.0], [79.6, 952.0], [79.7, 952.0], [79.8, 952.0], [79.9, 952.0], [80.0, 952.0], [80.1, 952.0], [80.2, 952.0], [80.3, 952.0], [80.4, 952.0], [80.5, 952.0], [80.6, 953.0], [80.7, 953.0], [80.8, 953.0], [80.9, 953.0], [81.0, 953.0], [81.1, 953.0], [81.2, 953.0], [81.3, 953.0], [81.4, 953.0], [81.5, 953.0], [81.6, 953.0], [81.7, 953.0], [81.8, 954.0], [81.9, 954.0], [82.0, 954.0], [82.1, 954.0], [82.2, 954.0], [82.3, 954.0], [82.4, 954.0], [82.5, 954.0], [82.6, 954.0], [82.7, 955.0], [82.8, 955.0], [82.9, 955.0], [83.0, 955.0], [83.1, 955.0], [83.2, 955.0], [83.3, 955.0], [83.4, 955.0], [83.5, 955.0], [83.6, 955.0], [83.7, 956.0], [83.8, 956.0], [83.9, 956.0], [84.0, 956.0], [84.1, 956.0], [84.2, 956.0], [84.3, 956.0], [84.4, 956.0], [84.5, 956.0], [84.6, 956.0], [84.7, 956.0], [84.8, 957.0], [84.9, 957.0], [85.0, 957.0], [85.1, 957.0], [85.2, 957.0], [85.3, 957.0], [85.4, 957.0], [85.5, 957.0], [85.6, 958.0], [85.7, 958.0], [85.8, 958.0], [85.9, 958.0], [86.0, 958.0], [86.1, 958.0], [86.2, 959.0], [86.3, 959.0], [86.4, 959.0], [86.5, 959.0], [86.6, 959.0], [86.7, 959.0], [86.8, 959.0], [86.9, 959.0], [87.0, 959.0], [87.1, 959.0], [87.2, 960.0], [87.3, 960.0], [87.4, 960.0], [87.5, 960.0], [87.6, 960.0], [87.7, 960.0], [87.8, 960.0], [87.9, 960.0], [88.0, 960.0], [88.1, 960.0], [88.2, 960.0], [88.3, 961.0], [88.4, 961.0], [88.5, 961.0], [88.6, 961.0], [88.7, 961.0], [88.8, 961.0], [88.9, 962.0], [89.0, 962.0], [89.1, 962.0], [89.2, 962.0], [89.3, 962.0], [89.4, 962.0], [89.5, 963.0], [89.6, 963.0], [89.7, 963.0], [89.8, 963.0], [89.9, 963.0], [90.0, 963.0], [90.1, 963.0], [90.2, 963.0], [90.3, 964.0], [90.4, 964.0], [90.5, 964.0], [90.6, 964.0], [90.7, 965.0], [90.8, 965.0], [90.9, 965.0], [91.0, 965.0], [91.1, 965.0], [91.2, 966.0], [91.3, 966.0], [91.4, 966.0], [91.5, 966.0], [91.6, 966.0], [91.7, 966.0], [91.8, 967.0], [91.9, 967.0], [92.0, 967.0], [92.1, 967.0], [92.2, 967.0], [92.3, 967.0], [92.4, 968.0], [92.5, 968.0], [92.6, 968.0], [92.7, 968.0], [92.8, 969.0], [92.9, 969.0], [93.0, 969.0], [93.1, 969.0], [93.2, 969.0], [93.3, 970.0], [93.4, 970.0], [93.5, 970.0], [93.6, 970.0], [93.7, 970.0], [93.8, 971.0], [93.9, 971.0], [94.0, 971.0], [94.1, 971.0], [94.2, 971.0], [94.3, 971.0], [94.4, 972.0], [94.5, 972.0], [94.6, 972.0], [94.7, 972.0], [94.8, 973.0], [94.9, 973.0], [95.0, 973.0], [95.1, 973.0], [95.2, 974.0], [95.3, 974.0], [95.4, 974.0], [95.5, 974.0], [95.6, 975.0], [95.7, 975.0], [95.8, 975.0], [95.9, 975.0], [96.0, 976.0], [96.1, 976.0], [96.2, 977.0], [96.3, 979.0], [96.4, 980.0], [96.5, 980.0], [96.6, 981.0], [96.7, 982.0], [96.8, 982.0], [96.9, 982.0], [97.0, 983.0], [97.1, 985.0], [97.2, 985.0], [97.3, 985.0], [97.4, 986.0], [97.5, 986.0], [97.6, 986.0], [97.7, 987.0], [97.8, 988.0], [97.9, 989.0], [98.0, 990.0], [98.1, 993.0], [98.2, 996.0], [98.3, 997.0], [98.4, 999.0], [98.5, 1025.0], [98.6, 1032.0], [98.7, 1043.0], [98.8, 1055.0], [98.9, 1065.0], [99.0, 1076.0], [99.1, 1082.0], [99.2, 1095.0], [99.3, 1107.0], [99.4, 1151.0], [99.5, 1197.0], [99.6, 1258.0], [99.7, 1279.0], [99.8, 1317.0], [99.9, 1359.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 1645.0, "series": [{"data": [[1100.0, 5.0], [600.0, 77.0], [1200.0, 4.0], [1300.0, 5.0], [700.0, 80.0], [1400.0, 1.0], [800.0, 145.0], [900.0, 1645.0], [500.0, 76.0], [1000.0, 17.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 94.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1961.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 94.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1961.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 31.208289054197692, "minX": 1.7890617E12, "maxY": 66.9371633752245, "series": [{"data": [[1.7890617E12, 31.208289054197692], [1.78906176E12, 66.9371633752245]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 72 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906176E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 577.75, "minX": 1.0, "maxY": 1082.173913043478, "series": [{"data": [[2.0, 716.0], [3.0, 670.25], [4.0, 619.5714285714286], [5.0, 587.8888888888889], [6.0, 581.8888888888888], [7.0, 577.75], [8.0, 595.6666666666666], [9.0, 583.7142857142857], [10.0, 602.8461538461538], [11.0, 655.8181818181819], [12.0, 702.7826086956522], [13.0, 650.2666666666668], [14.0, 670.6666666666666], [15.0, 689.0588235294118], [16.0, 709.1923076923077], [17.0, 745.0], [18.0, 767.15], [19.0, 786.65], [20.0, 810.05], [21.0, 832.7619047619048], [22.0, 847.2857142857144], [23.0, 862.55], [24.0, 891.6666666666666], [25.0, 905.7894736842106], [26.0, 906.0], [27.0, 913.0454545454547], [28.0, 924.6499999999999], [29.0, 932.3157894736843], [30.0, 925.52], [31.0, 925.8181818181819], [32.0, 936.4705882352943], [33.0, 933.0416666666667], [34.0, 924.9000000000001], [35.0, 934.0], [36.0, 931.5], [37.0, 937.684210526316], [38.0, 932.2083333333333], [39.0, 945.6470588235294], [40.0, 935.5833333333334], [41.0, 939.8333333333334], [42.0, 935.0400000000001], [43.0, 952.3684210526316], [44.0, 934.04], [45.0, 950.0999999999999], [46.0, 943.7083333333333], [47.0, 942.3], [48.0, 939.0000000000001], [49.0, 943.4347826086957], [50.0, 953.8000000000001], [51.0, 939.7777777777776], [52.0, 958.0499999999998], [53.0, 936.7272727272726], [54.0, 948.9166666666667], [55.0, 948.1666666666666], [56.0, 942.6923076923077], [57.0, 950.0526315789474], [58.0, 974.4999999999999], [59.0, 966.8846153846155], [60.0, 1082.173913043478], [61.0, 949.6875000000001], [62.0, 941.2800000000001], [63.0, 958.25], [64.0, 947.6666666666666], [65.0, 949.6428571428571], [66.0, 955.0952380952382], [67.0, 955.5263157894736], [68.0, 945.2307692307693], [69.0, 948.5909090909091], [70.0, 965.4736842105265], [71.0, 945.7272727272727], [72.0, 937.293103448276], [1.0, 782.5]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[50.576642335766465, 904.6433090024318]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 72.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2477.9666666666667, "minX": 1.7890617E12, "maxY": 4288.9, "series": [{"data": [[1.7890617E12, 3622.85], [1.78906176E12, 4288.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7890617E12, 2477.9666666666667], [1.78906176E12, 2933.5333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906176E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 857.3825717322004, "minX": 1.7890617E12, "maxY": 944.564631956912, "series": [{"data": [[1.7890617E12, 857.3825717322004], [1.78906176E12, 944.564631956912]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906176E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 857.3347502656743, "minX": 1.7890617E12, "maxY": 944.5466786355483, "series": [{"data": [[1.7890617E12, 857.3347502656743], [1.78906176E12, 944.5466786355483]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906176E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.04398563734290841, "minX": 1.7890617E12, "maxY": 0.07757704569606787, "series": [{"data": [[1.7890617E12, 0.07757704569606787], [1.78906176E12, 0.04398563734290841]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906176E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 524.0, "minX": 1.7890617E12, "maxY": 620.0, "series": [{"data": [[1.7890617E12, 620.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7890617E12, 524.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7890617E12, 607.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7890617E12, 620.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7890617E12, 566.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7890617E12, 613.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890617E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 536.0, "minX": 1.0, "maxY": 948.0, "series": [{"data": [[4.0, 586.0], [16.0, 564.0], [11.0, 536.0], [23.0, 602.5], [6.0, 572.0], [13.0, 564.5], [7.0, 558.0], [14.0, 551.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[13.0, 678.0], [14.0, 627.0], [1.0, 629.0], [4.0, 623.0], [18.0, 832.5], [20.0, 929.0], [21.0, 915.0], [22.0, 934.5], [23.0, 934.0], [24.0, 938.0], [25.0, 934.0], [26.0, 948.0], [27.0, 940.0], [28.0, 934.0], [29.0, 920.0], [30.0, 941.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 536.0, "minX": 1.0, "maxY": 948.0, "series": [{"data": [[4.0, 586.0], [16.0, 564.0], [11.0, 536.0], [23.0, 602.5], [6.0, 572.0], [13.0, 564.5], [7.0, 558.0], [14.0, 551.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[13.0, 678.0], [14.0, 627.0], [1.0, 626.0], [4.0, 623.0], [18.0, 832.5], [20.0, 929.0], [21.0, 915.0], [22.0, 934.5], [23.0, 934.0], [24.0, 938.0], [25.0, 934.0], [26.0, 948.0], [27.0, 940.0], [28.0, 934.0], [29.0, 920.0], [30.0, 941.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 30.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.0, "minX": 1.7890617E12, "maxY": 18.25, "series": [{"data": [[1.7890617E12, 16.0], [1.78906176E12, 18.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906176E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 15.683333333333334, "minX": 1.7890617E12, "maxY": 18.566666666666666, "series": [{"data": [[1.7890617E12, 15.683333333333334], [1.78906176E12, 18.566666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906176E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.5666666666666667, "minX": 1.7890617E12, "maxY": 18.566666666666666, "series": [{"data": [[1.7890617E12, 14.116666666666667], [1.78906176E12, 18.566666666666666]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}, {"data": [[1.7890617E12, 1.5666666666666667]], "isOverall": false, "label": "GET / config=3-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906176E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.5666666666666667, "minX": 1.7890617E12, "maxY": 18.566666666666666, "series": [{"data": [[1.7890617E12, 1.5666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7890617E12, 14.116666666666667], [1.78906176E12, 18.566666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906176E12, "title": "Total Transactions Per Second"}},
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

