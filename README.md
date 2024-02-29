# json-mock-server

`json-mock-server` is a tool designed to allow developers to quickly set up a simple REST API that returns static or dynamically generated JSON data. This is particularly useful for frontend development and testing when the backend is not yet ready, as it can be used to simulate data.

## Features

- Serve static JSON data.
- Serve dynamically generated JSON data.
- Easy setup and integration with any frontend project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js installed on your system. You can download and install it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

    ```
    git clone https://your-repository-url/json-mock-server.git
    ```

2. Navigate to the project directory:

    ```
    cd json-mock-server
    ```

3. Install the necessary dependencies:

    ```
    npm install
    ```

4. Start the server:

    ```
    node server.js
    ```

    The server will start running on `http://localhost:3000`.

## Usage

The server starts with two predefined routes:

- **GET `/api/static`** - Returns static JSON data.

- **GET `/api/dynamic`** - Returns dynamically generated JSON data, including a timestamp and a random number.

You can test these endpoints by navigating to `http://localhost:3000/api/static` or `http://localhost:3000/api/dynamic` in your web browser or by using a tool like Postman.

## Customizing

You can customize the server by adding more routes and logic in the `server.js` file. This allows you to simulate more complex data structures and API behaviors as needed for your development and testing.

## Contributing

Contributions are welcome! If you have ideas for improvements or encounter any issues, please feel free to open an issue or submit a pull request.

