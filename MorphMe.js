
//use strict mode
'use strict';

var MorphMe = (function(window,undefined){

function MorphMe(source,target,shape,effect){
this.source = source;
this.target = target;
this.shape = shape;      
this.effect = effect;   
this.morph_title = this.target.querySelector('.morph_title');
this.morph_content = this.target.querySelector('.morph_content');
this.effects = ['linear','bounce','cover'];

if(typeof(shape) == 'undefined'){
    
this.shape = 'rect';    
}

if(typeof(effect) == 'undefined'){
    
this.effect = 'linear';    
}

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
self.target.classList.add('show');
},200);

setTimeout(function(){
    
self.scaleMorphContainer();   

setTimeout(function(){
self.morph_title.classList.add('show');
self.morph_content.classList.add('show');
self.targetCloseContainer.classList.add('show');
},800);

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

var self = this;

this.targetCloseContainer.classList.remove('show');
this.target.style.top = this.sourceOffset.top+'px';    
this.target.style.left = this.sourceOffset.left+'px';
this.target.style.height = this.sourceOffset.height+'px';
this.target.style.width = this.sourceOffset.width+'px';

self.morph_title.classList.remove('show');
self.morph_content.classList.remove('show');

setTimeout(function(){    
self.target.classList.remove('show');    
},800);

}

MorphMe.prototype.changeEffect = function(){
 
 
}


return MorphMe;


})(window);