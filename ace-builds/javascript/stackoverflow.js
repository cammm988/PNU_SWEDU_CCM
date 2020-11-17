var selectionText = "";

document.onmouseup = function() {
        selectionText = document.getSelection();
}

function stackoverflow() {

    if (selectionText.toString() == "" ) {
        alert("원하는 내용을 하이라이트 한 후 버튼을 눌러주십시오")
    }
    else if (selectionText.toString().length >=40) {
        alert("하이라이트 된 코드가 너무 깁니다. 다시 시도해주세요.")
    }
    else {
        alert(selectionText.toString() + "\n코드를 검색합니다");
        // document.getElementsByTagName("object")[0].setAttribute("data", "https://faq.exchange/#"+selectionText.toString());
        document.getElementById("stackoverflow").innerHTML = "<object type=\"text/html\" data=\"https://faq.exchange/#"+selectionText.toString() + " \"width=\"800px\" height=\"600px\" style=\"overflow:auto;\"> </object>"
ㄴ    }
}