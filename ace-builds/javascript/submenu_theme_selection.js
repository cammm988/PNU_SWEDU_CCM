function chaos() {

    editor.setTheme("ace/theme/chaos");
    theme = 'chaos';
    document.getElementById("theme").innerHTML = `theme(${theme})`

}

function chrome() {
    editor.setTheme("ace/theme/chrome");
    theme = 'chrome';
    document.getElementById("theme").innerHTML = `theme(${theme})`
}

function dracula() {
    editor.setTheme("ace/theme/dracula");
    theme = 'dracula';
    document.getElementById("theme").innerHTML = `theme(${theme})`
}

function github() {
    editor.setTheme("ace/theme/github");
    theme = 'github';
    document.getElementById("theme").innerHTML = `theme(${theme})`
}