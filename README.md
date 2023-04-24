# **ASSESSMENT BACKEND**

## **Table of contents**

- [A brief introduction](#a-brief-introduction)

- [**TASK #1**](#task-1)
  - [What is this project?](#what-is-this-project)
  - [Usability](#usability)
    - [Tools used](#tools-used)
    - [Basic Commands](#basic-commands)
  - [Screenshots](#screenshots)
  - [Personal review of the project](#personal-review-of-the-project)
    <br /><br />
- [**TASK #2**](#task-2)
  - [Question #1](#question-1)
  - [Question #2](#question-2)
  - [Question #3](#question-3)
  - [Question #4](#question-4)
  - [Question #5](#question-5)
  - [Question #6](#question-6)
  - [Question #7](#question-7)
  - [Question #8](#question-8)
    <br />
- [Author](#author)
  <br /> <br />

## **_...A brief introduction_**

&nbsp;&nbsp;&nbsp;&nbsp;This project is nothing but a mission designed in order to assess the student's (Me) knowledge adquired during the program. the technologies covered by this assessment are:

    - Scrum
    - Git
    - HTML
    - CSS
    - JavaScript
    - React

&nbsp;&nbsp;&nbsp;&nbsp;Secondly, the specific tasks present in the assessement are the following:

- **1. Project =>** a Small web application consisting of 3 pages: Home, Product Detail and About.

  - **1.1 Home:** this page will list a series of products from FakeStoreApi. All products should have their own timer and only redirect to "_details/:id_" if the timer has not reached 0 yet.

  - **1.2 Home:** it should display a certain product's information on screen.

  - **1.3 About** should display the student's personal information, list 3 things learned during the program, Email and github links.

- **2. Questions:** the student will answer a series of questions regarding the various subjects studied up until the moment.

<br /> <br />

# **TASK #1**

## **What is this project?**

&nbsp;&nbsp;&nbsp;&nbsp;This is a small web application focused mostly on design, a personal decision, as I wanted to explore a bit more of CSS effects and design integration. It may not be perfect, but I'm happy with the current result. Functionally speaking, it is nothing but a small store with a timer that restricts user input and access to the information.
<br /> <br />

## **Usability**

### **Tools used**

    - HTML
    - CSS
    - React
    - Redux
    - Redux Toolkit

 <br />

### **Basic Commands**

      npm install
      npm start

## **Screenshots**
|<img src="https://raw.githubusercontent.com/RandomBlueGuy/Assesment-Frontend-/main/src/assets/Captura%20de%20pantalla%202023-03-22%20142358.png" width=40% height=40%>||<img src="https://raw.githubusercontent.com/RandomBlueGuy/Assesment-Frontend-/main/src/assets/Captura%20de%20pantalla%202023-03-22%20142421.png" width=40% height=40%>|<img src="https://raw.githubusercontent.com/RandomBlueGuy/Assesment-Frontend-/main/src/assets/Captura%20de%20pantalla%202023-03-22%20142446.png" width=40% height=40%>|

## **Personal review of the project**

&nbsp;&nbsp;&nbsp;&nbsp;I still lack some technical knowledge and skill when it comes to implement Redux. I could have exploited this more and properly for this project in particular. Some of the issues existent in the program are:

- **In general** Now I have a better idea of what I should and should not do during the initial states of a project. I believe that defining the problem, making a plan and deciding acordingly is better and helps a lot. An example of this is how I took my time to design and recreate interfaces using CSS styles. I made some sketches and stablished some bases and then started to work. The result, a process less stressful than I anticipated. But on the other hand, the logic, JavaScript, React - Toolkit side of the project was an attempt to solve an issue that was not that difficult to resolve once I thought about it later with a cooler head. I have realized now how anxiety gets the better of me and does not allow me to realize my full potential. This project would've been at least twice as good than it is right now if it weren't because of that
<br /><br />
- A specific thing I could not do in time was including a timer inside Product Details that redirects the user to the main page. That could've been easily accomplished through a better use of redux. The way it's implemented right now only works inside every card component instead of managing it globally through redux.
<br /><br />  
- I wanted to take into consideration the possibility of failure. smething that could0ve been done through a few conditionals and the sort, but time is scarce right now and I could not make it right now. To compensate for this I will add this functionality to the group project which is my main focus ATM.
<br /><br />
- Design wise I need to improve when it comes to UX. I don't know if the user will instintively press the 'i' button on the bottom left corner to get into the about me section.
  <br /><br />
- Redux has been incredibly difficult for me to manage. I have received and looked for help online and from MIR, however it seems it is pretty difficult for me to accomplish even the easiest of tasks through redux toolkit. I will keep working on that. 
  <br /><br />
- An insane ammount of things I wanted to add, but couldn't...

Right now I will leave the project as it is due to the fact that it includes all the design requirements and I am more interested in working in the group project. Hopefully I will get back to this later in order to implement everything properly, but for now, these are some of my thoughts for this assesment and my current skill level.

Thanks for reading this. I promise I will get better at this as time progresses...

# **TASK #2**

## _Question #1:_

### **_What are the most important ceremonies of a Sprint and what is the idea behind each one?_**

      > Sprint planning => At the beginning of a spring the team holds a meeting regarding the work that needs to be done and the person responsible for it during the upcoming sprint

      > Daily meeting => A meeting designed to talk about the current state of affairs. what is going to be worked on today and any difficulties presented the day before

      > Sprint review => At the end of the sprint the team shows and reviews the work to get some feedback and possible changes from the client

 <br />

## _Question #2:_

### **_What are Wireframes? Name at least one tool we can use._**

&nbsp;&nbsp;&nbsp;&nbsp;A wireframe is similar to an sketch or a blueprint of a web app. It should allow anyone to understand how the page will work and interact with the user before writing a single line of code. It is also a visual representation used to showcase the client how the application will be.

&nbsp;&nbsp;&nbsp;&nbsp;There are multiple tools designed to create wireframes like Sketch, but in my case I tend to design low fidelity wireframes on a board or a piece of paper detailing how the application may look.

&nbsp;&nbsp;&nbsp;&nbsp;Here is an example of a low fidelity wireframe I created for this assessment:

<img src="https://raw.githubusercontent.com/RandomBlueGuy/Assesment-Frontend-/main/src/assets/7da579ad-1a16-44cb-9f1c-6c52fc392a81.jpg" width=40% height=40%>

<br /> <br />

## _Question #3:_

### **_Explain the difference between var, let, and const. Give an example of a scenario where each one would be used._**

var, let, and const are all different types of variables in JavaScript, but they have different scopes and behaviors.

- var: among all the variables showcased here, this is the one with a higher scope (more global). it is commonly deprecated due to it's behavior.

- let: with a lower scope than var, usually for a small function or block of code they can be updated constantly.

- const: also a low scoped variable, const differenciates itself from let in the fact that they "cannot be udpdated" after a value has been assigned to them
  <br /> <br />

## _Question #4:_

### **_What are the three commands that can be used to create a new branch named branch-1?_**

    > git branch branch-1:
    > git checkout -b branch-1
    > git switch -c branch-1

 <br />

## _Question #5:_

### **_Explain the difference between git merge and git rebase._**

&nbsp;&nbsp;&nbsp;&nbsp;even thought they are ways of integrating changes from one branch into another there is a big difference: **_git merge_** creates a new commit combinng the changes of both branches, while **_git rebase_** rewrites the history of the branch and removes unwanted entries.

 <br />

## _Question #6:_

### **_What is the difference between a Pull Request (PR) and the git pull command?_**

&nbsp;&nbsp;&nbsp;&nbsp; **_Pull Request_** is more of a petition to propose changes to a repository for review before merging both branges. On the other hand **_git pull_** is used to fetch and merge the changes from the main branch into the current local branch

 <br />

## _Question #7:_

### **_What is the Virtual DOM?_**

&nbsp;&nbsp;&nbsp;&nbsp;It's a programming concept for the development of web frameworks. The clearest example of this is React that provides a small virtual DOM to manage updates and render information updating the DOM with every change made to the product. Think about it as a visualization of the end product on real time.

 <br />

## _Question #8:_

### **_Given the following codePen, which only has an HTML file, use CSS to achieve the result shown in this image. (To display the services, use CSS Flexbox or CSS Grid)._**

 <br />
The CSS code:
<br /><br />

# **Author: _Andrés Vélez, a random blue guy..._**
