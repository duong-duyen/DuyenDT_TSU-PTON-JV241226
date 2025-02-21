// Những năm chia hết cho 4 mà không chia hết cho 100 là năm nhuận
// Những năm chia hết cho 100 mà không chia hết cho 400 thì KHÔNG PHẢI là năm nhuận
// Những năm chia hết đồng thời cho 100 và 400 là năm nhuận

let year = parseInt(prompt("Nhập năm bạn muốn xác nhận:")) ;

if ((year % 4 === 0 && year % 100 !==0) || (year % 400 === 0) ){
    alert("Năm " + year + " là năm nhuận");
} else {
    alert("Năm " + year + " không phải năm nhuận");
}
