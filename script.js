var icon = document.getElementById("icon");

if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light");
}

var localData = localStorage.getItem("theme");

if (localData == "light") {
    icon.src = "images/moon.png";
    document.body.style.backgroundImage = "radial-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.07)), url("+"images/pattern2.jpg"+")";
    document.body.classList.remove("dark-theme");
}
else if (localData == "dark") {
    icon.src = "images/sun.png";
    document.body.style.background = "#1c1c1c";
    document.body.classList.add("dark-theme");
}

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.png";
        document.body.style.background = "#1c1c1c";
        localStorage.setItem("theme", "dark");
    }
    else {
        icon.src = "images/moon.png";
        document.body.style.backgroundImage = "radial-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.07)), url("+"images/pattern2.jpg"+")";
        localStorage.setItem("theme", "light");
    }
}

document.getElementById("btnSend").onclick = function(){
    window.location="about_us_page.html";
}