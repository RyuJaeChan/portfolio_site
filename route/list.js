

var list_get = function(req, res){
    console.log('>> /list (get)')

    var article_list = require('./article_list');
    var list = ""
    var l = article_list.length;
    for(var i = 0 ; i < l ; i++){
        list += "<article>"
        list += "<a href=\"/content?id=" + article_list[i].id + "\">"
        list += "<div class=\"photo\" style=\"background-image: url(" + article_list[i].image + ");\"></div>"
        list += "<div class=\"text\">"
        list += "<h2>" + article_list[i].title + "</h2>"
        list += "<p>" + article_list[i].short_content + "</p>"
        list += "</div>"
        list += "</a>"
        list += "</article>"
    }

    var data = {
        list : list
    }

    res.render('list', data)
}

module.exports.list_get = list_get;