import * as fs from 'node:fs';

export namespace Doc {

    export interface Utils {
        system(...cmd: string[]);

        systemNoError(...cmd: string[]);

        runInShell(cmd: string);

        cp(from: string, to: string);

        walkFiles(dir: fs.PathLike, func: (path: fs.PathLike) => void | Promise<void>): Promise<void>

        replaceInFiles(pt: fs.PathLike, src: String | RegExp, placement: string | ((str, ...extargs) => string)): Promise<void>

        stringToRegex(str: string | RegExp): RegExp
    }

    export interface RepoInfo {
        name: string;
        branch: string;
        location: string;
        docLocation: string;
        copiedDocLocation: string;
    }
}
