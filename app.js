
function validateForm() {
  
  var x = document.forms["myForm"]["name"].value;
  if (x==null || x == "") {
  document.getElementById('Err').style.visibility="visible";
  document.getElementById('Err').innerHTML="<b>Employee Name Must Not Be Blank!!!</b>"; 
    //return false;

  }

  var a = document.forms["myForm"]["address"].value;
  if (a==null || a == "") {
    document.getElementById('Err0').style.visibility="visible";
  document.getElementById('Err0').innerHTML="<b>Address  Must Not Be Blank!!!</b>"; 
    //return false;
  }


  var e = document.forms["myForm"]["email"].value;
  if (e==null || e == "") {
  document.getElementById('Err1').style.visibility="visible";
  document.getElementById('Err1').innerHTML="<b>Email  Must Not Be Blank!!!</b>"; 
    //return false;
  }

  var m = document.forms["myForm"]["mobile"].value;
 
  if (m==null || m == "") {
  document.getElementById('Err2').style.visibility="visible";
  document.getElementById('Err2').innerHTML="<b>Mobile  Must Not Be Blank!!!</b>"; 
  }
  if(m.length != 10){
  document.getElementById('Err2').style.visibility="visible";
  document.getElementById('Err2').innerHTML="<b>Mobile  Must Not Be 10 Digits!!!</b>";     
  }
var reg=/[^0-9]/;
  if (reg.test(m)){
  document.getElementById('Err2').style.visibility="visible";
  document.getElementById('Err2').innerHTML="<b>Mobile  Must Not Be  Digits!!!</b>";  
  }
  // x1=Number.isInteger(x);
  // console.log(!x1)
  if((x !== null && x !== "" && x !== undefined )&&(e !== null && e !== "" && e !== undefined)&&(a !== null && a !== "" && a !== undefined)&&(m !== null && m !== "" && m !== undefined && !isNaN(m))){
    document.getElementById("table").style.opacity=1;
    if (selectedRow == null){
      insert();
      resetForm();
    }
    else{
    updateRecord();
    resetForm();
    }
  }


  return false;
}



list1 =[];
list2 =[];
list3 =[];
list4 =[];
var n=1;
var x=0;

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mobile").value = "";
  selectedRow = null;
}

function insert()
{

   var addrow=document.getElementById('table');
    var newrow=addrow.insertRow(n);

    list1[x]=document.getElementById("name").value;
    list2[x]=document.getElementById("address").value;
    list3[x]=document.getElementById("email").value;
    list4[x]=document.getElementById("mobile").value;
   
    var cel1 =newrow.insertCell(0);
    var cel2 =newrow.insertCell(1);
    var cel3 =newrow.insertCell(2);
    var cel4 =newrow.insertCell(3);
    var cel5 =newrow.insertCell(4);
   

    cel1.innerHTML=list1[x];
    cel2.innerHTML=list2[x];
    cel3.innerHTML=list3[x];
    cel4.innerHTML=list4[x];
    cel5.innerHTML='<input type="button" value="Edit" class="btn btn-primary" title="Edit" onclick="edit(this)"/>&nbsp;<input type="button" value="Delete" class="btn btn-danger" title="Delete" onclick="del(this)"/>';
n++;
x++;
} 

function del(r){
   var i = r.parentNode.parentNode.rowIndex;
   alert("Row Index ==>["+i+"] Deleted Successfully!!");
   if(i==1){
    document.getElementById("table").style.opacity=0;
  }
   document.getElementById("table").deleteRow(i); 
    
}
var selectedRow = null

function edit(r){
    selectedRow = r.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("address").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("mobile").value = selectedRow.cells[3].innerHTML;
}

function updateRecord() {
  selectedRow.cells[0].innerHTML =  document.getElementById("name").value;
  selectedRow.cells[1].innerHTML = document.getElementById("address").value;
  selectedRow.cells[2].innerHTML = document.getElementById("email").value;
  selectedRow.cells[3].innerHTML =  document.getElementById("mobile").value;
}