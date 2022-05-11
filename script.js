let str = "";

let buttons = document.querySelectorAll(".btn");

const regEx = new RegExp("([0-9]+[\\+\\-\\*\\/]{1}[0-9]+)+([\\+\\-\\*\\/]{1}[0-9]+)*");

Array.from(buttons).forEach((button)=>{

    button.addEventListener('click', (e)=>{

        var op = e.target.innerHTML;

        switch (op) {


            case "AC":
                str = "";
                document.querySelector('input').value = str;
                break;


            case '=':
                if(regEx.test(str)){
                    str = eval(str);
                    document.querySelector('input').value = str;
                }else{
                    document.querySelector('input').value = "ERROR";
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

