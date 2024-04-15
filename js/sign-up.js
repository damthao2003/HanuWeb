function send() {
    var arr = document.getElementsByTagName('input');
    var fname = arr[0].value;
    var dbirth = arr[1].value;
    var gioiTinh = arr[2].value
    var email= arr[3].value;
    var mk = arr[4].value;
    var mk_l = arr[5].value
    if (fname=="" || dbirth=="" || gioiTinh=="" ||email==""|| mk==""|| mk_l==""){
        document.getElementById('baoloi').innerHTML = "Vui long nhap tiep cac gia tri";
        // alert("Vui long nhap tiep cac gia tri");
    }
    if (fname!="" && dbirth!="" && dbirth!='' && email!=""&& mk!="" && mk_l!=""){
        document.getElementById('baoloi').innerHTML = "";
    }
    if(email!="@") {
        document.getElementById('baoloi').innerHTML ="Vui long nhap lai email";
    }
    if(mk != mk_l){
        document.getElementById('baoloi').innerHTML= "Mật khẩu không chính xác. Vui lòng nhập lại"

    }

}
