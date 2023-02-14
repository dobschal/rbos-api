# rbos-api

Simple REST API and web client to read and manipulate XDCs.

## Get Started
You can run your application in dev mode that enables live coding using:
```bash
./mvnw compile quarkus:dev
```

## Build For Production
Build to get a exectuable jar file.
```bash
./mvnw package

java -jar target/quarkus-app/quarkus-run.jar
```

## Client

The client is a native Javascript app, located the in the `resources` folder.
No build steps needed.