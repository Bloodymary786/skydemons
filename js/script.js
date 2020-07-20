function show() {
    var cls = document.getElementById("topnav");
    if (cls.className == "navbar") {
        cls.className += " responsive";
    } else {
        cls.className = "navbar";
    }
}