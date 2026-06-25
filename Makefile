IMAGE=perbudge
TAG=latest

deploy:
	git pull
	docker compose build --no-cache
	docker compose up -d