// Trong phần này, chúng ta sẽ mô tả giải thuật để tìm ra giá trị lớn nhất trong 3 số.
// Ban đầu, chúng ta cho phép nhập 3 giá trị vào. Sau đó, chúng ta thực hiện việc so sách lần lượt từng giá trị để tìm ra giá trị lớn nhất.
// Giả sử a, b, c là 3 biến được nhập vào. Gọi a là phần tử có giá trị lớn nhất, so sánh a với các phần tử còn lại, nếu a lớn hơn 2 phần tử còn lại thì a là lớn nhất, nếu a nhỏ hơn 1 trong hai phần tử còn lại, so sánh các phần tử còn lại với nhau để tìm được giá trị lớn nhất.

let a = parseFloat(prompt("Nhập số thứ nhất (a):"));
let b = parseFloat(prompt("Nhập số thứ nhất (b):"));
let c = parseFloat(prompt("Nhập số thứ nhất (c):"));

// let solonNhat = Math.max(a, b, c);

// alert("Số lớn nhất là " + solonNhat);


if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Vui lòng nhập số hợp lệ!");
} else {
    let max = a;
    if (b > max) {
        max = b;
    }   
    if (c > max) {
        max = c;
    }

    alert("Số lớn nhất trong 3 số là: " + max);
}
