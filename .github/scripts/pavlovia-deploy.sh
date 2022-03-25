#!/bin/bash
directory=dist
branch=pavlovia
remote=pavlovia
url=https://github-ci-pavlovia:$GITLAB_TOKEN@gitlab.com/richford/asteroid-attack.git

build_command() {
  npm run build
  cp LICENSE $directory
}

echo -e "\033[0;32mDeleting old content...\033[0m"
rm -rf $directory

echo -e "\033[0;32mChecking out $branch....\033[0m"
git worktree add $directory $branch

echo -e "\033[0;32mGenerating site...\033[0m"
build_command

echo -e "\033[0;32mDeploying $branch branch...\033[0m"
cd $directory &&
  git add --all &&
  git commit -m "Deploy updates" &&
  git remote add $remote $url &&
  git push $remote main:$branch

echo -e "\033[0;32mCleaning up...\033[0m"
git worktree remove $directory