# Post & Comment NodeJS API

## Environment Setups

Please run:

### `git clone https://github.com/HuzaifahAzman/tribe-hired-backend-test.git`

Clone the repository into your local

### `npm install`

Install all the dependencies for the project

### `npx nodemon index.js`

Runs the APIs to call your data.\
Open [http://localhost:3000](http://localhost:3000) to call your API in the browser.\

## API calls

[http://localhost:3000](http://localhost:3000)
- API health check.\
- `API ok` will be displayed if your API is running properly 

[http://localhost:3000/topPosts](http://localhost:3000/topPosts)
- Fetch a list of Top Posts ordered by their number of Comments in JSON form

[http://localhost:3000/comments](http://localhost:3000/comments)
- Fetch a list of comments.\
- You can try to send a URL params of `name`, `email`, `body` to filter based on those fields

[http://localhost:3000/comments?email=@garfield.biz](http://localhost:3000/comments?email=@garfield.biz)
- Fetch a list of filtered comments with emails containing `@garfield.biz`

[http://localhost:3000/comments?email=.biz&name=id&body=dolor](http://localhost:3000/comments?email=.biz&name=id&body=dolor)
- Fetch a list of filtered comments with emails containing `.biz`, name containing `name` & body containing `dolor`


> Note: You can use Postman instead.

## Screenshots
#### - `http://localhost:3000`
![health-check-browser](/public/screenshots/health-check-browser.png)
![health-check-postman](/public/screenshots/health-check-postman.png)

#### - `http://localhost:3000/topPosts`
![top-posts-browser](/public/screenshots/top-posts-browser.png)
![top-posts-postman](/public/screenshots/top-posts-postman.png)

#### - `http://localhost:3000/comments`
![comments-browser](/public/screenshots/comments-browser.png)
![comments-postman](/public/screenshots/comments-postman.png)

#### - `http://localhost:3000/comments?email=@garfield.biz``
![comments-filter-email-browser](/public/screenshots/comments-filter-email-browser.png)
![comments-filter-email-postman](/public/screenshots/comments-filter-email-postman.png)

#### - `http://localhost:3000/comments?email=.biz&name=id&body=dolor`
![comments-filter-all-browser](/public/screenshots/comments-filter-all-browser.png)
![comments-filter-all-postman](/public/screenshots/comments-filter-all-postman.png)