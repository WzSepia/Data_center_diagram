var data2 = [{
		name: '数据中心人员专题库',
		value: [700, 400],
	},
	{
		name: 'OSM',
		value: [100, 200],
	},
	{
		name: '人员专题库',
		value: [100, 500],
	},
	{
		name: '人员专题库2',
		value: [230, 100],
	},
	{
		name: '国家队',
		value: [1000, 300],
	},
	{
		name: '社会专家',
		value: [1000, 100],
	},
	{
		name: '志愿者',
		value: [1000, 200],
	},
	{
		name: '专职队',
		value: [1000, 400],
	},
	{
		name: '主机',
		value: [1000, 600],
	},
	{
		name: '自建',
		value: [600, 600],
	},
	{
		name: '组织机构',
		value: [1000, 500],
	},
];

var option = {
	backgroundColor: '#000cc',
	xAxis: {
		show: false,
		type: 'value',
	},
	yAxis: {
		show: false,
		type: 'value',
	},
	tooltip: {},
	series: [{
			type: 'graph',
			zlevel: 5,

			draggable: false,
			coordinateSystem: 'cartesian2d', //使用二维的直角坐标系（也称笛卡尔坐标系）

			symbol: 'rect',
			symbolOffset: ['15%', 0],

			label: {
				normal: {
					show: true,
				},
			},
			data: data2,
		},

		{
			type: 'lines',
			coordinateSystem: 'cartesian2d',
			animation: false,
			effect: {
				show: true,
				period: 5,
				trailLength: 0.01,
				symbolSize: 20,
				symbol: 'pin',
				loop: true,
				color: 'rgba(55,155,255,1)',
			},
			lineStyle: {
				color: '#fff',
				width: 1,
				curveness: 0.15,
				type: 'dashed',
			},

			data: [{
					coords: [
						[100, 200],
						[700, 400],
					],
					lineStyle: {
						curveness: '-0.15',
					},
				},
				{
					coords: [
						[100, 500],
						[700, 400],
					],
				},
				{
					coords: [
						[400, 400],
						[700, 400],
					],
				},
				{
					coords: [
						[700, 400],
						[1000, 100],
					],
				},
				{
					coords: [
						[700, 400],
						[1000, 200],
					],
				},
				{
					coords: [
						[700, 400],
						[1000, 300],
					],
				},
				{
					coords: [
						[700, 400],
						[1000, 400],
					],
				},
				{
					coords: [
						[700, 400],
						[1000, 500],
					],
				},
				{
					coords: [
						[700, 400],
						[1000, 600],
					],
				},
				{
					coords: [
						[600, 600],
						[700, 400],
					],
				},
			],
		},
	],
};


	let ele = document.querySelector('.jsGraphRule2');
	let myChart = echarts.init(ele);
	myChart.setOption(option);