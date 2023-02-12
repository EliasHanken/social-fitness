# Social-Fitness App [![pages-build-deployment](https://github.com/Streafe/social-fitness/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages)](https://github.com/Streafe/social-fitness/actions/workflows/pages/pages-build-deployment)

A social-fitness platform that allows users to create, view, like and comment on posts.

## Features

- User authentication
- Create and view posts with images and descriptions
- Like and comment on posts
- User profile management

## Prerequisites

- Node.js
- MongoDB

## Getting Started

1. Clone the repository

```
git clone https://github.com/Streafe/social-fitness.git
```

2. Install dependencies

```
npm install
```

3. Create a .env file in the root directory with the following contents:

```
MONGO_URL=<your-url>
JWT_TOKEN_SECRET=<your-secret-key>
```

4. Replace `<your-url>` with the URI of your MongoDB database and `<your-secret-key>` with a secret key of your choice.

5. Start the development server

```
npm run dev
```

6. Visit `http://localhost:3000` in your browser to use the app.

## Deployment

This app can be deployed to a production environment using a service such as Heroku.

## Built With MERN stack

- MongoDB
- Express
- React
- Node.js

## Contributing

Contributions are welcome! Please submit a pull request or issue for consideration.

## License

This project is licensed under the MIT License.
