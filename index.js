!function(){"use strict";function t(t,e,i,n){var a=i-t,r=n-e,s=.79*Math.sqrt(a*a+r*r);if(s<.5)return!1;var o=Math.atan2(r,a)-.53,h=o+Math.PI/2;return t+=s*Math.cos(h),e+=s*Math.sin(h),i=t+s*Math.cos(o),n=e+s*Math.sin(o),[t,e,i,n]}function e(t,e,i,n,a,r){for(var s=e.split(" "),o="",h=0;h<s.length;h++){var c=o+s[h]+" ";t.measureText(c).width>a&&h>0?(t.fillText(o,i,n),o=s[h]+" ",n+=r):o=c}t.fillText(o,i,n)}var i={routes:[[/projects\/?(.*)/,"projects"],[/tag\/(.+)/,"tag"],[/fractal\/?(.*)/,"fractal"],[/^dashboard\/?(.*)/,"dashboard"],[/^cv\/?(.*)/,"cv",["d3"]],[/(.*)/,""]],map:{d3:"//cdnjs.cloudflare.com/ajax/libs/d3/3.4.13/d3.min.js"},loaderStopRoutes:[/^\/blog\//],icons:"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome"},n={"":{name:"Indamix",items:[["About","about"],["Contacts","contacts"],["Projects","projects"],["Apps","apps"]]},about:{name:"About",content:[{size:20,x:190,y:-75,s:"Front End Engineer"},{size:20,x:80,y:45,s:"Startup Co-founder"},{size:20,x:190,y:45,s:"Open-source Contributor"}]},contacts:{name:"Contacts",items:[["Twitter","https://twitter.com/indamix"],["GitHub","https://github.com/Indamix"],["LinkedIn","http://www.linkedin.com/in/indamix"],["Skype","skype:indamix.online?call"]]},apps:{name:"Apps",items:[["Fractal","fractal"],["FrEd","https://indamix.github.io/fred/"]]}},a=function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelector(t)},r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.assign(document.createElement(t),e)},s=function(t,e){return t.parentNode.insertBefore(e,t.nextSibling)},o=function(t){return t.parentNode&&t.parentNode.removeChild(t)},h=function(t){return t.style.display="block"},c=function(t){return t.style.display="none"},u=function(){var t=window._gaq=[];t.push(["_setAccount","UA-3667863-9"]),t.push(["_trackPageview"]);var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"===document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(e,i)},l=function(t){var e=r("link",{href:t+".css",rel:"stylesheet"});return document.head.appendChild(e),e},d=function(t){var e=r("link",{href:f+t,rel:"icon",type:"image/x-icon"});document.head.appendChild(e)},f=location.origin+"/static/",p=function(t,e){var i;return function(){var n=this,a=arguments;clearTimeout(i),i=setTimeout(function(){i=null,t.apply(n,a)},e)}},v=function(t){return setTimeout(t,0)},m=function(){return"ontouchstart"in window||navigator.maxTouchPoints},g=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},w=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),y=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},x=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},b=function(){function t(t,e){var i=[],n=!0,a=!1,r=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){a=!0,r=t}finally{try{!n&&o.return&&o.return()}finally{if(a)throw r}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),k=function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)},C=function(){function t(e,i){g(this,t),this.$=e,this.update(i)}return w(t,[{key:"update",value:function(t){this.$.innerHTML=t}}]),t}(),S=function(){function t(e,i,n){g(this,t),this.generator=e,this.iCtx=i.getContext("2d"),this.oCtx=n.getContext("2d")}return w(t,[{key:"set",value:function(){this.oImgData=this.oCtx.getImageData(0,0,this.oCtx.canvas.width,this.oCtx.canvas.height),this.iWidth=this.iCtx.canvas.width;for(var t=new Array(this.iWidth*this.iCtx.canvas.height),e=t.length;e--;)t[e]=e;var i=new ArrayBuffer(this.oCtx.canvas.width*this.oCtx.canvas.height<<1),n=this.oData=new Uint16Array(i);for(n.width=this.oCtx.canvas.width,n.height=this.oCtx.canvas.height,this.generator(t,n),e=t.length;e--;)t[e]=[];for(e=n.length;e--;){var a=n[e];0!==a&&t[a].push(e)}this.matrix=t}},{key:"render",value:function(){var t,e,i,n,a,r,s=this.iCtx.canvas.width,o=this.iCtx.canvas.height,h=this.iCtx.getImageData(0,0,s,o).data,c=this.oImgData.data,u=this.matrix;for(t=s;t--;)for(e=o;e--;)for(r=u[n=t+e*s],n<<=2,i=0;i<r.length;i++)c[a=r[i]<<2]=h[n],c[a+1]=h[n+1],c[a+2]=h[n+2],c[a+3]=h[n+3];this.oCtx.putImageData(this.oImgData,0,0)}},{key:"reverse",value:function(t){var e=this.oData[t.x+t.y*this.oData.width];return 0===e?(t.x=NaN,t.y=NaN):(t.x=e%this.iWidth,t.y=(e-t.x)/this.iWidth),t}}]),t}(),I=function(){function e(n,a){for(var r,s=0;;){if(!(r=t.apply(null,n)))return;i.apply(this,A(n[0],n[1],n[2],n[3],r[0],r[1],r[2],r[3],a)),s%2&&e([n[0],n[1],r[0],r[1]],a+1),n=r,s++}}function i(t,e,i,r,s,o,h,c){D.set(i,r,t,e,h,c,s,o);var u=a.width,l=256/D.delta|0;l<1&&(l=1);for(var d=0;d<256;d+=l)for(var f=0;f<256;f+=l){D(d,f);var p=(0|D.x)+(0|D.y)*u;a[p]=n[d+256*f]}}var n,a;return function(t,r){D.size(256,256),n=t;var s=(a=r).width>>1,o=a.height>>1,h=128;i(s,o+h,s-h,o,s+h,o,s,o-h),e([s+h,o,s,o-h],0),e([s,o+h,s+h,o],1),e([s-h,o,s,o+h],2),e([s,o-h,s-h,o],3)}},D=function(){var t,e,i,n,a,r,s,o,h,c,u=function u(l,d){d/=e;var f=i+s*(l/=t),p=n+o*l,v=a+h*l,m=r+c*l;u.x=f+(v-f)*d,u.y=p+(m-p)*d};return u.set=function(t,e,l,d,f,p,v,m){i=t,n=e,a=l,r=d,s=f-t,o=p-e,h=v-l,c=m-d,u.delta=Math.sqrt(Math.max(s*s+o*o,h*h+c*c))},u.size=function(i,n){t=i,e=n},u}(),A=function(t,e,i,n,a,r,s,o,h){return 1===(h%=4)?[a,r,t,e,s,o,i,n]:2===h?[s,o,a,r,i,n,t,e]:3===h?[i,n,s,o,t,e,a,r]:[t,e,i,n,a,r,s,o]},T="Helvetica Neue, Helvetica, Arial, sans-serif",M=function(){function t(e,i){g(this,t),this.canvas=e,this.ctx=e.getContext("2d"),this.set(i)}return w(t,[{key:"getData",value:function(){return this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)}},{key:"render",value:function(t){var i,n,a;t?a=this.getQuadrant(i=t.x,n=t.y):(i=n=NaN,a=-1);for(var r,s,o,h,c,u,l,d,f=this.ctx,p=this.items,v=this.getData(),m=v.data,g=0;g<m.length;g+=4){switch(r=(g>>2)%256,s=g-r>>10,o=this.getQuadrant(r,s),h=p&&p[o]?a===o:a===o&&4===o,(c=64-Math.abs(i-r)-Math.abs(n-s)<<1)<0&&(c=0),this.position){case 0:u=r+c,l=255-s>>1,d=c;break;case 1:u=255,l=r>>1,d=s-c;break;case 2:u=c,l=c+255-r>>1,d=s+c;break;case 3:u=r+c,l=s>>1,d=255;break;default:u=r,l=c,d=s-c}h&&(u+=50,l+=50,d+=50),m[g]=u,m[g+1]=l,m[g+2]=d,m[g+3]=255}f.putImageData(v,0,0),f.fillStyle="#fff";var w;if(f.save(),f.rotate(Math.PI/4),this.content)for(g=0;w=this.content[g];g++)f.save(),w.size&&(f.font="500 "+w.size+"px "+T),e(f,w.s,w.x,w.y,50,20),f.restore();return f.restore(),f.save(),f.textAlign="center",f.save(),f.rotate(Math.PI/4),this.hasBackButton&&(f.font="500 24px "+T,f.fillStyle=4===a?"#000":"#fff",f.fillText("BACK",48,9)),f.globalCompositeOperation="overlay",f.font="500 48px "+T,f.fillStyle="#fff",f.fillText(this.name,180,16),f.restore(),p&&(f.font="500 24px "+T,f.fillStyle=0===a?"#000":"#fff",f.fillText(p[0][0],128,25),f.fillStyle=3===a?"#000":"#fff",f.fillText(p[3]?p[3][0]:"",128,245),f.save(),f.rotate(Math.PI/2),f.fillStyle=2===a?"#000":"#fff",f.fillText(p[2]?p[2][0]:"",128,-10),f.fillStyle=1===a?"#000":"#fff",f.fillText(p[1][0],128,-230),f.restore()),f.restore(),this}},{key:"action",value:function(t){var e=this.getQuadrant(t.x,t.y);if(4===e)return location.hash="#/";if(this.items){var i=this.items[e];i&&($.test(i[1])?location.hash="#/"+i[1]:location.href=i[1])}}},{key:"set",value:function(t){if(this.name!==t.name){var e;if(this.items)for(var i=this.items.length;i--;)if(this.items[i][0]===t.name){e=i;break}this.direction=void 0===e?3-this.direction:e,this.position=void 0===e?-1:e,this.items=t.items,this.name=t.name,this.hasBackButton="Indamix"!==t.name,this.content=t.content}return this}},{key:"getQuadrant",value:function(t,e){return t!==t?-1:this.hasBackButton&&Math.abs(t-e)<50&&t+e<120?4:t>e?t+e<256?0:1:t+e<256?2:3}}]),t}(),$=/^[\w-]+$/,j=function(){function t(e){g(this,t),this.ctx=e,this.frame=this.frame.bind(this)}return w(t,[{key:"run",value:function(t,e,i,n,a){this.startImageData=t,this.endImageData=e,this.duration=i,this.direction=n,this._frame=a,this.startTime=+new Date,this.timer=requestAnimationFrame(this.frame),this.isRunning=!0}},{key:"frame",value:function(){var t=(new Date-this.startTime)/this.duration;t>=1?(t=1,this.isRunning=!1):(t*=t,this.timer=requestAnimationFrame(this.frame));var e=this.startImageData.width,i=t*e|0;switch(this.direction){case 0:this.ctx.putImageData(this.startImageData,0,i),this.ctx.putImageData(this.endImageData,0,i-e);break;case 1:this.ctx.putImageData(this.startImageData,-i,0),this.ctx.putImageData(this.endImageData,e-i,0);break;case 2:this.ctx.putImageData(this.startImageData,i,0),this.ctx.putImageData(this.endImageData,i-e,0);break;case 3:this.ctx.putImageData(this.startImageData,0,-i),this.ctx.putImageData(this.endImageData,0,e-i)}this._frame()}}]),t}(),_=function(t){function e(t){g(this,e);var i=x(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,""));i.css=!1,i.title="Indamix",i.sb=[],i.action=function(t,e){t&&(i.cursor.x=t,i.cursor.y=e,i.menu.action(i.shader.reverse(i.cursor)))},i.update=function(t,e){t&&(i.cursor.x=t,i.cursor.y=e,cancelAnimationFrame(i.timer),i.timer=requestAnimationFrame(i.render))},i.render=function(){var t=i.shader.reverse(i.cursor);isNaN(t.x)?!1!==i.actionable&&(i.actionable=!1,i.$.classList.remove("actionable")):!0!==i.actionable&&(i.actionable=!0,i.$.classList.add("actionable")),i.transition.isRunning||(i.menu.render(t),i.shader.render())};var a=i.$canvas=r("canvas",{className:"fullScreen"});t.appendChild(a);var s=i.ratio=window.devicePixelRatio||1;window.innerWidth>1024&&(s=i.ratio=1),i._canvas=a;var o=r("canvas");o.width=256,o.height=256,i.shader=new S(I(),o,i._canvas),i.menu=new M(o,n[""]),i.transition=new j(o.getContext("2d")),i.renderFrame=i.shader.render.bind(i.shader),i.cursor={x:NaN,y:NaN},i.resize(),window.addEventListener("resize",p(i.resize.bind(i),200));var h=function(t){return function(e){t(e.pageX*s,e.pageY*s)}},c=function(t){return function(e){var i=e.changedTouches[0];t(i.screenX*s,i.screenY*s)}};return m()?(a.addEventListener("touchend",c(i.action)),a.addEventListener("touchmove touchstart",c(i.update))):(a.addEventListener("mouseup",h(i.action)),a.addEventListener("mousemove",h(i.update))),i}return y(e,C),w(e,[{key:"i",value:function(t){document.body.classList.add("root"),this.transition.run(this.menu.getData(),this.menu.set(n[t]).render().getData(),500,this.menu.direction,this.renderFrame)}},{key:"s",value:function(){document.body.classList.remove("root")}},{key:"resize",value:function(){var t=window.innerWidth,e=window.innerHeight;this.ratio>1&&(this.$canvas.style.width=t+"px",this.$canvas.style.height=e+"px"),this._canvas.width=t*this.ratio,this._canvas.height=e*this.ratio,this.shader.set(),this.render()}}]),e}(),L=function t(e){var i=this;g(this,t),this.show=function(t){"IMG"===t.target.nodeName&&(i.shown||(i.shown=!0,i.$img=t.target,i.$container.appendChild(i.$veil),s(i.$img,i.$plug),i.$veil.appendChild(i.$img),Object.assign(i.$img.style,N()),setTimeout(i.onShow,100)))},this.onShow=function(){i.$veil.classList.add("show")},this.hide=function(t){t.stopPropagation(),i.shown&&(i.shown=!1,i.$veil.classList.remove("show"),Object.assign(i.$img.style,{width:"",height:""}),s(i.$plug,i.$img),o(i.$plug),setTimeout(i.onHide,400))},this.onHide=function(){o(i.$veil)},this.$container=e,this.$plug=r("div",{className:"plug"}),this.$veil=r("div",{className:"veil"}),this.$container.addEventListener("click",this.show),this.$veil.addEventListener("click",this.hide)},N=function(){var t=window.innerWidth/window.innerHeight,e=t>1.5?1.5*window.innerHeight:window.innerWidth,i=t>1.5?window.innerHeight:window.innerWidth/1.5;return{width:Math.min(e,900)+"px",height:Math.min(i,600)+"px"}},P=function t(e,i){g(this,t),e.innerHTML=E(i),new L(e)},E=function(t){return t.map(O).join("")},O=function(t){return'<div class="panel" id="'+t.name+'">\n    <h2>\n      <a href="'+t.url+'">'+t.t+'</a>\n    </h2>\n    <span class="desc">'+t.desc+'</span>\n    <div class="cf">\n      <img src="'+f+"i/projects/"+t.name+"0."+t.ext+'"/>\n      '+t.list.map(function(t){return"<p>"+t[1]+"</p>"}).join("")+'\n    </div>\n    <div class="cf tags">\n      <img src="'+f+"i/projects/"+t.name+"1."+t.ext+'"/>\n      '+t.tags.map(function(t){return"<span>"+t+"</span>"}).join("")+"\n    </div>\n  </div>"},H=function(){function t(e){g(this,t);for(var i in e)this[i]=e[i];this.init()}return w(t,[{key:"init",value:function(){this.rays=new Array(500);for(var t=this.rays.length;t--;)this.rays[t]=Math.random()*Math.PI*2}},{key:"render",value:function(t,e){var i=Math.random;e=e/4+this.shift;var n=40/Math.abs(e),a=1.2*e+50;n*=n*n*n;for(var r=e;r<a;r++){var s=r*r*r*1e-6,o=this.rays;if(n<1&&(s*=n),!(s<=.05)){t.strokeStyle="hsla("+this.color+",100%,"+(.7*r|0)+"%,"+s+")",t.beginPath();for(var h=o.length;h>=0;h-=2){var c=o[h],u=o[h+1],l=this.x+r*Math.cos(c)*Math.cos(u)+i(),d=this.y+r*Math.sin(c)+i()+r*r/700;t.moveTo(l,d),t.lineTo(l+1,d)}t.stroke()}}}}]),t}(),z=6,R=12,F=[],W=function(){function t(){for(g(this,t),this.top=0,this.width=window.innerWidth,this.height=window.innerHeight,this.$canvas=r("canvas",{id:"fx",width:this.width,height:this.height}),document.body.appendChild(this.$canvas),this.ctx=this.$canvas.getContext("2d"),e=R;e--;)F[e]=e/R*360;this.elms=[];for(var e=z;e--;)for(var i=3;i--;)this.elms.push(new H({x:120+120*e+300*i,y:200+200*Math.random(),shift:70-120*e-40*i,color:F[(e+3*i)%F.length]}));window.addEventListener("resize",this.resize.bind(this)),"ontouchstart"in window?this.render():(window.addEventListener("scroll",this.scrollHandler.bind(this)),this.anim=this.anim.bind(this),this.top=-300,this.anim()),this.render=this.render.bind(this)}return w(t,[{key:"anim",value:function(){this.render(),this.top<0&&(this.top+=-.1*this.top+2,requestAnimationFrame(this.anim))}},{key:"render",value:function(){var t=this.ctx,e=this.top,i=this.elms;t.clearRect(0,0,this.width,this.height);for(var n=i.length;n--;)i[n].render(t,e)}},{key:"scrollHandler",value:function(){this.top=window.scrollY,requestAnimationFrame(this.render)}},{key:"resize",value:function(){this.width=window.innerWidth,this.height=window.innerHeight,this.$canvas.width=this.width,this.$canvas.height=this.height,this.render()}}]),t}(),B=[{name:"real-shadow",t:"Real Shadow",url:"http://indamix.github.io/real-shadow/",ext:"jpg",desc:"Photorealistic Shadows of any shape",list:[["camera","Casts photorealistic shadows of any shape"],["eye","Perfect for eye-catching demos and landing pages"],["code-fork",'<a href="https://github.com/Indamix/real-shadow/stargazers">1000+</a> GitHub Stars, <a href="https://github.com/Indamix/real-shadow/network">100+</a> GitHub Forks'],["puzzle-piece","Behaves as CommonJS or AMD module or jQuery plugin"]],tags:["Open-source","JavaScript","HTML5","CSS3","Desktop"]},{name:"ctrader",t:"cTrader",url:"http://ct.spotware.com/",ext:"png",desc:"Forex Trading Web Application",list:[["tachometer","Rapid and responsive"],["sitemap","Code divided into reusable modules"],["mobile","Available for both desktop and mobile platform"],["globe","Internationalized"]],tags:["JavaScript","OOP","CommonJS","HTML5","CSS3","SASS","SVG","Canvas","WebSocket","localStorage","Polyfills","Desktop","Mobile"]},{name:"rutwit",t:"RuTwit Startup",ach:"Sold",url:"http://rutwit.ru",ext:"jpg",desc:"Realtime Social Service with Geolocation and Media Embeds",list:[["dollar","Sold to Mail.Ru Group (LSE:MAIL) in Dec 2011"],["picture-o","Share images, pictures and music from many services"],["external-link","Import and export to external services"],["map-marker","Find people and messages given the location"]],tags:["JavaScript","HTML5","CSS3","Realtime","Geolocation","Desktop","Mobile","Startup"]},{name:"xdrink",t:"XDrink",url:"http://xdrink.ru",ext:"jpg",desc:"Cocktails Infographics and Recipes Application",list:[["glass","See what cocktails can be made given the ingredients"],["sort-amount-asc","Cocktails are sorted by complexity and strength"]],tags:["JavaScript","HTML5","CSS3","Desktop","Mobile"]}],q=function(t){function e(t){g(this,e);var i=x(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,'<div id="content"></div>'));return i.title="Indamix Projects",i.css=!1,i.sb=["home"].concat(k(B.map(G))),new P(a("#content",i.$),B),i.fx=new W,i}return y(e,C),w(e,[{key:"i",value:function(t){document.body.classList.add("root"),document.body.appendChild(this.fx.$canvas);var e=t?a("#"+t):null,i=e?e.offsetTop-10:0;window.scrollTo(0,i)}},{key:"s",value:function(){o(this.fx.$canvas),document.body.classList.remove("root")}}]),e}(),G=function(t){var e=t.name,i=r("a",{href:"/#/projects/"+e});return i.style.background="url("+f+"/i/projects/"+e+"-thumb.png)",i},J=function(){function t(){g(this,t),this._events={}}return w(t,[{key:"on",value:function(t,e,i,n){"function"==typeof e&&(n=i,i=e,e=void 0);var a=this._events;return(a[t]||(a[t]=[])).push([i,n,e]),this}},{key:"trigger",value:function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];for(var a=this._events,r=a[t]||(a[t]=[]),s=i,o=[],h=0,c=r.length;h<c;++h){var u=r[h][1]||this,l=void 0===r[h][2]?s:s.concat([r[h][2]]);o.push(r[h][0].apply(u,l))}return o}}]),t}(),Q=function(t){function e(t){g(this,e);var i=x(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.onChange=i.onChange.bind(i),window.addEventListener("hashchange",i.onChange,!1),v(i.onChange),i.routes=t,i}return y(e,J),w(e,[{key:"onChange",value:function(){for(var t,e,i=location.hash.substr(2),n=0;n<this.routes.length&&(t=this.routes[n],!(e=i.match(t[0])));++n);e&&this.trigger("route",t.slice(1),e.slice(1))}}]),e}(),X=function(t,e,i){var n=r("script",{src:t,onerror:i,async:""});window.x=function(t){delete window.x,o(n),e(t)},document.head.appendChild(n)},Y=function(t){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};g(this,e);for(var a=x(this,(e.__proto__||Object.getPrototypeOf(e)).call(this)),r=i.loaderStopRoutes.length;r--;)if(i.loaderStopRoutes[0].test(location.pathname))return x(a);return a.constructors=n,a.apps={},a.prevApp=void 0,t.on("route",a.onRoute,a),a.assetPrefix=f+"apps/",a.setTitle=a.setTitle.bind(a),a}return y(e,J),w(e,[{key:"getApp",value:function(t,e){var i=this;this.apps[t]?e(this.apps[t]):this.getConstructor(t,function(n){i.apps[t]=i.createApp(t,n),e(i.apps[t])})}},{key:"createApp",value:function(t,e){var i=new e(r("div",{className:"container"}),r);return!1!==i.css&&(i.css=l(this.assetPrefix+t)),i}},{key:"getConstructor",value:function(t,e){this.constructors[t]?e(this.constructors[t]):this.loadConstructor(t,e)}},{key:"loadConstructor",value:function(t,e){X(this.assetPrefix+t+".js?_="+ +new Date,e,function(){return console.error("Error loading",t)})}},{key:"onRoute",value:function(t,e){var i=this,n=b(t,1)[0];this.getApp(n,function(t){i.onLoad(t,e)})}},{key:"onLoad",value:function(t,e){t!==this.prevApp&&(this.prevApp&&K(this.prevApp),this.prevApp=t,U(t),this.trigger("init",t)),t.i.apply(t,e),"function"==typeof t.title?t.title(this.setTitle):this.setTitle(t.title)}},{key:"setTitle",value:function(t){this.title=t,this.trigger("title",t)}}]),e}(),U=function(t){document.body.appendChild(t.$),t.css&&t.css.removeAttribute("disabled")},K=function(t){t.s(),o(t.$),t.css&&t.css.setAttribute("disabled","disabled")},V=function(t){var e=r("div",{id:"sidebar"}),i=r("div",{className:"panel"});e.appendChild(i);return t.on("init",function(t){[].concat(k(i.children)).forEach(o),[].concat(k(e.children)).filter(function(t){return t!==i}).forEach(o);var n=t.sb||Object.keys(Z),a=void 0;(n.length?h:c)(e);for(var u=0;u<n.length;++u){var l=n[u];"string"==typeof l?i.append(Z[l]):(a||(a=r("div",{className:"panel"}),s(i,a)),a.append(l))}}),e},Z={home:r("a",{href:"/#/",className:"btn fa fa-home"})};new function t(){g(this,t),u(),l(i.icons),d("i/favicon.ico");var e=new Q(i.routes),n=new Y(e,{"":_,projects:q});n.on("title",function(t){document.title=t});var a=V(n);document.body.appendChild(a)}}();
