

var content_get = function(req, res){
    console.log('>> /content (get)')
    var url = require('url')
    var querystring = require('querystring');
    var req_id = querystring.parse(url.parse(req.url).query).id
    console.log('id : ' + req_id)


    var data = {};

    var article_list = require('./article_list')
    console.log(article_list)
    for(var i = 0 ; i < article_list.length; i++){
        if(article_list[i].id == req_id){
            data = article_list[i];
            break;
        }
    }


    


    res.render('contents', data)
}

module.exports.content_get = content_get;