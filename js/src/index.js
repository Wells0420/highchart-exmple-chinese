$(document).ready(function() {
	// console.log = {};
	//全局设置
	Highcharts.setOptions({
		//表现语言汉化
		lang:{
			//时间数字
			months 				: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
			shortMonths			: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
			weekdays			: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
			numericSymbols 		: ['千','万','十万','百万','千万','亿'],
			thousandsSep 		: ',',
			decimalPoint		: '.',
			//图像输出
			printButtonTitle	: '打印图表',
			exportButtonTitle	: '导出失量或位图',			
			downloadPNG			: '下载 PNG 位图',
			downloadJPEG		: '下载 JPEG 位图',
			downloadPD			: '下载 PDF 文档',
			downloadSVG			: '下载 SVG 失量图',
			//界面语言
			loading 			: '数据载入中...',
			rangeSelectorFrom	: '选择时间：从',
			rangeSelectorTo		: '到',
			rangeSelectorZoom	: '时间范围'

		}
	});
	// Create the chart
	var chart = new Highcharts.StockChart({
		chart : {
			renderTo : 'chart1',		//(String)选择容器
			type : 'spline',			//(String)图表类型 默认line 可选 spline area areaspline column scatter ohlc candlestick arearange areasplinerange columnrange
			animation: false,			//(Boolean)动画效果
			alignTicks: true,			//(Boolean)对齐刻度
			backgroundColor: '#333',	//(Color)设置背景颜色	默认"#fff"
			borderColor:'#000',			//(Color)设置最外层的边框颜色 默认 "#4572A7".
			borderRadius:3,				//(Number)设置全局的圆角 默认：5
			borderWidth:2,				//(Number)设置最外层边框的宽度 默认 ：0
			className:'divclass',		//(String)给容器设定一个css类 默认：''
			height: null ,				//(Number)设定图表的高度 默认为null则充满容器
			ignoreHiddenSeries:true,	//(Bollean)设置当隐藏或者添加一组新数据到图表时，Y轴坐标是否会更具情况而自动更新，默认为true
			margin:[20,20,20,20],		//(Array)设置图表和绘图区之间的边距,!!!单位为px,顺序为上，右，下，左.如果四个值相同则可以用一个数字代替
			marginBottom:20,			//(Number)设置图表和绘图区域底部的间距,默认为：70
			marginLeft:20,				//(Number)设置图表和绘图区域左边的间距
			marginRight:20,				//(Number)设置图表和绘图区域右边的间距
			marginTop:20,				//(Number)设置图表和绘图区域上边的间距
			panning:true,				//(Boolean)设置鼠标是否可以在绘图区拖动来移动绘图区,!!!当设置zoomType时,该值为false,默认为true
			plotBackgroundColor:{		//(Color || Object)设置绘图区域的背景颜色'#cccccc'或背景渐变
                linearGradient: {x1: 0, y1: 0, x2: 1, y2: 1 },stops: [[0, 'rgb(255, 255, 255)'],[1, 'rgb(200, 200, 255)']]
            },
            plotBackgroundImage:'',		//(String)设置绘图区的背景图片
            plotBorderColor:'red',		//(Color)设置绘图区的边框颜色 默认为"#c0c0c0"
            plotBorderWidth:3,			//(Number)设置绘图区的边框宽度 默认为0
            plotShadow:{color:'red',offsetY:5,offsetX:0,width:10,opacity:0.1},//设置绘图区的box-shadow 默认为false 可以设置true或者一个对象。包括如上属性
            reflow:true,				//(Boolead)设置图表是否会随容器宽度改变而自适应 默认为：true
            selectionMarkerFill : 'rgba(20,20,20,0.2)',//(Color)设定鼠标在绘图区内选择范围的背景颜色 当设置zoomType后才有效果
            spacingBottom:10,			//(Number)底部时间选择区到整个图形地步的下间距 默认为10
            spacingLeft:10,				//(Number)内容区到整个画面区域的左边间距 默认为10
            spacingRight:10,			//(Number)内容区到整个画面区域的右边间距 默认为10
            spacingTop:10,				//(Number)内容区到整个画面区域的上边间距 默认为10
            style:{},					//(CSSobject)Css样式对象 属性为骆驼命名
            width:null,					//(Number)明确指定图表的宽度 默认为null则自动适应容器宽度 否则reflow失效
            zoomType:'xy'			//(String)设置鼠标在绘图区选择时的范围 默认为null则鼠标在绘图区无法拖拽选择但是可以移动绘图区 可选参数'x','y','xy'
			// events:{					//(Function)绑定事件
			// 	addSeries 	: function(){return true},						//添加数据时候触发事件,!!!如果返回false则禁止添加
			// 	click 		: function(e){console.log(e.xAxis[0].value);},	//鼠标单击图表触发事件 参数为事件本身
			// 	load  		: function(e){console.log(e.type);},			//图表加载完成后触发事件
			// 	redraw 		: function(e){console.log(e.type)},				//图表重绘后触发事件
			// 	selection 	: function(e){console.log(e.xAxis[0].max);}		//鼠标在图表上选择区域后触发事件,!!!必须设定zoomType后才有效果	
			// }						
		},
		colors:[],						//(Array)设置数据线的颜色
		credits:{						//选用小标签（右下角连接）
			enable:false,				//(Boolean)是否启用 默认为 true
			href:'http://www.baidu.com',//(String)小标签链接地址
			text:'Isuifang.com',		//(String)小标签显示的文字
			position:{align:'right'},	//(Object)小标签显示位置，属性{align : (string),x:(Number),y:(Number),verticalAlign:(String)}
			style:{fontColor:'red'}		//(CSSObJECT)设置小标签的css
		},
		exporting:{
			enabled:true,
			width:800,
			filename:'chart',

			button:{
				exportBotton:{
					align:'center'
				}
			}
		},
		// lang:{
		// 	rangeSelectorFrom:'asdassssssssssd',
		// 	rangeSelectorTo:'sssssssssssssssssssss',
		// 	rangeSelectorZoom:'asdasssssssssssda'
		// },
		rangeSelector : {
			selected : 1
		},

		title : {
			text : '时间图表测试'
		},
		
		series : [{
			name : '标准',
			data : [2,3,4,5,6,7,8,123,12,312,3,12,123,435,56,23,423,4,234,3,465,3,41,23,1,32,23,12,534,534,645,23,432,9,3,4,5,5,6.7],
			tooltip: {
				valueDecimals: 1
			}
		},{
			type:'area',
			name: '我的',
			data:[3,4,5,6,7,8,9,9,3,2,234,2,34,23,42,34,2,34,34,5,456,4,35,2,3,423,4,123,6]
		}]
	});

	// $('#btn_addSeries').click(function() {
 //        chart.addSeries({
 //        	type: 'column',
 //            name: '他的',
 //            data: [7,6,6,8,567,7,5456,74768,876876,75645,665465,5433,564,6765,8654,7534,654,676,7,5,4,34,456]        
 //        });
    
 //        // $('#button').unbind('click');
 //    });
});
