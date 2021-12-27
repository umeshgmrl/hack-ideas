# Hack Ideas
Live at https://hack-ideas.surge.sh

## How to run
with docker (this is not working right now as there is some issue with node-gyp while installing, need to check)
```
docker-compose up -d --build
```

alternative 
```
npm run dev
```
## Build
```
npm run build
```
the output files will be in ./dist folder
## Assumptions
This is an internal project. Project may not grow much complex as this is simple dashboard for organizing the contests in an organizaiton.
Need to minimize as much as third party modules. Kepp it as simple as possible.

## Bundler
Used Parcel.js as instead of Webpack for quickly getting up and running.

## State management
Used Zustand.js instead of Redux as I wanted to experiment with this new state management library which is very cool.

##  Styling
Used Bulma.css

## API
I have used Supabase for API backend for prototyping this app.

## Todo
There are so many improvements can be done. But leaving them because of time contraint.
for ex: 
* implementing the authentication
* adding delete, update, downvote etc. functionalities
* good secret credentials management
* persisting the state
