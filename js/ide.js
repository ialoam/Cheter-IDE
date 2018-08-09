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
        document.getElementById("notificationSave").innerHTML = "Successfully saved your file"; document.getElementById("notificationSave").style.left = "0px";
        setTimeout(function(){document.getElementById("notificationSave").style.left = "-400px";} , 5000);
    } else {
        document.getElementById("notificationSave").innerHTML = "unsuccessful in saving your file";  document.getElementById("notificationSave").style.left = "0px";
    }    
}
