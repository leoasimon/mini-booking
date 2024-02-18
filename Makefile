dev: _run_dev_app

_run_dev_app: _build_api_dev_image _build_client_dev_image
	docker compose up

_build_api_dev_image:
	cd api && docker build -t booking-api . -f Dockerfile.dev

_build_client_dev_image:
	cd client && docker build -t booking-client . -f Dockerfile.dev

clean:
	docker compose down
	docker rmi booking-api booking-client