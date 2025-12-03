Health & Wellness Tips – Vue.js Application

This project is a health and wellness single-page application (SPA) built using Vue.js and deployed on Azure Static Web Apps, with automated CI/CD provided by GitHub Actions.
It fulfills the ITMD course requirement of building a functional web application using a frontend framework different from the final project framework.

Live Demo

Deployed Website:
https://polite-pebble-0a95c9b1e.3.azurestaticapps.net

Features

• Fully functional Vue.js single-page application
• Responsive design using pure CSS (no UI libraries)
• Navigation with Vue Router
• Dedicated pages:

Home

Daily Tips

Yoga & Meditation

Planner

Breathing Exercise

About

• Reusable components and external styling
• Professional gradient-based UI
• Automated build and deployment through GitHub Actions
• Hosted on Azure Static Web Apps

Tech Stack

• Vue.js 3
• Vite
• Vue Router
• CSS
• Azure Static Web Apps
• GitHub Actions

Run Locally

Install dependencies

npm install


Run development server

npm run dev


Build production files

npm run build


The build output is located in the /dist folder.

Deployment Details

The application is deployed using Azure Static Web Apps.

• CI/CD workflow file:
.github/workflows/azure-static-web-apps-*.yml

• Build process: npm run build
• Deployment folder: dist
• Automatic deployment triggered on every push to the main branch

Framework Comparison: Vue.js vs React (Framework Used in Final Project)
What I Found Interesting

Vue’s Single File Components (.vue files) were very intuitive because the template, script, and style are all grouped together. This made structuring the project straightforward and clean.

Unique Features of Vue

• Simple and expressive HTML-based template syntax
• Built-in reactivity using ref() and reactive()
• Cleaner two-way binding via v-model
• Lightweight and fast
• Very beginner-friendly component architecture

Comparison: Vue.js vs React
1. Syntax & Structure

Vue:

Uses SFCs (<template>, <script>, <style>)

More HTML-driven

React:

Uses JSX

More JavaScript-driven

2. State Management

Vue:

ref() and reactive() provide automatic reactivity

React:

Uses hooks (useState, useEffect, etc.)

3. Routing

Vue:

Vue Router is simple and requires minimal setup

React:

React Router often needs more boilerplate

4. Learning Curve

Vue:

Very easy to pick up and understand

React:

Requires understanding JSX, hooks, component lifecycle

5. Performance

Both frameworks provide:

Fast rendering

Virtual DOM

Excellent SPA performance

6. Developer Experience

Vue:

Clean structure and less boilerplate

React:

Larger ecosystem and more third-party libraries

When I Would Choose Vue

• Quick prototypes
• Small to medium SPAs
• Projects where simplicity and readability are important

When I Would Choose React

• Enterprise applications
• Larger-scale complex systems
• When extensive third-party support is needed

Reflection

Vue.js surprised me with how clean and beginner-friendly it is.
It is excellent for creating focused, visually strong single-page applications like this project. React is still my preferred choice for large-scale applications, but Vue has proven to be very enjoyable and efficient for smaller SPAs.
