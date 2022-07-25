# aemetriks_test

Hi, it's the simple documentation for this task and some notices about it.
I hadn't enough time to learn how to work with react-bootstrap, so I decided to use simple BEM and Sass.
Usually for my projects I use styled-components, because it is fully compatible with modern browsers (automatically adds prefixes for css3 properties) and easy works with Typescript.
And I have a special point about UI libraries, typically it's a little long to override styles. And if the project use it before my coming - I'll use it! But if it's the project from the scratch - I'll prefer native solutions

About backend:
I've decided to wrap the backend in a docker container, because I don't have installed PHP, MySQL directly on my PC. It will take few hours to configure it with symfony (enable all needed extensions, install composer, solve version conflicts)

### Improvements:
- implement search functionality via merged array of all data
- implement loader when data is loading
- implement error handling when data is not loaded

# Documentation
## How to run:

Clone the repo from GitHub:
```git clone git@github.com:Vovker/aemetriks_test.git```

### Backend

Go to the backend folder:
```cd aemetriks_test\backend```

Run docker container:
```docker-compose build && docker-compose up -d```

Success! Backend should be available on 8080 port.

But we have an empty database, so we need to fill it with some data.
I've mocked some data, so you can run the following command to run migration:
Deep into the docker container:
```docker exec -it php /bin/bash```
```php bin/console doctrine:migrations:migrate```

Now you can access to the backend:
GET ```http://localhost:8080/cart```

Response Example
```json
{
  "status":"200",
  "data":[
    {"id":1,"value":"test 1"},
    {"id":2,"value":"test 2"},
    {"id":3,"value":"test 3"},
    {"id":4,"value":"test 4"},
    {"id":5,"value":"test 5"},
    {"id":6,"value":"test 6"},
    {"id":7,"value":"test 7"},
    {"id":8,"value":"test 8"},
    {"id":9,"value":"test 9"},
    {"id":10,"value":"test 10"},
    {"id":11,"value":"test 11"}
  ]
}
```
### Frontend

Go to the frontend folder:
```cd aemetriks_test\frontend```

Run npm script to start the project:
```npm run start```

Frontend should be available on default 3000 port.

