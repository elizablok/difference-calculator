gendiff:
	node bin/gendiff.js $(OPTIONS)

install:
	npm ci

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8
	
.PHONY: test
