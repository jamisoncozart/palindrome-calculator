$(document).ready(function(){
  $("#palindrome").submit(function(event){
    event.preventDefault();
    $("#wordforward").val();
    var word = $("#wordforward").val();
    var revword = word.split("").reverse().join("");
    if (word === revword) {
      alert("palindrome")
    } else {
      alert("you failed.")
    }
  })
})