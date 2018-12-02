function Doc_Cua_hang() {
    var XL_HTTP = new XMLHttpRequest()
    XL_HTTP.open("GET", "Du_lieu_JSON/Cua_hang.json", false)
    XL_HTTP.send()
    var Chuoi_JSON = XL_HTTP.responseText.trim()
    return JSON.parse(Chuoi_JSON)
}

function Doc_hoc_vien() {
    var xlhttp = new XMLHttpRequest()
    xlhttp.open("GET", "Du_lieu_JSON/Hoc_vien.json", false)
    xlhttp.send()
    var kq = xlhttp.responseText.trim()
    return (JSON.parse(kq))
}