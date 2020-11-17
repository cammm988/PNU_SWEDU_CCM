var selectionText = "";

document.onmouseup = function() {
        selectionText = document.getSelection();
}

function stackoverflow() {
    if (selectionText.toString() == "" ) {
        alert("원하는 내용을 하이라이트 한 후 버튼을 눌러주십시오")
    }
    else {
        alert(selectionText) + "\n코드를 검색합니다";
        // document.getElementsByTagName("object")[0].setAttribute("data", "https://faq.exchange/#"+selectionText.toString());
        document.getElementById("stackoverflow").innerHTML = "<object type=\"text/html\" data=\"https://faq.exchange/#"+selectionText.toString() + " \"width=\"800px\" height=\"600px\" style=\"overflow:auto;border:3px ridge blue\"> </object>"

    }
}