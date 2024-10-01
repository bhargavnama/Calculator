let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");

function isNum(val){
    return  !isNaN(val);

}

Array.from(buttons).forEach(button => {
    button.addEventListener("click", (e) => {
        let val = e.target.innerText;
        if(val != "AC" && val != "DE" && val != "="){
            input.value += e.target.innerText;
        }
        else if(val == "="){
            input.value = eval(input.value);
        }
        else if(val == "AC"){
            input.value = "";
        }
        else{
            input.value = input.value.slice(0, -1);
        }
        
    })
})