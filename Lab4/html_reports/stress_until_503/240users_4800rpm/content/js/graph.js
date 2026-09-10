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
        data: {"result": {"minY": 507.0, "minX": 0.0, "maxY": 12269.0, "series": [{"data": [[0.0, 507.0], [0.1, 521.0], [0.2, 526.0], [0.3, 529.0], [0.4, 533.0], [0.5, 534.0], [0.6, 537.0], [0.7, 538.0], [0.8, 544.0], [0.9, 546.0], [1.0, 546.0], [1.1, 549.0], [1.2, 550.0], [1.3, 551.0], [1.4, 552.0], [1.5, 553.0], [1.6, 557.0], [1.7, 563.0], [1.8, 564.0], [1.9, 569.0], [2.0, 570.0], [2.1, 571.0], [2.2, 575.0], [2.3, 576.0], [2.4, 578.0], [2.5, 579.0], [2.6, 583.0], [2.7, 586.0], [2.8, 588.0], [2.9, 589.0], [3.0, 591.0], [3.1, 593.0], [3.2, 594.0], [3.3, 595.0], [3.4, 598.0], [3.5, 604.0], [3.6, 608.0], [3.7, 611.0], [3.8, 614.0], [3.9, 618.0], [4.0, 625.0], [4.1, 628.0], [4.2, 632.0], [4.3, 633.0], [4.4, 637.0], [4.5, 642.0], [4.6, 643.0], [4.7, 647.0], [4.8, 652.0], [4.9, 656.0], [5.0, 662.0], [5.1, 667.0], [5.2, 676.0], [5.3, 679.0], [5.4, 687.0], [5.5, 689.0], [5.6, 695.0], [5.7, 701.0], [5.8, 702.0], [5.9, 706.0], [6.0, 711.0], [6.1, 723.0], [6.2, 725.0], [6.3, 730.0], [6.4, 736.0], [6.5, 738.0], [6.6, 745.0], [6.7, 759.0], [6.8, 760.0], [6.9, 770.0], [7.0, 780.0], [7.1, 793.0], [7.2, 799.0], [7.3, 805.0], [7.4, 816.0], [7.5, 819.0], [7.6, 822.0], [7.7, 832.0], [7.8, 835.0], [7.9, 851.0], [8.0, 871.0], [8.1, 918.0], [8.2, 926.0], [8.3, 941.0], [8.4, 953.0], [8.5, 964.0], [8.6, 965.0], [8.7, 972.0], [8.8, 977.0], [8.9, 1003.0], [9.0, 1006.0], [9.1, 1031.0], [9.2, 1047.0], [9.3, 1075.0], [9.4, 1086.0], [9.5, 1113.0], [9.6, 1152.0], [9.7, 1152.0], [9.8, 1153.0], [9.9, 1153.0], [10.0, 1179.0], [10.1, 1179.0], [10.2, 1189.0], [10.3, 1259.0], [10.4, 1327.0], [10.5, 1363.0], [10.6, 1372.0], [10.7, 1455.0], [10.8, 1463.0], [10.9, 1464.0], [11.0, 1520.0], [11.1, 1534.0], [11.2, 1536.0], [11.3, 1546.0], [11.4, 1617.0], [11.5, 1623.0], [11.6, 1643.0], [11.7, 1658.0], [11.8, 1703.0], [11.9, 1763.0], [12.0, 1764.0], [12.1, 1766.0], [12.2, 1818.0], [12.3, 1819.0], [12.4, 1853.0], [12.5, 1853.0], [12.6, 1870.0], [12.7, 1936.0], [12.8, 1937.0], [12.9, 1976.0], [13.0, 1978.0], [13.1, 1991.0], [13.2, 1991.0], [13.3, 1992.0], [13.4, 2026.0], [13.5, 2027.0], [13.6, 2039.0], [13.7, 2040.0], [13.8, 2070.0], [13.9, 2070.0], [14.0, 2199.0], [14.1, 2228.0], [14.2, 2230.0], [14.3, 2230.0], [14.4, 2230.0], [14.5, 2231.0], [14.6, 2231.0], [14.7, 2233.0], [14.8, 2234.0], [14.9, 2236.0], [15.0, 2236.0], [15.1, 2240.0], [15.2, 2242.0], [15.3, 2256.0], [15.4, 2258.0], [15.5, 2259.0], [15.6, 2260.0], [15.7, 2261.0], [15.8, 2282.0], [15.9, 2282.0], [16.0, 2283.0], [16.1, 2286.0], [16.2, 2286.0], [16.3, 2287.0], [16.4, 2287.0], [16.5, 2293.0], [16.6, 2316.0], [16.7, 2332.0], [16.8, 2335.0], [16.9, 2337.0], [17.0, 2371.0], [17.1, 2373.0], [17.2, 2380.0], [17.3, 2380.0], [17.4, 2381.0], [17.5, 2383.0], [17.6, 2431.0], [17.7, 2432.0], [17.8, 2433.0], [17.9, 2473.0], [18.0, 2486.0], [18.1, 2556.0], [18.2, 2557.0], [18.3, 2558.0], [18.4, 2558.0], [18.5, 2559.0], [18.6, 2576.0], [18.7, 2609.0], [18.8, 2610.0], [18.9, 2610.0], [19.0, 2610.0], [19.1, 2611.0], [19.2, 2611.0], [19.3, 2612.0], [19.4, 2612.0], [19.5, 2619.0], [19.6, 2619.0], [19.7, 2620.0], [19.8, 2621.0], [19.9, 2621.0], [20.0, 2622.0], [20.1, 2622.0], [20.2, 2622.0], [20.3, 2638.0], [20.4, 2669.0], [20.5, 2669.0], [20.6, 2670.0], [20.7, 2678.0], [20.8, 2681.0], [20.9, 2681.0], [21.0, 2682.0], [21.1, 2693.0], [21.2, 2708.0], [21.3, 2767.0], [21.4, 2790.0], [21.5, 2823.0], [21.6, 2824.0], [21.7, 2824.0], [21.8, 2825.0], [21.9, 2826.0], [22.0, 2826.0], [22.1, 2827.0], [22.2, 2827.0], [22.3, 2849.0], [22.4, 2850.0], [22.5, 2851.0], [22.6, 2852.0], [22.7, 2883.0], [22.8, 2893.0], [22.9, 2894.0], [23.0, 2894.0], [23.1, 2895.0], [23.2, 2895.0], [23.3, 2896.0], [23.4, 2896.0], [23.5, 2896.0], [23.6, 2897.0], [23.7, 2898.0], [23.8, 2937.0], [23.9, 2960.0], [24.0, 2961.0], [24.1, 2985.0], [24.2, 2986.0], [24.3, 2988.0], [24.4, 3011.0], [24.5, 3013.0], [24.6, 3050.0], [24.7, 3104.0], [24.8, 3144.0], [24.9, 3189.0], [25.0, 3189.0], [25.1, 3266.0], [25.2, 3318.0], [25.3, 3319.0], [25.4, 3319.0], [25.5, 3320.0], [25.6, 3320.0], [25.7, 3320.0], [25.8, 3320.0], [25.9, 3320.0], [26.0, 3321.0], [26.1, 3322.0], [26.2, 3323.0], [26.3, 3324.0], [26.4, 3325.0], [26.5, 3325.0], [26.6, 3325.0], [26.7, 3368.0], [26.8, 3368.0], [26.9, 3368.0], [27.0, 3369.0], [27.1, 3385.0], [27.2, 3395.0], [27.3, 3397.0], [27.4, 3398.0], [27.5, 3398.0], [27.6, 3399.0], [27.7, 3399.0], [27.8, 3399.0], [27.9, 3424.0], [28.0, 3445.0], [28.1, 3445.0], [28.2, 3445.0], [28.3, 3445.0], [28.4, 3446.0], [28.5, 3446.0], [28.6, 3446.0], [28.7, 3447.0], [28.8, 3448.0], [28.9, 3449.0], [29.0, 3572.0], [29.1, 3574.0], [29.2, 3579.0], [29.3, 3580.0], [29.4, 3581.0], [29.5, 3581.0], [29.6, 3582.0], [29.7, 3630.0], [29.8, 3630.0], [29.9, 3631.0], [30.0, 3631.0], [30.1, 3632.0], [30.2, 3632.0], [30.3, 3634.0], [30.4, 3649.0], [30.5, 3660.0], [30.6, 3687.0], [30.7, 3819.0], [30.8, 3821.0], [30.9, 3821.0], [31.0, 3821.0], [31.1, 3822.0], [31.2, 3825.0], [31.3, 3826.0], [31.4, 3826.0], [31.5, 3827.0], [31.6, 3828.0], [31.7, 3911.0], [31.8, 4149.0], [31.9, 4203.0], [32.0, 4204.0], [32.1, 4205.0], [32.2, 4231.0], [32.3, 4241.0], [32.4, 4242.0], [32.5, 4296.0], [32.6, 4296.0], [32.7, 4300.0], [32.8, 4301.0], [32.9, 4302.0], [33.0, 4412.0], [33.1, 4435.0], [33.2, 4495.0], [33.3, 4495.0], [33.4, 4496.0], [33.5, 4496.0], [33.6, 4496.0], [33.7, 4497.0], [33.8, 4497.0], [33.9, 4497.0], [34.0, 4503.0], [34.1, 4524.0], [34.2, 4569.0], [34.3, 4570.0], [34.4, 4571.0], [34.5, 4572.0], [34.6, 4572.0], [34.7, 4572.0], [34.8, 4572.0], [34.9, 4573.0], [35.0, 4573.0], [35.1, 4574.0], [35.2, 4617.0], [35.3, 4647.0], [35.4, 4674.0], [35.5, 4675.0], [35.6, 4675.0], [35.7, 4684.0], [35.8, 4767.0], [35.9, 4767.0], [36.0, 4768.0], [36.1, 4768.0], [36.2, 4769.0], [36.3, 4772.0], [36.4, 4773.0], [36.5, 4773.0], [36.6, 4774.0], [36.7, 4782.0], [36.8, 4782.0], [36.9, 4783.0], [37.0, 4783.0], [37.1, 4783.0], [37.2, 4858.0], [37.3, 4878.0], [37.4, 4879.0], [37.5, 4882.0], [37.6, 4883.0], [37.7, 4883.0], [37.8, 4884.0], [37.9, 4885.0], [38.0, 4885.0], [38.1, 4887.0], [38.2, 4896.0], [38.3, 4911.0], [38.4, 4950.0], [38.5, 4950.0], [38.6, 4965.0], [38.7, 4978.0], [38.8, 4979.0], [38.9, 4979.0], [39.0, 4980.0], [39.1, 4981.0], [39.2, 4998.0], [39.3, 4999.0], [39.4, 4999.0], [39.5, 4999.0], [39.6, 4999.0], [39.7, 5000.0], [39.8, 5001.0], [39.9, 5049.0], [40.0, 5057.0], [40.1, 5072.0], [40.2, 5072.0], [40.3, 5196.0], [40.4, 5197.0], [40.5, 5198.0], [40.6, 5280.0], [40.7, 5296.0], [40.8, 5296.0], [40.9, 5297.0], [41.0, 5297.0], [41.1, 5297.0], [41.2, 5298.0], [41.3, 5298.0], [41.4, 5299.0], [41.5, 5299.0], [41.6, 5299.0], [41.7, 5300.0], [41.8, 5443.0], [41.9, 5481.0], [42.0, 5563.0], [42.1, 5564.0], [42.2, 5564.0], [42.3, 5565.0], [42.4, 5566.0], [42.5, 5566.0], [42.6, 5567.0], [42.7, 5568.0], [42.8, 5577.0], [42.9, 5634.0], [43.0, 5635.0], [43.1, 5635.0], [43.2, 5635.0], [43.3, 5636.0], [43.4, 5637.0], [43.5, 5638.0], [43.6, 5663.0], [43.7, 5664.0], [43.8, 5665.0], [43.9, 5666.0], [44.0, 5666.0], [44.1, 5667.0], [44.2, 5667.0], [44.3, 5668.0], [44.4, 5669.0], [44.5, 5676.0], [44.6, 5677.0], [44.7, 5680.0], [44.8, 5680.0], [44.9, 5699.0], [45.0, 5715.0], [45.1, 5715.0], [45.2, 5719.0], [45.3, 5785.0], [45.4, 5786.0], [45.5, 5787.0], [45.6, 5798.0], [45.7, 5799.0], [45.8, 5832.0], [45.9, 5832.0], [46.0, 5834.0], [46.1, 5835.0], [46.2, 5835.0], [46.3, 5835.0], [46.4, 5836.0], [46.5, 5836.0], [46.6, 5837.0], [46.7, 5840.0], [46.8, 5841.0], [46.9, 5842.0], [47.0, 5844.0], [47.1, 5845.0], [47.2, 5845.0], [47.3, 5878.0], [47.4, 5878.0], [47.5, 5878.0], [47.6, 5878.0], [47.7, 5879.0], [47.8, 5879.0], [47.9, 5879.0], [48.0, 5916.0], [48.1, 5916.0], [48.2, 5917.0], [48.3, 5917.0], [48.4, 5917.0], [48.5, 5945.0], [48.6, 5946.0], [48.7, 5947.0], [48.8, 5983.0], [48.9, 5993.0], [49.0, 5993.0], [49.1, 5993.0], [49.2, 5994.0], [49.3, 5996.0], [49.4, 6005.0], [49.5, 6005.0], [49.6, 6043.0], [49.7, 6109.0], [49.8, 6126.0], [49.9, 6127.0], [50.0, 6128.0], [50.1, 6128.0], [50.2, 6128.0], [50.3, 6129.0], [50.4, 6175.0], [50.5, 6185.0], [50.6, 6185.0], [50.7, 6224.0], [50.8, 6286.0], [50.9, 6287.0], [51.0, 6289.0], [51.1, 6318.0], [51.2, 6324.0], [51.3, 6325.0], [51.4, 6326.0], [51.5, 6326.0], [51.6, 6327.0], [51.7, 6391.0], [51.8, 6392.0], [51.9, 6393.0], [52.0, 6421.0], [52.1, 6422.0], [52.2, 6423.0], [52.3, 6423.0], [52.4, 6424.0], [52.5, 6426.0], [52.6, 6451.0], [52.7, 6469.0], [52.8, 6486.0], [52.9, 6487.0], [53.0, 6487.0], [53.1, 6489.0], [53.2, 6490.0], [53.3, 6519.0], [53.4, 6523.0], [53.5, 6524.0], [53.6, 6524.0], [53.7, 6524.0], [53.8, 6535.0], [53.9, 6541.0], [54.0, 6543.0], [54.1, 6543.0], [54.2, 6545.0], [54.3, 6545.0], [54.4, 6545.0], [54.5, 6546.0], [54.6, 6546.0], [54.7, 6547.0], [54.8, 6547.0], [54.9, 6547.0], [55.0, 6548.0], [55.1, 6548.0], [55.2, 6548.0], [55.3, 6548.0], [55.4, 6548.0], [55.5, 6548.0], [55.6, 6548.0], [55.7, 6549.0], [55.8, 6549.0], [55.9, 6549.0], [56.0, 6550.0], [56.1, 6551.0], [56.2, 6551.0], [56.3, 6560.0], [56.4, 6562.0], [56.5, 6566.0], [56.6, 6567.0], [56.7, 6568.0], [56.8, 6568.0], [56.9, 6569.0], [57.0, 6574.0], [57.1, 6578.0], [57.2, 6605.0], [57.3, 6608.0], [57.4, 6608.0], [57.5, 6608.0], [57.6, 6608.0], [57.7, 6608.0], [57.8, 6608.0], [57.9, 6609.0], [58.0, 6609.0], [58.1, 6610.0], [58.2, 6610.0], [58.3, 6610.0], [58.4, 6610.0], [58.5, 6610.0], [58.6, 6611.0], [58.7, 6611.0], [58.8, 6611.0], [58.9, 6612.0], [59.0, 6612.0], [59.1, 6612.0], [59.2, 6612.0], [59.3, 6612.0], [59.4, 6613.0], [59.5, 6613.0], [59.6, 6613.0], [59.7, 6613.0], [59.8, 6614.0], [59.9, 6614.0], [60.0, 6615.0], [60.1, 6615.0], [60.2, 6616.0], [60.3, 6618.0], [60.4, 6619.0], [60.5, 6621.0], [60.6, 6622.0], [60.7, 6625.0], [60.8, 6660.0], [60.9, 6660.0], [61.0, 6661.0], [61.1, 6661.0], [61.2, 6661.0], [61.3, 6661.0], [61.4, 6683.0], [61.5, 6700.0], [61.6, 6701.0], [61.7, 6702.0], [61.8, 6706.0], [61.9, 6727.0], [62.0, 6728.0], [62.1, 6741.0], [62.2, 6741.0], [62.3, 6741.0], [62.4, 6741.0], [62.5, 6742.0], [62.6, 6743.0], [62.7, 6744.0], [62.8, 6744.0], [62.9, 6745.0], [63.0, 6769.0], [63.1, 6770.0], [63.2, 6795.0], [63.3, 6796.0], [63.4, 6796.0], [63.5, 6797.0], [63.6, 6809.0], [63.7, 6810.0], [63.8, 6810.0], [63.9, 6811.0], [64.0, 6816.0], [64.1, 6825.0], [64.2, 6826.0], [64.3, 6877.0], [64.4, 6887.0], [64.5, 6887.0], [64.6, 6893.0], [64.7, 6894.0], [64.8, 6895.0], [64.9, 6895.0], [65.0, 6896.0], [65.1, 6896.0], [65.2, 6916.0], [65.3, 7011.0], [65.4, 7012.0], [65.5, 7013.0], [65.6, 7013.0], [65.7, 7015.0], [65.8, 7016.0], [65.9, 7031.0], [66.0, 7043.0], [66.1, 7043.0], [66.2, 7045.0], [66.3, 7045.0], [66.4, 7046.0], [66.5, 7067.0], [66.6, 7155.0], [66.7, 7155.0], [66.8, 7155.0], [66.9, 7155.0], [67.0, 7156.0], [67.1, 7156.0], [67.2, 7156.0], [67.3, 7156.0], [67.4, 7156.0], [67.5, 7157.0], [67.6, 7157.0], [67.7, 7174.0], [67.8, 7201.0], [67.9, 7202.0], [68.0, 7202.0], [68.1, 7211.0], [68.2, 7211.0], [68.3, 7218.0], [68.4, 7278.0], [68.5, 7317.0], [68.6, 7321.0], [68.7, 7325.0], [68.8, 7326.0], [68.9, 7326.0], [69.0, 7327.0], [69.1, 7386.0], [69.2, 7387.0], [69.3, 7387.0], [69.4, 7387.0], [69.5, 7388.0], [69.6, 7390.0], [69.7, 7415.0], [69.8, 7434.0], [69.9, 7435.0], [70.0, 7435.0], [70.1, 7436.0], [70.2, 7438.0], [70.3, 7439.0], [70.4, 7511.0], [70.5, 7575.0], [70.6, 7634.0], [70.7, 7635.0], [70.8, 7636.0], [70.9, 7640.0], [71.0, 7641.0], [71.1, 7642.0], [71.2, 7642.0], [71.3, 7642.0], [71.4, 7647.0], [71.5, 7648.0], [71.6, 7649.0], [71.7, 7649.0], [71.8, 7650.0], [71.9, 7651.0], [72.0, 7652.0], [72.1, 7652.0], [72.2, 7661.0], [72.3, 7662.0], [72.4, 7662.0], [72.5, 7662.0], [72.6, 7663.0], [72.7, 7663.0], [72.8, 7664.0], [72.9, 7664.0], [73.0, 7664.0], [73.1, 7665.0], [73.2, 7666.0], [73.3, 7666.0], [73.4, 7675.0], [73.5, 7757.0], [73.6, 7779.0], [73.7, 7794.0], [73.8, 7798.0], [73.9, 7798.0], [74.0, 7799.0], [74.1, 7799.0], [74.2, 7804.0], [74.3, 7822.0], [74.4, 7822.0], [74.5, 7840.0], [74.6, 7840.0], [74.7, 7841.0], [74.8, 7848.0], [74.9, 7849.0], [75.0, 7849.0], [75.1, 7849.0], [75.2, 7899.0], [75.3, 7899.0], [75.4, 7901.0], [75.5, 7902.0], [75.6, 7902.0], [75.7, 7902.0], [75.8, 7964.0], [75.9, 7984.0], [76.0, 7998.0], [76.1, 7999.0], [76.2, 8094.0], [76.3, 8095.0], [76.4, 8095.0], [76.5, 8140.0], [76.6, 8168.0], [76.7, 8169.0], [76.8, 8170.0], [76.9, 8172.0], [77.0, 8172.0], [77.1, 8214.0], [77.2, 8309.0], [77.3, 8309.0], [77.4, 8310.0], [77.5, 8319.0], [77.6, 8320.0], [77.7, 8320.0], [77.8, 8320.0], [77.9, 8321.0], [78.0, 8321.0], [78.1, 8321.0], [78.2, 8321.0], [78.3, 8321.0], [78.4, 8321.0], [78.5, 8322.0], [78.6, 8323.0], [78.7, 8324.0], [78.8, 8325.0], [78.9, 8344.0], [79.0, 8345.0], [79.1, 8346.0], [79.2, 8347.0], [79.3, 8348.0], [79.4, 8348.0], [79.5, 8349.0], [79.6, 8349.0], [79.7, 8350.0], [79.8, 8350.0], [79.9, 8350.0], [80.0, 8380.0], [80.1, 8381.0], [80.2, 8392.0], [80.3, 8395.0], [80.4, 8395.0], [80.5, 8517.0], [80.6, 8533.0], [80.7, 8538.0], [80.8, 8609.0], [80.9, 8643.0], [81.0, 8678.0], [81.1, 8678.0], [81.2, 8679.0], [81.3, 8683.0], [81.4, 8684.0], [81.5, 8686.0], [81.6, 8712.0], [81.7, 8727.0], [81.8, 8728.0], [81.9, 8728.0], [82.0, 8728.0], [82.1, 8766.0], [82.2, 8804.0], [82.3, 8813.0], [82.4, 8813.0], [82.5, 8852.0], [82.6, 8888.0], [82.7, 8888.0], [82.8, 8888.0], [82.9, 8888.0], [83.0, 8892.0], [83.1, 8915.0], [83.2, 8915.0], [83.3, 8916.0], [83.4, 8916.0], [83.5, 8917.0], [83.6, 8918.0], [83.7, 8947.0], [83.8, 8947.0], [83.9, 8948.0], [84.0, 8948.0], [84.1, 8949.0], [84.2, 8950.0], [84.3, 8992.0], [84.4, 9008.0], [84.5, 9103.0], [84.6, 9105.0], [84.7, 9105.0], [84.8, 9105.0], [84.9, 9106.0], [85.0, 9106.0], [85.1, 9107.0], [85.2, 9126.0], [85.3, 9127.0], [85.4, 9127.0], [85.5, 9128.0], [85.6, 9128.0], [85.7, 9128.0], [85.8, 9129.0], [85.9, 9131.0], [86.0, 9136.0], [86.1, 9137.0], [86.2, 9137.0], [86.3, 9143.0], [86.4, 9187.0], [86.5, 9188.0], [86.6, 9189.0], [86.7, 9189.0], [86.8, 9189.0], [86.9, 9190.0], [87.0, 9190.0], [87.1, 9190.0], [87.2, 9190.0], [87.3, 9190.0], [87.4, 9191.0], [87.5, 9191.0], [87.6, 9191.0], [87.7, 9192.0], [87.8, 9221.0], [87.9, 9224.0], [88.0, 9225.0], [88.1, 9235.0], [88.2, 9235.0], [88.3, 9236.0], [88.4, 9237.0], [88.5, 9237.0], [88.6, 9239.0], [88.7, 9319.0], [88.8, 9321.0], [88.9, 9325.0], [89.0, 9334.0], [89.1, 9462.0], [89.2, 9524.0], [89.3, 9526.0], [89.4, 9530.0], [89.5, 9530.0], [89.6, 9631.0], [89.7, 9668.0], [89.8, 9670.0], [89.9, 9670.0], [90.0, 9671.0], [90.1, 9671.0], [90.2, 9672.0], [90.3, 9673.0], [90.4, 9737.0], [90.5, 9772.0], [90.6, 9773.0], [90.7, 9773.0], [90.8, 9775.0], [90.9, 9775.0], [91.0, 9776.0], [91.1, 9791.0], [91.2, 9795.0], [91.3, 9796.0], [91.4, 9796.0], [91.5, 9797.0], [91.6, 9797.0], [91.7, 9798.0], [91.8, 9847.0], [91.9, 9871.0], [92.0, 9888.0], [92.1, 9900.0], [92.2, 9902.0], [92.3, 9903.0], [92.4, 9920.0], [92.5, 9921.0], [92.6, 9922.0], [92.7, 9922.0], [92.8, 9923.0], [92.9, 9923.0], [93.0, 9923.0], [93.1, 9925.0], [93.2, 9926.0], [93.3, 9927.0], [93.4, 9944.0], [93.5, 9946.0], [93.6, 9947.0], [93.7, 9947.0], [93.8, 9947.0], [93.9, 9948.0], [94.0, 9948.0], [94.1, 9948.0], [94.2, 9949.0], [94.3, 9949.0], [94.4, 9949.0], [94.5, 9951.0], [94.6, 9952.0], [94.7, 9952.0], [94.8, 9952.0], [94.9, 9982.0], [95.0, 9982.0], [95.1, 9984.0], [95.2, 9985.0], [95.3, 9985.0], [95.4, 9985.0], [95.5, 9986.0], [95.6, 9987.0], [95.7, 9991.0], [95.8, 9991.0], [95.9, 9991.0], [96.0, 10053.0], [96.1, 10053.0], [96.2, 10053.0], [96.3, 10055.0], [96.4, 10056.0], [96.5, 10124.0], [96.6, 10147.0], [96.7, 10256.0], [96.8, 10257.0], [96.9, 10267.0], [97.0, 10267.0], [97.1, 10268.0], [97.2, 10269.0], [97.3, 10269.0], [97.4, 10269.0], [97.5, 10269.0], [97.6, 10271.0], [97.7, 10272.0], [97.8, 10319.0], [97.9, 10569.0], [98.0, 10582.0], [98.1, 10583.0], [98.2, 10583.0], [98.3, 10584.0], [98.4, 10584.0], [98.5, 10585.0], [98.6, 10586.0], [98.7, 10587.0], [98.8, 10615.0], [98.9, 10615.0], [99.0, 10618.0], [99.1, 10755.0], [99.2, 10756.0], [99.3, 10758.0], [99.4, 10824.0], [99.5, 11320.0], [99.6, 12069.0], [99.7, 12268.0], [99.8, 12269.0], [99.9, 12269.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 116.0, "series": [{"data": [[500.0, 92.0], [600.0, 61.0], [700.0, 42.0], [800.0, 23.0], [900.0, 22.0], [1000.0, 15.0], [1100.0, 21.0], [1200.0, 3.0], [1300.0, 8.0], [1400.0, 9.0], [1500.0, 10.0], [1600.0, 13.0], [1700.0, 9.0], [1800.0, 13.0], [1900.0, 20.0], [2000.0, 15.0], [2100.0, 3.0], [2300.0, 28.0], [2200.0, 68.0], [2400.0, 12.0], [2500.0, 17.0], [2600.0, 69.0], [2700.0, 6.0], [2800.0, 63.0], [2900.0, 16.0], [3000.0, 10.0], [3100.0, 10.0], [3300.0, 71.0], [3200.0, 3.0], [3400.0, 31.0], [3500.0, 19.0], [3600.0, 26.0], [3700.0, 2.0], [3800.0, 26.0], [3900.0, 3.0], [4000.0, 1.0], [4200.0, 20.0], [4100.0, 2.0], [4300.0, 10.0], [4500.0, 32.0], [4400.0, 27.0], [4600.0, 15.0], [4700.0, 40.0], [4800.0, 28.0], [5100.0, 7.0], [4900.0, 38.0], [5000.0, 17.0], [5300.0, 3.0], [5200.0, 31.0], [5600.0, 56.0], [5400.0, 4.0], [5500.0, 25.0], [5700.0, 23.0], [5800.0, 60.0], [6100.0, 26.0], [5900.0, 38.0], [6000.0, 8.0], [6200.0, 11.0], [6300.0, 23.0], [6400.0, 36.0], [6500.0, 107.0], [6600.0, 116.0], [6900.0, 3.0], [6800.0, 43.0], [6700.0, 57.0], [7100.0, 34.0], [7000.0, 33.0], [7400.0, 21.0], [7300.0, 31.0], [7200.0, 19.0], [7600.0, 79.0], [7500.0, 5.0], [7900.0, 22.0], [7800.0, 32.0], [7700.0, 17.0], [8000.0, 9.0], [8100.0, 17.0], [8700.0, 14.0], [8300.0, 89.0], [8500.0, 6.0], [8200.0, 2.0], [8400.0, 1.0], [8600.0, 24.0], [8900.0, 37.0], [9200.0, 25.0], [8800.0, 25.0], [9100.0, 88.0], [9000.0, 2.0], [9500.0, 11.0], [9400.0, 1.0], [9300.0, 12.0], [9700.0, 40.0], [9600.0, 21.0], [9800.0, 6.0], [10200.0, 31.0], [10100.0, 5.0], [9900.0, 106.0], [10000.0, 14.0], [10500.0, 23.0], [10600.0, 10.0], [10300.0, 2.0], [10700.0, 7.0], [11000.0, 1.0], [10800.0, 2.0], [10900.0, 1.0], [11500.0, 1.0], [11300.0, 1.0], [12200.0, 10.0], [12000.0, 1.0], [11800.0, 1.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 107.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2598.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 107.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2598.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 79.41996047430818, "minX": 1.78906278E12, "maxY": 209.14766686355605, "series": [{"data": [[1.78906284E12, 209.14766686355605], [1.78906278E12, 79.41996047430818]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 240 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906284E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 525.5, "minX": 3.0, "maxY": 10078.636363636364, "series": [{"data": [[3.0, 594.0], [4.0, 5333.2], [5.0, 525.5], [6.0, 2546.0], [7.0, 2563.333333333333], [8.0, 534.75], [9.0, 539.0], [10.0, 1533.1666666666665], [11.0, 1754.4], [12.0, 532.6], [13.0, 558.4], [14.0, 545.5714285714286], [15.0, 562.8], [16.0, 559.625], [17.0, 2259.285714285714], [18.0, 569.2], [19.0, 4101.666666666667], [20.0, 582.4285714285714], [21.0, 1658.1818181818182], [22.0, 603.5], [23.0, 1205.5], [24.0, 627.4444444444443], [25.0, 638.0], [26.0, 652.4166666666666], [27.0, 675.3333333333334], [28.0, 2137.5], [29.0, 2143.0833333333335], [30.0, 724.9], [31.0, 742.625], [32.0, 768.9000000000001], [33.0, 1431.7777777777778], [34.0, 1453.4444444444443], [35.0, 1302.6923076923076], [36.0, 926.1666666666666], [37.0, 957.0], [38.0, 1024.142857142857], [39.0, 3162.4999999999995], [40.0, 1091.4], [41.0, 1157.5], [42.0, 1152.0], [43.0, 1231.142857142857], [44.0, 2794.2857142857138], [45.0, 1470.8750000000002], [46.0, 1481.0], [47.0, 1558.3333333333333], [48.0, 1571.9999999999998], [49.0, 6544.5], [50.0, 2175.6363636363635], [51.0, 6544.0], [52.0, 2981.5], [53.0, 1920.090909090909], [55.0, 2373.1666666666665], [57.0, 3379.277777777778], [58.0, 6549.0], [60.0, 2241.0], [62.0, 2404.8], [65.0, 2417.5000000000005], [68.0, 3998.48275862069], [70.0, 2477.777777777778], [74.0, 2735.521739130436], [73.0, 6661.5], [77.0, 2559.857142857143], [79.0, 2835.2800000000007], [78.0, 6661.0], [80.0, 5189.666666666667], [83.0, 2405.333333333333], [82.0, 6608.0], [81.0, 6610.0], [87.0, 5188.083333333333], [88.0, 2868.7272727272725], [90.0, 2687.9259259259256], [94.0, 2920.21875], [95.0, 6661.0], [92.0, 6796.25], [99.0, 2804.1250000000005], [98.0, 6931.5], [96.0, 7202.0], [103.0, 3125.111111111111], [104.0, 6891.857142857143], [108.0, 3248.916666666666], [110.0, 2854.0], [109.0, 9903.6], [114.0, 3659.625], [118.0, 10055.0], [117.0, 9962.2], [116.0, 9902.0], [121.0, 4571.608695652174], [122.0, 3749.9047619047615], [127.0, 4222.590909090908], [124.0, 10054.0], [135.0, 4554.192307692307], [131.0, 9888.0], [130.0, 10078.636363636364], [129.0, 10053.0], [136.0, 3656.0], [141.0, 4406.454545454546], [142.0, 6743.625], [140.0, 6744.0], [137.0, 6745.0], [144.0, 4225.0], [145.0, 5248.0], [146.0, 4606.0], [149.0, 5487.771428571429], [150.0, 3640.363636363636], [151.0, 6896.0], [148.0, 6857.5], [152.0, 4241.2], [157.0, 6159.0], [158.0, 4977.682926829268], [156.0, 6780.25], [155.0, 6741.0], [154.0, 6741.0], [153.0, 6741.0], [163.0, 5538.5], [167.0, 5728.730158730158], [166.0, 6843.666666666666], [161.0, 6741.0], [160.0, 6740.0], [169.0, 4936.8], [174.0, 6856.5], [173.0, 7272.0], [172.0, 6894.0], [168.0, 7649.0], [176.0, 6598.599999999999], [177.0, 5147.703703703705], [180.0, 6894.0], [179.0, 7459.5], [185.0, 6609.263157894738], [186.0, 8374.499999999998], [187.0, 5471.062499999999], [190.0, 5846.291666666667], [191.0, 9991.0], [188.0, 6894.0], [194.0, 6961.0], [199.0, 5917.923076923077], [192.0, 9125.555555555555], [200.0, 6172.0], [201.0, 7407.333333333333], [207.0, 9157.172413793103], [208.0, 7188.157894736841], [212.0, 6834.414634146343], [213.0, 5505.227272727274], [214.0, 8983.8], [215.0, 7420.357142857143], [211.0, 9984.0], [209.0, 9984.666666666666], [216.0, 7155.74193548387], [223.0, 6770.0], [221.0, 6816.0], [220.0, 6876.5], [218.0, 8125.400000000001], [225.0, 8812.833333333332], [226.0, 6618.875000000001], [231.0, 5816.51282051282], [237.0, 6810.272727272727], [240.0, 8354.018518518538]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[160.61293900184842, 5683.055083179302]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 240.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2664.9333333333334, "minX": 1.78906278E12, "maxY": 6522.016666666666, "series": [{"data": [[1.78906284E12, 6522.016666666666], [1.78906278E12, 3896.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78906284E12, 4458.233333333334], [1.78906278E12, 2664.9333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906284E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2529.7579051383395, "minX": 1.78906278E12, "maxY": 7567.955699940938, "series": [{"data": [[1.78906284E12, 7567.955699940938], [1.78906278E12, 2529.7579051383395]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906284E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2529.725296442689, "minX": 1.78906278E12, "maxY": 7567.927347903132, "series": [{"data": [[1.78906284E12, 7567.927347903132], [1.78906278E12, 2529.725296442689]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906284E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.15612648221343853, "minX": 1.78906278E12, "maxY": 0.18606024808033067, "series": [{"data": [[1.78906284E12, 0.18606024808033067], [1.78906278E12, 0.15612648221343853]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906284E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 507.0, "minX": 1.78906278E12, "maxY": 618.0, "series": [{"data": [[1.78906278E12, 618.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78906278E12, 507.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78906278E12, 607.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78906278E12, 618.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78906278E12, 570.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78906278E12, 613.6]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906278E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 535.0, "minX": 1.0, "maxY": 9948.0, "series": [{"data": [[2.0, 592.5], [17.0, 535.0], [34.0, 598.0], [9.0, 544.0], [21.0, 551.0], [29.0, 570.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 4465.5], [32.0, 2896.0], [34.0, 2381.0], [35.0, 6568.0], [37.0, 1573.5], [36.0, 4634.5], [39.0, 5835.0], [42.0, 5006.0], [45.0, 5653.5], [44.0, 4768.0], [49.0, 2824.0], [3.0, 7389.5], [51.0, 5296.0], [53.0, 7664.0], [56.0, 5337.0], [61.0, 8349.0], [63.0, 5974.0], [62.0, 5879.0], [4.0, 5657.5], [66.0, 7652.0], [67.0, 9948.0], [75.0, 8309.0], [5.0, 5298.0], [82.0, 6202.0], [87.0, 6613.0], [89.0, 9190.0], [93.0, 7902.0], [106.0, 6894.0], [7.0, 7635.0], [131.0, 6551.0], [10.0, 7675.5], [12.0, 8888.0], [13.0, 5917.0], [15.0, 5265.0], [1.0, 3656.0], [17.0, 7015.0], [18.0, 4749.5], [20.0, 6524.0], [22.0, 2216.0], [23.0, 3683.0], [24.0, 3863.5], [26.0, 1903.0], [31.0, 2621.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 131.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 535.0, "minX": 1.0, "maxY": 9948.0, "series": [{"data": [[2.0, 590.0], [17.0, 535.0], [34.0, 598.0], [9.0, 544.0], [21.0, 551.0], [29.0, 570.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 4465.5], [32.0, 2895.0], [34.0, 2381.0], [35.0, 6568.0], [37.0, 1573.5], [36.0, 4634.5], [39.0, 5835.0], [42.0, 5006.0], [45.0, 5653.5], [44.0, 4768.0], [49.0, 2824.0], [3.0, 7389.5], [51.0, 5296.0], [53.0, 7664.0], [56.0, 5337.0], [61.0, 8349.0], [63.0, 5974.0], [62.0, 5879.0], [4.0, 5657.5], [66.0, 7652.0], [67.0, 9948.0], [75.0, 8309.0], [5.0, 5298.0], [82.0, 6202.0], [87.0, 6613.0], [89.0, 9190.0], [93.0, 7902.0], [106.0, 6894.0], [7.0, 7634.0], [131.0, 6551.0], [10.0, 7675.5], [12.0, 8888.0], [13.0, 5917.0], [15.0, 5265.0], [1.0, 3656.0], [17.0, 7015.0], [18.0, 4749.5], [20.0, 6524.0], [22.0, 2216.0], [23.0, 3683.0], [24.0, 3863.5], [26.0, 1903.0], [31.0, 2621.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 131.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 19.4, "minX": 1.78906278E12, "maxY": 25.683333333333334, "series": [{"data": [[1.78906284E12, 25.683333333333334], [1.78906278E12, 19.4]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906284E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.9833333333333334, "minX": 1.78906278E12, "maxY": 26.233333333333334, "series": [{"data": [[1.78906284E12, 26.233333333333334], [1.78906278E12, 16.866666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78906284E12, 1.9833333333333334]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906284E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7833333333333334, "minX": 1.78906278E12, "maxY": 28.216666666666665, "series": [{"data": [[1.78906278E12, 1.7833333333333334]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78906284E12, 28.216666666666665], [1.78906278E12, 15.083333333333334]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906284E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7833333333333334, "minX": 1.78906278E12, "maxY": 28.216666666666665, "series": [{"data": [[1.78906278E12, 1.7833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78906284E12, 28.216666666666665], [1.78906278E12, 15.083333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906284E12, "title": "Total Transactions Per Second"}},
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

