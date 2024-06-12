# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Backend
Git Repo URL: https://github.com/lorenzoappo12/nodejs-shopping-backend.git

The backend of this app is built with the following technologies

- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **TypeORM**: An ORM for TypeScript and JavaScript that supports both Active Record and Data Mapper patterns.
- **PostgreSQL (pg)**: A powerful, open-source object-relational database system.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express applications.
- **Dotenv**: A zero-dependency module that loads environment variables from a .env file into process.env.

To learn more about each technology used in the backend, you can visit their respective documentation:

- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## Available Scripts for Backend

In the backend project  directory, you can run:

### `npm install`
### `node index.js`

Runs the backend server in production mode.\
Server is running on http://localhost:8000 by default.


## Available Scripts for Frontend

Git Clone URL: https://github.com/lorenzoappo12/react-shopping-frontend.git


In the frontend project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Redux and Redux Saga

This project employs [Redux](https://redux.js.org/) for managing state and [Redux Saga](https://redux-saga.js.org/) for handling side effects. The following packages are used:

- **redux**: Provides a predictable state container for JavaScript apps.
- **react-redux**: Allows React components to interact with Redux store.
- **redux-saga**: Provides a middleware for handling side effects in Redux applications.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
