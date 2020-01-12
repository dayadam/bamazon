# bamazon

This is a full stack application that allows users to update the inventory of items in a MySQL database. 
---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Built With](#built-with)

## Organization of the Application

The application uses Bootstrap for the user interface. When a user submits a purchase quantity of an item, an AJAX request is made to the server API which updated the MySQL database uses Sequelize as an ORM. Node and express comprise the backend. 

## Getting Started

In order for this application to run on your local computer, you must have Node.js installed as well as the required node modules. 

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

## Prerequisites

Node.js, MYSQL database and express and sequelize packages are required to run this application locally. 

### Spotify API key

   * The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

   * Step One: Visit <https://developer.spotify.com/my-applications/#!/>

   * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

   * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

   * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

   * These keys can be stored in your .env and accessed by your keys.js file. 

### Clone

- Clone this repo to your local machine using `https://github.com/dayadam/bamazon`

---

## Installation

- install Node.js from <https://nodejs.org/en/>

> install npm packages

```shell
$ npm install
```

### Example

[Working Video](https://drive.google.com/file/d/1VRxdemi2_74LE0EvOPcz6I31zcqxG0VO/view?usp=sharing)

Use node to execute the liri.js file. The first CLI argument will be the app function you want to execute. Available commands are:
* `concert-this` (SeatGeek AP)
* `spotify-this-song` (Spotify API)
* `movie-this` (OMDB API)
* `do-what-it-says` (This will execute whichever command and search argument is saved in the random.txt file)

The second CLI argument will be the artist, song, or movie you are searching. 

```shell
$ node liri.js concert-this Elton John
```

For `concert-this`, liri will respond with:
* Name of the venue
* Venue location
* Date of the Event

Continuing the earlier example, this is the liri output: 

```shell
$ node liri.js concert-this Elton John
PPG Paints Arena
Pittsburgh, PA 15219
11/13/2019
```

## Built With

* [Node.js](https://nodejs.org/en/) - Server runtime environment for JavaScript
* [Express.js](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node.
* [Sequelize](https://www.npmjs.com/package/sequelize) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. 
* [jQuery](https://jquery.com/) - Fast, small, and feature-rich JavaScript library
* [Bootstrap](https://getbootstrap.com/) - CSS framework directed at responsive, mobile-first front-end web development
* [MySQL](https://www.mysql.com/products/community/) - Open-source relational database 
* template

## Authors

* **Adam Day** - [Adam Day](https://github.com/dayadam)

## Acknowledgments

* Thanks to all the open source contributors that helped with the building blocks of this project. 
