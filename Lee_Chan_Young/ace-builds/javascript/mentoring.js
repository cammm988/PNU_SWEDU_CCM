
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');

var submission = document.getElementById("submission");
// Get the button that opens the modal
var btn = document.getElementById("mentoring");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {


    modal.style.display = "block";


}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}


submission.onclick = function(){
    alert("제출되었습니다.");
}