/**
 * Bài 1
 * Quản lý sinh viên
 */

/**
 * Sơ đồ 3 khối:
 * Khối 1: cho điểm chuẩn, điểm thi 3 môn, khu vực và đối tượng ưu tiên
 * diemChuan, diem1, diem2, diem3, khuVuc, doiTuong
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến 
 * diemChuan, diem1, diem2, diem3, khuVuc, doiTuong
 * xetKQ, tongDiem, uuTien
 * B2: gán giá trị cho biến lấy các giá trị từ form
 * B3: Lập công thức tính toán
 * 1: tính điểm ưu tiên theo khu vực
 * 2: tính điểm ưu tiên theo đối tượng
 * 3: tính tổng điểm
 * tongDiem = diem1 + diem2 + diem3 + uuTien;
 * 4: Xét đậu hay trượt
 * nếu tongDiem >= diemChuan && diem1 > 0 && diem2 > 0 && diem3 > 0 => đậu
 * còn lại trượt
 * 
 * B4: hiển thị kết quả lên IU
 * 
 * Khối 3: Kết quả (Output)
 * tongDiem, xetKQ
 * 
 */

function xetDiemThi() {
    var diemChuan = Number(document.getElementById("diemChuan").value);
    var diem1 = Number(document.getElementById("diem1").value);
    var diem2 = Number(document.getElementById("diem2").value);
    var diem3 = Number(document.getElementById("diem3").value);
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = document.getElementById("doiTuong").value;
    var xetKQ = "";
    var tongDiem = 0;
    var uuTien = 0;
    
    switch (khuVuc){
        case "A":
            uuTien+=2; 
        break;
        case "B":
            uuTien+=1;
        break;
        case "C":
            uuTien+=0.5;
        break;
        case "X":
            uuTien+=0;
        break;
        default:
            alert("Vui lòng nhập khu vực")
        break;
    }

    switch (doiTuong){
        case "1":
            uuTien+=2.5; 
        break;
        case "2":
            uuTien+=1.5;
        break;
        case "3":
            uuTien+=1;
        break;
        case "0":
            uuTien+=0;
        break;
        default:
            alert("Vui lòng nhập đối tượng")
        break;
    }

    tongDiem = diem1 + diem2 + diem3 + uuTien;

    if (tongDiem >= diemChuan && diem1 > 0 && diem2 > 0 && diem3 > 0){ 
        xetKQ = "Đậu";
    }
    else{
        xetKQ = "Trượt";
    }

    document.getElementById("txtResult1").innerHTML = "Tổng điểm: " + tongDiem +"<br>Xét trúng tuyển: "+  xetKQ;
}

document.getElementById("btnTinh1").onclick = xetDiemThi;