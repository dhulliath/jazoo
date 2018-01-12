var abstractor = function() {}
abstractor.prototype.init = function (context) {
    return new Promise(function (resolve, reject) {
        resolve()
    })
}

abstractor.prototype.abstract = function (context) {
    return new Promise(function (resolve, reject) {
        const regex_replace = '@';
        context['$abstracted_content_hidden'] = true
        context.abstracted_content = {}
        content.abstracted_content.email_break = context.email.replace(regex_replace, ' @')
        return resolve()
    })
}

module.exports = new abstractor()