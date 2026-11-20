/* Countdown timer (date comes from config.js). */
var KD="០១២៣៤៥៦៧៨៩";function kh(n){return String(n).replace(/\d/g,function(d){return KD[d]})}
var TG=new Date(WEDDING_DATE);
var UN={km:["ថ្ងៃ","ម៉ោង","នាទី","វិនាទី"],en:["Days","Hours","Minutes","Seconds"]};
function num(n){return L==="km"?kh(n):String(n)}
var cells=null,spans=null,last=[];
function tick(){var d=TG-new Date(),el=document.getElementById("cd");if(d<=0){el.innerHTML="<div style='min-width:0;padding:8px 16px'><b style='font-size:15px'>"+(L==="en"?"Our wedding day is here!":"ថ្ងៃមង្គលការមកដល់ហើយ")+"</b></div>";return}
var s=Math.floor(d/1000),v=[Math.floor(s/86400),Math.floor(s%86400/3600),Math.floor(s%3600/60),s%60];
if(!cells){el.innerHTML=v.map(function(){return "<div><b></b><span></span></div>"}).join("");cells=el.querySelectorAll("b");spans=el.querySelectorAll("span")}
v.forEach(function(a,i){if(last[i]!==a){cells[i].textContent=num(a);if(last[i]!==undefined){cells[i].classList.remove("fl");void cells[i].offsetWidth;cells[i].classList.add("fl")}last[i]=a}spans[i].textContent=UN[L][i]})}
tick();setInterval(tick,1000);
var io2=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io2.unobserve(x.target)}})},{root:document.querySelector(".card"),threshold:.25});
document.querySelectorAll(".sched>div").forEach(function(e,i){e.style.transitionDelay=(i%2?0:.05)+"s";io2.observe(e)});
function celebrate(){var c=document.createElement("canvas");c.style.cssText="position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:98";document.body.appendChild(c);var w=c.width=innerWidth,h=c.height=innerHeight,x=c.getContext("2d"),cols=["#f2d27a","#d9a93f","#9a3047","#ffffff","#7a1f33"],p=[],t=0;
for(var i=0;i<150;i++)p.push({x:w/2,y:h*.4,vx:(Math.random()-.5)*16,vy:-Math.random()*14-3,s:5+Math.random()*6,r:Math.random()*6,vr:(Math.random()-.5)*.4,c:cols[i%5]});
(function f(){x.clearRect(0,0,w,h);p.forEach(function(q){q.vy+=.35;q.x+=q.vx;q.y+=q.vy;q.r+=q.vr;x.save();x.translate(q.x,q.y);x.rotate(q.r);x.fillStyle=q.c;x.fillRect(-q.s/2,-q.s/4,q.s,q.s/2);x.restore()});if(++t<180)requestAnimationFrame(f);else c.remove()})()}
