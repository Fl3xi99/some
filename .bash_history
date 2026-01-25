cd domains/driedeestudio.be/public.html
git init
git add .
git commit -m "Initial site"
ssh -T git@github.com
cat ~/.ssh/github_rsa.pub
nano ~/.ssh/config
ssh -T git@github.com
chmod 700 ~/.ssh
chmod 600 ~/.ssh/config
chmod 600 ~/.ssh/github_rsa
chmod 644 ~/.ssh/github_rsa.pub
ssh -T git@github.com
nano ~/.ssh/config
chmod 600 ~/.ssh/config
ssh -T git@github.com
cd ~/domains/driedeestudio.be/public_html
pwd
ls -la
cd ~/domains/driedeestudio.be/public_html
mkdir backup
mv 400.shtml 401.shtml 403.shtml 404.shtml 500.shtml logo.png index.html backup/
ls
git clone git@github.com:YOURUSERNAME/YOURREPO.git .
git clone git@github.com:fl3xi99/some.git .
git clone git@github.com.Fl3xi99/some.git .
cd ~/domains/driedeestudio.be/public_html
ls
git init
git remote add origin git@github.com:Fl3xi99/some.git
git pull origin main
ls
cd ~/domains/driedeestudio.be/public_html
ls html
mv html/* .
mv html/.* . 2>/dev/null
rmdir html
ls
git add .
git commit -m "Move site files to root"
git push
