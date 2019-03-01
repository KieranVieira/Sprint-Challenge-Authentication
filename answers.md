What is the purpose of using sessions?

The purpose of using sessions is so that we can store our session data in our knex database and keep track of any and all sessions that are currently active, this will be used to authenticate users and make sure sessions are terminated when they expire. 

What does bcrypt do to help us store passwords in a secure manner.

Bcrypt encrypts our passwords when calling bcrypt.hashSync(password, runTimes) we can encrypt a password and do as many passes of encryption as we please. This can later be compare synced to test if the password is correct, and the password will never be stored in plain text so you can never know what anyones password is.

What does bcrypt do to slow down attackers?

Bcrypt encrypts our password into a very hard to crack algorithm which slows hackers because they will need to figure out how the password was encrypted/how many passes it had, etc.

What are the three parts of the JSON Web Token?

Three parts of a json web token are the header, the payload, and the verify signature, separated by periods.