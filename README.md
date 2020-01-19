A case study on getting current departure statuses using Metro API of Minneapolis

## Application setup
* Clone the repository from [here](https://github.com/techag/twincity-transit)
* Open the command line and go to the root folder of te application
* run `npm install` to install all dependencies of the application

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

##Automation Tests
In this app, we are using [Cypress](https://docs.cypress.io/) for testing. 

Cypress is a test runner which automates the DOM interactions. It has been added as dependency in the project. 

To the Cypress use following command from the root directory

### `./node_modules/.bin/cypress open`
