# Server Dashboard

This is a project for learning purposes, developed during my training period before becoming a member of the Software Subsystem at Hyperloop UPV.

The application is a dashboard that simulates the performance of a web server, displaying fictitious data (randomly generated) on CPU usage, RAM usage, and other performance metrics.

# Project Structure

The project has the following simple structure:

```
/server-dashboard
   /client
   /server
```

## Client (Front End)

### Technologies
- TypeScript
- ReactJS
- SCSS
- Zustand
- React-Router
- CanvasJS

## Server (Back End)

### Technologies
- Go

# How does it work? (WIP)

The back end receives packets via TCP/UDP, extracts the payload, checks that all is correct, and sends it to the front end via WebSocket connection (real-time communication).

It is possible also to activate a logger functionality to log into the operating system (CSV file) all the data received in a session (by passing a flag when executing the back end).

Then. the front end receives the data and displays it on real-time charts by using a third-party library called CanvasJS.

# Screenshots

### Home Route

<img width="1435" alt="Captura de pantalla 2024-06-15 a las 12 05 18" src="https://github.com/andresdlt03/server-dashboard/assets/76229993/e9a1317c-fe67-465e-9b4d-68be64fb4376">

### Server performance metrics route

<img width="1436" alt="Captura de pantalla 2024-06-15 a las 12 08 14" src="https://github.com/andresdlt03/server-dashboard/assets/76229993/1977028b-6b17-4966-a31d-aca094a6eb0c">

### App performance metrics route

<img width="1432" alt="Captura de pantalla 2024-06-15 a las 12 08 28" src="https://github.com/andresdlt03/server-dashboard/assets/76229993/d6e50ebe-311e-486b-94ef-34cfd2f2209b">


