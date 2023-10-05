"use strict";
var GitRepo;
(function (GitRepo) {
    GitRepo[GitRepo["NotCommitted"] = 0] = "NotCommitted";
    GitRepo[GitRepo["Committed"] = 7] = "Committed";
})(GitRepo || (GitRepo = {}));
function isRepoCommitted(repo) {
    return repo === null || repo === 7;
}
let gitCommit = isRepoCommitted(0);
console.log(gitCommit);
