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
        data: {"result": {"minY": 518.0, "minX": 0.0, "maxY": 5341.0, "series": [{"data": [[0.0, 518.0], [0.1, 520.0], [0.2, 532.0], [0.3, 533.0], [0.4, 536.0], [0.5, 539.0], [0.6, 548.0], [0.7, 549.0], [0.8, 550.0], [0.9, 550.0], [1.0, 551.0], [1.1, 552.0], [1.2, 552.0], [1.3, 554.0], [1.4, 556.0], [1.5, 557.0], [1.6, 559.0], [1.7, 561.0], [1.8, 565.0], [1.9, 566.0], [2.0, 567.0], [2.1, 568.0], [2.2, 573.0], [2.3, 574.0], [2.4, 579.0], [2.5, 582.0], [2.6, 583.0], [2.7, 584.0], [2.8, 588.0], [2.9, 589.0], [3.0, 592.0], [3.1, 593.0], [3.2, 596.0], [3.3, 597.0], [3.4, 599.0], [3.5, 601.0], [3.6, 607.0], [3.7, 609.0], [3.8, 615.0], [3.9, 617.0], [4.0, 620.0], [4.1, 622.0], [4.2, 623.0], [4.3, 626.0], [4.4, 637.0], [4.5, 639.0], [4.6, 641.0], [4.7, 642.0], [4.8, 645.0], [4.9, 646.0], [5.0, 646.0], [5.1, 656.0], [5.2, 661.0], [5.3, 664.0], [5.4, 668.0], [5.5, 671.0], [5.6, 680.0], [5.7, 681.0], [5.8, 684.0], [5.9, 684.0], [6.0, 693.0], [6.1, 697.0], [6.2, 704.0], [6.3, 706.0], [6.4, 714.0], [6.5, 717.0], [6.6, 722.0], [6.7, 723.0], [6.8, 736.0], [6.9, 742.0], [7.0, 746.0], [7.1, 751.0], [7.2, 753.0], [7.3, 754.0], [7.4, 758.0], [7.5, 765.0], [7.6, 779.0], [7.7, 782.0], [7.8, 786.0], [7.9, 790.0], [8.0, 792.0], [8.1, 796.0], [8.2, 804.0], [8.3, 808.0], [8.4, 821.0], [8.5, 822.0], [8.6, 835.0], [8.7, 838.0], [8.8, 842.0], [8.9, 846.0], [9.0, 848.0], [9.1, 851.0], [9.2, 859.0], [9.3, 863.0], [9.4, 874.0], [9.5, 878.0], [9.6, 884.0], [9.7, 888.0], [9.8, 889.0], [9.9, 893.0], [10.0, 904.0], [10.1, 911.0], [10.2, 914.0], [10.3, 916.0], [10.4, 924.0], [10.5, 929.0], [10.6, 931.0], [10.7, 941.0], [10.8, 947.0], [10.9, 951.0], [11.0, 952.0], [11.1, 955.0], [11.2, 958.0], [11.3, 963.0], [11.4, 965.0], [11.5, 972.0], [11.6, 977.0], [11.7, 982.0], [11.8, 987.0], [11.9, 991.0], [12.0, 994.0], [12.1, 999.0], [12.2, 1013.0], [12.3, 1016.0], [12.4, 1023.0], [12.5, 1028.0], [12.6, 1032.0], [12.7, 1034.0], [12.8, 1037.0], [12.9, 1039.0], [13.0, 1043.0], [13.1, 1044.0], [13.2, 1049.0], [13.3, 1050.0], [13.4, 1053.0], [13.5, 1059.0], [13.6, 1061.0], [13.7, 1063.0], [13.8, 1065.0], [13.9, 1069.0], [14.0, 1070.0], [14.1, 1076.0], [14.2, 1078.0], [14.3, 1081.0], [14.4, 1082.0], [14.5, 1087.0], [14.6, 1091.0], [14.7, 1097.0], [14.8, 1099.0], [14.9, 1100.0], [15.0, 1100.0], [15.1, 1104.0], [15.2, 1107.0], [15.3, 1113.0], [15.4, 1123.0], [15.5, 1137.0], [15.6, 1143.0], [15.7, 1145.0], [15.8, 1151.0], [15.9, 1166.0], [16.0, 1168.0], [16.1, 1170.0], [16.2, 1174.0], [16.3, 1177.0], [16.4, 1177.0], [16.5, 1178.0], [16.6, 1191.0], [16.7, 1200.0], [16.8, 1200.0], [16.9, 1203.0], [17.0, 1205.0], [17.1, 1219.0], [17.2, 1226.0], [17.3, 1237.0], [17.4, 1237.0], [17.5, 1244.0], [17.6, 1244.0], [17.7, 1254.0], [17.8, 1254.0], [17.9, 1273.0], [18.0, 1278.0], [18.1, 1278.0], [18.2, 1285.0], [18.3, 1302.0], [18.4, 1302.0], [18.5, 1305.0], [18.6, 1316.0], [18.7, 1318.0], [18.8, 1318.0], [18.9, 1318.0], [19.0, 1329.0], [19.1, 1345.0], [19.2, 1345.0], [19.3, 1347.0], [19.4, 1358.0], [19.5, 1358.0], [19.6, 1359.0], [19.7, 1366.0], [19.8, 1366.0], [19.9, 1373.0], [20.0, 1392.0], [20.1, 1398.0], [20.2, 1403.0], [20.3, 1411.0], [20.4, 1412.0], [20.5, 1412.0], [20.6, 1425.0], [20.7, 1426.0], [20.8, 1452.0], [20.9, 1452.0], [21.0, 1452.0], [21.1, 1459.0], [21.2, 1463.0], [21.3, 1463.0], [21.4, 1482.0], [21.5, 1482.0], [21.6, 1484.0], [21.7, 1494.0], [21.8, 1495.0], [21.9, 1495.0], [22.0, 1504.0], [22.1, 1519.0], [22.2, 1523.0], [22.3, 1523.0], [22.4, 1534.0], [22.5, 1535.0], [22.6, 1536.0], [22.7, 1537.0], [22.8, 1549.0], [22.9, 1556.0], [23.0, 1557.0], [23.1, 1557.0], [23.2, 1569.0], [23.3, 1571.0], [23.4, 1571.0], [23.5, 1576.0], [23.6, 1594.0], [23.7, 1595.0], [23.8, 1596.0], [23.9, 1596.0], [24.0, 1596.0], [24.1, 1600.0], [24.2, 1600.0], [24.3, 1601.0], [24.4, 1611.0], [24.5, 1622.0], [24.6, 1623.0], [24.7, 1637.0], [24.8, 1649.0], [24.9, 1670.0], [25.0, 1709.0], [25.1, 1710.0], [25.2, 1722.0], [25.3, 1723.0], [25.4, 1723.0], [25.5, 1723.0], [25.6, 1729.0], [25.7, 1741.0], [25.8, 1744.0], [25.9, 1750.0], [26.0, 1773.0], [26.1, 1787.0], [26.2, 1787.0], [26.3, 1788.0], [26.4, 1795.0], [26.5, 1796.0], [26.6, 1796.0], [26.7, 1805.0], [26.8, 1810.0], [26.9, 1810.0], [27.0, 1814.0], [27.1, 1847.0], [27.2, 1849.0], [27.3, 1853.0], [27.4, 1863.0], [27.5, 1864.0], [27.6, 1872.0], [27.7, 1892.0], [27.8, 1904.0], [27.9, 1913.0], [28.0, 1924.0], [28.1, 1924.0], [28.2, 1934.0], [28.3, 1936.0], [28.4, 1937.0], [28.5, 1938.0], [28.6, 1945.0], [28.7, 1945.0], [28.8, 1947.0], [28.9, 1955.0], [29.0, 1955.0], [29.1, 1956.0], [29.2, 1957.0], [29.3, 1960.0], [29.4, 1961.0], [29.5, 1962.0], [29.6, 1964.0], [29.7, 1979.0], [29.8, 1979.0], [29.9, 1980.0], [30.0, 1980.0], [30.1, 1988.0], [30.2, 1990.0], [30.3, 1990.0], [30.4, 1991.0], [30.5, 1991.0], [30.6, 1992.0], [30.7, 1992.0], [30.8, 2040.0], [30.9, 2041.0], [31.0, 2084.0], [31.1, 2089.0], [31.2, 2097.0], [31.3, 2098.0], [31.4, 2122.0], [31.5, 2122.0], [31.6, 2122.0], [31.7, 2123.0], [31.8, 2123.0], [31.9, 2123.0], [32.0, 2124.0], [32.1, 2124.0], [32.2, 2125.0], [32.3, 2125.0], [32.4, 2126.0], [32.5, 2127.0], [32.6, 2151.0], [32.7, 2152.0], [32.8, 2153.0], [32.9, 2164.0], [33.0, 2166.0], [33.1, 2166.0], [33.2, 2173.0], [33.3, 2173.0], [33.4, 2174.0], [33.5, 2175.0], [33.6, 2176.0], [33.7, 2185.0], [33.8, 2187.0], [33.9, 2194.0], [34.0, 2195.0], [34.1, 2195.0], [34.2, 2196.0], [34.3, 2196.0], [34.4, 2197.0], [34.5, 2197.0], [34.6, 2197.0], [34.7, 2198.0], [34.8, 2198.0], [34.9, 2198.0], [35.0, 2199.0], [35.1, 2199.0], [35.2, 2199.0], [35.3, 2199.0], [35.4, 2199.0], [35.5, 2212.0], [35.6, 2212.0], [35.7, 2212.0], [35.8, 2213.0], [35.9, 2214.0], [36.0, 2223.0], [36.1, 2224.0], [36.2, 2224.0], [36.3, 2225.0], [36.4, 2225.0], [36.5, 2227.0], [36.6, 2227.0], [36.7, 2227.0], [36.8, 2228.0], [36.9, 2240.0], [37.0, 2242.0], [37.1, 2242.0], [37.2, 2243.0], [37.3, 2243.0], [37.4, 2257.0], [37.5, 2273.0], [37.6, 2276.0], [37.7, 2277.0], [37.8, 2277.0], [37.9, 2278.0], [38.0, 2278.0], [38.1, 2279.0], [38.2, 2279.0], [38.3, 2281.0], [38.4, 2287.0], [38.5, 2287.0], [38.6, 2288.0], [38.7, 2323.0], [38.8, 2324.0], [38.9, 2325.0], [39.0, 2325.0], [39.1, 2325.0], [39.2, 2326.0], [39.3, 2327.0], [39.4, 2328.0], [39.5, 2328.0], [39.6, 2328.0], [39.7, 2328.0], [39.8, 2328.0], [39.9, 2329.0], [40.0, 2330.0], [40.1, 2344.0], [40.2, 2345.0], [40.3, 2347.0], [40.4, 2347.0], [40.5, 2357.0], [40.6, 2358.0], [40.7, 2378.0], [40.8, 2380.0], [40.9, 2381.0], [41.0, 2381.0], [41.1, 2381.0], [41.2, 2382.0], [41.3, 2382.0], [41.4, 2426.0], [41.5, 2452.0], [41.6, 2453.0], [41.7, 2453.0], [41.8, 2454.0], [41.9, 2461.0], [42.0, 2488.0], [42.1, 2520.0], [42.2, 2521.0], [42.3, 2521.0], [42.4, 2525.0], [42.5, 2525.0], [42.6, 2526.0], [42.7, 2526.0], [42.8, 2529.0], [42.9, 2537.0], [43.0, 2545.0], [43.1, 2545.0], [43.2, 2545.0], [43.3, 2546.0], [43.4, 2555.0], [43.5, 2558.0], [43.6, 2560.0], [43.7, 2569.0], [43.8, 2641.0], [43.9, 2642.0], [44.0, 2642.0], [44.1, 2642.0], [44.2, 2642.0], [44.3, 2642.0], [44.4, 2643.0], [44.5, 2643.0], [44.6, 2644.0], [44.7, 2644.0], [44.8, 2647.0], [44.9, 2648.0], [45.0, 2648.0], [45.1, 2649.0], [45.2, 2655.0], [45.3, 2658.0], [45.4, 2659.0], [45.5, 2669.0], [45.6, 2669.0], [45.7, 2669.0], [45.8, 2670.0], [45.9, 2670.0], [46.0, 2670.0], [46.1, 2671.0], [46.2, 2672.0], [46.3, 2673.0], [46.4, 2674.0], [46.5, 2676.0], [46.6, 2677.0], [46.7, 2678.0], [46.8, 2680.0], [46.9, 2680.0], [47.0, 2683.0], [47.1, 2684.0], [47.2, 2684.0], [47.3, 2702.0], [47.4, 2710.0], [47.5, 2743.0], [47.6, 2754.0], [47.7, 2754.0], [47.8, 2755.0], [47.9, 2755.0], [48.0, 2755.0], [48.1, 2756.0], [48.2, 2756.0], [48.3, 2757.0], [48.4, 2758.0], [48.5, 2772.0], [48.6, 2772.0], [48.7, 2772.0], [48.8, 2784.0], [48.9, 2785.0], [49.0, 2800.0], [49.1, 2801.0], [49.2, 2801.0], [49.3, 2802.0], [49.4, 2808.0], [49.5, 2810.0], [49.6, 2811.0], [49.7, 2811.0], [49.8, 2811.0], [49.9, 2811.0], [50.0, 2812.0], [50.1, 2813.0], [50.2, 2831.0], [50.3, 2833.0], [50.4, 2834.0], [50.5, 2834.0], [50.6, 2839.0], [50.7, 2840.0], [50.8, 2842.0], [50.9, 2842.0], [51.0, 2851.0], [51.1, 2851.0], [51.2, 2852.0], [51.3, 2852.0], [51.4, 2853.0], [51.5, 2854.0], [51.6, 2860.0], [51.7, 2860.0], [51.8, 2861.0], [51.9, 2861.0], [52.0, 2861.0], [52.1, 2862.0], [52.2, 2884.0], [52.3, 2885.0], [52.4, 2888.0], [52.5, 2890.0], [52.6, 2891.0], [52.7, 2897.0], [52.8, 2897.0], [52.9, 2898.0], [53.0, 2898.0], [53.1, 2898.0], [53.2, 2899.0], [53.3, 2920.0], [53.4, 2921.0], [53.5, 2922.0], [53.6, 2923.0], [53.7, 2933.0], [53.8, 2933.0], [53.9, 2936.0], [54.0, 2937.0], [54.1, 2968.0], [54.2, 2968.0], [54.3, 2968.0], [54.4, 2968.0], [54.5, 2987.0], [54.6, 2990.0], [54.7, 2990.0], [54.8, 2991.0], [54.9, 2991.0], [55.0, 2992.0], [55.1, 2992.0], [55.2, 2992.0], [55.3, 2997.0], [55.4, 3000.0], [55.5, 3001.0], [55.6, 3002.0], [55.7, 3002.0], [55.8, 3002.0], [55.9, 3002.0], [56.0, 3003.0], [56.1, 3003.0], [56.2, 3004.0], [56.3, 3004.0], [56.4, 3004.0], [56.5, 3005.0], [56.6, 3005.0], [56.7, 3018.0], [56.8, 3018.0], [56.9, 3032.0], [57.0, 3032.0], [57.1, 3032.0], [57.2, 3033.0], [57.3, 3036.0], [57.4, 3036.0], [57.5, 3037.0], [57.6, 3038.0], [57.7, 3038.0], [57.8, 3038.0], [57.9, 3039.0], [58.0, 3039.0], [58.1, 3039.0], [58.2, 3039.0], [58.3, 3060.0], [58.4, 3060.0], [58.5, 3062.0], [58.6, 3063.0], [58.7, 3064.0], [58.8, 3065.0], [58.9, 3071.0], [59.0, 3071.0], [59.1, 3072.0], [59.2, 3072.0], [59.3, 3086.0], [59.4, 3097.0], [59.5, 3104.0], [59.6, 3123.0], [59.7, 3127.0], [59.8, 3128.0], [59.9, 3128.0], [60.0, 3140.0], [60.1, 3143.0], [60.2, 3143.0], [60.3, 3145.0], [60.4, 3151.0], [60.5, 3152.0], [60.6, 3152.0], [60.7, 3166.0], [60.8, 3178.0], [60.9, 3179.0], [61.0, 3179.0], [61.1, 3179.0], [61.2, 3180.0], [61.3, 3181.0], [61.4, 3182.0], [61.5, 3182.0], [61.6, 3183.0], [61.7, 3183.0], [61.8, 3184.0], [61.9, 3191.0], [62.0, 3243.0], [62.1, 3252.0], [62.2, 3268.0], [62.3, 3268.0], [62.4, 3268.0], [62.5, 3268.0], [62.6, 3269.0], [62.7, 3270.0], [62.8, 3270.0], [62.9, 3270.0], [63.0, 3271.0], [63.1, 3272.0], [63.2, 3309.0], [63.3, 3310.0], [63.4, 3329.0], [63.5, 3330.0], [63.6, 3338.0], [63.7, 3338.0], [63.8, 3339.0], [63.9, 3339.0], [64.0, 3340.0], [64.1, 3340.0], [64.2, 3340.0], [64.3, 3341.0], [64.4, 3379.0], [64.5, 3382.0], [64.6, 3384.0], [64.7, 3391.0], [64.8, 3391.0], [64.9, 3391.0], [65.0, 3391.0], [65.1, 3391.0], [65.2, 3391.0], [65.3, 3391.0], [65.4, 3392.0], [65.5, 3392.0], [65.6, 3392.0], [65.7, 3392.0], [65.8, 3392.0], [65.9, 3393.0], [66.0, 3393.0], [66.1, 3393.0], [66.2, 3394.0], [66.3, 3394.0], [66.4, 3419.0], [66.5, 3463.0], [66.6, 3500.0], [66.7, 3501.0], [66.8, 3502.0], [66.9, 3507.0], [67.0, 3507.0], [67.1, 3508.0], [67.2, 3508.0], [67.3, 3508.0], [67.4, 3523.0], [67.5, 3533.0], [67.6, 3576.0], [67.7, 3586.0], [67.8, 3586.0], [67.9, 3587.0], [68.0, 3624.0], [68.1, 3652.0], [68.2, 3663.0], [68.3, 3675.0], [68.4, 3699.0], [68.5, 3703.0], [68.6, 3731.0], [68.7, 3736.0], [68.8, 3760.0], [68.9, 3781.0], [69.0, 3797.0], [69.1, 3797.0], [69.2, 3798.0], [69.3, 3798.0], [69.4, 3807.0], [69.5, 3844.0], [69.6, 3844.0], [69.7, 3844.0], [69.8, 3854.0], [69.9, 3855.0], [70.0, 3855.0], [70.1, 3856.0], [70.2, 3857.0], [70.3, 3865.0], [70.4, 3894.0], [70.5, 3894.0], [70.6, 3895.0], [70.7, 3896.0], [70.8, 3898.0], [70.9, 3902.0], [71.0, 3903.0], [71.1, 3921.0], [71.2, 3948.0], [71.3, 3951.0], [71.4, 3951.0], [71.5, 3952.0], [71.6, 3954.0], [71.7, 3956.0], [71.8, 3957.0], [71.9, 3957.0], [72.0, 3957.0], [72.1, 3957.0], [72.2, 3958.0], [72.3, 3958.0], [72.4, 3959.0], [72.5, 3960.0], [72.6, 3961.0], [72.7, 3963.0], [72.8, 3974.0], [72.9, 3994.0], [73.0, 3994.0], [73.1, 3994.0], [73.2, 3996.0], [73.3, 3996.0], [73.4, 3997.0], [73.5, 3997.0], [73.6, 3997.0], [73.7, 4001.0], [73.8, 4002.0], [73.9, 4003.0], [74.0, 4003.0], [74.1, 4003.0], [74.2, 4003.0], [74.3, 4003.0], [74.4, 4004.0], [74.5, 4004.0], [74.6, 4006.0], [74.7, 4007.0], [74.8, 4007.0], [74.9, 4010.0], [75.0, 4011.0], [75.1, 4017.0], [75.2, 4017.0], [75.3, 4017.0], [75.4, 4042.0], [75.5, 4042.0], [75.6, 4043.0], [75.7, 4054.0], [75.8, 4055.0], [75.9, 4055.0], [76.0, 4055.0], [76.1, 4056.0], [76.2, 4056.0], [76.3, 4058.0], [76.4, 4058.0], [76.5, 4060.0], [76.6, 4061.0], [76.7, 4067.0], [76.8, 4067.0], [76.9, 4068.0], [77.0, 4069.0], [77.1, 4073.0], [77.2, 4073.0], [77.3, 4074.0], [77.4, 4076.0], [77.5, 4077.0], [77.6, 4079.0], [77.7, 4080.0], [77.8, 4081.0], [77.9, 4081.0], [78.0, 4081.0], [78.1, 4082.0], [78.2, 4082.0], [78.3, 4083.0], [78.4, 4083.0], [78.5, 4098.0], [78.6, 4098.0], [78.7, 4099.0], [78.8, 4099.0], [78.9, 4099.0], [79.0, 4099.0], [79.1, 4100.0], [79.2, 4101.0], [79.3, 4101.0], [79.4, 4102.0], [79.5, 4109.0], [79.6, 4109.0], [79.7, 4114.0], [79.8, 4124.0], [79.9, 4125.0], [80.0, 4126.0], [80.1, 4127.0], [80.2, 4128.0], [80.3, 4128.0], [80.4, 4130.0], [80.5, 4134.0], [80.6, 4135.0], [80.7, 4135.0], [80.8, 4135.0], [80.9, 4135.0], [81.0, 4136.0], [81.1, 4136.0], [81.2, 4137.0], [81.3, 4137.0], [81.4, 4137.0], [81.5, 4138.0], [81.6, 4145.0], [81.7, 4149.0], [81.8, 4150.0], [81.9, 4150.0], [82.0, 4151.0], [82.1, 4151.0], [82.2, 4151.0], [82.3, 4151.0], [82.4, 4151.0], [82.5, 4152.0], [82.6, 4152.0], [82.7, 4152.0], [82.8, 4153.0], [82.9, 4153.0], [83.0, 4153.0], [83.1, 4153.0], [83.2, 4154.0], [83.3, 4156.0], [83.4, 4184.0], [83.5, 4184.0], [83.6, 4185.0], [83.7, 4185.0], [83.8, 4185.0], [83.9, 4185.0], [84.0, 4185.0], [84.1, 4185.0], [84.2, 4185.0], [84.3, 4186.0], [84.4, 4186.0], [84.5, 4186.0], [84.6, 4190.0], [84.7, 4192.0], [84.8, 4193.0], [84.9, 4193.0], [85.0, 4194.0], [85.1, 4194.0], [85.2, 4194.0], [85.3, 4194.0], [85.4, 4195.0], [85.5, 4195.0], [85.6, 4195.0], [85.7, 4200.0], [85.8, 4203.0], [85.9, 4203.0], [86.0, 4206.0], [86.1, 4206.0], [86.2, 4206.0], [86.3, 4208.0], [86.4, 4209.0], [86.5, 4209.0], [86.6, 4210.0], [86.7, 4218.0], [86.8, 4219.0], [86.9, 4219.0], [87.0, 4220.0], [87.1, 4225.0], [87.2, 4235.0], [87.3, 4236.0], [87.4, 4236.0], [87.5, 4236.0], [87.6, 4237.0], [87.7, 4237.0], [87.8, 4238.0], [87.9, 4238.0], [88.0, 4238.0], [88.1, 4239.0], [88.2, 4239.0], [88.3, 4239.0], [88.4, 4240.0], [88.5, 4240.0], [88.6, 4240.0], [88.7, 4241.0], [88.8, 4242.0], [88.9, 4242.0], [89.0, 4242.0], [89.1, 4243.0], [89.2, 4243.0], [89.3, 4244.0], [89.4, 4245.0], [89.5, 4264.0], [89.6, 4265.0], [89.7, 4265.0], [89.8, 4266.0], [89.9, 4266.0], [90.0, 4266.0], [90.1, 4267.0], [90.2, 4268.0], [90.3, 4269.0], [90.4, 4269.0], [90.5, 4270.0], [90.6, 4270.0], [90.7, 4270.0], [90.8, 4271.0], [90.9, 4271.0], [91.0, 4271.0], [91.1, 4272.0], [91.2, 4305.0], [91.3, 4363.0], [91.4, 4364.0], [91.5, 4366.0], [91.6, 4366.0], [91.7, 4366.0], [91.8, 4366.0], [91.9, 4371.0], [92.0, 4371.0], [92.1, 4371.0], [92.2, 4371.0], [92.3, 4378.0], [92.4, 4379.0], [92.5, 4381.0], [92.6, 4382.0], [92.7, 4383.0], [92.8, 4383.0], [92.9, 4384.0], [93.0, 4384.0], [93.1, 4385.0], [93.2, 4385.0], [93.3, 4385.0], [93.4, 4385.0], [93.5, 4385.0], [93.6, 4386.0], [93.7, 4386.0], [93.8, 4386.0], [93.9, 4386.0], [94.0, 4386.0], [94.1, 4387.0], [94.2, 4387.0], [94.3, 4387.0], [94.4, 4397.0], [94.5, 4398.0], [94.6, 4399.0], [94.7, 4399.0], [94.8, 4399.0], [94.9, 4400.0], [95.0, 4401.0], [95.1, 4401.0], [95.2, 4402.0], [95.3, 4402.0], [95.4, 4402.0], [95.5, 4403.0], [95.6, 4403.0], [95.7, 4403.0], [95.8, 4405.0], [95.9, 4405.0], [96.0, 4431.0], [96.1, 4439.0], [96.2, 4439.0], [96.3, 4440.0], [96.4, 4440.0], [96.5, 4440.0], [96.6, 4440.0], [96.7, 4441.0], [96.8, 4441.0], [96.9, 4442.0], [97.0, 4442.0], [97.1, 4443.0], [97.2, 4443.0], [97.3, 4443.0], [97.4, 4443.0], [97.5, 4443.0], [97.6, 4443.0], [97.7, 4444.0], [97.8, 4444.0], [97.9, 4444.0], [98.0, 4445.0], [98.1, 4448.0], [98.2, 4528.0], [98.3, 4528.0], [98.4, 4529.0], [98.5, 4529.0], [98.6, 4529.0], [98.7, 4534.0], [98.8, 4534.0], [98.9, 4535.0], [99.0, 4536.0], [99.1, 4566.0], [99.2, 4566.0], [99.3, 4569.0], [99.4, 4569.0], [99.5, 4569.0], [99.6, 4570.0], [99.7, 4572.0], [99.8, 4572.0], [99.9, 4574.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 165.0, "series": [{"data": [[600.0, 68.0], [700.0, 48.0], [800.0, 46.0], [900.0, 55.0], [1000.0, 68.0], [1100.0, 46.0], [1200.0, 39.0], [1300.0, 48.0], [1400.0, 45.0], [1500.0, 53.0], [1600.0, 22.0], [1700.0, 42.0], [1800.0, 29.0], [1900.0, 74.0], [2000.0, 15.0], [2100.0, 103.0], [2200.0, 81.0], [2300.0, 67.0], [2400.0, 17.0], [2500.0, 42.0], [2600.0, 88.0], [2700.0, 44.0], [2800.0, 108.0], [2900.0, 51.0], [3000.0, 104.0], [3100.0, 62.0], [3300.0, 80.0], [3200.0, 31.0], [3400.0, 3.0], [3500.0, 36.0], [3700.0, 23.0], [3600.0, 12.0], [3800.0, 37.0], [3900.0, 72.0], [4000.0, 135.0], [4100.0, 165.0], [4200.0, 138.0], [4300.0, 91.0], [4400.0, 84.0], [4500.0, 44.0], [5200.0, 1.0], [5300.0, 1.0], [500.0, 87.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 102.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2403.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 102.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2403.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 54.44591611479028, "minX": 1.789062E12, "maxY": 106.27050610820233, "series": [{"data": [[1.78906206E12, 106.27050610820233], [1.789062E12, 54.44591611479028]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 112 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906206E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 821.0666666666667, "minX": 1.0, "maxY": 4268.0, "series": [{"data": [[2.0, 2191.5], [3.0, 1638.0], [4.0, 1371.25], [5.0, 1179.4], [6.0, 1069.5], [7.0, 986.2857142857142], [8.0, 924.875], [9.0, 884.1111111111111], [10.0, 849.3000000000001], [11.0, 874.2727272727273], [12.0, 880.4545454545455], [13.0, 829.5384615384615], [14.0, 838.7692307692307], [15.0, 821.0666666666667], [16.0, 827.0], [17.0, 831.625], [18.0, 876.4285714285713], [19.0, 944.1818181818182], [20.0, 871.1176470588234], [21.0, 899.2941176470588], [22.0, 986.4166666666665], [23.0, 956.8125000000001], [24.0, 971.3333333333334], [25.0, 1087.6363636363637], [26.0, 1009.4499999999999], [27.0, 1089.2142857142858], [28.0, 1100.3333333333333], [29.0, 1104.4705882352941], [30.0, 1159.7142857142858], [31.0, 1238.8], [32.0, 1138.0434782608695], [34.0, 1177.967741935484], [35.0, 1164.3333333333333], [36.0, 1133.0000000000002], [37.0, 1303.7499999999998], [38.0, 1178.15], [39.0, 1318.2499999999998], [40.0, 1252.142857142857], [41.0, 1398.6], [42.0, 1404.5185185185187], [43.0, 1481.6], [44.0, 1457.7499999999998], [45.0, 1452.0], [46.0, 1603.2413793103444], [47.0, 1628.888888888889], [48.0, 1514.8235294117644], [49.0, 1542.7142857142858], [50.0, 1841.894736842105], [51.0, 1630.2631578947369], [52.0, 1856.0833333333333], [53.0, 1640.4545454545455], [54.0, 1946.5], [55.0, 1753.5384615384614], [56.0, 2031.3636363636365], [57.0, 1914.6153846153845], [58.0, 2037.071428571428], [59.0, 1759.3846153846155], [60.0, 2064.9333333333334], [61.0, 2148.75], [62.0, 2283.8235294117653], [63.0, 2462.4761904761904], [64.0, 2375.45], [65.0, 2431.65], [67.0, 2202.324324324324], [66.0, 3416.3333333333335], [69.0, 2827.1851851851857], [70.0, 2187.2222222222226], [71.0, 3011.096774193548], [68.0, 4268.0], [73.0, 2553.842105263158], [74.0, 2461.565217391305], [75.0, 2480.095238095238], [72.0, 3004.0], [77.0, 2646.8799999999997], [78.0, 2477.363636363637], [76.0, 2897.0], [80.0, 2619.4999999999995], [82.0, 2585.791666666666], [83.0, 2993.214285714286], [85.0, 3223.178571428572], [87.0, 2916.1333333333328], [86.0, 4008.3333333333335], [88.0, 2760.428571428572], [90.0, 2712.9], [92.0, 3021.0666666666666], [94.0, 3161.3225806451615], [95.0, 4006.0], [93.0, 4156.0], [96.0, 3148.9375000000005], [99.0, 3293.848484848485], [101.0, 3166.4411764705883], [103.0, 3250.555555555556], [100.0, 4113.818181818182], [105.0, 3294.861111111111], [108.0, 3675.210526315789], [111.0, 4012.2051282051284], [112.0, 3881.9675550405577], [1.0, 3800.0]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[78.1544910179639, 2733.612375249501]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 112.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3017.8, "minX": 1.789062E12, "maxY": 5232.15, "series": [{"data": [[1.78906206E12, 4412.1], [1.789062E12, 5232.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78906206E12, 3017.8], [1.789062E12, 3578.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906206E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1831.280353200883, "minX": 1.789062E12, "maxY": 3803.655322862128, "series": [{"data": [[1.78906206E12, 3803.655322862128], [1.789062E12, 1831.280353200883]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906206E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1831.2435614422388, "minX": 1.789062E12, "maxY": 3803.647469458989, "series": [{"data": [[1.78906206E12, 3803.647469458989], [1.789062E12, 1831.2435614422388]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906206E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.06719022687609079, "minX": 1.789062E12, "maxY": 0.08977189109639441, "series": [{"data": [[1.78906206E12, 0.06719022687609079], [1.789062E12, 0.08977189109639441]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906206E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 518.0, "minX": 1.789062E12, "maxY": 620.0, "series": [{"data": [[1.789062E12, 620.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.789062E12, 518.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.789062E12, 609.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.789062E12, 620.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.789062E12, 567.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.789062E12, 617.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.789062E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 544.0, "minX": 1.0, "maxY": 4384.0, "series": [{"data": [[8.0, 559.0], [16.0, 549.5], [5.0, 596.0], [22.0, 582.5], [12.0, 544.0], [25.0, 593.5], [13.0, 566.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 1523.0], [33.0, 2175.0], [2.0, 3780.0], [35.0, 2214.0], [34.0, 3391.0], [36.0, 3393.5], [38.0, 4001.5], [39.0, 4384.0], [40.0, 4081.0], [41.0, 4155.0], [46.0, 2325.0], [48.0, 3951.5], [1.0, 623.0], [18.0, 2241.0], [19.0, 2243.0], [20.0, 2143.0], [21.0, 3624.0], [22.0, 1098.5], [23.0, 1226.0], [24.0, 2251.0], [25.0, 2328.0], [26.0, 1452.0], [27.0, 1115.5], [28.0, 1853.5], [29.0, 1670.0], [30.0, 2038.0], [31.0, 2125.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 48.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 544.0, "minX": 1.0, "maxY": 4384.0, "series": [{"data": [[8.0, 559.0], [16.0, 549.0], [5.0, 596.0], [22.0, 582.5], [12.0, 544.0], [25.0, 593.5], [13.0, 566.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 1523.0], [33.0, 2175.0], [2.0, 3780.0], [35.0, 2214.0], [34.0, 3391.0], [36.0, 3393.5], [38.0, 4001.5], [39.0, 4384.0], [40.0, 4081.0], [41.0, 4155.0], [46.0, 2325.0], [48.0, 3951.5], [1.0, 620.0], [18.0, 2241.0], [19.0, 2243.0], [20.0, 2143.0], [21.0, 3624.0], [22.0, 1098.5], [23.0, 1226.0], [24.0, 2251.0], [25.0, 2328.0], [26.0, 1452.0], [27.0, 1115.5], [28.0, 1853.5], [29.0, 1670.0], [30.0, 2038.0], [31.0, 2125.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 48.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 17.516666666666666, "minX": 1.789062E12, "maxY": 24.233333333333334, "series": [{"data": [[1.78906206E12, 17.516666666666666], [1.789062E12, 24.233333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906206E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 19.1, "minX": 1.789062E12, "maxY": 22.65, "series": [{"data": [[1.78906206E12, 19.1], [1.789062E12, 22.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906206E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7, "minX": 1.789062E12, "maxY": 20.95, "series": [{"data": [[1.78906206E12, 19.1], [1.789062E12, 20.95]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}, {"data": [[1.789062E12, 1.7]], "isOverall": false, "label": "GET / config=3-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906206E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7, "minX": 1.789062E12, "maxY": 20.95, "series": [{"data": [[1.789062E12, 1.7]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78906206E12, 19.1], [1.789062E12, 20.95]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906206E12, "title": "Total Transactions Per Second"}},
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

