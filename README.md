# NASA Image Search Engine

## Overview

The NASA Image Search Engine is a web application that allows users to search for, view, and download images from NASA's extensive image library. The application is built using Node.js, Express, and EJS. It integrates with NASA's public API to fetch and display images based on user queries.

## Features

- **Search for Images**: Users can search for images using keywords.
- **View Images**: Displays images with titles and descriptions.
- **Download Images**: Option to download images directly from the web interface.

## Live Demo

You can view the live application at: [NASA Image Search Engine](https://nasa-image-search-engine.vercel.app)

## Setup and Installation

### Prerequisites

- Node.js (>= 14.x)
- npm (Node Package Manager)

### Local Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mandarwagh9/NASA-IMAGE-SEARCH-ENGINE.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd NASA-IMAGE-SEARCH-ENGINE
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Create a `.env` file in the root directory with your NASA API key:**

   ```plaintext
   NASA_API_KEY=your_nasa_api_key_here
   ```

5. **Run the application:**

   ```bash
   node app.js
   ```

   The application will be available at `http://localhost:3000`.

### Deployment

This application is deployed on Vercel. To deploy on Vercel, follow these steps:

1. **Install Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Log in to Vercel:**

   ```bash
   vercel login
   ```

3. **Deploy the application:**

   ```bash
   vercel
   ```

   Follow the prompts to deploy your application.

## Project Structure

- **`app.js`**: Main application file where the server is set up and routes are defined.
- **`/views`**: Contains EJS templates for rendering views.
- **`/public`**: Contains static assets like stylesheets and images.
- **`package.json`**: Project metadata and dependency definitions.
- **`.env`**: Environment variables, including the NASA API key.

## API Documentation

The NASA Image Search Engine uses the NASA Image and Video Library API. You can find more details about the API [here](https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf).

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License.

