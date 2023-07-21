const anyname : string = "MuhaMmad ammAd";
console.log(`Print Same name : ${anyname}`);
console.log(`Print uppercase name:${anyname.toUpperCase()}`);
console.log(`Print lowecase name:${anyname.toLowerCase()}`);
console.log(`Print Titlecase name:${anyname.replace(/\w\S*/g,(txt)=>txt.charAt(0).toUpperCase()+txt.substring(1).toLowerCase())}`);