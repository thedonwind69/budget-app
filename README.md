### TRANSPLANTCENTRAL

TransplantCentral is a web application that allows you to review your favorite US metropolitan cities based of a variety of categories and share your living/travel experiences.

![alt text](https://media.giphy.com/media/fGR0LotJlmSk1R4jG8/giphy.gif)

[Live Site](https://transplantcentral.herokuapp.com/#/)

### Features:

Single-page web application built with `Ruby on Rails` RESTful API, with `Javascript (ES6)` and `React`, `Redux`, `PostgreSQL` database, `HTML/CSS` for styling, `Webpack`, and `NPM`.

1. Login/SignUp Page: User sign up/log in/log out functionality and secure user authentication using `Rails'` `BCrypt` Gem.

2. Fully responsive desktop page design coded from scratch with HTML/CSS without Bootstrap.

3. CRUD Features:
- Create a review using `Rails controller` action and `AJAX` request mixed with `React`, star highlight rating for intuitive and creative user experience. 
- Read a review by using `Redux`'s state manager to pass down info from database and render it to UI using `React`.
- Update a review with `Rails` controller and `AJAX` request.
- Delete review with `Rails` controller action.

### Code Highlights:

### Star Hover UI Rating

<div>
    <img src="https://media.giphy.com/media/7OWL4RSNanqyw49MEK/giphy.gif" width="300px" height="400px"</img> 
</div>

`Vanilla JS` and `DOM Manipulation` used to implement Star UI rating system,

<div>
    <img src="/screenshots/screen7.png" width="560px" height="320px"</img> 
</div>

Clicking on a star will highlight all the previous stars, and stay highlighted unless you click on another star, and change the `React` component's local state.

Hovering over a star with highlight all the previous stars of the one that is currently being hovered over...

<div>
    <img src="/screenshots/screen9.png" width="560px" height="320px"</img> 
</div>

And then hovering away from a star with highlight all the previous stars of the one that is currently been selected. If no selection has been made yet, all stars are unhighlighted.

### City Highlights

<div>
    <img src="/screenshots/screen12.png" width="400px" height="400px"</img> 
</div>

Data about all the cities is passed from container component using `Redux` state. Highest rated city, lowest rated city, and most reviewed city are calculated with `Vanilla Javascript`.

<div>
    <img src="/screenshots/screen13.png" width="600px" height="370px"</img> 
</div>

`React` is used to create UI component with a link directing user to that city's show page, using `React`'s `Link` and `Router` features. 