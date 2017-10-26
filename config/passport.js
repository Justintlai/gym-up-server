var passport  = require('passport')
  , LocalStrategy = require('passport-local').Strategy
  , db = require('../models')

  //Serialize Sessions

  passport.serializeUser(function(user, done)){
    done(null, user);
  }

//Deserialize Sessions

passport.deserializeUser(function(user, done){
  db.User.find({where: {id:user.id}}).success(function(user){
    done(null, user);
  }).error(function(err){
    done(err, null)
  });
});

// For Authentication Purposes
passport.use(new LocalStrategy(
  function(email, passport, done){
    db.User.find({where: {email: email}}).success(function(user){
      passwd = user ? user.password: ''
      isMatch = db.User.validPassword(password, passwd, done, user)
    });
  }
));
