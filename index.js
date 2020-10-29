name=document.getElementById("name");
address=document.getElementById("address");
phone=document.getElementById("contact");
dob=document.getElementById("dateofb");
issueddate=document.getElementById("issueddate");
idnumber=document.getElementById("idnumber");

name1=prompt("Enter Student Name:");
address1=prompt("Enter Student Address:");
phone1=prompt("Enter Student Contact No.:");
dob1=prompt("Enter Student Date-Of-Birth:");
issueddate1=prompt("Enter Id Card Issued Date:");
idnumber1=prompt("Enter Student ID No.:");

function generate(){
    document.getElementById("name").innerHTML = name1;
    document.getElementById("address").innerHTML = address1;
    document.getElementById("contact").innerHTML = phone1;
    document.getElementById("dateofb").innerHTML = dob1;
    document.getElementById("issueddate").innerHTML = issueddate1;
    document.getElementById("idnumber").innerHTML = idnumber1;
}
function print(){  
    idcard=document.getElementById("card");
    window.print("card-body")
}