var btn = document.getElementById("zhaoyang_root_preserve_context_add_btn");
var btn_all = document.getElementById("zhaoyang_root_preserve_context_addall_btn");
var show = document.getElementById("zhaoyang_root_preserve_context_out");
var checkboxarr = show.getElementsByTagName("input");
var l_ul = document.getElementById("zhaoyang_root_preserve_context_l_ul");
var r_ul = document.getElementById("zhaoyang_root_preserve_context_r_ul");
var l_liarr = l_ul.getElementsByTagName("li");
var ischange = true;

var kk = 0;

for (var i = 0; i < l_liarr.length; i++) {
	l_liarr[i].index = i;

	l_liarr[i].onclick = function() {
		kk = this.index;

		this.style.backgroundColor = "#ccc";

	}
}

btn.onclick = function() {
	r_ul.innerHTML += l_liarr[kk].innerHTML + "<br>";
	l_liarr[kk].style.backgroundColor = "#fff";
}

btn_all.onclick = function() {

	r_ul.innerHTML = l_ul.innerHTML;

}

var isshow = true;
l_liarr[3].onclick = function() {
	if (isshow) {
		show.style.display = "block";
		var cpos = new GetObjPos(this);
		var left = cpos.x+400 + "px";
		var top = cpos.y-100 + "px";
		show.style.top = top;
		show.style.left = left;
	} else {
		show.style.display = "none";
	}
	isshow = !isshow;
}





//获取目标的位置信息
function CPos(x, y)
{
	this.x = x;
	this.y = y;
}

function GetObjPos(ATarget)
{
	var target = ATarget;
	var pos = new CPos(target.offsetLeft, target.offsetTop);
	var target = target.offsetParent;
	while (target)
	{
		pos.x += target.offsetLeft;
		pos.y += target.offsetTop;
		target = target.offsetParent
	}
	return pos;
}










