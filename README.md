# License

The project gofurl is licensed under the New BSD License. See LICENSE.BSD for details.

# Getting started
1. Install Node.js (with NPM and git)
2. Clone/Fork Clone repository
3. run "npm install"
4. run "npm start" ui-app runs now and listens to port 3000 (http://localhost:3000/)

# Up and running in Heroku

## Prerequisites

* Heroku account
* git installed
* Node.js and npm installed

## Install Heroku toolbelt

* Install Heroku toolbelt from [Heroku toolbelt](https://toolbelt.heroku.com/).
* Login to heroku:
```
heroku login
```

## Clone the app

```
git clone https://github.com/gofore/gofurl-ui.git
cd gofurl-ui
```

## Deploy the app
```
heroku create [my_app]
git push heroku master
heroku open
```

## Modify the app

Make some changes.

```
git add .
git commit -m 'some message'
git push heroku master
heroku open
```

## History, releases, rollback

Check logs, if somethings wrong, check release version and rollback. Note: Heroku rollback does not influence external database (mongolab etc.)

```
heroku logs
heroku releases
heroku rollback v4
```

## Multiple apps and promote pipeline

Create another app (production app).
```
heroku apps
heroku create [my_production_app]
```

Enable pipelines plugin.
```
heroku labs:enable pipelines
heroku plugins:install git://github.com/heroku/heroku-pipeline.git
```

Add pipeline and promote.
```
heroku pipeline:add my_production_app
heroku pipeline:promote
heroku open my_production_app
``` 

