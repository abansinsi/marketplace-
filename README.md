# marketplace-
# Three-Tier Marketplace Platform

A comprehensive marketplace platform featuring Real Estate Agents, Service Providers, and Household Items with admin controls and impression tracking.

## Features

### Core Features
- **Three-Tier System**: 
  1. Real Estate Agents (1 Bedroom Flat, 2 Bedroom Flat, Duplex, etc.)
  2. Service Providers (Carpenters, Painters, Electricians, Plumbers, etc.)
  3. Household Items (Kitchenware, Furniture, Gadgets, etc.)

- **User Registration**:
  - Required fields: First Name, Surname, Business Name (optional), Email, Phone, Address, State, Local Government, Gender (optional)
  - Email verification required before account activation
  - Profile visibility controls (users can hide certain fields)

- **Listing Management**:
  - Default 5 listings per account (admin configurable)
  - Maximum 5 pictures per listing (admin configurable)
  - YouTube video support with overlay display
  - Admin controls for business name and video display at individual, tier, and tier listing page levels

- **Admin Dashboard**:
  - Impressions matrix for tracking account visibility
  - Create and manage tier listing pages
  - Send notifications (individual, tier, tier listing page, or all)
  - User and listing management
  - Configurable limits per user

- **Design**:
  - Bright, modern design with magenta (#990f4b) accent colors
  - Responsive layout
  - Smooth animations and transitions

## Installation

### Backend Setup

1. Navigate to the backend directory: 
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/marketplace
JWT_SECRET=your_jwt_secret_key_here
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_FROM=noreply@marketplace.com
FRONTEND_URL=http://localhost:3000
ADMIN_EMAIL=admin@marketplace.com
```

4. Start the backend: 
```bash
npm run dev
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will open at `http://localhost:3000`

## Project Structure

```
marketplace-platform/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Listing. js
│   │   ├── TierListingPage.js
│   │   └── Notification.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── listingController.js
│   │   └── adminController.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── listings. js
│   │   └── admin.js
│   ├── middleware/
│   │   └── auth.js
│   ├── utils/
│   │   └── emailService.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   └── BannerVideo.jsx
│   │   ├── pages/
│   │   │   ├── TierListingPage.jsx
│   │   │   └── AdminDashboard.jsx
│   │   └── App.js
│   └── package.json
└── . env
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `GET /api/auth/verify-email` - Verify email with token
- `POST /api/auth/login` - Login user

### Listings
- `POST /api/listings/create` - Create a new listing
- `PUT /api/listings/:listingId` - Update listing
- `GET /api/listings/user-listings` - Get user's listings
- `GET /api/listings/:tier/:tierCategory` - Get listings by tier and category
- `POST /api/listings/: listingId/add-picture` - Add picture to listing

### Admin
- `POST /api/admin/tier-listing-page` - Create tier listing page
- `PUT /api/admin/business-display/: userId` - Toggle business name display
- `PUT /api/admin/video-display/:pageId` - Toggle video display
- `POST /api/admin/send-notification` - Send notifications
- `GET /api/admin/impressions-matrix` - Get impressions data
- `PUT /api/admin/listing-limit/: userId` - Update listing limit
- `PUT /api/admin/picture-limit/:userId` - Update picture limit

## Color Scheme

- **Primary Color**: #990f4b (Magenta)
- **Secondary Color**: #cc0d5c (Light Magenta)
- **Background**: Linear gradients with light variants
- **Text**: Dark gray (#333, #555, #666)
- **Accent**: White with magenta accents

## Technology Stack

### Backend
- Node.js & Express. js
- MongoDB with Mongoose
- JWT for authentication
- Nodemailer for email
- bcryptjs for password hashing

### Frontend
- React.js
- React Router for navigation
- CSS3 for styling
- Axios for API calls

## Future Enhancements

- Payment integration
- Advanced search and filtering
- User ratings and reviews
- Messaging system
- Analytics dashboard
- Mobile app
- Live chat support

## License

MIT License

## Support

For support, contact admin@marketplace.com

ENVIRONMENT CONFIG:
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/marketplace

# JWT
JWT_SECRET=your_jwt_secret_key_here

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=465
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_FROM=noreply@marketplace.com

# Frontend
FRONTEND_URL=http://localhost:3000

# Admin Email (for dashboard access)
ADMIN_EMAIL=admin@marketplace.com

--- END ---
