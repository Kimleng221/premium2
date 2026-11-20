/* Falling petals and butterflies. */
(function(){
 var card=document.getElementById("card"),stage=document.getElementById("stage"),pOn=false,bOn=false;
 var lay=document.createElement("div");lay.className="fxl";lay.setAttribute("aria-hidden","true");
 lay.innerHTML='<svg width="0" height="0" style="position:absolute"><defs><linearGradient id="gdg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff6cf"/><stop offset=".4" stop-color="#f2d27a"/><stop offset=".75" stop-color="#d9a93f"/><stop offset="1" stop-color="#9a6f16"/></linearGradient></defs></svg>';
 document.body.appendChild(lay);
 var F='fill="url(#gdg)" stroke="#9a6f16" stroke-width=".7" stroke-linejoin="round"';
 function rot(n,el){var o="";for(var i=0;i<n;i++)o+=el.replace("ROT",i*360/n);return o}
 var HEART='<path '+F+' d="M12 21.500S3 15.600 3 9.300C3 6.300 5.200 4.500 7.600 4.500c1.800 0 3.400 1 4.400 2.600 1-1.600 2.600-2.600 4.400-2.600 2.400 0 4.600 1.800 4.600 4.800 0 6.300-9 12.200-9 12.200z"/>';
 var FLOWER='<g '+F+'>'+rot(5,'<ellipse cx="12" cy="6.500" rx="3.400" ry="5.300" transform="rotate(ROT 12 12)"/>')+'</g><circle cx="12" cy="12" r="2.600" fill="#fff3c4" stroke="#9a6f16" stroke-width=".7"/>';
 var DAISY='<g '+F+'>'+rot(8,'<ellipse cx="12" cy="6" rx="1.800" ry="5" transform="rotate(ROT 12 12)"/>')+'</g><circle cx="12" cy="12" r="2.200" fill="#fff3c4" stroke="#9a6f16" stroke-width=".7"/>';
 var LEAF='<path '+F+' d="M12 2C19 8.500 19 16 12 22C5 16 5 8.500 12 2z"/><path d="M12 6v12" stroke="#9a6f16" stroke-width=".5" fill="none" opacity=".6"/>';
 var SH=[HEART,FLOWER,HEART,DAISY,LEAF,FLOWER].map(function(b){return '<svg viewBox="0 0 24 24">'+b+'</svg>'});
 function rnd(a,b){return a+Math.random()*(b-a)}
 function petal(){
  if(document.hidden||lay.querySelectorAll(".pt").length>16)return;
  var e=document.createElement("div"),w=innerWidth,h=innerHeight,x=rnd(-10,w-10),sw=rnd(20,60),sz=rnd(14,26),d=rnd(7000,12000),r=rnd(-80,80);
  e.className="pt";e.innerHTML=SH[Math.floor(Math.random()*SH.length)];e.style.width=e.style.height=sz+"px";lay.appendChild(e);
  var a=e.animate([
   {transform:"translate("+x+"px,-40px) rotate("+r+"deg)",opacity:0},
   {transform:"translate("+(x+sw*.5)+"px,"+(h*.1)+"px) rotate("+(r+60)+"deg)",opacity:.95,offset:.08},
   {transform:"translate("+(x-sw)+"px,"+(h*.5)+"px) rotate("+(r+180)+"deg)",opacity:.95,offset:.5},
   {transform:"translate("+(x+sw)+"px,"+(h*.9)+"px) rotate("+(r+300)+"deg)",opacity:.9,offset:.9},
   {transform:"translate("+x+"px,"+(h+30)+"px) rotate("+(r+360)+"deg)",opacity:0}
  ],{duration:d,easing:"linear"});
  a.onfinish=function(){e.remove()};
 }
 var BC=[["#f2d27a","#d9a93f"],["#ff8fab","#e85d8a"],["#fff3c4","#d9a93f"]];
 function bfSvg(c){
  var wing='<path d="M24 20C14 3 1 5 3 18c1 8 11 10 21 4z" fill="'+c[0]+'" stroke="'+c[1]+'" stroke-width="1.2"/><path d="M24 22C16 28 7 36 13 38c6 1 11-8 11-14z" fill="'+c[1]+'" opacity=".85"/><circle cx="12" cy="14" r="2.6" fill="#fff" opacity=".7"/>';
  return '<svg viewBox="0 0 48 40"><g class="wg">'+wing+'</g><g transform="translate(48,0) scale(-1,1)"><g class="wg">'+wing+'</g></g><ellipse cx="24" cy="21" rx="1.8" ry="9" fill="#4a0f1c"/><path d="M23 12q-4-7-7-8M25 12q4-7 7-8" stroke="#4a0f1c" stroke-width="1" fill="none"/></svg>';
 }
 function butterfly(i){
  var w=innerWidth,h=innerHeight,e=document.createElement("div");e.className="bf";e.innerHTML=bfSvg(BC[i%BC.length]);lay.appendChild(e);
  var fromL=i%2===0,x0=fromL?-70:w+70,x1=fromL?w+70:-70,y0=rnd(h*.55,h*.85),y1=rnd(-90,h*.12),ph=rnd(0,6),amp=rnd(.12,.2),n=14,k=[],px,py,sc=rnd(.8,1.15);
  for(var j=0;j<=n;j++){
   var t=j/n,x=x0+(x1-x0)*t+Math.sin(t*9+ph)*w*.05*(1-t*.3),y=y0+(y1-y0)*t+Math.sin(t*Math.PI*3+ph)*h*amp*(1-t*.4);
   var ang=0;if(j>0){ang=Math.atan2(x-px,-(y-py))*180/Math.PI;ang=Math.max(-70,Math.min(70,ang))}
   k.push({transform:"translate("+x+"px,"+y+"px) rotate("+ang+"deg) scale("+sc+")",offset:t});px=x;py=y;
  }
  k[0].transform=k[0].transform.replace(/rotate\([^)]*\)/,k[1].transform.match(/rotate\([^)]*\)/)[0]);
  var a=e.animate(k,{duration:rnd(8000,9500),delay:i*900,easing:"ease-in-out",fill:"both"});
  a.onfinish=function(){e.remove()};
 }
 function petalsOn(){if(pOn)return;pOn=true;setTimeout(function(){petal();setInterval(petal,650)},1200)}
 function bfOn(){if(bOn)return;bOn=true;for(var i=0;i<3;i++)butterfly(i)}
 if(stage.classList.contains("open"))petalsOn();
 else new MutationObserver(function(m,o){if(stage.classList.contains("open")){o.disconnect();petalsOn()}}).observe(stage,{attributes:true,attributeFilter:["class"]});
 if(!card.classList.contains("lock"))bfOn();
 else new MutationObserver(function(m,o){if(!card.classList.contains("lock")){o.disconnect();bfOn()}}).observe(card,{attributes:true,attributeFilter:["class"]});
})();
