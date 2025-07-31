#!/bin/bash

echo "Starting Mascotas Microservices Architecture..."

# Build all services
echo "Building all services..."
./build.sh

# Start with Docker Compose
echo "Starting services with Docker Compose..."
docker-compose up -d

echo "Services are starting up..."
echo "Eureka Dashboard: http://localhost:8761"
echo "API Gateway: http://localhost:8080"
echo ""
echo "Available endpoints:"
echo "- Auth Service: http://localhost:8080/api/auth"
echo "- Pet Service: http://localhost:8080/api/perros"
echo "- Dashboard Service: http://localhost:8080/api/dashboard"