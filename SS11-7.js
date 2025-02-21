let a = parseFloat(prompt("Nhập số a:"));

let b = parseFloat(prompt("Nhập số b:"));

let phepTinh = prompt("Nhập vào các phép tính (+, -, *, /):");

let result;


if (!isNaN(a) && !isNaN(b) ){
    switch(phepTinh){
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            if (b === 0){
                alert("Không thể chia cho 0");
            } else {
                result = a / b;
            }
            break;
        default:
            alert("Phép tính không hợp lệ!!")
    }

    if (result !== undefined) {
        alert(`Kết quả của phép tính trên: ${a} ${phepTinh} ${b} = ${result}`);
    }
 } else {
    alert("Vui lòng nhập số hợp lệ!!");
 } 
