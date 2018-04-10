

var contact_get = function(req, res){
    console.log('>> /contact (get)')
    res.render('contact')
}

module.exports.contact_get = contact_get;