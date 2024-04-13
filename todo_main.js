// khai bao mạngr nhận dạng task phần tử đầu tiên chứa chỉ số xác định status phần tử thứ 2 xác định vị trị trong bảng status
var indexedit =[]
//mang quan ly cac task
if(localStorage.getItem('data')!=null)
{
    var data = JSON.parse(localStorage.getItem('data'))
    Render()
    
}
else{
var data = []
for(let i =0 ;i<4;i++)
{
    data[i]=[]
}
}
// gan su kien log out
function logout(){
    try{
       localStorage.removeItem('remember');
    }
    finally{
        window.location.href = "index.html";
    }
    console.log('adad')
}
document.querySelector('.logout').addEventListener('click',logout)
//gam su kien closeformedit
document.querySelector('.formfix').querySelector(".buttonclose").addEventListener('click',()=>{
    hiddenFormEdit('none')
})
//gápukiensubmitedit
document.querySelector('.formfix').querySelector(".buttonsubmit").addEventListener('click',()=>{
    let radio = document.querySelector('.formfix_status').querySelectorAll('input')
    let textarea =document.querySelector('.formfix').querySelector('textarea')
    let input = document.querySelector('.formfix').querySelectorAll('input')
    //neu click todo
    if(radio[0].checked)
    {
        if(indexedit[0]==0)
        {
            let taskitem = document.querySelector(".container_body_element_todo").querySelectorAll('.element_task_item')
            taskitem[indexedit[1]].innerHTML = `<div class="element_task_item_header">
            <div class="element_task_item_header_text" >${input[0].value}</div>
            <div class="element_task_item_header_icon" >
                <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
            </div>
            <div class="element_task_item_title">${input[1].value}</div>
            <div class="element__task_item_line"></div>
            <div class="element_task_item_content">${textarea.value}</div>
            <div class="element_task_item_time">
            <i class="fa-regular fa-clock"></i>
                June 30, 2022
            </div>`

        }
        else {
            data[indexedit[0]][indexedit[1]].textheader = input[0].value
            data[indexedit[0]][indexedit[1]].title = input[1].value
            data[indexedit[0]][indexedit[1]].content = textarea.value
            data[indexedit[0]][indexedit[1]].status = "todo"
            data[0].push(data[indexedit[0]][indexedit[1]])
            data[indexedit[0]].splice(indexedit[1],1)
            let taskitem = document.querySelectorAll('.element_task')
            taskitem.forEach((element) => {
                element.innerHTML = ``
            })
            for(let i in data)
            {
        
                data[i].forEach((element)=>{
                    GoLive(element)
                })
            } 
        }
    }
    else if(radio[1].checked)
    {
        if(indexedit[0]==1)
        {
            let taskitem = document.querySelector(".container_body_element_doing").querySelectorAll('.element_task_item')
            taskitem[indexedit[1]].innerHTML = `<div class="element_task_item_header">
            <div class="element_task_item_header_text" >${input[0].value}</div>
            <div class="element_task_item_header_icon" >
                <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
            </div>
            <div class="element_task_item_title">${input[1].value}</div>
            <div class="element__task_item_line"></div>
            <div class="element_task_item_content">${textarea.value}</div>
            <div class="element_task_item_time">
            <i class="fa-regular fa-clock"></i>
                June 30, 2022
            </div>`

        }
        else {
            data[indexedit[0]][indexedit[1]].textheader = input[0].value
            data[indexedit[0]][indexedit[1]].title = input[1].value
            data[indexedit[0]][indexedit[1]].content = textarea.value
            data[indexedit[0]][indexedit[1]].status = "doing"
            data[1].push(data[indexedit[0]][indexedit[1]])
            console.log(data[indexedit[0]][indexedit[1]])
            data[indexedit[0]].splice(indexedit[1],1)
            // lam rong de in lai toan bo
            Render()
        }
    }
    else if(radio[2].checked)
    {
        if(indexedit[0]==2)
        {
            let taskitem = document.querySelector(".container_body_element_completed").querySelectorAll('.element_task_item')
            taskitem[indexedit[1]].innerHTML = `<div class="element_task_item_header">
            <div class="element_task_item_header_text" >${input[0].value}</div>
            <div class="element_task_item_header_icon" >
                <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
            </div>
            <div class="element_task_item_title">${input[1].value}</div>
            <div class="element__task_item_line"></div>
            <div class="element_task_item_content">${textarea.value}</div>
            <div class="element_task_item_time">
            <i class="fa-regular fa-clock"></i>
                June 30, 2022
            </div>`

        }
        else {
            data[indexedit[0]][indexedit[1]].textheader = input[0].value
            data[indexedit[0]][indexedit[1]].title = input[1].value
            data[indexedit[0]][indexedit[1]].content = textarea.value
            data[indexedit[0]][indexedit[1]].status = "completed"
            data[2].push(data[indexedit[0]][indexedit[1]])
            data[indexedit[0]].splice(indexedit[1],1)
            Render()
        }
    }
    else if(radio[3].checked)
    {
        if(indexedit[0]==3)
        {
            let taskitem = document.querySelector(".container_body_element_completed").querySelectorAll('.element_task_item')
            taskitem[indexedit[1]].innerHTML = `<div class="element_task_item_header">
            <div class="element_task_item_header_text" >${input[0].value}</div>
            <div class="element_task_item_header_icon" >
                <i class="fa-regular fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
            </div>
            <div class="element_task_item_title">${input[1].value}</div>
            <div class="element__task_item_line"></div>
            <div class="element_task_item_content">${textarea.value}</div>
            <div class="element_task_item_time">
            <i class="fa-regular fa-clock"></i>
                June 30, 2022
            </div>`

        }
        else {
            data[indexedit[0]][indexedit[1]].textheader = input[0].value
            data[indexedit[0]][indexedit[1]].title = input[1].value
            data[indexedit[0]][indexedit[1]].content = textarea.value
            data[indexedit[0]][indexedit[1]].status = "blocked"
            data[3].push(data[indexedit[0]][indexedit[1]])
            data[indexedit[0]].splice(indexedit[1],1)
            Render()
        }
    }

    hiddenFormEdit('none')
    alert("Edit Task Success")
    Edit_event()

})
//ADD NEW TASK
function hiddenFormAdd(value)
{
    let bGRNewTask = document.querySelector('.background')
    let formNewTask = document.querySelector('.formnewtask')
    bGRNewTask.style.display = `${value}`
    formNewTask.style.display = `${value}`
}
function newTask(){
    hiddenFormAdd('flex')
    document.querySelector('.formnewtask').querySelector('.buttonclose').addEventListener('click',()=>{
            hiddenFormAdd('none')
    })
    document.querySelector('.formnewtask').querySelector('.buttonsubmit').addEventListener('click',addNewTask)
}
document.querySelector('.buttonnewtask').addEventListener('click',newTask)
function addNewTask()
{
    let input1 = document.querySelector(".formnewtask").querySelectorAll('input')[0]
    let input2 = document.querySelector(".formnewtask").querySelectorAll('input')[1]
    let text_area = document.querySelector(".formnewtask").querySelector('textarea')

    let input = document.querySelector('.formnewtask').querySelectorAll('input')
    let textarea =document.querySelector('.formnewtask').querySelector('textarea')
    let Month = ["January","February","March","April","May","June"]
    let now = new Date()
    const month = now.getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octorber", "November", "December"];
    if(input1.value !== "" && input2.value !== "" && text_area.value !== "") {
        var x = {
            textheader: input[0].value,
            title: input[1].value,
            content: textarea.value,
            status: "todo",
            time: ""+(monthNames[month])+" "+ (now.getDay()+7)+", " + now.getFullYear(),
        }
        data[0].push(x)
        GoLive(x)
        Edit_event()
        Delete_event()
        Count_task()
        hiddenFormAdd('none')
        alert('Submit Thành Công')
        input[0].value=""
        input[1].value=""
        textarea.value=""
    }
}
//EDIT EVENT
function hiddenFormEdit(value){
    let bGRNewTask = document.querySelector('.background')
    let formFix = document.querySelector('.formfix')
    bGRNewTask.style.display = `${value}`
    formFix.style.display = `${value}`
}
function GoLive(element){
    let localhtmltodo= document.querySelector(".container_body_element_todo").querySelector('.element_task')
    let localhtmldoing=document.querySelector(".container_body_element_doing").querySelector('.element_task')
    let localhtmlcompleted=document.querySelector(".container_body_element_completed").querySelector('.element_task')
    let localhtmlblocked=document.querySelector(".container_body_element_blocked").querySelector('.element_task')
        console.log(element)
        switch(element.status){
            case 'todo':  localhtmltodo.innerHTML+= ` <div class="element_task_item">
            <div class="element_task_item_header">
                <div class="element_task_item_header_text" >${element.textheader}</div>
                <div class="element_task_item_header_icon" >
                    <i class="fa-regular fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
            <div class="element_task_item_title">${element.title}</div>
            <div class="element__task_item_line"></div>
            <div class="element_task_item_content">${element.content}</div>
            <div class="element_task_item_time">
                <i class="fa-regular fa-clock"></i>
                    ${element.time}
                </div>
        </div>`  ;break;
            case 'doing' :  localhtmldoing.innerHTML+= ` <div class="element_task_item">
            <div class="element_task_item_header">
                <div class="element_task_item_header_text" >${element.textheader}</div>
                <div class="element_task_item_header_icon" >
                    <i class="fa-regular fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
            <div class="element_task_item_title">${element.title}</div>
            <div class="element__task_item_line"></div>
            <div class="element_task_item_content">${element.content}</div>
            <div class="element_task_item_time">
                <i class="fa-regular fa-clock"></i>
                ${element.time}
                </div>
        </div>` ; break;
            case 'completed':  localhtmlcompleted.innerHTML+= ` <div class="element_task_item">
            <div class="element_task_item_header">
                <div class="element_task_item_header_text" >${element.textheader}</div>
                <div class="element_task_item_header_icon" >
                    <i class="fa-regular fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
            <div class="element_task_item_title">${element.title}</div>
            <div class="element__task_item_line"></div>
            <div class="element_task_item_content">${element.content}</div>
            <div class="element_task_item_time">
                <i class="fa-regular fa-clock"></i>
                ${element.time}
                </div>
        </div>`  ; break;
            case 'blocked':  localhtmlblocked.innerHTML+= ` <div class="element_task_item">
            <div class="element_task_item_header">
                <div class="element_task_item_header_text" >${element.textheader}</div>
                <div class="element_task_item_header_icon" >
                    <i class="fa-regular fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
            <div class="element_task_item_title">${element.title}</div>
            <div class="element__task_item_line"></div>
            <div class="element_task_item_content">${element.content}</div>
            <div class="element_task_item_time">
                <i class="fa-regular fa-clock"></i>
                ${element.time}
                </div>
        </div>` ; break;
        default: break;
        }
}

//su kien pen
function Edit_event()
{
    let pentodo = document.querySelector('.container_body_element_todo').querySelectorAll('.fa-pen-to-square')
    let radio = document.querySelector('.formfix_status').querySelectorAll('input')
    localStorage.setItem('data',JSON.stringify(data))
    pentodo.forEach((element,x)=>{
        element.addEventListener('click',()=>{
            indexedit[0]=0;
            indexedit[1]=x;
            radio[0].checked =true
            let input = document.querySelector('.formfix').querySelectorAll('input')
            let textarea =document.querySelector('.formfix').querySelector('textarea')
            input[0].value = data[indexedit[0]][indexedit[1]].textheader
            input[1].value = data[indexedit[0]][indexedit[1]].title
            textarea.value =  data[indexedit[0]][indexedit[1]].content
            hiddenFormEdit('flex')
        })
    })
    let pendoing = document.querySelector('.container_body_element_doing').querySelectorAll('.fa-pen-to-square')
    pendoing.forEach((element,x)=>{
        element.addEventListener('click',()=>{
            indexedit[0]=1;
            indexedit[1]=x;
            let input = document.querySelector('.formfix').querySelectorAll('input')
            let textarea =document.querySelector('.formfix').querySelector('textarea')
            input[0].value = data[indexedit[0]][indexedit[1]].textheader
            input[1].value = data[indexedit[0]][indexedit[1]].title
            textarea.value =  data[indexedit[0]][indexedit[1]].content
            hiddenFormEdit('flex')
        })
    })
    let pencompleted = document.querySelector('.container_body_element_completed').querySelectorAll('.fa-pen-to-square')
    pencompleted.forEach((element,x)=>{
        element.addEventListener('click',()=>{
            radio[2].checked=true        
            indexedit[0]=2;
            indexedit[1]=x;
            let input = document.querySelector('.formfix').querySelectorAll('input')
            let textarea =document.querySelector('.formfix').querySelector('textarea')
            input[0].value = data[indexedit[0]][indexedit[1]].textheader
            input[1].value = data[indexedit[0]][indexedit[1]].title
            textarea.value =  data[indexedit[0]][indexedit[1]].content
            hiddenFormEdit('flex')
        })
    })
    let penblocked = document.querySelector('.container_body_element_blocked').querySelectorAll('.fa-pen-to-square')
    penblocked.forEach((element,x)=>{
        element.addEventListener('click',()=>{
            radio[3].checked=true  
            indexedit[0]=3;
            indexedit[1]=x;
            let input = document.querySelector('.formfix').querySelectorAll('input')
            let textarea =document.querySelector('.formfix').querySelector('textarea')
            input[0].value = data[indexedit[0]][indexedit[1]].textheader
            input[1].value = data[indexedit[0]][indexedit[1]].title
            textarea.value =  data[indexedit[0]][indexedit[1]].content
            hiddenFormEdit('flex')
        })
    })
}
function Delete_event()
{
    let trashtodo = document.querySelector('.container_body_element_todo').querySelectorAll(".fa-trash")
    trashtodo.forEach((element,x)=>{
        element.addEventListener('click',()=>{
            data[0].splice(x,1)
            Render()
        })
    })
    let trashdoing =document.querySelector('.container_body_element_doing').querySelectorAll(".fa-trash")
    trashdoing.forEach((element,x)=>{
        element.addEventListener('click',()=>{
            data[1].splice(x,1)
            Render()
        })
    })
    let trashcompleted =document.querySelector('.container_body_element_completed').querySelectorAll(".fa-trash")
    trashcompleted.forEach((element,x)=>{
        element.addEventListener('click',()=>{
            data[2].splice(x,1)
            Render()
        })
    })
    let trashblocked = document.querySelector('.container_body_element_blocked').querySelectorAll(".fa-trash")
    trashblocked.forEach((element,x)=>{
        element.addEventListener('click',()=>{
            data[3].splice(x,1)
            Render()
        })
    })
}
function Render(){
    let taskitem = document.querySelectorAll('.element_task')
    taskitem.forEach((element) => {
        element.innerHTML = ``
    })
    for(let i in data){
        data[i].forEach((element)=>{
            GoLive(element)
        })
    } 
    Edit_event()
    Delete_event()
    Count_task()
}
function Count_task(){
    let todosum = document.querySelector(".container_body_element_todo").querySelector('.element_header_sum')
    todosum.innerHTML = data[0].length
    let doingsum = document.querySelector(".container_body_element_doing").querySelector('.element_header_sum')
    doingsum.innerHTML = data[1].length
    let completedsum = document.querySelector(".container_body_element_completed").querySelector('.element_header_sum')
    completedsum.innerHTML = data[2].length
    let blockedsum = document.querySelector(".container_body_element_blocked").querySelector('.element_header_sum')
    blockedsum.innerHTML = data[3].length
}

function Validblur(){
    let input = document.querySelector('.formnewtask').querySelectorAll('input')
    let textarea =document.querySelector('.formnewtask').querySelector('textarea')
    if(!(input[0].value)){document.querySelector('.formnewtask').querySelectorAll('input')[0].style.borderColor = `#ff1205`} 
    else {document.querySelector('.formnewtask').querySelectorAll('input')[0].style.borderColor = `green`}
    if(!(input[1].value)){document.querySelector('.formnewtask').querySelectorAll('input')[1].style.borderColor = `#ff1205`}  
    else {document.querySelector('.formnewtask').querySelectorAll('input')[1].style.borderColor = `green`}
    if(!(textarea.value)){document.querySelector('.formnewtask').querySelector('textarea').style.borderColor = `#ff1205`}  
    else{ document.querySelector('.formnewtask').querySelector('textarea').style.borderColor = `green`}

    let input1 = document.querySelector('.formfix').querySelectorAll('input')
    let textarea1 =document.querySelector('.formfix').querySelector('textarea')
    if(!(input1[0].value)){document.querySelector('.formfix').querySelectorAll('input')[0].style.borderColor = `#ff1205`} 
    else {document.querySelector('.formfix').querySelectorAll('input')[0].style.borderColor = `green`}
    if(!(input1[1].value)){document.querySelector('.formfix').querySelectorAll('input')[1].style.borderColor = `#ff1205`}  
    else {document.querySelector('.formfix').querySelectorAll('input')[1].style.borderColor = `green`}
    if(!(textarea1.value)){document.querySelector('.formfix').querySelector('textarea').style.borderColor = `#ff1205`}  
    else{ document.querySelector('.formfix').querySelector('textarea').style.borderColor = `green`}
}

document.querySelector(".formnewtask").querySelectorAll('input')[0].addEventListener("blur",Validblur)
document.querySelector(".formnewtask").querySelectorAll('input')[1].addEventListener("blur",Validblur)
document.querySelector(".formnewtask").querySelector('textarea').addEventListener("blur",Validblur)

document.querySelector(".formfix").querySelectorAll('input')[0].addEventListener("blur",Validblur)
document.querySelector(".formfix").querySelectorAll('input')[1].addEventListener("blur",Validblur)
document.querySelector(".formfix").querySelector('textarea').addEventListener("blur",Validblur)


