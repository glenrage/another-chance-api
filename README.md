# Another-chance

[![Build Status](https://travis-ci.org/glenrage/another-chance.svg?branch=master)](https://travis-ci.org/glenrage/another-chance)
[![Coverage Status](https://coveralls.io/repos/github/glenrage/another-chance/badge.svg?branch=redux2)](https://coveralls.io/github/glenrage/another-chance?branch=redux2)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![dependencies Status](https://david-dm.org/expressjs/express/status.svg)](https://david-dm.org/expressjs/express)
[![devDependencies Status](https://david-dm.org/expressjs/express/dev-status.svg)](https://david-dm.org/expressjs/express?type=dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Another chance is an application for Veterinarians to store and manage animal blood donors.

 *Still under development*

Deployed beta version URL - http://www.colitasporlavida.com/

Man hours spent - https://wakatime.com/project/another-chance

## Software Development Life Cycle

- [x] Client requirement gathering & analysis
- [x] Software design & Technology stack
- [x] Coding & Implementation (80% Functionality & 70% Styling completed)
- [x] Testing (In progress)
- [x] Deployment (beta version)
- [ ] Maintenance

### User Stories

#### As a Veterinarian,
+ I want access to an animal blood donor database that I can quickly query records by animal type, location, breed, and blood type.
+ I want to be able to create, edit, and retrieve animal records.
+ I want to view all existing animal records.
+ I want to view profiles of other Veterinarians in case I need to contact them

#### As an Administrative User,
+ I want to create, edit, retrieve and delete User accounts.
+ I want to view how many Users are in the database.
+ I want to view how many Animals are in the database.
+ I want a secure database with Authentication to prevent unauthorized users.
+ I want to view profiles of other Veterinarians in case I need to contact them.
+ I want to ensure only approved Users may create accounts by giving them a secret signup password.

#### As a Developer,
+ I want to gain a sense of purpose and make my heart feel all warm and fuzzy by using my skills to perform altruistic work.
+ I want to develop and ship software features utilizing AGILE methodology by shipping features in short sprints to align with my client's changing needs.
+ I want to write clean, semantic, readable code with comments so that other users may contribute, maintain, and add additional features.

# Technical Information

### Access levels

Admins - Full CRUD (create, read, update, delete) access to ALL records and Users.

Users - Veterinarians and staff will be able to search, create, and update animal records. Users may delete records they created, but cannot delete records from other Vets. Users can also edit their own profile information.

### Authorization

Only authorized users may login and view the animal donor database. Authorization is handled through Passport.JS. A JSON Web Token is issued to each user upon new account, and upon login the token is verified with the database.

## JSON Examples

### User account schema

```
firstName : Glen,
lastName : Pham,
email : glen@glen.com,
company : Philanthropist Coders,
position : Web Developer,
phoneNumber : 111-111-1111
```

### Animal donor schema
Bloodtype will correlate to type of animal (cat or dog).

```
name: molly,
type: dog,
breed: pomeranian,
weight: 2kg,
age: 15 months,
bloodType: DEA 1.1,
contactName: Maria Lee,
contactNumber: 111-111-1111,
contactEmail: MariaLee@gmail.com
vetName: Mrs. Lee,
location: Puerto Rico,
photo: cutest_dog.jpg,
createdBy: (this field is automatically populated by the corresponding User)
```

## Installation Instructions

You need two instances of terminal open. One will run the server, the other will run the client build.

```
git clone https://github.com/glenrage/another-chance.git
cd another-chance
```
### Server setup
After you clone, open the first terminal window and run the following
```
cd server
npm i
npm run dev
```
Nodemon will launch the server to http://localhost:3000

### Client setup

In your other terminal window run the following commands
```
cd client
npm i
npm run start
```
Webpack will create a build, then open your browser to http://localhost:3001

## Technology Stacks
![alt text](http://res.cloudinary.com/glenrage/image/upload/v1502997811/mern_nobysk.gif)

### Server side
* Node
* Express
* MongoDB
* Passport

### Client side
* React
* Redux
* Webpack
* Babel
* Superagent

### Continuous Integration
* Travis

### Testing Suite
* Mocha & Chai (Server side)
* Jest (Client side)

## Credits
[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/glenrage/)


Built by Glen Pham and his dog Molly

![alt text](http://res.cloudinary.com/glenrage/image/upload/c_scale,w_394/v1501914520/mollyboo_dptv9k.jpg)
