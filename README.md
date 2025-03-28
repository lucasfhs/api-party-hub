﻿
API CREATED FOR MONGODB UDEMY COURSE - > https://www.udemy.com/course/mongodb-do-basico-ao-avancado-c-mongoose-e-projetos/


# PartyManager API

PartyManager is an API designed for event management, allowing users to create, manage, and track parties and events with ease.

![PartyManager](./public/img/background-image.jpg)

## Features

- Create and manage events
- User authentication and authorization via JWT
- Integration with MongoDB for data storage
- API documentation accessible through Swagger

## Technologies Used

The following technologies and packages are used in this project:

- **bcrypt**: For hashing passwords
- **body-parser**: Middleware to parse incoming request bodies
- **cors**: Middleware to enable Cross-Origin Request Sharing
- **dotenv**: For managing environment variables
- **express**: Web framework for building the API
- **jsonwebtoken**: For JWT authentication
- **mongoose**: MongoDB object modeling
- **swagger-jsdoc**: For generating API documentation from JSDoc comments
- **swagger-ui-express**: For serving the Swagger API documentation

## Prerequisites

Before running the application, you need to create a `.env` file in the root directory of your project with the following environment variables:

```env
PORT=<your-desired-port>
MONGO_DB_URL=<your-mongodb-connection-string>
JWT_SECRET_KEY=<your-secret-key-for-jwt>
```

### Example:

```env
PORT=5000
MONGO_DB_URL=mongodb://localhost:27017/party_manager
JWT_SECRET_KEY=mysecretkey
```

## Installation

Follow these steps to get your environment set up:

1. Clone this repository:

```bash
git clone <repository-url>
```

2. Install the dependencies:

```bash
npm install
```

## Running the Application

To run the API in development mode, use the following command:

```bash
npm run dev
```

The API will start, and you can access it on the specified port (default is `PORT=5000`).

## API Documentation

The API documentation is generated using Swagger and can be accessed at:

```
<your-api-url>/api-docs
```

For example, if you're running the app locally:

```
http://localhost:5000/api-docs
```

## Endpoints

The following endpoints are available (check the Swagger docs for more details):

## Contributing

If you'd like to contribute, feel free to submit a pull request. We welcome improvements, bug fixes, and new features!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Image by [redgreystock on Freepik](https://www.freepik.com/free-vector/pixel-art-happy-birthday-elements-with-y2k-cakes-candles-gift-boxes-ribbon-bows_369889297.htm)
