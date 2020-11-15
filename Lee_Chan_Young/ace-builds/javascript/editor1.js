//ace.require("ace/ext/language_tools;
var editor = ace.edit("editor");
// ace.require('ace/ext/settings_menu').init(editor);
editor.setTheme("ace/theme/dracula");
editor.session.setMode("ace/mode/javascript");
editor.setFontSize("15px")
// enable autocompletion and snippets
editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
});
