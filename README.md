# **ASSESSMENT BACKEND**

## **Table of contents**

- [A brief introduction](#a-brief-introduction)

- [**TASK #1**](#task-1)
  - [What is this project?](#what-is-this-project)
  - [Usability](#usability)
    - [Tools used](#tools-used)
    - [Basic Commands](#basic-commands)
    - [Endpoints](#endpoints)
    - [Endpoint notes](#endpoint-notes)
  - [Personal review of the project](#personal-review-of-the-project)
    <br /><br />
- [**TASK #2**](#task-2)
  - [Question #1](#question-1)
  - [Question #2](#question-2)
  - [Question #3](#question-3)
    <br />
- [Author](#author)
  <br /> <br />

## **_...A brief introduction_**

&nbsp;&nbsp;&nbsp;&nbsp;This project is nothing but a mission designed in order to assess the student's (Me) knowledge adquired during the program. the technologies covered by this assessment are:

    - NodeJs
    - ExpressJs
    - CORS
    - Prisma
    - Render
    - JSON Web Token
    - & more

&nbsp;&nbsp;&nbsp;&nbsp;Secondly, the specific tasks present in the assessement are the following:

- **1. Project =>** A restful API that includes the following requirements:

  - Each user will have a unique id, and he will authenticate using a non-empty email and a password.
  - Each user will be able to save a list of favs. Each fav will have an title , description and link, and each list will be defined by a unique id and a name.
  - The system have to allow the following actions
    - Create a new list with a given name (auto-generate the unique id)
    - Get the users lists
    - Get an individual list for the user
    - Add items to a given list (based on the generated id)
    - All endpoints have to be secured with Bearer Auth (JWT)
    - Ensure that the password is strong enough
<br /><br />



- **2. Questions:** the student will answer a series of questions regarding the various subjects studied up until the moment.

<br /> <br />

# **TASK #1**

## **What is this project?**

&nbsp;&nbsp;&nbsp;&nbsp;This is a small restful API Withe the following prompt:
  - Favs is a new company that aims to provide a better way to organize your favorite things: music, clothes, courses, etc., all in one place.

  - The CEO of Favs hired you to develop the initial version of his product. It’s worth mentioning that she does not have any technical background. However, she has a clear vision on how the product should behave, so she provided a list of functional requirements.
<br /> <br />

## **Usability**

### **Tools used**

    - NodeJs
    - ExpressJs
    - CORS
    - Prisma
    - Render
    - JSON Web Token
    - & more
 <br />

### **Basic Commands**

      npm run dev
      npx prisma studio
      npm run prisma:seed
 <br />

### **Endpoints**

| Route                 | HTTP Verb | Route Middleware | Description                          |
|-----------------------|-----------|------------------|--------------------------------------|
| /api/healthcheck      | GET       |                  | Get the server status                |
| /api/favs             | GET       | isAuthenticated | Get all list of favorites            |
| /api/favs             | POST      | isAuthenticated | Creates a new list of favorites      |
| /api/favs/:id         | GET       | isAuthenticated | Get a single list of favorites       |
| /api/favs/:id         | DELETE    | isAuthenticated | Deletes a list of favorites          |
| /api/users            | GET       | isAuthenticated | Get a list of all users              |
| /api/users/:id        | GET       | isAuthenticated | Get the info of a certain user       |
| /auth/local/signup    | POST      |                  | Creates a new user by email/password |
| /auth/local/login     | POST      |                  | Login user by email/password         |

### **Endpoint notes**
&nbsp;&nbsp;&nbsp;&nbsp;For certain petitions it is necessary to add headers including the current user Token created on login and/or a body containing specific information. They are the following:

- **Header:** The token provided on user login.
- **Body:** 
  - login / signup: 
        {
          "email": "new_user@gmail.com",
          "password": "Cask1992"
        }
  - Create new list: 
        {
            "listName": "newList"
        }


## **Personal review of the project**

&nbsp;&nbsp;&nbsp;&nbsp;Back is not my forte and part of the reason it is not is related to my lack of interest in unresponsive design. I prefer design and ux over stability and functionality. However, knowing how everything works have helped me understand how to improve information management and other useful skills I plan to use in the future.
 <br /> <br />

# **TASK #2**

## _Question #1:_

### **_Indicate which are the parts of the following url: https://backend.mega-app.com.co:8080/api/articles/search?docid=1020&hl=en#dayone_**

      > Protocol=>              https
      > Subdomain=>             backend
      > Domain=>                mega-app.com.co
      > Port=>                  8080
      > Path=>                  /api/articles/search
      > Query Parameters=>      docid=1020&hl=en
      > Fragment Identifier=>   dayone

 <br />

## _Question #2:_

### **_Define what is a Web API, Restful and what are the statusCode 200-, 400-, 500-_**


#### **Web API:**
&nbsp;&nbsp;&nbsp;&nbsp; A Web API (Application Programming Interface) is a software interface that allows two applications to communicate with each other over the internet.

#### **Restful:**
&nbsp;&nbsp;&nbsp;&nbsp; REST (Representational State Transfer) is a set of architectural principles for creating web services that use HTTP protocol. RESTful web services are built to work with the HTTP protocol's request methods (GET, POST, PUT, DELETE).

#### **Status Codes:**
&nbsp;&nbsp;&nbsp;&nbsp; HTTP status codes are three-digit codes that indicate the status of a web request. The first digit of the status code specifies the class of response, and the last two digits do not have any classifying or categorization role. Here are some commonly used status codes:

 - **200 OK:** The request has been successful, and the response  contains the requested data.
- **400 Bad Request:** The server could not understand the request due to invalid syntax or bad request.
- **500 Internal Server Error:** The server encountered an unexpected condition and could not fulfill the request.

## _Question #3:_

### **_ When we talk about CRUD, what does it mean?_**
&nbsp;&nbsp;&nbsp;&nbsp;CRUD stands for Create, Read, Update, and Delete. It is a set of four basic operations that are commonly used in relational database management systems (RDBMS) and web development.

- **Create:** Refers to adding a new record or object to a database or system.

- **Read:** Refers to retrieving or fetching data from a database or system.

- **Update:** Refers to modifying or updating an existing record or object in a database or system.

- **Delete:** Refers to removing or deleting a record or object from a database or system. 

  <br /> <br />

 <br />

# **Author: _Andrés Vélez, a random blue guy..._**
