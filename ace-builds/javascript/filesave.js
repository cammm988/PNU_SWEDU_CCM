function saveFile() {
    var content = new Blob(["test text"], {type: "text/plain; charset = utf-8"});
    console.log(mode);
    switch(mode) {
        case "javascript":
            mode = "js"
            break;
        case "python":
            mode = "py"
            break;
        case "java":
            mode = "java"
            break;
        case "c++":
            mode = "cpp"
            break;
        default:
            break;
    }
    saveAs(content, "testfile1."+mode);
}