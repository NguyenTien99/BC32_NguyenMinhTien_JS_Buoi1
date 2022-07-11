/**
 * Mô hình 3 khối
 * Đầu vào
 * - tạo biến n gán giá trị 5 số
 * Xử lí
 * - tạo biến hàng chục n % 10 
 * - tạo biến hàng đơn vị n / 10
 * Đầu ra
 * - tông 2 số
 */
var n = 12;
var hangchuc = Math.floor(n % 10) ;
var donvi = Math.floor(n / 10);
var tong = hangchuc + donvi;
console.log("Tổng :" , tong);