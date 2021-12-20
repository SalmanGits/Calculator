var btn = document.querySelectorAll('button')
var input = document.querySelector(".text")
var screenValue = ""
for(item of btn){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText
    
         if (buttonText=="C"){
            screenValue = ""
            input.value = screenValue
        }
        else if(buttonText=="="){
            input.value = eval(screenValue)
        }
        else if (buttonText=="BS"){
            screenValue = screenValue.slice(0,-1)
            input.value = screenValue
        }
        else{
            screenValue += buttonText
            input.value = screenValue
        }
    })
}