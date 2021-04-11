$(document).ready(function(){
var note=0;
$('#envoyer').click(function(){
    valid=true;
     
    //la coleur orange
       let result=$('input[name="france"]:checked') ;
    if(result.length==0)
      {    
     $("#q1").css("color","orange");
        valid =false;
      }
    else{
    //la couleur des questions
    let r = $("[type='radio']:checked").val();
    if(r=="Paris"){
    $("#q1").css( "color", "green");
    note++;
    
    valid=false;
    }else{
    $("#q1").css("color","red");
    valid=false;
    }
    //la couleur des répances
    $("#q1Paris").css("color","green");
    if(r=="Alger")
    {
      $("#q1Alger").css("color","red");
    }else if(r=="Riyad")
    $("#q1Riyad").css("color","red");
    }
   return valid;
   
});
// maroc
$('#envoyer').click(function(){
  valid=true;
   
  //la coleur orange
    let result=$('input[name="maroc"]:checked') ;
  if(result.length==0)
    {    
   $("#q2").css("color","orange");
      valid =false;
    }
  else{
  //la couleur des questions
  let r = $("input[name='maroc']:checked").val();
  if(r=="Rabat"){
  $("#q2").css( "color", "green");
  note++;
 
  valid=false;
  }else{
  $("#q2").css("color","red");
  valid=false;
  }
  //la couleur des répances
  $("#q2Rabat").css("color","green");
  if(r=="Alger")
  {
    $("#q2Alger").css("color","red");
  }else if(r=="Paris")
  $("#q2Paris").css("color","red");
  }
 return valid;
 
});
 //Algérie
$('#envoyer').click(function(){
  valid=true;
   
  //la coleur orange
    let result=$('input[name="algérie"]:checked') ;
  if(result.length==0)
    {    
   $("#q3").css("color","orange");
      valid =false;
    }
  else{
  //la couleur des questions
  let r = $("input[name='algérie']:checked").val();
  if(r=="Alger"){
  $("#q3").css( "color", "green");
  note++;

  valid=false;
  }else{
  $("#q3").css("color","red");
  valid=false;
  }
  //la couleur des répances
  $("#q3Alger").css("color","green");
  if(r=="Tirana")
  {
    $("#q3Tirana").css("color","red");
  }else if(r=="Paris")
  $("#q3Paris").css("color","red");
  }
 return valid;
 
});
//Allmenge

$('#envoyer').click(function(){
  valid=true;
   
  //la coleur orange
    let result=$('input[name="allemagne"]:checked') ;
  if(result.length==0)
    {    
   $("#q4").css("color","orange");
      valid =false;
    }
  else{
  //la couleur des questions
  let r = $("input[name='allemagne']:checked").val();
  if(r=="Berlin"){
  $("#q4").css( "color", "green");
  note++;
  
  valid=false;
  }else{
  $("#q4").css("color","red");
  valid=false;
  }
  //la couleur des répances
  $("#q4Berlin").css("color","green");
  if(r=="Rabat")
  {
    $("#q4Rabat").css("color","red");
  }else if(r=="Vienne")
  $("#q4Vienne").css("color","red");
  }
 return valid;
 
});
//Canada

$('#envoyer').click(function(){
  valid=true;
   
  //la coleur orange
    let result=$('input[name="canada"]:checked') ;
  if(result.length==0)
    {    
   $("#q5").css("color","orange");
      valid =false;
    }
  else{
  //la couleur des questions
  let r = $("input[name='canada']:checked").val();
  if(r=="Ottawa"){
  $("#q5").css( "color", "green");
  note++;

  valid=false;
  }else{
  $("#q5").css("color","red");
  valid=false;
  }
  //la couleur des répances
  $("#q5Ottawa").css("color","green");
  if(r=="Paris")
  {
    $("#q5Paris").css("color","red");
  }else if(r=="Vienne")
  $("#q5Vienne").css("color","red");
  }
  $("#q6").html("votre note est: "+note+"/5");
 return valid;
 
});


});