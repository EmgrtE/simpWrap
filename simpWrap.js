function simpWrap(calc,elem,cont){
	//settings
	var elements=document.querySelectorAll(elem),
		container=document.querySelector(cont),
		elPerPage=calc;
	//remove all old wrappers
	var delWrap=document.querySelectorAll('div.wrapped');
	for(i=0;i<delWrap.length;i++){
		delWrap[i].parentNode.removeChild(delWrap[i]);
	}
	//wrapped elements
	if(elPerPage<1){
		var wrap=document.createElement('div');
		wrap.className='wrapped';
		for(i=0;i<elements.length;i++){
			wrap.appendChild(elements[i]);
		}
		container.appendChild(wrap);
	}else{
		var pages=Math.ceil(elements.length/elPerPage);
		for(i=0;i<pages;i++){
			var res=i*elPerPage,res2=(i+1)*elPerPage;
			//console.log(res,res2);
			var wrap=document.createElement('div');
			wrap.className='wrapped';
			for(a=res;a<res2;a++){
				if(a<elements.length){
					//console.log(elements[a]);
					wrap.appendChild(elements[a]);
				}else{
					false
				}
			}
			container.appendChild(wrap);
		}
	}
};
