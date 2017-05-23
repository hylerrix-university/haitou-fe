/**
 * Ajax 跨域核心函数
 * @param {string} url - 跨域路由
 * @param {string} cfunc - 具体需要执行的函数
 */

var provinceInfor = "";
var talkInfor = "";
var article = "";

function loadXMLDoc (url, cfunc) {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
	    xmlhttp = new XMLHttpRequest();
	} else {
	    // code for IE6, IE5
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

    xmlhttp.onreadystatechange = cfunc;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

/**
 * 获取所有省信息
 */
function getProvince () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    	provinceInfor = xmlhttp.responseText;
    }
}

/**
 * 获取宣讲会信息
 */
function getTalkInfor () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    	var talkInfor = xmlhttp.responseText;
    	renderTalkInfor(talkInfor);
    }
}

/**
 * 渲染宣讲会信息
 * @param {string} talkInfor
 */
function renderTalkInfor (talkInfor) {
    var talkJSON = JSON.parse(talkInfor);
    var talkNum = talkJSON.rows.length;

    var pn = document.getElementsByClassName("xjhItemTeamWrap")[0];
    var op;

 	for (var i = 0; i < talkNum; i++) {
		op = document.createElement("div");
		op.innerHTML = "\
			<a>\
			    <!-- 某一场宣讲会 -->\
				<div class=\"xjhItemWrap\">\
			    	<div class=\"xjhItemLogoWrap\">\
			    		<img src=\"public/chang-logo.jpeg\">\
			    	</div>\
			    	<div class=\"xjhItemContentWrap\">\
			    		<div class=\"xjhItemCompanyName\">全国中小企业股份转让系统公司</div>\
			    		<div class=\"xjhItemSchoolInfoWrap\">\
			    			<div class=\"xjhItemSchoolName\">西工大</div>\
			    			<div class=\"xjhItemSchoolAddress\">长安校区就业信息发布厅</div>\
			    		</div>\
			    		<div class=\"xjhItemTimeWrap\">\
			    		    <div class=\"xjhItemWeek\">2017-05-17 13:30</div>\
			    			<div class=\"xjhItemTimePoint\">(今天)</div>\
			    		</div>\
			    	</div>\
			    	<div class=\"clear\"></div>\
			    	<div class=\"xjhItemPointImgWrap\">\
			    	</div>\
			    	<div class=\"xjhSaveBtn\">\
			    		<img src=\"\">\
			    	</div>\
			    </div>\
			</a>\
		";
	    pn.appendChild(op);

		var xjhItemLogoWrap = document.getElementsByClassName("xjhItemLogoWrap")[i];
    	var xjhItemCompanyName = document.getElementsByClassName("xjhItemCompanyName")[i];
    	var xjhItemSchoolName = document.getElementsByClassName("xjhItemSchoolName")[i];
    	var xjhItemSchoolAddress = document.getElementsByClassName("xjhItemSchoolAddress")[i];
    	var xjhItemWeek = document.getElementsByClassName("xjhItemWeek")[i];
    	var xjhItemTimePoint = document.getElementsByClassName("xjhItemTimePoint")[i];

    	xjhItemLogoWrap.children[0].src = "public/chang-logo.jpeg";
    	xjhItemCompanyName.innerHTML = talkJSON.rows[i].companyName;
    	xjhItemSchoolName.innerHTML = "西安";
    	// talkJSON.rows[i].xjhItemSchoolName
    	xjhItemSchoolAddress.innerHTML = talkJSON.rows[i].place;
		// talkJSON.rows[i].xjhItemSchoolAddress
    	xjhItemWeek.innerHTML = talkJSON.rows[i].holdTime;
    	xjhItemTimePoint.innerHTML = "(近期)";
	}

	op = document.createElement("div");
	op.setAttribute('class', 'loadMore');
	op.innerHTML = "加载完成";
	pn.appendChild(op);
}

/**
 * 获取宣讲会正文
 */
function getArticle () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    	var myDiv = document.getElementById("myDiv");
    	myDiv.innerHTML = xmlhttp.responseText;
    }
}

window.onload = function () {
	loadXMLDoc("https://javaapi.changxiaoyuan.com/ht/infor/getTalkInfor.action?province=xa&pageNum=1", getTalkInfor);
}