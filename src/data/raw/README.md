# Raw Data

Since this is EARLY days for this project I'm forgoing making a backend for now. All the data is stored on the client in this RAW folder. This makes it easier for me to update the data and quickly iterate with what the Client needs before locking in DB related stuff.

## research.ts

The human players (Villagers) in the the league will be able to ask me about the fantasy world and its inhabitants. There are a couple requirements with this.

1. **The information needs to stay hidden from other Villagers. -** I don't want the tech savvy amongst the players to be able to see private info of this file. So it's just a local thing. In the future when we're no longer using the raw data on the client I'll have this info behind an admin user wall. On deploy we'll replace scrub all private from `research.ts` the after deploy we'll add it back for my local purposes.

2. **The information needs to link to many different things. -** So we're setting up a simple tagging system which will allow me to keep track of WHO knows the research info, and also all of the fantasy entities that the research relates to.
