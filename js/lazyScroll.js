
function scroller(){

    
    
    let scrollMode = document.querySelectorAll(".scrollMode");
    
    scrollMode.forEach((e)=>{
        let heightDefault = window.innerHeight;
        let scrollHeight = e.getBoundingClientRect().top;
        
        let space = 200;

        if(scrollHeight< heightDefault-space)
        {
            e.classList.add("show");
        }else{
            e.classList.remove("show");
        }
    });
    
}

window.addEventListener("scroll", scroller);