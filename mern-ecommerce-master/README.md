 ## MERN DETAILS Description

PACKAGES THAT ARE NOT DOWNLOADING :
npm install connected-react-router (Currently have react 19 i need react 16)
npm install react-bootstrap-table-next (Same issue with above )
npm install react-bootstrap-table2-toolkit (Same issue wiith above )
npm install react-notification-system-redux ( same issue with above )


npm install optimize-css-assets-webpack-plugin

when i am back i will continue fixing the error from adress.actions

CONNECT mongoDB {
  Cluster has been created
  Conection string username and password i already have  
}

Error i am getting when starting /server dev server "[nodemon] app crashed - waiting for file changes before starting..." (Kind of fixed )

Webpack error fixed i will reset dep and reinstall and start over to check and fix the next error.

i also need to fill .env.examples file with the correct variables.
Also {
  MONGO_URI (MongoDB connection string)
  JWT_SECRET (for authentication)
}

# Frontend (Client):
React 16.8.6 with React Router and Redux for state management
Bootstrap and Reactstrap for UI components
Webpack for bundling
Various UI components like react-autosuggest, react-rating-stars, etc.
Socket.io for real-time features

# Backend (Server):
Node.js with Express
MongoDB (via Mongoose)
Docker support for containerization

# Client Structure :
app/ - Core application code
public/ - Static assets
webpack/ - Build configuration
nginx.conf - Nginx server configuration
.env.example - Environment variables template
Dockerfile - Container configuration

(app/):
components/ - Reusable React components
containers/ - Page-level components
contexts/ - React Context providers
constants/ - Application constants
styles/ - CSS/SCSS styles
utils/ - Utility functions

three main component areas:
Common/ - Shared/reusable components
Manager/ - Admin/management interface components
Store/ - E-commerce store components

# Server Structure :
index.js - Main server entry point
config/ - Configuration files
constants/ - Application constants
middleware/ - Custom middleware functions
utils/ - Utility functions
socket/ - WebSocket implementations

Data Layer:
models/ - MongoDB schemas including:
User management - (user.js, merchant.js)
Product management - (product.js, category.js, brand.js)
Shopping features - (cart.js, order.js, wishlist.js)
Customer service - (contact.js, review.js)
Address management - (address.js)

API Routes (routes/api/):
Authentication & Users (auth.js, user.js)
Product Management (product.js, category.js, brand.js)
Shopping (cart.js, order.js, wishlist.js)
Merchant Operations (merchant.js)
Customer Interaction (contact.js, review.js, newsletter.js)

Configuration Files:
Dockerfile - Container configuration
.env.example - Environment variables template
nodemon.json - Development server configuration
vercel.json - Vercel deployment configuration

Database Configuration:
Connection string defined in .env file as MONGO_URI
Default connection: mongodb://127.0.0.1:27017/mern_ecommerce
Configuration loaded through server/config/keys.js

Database Models (server/models/):
All models use Mongoose Schema for data modeling
Each model represents a collection in MongoDB
Models include validation and relationship definitions 
      
Register / signup is working
registered users info has beenn sent to db.
Login is still not working , and throwing error on PM.
Client dev server is now not starting.
continue from auth.js and GPT error check when i return 

Stopped at Step 6 but have not done step 3 of GPT resolutions (Done)


I have gone through all thhe steps again and i need to be more observant because i just noticed what has been causing these issues (Done)

Client server is back to running without errors and no network error.
Server side is also running without errors (Done)

I have been able to host, client(vercel) and server(render)
i have having issues with client side displaying properly.

made an update to client/app/consants/index.js