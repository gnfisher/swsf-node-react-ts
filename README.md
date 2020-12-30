# Full Stack TypeScript: Express, React, and Typescript

This is my hobby project where I will be [Learning In
Public][swyx-learn-public] about full-stack Typescript applications!

The goal is to replicate some features from client work down using
Scala/GraphQL/Elm as the stack. The application has a lot of interactivity with
form fields that save on blur, and interactive auto-completing dropdown menus.

Some questions I hope to answer:

- What's it like working in Typescript, and how much of what I love about
  Scala and Elm can I apply to working in TS?
- What's involved in putting a project together? Coming from Rails, I'm pretty
  spoiled and lazy. I parachuted into the Scala/Elm project after setup, but th
  Elm setup was super easy (Yay, [Parcel]!)
- Using types for the expected response/request objects for endpoint responses
  and requests like the [example in this video][gary-video-types] from [Gary
  Bernhardt](https://twitter.com/garybernhardt).
- How fast can I work? Taking into account all the initial onboarding and
  learning, can I see myself being productive with this stack in the future?

## The Stack and libraries I'd like to use 📚

- [Express.js](https://expressjs.com) for the API server.
- [React](https://reactjs.org) for the client.
- [Postgres](https://www.postgresql.org) for the database.
- [TypeScript](https://www.typescriptlang.org) for the types!
- [io-ts](https://github.com/gcanti/io-ts) for typing the API.
- [TailwindCSS](https://tailwindcss.com) for styling the front end.

[tb]: https://thoughtbot.com
[swyx-learn-public]: https://www.swyx.io/learn-in-public/
[gary-video-types]: https://www.youtube.com/watch?v=GrnBXhsr0ng
[io-ts]: https://github.com/gcanti/io-ts
[Parcel]: https://parceljs.org

## Installation

From the root of the project run:

- `yarn install` then
- `yarn build && yarn start`

TODO: hotreload dev setup for the server side.

# Experiences so far

## Parcel is really nice

Trying to figure out how to set everything up was a bit overwhelming, having
never done this before in JavaScript let alone with TypeScript in the mix. I
tried to stick with [Create React App] aka CRA and then started running into issues when
I added [TailwindCSS] and even more issues when I wanted to hot reload for
development.

My experience in all of this is that there are a lot of informal, specific
solutions documented everywhere that are often incorrect for my use case or just
incorrect generally because some piece of the jigsaw had a version bump. This
has been my experience with JavaScript generally and its the most frustrating
part of getting started so far. My appreciation for the Rails Way has grown
deeper. I invested a lot of time in googling, reading docs, trying out random
suggestions, only to eventually pull out [Parcel] which so far has been
fantastic and resolved all my issues!
