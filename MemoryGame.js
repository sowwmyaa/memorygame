window.addEventListener("load", function () {
    var div = document.getElementsByClassName("divin");
    var img1 = 0, img2 = 0, img3 = 0, img4 = 0, img5 = 0, img6 = 0, img7 = 0, img8 = 0;
    for (var i = 0; i < 16; i++) {
        var control = 0;
        var random = parseInt(1 + (Math.random() * 8));
        if (img1 != 2 && random == 1) {
            var img = document.createElement("img");
            img.src = "futbol.jpg";
            img.className = "img16";
            img.id = "futbol";
            img.style.zIndex = "-1";
            div[i].appendChild(img);
            img1++;
            control = 1;
        }
        if (img2 != 2 && random == 2) {
            var img = document.createElement("img");
            img.src = "basketbol.jpg";
            img.className = "img16";
            img.id = "basketbol";
            img.style.zIndex = "-1";
            div[i].appendChild(img);
            img2++;
            control = 1;
        }
        if (img3 != 2 && random == 3) {
            var img = document.createElement("img");
            img.src = "voleybol.jpg";
            img.className = "img16";
            img.id = "voleybol";
            img.style.zIndex = "-1";
            div[i].appendChild(img);
            img3++;
            control = 1;
        }
        if (img4 != 2 && random == 4) {
            var img = document.createElement("img");
            img.src = "bilardo.jpeg";
            img.className = "img16";
            img.id = "bilardo";
            img.style.zIndex = "-1";
            div[i].appendChild(img);
            img4++;
            control = 1;
        }
        if (img5 != 2 && random == 5) {
            var img = document.createElement("img");
            img.src = "badminton.jpg";
            img.className = "img16";
            img.id = "badminton";
            img.style.zIndex = "-1";
            div[i].appendChild(img);
            img5++;
            control = 1;
        }
        if (img6 != 2 && random == 6) {
            var img = document.createElement("img");
            img.src = "american.jpg";
            img.className = "img16";
            img.id = "american";
            img.style.zIndex = "-1";
            div[i].appendChild(img);
            img6++;
            control = 1;
        }
        if (img7 != 2 && random == 7) {
            var img = document.createElement("img");
            img.src = "tenis.jpg";
            img.className = "img16";
            img.id = "tenis";
            img.style.zIndex = "-1";
            div[i].appendChild(img);
            img7++;
            control = 1;
        }
        if (img8 != 2 && random == 8) {
            var img = document.createElement("img");
            img.src = "golf.jpg";
            img.className = "img16";
            img.id = "golf";
            img.style.zIndex = "-1";
            div[i].appendChild(img);
            img8++;
            control = 1;
        }
        if (control != 1) {
            i--;
        }
    }
});

var count = 0;
var temp, temp2;
var tiklama = 0;
var numtemp = 100;
var tiklandi = [];
var result = 0;
function memorygame(elem, num) {
    if (tiklama != 2 && num != numtemp && tiklandi[num] != 1) {
        var numtemp2 = numtemp;
        numtemp = num;
        tiklama++;
        tiklandi[num] = 1;
        elem.childNodes[1].style.zIndex = "1";
        count++;
        if (count == 2) {

            temp2 = temp;
            var check = 0;
            Time();
            function Time() {
                var time = setTimeout(Time, 1000)
                check++;
                if (elem.childNodes[1].id.toString() == temp2.childNodes[1].id.toString()) {
                    if (check == 2) {
                        count = 0;
                        tiklama = 0;
                        clearTimeout(time);
                        result++;
                        if (result == 8)
                            alert("Congrulations!");
                    }
                }
                else {
                    if (check == 2) {
                        clearTimeout(time);
                        elem.childNodes[1].style.zIndex = "-1";
                        temp2.childNodes[1].style.zIndex = "-1";
                        count = 0;
                        tiklama = 0;
                        tiklandi[num] = 0;
                        tiklandi[numtemp2] = 0;
                    }
                }
            }
        }

        temp = elem;
    }
}
function showAll() {
    var show = document.getElementsByClassName("img16");
    for (var i = 0; i < show.length; i++) {
        show[i].style.zIndex = "1";
    }
}
var startt = 0;
function start() {
    if (startt == 0) {
        var second = 59, minute = 0, hour = 0;
        var p = document.createElement("p");
        var div = document.getElementById("p");
        Time();
        function Time() {
            var time = setTimeout(Time, 1000);
            if (second > -1 && second < 10)
                p.textContent = "0" + hour + ":0" + minute + ":0" + second;
            if (second > 9 && second < 60)
                p.textContent = "0" + hour + ":0" + minute + ":" + second;
            if (second < 0) {
                minute--;
                second = 60;
            }

            if (minute == 0 && second == 0) {
                clearTimeout(time);
                alert("Time is up");
            }
            div.appendChild(p);
            second--;
        }    
    }
    startt++;
}
