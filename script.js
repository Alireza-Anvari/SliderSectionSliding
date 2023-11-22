let slides=document.querySelectorAll("#slides > div")
let thumbnails=document.querySelectorAll("#thumbnails > div")
let next=document.querySelector("#next")
let prev=document.querySelector("#prev")
let progress=document.querySelector("#progressBar")
let effectSlide;
slides[0].classList.add("index")

let index=1;
let count=0;
let start=0;
let restInterval;
let oldIndex;
let restTimeout;



thumbnails.forEach((element,ind)=>{
 


    element.addEventListener("click",()=>{
      let a=element.getAttribute("class").includes("myOpacity")
      progress.classList.remove("progressBarActive")
    //  console.log(aaa);
      if(a===false){
        clearInterval(restInterval);
        clearTimeout(restTimeout);
    
count=1;

oldIndex=index;
index=ind;
autoPlay();
restInterval=setInterval(autoPlay,4000)
      }

})
 



})



prev.addEventListener("click",()=>{
  // console.log(index);
      progress.classList.remove("progressBarActive")
      clearInterval(restInterval);
        clearTimeout(restTimeout);
        
  count=0;
 
  index++;
  if (index>=0 && start===0) {
    index=1;
    start=1
   }

  autoPlay();
restInterval=setInterval(autoPlay,4000)

})

next.addEventListener("click",()=>{

      progress.classList.remove("progressBarActive")
      clearInterval(restInterval);
        clearTimeout(restTimeout);
        
  count=1;
 oldIndex=5

   index--;
   if (index<=0 && start===0) {
    index=3;
    start=1
   }
   else if(index<0 && start===1) {
    index=3
   }
  console.log(index);
  autoPlay();
restInterval=setInterval(autoPlay,4000)

})
restInterval=setInterval(autoPlay,4000)
function autoPlay(){
 setTimeout(()=>{progress.classList.add("progressBarActive")},0)
 // console.log(index);
  thumbnails.forEach((element)=>{element.classList.remove("myOpacity")  })
  if(index>=4){
   // console.log(index,"index===4");
  slides.forEach((element)=>{element.classList.remove("index")  })
index=0;
}
effectSlide=Array.from(slides[index].children)
setTimeout(()=>{effectSlide[effectSlide.length-1].classList.remove("title")},0)
setTimeout(()=>{effectSlide[effectSlide.length-1].classList.add("title")},1000)
if(count===0)
{

setTimeout(()=>{ slides[index].classList.add("index");thumbnails[index].classList.add("myOpacity")},400)
effectSlide.forEach((Element,ind)=>{setTimeout(()=>{Element.classList.add("effectSlide")},100*ind)})

setTimeout(()=>{;effectSlide.forEach((element)=>{element.classList.remove("effectSlide");}); },1500)
}
else{

if(index>=oldIndex){

  setTimeout(()=>{ slides[index].classList.add("index");thumbnails[index].classList.add("myOpacity");},400)
effectSlide.forEach((Element,ind)=>{setTimeout(()=>{Element.classList.add("effectSlide")},100*ind)})
setTimeout(()=>{;effectSlide.forEach((element)=>{element.classList.remove("effectSlide");}); },1500)
}

else{

  setTimeout(()=>{ slides[index].classList.add("indexPlus");slides[index].classList.add("index"); thumbnails[index].classList.add("myOpacity");},200)
  effectSlide.forEach((Element,ind)=>{setTimeout(()=>{Element.classList.add("effectSlide")},100*ind)})
setTimeout(()=>{;effectSlide.forEach((element)=>{element.classList.remove("effectSlide");}); },1500)
setTimeout(()=>{slides.forEach((element,ind)=>{ind!==index ? element.classList.remove("index") : null})
slides[index].classList.remove("indexPlus")},1000)

}


  count=0;
  oldIndex=null;
}
restTimeout=setTimeout(()=>{ progress.classList.remove("progressBarActive") ;index+=1;},3950)


}