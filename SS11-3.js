// Viết chương trình kiểm tra đăng nhập hệ thống của người dùng.
// Yêu cầu người dùng nhập tên từ bàn phím.
// Nếu tên nhập vào là ADMIN thì yêu cầu nhập mật khẩu :
// Nếu mật khẩu là TheMaster thì in ra chuỗi Welcome.

// Nếu mật khẩu nhập vào là null in ra chuỗi Cancelled.

// Còn lại in ra chuỗi Wrong password.

// Nếu tên nhập vào là null in ra chuỗi Cancelled
// Còn lại in ra chuỗi “I Don’t know you”


let id = prompt("Nhập tên đăng nhập:");

if (id === "ADMIN"){
    let pw = prompt("Vui lòng nhập mật khẩu:")

    if(pw === "TheMaster") {
        alert("Welcome!!");
    } else if (pw === null){
        alert("Cancelled");
    } else {
        alert("Wrong Password");
    }
} else if (id === null) {
    alert("Cancelled");
} else {
    alert("I Don’t know you");
}
