

var content_get = function(req, res){
    console.log('>> /content (get)')
    var url = require('url')
    var querystring = require('querystring');
    var req_id = querystring.parse(url.parse(req.url).query).id
    console.log('id : ' + req_id)


    var data = {};

    var article_list = require('./article_list')
    for(var i = 0 ; i < article_list.length; i++){
        if(article_list[i].id == req_id){
            data = article_list[i];
            fs = require('fs')
            fs.readFile('./public/article/'+req_id+'.txt','utf8',function(err, _data){
                data.content = _data;
                res.render('contents', data)
            })
            break;
        }
    }


    
    

    
}

module.exports.content_get = content_get;