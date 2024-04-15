function send() {
    var arr = document.getElementsByTagName('input');
    var fname = arr[0].value;
    var email= arr[1].value;
    var mk = arr[2].value;
    if (fname=="" ||email==""|| mk==""){
        document.getElementById('baoloi').innerHTML = "Vui long nhap tiep cac gia tri";
    }
    if (fname!="" && email!=""&& mk!=""){
        document.getElementById('baoloi').innerHTML = "";
    }
    if(email!="@") {
        document.getElementById('baoloi').innerHTML ="Vui long nhap lai email";
    }

}
