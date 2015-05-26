

function MorphMe(source,target,shape,effect){
this.source = document.querySelector(source);
this.target = document.querySelector(target);
this.shape = shape;
this.effect = effect;
this.targetCloseContainer = this.target.querySelector('.morph_close_container');
this.init();
}


MorphMe.prototype.init = function(){
    
var self = this;
    
this.source.addEventListener('click',function(){

self.getSourceOffset();
});
}


MorphMe.prototype.getSourceOffset = function(){
this.sourceOffset = this.source.getBoundingClientRect();
this.showMorphContainer();
}

MorphMe.prototype.showMorphContainer = function(){
    
var self = this;
this.target.style.top = this.sourceOffset.top+'px';    
this.target.style.left = this.sourceOffset.left+'px';
this.target.style.height = this.sourceOffset.height+'px';
this.target.style.width = this.sourceOffset.width+'px';

this.sourceBackgroundColor = getComputedStyle(this.source).getPropertyValue('background-color');
this.target.style.backgroundColor = this.sourceBackgroundColor;
this.addMorphControls();

setTimeout(function(){
this.target.classList.add('show');
},200);

setTimeout(function(){
    
self.scaleMorphContainer();   
},600);
}

MorphMe.prototype.scaleMorphContainer = function(){
    

this.target.style.top = 0;    
this.target.style.left = 0;
this.target.style.height = '100%';
this.target.style.width = '100%';    
}

MorphMe.prototype.addMorphControls = function(){
var self = this;
    
this.targetCloseContainer.addEventListener('click',function(){
    
self.closeMorphContainer();
});    

}


MorphMe.prototype.closeMorphContainer = function(){

setTimeout(function(){    
this.target.classList.remove('show');    
},200);

}
