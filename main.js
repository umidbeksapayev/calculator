const  dis = document.getElementById("display")

function display(dis){
  console.log();
  
}

function appendNumber(smb) {
  dis.value = dis.value+smb
  
}

function appendOperator (op){
  dis.value = dis.value + op
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