var filename;
var last_filename;
function openFile() {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "text/plain"; // 확장자가 xxx, yyy 일때, ".xxx, .yyy"
    input.onchange = function (event) {
        processFile(event.target.files[0]);
        // console.log(event.target.files[0].name);
        filename = event.target.files[0].name;
        last_filename = filename.split(".").pop();

        if (last_filename == 'py') {
            py();
        }
        else if (last_filename == "jvs") {
            jvs();
        }
        else if (last_filename == "cpp" || last_filename == "c") {
            cplusplus();
        }
        else if (last_filename == "jv") {
            jv();
        }
        // console.log(last_filename);

    };
    input.click();

}
function processFile(file) {
    var reader = new FileReader();
    reader.onload = function () {
        //console.log(reader.result);
        editor.setValue(reader.result);
        console.log(last_filename);
    };

    reader.readAsText(file, /* optional */ "UTF-8");

}