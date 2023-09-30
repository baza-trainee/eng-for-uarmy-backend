# Getting Started

- To run the API locally, you'll need to have Node.js and MongoDB installed on your machine. You can then clone this repository and install its dependencies by running:

```
  git clone https://github.com/baza-trainee/eng-for-uarmy-backend.git
  cd eng-for-uarmy-backend
  npm install
```

- You'll also need to create a .env file in the root of the project, with the following environment variables:

```
  PORT=8081
  SENDGRID_API_KEY=<your SendGrid API key>
```

- You can then start the server with:

```
  npm start
```

This will run the server in production mode, which serves the API at http://localhost:8081.

- If you want to run the server in development mode, with automatic reloading on file changes, you can use:

```
  npm run start:dev
```

## API Documentation

🔗 Base url: https://eng-for-uarmy-backend.onrender.com

## Endpoints

- POST /api/contact-us - send email with user data from Contact Us form
