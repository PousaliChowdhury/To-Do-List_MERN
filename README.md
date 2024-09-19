# MERN To-Do List Application 
 
## Features
- Add Tasks: Users can add new tasks to their to-do list.
- Delete Tasks: Users can delete tasks from their to-do list.
- Toggle Tasks: Users can mark tasks as completed or incomplete.
- Responsive UI: The application features a responsive design for use on various devices.

## Technologies Used
### Frontend:
* React.js
* Axios for HTTP requests
* CSS for styling
* React Icons for icons

### Backend:
+ Node.js
+ Express.js
+ MongoDB with Mongoose for the database

## Install dependencies for both frontend and backend
### Install server dependencies & start
```
cd server
npm install
npm start
```

### Install client dependencies & start
```
npm create vite@latest
cd client
npm install
npm run dev
```

## Access the application:
Open your web browser and navigate to `http://localhost:3000`

## API Endpoints
- GET /get: Retrieve all tasks
- POST /add: Add a new task
- PUT /update: Update an existing task
- PUT /toggle: Toggle the completion status of a task
- DELETE /delete: Delete a task
