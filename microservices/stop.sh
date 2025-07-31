#!/bin/bash

echo "Stopping Mascotas Microservices Architecture..."

# Stop Docker Compose services
docker-compose down

echo "All services stopped successfully!"