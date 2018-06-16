# Clicky Game

## Overview

Clicky - a memory game with React. Application's UI is broken up into components, it manages component state, and responds to user events.


1. New React application was created using a single command `create-react-app [app name]`.

2. There 4 components in this application. 

  * `Header` contains html and css code for a header.
  * `Jumbotron` contains an html and css code for a div with logo and "play" button.
  * `Game` contains html and css code for the main container where all images are displayed.
  * `Wrapper` is a one line code ("wrapper" element), that we use to wrap all our application in.

3. The application renders images from `public` folder to the screen. Each image listens for click events.

4. The application keeps track of the user's score. The user's score is incremented when clicking an image for the first time. The user's score resets to 0 if they click the same image more than once.

5. Every time an image is clicked, the images rendered to the page shuffle themselves in a random order.

6. Once the user's score is reset after an incorrect guess, the game restarts.

## Header

Most components can be customized when they are created, with different parameters. These creation parameters are called `props`.
`props` let us control what content to show in specific element. We place props (names) inside of component, and we define them in `App.js`

`Header` component displayes score & top score, and dynamically updated <p> element

Header.js (placing and naming props)
```javascript
const Header = props => (
  <div className="container-fluid" id="header">
      <div className="row pt-3">
          <h1 className="col-sm-12 col-md-6 col-lg-4">Clicky Game</h1>
          <h2 className="col-sm-12 col-md-6 col-lg-4 text-center">{props.pTag}</h2>
          <h2 className="col-sm-12 col-md-12 col-lg-4 text-right">Score: {props.score} | Top Score: {props.topScore}</h2>
      </div>
  </div>
);
```
App.js (defining props/ passing values)
```javascript
  <Header
    pTag={this.state.message}
    score={this.state.score}
    topScore={this.state.topScore}
  />
```

## Game

`Game` component is an <image> element.

Game.js
```javascript
const Game = props => (
    <img className="rounded gameImgs" id={props.index} onClick={props.handleIncrement} alt={props.name} src={props.image}/>
);
```
To display all the images we have, we are mapping through the array in App.js. Map mehtod ellows us to create as many images as we have in array, and pass all their unique info as attributes. That will allow us to interact with images later.

`props.index` will contain the index of image in array

`props.handleIncrement` will contain a function that will be called on click

`props.image` will contain a source to the image from "public" folder 

App.js
```javascript
{this.state.imgArr.map((oneImg, index)=>
  <Game
    key={index}
    index={index}
    name={oneImg.name}
    image={"./images/"+oneImg.image}
    handleIncrement={this.handleIncrement}
  />
)}
```
Every time you click on an image, it calls a fucntion "handleIncrement". It will grab images index to find image object in array and check it's property "clicked". 
* If it's set to `false`, it will increment score by 1, set "clicked" to true, and will shuffle the array of images.
* If 'clicked" is `true`(it means that user has already clicked that image before), it will update all images back to "clicked: false", shuffle the array, set score back to 0, and game will tell you to try playing game again (restart it).