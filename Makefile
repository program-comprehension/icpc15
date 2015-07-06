YEAR=2015
URL=https://dibt.unimol.it/ICPC15/

all: branch CNAME crawl

branch:
	-git checkout --orphan gh-pages

CNAME:
	echo $(YEAR).program-comprehension.org > CNAME

crawl:
	wget -r -p -np -nc -nH --cut-dirs=1 -k $(URL)

upload:
	git add -A
	git commit -a -m "adding a copy of $(URL)"
	git push origin gh-pages
