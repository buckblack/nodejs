exports.camel_case = function(str){
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
        return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}

// exports.underscore_case = function(str){
//     return str.replace(/(?:^|\.?)([A-Z])/g, function (x,y){return "_" + y.toLowerCase()}).replace(/^_/, "");
// }

exports.friendly_url = function(str){
    str = this.bo_dau_tieng_viet(str);
    return str.toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "-")
                .replace(/^-+|-+$/g, '');
}

exports.bo_dau_tieng_viet = function(str){
    var in_chrs   = 'àáạâãäçèéêëẹìíîïịñòóôõöùúûüýÿÀÁÂÃÄÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝ',
        out_chrs  = 'aaaaaaceeeeeiiiiinooooouuuuyyAAAAACEEEEIIIINOOOOOUUUUY', 
        chars_rgx = new RegExp('[' + in_chrs + ']', 'g'),
        transl    = {}, i,
        lookup    = function (m) { return transl[m] || m; };

    for (i=0; i<in_chrs.length; i++) {
        transl[ in_chrs[i] ] = out_chrs[i];
    }

    return str.replace(chars_rgx, lookup);
}