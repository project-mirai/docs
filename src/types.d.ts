export namespace Doc {
    export interface Utils {
        system(...cmd: string[]);
        systemNoError(...cmd: string[]);
        runInShell(cmd: string);
        cp(from: string, to: string);
    }
    export interface RepoInfo {
        name: string;
        branch: string;
        location: string;
        docLocation: string;
        copiedDocLocation: string;
    }
}
