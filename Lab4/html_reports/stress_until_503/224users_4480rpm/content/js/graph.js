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
        data: {"result": {"minY": 512.0, "minX": 0.0, "maxY": 10828.0, "series": [{"data": [[0.0, 512.0], [0.1, 517.0], [0.2, 521.0], [0.3, 525.0], [0.4, 525.0], [0.5, 528.0], [0.6, 531.0], [0.7, 533.0], [0.8, 534.0], [0.9, 536.0], [1.0, 537.0], [1.1, 539.0], [1.2, 543.0], [1.3, 544.0], [1.4, 546.0], [1.5, 549.0], [1.6, 551.0], [1.7, 554.0], [1.8, 557.0], [1.9, 558.0], [2.0, 562.0], [2.1, 565.0], [2.2, 565.0], [2.3, 569.0], [2.4, 570.0], [2.5, 571.0], [2.6, 574.0], [2.7, 577.0], [2.8, 584.0], [2.9, 584.0], [3.0, 588.0], [3.1, 590.0], [3.2, 593.0], [3.3, 595.0], [3.4, 598.0], [3.5, 606.0], [3.6, 608.0], [3.7, 612.0], [3.8, 621.0], [3.9, 625.0], [4.0, 628.0], [4.1, 633.0], [4.2, 635.0], [4.3, 640.0], [4.4, 642.0], [4.5, 649.0], [4.6, 653.0], [4.7, 656.0], [4.8, 657.0], [4.9, 659.0], [5.0, 668.0], [5.1, 672.0], [5.2, 673.0], [5.3, 678.0], [5.4, 685.0], [5.5, 691.0], [5.6, 693.0], [5.7, 700.0], [5.8, 708.0], [5.9, 709.0], [6.0, 713.0], [6.1, 714.0], [6.2, 717.0], [6.3, 728.0], [6.4, 737.0], [6.5, 740.0], [6.6, 742.0], [6.7, 748.0], [6.8, 753.0], [6.9, 767.0], [7.0, 769.0], [7.1, 776.0], [7.2, 781.0], [7.3, 789.0], [7.4, 793.0], [7.5, 801.0], [7.6, 813.0], [7.7, 818.0], [7.8, 826.0], [7.9, 837.0], [8.0, 852.0], [8.1, 860.0], [8.2, 864.0], [8.3, 868.0], [8.4, 892.0], [8.5, 896.0], [8.6, 908.0], [8.7, 929.0], [8.8, 948.0], [8.9, 956.0], [9.0, 964.0], [9.1, 969.0], [9.2, 1002.0], [9.3, 1023.0], [9.4, 1049.0], [9.5, 1080.0], [9.6, 1086.0], [9.7, 1097.0], [9.8, 1118.0], [9.9, 1134.0], [10.0, 1189.0], [10.1, 1200.0], [10.2, 1204.0], [10.3, 1223.0], [10.4, 1223.0], [10.5, 1259.0], [10.6, 1263.0], [10.7, 1279.0], [10.8, 1307.0], [10.9, 1341.0], [11.0, 1342.0], [11.1, 1426.0], [11.2, 1436.0], [11.3, 1457.0], [11.4, 1461.0], [11.5, 1505.0], [11.6, 1506.0], [11.7, 1577.0], [11.8, 1648.0], [11.9, 1649.0], [12.0, 1678.0], [12.1, 1678.0], [12.2, 1685.0], [12.3, 1685.0], [12.4, 1713.0], [12.5, 1750.0], [12.6, 1765.0], [12.7, 1800.0], [12.8, 1824.0], [12.9, 1824.0], [13.0, 1840.0], [13.1, 1889.0], [13.2, 1890.0], [13.3, 1891.0], [13.4, 1909.0], [13.5, 1915.0], [13.6, 1915.0], [13.7, 1917.0], [13.8, 1921.0], [13.9, 1947.0], [14.0, 1948.0], [14.1, 1950.0], [14.2, 1964.0], [14.3, 1999.0], [14.4, 2001.0], [14.5, 2022.0], [14.6, 2024.0], [14.7, 2026.0], [14.8, 2027.0], [14.9, 2027.0], [15.0, 2027.0], [15.1, 2042.0], [15.2, 2070.0], [15.3, 2071.0], [15.4, 2154.0], [15.5, 2155.0], [15.6, 2156.0], [15.7, 2173.0], [15.8, 2181.0], [15.9, 2182.0], [16.0, 2182.0], [16.1, 2183.0], [16.2, 2186.0], [16.3, 2186.0], [16.4, 2187.0], [16.5, 2188.0], [16.6, 2190.0], [16.7, 2191.0], [16.8, 2235.0], [16.9, 2236.0], [17.0, 2237.0], [17.1, 2237.0], [17.2, 2283.0], [17.3, 2321.0], [17.4, 2325.0], [17.5, 2325.0], [17.6, 2326.0], [17.7, 2326.0], [17.8, 2327.0], [17.9, 2328.0], [18.0, 2329.0], [18.1, 2372.0], [18.2, 2374.0], [18.3, 2375.0], [18.4, 2375.0], [18.5, 2403.0], [18.6, 2420.0], [18.7, 2421.0], [18.8, 2422.0], [18.9, 2434.0], [19.0, 2436.0], [19.1, 2439.0], [19.2, 2440.0], [19.3, 2441.0], [19.4, 2443.0], [19.5, 2445.0], [19.6, 2446.0], [19.7, 2446.0], [19.8, 2463.0], [19.9, 2463.0], [20.0, 2464.0], [20.1, 2464.0], [20.2, 2465.0], [20.3, 2465.0], [20.4, 2468.0], [20.5, 2469.0], [20.6, 2484.0], [20.7, 2485.0], [20.8, 2486.0], [20.9, 2487.0], [21.0, 2501.0], [21.1, 2509.0], [21.2, 2528.0], [21.3, 2616.0], [21.4, 2617.0], [21.5, 2617.0], [21.6, 2618.0], [21.7, 2618.0], [21.8, 2618.0], [21.9, 2618.0], [22.0, 2618.0], [22.1, 2619.0], [22.2, 2638.0], [22.3, 2672.0], [22.4, 2673.0], [22.5, 2680.0], [22.6, 2683.0], [22.7, 2683.0], [22.8, 2684.0], [22.9, 2684.0], [23.0, 2684.0], [23.1, 2685.0], [23.2, 2688.0], [23.3, 2688.0], [23.4, 2689.0], [23.5, 2698.0], [23.6, 2699.0], [23.7, 2701.0], [23.8, 2702.0], [23.9, 2702.0], [24.0, 2703.0], [24.1, 2703.0], [24.2, 2755.0], [24.3, 2796.0], [24.4, 2869.0], [24.5, 2871.0], [24.6, 2876.0], [24.7, 2976.0], [24.8, 2976.0], [24.9, 2976.0], [25.0, 2976.0], [25.1, 2977.0], [25.2, 2977.0], [25.3, 2977.0], [25.4, 2977.0], [25.5, 2978.0], [25.6, 2978.0], [25.7, 3022.0], [25.8, 3138.0], [25.9, 3140.0], [26.0, 3141.0], [26.1, 3142.0], [26.2, 3165.0], [26.3, 3165.0], [26.4, 3166.0], [26.5, 3166.0], [26.6, 3167.0], [26.7, 3169.0], [26.8, 3170.0], [26.9, 3171.0], [27.0, 3171.0], [27.1, 3172.0], [27.2, 3174.0], [27.3, 3174.0], [27.4, 3175.0], [27.5, 3181.0], [27.6, 3184.0], [27.7, 3202.0], [27.8, 3203.0], [27.9, 3203.0], [28.0, 3203.0], [28.1, 3204.0], [28.2, 3204.0], [28.3, 3205.0], [28.4, 3205.0], [28.5, 3205.0], [28.6, 3206.0], [28.7, 3207.0], [28.8, 3207.0], [28.9, 3208.0], [29.0, 3255.0], [29.1, 3256.0], [29.2, 3257.0], [29.3, 3277.0], [29.4, 3289.0], [29.5, 3313.0], [29.6, 3329.0], [29.7, 3362.0], [29.8, 3406.0], [29.9, 3408.0], [30.0, 3408.0], [30.1, 3409.0], [30.2, 3409.0], [30.3, 3409.0], [30.4, 3409.0], [30.5, 3410.0], [30.6, 3411.0], [30.7, 3454.0], [30.8, 3542.0], [30.9, 3558.0], [31.0, 3597.0], [31.1, 3662.0], [31.2, 3663.0], [31.3, 3664.0], [31.4, 3664.0], [31.5, 3664.0], [31.6, 3665.0], [31.7, 3666.0], [31.8, 3666.0], [31.9, 3667.0], [32.0, 3782.0], [32.1, 3783.0], [32.2, 3783.0], [32.3, 3783.0], [32.4, 3784.0], [32.5, 3784.0], [32.6, 3785.0], [32.7, 3785.0], [32.8, 3787.0], [32.9, 3787.0], [33.0, 3788.0], [33.1, 3798.0], [33.2, 3848.0], [33.3, 3990.0], [33.4, 4001.0], [33.5, 4002.0], [33.6, 4002.0], [33.7, 4002.0], [33.8, 4002.0], [33.9, 4003.0], [34.0, 4003.0], [34.1, 4005.0], [34.2, 4066.0], [34.3, 4117.0], [34.4, 4241.0], [34.5, 4242.0], [34.6, 4242.0], [34.7, 4242.0], [34.8, 4242.0], [34.9, 4243.0], [35.0, 4244.0], [35.1, 4244.0], [35.2, 4245.0], [35.3, 4246.0], [35.4, 4246.0], [35.5, 4246.0], [35.6, 4247.0], [35.7, 4338.0], [35.8, 4385.0], [35.9, 4525.0], [36.0, 4544.0], [36.1, 4545.0], [36.2, 4545.0], [36.3, 4545.0], [36.4, 4545.0], [36.5, 4545.0], [36.6, 4545.0], [36.7, 4546.0], [36.8, 4547.0], [36.9, 4548.0], [37.0, 4549.0], [37.1, 4549.0], [37.2, 4549.0], [37.3, 4549.0], [37.4, 4549.0], [37.5, 4550.0], [37.6, 4550.0], [37.7, 4550.0], [37.8, 4550.0], [37.9, 4550.0], [38.0, 4550.0], [38.1, 4550.0], [38.2, 4551.0], [38.3, 4551.0], [38.4, 4552.0], [38.5, 4552.0], [38.6, 4552.0], [38.7, 4553.0], [38.8, 4589.0], [38.9, 4589.0], [39.0, 4590.0], [39.1, 4590.0], [39.2, 4590.0], [39.3, 4591.0], [39.4, 4592.0], [39.5, 4592.0], [39.6, 4594.0], [39.7, 4594.0], [39.8, 4625.0], [39.9, 4664.0], [40.0, 4665.0], [40.1, 4666.0], [40.2, 4666.0], [40.3, 4666.0], [40.4, 4667.0], [40.5, 4667.0], [40.6, 4667.0], [40.7, 4668.0], [40.8, 4669.0], [40.9, 4670.0], [41.0, 4671.0], [41.1, 4732.0], [41.2, 4732.0], [41.3, 4792.0], [41.4, 5023.0], [41.5, 5024.0], [41.6, 5024.0], [41.7, 5025.0], [41.8, 5026.0], [41.9, 5026.0], [42.0, 5027.0], [42.1, 5027.0], [42.2, 5028.0], [42.3, 5031.0], [42.4, 5032.0], [42.5, 5033.0], [42.6, 5034.0], [42.7, 5061.0], [42.8, 5063.0], [42.9, 5064.0], [43.0, 5064.0], [43.1, 5065.0], [43.2, 5065.0], [43.3, 5066.0], [43.4, 5066.0], [43.5, 5067.0], [43.6, 5068.0], [43.7, 5094.0], [43.8, 5171.0], [43.9, 5184.0], [44.0, 5185.0], [44.1, 5212.0], [44.2, 5213.0], [44.3, 5214.0], [44.4, 5214.0], [44.5, 5215.0], [44.6, 5216.0], [44.7, 5216.0], [44.8, 5217.0], [44.9, 5243.0], [45.0, 5243.0], [45.1, 5244.0], [45.2, 5247.0], [45.3, 5247.0], [45.4, 5248.0], [45.5, 5275.0], [45.6, 5386.0], [45.7, 5387.0], [45.8, 5387.0], [45.9, 5387.0], [46.0, 5388.0], [46.1, 5388.0], [46.2, 5389.0], [46.3, 5389.0], [46.4, 5390.0], [46.5, 5390.0], [46.6, 5417.0], [46.7, 5443.0], [46.8, 5468.0], [46.9, 5511.0], [47.0, 5512.0], [47.1, 5512.0], [47.2, 5513.0], [47.3, 5514.0], [47.4, 5518.0], [47.5, 5585.0], [47.6, 5613.0], [47.7, 5677.0], [47.8, 5689.0], [47.9, 5689.0], [48.0, 5702.0], [48.1, 5703.0], [48.2, 5821.0], [48.3, 5891.0], [48.4, 5891.0], [48.5, 5897.0], [48.6, 5898.0], [48.7, 5899.0], [48.8, 5899.0], [48.9, 5899.0], [49.0, 5899.0], [49.1, 5933.0], [49.2, 5934.0], [49.3, 5934.0], [49.4, 5936.0], [49.5, 5936.0], [49.6, 5937.0], [49.7, 5946.0], [49.8, 5947.0], [49.9, 5947.0], [50.0, 5951.0], [50.1, 5951.0], [50.2, 5972.0], [50.3, 5973.0], [50.4, 5973.0], [50.5, 5973.0], [50.6, 5974.0], [50.7, 5975.0], [50.8, 5975.0], [50.9, 5976.0], [51.0, 5976.0], [51.1, 5976.0], [51.2, 5976.0], [51.3, 5977.0], [51.4, 5977.0], [51.5, 6023.0], [51.6, 6026.0], [51.7, 6029.0], [51.8, 6033.0], [51.9, 6033.0], [52.0, 6087.0], [52.1, 6173.0], [52.2, 6192.0], [52.3, 6199.0], [52.4, 6200.0], [52.5, 6246.0], [52.6, 6247.0], [52.7, 6247.0], [52.8, 6248.0], [52.9, 6254.0], [53.0, 6255.0], [53.1, 6255.0], [53.2, 6255.0], [53.3, 6256.0], [53.4, 6275.0], [53.5, 6275.0], [53.6, 6276.0], [53.7, 6277.0], [53.8, 6278.0], [53.9, 6280.0], [54.0, 6282.0], [54.1, 6283.0], [54.2, 6283.0], [54.3, 6283.0], [54.4, 6284.0], [54.5, 6285.0], [54.6, 6286.0], [54.7, 6287.0], [54.8, 6288.0], [54.9, 6289.0], [55.0, 6302.0], [55.1, 6303.0], [55.2, 6304.0], [55.3, 6328.0], [55.4, 6328.0], [55.5, 6329.0], [55.6, 6329.0], [55.7, 6329.0], [55.8, 6344.0], [55.9, 6345.0], [56.0, 6345.0], [56.1, 6345.0], [56.2, 6346.0], [56.3, 6346.0], [56.4, 6347.0], [56.5, 6347.0], [56.6, 6347.0], [56.7, 6347.0], [56.8, 6347.0], [56.9, 6348.0], [57.0, 6348.0], [57.1, 6354.0], [57.2, 6406.0], [57.3, 6407.0], [57.4, 6408.0], [57.5, 6409.0], [57.6, 6420.0], [57.7, 6429.0], [57.8, 6430.0], [57.9, 6431.0], [58.0, 6432.0], [58.1, 6433.0], [58.2, 6433.0], [58.3, 6434.0], [58.4, 6435.0], [58.5, 6453.0], [58.6, 6478.0], [58.7, 6493.0], [58.8, 6493.0], [58.9, 6494.0], [59.0, 6494.0], [59.1, 6495.0], [59.2, 6495.0], [59.3, 6496.0], [59.4, 6496.0], [59.5, 6496.0], [59.6, 6497.0], [59.7, 6497.0], [59.8, 6497.0], [59.9, 6498.0], [60.0, 6499.0], [60.1, 6500.0], [60.2, 6500.0], [60.3, 6505.0], [60.4, 6505.0], [60.5, 6506.0], [60.6, 6506.0], [60.7, 6507.0], [60.8, 6509.0], [60.9, 6521.0], [61.0, 6523.0], [61.1, 6523.0], [61.2, 6524.0], [61.3, 6524.0], [61.4, 6525.0], [61.5, 6526.0], [61.6, 6526.0], [61.7, 6527.0], [61.8, 6527.0], [61.9, 6528.0], [62.0, 6528.0], [62.1, 6528.0], [62.2, 6535.0], [62.3, 6599.0], [62.4, 6600.0], [62.5, 6609.0], [62.6, 6609.0], [62.7, 6625.0], [62.8, 6640.0], [62.9, 6640.0], [63.0, 6642.0], [63.1, 6646.0], [63.2, 6646.0], [63.3, 6647.0], [63.4, 6647.0], [63.5, 6647.0], [63.6, 6716.0], [63.7, 6717.0], [63.8, 6718.0], [63.9, 6719.0], [64.0, 6720.0], [64.1, 6721.0], [64.2, 6722.0], [64.3, 6722.0], [64.4, 6722.0], [64.5, 6723.0], [64.6, 6724.0], [64.7, 6724.0], [64.8, 6732.0], [64.9, 6737.0], [65.0, 6782.0], [65.1, 6782.0], [65.2, 6819.0], [65.3, 6917.0], [65.4, 6918.0], [65.5, 6971.0], [65.6, 6972.0], [65.7, 6973.0], [65.8, 6973.0], [65.9, 6974.0], [66.0, 6991.0], [66.1, 7016.0], [66.2, 7021.0], [66.3, 7030.0], [66.4, 7030.0], [66.5, 7031.0], [66.6, 7068.0], [66.7, 7094.0], [66.8, 7110.0], [66.9, 7110.0], [67.0, 7110.0], [67.1, 7111.0], [67.2, 7111.0], [67.3, 7112.0], [67.4, 7115.0], [67.5, 7116.0], [67.6, 7116.0], [67.7, 7117.0], [67.8, 7117.0], [67.9, 7118.0], [68.0, 7121.0], [68.1, 7153.0], [68.2, 7158.0], [68.3, 7164.0], [68.4, 7165.0], [68.5, 7166.0], [68.6, 7166.0], [68.7, 7167.0], [68.8, 7171.0], [68.9, 7172.0], [69.0, 7173.0], [69.1, 7176.0], [69.2, 7182.0], [69.3, 7182.0], [69.4, 7182.0], [69.5, 7183.0], [69.6, 7183.0], [69.7, 7183.0], [69.8, 7184.0], [69.9, 7184.0], [70.0, 7184.0], [70.1, 7184.0], [70.2, 7184.0], [70.3, 7199.0], [70.4, 7201.0], [70.5, 7203.0], [70.6, 7205.0], [70.7, 7208.0], [70.8, 7208.0], [70.9, 7209.0], [71.0, 7221.0], [71.1, 7223.0], [71.2, 7223.0], [71.3, 7223.0], [71.4, 7226.0], [71.5, 7243.0], [71.6, 7278.0], [71.7, 7278.0], [71.8, 7278.0], [71.9, 7279.0], [72.0, 7288.0], [72.1, 7335.0], [72.2, 7338.0], [72.3, 7338.0], [72.4, 7341.0], [72.5, 7341.0], [72.6, 7342.0], [72.7, 7343.0], [72.8, 7375.0], [72.9, 7387.0], [73.0, 7402.0], [73.1, 7409.0], [73.2, 7413.0], [73.3, 7413.0], [73.4, 7415.0], [73.5, 7415.0], [73.6, 7416.0], [73.7, 7416.0], [73.8, 7416.0], [73.9, 7418.0], [74.0, 7422.0], [74.1, 7422.0], [74.2, 7452.0], [74.3, 7453.0], [74.4, 7453.0], [74.5, 7455.0], [74.6, 7462.0], [74.7, 7462.0], [74.8, 7463.0], [74.9, 7485.0], [75.0, 7486.0], [75.1, 7486.0], [75.2, 7530.0], [75.3, 7655.0], [75.4, 7664.0], [75.5, 7664.0], [75.6, 7664.0], [75.7, 7665.0], [75.8, 7665.0], [75.9, 7665.0], [76.0, 7666.0], [76.1, 7667.0], [76.2, 7670.0], [76.3, 7702.0], [76.4, 7721.0], [76.5, 7732.0], [76.6, 7791.0], [76.7, 7862.0], [76.8, 7863.0], [76.9, 7864.0], [77.0, 7864.0], [77.1, 7864.0], [77.2, 7865.0], [77.3, 7865.0], [77.4, 7865.0], [77.5, 7865.0], [77.6, 7865.0], [77.7, 7866.0], [77.8, 7866.0], [77.9, 7867.0], [78.0, 7867.0], [78.1, 7909.0], [78.2, 7910.0], [78.3, 7911.0], [78.4, 7912.0], [78.5, 7912.0], [78.6, 7912.0], [78.7, 7913.0], [78.8, 7913.0], [78.9, 7913.0], [79.0, 7914.0], [79.1, 7914.0], [79.2, 7916.0], [79.3, 7917.0], [79.4, 7938.0], [79.5, 7948.0], [79.6, 7950.0], [79.7, 7952.0], [79.8, 7966.0], [79.9, 7978.0], [80.0, 7990.0], [80.1, 7990.0], [80.2, 7990.0], [80.3, 7992.0], [80.4, 7993.0], [80.5, 7993.0], [80.6, 8132.0], [80.7, 8134.0], [80.8, 8135.0], [80.9, 8184.0], [81.0, 8185.0], [81.1, 8186.0], [81.2, 8186.0], [81.3, 8189.0], [81.4, 8195.0], [81.5, 8207.0], [81.6, 8228.0], [81.7, 8239.0], [81.8, 8240.0], [81.9, 8240.0], [82.0, 8241.0], [82.1, 8241.0], [82.2, 8241.0], [82.3, 8242.0], [82.4, 8242.0], [82.5, 8243.0], [82.6, 8244.0], [82.7, 8244.0], [82.8, 8260.0], [82.9, 8260.0], [83.0, 8261.0], [83.1, 8261.0], [83.2, 8261.0], [83.3, 8262.0], [83.4, 8262.0], [83.5, 8263.0], [83.6, 8264.0], [83.7, 8338.0], [83.8, 8379.0], [83.9, 8404.0], [84.0, 8404.0], [84.1, 8405.0], [84.2, 8406.0], [84.3, 8407.0], [84.4, 8409.0], [84.5, 8410.0], [84.6, 8443.0], [84.7, 8444.0], [84.8, 8444.0], [84.9, 8445.0], [85.0, 8468.0], [85.1, 8469.0], [85.2, 8489.0], [85.3, 8578.0], [85.4, 8579.0], [85.5, 8598.0], [85.6, 8599.0], [85.7, 8599.0], [85.8, 8601.0], [85.9, 8609.0], [86.0, 8616.0], [86.1, 8617.0], [86.2, 8619.0], [86.3, 8621.0], [86.4, 8718.0], [86.5, 8727.0], [86.6, 8727.0], [86.7, 8728.0], [86.8, 8728.0], [86.9, 8729.0], [87.0, 8730.0], [87.1, 8732.0], [87.2, 8746.0], [87.3, 8754.0], [87.4, 8756.0], [87.5, 8802.0], [87.6, 8803.0], [87.7, 8803.0], [87.8, 8803.0], [87.9, 8804.0], [88.0, 8805.0], [88.1, 8805.0], [88.2, 8805.0], [88.3, 8806.0], [88.4, 8806.0], [88.5, 8806.0], [88.6, 8811.0], [88.7, 8948.0], [88.8, 8948.0], [88.9, 8948.0], [89.0, 8948.0], [89.1, 8949.0], [89.2, 8950.0], [89.3, 8950.0], [89.4, 8958.0], [89.5, 8960.0], [89.6, 8961.0], [89.7, 8961.0], [89.8, 8962.0], [89.9, 8962.0], [90.0, 8963.0], [90.1, 8964.0], [90.2, 9016.0], [90.3, 9072.0], [90.4, 9233.0], [90.5, 9233.0], [90.6, 9234.0], [90.7, 9234.0], [90.8, 9234.0], [90.9, 9234.0], [91.0, 9235.0], [91.1, 9235.0], [91.2, 9236.0], [91.3, 9237.0], [91.4, 9280.0], [91.5, 9313.0], [91.6, 9324.0], [91.7, 9324.0], [91.8, 9325.0], [91.9, 9339.0], [92.0, 9343.0], [92.1, 9344.0], [92.2, 9353.0], [92.3, 9353.0], [92.4, 9355.0], [92.5, 9362.0], [92.6, 9364.0], [92.7, 9364.0], [92.8, 9365.0], [92.9, 9365.0], [93.0, 9366.0], [93.1, 9447.0], [93.2, 9448.0], [93.3, 9448.0], [93.4, 9485.0], [93.5, 9504.0], [93.6, 9526.0], [93.7, 9527.0], [93.8, 9528.0], [93.9, 9528.0], [94.0, 9528.0], [94.1, 9529.0], [94.2, 9529.0], [94.3, 9531.0], [94.4, 9579.0], [94.5, 9581.0], [94.6, 9581.0], [94.7, 9582.0], [94.8, 9591.0], [94.9, 9591.0], [95.0, 9592.0], [95.1, 9642.0], [95.2, 9642.0], [95.3, 9642.0], [95.4, 9644.0], [95.5, 9645.0], [95.6, 9645.0], [95.7, 9645.0], [95.8, 9646.0], [95.9, 9684.0], [96.0, 9822.0], [96.1, 9870.0], [96.2, 9871.0], [96.3, 9873.0], [96.4, 9874.0], [96.5, 9874.0], [96.6, 9874.0], [96.7, 9874.0], [96.8, 9876.0], [96.9, 9895.0], [97.0, 9895.0], [97.1, 9896.0], [97.2, 9897.0], [97.3, 9897.0], [97.4, 9907.0], [97.5, 9908.0], [97.6, 9908.0], [97.7, 9908.0], [97.8, 9909.0], [97.9, 9909.0], [98.0, 9910.0], [98.1, 9912.0], [98.2, 9999.0], [98.3, 9999.0], [98.4, 10000.0], [98.5, 10000.0], [98.6, 10001.0], [98.7, 10004.0], [98.8, 10004.0], [98.9, 10005.0], [99.0, 10005.0], [99.1, 10300.0], [99.2, 10418.0], [99.3, 10419.0], [99.4, 10419.0], [99.5, 10422.0], [99.6, 10423.0], [99.7, 10824.0], [99.8, 10825.0], [99.9, 10825.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 103.0, "series": [{"data": [[500.0, 91.0], [600.0, 61.0], [700.0, 48.0], [800.0, 29.0], [900.0, 16.0], [1000.0, 16.0], [1100.0, 8.0], [1200.0, 18.0], [1300.0, 8.0], [1400.0, 11.0], [1500.0, 8.0], [1600.0, 16.0], [1700.0, 9.0], [1800.0, 17.0], [1900.0, 28.0], [2000.0, 26.0], [2100.0, 37.0], [2300.0, 33.0], [2200.0, 14.0], [2400.0, 66.0], [2500.0, 8.0], [2600.0, 63.0], [2700.0, 19.0], [2800.0, 8.0], [2900.0, 28.0], [3000.0, 3.0], [3100.0, 49.0], [3300.0, 7.0], [3200.0, 50.0], [3400.0, 26.0], [3500.0, 8.0], [3700.0, 32.0], [3600.0, 24.0], [3800.0, 5.0], [3900.0, 1.0], [4000.0, 25.0], [4300.0, 5.0], [4100.0, 3.0], [4200.0, 35.0], [4500.0, 103.0], [4600.0, 35.0], [4800.0, 1.0], [4700.0, 7.0], [5000.0, 63.0], [5100.0, 8.0], [4900.0, 1.0], [5200.0, 40.0], [5300.0, 27.0], [5500.0, 19.0], [5600.0, 11.0], [5400.0, 7.0], [5800.0, 23.0], [5700.0, 7.0], [6100.0, 8.0], [6000.0, 18.0], [5900.0, 63.0], [6200.0, 68.0], [6300.0, 59.0], [6400.0, 78.0], [6500.0, 62.0], [6600.0, 32.0], [6700.0, 42.0], [6900.0, 20.0], [6800.0, 4.0], [7100.0, 97.0], [7000.0, 19.0], [7400.0, 58.0], [7200.0, 44.0], [7300.0, 26.0], [7600.0, 27.0], [7500.0, 3.0], [7900.0, 66.0], [7700.0, 11.0], [7800.0, 37.0], [8000.0, 1.0], [8100.0, 23.0], [8700.0, 29.0], [8400.0, 37.0], [8200.0, 60.0], [8500.0, 13.0], [8300.0, 4.0], [8600.0, 17.0], [9000.0, 5.0], [9200.0, 31.0], [8800.0, 32.0], [8900.0, 40.0], [9500.0, 42.0], [9400.0, 13.0], [9300.0, 41.0], [9600.0, 23.0], [9700.0, 2.0], [9800.0, 36.0], [9900.0, 26.0], [10000.0, 20.0], [10300.0, 3.0], [10400.0, 13.0], [10800.0, 9.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 101.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2572.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 101.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2572.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 40.230616302186874, "minX": 1.78906266E12, "maxY": 183.09215017064855, "series": [{"data": [[1.78906266E12, 40.230616302186874], [1.78906278E12, 183.09215017064855], [1.78906272E12, 172.9741161616164]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 224 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906278E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 525.0, "minX": 4.0, "maxY": 10457.272727272726, "series": [{"data": [[4.0, 655.5], [5.0, 584.5], [6.0, 4893.142857142858], [7.0, 525.8], [8.0, 2081.5], [9.0, 525.0], [10.0, 541.25], [11.0, 1562.5], [12.0, 2271.0], [13.0, 542.8333333333334], [14.0, 2532.4444444444443], [15.0, 546.4285714285714], [16.0, 2257.8571428571427], [17.0, 565.0], [18.0, 570.0], [19.0, 1764.9], [20.0, 589.0], [21.0, 603.6666666666666], [22.0, 616.1818181818184], [23.0, 632.6666666666666], [24.0, 654.4285714285714], [25.0, 1826.7], [26.0, 672.8], [27.0, 687.5384615384614], [28.0, 712.8571428571428], [29.0, 3703.818181818182], [30.0, 748.4], [31.0, 774.3], [32.0, 797.6666666666666], [33.0, 826.1], [34.0, 866.2500000000001], [35.0, 3389.285714285714], [36.0, 936.5833333333334], [37.0, 1028.1666666666667], [38.0, 1027.5555555555557], [39.0, 2370.5], [40.0, 2259.714285714286], [41.0, 2489.166666666667], [42.0, 2572.333333333333], [43.0, 1923.5], [44.0, 1486.7142857142858], [45.0, 3237.5], [46.0, 2860.7], [47.0, 1593.7142857142858], [49.0, 1732.3333333333333], [50.0, 2451.1], [52.0, 3038.8333333333335], [54.0, 2578.75], [55.0, 3025.5384615384614], [57.0, 2133.3846153846152], [56.0, 7422.0], [59.0, 2213.769230769231], [61.0, 6506.0], [62.0, 2314.5333333333333], [64.0, 2383.8], [66.0, 2358.7777777777774], [68.0, 2273.529411764706], [71.0, 2550.3333333333335], [70.0, 8804.0], [69.0, 8803.0], [74.0, 2363.0499999999997], [73.0, 8803.0], [76.0, 4437.918918918918], [79.0, 2384.318181818182], [82.0, 2553.884615384616], [81.0, 6496.75], [80.0, 6500.0], [86.0, 2574.48], [87.0, 6495.0], [89.0, 2786.965517241379], [91.0, 6496.0], [90.0, 6497.0], [92.0, 2790.0], [94.0, 6500.0], [93.0, 6496.666666666667], [97.0, 3063.222222222222], [99.0, 6495.75], [98.0, 6498.333333333333], [101.0, 3361.125], [100.0, 6497.0], [106.0, 3389.8499999999995], [111.0, 3587.6571428571433], [115.0, 6493.0], [118.0, 4034.755555555555], [119.0, 6494.888888888889], [117.0, 6494.0], [116.0, 6495.5], [123.0, 4152.024390243902], [126.0, 10457.272727272726], [124.0, 6496.0], [130.0, 4234.529411764705], [135.0, 4040.2340425531925], [134.0, 6729.5], [133.0, 6857.0], [132.0, 7110.0], [131.0, 6347.0], [142.0, 4303.929824561404], [143.0, 7111.0], [141.0, 7111.0], [140.0, 6728.25], [139.0, 6347.0], [138.0, 6347.0], [150.0, 4795.038461538463], [148.0, 6347.0], [147.0, 6347.0], [145.0, 7111.0], [158.0, 5176.230769230769], [157.0, 7209.0], [156.0, 7209.0], [153.0, 6728.250000000001], [166.0, 7543.25], [167.0, 5414.259259259261], [165.0, 10005.0], [162.0, 7183.0], [161.0, 7167.333333333333], [160.0, 7159.0], [172.0, 10005.0], [171.0, 7208.5], [168.0, 7208.0], [176.0, 7941.538461538462], [177.0, 6041.607142857142], [178.0, 5184.25], [182.0, 9070.333333333334], [180.0, 10005.0], [184.0, 7023.2], [185.0, 8068.9], [186.0, 5843.318181818181], [187.0, 7759.5], [189.0, 5934.733333333333], [191.0, 9999.699999999999], [188.0, 10001.0], [195.0, 8823.515151515148], [196.0, 7791.5], [197.0, 8228.5], [199.0, 6107.558139534883], [193.0, 6091.0], [202.0, 8484.95], [203.0, 7341.25], [207.0, 9507.0], [205.0, 9529.0], [200.0, 7028.0], [210.0, 7903.61111111111], [214.0, 6551.257142857142], [209.0, 9484.0], [216.0, 7428.375000000002], [218.0, 6865.0], [220.0, 6109.222222222221], [221.0, 9529.0], [224.0, 7717.885462555063]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[150.2124953236064, 5398.080808080816]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 224.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1324.5666666666666, "minX": 1.78906266E12, "maxY": 6099.766666666666, "series": [{"data": [[1.78906266E12, 1936.55], [1.78906278E12, 2257.5], [1.78906272E12, 6099.766666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78906266E12, 1324.5666666666666], [1.78906278E12, 1543.1333333333334], [1.78906272E12, 4171.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906278E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1313.7157057654083, "minX": 1.78906266E12, "maxY": 7598.332764505116, "series": [{"data": [[1.78906266E12, 1313.7157057654083], [1.78906278E12, 7598.332764505116], [1.78906272E12, 5881.090909090919]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906278E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1313.6600397614309, "minX": 1.78906266E12, "maxY": 7598.3105802047785, "series": [{"data": [[1.78906266E12, 1313.6600397614309], [1.78906278E12, 7598.3105802047785], [1.78906272E12, 5881.081439393945]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906278E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.12121212121212116, "minX": 1.78906266E12, "maxY": 0.20079522862823054, "series": [{"data": [[1.78906266E12, 0.20079522862823054], [1.78906278E12, 0.16723549488054607], [1.78906272E12, 0.12121212121212116]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906278E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 512.0, "minX": 1.78906266E12, "maxY": 617.0, "series": [{"data": [[1.78906266E12, 617.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78906266E12, 512.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78906266E12, 600.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78906266E12, 616.9200000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78906266E12, 558.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78906266E12, 608.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906266E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 527.0, "minX": 2.0, "maxY": 9527.0, "series": [{"data": [[8.0, 536.0], [32.0, 611.0], [21.0, 536.0], [27.0, 562.0], [15.0, 527.0], [31.0, 588.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 643.0], [33.0, 2441.0], [2.0, 6091.0], [35.0, 3784.0], [37.0, 4113.0], [39.0, 3379.5], [38.0, 7912.0], [40.0, 2614.5], [41.0, 4549.0], [43.0, 7223.0], [45.0, 4545.0], [44.0, 6282.5], [47.0, 4589.0], [46.0, 8620.0], [48.0, 8059.0], [51.0, 5094.0], [54.0, 2683.0], [57.0, 4732.0], [65.0, 6346.0], [4.0, 7194.0], [64.0, 7866.5], [68.0, 5109.5], [72.0, 9234.0], [5.0, 6737.0], [80.0, 7118.0], [86.0, 6345.0], [88.0, 7452.0], [126.0, 6718.0], [8.0, 654.0], [9.0, 7949.0], [10.0, 7203.0], [15.0, 2156.0], [16.0, 8404.5], [17.0, 4938.5], [18.0, 6062.0], [21.0, 1263.0], [22.0, 2181.0], [23.0, 2191.0], [24.0, 7167.0], [25.0, 8949.0], [26.0, 2619.0], [28.0, 1824.0], [30.0, 4616.5], [31.0, 9527.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 126.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 527.0, "minX": 2.0, "maxY": 9527.0, "series": [{"data": [[8.0, 536.0], [32.0, 611.0], [21.0, 536.0], [27.0, 562.0], [15.0, 527.0], [31.0, 588.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 643.0], [33.0, 2441.0], [2.0, 6091.0], [35.0, 3784.0], [37.0, 4113.0], [39.0, 3379.5], [38.0, 7912.0], [40.0, 2614.5], [41.0, 4549.0], [43.0, 7223.0], [45.0, 4545.0], [44.0, 6282.5], [47.0, 4589.0], [46.0, 8620.0], [48.0, 8059.0], [51.0, 5094.0], [54.0, 2683.0], [57.0, 4732.0], [65.0, 6346.0], [4.0, 7194.0], [64.0, 7866.5], [68.0, 5109.5], [72.0, 9234.0], [5.0, 6737.0], [80.0, 7118.0], [86.0, 6345.0], [88.0, 7452.0], [126.0, 6717.5], [8.0, 652.0], [9.0, 7949.0], [10.0, 7203.0], [15.0, 2156.0], [16.0, 8404.5], [17.0, 4938.5], [18.0, 6062.0], [21.0, 1263.0], [22.0, 2181.0], [23.0, 2191.0], [24.0, 7167.0], [25.0, 8949.0], [26.0, 2619.0], [28.0, 1824.0], [30.0, 4616.0], [31.0, 9527.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 126.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.033333333333333, "minX": 1.78906266E12, "maxY": 28.9, "series": [{"data": [[1.78906266E12, 9.616666666666667], [1.78906278E12, 6.033333333333333], [1.78906272E12, 28.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906278E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.78906266E12, "maxY": 25.716666666666665, "series": [{"data": [[1.78906266E12, 8.383333333333333], [1.78906278E12, 9.066666666666666], [1.78906272E12, 25.716666666666665]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78906278E12, 0.7], [1.78906272E12, 0.6833333333333333]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906278E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6833333333333333, "minX": 1.78906266E12, "maxY": 26.4, "series": [{"data": [[1.78906266E12, 6.7], [1.78906278E12, 9.766666666666667], [1.78906272E12, 26.4]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}, {"data": [[1.78906266E12, 1.6833333333333333]], "isOverall": false, "label": "GET / config=3-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906278E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6833333333333333, "minX": 1.78906266E12, "maxY": 26.4, "series": [{"data": [[1.78906266E12, 1.6833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78906266E12, 6.7], [1.78906278E12, 9.766666666666667], [1.78906272E12, 26.4]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906278E12, "title": "Total Transactions Per Second"}},
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

