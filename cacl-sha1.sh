find docs -type f | grep -v .vuepress | xargs -d '\n' sha1sum > files-sha1-rebuilt.txt
sha1sum 'docs/.vuepress/config.js' >> files-sha1-rebuilt.txt
