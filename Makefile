
build:
	python3 build.py home.js
	python3 build.py services.js services
	python3 build.py contact.js contact
	python3 build.py about.js about

.PHONY: build
