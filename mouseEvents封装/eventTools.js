'use strict';
	window.eventTools={};
	/*封装:
	DOMele是需要绑定的dom对象元素
	mousedown:鼠标按下事件触发时所执行的回调函数
	mousemove:鼠标移动事件触发时所执行的回调函数
	mouseup:鼠标释放事件触发时所执行的回调函数
	*/
	eventTools.mouseEvent=function(DOMele,mousedown,mousemove,mouseup){
		// 获取鼠标的当前坐标
		function getCoo(e){
			if(!DOMele) return;

			var e=arguments[0]||window.event; //获取event对象
			// 获取(当前鼠标的坐标值-元素的偏移位置)
			// pageX,pageY->鼠标在页面上的位置,以页面左侧.上侧为参考点
			// offsetLeft->元素距离左侧的偏移值
			var x=e.pageX-DOMele.offsetLeft;
			var y=e.pageY-DOMele.offsetTop;
			return {
				dx:x,
				dy:y
			}
		};

		//封装	->取到坐标
		//为DOMele绑定mousedown事件
		DOMele.addEventListener('mousedown',function(e){ //回调
			e.point=getCoo(e); //给event添加属性和值
			mousedown&&mousedown.call(this,e)  //事件触发时的回调  this指向绑定事件.前的对象
				
		})
		
		DOMele.addEventListener('mousemove',function(e){ //回调
				e.point=getCoo(e); //给event添加属性和值
				mousemove&&mousemove.call(this,e)
			})
		
		DOMele.addEventListener('mouseup',function(e){ //回调
			e.point=getCoo(e); //给event添加属性和值
			mouseup&&mouseup.call(this,e)
		})
	}
