var bodu = document.getElementById("bodu");
var content = document.getElementById("content");
var imgClass;
var ulClass;
var onFlex = [ 1.5, 6, 3, 3, 3, 2, 3 ];
var allUlFlex=[2.5,1,1.3,1.3,1.8];
var leftImg = document.getElementById("leftImg");
var rightImg = document.getElementById("rightImg");
var mostLeft = document.getElementById("mostLeft");
var mostright = document.getElementById("mostright");
var index = 0;
var allData = document.getElementById("allData");
var allStu_json = {
	"arr" : [  {
		"name" : "1",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "1",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "1",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "1",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "1",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "1",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "1",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "1",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "1",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "1",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "1",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "1",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "1",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "1",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "1",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "2",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "2",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "2",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "2",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "2",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "2",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "2",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "2",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "2",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "2",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "2",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}, {
		"name" : "2",
		"variable" : "9",
		"beginsTime" : "",
		"endTime" : "",
		"variableDay" : ""
	}]
};
var stuMessage_json = {
	"err" : [ {
		"number" : 1,
		"course" : "茶室服务",
		"beginsTime" : "2014-12-26",
		"endTime" : "2015-12-31",
		"properties" : "必修课",
		"credit" : "0",
		"proportion" : "0"
	}, {
		"number" : 2,
		"course" : "茶室服务",
		"beginsTime" : "2014-12-26",
		"endTime" : "2015-12-31",
		"properties" : "必修课",
		"credit" : "0",
		"proportion" : "0"
	}, {
		"number" : 3,
		"course" : "茶室服务",
		"beginsTime" : "2014-12-26",
		"endTime" : "2015-12-31",
		"properties" : "必修课",
		"credit" : "0",
		"proportion" : "0"
	}, {
		"number" : 4,
		"course" : "茶室服务",
		"beginsTime" : "2014-12-26",
		"endTime" : "2015-12-31",
		"properties" : "必修课",
		"credit" : "0",
		"proportion" : "0"
	} ]
}
addTr(index, allStu_json.arr);
allData.innerHTML="每页20条，共计"+(allStu_json.arr.length-1)+"条数据";
/*点击右图片到最后一页*/
mostright.onclick = function() {
		index = 20;
		removeOnUl(content, "on_ul_cla");
		removeTr();
		addTr(index, allStu_json.arr);
}
/*点击左图片到第一页*/
mostLeft.onclick = function() {
		index = allStu_json.arr.length - 20;
		removeOnUl(content, "on_ul_cla");
		removeTr();
		addTr(index, allStu_json.arr);
}

/*点击左图片翻页*/
leftImg.onclick = function() {
	if (index >= 20) {
		index = index - 20;
		removeOnUl(content, "on_ul_cla");
		removeTr();
		addTr(index, allStu_json.arr);
	}
}
/*点击右图片翻页*/
rightImg.onclick = function() {
	if (index < allStu_json.arr.length - 20) {
		index = index + 20;
		removeOnUl(content, "on_ul_cla");
		removeTr();
		addTr(index, allStu_json.arr);
		
	}
}

/*点击每个ul中的下拉图片*/
function oncApp(imgClass){
	for (var i = 0; i < imgClass.length; i++) {
		imgClass[i].onIndex = i;
		imgClass[i].onclick = function() {
			removeOnUl(content, "on_ul_cla");
			addOnUl(stuMessage_json.err, this);
		}
	}
}

/*生成下拉列表*/
function addOnUl(json, sun) {
	var onArr;
	for (var i = json.length - 1; i >= 0; i--) {
		onArr = [ json[i].number, json[i].course, json[i].beginsTime,
				json[i].endTime, json[i].properties, json[i].credit,
				json[i].credit ];
		setLi(content,ulClass[sun.onIndex],onFlex,onArr);
	}
	onArr = [ "序号", "课程", "开课时间",
				"结课时间","课程性质", "学分",
				"形考比例" ];
	setLi(content,ulClass[sun.onIndex],onFlex,onArr);
}

/*生成数据列表*/
function addTr(ind, json) {
	for (var i = ind; i < json.length; i++) {
		if (i == ind + 20) {
			break;
		}
		var ulArr=[json[i].name,json[i].variable,json[i].beginsTime,json[i].endTime,json[i].variableDay];
		var ul = document.createElement("ul");
		ul.className = "content_ul_cla";
		for(var j = 0;j<ulArr.length;j++){
			if(j==0){
				var li = document.createElement("li");
				li.style.flex = allUlFlex[j];
				li.innerHTML = ulArr[j];
				var img = document.createElement("img");
				img.className = "arrow";
				img.src = "img/arrow.png";
				li.appendChild(img);
				img = document.createElement("img");
				img.className = "file";
				img.src = "img/book.png";
				li.appendChild(img);
				ul.appendChild(li);
			}else{
				li = document.createElement("li");
				li.style.flex = allUlFlex[j];
				li.innerHTML = ulArr[j];
				ul.appendChild(li);
			}
		}
		content.insertBefore(ul, this.nextSibling)
	}
	imgClass = content.getElementsByClassName("arrow");
	ulClass = content.getElementsByClassName("content_ul_cla");
	oncApp(imgClass);
}
/*//创建ulLi方法*/
function setLi(content,sun,flexarr,arr){
	var on_ul;
	on_ul = document.createElement("ul");
	on_ul.className = "on_ul_cla";
	var on_li;
	for (var j = 0; j < arr.length; j++) {
		on_li = document.createElement("li");
		on_li.style.flex = flexarr[j];
		on_li.innerHTML = arr[j];
		on_ul.appendChild(on_li);
	}
	content.insertBefore(on_ul, sun.nextSibling);
}

/*删除下拉列表*/
function removeOnUl(surname, cla) {
	var allOnUl = surname.getElementsByClassName(cla);
	if (allOnUl != null) {
		for (var i = 0; i < allOnUl.length;) {
			if (allOnUl == null) {
				break;
			}
			surname.removeChild(allOnUl[i]);
		}
	}

}
/*点击跳页后删除上一页列表*/
function removeTr() {
	var content_ul = content.getElementsByClassName("content_ul_cla");
	for (var j = 0; j < content_ul.length;) {
		if (content_ul == null) {
			break;
		}
		content.removeChild(content_ul[j]);

	}
}