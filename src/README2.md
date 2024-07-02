Introduction

Welcome to my TUNIFY APP! This project is a web application built using React.js, designed to allow users to browse a series of podcast shows, view details of each series, explore seasons, and listen to individual episodes. The app fetches data from the provided podcast API.

Features:

Series Details: Explore seasons of a specific show.
Episode Playback: Listen to individual podcast episodes.
Sorting and Filtering: Sort and filter the series list based on different criteria.

Setup Instructions:

Follow these steps to set up and run the project locally:

Prerequisites:

Node.js (version 14 or later)
npm (version 6 or later)
npm react-router-dom
Installation

Clone the repository:


git clone: https://github.com/KoketsoMoilwe20/KOKMOI366_BCL2401_GroupC_Koketso-Moilwe_DJS11.git



cd podcast-app
Install the dependencies:

npm install
Run the app

Start the development server:

npm start
Open your browser

Usage:

Browsing Series
Navigate to the Shows page to see a list of available podcast series.
Use the sort and filter buttons to organize the series list by most recent, least recent, A-Z, or Z-A.

Viewing Series Details:

Click on a series card to view the details of that series, including a list of available seasons.
Click on a season to view its episodes.

Listening to Episodes:

In the season details view, click on an episode to start listening.
The episode's audio player will appear, allowing you to play, pause, and control the volume.
Adding to Favorites
Use the Favorites page to view series you have marked as favorites.
You can manage your favorite series from this page.
Code Overview
App Component
The App component sets up the routing for the application. It includes nested routes for different pages such as Home, About, Favourites, Series, SeriesDetail, and Episodes.

Series Component
The Series component fetches and displays a list of podcast series. It includes sorting and filtering functionality to organize the series list.

SeriesDetail Component
The SeriesDetail component fetches and displays details of a specific series, including its seasons. It uses the series ID from the URL parameters to fetch the relevant data.

Episodes Component
The Episodes component fetches and displays the episodes for a specific season. It uses the season ID from the URL parameters to fetch the relevant data and includes an audio player for listening to episodes.

Contact Information


Name: Koketso
Email: koketsomoilwe2@gmail.com
GitHub: koketso20









