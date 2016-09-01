var json = {
	"arr" : [ {
		"name" : "刘烨",
		"number" : "121200145",
		"class" : "文法直属",
		"kecheng" : "邓小平理论",
		"longtime" : "0",
		"pinlv" : "0",
		"cishu" : "0",
		"yaodian" : "0",
		"ziyuan" : "0",
		"you" : "0",
		"jing" : "0",
		"wu" : "0"

	}, {
		"name" : "刘烨",
		"number" : "121200145",
		"class" : "文法直属",
		"kecheng" : "邓小平理论",
		"longtime" : "0",
		"pinlv" : "0",
		"cishu" : "0",
		"yaodian" : "0",
		"ziyuan" : "0",
		"you" : "0",
		"jing" : "0",
		"wu" : "0"
	}, {
		"name" : "刘烨",
		"number" : "121200145",
		"class" : "文法直属",
		"kecheng" : "邓小平理论",
		"longtime" : "0",
		"pinlv" : "0",
		"cishu" : "0",
		"yaodian" : "0",
		"ziyuan" : "0",
		"you" : "0",
		"jing" : "0",
		"wu" : "0"
	}, {
		"name" : "刘烨",
		"number" : "121200145",
		"class" : "文法直属",
		"kecheng" : "邓小平理论",
		"longtime" : "0",
		"pinlv" : "0",
		"cishu" : "0",
		"yaodian" : "0",
		"ziyuan" : "0",
		"you" : "0",
		"jing" : "0",
		"wu" : "0"
	}, {
		"name" : "刘烨",
		"number" : "121200145",
		"classes" : "文法直属",
		"kecheng" : "邓小平理论",
		"longtime" : "0",
		"pinlv" : "0",
		"cishu" : "0",
		"yaodian" : "0",
		"ziyuan" : "0",
		"you" : "0",
		"jing" : "0",
		"wu" : "0"
	}, {
		"name" : "刘烨",
		"number" : "121200145",
		"class" : "文法直属",
		"kecheng" : "邓小平理论",
		"longtime" : "0",
		"pinlv" : "0",
		"cishu" : "0",
		"yaodian" : "0",
		"ziyuan" : "0",
		"you" : "0",
		"jing" : "0",
		"wu" : "0"
	}, {
		"name" : "刘烨",
		"number" : "121200145",
		"class" : "文法直属",
		"kecheng" : "邓小平理论",
		"longtime" : "0",
		"pinlv" : "0",
		"cishu" : "0",
		"yaodian" : "0",
		"ziyuan" : "0",
		"you" : "0",
		"jing" : "0",
		"wu" : "0"
	}, {
		"name" : "刘烨",
		"number" : "121200145",
		"class" : "文法直属",
		"kecheng" : "邓小平理论",
		"longtime" : "0",
		"pinlv" : "0",
		"cishu" : "0",
		"yaodian" : "0",
		"ziyuan" : "0",
		"you" : "0",
		"jing" : "0",
		"wu" : "0"
	}, {
		"name" : "刘烨",
		"number" : "121200145",
		"class" : "文法直属",
		"kecheng" : "邓小平理论",
		"longtime" : "0",
		"pinlv" : "0",
		"cishu" : "0",
		"yaodian" : "0",
		"ziyuan" : "0",
		"you" : "0",
		"jing" : "0",
		"wu" : "0"
	}, ]

}
var flexArr = [ 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];
var table = document.getElementById("table");
mosaic(flexArr, table, json.arr);

function mosaic(flexArr, table, json) {
	for (var i = 0; i < json.length; i++) {
		var ul = document.createElement("ul");
		var all = [ json[i].name, json[i].number, json[i].classes,
				json[i].kecheng, json[i].longtime, json[i].pinlv,
				json[i].cishu, json[i].yaodian, json[i].ziyuan, json[i].you,
				json[i].jing, json[i].wu ];
		for (var j = i; j < all.length; j++) {
			var li = document.createElement("li");
			li.style.flex = flexArr[j];
			li.style.innerHTML = all[j];
			ul.appendChild(li);

		}
		table.appendChild(ul);
	}

}
