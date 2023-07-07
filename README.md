[![Board Status](https://dev.azure.com/sirpawle/0ec5b5e2-eaf7-4a44-b1a9-29c335dc116b/8de949d3-a443-4cfb-bedd-95d73202a272/_apis/work/boardbadge/a06fe4a5-16d4-4234-b2bb-0d769b371698)](https://dev.azure.com/sirpawle/0ec5b5e2-eaf7-4a44-b1a9-29c335dc116b/_boards/board/t/8de949d3-a443-4cfb-bedd-95d73202a272/Microsoft.RequirementCategory)
# Chuck Norris Funny Facts

- This is a fulllstack roject built on with GraphQlAPI, apollo, NodeJs and React.

## Description

The app fetches data from a REST api from https://api.chucknorris.io/, using a GraphQL API and Apollo Server.
The app then renders all the categories that are available on the frontend which is build using React and Apollo Client. On each category you get to view a single random funny fact on clicking the button.

### Prerequisites:

To run this project locally you need to have this installed on your machine: - VS Code(or any other code editor) - nodejs latest version - update npm pacakges - Modern Web browser but preferably Chrome - Git Bash

### Libraries and frameworks

    The stack of technologies used for this project include:
    - GraphQL
    - Apollo Server
    - Apollo Client
    - React

### Starting Project:

      Clone the repo into your local machine using in your CLI/Bash
        - git clone https://github.com/PawleN-D/chuck-facts.git
      After downloading the repo, gain access and install dependancies to it using:
        - cd chuck-facts && npm install
      There are two top level directories: server & client. Access each respectively and install dependancies (use different terminals):
        - cd server && npm install
        - cd client && npm install
      After installation of dependancies in both repos, change directory to the main directory:
        - cd ..
      Run this command and the app will start
        - npm run dev

## Author:

- **Paul N Seremu** - [PawleN-D](https://github.com/PawleN-D)
