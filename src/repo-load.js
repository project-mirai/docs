let navs = require('./nav');

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
            var nv = require(docConf + '/nav');
            navs[repoName] = nv;
        } catch (ignore) {
        }
    },
};
