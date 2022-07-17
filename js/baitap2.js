/**
 * Bài 2
 * Tính tiền điện
 *  
*/

/**
 * Sơ đồ 3 khối:
 * Khối 1: nhập tên và số KW điện sử dụng
 * name, soKW
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến 
 * name, soKW, tienDien
 * B2: gán giá trị cho biến lấy giá trị từ form
 * B3: Lập công thức tính toán
 * 1: tính tiền điện 50KW đầu
 * tienDien = soKW * 500;
 * 2: tính tiền điện 50KW kế
 * tienDien = 50 * 500 + (soKW - 50) * 650;
 * 3: tính tiền điện 100KW kế
 * tienDien = 50 * 500 + 50 * 650 + (soKW - 100)* 850;
 * 4: tính tiền điện 150KW kế
 * tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
 * 5: tính tiền điện còn lại
 * tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
 * 
 * B4: hiển thị kết quả lên IU
 * 
 * Khối 3: Kết quả (Output)
 * name, tienDien
 * 
 */

function tinhTienDien() {
    var name = document.getElementById("name").value;
    var soKW = Number(document.getElementById("soKW").value);
    var tienDien = 0;
    if (soKW > 0 && soKW <= 50) {
        tienDien = soKW * 500;
    }
    else if (soKW > 50 && soKW <= 100) {
        tienDien = 50 * 500 + (soKW - 50) * 650;
    }
    else if (soKW > 100 && soKW <= 200) {
        tienDien = 50 * 500 + 50 * 650 + (soKW - 100)* 850;
    }
    else if (soKW > 200 && soKW <= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
    }
    else if (soKW > 350){
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
    }
    document.getElementById("txtResult2").innerHTML = "Tiền điện của bạn " + name +" là: " + tienDien.toLocaleString();
}

document.getElementById("btnTinh2").onclick = tinhTienDien;
