



module.exports = {
    server_port :3000,
    route_info : [
        {path : "/index", file : "./index.js", type : "get", method : "index_get"},
        {path : "/content", file : "./content.js", type : "get", method : "content_get"},
        {path : "/contact", file : "./contact.js", type : "get", method : "contact_get"},
        {path : "/about", file : "./about.js", type : "get", method : "about_get"},
        {path : "/list", file : "./list.js", type : "get", method : "list_get"},
        {path : "/code_editor", file : "./code_editor", type : "get", method : "code_editor_get"},
        {path : "/code", file : "./code_editor", type : "get", method : "code"}

    ]



};