module.exports = class ngay_thang{
    constructor (date) {
        if(date)
            this.ngay = date;
        else
            this.ngay = new Date();
    }

    dinh_dang_ngay(str = 'vi', loai = "rut_gon")
    {
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var days_vi = ['Chủ nhật','Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7'];
        var months_vi = ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10','Tháng 11','Tháng 12'];
        switch(str) {
            case "vi":
                return (loai == "rut_gon")?
                            (this.ngay.getDate()
                            +'/'+(this.ngay.getMonth()+1)
                            +'/'+this.ngay.getFullYear())
                            :
                            (days_vi[this.ngay.getDay()] 
                            + ' ngày ' + this.ngay.getDate() 
                            + ' ' + months_vi[this.ngay.getMonth()]
                            +' '+this.ngay.getFullYear());
                break;
            case "en":
                return (loai == "rut_gon")?
                            ((this.ngay.getMonth()+1)
                            +'/'+this.ngay.getDate()
                            +'/'+this.ngay.getFullYear())
                            :
                            (days[this.ngay.getDay()]
                            + ' ' + this.ngay.getDate() 
                            +' '+months[this.ngay.getMonth()]
                            +' '+this.ngay.getFullYear());
                break;
        }
    }
}