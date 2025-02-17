// Trong phần này, chúng ta sẽ khai báo 3 biến đại diện cho điểm các môn học ở đây là 3 môn học là (math, physics, chemistry), thực hiện tính điểm trung bình 3 môn học trên và hiển thị lên màn hình


let math = parseFloat(prompt("Nhập điểm Toán:"));
let physics = parseFloat(prompt("Nhập điểm Vật lý:"));
let chemistry = parseFloat(prompt("Nhập điểm Hóa học:"));

    let average = (math + physics + chemistry) / 3;

    alert("Điểm trung bình của bạn là: " + average.toFixed(2));
 