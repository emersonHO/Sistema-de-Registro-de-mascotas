FROM openjdk:21-jdk-slim

WORKDIR /app

COPY target/dashboard-service-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8083

ENTRYPOINT ["java", "-jar", "app.jar"]