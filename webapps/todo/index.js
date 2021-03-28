var list=[]
var i=0
checks = []
var initial = ""
//localStorage.list= []
function add(){
    if(document.getElementById('input').value!=""){
        list.push(document.getElementById('input').value)
        checks.push(false)
        console.log(checks)
        document.getElementById('input').value = ""
        i = list.length-1
        console.log(list)
        string="<div class = 'card'><input type='checkbox' id='check' onclick='check("+i+")'>"+list[i]+"<button onclick='remove("+i+")'>delete</button></div>";
        document.getElementById('cards').innerHTML = document.getElementById('cards').innerHTML+(string)
    }
    localStorage.list= list
    localStorage.checker = checks
    console.log(localStorage.checker)
}
function remove(n){
    document.getElementById('cards').innerHTML = initial
    console.log(list.length)
    list.splice(n,1)
    checks.splice(n,1)
    localStorage.setItem('list',list) 
    refresher()
    localStorage.list= list
    localStorage.checker = checks
}
window.addEventListener("keydown", (a)=>{
    if (a.key=="Enter") {
        if(document.getElementById('input').value!=""){
        list.push(document.getElementById('input').value)
        checks.push(false)
        console.log(checks)
        document.getElementById('input').value = ""
        i = list.length-1
        console.log(list)
        string="<div class = 'card'><input type='checkbox' id='check' onclick='check("+i+")'>"+list[i]+"<button onclick='remove("+i+")'>delete</button></div>";
        document.getElementById('cards').innerHTML = document.getElementById('cards').innerHTML+(string)
    }
    localStorage.list= list    
    localStorage.checker = checks
  }  
})
function check(s){
    document.getElementById('cards').innerHTML = initial
    if(checks[s]){
        checks[s]=false
        localStorage.checker = checks
        refresher()
    }
    else{
        checks[s]=true
        localStorage.checker = checks
        refresher()
    }
}    
function refresher(){
    for(i=0; i<checks.length; i++) {
        if (checks[i]){
            string="<div class = 'card'><input type='checkbox' id='check' onclick='check("+i+")' checked=''><s>"+list[i]+"</s><button onclick='remove("+i+")'>delete</button></div>";
            document.getElementById('cards').innerHTML = document.getElementById('cards').innerHTML+(string)
        }
        else{
            string="<div class = 'card'><input type='checkbox' id='check' onclick='check("+i+")'>"+list[i]+"<button onclick='remove("+i+")'>delete</button></div>";
            document.getElementById('cards').innerHTML = document.getElementById('cards').innerHTML+(string)
        }
    }
}
function getData(){
        console.log(list)
        if(localStorage.list){
            console.log(localStorage.list.length)
            list = localStorage.list.split(",")
            checkSet = localStorage.checker.split(",")
            checks = checkSet.map((a) => {
                if(a == "true"){
                return true
                }
                else{
                    return false
                }
            }); 
            console.log(checks)
            refresher()
        }
        else{
            localStorage.list= []
            localStorage.checker= []
            list = []
        }
    }
