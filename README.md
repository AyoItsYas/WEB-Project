# WEB-Project 
[![.github/workflows/deploy.yml](https://github.com/AyoItsYas/WEB-Project/actions/workflows/deploy.yml/badge.svg)](https://github.com/AyoItsYas/WEB-Project/actions/workflows/deploy.yml)

## Setting Up

There are several ways to deploy the project the easiest being through the use of docker.

```sh
git clone https://github.com/AyoItsYas/WEB-Project.git
cd WEB-Project
docker compose up --build
```

The backend can be deployed seperately using XAMP, WAMP or any web server combintation capable of serving php. 
The database needs to be run seperately or through the admin pages and the credentials should be tweaked in the
`./backend/src/_lib/database.php` file.

The frontend can be deployed seperately by exporting the Next.js project as a `static` build by running the following 
set of commands. The build content should then be coppied into the web servers public folder. 

```
cd frontend

yarn
yarn build
yarn export

cp /out/* /www/html/
```
