var editor2 = ace.edit("editor2");
// ace.require('ace/ext/settings_menu').init(editor);
editor2.setTheme("ace/theme/twilight");
editor2.session.setMode("ace/mode/javascript");
editor2.setFontSize("15px")
// enable autocompletion and snippets
editor2.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});
