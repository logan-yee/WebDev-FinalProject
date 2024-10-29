# WebDev-FinalProject
# Restaurant Website with React and Node.js

This project is a simple restaurant website that displays menu items, restaurant information, and allows users to make local reservations. The frontend is built with React, and the backend uses Node.js with JSON files as a local data store.

## Tech Stack

- **Frontend**: React, CSS
- **Backend**: Node.js, Express.js
- **Data Storage**: JSON files

## Features

- **Home Page**: Displays restaurant information and upcoming events.
- **Menu Page**: Lists food and drink options.
- **Reservations**: Users can submit reservations, stored temporarily in a JSON file.

## Project Setup

1. Clone this repository:
    ```bash
    git clone https://github.com/username/restaurant-website.git
    cd restaurant-website
    ```

2. Install dependencies in both the `backend` and `frontend` folders:
    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

3. Start the backend server:
    ```bash
    cd backend
    npm start
    ```

4. Start the frontend development server:
    ```bash
    cd ../frontend
    npm start
    ```

5. Navigate to `http://localhost:3000` in your browser.

## API Endpoints (Backend)

1. **GET /api/menu**: Retrieve all menu items.
2. **POST /api/reservations**: Submit a new reservation (stored in `reservations.json`).

## Example Usage

- **Adding Menu Items**: Update `backend/data/menu.json` with new items.
- **Viewing Reservations**: All reservations are stored in `backend/data/reservations.json`.

## Future Improvements

- Enhance dynamic interactions and form validations.
- Implement error handling for invalid requests.
- Consider using Context API or Redux for state management in React.

## License

This project is licensed under the MIT License.

---

Happy coding!
