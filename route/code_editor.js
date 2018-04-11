

var code_editor_get = function(req, res){
    console.log('>> /code_editor(get)')

    return res.render('code_editor')
}
module.exports.code_editor_get = code_editor_get;