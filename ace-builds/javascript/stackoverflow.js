var selectionText = "";

document.onmouseup = function() {
        selectionText = document.getSelection();

}


function stackoverflow() {
    // document.getElementsByTagName("object")[0].setAttribute("data", "https://faq.exchange/"+selectionText);
    location.href="https://faq.exchange/+python"

    // document.getElementById("stackoverflow").innerHTML =
    alert(selectionText);

}

function updateDiv()
{
    $( "#here" ).load(window.location.href + " #here" );
}