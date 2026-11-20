/* Main logic: language switch, schedule, wishes/RSVP, music, gallery.
   You normally do not need to edit this file. */
var $=function(i){return document.getElementById(i)};
$("en").textContent=D.english;$("enl").innerHTML=D.englishLine;$("tg").href=D.tg;$("wa").href=D.wa;$("ms").href=D.ms;
$("map").href=D.map||("https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(D.mapQuery));
var ICO=['<svg viewBox="0 0 40 40"><rect pathLength="1" x="7" y="17" width="26" height="17" rx="2"/><rect pathLength="1" x="5" y="12" width="30" height="6" rx="1.5"/><path pathLength="1" d="M20 12v22M20 12c-3-7-10-6-8-2 1 2 5 2 8 2zM20 12c3-7 10-6 8-2-1 2-5 2-8 2z"/></svg>','<svg viewBox="0 0 40 40"><path pathLength="1" d="M7 24h26c0 7-5 11-13 11S7 31 7 24z"/><rect pathLength="1" x="17" y="10" width="6" height="14" rx="1"/><path pathLength="1" d="M20 3c3 2 3 5 0 6-3-1-3-4 0-6zM4 22h6M30 22h6"/></svg>','<svg viewBox="0 0 40 40"><circle pathLength="1" cx="11" cy="30" r="4.5"/><circle pathLength="1" cx="29" cy="30" r="4.5"/><path pathLength="1" d="M14 26.500 31 5M26 26.500 9 5"/></svg>','<svg viewBox="0 0 40 40"><circle pathLength="1" cx="21" cy="21" r="10"/><circle pathLength="1" cx="21" cy="21" r="6"/><path pathLength="1" d="M5 7v10c0 3 4 3 4 0V7M7 7v27M36 7c-4 3-4 11 0 14v13"/></svg>','<svg viewBox="0 0 40 40"><circle pathLength="1" cx="15" cy="26" r="9"/><circle pathLength="1" cx="26" cy="26" r="9"/><path pathLength="1" d="M20 3l4 5-4 5-4-5z"/></svg>','<svg viewBox="0 0 40 40"><path pathLength="1" d="M7 24h26l-3 5H10z"/><path pathLength="1" d="M20 29v4M13 35h14"/><path pathLength="1" d="M20 24c-4-3-4-8 0-12 4 4 4 9 0 12z"/><path pathLength="1" d="M12 24l-2-8M28 24l2-8"/><path pathLength="1" d="M10 13c-1-2 1-3 0-5M30 13c-1-2 1-3 0-5"/></svg>','<svg viewBox="0 0 40 40"><path pathLength="1" d="M20 10c-4 4-4 11 0 15 4-4 4-11 0-15z"/><path pathLength="1" d="M20 25c-6 0-11-4-12-10 5 0 9 3 12 10z"/><path pathLength="1" d="M20 25c6 0 11-4 12-10-5 0-9 3-12 10z"/><path pathLength="1" d="M7 30h26M12 34h16"/></svg>','<svg viewBox="0 0 40 40"><path pathLength="1" d="M7 9h11c0 7-2 11-5.500 11S7 16 7 9z"/><path pathLength="1" d="M12.500 20v11M8 33h9"/><path pathLength="1" d="M22 9h11c0 7-2 11-5.500 11S22 16 22 9z"/><path pathLength="1" d="M27.500 20v11M23 33h9"/><path pathLength="1" d="M8 13h9M23 13h9"/><path pathLength="1" d="M20 2v4M16 4l1.500 2M24 4l-1.500 2"/></svg>'];
var L="km";
function renderSched(l){var S=l==="en"?D.scheduleEn:D.schedule,sc=$("sc");
 if(sc.children.length!==S.length){sc.innerHTML=S.map(function(s,i){return '<div><span class="ico">'+ICO[(D.icons&&D.icons[i]!=null?D.icons[i]:i)%ICO.length]+'</span><span class="vl"></span><span class="tx"><b></b><span></span></span></div>'}).join("")}
 S.forEach(function(s,i){var d=sc.children[i];d.querySelector("b").textContent=s[0];d.querySelector(".tx span").textContent=s[1]})}
var T={
km:{docTitle:"សិរីមង្គលអាពាហ៍ពិពាហ៍ · Wedding Invitation",ttl:"សិរីមង្គលអាពាហ៍ពិពាហ៍",lab:"សូមគោរពអញ្ជើញ",hon:"ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា",sen:"ចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស<br>ក្នុងពិធីរៀបមង្គលការកូនប្រុស កូនស្រីរបស់យើងខ្ញុំ",tagG:"កូនប្រុស · Groom",tagB:"កូនស្រី · Bride",cdt:"រាប់ថយក្រោយទៅថ្ងៃមង្គលការ",prog:"កម្មវិធីពិធី",story:"ដំណើរស្នេហ៍របស់យើង",storyS:"Our Love Story",locT:"ទីតាំងពិធី",mapTap:"ចុចដើម្បីប្រើផែនទី",mapbtn:"ទីតាំងលើផែនទី · Map",foot:"សូមអរគុណ · Thank you",finm:"សូមអរគុណ",finw:"វត្តមានរបស់លោកអ្នក គឺជាកាដូដ៏មានតម្លៃបំផុតសម្រាប់យើងខ្ញុំ",fine:"Your presence is our greatest gift",skip:"រំលង",i1:"សិរីមង្គលអាពាហ៍ពិពាហ៍"},
en:{docTitle:"Wedding Invitation",ttl:"Wedding Celebration",lab:"With great respect, we invite",hon:"Excellencies, Distinguished Guests, Ladies &amp; Gentlemen",sen:"to join us as guests of honour<br>at the wedding ceremony of our son and daughter",tagG:"The Groom",tagB:"The Bride",cdt:"Counting down to our wedding day",prog:"Wedding Program",story:"Our Love Story",storyS:"Every moment with you",locT:"Location",mapTap:"Tap to explore the map",mapbtn:"Open in Google Maps",foot:"Thank you",finm:"Thank You",finw:"Your presence is the most precious gift to us.",fine:"With love &amp; gratitude",skip:"Skip",i1:"Wedding Invitation"}};
function esc(s){return String(s).replace(/[&<>]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;"}[c]})}
var mapLang=null;
function mapUrl(){return "https://maps.google.com/maps?q="+encodeURIComponent(D.mapQuery)+"&z=16&hl="+(L==="en"?"en":"km")+"&output=embed"}
function setLang(l){
 L=l;var t=T[l],en=l==="en";
 document.documentElement.lang=l;document.title=t.docTitle;
 document.querySelectorAll("[data-t]").forEach(function(e){e.innerHTML=t[e.getAttribute("data-t")]});
 document.querySelectorAll("#lang b").forEach(function(b){b.classList.toggle("on",b.getAttribute("data-l")===l)});
 $("gn").textContent=en?D.groomEn:D.groom;$("bn").textContent=en?D.brideEn:D.bride;
 $("gpar").innerHTML=en?"Son of<br>Mr. "+esc(D.groomFatherEn)+" &amp; Mrs. "+esc(D.groomMotherEn):"កូនប្រុសរបស់<br>លោក "+esc(D.groomFather)+" និង លោកស្រី "+esc(D.groomMother);
 $("bpar").innerHTML=en?"Daughter of<br>Mr. "+esc(D.brideFatherEn)+" &amp; Mrs. "+esc(D.brideMotherEn):"កូនស្រីរបស់<br>លោក "+esc(D.brideFather)+" និង លោកស្រី "+esc(D.brideMother);
 $("dwk").textContent=en?D.weekdayEn:D.weekday;$("dday").textContent=en?D.dayEn:D.day;$("dtm").textContent=en?D.timeEn:D.time;
 $("dmo").textContent=en?D.monthEn:"ខែ"+D.month+" ឆ្នាំ"+D.year;$("loc").textContent=en?D.placeEn:D.place;
 $("in1").textContent=en?D.groomEn:D.groom;$("in2").textContent=en?D.brideEn:D.bride;$("idt").textContent=en?D.dateEn:D.date;
 renderSched(l);
 if(mapLang&&mapLang!==l){mapLang=l;$("mapf").src=mapUrl()}
 try{localStorage.setItem("inv_lang",l)}catch(e){}
 if(typeof tick==="function"){last=[];tick()}
}
/* ---------- wishes & RSVP ---------- */
T.km.wT="ផ្ញើពាក្យជូនពរ";T.km.wS="Wishes &amp; RSVP";T.km.wQ="តើលោកអ្នកអាចចូលរួមបានទេ?";T.km.wY="✅ នឹងចូលរួម";T.km.wN="🙏 មិនអាចចូលរួមបាន";T.km.wE="ជ្រើសរើស Emoji ដើម្បីបន្ថែមក្នុងពាក្យជូនពរ";T.km.wVia="ផ្ញើពាក្យជូនពរតាម";
T.km.lkH="ប្រើម្រាមដៃដុស ដើម្បីបើកសំបុត្រអញ្ជើញ";T.en.lkH="Swipe with your finger to open your invitation";T.en.wT="Send Your Wishes";T.en.wS="Wishes &amp; RSVP";T.en.wQ="Will you be joining us?";T.en.wY="✅ I will join";T.en.wN="🙏 Sorry, can't make it";T.en.wE="Tap an emoji to add it to your wish";T.en.wVia="Send your wish via";
var W={km:{name:"ឈ្មោះរបស់អ្នក",wish:"សរសេរពាក្យជូនពរដល់កូនកំលោះ និងកូនក្រមុំ...",need:"សូមបញ្ចូលឈ្មោះ និងជ្រើសរើសថាចូលរួមឬមិនចូលរួម",copied:"បានចម្លងសារហើយ! សូមបិទភ្ជាប់ (Paste) ក្នុងការសន្ទនា រួចផ្ញើ 💖",ok:"សូមអរគុណសម្រាប់ពាក្យជូនពរ 💖",hdr:"💌 ពាក្យជូនពរ",nm:"ឈ្មោះ",yes:"✅ នឹងចូលរួម",no:"🙏 មិនអាចចូលរួមបាន"},
 en:{name:"Your name",wish:"Write your wishes for the happy couple...",need:"Please enter your name and choose if you can join",copied:"Message copied! Paste it in the chat and send 💖",ok:"Thank you for your wishes 💖",hdr:"💌 Wedding wish",nm:"Name",yes:"✅ Will join",no:"🙏 Can't make it"}};
(function(){
 var rs="";
 function st(t,e){var o=$("wst");o.textContent=t;o.className="wst"+(e?" err":"")}
 window.wishLang=function(){$("lkn").textContent=(L==="en"?D.groomEn:D.groom)+" & "+(L==="en"?D.brideEn:D.bride);$("wn").placeholder=W[L].name;$("ww").placeholder=W[L].wish;st("")};
 function pick(v){rs=v;$("ry").classList.toggle("on",v==="y");$("rn").classList.toggle("on",v==="n");st("")}
 $("ry").onclick=function(){pick("y")};$("rn").onclick=function(){pick("n")};
 Array.prototype.forEach.call(document.querySelectorAll("#emo button"),function(b){b.onclick=function(){var t=$("ww"),e=b.textContent,s=t.selectionStart,f=t.selectionEnd;if(s==null){s=f=t.value.length}if(t.value.length+e.length>300)return;t.value=t.value.slice(0,s)+e+t.value.slice(f);t.focus();t.selectionStart=t.selectionEnd=s+e.length}});
 function msg(){var w=W[L],t=$("ww").value.trim();return w.hdr+"\n👤 "+w.nm+": "+$("wn").value.trim()+"\n"+(rs==="y"?w.yes:w.no)+(t?"\n\n"+t:"")}
 function ready(){if(!$("wn").value.trim()||!rs){st(W[L].need,true);return false}return true}
 function copy(t){try{navigator.clipboard&&navigator.clipboard.writeText(t)}catch(e){}try{var a=document.createElement("textarea");a.value=t;a.style.cssText="position:fixed;opacity:0";document.body.appendChild(a);a.select();document.execCommand("copy");a.remove()}catch(e){}}
 $("sWa").onclick=function(){if(!ready())return;window.open(String(D.wa).split("?")[0]+"?text="+encodeURIComponent(msg()),"_blank");st(W[L].ok)};
 $("sTg").onclick=function(){if(!ready())return;copy(msg());window.open(D.tg,"_blank");st(W[L].copied)};
 $("sMs").onclick=function(){if(!ready())return;copy(msg());window.open(D.ms,"_blank");st(W[L].copied)};
})();
var _sl=setLang;setLang=function(l){_sl(l);wishLang()};
/* ---------- music ---------- */
var aud=$("bgm"),mUser=false,mReady=false,mWas=false;
function loadM(){if(mReady)return;mReady=true;aud.src=MUSIC;aud.load()}
setTimeout(loadM,300);
function mIcon(){$("mus").classList.toggle("off",aud.paused)}
function playM(){loadM();var v=0;try{aud.volume=0}catch(e){}var p=aud.play();
 var go=function(){mIcon();var t=setInterval(function(){v=Math.min(.75,v+.05);try{aud.volume=v}catch(e){}if(v>=.75)clearInterval(t)},120)};
 if(p&&p.then)p.then(go).catch(mIcon);else go()}
aud.addEventListener("play",mIcon);aud.addEventListener("pause",mIcon);aud.addEventListener("playing",mIcon);
$("mus").addEventListener("click",function(e){e.stopPropagation();if(aud.paused){mUser=false;playM()}else{mUser=true;aud.pause()}});
(function(){var ev=["pointerdown","pointerup","touchend","click"];function retry(e){if(mUser||!window.scrDone)return;if(e&&e.target&&e.target.closest&&e.target.closest("#mus"))return;if(aud.paused&&!document.hidden)playM()}
 ev.forEach(function(n){document.addEventListener(n,retry,true)});
 aud.addEventListener("playing",function(){ev.forEach(function(n){document.removeEventListener(n,retry,true)})})})();
$("lang").addEventListener("click",function(e){e.stopPropagation();setLang(L==="km"?"en":"km")});
document.addEventListener("visibilitychange",function(){if(document.hidden){mWas=!aud.paused;if(mWas)aud.pause()}else if(mWas&&!mUser){aud.play().catch(function(){})}});
function open_(){var s=$("stage");if(s.classList.contains("open"))return;s.classList.add("open");}
$("stage").addEventListener("click",open_);

document.querySelectorAll("img[data-lg]").forEach(function(e){e.src=LOGO});
document.querySelectorAll("img[data-i]").forEach(function(e){e.src=IM[+e.dataset.i]});
var lb=document.createElement("div");lb.id="lb";lb.innerHTML="<img>";document.body.appendChild(lb);
lb.onclick=function(){lb.classList.remove("on")};
document.querySelectorAll(".pol figure,.fin").forEach(function(f){f.addEventListener("click",function(ev){ev.stopPropagation();lb.firstChild.src=f.querySelector("img").src;lb.classList.add("on")})});
var card=document.querySelector(".card"),io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting)x.target.classList.add("in")})},{root:card,threshold:.15});
document.querySelectorAll(".rv").forEach(function(e){io.observe(e)});
for(var i=0;i<18;i++){var s=document.createElement("div");s.className="sp";s.style.left=Math.random()*100+"%";s.style.animationDuration=(7+Math.random()*9)+"s";s.style.animationDelay=(-Math.random()*12)+"s";document.body.appendChild(s)}
(function(){
 var o=$("intro"),shown=false,tm=null,sp=$("ispk");
 for(var i=0;i<26;i++){var d=document.createElement("i"),z=2+Math.random()*4;d.style.cssText="left:"+Math.random()*100+"%;top:"+Math.random()*100+"%;width:"+z+"px;height:"+z+"px;animation-delay:"+Math.random()*4+"s;animation-duration:"+(2+Math.random()*3)+"s";sp.appendChild(d)}
 function close(){clearTimeout(tm);if(!o.classList.contains("on"))return;o.classList.remove("on");o.setAttribute("aria-hidden","true");var cd=$("card");cd.classList.remove("lock");cd.scrollTop=0;setTimeout(function(){o.classList.remove("show")},950)}
 window.showIntro=function(){if(shown)return;shown=true;o.classList.add("show");void o.offsetWidth;o.classList.add("on");o.setAttribute("aria-hidden","false");tm=setTimeout(close,15000)};
 $("skip").addEventListener("click",function(e){e.stopPropagation();close()});
 var mio=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting&&!mapLang){mapLang=L;$("mapf").src=mapUrl();mio.disconnect()}})},{root:document.querySelector(".card"),rootMargin:"300px"});
 mio.observe($("mapbox"));
 $("msh").addEventListener("click",function(e){e.stopPropagation();$("mapbox").classList.add("live")});
 var l0="km";try{l0=localStorage.getItem("inv_lang")==="en"?"en":"km"}catch(e){}
 setLang(l0);
})();
