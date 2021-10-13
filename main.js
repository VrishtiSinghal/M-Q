function addUser(){
    player1_user_name=document.getElementById("player1_name_input").value ;
    player2_user_name=document.getElementById("player2_name_input").value ;

    localStorage.setItem("Player1_name", player1_user_name);
    localStorage.setItem("Player2_name", player2_user_name);

    window.location="math-quiz.html";
}