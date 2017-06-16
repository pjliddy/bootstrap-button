# Bootstrap Buttons User Stories

## Authenication

- **Sign Up:** As a new user, I want to sign up so I can be an authenticated user and user the application. (CREATE)
  - User loads application.
  - User clicks `sign up`.
  - Application displays sign up form.
  - User enters `email`, `password`, and `confirm-password`.
  - Application checks that form input is valid.
  - Applicaiton authenticates user.
  - Application displays start screen.


- **Sign In:** As an unauthenticated user, I want to sign in so I can access my account. (READ)
  - User loads application
  - User clicks `sign in`.
  - Application displays sign in form.
  - User enters `email` and `password`.
  - Application checks that form input is valid.
  - Applicaiton authenticates user.
  - Application displays start screen.


- **Change Password:** As an authenticated user, I want to change my password so my account is secure. (UPDATE)
  - User clicks on `change password`.
  - Applicaiton displays change password form.
  - User enters `current-password`, `new-password`, and `confirm-password`.
  - Application checks that form input is valid.
  - Application saves new password to database.
  - Application displays confirmation message: `Your password has been changed`


- **Sign Out:** As an authenticated user, I want to sign out so my account is secure when I am not using the application (DESTROY)
  - User clicks on `sign out`.
  - Application sends request to server
  - Application receives response
  - Application removes current user from `store`
  - Application clears working theme and content view.
  - Application return to public (non-authenticated) view


## Theme Editing

- **Create New Theme:** As an authenticated user, I want to begin a new theme so that I can customize it. (CREATE)
  - User clicks `new theme`
  - User specifies name for new theme and clicks `create`
  - Application loads values of Bootstrap theme from the database
  - Applicaion saves new theme with default values


- **Load Theme:** As an authenticated user, I want to load in a saved theme so I can further customize it. (READ)
  - User views list of saved themes
  - User clicks `load` button next to one of their saved themes
  - Application loads values of saved theme from the database
  - Application updates SCSS variables with new values and re-compiles CSS from SASS.
  - Application updates display with new compiled styles.


- **Update Theme Variables:** As an authenticated user, I want to edit and save the values of theme variables so that I use it later. (UPDATE)
  - User changes the value of one of the theme variables in the current theme and presses `enter` or generates `blur` event on variable field.
  - Application updates SCSS variable with new value and re-compiles CSS from SASS.
  - Applicaiton saves the new value of the variable to the database.


- **Delete Theme:** As an authenticated user, I want to delete a custom theme because it no longer will be used. (DESTROY)
  - User views list of saved themes
  - User clicks `delete` button next to one of their saved themes
  - Application displays a modal, prompting user `are you sure?`
  - User clicks `confirm`
  - Application deletes selected theme from database and refreshes view


- **Export Theme:** As a user who has completed a custom theme, I want to export a custom variables SCSS file so that I can use it in my application.
  - User clicks `export` in the current theme view
  - Application generates a SCSS `variables` file
  - Application displays the `variables` file so the user can save it to their project
