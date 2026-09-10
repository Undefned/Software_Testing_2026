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
        data: {"result": {"minY": 520.0, "minX": 0.0, "maxY": 1428.0, "series": [{"data": [[0.0, 520.0], [0.1, 521.0], [0.2, 524.0], [0.3, 525.0], [0.4, 531.0], [0.5, 531.0], [0.6, 535.0], [0.7, 536.0], [0.8, 543.0], [0.9, 544.0], [1.0, 546.0], [1.1, 550.0], [1.2, 551.0], [1.3, 551.0], [1.4, 552.0], [1.5, 556.0], [1.6, 559.0], [1.7, 560.0], [1.8, 562.0], [1.9, 566.0], [2.0, 567.0], [2.1, 569.0], [2.2, 570.0], [2.3, 570.0], [2.4, 570.0], [2.5, 570.0], [2.6, 575.0], [2.7, 577.0], [2.8, 583.0], [2.9, 585.0], [3.0, 586.0], [3.1, 587.0], [3.2, 589.0], [3.3, 598.0], [3.4, 599.0], [3.5, 600.0], [3.6, 601.0], [3.7, 603.0], [3.8, 604.0], [3.9, 610.0], [4.0, 614.0], [4.1, 617.0], [4.2, 619.0], [4.3, 619.0], [4.4, 626.0], [4.5, 628.0], [4.6, 629.0], [4.7, 631.0], [4.8, 632.0], [4.9, 634.0], [5.0, 634.0], [5.1, 637.0], [5.2, 639.0], [5.3, 641.0], [5.4, 652.0], [5.5, 655.0], [5.6, 656.0], [5.7, 656.0], [5.8, 669.0], [5.9, 673.0], [6.0, 673.0], [6.1, 676.0], [6.2, 679.0], [6.3, 679.0], [6.4, 689.0], [6.5, 692.0], [6.6, 697.0], [6.7, 698.0], [6.8, 700.0], [6.9, 704.0], [7.0, 706.0], [7.1, 707.0], [7.2, 710.0], [7.3, 713.0], [7.4, 720.0], [7.5, 722.0], [7.6, 727.0], [7.7, 728.0], [7.8, 729.0], [7.9, 736.0], [8.0, 741.0], [8.1, 744.0], [8.2, 750.0], [8.3, 753.0], [8.4, 756.0], [8.5, 757.0], [8.6, 758.0], [8.7, 762.0], [8.8, 766.0], [8.9, 768.0], [9.0, 770.0], [9.1, 782.0], [9.2, 785.0], [9.3, 786.0], [9.4, 786.0], [9.5, 789.0], [9.6, 793.0], [9.7, 795.0], [9.8, 804.0], [9.9, 805.0], [10.0, 810.0], [10.1, 811.0], [10.2, 815.0], [10.3, 817.0], [10.4, 818.0], [10.5, 820.0], [10.6, 821.0], [10.7, 825.0], [10.8, 834.0], [10.9, 838.0], [11.0, 840.0], [11.1, 842.0], [11.2, 844.0], [11.3, 845.0], [11.4, 848.0], [11.5, 851.0], [11.6, 854.0], [11.7, 860.0], [11.8, 863.0], [11.9, 867.0], [12.0, 870.0], [12.1, 871.0], [12.2, 873.0], [12.3, 875.0], [12.4, 879.0], [12.5, 881.0], [12.6, 883.0], [12.7, 885.0], [12.8, 889.0], [12.9, 891.0], [13.0, 892.0], [13.1, 895.0], [13.2, 899.0], [13.3, 899.0], [13.4, 903.0], [13.5, 905.0], [13.6, 906.0], [13.7, 910.0], [13.8, 914.0], [13.9, 916.0], [14.0, 919.0], [14.1, 921.0], [14.2, 921.0], [14.3, 922.0], [14.4, 924.0], [14.5, 925.0], [14.6, 927.0], [14.7, 931.0], [14.8, 932.0], [14.9, 935.0], [15.0, 936.0], [15.1, 941.0], [15.2, 941.0], [15.3, 945.0], [15.4, 945.0], [15.5, 948.0], [15.6, 951.0], [15.7, 953.0], [15.8, 955.0], [15.9, 956.0], [16.0, 960.0], [16.1, 962.0], [16.2, 966.0], [16.3, 967.0], [16.4, 968.0], [16.5, 969.0], [16.6, 969.0], [16.7, 972.0], [16.8, 973.0], [16.9, 974.0], [17.0, 975.0], [17.1, 976.0], [17.2, 977.0], [17.3, 978.0], [17.4, 980.0], [17.5, 981.0], [17.6, 983.0], [17.7, 983.0], [17.8, 984.0], [17.9, 984.0], [18.0, 985.0], [18.1, 987.0], [18.2, 988.0], [18.3, 990.0], [18.4, 990.0], [18.5, 991.0], [18.6, 992.0], [18.7, 994.0], [18.8, 994.0], [18.9, 995.0], [19.0, 995.0], [19.1, 996.0], [19.2, 996.0], [19.3, 997.0], [19.4, 998.0], [19.5, 998.0], [19.6, 998.0], [19.7, 998.0], [19.8, 998.0], [19.9, 999.0], [20.0, 999.0], [20.1, 999.0], [20.2, 999.0], [20.3, 999.0], [20.4, 1000.0], [20.5, 1000.0], [20.6, 1000.0], [20.7, 1001.0], [20.8, 1001.0], [20.9, 1002.0], [21.0, 1002.0], [21.1, 1002.0], [21.2, 1002.0], [21.3, 1003.0], [21.4, 1003.0], [21.5, 1003.0], [21.6, 1003.0], [21.7, 1003.0], [21.8, 1004.0], [21.9, 1004.0], [22.0, 1004.0], [22.1, 1005.0], [22.2, 1006.0], [22.3, 1006.0], [22.4, 1006.0], [22.5, 1007.0], [22.6, 1007.0], [22.7, 1007.0], [22.8, 1008.0], [22.9, 1008.0], [23.0, 1008.0], [23.1, 1009.0], [23.2, 1009.0], [23.3, 1010.0], [23.4, 1010.0], [23.5, 1010.0], [23.6, 1010.0], [23.7, 1010.0], [23.8, 1010.0], [23.9, 1010.0], [24.0, 1011.0], [24.1, 1011.0], [24.2, 1011.0], [24.3, 1011.0], [24.4, 1011.0], [24.5, 1011.0], [24.6, 1011.0], [24.7, 1011.0], [24.8, 1012.0], [24.9, 1012.0], [25.0, 1012.0], [25.1, 1013.0], [25.2, 1013.0], [25.3, 1014.0], [25.4, 1014.0], [25.5, 1014.0], [25.6, 1014.0], [25.7, 1014.0], [25.8, 1014.0], [25.9, 1014.0], [26.0, 1014.0], [26.1, 1014.0], [26.2, 1014.0], [26.3, 1015.0], [26.4, 1015.0], [26.5, 1015.0], [26.6, 1015.0], [26.7, 1015.0], [26.8, 1015.0], [26.9, 1015.0], [27.0, 1015.0], [27.1, 1015.0], [27.2, 1016.0], [27.3, 1016.0], [27.4, 1016.0], [27.5, 1016.0], [27.6, 1017.0], [27.7, 1017.0], [27.8, 1017.0], [27.9, 1018.0], [28.0, 1018.0], [28.1, 1018.0], [28.2, 1018.0], [28.3, 1018.0], [28.4, 1018.0], [28.5, 1018.0], [28.6, 1018.0], [28.7, 1018.0], [28.8, 1018.0], [28.9, 1019.0], [29.0, 1019.0], [29.1, 1019.0], [29.2, 1019.0], [29.3, 1019.0], [29.4, 1019.0], [29.5, 1019.0], [29.6, 1019.0], [29.7, 1019.0], [29.8, 1019.0], [29.9, 1019.0], [30.0, 1019.0], [30.1, 1019.0], [30.2, 1019.0], [30.3, 1019.0], [30.4, 1020.0], [30.5, 1020.0], [30.6, 1020.0], [30.7, 1020.0], [30.8, 1020.0], [30.9, 1020.0], [31.0, 1020.0], [31.1, 1020.0], [31.2, 1021.0], [31.3, 1021.0], [31.4, 1021.0], [31.5, 1021.0], [31.6, 1021.0], [31.7, 1022.0], [31.8, 1022.0], [31.9, 1022.0], [32.0, 1023.0], [32.1, 1023.0], [32.2, 1023.0], [32.3, 1023.0], [32.4, 1023.0], [32.5, 1023.0], [32.6, 1023.0], [32.7, 1023.0], [32.8, 1023.0], [32.9, 1023.0], [33.0, 1023.0], [33.1, 1024.0], [33.2, 1024.0], [33.3, 1024.0], [33.4, 1024.0], [33.5, 1024.0], [33.6, 1024.0], [33.7, 1024.0], [33.8, 1024.0], [33.9, 1024.0], [34.0, 1024.0], [34.1, 1024.0], [34.2, 1024.0], [34.3, 1025.0], [34.4, 1025.0], [34.5, 1025.0], [34.6, 1025.0], [34.7, 1025.0], [34.8, 1025.0], [34.9, 1026.0], [35.0, 1026.0], [35.1, 1026.0], [35.2, 1026.0], [35.3, 1026.0], [35.4, 1026.0], [35.5, 1026.0], [35.6, 1026.0], [35.7, 1026.0], [35.8, 1027.0], [35.9, 1027.0], [36.0, 1027.0], [36.1, 1027.0], [36.2, 1027.0], [36.3, 1027.0], [36.4, 1027.0], [36.5, 1027.0], [36.6, 1027.0], [36.7, 1027.0], [36.8, 1027.0], [36.9, 1027.0], [37.0, 1027.0], [37.1, 1027.0], [37.2, 1028.0], [37.3, 1028.0], [37.4, 1028.0], [37.5, 1028.0], [37.6, 1028.0], [37.7, 1028.0], [37.8, 1028.0], [37.9, 1028.0], [38.0, 1028.0], [38.1, 1028.0], [38.2, 1028.0], [38.3, 1028.0], [38.4, 1028.0], [38.5, 1028.0], [38.6, 1028.0], [38.7, 1028.0], [38.8, 1028.0], [38.9, 1028.0], [39.0, 1028.0], [39.1, 1028.0], [39.2, 1028.0], [39.3, 1029.0], [39.4, 1029.0], [39.5, 1029.0], [39.6, 1029.0], [39.7, 1029.0], [39.8, 1029.0], [39.9, 1029.0], [40.0, 1029.0], [40.1, 1029.0], [40.2, 1029.0], [40.3, 1029.0], [40.4, 1030.0], [40.5, 1030.0], [40.6, 1030.0], [40.7, 1031.0], [40.8, 1031.0], [40.9, 1031.0], [41.0, 1031.0], [41.1, 1031.0], [41.2, 1031.0], [41.3, 1031.0], [41.4, 1031.0], [41.5, 1031.0], [41.6, 1031.0], [41.7, 1031.0], [41.8, 1031.0], [41.9, 1031.0], [42.0, 1032.0], [42.1, 1032.0], [42.2, 1032.0], [42.3, 1032.0], [42.4, 1032.0], [42.5, 1032.0], [42.6, 1032.0], [42.7, 1032.0], [42.8, 1032.0], [42.9, 1032.0], [43.0, 1032.0], [43.1, 1032.0], [43.2, 1032.0], [43.3, 1032.0], [43.4, 1032.0], [43.5, 1032.0], [43.6, 1032.0], [43.7, 1033.0], [43.8, 1033.0], [43.9, 1033.0], [44.0, 1033.0], [44.1, 1033.0], [44.2, 1033.0], [44.3, 1033.0], [44.4, 1033.0], [44.5, 1033.0], [44.6, 1033.0], [44.7, 1034.0], [44.8, 1034.0], [44.9, 1034.0], [45.0, 1034.0], [45.1, 1034.0], [45.2, 1034.0], [45.3, 1034.0], [45.4, 1035.0], [45.5, 1035.0], [45.6, 1035.0], [45.7, 1035.0], [45.8, 1035.0], [45.9, 1035.0], [46.0, 1035.0], [46.1, 1035.0], [46.2, 1035.0], [46.3, 1035.0], [46.4, 1035.0], [46.5, 1035.0], [46.6, 1035.0], [46.7, 1035.0], [46.8, 1035.0], [46.9, 1035.0], [47.0, 1035.0], [47.1, 1035.0], [47.2, 1036.0], [47.3, 1036.0], [47.4, 1036.0], [47.5, 1036.0], [47.6, 1036.0], [47.7, 1036.0], [47.8, 1036.0], [47.9, 1036.0], [48.0, 1036.0], [48.1, 1036.0], [48.2, 1036.0], [48.3, 1036.0], [48.4, 1036.0], [48.5, 1036.0], [48.6, 1036.0], [48.7, 1036.0], [48.8, 1036.0], [48.9, 1036.0], [49.0, 1037.0], [49.1, 1037.0], [49.2, 1037.0], [49.3, 1037.0], [49.4, 1037.0], [49.5, 1037.0], [49.6, 1037.0], [49.7, 1037.0], [49.8, 1037.0], [49.9, 1037.0], [50.0, 1037.0], [50.1, 1038.0], [50.2, 1038.0], [50.3, 1038.0], [50.4, 1038.0], [50.5, 1038.0], [50.6, 1038.0], [50.7, 1038.0], [50.8, 1038.0], [50.9, 1038.0], [51.0, 1039.0], [51.1, 1039.0], [51.2, 1039.0], [51.3, 1039.0], [51.4, 1039.0], [51.5, 1039.0], [51.6, 1039.0], [51.7, 1039.0], [51.8, 1039.0], [51.9, 1039.0], [52.0, 1039.0], [52.1, 1039.0], [52.2, 1040.0], [52.3, 1040.0], [52.4, 1040.0], [52.5, 1040.0], [52.6, 1040.0], [52.7, 1040.0], [52.8, 1040.0], [52.9, 1040.0], [53.0, 1040.0], [53.1, 1040.0], [53.2, 1040.0], [53.3, 1040.0], [53.4, 1040.0], [53.5, 1040.0], [53.6, 1041.0], [53.7, 1041.0], [53.8, 1041.0], [53.9, 1041.0], [54.0, 1041.0], [54.1, 1041.0], [54.2, 1041.0], [54.3, 1041.0], [54.4, 1041.0], [54.5, 1041.0], [54.6, 1041.0], [54.7, 1041.0], [54.8, 1041.0], [54.9, 1041.0], [55.0, 1041.0], [55.1, 1041.0], [55.2, 1041.0], [55.3, 1041.0], [55.4, 1042.0], [55.5, 1042.0], [55.6, 1042.0], [55.7, 1042.0], [55.8, 1042.0], [55.9, 1042.0], [56.0, 1042.0], [56.1, 1042.0], [56.2, 1042.0], [56.3, 1042.0], [56.4, 1042.0], [56.5, 1042.0], [56.6, 1043.0], [56.7, 1043.0], [56.8, 1043.0], [56.9, 1043.0], [57.0, 1043.0], [57.1, 1043.0], [57.2, 1043.0], [57.3, 1043.0], [57.4, 1043.0], [57.5, 1043.0], [57.6, 1043.0], [57.7, 1043.0], [57.8, 1044.0], [57.9, 1044.0], [58.0, 1044.0], [58.1, 1044.0], [58.2, 1044.0], [58.3, 1044.0], [58.4, 1044.0], [58.5, 1044.0], [58.6, 1044.0], [58.7, 1044.0], [58.8, 1044.0], [58.9, 1044.0], [59.0, 1044.0], [59.1, 1044.0], [59.2, 1044.0], [59.3, 1045.0], [59.4, 1045.0], [59.5, 1045.0], [59.6, 1045.0], [59.7, 1045.0], [59.8, 1045.0], [59.9, 1045.0], [60.0, 1045.0], [60.1, 1045.0], [60.2, 1045.0], [60.3, 1045.0], [60.4, 1045.0], [60.5, 1045.0], [60.6, 1045.0], [60.7, 1045.0], [60.8, 1045.0], [60.9, 1045.0], [61.0, 1045.0], [61.1, 1045.0], [61.2, 1045.0], [61.3, 1045.0], [61.4, 1045.0], [61.5, 1045.0], [61.6, 1045.0], [61.7, 1046.0], [61.8, 1046.0], [61.9, 1046.0], [62.0, 1046.0], [62.1, 1046.0], [62.2, 1046.0], [62.3, 1046.0], [62.4, 1046.0], [62.5, 1046.0], [62.6, 1046.0], [62.7, 1046.0], [62.8, 1046.0], [62.9, 1046.0], [63.0, 1046.0], [63.1, 1047.0], [63.2, 1047.0], [63.3, 1047.0], [63.4, 1047.0], [63.5, 1047.0], [63.6, 1047.0], [63.7, 1047.0], [63.8, 1047.0], [63.9, 1047.0], [64.0, 1047.0], [64.1, 1047.0], [64.2, 1047.0], [64.3, 1047.0], [64.4, 1047.0], [64.5, 1047.0], [64.6, 1048.0], [64.7, 1048.0], [64.8, 1048.0], [64.9, 1048.0], [65.0, 1048.0], [65.1, 1048.0], [65.2, 1048.0], [65.3, 1048.0], [65.4, 1048.0], [65.5, 1048.0], [65.6, 1048.0], [65.7, 1048.0], [65.8, 1048.0], [65.9, 1048.0], [66.0, 1049.0], [66.1, 1049.0], [66.2, 1049.0], [66.3, 1049.0], [66.4, 1049.0], [66.5, 1049.0], [66.6, 1049.0], [66.7, 1049.0], [66.8, 1049.0], [66.9, 1049.0], [67.0, 1049.0], [67.1, 1049.0], [67.2, 1049.0], [67.3, 1049.0], [67.4, 1049.0], [67.5, 1049.0], [67.6, 1049.0], [67.7, 1049.0], [67.8, 1050.0], [67.9, 1050.0], [68.0, 1050.0], [68.1, 1050.0], [68.2, 1050.0], [68.3, 1050.0], [68.4, 1050.0], [68.5, 1050.0], [68.6, 1050.0], [68.7, 1050.0], [68.8, 1050.0], [68.9, 1051.0], [69.0, 1051.0], [69.1, 1051.0], [69.2, 1051.0], [69.3, 1051.0], [69.4, 1051.0], [69.5, 1051.0], [69.6, 1051.0], [69.7, 1052.0], [69.8, 1052.0], [69.9, 1052.0], [70.0, 1052.0], [70.1, 1052.0], [70.2, 1052.0], [70.3, 1052.0], [70.4, 1052.0], [70.5, 1053.0], [70.6, 1053.0], [70.7, 1053.0], [70.8, 1053.0], [70.9, 1053.0], [71.0, 1053.0], [71.1, 1053.0], [71.2, 1053.0], [71.3, 1053.0], [71.4, 1053.0], [71.5, 1053.0], [71.6, 1053.0], [71.7, 1053.0], [71.8, 1054.0], [71.9, 1054.0], [72.0, 1054.0], [72.1, 1054.0], [72.2, 1054.0], [72.3, 1054.0], [72.4, 1054.0], [72.5, 1054.0], [72.6, 1054.0], [72.7, 1054.0], [72.8, 1054.0], [72.9, 1054.0], [73.0, 1054.0], [73.1, 1054.0], [73.2, 1054.0], [73.3, 1054.0], [73.4, 1055.0], [73.5, 1055.0], [73.6, 1055.0], [73.7, 1055.0], [73.8, 1055.0], [73.9, 1055.0], [74.0, 1055.0], [74.1, 1055.0], [74.2, 1055.0], [74.3, 1055.0], [74.4, 1055.0], [74.5, 1056.0], [74.6, 1056.0], [74.7, 1056.0], [74.8, 1056.0], [74.9, 1056.0], [75.0, 1056.0], [75.1, 1056.0], [75.2, 1056.0], [75.3, 1057.0], [75.4, 1057.0], [75.5, 1057.0], [75.6, 1057.0], [75.7, 1057.0], [75.8, 1057.0], [75.9, 1057.0], [76.0, 1057.0], [76.1, 1057.0], [76.2, 1057.0], [76.3, 1057.0], [76.4, 1057.0], [76.5, 1057.0], [76.6, 1057.0], [76.7, 1057.0], [76.8, 1058.0], [76.9, 1058.0], [77.0, 1058.0], [77.1, 1058.0], [77.2, 1058.0], [77.3, 1058.0], [77.4, 1058.0], [77.5, 1058.0], [77.6, 1058.0], [77.7, 1058.0], [77.8, 1059.0], [77.9, 1059.0], [78.0, 1059.0], [78.1, 1059.0], [78.2, 1059.0], [78.3, 1059.0], [78.4, 1059.0], [78.5, 1059.0], [78.6, 1059.0], [78.7, 1060.0], [78.8, 1060.0], [78.9, 1060.0], [79.0, 1060.0], [79.1, 1060.0], [79.2, 1060.0], [79.3, 1060.0], [79.4, 1060.0], [79.5, 1060.0], [79.6, 1060.0], [79.7, 1060.0], [79.8, 1061.0], [79.9, 1061.0], [80.0, 1061.0], [80.1, 1061.0], [80.2, 1061.0], [80.3, 1061.0], [80.4, 1061.0], [80.5, 1061.0], [80.6, 1062.0], [80.7, 1062.0], [80.8, 1062.0], [80.9, 1062.0], [81.0, 1062.0], [81.1, 1062.0], [81.2, 1062.0], [81.3, 1063.0], [81.4, 1063.0], [81.5, 1063.0], [81.6, 1063.0], [81.7, 1063.0], [81.8, 1063.0], [81.9, 1063.0], [82.0, 1063.0], [82.1, 1063.0], [82.2, 1063.0], [82.3, 1064.0], [82.4, 1064.0], [82.5, 1064.0], [82.6, 1064.0], [82.7, 1064.0], [82.8, 1064.0], [82.9, 1064.0], [83.0, 1064.0], [83.1, 1065.0], [83.2, 1065.0], [83.3, 1065.0], [83.4, 1065.0], [83.5, 1065.0], [83.6, 1065.0], [83.7, 1065.0], [83.8, 1066.0], [83.9, 1066.0], [84.0, 1066.0], [84.1, 1066.0], [84.2, 1066.0], [84.3, 1066.0], [84.4, 1067.0], [84.5, 1067.0], [84.6, 1067.0], [84.7, 1067.0], [84.8, 1067.0], [84.9, 1067.0], [85.0, 1067.0], [85.1, 1067.0], [85.2, 1068.0], [85.3, 1068.0], [85.4, 1068.0], [85.5, 1068.0], [85.6, 1068.0], [85.7, 1069.0], [85.8, 1069.0], [85.9, 1069.0], [86.0, 1069.0], [86.1, 1069.0], [86.2, 1070.0], [86.3, 1070.0], [86.4, 1070.0], [86.5, 1070.0], [86.6, 1070.0], [86.7, 1070.0], [86.8, 1071.0], [86.9, 1071.0], [87.0, 1071.0], [87.1, 1071.0], [87.2, 1071.0], [87.3, 1071.0], [87.4, 1072.0], [87.5, 1072.0], [87.6, 1072.0], [87.7, 1073.0], [87.8, 1073.0], [87.9, 1073.0], [88.0, 1073.0], [88.1, 1073.0], [88.2, 1073.0], [88.3, 1074.0], [88.4, 1074.0], [88.5, 1074.0], [88.6, 1075.0], [88.7, 1075.0], [88.8, 1076.0], [88.9, 1076.0], [89.0, 1076.0], [89.1, 1076.0], [89.2, 1076.0], [89.3, 1077.0], [89.4, 1077.0], [89.5, 1078.0], [89.6, 1078.0], [89.7, 1078.0], [89.8, 1078.0], [89.9, 1079.0], [90.0, 1079.0], [90.1, 1079.0], [90.2, 1079.0], [90.3, 1080.0], [90.4, 1080.0], [90.5, 1080.0], [90.6, 1080.0], [90.7, 1080.0], [90.8, 1081.0], [90.9, 1081.0], [91.0, 1081.0], [91.1, 1081.0], [91.2, 1081.0], [91.3, 1082.0], [91.4, 1082.0], [91.5, 1082.0], [91.6, 1083.0], [91.7, 1083.0], [91.8, 1083.0], [91.9, 1084.0], [92.0, 1085.0], [92.1, 1085.0], [92.2, 1085.0], [92.3, 1086.0], [92.4, 1086.0], [92.5, 1086.0], [92.6, 1087.0], [92.7, 1087.0], [92.8, 1087.0], [92.9, 1087.0], [93.0, 1088.0], [93.1, 1089.0], [93.2, 1090.0], [93.3, 1090.0], [93.4, 1091.0], [93.5, 1091.0], [93.6, 1093.0], [93.7, 1093.0], [93.8, 1093.0], [93.9, 1094.0], [94.0, 1094.0], [94.1, 1095.0], [94.2, 1095.0], [94.3, 1096.0], [94.4, 1096.0], [94.5, 1096.0], [94.6, 1097.0], [94.7, 1098.0], [94.8, 1098.0], [94.9, 1098.0], [95.0, 1099.0], [95.1, 1100.0], [95.2, 1100.0], [95.3, 1101.0], [95.4, 1101.0], [95.5, 1103.0], [95.6, 1104.0], [95.7, 1104.0], [95.8, 1106.0], [95.9, 1107.0], [96.0, 1107.0], [96.1, 1108.0], [96.2, 1109.0], [96.3, 1110.0], [96.4, 1113.0], [96.5, 1113.0], [96.6, 1114.0], [96.7, 1117.0], [96.8, 1118.0], [96.9, 1119.0], [97.0, 1120.0], [97.1, 1123.0], [97.2, 1125.0], [97.3, 1126.0], [97.4, 1126.0], [97.5, 1127.0], [97.6, 1129.0], [97.7, 1131.0], [97.8, 1133.0], [97.9, 1134.0], [98.0, 1136.0], [98.1, 1139.0], [98.2, 1140.0], [98.3, 1143.0], [98.4, 1144.0], [98.5, 1153.0], [98.6, 1156.0], [98.7, 1158.0], [98.8, 1160.0], [98.9, 1164.0], [99.0, 1180.0], [99.1, 1187.0], [99.2, 1200.0], [99.3, 1201.0], [99.4, 1223.0], [99.5, 1241.0], [99.6, 1248.0], [99.7, 1315.0], [99.8, 1364.0], [99.9, 1407.0], [100.0, 1428.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 500.0, "maxY": 1701.0, "series": [{"data": [[1100.0, 93.0], [600.0, 76.0], [1200.0, 11.0], [1300.0, 5.0], [700.0, 67.0], [1400.0, 3.0], [800.0, 82.0], [900.0, 160.0], [500.0, 78.0], [1000.0, 1701.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 99.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2177.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 99.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2177.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.716049382716051, "minX": 1.78906176E12, "maxY": 74.77814029363785, "series": [{"data": [[1.78906188E12, 74.77814029363785], [1.78906182E12, 51.69848293299621], [1.78906176E12, 7.716049382716051]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 80 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906188E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 584.9090909090909, "minX": 1.0, "maxY": 1194.2727272727273, "series": [{"data": [[2.0, 713.25], [3.0, 689.25], [4.0, 656.4], [5.0, 596.1111111111111], [6.0, 610.625], [7.0, 584.9090909090909], [8.0, 602.0], [9.0, 599.4615384615385], [10.0, 604.8571428571429], [11.0, 625.5384615384615], [12.0, 637.8666666666667], [13.0, 640.6666666666665], [14.0, 644.2857142857143], [15.0, 706.3333333333334], [16.0, 713.0526315789474], [17.0, 734.0], [18.0, 760.5], [19.0, 782.3888888888889], [20.0, 807.2631578947368], [21.0, 830.4117647058823], [22.0, 850.3333333333333], [23.0, 874.0476190476192], [24.0, 901.3809523809524], [25.0, 917.9545454545455], [26.0, 934.1052631578947], [27.0, 956.9444444444445], [28.0, 966.608695652174], [29.0, 982.1739130434781], [30.0, 990.1874999999999], [31.0, 1001.2608695652174], [32.0, 1003.4583333333334], [33.0, 1022.5624999999999], [34.0, 1022.8399999999997], [35.0, 1029.8235294117649], [36.0, 1032.4782608695655], [37.0, 1031.2380952380952], [38.0, 1034.5454545454545], [39.0, 1028.8181818181818], [40.0, 1053.1052631578948], [41.0, 1056.8749999999995], [42.0, 1063.4736842105265], [43.0, 1060.1304347826085], [44.0, 1194.2727272727273], [45.0, 1041.4705882352941], [46.0, 1092.6538461538462], [47.0, 1054.5500000000002], [48.0, 1039.619047619048], [49.0, 1063.1904761904761], [50.0, 1048.7142857142856], [51.0, 1054.3913043478262], [52.0, 1045.4736842105265], [53.0, 1041.1666666666667], [54.0, 1064.2777777777778], [55.0, 1040.1200000000001], [56.0, 1063.6363636363635], [57.0, 1052.625], [58.0, 1079.3999999999999], [59.0, 1082.7499999999998], [60.0, 1049.8500000000001], [61.0, 1073.0], [62.0, 1071.9999999999998], [63.0, 1052.3809523809523], [64.0, 1059.0476190476193], [65.0, 1085.4782608695652], [66.0, 1054.5263157894738], [67.0, 1055.576923076923], [68.0, 1080.0434782608695], [69.0, 1056.2777777777778], [70.0, 1057.6315789473686], [71.0, 1071.9565217391303], [72.0, 1088.2608695652173], [73.0, 1052.1904761904764], [74.0, 1070.0869565217392], [75.0, 1073.9583333333337], [76.0, 1059.6666666666665], [77.0, 1062.1904761904761], [78.0, 1077.9999999999995], [79.0, 1079.9615384615383], [80.0, 1037.7461139896384], [1.0, 1079.0]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[56.34929701230229, 998.1660808435854]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 80.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 213.3, "minX": 1.78906176E12, "maxY": 6090.7, "series": [{"data": [[1.78906188E12, 2360.05], [1.78906182E12, 6090.7], [1.78906176E12, 311.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78906188E12, 1614.2333333333333], [1.78906182E12, 4165.933333333333], [1.78906176E12, 213.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906188E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 562.8888888888889, "minX": 1.78906176E12, "maxY": 1031.1827079934753, "series": [{"data": [[1.78906188E12, 1031.1827079934753], [1.78906182E12, 1007.6592920353975], [1.78906176E12, 562.8888888888889]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906188E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 562.6913580246917, "minX": 1.78906176E12, "maxY": 1031.1729200652514, "series": [{"data": [[1.78906188E12, 1031.1729200652514], [1.78906182E12, 1007.6207332490523], [1.78906176E12, 562.6913580246917]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906188E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.05220228384991841, "minX": 1.78906176E12, "maxY": 0.3703703703703702, "series": [{"data": [[1.78906188E12, 0.05220228384991841], [1.78906182E12, 0.05309734513274334], [1.78906176E12, 0.3703703703703702]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906188E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 520.0, "minX": 1.78906176E12, "maxY": 620.0, "series": [{"data": [[1.78906182E12, 620.0], [1.78906176E12, 619.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78906182E12, 583.0], [1.78906176E12, 520.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78906182E12, 619.0], [1.78906176E12, 599.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78906182E12, 620.0], [1.78906176E12, 619.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78906182E12, 602.5], [1.78906176E12, 560.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78906182E12, 619.95], [1.78906176E12, 604.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906182E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 525.0, "minX": 1.0, "maxY": 1062.5, "series": [{"data": [[1.0, 610.0], [9.0, 525.0], [18.0, 600.5], [19.0, 585.5], [5.0, 575.0], [20.0, 616.0], [12.0, 545.0], [13.0, 540.5], [7.0, 551.0], [15.0, 570.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[34.0, 1062.5], [13.0, 652.0], [18.0, 632.5], [19.0, 631.0], [20.0, 634.5], [22.0, 888.0], [23.0, 1028.0], [24.0, 979.5], [25.0, 1041.0], [26.0, 1026.5], [27.0, 1040.0], [28.0, 1049.0], [29.0, 1062.0], [30.0, 1036.0], [31.0, 1054.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 525.0, "minX": 1.0, "maxY": 1062.5, "series": [{"data": [[1.0, 606.0], [9.0, 525.0], [18.0, 600.5], [19.0, 585.0], [5.0, 574.0], [20.0, 616.0], [12.0, 545.0], [13.0, 540.5], [7.0, 551.0], [15.0, 569.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[34.0, 1062.5], [13.0, 652.0], [18.0, 632.5], [19.0, 631.0], [20.0, 634.5], [22.0, 888.0], [23.0, 1028.0], [24.0, 979.5], [25.0, 1041.0], [26.0, 1026.5], [27.0, 1040.0], [28.0, 1048.0], [29.0, 1062.0], [30.0, 1036.0], [31.0, 1054.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.5333333333333334, "minX": 1.78906176E12, "maxY": 26.566666666666666, "series": [{"data": [[1.78906188E12, 9.833333333333334], [1.78906182E12, 26.566666666666666], [1.78906176E12, 1.5333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906188E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.35, "minX": 1.78906176E12, "maxY": 26.366666666666667, "series": [{"data": [[1.78906188E12, 10.216666666666667], [1.78906182E12, 26.366666666666667], [1.78906176E12, 1.35]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906188E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.78906176E12, "maxY": 26.033333333333335, "series": [{"data": [[1.78906182E12, 0.3333333333333333], [1.78906176E12, 1.3166666666666667]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78906188E12, 10.216666666666667], [1.78906182E12, 26.033333333333335], [1.78906176E12, 0.03333333333333333]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906188E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.78906176E12, "maxY": 26.033333333333335, "series": [{"data": [[1.78906182E12, 0.3333333333333333], [1.78906176E12, 1.3166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78906188E12, 10.216666666666667], [1.78906182E12, 26.033333333333335], [1.78906176E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906188E12, "title": "Total Transactions Per Second"}},
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

