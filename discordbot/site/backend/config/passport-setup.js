const passport = require("passport");
var DiscordStrategy = require("passport-discord").Strategy;

passport.serializeUser((user, done) =>{
    done(null, user.id);
});

passport.use(
    new DiscordStrategy({
        clientID: '961436838592147516',
        clientSecret: 'm6UqF93Nkhflrxek1MU2EjYQsB52q3vG',
        callbackURL: 'http://localhost:4000/auth/discord/callback',
        scope: ["bot", "identify"]
    },
    async (accessToken, refreshToken, profile, done) => {
        done(null, profile);
    })
)