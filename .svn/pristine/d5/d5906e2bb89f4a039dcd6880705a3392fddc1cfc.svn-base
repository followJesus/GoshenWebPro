/**
 * @param(parentID--框架id,childID---子集id)
 * 获取框架内的对象
 */
function getChildID(parentID,childID){
	var element=document.getElementById(parentID).contentWindow.document.getElementById(childID);
	return element;
}
//json数据传输接口:回传也是json格式
function sendJsonData(url,data,callback,method)
{
	if(!method)
	{
	    $.post(url,data,jsonback,"text");
	    return;
	}
	if(method=="get"||method=="GET")
	{
		$.get(url,data,jsonback,"text");
	}else{
		$.post(url,data,jsonback,"text");
	}
	function jsonback(s)
	{
		alert(s);
	   callback(JSON.parse(s));
	}
}
/**全局配置信息**/
var glConfig={};//全局配置对象
glConfig.MSIE="MSIE";
glConfig.Firefox="Firefox";
glConfig.Safari="Safari";
glConfig.Opera="Opera";
glConfig.Chrome="Chrome";
glConfig.m_brower="MSIE";//浏览器类型

getBrowerOS();
//获取浏览器类型
function getBrowerOS()  
{  
   if(navigator.userAgent.indexOf(glConfig.MSIE)>0) {  
        return glConfig.m_brower=glConfig.MSIE;  
   }
   if(navigator.userAgent.indexOf(glConfig.Chrome)>0){  
       return glConfig.m_brower=glConfig.Chrome;  
  }  
   if(navigator.userAgent.indexOf(glConfig.Firefox)>0){
        return glConfig.m_brower=glConfig.Firefox;  
   }  
   if(navigator.userAgent.indexOf(glConfig.Safari)>0) {  
        return glConfig.m_brower=glConfig.Safari;  
   }   
   if(navigator.userAgent.indexOf(glConfig.Opera)>0){  
        return glConfig.m_brower=glConfig.Opera;  
   } 
}


/**扩展方法**/
Array.prototype.remove = function(index) {
	index = parseInt(index);
	if (isNaN(index) || index < 0 || index > this.length) {
		return false;
	}
	for (var i = 0, n = 0; i < this.length; i++) {
		if (this[i] != this[index]) {
			this[n++] = this[i];
		}
	}
	this.length--;
}

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
//返回1或-1

Math.sign=function(n)
{
	if(n>=0)
	{
	    return 1;
	}
	return -1;
}
//获取转义字符过滤器
function getCharFilter(str)
{
	str=str.replace("&","&amp;");
	str=str.replace("<","&lt;");//转义字符
	str=str.replace(">","&gt;");
//	str=str.replace(" ","&nbsp;");
	str=str.replace("/","&quot;");
	str=str.replace("/n","<br/>;");
	return str;
}
//从str字符串中返回标记（完整标记如：<br/>）的全部索引
function getTagIndexs(tagName,str)
{
	var index=str.indexOf(tagName);
	if(index!=-1)
	{
		var indexArr=[];
		var len=tagName.length;
		indexArr.push(index);
		while((index=str.indexOf(tagName,index+len))!=-1)
		{
			indexArr.push(index);
		}
		return indexArr;
	}
	return null;
}
function getDirection(x0,y0,x1,y1)
{
	var t=(x1-x0)*(x1-x0)+(y1-y0)*(y1-y0);
	return Math.sqrt(t);
}
function stringifyJson(obj)
{
	return JSON.stringify(obj);
}
function parseJson(str)
{
	return JSON.parse(str);
}
