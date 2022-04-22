gendiff:
	node bin/gendiff.js $(OPTIONS)
lint: 
	npx eslint .

install: 
	install-deps
	npx simple-git-hooks

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test
