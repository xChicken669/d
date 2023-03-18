function meme() {
    var top = document.getElementById("top").value;
    var bottom = document.getElementById("bottom").value;
    var mem = document.getElementById("meme").value;
    var download = document.getElementById("download");
    var p1 = document.getElementById("p1");

    var image = `http://apimeme.com/meme?meme=${mem}&top=${top}&bottom=${bottom}`

    if (mem == "") {p1.innerHTML = "you need to enter meme name for example Doge,Advice-Doge,Angry-Chicken-Boss"} else {
        p1.innerHTML = ""
        download.innerHTML = "<button>download</button>"
        download.href = image
        document.getElementById("memi").src = image;
    }

    





}