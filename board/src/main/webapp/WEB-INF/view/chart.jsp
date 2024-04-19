<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<script type="text/javascript"
	src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
	
	

	let dataAry = [ [ 'user', 'count by user' ] ];
	
	let xhtp = new XMLHttpRequest();
	xhtp.open('get', 'chartJson.do');
	xhtp.send();
	xhtp.onload = function() {
		let result = JSON.parse(xhtp.response);
		console.log(xhtp.response); // [{}, {} ...{}]
		
		result.forEach(val =>{
			dataAry.push([val.user_name, val.cnt])
		});
		console.log(dataAry);
		
		google.charts.load("current", {
			packages : [ "corechart" ]
		});
		google.charts.setOnloadCallback(drawChart);
	}

	function drawChart() {

		var data = google.visualization.arrayToDataTable(dataAry);
			
		var options = {
			title : 'My Daily Activities',
		//pieHole: 0.4,
		};

		var chart = new google.visualization.PieChart(document
				.getElementById('donutchart'));
		chart.draw(data, options);
	}
</script>

<div id="donutchart" style="width: 900px; height: 500px;"></div>
