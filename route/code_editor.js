

var code_editor_get = function(req, res){
    console.log('>> /code_editor(get)')


    return res.render('code_editor')
}
var code = function(req, res){
    console.log('>> /code(get)')

    return res.render('code')
}
module.exports.code_editor_get = code_editor_get;
module.exports.code = code;