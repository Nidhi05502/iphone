function dropDown(){
  const content=document.getElementById("myDropdown");
  if(content.style.display == "block"){
    content.style.display ="none";
  }
  else{
    content.style.display="block";
  }
}
window.onclick=function(event){
  if(!event.target.matches('.dropbtn')){
    document.getElementById('myDropdown').style.dispaly="none";
  }
}

function emidropbtn(){
  const cont=document.getElementById("dropdown-emi");
  if(cont.style.display == "block"){
    cont.style.display ="none";
  }
  else{
    cont.style.display="block";
  }
}
window.onclick=function(event){
  if(!event.target.matches('.drpbtn')){
    document.getElementById('dropdown-emi').style.dispaly="none";
  }
}
const tabBody=document.querySelector(".tab-body");
const tabs=document.querySelector(".tabs");
const tabButtons=tabs.querySelectorAll("[role='tab']");
const tabPanels=Array.from(tabBody.querySelectorAll("[role='tabpanel']"));
 
function tabclickhandler(event){
 
  tabPanels.forEach(panel=>(panel.hidden = true));
 
  tabButtons.forEach(button=>button.setAttribute("aria-selected",false));
 
  event.currentTarget.setAttribute("aria-selected",true);
 
  const{id}=event.currentTarget;
  console.log(id);
 
  const tabpanel=tabBody.querySelector(`[aria-labelledby="${id}"]`);
  tabpanel.hidden=false;
 
}
 
tabButtons.forEach(button => button.addEventListener("click",tabclickhandler));



 