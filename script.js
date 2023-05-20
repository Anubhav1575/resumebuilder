//alert("Loading");
function addnewweField() {
    // console.log("Adding new Field");
  let newNode=document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("row", 3);
  newNode.setAttribute("placeholder","Enter here");

  let weOb=document.getElementById("we");
  let weAddButtonOb=document.getElementById("weaddbutton");
  weOb.insertBefore(newNode, weAddButtonOb);
}


function addnewAQField() {
    // console.log("Adding new Field");
  let newNode=document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("row", 3);
  newNode.setAttribute("placeholder","Enter here");

  let aqOb=document.getElementById("aq");
  let aqAddButtonOb=document.getElementById("aqaddbutton");
  aqOb.insertBefore(newNode, aqAddButtonOb);
}
// project
function addnewPRField() {
  // console.log("Adding new Field");
let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("proField");
newNode.classList.add("mt-2");
newNode.setAttribute("row", 3);
newNode.setAttribute("placeholder","Enter here");

let proOb=document.getElementById("pro");
let proAddButtonOb=document.getElementById("proaddbutton");
proOb.insertBefore(newNode, proAddButtonOb);
}
//generate
function generatecv()
{
   // console.log("Adding new Field");

   let nameField=document.getElementById("nameField").value;
   let nameT1=document.getElementById("nameT1");
   let nameT2=document.getElementById("nameT2");
   nameT1.innerHTML= nameField;
   nameT2.innerHTML= nameField;

   //contact
   let contactField=document.getElementById("contactField").value;
   let contactT=document.getElementById("contactT");
   contactT.innerHTML= contactField;

   //address
let addressField=document.getElementById("addressField").value;
   let addressT=document.getElementById("addressT");
   addressT.innerHTML= addressField;
   //fblink
   let fbField=document.getElementById("fbField").value;
   let fbT=document.getElementById("fbT");
   fbT.innerHTML= fbField;

   //instalink
   let instaField=document.getElementById("instaField").value;
   let instaT=document.getElementById("instaT");
   instaT.innerHTML= instaField;

   //linkdinlink
   let ldField=document.getElementById("ldField").value;
   let linkT=document.getElementById("linkT");
   linkT.innerHTML= ldField;

   //objective

   let ObField=document.getElementById("ObField").value;
   let ObjectiveT=document.getElementById("ObjectiveT");
   ObjectiveT.innerHTML= ObField;

 //work experience
   
  //  let WeField=document.getElementById("WeField").value;
  //  let weT=document.getElementById("weT");
  //  weT.innerHTML= WeField;

   let wes=document.getElementsByClassName("  weField")
   let str=" ";

   for(let e of wes)
   {
    str=str + `<li> ${e.value}</li>`;
    document.getElementById("weT").innerHTML=str;
   }

   // acedemic 
  //  let aqField=document.getElementById("aqField").value;
  //  let aqT=document.getElementById("aqT");
  //  aqT.innerHTML= aqField;

  let aqs=document.getElementsByClassName("aqField")
  let strr=" ";

  for(let a of aqs)
  {
   strr=strr + `<li> ${a.value}</li>`;
   document.getElementById("aqT").innerHTML=strr;
  }


   //projects
  //  let proField=document.getElementById("proField").value;
  //  let prT=document.getElementById("prT");
  //  prT.innerHTML= proField;
  let prs=document.getElementsByClassName("proField")
  let strrr=" ";

  for(let p of prs)
  {
   strrr=strrr + `<li> ${p.value}</li>`;
   document.getElementById("prT").innerHTML=strrr;
  }

   //refrenses
   let refField=document.getElementById("refField").value;
   let refT=document.getElementById("refT");
   refT.innerHTML= refField;


    //for image

  let file=document.getElementById("imgField").files[0];
  console.log(file);
  let reader=new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);
  //setting image
  
  reader.onloadend=function()
  {
    document.getElementById("imgtemp").src=reader.result;
  }

   //hide fields
   document.getElementById("resume-form").style.display="none";
   document.getElementById("resume-temp").style.display="block";
   document.getElementsByClassName("backgroundd").style.display="block";

  }
  function printCV()
  {
    // var backup =document.body.innerHTML;
    // var divcontent=document.getElementById("resume-temp").innerHTML;
    // document.body.innerHTML = divcontent;
    window.print();
  }