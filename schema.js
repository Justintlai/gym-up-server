// THIS WAS A BRAINSTORM DOCUMENT

// easy to access sessions, who did the sessions
// count of work outs
// 2 layers per session

var session = new Schema({
  sessionID: String,
  sessionDate: Number,
  sessionStart: Number,
  sessionEnd: Number,
  workout: [
    {
      workoutName: Bicep,
      workoutWeight: Number,
      workoutRep: Number,
      workoutSet: Number
    },
    {
      workoutName: String,
      workoutWeight: Number,
      workoutRep: Number,
      workoutSet: Number
    }
  ],
  userID: {
    type: Schema.ObjectId, ref : "User"
  }
})
// v2
var workout = new Schema{
  workoutID: String,
  workoutName: String,
  workOutweight: Number,
  session: {type: Schema.ObjectId, ref "Session"},
  user: {type: Schema.ObjectId, ref "User"}
}

// GET DATA
/sessionID
/exerciseName


// NEW SESSION FORM
GET /session/new
POST /session

// NEW EXERCISE FORM
GET /session/:id/exerciseName/new
POST /session/:id/exerciseName
