const enum GitRepo {
  NotCommitted,
  Committed,
}

function isRepoCommitted(repo: GitRepo): boolean {
  return repo === null || repo === GitRepo.Committed;
}

let gitCommit = isRepoCommitted(GitRepo.NotCommitted);
console.log(gitCommit);
