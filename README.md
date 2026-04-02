create first repo from FDashBoard-Backend in terminal:

1. initialize
git init
2. stage + commit
git add .
git commit -m "initial backend commit"
3. create remote (if GitHub CLI installed)
gh repo create FDashBoard-Backend --public --source=. --push
4. or manually: create repo on GitHub

git remote add origin https://github.com/<you>/FDashBoard-Backend.git
git branch -M main
git push -u origin main
Then your backend repo exists and is linked.