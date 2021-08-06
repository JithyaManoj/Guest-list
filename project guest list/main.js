var student_array=[];

function submit(){
     var n1=document.getElementById("s1").value;
     student_array.push(n1);
 
     var n2=document.getElementById("s2").value;
     student_array.push(n2);

     var n3=document.getElementById("s3").value;
     student_array.push(n3);

     var n4=document.getElementById("s4").value;
     student_array.push(n4);

     document.getElementById("Rt").innerHTML=student_array;

     document.getElementById("b1").style.display="none";
     
     document.getElementById("b2").style.display="inline-block";

}


function sort(){
     student_array.sort();
     document.getElementById("Rt").innerHTML=student_array;

}