/**
 * 获取宣讲会信息并调用渲染函数
 * @return {string} talkInfo
 */
function setTalkInfor () {
	// talkInfor 保存当前省份的所有宣讲会信息
	var totalTalkInfor = [];

	if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
	    xmlhttp = new XMLHttpRequest();
	} else {
	    // code for IE6, IE5
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	// 默认必须先请求第一页
	var currentPage = 1;
	var url = "https://javaapi.changxiaoyuan.com/ht/infor/getTalkInfor.action?province=xa&pageNum=" + currentPage;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
    	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

    		// 获取到所请求的页面宣讲会信息并 JSON 化
	    	var currentTalkInfor = xmlhttp.responseText;
	    	var currentTalk = JSON.parse(currentTalkInfor);
		    // 获取到总页面数 totalPageNum
		    var totalPageNum = currentTalk.totalPageNum;
		    // 将当前页面的宣讲会列表和个数传递到 addTalkInfor
		    addTalkInfor(currentTalk);

		    // 判断是否进行下一个页面的请求
		    if (currentPage < totalPageNum) {
		    	currentPage++;
		    	url = "https://javaapi.changxiaoyuan.com/ht/infor/getTalkInfor.action?province=xa&pageNum=" + currentPage;
				xmlhttp.open("GET", url, true);
			    xmlhttp.send();
		    } else {
		    	removeChildByClassName("xjhItemTeamWrap", 0, "xmlLoading", 0);
		    	console.log(currentPage + " 个页面资源获取成功");
		    	renderTalkInfor(totalTalkInfor);
		    	initDetailPage(totalTalkInfor);
		    }
  		}
  	}

  	function addTalkInfor (currentInforJSON) {
  		totalTalkInfor.push(currentInforJSON);
  	}
}

/**
 * 渲染宣讲会信息
 * @param {Object} totalTalkInfor
 */
function renderTalkInfor (totalTalkInfor) {
	var totalPageNum = totalTalkInfor.length;
	var totalTalkNum = 0;
    var parentNode = document.getElementsByClassName("xjhItemTeamWrap")[0];
    var dateWrapNum = 0;

 	for (var i = 0; i < totalPageNum; i++) {
		for (var j = 0; j < totalTalkInfor[i].rows.length; j++) {
			var currentTalk = totalTalkInfor[i].rows[j];
			var perTalk = document.createElement("div");
			var dateWrap = document.createElement("div");

			dateWrap.setAttribute("class", "xjhItemTeamDateWrap");
			dateWrap.innerHTML = "2017-05-24 周三";

			perTalk.innerHTML = "\
				<a class=\"xjhContentPageA\" value=\"#\">\
				    <!-- 某一场宣讲会 -->\
					<div class=\"xjhItemWrap\">\
				    	<div class=\"xjhItemLogoWrap\">\
				    		<img src=\"public/chang-logo.jpeg\">\
				    	</div>\
				    	<div class=\"xjhItemContentWrap\">\
				    		<div class=\"xjhItemCompanyName\">公司名</div>\
				    		<div class=\"xjhItemSchoolInfoWrap\">\
				    			<div class=\"xjhItemSchoolName\">大学名</div>\
				    			<div class=\"xjhItemSchoolAddress\">宣讲地点</div>\
				    		</div>\
				    		<div class=\"xjhItemTimeWrap\">\
				    		    <div class=\"xjhItemWeek\">宣讲时间</div>\
				    			<div class=\"xjhItemTimePoint\">时间状况</div>\
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
			parentNode.appendChild(dateWrap);
			parentNode.appendChild(perTalk);

			var xjhContentPageA = document.getElementsByClassName("xjhContentPageA")[totalTalkNum];
			var xjhItemLogoWrap = document.getElementsByClassName("xjhItemLogoWrap")[totalTalkNum];
	    	var xjhItemCompanyName = document.getElementsByClassName("xjhItemCompanyName")[totalTalkNum];
	    	var xjhItemSchoolName = document.getElementsByClassName("xjhItemSchoolName")[totalTalkNum];
	    	var xjhItemSchoolAddress = document.getElementsByClassName("xjhItemSchoolAddress")[totalTalkNum];
	    	var xjhItemWeek = document.getElementsByClassName("xjhItemWeek")[totalTalkNum];
	    	var xjhItemTimePoint = document.getElementsByClassName("xjhItemTimePoint")[totalTalkNum];

	    	xjhContentPageA.value = totalTalkNum;
	    	xjhItemLogoWrap.children[0].src = "public/chang-logo.jpeg";
	    	xjhItemCompanyName.innerHTML = currentTalk.companyName;
	    	xjhItemSchoolName.innerHTML = currentTalk.schoolName;
	    	// currentTalk.xjhItemSchoolName
	    	xjhItemSchoolAddress.innerHTML = currentTalk.place;
			// currentTalk.xjhItemSchoolAddress
	    	xjhItemWeek.innerHTML = currentTalk.holdTime;
	    	xjhItemTimePoint.innerHTML = "(近期)";

	    	var childIndex = document.getElementsByClassName("xjhItemTeamDateWrap").length - 1;
	    	var xjhItemTeamDateWrap = document.getElementsByClassName("xjhItemTeamDateWrap")[childIndex];
		    xjhItemTeamDateWrap.innerHTML = currentTalk.holdTime.substring(0, 10);

	    	if (totalTalkNum >= 1) {
	    		var xjhItemTeamDateWrapBefore = document.getElementsByClassName("xjhItemTeamDateWrap")[dateWrapNum];
		    	if (xjhItemTeamDateWrap.innerHTML === xjhItemTeamDateWrapBefore.innerHTML) {
		    		removeChildByClassName("xjhItemTeamWrap", 0, "xjhItemTeamDateWrap", childIndex);
		    	} else {
		    		dateWrapNum++;
		    	}
	    	}

	    	totalTalkNum++;
	    }
	}

	console.log(totalTalkNum + " 条宣讲会信息填充成功");
	console.log(dateWrapNum + " 天的信息加载成功");

	var doneWrap = document.createElement("div");
	doneWrap.setAttribute('class', 'loadMore');
	doneWrap.innerHTML = "加载完成，共 " + totalTalkNum + " 条宣讲会信息";
	parentNode.appendChild(doneWrap);
}

/**
 * 删除结点
 * @param {string} parent
 * @param {number} parentIndex
 * @param {string} child
 * @param {number} childIndex
 */
function removeChildByClassName (parent, parentIndex, child, childIndex) {
    var parent = document.getElementsByClassName(parent)[parentIndex];
	var child = document.getElementsByClassName(child)[childIndex];
	parent.removeChild(child);
}

/**
 * 初始化、绑定详情页事件
 */
function initDetailPage (totalTalkInfor) {
	// 获取首页对象
	var mWrapApp = document.getElementsByClassName("mWrapApp")[0];
	// 获取详情页对象
	var xjhContentPageWrap = document.getElementsByClassName('xjhContentPageWrap')[0];
	// 获取控制弹出的所有按钮对象数组
	var xjhContentPageA = document.getElementsByClassName('xjhContentPageA');

	// 保存点击时的首页位置，方便从详情页退出时恢复页面位置
	var homeX;
	var homeY;

	// 获取控制返回的按钮
	var xjhContentPageTurnBack = document.getElementsByClassName('xjhContentPageTurnBack')[0];
	// 绑定点击事件，弹出子页面
	for(var i = 0;i < xjhContentPageA.length; i++){
		xjhContentPageA[i].onclick = function (event) {
			homeX = event.pageX - event.clientX;
			homeY = event.pageY - event.clientY;

		    // 详情页展示到首页 ，首页向左滑动
		    xjhContentPageWrap.style.right = '0%';

		    // 首页在 0.5s 后隐身
		    setTimeout(function () {
				mWrapApp.style.display = 'none';
		    }, 10);

		    renderDetailInfor(totalTalkInfor, this.value);
	    }
	}
	
    // 点击之后返回主页面
    xjhContentPageTurnBack.onclick = function () {
		var xjhContentPageMainContent = document.getElementsByClassName("xjhContentPageMainContent")[0];

		mWrapApp.style.display = 'block';

		window.scroll(homeX, homeY);

		xjhContentPageMainContent.innerHTML = "<center>正在加载请稍后。。。</center>";
		xjhContentPageWrap.style.right = '-100%';
	}
}

/**
 * 渲染详情页
 * @param {Object} totalTalkInfor
 * @param {Number} value
 */
function renderDetailInfor (totalTalkInfor, value) {

	// currentItem 保存找到的当前宣讲会信息
	var currentItem;
	var totalPageNum = totalTalkInfor.length;

	(function () {
		var k = 0;
		for (var i = 0; i < totalPageNum; i++) {
			for (var j = 0; j < totalTalkInfor[i].rows.length; j++) {
				k++;
				if (k === value + 1) {
					currentItem = totalTalkInfor[i].rows[j];
					return;
				}
	        }
	    }
	})();

	getArticle (currentItem.articleUrl);

	var xjhContentPageContentHeaderCompanyName = document.getElementsByClassName("xjhContentPageContentHeaderCompanyName")[0];
	var xjhContentPageContentHeaderTime = document.getElementsByClassName("xjhContentPageContentHeaderTime")[0];
	var xjhContentPageContentDetailInfo_0 = document.getElementsByClassName("xjhContentPageContentDetailInfo")[0];
	var xjhContentPageContentDetailInfo_1 = document.getElementsByClassName("xjhContentPageContentDetailInfo")[1];

	xjhContentPageContentHeaderCompanyName.innerHTML = currentItem.companyName;
	xjhContentPageContentHeaderTime.innerHTML = "宣讲学校：" + currentItem.schoolName;
	xjhContentPageContentDetailInfo_0.innerHTML = "举办时间：" + currentItem.holdTime;
	xjhContentPageContentDetailInfo_1.innerHTML = "举办地点：" + currentItem.place;
}

/**
 * 获取详情页具体内容
 * 
 */
function getArticle (articleUrl) {
	if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
	    xmlhttp = new XMLHttpRequest();
	} else {
	    // code for IE6, IE5
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var xjhContentPageMainContent = document.getElementsByClassName("xjhContentPageMainContent")[0];
			xjhContentPageMainContent.innerHTML = xmlhttp.responseText;
		}
	}

	var url = "https://javaapi.changxiaoyuan.com/ht/infor/getArticle.action?article=" + articleUrl;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

// 对详情页中公司名是否显示进行监听
function showCompanyName () {
    window.onscroll = function () { 
	    var xjhContentPageHeaderTitle = document.getElementsByClassName('xjhContentPageHeaderTitle')[0];
	    var x = document.documentElement.scrollTop || document.body.scrollTop;
	   	
	    if (x >= 150) {
	   	 	xjhContentPageHeaderTitle.style.opacity=1;
	    } else {
	   	    xjhContentPageHeaderTitle.style.opacity=0;
	    }
    }
}

window.onload = function () {
	setTalkInfor();
	showCompanyName();
}

