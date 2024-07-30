FROM openjdk:21

#COPY JAR FILE
COPY target/employe-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 80

ENTRYPOINT ["java","-jar","app.jar"]
