
function cplusplus() {
    editor.session.setMode("ace/mode/c_cpp");
    console.log("c++ changed")
    mode = 'c++';
    document.getElementById("language").innerHTML = `Language(${mode})`
}

function jvs() {
    editor.session.setMode("ace/mode/javascript");
    console.log("javascript changed")
    mode = 'javascript';
    document.getElementById("language").innerHTML = `Language(${mode})`
}

function py() {
    editor.session.setMode("ace/mode/python");
    console.log("python changed");
    mode = 'python';
    document.getElementById("language").innerHTML = `Language(${mode})`
}

function jv() {
    editor.session.setMode("ace/mode/java");
    console.log("java changed")
    mode = 'java';
    document.getElementById("language").innerHTML = `Language(${mode})`
}

