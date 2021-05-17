# breakable-toy

Project Name: The Ella Athletic App

# The Ella Athletic App

## Description

Description: The Ella Athletic App is a workout generator. Here, users can generate, save, and review workouts as well as calculate their daily energy requirements.

Created by:

- Nicole Smith

Visit: https://theellaathleticapp.herokuapp.com

## Setup

Clone the repository from GitHub:

```
git clone https://github.com/nicolesmith31/breakable-toy-final.git
```

Change to directory and install dependencies:

```
cd the_ella_app_final
bundle install
yarn install
```

Create and set up database:

```
bundle exec rake db:create
bundle exec rake db:migrate
bundle exec rake db:seed
```

In your terminal start your server:

`bundle exec rails s`

Finally, navigate to http://localhost:3000 in your browser.

## TODO

- [] User can generate and save their own workouts.

- [] Separate workout page for each workout.

- [] User can generate daily energy requirements.

- [] API exercise library integration.

- [] Ability for user to review workouts.

### Contribution Guidelines

If you find issues or bugs with this application, please add an issue on GitHub. If you would like to add a feature, please create a pull request and it will be reviewed accordingly.
