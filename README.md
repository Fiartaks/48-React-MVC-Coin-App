# 💰 Cryptocurrency Application

## 📖 Project Overview
🌍 This Cryptocurrency Application provides users with an interface to view cryptocurrency information, including detailed statistics about individual coins. Built with **React** and utilizing state management and navigation capabilities, this application allows users to log in, view a list of coins, and explore detailed information about each coin.

## 📸 Screenshots 📸

![coin.gif](https://github.com/Fiartaks/48-React-MVC-Coin-App/blob/main/formik/public/coin.gif)


## 💻 What’s in the Project?
- 🌟 **Main Component (App.js)**: The main entry point of the application that sets up routing between different pages.  
- 📝 **Login Page Controller (LoginPageController.js)**: Manages the login page logic, including form handling and validation.  
- 🏠 **Main Page Controller (MainPageController.js)**: Handles the logic for fetching and displaying a list of cryptocurrencies.  
- 🔍 **Detail Controller (DetailController.js)**: Manages fetching detailed information and historical data for a specific cryptocurrency.  
- 🖥️ **View Components (HeaderView.js, MainPageView.js, LoginPageView.js, DetailView.js)**: UI components that display different sections of the application.  
- 📦 **Constants (constant.js)**: Stores input field definitions for user input forms.  
- 📜 **Form Validation (schema.js)**: Defines validation rules for user inputs using Yup.

## 🏗️ MVC Characteristics

### 1. Model
- **Data Representation**: The models handle the logic for API calls and define the structure of the data being fetched, represented in classes like MainPageModel and DetailModel.
- **Validation Logic**: The validation for user inputs is provided in `schema.js`, ensuring that users enter valid data.

### 2. View
- **User Interface**: The application consists of multiple view components (e.g., MainPageView, LoginPageView, DetailView) that provide the user interface for various functionalities.
- **Styling**: The application uses various CSS techniques, including Bootstrap, for responsive design and visual appeal.

### 3. Controller
- **Business Logic**: Controllers like LoginPageController and DetailController handle user actions, manage state updates, and communicate between the models and views.
- **Data Fetching**: Controllers use Axios to fetch data from cryptocurrency APIs, ensuring that the application displays up-to-date information.

## 🛠️ What Has Been Done in the Project?
- 🔄 Implemented user authentication and form handling using Formik.  
- 📥 Displayed real-time data on cryptocurrencies with detailed views for each coin.  
- 📈 Integrated charting capabilities for visualizing price changes over time.
- 🎨 Styled the application for a clean and user-friendly experience.

## 📦 Libraries
- 📘 React  
- 🌐 React Router  
- 📦 Axios  
- 🛡️ Yup  
- 🎨 Bootstrap 
