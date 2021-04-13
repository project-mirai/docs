let conf = module.exports = {
    update: true,
    check_update_to_date: true,
    run_build: true,
    use_ssh_clone: false,
    deploy: {
        enable: true,
        GH_TOKEN: () => { return process.env.GH_TOKEN; },
        ignore_update_to_date: false,
        ignore_sha1_update_to_date: false,
        auto_commit: true,
        token_publish: true,
        run_publish: true,
        committer: {
            setup: true,
            name: () => { return 'mamoebot'; },
            email: () => { return 'mamoebot@noreply.github.com'; },
        },
    },
    verbose: {
        cp: true,
        command: true,
    },
};

try {
    let overrided = require('./config-local');
    function doPatch(source, patch) {
        for (var key in patch) {
            let old = source[key];
            if (typeof old == "object") {
                doPatch(old, patch[key]);
            } else {
                source[key] = patch[key];
            }
        }
    }
    doPatch(conf, overrided);
} catch (ignore) { }
