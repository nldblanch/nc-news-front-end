# Northcoders News API

## View this project online
You can view the hosted website [here](https://nathans-nc-news.netlify.app)! It's hosted for free, so please be patient if it takes slightly longer to load.


## Description
Northcoders News is a Reddit clone created in JavaScript. It's made using React and receives data from an api that I built. That can be viewed on [GitHub](https://github.com/nldblanch/NC-News) with full instructions on setting it up on your own machine.

## Getting Started

These instructions will get you a version of your own news site running. 

### Prerequisites

You will need Node.js v21.7.3 (or later) installed on your computer. 

### Cloning the repo

In your terminal, run the following command:
```
git clone https://github.com/nldblanch/nc-news-front-end.git
```

This will copy the repo and its contents to the directory you run the command from.

### Dependencies

The site relies on axios, lottie, react, and react router. There are several extra developer dependencies for testing.

### Installing

They can be easily installed by running this command in your terminal:
```
npm install
```
You should now see a new directory in your local repository called node_modules. 

### Executing program

There is only one script you should need to test the site:

```
npm run dev
```
_Click on the web link that appears in your terminal. It will look something like http://localhost:5173/._

---

## Deploying your own website

There are many ways to host a website, but I used Netlify. Create yourself an account and connect your GitHub profile.

Once you have done that, navigate to the Sites tab and click Add new site. Import an existing project - your GitHub project you just created! Everything will be setup already - most importantly though, check the branch is 'main' and the build command is ```npm run build```. 

Deploy your project and wait for it to finish building. That's it! You're done. You have your own site, and you can redeploy it any time you make changes. Alternatively, you can modify the settings of your Netlify site to deploy every time you push changes to your GitHub Main branch. If you do, make sure you make use of branching in Git to avoid pushing anything that could break your live site!

## Netlify Identity

You may wish to setup your own user login system - the current database only has 6 users and posting articles or comments requires the user to exist already. I have not setup any way to add new users, but have used existing ones instead. 

I used netlifyIdentity to authorise users - if you wish to sign up as one of the users so that you can post articles and comments, click the button in the top right corner that says ```Login with Netlify Identity```. You can choose these usernames from the database:
- jessjelly
- weegembump
- cooljmessy
- happyamy2016
- grumpy19
- tickle122

_This is case sensitive so be sure to match the username character for character._

Verify your email address and you will be able to comment on articles and post your own! You can manage users from the Netlify integration.

The post articles feature takes an image url because I have not set up file attachments yet. Unsplash is a great place to get free image urls!

## Acknowledgements

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/).