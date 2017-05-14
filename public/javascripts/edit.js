var menuLeft = document.getElementById('cbp-spmenu-s1'),
	showLeft = document.getElementById('showLeft'),
	body = document.body;

showLeft.onclick = function() {
	classie.toggle(this, 'active');
	classie.toggle(menuLeft, 'cbp-spmenu-open');
};

$(document).bind('click',function(e){ 
var e = e || window.event; //浏览器兼容性 
var elem = e.target || e.srcElement; 
while (elem) { //循环判断至跟节点，防止点击的是div子元素 
if (elem.id && elem.id=='showLeft') { 
return; 
} 
elem = elem.parentNode; 
} 
if($('#showLeft').attr('class')=='active'){
	classie.toggle(menuLeft, 'cbp-spmenu-open');
	$('#showLeft').removeClass("active");
}


}); 
//图片特效
$(function() {
			
				$(' .thumbnail > div ').each( function() { $(this).hoverdir({
					hoverDelay : 50,
					inverse : true
				}); } );

			});