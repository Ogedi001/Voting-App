let mode = document.querySelector('.lightMode')
let light =document.querySelector('#light')

let buttn = document.querySelector('#switch')
buttn.addEventListener('click',()=>{
  let value = mode.classList.toggle('darkMode')
  console.log(value)
  if(value==true){
    light.innerHTML = 'Dark Mode'
  }else if (value==false){
    light.innerHTML = 'Light Mode'
  }
})
const APC = document.querySelector('.Apc'),
  PDP = document.querySelector('.Pdp'),
  LP= document.querySelector('.Lp'),
  APP= document.querySelector('.App'),
  PRP= document.querySelector('.Prp'),
  NNPP= document.querySelector('.Nnpp'),
  AAC= document.querySelector('.Aac'),
  APGA= document.querySelector('.Apga'),
  YPP= document.querySelector('.Ypp')


const hidden =document.querySelector('.hidden')
const close = document.querySelector('.close'),
h4= document.querySelector('.h4')


close.addEventListener('click',()=>{
  hidden.classList.add('hidden')
})

const  Btn = document.querySelector('.btn'),
    result = document.querySelector('.result'),
    closeBtn = document.querySelector('.float-right')
    

    Btn.addEventListener('click',()=>{

      result.classList.remove('result')
      Btn.style.display ='none'
    })

    closeBtn.addEventListener('click',()=>{
      result.classList.add('result')
      Btn.style.display ='block'
    })


let VoteBtn = document.querySelectorAll('#vote')
for (const button of VoteBtn) {
  button.addEventListener('click', votingCommand)
}

let VoteIncrease=(v)=>{
  count = 1

  
  switch (v) {
    case 'Apc':
     APC.innerHTML = Number( APC.innerHTML) + count
      break;
    case 'Pdp':
     PDP.innerHTML = Number( PDP.innerHTML) + count
      
        break;
     case 'Lp':
     LP.innerHTML = Number( LP.innerHTML) + count
        break;
     case 'App':
      APP.innerHTML = Number( APP.innerHTML) + count
        break;
     case 'Prp':
      PRP.innerHTML = Number( PRP.innerHTML) + count
      break;         
     case 'Nnpp':
      NNPP.innerHTML = Number( NNPP.innerHTML) + count
          break; 
     case 'Aac':
      AAC.innerHTML = Number( AAC.innerHTML) + count
        break;  
     case 'Apga':
      APGA.innerHTML = Number( APGA.innerHTML) + count
        break; 
     case 'Ypp':
       YPP.innerHTML = Number( YPP.innerHTML) + count
       break;    
  }

}
function votingCommand (e){
  hidden.classList.remove('hidden')
  let clickedButtn = e.target.value
  h4.innerHTML =`Vote for ${clickedButtn.toUpperCase()} entered successfully`
    VoteIncrease( clickedButtn)
 }
 


