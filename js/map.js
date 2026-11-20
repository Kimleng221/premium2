/* Map buttons. */
T.km.mOpen="បើកក្នុង Google Maps";T.en.mOpen="Open in Google Maps";T.km.mDir="ណែនាំផ្លូវ";T.en.mDir="Directions";
$("mdir").href="https://www.google.com/maps/dir/?api=1&destination="+encodeURIComponent(D.mapQuery);
var _s2=setLang;setLang=function(l){_s2(l);$("mvn").textContent=l==="en"?D.placeEn:D.place};
setLang(L);
