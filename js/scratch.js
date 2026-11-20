/* Scratch-to-open card. */
(function(){
var SLG=SCRATCH_LOGO;
var sc=document.getElementById("scr"),cv=document.getElementById("cv"),x=cv.getContext("2d",{willReadFrequently:true}),sp=document.getElementById("spk"),sx=sp.getContext("2d"),bar=document.getElementById("lkb"),down=false,n=0,done=false,lx=0,ly=0,LG=new Image(),lgOk=false,pts=[],raf=0;
LG.onload=function(){lgOk=true;if(!n)paint()};LG.src=SLG;
function rr(a){return function(){a=(a*16807)%2147483647;return a/2147483647}}
function paint(){
 var w=cv.width,h=cv.height,i,g=x.createLinearGradient(0,0,w,h);
 x.globalCompositeOperation="source-over";x.globalAlpha=1;x.shadowBlur=0;x.shadowOffsetY=0;x.shadowColor="transparent";
 g.addColorStop(0,"#8f2c43");g.addColorStop(.5,"#ad3d55");g.addColorStop(1,"#4a0f1c");x.fillStyle=g;x.fillRect(0,0,w,h);
 x.strokeStyle="#f2d27a";x.lineWidth=1;x.globalAlpha=.12;
 for(i=-h;i<w;i+=20){x.beginPath();x.moveTo(i,0);x.lineTo(i+h,h);x.moveTo(i+h,0);x.lineTo(i,h);x.stroke()}
 x.globalAlpha=1;
 var gl=x.createRadialGradient(w/2,h*.4,4,w/2,h*.4,w*.62);gl.addColorStop(0,"rgba(255,226,140,.5)");gl.addColorStop(.55,"rgba(255,226,140,.12)");gl.addColorStop(1,"rgba(255,226,140,0)");x.fillStyle=gl;x.fillRect(0,0,w,h);
 var R=rr(7);for(i=0;i<70;i++){var gx=R()*w,gy=R()*h,gs=.6+R()*1.8;x.globalAlpha=.2+R()*.6;x.fillStyle=R()>.5?"#fff3c4":"#f2d27a";x.beginPath();x.arc(gx,gy,gs,0,7);x.fill()}
 x.globalAlpha=1;
 [[9,.85,2],[16,.4,1]].forEach(function(b){var m=b[0],r=(w-2*m)/2;x.beginPath();x.moveTo(m,h-m-12);x.lineTo(m,m+r);x.arc(w/2,m+r,r,Math.PI,0);x.lineTo(w-m,h-m-12);x.quadraticCurveTo(w-m,h-m,w-m-12,h-m);x.lineTo(m+12,h-m);x.quadraticCurveTo(m,h-m,m,h-m-12);x.closePath();x.globalAlpha=b[1];x.lineWidth=b[2];x.strokeStyle="#f2d27a";x.stroke()});
 x.globalAlpha=1;
 if(lgOk){var lw=w*.6,lh=lw*LG.height/LG.width;x.shadowColor="rgba(0,0,0,.5)";x.shadowBlur=16;x.shadowOffsetY=4;x.drawImage(LG,(w-lw)/2,h*.40-lh/2,lw,lh);x.shadowBlur=0;x.shadowOffsetY=0;x.shadowColor="transparent"}
 x.fillStyle="#f2d27a";x.textAlign="center";x.shadowColor="rgba(0,0,0,.45)";x.shadowBlur=6;
 x.font=Math.round(w*.07)+"px Moul,serif";x.fillText("ដុសដើម្បីបើក",w/2,h*.78);
 x.font=Math.round(w*.11)+"px 'Great Vibes',cursive";x.fillText("Scratch to reveal",w/2,h*.87);
 x.shadowBlur=0;x.shadowColor="transparent";
}
function fit(){if(n)return;var r=sc.getBoundingClientRect();cv.width=sp.width=Math.round(r.width);cv.height=sp.height=Math.round(r.height);paint()}
fit();window.addEventListener("load",fit);window.addEventListener("resize",fit);if(document.fonts)document.fonts.ready.then(fit);
function pos(e){var r=cv.getBoundingClientRect();return[e.clientX-r.left,e.clientY-r.top]}
function spark(px,py){for(var k=0;k<3;k++)pts.push({x:px,y:py,vx:(Math.random()-.5)*2.4,vy:-Math.random()*2.2-.4,l:1,s:1.5+Math.random()*2.6});if(!raf)raf=requestAnimationFrame(loop)}
function loop(){sx.clearRect(0,0,sp.width,sp.height);pts=pts.filter(function(p){return p.l>0});
 pts.forEach(function(p){p.x+=p.vx;p.y+=p.vy;p.vy+=.06;p.l-=.03;var s=p.s*1.7;sx.globalAlpha=Math.max(p.l,0);sx.fillStyle="#fff3c4";sx.shadowColor="#f2d27a";sx.shadowBlur=8;
  sx.beginPath();sx.moveTo(p.x,p.y-s);sx.quadraticCurveTo(p.x,p.y,p.x+s,p.y);sx.quadraticCurveTo(p.x,p.y,p.x,p.y+s);sx.quadraticCurveTo(p.x,p.y,p.x-s,p.y);sx.quadraticCurveTo(p.x,p.y,p.x,p.y-s);sx.fill()});
 if(pts.length)raf=requestAnimationFrame(loop);else{raf=0;sx.clearRect(0,0,sp.width,sp.height)}}
function chk(){var d=x.getImageData(0,0,cv.width,cv.height).data,c=0,t=0;for(var i=3;i<d.length;i+=64){t++;if(d[i]<20)c++}var q=c/t;
 if(bar)bar.style.width=Math.min(100,Math.round(q/.38*100))+"%";
 if(q>.38){done=true;window.scrDone=true;if(!mUser)playM();if(bar)bar.style.width="100%";celebrate();setTimeout(function(){window.showIntro&&window.showIntro()},1900);cv.style.opacity=0;cv.style.pointerEvents="none";sc.classList.add("done")}}
cv.addEventListener("pointerdown",function(e){if(done)return;down=true;sc.classList.add("go");cv.setPointerCapture(e.pointerId);var p=pos(e);lx=p[0];ly=p[1];mv(e)});
function mv(e){if(!down||done)return;var p=pos(e);x.globalCompositeOperation="destination-out";x.globalAlpha=1;x.shadowBlur=0;x.lineWidth=52;x.lineCap="round";x.beginPath();x.moveTo(lx,ly);x.lineTo(p[0]+.1,p[1]);x.stroke();lx=p[0];ly=p[1];spark(p[0],p[1]);if(++n%6==0)chk()}
cv.addEventListener("pointermove",mv);window.addEventListener("pointerup",function(){down=false});
})();
