# Expense Tracker

This is a basic Expense Tracker 

## Installation Guide
1) Clone the Repo and open folder
```
$ git clone https://github.com/theofficialmilo/expense-tracker
$ cd expense-tracker
```
2) Install Dependencies 
```
$ npm install
$ npm start
```
## Feature Implementation
The features of the app is simple, you can only add and delete expenses. When registering for the first time, a fake data generator function will be invoked to simulated the data shows by the visualization UI and and Ordered Table.
The data is store by redux and persisted in the browser's localhost through redux-persist.

For the implementation of Redux, I decided to use the [Ducks](https://github.com/erikras/ducks-modular-redux) approach rather than the subfolder approach due to readability and scalability. 

#### Explanation of File Structure
- Components State-less Components)
- Container (State-ful Components)
- Pages (Main Pages)
- State (Redux state, reducers and actions)
- Typing (Custom Interfaces for Typescript typechecking)
- Utils (Utilities Functions for the app)
 

## Technologies Used
- [React](https://reactjs.org/) - SPA
- [Material-Ui](https://material-ui.com/) - UI-Components, Icons, Styling
- [Recharts](https://recharts.org/en-US/) - Data Visualization library
- [Lodash](https://lodash.com/) - Data Processing library
- [Faker js](https://github.com/marak/Faker.js/) - Fake Data Generator library
- [Redux](https://redux.js.org/) - State Management
- [Redux-Persist](https://redux-saga.js.org/) - Persist Redux to Local Storage
- [Typescript](https://www.typescriptlang.org/) -Type Defenitions


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
- Utils (Utilities for App)



## Technologies Used
- [React](https://reactjs.org/) - SPA
- [Material-Ui](https://material-ui.com/) - UI-Components, Icons, Styling
- [Recharts](https://recharts.org/en-US/) - Data Visualization library
- [Lodash](https://lodash.com/) - Data Processing library
- [Faker js](https://github.com/marak/Faker.js/) - Fake Data Generator library
- [Redux](https://redux.js.org/) - State Management
- [Redux-Persist](https://redux-saga.js.org/) - Persist Redux to Local Storage
- [Typescript](https://www.typescriptlang.org/) -Type Defenitions
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)