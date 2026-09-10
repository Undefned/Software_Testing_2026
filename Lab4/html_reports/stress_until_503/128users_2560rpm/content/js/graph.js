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
        data: {"result": {"minY": 518.0, "minX": 0.0, "maxY": 7125.0, "series": [{"data": [[0.0, 518.0], [0.1, 520.0], [0.2, 523.0], [0.3, 525.0], [0.4, 528.0], [0.5, 536.0], [0.6, 544.0], [0.7, 544.0], [0.8, 546.0], [0.9, 548.0], [1.0, 548.0], [1.1, 551.0], [1.2, 552.0], [1.3, 554.0], [1.4, 562.0], [1.5, 562.0], [1.6, 563.0], [1.7, 564.0], [1.8, 564.0], [1.9, 565.0], [2.0, 568.0], [2.1, 571.0], [2.2, 575.0], [2.3, 577.0], [2.4, 578.0], [2.5, 582.0], [2.6, 584.0], [2.7, 585.0], [2.8, 587.0], [2.9, 589.0], [3.0, 590.0], [3.1, 593.0], [3.2, 597.0], [3.3, 602.0], [3.4, 604.0], [3.5, 606.0], [3.6, 608.0], [3.7, 612.0], [3.8, 612.0], [3.9, 616.0], [4.0, 617.0], [4.1, 621.0], [4.2, 627.0], [4.3, 630.0], [4.4, 639.0], [4.5, 642.0], [4.6, 642.0], [4.7, 645.0], [4.8, 649.0], [4.9, 652.0], [5.0, 658.0], [5.1, 662.0], [5.2, 668.0], [5.3, 669.0], [5.4, 674.0], [5.5, 681.0], [5.6, 685.0], [5.7, 687.0], [5.8, 687.0], [5.9, 692.0], [6.0, 700.0], [6.1, 713.0], [6.2, 715.0], [6.3, 719.0], [6.4, 721.0], [6.5, 722.0], [6.6, 728.0], [6.7, 732.0], [6.8, 739.0], [6.9, 744.0], [7.0, 750.0], [7.1, 758.0], [7.2, 760.0], [7.3, 762.0], [7.4, 775.0], [7.5, 777.0], [7.6, 781.0], [7.7, 784.0], [7.8, 793.0], [7.9, 797.0], [8.0, 810.0], [8.1, 815.0], [8.2, 822.0], [8.3, 827.0], [8.4, 832.0], [8.5, 833.0], [8.6, 840.0], [8.7, 842.0], [8.8, 851.0], [8.9, 865.0], [9.0, 872.0], [9.1, 876.0], [9.2, 877.0], [9.3, 882.0], [9.4, 886.0], [9.5, 892.0], [9.6, 898.0], [9.7, 908.0], [9.8, 914.0], [9.9, 923.0], [10.0, 930.0], [10.1, 936.0], [10.2, 937.0], [10.3, 947.0], [10.4, 948.0], [10.5, 952.0], [10.6, 955.0], [10.7, 972.0], [10.8, 973.0], [10.9, 979.0], [11.0, 987.0], [11.1, 992.0], [11.2, 995.0], [11.3, 1000.0], [11.4, 1004.0], [11.5, 1007.0], [11.6, 1008.0], [11.7, 1015.0], [11.8, 1020.0], [11.9, 1031.0], [12.0, 1041.0], [12.1, 1047.0], [12.2, 1055.0], [12.3, 1057.0], [12.4, 1065.0], [12.5, 1068.0], [12.6, 1077.0], [12.7, 1077.0], [12.8, 1080.0], [12.9, 1081.0], [13.0, 1088.0], [13.1, 1089.0], [13.2, 1097.0], [13.3, 1106.0], [13.4, 1128.0], [13.5, 1132.0], [13.6, 1138.0], [13.7, 1142.0], [13.8, 1152.0], [13.9, 1162.0], [14.0, 1165.0], [14.1, 1173.0], [14.2, 1182.0], [14.3, 1184.0], [14.4, 1188.0], [14.5, 1196.0], [14.6, 1203.0], [14.7, 1207.0], [14.8, 1214.0], [14.9, 1246.0], [15.0, 1246.0], [15.1, 1252.0], [15.2, 1262.0], [15.3, 1269.0], [15.4, 1276.0], [15.5, 1278.0], [15.6, 1287.0], [15.7, 1311.0], [15.8, 1313.0], [15.9, 1313.0], [16.0, 1323.0], [16.1, 1327.0], [16.2, 1332.0], [16.3, 1362.0], [16.4, 1362.0], [16.5, 1365.0], [16.6, 1377.0], [16.7, 1401.0], [16.8, 1401.0], [16.9, 1403.0], [17.0, 1405.0], [17.1, 1406.0], [17.2, 1407.0], [17.3, 1425.0], [17.4, 1426.0], [17.5, 1428.0], [17.6, 1429.0], [17.7, 1432.0], [17.8, 1433.0], [17.9, 1434.0], [18.0, 1450.0], [18.1, 1471.0], [18.2, 1483.0], [18.3, 1487.0], [18.4, 1488.0], [18.5, 1508.0], [18.6, 1509.0], [18.7, 1516.0], [18.8, 1518.0], [18.9, 1518.0], [19.0, 1530.0], [19.1, 1532.0], [19.2, 1533.0], [19.3, 1548.0], [19.4, 1553.0], [19.5, 1556.0], [19.6, 1557.0], [19.7, 1562.0], [19.8, 1562.0], [19.9, 1562.0], [20.0, 1571.0], [20.1, 1571.0], [20.2, 1575.0], [20.3, 1575.0], [20.4, 1584.0], [20.5, 1584.0], [20.6, 1593.0], [20.7, 1612.0], [20.8, 1616.0], [20.9, 1618.0], [21.0, 1632.0], [21.1, 1638.0], [21.2, 1639.0], [21.3, 1639.0], [21.4, 1639.0], [21.5, 1639.0], [21.6, 1640.0], [21.7, 1684.0], [21.8, 1687.0], [21.9, 1688.0], [22.0, 1691.0], [22.1, 1692.0], [22.2, 1693.0], [22.3, 1711.0], [22.4, 1711.0], [22.5, 1712.0], [22.6, 1716.0], [22.7, 1718.0], [22.8, 1718.0], [22.9, 1722.0], [23.0, 1724.0], [23.1, 1762.0], [23.2, 1766.0], [23.3, 1767.0], [23.4, 1767.0], [23.5, 1788.0], [23.6, 1789.0], [23.7, 1796.0], [23.8, 1796.0], [23.9, 1796.0], [24.0, 1797.0], [24.1, 1797.0], [24.2, 1799.0], [24.3, 1799.0], [24.4, 1806.0], [24.5, 1806.0], [24.6, 1807.0], [24.7, 1809.0], [24.8, 1809.0], [24.9, 1809.0], [25.0, 1810.0], [25.1, 1812.0], [25.2, 1821.0], [25.3, 1822.0], [25.4, 1822.0], [25.5, 1825.0], [25.6, 1825.0], [25.7, 1825.0], [25.8, 1843.0], [25.9, 1850.0], [26.0, 1852.0], [26.1, 1870.0], [26.2, 1884.0], [26.3, 1885.0], [26.4, 1907.0], [26.5, 1914.0], [26.6, 1967.0], [26.7, 1969.0], [26.8, 1970.0], [26.9, 1970.0], [27.0, 1971.0], [27.1, 1971.0], [27.2, 1983.0], [27.3, 1984.0], [27.4, 1985.0], [27.5, 1986.0], [27.6, 1986.0], [27.7, 1986.0], [27.8, 1987.0], [27.9, 2005.0], [28.0, 2007.0], [28.1, 2025.0], [28.2, 2027.0], [28.3, 2027.0], [28.4, 2031.0], [28.5, 2035.0], [28.6, 2036.0], [28.7, 2121.0], [28.8, 2122.0], [28.9, 2122.0], [29.0, 2122.0], [29.1, 2148.0], [29.2, 2148.0], [29.3, 2149.0], [29.4, 2149.0], [29.5, 2150.0], [29.6, 2152.0], [29.7, 2159.0], [29.8, 2174.0], [29.9, 2175.0], [30.0, 2175.0], [30.1, 2175.0], [30.2, 2176.0], [30.3, 2177.0], [30.4, 2184.0], [30.5, 2184.0], [30.6, 2186.0], [30.7, 2191.0], [30.8, 2193.0], [30.9, 2193.0], [31.0, 2194.0], [31.1, 2194.0], [31.2, 2199.0], [31.3, 2199.0], [31.4, 2202.0], [31.5, 2203.0], [31.6, 2204.0], [31.7, 2217.0], [31.8, 2218.0], [31.9, 2219.0], [32.0, 2220.0], [32.1, 2221.0], [32.2, 2227.0], [32.3, 2227.0], [32.4, 2228.0], [32.5, 2229.0], [32.6, 2229.0], [32.7, 2236.0], [32.8, 2251.0], [32.9, 2251.0], [33.0, 2252.0], [33.1, 2252.0], [33.2, 2252.0], [33.3, 2257.0], [33.4, 2264.0], [33.5, 2297.0], [33.6, 2297.0], [33.7, 2299.0], [33.8, 2314.0], [33.9, 2315.0], [34.0, 2315.0], [34.1, 2316.0], [34.2, 2316.0], [34.3, 2329.0], [34.4, 2329.0], [34.5, 2358.0], [34.6, 2358.0], [34.7, 2359.0], [34.8, 2360.0], [34.9, 2372.0], [35.0, 2379.0], [35.1, 2403.0], [35.2, 2472.0], [35.3, 2475.0], [35.4, 2475.0], [35.5, 2476.0], [35.6, 2476.0], [35.7, 2476.0], [35.8, 2477.0], [35.9, 2478.0], [36.0, 2525.0], [36.1, 2526.0], [36.2, 2527.0], [36.3, 2527.0], [36.4, 2529.0], [36.5, 2529.0], [36.6, 2567.0], [36.7, 2605.0], [36.8, 2606.0], [36.9, 2607.0], [37.0, 2630.0], [37.1, 2631.0], [37.2, 2632.0], [37.3, 2632.0], [37.4, 2633.0], [37.5, 2684.0], [37.6, 2711.0], [37.7, 2753.0], [37.8, 2779.0], [37.9, 2779.0], [38.0, 2780.0], [38.1, 2781.0], [38.2, 2806.0], [38.3, 2806.0], [38.4, 2807.0], [38.5, 2807.0], [38.6, 2807.0], [38.7, 2808.0], [38.8, 2808.0], [38.9, 2808.0], [39.0, 2808.0], [39.1, 2809.0], [39.2, 2809.0], [39.3, 2811.0], [39.4, 2811.0], [39.5, 2811.0], [39.6, 2812.0], [39.7, 2812.0], [39.8, 2812.0], [39.9, 2813.0], [40.0, 2814.0], [40.1, 2815.0], [40.2, 2816.0], [40.3, 2816.0], [40.4, 2816.0], [40.5, 2820.0], [40.6, 2820.0], [40.7, 2821.0], [40.8, 2821.0], [40.9, 2822.0], [41.0, 2822.0], [41.1, 2822.0], [41.2, 2823.0], [41.3, 2876.0], [41.4, 2877.0], [41.5, 2877.0], [41.6, 2883.0], [41.7, 2883.0], [41.8, 2885.0], [41.9, 2885.0], [42.0, 2886.0], [42.1, 2886.0], [42.2, 2886.0], [42.3, 2887.0], [42.4, 2891.0], [42.5, 2891.0], [42.6, 2891.0], [42.7, 2891.0], [42.8, 2893.0], [42.9, 2896.0], [43.0, 2898.0], [43.1, 2898.0], [43.2, 2902.0], [43.3, 2903.0], [43.4, 2904.0], [43.5, 2906.0], [43.6, 2906.0], [43.7, 2906.0], [43.8, 2906.0], [43.9, 2907.0], [44.0, 2907.0], [44.1, 2908.0], [44.2, 2908.0], [44.3, 2908.0], [44.4, 2935.0], [44.5, 2947.0], [44.6, 2948.0], [44.7, 2981.0], [44.8, 2982.0], [44.9, 2983.0], [45.0, 2983.0], [45.1, 3010.0], [45.2, 3013.0], [45.3, 3014.0], [45.4, 3025.0], [45.5, 3034.0], [45.6, 3035.0], [45.7, 3038.0], [45.8, 3038.0], [45.9, 3039.0], [46.0, 3046.0], [46.1, 3051.0], [46.2, 3052.0], [46.3, 3053.0], [46.4, 3056.0], [46.5, 3056.0], [46.6, 3057.0], [46.7, 3057.0], [46.8, 3057.0], [46.9, 3057.0], [47.0, 3057.0], [47.1, 3058.0], [47.2, 3059.0], [47.3, 3060.0], [47.4, 3060.0], [47.5, 3060.0], [47.6, 3061.0], [47.7, 3061.0], [47.8, 3063.0], [47.9, 3083.0], [48.0, 3084.0], [48.1, 3085.0], [48.2, 3086.0], [48.3, 3087.0], [48.4, 3088.0], [48.5, 3088.0], [48.6, 3088.0], [48.7, 3089.0], [48.8, 3089.0], [48.9, 3090.0], [49.0, 3092.0], [49.1, 3092.0], [49.2, 3096.0], [49.3, 3110.0], [49.4, 3113.0], [49.5, 3164.0], [49.6, 3180.0], [49.7, 3181.0], [49.8, 3202.0], [49.9, 3203.0], [50.0, 3219.0], [50.1, 3232.0], [50.2, 3250.0], [50.3, 3250.0], [50.4, 3251.0], [50.5, 3252.0], [50.6, 3252.0], [50.7, 3253.0], [50.8, 3253.0], [50.9, 3255.0], [51.0, 3255.0], [51.1, 3257.0], [51.2, 3257.0], [51.3, 3264.0], [51.4, 3265.0], [51.5, 3265.0], [51.6, 3266.0], [51.7, 3267.0], [51.8, 3268.0], [51.9, 3269.0], [52.0, 3271.0], [52.1, 3272.0], [52.2, 3272.0], [52.3, 3272.0], [52.4, 3273.0], [52.5, 3273.0], [52.6, 3274.0], [52.7, 3274.0], [52.8, 3274.0], [52.9, 3274.0], [53.0, 3274.0], [53.1, 3276.0], [53.2, 3280.0], [53.3, 3280.0], [53.4, 3280.0], [53.5, 3281.0], [53.6, 3281.0], [53.7, 3282.0], [53.8, 3289.0], [53.9, 3296.0], [54.0, 3299.0], [54.1, 3300.0], [54.2, 3300.0], [54.3, 3300.0], [54.4, 3301.0], [54.5, 3302.0], [54.6, 3302.0], [54.7, 3302.0], [54.8, 3302.0], [54.9, 3302.0], [55.0, 3304.0], [55.1, 3304.0], [55.2, 3305.0], [55.3, 3305.0], [55.4, 3305.0], [55.5, 3305.0], [55.6, 3306.0], [55.7, 3306.0], [55.8, 3307.0], [55.9, 3307.0], [56.0, 3308.0], [56.1, 3309.0], [56.2, 3309.0], [56.3, 3310.0], [56.4, 3310.0], [56.5, 3337.0], [56.6, 3338.0], [56.7, 3345.0], [56.8, 3353.0], [56.9, 3362.0], [57.0, 3362.0], [57.1, 3368.0], [57.2, 3372.0], [57.3, 3374.0], [57.4, 3374.0], [57.5, 3375.0], [57.6, 3375.0], [57.7, 3376.0], [57.8, 3405.0], [57.9, 3411.0], [58.0, 3412.0], [58.1, 3412.0], [58.2, 3412.0], [58.3, 3413.0], [58.4, 3413.0], [58.5, 3413.0], [58.6, 3413.0], [58.7, 3414.0], [58.8, 3414.0], [58.9, 3416.0], [59.0, 3417.0], [59.1, 3419.0], [59.2, 3419.0], [59.3, 3420.0], [59.4, 3431.0], [59.5, 3431.0], [59.6, 3432.0], [59.7, 3432.0], [59.8, 3433.0], [59.9, 3433.0], [60.0, 3435.0], [60.1, 3435.0], [60.2, 3437.0], [60.3, 3450.0], [60.4, 3451.0], [60.5, 3451.0], [60.6, 3452.0], [60.7, 3468.0], [60.8, 3474.0], [60.9, 3475.0], [61.0, 3478.0], [61.1, 3479.0], [61.2, 3479.0], [61.3, 3479.0], [61.4, 3479.0], [61.5, 3480.0], [61.6, 3480.0], [61.7, 3480.0], [61.8, 3480.0], [61.9, 3481.0], [62.0, 3481.0], [62.1, 3482.0], [62.2, 3483.0], [62.3, 3483.0], [62.4, 3483.0], [62.5, 3492.0], [62.6, 3494.0], [62.7, 3495.0], [62.8, 3496.0], [62.9, 3496.0], [63.0, 3499.0], [63.1, 3562.0], [63.2, 3568.0], [63.3, 3572.0], [63.4, 3575.0], [63.5, 3575.0], [63.6, 3575.0], [63.7, 3577.0], [63.8, 3577.0], [63.9, 3578.0], [64.0, 3585.0], [64.1, 3585.0], [64.2, 3585.0], [64.3, 3586.0], [64.4, 3586.0], [64.5, 3586.0], [64.6, 3586.0], [64.7, 3599.0], [64.8, 3599.0], [64.9, 3600.0], [65.0, 3600.0], [65.1, 3601.0], [65.2, 3622.0], [65.3, 3623.0], [65.4, 3625.0], [65.5, 3625.0], [65.6, 3627.0], [65.7, 3627.0], [65.8, 3644.0], [65.9, 3674.0], [66.0, 3685.0], [66.1, 3716.0], [66.2, 3727.0], [66.3, 3752.0], [66.4, 3775.0], [66.5, 3782.0], [66.6, 3784.0], [66.7, 3784.0], [66.8, 3784.0], [66.9, 3784.0], [67.0, 3785.0], [67.1, 3785.0], [67.2, 3785.0], [67.3, 3785.0], [67.4, 3786.0], [67.5, 3786.0], [67.6, 3815.0], [67.7, 3824.0], [67.8, 3835.0], [67.9, 3837.0], [68.0, 3838.0], [68.1, 3839.0], [68.2, 3839.0], [68.3, 3839.0], [68.4, 3840.0], [68.5, 3840.0], [68.6, 3841.0], [68.7, 3868.0], [68.8, 3878.0], [68.9, 3948.0], [69.0, 3964.0], [69.1, 3987.0], [69.2, 3988.0], [69.3, 4000.0], [69.4, 4030.0], [69.5, 4077.0], [69.6, 4077.0], [69.7, 4078.0], [69.8, 4078.0], [69.9, 4079.0], [70.0, 4079.0], [70.1, 4079.0], [70.2, 4081.0], [70.3, 4172.0], [70.4, 4197.0], [70.5, 4267.0], [70.6, 4268.0], [70.7, 4268.0], [70.8, 4269.0], [70.9, 4269.0], [71.0, 4269.0], [71.1, 4271.0], [71.2, 4273.0], [71.3, 4273.0], [71.4, 4274.0], [71.5, 4274.0], [71.6, 4276.0], [71.7, 4276.0], [71.8, 4277.0], [71.9, 4291.0], [72.0, 4327.0], [72.1, 4354.0], [72.2, 4370.0], [72.3, 4371.0], [72.4, 4371.0], [72.5, 4371.0], [72.6, 4372.0], [72.7, 4372.0], [72.8, 4372.0], [72.9, 4372.0], [73.0, 4373.0], [73.1, 4373.0], [73.2, 4388.0], [73.3, 4407.0], [73.4, 4423.0], [73.5, 4433.0], [73.6, 4438.0], [73.7, 4478.0], [73.8, 4499.0], [73.9, 4502.0], [74.0, 4526.0], [74.1, 4555.0], [74.2, 4557.0], [74.3, 4557.0], [74.4, 4557.0], [74.5, 4557.0], [74.6, 4558.0], [74.7, 4558.0], [74.8, 4558.0], [74.9, 4559.0], [75.0, 4559.0], [75.1, 4560.0], [75.2, 4620.0], [75.3, 4622.0], [75.4, 4625.0], [75.5, 4626.0], [75.6, 4627.0], [75.7, 4627.0], [75.8, 4635.0], [75.9, 4635.0], [76.0, 4635.0], [76.1, 4636.0], [76.2, 4636.0], [76.3, 4642.0], [76.4, 4645.0], [76.5, 4646.0], [76.6, 4646.0], [76.7, 4646.0], [76.8, 4647.0], [76.9, 4647.0], [77.0, 4666.0], [77.1, 4675.0], [77.2, 4675.0], [77.3, 4676.0], [77.4, 4676.0], [77.5, 4677.0], [77.6, 4677.0], [77.7, 4678.0], [77.8, 4679.0], [77.9, 4679.0], [78.0, 4682.0], [78.1, 4682.0], [78.2, 4682.0], [78.3, 4683.0], [78.4, 4710.0], [78.5, 4713.0], [78.6, 4724.0], [78.7, 4732.0], [78.8, 4753.0], [78.9, 4754.0], [79.0, 4755.0], [79.1, 4755.0], [79.2, 4755.0], [79.3, 4755.0], [79.4, 4755.0], [79.5, 4756.0], [79.6, 4756.0], [79.7, 4756.0], [79.8, 4773.0], [79.9, 4781.0], [80.0, 4781.0], [80.1, 4782.0], [80.2, 4782.0], [80.3, 4783.0], [80.4, 4784.0], [80.5, 4785.0], [80.6, 4785.0], [80.7, 4797.0], [80.8, 4798.0], [80.9, 4798.0], [81.0, 4799.0], [81.1, 4802.0], [81.2, 4802.0], [81.3, 4803.0], [81.4, 4803.0], [81.5, 4804.0], [81.6, 4804.0], [81.7, 4805.0], [81.8, 4805.0], [81.9, 4806.0], [82.0, 4806.0], [82.1, 4807.0], [82.2, 4809.0], [82.3, 4811.0], [82.4, 4811.0], [82.5, 4812.0], [82.6, 4812.0], [82.7, 4813.0], [82.8, 4814.0], [82.9, 4815.0], [83.0, 4827.0], [83.1, 4827.0], [83.2, 4827.0], [83.3, 4828.0], [83.4, 4828.0], [83.5, 4828.0], [83.6, 4829.0], [83.7, 4830.0], [83.8, 4860.0], [83.9, 4861.0], [84.0, 4862.0], [84.1, 4863.0], [84.2, 4864.0], [84.3, 4865.0], [84.4, 4866.0], [84.5, 4866.0], [84.6, 4866.0], [84.7, 4868.0], [84.8, 4869.0], [84.9, 4870.0], [85.0, 4892.0], [85.1, 4893.0], [85.2, 4894.0], [85.3, 4894.0], [85.4, 4895.0], [85.5, 4896.0], [85.6, 4896.0], [85.7, 4896.0], [85.8, 4896.0], [85.9, 4898.0], [86.0, 4898.0], [86.1, 4899.0], [86.2, 4902.0], [86.3, 4907.0], [86.4, 4908.0], [86.5, 4909.0], [86.6, 4910.0], [86.7, 4910.0], [86.8, 4911.0], [86.9, 4911.0], [87.0, 4911.0], [87.1, 4913.0], [87.2, 4913.0], [87.3, 4972.0], [87.4, 4972.0], [87.5, 4973.0], [87.6, 4974.0], [87.7, 4974.0], [87.8, 4975.0], [87.9, 4975.0], [88.0, 4976.0], [88.1, 4976.0], [88.2, 4976.0], [88.3, 4977.0], [88.4, 4978.0], [88.5, 5032.0], [88.6, 5034.0], [88.7, 5034.0], [88.8, 5034.0], [88.9, 5034.0], [89.0, 5035.0], [89.1, 5035.0], [89.2, 5035.0], [89.3, 5036.0], [89.4, 5056.0], [89.5, 5057.0], [89.6, 5057.0], [89.7, 5057.0], [89.8, 5058.0], [89.9, 5058.0], [90.0, 5059.0], [90.1, 5059.0], [90.2, 5060.0], [90.3, 5060.0], [90.4, 5060.0], [90.5, 5061.0], [90.6, 5062.0], [90.7, 5062.0], [90.8, 5069.0], [90.9, 5081.0], [91.0, 5086.0], [91.1, 5110.0], [91.2, 5138.0], [91.3, 5139.0], [91.4, 5139.0], [91.5, 5140.0], [91.6, 5142.0], [91.7, 5142.0], [91.8, 5142.0], [91.9, 5143.0], [92.0, 5144.0], [92.1, 5144.0], [92.2, 5144.0], [92.3, 5147.0], [92.4, 5159.0], [92.5, 5160.0], [92.6, 5160.0], [92.7, 5161.0], [92.8, 5161.0], [92.9, 5161.0], [93.0, 5161.0], [93.1, 5162.0], [93.2, 5162.0], [93.3, 5163.0], [93.4, 5164.0], [93.5, 5183.0], [93.6, 5183.0], [93.7, 5195.0], [93.8, 5195.0], [93.9, 5198.0], [94.0, 5216.0], [94.1, 5217.0], [94.2, 5217.0], [94.3, 5218.0], [94.4, 5218.0], [94.5, 5218.0], [94.6, 5218.0], [94.7, 5219.0], [94.8, 5220.0], [94.9, 5220.0], [95.0, 5221.0], [95.1, 5227.0], [95.2, 5232.0], [95.3, 5232.0], [95.4, 5233.0], [95.5, 5234.0], [95.6, 5234.0], [95.7, 5235.0], [95.8, 5237.0], [95.9, 5254.0], [96.0, 5256.0], [96.1, 5257.0], [96.2, 5257.0], [96.3, 5258.0], [96.4, 5258.0], [96.5, 5258.0], [96.6, 5258.0], [96.7, 5259.0], [96.8, 5260.0], [96.9, 5296.0], [97.0, 5432.0], [97.1, 5434.0], [97.2, 5434.0], [97.3, 5435.0], [97.4, 5436.0], [97.5, 5437.0], [97.6, 5438.0], [97.7, 5438.0], [97.8, 5439.0], [97.9, 5439.0], [98.0, 5441.0], [98.1, 5443.0], [98.2, 5935.0], [98.3, 5935.0], [98.4, 5936.0], [98.5, 5939.0], [98.6, 5943.0], [98.7, 5943.0], [98.8, 5944.0], [98.9, 5944.0], [99.0, 5944.0], [99.1, 5945.0], [99.2, 5945.0], [99.3, 5945.0], [99.4, 6667.0], [99.5, 6972.0], [99.6, 6975.0], [99.7, 7120.0], [99.8, 7122.0], [99.9, 7124.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 132.0, "series": [{"data": [[600.0, 69.0], [700.0, 48.0], [800.0, 43.0], [900.0, 41.0], [1000.0, 51.0], [1100.0, 33.0], [1200.0, 28.0], [1300.0, 25.0], [1400.0, 45.0], [1500.0, 55.0], [1600.0, 41.0], [1700.0, 51.0], [1800.0, 52.0], [1900.0, 36.0], [2000.0, 21.0], [2100.0, 67.0], [2200.0, 62.0], [2300.0, 32.0], [2400.0, 22.0], [2500.0, 19.0], [2600.0, 22.0], [2700.0, 14.0], [2800.0, 126.0], [2900.0, 50.0], [3000.0, 105.0], [3100.0, 13.0], [3200.0, 108.0], [3300.0, 93.0], [3400.0, 132.0], [3500.0, 46.0], [3700.0, 36.0], [3600.0, 31.0], [3800.0, 33.0], [3900.0, 12.0], [4000.0, 24.0], [4100.0, 4.0], [4300.0, 34.0], [4200.0, 38.0], [4400.0, 14.0], [4600.0, 80.0], [4500.0, 33.0], [4700.0, 68.0], [4800.0, 130.0], [4900.0, 58.0], [5000.0, 64.0], [5100.0, 73.0], [5200.0, 75.0], [5400.0, 31.0], [5900.0, 31.0], [6600.0, 1.0], [6800.0, 2.0], [6900.0, 3.0], [7100.0, 10.0], [500.0, 82.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 103.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2414.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 103.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2414.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 19.501706484641645, "minX": 1.78906206E12, "maxY": 114.63205828779596, "series": [{"data": [[1.78906206E12, 19.501706484641645], [1.78906218E12, 114.63205828779596], [1.78906212E12, 91.36238805970144]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 128 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906218E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 828.6249999999999, "minX": 1.0, "maxY": 5945.0, "series": [{"data": [[2.0, 2559.0], [3.0, 1870.0], [4.0, 1554.75], [5.0, 1548.0], [6.0, 1187.1666666666665], [7.0, 1088.857142857143], [8.0, 1093.7142857142858], [9.0, 1020.75], [10.0, 1018.6666666666667], [11.0, 908.0909090909092], [12.0, 981.0], [13.0, 985.8888888888889], [14.0, 855.7692307692307], [15.0, 880.8333333333333], [16.0, 850.0], [17.0, 923.6363636363635], [18.0, 870.8571428571428], [19.0, 874.5], [20.0, 886.2666666666667], [21.0, 925.9999999999999], [22.0, 971.6666666666666], [23.0, 977.4615384615385], [24.0, 973.4], [25.0, 828.6249999999999], [26.0, 1550.25], [27.0, 885.5999999999999], [28.0, 1261.6666666666665], [29.0, 951.4999999999999], [30.0, 1587.666666666667], [31.0, 1007.2307692307692], [32.0, 1044.3571428571431], [33.0, 1066.769230769231], [34.0, 1112.1538461538462], [35.0, 1290.0], [36.0, 2065.1176470588234], [37.0, 1244.2727272727273], [38.0, 1237.2307692307693], [39.0, 1327.0], [40.0, 1353.9999999999998], [41.0, 2582.4999999999995], [42.0, 1444.909090909091], [43.0, 1444.9166666666667], [44.0, 1507.2777777777778], [45.0, 1507.357142857143], [46.0, 1527.1428571428573], [47.0, 1805.1176470588234], [48.0, 2159.4545454545455], [49.0, 2219.9], [50.0, 1675.3999999999999], [51.0, 1779.4999999999998], [52.0, 1726.6666666666667], [53.0, 1819.1666666666667], [54.0, 1778.3999999999999], [55.0, 1752.2916666666665], [56.0, 1807.3076923076924], [57.0, 1857.25], [58.0, 2121.0666666666666], [59.0, 1952.3846153846155], [60.0, 2296.470588235294], [62.0, 2060.7857142857147], [63.0, 2041.1875], [64.0, 3340.1785714285706], [65.0, 2114.8823529411757], [66.0, 2130.1764705882356], [68.0, 2162.833333333333], [69.0, 2202.1111111111104], [71.0, 2407.95], [72.0, 2524.1052631578946], [74.0, 2506.0909090909095], [75.0, 2462.5499999999997], [77.0, 2556.333333333333], [78.0, 2448.3181818181815], [81.0, 2771.88], [82.0, 2657.2499999999995], [84.0, 2981.629629629629], [86.0, 2943.3846153846157], [87.0, 5944.5], [88.0, 3031.1034482758614], [90.0, 2853.5], [91.0, 4541.333333333333], [89.0, 5944.0], [93.0, 2878.0967741935483], [95.0, 3071.7], [94.0, 4366.0], [92.0, 4681.4], [97.0, 3203.7837837837837], [99.0, 3840.0], [98.0, 4540.0], [96.0, 4892.0], [100.0, 3350.454545454546], [102.0, 3418.975000000001], [101.0, 3839.0], [105.0, 3282.970588235294], [107.0, 4809.692307692308], [104.0, 5945.0], [108.0, 3547.6585365853666], [111.0, 3849.388888888889], [114.0, 4407.0], [115.0, 4156.720930232557], [117.0, 4362.729166666668], [120.0, 4423.0], [121.0, 3954.152173913044], [124.0, 4271.5], [127.0, 4435.0], [128.0, 4401.770737327189], [1.0, 4539.0]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[88.07270560190705, 3105.2165276122337]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 128.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 771.5666666666667, "minX": 1.78906206E12, "maxY": 6448.75, "series": [{"data": [[1.78906206E12, 1128.05], [1.78906218E12, 2113.883333333333], [1.78906212E12, 6448.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78906206E12, 771.5666666666667], [1.78906218E12, 1445.7], [1.78906212E12, 4410.833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906218E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 724.3208191126279, "minX": 1.78906206E12, "maxY": 4509.932604735884, "series": [{"data": [[1.78906206E12, 724.3208191126279], [1.78906218E12, 4509.932604735884], [1.78906212E12, 3061.2841791044802]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906218E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 724.2593856655291, "minX": 1.78906206E12, "maxY": 4509.916211293258, "series": [{"data": [[1.78906206E12, 724.2593856655291], [1.78906218E12, 4509.916211293258], [1.78906212E12, 3061.262089552234]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906218E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.08358208955223884, "minX": 1.78906206E12, "maxY": 0.18088737201365188, "series": [{"data": [[1.78906206E12, 0.18088737201365188], [1.78906218E12, 0.10382513661202188], [1.78906212E12, 0.08358208955223884]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906218E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 518.0, "minX": 1.78906206E12, "maxY": 619.0, "series": [{"data": [[1.78906206E12, 619.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78906206E12, 518.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78906206E12, 612.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78906206E12, 619.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78906206E12, 569.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78906206E12, 615.8]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906206E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 536.0, "minX": 1.0, "maxY": 5937.5, "series": [{"data": [[18.0, 569.5], [11.0, 536.0], [22.0, 581.0], [3.0, 562.0], [6.0, 575.5], [27.0, 605.0], [14.0, 537.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 3087.5], [32.0, 3303.5], [2.0, 4435.0], [34.0, 3274.5], [37.0, 2166.5], [36.0, 2659.5], [39.0, 4371.0], [41.0, 2779.0], [40.0, 3784.0], [43.0, 4500.0], [42.0, 4620.5], [45.0, 4682.0], [46.0, 4557.0], [47.0, 4677.0], [48.0, 4755.0], [49.0, 5034.0], [50.0, 4865.0], [51.0, 5195.0], [55.0, 2906.0], [54.0, 4896.0], [59.0, 4972.0], [4.0, 3252.0], [64.0, 5937.5], [5.0, 4507.0], [1.0, 4415.0], [17.0, 2218.0], [18.0, 688.5], [20.0, 2630.0], [22.0, 2152.0], [23.0, 1450.0], [24.0, 2476.0], [25.0, 1619.5], [26.0, 1789.0], [27.0, 1148.0], [28.0, 1663.5], [29.0, 1114.5], [30.0, 1462.0], [31.0, 1899.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 64.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 536.0, "minX": 1.0, "maxY": 5937.5, "series": [{"data": [[18.0, 569.5], [11.0, 536.0], [22.0, 581.0], [3.0, 562.0], [6.0, 575.5], [27.0, 605.0], [14.0, 537.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 3087.5], [32.0, 3303.5], [2.0, 4435.0], [34.0, 3274.5], [37.0, 2166.5], [36.0, 2659.5], [39.0, 4371.0], [41.0, 2778.0], [40.0, 3784.0], [43.0, 4500.0], [42.0, 4620.5], [45.0, 4682.0], [46.0, 4557.0], [47.0, 4677.0], [48.0, 4755.0], [49.0, 5034.0], [50.0, 4865.0], [51.0, 5195.0], [55.0, 2906.0], [54.0, 4896.0], [59.0, 4972.0], [4.0, 3252.0], [64.0, 5937.5], [5.0, 4507.0], [1.0, 4414.5], [17.0, 2218.0], [18.0, 688.5], [20.0, 2630.0], [22.0, 2152.0], [23.0, 1450.0], [24.0, 2476.0], [25.0, 1619.5], [26.0, 1789.0], [27.0, 1148.0], [28.0, 1663.5], [29.0, 1114.5], [30.0, 1462.0], [31.0, 1899.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 64.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.4, "minX": 1.78906206E12, "maxY": 29.533333333333335, "series": [{"data": [[1.78906206E12, 5.4], [1.78906218E12, 7.016666666666667], [1.78906212E12, 29.533333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906218E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.78906206E12, "maxY": 27.916666666666668, "series": [{"data": [[1.78906206E12, 4.883333333333334], [1.78906218E12, 9.033333333333333], [1.78906212E12, 27.916666666666668]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78906218E12, 0.11666666666666667]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906218E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.78906206E12, "maxY": 27.916666666666668, "series": [{"data": [[1.78906206E12, 1.7166666666666666]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78906206E12, 3.1666666666666665], [1.78906218E12, 9.15], [1.78906212E12, 27.916666666666668]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906218E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.78906206E12, "maxY": 27.916666666666668, "series": [{"data": [[1.78906206E12, 1.7166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78906206E12, 3.1666666666666665], [1.78906218E12, 9.15], [1.78906212E12, 27.916666666666668]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906218E12, "title": "Total Transactions Per Second"}},
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

