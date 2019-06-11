//   function check(id){

// var input = document.getElementById(id);

// if(input.value.length == 0){

// input.style.background="#f2dede";

// }

// }

// function validate(){

// // check('mylocation');

// // check('mytime');

// // check('mydate');



// function getField(id){

// var input = document.getElementById(id);

// x = input.value;

// return x;

// }

// function clearField(id){

// var input = document.getElementById(id);

// x = input.value="";

// return x;

// }

// f1=getField('mylocation');

// f2=getField('mytime');

// f3=getField('mydate');

// if(f1.length != 0 && f2.length != 0 && f3.length != 0){

// action();

// }else{

// document.getElementById('error').style.display = "block";

// }

// }

// function ChangeBackground(id)

// {

// document.getElementById(id).style.backgroundColor="#FFF";

// }

function clearDiv(id){

  var output = document.getElementById(id);

  output.innerHTML = "";

}

function writeSuccess(id){

  var output = document.getElementById(id);

  output.innerHTML = "Saved!";

}

function gearloader(id){

  var output = document.getElementById(id);

  output.innerHTML = "&nbsp;&nbsp;&nbsp;<img src='images/gear.gif' />";

}

function getField(id){

var input = document.getElementById(id);

x = input.value;

return x;

}



function writeCopyright(id){

input = getField(id);

input += ' &copy;';

document.getElementById(id).innerHTML = input;

 }



 function linebreak(id){

input = getField(id);

breakline = "&#10;";

document.getElementById(id).innerHTML += breakline;

 }



function updatemenu(){

f1 = getField('menuItem1');

f2 = getField('menuItem2');

f3 = getField('menuItem3');

f4 = getField('menuItem4');

f5 = getField('menuItem5');

f6 = getField('menuItem6');

menu();

}



function menu()

{



if (window.XMLHttpRequest)

  {// code for IE7+, Firefox, Chrome, Opera, Safari

  xmlhttp=new XMLHttpRequest();

  }

else

  {// code for IE6, IE5

  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

  }

xmlhttp.onreadystatechange=function()

  {

  // if (0<1)

  if (xmlhttp.readyState==4 && xmlhttp.status==200)

    {

    // alert("Update successfuly!");

    document.getElementById("responese").innerHTML="&nbsp;&nbsp;&nbsp;<img src='images/gear.gif' />";

    setTimeout(function() { writeSuccess("responese"); }, 2000);

    // setTimeout(function() { clearDiv("responese"); }, 4000);

    setTimeout(function() { location.reload(); }, 3000);

    // }else{

      // alert("");

    // alert(f1+"\n"+f2+"\n"+f3+"\n"+f4+"\n"+f5+"\n"+f6+"\n");

    // alert("State"+xmlhttp.readyState+"\n Status"+xmlhttp.status);

    }

 }

xmlhttp.open("GET","update-menu.php?f1="+f1+"&f2="+f2+"&f3="+f3+"&f4="+f4+"&f5="+f5+"&f6="+f6,true);

// xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

// xmlhttp.send('f1='+encodeURIComponent(f1)+'&f2='+encodeURIComponent(f2)+'&f3='+encodeURIComponent(f3)+'&f4='+encodeURIComponent(f4)+'&f5='+encodeURIComponent(f5)+'&f6='+encodeURIComponent(f6));

xmlhttp.send();





}



//update footer







function updateFooter(){



if (window.XMLHttpRequest)

  {// code for IE7+, Firefox, Chrome, Opera, Safari

  xmlhttp=new XMLHttpRequest();

  }

else

  {// code for IE6, IE5

  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

  }

xmlhttp.onreadystatechange=function()

  {

  // if (0<1)

  if (xmlhttp.readyState==4 && xmlhttp.status==200)

    {

    // alert("Update successfuly!");

    document.getElementById("responeseFooter").innerHTML="&nbsp;&nbsp;&nbsp;<img src='images/gear.gif' />";

    setTimeout(function() { writeSuccess("responeseFooter"); }, 2000);

    setTimeout(function() { clearDiv("responeseFooter"); }, 4000);

    // }else{

      // alert("");

    // alert(f1+"\n"+f2+"\n"+f3+"\n"+f4+"\n"+f5+"\n"+f6+"\n");

    // alert("State"+xmlhttp.readyState+"\n Status"+xmlhttp.status);

    }

 }

xmlhttp.open("GET","update-footer.php?footer="+encodeURIComponent(footerText),true);

// xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

// xmlhttp.send('f1='+encodeURIComponent(f1)+'&f2='+encodeURIComponent(f2)+'&f3='+encodeURIComponent(f3)+'&f4='+encodeURIComponent(f4)+'&f5='+encodeURIComponent(f5)+'&f6='+encodeURIComponent(f6));

xmlhttp.send();

}



function footer(){

footerText = getField('footerArea');

updateFooter();

}





//update pages



function updatePage(pageid,response,titleid,contentid){

  titleField = getField(titleid);

  contentField = getField(contentid);



if (window.XMLHttpRequest)

  {// code for IE7+, Firefox, Chrome, Opera, Safari

  xmlhttp=new XMLHttpRequest();

  }

else

  {// code for IE6, IE5

  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

  }

xmlhttp.onreadystatechange=function()

  {

  // if (0<1)

  if (xmlhttp.readyState==4 && xmlhttp.status==200)

    {

    // alert("Update successfuly!");

    document.getElementById(response).innerHTML="&nbsp;&nbsp;&nbsp;<img src='images/gear.gif' />";

    setTimeout(function() { writeSuccess(response); }, 2000);

    setTimeout(function() { clearDiv(response); }, 4000);

    // }else{

      // alert("");

    // alert(f1+"\n"+f2+"\n"+f3+"\n"+f4+"\n"+f5+"\n"+f6+"\n");

    // alert("State"+xmlhttp.readyState+"\n Status"+xmlhttp.status);

    }

 }

xmlhttp.open("GET","update-page.php?pageid="+pageid+"&title="+titleField+"&content="+contentField,true);

// xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

// xmlhttp.send('f1='+encodeURIComponent(f1)+'&f2='+encodeURIComponent(f2)+'&f3='+encodeURIComponent(f3)+'&f4='+encodeURIComponent(f4)+'&f5='+encodeURIComponent(f5)+'&f6='+encodeURIComponent(f6));

xmlhttp.send();

}



// function footer(pageid,response){

// footerText = getField('footerArea');

// updatePage(pageid,response);

// }

// window.onLoad=alert("bang");





// update sidebars





function updateSidebar(pageid,response,titleid,contentid){

  titleField = getField(titleid);

  contentField = getField(contentid);



if (window.XMLHttpRequest)

  {

  xmlhttp=new XMLHttpRequest();

  }

else

  {

  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

  }

xmlhttp.onreadystatechange=function()

  {

  if (xmlhttp.readyState==4 && xmlhttp.status==200)

    {

    // alert("Update successfuly!");

    document.getElementById(response).innerHTML="&nbsp;&nbsp;&nbsp;<img src='images/gear.gif' />";

    setTimeout(function() { writeSuccess(response); }, 2000);

    setTimeout(function() { clearDiv(response); }, 4000);

    }

 }

xmlhttp.open("GET","update-sidebar.php?pageid="+pageid+"&title="+titleField+"&content="+encodeURIComponent(contentField),true);

xmlhttp.send();

}



// send message function

function sent(id){

  var output = document.getElementById(id);

  output.innerHTML = "Mesajul a fost trimis!";

document.getElementById('name').value="";

document.getElementById('phone').value="";

document.getElementById('email').value="";

document.getElementById('message').value="";



}



function send(){

  name = getField('name');

  phone = getField('phone');

  email = getField('email');

  message = getField('message');

  document.getElementById('msgResponse').innerHTML="&nbsp;&nbsp;&nbsp;<img src='img/gear.gif' />";



if (window.XMLHttpRequest)

  {

  xmlhttp=new XMLHttpRequest();

  }

else

  {

  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

  }

xmlhttp.onreadystatechange=function()

  {

  if (xmlhttp.readyState==4 && xmlhttp.status==200)

    {

    // alert("Update successfuly!");

    setTimeout(function() { sent('msgResponse'); }, 100);

    setTimeout(function() { clearDiv('msgResponse'); }, 3000);

    // }else{

          // alert("State"+xmlhttp.readyState+"\n Status"+xmlhttp.status);



    }

 }

xmlhttp.open("GET","send-message.php?name="+name+"&phone="+phone+"&email="+email+"&message="+message,true);

xmlhttp.send();

}



// update response message for contact form



function updateResponse(){

  message = getField('theResponse');



if (window.XMLHttpRequest)

  {

  xmlhttp=new XMLHttpRequest();

  }

else

  {

  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

  }

xmlhttp.onreadystatechange=function()

  {

  if (xmlhttp.readyState==4 && xmlhttp.status==200)

    {

    // alert("Update successfuly!");

    document.getElementById('responsespan').innerHTML="&nbsp;&nbsp;&nbsp;<img src='images/gear.gif' />";

    setTimeout(function() { writeSuccess('responsespan'); }, 2000);

    setTimeout(function() { clearDiv('responsespan'); }, 7000);

    // }else{

          // alert("State"+xmlhttp.readyState+"\n Status"+xmlhttp.status);



    }

 }

xmlhttp.open("GET","update-response.php?msg="+message,true);

xmlhttp.send();

}



//change admin password



function changePass(){

  newpass = getField('newpass');

  repass = getField('repass');

if (window.XMLHttpRequest)

  {

  xmlhttp=new XMLHttpRequest();

  }

else

  {

  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

  }

xmlhttp.onreadystatechange=function()

  {

  if (xmlhttp.readyState==4 && xmlhttp.status==200)

    {

    // alert("Update successfuly!");

    document.getElementById('passChange').innerHTML="&nbsp;&nbsp;&nbsp;<img src='images/gear.gif' />";

    setTimeout(function() { writeSuccess('passChange'); }, 2000);

    setTimeout(function() { clearDiv('passChange'); }, 7000);

    // }else{

          // alert("State"+xmlhttp.readyState+"\n Status"+xmlhttp.status);



    }

 }

xmlhttp.open("GET","change-pass.php?pass="+newpass,true);

xmlhttp.send();

}



function checkPass(){

  newpass = getField('newpass');

  repass = getField('repass');

if (newpass==repass) {

document.getElementById('status-pass').innerHTML=" &nbsp;&nbsp;&nbsp;<i class='icon-ok'></i> Ok!";  

}else{

document.getElementById('status-pass').innerHTML=" &nbsp;&nbsp;&nbsp;<i class='icon-remove'></i> Password mismatch!";  

}

}



//mark mesage as read



function readmsg(id){



if (window.XMLHttpRequest)

  {

  xmlhttp=new XMLHttpRequest();

  }

else

  {

  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

  }

xmlhttp.onreadystatechange=function()

  {

  if (xmlhttp.readyState==4 && xmlhttp.status==200)

    {

  // alert("fuck you! "+ id);

    // alert(xmlhttp.responseText);



    // }else{

          // alert("State"+xmlhttp.readyState+"\n Status"+xmlhttp.status);



    }

 }

xmlhttp.open("GET","read.php?id="+id,true);

xmlhttp.send();

}



function delmsg(id){



if (window.XMLHttpRequest)

  {

  xmlhttp=new XMLHttpRequest();

  }

else

  {

  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

  }

xmlhttp.onreadystatechange=function()

  {

  if (xmlhttp.readyState==4 && xmlhttp.status==200)

    {

    // alert(xmlhttp.responseText);

    window.location.reload(true);



    // }else{

          // alert("State"+xmlhttp.readyState+"\n Status"+xmlhttp.status);



    }

 }

xmlhttp.open("GET","delmsg.php?id="+id,true);

xmlhttp.send();

}



//upload image 



function upload(){



}



//update mail



function updateEmail(){

  message = getField('theEmail');



if (window.XMLHttpRequest)

  {

  xmlhttp=new XMLHttpRequest();

  }

else

  {

  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

  }

xmlhttp.onreadystatechange=function()

  {

  if (xmlhttp.readyState==4 && xmlhttp.status==200)

    {

    // alert("Update successfuly!");

    document.getElementById('responseemail').innerHTML="&nbsp;&nbsp;&nbsp;<img src='images/gear.gif' />";

    setTimeout(function() { writeSuccess('responseemail'); }, 2000);

    setTimeout(function() { clearDiv('responseemail'); }, 7000);

    // }else{

          // alert("State"+xmlhttp.readyState+"\n Status"+xmlhttp.status);



    }

 }

xmlhttp.open("GET","update-email.php?msg="+message,true);

xmlhttp.send();

}