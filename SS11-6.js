// Chỉ số khối cơ thể (Body mass index-BMI) là một thước đo sức khỏe dựa trên cân nặng và chiều cao. Nó được tính bằng cách lấy cân nặng đơn vị tính kilogam chia cho bình phương của chiều cao đơn vị tính mét. Công thức:

let weight = parseFloat(prompt("Nhập cân nặng của bạn (kg):"));

let height = parseFloat(prompt("Nhập chiều cao của bạn (m):"));

if (!isNaN(weight) && !isNaN(height) && height > 0){
    
    let BMI = weight / (height**2);

    alert("Chỉ số BMI của bạn là: " + BMI.toFixed(2));

    if (BMI < 18.5){
        alert("Bạn là người có cân nặng thấp (gầy)");
    } else if (  BMI >= 18.5 && BMI < 24.9 ){
        alert("Bạn là người có cân nặng bình thường");
    } else if ( BMI >= 25 && BMI < 29.9){
        alert("Bạn là người tiền béo phí");
    }else if ( BMI >= 30 && BMI <= 34.9){
        alert("Bạn bị béo phì độ I");
    }else if ( BMI >= 35 && BMI <= 39.9){
        alert("Bạn bị béo bị độ II");
    }else {
        alert("Bạn bị béo phì độ III");
}   
}else {
    alert("Vui lòng nhập đúng số hợp lệ!");
}
