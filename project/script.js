let selectedType=null;

function selectCrisis(el){
  document.querySelectorAll('.crisis-card').forEach(c=>c.classList.remove('selected'));
  el.classList.add('selected');
  selectedType=el.dataset.type;
}

function detectLocation(){
  const box=document.querySelector('.location-box');
  box.innerHTML="Detecting...";
  setTimeout(()=>{
    box.innerHTML="📍 Thrissur, Kerala";
  },1000);
}

function submitReport(){
  if(!selectedType){
    alert("Select crisis type first");
    return;
  }

  document.getElementById('formView').style.display='none';
  document.querySelector('.success-screen').classList.add('visible');

  const id="CR-"+Math.floor(Math.random()*90000+10000);
  document.querySelector('.report-id-value').textContent=id;
}

function newReport(){
  location.reload();
}