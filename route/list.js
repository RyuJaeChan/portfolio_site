

var list_get = function(req, res){
    console.log('>> /list (get)')
    res.render('list')
}

module.exports.list_get = list_get;