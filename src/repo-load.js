let navs = require('./nav');
let config = require('./config');

module.exports = {
    onLoad: function (repoName, repoLoc, docRel) {
        var docConf;
        if (docRel == undefined) {
            docConf = repoLoc;
        } else {
            docConf = repoLoc + '/' + docRel;
        }
        docConf += '/.conf';
        try {
            let nv = require(docConf + '/nav');
            navs[repoName] = nv;
        } catch (ignore) {
            if (config.verbose.show_debug) {
                console.log(ignore)
            }
        }
    },
};
