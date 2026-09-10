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
        data: {"result": {"minY": 513.0, "minX": 0.0, "maxY": 9748.0, "series": [{"data": [[0.0, 513.0], [0.1, 515.0], [0.2, 519.0], [0.3, 522.0], [0.4, 522.0], [0.5, 530.0], [0.6, 536.0], [0.7, 538.0], [0.8, 540.0], [0.9, 545.0], [1.0, 547.0], [1.1, 549.0], [1.2, 550.0], [1.3, 551.0], [1.4, 552.0], [1.5, 555.0], [1.6, 558.0], [1.7, 566.0], [1.8, 567.0], [1.9, 569.0], [2.0, 571.0], [2.1, 573.0], [2.2, 575.0], [2.3, 580.0], [2.4, 584.0], [2.5, 585.0], [2.6, 589.0], [2.7, 592.0], [2.8, 594.0], [2.9, 598.0], [3.0, 600.0], [3.1, 603.0], [3.2, 603.0], [3.3, 608.0], [3.4, 610.0], [3.5, 614.0], [3.6, 618.0], [3.7, 620.0], [3.8, 621.0], [3.9, 629.0], [4.0, 630.0], [4.1, 631.0], [4.2, 637.0], [4.3, 641.0], [4.4, 642.0], [4.5, 647.0], [4.6, 648.0], [4.7, 651.0], [4.8, 656.0], [4.9, 666.0], [5.0, 670.0], [5.1, 679.0], [5.2, 681.0], [5.3, 684.0], [5.4, 689.0], [5.5, 691.0], [5.6, 705.0], [5.7, 708.0], [5.8, 717.0], [5.9, 717.0], [6.0, 721.0], [6.1, 727.0], [6.2, 729.0], [6.3, 731.0], [6.4, 733.0], [6.5, 738.0], [6.6, 746.0], [6.7, 749.0], [6.8, 755.0], [6.9, 758.0], [7.0, 773.0], [7.1, 780.0], [7.2, 782.0], [7.3, 786.0], [7.4, 788.0], [7.5, 799.0], [7.6, 809.0], [7.7, 814.0], [7.8, 822.0], [7.9, 826.0], [8.0, 840.0], [8.1, 850.0], [8.2, 850.0], [8.3, 854.0], [8.4, 861.0], [8.5, 875.0], [8.6, 881.0], [8.7, 885.0], [8.8, 901.0], [8.9, 904.0], [9.0, 913.0], [9.1, 915.0], [9.2, 923.0], [9.3, 939.0], [9.4, 942.0], [9.5, 981.0], [9.6, 988.0], [9.7, 991.0], [9.8, 1000.0], [9.9, 1007.0], [10.0, 1042.0], [10.1, 1061.0], [10.2, 1081.0], [10.3, 1095.0], [10.4, 1101.0], [10.5, 1134.0], [10.6, 1162.0], [10.7, 1170.0], [10.8, 1177.0], [10.9, 1179.0], [11.0, 1231.0], [11.1, 1240.0], [11.2, 1243.0], [11.3, 1256.0], [11.4, 1257.0], [11.5, 1297.0], [11.6, 1307.0], [11.7, 1310.0], [11.8, 1334.0], [11.9, 1392.0], [12.0, 1405.0], [12.1, 1412.0], [12.2, 1416.0], [12.3, 1418.0], [12.4, 1446.0], [12.5, 1458.0], [12.6, 1463.0], [12.7, 1483.0], [12.8, 1487.0], [12.9, 1514.0], [13.0, 1514.0], [13.1, 1547.0], [13.2, 1550.0], [13.3, 1562.0], [13.4, 1662.0], [13.5, 1662.0], [13.6, 1669.0], [13.7, 1670.0], [13.8, 1693.0], [13.9, 1694.0], [14.0, 1702.0], [14.1, 1731.0], [14.2, 1743.0], [14.3, 1754.0], [14.4, 1759.0], [14.5, 1760.0], [14.6, 1770.0], [14.7, 1793.0], [14.8, 1796.0], [14.9, 1808.0], [15.0, 1808.0], [15.1, 1843.0], [15.2, 1847.0], [15.3, 1848.0], [15.4, 1860.0], [15.5, 1861.0], [15.6, 1904.0], [15.7, 1905.0], [15.8, 1905.0], [15.9, 1906.0], [16.0, 1916.0], [16.1, 1917.0], [16.2, 1924.0], [16.3, 1926.0], [16.4, 1926.0], [16.5, 1930.0], [16.6, 1932.0], [16.7, 1932.0], [16.8, 1933.0], [16.9, 1961.0], [17.0, 1987.0], [17.1, 1989.0], [17.2, 1989.0], [17.3, 1990.0], [17.4, 1992.0], [17.5, 1999.0], [17.6, 1999.0], [17.7, 1999.0], [17.8, 2027.0], [17.9, 2041.0], [18.0, 2041.0], [18.1, 2042.0], [18.2, 2042.0], [18.3, 2043.0], [18.4, 2067.0], [18.5, 2067.0], [18.6, 2068.0], [18.7, 2068.0], [18.8, 2069.0], [18.9, 2081.0], [19.0, 2093.0], [19.1, 2094.0], [19.2, 2095.0], [19.3, 2098.0], [19.4, 2099.0], [19.5, 2099.0], [19.6, 2099.0], [19.7, 2099.0], [19.8, 2113.0], [19.9, 2114.0], [20.0, 2115.0], [20.1, 2115.0], [20.2, 2117.0], [20.3, 2153.0], [20.4, 2158.0], [20.5, 2199.0], [20.6, 2200.0], [20.7, 2200.0], [20.8, 2211.0], [20.9, 2241.0], [21.0, 2272.0], [21.1, 2273.0], [21.2, 2273.0], [21.3, 2273.0], [21.4, 2274.0], [21.5, 2274.0], [21.6, 2275.0], [21.7, 2275.0], [21.8, 2276.0], [21.9, 2276.0], [22.0, 2307.0], [22.1, 2307.0], [22.2, 2308.0], [22.3, 2309.0], [22.4, 2309.0], [22.5, 2325.0], [22.6, 2342.0], [22.7, 2344.0], [22.8, 2354.0], [22.9, 2373.0], [23.0, 2374.0], [23.1, 2374.0], [23.2, 2375.0], [23.3, 2376.0], [23.4, 2405.0], [23.5, 2409.0], [23.6, 2410.0], [23.7, 2411.0], [23.8, 2413.0], [23.9, 2414.0], [24.0, 2505.0], [24.1, 2505.0], [24.2, 2505.0], [24.3, 2506.0], [24.4, 2507.0], [24.5, 2508.0], [24.6, 2508.0], [24.7, 2557.0], [24.8, 2594.0], [24.9, 2595.0], [25.0, 2596.0], [25.1, 2597.0], [25.2, 2613.0], [25.3, 2614.0], [25.4, 2614.0], [25.5, 2615.0], [25.6, 2615.0], [25.7, 2615.0], [25.8, 2615.0], [25.9, 2616.0], [26.0, 2616.0], [26.1, 2616.0], [26.2, 2617.0], [26.3, 2618.0], [26.4, 2619.0], [26.5, 2621.0], [26.6, 2622.0], [26.7, 2622.0], [26.8, 2623.0], [26.9, 2623.0], [27.0, 2623.0], [27.1, 2624.0], [27.2, 2625.0], [27.3, 2665.0], [27.4, 2708.0], [27.5, 2709.0], [27.6, 2710.0], [27.7, 2792.0], [27.8, 2792.0], [27.9, 2793.0], [28.0, 2871.0], [28.1, 2887.0], [28.2, 2887.0], [28.3, 2888.0], [28.4, 2888.0], [28.5, 2889.0], [28.6, 2890.0], [28.7, 2891.0], [28.8, 2891.0], [28.9, 2892.0], [29.0, 2894.0], [29.1, 3026.0], [29.2, 3027.0], [29.3, 3028.0], [29.4, 3094.0], [29.5, 3103.0], [29.6, 3103.0], [29.7, 3150.0], [29.8, 3150.0], [29.9, 3150.0], [30.0, 3151.0], [30.1, 3152.0], [30.2, 3162.0], [30.3, 3163.0], [30.4, 3164.0], [30.5, 3164.0], [30.6, 3165.0], [30.7, 3166.0], [30.8, 3166.0], [30.9, 3166.0], [31.0, 3167.0], [31.1, 3168.0], [31.2, 3168.0], [31.3, 3188.0], [31.4, 3190.0], [31.5, 3190.0], [31.6, 3191.0], [31.7, 3191.0], [31.8, 3191.0], [31.9, 3200.0], [32.0, 3224.0], [32.1, 3225.0], [32.2, 3226.0], [32.3, 3238.0], [32.4, 3310.0], [32.5, 3367.0], [32.6, 3369.0], [32.7, 3388.0], [32.8, 3389.0], [32.9, 3389.0], [33.0, 3390.0], [33.1, 3390.0], [33.2, 3390.0], [33.3, 3390.0], [33.4, 3391.0], [33.5, 3391.0], [33.6, 3392.0], [33.7, 3395.0], [33.8, 3417.0], [33.9, 3417.0], [34.0, 3417.0], [34.1, 3418.0], [34.2, 3418.0], [34.3, 3418.0], [34.4, 3418.0], [34.5, 3418.0], [34.6, 3418.0], [34.7, 3419.0], [34.8, 3419.0], [34.9, 3420.0], [35.0, 3420.0], [35.1, 3420.0], [35.2, 3421.0], [35.3, 3423.0], [35.4, 3423.0], [35.5, 3463.0], [35.6, 3478.0], [35.7, 3478.0], [35.8, 3479.0], [35.9, 3480.0], [36.0, 3481.0], [36.1, 3481.0], [36.2, 3481.0], [36.3, 3482.0], [36.4, 3483.0], [36.5, 3485.0], [36.6, 3539.0], [36.7, 3581.0], [36.8, 3582.0], [36.9, 3582.0], [37.0, 3583.0], [37.1, 3583.0], [37.2, 3583.0], [37.3, 3584.0], [37.4, 3586.0], [37.5, 3587.0], [37.6, 3587.0], [37.7, 3600.0], [37.8, 3601.0], [37.9, 3602.0], [38.0, 3602.0], [38.1, 3603.0], [38.2, 3604.0], [38.3, 3605.0], [38.4, 3605.0], [38.5, 3691.0], [38.6, 3717.0], [38.7, 3762.0], [38.8, 3772.0], [38.9, 3772.0], [39.0, 3773.0], [39.1, 3773.0], [39.2, 3774.0], [39.3, 3774.0], [39.4, 3775.0], [39.5, 3775.0], [39.6, 3776.0], [39.7, 3833.0], [39.8, 3847.0], [39.9, 3848.0], [40.0, 3849.0], [40.1, 3849.0], [40.2, 3849.0], [40.3, 3849.0], [40.4, 3850.0], [40.5, 3850.0], [40.6, 3850.0], [40.7, 3850.0], [40.8, 3851.0], [40.9, 3862.0], [41.0, 3863.0], [41.1, 3863.0], [41.2, 3863.0], [41.3, 3864.0], [41.4, 3864.0], [41.5, 3866.0], [41.6, 3866.0], [41.7, 3867.0], [41.8, 3867.0], [41.9, 3914.0], [42.0, 4011.0], [42.1, 4063.0], [42.2, 4161.0], [42.3, 4184.0], [42.4, 4218.0], [42.5, 4314.0], [42.6, 4339.0], [42.7, 4341.0], [42.8, 4342.0], [42.9, 4342.0], [43.0, 4376.0], [43.1, 4451.0], [43.2, 4462.0], [43.3, 4462.0], [43.4, 4462.0], [43.5, 4462.0], [43.6, 4462.0], [43.7, 4463.0], [43.8, 4463.0], [43.9, 4464.0], [44.0, 4464.0], [44.1, 4465.0], [44.2, 4468.0], [44.3, 4498.0], [44.4, 4599.0], [44.5, 4600.0], [44.6, 4600.0], [44.7, 4601.0], [44.8, 4601.0], [44.9, 4602.0], [45.0, 4602.0], [45.1, 4602.0], [45.2, 4603.0], [45.3, 4603.0], [45.4, 4604.0], [45.5, 4604.0], [45.6, 4605.0], [45.7, 4605.0], [45.8, 4605.0], [45.9, 4605.0], [46.0, 4606.0], [46.1, 4606.0], [46.2, 4606.0], [46.3, 4606.0], [46.4, 4606.0], [46.5, 4607.0], [46.6, 4625.0], [46.7, 4690.0], [46.8, 4722.0], [46.9, 4750.0], [47.0, 4775.0], [47.1, 4775.0], [47.2, 4775.0], [47.3, 4775.0], [47.4, 4776.0], [47.5, 4776.0], [47.6, 4777.0], [47.7, 4777.0], [47.8, 4777.0], [47.9, 4786.0], [48.0, 4811.0], [48.1, 4943.0], [48.2, 4943.0], [48.3, 4943.0], [48.4, 4943.0], [48.5, 4943.0], [48.6, 4945.0], [48.7, 4945.0], [48.8, 4946.0], [48.9, 4946.0], [49.0, 4946.0], [49.1, 5044.0], [49.2, 5065.0], [49.3, 5123.0], [49.4, 5140.0], [49.5, 5141.0], [49.6, 5141.0], [49.7, 5141.0], [49.8, 5143.0], [49.9, 5143.0], [50.0, 5143.0], [50.1, 5145.0], [50.2, 5145.0], [50.3, 5155.0], [50.4, 5156.0], [50.5, 5157.0], [50.6, 5160.0], [50.7, 5213.0], [50.8, 5215.0], [50.9, 5215.0], [51.0, 5217.0], [51.1, 5218.0], [51.2, 5221.0], [51.3, 5227.0], [51.4, 5227.0], [51.5, 5228.0], [51.6, 5228.0], [51.7, 5229.0], [51.8, 5271.0], [51.9, 5271.0], [52.0, 5272.0], [52.1, 5272.0], [52.2, 5275.0], [52.3, 5276.0], [52.4, 5276.0], [52.5, 5277.0], [52.6, 5291.0], [52.7, 5291.0], [52.8, 5292.0], [52.9, 5292.0], [53.0, 5292.0], [53.1, 5292.0], [53.2, 5292.0], [53.3, 5293.0], [53.4, 5293.0], [53.5, 5293.0], [53.6, 5294.0], [53.7, 5322.0], [53.8, 5323.0], [53.9, 5324.0], [54.0, 5324.0], [54.1, 5325.0], [54.2, 5325.0], [54.3, 5326.0], [54.4, 5327.0], [54.5, 5328.0], [54.6, 5329.0], [54.7, 5329.0], [54.8, 5331.0], [54.9, 5331.0], [55.0, 5331.0], [55.1, 5331.0], [55.2, 5332.0], [55.3, 5332.0], [55.4, 5333.0], [55.5, 5333.0], [55.6, 5334.0], [55.7, 5334.0], [55.8, 5334.0], [55.9, 5335.0], [56.0, 5335.0], [56.1, 5335.0], [56.2, 5336.0], [56.3, 5336.0], [56.4, 5336.0], [56.5, 5336.0], [56.6, 5336.0], [56.7, 5337.0], [56.8, 5337.0], [56.9, 5338.0], [57.0, 5342.0], [57.1, 5343.0], [57.2, 5344.0], [57.3, 5344.0], [57.4, 5345.0], [57.5, 5345.0], [57.6, 5346.0], [57.7, 5348.0], [57.8, 5348.0], [57.9, 5348.0], [58.0, 5348.0], [58.1, 5350.0], [58.2, 5363.0], [58.3, 5365.0], [58.4, 5365.0], [58.5, 5366.0], [58.6, 5366.0], [58.7, 5367.0], [58.8, 5367.0], [58.9, 5367.0], [59.0, 5373.0], [59.1, 5375.0], [59.2, 5375.0], [59.3, 5376.0], [59.4, 5376.0], [59.5, 5385.0], [59.6, 5386.0], [59.7, 5392.0], [59.8, 5394.0], [59.9, 5394.0], [60.0, 5395.0], [60.1, 5395.0], [60.2, 5395.0], [60.3, 5397.0], [60.4, 5397.0], [60.5, 5397.0], [60.6, 5399.0], [60.7, 5399.0], [60.8, 5400.0], [60.9, 5401.0], [61.0, 5409.0], [61.1, 5445.0], [61.2, 5456.0], [61.3, 5456.0], [61.4, 5457.0], [61.5, 5457.0], [61.6, 5458.0], [61.7, 5458.0], [61.8, 5458.0], [61.9, 5459.0], [62.0, 5460.0], [62.1, 5461.0], [62.2, 5465.0], [62.3, 5487.0], [62.4, 5488.0], [62.5, 5489.0], [62.6, 5489.0], [62.7, 5490.0], [62.8, 5491.0], [62.9, 5491.0], [63.0, 5492.0], [63.1, 5492.0], [63.2, 5492.0], [63.3, 5493.0], [63.4, 5493.0], [63.5, 5493.0], [63.6, 5494.0], [63.7, 5495.0], [63.8, 5495.0], [63.9, 5495.0], [64.0, 5497.0], [64.1, 5507.0], [64.2, 5512.0], [64.3, 5515.0], [64.4, 5516.0], [64.5, 5517.0], [64.6, 5517.0], [64.7, 5518.0], [64.8, 5518.0], [64.9, 5519.0], [65.0, 5526.0], [65.1, 5537.0], [65.2, 5539.0], [65.3, 5541.0], [65.4, 5541.0], [65.5, 5542.0], [65.6, 5543.0], [65.7, 5543.0], [65.8, 5544.0], [65.9, 5544.0], [66.0, 5545.0], [66.1, 5546.0], [66.2, 5547.0], [66.3, 5547.0], [66.4, 5572.0], [66.5, 5592.0], [66.6, 5592.0], [66.7, 5593.0], [66.8, 5593.0], [66.9, 5593.0], [67.0, 5593.0], [67.1, 5593.0], [67.2, 5594.0], [67.3, 5594.0], [67.4, 5594.0], [67.5, 5612.0], [67.6, 5613.0], [67.7, 5626.0], [67.8, 5626.0], [67.9, 5626.0], [68.0, 5626.0], [68.1, 5627.0], [68.2, 5627.0], [68.3, 5628.0], [68.4, 5629.0], [68.5, 5634.0], [68.6, 5649.0], [68.7, 5650.0], [68.8, 5654.0], [68.9, 5669.0], [69.0, 5670.0], [69.1, 5670.0], [69.2, 5672.0], [69.3, 5673.0], [69.4, 5681.0], [69.5, 5682.0], [69.6, 5682.0], [69.7, 5682.0], [69.8, 5683.0], [69.9, 5683.0], [70.0, 5683.0], [70.1, 5683.0], [70.2, 5714.0], [70.3, 5722.0], [70.4, 5723.0], [70.5, 5724.0], [70.6, 5724.0], [70.7, 5725.0], [70.8, 5725.0], [70.9, 5731.0], [71.0, 5732.0], [71.1, 5733.0], [71.2, 5734.0], [71.3, 5734.0], [71.4, 5735.0], [71.5, 5736.0], [71.6, 5737.0], [71.7, 5764.0], [71.8, 5776.0], [71.9, 5779.0], [72.0, 5780.0], [72.1, 5785.0], [72.2, 5785.0], [72.3, 5786.0], [72.4, 5786.0], [72.5, 5788.0], [72.6, 5828.0], [72.7, 5875.0], [72.8, 5887.0], [72.9, 5888.0], [73.0, 5889.0], [73.1, 5889.0], [73.2, 5890.0], [73.3, 5890.0], [73.4, 5890.0], [73.5, 5891.0], [73.6, 5892.0], [73.7, 5892.0], [73.8, 5893.0], [73.9, 5897.0], [74.0, 5908.0], [74.1, 5934.0], [74.2, 5935.0], [74.3, 5935.0], [74.4, 6011.0], [74.5, 6011.0], [74.6, 6012.0], [74.7, 6012.0], [74.8, 6020.0], [74.9, 6021.0], [75.0, 6021.0], [75.1, 6056.0], [75.2, 6056.0], [75.3, 6059.0], [75.4, 6062.0], [75.5, 6062.0], [75.6, 6063.0], [75.7, 6063.0], [75.8, 6064.0], [75.9, 6065.0], [76.0, 6066.0], [76.1, 6070.0], [76.2, 6110.0], [76.3, 6110.0], [76.4, 6120.0], [76.5, 6121.0], [76.6, 6121.0], [76.7, 6121.0], [76.8, 6121.0], [76.9, 6123.0], [77.0, 6161.0], [77.1, 6163.0], [77.2, 6163.0], [77.3, 6164.0], [77.4, 6164.0], [77.5, 6165.0], [77.6, 6166.0], [77.7, 6167.0], [77.8, 6167.0], [77.9, 6168.0], [78.0, 6170.0], [78.1, 6206.0], [78.2, 6209.0], [78.3, 6212.0], [78.4, 6213.0], [78.5, 6216.0], [78.6, 6216.0], [78.7, 6216.0], [78.8, 6217.0], [78.9, 6266.0], [79.0, 6282.0], [79.1, 6283.0], [79.2, 6284.0], [79.3, 6284.0], [79.4, 6284.0], [79.5, 6284.0], [79.6, 6285.0], [79.7, 6285.0], [79.8, 6286.0], [79.9, 6286.0], [80.0, 6287.0], [80.1, 6404.0], [80.2, 6407.0], [80.3, 6464.0], [80.4, 6545.0], [80.5, 6546.0], [80.6, 6564.0], [80.7, 6565.0], [80.8, 6565.0], [80.9, 6565.0], [81.0, 6565.0], [81.1, 6566.0], [81.2, 6567.0], [81.3, 6569.0], [81.4, 6570.0], [81.5, 6570.0], [81.6, 6571.0], [81.7, 6571.0], [81.8, 6571.0], [81.9, 6665.0], [82.0, 6668.0], [82.1, 6669.0], [82.2, 6679.0], [82.3, 6680.0], [82.4, 6680.0], [82.5, 6732.0], [82.6, 6758.0], [82.7, 6817.0], [82.8, 6818.0], [82.9, 6818.0], [83.0, 6820.0], [83.1, 6821.0], [83.2, 6823.0], [83.3, 6835.0], [83.4, 6837.0], [83.5, 6838.0], [83.6, 6838.0], [83.7, 6843.0], [83.8, 6843.0], [83.9, 6844.0], [84.0, 6844.0], [84.1, 6870.0], [84.2, 6870.0], [84.3, 6870.0], [84.4, 6871.0], [84.5, 6898.0], [84.6, 6990.0], [84.7, 7092.0], [84.8, 7092.0], [84.9, 7093.0], [85.0, 7095.0], [85.1, 7096.0], [85.2, 7141.0], [85.3, 7216.0], [85.4, 7249.0], [85.5, 7252.0], [85.6, 7253.0], [85.7, 7284.0], [85.8, 7308.0], [85.9, 7309.0], [86.0, 7309.0], [86.1, 7310.0], [86.2, 7310.0], [86.3, 7341.0], [86.4, 7348.0], [86.5, 7348.0], [86.6, 7349.0], [86.7, 7350.0], [86.8, 7350.0], [86.9, 7383.0], [87.0, 7446.0], [87.1, 7504.0], [87.2, 7507.0], [87.3, 7520.0], [87.4, 7568.0], [87.5, 7569.0], [87.6, 7570.0], [87.7, 7570.0], [87.8, 7583.0], [87.9, 7584.0], [88.0, 7584.0], [88.1, 7594.0], [88.2, 7594.0], [88.3, 7594.0], [88.4, 7596.0], [88.5, 7597.0], [88.6, 7597.0], [88.7, 7598.0], [88.8, 7598.0], [88.9, 7609.0], [89.0, 7610.0], [89.1, 7611.0], [89.2, 7612.0], [89.3, 7613.0], [89.4, 7613.0], [89.5, 7614.0], [89.6, 7615.0], [89.7, 7615.0], [89.8, 7616.0], [89.9, 7622.0], [90.0, 7623.0], [90.1, 7624.0], [90.2, 7624.0], [90.3, 7626.0], [90.4, 7744.0], [90.5, 7745.0], [90.6, 7745.0], [90.7, 7745.0], [90.8, 7746.0], [90.9, 7746.0], [91.0, 7746.0], [91.1, 7789.0], [91.2, 7789.0], [91.3, 7790.0], [91.4, 7834.0], [91.5, 7837.0], [91.6, 7837.0], [91.7, 7839.0], [91.8, 7867.0], [91.9, 7867.0], [92.0, 7868.0], [92.1, 7868.0], [92.2, 7869.0], [92.3, 7869.0], [92.4, 7870.0], [92.5, 7871.0], [92.6, 7914.0], [92.7, 7922.0], [92.8, 7922.0], [92.9, 7923.0], [93.0, 8017.0], [93.1, 8017.0], [93.2, 8018.0], [93.3, 8019.0], [93.4, 8021.0], [93.5, 8086.0], [93.6, 8090.0], [93.7, 8090.0], [93.8, 8093.0], [93.9, 8152.0], [94.0, 8293.0], [94.1, 8295.0], [94.2, 8296.0], [94.3, 8297.0], [94.4, 8297.0], [94.5, 8299.0], [94.6, 8300.0], [94.7, 8357.0], [94.8, 8358.0], [94.9, 8358.0], [95.0, 8372.0], [95.1, 8372.0], [95.2, 8389.0], [95.3, 8533.0], [95.4, 8558.0], [95.5, 8805.0], [95.6, 8805.0], [95.7, 8927.0], [95.8, 8929.0], [95.9, 8929.0], [96.0, 8934.0], [96.1, 8935.0], [96.2, 8935.0], [96.3, 8936.0], [96.4, 8936.0], [96.5, 8958.0], [96.6, 8958.0], [96.7, 8959.0], [96.8, 8961.0], [96.9, 8962.0], [97.0, 8986.0], [97.1, 9020.0], [97.2, 9021.0], [97.3, 9021.0], [97.4, 9021.0], [97.5, 9071.0], [97.6, 9072.0], [97.7, 9178.0], [97.8, 9299.0], [97.9, 9402.0], [98.0, 9403.0], [98.1, 9490.0], [98.2, 9513.0], [98.3, 9513.0], [98.4, 9513.0], [98.5, 9514.0], [98.6, 9522.0], [98.7, 9522.0], [98.8, 9522.0], [98.9, 9685.0], [99.0, 9686.0], [99.1, 9687.0], [99.2, 9689.0], [99.3, 9689.0], [99.4, 9690.0], [99.5, 9720.0], [99.6, 9741.0], [99.7, 9742.0], [99.8, 9743.0], [99.9, 9744.0], [100.0, 9748.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 186.0, "series": [{"data": [[600.0, 67.0], [700.0, 51.0], [800.0, 32.0], [900.0, 27.0], [1000.0, 14.0], [1100.0, 15.0], [1200.0, 17.0], [1300.0, 10.0], [1400.0, 24.0], [1500.0, 11.0], [1600.0, 18.0], [1700.0, 21.0], [1800.0, 20.0], [1900.0, 55.0], [2000.0, 53.0], [2100.0, 22.0], [2200.0, 35.0], [2300.0, 37.0], [2400.0, 16.0], [2500.0, 30.0], [2600.0, 57.0], [2700.0, 17.0], [2800.0, 26.0], [2900.0, 2.0], [3000.0, 9.0], [3100.0, 64.0], [3300.0, 34.0], [3200.0, 13.0], [3400.0, 74.0], [3500.0, 28.0], [3700.0, 27.0], [3600.0, 24.0], [3800.0, 58.0], [3900.0, 3.0], [4000.0, 5.0], [4200.0, 3.0], [4300.0, 13.0], [4100.0, 6.0], [4500.0, 3.0], [4400.0, 34.0], [4600.0, 60.0], [4700.0, 31.0], [4800.0, 4.0], [4900.0, 26.0], [5100.0, 36.0], [5000.0, 4.0], [5300.0, 186.0], [5200.0, 77.0], [5400.0, 84.0], [5600.0, 71.0], [5500.0, 89.0], [5700.0, 60.0], [5800.0, 38.0], [5900.0, 11.0], [6100.0, 49.0], [6000.0, 46.0], [6200.0, 51.0], [6600.0, 16.0], [6400.0, 8.0], [6500.0, 40.0], [6800.0, 50.0], [6900.0, 2.0], [6700.0, 3.0], [7100.0, 4.0], [7000.0, 13.0], [7200.0, 12.0], [7300.0, 31.0], [7400.0, 3.0], [7500.0, 46.0], [7600.0, 40.0], [7900.0, 11.0], [7700.0, 25.0], [7800.0, 31.0], [8000.0, 23.0], [8100.0, 2.0], [8300.0, 17.0], [8500.0, 4.0], [8200.0, 17.0], [8600.0, 1.0], [8700.0, 1.0], [8400.0, 1.0], [8800.0, 4.0], [9200.0, 2.0], [8900.0, 36.0], [9100.0, 1.0], [9000.0, 17.0], [9500.0, 18.0], [9600.0, 16.0], [9300.0, 2.0], [9400.0, 6.0], [9700.0, 15.0], [500.0, 77.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 96.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2497.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 96.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2497.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 65.63762376237622, "minX": 1.78906248E12, "maxY": 168.97409981048628, "series": [{"data": [[1.78906254E12, 168.97409981048628], [1.78906248E12, 65.63762376237622]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 192 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906254E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 871.5454545454545, "minX": 1.0, "maxY": 8662.769230769232, "series": [{"data": [[2.0, 5875.0], [3.0, 2359.666666666667], [4.0, 3171.0], [5.0, 1829.5], [6.0, 2269.0], [7.0, 1554.0], [8.0, 1261.8571428571427], [9.0, 1802.25], [10.0, 1276.7142857142858], [11.0, 5549.0], [12.0, 1140.9166666666667], [13.0, 3035.0], [14.0, 925.2307692307693], [15.0, 2205.666666666667], [16.0, 943.9285714285714], [17.0, 1333.4285714285716], [18.0, 1022.5833333333333], [19.0, 967.3571428571429], [20.0, 1473.3333333333335], [21.0, 964.6000000000001], [22.0, 1378.142857142857], [23.0, 1070.5], [24.0, 1126.2727272727273], [25.0, 1307.25], [26.0, 1057.9285714285716], [27.0, 1201.9], [28.0, 1044.75], [29.0, 1242.6], [30.0, 1307.111111111111], [31.0, 1129.9333333333334], [32.0, 871.5454545454545], [33.0, 904.4444444444445], [34.0, 1329.8181818181818], [35.0, 993.0999999999999], [36.0, 1695.857142857143], [37.0, 1394.857142857143], [38.0, 1195.142857142857], [39.0, 1237.5], [40.0, 1306.7777777777776], [41.0, 1295.7], [42.0, 3132.0], [43.0, 3186.272727272727], [44.0, 1541.307692307692], [45.0, 1460.6666666666665], [46.0, 1631.5000000000002], [47.0, 1648.2857142857142], [49.0, 1766.2352941176468], [48.0, 5271.5], [51.0, 1879.2000000000003], [52.0, 1991.2222222222222], [53.0, 2943.941176470588], [55.0, 1886.4999999999998], [56.0, 2470.857142857143], [57.0, 6819.0], [58.0, 2714.642857142857], [60.0, 2210.266666666667], [61.0, 2378.666666666666], [63.0, 2320.235294117647], [64.0, 2005.375], [66.0, 2022.4705882352944], [68.0, 3692.1481481481483], [70.0, 2200.157894736842], [73.0, 2350.5499999999997], [75.0, 2301.136363636364], [77.0, 2636.5652173913045], [78.0, 5331.5], [76.0, 5331.0], [80.0, 2639.3076923076924], [83.0, 2647.833333333333], [85.0, 2861.793103448276], [87.0, 5333.8], [86.0, 5334.0], [88.0, 2775.1851851851848], [92.0, 2942.290322580645], [96.0, 3144.0666666666666], [99.0, 3272.4411764705887], [103.0, 3297.1764705882356], [107.0, 3378.026315789474], [110.0, 5493.0], [109.0, 5328.5], [112.0, 3596.263157894737], [115.0, 5338.0], [114.0, 5415.0], [117.0, 4101.243902439025], [118.0, 4402.0], [119.0, 5414.0], [116.0, 5334.0], [122.0, 4139.0], [123.0, 5336.0], [120.0, 5402.714285714286], [127.0, 4253.595744680851], [133.0, 4231.3], [132.0, 5492.0], [131.0, 5494.2], [130.0, 5493.0], [129.0, 5385.333333333333], [128.0, 5335.0], [139.0, 4588.692307692308], [140.0, 5489.5], [138.0, 5392.454545454546], [136.0, 5425.8], [137.0, 5493.0], [145.0, 4622.169811320755], [146.0, 4191.0], [150.0, 4460.666666666667], [157.0, 4711.783333333336], [158.0, 5060.0], [159.0, 6020.375], [155.0, 5493.0], [154.0, 5916.2], [153.0, 5487.0], [152.0, 5489.0], [164.0, 5208.403846153848], [167.0, 7413.5], [165.0, 7429.0], [163.0, 7520.333333333333], [160.0, 5491.0], [173.0, 6268.7118644067805], [175.0, 5650.333333333334], [180.0, 8580.954545454546], [181.0, 7571.166666666667], [182.0, 5980.777777777776], [184.0, 6103.0], [188.0, 8662.769230769232], [191.0, 6230.434782608697], [187.0, 7837.0], [192.0, 6612.93009478673], [1.0, 5930.0]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[128.72348630929432, 4548.175086772071]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 192.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2659.6666666666665, "minX": 1.78906248E12, "maxY": 6096.35, "series": [{"data": [[1.78906254E12, 6096.35], [1.78906248E12, 3888.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78906254E12, 4168.566666666667], [1.78906248E12, 2659.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906254E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2141.8029702970266, "minX": 1.78906248E12, "maxY": 6083.510423247002, "series": [{"data": [[1.78906254E12, 6083.510423247002], [1.78906248E12, 2141.8029702970266]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906254E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2141.760396039603, "minX": 1.78906248E12, "maxY": 6083.459254579915, "series": [{"data": [[1.78906254E12, 6083.459254579915], [1.78906248E12, 2141.760396039603]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906254E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.15643564356435635, "minX": 1.78906248E12, "maxY": 0.17056222362602666, "series": [{"data": [[1.78906254E12, 0.17056222362602666], [1.78906248E12, 0.15643564356435635]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906254E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 513.0, "minX": 1.78906248E12, "maxY": 620.0, "series": [{"data": [[1.78906248E12, 620.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78906248E12, 513.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78906248E12, 610.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78906248E12, 620.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78906248E12, 568.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78906248E12, 614.4499999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906248E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 522.0, "minX": 1.0, "maxY": 8926.0, "series": [{"data": [[4.0, 563.0], [39.0, 614.0], [11.0, 533.0], [12.0, 522.0], [24.0, 581.0], [28.0, 571.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 5458.0], [2.0, 2955.0], [33.0, 7790.0], [35.0, 1311.0], [34.0, 3420.0], [36.0, 3583.0], [37.0, 7609.0], [39.0, 7309.0], [38.0, 3863.0], [41.0, 5277.0], [42.0, 2920.5], [43.0, 8926.0], [44.0, 4600.0], [47.0, 5231.0], [46.0, 5896.0], [49.0, 4763.0], [48.0, 5293.0], [3.0, 6206.0], [51.0, 5627.5], [50.0, 6571.0], [52.0, 5274.5], [53.0, 5344.0], [59.0, 5156.0], [62.0, 4231.0], [4.0, 647.0], [65.0, 5324.0], [6.0, 5650.0], [106.0, 6063.0], [124.0, 5491.0], [12.0, 625.5], [15.0, 5220.5], [1.0, 5157.0], [18.0, 6665.0], [19.0, 1926.0], [21.0, 7071.0], [22.0, 3941.5], [24.0, 1808.0], [25.0, 2274.0], [26.0, 2026.5], [27.0, 3606.5], [28.0, 2615.0], [29.0, 1571.0], [30.0, 3165.5], [31.0, 2890.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 124.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 522.0, "minX": 1.0, "maxY": 8926.0, "series": [{"data": [[4.0, 563.0], [39.0, 614.0], [11.0, 533.0], [12.0, 522.0], [24.0, 581.0], [28.0, 571.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 5458.0], [2.0, 2955.0], [33.0, 7790.0], [35.0, 1311.0], [34.0, 3420.0], [36.0, 3583.0], [37.0, 7609.0], [39.0, 7309.0], [38.0, 3863.0], [41.0, 5277.0], [42.0, 2920.5], [43.0, 8926.0], [44.0, 4600.0], [47.0, 5231.0], [46.0, 5896.0], [49.0, 4763.0], [48.0, 5293.0], [3.0, 6205.0], [51.0, 5627.5], [50.0, 6571.0], [52.0, 5274.5], [53.0, 5344.0], [59.0, 5156.0], [62.0, 4230.5], [4.0, 642.0], [65.0, 5324.0], [6.0, 5650.0], [106.0, 6063.0], [124.0, 5491.0], [12.0, 625.5], [15.0, 5220.5], [1.0, 5157.0], [18.0, 6665.0], [19.0, 1926.0], [21.0, 7071.0], [22.0, 3941.5], [24.0, 1808.0], [25.0, 2274.0], [26.0, 2026.5], [27.0, 3606.5], [28.0, 2615.0], [29.0, 1571.0], [30.0, 3165.5], [31.0, 2890.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 124.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 18.95, "minX": 1.78906248E12, "maxY": 24.266666666666666, "series": [{"data": [[1.78906254E12, 24.266666666666666], [1.78906248E12, 18.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906254E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.9, "minX": 1.78906248E12, "maxY": 25.483333333333334, "series": [{"data": [[1.78906254E12, 25.483333333333334], [1.78906248E12, 16.833333333333332]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78906254E12, 0.9]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906254E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6, "minX": 1.78906248E12, "maxY": 26.383333333333333, "series": [{"data": [[1.78906254E12, 26.383333333333333], [1.78906248E12, 15.233333333333333]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}, {"data": [[1.78906248E12, 1.6]], "isOverall": false, "label": "GET / config=3-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906254E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6, "minX": 1.78906248E12, "maxY": 26.383333333333333, "series": [{"data": [[1.78906248E12, 1.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78906254E12, 26.383333333333333], [1.78906248E12, 15.233333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906254E12, "title": "Total Transactions Per Second"}},
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

