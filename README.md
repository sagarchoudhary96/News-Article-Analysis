# News-Article-Analysis
 A tool to allows users to run Natural Language Processing (NLP) on articles/blogs found on other websites using [Aylien text API](https://aylien.com/text-api/). User can input text or URL to the article to be analysed.

## Requirements

* [NodeJs](https://nodejs.org/)
* [npm](https://www.npmjs.com/)/[yarn](https://yarnpkg.com/en/)

## How to Run

1. [Clone](https://github.com/sagarchoudhary96/News-Article-Analysis.git) or [Download](https://github.com/sagarchoudhary96/News-Article-Analysis/archive/master.zip) the Repository.

2. Get Aylien API credentials from [here](http://developer.aylien.com/signup).

3. Replace `YOUR_APP_ID` and `YOUR_APP_KEY` in `app/utils/api.js` file from your generated credentials.

4. Install dependencies using `npm install` or `yarn install`.
5. Build project using `npm build` or `yarn build`.
6. Run your project using `npm start` or `yarn start`.
7. Project can be viewed at `localhost:3000`.

## Running Devserver

* DevServer can be run directly using `npm start:dev` or `yarn start:dev` 