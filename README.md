# Movie Price Checker (Frontend)

Movie Price Checker is a web application that allows users to compare movie prices from 2 diferent providers and display the cheapest price for a selected movie.  This is the frontend of the web application.

## Problem Scenario

A provider has a set of web api to access a list of available movies as well as the details of each movie.  Just like in a real scenario, the APIs can have intermittent access issues.  For security purposes, the app should not include credentials and other information that may put the company at risks company. 

## Solution

Most of the issues were taken care of the backend (please see backend readme).  The frontend merely displays a list of uniques movies from the aggregated lists of movies.  The frontend was designed to be thin putting most of the business logic in the backend but for some instances some business logic can only be carried out from the frontend to achieve efficiency like for example to limit the number of requests.

Therefore I decided to implement the movie matching from the frontend and pass the ids of the providers that match to the backend.  

There is nothign fancy about the frontend. I use tailwind to be able to scafolled the pages as fast and easy as possible.  

## Technology Stack

This frontend includes the following technology stack:

* ReactJS
* TypeScript
* Tailwind CSS  