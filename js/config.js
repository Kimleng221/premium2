/* =====================================================================
   config.js  --  THIS IS THE FILE YOU EDIT
   Names, date, place, schedule, links, photos and music are all here.
   Save the file, then refresh index.html in your browser.
   Tip: keep every "quote" and comma exactly as they are.
   ===================================================================== */

// COUNTDOWN: exact wedding date & time (YYYY-MM-DDTHH:MM:SS+07:00 = Cambodia time)
var WEDDING_DATE="2027-01-03T17:00:00+07:00";

// PHOTOS: files inside the images/ folder. Replace the files, or change the names here.
// 1st line = photo 1, 2nd = photo 2 ... (8 photos in total)
var IM=[
  "images/photo-1.jpg",
  "images/photo-2.jpg",
  "images/photo-3.jpg",
  "images/photo-4.jpg",
  "images/photo-5.jpg",
  "images/photo-6.jpg",
  "images/photo-7.jpg",
  "images/photo-8.jpg"
];

// LOGO shown on the closed doors, and BACKGROUND MUSIC file
var LOGO="images/logo.png";
var MUSIC="audio/music.mp3";

// ✏️ EDIT YOUR DETAILS HERE
var D={
 groom:"ពុធ ចាន់ធារ៉ា", groomFather:"សុខ សារ៉ា", groomMother:"ជា ស្រីមុំ",
 bride:"ឌីណេ រ៉ានីនីសា", brideFather:"អ៊ុង វណ្ណ", brideMother:"ម៉ី សុខា",
 date:"ថ្ងៃអាទិត្យ ទី០៣ ខែមករា ឆ្នាំ២០២៧",
 weekday:"ថ្ងៃអាទិត្យ", day:"០៣", month:"មករា", year:"២០២៧", time:"៥:០០ ល្ងាច", place:"នៅគេហដ្ឋានខាងស្រី ភ្នំពេញ",
 loc:"វេលាម៉ោង ៥:០០ ល្ងាច<br>នៅគេហដ្ឋានខាងស្រី ភ្នំពេញ",
 english:"Chanthara & Raninisa", englishLine:"Sunday, 3 January 2027 · 5:00 PM<br>At the Bride's House, Phnom Penh",
 map:"",  // optional: paste a Google Maps share link. Leave "" to build it from mapQuery
  mapQuery:"Phnom Penh, Cambodia",  // ✏️ address, place name, or "11.5564,104.9282" (lat,lng)
 tg:"https://t.me/yourname", wa:"https://wa.me/855000000000", ms:"https://m.me/yourpage",
 introStyle:"full", // "full" (full-screen cinematic) | "book" | "ring" | "arch" | "polaroid" | "frame" // ✏️ intro photo show style: "polaroid" (photos drop & pile up) or "frame" (framed slideshow)
 icons:[5,0,4,6,2,1,3,7], // ✏️ icon for each program row: 0 gift, 1 candle, 2 scissors, 3 lunch, 4 rings, 5 offering tray, 6 lotus, 7 toast
 schedule:[["០៦:១៥","ពិធីសែនក្រុងពាលី"],["០៧:១៥","ពិធីហែជំនូន ចូលរោងជ័យ"],["០៧:៤៥","ពិធីជំនុំជើងការ និងពិធីចំពាក់ចិញ្ចៀន"],["០៨:១៥","ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត"],["០៩:៤៥","ពិធីកាត់សក់បង្កក់សិរី"],["១០:១៥","ពិធីបង្វិលពពិល សំពះផ្ទឹម សែនចងដៃ"],["១១:៣០","ភ្ញៀវកិត្តិយសពិសាអាហារថ្ងៃត្រង់"],["១៧:០០","ភ្ញៀវកិត្តិយសពិសាភោជនាហារពេលល្ងាច"]],
  // ✏️ ENGLISH VERSION (shown when guests tap EN)
  groomEn:"Put Chanthara", groomFatherEn:"Sok Sara", groomMotherEn:"Chea Sreymom",
  brideEn:"Dine Raninisa", brideFatherEn:"Ung Vann", brideMotherEn:"Mey Sokha",
  dateEn:"Sunday, 3 January 2027", weekdayEn:"Sunday", dayEn:"03", monthEn:"January 2027", timeEn:"5:00 PM", placeEn:"At the Bride's House, Phnom Penh",
  scheduleEn:[["6:15 AM","Krong Peali Offering Ceremony"],["7:15 AM","Wedding Gift Procession into the Wedding Pavilion"],["7:45 AM","Wedding Formalities & Ring Exchange Ceremony"],["8:15 AM","Buddhist Chanting & Blessing Ceremony"],["9:45 AM","Hair-Cutting Ceremony"],["10:15 AM","Candle Circling, Blessing Ceremony & Hand-Tying"],["11:30 AM","Lunch for Honored Guests"],["5:00 PM","Dinner Banquet for Honored Guests"]]
};
