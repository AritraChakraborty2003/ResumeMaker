let screenWidthMac=window.innerWidth;


if(screenWidthMac>768 && screenWidthMac<1280){
     let imgHolderBnr=document.getElementsByClassName("imageHolderBanner")[0];
     imgHolderBnr.style.width="75vmin"
     let textHolderBnr=document.getElementsByClassName("textHolderBanner")[0];
     textHolderBnr.style.width="75vmin"
}

const hamOptPut=document.getElementById("hamOpt");
const btnHam=document.getElementsByClassName("hamIcon")[0];
function OpencloseHam(){
    
     let optionHtml=`<div class="hamOptions" id="hamOptions">
     <p class="hamText" id="HamTextWhy" onclick="HamWhyScroll()">Why Us?</p>
     <p class="hamText" id="HamTextTest" onclick="HamTestScroll()">Testinomials</p>
     <p class="hamText" id="HamTextCont" onclick="HamContScroll()">Contact-Us</p>
     </div>`
     let hold=document.getElementById("hamOptions");
      if(hold==null){
            
              hamOptPut.innerHTML+=optionHtml;
              
           }
  
       else if(hold!=null){
              document.getElementById("hamOptions").remove();
       }
           
  }

btnHam.addEventListener("click",OpencloseHam);


//Navigation Code
const whyUs=document.getElementById("ExclaimOpt");
const testinomialsNav=document.getElementById("TestinomialsOpt");
const contactDiv=document.getElementById("contactOpt");
const testinomialsDiv=document.getElementById("TestinomialsDiv");
const WhyUsDiv=document.getElementById("WhyUsDiv");
const Contact_Div=document.getElementById("ContDiv");
const cntBtn=document.getElementById("buttonTest");
whyUs.addEventListener("click",function(){
     WhyUsDiv.scrollIntoView();
});

testinomialsNav.addEventListener("click",function(){
     testinomialsDiv.scrollIntoView();
});
contactDiv.addEventListener("click",function(){
     Contact_Div.scrollIntoView();
});



function HamWhyScroll(){
     WhyUsDiv.scrollIntoView();
     document.getElementById("hamOptions").remove();
}
function HamTestScroll(){
     testinomialsDiv.scrollIntoView();
     document.getElementById("hamOptions").remove();
}
function HamContScroll(){
     Contact_Div.scrollIntoView();
     document.getElementById("hamOptions").remove();
}
cntBtn.addEventListener('click',function(){
     Contact_Div.scrollIntoView();
});


let nameArr=["Ravi Ojha","Sunil Pal","Akash Gupta","Amit Jha"];
let desigArr=["Senior Software Engineer","Fresh Graduate","Marketing Manager","Product Manager"];
let reviewArr=[`"ResUme-HatKe Helped me create a professional resume which got me my dream job, 100% recommended for making world class professional Resumes"`,`"ResUme-HatKe Helped me make a professional resume which got me my dream job, 100% recommended for making world class professional Resumes"`,`"ResUme-HatKe Helped me create a professional resume which got me my dream job, 100% recommended for making world class professional Resumes"`,`"ResUme-HatKe Helped me create a professional resume which got me my dream job, 100% recommended for making world class professional Resumes"`];
const namePlace=document.getElementById("testNameText");
const DesigPlace=document.getElementById("testNameDesig");
const reviewPlaceLarge=document.getElementById("testReviewLarge");
const reviewPlaceSmall=document.getElementById("testReviewSmall");
const prevBtn=document.getElementById("prevBtn");
const nxtBtn=document.getElementById("nxtBtn");
let Testcounter=0;
function nxtFunc(){
     Testcounter++;
     if(Testcounter>3){
          Testcounter=0;
     }
     namePlace.innerHTML=nameArr[Testcounter];
     DesigPlace.innerHTML=`( ${desigArr[Testcounter]} )`;
     if(reviewPlaceLarge!=null){
          reviewPlaceLarge.innerHTML=reviewArr[Testcounter];
     }
     if(reviewPlaceSmall!=null){
          reviewPlaceSmall.innerHTML=reviewArr[Testcounter];
     }
}

function prevFunc(){
     Testcounter--;
     if(Testcounter<0){
          Testcounter=3;
     }
     namePlace.innerHTML=nameArr[Testcounter];
     DesigPlace.innerHTML=`( ${desigArr[Testcounter]} )`;
     if(reviewPlaceLarge!=null){
          reviewPlaceLarge.innerHTML=reviewArr[Testcounter];
     }
     if(reviewPlaceSmall!=null){
          reviewPlaceSmall.innerHTML=reviewArr[Testcounter];
     }
}
nxtBtn.addEventListener("click",nxtFunc);
prevBtn.addEventListener("click",prevFunc);
const whyHam= document.getElementById("HamTextWhy");
const testHam=document.getElementById("HamTextTest");
const contHam=document.getElementById("HamTextCont");
if(whyHam!=null){
     whyHam.onmouseover=function(){
          whyHam.style.backgroundColor="white";
          whyHam.style.color="black";
     }

     testHam.onmouseover=function(){
          testHam.style.backgroundColor="white";
          testHam.style.color="black";
     }
     contHam.onmouseover=function(){
          contHam.style.backgroundColor="white";
          contHam.style.color="black";
     }
}