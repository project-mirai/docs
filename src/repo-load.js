let navs = require('./nav');
let config = require('./config');
let path = require('path');

module.exports = {
    onLoad: function (repoName, repoLoc, docRel) {
        repoLoc = path.resolve(repoLoc);
        var docConf;
        if (docRel == undefined) {
            docConf = repoLoc;
        } else {
            docConf = repoLoc + '/' + docRel;
        }
        docConf += '/.conf';
        try {
            navs[repoName] = require(docConf + '/nav');
        } catch (ignore) {
            if (config.verbose.show_debug) {
                console.log(ignore)
            }
        }
    },
};
