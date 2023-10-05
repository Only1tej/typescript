"use strict";
function isRepoCommitted(repo) {
    return repo === null || repo === 1;
}
let gitCommit = isRepoCommitted(0);
console.log(gitCommit);
