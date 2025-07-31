#!/bin/bash

echo "Building all microservices..."

# Build Discovery Service
echo "Building Discovery Service..."
cd discovery-service
mvn clean package -DskipTests
cd ..

# Build Auth Service
echo "Building Auth Service..."
cd auth-service
mvn clean package -DskipTests
cd ..

# Build Pet Service
echo "Building Pet Service..."
cd pet-service
mvn clean package -DskipTests
cd ..

# Build Dashboard Service
echo "Building Dashboard Service..."
cd dashboard-service
mvn clean package -DskipTests
cd ..

# Build API Gateway
echo "Building API Gateway..."
cd api-gateway
mvn clean package -DskipTests
cd ..

echo "All microservices built successfully!"