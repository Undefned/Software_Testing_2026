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
        data: {"result": {"minY": 515.0, "minX": 0.0, "maxY": 11200.0, "series": [{"data": [[0.0, 515.0], [0.1, 518.0], [0.2, 522.0], [0.3, 525.0], [0.4, 527.0], [0.5, 528.0], [0.6, 531.0], [0.7, 533.0], [0.8, 537.0], [0.9, 538.0], [1.0, 540.0], [1.1, 544.0], [1.2, 545.0], [1.3, 549.0], [1.4, 551.0], [1.5, 554.0], [1.6, 556.0], [1.7, 557.0], [1.8, 558.0], [1.9, 559.0], [2.0, 562.0], [2.1, 565.0], [2.2, 568.0], [2.3, 570.0], [2.4, 570.0], [2.5, 573.0], [2.6, 577.0], [2.7, 579.0], [2.8, 582.0], [2.9, 584.0], [3.0, 590.0], [3.1, 592.0], [3.2, 595.0], [3.3, 597.0], [3.4, 598.0], [3.5, 603.0], [3.6, 609.0], [3.7, 610.0], [3.8, 615.0], [3.9, 621.0], [4.0, 622.0], [4.1, 623.0], [4.2, 628.0], [4.3, 633.0], [4.4, 635.0], [4.5, 642.0], [4.6, 643.0], [4.7, 647.0], [4.8, 652.0], [4.9, 655.0], [5.0, 658.0], [5.1, 665.0], [5.2, 668.0], [5.3, 671.0], [5.4, 682.0], [5.5, 686.0], [5.6, 688.0], [5.7, 694.0], [5.8, 697.0], [5.9, 702.0], [6.0, 707.0], [6.1, 716.0], [6.2, 721.0], [6.3, 728.0], [6.4, 732.0], [6.5, 742.0], [6.6, 745.0], [6.7, 748.0], [6.8, 758.0], [6.9, 761.0], [7.0, 769.0], [7.1, 776.0], [7.2, 782.0], [7.3, 787.0], [7.4, 790.0], [7.5, 804.0], [7.6, 808.0], [7.7, 821.0], [7.8, 828.0], [7.9, 832.0], [8.0, 845.0], [8.1, 851.0], [8.2, 851.0], [8.3, 860.0], [8.4, 878.0], [8.5, 890.0], [8.6, 899.0], [8.7, 902.0], [8.8, 916.0], [8.9, 923.0], [9.0, 933.0], [9.1, 943.0], [9.2, 958.0], [9.3, 967.0], [9.4, 977.0], [9.5, 1018.0], [9.6, 1032.0], [9.7, 1062.0], [9.8, 1073.0], [9.9, 1083.0], [10.0, 1104.0], [10.1, 1135.0], [10.2, 1169.0], [10.3, 1188.0], [10.4, 1242.0], [10.5, 1246.0], [10.6, 1253.0], [10.7, 1263.0], [10.8, 1264.0], [10.9, 1279.0], [11.0, 1334.0], [11.1, 1346.0], [11.2, 1377.0], [11.3, 1432.0], [11.4, 1433.0], [11.5, 1435.0], [11.6, 1436.0], [11.7, 1451.0], [11.8, 1453.0], [11.9, 1495.0], [12.0, 1523.0], [12.1, 1540.0], [12.2, 1619.0], [12.3, 1625.0], [12.4, 1637.0], [12.5, 1638.0], [12.6, 1645.0], [12.7, 1672.0], [12.8, 1694.0], [12.9, 1699.0], [13.0, 1699.0], [13.1, 1744.0], [13.2, 1750.0], [13.3, 1751.0], [13.4, 1755.0], [13.5, 1767.0], [13.6, 1767.0], [13.7, 1787.0], [13.8, 1790.0], [13.9, 1809.0], [14.0, 1811.0], [14.1, 1812.0], [14.2, 1812.0], [14.3, 1814.0], [14.4, 1821.0], [14.5, 1823.0], [14.6, 1870.0], [14.7, 1934.0], [14.8, 1942.0], [14.9, 1943.0], [15.0, 1962.0], [15.1, 1975.0], [15.2, 1975.0], [15.3, 1996.0], [15.4, 1996.0], [15.5, 1997.0], [15.6, 2081.0], [15.7, 2082.0], [15.8, 2083.0], [15.9, 2089.0], [16.0, 2094.0], [16.1, 2094.0], [16.2, 2095.0], [16.3, 2097.0], [16.4, 2097.0], [16.5, 2098.0], [16.6, 2099.0], [16.7, 2100.0], [16.8, 2109.0], [16.9, 2110.0], [17.0, 2112.0], [17.1, 2129.0], [17.2, 2131.0], [17.3, 2165.0], [17.4, 2168.0], [17.5, 2170.0], [17.6, 2170.0], [17.7, 2171.0], [17.8, 2173.0], [17.9, 2180.0], [18.0, 2181.0], [18.1, 2181.0], [18.2, 2182.0], [18.3, 2182.0], [18.4, 2201.0], [18.5, 2214.0], [18.6, 2225.0], [18.7, 2264.0], [18.8, 2265.0], [18.9, 2265.0], [19.0, 2265.0], [19.1, 2265.0], [19.2, 2265.0], [19.3, 2266.0], [19.4, 2266.0], [19.5, 2267.0], [19.6, 2303.0], [19.7, 2304.0], [19.8, 2307.0], [19.9, 2310.0], [20.0, 2312.0], [20.1, 2313.0], [20.2, 2314.0], [20.3, 2314.0], [20.4, 2315.0], [20.5, 2315.0], [20.6, 2316.0], [20.7, 2326.0], [20.8, 2326.0], [20.9, 2326.0], [21.0, 2327.0], [21.1, 2328.0], [21.2, 2329.0], [21.3, 2395.0], [21.4, 2395.0], [21.5, 2396.0], [21.6, 2451.0], [21.7, 2454.0], [21.8, 2454.0], [21.9, 2454.0], [22.0, 2467.0], [22.1, 2473.0], [22.2, 2477.0], [22.3, 2512.0], [22.4, 2554.0], [22.5, 2559.0], [22.6, 2568.0], [22.7, 2569.0], [22.8, 2569.0], [22.9, 2571.0], [23.0, 2571.0], [23.1, 2572.0], [23.2, 2573.0], [23.3, 2585.0], [23.4, 2585.0], [23.5, 2586.0], [23.6, 2587.0], [23.7, 2631.0], [23.8, 2721.0], [23.9, 2722.0], [24.0, 2723.0], [24.1, 2723.0], [24.2, 2723.0], [24.3, 2724.0], [24.4, 2724.0], [24.5, 2725.0], [24.6, 2727.0], [24.7, 2730.0], [24.8, 2733.0], [24.9, 2734.0], [25.0, 2757.0], [25.1, 2832.0], [25.2, 2834.0], [25.3, 2834.0], [25.4, 2853.0], [25.5, 2867.0], [25.6, 2868.0], [25.7, 2870.0], [25.8, 2870.0], [25.9, 2871.0], [26.0, 2873.0], [26.1, 2874.0], [26.2, 2875.0], [26.3, 2876.0], [26.4, 2879.0], [26.5, 2886.0], [26.6, 2888.0], [26.7, 2888.0], [26.8, 2917.0], [26.9, 3036.0], [27.0, 3040.0], [27.1, 3043.0], [27.2, 3063.0], [27.3, 3063.0], [27.4, 3064.0], [27.5, 3065.0], [27.6, 3065.0], [27.7, 3066.0], [27.8, 3067.0], [27.9, 3067.0], [28.0, 3068.0], [28.1, 3069.0], [28.2, 3135.0], [28.3, 3140.0], [28.4, 3141.0], [28.5, 3141.0], [28.6, 3142.0], [28.7, 3142.0], [28.8, 3143.0], [28.9, 3207.0], [29.0, 3218.0], [29.1, 3279.0], [29.2, 3283.0], [29.3, 3283.0], [29.4, 3284.0], [29.5, 3318.0], [29.6, 3318.0], [29.7, 3319.0], [29.8, 3320.0], [29.9, 3320.0], [30.0, 3322.0], [30.1, 3322.0], [30.2, 3323.0], [30.3, 3324.0], [30.4, 3325.0], [30.5, 3327.0], [30.6, 3410.0], [30.7, 3411.0], [30.8, 3412.0], [30.9, 3413.0], [31.0, 3413.0], [31.1, 3414.0], [31.2, 3421.0], [31.3, 3456.0], [31.4, 3493.0], [31.5, 3513.0], [31.6, 3514.0], [31.7, 3515.0], [31.8, 3516.0], [31.9, 3516.0], [32.0, 3517.0], [32.1, 3518.0], [32.2, 3540.0], [32.3, 3541.0], [32.4, 3542.0], [32.5, 3542.0], [32.6, 3542.0], [32.7, 3543.0], [32.8, 3543.0], [32.9, 3544.0], [33.0, 3544.0], [33.1, 3550.0], [33.2, 3551.0], [33.3, 3552.0], [33.4, 3552.0], [33.5, 3553.0], [33.6, 3553.0], [33.7, 3553.0], [33.8, 3554.0], [33.9, 3556.0], [34.0, 3601.0], [34.1, 3610.0], [34.2, 3616.0], [34.3, 3616.0], [34.4, 3618.0], [34.5, 3618.0], [34.6, 3618.0], [34.7, 3619.0], [34.8, 3620.0], [34.9, 3620.0], [35.0, 3621.0], [35.1, 3621.0], [35.2, 3681.0], [35.3, 3745.0], [35.4, 3895.0], [35.5, 3932.0], [35.6, 3933.0], [35.7, 3935.0], [35.8, 3936.0], [35.9, 3936.0], [36.0, 3936.0], [36.1, 3937.0], [36.2, 3937.0], [36.3, 3937.0], [36.4, 3937.0], [36.5, 3946.0], [36.6, 3970.0], [36.7, 4058.0], [36.8, 4123.0], [36.9, 4123.0], [37.0, 4124.0], [37.1, 4124.0], [37.2, 4124.0], [37.3, 4125.0], [37.4, 4126.0], [37.5, 4127.0], [37.6, 4129.0], [37.7, 4130.0], [37.8, 4184.0], [37.9, 4197.0], [38.0, 4197.0], [38.1, 4197.0], [38.2, 4198.0], [38.3, 4198.0], [38.4, 4198.0], [38.5, 4198.0], [38.6, 4198.0], [38.7, 4198.0], [38.8, 4199.0], [38.9, 4256.0], [39.0, 4421.0], [39.1, 4480.0], [39.2, 4505.0], [39.3, 4505.0], [39.4, 4507.0], [39.5, 4507.0], [39.6, 4508.0], [39.7, 4508.0], [39.8, 4508.0], [39.9, 4508.0], [40.0, 4509.0], [40.1, 4509.0], [40.2, 4518.0], [40.3, 4518.0], [40.4, 4519.0], [40.5, 4519.0], [40.6, 4521.0], [40.7, 4524.0], [40.8, 4525.0], [40.9, 4525.0], [41.0, 4525.0], [41.1, 4527.0], [41.2, 4527.0], [41.3, 4529.0], [41.4, 4530.0], [41.5, 4531.0], [41.6, 4547.0], [41.7, 4675.0], [41.8, 4676.0], [41.9, 4676.0], [42.0, 4676.0], [42.1, 4676.0], [42.2, 4676.0], [42.3, 4691.0], [42.4, 4692.0], [42.5, 4692.0], [42.6, 4693.0], [42.7, 4714.0], [42.8, 4767.0], [42.9, 4786.0], [43.0, 4787.0], [43.1, 4787.0], [43.2, 4788.0], [43.3, 4789.0], [43.4, 4790.0], [43.5, 4790.0], [43.6, 4791.0], [43.7, 4794.0], [43.8, 4794.0], [43.9, 4864.0], [44.0, 4890.0], [44.1, 4892.0], [44.2, 4919.0], [44.3, 4919.0], [44.4, 4919.0], [44.5, 4920.0], [44.6, 4920.0], [44.7, 4920.0], [44.8, 4921.0], [44.9, 4921.0], [45.0, 4921.0], [45.1, 4921.0], [45.2, 4921.0], [45.3, 4921.0], [45.4, 4921.0], [45.5, 4922.0], [45.6, 4922.0], [45.7, 4922.0], [45.8, 4923.0], [45.9, 5001.0], [46.0, 5031.0], [46.1, 5031.0], [46.2, 5031.0], [46.3, 5032.0], [46.4, 5032.0], [46.5, 5032.0], [46.6, 5033.0], [46.7, 5033.0], [46.8, 5035.0], [46.9, 5047.0], [47.0, 5049.0], [47.1, 5057.0], [47.2, 5058.0], [47.3, 5058.0], [47.4, 5058.0], [47.5, 5058.0], [47.6, 5059.0], [47.7, 5060.0], [47.8, 5060.0], [47.9, 5113.0], [48.0, 5295.0], [48.1, 5295.0], [48.2, 5298.0], [48.3, 5299.0], [48.4, 5299.0], [48.5, 5299.0], [48.6, 5315.0], [48.7, 5317.0], [48.8, 5320.0], [48.9, 5320.0], [49.0, 5367.0], [49.1, 5381.0], [49.2, 5382.0], [49.3, 5383.0], [49.4, 5404.0], [49.5, 5404.0], [49.6, 5405.0], [49.7, 5405.0], [49.8, 5405.0], [49.9, 5406.0], [50.0, 5406.0], [50.1, 5407.0], [50.2, 5407.0], [50.3, 5453.0], [50.4, 5467.0], [50.5, 5467.0], [50.6, 5468.0], [50.7, 5470.0], [50.8, 5471.0], [50.9, 5471.0], [51.0, 5471.0], [51.1, 5472.0], [51.2, 5473.0], [51.3, 5474.0], [51.4, 5474.0], [51.5, 5475.0], [51.6, 5476.0], [51.7, 5477.0], [51.8, 5478.0], [51.9, 5478.0], [52.0, 5478.0], [52.1, 5479.0], [52.2, 5479.0], [52.3, 5480.0], [52.4, 5482.0], [52.5, 5482.0], [52.6, 5519.0], [52.7, 5543.0], [52.8, 5543.0], [52.9, 5545.0], [53.0, 5547.0], [53.1, 5547.0], [53.2, 5548.0], [53.3, 5550.0], [53.4, 5550.0], [53.5, 5551.0], [53.6, 5551.0], [53.7, 5552.0], [53.8, 5553.0], [53.9, 5554.0], [54.0, 5554.0], [54.1, 5555.0], [54.2, 5564.0], [54.3, 5576.0], [54.4, 5577.0], [54.5, 5578.0], [54.6, 5578.0], [54.7, 5579.0], [54.8, 5581.0], [54.9, 5582.0], [55.0, 5582.0], [55.1, 5583.0], [55.2, 5597.0], [55.3, 5605.0], [55.4, 5605.0], [55.5, 5648.0], [55.6, 5650.0], [55.7, 5650.0], [55.8, 5651.0], [55.9, 5651.0], [56.0, 5651.0], [56.1, 5665.0], [56.2, 5668.0], [56.3, 5668.0], [56.4, 5669.0], [56.5, 5671.0], [56.6, 5673.0], [56.7, 5676.0], [56.8, 5677.0], [56.9, 5677.0], [57.0, 5677.0], [57.1, 5677.0], [57.2, 5679.0], [57.3, 5682.0], [57.4, 5683.0], [57.5, 5738.0], [57.6, 5761.0], [57.7, 5761.0], [57.8, 5761.0], [57.9, 5761.0], [58.0, 5761.0], [58.1, 5762.0], [58.2, 5762.0], [58.3, 5762.0], [58.4, 5790.0], [58.5, 5823.0], [58.6, 5824.0], [58.7, 5824.0], [58.8, 5825.0], [58.9, 5825.0], [59.0, 5827.0], [59.1, 5828.0], [59.2, 5831.0], [59.3, 5835.0], [59.4, 5837.0], [59.5, 5837.0], [59.6, 5838.0], [59.7, 5839.0], [59.8, 5840.0], [59.9, 5876.0], [60.0, 5877.0], [60.1, 5877.0], [60.2, 5877.0], [60.3, 5877.0], [60.4, 5878.0], [60.5, 5879.0], [60.6, 5879.0], [60.7, 5880.0], [60.8, 5880.0], [60.9, 5880.0], [61.0, 5880.0], [61.1, 5881.0], [61.2, 5881.0], [61.3, 5882.0], [61.4, 5882.0], [61.5, 5882.0], [61.6, 5882.0], [61.7, 5883.0], [61.8, 5883.0], [61.9, 5883.0], [62.0, 5883.0], [62.1, 5884.0], [62.2, 5884.0], [62.3, 5884.0], [62.4, 5885.0], [62.5, 5885.0], [62.6, 5886.0], [62.7, 5886.0], [62.8, 5886.0], [62.9, 5887.0], [63.0, 5889.0], [63.1, 5898.0], [63.2, 5899.0], [63.3, 5900.0], [63.4, 5900.0], [63.5, 5901.0], [63.6, 5904.0], [63.7, 5937.0], [63.8, 5938.0], [63.9, 5938.0], [64.0, 5938.0], [64.1, 5938.0], [64.2, 5939.0], [64.3, 5939.0], [64.4, 5939.0], [64.5, 5939.0], [64.6, 5939.0], [64.7, 5939.0], [64.8, 5945.0], [64.9, 5960.0], [65.0, 5960.0], [65.1, 5961.0], [65.2, 6005.0], [65.3, 6006.0], [65.4, 6007.0], [65.5, 6007.0], [65.6, 6008.0], [65.7, 6037.0], [65.8, 6037.0], [65.9, 6038.0], [66.0, 6040.0], [66.1, 6041.0], [66.2, 6044.0], [66.3, 6045.0], [66.4, 6045.0], [66.5, 6054.0], [66.6, 6054.0], [66.7, 6054.0], [66.8, 6055.0], [66.9, 6055.0], [67.0, 6056.0], [67.1, 6160.0], [67.2, 6162.0], [67.3, 6177.0], [67.4, 6178.0], [67.5, 6179.0], [67.6, 6180.0], [67.7, 6192.0], [67.8, 6193.0], [67.9, 6193.0], [68.0, 6193.0], [68.1, 6193.0], [68.2, 6194.0], [68.3, 6194.0], [68.4, 6194.0], [68.5, 6194.0], [68.6, 6194.0], [68.7, 6194.0], [68.8, 6194.0], [68.9, 6194.0], [69.0, 6194.0], [69.1, 6194.0], [69.2, 6195.0], [69.3, 6195.0], [69.4, 6196.0], [69.5, 6196.0], [69.6, 6196.0], [69.7, 6196.0], [69.8, 6197.0], [69.9, 6197.0], [70.0, 6197.0], [70.1, 6197.0], [70.2, 6198.0], [70.3, 6198.0], [70.4, 6198.0], [70.5, 6198.0], [70.6, 6229.0], [70.7, 6235.0], [70.8, 6235.0], [70.9, 6237.0], [71.0, 6238.0], [71.1, 6238.0], [71.2, 6240.0], [71.3, 6240.0], [71.4, 6241.0], [71.5, 6241.0], [71.6, 6242.0], [71.7, 6265.0], [71.8, 6276.0], [71.9, 6276.0], [72.0, 6277.0], [72.1, 6278.0], [72.2, 6279.0], [72.3, 6280.0], [72.4, 6322.0], [72.5, 6323.0], [72.6, 6416.0], [72.7, 6506.0], [72.8, 6507.0], [72.9, 6574.0], [73.0, 6575.0], [73.1, 6575.0], [73.2, 6576.0], [73.3, 6576.0], [73.4, 6578.0], [73.5, 6587.0], [73.6, 6588.0], [73.7, 6588.0], [73.8, 6589.0], [73.9, 6589.0], [74.0, 6589.0], [74.1, 6589.0], [74.2, 6590.0], [74.3, 6590.0], [74.4, 6613.0], [74.5, 6613.0], [74.6, 6614.0], [74.7, 6616.0], [74.8, 6616.0], [74.9, 6616.0], [75.0, 6616.0], [75.1, 6616.0], [75.2, 6617.0], [75.3, 6617.0], [75.4, 6617.0], [75.5, 6617.0], [75.6, 6618.0], [75.7, 6619.0], [75.8, 6619.0], [75.9, 6694.0], [76.0, 6694.0], [76.1, 6694.0], [76.2, 6697.0], [76.3, 6717.0], [76.4, 6724.0], [76.5, 6791.0], [76.6, 6792.0], [76.7, 6793.0], [76.8, 6794.0], [76.9, 6795.0], [77.0, 6798.0], [77.1, 6853.0], [77.2, 6855.0], [77.3, 6856.0], [77.4, 6857.0], [77.5, 6920.0], [77.6, 6922.0], [77.7, 6922.0], [77.8, 6934.0], [77.9, 6935.0], [78.0, 6935.0], [78.1, 6935.0], [78.2, 6935.0], [78.3, 6935.0], [78.4, 6935.0], [78.5, 6935.0], [78.6, 6935.0], [78.7, 6936.0], [78.8, 6936.0], [78.9, 6936.0], [79.0, 6937.0], [79.1, 6937.0], [79.2, 6937.0], [79.3, 6937.0], [79.4, 6952.0], [79.5, 6976.0], [79.6, 6976.0], [79.7, 6977.0], [79.8, 6977.0], [79.9, 6978.0], [80.0, 6979.0], [80.1, 7029.0], [80.2, 7151.0], [80.3, 7152.0], [80.4, 7159.0], [80.5, 7234.0], [80.6, 7237.0], [80.7, 7238.0], [80.8, 7239.0], [80.9, 7243.0], [81.0, 7245.0], [81.1, 7247.0], [81.2, 7247.0], [81.3, 7248.0], [81.4, 7249.0], [81.5, 7263.0], [81.6, 7263.0], [81.7, 7298.0], [81.8, 7312.0], [81.9, 7313.0], [82.0, 7314.0], [82.1, 7314.0], [82.2, 7315.0], [82.3, 7336.0], [82.4, 7444.0], [82.5, 7480.0], [82.6, 7481.0], [82.7, 7482.0], [82.8, 7482.0], [82.9, 7482.0], [83.0, 7484.0], [83.1, 7484.0], [83.2, 7484.0], [83.3, 7485.0], [83.4, 7485.0], [83.5, 7485.0], [83.6, 7485.0], [83.7, 7488.0], [83.8, 7520.0], [83.9, 7525.0], [84.0, 7525.0], [84.1, 7526.0], [84.2, 7527.0], [84.3, 7530.0], [84.4, 7530.0], [84.5, 7625.0], [84.6, 7649.0], [84.7, 7649.0], [84.8, 7649.0], [84.9, 7651.0], [85.0, 7651.0], [85.1, 7651.0], [85.2, 7652.0], [85.3, 7652.0], [85.4, 7652.0], [85.5, 7652.0], [85.6, 7653.0], [85.7, 7679.0], [85.8, 7679.0], [85.9, 7679.0], [86.0, 7680.0], [86.1, 7682.0], [86.2, 7699.0], [86.3, 7700.0], [86.4, 7702.0], [86.5, 7702.0], [86.6, 7702.0], [86.7, 7703.0], [86.8, 7703.0], [86.9, 7705.0], [87.0, 7728.0], [87.1, 7810.0], [87.2, 7840.0], [87.3, 7873.0], [87.4, 7873.0], [87.5, 7917.0], [87.6, 7917.0], [87.7, 7920.0], [87.8, 8023.0], [87.9, 8057.0], [88.0, 8058.0], [88.1, 8059.0], [88.2, 8059.0], [88.3, 8098.0], [88.4, 8105.0], [88.5, 8106.0], [88.6, 8201.0], [88.7, 8306.0], [88.8, 8385.0], [88.9, 8524.0], [89.0, 8574.0], [89.1, 8662.0], [89.2, 8673.0], [89.3, 8674.0], [89.4, 8675.0], [89.5, 8675.0], [89.6, 8675.0], [89.7, 8676.0], [89.8, 8706.0], [89.9, 8731.0], [90.0, 8791.0], [90.1, 8793.0], [90.2, 8793.0], [90.3, 8814.0], [90.4, 8857.0], [90.5, 8918.0], [90.6, 8920.0], [90.7, 8920.0], [90.8, 8921.0], [90.9, 8921.0], [91.0, 8922.0], [91.1, 8922.0], [91.2, 8922.0], [91.3, 8923.0], [91.4, 8996.0], [91.5, 8997.0], [91.6, 9022.0], [91.7, 9032.0], [91.8, 9034.0], [91.9, 9036.0], [92.0, 9152.0], [92.1, 9358.0], [92.2, 9359.0], [92.3, 9360.0], [92.4, 9360.0], [92.5, 9360.0], [92.6, 9361.0], [92.7, 9364.0], [92.8, 9364.0], [92.9, 9365.0], [93.0, 9366.0], [93.1, 9367.0], [93.2, 9396.0], [93.3, 9490.0], [93.4, 9490.0], [93.5, 9490.0], [93.6, 9491.0], [93.7, 9492.0], [93.8, 9512.0], [93.9, 9523.0], [94.0, 9524.0], [94.1, 9525.0], [94.2, 9525.0], [94.3, 9525.0], [94.4, 9526.0], [94.5, 9527.0], [94.6, 9527.0], [94.7, 9528.0], [94.8, 9528.0], [94.9, 9529.0], [95.0, 9569.0], [95.1, 9582.0], [95.2, 9582.0], [95.3, 9582.0], [95.4, 9680.0], [95.5, 9747.0], [95.6, 9747.0], [95.7, 9747.0], [95.8, 9748.0], [95.9, 10123.0], [96.0, 10123.0], [96.1, 10124.0], [96.2, 10125.0], [96.3, 10125.0], [96.4, 10149.0], [96.5, 10150.0], [96.6, 10183.0], [96.7, 10185.0], [96.8, 10185.0], [96.9, 10185.0], [97.0, 10186.0], [97.1, 10186.0], [97.2, 10187.0], [97.3, 10187.0], [97.4, 10189.0], [97.5, 10190.0], [97.6, 10191.0], [97.7, 10221.0], [97.8, 10224.0], [97.9, 10328.0], [98.0, 10386.0], [98.1, 10531.0], [98.2, 10540.0], [98.3, 10560.0], [98.4, 10561.0], [98.5, 10562.0], [98.6, 10562.0], [98.7, 10563.0], [98.8, 10685.0], [98.9, 10693.0], [99.0, 10906.0], [99.1, 11194.0], [99.2, 11194.0], [99.3, 11197.0], [99.4, 11197.0], [99.5, 11197.0], [99.6, 11197.0], [99.7, 11198.0], [99.8, 11199.0], [99.9, 11200.0], [100.0, 11200.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 126.0, "series": [{"data": [[500.0, 92.0], [600.0, 64.0], [700.0, 43.0], [800.0, 31.0], [900.0, 20.0], [1000.0, 15.0], [1100.0, 9.0], [1200.0, 17.0], [1300.0, 8.0], [1400.0, 17.0], [1500.0, 7.0], [1600.0, 23.0], [1700.0, 21.0], [1800.0, 21.0], [1900.0, 25.0], [2000.0, 29.0], [2100.0, 46.0], [2200.0, 31.0], [2300.0, 52.0], [2400.0, 21.0], [2500.0, 37.0], [2600.0, 2.0], [2700.0, 35.0], [2800.0, 45.0], [2900.0, 2.0], [3000.0, 34.0], [3100.0, 20.0], [3200.0, 15.0], [3300.0, 30.0], [3400.0, 22.0], [3500.0, 68.0], [3600.0, 33.0], [3700.0, 3.0], [3800.0, 3.0], [3900.0, 33.0], [4000.0, 1.0], [4100.0, 56.0], [4200.0, 2.0], [4300.0, 1.0], [4500.0, 66.0], [4400.0, 5.0], [4600.0, 27.0], [4700.0, 31.0], [4800.0, 9.0], [5000.0, 53.0], [4900.0, 46.0], [5100.0, 1.0], [5300.0, 20.0], [5200.0, 17.0], [5500.0, 72.0], [5400.0, 85.0], [5600.0, 59.0], [5700.0, 27.0], [5800.0, 126.0], [6000.0, 51.0], [5900.0, 51.0], [6100.0, 92.0], [6200.0, 48.0], [6300.0, 5.0], [6600.0, 51.0], [6500.0, 43.0], [6400.0, 5.0], [6900.0, 69.0], [6700.0, 21.0], [6800.0, 10.0], [7000.0, 5.0], [7100.0, 7.0], [7400.0, 38.0], [7200.0, 34.0], [7300.0, 16.0], [7600.0, 47.0], [7500.0, 18.0], [7900.0, 8.0], [7800.0, 10.0], [7700.0, 23.0], [8000.0, 15.0], [8100.0, 7.0], [8200.0, 2.0], [8600.0, 18.0], [8300.0, 4.0], [8500.0, 4.0], [8700.0, 15.0], [8400.0, 2.0], [9000.0, 10.0], [8800.0, 5.0], [9100.0, 4.0], [8900.0, 28.0], [9600.0, 1.0], [9300.0, 31.0], [9400.0, 15.0], [9700.0, 11.0], [9500.0, 42.0], [10100.0, 46.0], [9900.0, 1.0], [10000.0, 1.0], [10200.0, 7.0], [10500.0, 17.0], [10600.0, 5.0], [10300.0, 5.0], [10700.0, 2.0], [11100.0, 21.0], [11200.0, 3.0], [10900.0, 3.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 103.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2552.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 103.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2552.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 108.47427154370743, "minX": 1.7890626E12, "maxY": 190.18234165067182, "series": [{"data": [[1.78906266E12, 190.18234165067182], [1.7890626E12, 108.47427154370743]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 208 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906266E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 524.6, "minX": 3.0, "maxY": 9528.0, "series": [{"data": [[3.0, 582.0], [4.0, 598.0], [5.0, 594.5], [6.0, 562.3333333333334], [7.0, 1432.6666666666665], [8.0, 540.3333333333334], [9.0, 524.6], [10.0, 536.2], [11.0, 4107.400000000001], [12.0, 535.5], [13.0, 546.1666666666667], [14.0, 546.5714285714287], [15.0, 555.1428571428571], [16.0, 559.7142857142858], [17.0, 573.25], [18.0, 578.4999999999999], [19.0, 590.3333333333334], [20.0, 599.7777777777778], [21.0, 614.3333333333334], [22.0, 625.7], [23.0, 646.0], [24.0, 1086.0833333333335], [25.0, 1107.3333333333333], [26.0, 1721.5], [27.0, 1217.5], [28.0, 1193.5454545454545], [29.0, 3206.24], [30.0, 1284.3000000000002], [31.0, 806.3], [32.0, 835.5454545454546], [33.0, 865.875], [34.0, 2546.3333333333335], [35.0, 1276.7857142857142], [36.0, 984.0], [37.0, 1037.4615384615386], [38.0, 1122.0], [39.0, 2124.4], [40.0, 1245.666666666667], [41.0, 2023.1666666666667], [42.0, 2584.5333333333333], [43.0, 1421.4], [44.0, 1449.7142857142858], [45.0, 1512.6666666666667], [46.0, 2496.7], [47.0, 1603.142857142857], [48.0, 2109.1], [49.0, 1749.75], [51.0, 3203.0], [50.0, 5825.0], [52.0, 1882.8], [54.0, 2008.9999999999998], [55.0, 2041.5833333333335], [57.0, 2064.3846153846152], [59.0, 2106.6153846153843], [61.0, 2229.733333333333], [63.0, 2198.0666666666666], [65.0, 2290.1176470588234], [67.0, 2174.882352941176], [66.0, 5884.0], [69.0, 2158.2631578947367], [72.0, 2186.7368421052633], [74.0, 2349.904761904762], [76.0, 2360.136363636363], [79.0, 2409.608695652174], [82.0, 2479.92], [85.0, 2702.730769230769], [87.0, 5881.5], [84.0, 5881.0], [88.0, 4420.555555555556], [89.0, 2730.434782608696], [92.0, 2914.1724137931033], [96.0, 3076.939393939394], [99.0, 4813.5], [100.0, 3284.3030303030305], [103.0, 5879.5], [104.0, 3312.4864864864867], [109.0, 3378.916666666667], [111.0, 5880.25], [110.0, 5880.0], [114.0, 3768.5853658536585], [115.0, 5877.5], [113.0, 5877.6], [112.0, 5878.5], [119.0, 5879.833333333333], [118.0, 5881.0], [117.0, 5880.0], [116.0, 5881.0], [120.0, 4142.904761904763], [122.0, 7273.4], [121.0, 5880.0], [125.0, 4328.615384615383], [132.0, 4776.0], [135.0, 5908.0], [134.0, 9361.2], [133.0, 9358.0], [131.0, 9361.666666666666], [130.0, 7622.5], [129.0, 7756.25], [128.0, 7621.5], [138.0, 4361.22641509434], [144.0, 4541.075471698113], [151.0, 4729.881355932204], [157.0, 5548.0], [158.0, 5891.5], [159.0, 5090.679245283018], [155.0, 5519.0], [154.0, 5595.0], [167.0, 5499.788732394368], [166.0, 5668.833333333333], [165.0, 6280.0], [163.0, 5977.0], [161.0, 5872.666666666667], [160.0, 5670.0], [174.0, 7941.666666666667], [175.0, 5465.782608695653], [173.0, 9524.5], [170.0, 6135.769230769231], [169.0, 5667.0], [168.0, 5975.5], [176.0, 4880.0], [183.0, 8312.142857142859], [179.0, 9527.0], [178.0, 9527.0], [177.0, 9525.0], [184.0, 5677.830769230769], [190.0, 8126.0], [191.0, 8126.499999999999], [187.0, 9528.0], [186.0, 9527.8], [194.0, 6298.0952380952385], [195.0, 6052.741935483871], [202.0, 9287.26923076923], [204.0, 5900.153846153846], [207.0, 7306.468085106384], [205.0, 9525.0], [208.0, 7284.648235294108]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[140.54199623352176, 4989.253107344644]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 208.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2743.9333333333334, "minX": 1.7890626E12, "maxY": 6210.05, "series": [{"data": [[1.78906266E12, 4017.9333333333334], [1.7890626E12, 6210.05]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78906266E12, 2743.9333333333334], [1.7890626E12, 4247.566666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906266E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3557.7575945443327, "minX": 1.7890626E12, "maxY": 7205.186180422256, "series": [{"data": [[1.78906266E12, 7205.186180422256], [1.7890626E12, 3557.7575945443327]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906266E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3557.7222566645974, "minX": 1.7890626E12, "maxY": 7205.134357005765, "series": [{"data": [[1.78906266E12, 7205.134357005765], [1.7890626E12, 3557.7222566645974]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906266E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.15127092374457515, "minX": 1.7890626E12, "maxY": 0.2370441458733204, "series": [{"data": [[1.78906266E12, 0.2370441458733204], [1.7890626E12, 0.15127092374457515]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906266E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 515.0, "minX": 1.7890626E12, "maxY": 619.0, "series": [{"data": [[1.7890626E12, 619.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7890626E12, 515.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7890626E12, 603.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7890626E12, 619.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7890626E12, 560.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7890626E12, 610.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890626E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 527.0, "minX": 1.0, "maxY": 9722.5, "series": [{"data": [[2.0, 590.0], [35.0, 612.5], [10.0, 537.0], [24.0, 539.0], [13.0, 527.0], [26.0, 562.0], [28.0, 592.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 1572.5], [33.0, 3321.0], [2.0, 8731.0], [35.0, 671.5], [34.0, 7700.0], [36.0, 2458.0], [37.0, 3542.0], [38.0, 9527.5], [41.0, 4123.0], [43.0, 4057.0], [42.0, 4506.5], [47.0, 5030.0], [3.0, 6426.0], [50.0, 7526.0], [53.0, 4767.0], [54.0, 4855.0], [55.0, 5474.0], [59.0, 4537.0], [65.0, 5960.0], [69.0, 4531.0], [70.0, 7873.0], [78.0, 4922.0], [5.0, 7625.0], [86.0, 6177.0], [84.0, 6937.0], [90.0, 6616.0], [88.0, 7263.0], [96.0, 6196.0], [134.0, 5881.0], [10.0, 622.0], [13.0, 9722.5], [1.0, 5548.0], [16.0, 8252.5], [17.0, 2315.0], [19.0, 2451.0], [21.0, 5825.0], [23.0, 2168.5], [24.0, 1534.5], [25.0, 2266.0], [26.0, 2448.0], [27.0, 8921.0], [28.0, 1767.0], [29.0, 5527.0], [30.0, 4268.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 134.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 527.0, "minX": 1.0, "maxY": 9722.5, "series": [{"data": [[2.0, 588.5], [35.0, 612.5], [10.0, 537.0], [24.0, 539.0], [13.0, 527.0], [26.0, 562.0], [28.0, 592.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 1572.5], [33.0, 3321.0], [2.0, 8731.0], [35.0, 671.5], [34.0, 7700.0], [36.0, 2457.5], [37.0, 3542.0], [38.0, 9527.5], [41.0, 4123.0], [43.0, 4057.0], [42.0, 4506.5], [47.0, 5030.0], [3.0, 6425.0], [50.0, 7526.0], [53.0, 4767.0], [54.0, 4855.0], [55.0, 5474.0], [59.0, 4537.0], [65.0, 5960.0], [69.0, 4531.0], [70.0, 7873.0], [78.0, 4922.0], [5.0, 7625.0], [86.0, 6177.0], [84.0, 6937.0], [90.0, 6616.0], [88.0, 7262.5], [96.0, 6196.0], [134.0, 5881.0], [10.0, 622.0], [13.0, 9722.5], [1.0, 5548.0], [16.0, 8252.5], [17.0, 2314.0], [19.0, 2451.0], [21.0, 5825.0], [23.0, 2168.5], [24.0, 1534.5], [25.0, 2266.0], [26.0, 2448.0], [27.0, 8921.0], [28.0, 1767.0], [29.0, 5527.0], [30.0, 4268.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 134.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 13.9, "minX": 1.7890626E12, "maxY": 30.35, "series": [{"data": [[1.78906266E12, 13.9], [1.7890626E12, 30.35]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906266E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.1166666666666667, "minX": 1.7890626E12, "maxY": 26.883333333333333, "series": [{"data": [[1.78906266E12, 14.25], [1.7890626E12, 26.883333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78906266E12, 3.1166666666666667]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906266E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.7890626E12, "maxY": 25.166666666666668, "series": [{"data": [[1.7890626E12, 1.7166666666666666]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78906266E12, 17.366666666666667], [1.7890626E12, 25.166666666666668]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906266E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.7890626E12, "maxY": 25.166666666666668, "series": [{"data": [[1.7890626E12, 1.7166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78906266E12, 17.366666666666667], [1.7890626E12, 25.166666666666668]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906266E12, "title": "Total Transactions Per Second"}},
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

