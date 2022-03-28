#!/bin/bash
directory=dist
branch=pavlovia
remote=pavlovia
url=https://github-ci-pavlovia:$GITLAB_TOKEN@gitlab.pavlovia.org/adamrh/asteroid-attack.git

build_command() {
  npm run build
  cp LICENSE $directory
}

echo -e "\033[0;32mDeleting old content...\033[0m"
rm -rf $directory && git fetch

echo -e "\033[0;32mChecking out $branch....\033[0m"
git worktree add $directory $branch

echo -e "\033[0;32mGenerating site...\033[0m"
build_command

echo -e "\033[0;32mDeploying $branch branch...\033[0m"
cd $directory &&
  git config user.email "richiehalford@gmail.com" &&
  git config user.name "GitHub Action on behalf of Adam Richie-Halford" &&
  git config pull.rebase true &&
  git remote add $remote $url &&
  git add --all &&
  git commit -m "Deploy updates" &&
  git pull $remote main -Xours --commit &&
  git push $remote $branch:main

echo -e "\033[0;32mCleaning up...\033[0m"
git worktree remove $directory