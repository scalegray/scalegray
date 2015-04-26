
scalegrayApp.controller('PerformanceDataController', ['$scope', 'backendHubProxy',
    function ($scope, backendHubProxy) {
      console.log("this runs first?");
        var performanceDataHub = backendHubProxy(backendHubProxy.defaultServer, 'performanceHub');
        console.log(performanceDataHub);
        var entry = [];
        console.log("now returned?");
        $scope.currentRamNumber = 0;
        $scope.realtimeLine = generateLineData();
        $scope.realtimeBar = generateLineData();
        $scope.realtimeArea = generateLineData();
        $scope.options = { thickness: 10, mode: 'gauge', total: 100 };
        $scope.data = [
            { label: 'CPU', value: 78, color: '#d62728', suffix: '%' }
        ];

        $scope.ramGaugeoptions = { thickness: 10, mode: 'gauge', total: 100 };
        $scope.ramGaugeData = [
            { label: 'RAM', value: 68, color: '#1f77b4', suffix: '%' }
        ];
        $scope.currentRamNumber = 68;
        //$scope.realtimeLineFeed = entry;
        console.log("Its done here! - done and over! deal with it")

        performanceDataHub.on('broadcastPerformance', function (data) {
            var timestamp = ((new Date()).getTime() / 1000) | 0;
            var chartEntry = [];
            data.forEach(function (dataItem) {

                switch(dataItem.categoryName) {
                    case 'Processor':
                        $scope.cpuData = dataItem.value;
                        chartEntry.push({ time: timestamp, y: dataItem.value });
                        $scope.data = [
                            { label: 'CPU', value: dataItem.value, color: '#d62728', suffix: '%' }
                        ];
                        break;
                    case 'Memory':
                        $scope.memData = dataItem.value;
                        chartEntry.push({ time: timestamp, y: dataItem.value });
                        $scope.ramGaugeData = [
                            { label: 'RAM', value: dataItem.value, color: '#1f77b4', suffix: '%' }
                        ];
                        $scope.currentRamNumber = dataItem.value;
                        break;
                    case 'Network In':
                        $scope.netInData = dataItem.value.toFixed(2);
                        chartEntry.push({ time: timestamp, y: dataItem.value });
                        break;
                    case 'Network Out':
                        $scope.netOutData = dataItem.value.toFixed(2);
                        chartEntry.push({ time: timestamp, y: dataItem.value });
                        break;
                    case 'Disk Read Bytes/Sec':
                        $scope.diskReaddData = dataItem.value.toFixed(3);
                        chartEntry.push({ time: timestamp, y: dataItem.value });
                        break;
                    case 'Disk Write Bytes/Sec':
                        $scope.diskWriteData = dataItem.value.toFixed(3);
                        chartEntry.push({ time: timestamp, y: dataItem.value });
                        break;
                    default:
                        break;
                    //default code block
                }
            });
            $scope.realtimeLineFeed = chartEntry;
            $scope.realtimeBarFeed = chartEntry;
            $scope.realtimeAreaFeed = chartEntry;

        });

        function generateLineData() {
            var data1 = [{ label: 'Layer 1', values: [] }];
            for (var i = 0; i <= 128; i++) {
                var x = 20 * (i / 128) - 10,
                    y = Math.cos(x) * x;
                data1[0].values.push({ x: x, y: y });
            }
            var data2 = [
                { label: 'Layer 1', values: [] },
                { label: 'Layer 2', values: [] },
                { label: 'Layer 3', values: [] }
            ];
            for (var i = 0; i < 256; i++) {
                var x = 40 * (i / 256) - 20;
                data2[0].values.push({ x: x, y: Math.sin(x) * (x / 4) });
                data2[1].values.push({ x: x, y: Math.cos(x) * (x / Math.PI) });
                data2[2].values.push({ x: x, y: Math.sin(x) * (x / 2) });
            }
            return data2;
        }

        $scope.areaAxes = ['left','right','bottom'];
        $scope.lineAxes = ['right','bottom'];
        $scope.scatterAxes = ['left','right','top','bottom'];
    }
]);
