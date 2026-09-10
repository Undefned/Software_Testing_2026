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
        data: {"result": {"minY": 522.0, "minX": 0.0, "maxY": 8129.0, "series": [{"data": [[0.0, 522.0], [0.1, 526.0], [0.2, 527.0], [0.3, 528.0], [0.4, 531.0], [0.5, 534.0], [0.6, 539.0], [0.7, 539.0], [0.8, 541.0], [0.9, 543.0], [1.0, 545.0], [1.1, 546.0], [1.2, 550.0], [1.3, 554.0], [1.4, 554.0], [1.5, 555.0], [1.6, 558.0], [1.7, 562.0], [1.8, 563.0], [1.9, 566.0], [2.0, 568.0], [2.1, 574.0], [2.2, 574.0], [2.3, 575.0], [2.4, 576.0], [2.5, 576.0], [2.6, 578.0], [2.7, 578.0], [2.8, 580.0], [2.9, 583.0], [3.0, 583.0], [3.1, 586.0], [3.2, 589.0], [3.3, 593.0], [3.4, 594.0], [3.5, 597.0], [3.6, 604.0], [3.7, 609.0], [3.8, 616.0], [3.9, 617.0], [4.0, 621.0], [4.1, 623.0], [4.2, 627.0], [4.3, 628.0], [4.4, 630.0], [4.5, 639.0], [4.6, 642.0], [4.7, 649.0], [4.8, 652.0], [4.9, 655.0], [5.0, 656.0], [5.1, 656.0], [5.2, 664.0], [5.3, 668.0], [5.4, 682.0], [5.5, 684.0], [5.6, 686.0], [5.7, 689.0], [5.8, 689.0], [5.9, 693.0], [6.0, 699.0], [6.1, 700.0], [6.2, 703.0], [6.3, 709.0], [6.4, 711.0], [6.5, 717.0], [6.6, 730.0], [6.7, 731.0], [6.8, 735.0], [6.9, 739.0], [7.0, 740.0], [7.1, 741.0], [7.2, 744.0], [7.3, 751.0], [7.4, 765.0], [7.5, 775.0], [7.6, 779.0], [7.7, 781.0], [7.8, 789.0], [7.9, 793.0], [8.0, 800.0], [8.1, 804.0], [8.2, 810.0], [8.3, 831.0], [8.4, 835.0], [8.5, 839.0], [8.6, 846.0], [8.7, 850.0], [8.8, 860.0], [8.9, 866.0], [9.0, 871.0], [9.1, 873.0], [9.2, 882.0], [9.3, 884.0], [9.4, 902.0], [9.5, 906.0], [9.6, 911.0], [9.7, 916.0], [9.8, 927.0], [9.9, 930.0], [10.0, 934.0], [10.1, 945.0], [10.2, 952.0], [10.3, 961.0], [10.4, 963.0], [10.5, 968.0], [10.6, 975.0], [10.7, 978.0], [10.8, 986.0], [10.9, 994.0], [11.0, 1003.0], [11.1, 1011.0], [11.2, 1018.0], [11.3, 1025.0], [11.4, 1043.0], [11.5, 1048.0], [11.6, 1053.0], [11.7, 1060.0], [11.8, 1065.0], [11.9, 1070.0], [12.0, 1077.0], [12.1, 1083.0], [12.2, 1090.0], [12.3, 1094.0], [12.4, 1102.0], [12.5, 1116.0], [12.6, 1125.0], [12.7, 1134.0], [12.8, 1143.0], [12.9, 1158.0], [13.0, 1165.0], [13.1, 1170.0], [13.2, 1189.0], [13.3, 1195.0], [13.4, 1199.0], [13.5, 1207.0], [13.6, 1223.0], [13.7, 1233.0], [13.8, 1252.0], [13.9, 1264.0], [14.0, 1273.0], [14.1, 1278.0], [14.2, 1292.0], [14.3, 1311.0], [14.4, 1316.0], [14.5, 1346.0], [14.6, 1350.0], [14.7, 1359.0], [14.8, 1359.0], [14.9, 1371.0], [15.0, 1377.0], [15.1, 1384.0], [15.2, 1390.0], [15.3, 1400.0], [15.4, 1423.0], [15.5, 1431.0], [15.6, 1447.0], [15.7, 1448.0], [15.8, 1448.0], [15.9, 1453.0], [16.0, 1463.0], [16.1, 1463.0], [16.2, 1480.0], [16.3, 1482.0], [16.4, 1484.0], [16.5, 1497.0], [16.6, 1502.0], [16.7, 1502.0], [16.8, 1507.0], [16.9, 1512.0], [17.0, 1512.0], [17.1, 1521.0], [17.2, 1522.0], [17.3, 1526.0], [17.4, 1534.0], [17.5, 1534.0], [17.6, 1538.0], [17.7, 1538.0], [17.8, 1539.0], [17.9, 1540.0], [18.0, 1542.0], [18.1, 1602.0], [18.2, 1604.0], [18.3, 1606.0], [18.4, 1616.0], [18.5, 1624.0], [18.6, 1625.0], [18.7, 1637.0], [18.8, 1637.0], [18.9, 1644.0], [19.0, 1648.0], [19.1, 1661.0], [19.2, 1661.0], [19.3, 1672.0], [19.4, 1687.0], [19.5, 1687.0], [19.6, 1688.0], [19.7, 1693.0], [19.8, 1694.0], [19.9, 1705.0], [20.0, 1706.0], [20.1, 1717.0], [20.2, 1729.0], [20.3, 1736.0], [20.4, 1736.0], [20.5, 1744.0], [20.6, 1744.0], [20.7, 1756.0], [20.8, 1764.0], [20.9, 1776.0], [21.0, 1777.0], [21.1, 1782.0], [21.2, 1783.0], [21.3, 1784.0], [21.4, 1784.0], [21.5, 1788.0], [21.6, 1793.0], [21.7, 1794.0], [21.8, 1795.0], [21.9, 1798.0], [22.0, 1805.0], [22.1, 1811.0], [22.2, 1813.0], [22.3, 1814.0], [22.4, 1840.0], [22.5, 1842.0], [22.6, 1844.0], [22.7, 1846.0], [22.8, 1848.0], [22.9, 1852.0], [23.0, 1852.0], [23.1, 1888.0], [23.2, 1890.0], [23.3, 1893.0], [23.4, 1894.0], [23.5, 1895.0], [23.6, 1896.0], [23.7, 1896.0], [23.8, 1896.0], [23.9, 1902.0], [24.0, 1930.0], [24.1, 1930.0], [24.2, 1931.0], [24.3, 1931.0], [24.4, 1932.0], [24.5, 1934.0], [24.6, 1934.0], [24.7, 1935.0], [24.8, 1936.0], [24.9, 1936.0], [25.0, 1943.0], [25.1, 1944.0], [25.2, 1957.0], [25.3, 1977.0], [25.4, 2008.0], [25.5, 2008.0], [25.6, 2034.0], [25.7, 2055.0], [25.8, 2058.0], [25.9, 2058.0], [26.0, 2087.0], [26.1, 2090.0], [26.2, 2091.0], [26.3, 2091.0], [26.4, 2091.0], [26.5, 2092.0], [26.6, 2102.0], [26.7, 2102.0], [26.8, 2103.0], [26.9, 2104.0], [27.0, 2105.0], [27.1, 2142.0], [27.2, 2142.0], [27.3, 2143.0], [27.4, 2152.0], [27.5, 2153.0], [27.6, 2175.0], [27.7, 2186.0], [27.8, 2198.0], [27.9, 2200.0], [28.0, 2201.0], [28.1, 2202.0], [28.2, 2203.0], [28.3, 2204.0], [28.4, 2204.0], [28.5, 2206.0], [28.6, 2222.0], [28.7, 2231.0], [28.8, 2231.0], [28.9, 2231.0], [29.0, 2232.0], [29.1, 2249.0], [29.2, 2250.0], [29.3, 2251.0], [29.4, 2253.0], [29.5, 2253.0], [29.6, 2289.0], [29.7, 2325.0], [29.8, 2326.0], [29.9, 2327.0], [30.0, 2327.0], [30.1, 2328.0], [30.2, 2340.0], [30.3, 2340.0], [30.4, 2343.0], [30.5, 2344.0], [30.6, 2345.0], [30.7, 2345.0], [30.8, 2346.0], [30.9, 2347.0], [31.0, 2397.0], [31.1, 2418.0], [31.2, 2428.0], [31.3, 2428.0], [31.4, 2428.0], [31.5, 2430.0], [31.6, 2434.0], [31.7, 2483.0], [31.8, 2484.0], [31.9, 2484.0], [32.0, 2485.0], [32.1, 2485.0], [32.2, 2497.0], [32.3, 2498.0], [32.4, 2507.0], [32.5, 2558.0], [32.6, 2559.0], [32.7, 2559.0], [32.8, 2560.0], [32.9, 2560.0], [33.0, 2561.0], [33.1, 2561.0], [33.2, 2562.0], [33.3, 2564.0], [33.4, 2565.0], [33.5, 2565.0], [33.6, 2566.0], [33.7, 2566.0], [33.8, 2566.0], [33.9, 2568.0], [34.0, 2617.0], [34.1, 2661.0], [34.2, 2661.0], [34.3, 2663.0], [34.4, 2664.0], [34.5, 2767.0], [34.6, 2801.0], [34.7, 2801.0], [34.8, 2801.0], [34.9, 2801.0], [35.0, 2801.0], [35.1, 2801.0], [35.2, 2802.0], [35.3, 2802.0], [35.4, 2802.0], [35.5, 2803.0], [35.6, 2804.0], [35.7, 2805.0], [35.8, 2806.0], [35.9, 2811.0], [36.0, 2812.0], [36.1, 2813.0], [36.2, 2814.0], [36.3, 2814.0], [36.4, 2814.0], [36.5, 2815.0], [36.6, 2815.0], [36.7, 2816.0], [36.8, 2820.0], [36.9, 2822.0], [37.0, 2823.0], [37.1, 2823.0], [37.2, 2824.0], [37.3, 2832.0], [37.4, 2852.0], [37.5, 2863.0], [37.6, 2864.0], [37.7, 2865.0], [37.8, 2893.0], [37.9, 2893.0], [38.0, 2896.0], [38.1, 2897.0], [38.2, 2897.0], [38.3, 2911.0], [38.4, 2911.0], [38.5, 2912.0], [38.6, 2913.0], [38.7, 3029.0], [38.8, 3030.0], [38.9, 3030.0], [39.0, 3030.0], [39.1, 3031.0], [39.2, 3031.0], [39.3, 3032.0], [39.4, 3032.0], [39.5, 3032.0], [39.6, 3033.0], [39.7, 3045.0], [39.8, 3047.0], [39.9, 3048.0], [40.0, 3065.0], [40.1, 3091.0], [40.2, 3092.0], [40.3, 3093.0], [40.4, 3097.0], [40.5, 3097.0], [40.6, 3097.0], [40.7, 3098.0], [40.8, 3098.0], [40.9, 3099.0], [41.0, 3099.0], [41.1, 3100.0], [41.2, 3100.0], [41.3, 3101.0], [41.4, 3112.0], [41.5, 3177.0], [41.6, 3190.0], [41.7, 3191.0], [41.8, 3193.0], [41.9, 3193.0], [42.0, 3195.0], [42.1, 3195.0], [42.2, 3195.0], [42.3, 3196.0], [42.4, 3196.0], [42.5, 3197.0], [42.6, 3197.0], [42.7, 3222.0], [42.8, 3222.0], [42.9, 3223.0], [43.0, 3223.0], [43.1, 3223.0], [43.2, 3224.0], [43.3, 3224.0], [43.4, 3224.0], [43.5, 3224.0], [43.6, 3225.0], [43.7, 3225.0], [43.8, 3229.0], [43.9, 3230.0], [44.0, 3230.0], [44.1, 3232.0], [44.2, 3243.0], [44.3, 3243.0], [44.4, 3243.0], [44.5, 3247.0], [44.6, 3249.0], [44.7, 3249.0], [44.8, 3272.0], [44.9, 3272.0], [45.0, 3272.0], [45.1, 3273.0], [45.2, 3274.0], [45.3, 3274.0], [45.4, 3274.0], [45.5, 3274.0], [45.6, 3275.0], [45.7, 3275.0], [45.8, 3281.0], [45.9, 3282.0], [46.0, 3283.0], [46.1, 3284.0], [46.2, 3284.0], [46.3, 3285.0], [46.4, 3286.0], [46.5, 3306.0], [46.6, 3317.0], [46.7, 3322.0], [46.8, 3324.0], [46.9, 3327.0], [47.0, 3330.0], [47.1, 3330.0], [47.2, 3331.0], [47.3, 3331.0], [47.4, 3333.0], [47.5, 3333.0], [47.6, 3373.0], [47.7, 3376.0], [47.8, 3395.0], [47.9, 3397.0], [48.0, 3397.0], [48.1, 3397.0], [48.2, 3398.0], [48.3, 3398.0], [48.4, 3398.0], [48.5, 3398.0], [48.6, 3399.0], [48.7, 3399.0], [48.8, 3399.0], [48.9, 3419.0], [49.0, 3483.0], [49.1, 3497.0], [49.2, 3501.0], [49.3, 3502.0], [49.4, 3561.0], [49.5, 3567.0], [49.6, 3595.0], [49.7, 3608.0], [49.8, 3614.0], [49.9, 3617.0], [50.0, 3618.0], [50.1, 3619.0], [50.2, 3619.0], [50.3, 3620.0], [50.4, 3620.0], [50.5, 3620.0], [50.6, 3620.0], [50.7, 3621.0], [50.8, 3621.0], [50.9, 3623.0], [51.0, 3662.0], [51.1, 3668.0], [51.2, 3669.0], [51.3, 3669.0], [51.4, 3669.0], [51.5, 3669.0], [51.6, 3669.0], [51.7, 3670.0], [51.8, 3670.0], [51.9, 3727.0], [52.0, 3738.0], [52.1, 3738.0], [52.2, 3791.0], [52.3, 3796.0], [52.4, 3814.0], [52.5, 3816.0], [52.6, 3816.0], [52.7, 3817.0], [52.8, 3817.0], [52.9, 3818.0], [53.0, 3819.0], [53.1, 3820.0], [53.2, 3820.0], [53.3, 3821.0], [53.4, 3821.0], [53.5, 3821.0], [53.6, 3823.0], [53.7, 3823.0], [53.8, 3824.0], [53.9, 3824.0], [54.0, 3824.0], [54.1, 3828.0], [54.2, 3828.0], [54.3, 3850.0], [54.4, 3871.0], [54.5, 3873.0], [54.6, 3877.0], [54.7, 3877.0], [54.8, 3878.0], [54.9, 3888.0], [55.0, 3899.0], [55.1, 3900.0], [55.2, 3902.0], [55.3, 3902.0], [55.4, 3903.0], [55.5, 3904.0], [55.6, 3904.0], [55.7, 3908.0], [55.8, 3908.0], [55.9, 3909.0], [56.0, 3909.0], [56.1, 3911.0], [56.2, 3911.0], [56.3, 3919.0], [56.4, 3920.0], [56.5, 3920.0], [56.6, 3920.0], [56.7, 3921.0], [56.8, 3923.0], [56.9, 3924.0], [57.0, 3925.0], [57.1, 3925.0], [57.2, 3949.0], [57.3, 3951.0], [57.4, 3953.0], [57.5, 3954.0], [57.6, 3956.0], [57.7, 3956.0], [57.8, 3957.0], [57.9, 3963.0], [58.0, 3965.0], [58.1, 3967.0], [58.2, 3983.0], [58.3, 3994.0], [58.4, 3995.0], [58.5, 3996.0], [58.6, 3997.0], [58.7, 3997.0], [58.8, 3997.0], [58.9, 3997.0], [59.0, 3997.0], [59.1, 3997.0], [59.2, 3998.0], [59.3, 3999.0], [59.4, 3999.0], [59.5, 4000.0], [59.6, 4016.0], [59.7, 4017.0], [59.8, 4019.0], [59.9, 4020.0], [60.0, 4020.0], [60.1, 4021.0], [60.2, 4024.0], [60.3, 4024.0], [60.4, 4045.0], [60.5, 4045.0], [60.6, 4046.0], [60.7, 4046.0], [60.8, 4048.0], [60.9, 4048.0], [61.0, 4060.0], [61.1, 4060.0], [61.2, 4060.0], [61.3, 4062.0], [61.4, 4062.0], [61.5, 4062.0], [61.6, 4063.0], [61.7, 4063.0], [61.8, 4063.0], [61.9, 4063.0], [62.0, 4064.0], [62.1, 4072.0], [62.2, 4072.0], [62.3, 4073.0], [62.4, 4073.0], [62.5, 4073.0], [62.6, 4073.0], [62.7, 4074.0], [62.8, 4074.0], [62.9, 4074.0], [63.0, 4079.0], [63.1, 4080.0], [63.2, 4080.0], [63.3, 4080.0], [63.4, 4081.0], [63.5, 4081.0], [63.6, 4085.0], [63.7, 4086.0], [63.8, 4088.0], [63.9, 4088.0], [64.0, 4089.0], [64.1, 4089.0], [64.2, 4089.0], [64.3, 4089.0], [64.4, 4089.0], [64.5, 4089.0], [64.6, 4090.0], [64.7, 4090.0], [64.8, 4091.0], [64.9, 4091.0], [65.0, 4091.0], [65.1, 4092.0], [65.2, 4119.0], [65.3, 4119.0], [65.4, 4120.0], [65.5, 4120.0], [65.6, 4120.0], [65.7, 4121.0], [65.8, 4121.0], [65.9, 4121.0], [66.0, 4123.0], [66.1, 4123.0], [66.2, 4124.0], [66.3, 4124.0], [66.4, 4153.0], [66.5, 4154.0], [66.6, 4156.0], [66.7, 4156.0], [66.8, 4159.0], [66.9, 4160.0], [67.0, 4167.0], [67.1, 4168.0], [67.2, 4168.0], [67.3, 4169.0], [67.4, 4169.0], [67.5, 4170.0], [67.6, 4170.0], [67.7, 4170.0], [67.8, 4170.0], [67.9, 4171.0], [68.0, 4171.0], [68.1, 4172.0], [68.2, 4210.0], [68.3, 4212.0], [68.4, 4220.0], [68.5, 4302.0], [68.6, 4319.0], [68.7, 4346.0], [68.8, 4361.0], [68.9, 4412.0], [69.0, 4413.0], [69.1, 4413.0], [69.2, 4414.0], [69.3, 4414.0], [69.4, 4414.0], [69.5, 4415.0], [69.6, 4415.0], [69.7, 4416.0], [69.8, 4417.0], [69.9, 4417.0], [70.0, 4471.0], [70.1, 4499.0], [70.2, 4504.0], [70.3, 4505.0], [70.4, 4505.0], [70.5, 4506.0], [70.6, 4506.0], [70.7, 4506.0], [70.8, 4506.0], [70.9, 4507.0], [71.0, 4507.0], [71.1, 4507.0], [71.2, 4507.0], [71.3, 4508.0], [71.4, 4516.0], [71.5, 4517.0], [71.6, 4517.0], [71.7, 4517.0], [71.8, 4517.0], [71.9, 4517.0], [72.0, 4517.0], [72.1, 4517.0], [72.2, 4517.0], [72.3, 4518.0], [72.4, 4518.0], [72.5, 4527.0], [72.6, 4527.0], [72.7, 4528.0], [72.8, 4529.0], [72.9, 4530.0], [73.0, 4530.0], [73.1, 4531.0], [73.2, 4531.0], [73.3, 4531.0], [73.4, 4532.0], [73.5, 4540.0], [73.6, 4564.0], [73.7, 4568.0], [73.8, 4619.0], [73.9, 4629.0], [74.0, 4637.0], [74.1, 4639.0], [74.2, 4639.0], [74.3, 4640.0], [74.4, 4641.0], [74.5, 4642.0], [74.6, 4675.0], [74.7, 4688.0], [74.8, 4691.0], [74.9, 4849.0], [75.0, 4850.0], [75.1, 4850.0], [75.2, 4851.0], [75.3, 4851.0], [75.4, 4851.0], [75.5, 4851.0], [75.6, 4851.0], [75.7, 4852.0], [75.8, 4853.0], [75.9, 4853.0], [76.0, 4887.0], [76.1, 4887.0], [76.2, 4888.0], [76.3, 4888.0], [76.4, 4889.0], [76.5, 4889.0], [76.6, 4889.0], [76.7, 4890.0], [76.8, 4892.0], [76.9, 4892.0], [77.0, 4893.0], [77.1, 4893.0], [77.2, 4896.0], [77.3, 4896.0], [77.4, 4898.0], [77.5, 4899.0], [77.6, 4945.0], [77.7, 4945.0], [77.8, 4947.0], [77.9, 4947.0], [78.0, 4947.0], [78.1, 4948.0], [78.2, 4948.0], [78.3, 4948.0], [78.4, 4948.0], [78.5, 4949.0], [78.6, 4949.0], [78.7, 4949.0], [78.8, 4950.0], [78.9, 4951.0], [79.0, 4951.0], [79.1, 4951.0], [79.2, 4952.0], [79.3, 4952.0], [79.4, 4953.0], [79.5, 4955.0], [79.6, 4959.0], [79.7, 4964.0], [79.8, 4980.0], [79.9, 4980.0], [80.0, 4981.0], [80.1, 4981.0], [80.2, 4981.0], [80.3, 4981.0], [80.4, 4982.0], [80.5, 4983.0], [80.6, 4990.0], [80.7, 4992.0], [80.8, 5041.0], [80.9, 5045.0], [81.0, 5047.0], [81.1, 5048.0], [81.2, 5089.0], [81.3, 5155.0], [81.4, 5157.0], [81.5, 5160.0], [81.6, 5162.0], [81.7, 5166.0], [81.8, 5166.0], [81.9, 5166.0], [82.0, 5168.0], [82.1, 5168.0], [82.2, 5169.0], [82.3, 5169.0], [82.4, 5201.0], [82.5, 5231.0], [82.6, 5265.0], [82.7, 5268.0], [82.8, 5269.0], [82.9, 5270.0], [83.0, 5273.0], [83.1, 5273.0], [83.2, 5274.0], [83.3, 5274.0], [83.4, 5274.0], [83.5, 5275.0], [83.6, 5275.0], [83.7, 5276.0], [83.8, 5291.0], [83.9, 5312.0], [84.0, 5321.0], [84.1, 5323.0], [84.2, 5323.0], [84.3, 5324.0], [84.4, 5324.0], [84.5, 5325.0], [84.6, 5326.0], [84.7, 5328.0], [84.8, 5534.0], [84.9, 5571.0], [85.0, 5572.0], [85.1, 5573.0], [85.2, 5573.0], [85.3, 5573.0], [85.4, 5573.0], [85.5, 5574.0], [85.6, 5574.0], [85.7, 5574.0], [85.8, 5574.0], [85.9, 5576.0], [86.0, 5577.0], [86.1, 5623.0], [86.2, 5663.0], [86.3, 5669.0], [86.4, 5680.0], [86.5, 5766.0], [86.6, 5784.0], [86.7, 5787.0], [86.8, 5788.0], [86.9, 5789.0], [87.0, 5790.0], [87.1, 5790.0], [87.2, 5790.0], [87.3, 5791.0], [87.4, 5791.0], [87.5, 5791.0], [87.6, 5792.0], [87.7, 5792.0], [87.8, 5793.0], [87.9, 5793.0], [88.0, 5794.0], [88.1, 5795.0], [88.2, 5795.0], [88.3, 5800.0], [88.4, 5855.0], [88.5, 5925.0], [88.6, 5925.0], [88.7, 5927.0], [88.8, 5927.0], [88.9, 5928.0], [89.0, 5928.0], [89.1, 5930.0], [89.2, 5930.0], [89.3, 5931.0], [89.4, 5931.0], [89.5, 5953.0], [89.6, 5972.0], [89.7, 5972.0], [89.8, 5973.0], [89.9, 5973.0], [90.0, 5973.0], [90.1, 5974.0], [90.2, 5975.0], [90.3, 5975.0], [90.4, 5975.0], [90.5, 5975.0], [90.6, 5975.0], [90.7, 5975.0], [90.8, 5976.0], [90.9, 5976.0], [91.0, 5985.0], [91.1, 5986.0], [91.2, 5986.0], [91.3, 5987.0], [91.4, 5987.0], [91.5, 5988.0], [91.6, 5988.0], [91.7, 5988.0], [91.8, 5989.0], [91.9, 5989.0], [92.0, 5990.0], [92.1, 5993.0], [92.2, 5994.0], [92.3, 5995.0], [92.4, 5997.0], [92.5, 5998.0], [92.6, 6025.0], [92.7, 6053.0], [92.8, 6055.0], [92.9, 6056.0], [93.0, 6057.0], [93.1, 6057.0], [93.2, 6059.0], [93.3, 6062.0], [93.4, 6079.0], [93.5, 6079.0], [93.6, 6080.0], [93.7, 6081.0], [93.8, 6082.0], [93.9, 6082.0], [94.0, 6092.0], [94.1, 6163.0], [94.2, 6163.0], [94.3, 6164.0], [94.4, 6164.0], [94.5, 6165.0], [94.6, 6166.0], [94.7, 6168.0], [94.8, 6191.0], [94.9, 6206.0], [95.0, 6265.0], [95.1, 6266.0], [95.2, 6463.0], [95.3, 6464.0], [95.4, 6464.0], [95.5, 6464.0], [95.6, 6468.0], [95.7, 6509.0], [95.8, 6510.0], [95.9, 6510.0], [96.0, 6510.0], [96.1, 6512.0], [96.2, 6513.0], [96.3, 6582.0], [96.4, 6626.0], [96.5, 6626.0], [96.6, 6626.0], [96.7, 6627.0], [96.8, 6627.0], [96.9, 6628.0], [97.0, 6628.0], [97.1, 6708.0], [97.2, 6795.0], [97.3, 7038.0], [97.4, 7682.0], [97.5, 7723.0], [97.6, 7770.0], [97.7, 7771.0], [97.8, 7772.0], [97.9, 7772.0], [98.0, 7774.0], [98.1, 7776.0], [98.2, 7777.0], [98.3, 7785.0], [98.4, 7785.0], [98.5, 7786.0], [98.6, 7788.0], [98.7, 7788.0], [98.8, 7794.0], [98.9, 7795.0], [99.0, 7795.0], [99.1, 7796.0], [99.2, 7835.0], [99.3, 8103.0], [99.4, 8104.0], [99.5, 8104.0], [99.6, 8104.0], [99.7, 8105.0], [99.8, 8106.0], [99.9, 8126.0], [100.0, 8129.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 144.0, "series": [{"data": [[600.0, 63.0], [700.0, 48.0], [800.0, 35.0], [900.0, 39.0], [1000.0, 36.0], [1100.0, 26.0], [1200.0, 21.0], [1300.0, 25.0], [1400.0, 32.0], [1500.0, 38.0], [1600.0, 43.0], [1700.0, 53.0], [1800.0, 47.0], [1900.0, 37.0], [2000.0, 31.0], [2100.0, 33.0], [2200.0, 44.0], [2300.0, 36.0], [2400.0, 33.0], [2500.0, 39.0], [2600.0, 11.0], [2800.0, 92.0], [2700.0, 4.0], [2900.0, 10.0], [3000.0, 61.0], [3100.0, 39.0], [3300.0, 60.0], [3200.0, 94.0], [3400.0, 9.0], [3500.0, 12.0], [3700.0, 12.0], [3600.0, 54.0], [3800.0, 67.0], [3900.0, 110.0], [4000.0, 144.0], [4100.0, 74.0], [4300.0, 9.0], [4200.0, 8.0], [4500.0, 90.0], [4400.0, 32.0], [4600.0, 27.0], [4800.0, 67.0], [4900.0, 82.0], [5100.0, 29.0], [5000.0, 11.0], [5200.0, 37.0], [5300.0, 22.0], [5500.0, 31.0], [5600.0, 12.0], [5800.0, 4.0], [5700.0, 45.0], [5900.0, 103.0], [6100.0, 20.0], [6000.0, 37.0], [6300.0, 1.0], [6200.0, 7.0], [6600.0, 19.0], [6500.0, 16.0], [6400.0, 12.0], [6700.0, 4.0], [6900.0, 1.0], [7000.0, 1.0], [7400.0, 1.0], [7600.0, 2.0], [7800.0, 1.0], [7700.0, 44.0], [8100.0, 19.0], [500.0, 88.0]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 99.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2395.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 99.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2395.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 47.49230769230769, "minX": 1.78906218E12, "maxY": 127.74431818181807, "series": [{"data": [[1.78906218E12, 47.49230769230769], [1.78906224E12, 127.74431818181807]], "isOverall": false, "label": "Thread Group - until HTTP 503 - 144 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906224E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 530.8, "minX": 1.0, "maxY": 6525.0, "series": [{"data": [[2.0, 2919.5], [3.0, 2106.333333333333], [4.0, 2095.0], [5.0, 1692.25], [6.0, 559.5], [7.0, 551.1666666666667], [8.0, 530.8], [9.0, 534.8571428571428], [10.0, 544.5], [11.0, 547.8888888888888], [12.0, 564.1666666666666], [13.0, 572.0], [14.0, 571.25], [15.0, 583.0769230769231], [16.0, 601.4444444444443], [17.0, 645.4545454545455], [18.0, 628.875], [19.0, 638.7142857142858], [20.0, 1945.071428571429], [21.0, 684.9285714285714], [22.0, 695.4166666666667], [23.0, 2209.8], [24.0, 743.5], [25.0, 1058.1875], [26.0, 1248.5], [27.0, 1657.75], [28.0, 875.5454545454544], [29.0, 913.5384615384614], [30.0, 948.5714285714286], [31.0, 3160.391304347826], [32.0, 1015.076923076923], [33.0, 1056.7272727272727], [34.0, 1079.5833333333333], [35.0, 1122.8333333333335], [36.0, 1177.1666666666667], [37.0, 1231.0000000000002], [38.0, 1291.4444444444443], [39.0, 1342.8461538461538], [40.0, 1365.5], [41.0, 1420.3999999999996], [42.0, 1438.2727272727273], [43.0, 1491.75], [44.0, 1479.8], [45.0, 1578.5714285714287], [46.0, 1613.0], [47.0, 1654.5333333333333], [48.0, 1675.5], [49.0, 1660.2777777777778], [50.0, 1663.3333333333333], [51.0, 1724.3999999999999], [52.0, 1770.2], [53.0, 1729.090909090909], [54.0, 1831.0000000000002], [55.0, 1788.25], [56.0, 1760.4166666666667], [57.0, 1812.5384615384617], [58.0, 1928.5384615384617], [59.0, 1918.0], [60.0, 1928.0], [61.0, 2000.0000000000002], [63.0, 1955.1999999999998], [64.0, 2091.235294117647], [65.0, 2097.75], [67.0, 2156.222222222222], [68.0, 2248.555555555556], [70.0, 2303.3157894736846], [72.0, 2391.9500000000003], [74.0, 2456.285714285714], [75.0, 2511.4285714285716], [77.0, 2602.8260869565215], [79.0, 2590.869565217391], [81.0, 2791.6], [83.0, 2808.692307692307], [82.0, 4889.0], [86.0, 2949.7407407407413], [87.0, 4888.0], [84.0, 4888.666666666667], [88.0, 2995.206896551724], [91.0, 3065.3793103448274], [90.0, 4892.25], [89.0, 4888.666666666667], [93.0, 3112.5806451612902], [95.0, 4688.0], [94.0, 4893.333333333333], [96.0, 3305.194444444445], [98.0, 3079.030303030302], [99.0, 4835.5], [97.0, 4688.0], [101.0, 3159.558823529412], [103.0, 4887.0], [102.0, 4955.0], [104.0, 3227.86111111111], [107.0, 3401.729729729729], [106.0, 4893.0], [105.0, 4910.666666666667], [111.0, 3829.487179487179], [110.0, 4924.5], [109.0, 4908.5], [108.0, 4888.0], [115.0, 4191.906976744186], [114.0, 4950.666666666667], [113.0, 4896.0], [118.0, 3991.813953488373], [117.0, 4948.333333333333], [116.0, 4950.5], [122.0, 3893.6888888888893], [123.0, 4951.0], [121.0, 4948.5], [126.0, 4117.122448979592], [124.0, 4948.666666666667], [130.0, 4320.530612244898], [131.0, 3864.5], [134.0, 4352.145454545456], [132.0, 4948.75], [129.0, 4951.0], [138.0, 4826.492063492063], [143.0, 4836.823529411763], [139.0, 6525.0], [144.0, 5151.681177976949], [1.0, 5312.0]], "isOverall": false, "label": "GET / config=3", "isController": false}, {"data": [[98.46150761828372, 3489.7337610264653]], "isOverall": false, "label": "GET / config=3-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 144.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2396.3333333333335, "minX": 1.78906218E12, "maxY": 6100.7, "series": [{"data": [[1.78906218E12, 3503.5], [1.78906224E12, 6100.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78906218E12, 2396.3333333333335], [1.78906224E12, 4171.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906224E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1593.27032967033, "minX": 1.78906218E12, "maxY": 4579.24242424242, "series": [{"data": [[1.78906218E12, 1593.27032967033], [1.78906224E12, 4579.24242424242]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906224E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1593.2395604395615, "minX": 1.78906218E12, "maxY": 4579.223484848496, "series": [{"data": [[1.78906218E12, 1593.2395604395615], [1.78906224E12, 4579.223484848496]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906224E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.12752525252525262, "minX": 1.78906218E12, "maxY": 0.12967032967032951, "series": [{"data": [[1.78906218E12, 0.12967032967032951], [1.78906224E12, 0.12752525252525262]], "isOverall": false, "label": "GET / config=3", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906224E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 522.0, "minX": 1.78906218E12, "maxY": 620.0, "series": [{"data": [[1.78906218E12, 620.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78906218E12, 522.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78906218E12, 604.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78906218E12, 620.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78906218E12, 568.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78906218E12, 616.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906218E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 539.0, "minX": 1.0, "maxY": 5975.5, "series": [{"data": [[4.0, 575.0], [8.0, 556.0], [18.0, 539.0], [19.0, 566.0], [24.0, 586.0], [14.0, 540.0], [30.0, 620.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 1486.5], [33.0, 2203.5], [2.0, 4320.0], [34.0, 2081.5], [37.0, 2252.0], [36.0, 3398.0], [39.0, 4120.5], [41.0, 3017.5], [40.0, 4002.0], [43.0, 4517.0], [44.0, 4156.0], [46.0, 4527.0], [49.0, 4851.0], [3.0, 4360.0], [50.0, 5572.0], [53.0, 5268.0], [52.0, 4144.0], [74.0, 4063.0], [5.0, 5201.0], [91.0, 5623.0], [115.0, 3909.0], [139.0, 4949.0], [9.0, 4980.0], [10.0, 4293.5], [14.0, 5975.5], [15.0, 4223.0], [1.0, 4675.0], [19.0, 3551.0], [21.0, 2232.0], [22.0, 1785.5], [23.0, 2328.0], [24.0, 652.0], [25.0, 2561.0], [27.0, 2801.0], [28.0, 1088.0], [29.0, 1706.0], [30.0, 929.0], [31.0, 3099.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 139.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 538.0, "minX": 1.0, "maxY": 5975.5, "series": [{"data": [[4.0, 573.5], [8.0, 556.0], [18.0, 538.0], [19.0, 566.0], [24.0, 586.0], [14.0, 540.0], [30.0, 620.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 1486.5], [33.0, 2203.5], [2.0, 4320.0], [34.0, 2081.5], [37.0, 2252.0], [36.0, 3398.0], [39.0, 4120.0], [41.0, 3017.5], [40.0, 4002.0], [43.0, 4517.0], [44.0, 4156.0], [46.0, 4527.0], [49.0, 4851.0], [3.0, 4360.0], [50.0, 5572.0], [53.0, 5268.0], [52.0, 4144.0], [74.0, 4063.0], [5.0, 5201.0], [91.0, 5623.0], [115.0, 3909.0], [139.0, 4949.0], [9.0, 4980.0], [10.0, 4293.5], [14.0, 5975.5], [15.0, 4223.0], [1.0, 4675.0], [19.0, 3551.0], [21.0, 2232.0], [22.0, 1785.5], [23.0, 2328.0], [24.0, 652.0], [25.0, 2561.0], [27.0, 2801.0], [28.0, 1088.0], [29.0, 1706.0], [30.0, 929.0], [31.0, 3099.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 139.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.633333333333333, "minX": 1.78906218E12, "maxY": 24.933333333333334, "series": [{"data": [[1.78906218E12, 16.633333333333333], [1.78906224E12, 24.933333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906224E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.15, "minX": 1.78906218E12, "maxY": 25.25, "series": [{"data": [[1.78906218E12, 15.166666666666666], [1.78906224E12, 25.25]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78906224E12, 1.15]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78906224E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.65, "minX": 1.78906218E12, "maxY": 26.4, "series": [{"data": [[1.78906218E12, 1.65]], "isOverall": false, "label": "GET / config=3-success", "isController": false}, {"data": [[1.78906218E12, 13.516666666666667], [1.78906224E12, 26.4]], "isOverall": false, "label": "GET / config=3-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906224E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.65, "minX": 1.78906218E12, "maxY": 26.4, "series": [{"data": [[1.78906218E12, 1.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78906218E12, 13.516666666666667], [1.78906224E12, 26.4]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78906224E12, "title": "Total Transactions Per Second"}},
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

