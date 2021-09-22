# 365 Frases

## Description

This application generate phrases and register new too, and share images with phrases and thoughts in social media.

## Frontend Mobile

The user can:
- Generate phrases already registered;
- Register you own phrases and thoughts;
- Shares images with this phrases in the social media;

![Screen Mobile 1](./frontend/src/img/assetsReadme/imgApre00.png)
![Screen Mobile 2](./frontend/src/img/assetsReadme/imgApre01.jpeg)
![Screen Mobile 3](./frontend/src/img/assetsReadme/imgApre02.jpeg)
![Screen Mobile 4](./frontend/src/img/assetsReadme/imgApre03.jpeg)
![Screen Mobile 5](./frontend/src/img/assetsReadme/imgApre04.jpeg)

## Getting Start

* Download the repository
* Create a cluster in mongodb
* npm i or yarn i in all three folders (backend, mobile)
* Inside backend/src create a file index.js like the exemple:
``` 
    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors')
    const routes = require('./routes');

    const app = express();

    mongoose.connect('mongodb+srv://<YOUR_USER>:<YOUR_PASSWORD>@cluster0.zoxkg.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    app.use(cors());
    app.use(express.json());
    app.use(routes);

    app.listen(3333, () => {console.log('Executando...')}); 
    
```

* Start the two aplications (npm start or yarn start, expo start)
    * backend run: http://localhost:3333
    * mobile run: Where you choose run expo

## Link to app on Play Store
*soon*

## Learn More

To learn more about the techs, see:
* [React JS](https://reactjs.org/)
* [React Native](https://reactnavigation.org/docs/getting-started)

## Techs

* React JS
* React Native
* Node JS
* Expo