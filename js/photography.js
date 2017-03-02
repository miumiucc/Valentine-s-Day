// JavaScript Document
 
window.onload=function(){
	var oDiv=document.getElementById('box');
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var oLi=oUl.getElementsByTagName('li');
	var currIndex=0;
	for(var i=0;i<oLi.length;i++){
		oLi[i].getElementsByTagName('img')[0].index=i;
		oLi[i].getElementsByTagName('img')[0].onmouseover=function(){
			currIndex++;
			for(var j=0;j<oLi.length;j++){
				oLi[j].getElementsByTagName('img')[0].style.position='absolute';
				oLi[j].getElementsByTagName('img')[0].style.left=(j%3)*140+'px';
				oLi[j].getElementsByTagName('img')[0].style.top=Math.floor(j/3)*140+'px';
				}
			this.style.position='absolute';
			this.style.left=(this.index%3)*140-55+'px';
			this.style.top=Math.floor(this.index/3)*140-55+'px';
			this.style.width='250px';
			this.style.zIndex=currIndex;
			
		}
		oLi[i].getElementsByTagName('img')[0].onmouseout=function(){
			this.style.left=(this.index%3)*140+'px';
			this.style.top=Math.floor(this.index/3)*140+'px';
			this.style.width='140px';
		}
	}
}