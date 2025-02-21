// Xây dựng một ứng dụng cho phép người dùng nhập vào 1 số từ 0 -> 9 và hiển thị cách đọc của số đó ra màn hình . Ví dụ người dùng nhập số 1 thì hiển thị là “Số Một”.

let number = prompt("Nhập vào 1 số ( từ 1 - 9 ):")


switch(number){
    case "1":
    alert("Số một");
    break;
    case"2":
    alert("Số hai");
    break;
    case"3":
    alert("Số ba");
    break;
    case"4":
    alert("Số bốn");
    break;
    case"5":
    alert("Số năm");
    break;
    case"6":
    alert("Số sáu");
    break;
    case"7":
    alert("Số bảy");
    break;
    case"8":
    alert("Số tám");
    break;
    case"9":
    alert("Số chín");
    break;
    default:
    alert("Vui lòng nhập số từ 1 - 9");
    break;
}