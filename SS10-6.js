// Trong phần này, chúng ta sẽ mô tả thuật toán để chuyển đổi tiền tệ, từ Đô la Mỹ sang Việt Nam Đồng.

// Ban đầu, chúng ta nhập số tiền Đô la Mỹ và sau đó tính ra số tiền Việt Nam Đồng tương ứng.

// VỚI 1$ = 25.000 đ

// Thực hiện chuyển đổi sang tiền việt và hiển thị ra màn hình

let doLa = prompt("Nhập số tiền bạn muốn quy đổi (Từ USD --> VND):");

let exchangeMoney = doLa * 25000;

alert(doLa + " $" + " tương đương" + " " + exchangeMoney + " đ"); 
