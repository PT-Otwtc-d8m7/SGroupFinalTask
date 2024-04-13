//LOGIN
function loginapi()
{
    let url = "https://recruitment-api.pyt1.stg.jmr.pl/login"
    let loginbody = document.querySelector(".input")
    let data = loginbody.querySelectorAll(".data")
    fetch(url,{
        method: "POST",
        body : JSON.stringify({
            login: data[0].value.trim(),
            password: data[1].value.trim(),
        }),
        headers:{
            "Content-Type": "application/json"
        }
    })
    .then((reponse) => reponse.json())
    .then((res)=>{
     if(res.status == "ok"){
         alert("Đăng Nhập Thành Công")
         window.location.href = "todo.html";
     }
     else{
         alert("Đăng Nhập Thất Bại")
     }
    })
    .catch(()=>{
        alert("loi")
    })
    .finally(()=>{
        let checkbox = document.querySelector(".checkbox").querySelector('input')
        if(!isValidEmail(data[0].value))
        {
            loginbody.querySelectorAll('input')[0].style.borderColor = `#ff1205`
            
        }
        if(!(data[1].value.length >= 6))
        {
            loginbody.querySelectorAll('input')[1].style.borderColor = `#ff1205`
            
        }
      
        if(checkbox.checked)
        {
           localStorage.setItem("remember","")
        }
    })
}
document.querySelector(".buttonlogin").addEventListener("click",()=>{
    loginapi()
})
//VALIDATE MAIL
function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
//SWITCH LOGIN AND REGISTER
document.querySelector(".Register").addEventListener("click",()=>{
    let logininput = document.querySelector(".input");
    logininput.style.display = `none`;
    
    let registerinput = document.querySelector(".registerinput")
    registerinput.style.display = `flex`;

    document.querySelector(".Register").classList.add("hold")
    document.querySelector(".Login").classList.remove("hold")
    document.querySelector(".buttonlogin").innerHTML = `Register`
})
document.querySelector(".Login").addEventListener("click",()=>{
    let logininput = document.querySelector(".input");
    logininput.style.display = `flex`;
    
    let registerinput = document.querySelector(".registerinput")
    registerinput.style.display = `none`;

    document.querySelector(".Register").classList.remove("hold")
    document.querySelector(".Login").classList.add("hold")
    document.querySelector(".buttonlogin").innerHTML = `Login`
})

document.querySelector(".input").querySelectorAll('input')[0].addEventListener("blur",Validblur)
document.querySelector(".input").querySelectorAll('input')[1].addEventListener("blur",Validblur)
//BLUR EVENT
function Validblur(){
  let input = document.querySelector(".input").querySelectorAll('input')
  if(!isValidEmail(input[0].value)) {
      document.querySelector(".input").querySelectorAll('input')[0].style.borderColor = `#ff1205`  
  }
  else
  {
      document.querySelector(".input").querySelectorAll('input')[0].style.borderColor = `#5baec8`
  }
  if(!(input[1].value.length >= 6))
  {
      document.querySelector(".input").querySelectorAll('input')[1].style.borderColor = `#ff1205`     
  }  
  else{
      document.querySelector(".input").querySelectorAll('input')[1].style.borderColor = `#5baec8`
  }
}

if(localStorage.getItem("remember")!==null)
{
  window.location.href = "todo.html";
}

