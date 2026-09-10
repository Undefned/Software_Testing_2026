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
        data: {"result": {"minY": 512.0, "minX": 0.0, "maxY": 22618.0, "series": [{"data": [[0.0, 512.0], [0.1, 516.0], [0.2, 527.0], [0.3, 530.0], [0.4, 532.0], [0.5, 533.0], [0.6, 534.0], [0.7, 534.0], [0.8, 539.0], [0.9, 542.0], [1.0, 543.0], [1.1, 544.0], [1.2, 546.0], [1.3, 547.0], [1.4, 548.0], [1.5, 549.0], [1.6, 551.0], [1.7, 551.0], [1.8, 552.0], [1.9, 552.0], [2.0, 553.0], [2.1, 553.0], [2.2, 555.0], [2.3, 557.0], [2.4, 557.0], [2.5, 560.0], [2.6, 563.0], [2.7, 564.0], [2.8, 564.0], [2.9, 566.0], [3.0, 568.0], [3.1, 570.0], [3.2, 570.0], [3.3, 570.0], [3.4, 580.0], [3.5, 583.0], [3.6, 586.0], [3.7, 586.0], [3.8, 589.0], [3.9, 590.0], [4.0, 596.0], [4.1, 599.0], [4.2, 600.0], [4.3, 602.0], [4.4, 606.0], [4.5, 609.0], [4.6, 609.0], [4.7, 617.0], [4.8, 618.0], [4.9, 620.0], [5.0, 623.0], [5.1, 628.0], [5.2, 630.0], [5.3, 632.0], [5.4, 632.0], [5.5, 634.0], [5.6, 637.0], [5.7, 638.0], [5.8, 644.0], [5.9, 648.0], [6.0, 649.0], [6.1, 652.0], [6.2, 654.0], [6.3, 655.0], [6.4, 660.0], [6.5, 666.0], [6.6, 666.0], [6.7, 667.0], [6.8, 678.0], [6.9, 684.0], [7.0, 688.0], [7.1, 691.0], [7.2, 694.0], [7.3, 697.0], [7.4, 701.0], [7.5, 708.0], [7.6, 709.0], [7.7, 713.0], [7.8, 718.0], [7.9, 725.0], [8.0, 731.0], [8.1, 736.0], [8.2, 741.0], [8.3, 743.0], [8.4, 745.0], [8.5, 746.0], [8.6, 755.0], [8.7, 760.0], [8.8, 769.0], [8.9, 781.0], [9.0, 785.0], [9.1, 788.0], [9.2, 790.0], [9.3, 794.0], [9.4, 799.0], [9.5, 802.0], [9.6, 806.0], [9.7, 808.0], [9.8, 813.0], [9.9, 824.0], [10.0, 832.0], [10.1, 844.0], [10.2, 852.0], [10.3, 857.0], [10.4, 863.0], [10.5, 866.0], [10.6, 870.0], [10.7, 872.0], [10.8, 882.0], [10.9, 887.0], [11.0, 901.0], [11.1, 903.0], [11.2, 911.0], [11.3, 919.0], [11.4, 922.0], [11.5, 926.0], [11.6, 937.0], [11.7, 940.0], [11.8, 945.0], [11.9, 950.0], [12.0, 952.0], [12.1, 960.0], [12.2, 961.0], [12.3, 973.0], [12.4, 979.0], [12.5, 984.0], [12.6, 1000.0], [12.7, 1008.0], [12.8, 1011.0], [12.9, 1018.0], [13.0, 1021.0], [13.1, 1028.0], [13.2, 1037.0], [13.3, 1042.0], [13.4, 1045.0], [13.5, 1058.0], [13.6, 1070.0], [13.7, 1075.0], [13.8, 1091.0], [13.9, 1105.0], [14.0, 1110.0], [14.1, 1115.0], [14.2, 1127.0], [14.3, 1137.0], [14.4, 1149.0], [14.5, 1164.0], [14.6, 1179.0], [14.7, 1181.0], [14.8, 1182.0], [14.9, 1184.0], [15.0, 1189.0], [15.1, 1195.0], [15.2, 1205.0], [15.3, 1229.0], [15.4, 1235.0], [15.5, 1269.0], [15.6, 1289.0], [15.7, 1289.0], [15.8, 1301.0], [15.9, 1314.0], [16.0, 1317.0], [16.1, 1322.0], [16.2, 1331.0], [16.3, 1343.0], [16.4, 1352.0], [16.5, 1356.0], [16.6, 1364.0], [16.7, 1385.0], [16.8, 1386.0], [16.9, 1392.0], [17.0, 1418.0], [17.1, 1440.0], [17.2, 1447.0], [17.3, 1447.0], [17.4, 1454.0], [17.5, 1481.0], [17.6, 1499.0], [17.7, 1506.0], [17.8, 1507.0], [17.9, 1508.0], [18.0, 1518.0], [18.1, 1518.0], [18.2, 1521.0], [18.3, 1523.0], [18.4, 1539.0], [18.5, 1557.0], [18.6, 1557.0], [18.7, 1564.0], [18.8, 1570.0], [18.9, 1572.0], [19.0, 1573.0], [19.1, 1600.0], [19.2, 1602.0], [19.3, 1605.0], [19.4, 1607.0], [19.5, 1608.0], [19.6, 1609.0], [19.7, 1610.0], [19.8, 1610.0], [19.9, 1610.0], [20.0, 1610.0], [20.1, 1611.0], [20.2, 1635.0], [20.3, 1635.0], [20.4, 1636.0], [20.5, 1651.0], [20.6, 1663.0], [20.7, 1664.0], [20.8, 1666.0], [20.9, 1666.0], [21.0, 1669.0], [21.1, 1669.0], [21.2, 1669.0], [21.3, 1670.0], [21.4, 1670.0], [21.5, 1673.0], [21.6, 1674.0], [21.7, 1675.0], [21.8, 1709.0], [21.9, 1710.0], [22.0, 1725.0], [22.1, 1726.0], [22.2, 1726.0], [22.3, 1726.0], [22.4, 1727.0], [22.5, 1747.0], [22.6, 1748.0], [22.7, 1764.0], [22.8, 1784.0], [22.9, 1791.0], [23.0, 1791.0], [23.1, 1795.0], [23.2, 1796.0], [23.3, 1804.0], [23.4, 1805.0], [23.5, 1806.0], [23.6, 1807.0], [23.7, 1812.0], [23.8, 1813.0], [23.9, 1814.0], [24.0, 1815.0], [24.1, 1815.0], [24.2, 1821.0], [24.3, 1822.0], [24.4, 1832.0], [24.5, 1877.0], [24.6, 1878.0], [24.7, 1878.0], [24.8, 1879.0], [24.9, 1879.0], [25.0, 1909.0], [25.1, 1909.0], [25.2, 1910.0], [25.3, 1914.0], [25.4, 1914.0], [25.5, 1931.0], [25.6, 1943.0], [25.7, 2011.0], [25.8, 2014.0], [25.9, 2047.0], [26.0, 2072.0], [26.1, 2073.0], [26.2, 2074.0], [26.3, 2089.0], [26.4, 2093.0], [26.5, 2094.0], [26.6, 2096.0], [26.7, 2100.0], [26.8, 2106.0], [26.9, 2106.0], [27.0, 2107.0], [27.1, 2108.0], [27.2, 2108.0], [27.3, 2108.0], [27.4, 2109.0], [27.5, 2140.0], [27.6, 2226.0], [27.7, 2240.0], [27.8, 2241.0], [27.9, 2269.0], [28.0, 2270.0], [28.1, 2270.0], [28.2, 2298.0], [28.3, 2300.0], [28.4, 2301.0], [28.5, 2301.0], [28.6, 2303.0], [28.7, 2341.0], [28.8, 2352.0], [28.9, 2352.0], [29.0, 2353.0], [29.1, 2353.0], [29.2, 2354.0], [29.3, 2354.0], [29.4, 2390.0], [29.5, 2398.0], [29.6, 2445.0], [29.7, 2472.0], [29.8, 2482.0], [29.9, 2484.0], [30.0, 2490.0], [30.1, 2572.0], [30.2, 2585.0], [30.3, 2590.0], [30.4, 2590.0], [30.5, 2591.0], [30.6, 2594.0], [30.7, 2595.0], [30.8, 2595.0], [30.9, 2595.0], [31.0, 2595.0], [31.1, 2595.0], [31.2, 2595.0], [31.3, 2595.0], [31.4, 2595.0], [31.5, 2595.0], [31.6, 2596.0], [31.7, 2607.0], [31.8, 2647.0], [31.9, 2648.0], [32.0, 2649.0], [32.1, 2650.0], [32.2, 2651.0], [32.3, 2651.0], [32.4, 2651.0], [32.5, 2718.0], [32.6, 2771.0], [32.7, 2775.0], [32.8, 2782.0], [32.9, 2783.0], [33.0, 2784.0], [33.1, 2784.0], [33.2, 2784.0], [33.3, 2867.0], [33.4, 3057.0], [33.5, 3059.0], [33.6, 3060.0], [33.7, 3061.0], [33.8, 3064.0], [33.9, 3065.0], [34.0, 3067.0], [34.1, 3085.0], [34.2, 3086.0], [34.3, 3088.0], [34.4, 3089.0], [34.5, 3112.0], [34.6, 3113.0], [34.7, 3114.0], [34.8, 3114.0], [34.9, 3115.0], [35.0, 3115.0], [35.1, 3115.0], [35.2, 3117.0], [35.3, 3118.0], [35.4, 3224.0], [35.5, 3293.0], [35.6, 3295.0], [35.7, 3297.0], [35.8, 3297.0], [35.9, 3298.0], [36.0, 3298.0], [36.1, 3298.0], [36.2, 3298.0], [36.3, 3299.0], [36.4, 3300.0], [36.5, 3300.0], [36.6, 3371.0], [36.7, 3372.0], [36.8, 3372.0], [36.9, 3478.0], [37.0, 3479.0], [37.1, 3480.0], [37.2, 3480.0], [37.3, 3480.0], [37.4, 3598.0], [37.5, 3738.0], [37.6, 3802.0], [37.7, 3843.0], [37.8, 3849.0], [37.9, 3859.0], [38.0, 3859.0], [38.1, 3860.0], [38.2, 3860.0], [38.3, 3860.0], [38.4, 3860.0], [38.5, 3861.0], [38.6, 3885.0], [38.7, 3890.0], [38.8, 3973.0], [38.9, 3983.0], [39.0, 3983.0], [39.1, 3983.0], [39.2, 3983.0], [39.3, 3984.0], [39.4, 3984.0], [39.5, 4020.0], [39.6, 4022.0], [39.7, 4022.0], [39.8, 4022.0], [39.9, 4023.0], [40.0, 4105.0], [40.1, 4107.0], [40.2, 4107.0], [40.3, 4107.0], [40.4, 4117.0], [40.5, 4164.0], [40.6, 4267.0], [40.7, 4267.0], [40.8, 4267.0], [40.9, 4267.0], [41.0, 4268.0], [41.1, 4275.0], [41.2, 4397.0], [41.3, 4405.0], [41.4, 4405.0], [41.5, 4406.0], [41.6, 4406.0], [41.7, 4406.0], [41.8, 4406.0], [41.9, 4406.0], [42.0, 4407.0], [42.1, 4407.0], [42.2, 4407.0], [42.3, 4408.0], [42.4, 4409.0], [42.5, 4418.0], [42.6, 4418.0], [42.7, 4418.0], [42.8, 4419.0], [42.9, 4419.0], [43.0, 4419.0], [43.1, 4419.0], [43.2, 4422.0], [43.3, 4446.0], [43.4, 4451.0], [43.5, 4466.0], [43.6, 4495.0], [43.7, 4495.0], [43.8, 4495.0], [43.9, 4496.0], [44.0, 4497.0], [44.1, 4510.0], [44.2, 4523.0], [44.3, 4523.0], [44.4, 4523.0], [44.5, 4531.0], [44.6, 4534.0], [44.7, 4535.0], [44.8, 4539.0], [44.9, 4554.0], [45.0, 4568.0], [45.1, 4569.0], [45.2, 4569.0], [45.3, 4569.0], [45.4, 4569.0], [45.5, 4570.0], [45.6, 4570.0], [45.7, 4573.0], [45.8, 4573.0], [45.9, 4574.0], [46.0, 4574.0], [46.1, 4575.0], [46.2, 4575.0], [46.3, 4583.0], [46.4, 4593.0], [46.5, 4593.0], [46.6, 4594.0], [46.7, 4595.0], [46.8, 4617.0], [46.9, 4633.0], [47.0, 4638.0], [47.1, 4639.0], [47.2, 4642.0], [47.3, 4668.0], [47.4, 4669.0], [47.5, 4670.0], [47.6, 4670.0], [47.7, 4670.0], [47.8, 4670.0], [47.9, 4671.0], [48.0, 4672.0], [48.1, 4673.0], [48.2, 4674.0], [48.3, 4674.0], [48.4, 4674.0], [48.5, 4674.0], [48.6, 4675.0], [48.7, 4693.0], [48.8, 4699.0], [48.9, 4699.0], [49.0, 4700.0], [49.1, 4700.0], [49.2, 4700.0], [49.3, 4700.0], [49.4, 4700.0], [49.5, 4701.0], [49.6, 4701.0], [49.7, 4701.0], [49.8, 4701.0], [49.9, 4702.0], [50.0, 4702.0], [50.1, 4702.0], [50.2, 4703.0], [50.3, 4719.0], [50.4, 4729.0], [50.5, 4765.0], [50.6, 4766.0], [50.7, 4766.0], [50.8, 4767.0], [50.9, 4767.0], [51.0, 4767.0], [51.1, 4768.0], [51.2, 4768.0], [51.3, 4769.0], [51.4, 4795.0], [51.5, 4796.0], [51.6, 4815.0], [51.7, 4815.0], [51.8, 4816.0], [51.9, 4827.0], [52.0, 4828.0], [52.1, 4832.0], [52.2, 4832.0], [52.3, 4847.0], [52.4, 4852.0], [52.5, 4852.0], [52.6, 4852.0], [52.7, 4852.0], [52.8, 4853.0], [52.9, 4853.0], [53.0, 4854.0], [53.1, 4854.0], [53.2, 4863.0], [53.3, 4865.0], [53.4, 4865.0], [53.5, 4866.0], [53.6, 4866.0], [53.7, 4875.0], [53.8, 4875.0], [53.9, 4896.0], [54.0, 4897.0], [54.1, 4897.0], [54.2, 4897.0], [54.3, 4898.0], [54.4, 4898.0], [54.5, 4898.0], [54.6, 4899.0], [54.7, 4905.0], [54.8, 4906.0], [54.9, 4906.0], [55.0, 4906.0], [55.1, 4907.0], [55.2, 4907.0], [55.3, 4907.0], [55.4, 4908.0], [55.5, 4908.0], [55.6, 4909.0], [55.7, 4909.0], [55.8, 4910.0], [55.9, 4916.0], [56.0, 4948.0], [56.1, 4949.0], [56.2, 4950.0], [56.3, 4950.0], [56.4, 4951.0], [56.5, 4977.0], [56.6, 4977.0], [56.7, 4979.0], [56.8, 4993.0], [56.9, 4993.0], [57.0, 4994.0], [57.1, 4994.0], [57.2, 4995.0], [57.3, 4995.0], [57.4, 4996.0], [57.5, 4996.0], [57.6, 4998.0], [57.7, 5000.0], [57.8, 5029.0], [57.9, 5030.0], [58.0, 5030.0], [58.1, 5030.0], [58.2, 5030.0], [58.3, 5033.0], [58.4, 5077.0], [58.5, 5078.0], [58.6, 5079.0], [58.7, 5080.0], [58.8, 5081.0], [58.9, 5096.0], [59.0, 5097.0], [59.1, 5098.0], [59.2, 5099.0], [59.3, 5099.0], [59.4, 5105.0], [59.5, 5106.0], [59.6, 5119.0], [59.7, 5120.0], [59.8, 5120.0], [59.9, 5120.0], [60.0, 5122.0], [60.1, 5125.0], [60.2, 5125.0], [60.3, 5126.0], [60.4, 5127.0], [60.5, 5146.0], [60.6, 5147.0], [60.7, 5147.0], [60.8, 5148.0], [60.9, 5149.0], [61.0, 5149.0], [61.1, 5149.0], [61.2, 5149.0], [61.3, 5149.0], [61.4, 5149.0], [61.5, 5149.0], [61.6, 5150.0], [61.7, 5150.0], [61.8, 5150.0], [61.9, 5151.0], [62.0, 5164.0], [62.1, 5164.0], [62.2, 5164.0], [62.3, 5168.0], [62.4, 5180.0], [62.5, 5181.0], [62.6, 5186.0], [62.7, 5186.0], [62.8, 5187.0], [62.9, 5187.0], [63.0, 5193.0], [63.1, 5193.0], [63.2, 5193.0], [63.3, 5213.0], [63.4, 5215.0], [63.5, 5215.0], [63.6, 5215.0], [63.7, 5244.0], [63.8, 5244.0], [63.9, 5245.0], [64.0, 5246.0], [64.1, 5246.0], [64.2, 5247.0], [64.3, 5247.0], [64.4, 5248.0], [64.5, 5249.0], [64.6, 5250.0], [64.7, 5258.0], [64.8, 5258.0], [64.9, 5259.0], [65.0, 5259.0], [65.1, 5263.0], [65.2, 5264.0], [65.3, 5277.0], [65.4, 5279.0], [65.5, 5292.0], [65.6, 5293.0], [65.7, 5312.0], [65.8, 5314.0], [65.9, 5314.0], [66.0, 5314.0], [66.1, 5319.0], [66.2, 5320.0], [66.3, 5320.0], [66.4, 5320.0], [66.5, 5321.0], [66.6, 5321.0], [66.7, 5324.0], [66.8, 5325.0], [66.9, 5325.0], [67.0, 5325.0], [67.1, 5326.0], [67.2, 5326.0], [67.3, 5326.0], [67.4, 5327.0], [67.5, 5327.0], [67.6, 5327.0], [67.7, 5342.0], [67.8, 5343.0], [67.9, 5344.0], [68.0, 5344.0], [68.1, 5346.0], [68.2, 5371.0], [68.3, 5371.0], [68.4, 5372.0], [68.5, 5373.0], [68.6, 5392.0], [68.7, 5392.0], [68.8, 5393.0], [68.9, 5396.0], [69.0, 5404.0], [69.1, 5408.0], [69.2, 5410.0], [69.3, 5411.0], [69.4, 5412.0], [69.5, 5412.0], [69.6, 5412.0], [69.7, 5417.0], [69.8, 5418.0], [69.9, 5418.0], [70.0, 5420.0], [70.1, 5453.0], [70.2, 5459.0], [70.3, 5460.0], [70.4, 5460.0], [70.5, 5460.0], [70.6, 5460.0], [70.7, 5463.0], [70.8, 5466.0], [70.9, 5488.0], [71.0, 5489.0], [71.1, 5489.0], [71.2, 5489.0], [71.3, 5489.0], [71.4, 5498.0], [71.5, 5500.0], [71.6, 5500.0], [71.7, 5501.0], [71.8, 5501.0], [71.9, 5541.0], [72.0, 5542.0], [72.1, 5560.0], [72.2, 5560.0], [72.3, 5560.0], [72.4, 5561.0], [72.5, 5562.0], [72.6, 5562.0], [72.7, 5563.0], [72.8, 5564.0], [72.9, 5565.0], [73.0, 5565.0], [73.1, 5565.0], [73.2, 5566.0], [73.3, 5566.0], [73.4, 5567.0], [73.5, 5569.0], [73.6, 5603.0], [73.7, 5605.0], [73.8, 5606.0], [73.9, 5616.0], [74.0, 5620.0], [74.1, 5620.0], [74.2, 5638.0], [74.3, 5638.0], [74.4, 5638.0], [74.5, 5653.0], [74.6, 5660.0], [74.7, 5661.0], [74.8, 5662.0], [74.9, 5663.0], [75.0, 5663.0], [75.1, 5663.0], [75.2, 5665.0], [75.3, 5682.0], [75.4, 5683.0], [75.5, 5683.0], [75.6, 5684.0], [75.7, 5684.0], [75.8, 5765.0], [75.9, 5765.0], [76.0, 5765.0], [76.1, 5766.0], [76.2, 5773.0], [76.3, 5773.0], [76.4, 5774.0], [76.5, 5796.0], [76.6, 5796.0], [76.7, 5810.0], [76.8, 5810.0], [76.9, 5866.0], [77.0, 5867.0], [77.1, 5867.0], [77.2, 5891.0], [77.3, 5892.0], [77.4, 5907.0], [77.5, 5947.0], [77.6, 5948.0], [77.7, 5949.0], [77.8, 5949.0], [77.9, 5950.0], [78.0, 5950.0], [78.1, 5950.0], [78.2, 5951.0], [78.3, 5952.0], [78.4, 5953.0], [78.5, 5953.0], [78.6, 5954.0], [78.7, 5955.0], [78.8, 5958.0], [78.9, 5961.0], [79.0, 5967.0], [79.1, 5968.0], [79.2, 5969.0], [79.3, 5969.0], [79.4, 5969.0], [79.5, 5970.0], [79.6, 5970.0], [79.7, 5970.0], [79.8, 5976.0], [79.9, 5977.0], [80.0, 5977.0], [80.1, 5978.0], [80.2, 5980.0], [80.3, 5996.0], [80.4, 5996.0], [80.5, 5997.0], [80.6, 5998.0], [80.7, 6000.0], [80.8, 6005.0], [80.9, 6006.0], [81.0, 6027.0], [81.1, 6029.0], [81.2, 6057.0], [81.3, 6101.0], [81.4, 6101.0], [81.5, 6102.0], [81.6, 6102.0], [81.7, 6116.0], [81.8, 6129.0], [81.9, 6129.0], [82.0, 6130.0], [82.1, 6144.0], [82.2, 6219.0], [82.3, 6222.0], [82.4, 6223.0], [82.5, 6272.0], [82.6, 6272.0], [82.7, 6274.0], [82.8, 6275.0], [82.9, 6275.0], [83.0, 6275.0], [83.1, 6290.0], [83.2, 6290.0], [83.3, 6291.0], [83.4, 6442.0], [83.5, 6478.0], [83.6, 6504.0], [83.7, 6504.0], [83.8, 6505.0], [83.9, 6505.0], [84.0, 6505.0], [84.1, 6516.0], [84.2, 6615.0], [84.3, 6638.0], [84.4, 6639.0], [84.5, 6640.0], [84.6, 6651.0], [84.7, 6651.0], [84.8, 6689.0], [84.9, 6716.0], [85.0, 6717.0], [85.1, 6743.0], [85.2, 6744.0], [85.3, 6744.0], [85.4, 6745.0], [85.5, 6745.0], [85.6, 6752.0], [85.7, 6752.0], [85.8, 6794.0], [85.9, 6794.0], [86.0, 6794.0], [86.1, 6797.0], [86.2, 6872.0], [86.3, 6872.0], [86.4, 6873.0], [86.5, 6873.0], [86.6, 6874.0], [86.7, 6876.0], [86.8, 7111.0], [86.9, 7112.0], [87.0, 7112.0], [87.1, 7151.0], [87.2, 7189.0], [87.3, 7256.0], [87.4, 7257.0], [87.5, 7257.0], [87.6, 7258.0], [87.7, 7258.0], [87.8, 7258.0], [87.9, 7258.0], [88.0, 7259.0], [88.1, 7433.0], [88.2, 7465.0], [88.3, 7466.0], [88.4, 7466.0], [88.5, 7466.0], [88.6, 7642.0], [88.7, 7669.0], [88.8, 7669.0], [88.9, 7670.0], [89.0, 7803.0], [89.1, 7803.0], [89.2, 7804.0], [89.3, 7849.0], [89.4, 7904.0], [89.5, 8123.0], [89.6, 8150.0], [89.7, 8150.0], [89.8, 8151.0], [89.9, 8151.0], [90.0, 8152.0], [90.1, 8152.0], [90.2, 8153.0], [90.3, 8199.0], [90.4, 8279.0], [90.5, 8353.0], [90.6, 8353.0], [90.7, 8354.0], [90.8, 8354.0], [90.9, 8401.0], [91.0, 8431.0], [91.1, 8438.0], [91.2, 8487.0], [91.3, 8575.0], [91.4, 8654.0], [91.5, 8722.0], [91.6, 8776.0], [91.7, 8847.0], [91.8, 8847.0], [91.9, 8848.0], [92.0, 8849.0], [92.1, 8926.0], [92.2, 8926.0], [92.3, 8927.0], [92.4, 8927.0], [92.5, 8928.0], [92.6, 9002.0], [92.7, 9083.0], [92.8, 9083.0], [92.9, 9083.0], [93.0, 9084.0], [93.1, 9084.0], [93.2, 9084.0], [93.3, 9084.0], [93.4, 9084.0], [93.5, 9085.0], [93.6, 9085.0], [93.7, 9086.0], [93.8, 9087.0], [93.9, 9087.0], [94.0, 9088.0], [94.1, 9089.0], [94.2, 9089.0], [94.3, 9090.0], [94.4, 9778.0], [94.5, 10154.0], [94.6, 10903.0], [94.7, 11653.0], [94.8, 12401.0], [94.9, 12815.0], [95.0, 12988.0], [95.1, 13149.0], [95.2, 13362.0], [95.3, 13720.0], [95.4, 13743.0], [95.5, 14119.0], [95.6, 14493.0], [95.7, 14862.0], [95.8, 15238.0], [95.9, 15612.0], [96.0, 15895.0], [96.1, 15895.0], [96.2, 15895.0], [96.3, 15895.0], [96.4, 15895.0], [96.5, 15896.0], [96.6, 15896.0], [96.7, 15897.0], [96.8, 15897.0], [96.9, 15898.0], [97.0, 15898.0], [97.1, 15899.0], [97.2, 15899.0], [97.3, 15899.0], [97.4, 15899.0], [97.5, 15900.0], [97.6, 15901.0], [97.7, 15988.0], [97.8, 19248.0], [97.9, 19889.0], [98.0, 20263.0], [98.1, 20637.0], [98.2, 21011.0], [98.3, 21449.0], [98.4, 21450.0], [98.5, 21450.0], [98.6, 21450.0], [98.7, 21450.0], [98.8, 21450.0], [98.9, 21451.0], [99.0, 21451.0], [99.1, 21452.0], [99.2, 21452.0], [99.3, 21452.0], [99.4, 21452.0], [99.5, 21453.0], [99.6, 21453.0], [99.7, 21453.0], [99.8, 21494.0], [99.9, 21865.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 87.0, "series": [{"data": [[500.0, 87.0], [600.0, 67.0], [700.0, 42.0], [800.0, 33.0], [900.0, 33.0], [1000.0, 27.0], [1100.0, 27.0], [1200.0, 13.0], [1300.0, 25.0], [1400.0, 13.0], [1500.0, 30.0], [1600.0, 56.0], [1700.0, 31.0], [1800.0, 35.0], [1900.0, 16.0], [2000.0, 21.0], [2100.0, 19.0], [2200.0, 14.0], [2300.0, 26.0], [2400.0, 11.0], [2500.0, 34.0], [2600.0, 17.0], [2700.0, 15.0], [2800.0, 2.0], [3000.0, 23.0], [3100.0, 20.0], [3300.0, 11.0], [3200.0, 20.0], [3400.0, 11.0], [3500.0, 1.0], [3700.0, 3.0], [3800.0, 24.0], [3900.0, 16.0], [4000.0, 9.0], [4100.0, 14.0], [4200.0, 12.0], [4300.0, 1.0], [4600.0, 46.0], [4500.0, 56.0], [4400.0, 60.0], [4700.0, 53.0], [4800.0, 65.0], [4900.0, 62.0], [5000.0, 35.0], [5100.0, 83.0], [5200.0, 49.0], [5300.0, 69.0], [5600.0, 45.0], [5400.0, 53.0], [5500.0, 43.0], [5700.0, 19.0], [5800.0, 15.0], [6000.0, 12.0], [5900.0, 69.0], [6100.0, 19.0], [6200.0, 25.0], [6400.0, 5.0], [6600.0, 16.0], [6500.0, 11.0], [6700.0, 27.0], [6800.0, 11.0], [7100.0, 10.0], [7000.0, 1.0], [7400.0, 10.0], [7200.0, 17.0], [7500.0, 1.0], [7600.0, 7.0], [7900.0, 1.0], [7800.0, 10.0], [8100.0, 17.0], [8000.0, 1.0], [8600.0, 3.0], [8200.0, 3.0], [8700.0, 3.0], [8500.0, 1.0], [8400.0, 8.0], [8300.0, 9.0], [9000.0, 37.0], [8900.0, 11.0], [8800.0, 9.0], [9700.0, 1.0], [9400.0, 1.0], [9800.0, 1.0], [10100.0, 1.0], [10500.0, 1.0], [11200.0, 1.0], [10900.0, 1.0], [11600.0, 1.0], [12000.0, 1.0], [12700.0, 1.0], [12400.0, 1.0], [13300.0, 3.0], [12900.0, 3.0], [13100.0, 1.0], [12800.0, 1.0], [13700.0, 3.0], [13500.0, 1.0], [14100.0, 2.0], [14500.0, 1.0], [14800.0, 2.0], [14400.0, 2.0], [15200.0, 2.0], [15600.0, 2.0], [15800.0, 31.0], [15900.0, 6.0], [19200.0, 1.0], [18800.0, 1.0], [20200.0, 1.0], [19800.0, 1.0], [19900.0, 1.0], [20300.0, 1.0], [19600.0, 1.0], [21000.0, 1.0], [20600.0, 1.0], [21500.0, 1.0], [21400.0, 32.0], [21100.0, 1.0], [20700.0, 1.0], [21800.0, 1.0], [22200.0, 1.0], [22600.0, 1.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 22600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 103.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1981.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 103.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1981.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 77.79661016949153, "minX": 1.7890623E12, "maxY": 148.49804305283772, "series": [{"data": [[1.78906236E12, 148.49804305283772], [1.7890623E12, 77.79661016949153]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 160 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906236E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 566.4285714285713, "minX": 1.0, "maxY": 21272.44186046511, "series": [{"data": [[2.0, 2218.5], [3.0, 2217.0], [4.0, 1360.5], [5.0, 1362.75], [6.0, 1347.5], [7.0, 1218.3333333333333], [8.0, 1085.1666666666665], [9.0, 1117.4285714285716], [10.0, 1115.857142857143], [11.0, 998.5714285714286], [12.0, 865.8], [13.0, 995.8888888888889], [14.0, 566.4285714285713], [15.0, 1226.5384615384617], [16.0, 1014.1], [17.0, 990.9], [18.0, 610.0769230769231], [19.0, 1351.090909090909], [20.0, 983.0909090909092], [21.0, 948.4285714285716], [22.0, 1077.1999999999998], [23.0, 976.1428571428571], [24.0, 1109.2], [25.0, 996.4666666666667], [26.0, 1118.2727272727275], [27.0, 1056.0714285714284], [28.0, 1155.2727272727273], [29.0, 1109.5], [30.0, 1246.4545454545455], [31.0, 1168.5], [32.0, 971.6363636363636], [33.0, 1013.6], [34.0, 1050.090909090909], [35.0, 1101.8181818181818], [36.0, 1147.4999999999998], [37.0, 1190.0], [38.0, 1229.8], [39.0, 1320.0], [40.0, 1386.2222222222222], [41.0, 1356.777777777778], [42.0, 1490.9], [43.0, 1492.4166666666665], [44.0, 1472.6666666666667], [45.0, 1621.6428571428573], [46.0, 1603.5714285714287], [47.0, 2019.5555555555557], [48.0, 2583.909090909091], [49.0, 2217.7], [50.0, 1712.0], [51.0, 2302.181818181818], [52.0, 1774.4545454545455], [53.0, 1764.0], [54.0, 1774.4166666666665], [55.0, 1836.1818181818182], [57.0, 1905.3076923076924], [56.0, 4906.5], [58.0, 1925.1666666666665], [59.0, 2624.7368421052633], [61.0, 3283.5588235294117], [60.0, 4906.0], [64.0, 2423.214285714286], [67.0, 5180.166666666667], [68.0, 3063.199999999999], [69.0, 2702.0], [76.0, 5213.0], [77.0, 4686.903225806452], [86.0, 5565.0], [85.0, 5461.0], [84.0, 5407.0], [91.0, 5248.0], [90.0, 5353.0], [89.0, 5246.666666666667], [88.0, 5246.0], [93.0, 9106.277777777777], [94.0, 5360.909090909091], [106.0, 14584.0], [111.0, 4865.5], [110.0, 4868.0], [108.0, 4865.0], [115.0, 5546.500000000001], [113.0, 4865.666666666667], [123.0, 5954.0], [126.0, 20450.0], [127.0, 14487.888888888889], [134.0, 21272.44186046511], [135.0, 15395.177777777779], [132.0, 5952.0], [131.0, 5967.4], [129.0, 5533.25], [138.0, 3684.7187499999995], [140.0, 13149.0], [141.0, 4775.32], [143.0, 5811.0], [142.0, 6101.0], [136.0, 6725.571428571428], [144.0, 3197.166666666667], [145.0, 2683.0], [147.0, 3751.333333333333], [149.0, 3454.750000000001], [151.0, 3858.4117647058824], [152.0, 4157.0], [154.0, 4846.826086956522], [155.0, 4627.888888888889], [156.0, 4407.045454545453], [160.0, 5693.136311569303], [1.0, 3910.0]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[112.46880998080606, 4779.501919385806]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 160.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2691.266666666667, "minX": 1.7890623E12, "maxY": 4089.0, "series": [{"data": [[1.78906236E12, 3934.766666666667], [1.7890623E12, 4089.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78906236E12, 2691.266666666667], [1.7890623E12, 2796.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906236E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3971.2306967984928, "minX": 1.7890623E12, "maxY": 5619.4080234833655, "series": [{"data": [[1.78906236E12, 5619.4080234833655], [1.7890623E12, 3971.2306967984928]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906236E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3971.1619585687417, "minX": 1.7890623E12, "maxY": 5619.389432485319, "series": [{"data": [[1.78906236E12, 5619.389432485319], [1.7890623E12, 3971.1619585687417]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906236E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.1193737769080236, "minX": 1.7890623E12, "maxY": 0.19679849340866284, "series": [{"data": [[1.78906236E12, 0.1193737769080236], [1.7890623E12, 0.19679849340866284]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906236E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 512.0, "minX": 1.7890623E12, "maxY": 620.0, "series": [{"data": [[1.7890623E12, 620.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7890623E12, 512.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7890623E12, 608.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7890623E12, 620.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7890623E12, 558.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7890623E12, 617.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7890623E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 543.5, "minX": 1.0, "maxY": 21451.0, "series": [{"data": [[8.0, 543.5], [17.0, 544.0], [22.0, 555.0], [3.0, 552.0], [13.0, 547.0], [26.0, 585.0], [28.0, 609.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 3363.5], [32.0, 4696.0], [2.0, 2576.5], [34.0, 2771.0], [36.0, 7867.0], [41.0, 4673.0], [43.0, 21451.0], [42.0, 5264.5], [44.0, 15896.0], [48.0, 4898.0], [51.0, 3295.0], [53.0, 5120.0], [58.0, 4497.5], [4.0, 12842.5], [68.0, 4909.5], [75.0, 2595.0], [9.0, 6122.5], [12.0, 5372.5], [1.0, 9503.0], [16.0, 5489.0], [17.0, 7466.0], [18.0, 3860.0], [20.0, 2300.0], [21.0, 5620.0], [22.0, 5186.0], [23.0, 3609.0], [24.0, 3942.5], [25.0, 3564.5], [26.0, 1807.0], [27.0, 3457.0], [28.0, 2352.0], [29.0, 3273.0], [30.0, 921.0], [31.0, 2748.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 75.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 543.5, "minX": 1.0, "maxY": 21451.0, "series": [{"data": [[8.0, 543.5], [17.0, 544.0], [22.0, 555.0], [3.0, 548.0], [13.0, 547.0], [26.0, 585.0], [28.0, 609.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 3363.5], [32.0, 4696.0], [2.0, 2576.5], [34.0, 2771.0], [36.0, 7867.0], [41.0, 4673.0], [43.0, 21451.0], [42.0, 5264.5], [44.0, 15896.0], [48.0, 4898.0], [51.0, 3295.0], [53.0, 5120.0], [58.0, 4497.5], [4.0, 12842.5], [68.0, 4909.5], [75.0, 2595.0], [9.0, 6122.5], [12.0, 5372.5], [1.0, 9503.0], [16.0, 5489.0], [17.0, 7466.0], [18.0, 3859.0], [20.0, 2300.0], [21.0, 5620.0], [22.0, 5186.0], [23.0, 3609.0], [24.0, 3942.0], [25.0, 3564.5], [26.0, 1807.0], [27.0, 3457.0], [28.0, 2352.0], [29.0, 3273.0], [30.0, 921.0], [31.0, 2748.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 75.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 14.4, "minX": 1.7890623E12, "maxY": 20.333333333333332, "series": [{"data": [[1.78906236E12, 14.4], [1.7890623E12, 20.333333333333332]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906236E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.7890623E12, "maxY": 17.55, "series": [{"data": [[1.78906236E12, 17.0], [1.7890623E12, 17.55]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78906236E12, 0.03333333333333333], [1.7890623E12, 0.15]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906236E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.7890623E12, "maxY": 17.033333333333335, "series": [{"data": [[1.7890623E12, 1.7166666666666666]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78906236E12, 17.033333333333335], [1.7890623E12, 15.983333333333333]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906236E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7166666666666666, "minX": 1.7890623E12, "maxY": 17.033333333333335, "series": [{"data": [[1.7890623E12, 1.7166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78906236E12, 17.033333333333335], [1.7890623E12, 15.983333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906236E12, "title": "Total Transactions Per Second"}},
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

