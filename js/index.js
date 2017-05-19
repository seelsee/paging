var json = {
	title:[
		'效果1',
		'效果2',
		'效果3',
		'效果4',
		'效果5',
		'效果6',
		'效果7',
		'效果8',
		'效果9',
		'效果10',
		'效果11',
		'效果12',
		'效果13',
		'效果14',
		'效果15',
		'效果16',
		'效果17',
		'效果18',
		'效果19',
		'效果20',
		'效果21',
		'效果22',
		'效果23',
		'效果24',
		'效果25',
		'效果26',
		'效果27',
		'效果28',
		'效果29',
		'效果30',
		'效果31',
		'效果32',
		'效果33',
		'效果34',
		'效果35',
		'效果36',
		'效果37',
		'效果38',
		'效果39',
		'效果40',
		'效果41',
		'效果42',
		'效果43',
		'效果44',
		'效果45',
		'效果46',
		'效果47',
		'效果48',
		'效果49',
		'效果50',
		'效果51',
		'效果52',
		'效果53',
		'效果54',
		'效果55',
		'效果56',
		'效果57',
		'效果58',
		'效果59',
		'效果60',
		'效果61',
		'效果62',
		'效果63',
		'效果64',
		'效果65',
		'效果66',
		'效果67',
		'效果68',
		'效果69',
		'效果70',
		'效果71',
		'效果72',
		'效果73',
		'效果74',
		'效果75',
		'效果76',
		'效果77',
		'效果78',
		'效果79',
		'效果80',
		'效果81',
		'效果82',
		'效果83',
		'效果84',
		'效果85',
		'效果86',
		'效果87',
		'效果88',
		'效果89',
		'效果90',
		'效果91',
		'效果92',
		'效果93',
		'效果94'
	]
};
// var arr = [];
page({
	id:'div1',
	nowNum: 4,
	allNum:Math.ceil(json.title.length/10),
	//页面显示的回调函数
	callBack: function(now,all) { 
		var num = now * 10 < json.title.length ? 10 : json.title.length - (now - 1) * 10; 
		var oUl = document.getElementById('ul1');
		var aLi = oUl.getElementsByTagName('li');
		if (oUl.innerHTML == '') {
			for (var i = 0; i < num; i++) {
				var oLi = document.createElement('li');
				oLi.innerHTML = json.title[(now - 1) * 10 + i];
				oUl.appendChild(oLi);
			}
			//li改成绝对定位；
			// for (var i = 0; i < aLi.length; i++) {
			// 	arr.push([aLi[i].offsetLeft,aLi[i].offsetTop])
			// }
			// for (var i = 0; i < aLi.length; i++) {
			// 	aLi[i].style.position = 'absolute';
			// 	aLi[i].style.left = arr[i][0] + 'px';
			// 	aLi[i].style.top = arr[i][1] + 'px';
			// }
		} else {
			for (var i = 0; i < num; i++) {
				aLi[i].innerHTML = json.title[(now - 1) * 10 + i];
				//最后的那一页不知道怎么去除标签了.所以还是显示的10个;
			}
		}
	}

});


function page(opt) {
	if(!opt.id){
		return false;
	}
	// var obj = document.querySelector('#opt.id');
	var obj = document.getElementById(opt.id);
	// console.log(obj);
	var nowNum = opt.nowNum || 1;
	var allNum = opt.allNum || 5;
	var callBack = opt.callBack || function() {

	}
	//首页
	if (nowNum>=4 && allNum >=6) {
		var oA = document.createElement('a');
		oA.href = '#1';
		oA.innerHTML = '首页';
		obj.appendChild(oA);
	}
	//上一页
	if (nowNum >= 2) {
		var oA = document.createElement('a');
		oA.href = '#' + (nowNum - 1);
		oA.innerHTML = '上一页';
		obj.appendChild(oA);

	}
	if (allNum<=5) {
		//当前数据的页数小于5页;
		for (var i = 1; i <= allNum; i++) {
			var oA = document.createElement('a');
			oA.href = '#' + i;
			if(nowNum == i) {
				oA.innerHTML = i;
			} else {
				oA.innerHTML = '['+i+']';
			}
			
			obj.appendChild(oA);
		}
	} else {
		for (var i = 1; i <= 5; i++) {
			var oA = document.createElement('a');
			//处理当前页为1,2;
			if(nowNum == 1 || nowNum == 2) {
				oA.href = '#' + i;
				if (nowNum == i) {
					oA.innerHTML = i;
				} else {
					oA.innerHTML = '['+i+']';
				}	
			} else if ((allNum - nowNum) == 0|| (allNum - nowNum) == 1) {
				//处理最后两页
				oA.href = '#' + (allNum - 5 + i);
				if ((allNum - nowNum) == 0 && i == 5) {
					//最后一项
					oA.innerHTML = (allNum - 5 + i);
				} else if (allNum - nowNum == 1 && i == 4) {
					//倒数第二页
					oA.innerHTML = (allNum - 5 +i);
				}
				else {
					oA.innerHTML = '['+(allNum - 5 +i)+']';
				}
			}
			else {
				oA.href = '#' + (nowNum - 3 +i);
				if (i == 3) {
					oA.innerHTML = (nowNum - 3 +i);
				} else {
					oA.innerHTML = '['+(nowNum - 3 +i)+']';
				}
			}			
			obj.appendChild(oA);
		}
	}
	//下一页
	if ((allNum - nowNum) >= 1) {
		var oA1 = document.createElement('a');
		oA1.href = '#' + (nowNum + 1);
		oA1.innerHTML = '下一页';
		obj.appendChild(oA1);
	}
	//尾页
	if ((allNum - nowNum) >= 3 && allNum >=6) {
		oA.href = '#' + allNum;
		oA.innerHTML = '尾页';
		obj.appendChild(oA);
	}
	callBack(nowNum,allNum);
	//添加锚链接
	var aA = obj.getElementsByTagName('a');
	for (var i = 0; i < aA.length; i++) {
		aA[i].onclick = function() {
			var nowNum = parseInt(this.getAttribute('href').substring(1));
			
			obj.innerHTML = '';
			page({
				id: opt.id,
				nowNum: nowNum,
				allNum: allNum,
				callBack: callBack
			});
			return false;//阻止url的#...
		};
	}
}
