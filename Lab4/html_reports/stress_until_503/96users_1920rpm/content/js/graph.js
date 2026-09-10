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
        data: {"result": {"minY": 520.0, "minX": 0.0, "maxY": 4533.0, "series": [{"data": [[0.0, 520.0], [0.1, 523.0], [0.2, 524.0], [0.3, 527.0], [0.4, 531.0], [0.5, 535.0], [0.6, 537.0], [0.7, 542.0], [0.8, 544.0], [0.9, 546.0], [1.0, 550.0], [1.1, 551.0], [1.2, 553.0], [1.3, 554.0], [1.4, 559.0], [1.5, 561.0], [1.6, 562.0], [1.7, 563.0], [1.8, 567.0], [1.9, 570.0], [2.0, 571.0], [2.1, 575.0], [2.2, 578.0], [2.3, 581.0], [2.4, 583.0], [2.5, 584.0], [2.6, 586.0], [2.7, 586.0], [2.8, 587.0], [2.9, 588.0], [3.0, 588.0], [3.1, 589.0], [3.2, 590.0], [3.3, 593.0], [3.4, 601.0], [3.5, 605.0], [3.6, 608.0], [3.7, 615.0], [3.8, 617.0], [3.9, 618.0], [4.0, 620.0], [4.1, 623.0], [4.2, 624.0], [4.3, 626.0], [4.4, 630.0], [4.5, 631.0], [4.6, 638.0], [4.7, 639.0], [4.8, 643.0], [4.9, 647.0], [5.0, 650.0], [5.1, 653.0], [5.2, 657.0], [5.3, 661.0], [5.4, 671.0], [5.5, 673.0], [5.6, 675.0], [5.7, 681.0], [5.8, 683.0], [5.9, 688.0], [6.0, 691.0], [6.1, 696.0], [6.2, 701.0], [6.3, 709.0], [6.4, 712.0], [6.5, 716.0], [6.6, 720.0], [6.7, 726.0], [6.8, 732.0], [6.9, 739.0], [7.0, 741.0], [7.1, 743.0], [7.2, 745.0], [7.3, 752.0], [7.4, 754.0], [7.5, 758.0], [7.6, 759.0], [7.7, 772.0], [7.8, 777.0], [7.9, 779.0], [8.0, 784.0], [8.1, 788.0], [8.2, 794.0], [8.3, 797.0], [8.4, 801.0], [8.5, 803.0], [8.6, 808.0], [8.7, 822.0], [8.8, 825.0], [8.9, 828.0], [9.0, 830.0], [9.1, 837.0], [9.2, 840.0], [9.3, 851.0], [9.4, 852.0], [9.5, 859.0], [9.6, 862.0], [9.7, 875.0], [9.8, 878.0], [9.9, 881.0], [10.0, 883.0], [10.1, 884.0], [10.2, 890.0], [10.3, 892.0], [10.4, 896.0], [10.5, 901.0], [10.6, 902.0], [10.7, 904.0], [10.8, 911.0], [10.9, 913.0], [11.0, 915.0], [11.1, 917.0], [11.2, 922.0], [11.3, 929.0], [11.4, 938.0], [11.5, 938.0], [11.6, 946.0], [11.7, 949.0], [11.8, 950.0], [11.9, 953.0], [12.0, 959.0], [12.1, 961.0], [12.2, 963.0], [12.3, 966.0], [12.4, 971.0], [12.5, 971.0], [12.6, 972.0], [12.7, 972.0], [12.8, 979.0], [12.9, 983.0], [13.0, 984.0], [13.1, 987.0], [13.2, 988.0], [13.3, 989.0], [13.4, 991.0], [13.5, 996.0], [13.6, 1001.0], [13.7, 1005.0], [13.8, 1008.0], [13.9, 1010.0], [14.0, 1014.0], [14.1, 1016.0], [14.2, 1020.0], [14.3, 1023.0], [14.4, 1024.0], [14.5, 1025.0], [14.6, 1029.0], [14.7, 1031.0], [14.8, 1034.0], [14.9, 1035.0], [15.0, 1037.0], [15.1, 1037.0], [15.2, 1039.0], [15.3, 1042.0], [15.4, 1045.0], [15.5, 1045.0], [15.6, 1050.0], [15.7, 1051.0], [15.8, 1053.0], [15.9, 1053.0], [16.0, 1061.0], [16.1, 1063.0], [16.2, 1065.0], [16.3, 1067.0], [16.4, 1070.0], [16.5, 1074.0], [16.6, 1075.0], [16.7, 1076.0], [16.8, 1082.0], [16.9, 1085.0], [17.0, 1093.0], [17.1, 1099.0], [17.2, 1107.0], [17.3, 1110.0], [17.4, 1115.0], [17.5, 1119.0], [17.6, 1134.0], [17.7, 1135.0], [17.8, 1149.0], [17.9, 1154.0], [18.0, 1163.0], [18.1, 1167.0], [18.2, 1174.0], [18.3, 1175.0], [18.4, 1177.0], [18.5, 1178.0], [18.6, 1181.0], [18.7, 1183.0], [18.8, 1193.0], [18.9, 1194.0], [19.0, 1197.0], [19.1, 1205.0], [19.2, 1213.0], [19.3, 1214.0], [19.4, 1217.0], [19.5, 1218.0], [19.6, 1240.0], [19.7, 1247.0], [19.8, 1247.0], [19.9, 1254.0], [20.0, 1255.0], [20.1, 1257.0], [20.2, 1264.0], [20.3, 1267.0], [20.4, 1276.0], [20.5, 1289.0], [20.6, 1294.0], [20.7, 1295.0], [20.8, 1296.0], [20.9, 1305.0], [21.0, 1306.0], [21.1, 1312.0], [21.2, 1314.0], [21.3, 1327.0], [21.4, 1332.0], [21.5, 1346.0], [21.6, 1346.0], [21.7, 1349.0], [21.8, 1349.0], [21.9, 1354.0], [22.0, 1356.0], [22.1, 1366.0], [22.2, 1371.0], [22.3, 1377.0], [22.4, 1382.0], [22.5, 1383.0], [22.6, 1385.0], [22.7, 1389.0], [22.8, 1389.0], [22.9, 1411.0], [23.0, 1413.0], [23.1, 1424.0], [23.2, 1428.0], [23.3, 1446.0], [23.4, 1448.0], [23.5, 1451.0], [23.6, 1459.0], [23.7, 1459.0], [23.8, 1462.0], [23.9, 1466.0], [24.0, 1467.0], [24.1, 1474.0], [24.2, 1475.0], [24.3, 1486.0], [24.4, 1486.0], [24.5, 1488.0], [24.6, 1490.0], [24.7, 1496.0], [24.8, 1513.0], [24.9, 1514.0], [25.0, 1522.0], [25.1, 1522.0], [25.2, 1526.0], [25.3, 1528.0], [25.4, 1529.0], [25.5, 1545.0], [25.6, 1570.0], [25.7, 1577.0], [25.8, 1583.0], [25.9, 1593.0], [26.0, 1594.0], [26.1, 1594.0], [26.2, 1594.0], [26.3, 1596.0], [26.4, 1598.0], [26.5, 1601.0], [26.6, 1604.0], [26.7, 1632.0], [26.8, 1633.0], [26.9, 1637.0], [27.0, 1641.0], [27.1, 1642.0], [27.2, 1645.0], [27.3, 1647.0], [27.4, 1651.0], [27.5, 1651.0], [27.6, 1651.0], [27.7, 1651.0], [27.8, 1655.0], [27.9, 1655.0], [28.0, 1658.0], [28.1, 1659.0], [28.2, 1660.0], [28.3, 1667.0], [28.4, 1667.0], [28.5, 1671.0], [28.6, 1671.0], [28.7, 1674.0], [28.8, 1675.0], [28.9, 1676.0], [29.0, 1677.0], [29.1, 1680.0], [29.2, 1681.0], [29.3, 1683.0], [29.4, 1683.0], [29.5, 1689.0], [29.6, 1689.0], [29.7, 1689.0], [29.8, 1692.0], [29.9, 1699.0], [30.0, 1700.0], [30.1, 1700.0], [30.2, 1709.0], [30.3, 1725.0], [30.4, 1731.0], [30.5, 1742.0], [30.6, 1742.0], [30.7, 1742.0], [30.8, 1746.0], [30.9, 1746.0], [31.0, 1752.0], [31.1, 1753.0], [31.2, 1754.0], [31.3, 1754.0], [31.4, 1755.0], [31.5, 1761.0], [31.6, 1767.0], [31.7, 1767.0], [31.8, 1768.0], [31.9, 1789.0], [32.0, 1790.0], [32.1, 1802.0], [32.2, 1815.0], [32.3, 1826.0], [32.4, 1838.0], [32.5, 1839.0], [32.6, 1842.0], [32.7, 1842.0], [32.8, 1858.0], [32.9, 1858.0], [33.0, 1860.0], [33.1, 1860.0], [33.2, 1862.0], [33.3, 1873.0], [33.4, 1873.0], [33.5, 1874.0], [33.6, 1874.0], [33.7, 1875.0], [33.8, 1876.0], [33.9, 1876.0], [34.0, 1877.0], [34.1, 1878.0], [34.2, 1878.0], [34.3, 1882.0], [34.4, 1882.0], [34.5, 1891.0], [34.6, 1891.0], [34.7, 1917.0], [34.8, 1917.0], [34.9, 1919.0], [35.0, 1929.0], [35.1, 1940.0], [35.2, 1941.0], [35.3, 1941.0], [35.4, 1941.0], [35.5, 1951.0], [35.6, 1962.0], [35.7, 1962.0], [35.8, 1963.0], [35.9, 1963.0], [36.0, 1963.0], [36.1, 1971.0], [36.2, 1972.0], [36.3, 1992.0], [36.4, 1993.0], [36.5, 1993.0], [36.6, 2020.0], [36.7, 2020.0], [36.8, 2022.0], [36.9, 2022.0], [37.0, 2023.0], [37.1, 2024.0], [37.2, 2033.0], [37.3, 2058.0], [37.4, 2066.0], [37.5, 2067.0], [37.6, 2067.0], [37.7, 2078.0], [37.8, 2093.0], [37.9, 2093.0], [38.0, 2095.0], [38.1, 2097.0], [38.2, 2098.0], [38.3, 2100.0], [38.4, 2100.0], [38.5, 2100.0], [38.6, 2101.0], [38.7, 2104.0], [38.8, 2107.0], [38.9, 2114.0], [39.0, 2115.0], [39.1, 2118.0], [39.2, 2119.0], [39.3, 2119.0], [39.4, 2120.0], [39.5, 2121.0], [39.6, 2123.0], [39.7, 2124.0], [39.8, 2125.0], [39.9, 2125.0], [40.0, 2125.0], [40.1, 2127.0], [40.2, 2128.0], [40.3, 2128.0], [40.4, 2131.0], [40.5, 2131.0], [40.6, 2137.0], [40.7, 2140.0], [40.8, 2140.0], [40.9, 2141.0], [41.0, 2142.0], [41.1, 2143.0], [41.2, 2143.0], [41.3, 2143.0], [41.4, 2144.0], [41.5, 2151.0], [41.6, 2152.0], [41.7, 2152.0], [41.8, 2153.0], [41.9, 2153.0], [42.0, 2153.0], [42.1, 2153.0], [42.2, 2154.0], [42.3, 2154.0], [42.4, 2156.0], [42.5, 2156.0], [42.6, 2157.0], [42.7, 2159.0], [42.8, 2170.0], [42.9, 2176.0], [43.0, 2178.0], [43.1, 2179.0], [43.2, 2179.0], [43.3, 2179.0], [43.4, 2179.0], [43.5, 2185.0], [43.6, 2186.0], [43.7, 2187.0], [43.8, 2187.0], [43.9, 2192.0], [44.0, 2196.0], [44.1, 2198.0], [44.2, 2203.0], [44.3, 2203.0], [44.4, 2204.0], [44.5, 2204.0], [44.6, 2205.0], [44.7, 2207.0], [44.8, 2209.0], [44.9, 2209.0], [45.0, 2218.0], [45.1, 2226.0], [45.2, 2226.0], [45.3, 2228.0], [45.4, 2229.0], [45.5, 2229.0], [45.6, 2229.0], [45.7, 2230.0], [45.8, 2239.0], [45.9, 2239.0], [46.0, 2239.0], [46.1, 2240.0], [46.2, 2241.0], [46.3, 2244.0], [46.4, 2245.0], [46.5, 2255.0], [46.6, 2256.0], [46.7, 2257.0], [46.8, 2257.0], [46.9, 2257.0], [47.0, 2260.0], [47.1, 2264.0], [47.2, 2269.0], [47.3, 2269.0], [47.4, 2269.0], [47.5, 2270.0], [47.6, 2270.0], [47.7, 2277.0], [47.8, 2278.0], [47.9, 2278.0], [48.0, 2278.0], [48.1, 2279.0], [48.2, 2279.0], [48.3, 2294.0], [48.4, 2303.0], [48.5, 2322.0], [48.6, 2323.0], [48.7, 2328.0], [48.8, 2328.0], [48.9, 2329.0], [49.0, 2329.0], [49.1, 2332.0], [49.2, 2346.0], [49.3, 2369.0], [49.4, 2369.0], [49.5, 2373.0], [49.6, 2375.0], [49.7, 2379.0], [49.8, 2384.0], [49.9, 2385.0], [50.0, 2390.0], [50.1, 2393.0], [50.2, 2398.0], [50.3, 2398.0], [50.4, 2399.0], [50.5, 2399.0], [50.6, 2400.0], [50.7, 2402.0], [50.8, 2403.0], [50.9, 2408.0], [51.0, 2411.0], [51.1, 2411.0], [51.2, 2411.0], [51.3, 2412.0], [51.4, 2417.0], [51.5, 2418.0], [51.6, 2430.0], [51.7, 2431.0], [51.8, 2431.0], [51.9, 2431.0], [52.0, 2432.0], [52.1, 2432.0], [52.2, 2433.0], [52.3, 2436.0], [52.4, 2437.0], [52.5, 2437.0], [52.6, 2437.0], [52.7, 2437.0], [52.8, 2438.0], [52.9, 2438.0], [53.0, 2439.0], [53.1, 2439.0], [53.2, 2452.0], [53.3, 2454.0], [53.4, 2455.0], [53.5, 2455.0], [53.6, 2455.0], [53.7, 2456.0], [53.8, 2457.0], [53.9, 2457.0], [54.0, 2463.0], [54.1, 2469.0], [54.2, 2471.0], [54.3, 2471.0], [54.4, 2479.0], [54.5, 2480.0], [54.6, 2487.0], [54.7, 2487.0], [54.8, 2487.0], [54.9, 2488.0], [55.0, 2488.0], [55.1, 2488.0], [55.2, 2504.0], [55.3, 2513.0], [55.4, 2514.0], [55.5, 2517.0], [55.6, 2540.0], [55.7, 2544.0], [55.8, 2544.0], [55.9, 2546.0], [56.0, 2553.0], [56.1, 2553.0], [56.2, 2567.0], [56.3, 2568.0], [56.4, 2571.0], [56.5, 2571.0], [56.6, 2575.0], [56.7, 2575.0], [56.8, 2575.0], [56.9, 2576.0], [57.0, 2590.0], [57.1, 2593.0], [57.2, 2605.0], [57.3, 2606.0], [57.4, 2607.0], [57.5, 2612.0], [57.6, 2627.0], [57.7, 2628.0], [57.8, 2630.0], [57.9, 2630.0], [58.0, 2634.0], [58.1, 2636.0], [58.2, 2636.0], [58.3, 2653.0], [58.4, 2658.0], [58.5, 2667.0], [58.6, 2667.0], [58.7, 2667.0], [58.8, 2667.0], [58.9, 2668.0], [59.0, 2668.0], [59.1, 2669.0], [59.2, 2673.0], [59.3, 2674.0], [59.4, 2674.0], [59.5, 2711.0], [59.6, 2711.0], [59.7, 2712.0], [59.8, 2715.0], [59.9, 2716.0], [60.0, 2724.0], [60.1, 2731.0], [60.2, 2732.0], [60.3, 2736.0], [60.4, 2740.0], [60.5, 2741.0], [60.6, 2741.0], [60.7, 2741.0], [60.8, 2741.0], [60.9, 2742.0], [61.0, 2744.0], [61.1, 2769.0], [61.2, 2769.0], [61.3, 2776.0], [61.4, 2776.0], [61.5, 2777.0], [61.6, 2796.0], [61.7, 2799.0], [61.8, 2814.0], [61.9, 2816.0], [62.0, 2817.0], [62.1, 2819.0], [62.2, 2821.0], [62.3, 2827.0], [62.4, 2828.0], [62.5, 2828.0], [62.6, 2828.0], [62.7, 2828.0], [62.8, 2829.0], [62.9, 2829.0], [63.0, 2829.0], [63.1, 2852.0], [63.2, 2892.0], [63.3, 2897.0], [63.4, 2897.0], [63.5, 2897.0], [63.6, 2897.0], [63.7, 2899.0], [63.8, 2899.0], [63.9, 2899.0], [64.0, 2899.0], [64.1, 2900.0], [64.2, 2900.0], [64.3, 2901.0], [64.4, 2907.0], [64.5, 2907.0], [64.6, 2913.0], [64.7, 2942.0], [64.8, 2943.0], [64.9, 2943.0], [65.0, 2943.0], [65.1, 2945.0], [65.2, 2946.0], [65.3, 2949.0], [65.4, 2959.0], [65.5, 2959.0], [65.6, 2961.0], [65.7, 2962.0], [65.8, 2974.0], [65.9, 2983.0], [66.0, 2990.0], [66.1, 2995.0], [66.2, 3002.0], [66.3, 3012.0], [66.4, 3012.0], [66.5, 3013.0], [66.6, 3013.0], [66.7, 3013.0], [66.8, 3013.0], [66.9, 3013.0], [67.0, 3014.0], [67.1, 3014.0], [67.2, 3015.0], [67.3, 3015.0], [67.4, 3029.0], [67.5, 3038.0], [67.6, 3038.0], [67.7, 3038.0], [67.8, 3042.0], [67.9, 3062.0], [68.0, 3068.0], [68.1, 3070.0], [68.2, 3070.0], [68.3, 3071.0], [68.4, 3072.0], [68.5, 3090.0], [68.6, 3105.0], [68.7, 3108.0], [68.8, 3109.0], [68.9, 3110.0], [69.0, 3110.0], [69.1, 3111.0], [69.2, 3113.0], [69.3, 3114.0], [69.4, 3132.0], [69.5, 3142.0], [69.6, 3151.0], [69.7, 3155.0], [69.8, 3156.0], [69.9, 3156.0], [70.0, 3156.0], [70.1, 3157.0], [70.2, 3157.0], [70.3, 3158.0], [70.4, 3158.0], [70.5, 3170.0], [70.6, 3170.0], [70.7, 3172.0], [70.8, 3173.0], [70.9, 3174.0], [71.0, 3175.0], [71.1, 3175.0], [71.2, 3176.0], [71.3, 3176.0], [71.4, 3176.0], [71.5, 3177.0], [71.6, 3177.0], [71.7, 3177.0], [71.8, 3178.0], [71.9, 3178.0], [72.0, 3178.0], [72.1, 3178.0], [72.2, 3179.0], [72.3, 3180.0], [72.4, 3181.0], [72.5, 3182.0], [72.6, 3183.0], [72.7, 3183.0], [72.8, 3183.0], [72.9, 3183.0], [73.0, 3183.0], [73.1, 3184.0], [73.2, 3184.0], [73.3, 3185.0], [73.4, 3220.0], [73.5, 3231.0], [73.6, 3238.0], [73.7, 3239.0], [73.8, 3240.0], [73.9, 3240.0], [74.0, 3240.0], [74.1, 3240.0], [74.2, 3240.0], [74.3, 3240.0], [74.4, 3240.0], [74.5, 3240.0], [74.6, 3241.0], [74.7, 3241.0], [74.8, 3241.0], [74.9, 3241.0], [75.0, 3242.0], [75.1, 3242.0], [75.2, 3242.0], [75.3, 3242.0], [75.4, 3242.0], [75.5, 3243.0], [75.6, 3244.0], [75.7, 3244.0], [75.8, 3245.0], [75.9, 3245.0], [76.0, 3246.0], [76.1, 3246.0], [76.2, 3247.0], [76.3, 3247.0], [76.4, 3249.0], [76.5, 3249.0], [76.6, 3250.0], [76.7, 3250.0], [76.8, 3251.0], [76.9, 3251.0], [77.0, 3253.0], [77.1, 3254.0], [77.2, 3254.0], [77.3, 3254.0], [77.4, 3255.0], [77.5, 3256.0], [77.6, 3260.0], [77.7, 3262.0], [77.8, 3263.0], [77.9, 3263.0], [78.0, 3263.0], [78.1, 3264.0], [78.2, 3264.0], [78.3, 3265.0], [78.4, 3267.0], [78.5, 3272.0], [78.6, 3272.0], [78.7, 3273.0], [78.8, 3274.0], [78.9, 3275.0], [79.0, 3275.0], [79.1, 3275.0], [79.2, 3277.0], [79.3, 3280.0], [79.4, 3315.0], [79.5, 3315.0], [79.6, 3315.0], [79.7, 3315.0], [79.8, 3315.0], [79.9, 3315.0], [80.0, 3316.0], [80.1, 3316.0], [80.2, 3316.0], [80.3, 3316.0], [80.4, 3317.0], [80.5, 3317.0], [80.6, 3317.0], [80.7, 3317.0], [80.8, 3317.0], [80.9, 3317.0], [81.0, 3317.0], [81.1, 3318.0], [81.2, 3318.0], [81.3, 3318.0], [81.4, 3319.0], [81.5, 3323.0], [81.6, 3325.0], [81.7, 3326.0], [81.8, 3326.0], [81.9, 3327.0], [82.0, 3327.0], [82.1, 3327.0], [82.2, 3327.0], [82.3, 3329.0], [82.4, 3332.0], [82.5, 3333.0], [82.6, 3334.0], [82.7, 3335.0], [82.8, 3335.0], [82.9, 3336.0], [83.0, 3337.0], [83.1, 3338.0], [83.2, 3339.0], [83.3, 3345.0], [83.4, 3346.0], [83.5, 3347.0], [83.6, 3347.0], [83.7, 3347.0], [83.8, 3347.0], [83.9, 3347.0], [84.0, 3348.0], [84.1, 3348.0], [84.2, 3348.0], [84.3, 3348.0], [84.4, 3348.0], [84.5, 3349.0], [84.6, 3349.0], [84.7, 3350.0], [84.8, 3350.0], [84.9, 3351.0], [85.0, 3352.0], [85.1, 3369.0], [85.2, 3369.0], [85.3, 3369.0], [85.4, 3370.0], [85.5, 3370.0], [85.6, 3370.0], [85.7, 3371.0], [85.8, 3371.0], [85.9, 3377.0], [86.0, 3378.0], [86.1, 3379.0], [86.2, 3379.0], [86.3, 3379.0], [86.4, 3380.0], [86.5, 3380.0], [86.6, 3380.0], [86.7, 3381.0], [86.8, 3381.0], [86.9, 3382.0], [87.0, 3384.0], [87.1, 3389.0], [87.2, 3389.0], [87.3, 3389.0], [87.4, 3390.0], [87.5, 3390.0], [87.6, 3391.0], [87.7, 3394.0], [87.8, 3395.0], [87.9, 3395.0], [88.0, 3396.0], [88.1, 3401.0], [88.2, 3404.0], [88.3, 3427.0], [88.4, 3428.0], [88.5, 3437.0], [88.6, 3440.0], [88.7, 3440.0], [88.8, 3441.0], [88.9, 3441.0], [89.0, 3443.0], [89.1, 3444.0], [89.2, 3444.0], [89.3, 3445.0], [89.4, 3446.0], [89.5, 3448.0], [89.6, 3450.0], [89.7, 3451.0], [89.8, 3451.0], [89.9, 3451.0], [90.0, 3451.0], [90.1, 3452.0], [90.2, 3452.0], [90.3, 3452.0], [90.4, 3457.0], [90.5, 3457.0], [90.6, 3457.0], [90.7, 3458.0], [90.8, 3459.0], [90.9, 3459.0], [91.0, 3459.0], [91.1, 3460.0], [91.2, 3460.0], [91.3, 3462.0], [91.4, 3463.0], [91.5, 3464.0], [91.6, 3464.0], [91.7, 3465.0], [91.8, 3465.0], [91.9, 3466.0], [92.0, 3467.0], [92.1, 3470.0], [92.2, 3470.0], [92.3, 3471.0], [92.4, 3471.0], [92.5, 3471.0], [92.6, 3472.0], [92.7, 3473.0], [92.8, 3499.0], [92.9, 3500.0], [93.0, 3501.0], [93.1, 3501.0], [93.2, 3502.0], [93.3, 3502.0], [93.4, 3504.0], [93.5, 3520.0], [93.6, 3521.0], [93.7, 3521.0], [93.8, 3522.0], [93.9, 3522.0], [94.0, 3543.0], [94.1, 3555.0], [94.2, 3555.0], [94.3, 3556.0], [94.4, 3556.0], [94.5, 3557.0], [94.6, 3557.0], [94.7, 3610.0], [94.8, 3632.0], [94.9, 3635.0], [95.0, 3636.0], [95.1, 3637.0], [95.2, 3644.0], [95.3, 3645.0], [95.4, 3651.0], [95.5, 3652.0], [95.6, 3665.0], [95.7, 3667.0], [95.8, 3668.0], [95.9, 3668.0], [96.0, 3669.0], [96.1, 3669.0], [96.2, 3669.0], [96.3, 3671.0], [96.4, 3701.0], [96.5, 3701.0], [96.6, 3718.0], [96.7, 3730.0], [96.8, 3738.0], [96.9, 3739.0], [97.0, 3741.0], [97.1, 3741.0], [97.2, 3742.0], [97.3, 3743.0], [97.4, 3744.0], [97.5, 3747.0], [97.6, 3753.0], [97.7, 3759.0], [97.8, 3769.0], [97.9, 3769.0], [98.0, 3770.0], [98.1, 3779.0], [98.2, 3780.0], [98.3, 3789.0], [98.4, 3793.0], [98.5, 3794.0], [98.6, 3796.0], [98.7, 3842.0], [98.8, 3843.0], [98.9, 3844.0], [99.0, 3845.0], [99.1, 3846.0], [99.2, 3849.0], [99.3, 3859.0], [99.4, 3959.0], [99.5, 4011.0], [99.6, 4037.0], [99.7, 4071.0], [99.8, 4105.0], [99.9, 4451.0], [100.0, 4533.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 218.0, "series": [{"data": [[600.0, 69.0], [700.0, 55.0], [800.0, 53.0], [900.0, 77.0], [1000.0, 89.0], [1100.0, 48.0], [1200.0, 44.0], [1300.0, 52.0], [1400.0, 47.0], [1500.0, 42.0], [1600.0, 87.0], [1700.0, 52.0], [1800.0, 65.0], [1900.0, 48.0], [2000.0, 43.0], [2100.0, 146.0], [2200.0, 106.0], [2300.0, 53.0], [2400.0, 117.0], [2500.0, 48.0], [2600.0, 59.0], [2700.0, 56.0], [2800.0, 58.0], [2900.0, 53.0], [3000.0, 59.0], [3100.0, 120.0], [3300.0, 218.0], [3200.0, 150.0], [3400.0, 118.0], [3500.0, 46.0], [3600.0, 43.0], [3700.0, 57.0], [3800.0, 16.0], [3900.0, 4.0], [4000.0, 8.0], [4200.0, 1.0], [4100.0, 1.0], [4400.0, 1.0], [4500.0, 2.0], [500.0, 84.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 100.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2395.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 100.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2395.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 29.436440677966072, "minX": 1.78906188E12, "maxY": 84.87889273356397, "series": [{"data": [[1.78906188E12, 29.436440677966072], [1.789062E12, 30.9245283018868], [1.78906194E12, 84.87889273356397]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 96 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.789062E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 736.4285714285713, "minX": 1.0, "maxY": 3242.0, "series": [{"data": [[2.0, 1465.6666666666665], [3.0, 1217.5], [4.0, 992.3333333333333], [5.0, 968.1666666666667], [6.0, 898.5714285714286], [7.0, 853.625], [8.0, 818.1111111111111], [9.0, 790.3], [10.0, 736.4285714285713], [11.0, 756.4615384615385], [12.0, 767.5833333333335], [13.0, 758.2857142857143], [14.0, 753.9333333333334], [15.0, 788.9230769230769], [16.0, 772.9375000000001], [17.0, 791.8750000000001], [18.0, 816.9333333333333], [19.0, 853.7857142857144], [20.0, 847.5555555555555], [21.0, 871.3684210526316], [22.0, 909.4375], [23.0, 949.0000000000001], [24.0, 984.0], [25.0, 1097.142857142857], [26.0, 1078.0000000000002], [27.0, 1031.8999999999999], [28.0, 1196.0], [29.0, 1060.4814814814815], [30.0, 1103.1000000000001], [31.0, 1110.8571428571431], [32.0, 1032.909090909091], [33.0, 1056.4375], [34.0, 1102.2727272727273], [35.0, 1122.157894736842], [36.0, 1203.2], [37.0, 1195.6842105263158], [38.0, 1245.0], [39.0, 1272.5999999999997], [40.0, 1378.0588235294115], [41.0, 1354.45], [42.0, 1476.5], [43.0, 1492.1666666666665], [44.0, 1494.2631578947367], [45.0, 1562.4999999999998], [46.0, 1738.3529411764705], [47.0, 1621.1875], [48.0, 1706.5294117647056], [49.0, 1608.470588235294], [50.0, 1739.3684210526317], [51.0, 1810.4285714285716], [52.0, 1719.047619047619], [53.0, 2321.615384615385], [54.0, 1698.090909090909], [55.0, 1803.5833333333333], [56.0, 1735.3333333333335], [57.0, 1887.1153846153848], [58.0, 2157.444444444445], [59.0, 1899.5], [60.0, 1964.2142857142858], [61.0, 2018.0666666666666], [62.0, 2110.666666666667], [63.0, 2096.4999999999995], [64.0, 2122.7499999999995], [65.0, 2188.705882352941], [66.0, 2113.7058823529414], [67.0, 2451.777777777778], [68.0, 2210.21052631579], [69.0, 2322.833333333333], [70.0, 2394.2000000000003], [71.0, 2378.947368421053], [73.0, 2487.5000000000005], [74.0, 2406.8260869565215], [75.0, 2468.9565217391305], [76.0, 2407.1428571428573], [77.0, 2574.72], [79.0, 2410.590909090909], [80.0, 2757.68], [81.0, 2654.4583333333335], [83.0, 2710.4074074074074], [84.0, 2574.230769230769], [86.0, 2893.7741935483873], [87.0, 3026.8571428571427], [85.0, 3242.0], [89.0, 3148.2857142857138], [90.0, 3106.9032258064517], [92.0, 3062.870967741936], [94.0, 2893.433333333333], [96.0, 3159.904500548849], [1.0, 3177.0]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[67.99959919839687, 2309.70220440882]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 96.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 139.56666666666666, "minX": 1.78906188E12, "maxY": 6675.9, "series": [{"data": [[1.78906188E12, 2725.8], [1.789062E12, 204.05], [1.78906194E12, 6675.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78906188E12, 1864.4], [1.789062E12, 139.56666666666666], [1.78906194E12, 4566.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.789062E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1049.8997175141237, "minX": 1.78906188E12, "maxY": 2882.056603773585, "series": [{"data": [[1.78906188E12, 1049.8997175141237], [1.789062E12, 2882.056603773585], [1.78906194E12, 2806.5911188004566]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.789062E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1049.8375706214676, "minX": 1.78906188E12, "maxY": 2882.018867924529, "series": [{"data": [[1.78906188E12, 1049.8375706214676], [1.789062E12, 2882.018867924529], [1.78906194E12, 2806.577277970014]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.789062E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0461361014994233, "minX": 1.78906188E12, "maxY": 0.10169491525423718, "series": [{"data": [[1.78906188E12, 0.10169491525423718], [1.789062E12, 0.05660377358490566], [1.78906194E12, 0.0461361014994233]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.789062E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 520.0, "minX": 1.78906188E12, "maxY": 620.0, "series": [{"data": [[1.78906188E12, 620.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78906188E12, 520.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78906188E12, 610.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78906188E12, 619.99]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78906188E12, 572.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78906188E12, 617.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906188E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 531.0, "minX": 1.0, "maxY": 3318.0, "series": [{"data": [[1.0, 620.0], [9.0, 544.0], [19.0, 586.0], [5.0, 582.0], [21.0, 611.0], [11.0, 531.0], [22.0, 589.5], [14.0, 551.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 3318.0], [33.0, 3255.5], [34.0, 2663.5], [35.0, 3242.0], [37.0, 3245.0], [36.0, 3158.5], [39.0, 1876.0], [40.0, 2437.0], [44.0, 2204.5], [16.0, 2185.5], [17.0, 2950.0], [18.0, 2422.0], [20.0, 2402.5], [21.0, 634.0], [22.0, 726.0], [23.0, 1178.0], [24.0, 1817.0], [25.0, 1671.0], [26.0, 1306.0], [27.0, 1459.0], [28.0, 2944.0], [29.0, 1132.5], [30.0, 2440.5], [31.0, 2098.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 44.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 531.0, "minX": 1.0, "maxY": 3318.0, "series": [{"data": [[1.0, 617.0], [9.0, 544.0], [19.0, 586.0], [5.0, 582.0], [21.0, 611.0], [11.0, 531.0], [22.0, 589.5], [14.0, 551.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 3318.0], [33.0, 3255.0], [34.0, 2663.5], [35.0, 3242.0], [37.0, 3245.0], [36.0, 3158.5], [39.0, 1876.0], [40.0, 2437.0], [44.0, 2204.5], [16.0, 2185.5], [17.0, 2950.0], [18.0, 2422.0], [20.0, 2402.0], [21.0, 633.5], [22.0, 726.0], [23.0, 1178.0], [24.0, 1817.0], [25.0, 1671.0], [26.0, 1306.0], [27.0, 1459.0], [28.0, 2944.0], [29.0, 1132.5], [30.0, 2440.5], [31.0, 2098.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 44.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.633333333333333, "minX": 1.78906188E12, "maxY": 28.95, "series": [{"data": [[1.78906188E12, 12.633333333333333], [1.78906194E12, 28.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906194E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.8833333333333333, "minX": 1.78906188E12, "maxY": 28.9, "series": [{"data": [[1.78906188E12, 11.8], [1.789062E12, 0.8833333333333333], [1.78906194E12, 28.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.789062E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.8833333333333333, "minX": 1.78906188E12, "maxY": 28.9, "series": [{"data": [[1.78906188E12, 1.6666666666666667]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78906188E12, 10.133333333333333], [1.789062E12, 0.8833333333333333], [1.78906194E12, 28.9]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.789062E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.8833333333333333, "minX": 1.78906188E12, "maxY": 28.9, "series": [{"data": [[1.78906188E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78906188E12, 10.133333333333333], [1.789062E12, 0.8833333333333333], [1.78906194E12, 28.9]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.789062E12, "title": "Total Transactions Per Second"}},
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

