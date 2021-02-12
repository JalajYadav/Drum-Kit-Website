document.addEventListener("keypress",function(event)
{
    var key = event.key;
    //console.log(this);
    makesound(key);
    buttonAnimator(key);
})


for (let i = 0; i < document.querySelectorAll("button").length; i++) 
    {
        document.querySelectorAll("button")[i].addEventListener("click",function()
        {
            this.style.color="white";
            var clickedKey = this.innerHTML;
            makesound(clickedKey) ; 
            buttonAnimator(clickedKey);
        }                                                                                           );
        
    }

    function makesound(key)
    {
        switch (key) {
            case "w":
                var audio = new Audio ("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio ("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio ("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio ("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio ("sounds/crash.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio ("sounds/kick-bass.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio ("sounds/snare.mp3");
                audio.play();
                break;
            default:
            alert("sorry!! default switch activated");
            console.log(btnHtml);
            break;
        }
    }

function buttonAnimator(key)
{
    document.querySelector("."+key).classList.add("pressed")
    setTimeout(function()
    {
        document.querySelector("."+key).classList.remove("pressed")
    },160)
}
//I have commented my alternative code ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇ below
/*for (let i = 0; i < document.querySelectorAll("button").length; i++) 
    {
        document.querySelectorAll("button")[i].addEventListener("click",function(){funCall(i)} );//this is the way to call a function inside another function otherwise it will get executed if it is called using simple syntax
        
    }
function funCall(i)
{
    switch (i) {
        case 0:
            var audio = new Audio ("sounds/tom-1.mp3");
            audio.play();
            break;
        case 1:
            var audio = new Audio ("sounds/tom-2.mp3");
            audio.play();
            break;
        case 2:
            var audio = new Audio ("sounds/tom-3.mp3");
            audio.play();
            break;
        case 3:
            var audio = new Audio ("sounds/tom-4.mp3");
            audio.play();
            break;
        case 4:
            var audio = new Audio ("sounds/crash.mp3");
            audio.play();
            break;
        case 5:
            var audio = new Audio ("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 6:
            var audio = new Audio ("sounds/snare.mp3");
            audio.play();
            break;
        default:
        alert("This btn has no sound sorry!!")
        break;
}
}
*/
