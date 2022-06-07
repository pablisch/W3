
function Show_Hide(){
    if (document.getElementById("appear").style.display == 'none'){
      document.getElementById("appear").style.display = 'block';
    }else{
      document.getElementById("appear").style.display = 'none';
    }
  }
  function Generate_Random_Colour(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function Change_Colour(){
    document.getElementById("title").style.color = Generate_Random_Colour();
    document.getElementById("title").style.backgroundColor = Generate_Random_Colour();
    document.getElementById("intro").style.color = Generate_Random_Colour();
    var x = document.getElementsByClassName("block");
    for(var i =0;i< x.length;i++){
      x[i].style.backgroundColor = Generate_Random_Colour();
    }
  
  }
  function Change_Font_Size(){
    var x = document.getElementsByTagName("p");
    for(var i =0;i< x.length;i++){
      if(x[i].style.fontSize=="16px"){
        x[i].style.fontSize="20px";
      }else{
        x[i].style.fontSize="16px";
      }
    }
  }
  function Check_Filled_Name()
  {
    var x = document.forms.Quiz.elements.fullname.value;
    if(x===""){
      return false;
    }
    return true;
  }
  function Check_Filled_Questions()
  {
    var x = document.forms.Quiz.elements.q1.value;
    if(x===""){
      return false;
    }
    x = document.forms.Quiz.elements.q2.value;
    if(x===""){
      return false;
    }
    x = document.forms.Quiz.elements.q3.value;
    if(x===0){
      return false;
    }
    x = document.forms.Quiz.elements.q4.value;
    if(x===0){
      return false;
    }
    return true
  }
  
  function Check_Empty_Responses(){
    if(Check_Filled_Name()&&Check_Filled_Questions()){
      return true;
    }else{
      return false;
    }
  } 
  function Calc_Score(){
    var quiz = document.forms.Quiz.elements;
    var score = 0;
    if(quiz.q1.value=="energy"){
      score++;
    }
    if(quiz.q2.value=="China"){
      score++;
    }
    if(quiz.q3.value==1.5){
      score++;
    }
    if(quiz.q4.value==2019){
      score++;
    }
    return score;
  }
  function Show_Congratulations(score){
    document.forms.Quiz.style.display = "none";
    body = document.getElementsByTagName("body")[0];
    if(score===0){
      body.innerHTML="<p style='font-size:30px'>Oh dear, you got "+score+"/4</p>";
    }else if (score<4){
      body.innerHTML="<p style='font-size:30px'>Well done, you got "+score+"/4</p>";
    }else{
      body.innerHTML="<p style='font-size:30px'>Wow, you got "+score+"/4!</p>";
    }
    body.innerHTML+='<p>Thank you for completing the quiz!</p>';
    body.innerHTML+='<img src="smile.jfif"; width=300px; height=auto>';
    body.innerHTML+='<p><a href="index.html"> Home</a></p>';
  }
  
  function Submit_Response(){
    if(!Check_Empty_Responses()){
      window.alert("Please fill in all fields.");
    }else{
      Show_Congratulations(Calc_Score());
    }
  }