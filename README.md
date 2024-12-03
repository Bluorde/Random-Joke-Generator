# Random Joke Generator  
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  

## Overview  
The **Random Joke Generator** is a simple web application that fetches and displays random jokes from the [JokeAPI](https://v2.jokeapi.dev). It filters out inappropriate content to provide family-friendly jokes in a single-line format.  

This project is inspired by and sourced from [Coding Artist](https://www.codingartistweb.com).  

## Features  
- Fetches random jokes from the JokeAPI.  
- Filters out jokes with the following flags: NSFW, religious, political, racist, sexist, and explicit.  
- Jokes are displayed in a clean, user-friendly interface.  

## Technologies Used  
- HTML  
- CSS  
- JavaScript (Vanilla)  
- Fetch API  

## How It Works  
1. The application sends a `GET` request to the JokeAPI endpoint:  
   ```plaintext  
   https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single  
   ```  
2. Filters ensure only single-line, family-friendly jokes are retrieved.  
3. The fetched joke is displayed dynamically in the application interface.  

## Installation  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/Bluorde/Random-Joke-Generator.git  
   ```  
2. Navigate to the project directory:  
   ```bash  
   cd Random-Joke-Generator  
   ```  
3. Open `index.html` in your browser to view the app.  

## Usage  
- Simply open the app, click the **Generate Joke** button, and enjoy a random laugh!  
- Each click fetches a new joke.  

## Live Demo  
[Check out the live demo here!](https://stunning-naiad-486cd3.netlify.app/)

## Acknowledgments  
This project was inspired by the tutorials and guidance from [Coding Artist](https://www.codingartistweb.com).