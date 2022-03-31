let d1=prompt("plesase enter the following operation: +,-,=,/,*");
let one =prompt("please enter the first number");
let two =prompt("please enter the second number");

let onee=Number(one);
let twoo=Number(two);



switch (d1) {
    case "+":{
        let ad=onee+twoo;
        console.log(ad);
document.write(onee+twoo)

    }
        break;

        case "-":{
            let at=onee-twoo;
            console.log(at);
    
            document.write(onee+twoo)

        }
            break;

            case "/":{
                let ab=onee/twoo;
                console.log(ab);
        
                document.write(onee+twoo)

            }
                break;

                case "*":{
                    let aw=onee*twoo;
                    console.log(aw);
                    document.write(onee+twoo)

            
                }
                    break;
    
}

