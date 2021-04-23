---
tags:
  - javascript
published: true
date: 2021-04-23T17:21:39.186Z
title: It's just a CRUDdy app, but at least it's my CRUDdy app
---
The last time I blogged here was when I applied to the online Georgia Tech Masters in CS program six weeks ago. I'm still waiting to hear if I'm going to be a Yellow Jacket or not. While waiting, I've been heads down in my Advanced JavaScript class. The focus has been to take our basic JS skills from the previous semester and build a full-stack application using React, Node.js and a database.

With a few weeks to go in the semester, we have two of the three pieces in place. Last month, I had a React app that started with all of the UI, logic and data in it. It's just a standard "to do" app to keep track of basic tasks. I think "to do" apps are like the "Hello World" of React; everyone learning React seems to do one, or something similar.

As of last week, I pulled the logic and data out of the client and put it on a Node.js server. This part was actually more interesting to me. 

In a sense you could say we built *very* rudimentary APIs for our application on the server. Our client app calls to the server for all of it's functionality by making an http fetch request.