# GymUp API

> Workouts logged. Trends charted. Smart workout improvement engine.

# Routes
Routes use a versioning convension starting locally at: 
`
http://localhost:8080/
`

## Auth Routes
```
Root URL: /
```
|PATH     | METHOD |  PURPOSE                    | PARAMS |
|:--------|:------:|:---------------------------| --|
| / 	  | GET    |                             | |
| /logout | GET    | Logout of application       | |
| /login  | POST   | Authenticate user login     | |
| /signup | POST   | Create new account for user | |

## User Profile Routes
```
Root URL: /api/v1/profile
```
|PATH       | METHOD |  PURPOSE                    | PARAMS |
|:----------|:------:|:---------------------------|--|
| / 	    | GET    | Get user profile | userId|
| /   | POST      | Create user      | userId|
| /:userid  | PUT      | Update user profile     | userId|
| /:userid  | DELETE   | Destroy user profile | userId |

## Session Routes
```
Root URL: /api/v1/sessions
```
|PATH       | METHOD |  PURPOSE                    | PARAMS |
|:----------|:------:|:---------------------------|:---|
| / 	    | GET    | Get all user sessions | userId |
| /:sessionId  | GET      | Get specific user session | userId, sessionId|
| / | POST     | Create a session for a user  | userId, sessionId|
| /:sessionId| POST |Create a workout for a session |userId, sessionId|
| /:sessionId  | PUT   | Update a session |userId, sessionId|
| /:sessionId/:sessionDetailId| PUT| Update a workout for a session |userId, sessiondetailId|
| /:sessionId  | DELETE   | Delete a complete session |userId, sessionId|
| /:sessionId/:sessionDetailId  | DELETE | Delete a workout from a session |userId, sessionDetailId|

## Workout Routes
```
Root URL: /api/v1/workouts
```
|PATH       | METHOD |  PURPOSE                    | PARAMS |
|:----------|:------:|:---------------------------|:---|
| / 	    | GET    | Get a list of all workouts |  |
| / | POST     | Create a new workout | |
| /:workoutId| PUT |Update a workout ||
| /:workoutId  | DELETE   | Delete a workout ||



## Other Useful Code
To kill a task:

                           PORT

1. netstat -ano | findstr :5000

          PID

2. tskill 29056