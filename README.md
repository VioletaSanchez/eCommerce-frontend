# eCommerce Platform
## Overview of the project
This is my capstone project for the FullStack development course of Bottega university and VASS foundation.

This is an eCommerce Platform with full CRUD functionality and the additional feature of a sliding image carrousel. The project is mobile responsive and adheres to best practices.
Users of this platform include past, current and future clients who buy products and shop owners that manage them.
The project contains features such as intuitive UI and fast communication between product database and end-user, which in turn creates a better user experience.


### Live URLs
Front end: https://violetasanchezecommerceplatform.netlify.app/
Back end: https://ecommerce-backend-wfro.onrender.com/
Repository for front end: https://github.com/VioletaSanchez/eCommerce-frontend
Repository for back end: https://github.com/VioletaSanchez/eCommerce-backend

Hidden route for product administration: https://violetasanchezecommerceplatform.netlify.app/catalog_admin


## Technology used for the project
- Flask
- Flask-SQLalchemy
- Flask-CORS
- Python
- SQLite (on local)
- PostgreSQL (on deployment)
- React
- React router
- Node.js
- HTML
- SCSS
- Javascript
- Axios
- Git version control

-Backend deployed on Render
-Frontend deployed on Netfily


### Screenshots of the platform
#### Landing page with carrousel
![](./images/langing_page_with_carrousel.png)

#### Render database sleeping
The platform is currently on Render's free monthly plan. This means that the database goes to sleep if it is not used within an hour. It is possible that the first use of the website takes a couple seconds to load as Render initializes the service
![](./images/database_asleep.png)

#### Admin catalog
The admin catalog offers the option to add, modify or delete products.
![](./images/admin_catalog.png)

#### Publicly available catalog
![](./images/catalog.png)

#### Adding a new item
Here we make sure that the datatypes make sense. For example, an administrator can only add integers as price.
![](./images/adding_a_new_item.png)

#### Editing an existing item
![](./images/editing_product.png)


## How to use it
Every page contains a navigation bar at the top of it by which you can travese through the application.

The /catalog_admin, which contains the page where admins can add, modify or delete products, has its route hidden and needs to be accesses by entering it in the address bar.

## Feature not learned in the course: carrousel
It is known that stores online use sliding image carrousels as to display their offers, therefore I found it only natural to want to create one for this project.

The logic for this component can be found in /src/pages/carrousel.js and /src/pages/carrousel-container.js

## Files of interest
- catalog.js
- carrousel.js
- create_product.js


## Known Issues
- LOCAL ONLY: Memory leak when moving from catalog into another page 

## License
This project was develop under [MIT License](https://github.com/VioletaSanchez/eCommerce-frontend/blob/main/LICENSE)

## Further improvements
- Filter to display only one type of product
- Account system - Users will be able to set their credit card information and location so a whole purchase can be made from a single click
- Payment method implementation
- The ability to actually buy an item