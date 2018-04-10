

var content_get = function(req, res){
    console.log('>> /content (get)')
    res.render('contents')
}

module.exports.content_get = content_get;