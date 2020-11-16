
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');

var submission = document.getElementById("submission");
// Get the button that opens the modal
var btn = document.getElementById("mentoring");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
//console.log($("#editor").text());


// When the user clicks on the button, open the modal
btn.onclick = function() {

    modal.style.display = "block";

    var editor2 = ace.edit("editor2");
    editor2.setValue(editor.getValue());
    editor2.setTheme("ace/theme/twilight");
    editor2.session.setMode("ace/mode/javascript");
    editor2.setFontSize("15px")
    editor2.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}


submission.onclick = function(){
    alert("제출되었습니다.");

}