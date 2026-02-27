# Mech Designer

[My Notes](notes.md)

A webpage that allows users to create an account and then create datasheets for mechs/robots with interchangable parts that they can save and share their creations as well as browse through creations by other users.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

I like many others have been a big fan of large robots and mechs and the ability to customize them. Whether someone is a fan of pacific rim, armored core, or any other robot/mech form of media they have probably imagned creating one of their own. This allows them to crete an idea for it parts that they can select and apply to a body that will give them stats such as speed, firepower, and armor. With these datasheets these people can go on and then use these designs they made in their own way whether create a 3d model or create a drawing to match it.

### Design

![Design image](LoginPage.png)
![Design Image](MechDesignPage.png)
![Design Image](BrowsingPage.png)


```mermaid
sequenceDiagram
    actor User
    actor Server
    actor Database
    
    User->>Server: Create account / Login
    Server->>Database: Verify credentials
    Database-->>Server: Authentication result
    Server-->>User: Access granted
    
    User->>Server: Select mech parts (body, weapons, armor)
    Server->>Database: Fetch available parts & stats
    Database-->>Server: Return parts library
    Server-->>User: Display part options
    
    User->>Server: Save mech design
    Server->>Database: Store mech datasheet
    Database-->>Server: Confirm saved
    Server-->>User: Design saved successfully
    
    User->>Server: Browse other users' mechs
    Server->>Database: Query shared designs
    Database-->>Server: Return mech gallery
    Server-->>User: Display community creations
```

### Key features

- Users are able to create an account and then able to login later to save data
- Secure Login and authentication
- Users are given a template to create a datasheet for a mech/robot with customisable parts that affect certain characteristics/statistics of the model
- Multiple options for each part selection piece
- Users are able to share their creation with others and then are able to browse what others have created 

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - This will be utilized to build out the framework for the actual website
- **CSS** - This will be utilized to create the styling and actual format for the website as well as the styling of the input sheet
- **React** - The code for user interaction with the webpages such as login and entering other information for mechs
- **Service** - Service with endpoints for retreiving options, submitting information to DB, and login and authentication services
- **DB/Login** - User data and other information will be stored in a database as well as user login and information to store their designs
- **WebSocket** - Websocket will be shared so that other users can view the mockups and creations of other users

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://createmechsheets.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - Created three HTML pages for the pages needed for my startup
- [X] **Proper HTML element usage** - I implemented multiple HTML elements and utilized both headers and bodies as well as footers
- [X] **Links** - I have links allowing travel between all the pages
- [x] **Text** - Text relating to application put on pages
- [x] **3rd party API placeholder** - I will be using a 3rd party database API
- [X] **Images** - Created basic layout for mech, no images will be used in final product 
- [X] **Login placeholder** - I have a sample login page that allows users to login eventually
- [X] **DB data placeholder** - I have the places where data will be pulled form the database
- [X] **WebSocket placeholder** - I Websocket will be used to pull from the database for the browsing page

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Visually appealing colors and layout. No overflowing elements.** - Added matching colors and tried to achieve a coherent look
- [X] **Use of a CSS framework** - Utilized bootstrap CSS
- [X] **All visual elements styled using CSS** - All elements of page have been updatd to be properly styled
- [X] **Responsive to window resizing using flexbox and/or grid display** - Is able to resize its self to match smaller windows
- [X] **Use of a imported font** - Imported the 'Orbitron' font to match theme of project
- [X] **Use of different types of selectors including element, class, ID, and pseudo selectors** - Utilized differnt selectors

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Bundled using Vite** - Download and bundled utilizing vite
- [X] **Components** - Files were changed into .jsx files and put into src folders for each component
- [X] **Router** - Set up utilizing React Router

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **All functionality implemented or mocked out** - Added the functionality to have it "working" everything does as intended just waiting for webhook and other parts
- [X] **Hooks** - useState implemented for the following:
    - isLogin: boolean value to track login state
    - username: store username input
    - password: store password input
    - confirmPassword: sotre confirm password input
    - error: display validation error message
    - currentUser: store current user information
    - selectedParts: store selected parts for mech
    - mechName: store mech name input
    - selectedMech: track which details to show 
    - savedMechs: store mechs in localStorage
useEffect implemented for the following:
    - check if user is already logged in 
    - load saved mechs from localStorage

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
