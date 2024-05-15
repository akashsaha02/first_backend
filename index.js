require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "akashsaha02",
    "id": 98648701,
    "node_id": "U_kgDOBeFCfQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/98648701?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/akashsaha02",
    "html_url": "https://github.com/akashsaha02",
    "followers_url": "https://api.github.com/users/akashsaha02/followers",
    "following_url": "https://api.github.com/users/akashsaha02/following{/other_user}",
    "gists_url": "https://api.github.com/users/akashsaha02/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/akashsaha02/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/akashsaha02/subscriptions",
    "organizations_url": "https://api.github.com/users/akashsaha02/orgs",
    "repos_url": "https://api.github.com/users/akashsaha02/repos",
    "events_url": "https://api.github.com/users/akashsaha02/events{/privacy}",
    "received_events_url": "https://api.github.com/users/akashsaha02/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Akash Saha",
    "company": null,
    "blog": "https://akashsaha.fun/",
    "location": "Bhubaneswar, India",
    "email": null,
    "hireable": null,
    "bio": "Hi there! I'm Akash Saha, an aspiring Web-Developer currently studying at Kalinga Institute of Industrial Technology. Feel free to knock me about my work!",
    "twitter_username": "akashsaha0002",
    "public_repos": 49,
    "public_gists": 0,
    "followers": 10,
    "following": 18,
    "created_at": "2022-01-29T13:03:57Z",
    "updated_at": "2024-05-06T17:01:38Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('akashsaha0002')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login Page, pleaase login to my webpage</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h1>Youtube Page, please subscribe to my channel</h1>')
})

app.get('/github', (req, res) => { 
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})