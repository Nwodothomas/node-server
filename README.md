# HOW TO BUILD A SIMPLE SERVER WITH NODE.JS

## Resources:
- [Node JS getting started](https://nodejs.org/en/docs/guides/getting-started-guide)
- [Process API doc](https://node.readthedocs.io/en/latest/api/process/)
- [Child process](https://nodejs.org/api/child_process.html)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha documentation](https://mochajs.org)
- [Nodemon documentation](https://github.com/remy/nodemon#nodemon)


## Requirements

- **Allowed editors:** You can use one of the following editors: `vi`, `vim`, `emacs`, or `Visual Studio Code`.
- **Environment:** All your files will be interpreted/compiled on Ubuntu 18.04 LTS using Node.js (version 12.x.x).
- **Newline Ending:** Ensure that all your files end with a newline character.
- **README.md:** A `README.md` file, located at the root of the project folder, is mandatory. It should provide essential information about your project.
- **File Extension:** Use the `.js` file extension for your code files.
- **Testing:** Your code will be tested using Jest, and you should provide a command `npm run test` to run the tests.
- **Linting:** Your code will be verified against linting rules using ESLint.
- **Full Test:** You can verify the entire project by running `npm run full-test`, which should include both tests and linting checks.
- **Export Format:** All of your functions/classes must be exported using the following format: `module.exports = myFunction;`


### Provided files
### database.csv
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS          

**package.json**

```json
{
  "name": "node_js_basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "test": "./node_modules/mocha/bin/mocha --require babel-register --exit",
    "dev": "nodemon --exec babel-node --presets babel-preset-env ./server.js ./database.csv"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "chai-http": "^4.3.0",
    "express": "^4.17.1"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "nodemon": "^2.0.2",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "chai": "^4.2.0",
    "mocha": "^6.2.2",
    "request": "^2.88.0",
    "sinon": "^7.5.0"
  }
}


<details>
  <summary><b>babel.config.js</b> (click to expand)</summary>
  <pre><code>
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
  </code></pre>
</details>



.eslintrc.js

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};

### and…
Don’t forget to run $ npm install when you have the package.json  

To install dependencies, run the following command:
    
    $ npm install



