//
function So_lon_nhat(a, b) {
    return (a > b) ? a : b
}

function Tong_hai_so(a, b) {
    return a + b
}

function Dien_tich_hcn(d, r) {
    return d * r
}

function Chu_vi_hcn(d, r) {
    return (d + r) * 2
}

function cuu_chuong(n) {
    var kq = ""
    for (i = 1; i <= 10; i++) {
        kq += `<p>${n} x ${i} = ${i*n}</p>`
    }
    return kq
}

function diemTB(hk1, hk2) {
    return (hk1 + hk2) / 2
}

function xep_loai(dtb) {
    if (dtb >= 8)
        return "Giỏi"
    else if (dtb >= 6.5)
        return "Khá"
    else if (dtb > 5)
        return "Trung Bình"
    else
        return "Yếu"
}