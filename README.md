## AirBnB Clone - Next.js 14 Project

This project is an AirBnB clone website built with Next.js 14 to showcase skills and explore functionalities. 

### Features

* User Registration and Login
* Adding new homes with details
* Making reservations for homes
* Marking favorite homes
* Map view to locate the country of a home

### Technologies Used

* Frontend: Next.js 14
* Authentication: @kinde-oss/kinde-auth-nextjs
* Database: Prisma
* UI Components: Radix UI
* Mapping: Leaflet, react-leaflet, world-countries
* Styling: Tailwind CSS

### Getting Started

1. **Clone the repository:**

```bash
git clone https://your-repository-url.git
```

2. **Install dependencies:**

```bash
npm install
```

(or)

```bash
yarn install
```

3. **Set up environment variables:**

You'll need to set up environment variables for your authentication provider (kinde-auth-nextjs) and potentially your database connection (Prisma). Refer to the documentation of your chosen provider for specific instructions.

4. **Start the development server:**

```bash
npm run dev
```

(or)

```bash
yarn dev
```

This will start the Next.js development server at http://localhost:3000 by default.

### Usage

1. **User Registration and Login:**
    * Navigate to the registration or login page (likely located at `/register` or `/login`).
    * Follow the on-screen prompts to create an account or sign in with existing credentials.

2. **Adding new homes:**
    * You'll likely need to be logged in with an account with appropriate permissions to add homes.
    * Navigate to the dedicated "Add Home" page (potential location: `/add-home`).
    * Fill out the form with details like location, description, amenities, etc.
    * Submit the form to create a new home listing.

3. **Making reservations:**
    * Find a home you'd like to reserve.
    * Look for options to make a reservation (e.g., a button or form).
    * Select your desired dates and any additional options.
    * Follow the prompts to confirm your reservation.

4. **Marking favorite homes:**
    * While browsing homes, look for options to mark them as favorites (e.g., a star icon).
    * Clicking this icon should add the home to your list of favorites.
    * There might be a dedicated "Favorites" page to access your saved homes.

5. **Map view:**
    * The home listings might display a map view indicating the country location.
    * Clicking on the map element could potentially offer more details or zoom functionality.


### Development

This project is built with Next.js 14 and leverages TypeScript for development. You can use the following commands for development tasks:

* `npm run dev` (or `yarn dev`): Starts the development server.
* `npm run build` (or `yarn build`): Builds the optimized production code.
* `npm run lint` (or `yarn lint`): Runs code linting for potential issues.

### Additional Notes

Live Demo
You can view a live demo of the application deployed on Vercel at: [link](https://airbnb-app.vercel.app/)

Feel free to explore the codebase, customize features, and enhance this project further!
