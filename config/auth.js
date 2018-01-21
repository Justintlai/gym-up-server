// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {
  facebookAuth: {
    clientID: "301028770405258", // your App ID
    clientSecret: "9a6519d8eeee931ed39a2ac9a21f4bc8", // your App Secret
    callbackURL:
      "https://gym-up-server.herokuapp.com/api/v1/oauth/facebook/callback",
    profileURL:
      "https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email",
    profileFields: ["id", "emails", "first_name", "last_name"] // For requesting permissions from Facebook API
  },

  twitterAuth: {
    consumerKey: "your-consumer-key-here",
    consumerSecret: "your-client-secret-here",
    callbackURL: "http://localhost:8080/auth/twitter/callback"
  },

  googleAuth: {
    clientID:
      "180843104289-fbaamajep393s0qqsvks495ot7rmlqq7.apps.googleusercontent.com",
    clientSecret: "32DflhWyDaBq8Nx_ySUW1b6p",
    callbackURL:
      "https://gym-up-server.herokuapp.com/api/v1/oauth/google/callback",
    passReqToCallback: true
  }
};
