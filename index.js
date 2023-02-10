const express = require('express')
const app = express()
const axios = require('axios')

app.set('json spaces', 2)

// Health check
app.get('/', function (req, res) {
  res.send('API ok')
})

// Return a list of Top Posts ordered by their number of Comments.
app.get('/topPosts', async (req, res) => {
  const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const { data: comments } = await axios.get('https://jsonplaceholder.typicode.com/comments')

  const topPosts = []

  for (const post of posts) {
    let newPost = {
      post_id: post.id,
      post_title: post.title,
      post_body: post.body,
      total_number_of_comments: comments.filter(x => x.postId === post.id).length
    }
    
    // console.log(`comment count for id ${post.id}: ${newPost.total_number_of_comments}`)
    topPosts.push(newPost)
  }

  topPosts.sort((a, b) => a.total_number_of_comments - b.total_number_of_comments);

  res.json(topPosts)
})

// Return comments with a filter of name, email, body.
app.get('/comments', async (req, res) => {
  console.log('Query Params:', req.query)
  const { name, email, body } = req.query

  const { data: comments } = await axios.get('https://jsonplaceholder.typicode.com/comments')

  let x = comments
  
  if (name && name !== ""){
    x = x.filter(c => c.name.includes(name) )
  }
  if (email && email !== ""){
    x = x.filter(c => c.email.includes(email) )
  }
  if (body && body !== ""){
    x = x.filter(c => c.body.includes(body) )
  }
  
  // console.log('Filtered comments:')
  // console.dir(x)
  res.json(x)
})

app.listen(3000, () => console.log('Listening on port 3000...'))