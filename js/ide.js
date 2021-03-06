function Onload(){
    document.getElementById("code-editor").value = localStorage.getItem("htmlcode");
    setInterval(function(){
        var text = document.getElementById("code-editor").value;
        document.getElementById("preview").innerHTML = text;
    }, 200);
}

function enterpressalert(e, textarea){
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13) { 
        var lines=textarea.value.match(/\n/g).length + 1;
        document.getElementById("no").innerHTML= "1";
        var numberoflines = 0;
        for ( numberoflines = 2; numberoflines < lines+1; numberoflines++) { 
            document.getElementById("no").innerHTML= document.getElementById("no").innerHTML +"<br>"+ numberoflines;
        }
    }
    if(code == 8) {
        var lines=textarea.value.match(/\n/g).length + 1;
        document.getElementById("no").innerHTML= "1";
        var numberoflines = 0;
        for ( numberoflines = 2; numberoflines < lines+1; numberoflines++) { 
            document.getElementById("no").innerHTML= document.getElementById("no").innerHTML +"<br>"+ numberoflines;
        }
    }
}

function saveitonLocal(){
    var text = document.getElementById("code-editor").value;
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("htmlcode",text );
        document.getElementById("code-editor").value = localStorage.getItem("htmlcode");
        document.getElementById("notificationSave").innerHTML = "Successfully saved your file"; document.getElementById("notificationSave").style.right = "0px";
        setTimeout(function(){document.getElementById("notificationSave").style.right = "-400px";} , 5000);
    } else {
        document.getElementById("notificationSave").innerHTML = "unsuccessful in saving your file";  document.getElementById("notificationSave").style.right = "0px";
    }    
}

function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("web-dev").style.marginLeft = "250px";
    document.body.style.backgroundColor = "#3064d8";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("web-dev").style.marginLeft ="0px";
    document.body.style.backgroundColor = "#3064d8";
}

function newFile() {
    localStorage.clear(htmlcode);
    window.location.reload();
}