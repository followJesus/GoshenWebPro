var json = {
	"arr" : [ {
		"number" : "",
		"curriculum" : "茶事服务",
		"gogo" : "2014-12-26",
		"stopschool" : "2015-12-31",
		"quality" : "必修课",
		"credit" : "0",
		"scale" : "0",
	}, {
		"number" : "",
		"curriculum" : "茶事服务",
		"gogo" : "2014-12-26",
		"stopschool" : "2015-12-31",
		"quality" : "必修课",
		"credit" : "0",
		"scale" : "0",
	}, {
		"number" : "",
		"curriculum" : "茶事服务",
		"gogo" : "2014-12-26",
		"stopschool" : "2015-12-31",
		"quality" : "必修课",
		"credit" : "0",
		"scale" : "0",
	}
	]
};
var center_biao = document.getElementById("center_biao");
var flexArr = [ 0.5, 3, 1, 1, 1, 1, 1, 1,1 ];
for (var i = 0; i < json.arr.length; i++) {
	var ul = document.createElement("ul");
	var allDate = [ json.arr[i].number + (i + 1), json.arr[i].curriculum,
			json.arr[i].gogo, json.arr[i].stopschool, json.arr[i].quality,
			json.arr[i].credit, json.arr[i].scale,"<input id=\"li_but\" type=\"button\"value=\"删除\">" ]
	for (var j = 0; j < allDate.length; j++) {
		var li = document.createElement("li");
		li.style.flex = flexArr[j];
		li.innerHTML = allDate[j];
		ul.appendChild(li);
	}
	center_biao.appendChild(ul);
}

var json2 = {
	"arr" : [ {
		"number" : "",
		"curriculum" : "茶事服务",
		"gogo" : "2014-12-26",
		"stopschool" : "2015-12-31",
		"quality" : "必修课",
		"credit" : "0",
		"scale" : "0",
	}, {
		"number" : "",
		"curriculum" : "茶事服务",
		"gogo" : "2014-12-26",
		"stopschool" : "2015-12-31",
		"quality" : "必修课",
		"credit" : "0",
		"scale" : "0",
	}, {
		"number" : "",
		"curriculum" : "茶事服务",
		"gogo" : "2014-12-26",
		"stopschool" : "2015-12-31",
		"quality" : "必修课",
		"credit" : "0",
		"scale" : "0",
	}, {
		"number" : "",
		"curriculum" : "茶事服务",
		"gogo" : "2014-12-26",
		"stopschool" : "2015-12-31",
		"quality" : "必修课",
		"credit" : "0",
		"scale" : "0",
	}, {
		"number" : "",
		"curriculum" : "茶事服务",
		"gogo" : "2014-12-26",
		"stopschool" : "2015-12-31",
		"quality" : "必修课",
		"credit" : "0",
		"scale" : "0",
	}


	]
};
var xia_biao = document.getElementById("xia_biao");
var flexArr = [ 0.5, 3, 1, 1, 1, 1, 1, 1 ];
for (var i = 0; i < json2.arr.length; i++) {
	var ul = document.createElement("ul");
	var allDate = [ json2.arr[i].number + (i + 1), json2.arr[i].curriculum,
			json2.arr[i].gogo, json2.arr[i].stopschool,
			json2.arr[i].quality, json2.arr[i].credit, json2.arr[i].scale,"<input id=\"li_but\" type=\"button\"value=\"添加\">"]
	for (var j = 0; j < allDate.length; j++) {
		var li = document.createElement("li");
		li.style.flex = flexArr[j];
		li.innerHTML = allDate[j];
		ul.appendChild(li);
	}
	xia_biao.appendChild(ul);
}
