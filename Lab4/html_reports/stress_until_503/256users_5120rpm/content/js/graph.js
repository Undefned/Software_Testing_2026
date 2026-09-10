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
        data: {"result": {"minY": 517.0, "minX": 0.0, "maxY": 17124.0, "series": [{"data": [[0.0, 517.0], [0.1, 519.0], [0.2, 523.0], [0.3, 525.0], [0.4, 527.0], [0.5, 529.0], [0.6, 534.0], [0.7, 535.0], [0.8, 535.0], [0.9, 539.0], [1.0, 540.0], [1.1, 542.0], [1.2, 545.0], [1.3, 548.0], [1.4, 550.0], [1.5, 551.0], [1.6, 553.0], [1.7, 556.0], [1.8, 558.0], [1.9, 561.0], [2.0, 564.0], [2.1, 565.0], [2.2, 571.0], [2.3, 572.0], [2.4, 574.0], [2.5, 578.0], [2.6, 580.0], [2.7, 583.0], [2.8, 587.0], [2.9, 588.0], [3.0, 592.0], [3.1, 597.0], [3.2, 600.0], [3.3, 601.0], [3.4, 608.0], [3.5, 609.0], [3.6, 612.0], [3.7, 616.0], [3.8, 621.0], [3.9, 625.0], [4.0, 629.0], [4.1, 632.0], [4.2, 636.0], [4.3, 637.0], [4.4, 638.0], [4.5, 645.0], [4.6, 650.0], [4.7, 651.0], [4.8, 656.0], [4.9, 662.0], [5.0, 668.0], [5.1, 671.0], [5.2, 676.0], [5.3, 683.0], [5.4, 687.0], [5.5, 689.0], [5.6, 692.0], [5.7, 696.0], [5.8, 701.0], [5.9, 706.0], [6.0, 710.0], [6.1, 720.0], [6.2, 725.0], [6.3, 736.0], [6.4, 743.0], [6.5, 746.0], [6.6, 749.0], [6.7, 754.0], [6.8, 765.0], [6.9, 772.0], [7.0, 776.0], [7.1, 794.0], [7.2, 797.0], [7.3, 802.0], [7.4, 822.0], [7.5, 825.0], [7.6, 836.0], [7.7, 850.0], [7.8, 857.0], [7.9, 886.0], [8.0, 904.0], [8.1, 914.0], [8.2, 921.0], [8.3, 928.0], [8.4, 964.0], [8.5, 967.0], [8.6, 995.0], [8.7, 1000.0], [8.8, 1033.0], [8.9, 1041.0], [9.0, 1041.0], [9.1, 1050.0], [9.2, 1096.0], [9.3, 1150.0], [9.4, 1152.0], [9.5, 1165.0], [9.6, 1188.0], [9.7, 1191.0], [9.8, 1242.0], [9.9, 1287.0], [10.0, 1321.0], [10.1, 1321.0], [10.2, 1372.0], [10.3, 1372.0], [10.4, 1411.0], [10.5, 1413.0], [10.6, 1443.0], [10.7, 1489.0], [10.8, 1491.0], [10.9, 1497.0], [11.0, 1514.0], [11.1, 1644.0], [11.2, 1645.0], [11.3, 1701.0], [11.4, 1737.0], [11.5, 1738.0], [11.6, 1742.0], [11.7, 1820.0], [11.8, 1820.0], [11.9, 1909.0], [12.0, 1922.0], [12.1, 1923.0], [12.2, 1939.0], [12.3, 1940.0], [12.4, 1976.0], [12.5, 2011.0], [12.6, 2019.0], [12.7, 2056.0], [12.8, 2058.0], [12.9, 2066.0], [13.0, 2072.0], [13.1, 2100.0], [13.2, 2100.0], [13.3, 2123.0], [13.4, 2123.0], [13.5, 2139.0], [13.6, 2198.0], [13.7, 2198.0], [13.8, 2199.0], [13.9, 2232.0], [14.0, 2233.0], [14.1, 2233.0], [14.2, 2235.0], [14.3, 2262.0], [14.4, 2263.0], [14.5, 2281.0], [14.6, 2281.0], [14.7, 2283.0], [14.8, 2298.0], [14.9, 2336.0], [15.0, 2404.0], [15.1, 2405.0], [15.2, 2415.0], [15.3, 2416.0], [15.4, 2416.0], [15.5, 2461.0], [15.6, 2464.0], [15.7, 2473.0], [15.8, 2482.0], [15.9, 2483.0], [16.0, 2483.0], [16.1, 2483.0], [16.2, 2484.0], [16.3, 2484.0], [16.4, 2484.0], [16.5, 2493.0], [16.6, 2494.0], [16.7, 2494.0], [16.8, 2495.0], [16.9, 2495.0], [17.0, 2496.0], [17.1, 2496.0], [17.2, 2497.0], [17.3, 2501.0], [17.4, 2502.0], [17.5, 2545.0], [17.6, 2576.0], [17.7, 2576.0], [17.8, 2578.0], [17.9, 2585.0], [18.0, 2586.0], [18.1, 2587.0], [18.2, 2587.0], [18.3, 2588.0], [18.4, 2589.0], [18.5, 2597.0], [18.6, 2598.0], [18.7, 2598.0], [18.8, 2598.0], [18.9, 2616.0], [19.0, 2691.0], [19.1, 2707.0], [19.2, 2751.0], [19.3, 2767.0], [19.4, 2777.0], [19.5, 2777.0], [19.6, 2778.0], [19.7, 2779.0], [19.8, 2780.0], [19.9, 2780.0], [20.0, 2780.0], [20.1, 2781.0], [20.2, 2781.0], [20.3, 2790.0], [20.4, 2790.0], [20.5, 2794.0], [20.6, 2794.0], [20.7, 2833.0], [20.8, 2833.0], [20.9, 2834.0], [21.0, 2835.0], [21.1, 2851.0], [21.2, 2921.0], [21.3, 2940.0], [21.4, 2940.0], [21.5, 2941.0], [21.6, 2941.0], [21.7, 2957.0], [21.8, 2958.0], [21.9, 2959.0], [22.0, 2959.0], [22.1, 2959.0], [22.2, 2960.0], [22.3, 2960.0], [22.4, 2960.0], [22.5, 2960.0], [22.6, 2961.0], [22.7, 3076.0], [22.8, 3117.0], [22.9, 3118.0], [23.0, 3118.0], [23.1, 3124.0], [23.2, 3126.0], [23.3, 3126.0], [23.4, 3126.0], [23.5, 3126.0], [23.6, 3127.0], [23.7, 3127.0], [23.8, 3127.0], [23.9, 3128.0], [24.0, 3154.0], [24.1, 3213.0], [24.2, 3214.0], [24.3, 3218.0], [24.4, 3268.0], [24.5, 3269.0], [24.6, 3269.0], [24.7, 3269.0], [24.8, 3270.0], [24.9, 3270.0], [25.0, 3271.0], [25.1, 3271.0], [25.2, 3272.0], [25.3, 3316.0], [25.4, 3324.0], [25.5, 3357.0], [25.6, 3364.0], [25.7, 3364.0], [25.8, 3365.0], [25.9, 3365.0], [26.0, 3366.0], [26.1, 3387.0], [26.2, 3425.0], [26.3, 3450.0], [26.4, 3450.0], [26.5, 3451.0], [26.6, 3452.0], [26.7, 3453.0], [26.8, 3496.0], [26.9, 3499.0], [27.0, 3500.0], [27.1, 3501.0], [27.2, 3501.0], [27.3, 3502.0], [27.4, 3502.0], [27.5, 3557.0], [27.6, 3623.0], [27.7, 3634.0], [27.8, 3750.0], [27.9, 3767.0], [28.0, 3768.0], [28.1, 3768.0], [28.2, 3774.0], [28.3, 3774.0], [28.4, 3775.0], [28.5, 3776.0], [28.6, 3778.0], [28.7, 3778.0], [28.8, 3892.0], [28.9, 3938.0], [29.0, 3938.0], [29.1, 3938.0], [29.2, 3939.0], [29.3, 3939.0], [29.4, 3940.0], [29.5, 3940.0], [29.6, 3941.0], [29.7, 3941.0], [29.8, 4015.0], [29.9, 4015.0], [30.0, 4015.0], [30.1, 4016.0], [30.2, 4017.0], [30.3, 4022.0], [30.4, 4023.0], [30.5, 4023.0], [30.6, 4023.0], [30.7, 4023.0], [30.8, 4023.0], [30.9, 4235.0], [31.0, 4251.0], [31.1, 4371.0], [31.2, 4373.0], [31.3, 4374.0], [31.4, 4375.0], [31.5, 4376.0], [31.6, 4376.0], [31.7, 4377.0], [31.8, 4377.0], [31.9, 4378.0], [32.0, 4415.0], [32.1, 4416.0], [32.2, 4470.0], [32.3, 4584.0], [32.4, 4584.0], [32.5, 4585.0], [32.6, 4585.0], [32.7, 4586.0], [32.8, 4587.0], [32.9, 4587.0], [33.0, 4588.0], [33.1, 4588.0], [33.2, 4589.0], [33.3, 4702.0], [33.4, 4740.0], [33.5, 4741.0], [33.6, 4742.0], [33.7, 4742.0], [33.8, 4743.0], [33.9, 4743.0], [34.0, 4744.0], [34.1, 4744.0], [34.2, 4744.0], [34.3, 4744.0], [34.4, 4745.0], [34.5, 4745.0], [34.6, 4794.0], [34.7, 4869.0], [34.8, 4934.0], [34.9, 4980.0], [35.0, 5031.0], [35.1, 5032.0], [35.2, 5032.0], [35.3, 5033.0], [35.4, 5033.0], [35.5, 5034.0], [35.6, 5039.0], [35.7, 5039.0], [35.8, 5171.0], [35.9, 5181.0], [36.0, 5181.0], [36.1, 5182.0], [36.2, 5182.0], [36.3, 5184.0], [36.4, 5184.0], [36.5, 5234.0], [36.6, 5239.0], [36.7, 5239.0], [36.8, 5239.0], [36.9, 5239.0], [37.0, 5240.0], [37.1, 5240.0], [37.2, 5240.0], [37.3, 5240.0], [37.4, 5241.0], [37.5, 5241.0], [37.6, 5241.0], [37.7, 5241.0], [37.8, 5241.0], [37.9, 5241.0], [38.0, 5241.0], [38.1, 5347.0], [38.2, 5347.0], [38.3, 5347.0], [38.4, 5348.0], [38.5, 5348.0], [38.6, 5348.0], [38.7, 5349.0], [38.8, 5357.0], [38.9, 5358.0], [39.0, 5399.0], [39.1, 5515.0], [39.2, 5517.0], [39.3, 5557.0], [39.4, 5564.0], [39.5, 5576.0], [39.6, 5577.0], [39.7, 5636.0], [39.8, 5692.0], [39.9, 5697.0], [40.0, 5698.0], [40.1, 5725.0], [40.2, 5725.0], [40.3, 5725.0], [40.4, 5725.0], [40.5, 5725.0], [40.6, 5727.0], [40.7, 5727.0], [40.8, 5728.0], [40.9, 5830.0], [41.0, 5845.0], [41.1, 5858.0], [41.2, 5858.0], [41.3, 5897.0], [41.4, 5897.0], [41.5, 5897.0], [41.6, 5898.0], [41.7, 5898.0], [41.8, 5899.0], [41.9, 5900.0], [42.0, 5900.0], [42.1, 5904.0], [42.2, 5941.0], [42.3, 5984.0], [42.4, 6016.0], [42.5, 6017.0], [42.6, 6097.0], [42.7, 6144.0], [42.8, 6145.0], [42.9, 6145.0], [43.0, 6155.0], [43.1, 6197.0], [43.2, 6197.0], [43.3, 6197.0], [43.4, 6199.0], [43.5, 6199.0], [43.6, 6199.0], [43.7, 6199.0], [43.8, 6202.0], [43.9, 6202.0], [44.0, 6203.0], [44.1, 6203.0], [44.2, 6203.0], [44.3, 6203.0], [44.4, 6203.0], [44.5, 6203.0], [44.6, 6204.0], [44.7, 6204.0], [44.8, 6206.0], [44.9, 6208.0], [45.0, 6221.0], [45.1, 6222.0], [45.2, 6222.0], [45.3, 6223.0], [45.4, 6231.0], [45.5, 6231.0], [45.6, 6231.0], [45.7, 6232.0], [45.8, 6233.0], [45.9, 6233.0], [46.0, 6235.0], [46.1, 6236.0], [46.2, 6239.0], [46.3, 6243.0], [46.4, 6243.0], [46.5, 6265.0], [46.6, 6270.0], [46.7, 6270.0], [46.8, 6271.0], [46.9, 6272.0], [47.0, 6299.0], [47.1, 6304.0], [47.2, 6305.0], [47.3, 6347.0], [47.4, 6349.0], [47.5, 6349.0], [47.6, 6357.0], [47.7, 6357.0], [47.8, 6358.0], [47.9, 6359.0], [48.0, 6360.0], [48.1, 6428.0], [48.2, 6429.0], [48.3, 6429.0], [48.4, 6499.0], [48.5, 6548.0], [48.6, 6561.0], [48.7, 6646.0], [48.8, 6701.0], [48.9, 6711.0], [49.0, 6711.0], [49.1, 6712.0], [49.2, 6713.0], [49.3, 6713.0], [49.4, 6714.0], [49.5, 6714.0], [49.6, 6714.0], [49.7, 6714.0], [49.8, 6715.0], [49.9, 6734.0], [50.0, 6735.0], [50.1, 6735.0], [50.2, 6740.0], [50.3, 6741.0], [50.4, 6764.0], [50.5, 6765.0], [50.6, 6766.0], [50.7, 6766.0], [50.8, 6767.0], [50.9, 6767.0], [51.0, 6767.0], [51.1, 6768.0], [51.2, 6768.0], [51.3, 6769.0], [51.4, 6770.0], [51.5, 6780.0], [51.6, 6831.0], [51.7, 6834.0], [51.8, 6834.0], [51.9, 6834.0], [52.0, 6835.0], [52.1, 6836.0], [52.2, 6836.0], [52.3, 6836.0], [52.4, 6836.0], [52.5, 6836.0], [52.6, 6838.0], [52.7, 6865.0], [52.8, 6865.0], [52.9, 6866.0], [53.0, 6866.0], [53.1, 6867.0], [53.2, 6868.0], [53.3, 6870.0], [53.4, 6870.0], [53.5, 6871.0], [53.6, 6871.0], [53.7, 6872.0], [53.8, 6872.0], [53.9, 6884.0], [54.0, 6909.0], [54.1, 6911.0], [54.2, 6912.0], [54.3, 6916.0], [54.4, 6916.0], [54.5, 6917.0], [54.6, 6940.0], [54.7, 6959.0], [54.8, 6965.0], [54.9, 6966.0], [55.0, 6966.0], [55.1, 6994.0], [55.2, 7085.0], [55.3, 7086.0], [55.4, 7086.0], [55.5, 7087.0], [55.6, 7089.0], [55.7, 7091.0], [55.8, 7091.0], [55.9, 7092.0], [56.0, 7093.0], [56.1, 7093.0], [56.2, 7094.0], [56.3, 7129.0], [56.4, 7131.0], [56.5, 7132.0], [56.6, 7133.0], [56.7, 7133.0], [56.8, 7133.0], [56.9, 7133.0], [57.0, 7134.0], [57.1, 7134.0], [57.2, 7134.0], [57.3, 7137.0], [57.4, 7138.0], [57.5, 7163.0], [57.6, 7165.0], [57.7, 7165.0], [57.8, 7165.0], [57.9, 7166.0], [58.0, 7166.0], [58.1, 7173.0], [58.2, 7209.0], [58.3, 7209.0], [58.4, 7210.0], [58.5, 7214.0], [58.6, 7217.0], [58.7, 7218.0], [58.8, 7218.0], [58.9, 7219.0], [59.0, 7219.0], [59.1, 7219.0], [59.2, 7220.0], [59.3, 7222.0], [59.4, 7228.0], [59.5, 7229.0], [59.6, 7253.0], [59.7, 7255.0], [59.8, 7256.0], [59.9, 7256.0], [60.0, 7257.0], [60.1, 7257.0], [60.2, 7257.0], [60.3, 7257.0], [60.4, 7258.0], [60.5, 7258.0], [60.6, 7258.0], [60.7, 7258.0], [60.8, 7258.0], [60.9, 7259.0], [61.0, 7263.0], [61.1, 7267.0], [61.2, 7267.0], [61.3, 7268.0], [61.4, 7269.0], [61.5, 7272.0], [61.6, 7274.0], [61.7, 7288.0], [61.8, 7288.0], [61.9, 7292.0], [62.0, 7310.0], [62.1, 7311.0], [62.2, 7311.0], [62.3, 7312.0], [62.4, 7312.0], [62.5, 7312.0], [62.6, 7313.0], [62.7, 7331.0], [62.8, 7331.0], [62.9, 7331.0], [63.0, 7343.0], [63.1, 7350.0], [63.2, 7365.0], [63.3, 7368.0], [63.4, 7370.0], [63.5, 7370.0], [63.6, 7401.0], [63.7, 7409.0], [63.8, 7410.0], [63.9, 7410.0], [64.0, 7410.0], [64.1, 7411.0], [64.2, 7411.0], [64.3, 7411.0], [64.4, 7413.0], [64.5, 7418.0], [64.6, 7420.0], [64.7, 7420.0], [64.8, 7420.0], [64.9, 7426.0], [65.0, 7435.0], [65.1, 7495.0], [65.2, 7496.0], [65.3, 7507.0], [65.4, 7507.0], [65.5, 7507.0], [65.6, 7507.0], [65.7, 7508.0], [65.8, 7522.0], [65.9, 7553.0], [66.0, 7554.0], [66.1, 7555.0], [66.2, 7555.0], [66.3, 7571.0], [66.4, 7576.0], [66.5, 7579.0], [66.6, 7624.0], [66.7, 7662.0], [66.8, 7664.0], [66.9, 7664.0], [67.0, 7667.0], [67.1, 7668.0], [67.2, 7669.0], [67.3, 7670.0], [67.4, 7676.0], [67.5, 7676.0], [67.6, 7696.0], [67.7, 7711.0], [67.8, 7754.0], [67.9, 7755.0], [68.0, 7756.0], [68.1, 7756.0], [68.2, 7759.0], [68.3, 7798.0], [68.4, 7820.0], [68.5, 7835.0], [68.6, 7836.0], [68.7, 7836.0], [68.8, 7868.0], [68.9, 7882.0], [69.0, 7883.0], [69.1, 7884.0], [69.2, 7887.0], [69.3, 7935.0], [69.4, 7935.0], [69.5, 7949.0], [69.6, 7949.0], [69.7, 7951.0], [69.8, 7954.0], [69.9, 7954.0], [70.0, 7957.0], [70.1, 8027.0], [70.2, 8055.0], [70.3, 8057.0], [70.4, 8068.0], [70.5, 8069.0], [70.6, 8069.0], [70.7, 8069.0], [70.8, 8124.0], [70.9, 8126.0], [71.0, 8126.0], [71.1, 8126.0], [71.2, 8138.0], [71.3, 8139.0], [71.4, 8139.0], [71.5, 8140.0], [71.6, 8140.0], [71.7, 8140.0], [71.8, 8141.0], [71.9, 8141.0], [72.0, 8141.0], [72.1, 8142.0], [72.2, 8142.0], [72.3, 8143.0], [72.4, 8144.0], [72.5, 8145.0], [72.6, 8146.0], [72.7, 8146.0], [72.8, 8147.0], [72.9, 8148.0], [73.0, 8149.0], [73.1, 8150.0], [73.2, 8151.0], [73.3, 8176.0], [73.4, 8193.0], [73.5, 8222.0], [73.6, 8233.0], [73.7, 8273.0], [73.8, 8273.0], [73.9, 8309.0], [74.0, 8310.0], [74.1, 8311.0], [74.2, 8311.0], [74.3, 8311.0], [74.4, 8311.0], [74.5, 8311.0], [74.6, 8316.0], [74.7, 8317.0], [74.8, 8330.0], [74.9, 8353.0], [75.0, 8366.0], [75.1, 8375.0], [75.2, 8377.0], [75.3, 8388.0], [75.4, 8413.0], [75.5, 8414.0], [75.6, 8415.0], [75.7, 8415.0], [75.8, 8415.0], [75.9, 8415.0], [76.0, 8415.0], [76.1, 8416.0], [76.2, 8418.0], [76.3, 8455.0], [76.4, 8514.0], [76.5, 8529.0], [76.6, 8529.0], [76.7, 8529.0], [76.8, 8530.0], [76.9, 8530.0], [77.0, 8530.0], [77.1, 8543.0], [77.2, 8580.0], [77.3, 8676.0], [77.4, 8696.0], [77.5, 8746.0], [77.6, 8833.0], [77.7, 8833.0], [77.8, 8833.0], [77.9, 8834.0], [78.0, 8862.0], [78.1, 8872.0], [78.2, 8910.0], [78.3, 8964.0], [78.4, 8975.0], [78.5, 8975.0], [78.6, 8976.0], [78.7, 8976.0], [78.8, 8977.0], [78.9, 8977.0], [79.0, 8977.0], [79.1, 8978.0], [79.2, 8978.0], [79.3, 8978.0], [79.4, 8979.0], [79.5, 8979.0], [79.6, 8980.0], [79.7, 8992.0], [79.8, 8992.0], [79.9, 8993.0], [80.0, 8993.0], [80.1, 9054.0], [80.2, 9129.0], [80.3, 9158.0], [80.4, 9172.0], [80.5, 9172.0], [80.6, 9179.0], [80.7, 9180.0], [80.8, 9197.0], [80.9, 9214.0], [81.0, 9246.0], [81.1, 9279.0], [81.2, 9279.0], [81.3, 9280.0], [81.4, 9280.0], [81.5, 9281.0], [81.6, 9282.0], [81.7, 9282.0], [81.8, 9283.0], [81.9, 9289.0], [82.0, 9289.0], [82.1, 9290.0], [82.2, 9290.0], [82.3, 9291.0], [82.4, 9308.0], [82.5, 9318.0], [82.6, 9319.0], [82.7, 9319.0], [82.8, 9320.0], [82.9, 9320.0], [83.0, 9321.0], [83.1, 9322.0], [83.2, 9322.0], [83.3, 9391.0], [83.4, 9424.0], [83.5, 9425.0], [83.6, 9428.0], [83.7, 9429.0], [83.8, 9430.0], [83.9, 9430.0], [84.0, 9442.0], [84.1, 9443.0], [84.2, 9443.0], [84.3, 9445.0], [84.4, 9446.0], [84.5, 9446.0], [84.6, 9447.0], [84.7, 9514.0], [84.8, 9547.0], [84.9, 9547.0], [85.0, 9561.0], [85.1, 9562.0], [85.2, 9562.0], [85.3, 9563.0], [85.4, 9576.0], [85.5, 9581.0], [85.6, 9582.0], [85.7, 9582.0], [85.8, 9706.0], [85.9, 9707.0], [86.0, 9708.0], [86.1, 9709.0], [86.2, 9815.0], [86.3, 9832.0], [86.4, 9843.0], [86.5, 9881.0], [86.6, 9882.0], [86.7, 9886.0], [86.8, 9887.0], [86.9, 9888.0], [87.0, 9889.0], [87.1, 9890.0], [87.2, 9907.0], [87.3, 9907.0], [87.4, 9908.0], [87.5, 9908.0], [87.6, 9909.0], [87.7, 9909.0], [87.8, 9909.0], [87.9, 9910.0], [88.0, 9910.0], [88.1, 9911.0], [88.2, 9911.0], [88.3, 9911.0], [88.4, 9911.0], [88.5, 9911.0], [88.6, 9912.0], [88.7, 9914.0], [88.8, 9925.0], [88.9, 9929.0], [89.0, 9929.0], [89.1, 9956.0], [89.2, 9957.0], [89.3, 9958.0], [89.4, 9959.0], [89.5, 10000.0], [89.6, 10006.0], [89.7, 10007.0], [89.8, 10007.0], [89.9, 10008.0], [90.0, 10008.0], [90.1, 10008.0], [90.2, 10009.0], [90.3, 10009.0], [90.4, 10009.0], [90.5, 10011.0], [90.6, 10014.0], [90.7, 10014.0], [90.8, 10015.0], [90.9, 10016.0], [91.0, 10019.0], [91.1, 10019.0], [91.2, 10019.0], [91.3, 10022.0], [91.4, 10022.0], [91.5, 10024.0], [91.6, 10049.0], [91.7, 10211.0], [91.8, 10283.0], [91.9, 10298.0], [92.0, 10302.0], [92.1, 10302.0], [92.2, 10303.0], [92.3, 10303.0], [92.4, 10304.0], [92.5, 10305.0], [92.6, 10508.0], [92.7, 10508.0], [92.8, 10509.0], [92.9, 10525.0], [93.0, 10526.0], [93.1, 10526.0], [93.2, 10526.0], [93.3, 10528.0], [93.4, 10528.0], [93.5, 10528.0], [93.6, 10528.0], [93.7, 10528.0], [93.8, 10529.0], [93.9, 10529.0], [94.0, 10529.0], [94.1, 10531.0], [94.2, 10532.0], [94.3, 10532.0], [94.4, 10532.0], [94.5, 10533.0], [94.6, 10533.0], [94.7, 10534.0], [94.8, 10535.0], [94.9, 10536.0], [95.0, 10567.0], [95.1, 10743.0], [95.2, 10781.0], [95.3, 10788.0], [95.4, 10789.0], [95.5, 10984.0], [95.6, 10986.0], [95.7, 11088.0], [95.8, 11089.0], [95.9, 11103.0], [96.0, 11263.0], [96.1, 11278.0], [96.2, 11280.0], [96.3, 11283.0], [96.4, 11400.0], [96.5, 11423.0], [96.6, 11971.0], [96.7, 11974.0], [96.8, 12009.0], [96.9, 12109.0], [97.0, 12149.0], [97.1, 12149.0], [97.2, 12149.0], [97.3, 12149.0], [97.4, 12150.0], [97.5, 12188.0], [97.6, 12261.0], [97.7, 12261.0], [97.8, 12262.0], [97.9, 12263.0], [98.0, 12263.0], [98.1, 12264.0], [98.2, 12276.0], [98.3, 12506.0], [98.4, 12506.0], [98.5, 12508.0], [98.6, 12508.0], [98.7, 12600.0], [98.8, 12755.0], [98.9, 12756.0], [99.0, 13006.0], [99.1, 13008.0], [99.2, 13453.0], [99.3, 14767.0], [99.4, 14822.0], [99.5, 15633.0], [99.6, 16065.0], [99.7, 16284.0], [99.8, 16676.0], [99.9, 16678.0], [100.0, 17124.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 103.0, "series": [{"data": [[500.0, 87.0], [600.0, 70.0], [700.0, 39.0], [800.0, 21.0], [900.0, 19.0], [1000.0, 16.0], [1100.0, 13.0], [1200.0, 7.0], [1300.0, 11.0], [1400.0, 16.0], [1500.0, 2.0], [1600.0, 6.0], [1700.0, 9.0], [1800.0, 7.0], [1900.0, 15.0], [2000.0, 18.0], [2100.0, 20.0], [2200.0, 27.0], [2300.0, 4.0], [2400.0, 63.0], [2500.0, 43.0], [2600.0, 6.0], [2700.0, 43.0], [2800.0, 14.0], [2900.0, 40.0], [3000.0, 4.0], [3100.0, 35.0], [3200.0, 33.0], [3300.0, 24.0], [3400.0, 21.0], [3500.0, 18.0], [3600.0, 5.0], [3700.0, 27.0], [3800.0, 1.0], [3900.0, 26.0], [4000.0, 30.0], [4200.0, 5.0], [4300.0, 24.0], [4500.0, 26.0], [4400.0, 9.0], [4600.0, 2.0], [4700.0, 37.0], [4800.0, 3.0], [5000.0, 23.0], [4900.0, 4.0], [5100.0, 19.0], [5200.0, 45.0], [5300.0, 25.0], [5400.0, 2.0], [5600.0, 9.0], [5500.0, 16.0], [5800.0, 27.0], [5700.0, 24.0], [5900.0, 12.0], [6000.0, 8.0], [6100.0, 30.0], [6200.0, 90.0], [6300.0, 28.0], [6500.0, 4.0], [6400.0, 11.0], [6600.0, 5.0], [6900.0, 32.0], [6800.0, 65.0], [6700.0, 75.0], [7100.0, 52.0], [7000.0, 31.0], [7200.0, 103.0], [7400.0, 46.0], [7300.0, 44.0], [7600.0, 30.0], [7500.0, 36.0], [7900.0, 24.0], [7700.0, 18.0], [7800.0, 24.0], [8100.0, 74.0], [8000.0, 17.0], [8300.0, 41.0], [8400.0, 28.0], [8200.0, 11.0], [8600.0, 3.0], [8500.0, 25.0], [8700.0, 3.0], [9100.0, 17.0], [8900.0, 52.0], [9200.0, 42.0], [9000.0, 3.0], [8800.0, 18.0], [9500.0, 29.0], [9300.0, 26.0], [9700.0, 11.0], [9600.0, 2.0], [9400.0, 36.0], [10000.0, 59.0], [9900.0, 63.0], [9800.0, 26.0], [10200.0, 7.0], [10100.0, 1.0], [10300.0, 18.0], [10500.0, 67.0], [10600.0, 1.0], [10700.0, 10.0], [11200.0, 12.0], [11000.0, 5.0], [10800.0, 1.0], [10900.0, 4.0], [11100.0, 4.0], [11400.0, 5.0], [12100.0, 18.0], [11900.0, 5.0], [12000.0, 3.0], [12200.0, 19.0], [12600.0, 2.0], [12500.0, 12.0], [12700.0, 5.0], [12800.0, 1.0], [13000.0, 4.0], [13300.0, 1.0], [13400.0, 2.0], [14200.0, 1.0], [14800.0, 2.0], [14700.0, 3.0], [15600.0, 2.0], [15700.0, 2.0], [16000.0, 1.0], [16200.0, 3.0], [16600.0, 5.0], [17100.0, 2.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 17100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 103.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2619.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 103.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2619.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 119.77532736044111, "minX": 1.7890629E12, "maxY": 230.82140047206957, "series": [{"data": [[1.78906296E12, 230.82140047206957], [1.7890629E12, 119.77532736044111]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 256 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906296E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 524.75, "minX": 1.0, "maxY": 16284.0, "series": [{"data": [[2.0, 8388.0], [3.0, 8862.0], [4.0, 3208.0], [5.0, 4783.0], [6.0, 3308.0], [7.0, 3305.3333333333335], [8.0, 2451.5], [9.0, 2062.8], [10.0, 524.75], [11.0, 3144.5], [12.0, 1838.6666666666665], [13.0, 541.3333333333333], [14.0, 3159.333333333333], [15.0, 542.5714285714286], [16.0, 550.4], [17.0, 560.9999999999999], [18.0, 560.8571428571428], [19.0, 3205.153846153846], [20.0, 1553.7142857142858], [21.0, 1261.6], [22.0, 597.3333333333334], [23.0, 606.4444444444445], [24.0, 615.5], [25.0, 633.6666666666666], [26.0, 643.7142857142857], [27.0, 659.5], [28.0, 672.7777777777778], [29.0, 684.8571428571429], [30.0, 702.5454545454546], [31.0, 727.3333333333334], [32.0, 748.625], [33.0, 759.0], [34.0, 799.4444444444445], [35.0, 817.5833333333333], [36.0, 863.2857142857142], [37.0, 919.0], [38.0, 951.8571428571429], [39.0, 991.75], [40.0, 1078.0], [41.0, 1068.75], [42.0, 1131.8333333333333], [43.0, 1211.727272727273], [44.0, 1318.1666666666667], [45.0, 1328.2857142857144], [46.0, 1426.7142857142858], [48.0, 1549.3749999999998], [49.0, 1566.5555555555557], [51.0, 5181.705882352942], [50.0, 8235.57894736842], [53.0, 3353.1428571428573], [52.0, 9707.0], [55.0, 1945.2727272727273], [57.0, 2538.7142857142853], [58.0, 8120.0], [60.0, 2239.3076923076924], [62.0, 2366.0666666666666], [63.0, 8147.5], [65.0, 2487.4375], [67.0, 7890.666666666667], [68.0, 2500.9999999999995], [71.0, 3301.6818181818185], [69.0, 8145.0], [75.0, 2624.714285714285], [74.0, 8145.0], [79.0, 2909.9583333333326], [76.0, 8143.333333333333], [82.0, 2703.875], [80.0, 8141.666666666667], [86.0, 2648.1481481481483], [87.0, 8141.0], [85.0, 8141.0], [84.0, 8142.0], [90.0, 2671.962962962963], [88.0, 8140.0], [94.0, 3109.6060606060605], [95.0, 8140.0], [93.0, 8140.0], [92.0, 8140.5], [98.0, 3200.9117647058824], [97.0, 8138.75], [103.0, 2968.6], [100.0, 8141.0], [108.0, 3056.9189189189183], [110.0, 8207.199999999999], [114.0, 3623.0], [115.0, 3598.675], [123.0, 4161.886363636365], [127.0, 9446.0], [129.0, 4973.516129032258], [130.0, 3415.0], [133.0, 9736.666666666666], [128.0, 9447.0], [138.0, 4577.326923076924], [143.0, 10082.0], [142.0, 11206.5], [141.0, 12189.0], [139.0, 9882.0], [137.0, 9880.0], [136.0, 9446.0], [146.0, 4589.759259259257], [150.0, 7475.153846153847], [148.0, 7312.0], [144.0, 8378.0], [154.0, 5984.0], [155.0, 4897.915254237288], [164.0, 5217.396226415095], [166.0, 4850.5], [163.0, 8527.538461538461], [174.0, 9517.300000000001], [175.0, 5557.890909090909], [173.0, 16284.0], [172.0, 16284.0], [171.0, 12508.0], [170.0, 12507.0], [177.0, 5234.0], [179.0, 5558.5], [183.0, 6561.0], [182.0, 6838.0], [181.0, 12630.599999999999], [185.0, 7953.75], [186.0, 6049.666666666666], [187.0, 5239.058823529412], [188.0, 5596.5], [195.0, 7209.428571428572], [196.0, 8981.0], [197.0, 7577.0], [199.0, 6194.310344827586], [198.0, 7269.0], [200.0, 6201.0], [201.0, 6270.0], [205.0, 6916.25], [207.0, 8745.280000000002], [204.0, 6979.333333333333], [206.0, 6835.0], [208.0, 7309.5], [213.0, 8465.571428571428], [214.0, 6675.821428571429], [212.0, 6836.5], [209.0, 8411.5], [210.0, 6835.0], [218.0, 7691.659999999999], [223.0, 7005.8], [220.0, 7049.0], [216.0, 7441.0], [225.0, 6378.900000000001], [226.0, 6857.722222222222], [228.0, 6366.135135135135], [232.0, 8518.94736842105], [237.0, 8263.142857142859], [241.0, 7868.0], [242.0, 6831.954545454546], [245.0, 6443.842105263158], [247.0, 9106.192307692309], [244.0, 9344.5], [240.0, 9062.823529411764], [252.0, 7469.333333333334], [251.0, 5692.0], [256.0, 8805.741416309009], [1.0, 8430.0]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[171.6263776634827, 6138.213078618652]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 256.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3346.9666666666667, "minX": 1.7890629E12, "maxY": 5586.35, "series": [{"data": [[1.78906296E12, 4896.65], [1.7890629E12, 5586.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78906296E12, 3346.9666666666667], [1.7890629E12, 3820.9666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906296E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3925.3790489317716, "minX": 1.7890629E12, "maxY": 8664.430369787562, "series": [{"data": [[1.78906296E12, 8664.430369787562], [1.7890629E12, 3925.3790489317716]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906296E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3925.3521709166057, "minX": 1.7890629E12, "maxY": 8664.41384736429, "series": [{"data": [[1.78906296E12, 8664.41384736429], [1.7890629E12, 3925.3521709166057]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906296E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.1247415575465198, "minX": 1.7890629E12, "maxY": 0.14870180959874116, "series": [{"data": [[1.78906296E12, 0.14870180959874116], [1.7890629E12, 0.1247415575465198]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906296E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 517.0, "minX": 1.7890629E12, "maxY": 619.0, "series": [{"data": [[1.7890629E12, 619.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7890629E12, 517.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7890629E12, 608.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7890629E12, 618.92]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7890629E12, 561.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7890629E12, 612.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890629E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 532.0, "minX": 1.0, "maxY": 10528.0, "series": [{"data": [[16.0, 532.0], [34.0, 595.0], [37.0, 613.5], [22.0, 539.5], [6.0, 534.0], [27.0, 561.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 997.0], [32.0, 8000.5], [2.0, 5558.5], [34.0, 625.0], [35.0, 3126.0], [37.0, 5239.0], [39.0, 710.0], [38.0, 816.0], [40.0, 5727.5], [41.0, 5597.0], [44.0, 6768.0], [47.0, 4916.0], [3.0, 7868.0], [51.0, 4936.0], [50.0, 7417.5], [53.0, 4415.0], [54.0, 4816.0], [59.0, 8979.0], [60.0, 4628.0], [61.0, 6221.5], [63.0, 4745.0], [4.0, 7058.0], [65.0, 6349.0], [64.0, 7263.5], [79.0, 9911.0], [86.0, 10528.0], [89.0, 10016.0], [6.0, 645.0], [106.0, 7410.0], [7.0, 7670.0], [118.0, 7669.0], [8.0, 9418.0], [139.0, 8142.0], [11.0, 8341.0], [13.0, 7935.0], [1.0, 6674.5], [18.0, 7641.0], [19.0, 8529.0], [20.0, 1819.0], [21.0, 9029.0], [23.0, 2416.0], [24.0, 1940.0], [26.0, 9280.0], [27.0, 2582.0], [29.0, 9561.0], [30.0, 1242.0], [31.0, 2752.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 139.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 531.5, "minX": 1.0, "maxY": 10528.0, "series": [{"data": [[16.0, 531.5], [34.0, 595.0], [37.0, 613.5], [22.0, 539.5], [6.0, 534.0], [27.0, 561.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 997.0], [32.0, 8000.5], [2.0, 5558.5], [34.0, 625.0], [35.0, 3126.0], [37.0, 5239.0], [39.0, 710.0], [38.0, 816.0], [40.0, 5727.5], [41.0, 5597.0], [44.0, 6768.0], [47.0, 4916.0], [3.0, 7868.0], [51.0, 4936.0], [50.0, 7417.5], [53.0, 4415.0], [54.0, 4816.0], [59.0, 8979.0], [60.0, 4628.0], [61.0, 6221.0], [63.0, 4745.0], [4.0, 7058.0], [65.0, 6349.0], [64.0, 7263.5], [79.0, 9911.0], [86.0, 10528.0], [89.0, 10016.0], [6.0, 645.0], [106.0, 7410.0], [7.0, 7670.0], [118.0, 7669.0], [8.0, 9418.0], [139.0, 8142.0], [11.0, 8341.0], [13.0, 7935.0], [1.0, 6674.5], [18.0, 7641.0], [19.0, 8529.0], [20.0, 1819.0], [21.0, 9029.0], [23.0, 2416.0], [24.0, 1940.0], [26.0, 9280.0], [27.0, 2582.0], [29.0, 9561.0], [30.0, 1242.0], [31.0, 2752.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 139.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 17.15, "minX": 1.7890629E12, "maxY": 28.216666666666665, "series": [{"data": [[1.78906296E12, 17.15], [1.7890629E12, 28.216666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906296E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.65, "minX": 1.7890629E12, "maxY": 24.183333333333334, "series": [{"data": [[1.78906296E12, 19.533333333333335], [1.7890629E12, 24.183333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78906296E12, 1.65]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906296E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.7890629E12, "maxY": 22.466666666666665, "series": [{"data": [[1.78906296E12, 21.183333333333334], [1.7890629E12, 22.466666666666665]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}, {"data": [[1.7890629E12, 1.7166666666666666]], "isOverall": false, "label": "GET / config=3-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906296E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.7890629E12, "maxY": 22.466666666666665, "series": [{"data": [[1.7890629E12, 1.7166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78906296E12, 21.183333333333334], [1.7890629E12, 22.466666666666665]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906296E12, "title": "Total Transactions Per Second"}},
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

