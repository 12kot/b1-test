# B1-Test | [Check Demo](https://b1-test.onrender.com)

How to launch a project:
- Go to the frontend folder | cd ./frontend
- Launch a project | npm run dev
- Open a project in a browser | http://localhost:5173

## Description of the application structure

- assets | Stores static application resources such as images, fonts, styles, and other multimedia files.
- component | Contains reusable components that can be used in different parts of the application
- config | Stores configuration files and parameters/common configuration variables for the application.
- context | Implements contexts for working with the React Context API. It is used to manage the state, which should be available at several levels of components.
- hooks | Contains custom hooks created to reuse logic that does not apply to individual components.
- layouts | Defines various templates or page layouts
- locales | Stores files with translations and config for internationalization of the application using i18n
- pages | Contains the main pages of the application, which are displayed depending on the route
- Router | Implements application routing, determines which pages and components should be displayed depending on the URL
- store | Contains global state management logic
- utils | Auxiliary functions and utilities that can be used in various parts of the application