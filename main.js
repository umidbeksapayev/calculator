const  dis = document.getElementById("display")
let smby = document.getElementsByClassName("smboly")

function display(dis){
  console.log();
  
}

function appendNumber(smb) {
  dis.value = dis.value+smb
  for (let i=0 ; i<5; i++){
    console.log(smby[i]);
    
    smby[i].disabled = false;
  }
  
}

function appendOperator (op){
  dis.value = dis.value + op
  for (let i=0 ; i<5; i++){
    console.log(smby[i]);
    
    smby[i].disabled = true;
  }
}

function calculate(){
  dis.value = eval(dis.value)
}

function clearDisplay(){
  dis.value = ""
}

function deleteLast(){
  dis.value = dis.value.slice(0,-1)
}
