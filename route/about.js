

var about_get = function(req, res){
    console.log('>> /about (get)')
    res.render('about')
}

module.exports.about_get = about_get;