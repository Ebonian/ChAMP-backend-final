# Career Track: Final Project for Backend

## Getting Started

Run the following command:

### Required tools

1. [NodeJS](https://nodejs.org/en)
2. [PNpM](https://pnpm.io/)
3. [Docker](https://www.docker.com/)

### Run on the local machine

```sh
# clone the project to local machine with new folder name
git clone https://github.com/Ebonian/ChAMP-backend-final.git Poon-ChAMP-Backend

# cd into the project folder
cd Poon-ChAMP-Backend

# install dependencies
pnpm i
```

### Development

```sh
# run local development server
pnpm dev
```

### Build and Serve

```sh
# build the project to ./dist
pnpm build

# run the project with nodejs
pnpm start
```

## Introduction

In this assignment, you will be responsible for creating a CRUD application. This application is a Todo application. Because of limited time, this application only has one Kanban board with many lists and tasks.

## Business Requirements

Your objective is to write a simple API for the application. Since the assignment is time constrained, it would be impossible to fully implement the project. Please implement at most the functionalities mentioned in the next section. If you think we expect too much, please let us know what you have omitted and try to explain your reasoning.

There are several data models in the application. Each contains a number of attributes including, but not limited to:

### Task

-   Description (optional)
-   Due date (optional)
-   Order

### List

-   Title
-   Order

A list can contain many tasks, and a task must belong to only one list.

The API should support the following operations:

-   Create a task
-   Update a task
-   Delete a task
-   Create a list
-   Update a list
-   Move a task to another list
-   Reorder a task in a list
-   Reorder a list
-   Delete a list, also every tasks in it

You can decide what inputs and outputs for the API.

## Technical Requirements

You may use any technology stack for implementation, including programming language, tools, libraries and frameworks. You should also provide API documentation such as swagger and GraphQL Playground, depending on the technology stack you choose.

Be aware that we will mainly take into consideration the following evaluation criteria:

-   How clean and organized your code is;
-   If you implemented the business requirements correctly;
-   (Optional) How good your automated tests are (qualitative over quantitative).

## Deliverables

You can submit this assignment by providing a link to any repository of your work from any Git provider, e.g. GitHub, GitLab. The repository should include:

-   Your code
-   README.md that instructs how to set up and run the project locally. You should also include external tools that are required to be installed, e.g. Node.
