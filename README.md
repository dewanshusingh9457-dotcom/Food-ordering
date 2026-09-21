# EatEasy - Food Ordering Website

A modern, responsive food ordering web application built with Node.js, Express, EJS, and MongoDB.

---

## Tech Stack

- **Runtime & Framework**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- **Templating Engine**: [EJS](https://ejs.co/), `express-ejs-layouts`
- **Database & ODM**: [MongoDB](https://www.mongodb.com/), [Mongoose](https://mongoosejs.com/)
- **Authentication**: JSON Web Tokens ([jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)), [bcrypt](https://github.com/kelektiv/node.bcrypt.js), `cookie-parser`
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+), [Font Awesome](https://fontawesome.com/)

---

## Features

- **User Authentication**: Secure registration and login using salted password hashing (`bcrypt`) and HTTP-only cookie-based JWT authentication.
- **Menu Catalog**: Browse categorized food items with pricing, portions, and high-quality imagery.
- **Live Search**: Client-side instant search filtering menu items by name.
- **Cart Management**: Real-time addition of items to cart, increment/decrement quantities, removal, and live cart count badge.
- **Delivery Address**: Save and update delivery address directly from the cart / checkout view.
- **Order Processing**: Place orders with automatic tax and delivery calculation.
- **Order History & Details**: View past placed orders with timestamp, line items, and breakdown.
- **Menu Seeding**: Automated script to seed menu items directly from CSV into MongoDB.

---

## Project Structure

```text
eateasy/
├── assets/
│   ├── csv/
│   │   └── items.csv          # Menu items dataset for seeding
│   ├── fontawesome/           # Font Awesome icons (CSS, JS, webfonts)
│   └── fonts/                 # Custom web fonts
├── controllers/
│   ├── cartController.js      # Cart API and page controller
│   ├── indexController.js     # Home landing page controller
│   ├── menuController.js      # Menu display and search controller
│   ├── orderController.js     # Order placement and history controller
│   └── userController.js      # Authentication and profile controller
├── middlewares/
│   └── AuthMiddleware.js      # JWT authentication and user session middlewares
├── models/
│   ├── cart.js                # Cart Mongoose model
│   ├── menu.js                # Menu Item Mongoose model
│   ├── order.js               # Order Mongoose model
│   └── user.js                # User Mongoose model
├── public/
│   ├── css/                   # Page-specific stylesheets
│   ├── img/                   # Static UI and menu images
│   └── js/                    # Client-side interactive scripts
├── routes/
│   ├── cart.js                # /cart endpoints
│   ├── index.js               # / root endpoints
│   ├── menu.js                # /menu and /menu/search endpoints
│   ├── orders.js              # /orders endpoints
│   └── users.js               # /user auth endpoints
├── utils/
│   └── itemImport.js          # Menu database import script
├── views/
│   ├── partials/              # Reusable EJS partials
│   ├── layout.ejs             # Master layout template
│   └── *.ejs                  # Page views (index, menu, cart, etc.)
├── .env.example               # Environment variables template
├── .gitignore                 # Git ignore rules
├── package.json               # Node.js dependencies and scripts
└── server.js                  # Application entry point
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) (local instance or MongoDB Atlas URI)

### Installation

1. Clone or download the repository:
   ```bash
   git clone https://github.com/chiragverma11/EatEasy_Food_Ordering_Website.git
   cd eateasy-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Copy `.env.example` to create a `.env` file in the project root:
   ```bash
   cp .env.example .env
   ```
   Fill in your configuration:
   ```env
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/eateasy
   TOKEN_SECRET=your_jwt_secret_key_here
   ```

4. Seed the menu database:
   ```bash
   npm run menu
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```
   Or for standard production start:
   ```bash
   npm start
   ```

6. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

---

## Available Scripts

- `npm start`: Starts the server using Node.js (`node server.js`).
- `npm run dev`: Starts the server with hot-reloading using `nodemon`.
- `npm run menu`: Imports menu items from `assets/csv/items.csv` into MongoDB.

---

## License

This project is licensed under the ISC License.
