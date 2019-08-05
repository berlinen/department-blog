

set -e
npm run build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:berlinen/interview-highlights.git master:gh-pages

cd -
