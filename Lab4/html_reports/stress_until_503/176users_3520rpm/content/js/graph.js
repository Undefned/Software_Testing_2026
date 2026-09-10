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
        data: {"result": {"minY": 519.0, "minX": 0.0, "maxY": 9996.0, "series": [{"data": [[0.0, 519.0], [0.1, 521.0], [0.2, 523.0], [0.3, 523.0], [0.4, 534.0], [0.5, 535.0], [0.6, 538.0], [0.7, 539.0], [0.8, 540.0], [0.9, 544.0], [1.0, 546.0], [1.1, 546.0], [1.2, 550.0], [1.3, 552.0], [1.4, 553.0], [1.5, 557.0], [1.6, 558.0], [1.7, 565.0], [1.8, 568.0], [1.9, 571.0], [2.0, 572.0], [2.1, 573.0], [2.2, 575.0], [2.3, 576.0], [2.4, 577.0], [2.5, 579.0], [2.6, 583.0], [2.7, 584.0], [2.8, 587.0], [2.9, 590.0], [3.0, 596.0], [3.1, 599.0], [3.2, 600.0], [3.3, 605.0], [3.4, 609.0], [3.5, 611.0], [3.6, 615.0], [3.7, 619.0], [3.8, 622.0], [3.9, 628.0], [4.0, 633.0], [4.1, 635.0], [4.2, 638.0], [4.3, 640.0], [4.4, 643.0], [4.5, 644.0], [4.6, 653.0], [4.7, 661.0], [4.8, 664.0], [4.9, 668.0], [5.0, 670.0], [5.1, 674.0], [5.2, 677.0], [5.3, 680.0], [5.4, 687.0], [5.5, 694.0], [5.6, 698.0], [5.7, 704.0], [5.8, 706.0], [5.9, 710.0], [6.0, 718.0], [6.1, 721.0], [6.2, 726.0], [6.3, 737.0], [6.4, 746.0], [6.5, 757.0], [6.6, 759.0], [6.7, 763.0], [6.8, 770.0], [6.9, 771.0], [7.0, 778.0], [7.1, 782.0], [7.2, 789.0], [7.3, 796.0], [7.4, 803.0], [7.5, 809.0], [7.6, 818.0], [7.7, 834.0], [7.8, 842.0], [7.9, 843.0], [8.0, 851.0], [8.1, 862.0], [8.2, 866.0], [8.3, 873.0], [8.4, 880.0], [8.5, 884.0], [8.6, 892.0], [8.7, 903.0], [8.8, 907.0], [8.9, 921.0], [9.0, 922.0], [9.1, 937.0], [9.2, 941.0], [9.3, 952.0], [9.4, 958.0], [9.5, 966.0], [9.6, 976.0], [9.7, 996.0], [9.8, 1004.0], [9.9, 1007.0], [10.0, 1011.0], [10.1, 1014.0], [10.2, 1033.0], [10.3, 1038.0], [10.4, 1046.0], [10.5, 1050.0], [10.6, 1071.0], [10.7, 1079.0], [10.8, 1096.0], [10.9, 1107.0], [11.0, 1176.0], [11.1, 1184.0], [11.2, 1193.0], [11.3, 1225.0], [11.4, 1227.0], [11.5, 1241.0], [11.6, 1244.0], [11.7, 1267.0], [11.8, 1277.0], [11.9, 1315.0], [12.0, 1349.0], [12.1, 1353.0], [12.2, 1385.0], [12.3, 1387.0], [12.4, 1398.0], [12.5, 1416.0], [12.6, 1416.0], [12.7, 1419.0], [12.8, 1468.0], [12.9, 1468.0], [13.0, 1485.0], [13.1, 1502.0], [13.2, 1524.0], [13.3, 1547.0], [13.4, 1555.0], [13.5, 1567.0], [13.6, 1587.0], [13.7, 1594.0], [13.8, 1601.0], [13.9, 1604.0], [14.0, 1605.0], [14.1, 1625.0], [14.2, 1632.0], [14.3, 1633.0], [14.4, 1652.0], [14.5, 1664.0], [14.6, 1666.0], [14.7, 1690.0], [14.8, 1690.0], [14.9, 1694.0], [15.0, 1695.0], [15.1, 1711.0], [15.2, 1711.0], [15.3, 1711.0], [15.4, 1713.0], [15.5, 1733.0], [15.6, 1735.0], [15.7, 1766.0], [15.8, 1766.0], [15.9, 1784.0], [16.0, 1784.0], [16.1, 1785.0], [16.2, 1786.0], [16.3, 1795.0], [16.4, 1795.0], [16.5, 1825.0], [16.6, 1826.0], [16.7, 1828.0], [16.8, 1831.0], [16.9, 1837.0], [17.0, 1838.0], [17.1, 1838.0], [17.2, 1870.0], [17.3, 1881.0], [17.4, 1882.0], [17.5, 1882.0], [17.6, 1885.0], [17.7, 1885.0], [17.8, 1900.0], [17.9, 1900.0], [18.0, 1900.0], [18.1, 1905.0], [18.2, 1949.0], [18.3, 1968.0], [18.4, 1968.0], [18.5, 1970.0], [18.6, 1973.0], [18.7, 1973.0], [18.8, 1974.0], [18.9, 1990.0], [19.0, 1990.0], [19.1, 1991.0], [19.2, 1991.0], [19.3, 1995.0], [19.4, 2000.0], [19.5, 2002.0], [19.6, 2005.0], [19.7, 2008.0], [19.8, 2037.0], [19.9, 2037.0], [20.0, 2084.0], [20.1, 2093.0], [20.2, 2093.0], [20.3, 2094.0], [20.4, 2094.0], [20.5, 2095.0], [20.6, 2102.0], [20.7, 2102.0], [20.8, 2102.0], [20.9, 2103.0], [21.0, 2121.0], [21.1, 2122.0], [21.2, 2123.0], [21.3, 2126.0], [21.4, 2132.0], [21.5, 2170.0], [21.6, 2171.0], [21.7, 2171.0], [21.8, 2179.0], [21.9, 2181.0], [22.0, 2181.0], [22.1, 2182.0], [22.2, 2183.0], [22.3, 2201.0], [22.4, 2201.0], [22.5, 2202.0], [22.6, 2202.0], [22.7, 2203.0], [22.8, 2223.0], [22.9, 2241.0], [23.0, 2243.0], [23.1, 2243.0], [23.2, 2244.0], [23.3, 2245.0], [23.4, 2251.0], [23.5, 2259.0], [23.6, 2261.0], [23.7, 2262.0], [23.8, 2294.0], [23.9, 2296.0], [24.0, 2306.0], [24.1, 2312.0], [24.2, 2313.0], [24.3, 2315.0], [24.4, 2316.0], [24.5, 2317.0], [24.6, 2318.0], [24.7, 2318.0], [24.8, 2346.0], [24.9, 2348.0], [25.0, 2385.0], [25.1, 2386.0], [25.2, 2415.0], [25.3, 2419.0], [25.4, 2430.0], [25.5, 2454.0], [25.6, 2460.0], [25.7, 2460.0], [25.8, 2460.0], [25.9, 2461.0], [26.0, 2461.0], [26.1, 2461.0], [26.2, 2463.0], [26.3, 2474.0], [26.4, 2521.0], [26.5, 2596.0], [26.6, 2597.0], [26.7, 2597.0], [26.8, 2599.0], [26.9, 2601.0], [27.0, 2671.0], [27.1, 2672.0], [27.2, 2673.0], [27.3, 2674.0], [27.4, 2691.0], [27.5, 2693.0], [27.6, 2694.0], [27.7, 2694.0], [27.8, 2694.0], [27.9, 2695.0], [28.0, 2698.0], [28.1, 2699.0], [28.2, 2701.0], [28.3, 2702.0], [28.4, 2702.0], [28.5, 2703.0], [28.6, 2712.0], [28.7, 2713.0], [28.8, 2722.0], [28.9, 2722.0], [29.0, 2723.0], [29.1, 2724.0], [29.2, 2724.0], [29.3, 2724.0], [29.4, 2724.0], [29.5, 2725.0], [29.6, 2778.0], [29.7, 2779.0], [29.8, 2780.0], [29.9, 2785.0], [30.0, 2808.0], [30.1, 2923.0], [30.2, 2925.0], [30.3, 2925.0], [30.4, 2926.0], [30.5, 2926.0], [30.6, 2926.0], [30.7, 2927.0], [30.8, 2927.0], [30.9, 2928.0], [31.0, 2928.0], [31.1, 2990.0], [31.2, 3012.0], [31.3, 3013.0], [31.4, 3014.0], [31.5, 3015.0], [31.6, 3097.0], [31.7, 3098.0], [31.8, 3099.0], [31.9, 3099.0], [32.0, 3100.0], [32.1, 3100.0], [32.2, 3100.0], [32.3, 3101.0], [32.4, 3101.0], [32.5, 3102.0], [32.6, 3103.0], [32.7, 3104.0], [32.8, 3104.0], [32.9, 3105.0], [33.0, 3123.0], [33.1, 3126.0], [33.2, 3132.0], [33.3, 3133.0], [33.4, 3158.0], [33.5, 3160.0], [33.6, 3161.0], [33.7, 3162.0], [33.8, 3178.0], [33.9, 3179.0], [34.0, 3193.0], [34.1, 3236.0], [34.2, 3271.0], [34.3, 3284.0], [34.4, 3285.0], [34.5, 3293.0], [34.6, 3293.0], [34.7, 3294.0], [34.8, 3294.0], [34.9, 3295.0], [35.0, 3296.0], [35.1, 3298.0], [35.2, 3300.0], [35.3, 3332.0], [35.4, 3374.0], [35.5, 3374.0], [35.6, 3374.0], [35.7, 3374.0], [35.8, 3377.0], [35.9, 3378.0], [36.0, 3378.0], [36.1, 3379.0], [36.2, 3382.0], [36.3, 3408.0], [36.4, 3409.0], [36.5, 3409.0], [36.6, 3410.0], [36.7, 3410.0], [36.8, 3410.0], [36.9, 3411.0], [37.0, 3411.0], [37.1, 3412.0], [37.2, 3412.0], [37.3, 3440.0], [37.4, 3520.0], [37.5, 3522.0], [37.6, 3523.0], [37.7, 3525.0], [37.8, 3525.0], [37.9, 3527.0], [38.0, 3529.0], [38.1, 3532.0], [38.2, 3533.0], [38.3, 3533.0], [38.4, 3534.0], [38.5, 3536.0], [38.6, 3536.0], [38.7, 3537.0], [38.8, 3539.0], [38.9, 3539.0], [39.0, 3540.0], [39.1, 3540.0], [39.2, 3568.0], [39.3, 3568.0], [39.4, 3569.0], [39.5, 3569.0], [39.6, 3570.0], [39.7, 3570.0], [39.8, 3571.0], [39.9, 3571.0], [40.0, 3572.0], [40.1, 3573.0], [40.2, 3605.0], [40.3, 3668.0], [40.4, 3743.0], [40.5, 3802.0], [40.6, 3802.0], [40.7, 3803.0], [40.8, 3803.0], [40.9, 3803.0], [41.0, 3805.0], [41.1, 3806.0], [41.2, 3806.0], [41.3, 3806.0], [41.4, 3809.0], [41.5, 3817.0], [41.6, 3818.0], [41.7, 3819.0], [41.8, 3819.0], [41.9, 3819.0], [42.0, 3821.0], [42.1, 3821.0], [42.2, 3823.0], [42.3, 3823.0], [42.4, 3824.0], [42.5, 3827.0], [42.6, 3833.0], [42.7, 3835.0], [42.8, 3836.0], [42.9, 3836.0], [43.0, 3836.0], [43.1, 3837.0], [43.2, 3837.0], [43.3, 3838.0], [43.4, 3838.0], [43.5, 3839.0], [43.6, 3839.0], [43.7, 3839.0], [43.8, 3840.0], [43.9, 3841.0], [44.0, 3841.0], [44.1, 3841.0], [44.2, 3842.0], [44.3, 3842.0], [44.4, 3844.0], [44.5, 3847.0], [44.6, 3914.0], [44.7, 3939.0], [44.8, 3963.0], [44.9, 3965.0], [45.0, 3965.0], [45.1, 3966.0], [45.2, 3966.0], [45.3, 3967.0], [45.4, 3967.0], [45.5, 3967.0], [45.6, 3967.0], [45.7, 3967.0], [45.8, 4006.0], [45.9, 4154.0], [46.0, 4228.0], [46.1, 4230.0], [46.2, 4230.0], [46.3, 4231.0], [46.4, 4231.0], [46.5, 4231.0], [46.6, 4232.0], [46.7, 4233.0], [46.8, 4233.0], [46.9, 4234.0], [47.0, 4234.0], [47.1, 4283.0], [47.2, 4312.0], [47.3, 4313.0], [47.4, 4313.0], [47.5, 4313.0], [47.6, 4313.0], [47.7, 4314.0], [47.8, 4314.0], [47.9, 4314.0], [48.0, 4315.0], [48.1, 4315.0], [48.2, 4315.0], [48.3, 4324.0], [48.4, 4325.0], [48.5, 4327.0], [48.6, 4327.0], [48.7, 4328.0], [48.8, 4329.0], [48.9, 4330.0], [49.0, 4330.0], [49.1, 4330.0], [49.2, 4331.0], [49.3, 4341.0], [49.4, 4341.0], [49.5, 4341.0], [49.6, 4341.0], [49.7, 4342.0], [49.8, 4342.0], [49.9, 4342.0], [50.0, 4343.0], [50.1, 4344.0], [50.2, 4345.0], [50.3, 4351.0], [50.4, 4352.0], [50.5, 4352.0], [50.6, 4353.0], [50.7, 4354.0], [50.8, 4354.0], [50.9, 4355.0], [51.0, 4355.0], [51.1, 4355.0], [51.2, 4356.0], [51.3, 4356.0], [51.4, 4356.0], [51.5, 4357.0], [51.6, 4357.0], [51.7, 4393.0], [51.8, 4393.0], [51.9, 4394.0], [52.0, 4394.0], [52.1, 4395.0], [52.2, 4395.0], [52.3, 4395.0], [52.4, 4395.0], [52.5, 4406.0], [52.6, 4407.0], [52.7, 4407.0], [52.8, 4407.0], [52.9, 4408.0], [53.0, 4408.0], [53.1, 4432.0], [53.2, 4432.0], [53.3, 4432.0], [53.4, 4432.0], [53.5, 4433.0], [53.6, 4434.0], [53.7, 4434.0], [53.8, 4435.0], [53.9, 4436.0], [54.0, 4436.0], [54.1, 4437.0], [54.2, 4460.0], [54.3, 4464.0], [54.4, 4465.0], [54.5, 4505.0], [54.6, 4506.0], [54.7, 4506.0], [54.8, 4506.0], [54.9, 4507.0], [55.0, 4507.0], [55.1, 4508.0], [55.2, 4509.0], [55.3, 4510.0], [55.4, 4510.0], [55.5, 4556.0], [55.6, 4624.0], [55.7, 4624.0], [55.8, 4625.0], [55.9, 4660.0], [56.0, 4660.0], [56.1, 4661.0], [56.2, 4724.0], [56.3, 4724.0], [56.4, 4727.0], [56.5, 4727.0], [56.6, 4727.0], [56.7, 4727.0], [56.8, 4727.0], [56.9, 4728.0], [57.0, 4728.0], [57.1, 4729.0], [57.2, 4730.0], [57.3, 4760.0], [57.4, 4762.0], [57.5, 4765.0], [57.6, 4766.0], [57.7, 4766.0], [57.8, 4766.0], [57.9, 4766.0], [58.0, 4767.0], [58.1, 4768.0], [58.2, 4797.0], [58.3, 4799.0], [58.4, 4889.0], [58.5, 4890.0], [58.6, 4890.0], [58.7, 4890.0], [58.8, 4890.0], [58.9, 4891.0], [59.0, 4892.0], [59.1, 4892.0], [59.2, 4892.0], [59.3, 4893.0], [59.4, 4893.0], [59.5, 4893.0], [59.6, 4893.0], [59.7, 4894.0], [59.8, 4894.0], [59.9, 4894.0], [60.0, 4896.0], [60.1, 4896.0], [60.2, 4897.0], [60.3, 4897.0], [60.4, 4898.0], [60.5, 4898.0], [60.6, 4898.0], [60.7, 4899.0], [60.8, 4899.0], [60.9, 4900.0], [61.0, 4900.0], [61.1, 5011.0], [61.2, 5012.0], [61.3, 5012.0], [61.4, 5078.0], [61.5, 5087.0], [61.6, 5087.0], [61.7, 5087.0], [61.8, 5089.0], [61.9, 5089.0], [62.0, 5114.0], [62.1, 5191.0], [62.2, 5194.0], [62.3, 5195.0], [62.4, 5195.0], [62.5, 5196.0], [62.6, 5198.0], [62.7, 5213.0], [62.8, 5213.0], [62.9, 5214.0], [63.0, 5214.0], [63.1, 5238.0], [63.2, 5239.0], [63.3, 5241.0], [63.4, 5242.0], [63.5, 5242.0], [63.6, 5247.0], [63.7, 5264.0], [63.8, 5264.0], [63.9, 5264.0], [64.0, 5264.0], [64.1, 5264.0], [64.2, 5265.0], [64.3, 5265.0], [64.4, 5266.0], [64.5, 5266.0], [64.6, 5267.0], [64.7, 5267.0], [64.8, 5268.0], [64.9, 5268.0], [65.0, 5309.0], [65.1, 5312.0], [65.2, 5314.0], [65.3, 5315.0], [65.4, 5316.0], [65.5, 5316.0], [65.6, 5316.0], [65.7, 5317.0], [65.8, 5317.0], [65.9, 5318.0], [66.0, 5318.0], [66.1, 5318.0], [66.2, 5318.0], [66.3, 5318.0], [66.4, 5319.0], [66.5, 5320.0], [66.6, 5320.0], [66.7, 5320.0], [66.8, 5321.0], [66.9, 5321.0], [67.0, 5321.0], [67.1, 5322.0], [67.2, 5323.0], [67.3, 5323.0], [67.4, 5324.0], [67.5, 5324.0], [67.6, 5363.0], [67.7, 5364.0], [67.8, 5366.0], [67.9, 5366.0], [68.0, 5367.0], [68.1, 5368.0], [68.2, 5369.0], [68.3, 5370.0], [68.4, 5370.0], [68.5, 5371.0], [68.6, 5371.0], [68.7, 5372.0], [68.8, 5372.0], [68.9, 5373.0], [69.0, 5374.0], [69.1, 5374.0], [69.2, 5401.0], [69.3, 5402.0], [69.4, 5417.0], [69.5, 5420.0], [69.6, 5421.0], [69.7, 5455.0], [69.8, 5544.0], [69.9, 5545.0], [70.0, 5547.0], [70.1, 5548.0], [70.2, 5549.0], [70.3, 5550.0], [70.4, 5550.0], [70.5, 5550.0], [70.6, 5552.0], [70.7, 5553.0], [70.8, 5560.0], [70.9, 5561.0], [71.0, 5562.0], [71.1, 5563.0], [71.2, 5563.0], [71.3, 5563.0], [71.4, 5563.0], [71.5, 5564.0], [71.6, 5564.0], [71.7, 5564.0], [71.8, 5582.0], [71.9, 5583.0], [72.0, 5585.0], [72.1, 5586.0], [72.2, 5586.0], [72.3, 5587.0], [72.4, 5589.0], [72.5, 5591.0], [72.6, 5592.0], [72.7, 5609.0], [72.8, 5610.0], [72.9, 5610.0], [73.0, 5611.0], [73.1, 5612.0], [73.2, 5612.0], [73.3, 5613.0], [73.4, 5632.0], [73.5, 5632.0], [73.6, 5633.0], [73.7, 5634.0], [73.8, 5635.0], [73.9, 5636.0], [74.0, 5689.0], [74.1, 5689.0], [74.2, 5690.0], [74.3, 5691.0], [74.4, 5691.0], [74.5, 5692.0], [74.6, 5692.0], [74.7, 5692.0], [74.8, 5692.0], [74.9, 5693.0], [75.0, 5694.0], [75.1, 5695.0], [75.2, 5695.0], [75.3, 5695.0], [75.4, 5695.0], [75.5, 5695.0], [75.6, 5696.0], [75.7, 5696.0], [75.8, 5697.0], [75.9, 5697.0], [76.0, 5738.0], [76.1, 5739.0], [76.2, 5739.0], [76.3, 5790.0], [76.4, 5795.0], [76.5, 5795.0], [76.6, 5795.0], [76.7, 5796.0], [76.8, 5796.0], [76.9, 5796.0], [77.0, 5798.0], [77.1, 5798.0], [77.2, 5816.0], [77.3, 5817.0], [77.4, 5817.0], [77.5, 5818.0], [77.6, 5821.0], [77.7, 5831.0], [77.8, 5832.0], [77.9, 5832.0], [78.0, 5833.0], [78.1, 5833.0], [78.2, 5834.0], [78.3, 5834.0], [78.4, 5834.0], [78.5, 5834.0], [78.6, 5835.0], [78.7, 5865.0], [78.8, 5866.0], [78.9, 5867.0], [79.0, 5867.0], [79.1, 5867.0], [79.2, 5868.0], [79.3, 5869.0], [79.4, 5879.0], [79.5, 5881.0], [79.6, 5881.0], [79.7, 5895.0], [79.8, 5896.0], [79.9, 5896.0], [80.0, 5896.0], [80.1, 5897.0], [80.2, 5897.0], [80.3, 6037.0], [80.4, 6037.0], [80.5, 6037.0], [80.6, 6037.0], [80.7, 6038.0], [80.8, 6038.0], [80.9, 6038.0], [81.0, 6039.0], [81.1, 6040.0], [81.2, 6041.0], [81.3, 6079.0], [81.4, 6079.0], [81.5, 6079.0], [81.6, 6080.0], [81.7, 6168.0], [81.8, 6170.0], [81.9, 6170.0], [82.0, 6171.0], [82.1, 6225.0], [82.2, 6226.0], [82.3, 6226.0], [82.4, 6227.0], [82.5, 6227.0], [82.6, 6228.0], [82.7, 6229.0], [82.8, 6229.0], [82.9, 6229.0], [83.0, 6230.0], [83.1, 6231.0], [83.2, 6255.0], [83.3, 6255.0], [83.4, 6256.0], [83.5, 6256.0], [83.6, 6256.0], [83.7, 6257.0], [83.8, 6257.0], [83.9, 6257.0], [84.0, 6257.0], [84.1, 6287.0], [84.2, 6288.0], [84.3, 6298.0], [84.4, 6298.0], [84.5, 6331.0], [84.6, 6332.0], [84.7, 6333.0], [84.8, 6427.0], [84.9, 6427.0], [85.0, 6428.0], [85.1, 6428.0], [85.2, 6428.0], [85.3, 6429.0], [85.4, 6429.0], [85.5, 6430.0], [85.6, 6470.0], [85.7, 6471.0], [85.8, 6471.0], [85.9, 6471.0], [86.0, 6472.0], [86.1, 6472.0], [86.2, 6473.0], [86.3, 6474.0], [86.4, 6569.0], [86.5, 6569.0], [86.6, 6570.0], [86.7, 6570.0], [86.8, 6571.0], [86.9, 6571.0], [87.0, 6572.0], [87.1, 6573.0], [87.2, 6575.0], [87.3, 6668.0], [87.4, 6671.0], [87.5, 6671.0], [87.6, 6672.0], [87.7, 6672.0], [87.8, 6673.0], [87.9, 6674.0], [88.0, 6674.0], [88.1, 6675.0], [88.2, 6675.0], [88.3, 6675.0], [88.4, 6677.0], [88.5, 6731.0], [88.6, 6733.0], [88.7, 6734.0], [88.8, 6734.0], [88.9, 6736.0], [89.0, 6774.0], [89.1, 6849.0], [89.2, 6861.0], [89.3, 6862.0], [89.4, 6862.0], [89.5, 6862.0], [89.6, 6862.0], [89.7, 6909.0], [89.8, 6910.0], [89.9, 7048.0], [90.0, 7049.0], [90.1, 7049.0], [90.2, 7049.0], [90.3, 7049.0], [90.4, 7051.0], [90.5, 7052.0], [90.6, 7052.0], [90.7, 7099.0], [90.8, 7102.0], [90.9, 7115.0], [91.0, 7170.0], [91.1, 7188.0], [91.2, 7199.0], [91.3, 7202.0], [91.4, 7333.0], [91.5, 7354.0], [91.6, 7355.0], [91.7, 7356.0], [91.8, 7357.0], [91.9, 7413.0], [92.0, 7414.0], [92.1, 7440.0], [92.2, 7464.0], [92.3, 7483.0], [92.4, 7483.0], [92.5, 7484.0], [92.6, 7547.0], [92.7, 7550.0], [92.8, 7555.0], [92.9, 7560.0], [93.0, 7561.0], [93.1, 7643.0], [93.2, 7643.0], [93.3, 7643.0], [93.4, 7643.0], [93.5, 7644.0], [93.6, 7644.0], [93.7, 7645.0], [93.8, 7645.0], [93.9, 7645.0], [94.0, 7646.0], [94.1, 7666.0], [94.2, 7666.0], [94.3, 7666.0], [94.4, 7780.0], [94.5, 7794.0], [94.6, 7797.0], [94.7, 7797.0], [94.8, 7805.0], [94.9, 7851.0], [95.0, 7853.0], [95.1, 7855.0], [95.2, 7882.0], [95.3, 7882.0], [95.4, 7883.0], [95.5, 7883.0], [95.6, 7884.0], [95.7, 7885.0], [95.8, 7971.0], [95.9, 7972.0], [96.0, 7972.0], [96.1, 7973.0], [96.2, 7974.0], [96.3, 8065.0], [96.4, 8117.0], [96.5, 8184.0], [96.6, 8257.0], [96.7, 8260.0], [96.8, 8261.0], [96.9, 8262.0], [97.0, 8318.0], [97.1, 8319.0], [97.2, 8319.0], [97.3, 8319.0], [97.4, 8320.0], [97.5, 8320.0], [97.6, 8322.0], [97.7, 8325.0], [97.8, 8464.0], [97.9, 8497.0], [98.0, 8653.0], [98.1, 8830.0], [98.2, 8994.0], [98.3, 9024.0], [98.4, 9106.0], [98.5, 9171.0], [98.6, 9335.0], [98.7, 9561.0], [98.8, 9562.0], [98.9, 9563.0], [99.0, 9563.0], [99.1, 9565.0], [99.2, 9648.0], [99.3, 9825.0], [99.4, 9826.0], [99.5, 9826.0], [99.6, 9827.0], [99.7, 9993.0], [99.8, 9993.0], [99.9, 9995.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 139.0, "series": [{"data": [[600.0, 65.0], [700.0, 45.0], [800.0, 34.0], [900.0, 29.0], [1000.0, 27.0], [1100.0, 11.0], [1200.0, 16.0], [1300.0, 17.0], [1400.0, 14.0], [1500.0, 19.0], [1600.0, 33.0], [1700.0, 38.0], [1800.0, 35.0], [1900.0, 42.0], [2000.0, 30.0], [2100.0, 45.0], [2200.0, 44.0], [2300.0, 32.0], [2400.0, 31.0], [2500.0, 13.0], [2600.0, 33.0], [2700.0, 49.0], [2800.0, 3.0], [2900.0, 27.0], [3000.0, 22.0], [3100.0, 55.0], [3300.0, 30.0], [3200.0, 28.0], [3400.0, 29.0], [3500.0, 73.0], [3600.0, 6.0], [3700.0, 2.0], [3800.0, 108.0], [3900.0, 30.0], [4000.0, 4.0], [4200.0, 32.0], [4300.0, 139.0], [4100.0, 1.0], [4500.0, 27.0], [4400.0, 53.0], [4600.0, 17.0], [4700.0, 56.0], [4800.0, 67.0], [5000.0, 24.0], [5100.0, 17.0], [4900.0, 5.0], [5200.0, 62.0], [5300.0, 108.0], [5500.0, 76.0], [5400.0, 17.0], [5600.0, 85.0], [5700.0, 32.0], [5800.0, 82.0], [6100.0, 11.0], [6000.0, 36.0], [6300.0, 8.0], [6200.0, 62.0], [6400.0, 43.0], [6500.0, 23.0], [6600.0, 31.0], [6700.0, 15.0], [6800.0, 17.0], [6900.0, 6.0], [7100.0, 14.0], [7000.0, 22.0], [7400.0, 19.0], [7300.0, 14.0], [7200.0, 2.0], [7500.0, 13.0], [7600.0, 33.0], [7700.0, 11.0], [7800.0, 27.0], [7900.0, 11.0], [8100.0, 4.0], [8000.0, 4.0], [8400.0, 5.0], [8200.0, 11.0], [8700.0, 2.0], [8600.0, 1.0], [8300.0, 22.0], [9200.0, 1.0], [9100.0, 3.0], [8800.0, 1.0], [8900.0, 2.0], [9000.0, 5.0], [9600.0, 2.0], [9300.0, 2.0], [9500.0, 15.0], [9900.0, 9.0], [9800.0, 10.0], [500.0, 83.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 98.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2521.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 98.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2521.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 32.03260869565216, "minX": 1.78906236E12, "maxY": 147.46400000000003, "series": [{"data": [[1.78906236E12, 32.03260869565216], [1.78906248E12, 147.46400000000003], [1.78906242E12, 135.36648583484012]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 176 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906248E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 519.6666666666666, "minX": 3.0, "maxY": 9024.2, "series": [{"data": [[3.0, 572.0], [4.0, 544.0], [5.0, 532.0], [6.0, 535.5], [7.0, 543.25], [8.0, 564.25], [9.0, 519.6666666666666], [10.0, 705.3333333333334], [11.0, 1302.1666666666665], [12.0, 3543.909090909091], [13.0, 538.8181818181818], [14.0, 583.0], [15.0, 553.9230769230769], [16.0, 570.5384615384615], [17.0, 592.6666666666666], [18.0, 584.9285714285716], [19.0, 608.0], [20.0, 1785.590909090909], [21.0, 986.0], [22.0, 645.7692307692307], [23.0, 662.3000000000001], [24.0, 681.75], [25.0, 1049.111111111111], [26.0, 1279.764705882353], [27.0, 752.7500000000001], [28.0, 950.6666666666667], [29.0, 1119.1999999999998], [30.0, 850.25], [31.0, 886.8888888888888], [32.0, 908.111111111111], [33.0, 1113.9999999999998], [34.0, 1482.6666666666667], [35.0, 1015.6666666666665], [36.0, 1440.8666666666668], [37.0, 2184.6153846153848], [38.0, 1209.4999999999998], [39.0, 1313.75], [40.0, 1273.111111111111], [41.0, 1676.8], [42.0, 1841.5], [43.0, 1711.230769230769], [44.0, 1442.6666666666665], [45.0, 1690.8571428571431], [46.0, 2777.0], [47.0, 1632.3749999999998], [48.0, 1750.75], [49.0, 1815.2222222222222], [50.0, 1766.6666666666667], [51.0, 1799.5], [52.0, 2595.9375000000005], [54.0, 1906.181818181818], [55.0, 1852.833333333333], [56.0, 1915.4166666666667], [58.0, 1990.769230769231], [59.0, 2010.7692307692305], [61.0, 2091.8000000000006], [60.0, 5324.0], [62.0, 2277.066666666667], [63.0, 5323.0], [64.0, 2267.444444444445], [65.0, 2072.625], [67.0, 2053.1666666666665], [66.0, 5074.0], [69.0, 2416.2999999999997], [70.0, 2378.809523809524], [73.0, 2334.55], [75.0, 2392.7272727272725], [77.0, 2424.7727272727266], [76.0, 5322.142857142858], [80.0, 2589.666666666667], [82.0, 2625.208333333333], [85.0, 2865.407407407407], [88.0, 2819.629629629629], [91.0, 3003.241379310345], [89.0, 5317.0], [94.0, 3085.8], [97.0, 3284.294117647058], [101.0, 3561.6749999999993], [103.0, 5318.0], [100.0, 5317.0], [104.0, 4383.711538461538], [108.0, 3310.9444444444443], [113.0, 3869.0000000000005], [117.0, 3988.15], [121.0, 3814.2391304347834], [126.0, 4024.2380952380954], [127.0, 6176.375], [131.0, 4170.019607843138], [132.0, 9024.2], [136.0, 4570.3469387755085], [142.0, 4790.303571428571], [143.0, 4328.0], [148.0, 4778.649122807019], [151.0, 4329.666666666667], [150.0, 4329.0], [147.0, 4328.5], [146.0, 4331.0], [145.0, 4330.0], [144.0, 4331.0], [153.0, 5226.0], [154.0, 4769.9032258064535], [158.0, 4325.0], [157.0, 4324.0], [156.0, 4327.0], [152.0, 4330.0], [160.0, 5114.76785714286], [166.0, 7447.4], [167.0, 5156.216666666666], [164.0, 5320.5], [161.0, 4326.5], [172.0, 7778.2], [173.0, 5218.762711864408], [171.0, 5321.0], [170.0, 4919.4], [168.0, 5322.0], [176.0, 6300.533411488864]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[119.52615502100045, 4209.364261168383]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 176.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1211.3333333333333, "minX": 1.78906236E12, "maxY": 6387.15, "series": [{"data": [[1.78906236E12, 1771.0], [1.78906248E12, 1926.9], [1.78906242E12, 6387.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78906236E12, 1211.3333333333333], [1.78906248E12, 1316.6666666666667], [1.78906242E12, 4368.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906248E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1075.9369565217378, "minX": 1.78906236E12, "maxY": 6029.9000000000015, "series": [{"data": [[1.78906236E12, 1075.9369565217378], [1.78906248E12, 6029.9000000000015], [1.78906242E12, 4529.502109704641]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906248E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1075.8108695652172, "minX": 1.78906236E12, "maxY": 6029.881999999998, "series": [{"data": [[1.78906236E12, 1075.8108695652172], [1.78906248E12, 6029.881999999998], [1.78906242E12, 4529.488245931285]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906248E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.12356841470765528, "minX": 1.78906236E12, "maxY": 0.18695652173913027, "series": [{"data": [[1.78906236E12, 0.18695652173913027], [1.78906248E12, 0.152], [1.78906242E12, 0.12356841470765528]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906248E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 519.0, "minX": 1.78906236E12, "maxY": 620.0, "series": [{"data": [[1.78906236E12, 620.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78906236E12, 519.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78906236E12, 606.3000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78906236E12, 620.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78906236E12, 570.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78906236E12, 613.1]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906236E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 528.0, "minX": 4.0, "maxY": 9024.0, "series": [{"data": [[4.0, 562.5], [34.0, 606.0], [10.0, 528.0], [22.0, 577.0], [27.0, 567.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 3294.0], [34.0, 3408.0], [36.0, 2415.5], [37.0, 4817.5], [39.0, 6257.0], [38.0, 7643.0], [40.0, 1980.5], [42.0, 2843.5], [43.0, 4527.5], [46.0, 4506.0], [49.0, 5264.0], [51.0, 4724.0], [54.0, 5213.0], [56.0, 4315.5], [57.0, 5371.0], [58.0, 6676.0], [62.0, 4325.0], [63.0, 4893.0], [69.0, 4357.0], [79.0, 5612.0], [5.0, 9024.0], [6.0, 5963.0], [97.0, 4899.0], [104.0, 3847.0], [8.0, 7951.5], [10.0, 672.5], [15.0, 7853.0], [17.0, 5586.0], [19.0, 2242.0], [21.0, 1882.0], [22.0, 2202.0], [23.0, 3803.5], [24.0, 2317.0], [25.0, 3346.0], [26.0, 1795.0], [27.0, 2724.0], [28.0, 3384.5], [29.0, 1436.5], [30.0, 1662.5], [31.0, 939.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 104.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 528.0, "minX": 4.0, "maxY": 9024.0, "series": [{"data": [[4.0, 562.0], [34.0, 606.0], [10.0, 528.0], [22.0, 577.0], [27.0, 567.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 3294.0], [34.0, 3408.0], [36.0, 2415.5], [37.0, 4817.5], [39.0, 6257.0], [38.0, 7643.0], [40.0, 1980.0], [42.0, 2843.5], [43.0, 4527.5], [46.0, 4506.0], [49.0, 5264.0], [51.0, 4724.0], [54.0, 5213.0], [56.0, 4315.5], [57.0, 5371.0], [58.0, 6676.0], [62.0, 4325.0], [63.0, 4893.0], [69.0, 4357.0], [79.0, 5612.0], [5.0, 9024.0], [6.0, 5963.0], [97.0, 4899.0], [104.0, 3847.0], [8.0, 7951.5], [10.0, 672.0], [15.0, 7853.0], [17.0, 5586.0], [19.0, 2242.0], [21.0, 1882.0], [22.0, 2202.0], [23.0, 3803.5], [24.0, 2317.0], [25.0, 3346.0], [26.0, 1795.0], [27.0, 2724.0], [28.0, 3384.5], [29.0, 1436.5], [30.0, 1662.5], [31.0, 939.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 104.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.4, "minX": 1.78906236E12, "maxY": 29.633333333333333, "series": [{"data": [[1.78906236E12, 8.616666666666667], [1.78906248E12, 5.4], [1.78906242E12, 29.633333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906248E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.95, "minX": 1.78906236E12, "maxY": 27.65, "series": [{"data": [[1.78906236E12, 7.666666666666667], [1.78906248E12, 7.383333333333334], [1.78906242E12, 27.65]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78906248E12, 0.95]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906248E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6333333333333333, "minX": 1.78906236E12, "maxY": 27.65, "series": [{"data": [[1.78906236E12, 1.6333333333333333]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78906236E12, 6.033333333333333], [1.78906248E12, 8.333333333333334], [1.78906242E12, 27.65]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906248E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6333333333333333, "minX": 1.78906236E12, "maxY": 27.65, "series": [{"data": [[1.78906236E12, 1.6333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78906236E12, 6.033333333333333], [1.78906248E12, 8.333333333333334], [1.78906242E12, 27.65]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906248E12, "title": "Total Transactions Per Second"}},
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

