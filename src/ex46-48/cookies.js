function setCookie(cookieName, cookieValue, daysToExpire) {

    var d = new Date();

    d.setTime(d.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));

    var expires = "expires=" + d.toGMTString();

    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
};

function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);

    var ca = decodedCookie.split(";");

    for (var i = 0; i < ca.length; i++) {
        var cookie = ca[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

function checkCookie() {

    var user=getCookie("username");
    if (user !== ""){
        alert("Witaj ponownie " + user);
    } else {

        user = prompt("Wpisz swoje imie:", "");

        if (user !== "" && user !== null){
            setCookie("username", user, 30);
        }
    }

}

