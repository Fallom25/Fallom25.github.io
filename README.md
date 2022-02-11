# Weather Widget

## Project Description
This is a weather widget editor and display. It allows users to modify a weather widget using a form. This form data will then be used to create a weather widget of the user's current location.

## How to Install and Run
I have chosen to use Npm and Node.js as my command line utility. 

**Installing**
- Cloning the repo
- Having Npm and Node.js install on your machine
- Running *npm install* in the command line 

**Run**
- Once npm install has finished running
- Using the *npm start* command will host the project locally

Currently (11/02/2022) there is a deployed version of this App at https://fallom25.github.io/

## How to use
First please allow the app to know your location.
Once allowed Weather information will populate on the Card. 
You can change the title of the Card by changing the text in the Title Input.
You can switch between Metric and Imperial by clicking either the Celsius or Fahrenheit radio button.
Lastly you can choose to show or hide the wind information by clicking either the On or Off radio button.

## Asumptions
- All designs must be made using JS, HTML and CSS.
- Blue line is progress bar
- When you change the Temp to Fahrenheit you also want to change the wind speed to Miles/hour
- Temperature is to be rounded to whole number
- Wind Direction goes as precise as Two compass sections
- Wind Direction does not go past 360 Degrees
- All colors were picked using the example photo and *image color picker*

## Outline of my Solution
For this project I chose to a React.JS framework with design using HTML and CSS.
My Data including API calls is managed by Redux and my Testing is handled by Jest and React-testing-library.
The flow of this application is as follows: 
- LoadGeolocation action is dispatched on Render
- When successful coordinate information is stored in state and LoadWeatherInfo action is dispatched using the temperature units currently stored.
- LoadWeatherInfo stores in state and the info is called by the container, passing the values to the card
- The formValues were made using a simple HTML/React form they are stored as state on the editor but useEffect dispatches the handleform action to update the Rootstate. If the tempUnits change loadWeather is called again as this requires new Weatherinfo.

## Considerations and Further Growth
**Media Queries**
This application is built with a large window in mind (desktop), however I wanted to account for smaller screen use. I used just a basic Media Query on the container to achieve this. However if it were a larger more complex application I would look at Media Queries or the like on each level of the design.

**Progress Bar issues**
My assumption was that the blue line on the example design was a progress bar. I wanted to build the bar so that it would run parallel with the loadWeatherInfo action. This would involve complex redux selector creation and would be something I would want to implement in the future. For the time being I used this resource 
https://www.w3schools.com/howto/howto_js_progressbar.asp
to build a setInterval to have the bar move on render.
The issues with this current code is that this was not built for React in mind, meaning that it will cause a memory leak as the clearInterval is set to 100 and if the component is unmounted before then it could mean the interval will run continuously until the component is mounted again.

**Typescript**
My original plan was to use Typescript. I prefer Typescript because of the immutability of variable type, it allows for early error and bug spotting and it makes it easier for other devs to understand with increased readability.
After reviewing the instructions of the task I assumed that JS was the language to use.

**ESLint**
I originally had ESLint installed as for a development team having a linter allows for consistency, accuracy and less bugs and errors from the design. I ultimately removed it as this was a small one person application.

**Material UI**
I am very conformable being components using Material UI. I could have built them a lot quicker with more inbuilt functionality but the brief stated to design using HTML and CSS and I want to challenge myself and give myself the confidence the confidence that I could. The benefits of using a component library like material ui is time, consistency across not only the application but the devs and easy of functionality of the components and their children.

**nvm**
My application was built using NPM and Node.js I wanted to implement a version manager even in a small application such as this as NPM can be notoriously tricksy.

**null checks**
For my helper functions I implemented a null check. I did this as a first step so that further error catching actions could be implemented in the future.

**Context vs Redux**
While the setup and installation of Redux is more complex than the inbuilt context. I find the benefits of the debugging tools, clean code organisation and the ability to work with both static and dynamic data more appealing. Once the set up it is very easy to add more actions even reducers to the store.

**ConfigureStore vs CreateStore**
When building a Redux store I normally use CreateStore as well as configuring the Middleware, Enhancers etc. With ConfiureStore is it all done in one function including setting a initial state.

**createAsyncThunk**
This was something I fiddled with I wouldn't normally use two different Async methods but I wanted to test out createAsyncThunk. It made the Redux process a lot more streamline as the function creates the types for you. However interacting with errors become more difficult to access.

**Cookie Geolocation**
I have left in my actions.js code for a Geolocation Cookie. The idea of this function was so that the users Geolocation could be stored in a cookie and retried upon render instead of having to call to the API everytime. While Cookie logic worked this issue that I began having was that the Loadweatherinfo action was running before the Geolocation had been stored so one first Render the location was set to Globe and only upon reload would the correct locational information render. I fiddle and attempted to fix this issue but ultimately ran out of time and settle for the approach of calling loadweatherinfo inside of geolocation and calling geolocation every render.

**React-testing-library vs Enzyme**
While there is no shallow or deep rending with RTL it allows for more user perspective testing. 

## Personal Comments
I took me much longer than 3 hours. Although I managed to plan out a solution in quick a short amount of time, it took me longer than expected to build the components just using HTML/CSS as opposed to a component library. I did have fun fiddling around with some new Redux Toolkit functions I hadn't used before. When I first started to build it the overall concept seemed simple enough but the more I built the more small things were a little more sneaky and I hope I got all the little details right.

## References
https://www.w3schools.com/howto/howto_js_progressbar.asp
https://w3c.github.io/geolocation-api/#dom-navigator-geolocation
https://openweathermap.org/current#parameter
https://openweathermap.org/weather-conditions
https://imagecolorpicker.com/en
https://redux.js.org/usage/configuring-your-store
https://redux-toolkit.js.org/api/createAsyncThunk


