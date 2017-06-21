# Bootstrap Button Client

This application is a tool for designers and developers to be able to create Bootstrap themes by creating custom configuratiions of the variables that LESS uses to compile the CSS for Bootstrap. It allows users to create new themes based on Bootstrap's default variables, then modify those variables and see the result in real-time. When the theme is complete, the application can generate a LESS variables file that can be included in a project's styles.

![Bootstrap Button](https://s3.amazonaws.com/pliddy-ga/bootstrap-button/buttons.png)

## Project Links

- **Deployed Client:** <https://pjliddy.github.io/bootstrap-button-client/>
- **Deployed API:** <https://bootstrap-button.herokuapp.com/>
- **API GitHub Repository:** <https://github.com/pjliddy/bootstrap-button-server/>
- **Client GitHub Repository** (this one): <https://github.com/pjliddy/bootstrap-button-client/>

## Technologies Used

This application uses Ember as its front-end framework, connected to a RESTful API built in Express with a Mongoose/MongDB NoSQL database. The applicaiton itself uses Ember's SCSS-based CLI, while the theme layout and real-time CSS compliling uses less.js, as standard JavaScript library that runs in it's own iFrame to allow separate DOMs with their own stylesheets.

## Approach

To begin this project, I tried to have a clearly-defined MVP, given the short time frame, use of new frameworks, and attempting some complicated CSS manipulation. To identify the right scope, I created detailed [user stories](user-stories.md) to understand the user and application actions that would take place for a basic user flow. Then, I wireframed out the key screens to identify all the key interface components.

To maintain manageable scope, I limited the theme configuration to buttons. Once the proof of concept is successful, it can be expanded to include additional classes of Bootstrap components. I also decided to limit the inputs to text fields, instead of trying to implement more complex UI elements like color pickers, etc.

Once the application was planned and designed, I built and tested the Express server and MongoDB [(API GitHub Repository)]<https://github.com/pjliddy/bootstrap-button-server/> to have a stable API to build against. I set up Ember with authentication and appropriate data models for themes and began the arduous process of building my first app in Ember. I started with a rough path through the application to create core functionality, first to view data that had been seeded in the database, then to successfully perform the remaining CRUD functions.

After the data interactions were complete, I took several different approaches to solving the real-time CSS compilation challenge, before deciding to use two separate DOMs for the application and the layout, one using SASS and the other LESS. Once this last piece of functionality was complete, I went through and smoothed out the application flow within Ember and added error handling and validation where needed.

## User Stories

[Click Here for User Stories](user-stories.md)

## Wireframes

[Click Here for Wireframes](wireframes.md)

## Dependencies

Other than the dependencies listed below, this applicaiton uses a standard installation of ember-cli with the SASS/SCSS compiler.

### ember-composable-helpers

ember-composable-helpers is used to provide helpers in organizing objects in the layout, particularly to `groupBy`, which, apparently, is not something natively available in Ember.

To install ember-composable-helpers:

```
  ember install ember-composable-helpers
```

## Challenges

The biggest challenge in this project was learning Ember and using it to implement an application that required a significant amount of DOM manipulation, which, in retrospect, goes against Ember's highly-opinionated approach.

The other challenge was that SASS does not have a good run-time solution for compiling stylesheets at run-time. My original plan was to use namespaced CSS to have the application and the theme styles be separate concerns within one DOM. The solution was to switch to LESS for on-demand compiling of theme variables, but, Ember needs to use either SASS or LESS from the start.

Additionally, Ember is not easy to extend if there are not ember modules available. The short term solution for this project was to load the theme layout in an iframe and load the less.js library into the iframe. JavaScript messages are sent from the application to the layout iframe with updated variable data. There is a listener in the iframe that receives the new variables and re-compiles the layout CSS.

There are still some significant UI improvements to be made that require more practice with organizing Ember components and, potentially, better use of routes for specific functionality. The one outstanding defect is that the embedded layout does not render with the theme until it gets it's first update event. The solution to this issue is to use event messaging in both directions and have the layout iframe tell the applicaiton when it is done loading so it can receive the theme data and compile it's styles.
