gendiff:
	node bin/gendiff.js $(OPTIONS)
lint: 
	npx eslint .

install: 
	npm ci
