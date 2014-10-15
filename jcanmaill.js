<!--
//-------------------------------------=================================JQUERY Documnet=================---------------
$(function(){
	$('.fillet').each(function(i){
		$(this).hover(function(){
			$('.popup').eq(i).addClass('popup_hover');
			if ($.browser.msie && ($.browser.version == '6.0') && !$.support.style) {//ie6
				$(this).addClass('fillet_hover');
			}
		}, function(){
			$('.popup').eq(i).removeClass('popup_hover');
			if ($.browser.msie && ($.browser.version == '6.0') && !$.support.style) {//ie6
				$(this).removeClass('fillet_hover');
			}
		});
	});
	$('#navigation > dl').each(function(i){
		$(this).hover(function(){
			if ($.browser.msie && ($.browser.version == '6.0') && !$.support.style) {//ie6
				$(this).find('dt').addClass('menu_hover');
			}
			$(this).find('dd').css('left', '-' + 95 * i + 'px').show().prev().find('a').addClass('slt_menu_drop');
		}, function(){
			if ($.browser.msie && ($.browser.version == '6.0') && !$.support.style) {//ie6
				$(this).find('dt').removeClass('menu_hover');
			}
			$(this).find('dd').hide().prev().find('a').removeClass('slt_menu_drop');
		});
	});
	$('#i_info_switch > dt > ol > li').each(function(i){
		$(this).mouseover(function(){
			$(this).addClass('hover').siblings().removeClass('hover');
			$('#i_info_switch > dd > ul').eq(i).removeClass('hide').siblings().addClass('hide');
		});
	});
	$('.fillet > .title > .r > .switch').each(function(){
		$(this).find('li').each(function(i){
			$(this).click(function(){
				$(this).addClass('switch_hover').siblings().removeClass('switch_hover');
				var _parent = $(this).parent().parent().parent();
				_parent.next('.item_wrap').find('.item').eq(i).show().siblings().hide();
				var _x = _parent.siblings('.title').find('.r > .switch > li');
				if (_x.length > 0) {
					_x.eq(i).addClass('switch_hover').siblings().removeClass('switch_hover').parent().parent().parent().next('.item_wrap').find('.item').eq(i).show().siblings().hide();
				}
			});
		});
	});
	if ($('.checkup_local').length > 0) {
		var _priceList = $('.pro_img_case > .pro_case > ul > li');
		_priceList.eq(0).addClass('slt');
		_priceList.each(function(){
			$(this).click(function(){
				$(this).addClass('slt').siblings().removeClass('slt');
			});
		});
		
		var _id = window.location.search.replace('?', '');
		var _localList = $('.checkup_local > ul > li');
		if (_id > 0)
			$('#local_' + _id).addClass('slt');
		else
			_localList.eq(0).addClass('slt');
		_localList.each(function(){
			$(this).click(function(){
				$(this).addClass('slt').siblings().removeClass('slt');
			});
		});
	}
	$('.link_popup').each(function(){
		$(this).hover(function(){
			$(this).css('position', 'relative').find('div').css('left', ($(this).width() - 20) + 'px').show();
		}, function(){
			$(this).css('position', 'static').find('div').hide();
		});
	});
});
//-------------------------------------=================================JQUERY Documnet=================---------------
var Tools = {
	$ : function(obj) {
		return document.getElementById(obj);
	},
	isUndefined : function(variable) {
		return typeof variable == 'undefined' ? true : false;
	},
	lastFolderName : window.location.href.toLowerCase().replace(/.+\/(\w+)\/[^\/]*$/, '$1'),
	lastFileName : window.location.href.toLowerCase().replace(/.+\//g, ''),
	isArray : function(o) {
		return Object.prototype.toString.call(o) === '[object Array]';   
	},
	arraySearch : function(ary, x) {
		if (ary.length == 0) return -1;
		for (var i = 0; i < ary.length; i++)
			if (x == ary[i]) return i;
		return -1;
	},
	isIE : function() {
		return -[1,] ? false : true;
	},
	strlen : function(str) {
		return (Tools.isIE() && str.indexOf('\n') != -1) ? str.replace(/\r?\n/g, '_').length : str.length;
	},
	getExt : function(path) {
		return path.lastIndexOf('.') == -1 ? '' : path.substr(path.lastIndexOf('.') + 1, path.length).toLowerCase();
	},
	jumpPage : function(uri) {
		var _p = Tools.$('page').value;
		window.location.href = _p > 1 ? uri.replace('.html', '_' + _p + '.html', uri) : uri;
	},
	getParameter : function(param) {
		var query = window.location.search;
		var iLen = param.length;
		var iStart = query.indexOf(param);
		if (iStart == -1)  return '';
		iStart += iLen + 1;
		var iEnd = query.indexOf('&', iStart);
		if (iEnd == -1) return query.substring(iStart);
		return query.substring(iStart, iEnd);
	},
	switchDiv : function(li, sltClass, switchObj) {
		$(li).each(function(i) {
			$(this).click(function() {
				$(this).addClass(sltClass).siblings().removeClass(sltClass);
				$(switchObj).eq(i).show().siblings(switchObj).hide();
			});
		});
	},
	checkNull : function(id, str) {
		_temp = $('#'+ id).val().trim();
		if (_temp.length == 0) {
			alert('请输入' + str);
			$('#'+ id).focus();
			return false;
		}
		return true;
	},
	checkEmail : function(id, str) {
		_temp = $('#'+ id).val().trim();
		if (!/^[a-z0-9_]{1}[a-z0-9\-_]*(\.[a-z0-9\-_]+)*@[a-z0-9]{1}[a-z0-9\-_]*(\.[a-z0-9\-_]+)*\.[a-z]{2,4}$/.test(_temp)) {
			alert(str + '格式不正确');
			$('#'+ id).focus();
			return false;
		}
		return true;
	},
	comparePwd : function(str1, str2) {
	    if ($('#'+ str1).val().trim() != $('#'+ str2).val().trim()) {
			alert('前后密码不一致');
			$('#'+ str2).focus();
			return false;
	    }
		return true;
	},
	needChecked : function(id, str) {
	    if ($('#'+ id).attr('checked') == false) {
			alert(str);
			$('#'+ id).focus();
			return false;
	    }
		return true;
	},
	checkDigit : function(id, str) {
		_temp = $('#'+ id).val().trim();
		if (!/^[0-9]+$/.test(_temp)) {
			alert(str);
			$('#'+ id).focus();
			return false;
		}
		return true;
	},
	checkFixedLength : function(id, str, value, mode) {
		_temp = $('#'+ id).val().trim();
		if (mode == 'MIN') {
			if(value != null && _temp.length < value) {
				alert(str + ' 长度至少为 ' + value + '位');
				$('#'+ id).focus();
				return false;
			}
		}
		else if (mode == 'MAX') {
			if(value != null && _temp.length > value) {
				alert(str + ' 长度应小于 ' + value + '');
				$('#'+ id).focus();
				return false;
			}
		}
		else {
			if(value != null && _temp.length != value) {
				alert(str + ' 长度应当为 ' + value + '位');
				$('#'+ id).focus();
				return false;
			}
		}
		return true;
	},
	checkTel : function(id, str) {
		_temp = $('#'+ id).val().trim();
		if(/^[0-9\-,]+$/.test(_temp)) {
			return true;
		}
		else {
			alert(str + ' 格式不正确 ');
			$('#'+ id).focus();
			return false;
		}
	},
	checkMobile : function(id, str) {
		_temp = $('#'+ id).val().trim();
		if(/^1[35]\d{9}$/.test(_temp)) {
			return true;
		}
		else {
			alert(str + ' 格式不正确 ');
			$('#'+ id).focus();
			return false;
		}
	},
    checkUpLoadFile : function(obj, fileType, bool) {
	    var o = Tools.$(obj);
	    if (o.value.length > 0) {
		    var tempType = o.value.substring(o.value.lastIndexOf('.'), o.value.length);
		    if (fileType.toLowerCase().indexOf(tempType.toLowerCase()) == -1) {
			    alert('上传格式不对，请重新选择');
			    return false;
		    }
	    }
	    else {
		    if (!bool) {
		        alert('请选择图片后上传');
		        o.style.background = 'red';
		        return false;
		    }
	    }
	    return true;
    }
};
/*** 删除首尾空格 ***/
String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, '');
}
/*** 统计指定字符出现的次数 ***/
String.prototype.occurs = function(ch) {
	// var re = eval('/[^'+ch+']/g');
	// return this.replace(re, '').length;
	return this.split(ch).length - 1;
}
/*** 检查是否由纯数字组成 ***/
String.prototype.isDigit = function() {
	var s = this.trim();
	return (s.replace(/\d/g, '').length == 0);
}
/*** 检查是否由数字字母和下划线组成 ***/
String.prototype.isAlpha = function() {
	return (this.replace(/[\w]/g, '').length == 0);
}
/*** 检查是否为数字 ***/
String.prototype.isNumber = function() {
	var s = this.trim();
	return (s.search(/^[+-]?[0-9.]*$/) >= 0);
}
/*** 返回字节数 ***/  
String.prototype.lenb = function() {
	return this.replace(/[^\x00-\xff]/g,'**').length;
}
/*** 检查是否包含汉字 ***/
String.prototype.isInChinese = function() {
	return (this.length != this.replace(/[^\x00-\xff]/g,'**').length);
}
/*** 简单的email检查 ***/  
String.prototype.isEmail = function() {
	var strr;
	var mail = this;
	var re = /(\w+@\w+\.\w+)(\.{0,1}\w*)(\.{0,1}\w*)/i;
	re.exec(mail);
	if (RegExp.$3 != '' && RegExp.$3 != '.' && RegExp.$2 != '.')
		strr = RegExp.$1+RegExp.$2+RegExp.$3;
	else
		if (RegExp.$2 != '' && RegExp.$2 != '.')
			strr = RegExp.$1 + RegExp.$2;
		else
			strr = RegExp.$1;
	return (strr == mail);
}
/*** 简单的日期检查，成功返回日期对象 ***/
String.prototype.isDate = function() {
	var p;
	var re1 = /(\d{4})[年./-](\d{1,2})[月./-](\d{1,2})[日]?$/;
	var re2 = /(\d{1,2})[月./-](\d{1,2})[日./-](\d{2})[年]?$/;
	var re3 = /(\d{1,2})[月./-](\d{1,2})[日./-](\d{4})[年]?$/; 
	if(re1.test(this)) {
		p = re1.exec(this);
		return new Date(p[1],p[2],p[3]);
	}
	if(re2.test(this)) {
		p = re2.exec(this);
		return new Date(p[3],p[1],p[2]);
	}
	if(re3.test(this)) {
		p = re3.exec(this);
		return new Date(p[3],p[1],p[2]);
	}
	return false;
}
/*** 检查是否有列表中的字符字符 ***/  
String.prototype.isInList = function(list) {
	var re = eval('/['+list+']/');
	return re.test(this);
}
/*
   前台检测是否有非安全字符 注:提交到数据库后同样要过滤非安全字符
*/
String.prototype.isNotSafe = function() {
	var re = new RegExp(/[';&]/);
	return re.test(this);
}
//jQuery.cookie = function(name, value, options) {
//    if (typeof value != 'undefined') { // name and value given, set cookie
//        options = options || {};
//        if (value === null) {
//            value = '';
//            options.expires = -1;
//        }
//        var expires = '';
//        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
//            var date;
//            if (typeof options.expires == 'number') {
//                date = new Date();
//                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
//            } else {
//                date = options.expires;
//            }
//            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
//        }
//        var path = options.path ? '; path=' + options.path : '';
//        var domain = options.domain ? '; domain=' + options.domain : '';
//        var secure = options.secure ? '; secure' : '';
//        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
//    } else { // only name given, get cookie
//        var cookieValue = null;
//        if (document.cookie && document.cookie != '') {
//            var cookies = document.cookie.split(';');
//            for (var i = 0; i < cookies.length; i++) {
//                var cookie = jQuery.trim(cookies[i]);
//                // Does this cookie string begin with the name we want?
//                if (cookie.substring(0, name.length + 1) == (name + '=')) {
//                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                    break;
//                }
//            }
//        }
//        return cookieValue;
//    }
//};
//-->