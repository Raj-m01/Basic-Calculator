let str = "";

let buttons = document.querySelectorAll(".btn");

const regEx1 = new RegExp("[^a-z ^A-Z]*"); // check if it doesnt contain any alphabet
const regEx3 = new RegExp("([0-9]$)"); //check end


Array.from(buttons).forEach((button)=>{

    button.addEventListener('click', (e)=>{

        var op = e.target.innerHTML;

        switch (op) {


            case "AC":
                str = "";
                document.querySelector('input').value = str;
                break;


            case '=':
                if(regEx1.test(str) && regEx3.test(str)){
                    str = eval(str);
                    document.querySelector('input').value = str;
                }else{
                    document.querySelector('input').value = "try again!";
                }
                break;
        
            case 'x':
                str+='*';
                document.querySelector('input').value = str;
                break;
        
            default:
                str+=op;
                console.log(str)
                document.querySelector('input').value = str;
                break;
        }
    

    })

});
