

var content_get = function(req, res){
    console.log('>> /content (get)')

    var data = {text : "<p>안녕하세용ㅇ용ㅇ</p>"}

    res.render('contents', data)
}

module.exports.content_get = content_get;