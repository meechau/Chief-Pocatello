# Chief-Pocatello
Discord Bot for managing CivilizationV server

DESCRIPTION

This is a discord bot I've been making for the discord server I'm the administrator of. It serves several tasks:
- sending welcome message to new users
- applying a special role to the new users
- periodically call new users group to remind them how to get permissions on the server
- relying direct messages to administrators channel (anonymous feedback)
- autoresponding to trigger messages

Ideas for future implentation:
- policing vulgarisms
- timezones comparison
- logging username changes

INSTALLING

The bot is configured for a specific server (mine), but it can be changed through config.json.
Just replace ID's of channels and roles with the corresponding to your server.
I'm hosting the bot on replit.com and for that reason my personal token is stored as:
const mySecret = process.env['TOKEN']; 
If you fork this project and host it there as well you will need to set up your own token.
