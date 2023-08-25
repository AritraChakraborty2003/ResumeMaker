/* Add Social Links */
let  optHandler=0;
const relaySignal=document.getElementById("AddLinksPD");


function addLink(){
  
    optHandler++;
    if(optHandler<3){
        for(let i=0;i<optHandler;i++){
            let linkHeader=document.getElementById(`pdLN${i}`).value;
            let linkaddr=document.getElementById(`pdLE${i}`).value;
            localStorage.setItem(`itemLN${i}`,linkHeader);
            localStorage.setItem(`itemLE${i}`,linkaddr);

        }
       
       
        let addArea=document.getElementById("SLPDStructure");
        let addHtml=` <input type="text" class="PDLinkName" id="pdLN${optHandler}"name="PDLinkName" placeholder="Link Name...">
        <input type="text" class="PDLinkElement" id="pdLE${optHandler}" name="PDLinkName" placeholder="Link...">`;
        addArea.innerHTML+=addHtml;

        for(let j=0;j<optHandler;j++){
            let linkHeaderEntry=document.getElementById(`pdLN${j}`);
            let linkaddrEntry=document.getElementById(`pdLE${j}`);
            linkHeaderEntry.value=localStorage.getItem(`itemLN${j}`);
            linkaddrEntry.value=localStorage.getItem(`itemLE${j}`);
        }
        localStorage.clear();
     
    }



}

relaySignal.addEventListener("click",addLink);



let element=document.getElementById("resumeManager");
document.getElementById("getPdf").addEventListener("click",function(){
    html2pdf().from(element).save(); 
});

/* ........................ */

/* Nav Color Logic and nxt,prev Btn show hide */

const nxtBtn=document.getElementById("nextBtn");
const prevBtn=document.getElementById("prevBtn");
let sectionCounter=0;


document.getElementsByClassName("navOpt")[sectionCounter].style.backgroundColor="yellow";
function getNavColorFwd(){
    
    document.getElementsByClassName("navOpt")[sectionCounter].style.backgroundColor="rgb(148, 115, 5)";
    sectionCounter++;
    
    if(sectionCounter>3){
        sectionCounter=3;
    }
    document.getElementsByClassName("navOpt")[sectionCounter].style.backgroundColor="yellow";
}
function getNavColorBwd(){
    document.getElementsByClassName("navOpt")[sectionCounter].style.backgroundColor="rgb(148, 115, 5)";
    sectionCounter--;
    if(sectionCounter<0){
        sectionCounter=0;
    }
    document.getElementsByClassName("navOpt")[sectionCounter].style.backgroundColor="yellow";
}


nxtBtn.addEventListener("click",getNavColorFwd);

prevBtn.addEventListener("click",getNavColorBwd);




/* ..................................*/



/*Change of Page Logic*/

const Section=["pd","SklEdu","Prj","AchCert"]
document.getElementById(Section[1]).style.display="none";
document.getElementById(Section[2]).style.display="none";
document.getElementById(Section[3]).style.display="none";
let pageNo=0;
function incrPageNo(){
    pageNo++;
    if(pageNo>3){
        pageNo=3;
    }
    for(let i=0;i<Section.length;i++){
        if(pageNo==i){
            document.getElementById(Section[i]).style.display="block";
        }
        else{
            document.getElementById(Section[i]).style.display="none";
        }
    }
    
}
function decrPageNo(){
    pageNo--;
    if(pageNo<0){
        pageNo=0;
    }
    for(let i=0;i<Section.length;i++){
        if(pageNo==i){
            document.getElementById(Section[i]).style.display="block";
        }
        else{
            document.getElementById(Section[i]).style.display="none";
        }
    }
}
nxtBtn.addEventListener("click",incrPageNo); 
prevBtn.addEventListener("click",decrPageNo);





/*..... Add Skills */
let skillsCount=0;
let fSkillsCount=0;
const sklBtn=document.getElementById("AddSkills");
const addSkillPlace=document.getElementById("skillBoxHolder");
const faddSkillBtn=document.getElementById("FAddSkills");
const faddSkillPlace=document.getElementById("skillBoxHolder1");
function skillAddHtml(){
 var length=document.getElementsByClassName("skillsBox3").length;
 if(skillsCount<20){
    for(let i=0;i<length;i++){
        var val=document.getElementsByClassName("skillsBox3")[i].value;
        localStorage.setItem("item"+i,val);
    }
    const varHtmlSkl=`<input type="text" name="skill${skillsCount}" id="skill${skillsCount}" class="skillsBox3" placeholder="Enter Skill...">`;
   addSkillPlace.innerHTML+=varHtmlSkl;
   skillsCount++; 
    for(let k=0;k<length;k++){
        var val=localStorage.getItem("item"+k);
        document.getElementsByClassName("skillsBox3")[k].value=val;
    }
}
}
var fskillCount=0;
function fskillAddHtml(){
 var length=document.getElementsByClassName("skillsBox1").length;
 if(fSkillsCount<5){
    for(let i=0;i<length;i++){
        var val=document.getElementsByClassName("skillsBox1")[i].value;
        localStorage.setItem("item"+i,val);
    }
    const varHtmlfSkl=` <input type="text" name="Fskill${fSkillsCount}" id="Fskill${fSkillsCount}" class="skillsBox skillsBox1" placeholder="Enter Skill...">`;
    faddSkillPlace.innerHTML+=varHtmlfSkl;
    fSkillsCount++;

    for(let j=0;j<length;j++){
        var val1=localStorage.getItem("item"+j);
        document.getElementsByClassName("skillsBox1")[j].value=val1;

    }
    }
}

faddSkillBtn.addEventListener("click",fskillAddHtml);

/*sklBtn.addEventListener("click",skillAddHtml);*/

/* Adder for Projects Page */

const addBtn=document.getElementById("ProjectAdd");
const prjLocToadd=document.getElementById("Prj");
let projectCount=0;
let countIndex=0;
var objCnt=0;
function expandProjects(){
    
    
   
    projectCount++;
    if(projectCount<3){
        var className="InpPrj1";
        let length=document.getElementsByClassName(className).length;
       
        for(let j=0;j<length;j++){
           
          
           var val=document.getElementsByClassName(className)[j].value;
           localStorage.setItem("item"+countIndex,val);
           countIndex++;
        }
       
        var id=[`namPrj`+projectCount,`LiveLnkPrj`+projectCount,`GitLnkPrj`+projectCount,`PrjDescr`+projectCount,`techStk`+projectCount];
        var PrjAddHtml=`<div class="ProjectContainer">
        <div class="projectNameLinks" >
        <p class="innerHeader" style="margin-top: 10px; color: white; font-size: 27px; margin-left: 7px; padding-bottom: 25px;">Project ${projectCount+1}</p>
           <input type="text" class="InpPrj1" id="${id[0]}" placeholder="Enter Project Name" style="font-size: 20px;  width:50%; padding: 7px; border: 3px solid grey;">
           <input type="text" class="InpPrj1" id="${id[1]}" placeholder="Enter Live Link..." style="font-size: 20px;  width:20%; padding: 7px; border: 3px solid grey;">
           <input type="text" class="InpPrj1" id="${id[2]}" placeholder="Enter Github Link..." style="font-size: 20px;  width:20%; padding: 7px; border: 3px solid grey;">
        </div>

        <div class="projectDescr" style="margin-left: 20px; margin-top: 20px;">
           <textarea rows="5" cols="50" id="${id[3]}" class="InpPrj1" style="font-size: 19px;padding: 7px;" placeholder="Enter Project Description(Note - Within 30 words mandatory)"></textarea>
        </div>

        <div class="techStack"  style="margin-left: 20px; margin-top: 20px;">

           <input type="text" class="InpPrj1" id="${id[4]}" style="width: 50%;font-size: 20px;padding: 7px;" placeholder="Enter Tech stack...">

        </div>
     </div>`


    
     prjLocToadd.innerHTML+=PrjAddHtml;

  
     for(let j=0;j<length;j++){
        
        let val=localStorage.getItem("item"+objCnt);
        console.log(val);
        document.getElementsByClassName(className)[j].value=val;
        objCnt++;
        
     }
     
 

    }

    
}


/*... Adding Achievements and Trainings Work Area ...*/

var achBtn=document.getElementById("AddAch");
var trnBtn=document.getElementById("AddTrn");
var achPlace=document.getElementById("acheievementContainer");
var prjPlace=document.getElementById("certificateContainer");
let achieveCount=0;
let prjCount=0;
let str=0;
let rStr=0;
function addAchievements(){
    var className="AcheivementName";
    achieveCount++;
    if(achieveCount<4){
      var length=document.getElementsByClassName("AcheivementName").length;
      for(let j=0;j<length;j++){
        var val=document.getElementsByClassName(className)[j].value;
        localStorage.setItem("items"+str,val);
        str++;
      }
      var addHtml=`<input type="text" class="AcheivementName" id="Achieve${achieveCount}" style="font-size: 17px ;width: 80%;border: 3px solid grey;padding: 7px; margin-left: 15px; margin-top:15px" placeholder="Enter Achievements Details...">` 
      achPlace.innerHTML+=addHtml;

      for(let j=0;j<length;j++){
        var val=localStorage.getItem("items"+rStr);
        document.getElementsByClassName(className)[j].value=val;
        rStr++;
      }

      
    }
}

let str1=0;
let rStr1=0;
function addProject(){
  console.log(localStorage);
  var className="TrainingNameClass";
  var len=document.getElementsByClassName(className).length;

  prjCount++;
  if(prjCount<10){

    console.log(localStorage);
    for(let j=0;j<len;j++){
        var val=document.getElementsByClassName(className)[j].value;
        localStorage.setItem("item"+j,val);
       
      }
        var entrHtml=` <input type="text" class="TrainingNameClass" id="TrainN${prjCount}" style="font-size: 17px ;width: 70%;border: 3px solid grey;padding: 7px; margin-left: 15px;  margin-top: 10px;" placeholder="Enter Training Name...">
        <input type="text" class="TrainingNameClass" id="TrainI${prjCount}" style="font-size: 17px ;width: 20%;border: 3px solid grey;padding: 7px; margin-left: 15px;  margin-top: 10px;" placeholder="Institute Name...">`;
        prjPlace.innerHTML+=entrHtml;

        for(let k=0;k<len;k++){
            var val1=localStorage.getItem("item"+k);
            document.getElementsByClassName(className)[k].value=val1;
            rStr++;
          }
  }   

}

/*...Update Button Work. ..*/
const updtBtn=document.getElementById("update");
function checkState(){
    if(sectionCounter==0){
        
        const NamEntryBox=document.getElementById("PDName");
        const emailEntryBox=document.getElementById("PDEmail");
        const mobileEntryBox=document.getElementById("PDMobile");
        const aboutEntryBox=document.getElementById("abtTxtInput");
        const locationEntryBox=document.getElementById("PDLocation");
        const NamEntryPlace=document.getElementById("ResumeNameText");
        const emailEntryPlace=document.getElementById("emailEntry");
        const mobileEntryPlace=document.getElementById("mobileEntry");
        const aboutEntryPlace=document.getElementById("aboutTextEntry");
        const locationEntryPlace=document.getElementById("LocNameText");

        var linkStore=["LinkedinEntry","GithubEntry","PortfolioEntry"];
            const nameText=NamEntryBox.value;
            const aboutText=aboutEntryBox.value;
            const locationText=locationEntryBox.value;
            const mobileNo=mobileEntryBox.value;
            const emailText=emailEntryBox.value;
            let mobHtml=`${mobileNo}<span class="line" style="margin-left: 1vmin; font-weight: bold;" >|</span> `;
            let mailHtml=`&nbsp;${emailText}<span class="line" style="margin-left: 1vmin; font-weight: bold;" >|</span> </li>`
            NamEntryPlace.innerHTML=nameText.toUpperCase();
            aboutEntryPlace.innerHTML=aboutText;
            locationEntryPlace.innerHTML=locationText;
            mobileEntryPlace.innerHTML=mobHtml;
            emailEntryPlace.innerHTML=mailHtml;

        const len=document.getElementsByClassName("PDLinkName").length;
        for(let j=0;j<len;j++){
         var txtLinkName=document.getElementsByClassName("PDLinkName")[j].value;
         var linkDat=document.getElementsByClassName("PDLinkElement")[j].value;
            if(j<2){
                var addHtml=`<a href="${linkDat}" target="_blank" style="text-decoration: none; color: black;">&nbsp;${txtLinkName}<span class="line" style="margin-left: 1vmin; font-weight: bold;" >|</span> </a></li>`;
                const entryPlace=document.getElementById(linkStore[j]);
                entryPlace.innerHTML=addHtml;
           }
         else{

            var addHtml1=`<a href="${linkDat}" target="_blank" style="text-decoration: none; color: black;">&nbsp;${txtLinkName}</a></li>`;
            const entryPlace=document.getElementById(linkStore[j]);
            entryPlace.innerHTML=addHtml1;
         }
     }
    

 }
    if(sectionCounter==1){
        /* ... Entering Education Details */
        /* UG */
        var degName=document.getElementById("degNameUg");
        var ugInstName=document.getElementById("degNameInstUg");
        var UgYear=document.getElementById("degNameDateUg");
        var GradeName=document.getElementById("degNameGradeUg");
        var UgdegEntry=document.getElementsByClassName("degEntry")[0].value;
        var UgStartEntry=document.getElementsByClassName("degEntry")[1].value;
        var UgEndEntry=document.getElementsByClassName("degEntry")[2].value;
        var UgInstEntry=document.getElementsByClassName("degEntry")[3].value;
        var UggradeEntry=document.getElementsByClassName("degEntry")[4].value;

        degName.innerHTML=`<b>${UgdegEntry}</b>`;
        ugInstName.innerHTML=UgInstEntry;
        UgYear.innerHTML=`(${UgStartEntry}-${UgEndEntry})`;
        GradeName.innerHTML=`<b>Grade:${UggradeEntry}</b>`;


        var degName1=document.getElementById("degNameInter");
        var ugInstName1=document.getElementById("degNameInstInter");
        var UgYear1=document.getElementById("degNameDateInter");
        var GradeName1=document.getElementById("degNameGradeInter");
        var UgdegEntry1=document.getElementsByClassName("degEntry")[5].value;
        var UgStartEntry1=document.getElementsByClassName("degEntry")[6].value;
        var UgEndEntry1=document.getElementsByClassName("degEntry")[7].value;
        var UgInstEntry1=document.getElementsByClassName("degEntry")[8].value;
        var UggradeEntry1=document.getElementsByClassName("degEntry")[9].value;

        degName1.innerHTML=`<b>${UgdegEntry1}</b>`;
        ugInstName1.innerHTML=UgInstEntry1;
        UgYear1.innerHTML=`(${UgStartEntry1}-${UgEndEntry1})`;
        GradeName1.innerHTML=`<b>Grade: ${UggradeEntry1}</b>`;
        
        var degName2=document.getElementById("degNameMatric");
        var ugInstName2=document.getElementById("degNameInstMatric");
        var UgYear2=document.getElementById("degNameDateMatric");
        var GradeName2=document.getElementById("degNameGradeMatric");
        var UgdegEntry2=document.getElementsByClassName("degEntry")[10].value;
        var UgStartEntry2=document.getElementsByClassName("degEntry")[11].value;
        var UgEndEntry2=document.getElementsByClassName("degEntry")[12].value;
        var UgInstEntry2=document.getElementsByClassName("degEntry")[13].value;
        var UggradeEntry2=document.getElementsByClassName("degEntry")[14].value;

        degName2.innerHTML=`<b>${UgdegEntry2}</b>`;
        ugInstName2.innerHTML=UgInstEntry2;
        UgYear2.innerHTML=`(${UgStartEntry2}-${UgEndEntry2})`;
        GradeName2.innerHTML=`<b>Grade:${UggradeEntry2}</b>`;


    
        var eleFamSkill=document.getElementsByClassName("famSklGrp1")[0];
        eleFamSkill.innerHTML="";
        document.getElementsByClassName("famSklGrp1")[1].innerHTML="";

        var Slindex1=0;
        var count=0;
        var len1=document.getElementsByClassName("skillsBox1").length;
    
  
        for(let j=0;j<len1;j++){

            if(j==len1-1){
             var val=document.getElementsByClassName("skillsBox1")[j].value;
            }
            else{
                var val=document.getElementsByClassName("skillsBox1")[j].value+" , ";
            }

             count++;
            if(count>4){
                Slindex1++;
                
                document.getElementsByClassName("famSklGrp1")[Slindex1].innerHTML=val;
                count=1;
            } 
            else{ 
             
                    document.getElementsByClassName("famSklGrp1")[Slindex1].innerHTML+=val;
            }

        }
            
        
        

        var Slindex=0;
        var cnt=0;
        var SklEntryDiv=document.getElementsByClassName("sklGrp")[0];
        document.getElementsByClassName("sklGrp")[1].innerHTML="";
        document.getElementsByClassName("sklGrp")[2].innerHTML="";
        document.getElementsByClassName("sklGrp")[3].innerHTML="";
        document.getElementsByClassName("sklGrp")[4].innerHTML="";
        SklEntryDiv.innerHTML="";
 
       
    
        var len=document.getElementsByClassName("skillsBox3").length;
        if(len<7){
            alert("Please add atleat 7 skills");
        }
        else{
        for(let j=0;j<len;j++){
            if(j==len-1){
             var val=document.getElementsByClassName("skillsBox3")[j].value;
            }
            else{
                var val=document.getElementsByClassName("skillsBox3")[j].value+" , ";
            }

            cnt++;
            if(cnt>4){
                Slindex++
                document.getElementsByClassName("sklGrp")[Slindex].innerHTML=val;
                cnt=1;
            }
            else{
                document.getElementsByClassName("sklGrp")[Slindex].innerHTML+=val;
            }


        }


            }
         




    }
    if(sectionCounter==2){
        
        var prjCounter=document.getElementsByClassName("ProjectContainer").length;
        for(let j=0;j<prjCounter;j++){
            var PrjName=document.getElementById(`namPrj`+j).value;
            var prjLivLink=document.getElementById(`LiveLnkPrj`+j).value;
            var GitLnkLink=document.getElementById(`GitLnkPrj`+j).value;
            var prjDescrText=document.getElementById(`PrjDescr`+j).value;
            var techStackTxt=document.getElementById(`techStk`+j).value;
            console.log(techStackTxt);
            document.getElementById(`P${j}NameLink`).innerHTML=`${PrjName}...&nbsp;[<a href="${prjLivLink}"class="linkStyle">Live Link</a>&nbsp;|&nbsp;<a href="${GitLnkLink}" class="linkStyle">Github Link</a>]`;
            document.getElementById(`P${j}Descr`).innerHTML=prjDescrText;
            document.getElementById(`P${j}TechStack`).innerHTML=`<b>Tech Stack:</b>`+techStackTxt;
        
        }
      
    
        }
        
    
    if(sectionCounter==3){
        var className1="AcheivementName";
        var entryPlace1=document.getElementById("achievementContainer");
        entryPlace1.innerHTML="";
        var len=document.getElementsByClassName(className1).length;
        for(let j=0;j<len;j++){
            var val=document.getElementsByClassName(className1)[j].value;
            var HtmlInput=`<li class="AchievementText">${val}</li>`
            entryPlace1.innerHTML+=HtmlInput;
        }


        var classNameSec="TrainingNameClass";
        var htmlClass=` <li class="certificateText">Frontend Dev Course - Coding Ninjas</li>`;
        var length=document.getElementsByClassName(classNameSec).length;
        const entryPlace=document.getElementById("containerBoxCert");
        entryPlace.innerHTML="";
        for(let j=0;j<length;j+=2){
            var val=document.getElementsByClassName(classNameSec)[j].value;
            var val1=document.getElementsByClassName(classNameSec)[j+1].value;
            entryPlace.innerHTML+=`<li class="certificateText">${val} - ${val1}</li>`;

        }
        
    }
}
updtBtn.addEventListener("click",function(){
 localStorage.clear();
})
updtBtn.addEventListener("click",checkState);

