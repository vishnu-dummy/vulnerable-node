// This file contains dummy information data
var token = vishnu_ppZ67
var SECRET_TOKEN=example_token123
var API_KEY=example_api_key456
var PASSWORD=example_password789
var key1="-----BEGIN OPENSSH PRIVATE KEY-----
cTrx9VGoMgJGUjChtcSkfWfUbHw/+t2Xz4b1uF03sUwZfYn7Xs4yoCQ9vSnPJbTJ
TtbjAwAAN2DiUljUcZ3vm3lnMDJ1XX72sn/Bw+g1u9kiV7Rg/qSuhPVbLYrlNnbT
NWEepi9xigxSSlC2VZLZkH+O7DZL3CQLB5e2j9pG8tMjDJfl9bMw8IbCykJuuyuU
BbUmMprNI8rL56QUaQwNJqzbE9G6WzCpzwwD6Cm9aBo7hHXwNQlQjQrKvqg53dmz
Q7HQCV3moJffEzV7aP6TWZvjok1y6CX4a2r6+5zny6Pt11oAwR55ZL8xMsnebIYv
0zWp0IznpJR6VYQfumquWl1gIlnx+ubexre1zqlyftgCtWqJeO88szS7bAq3txhs
3aJ2dXZJWlI1fBEnXOV6jQdAf7tNm7jtIyOeLZouTxDzWrM2g4xnuR3SgTc3eZ7C
WFCWio4XfR5YjS1F/kkgp5e8W8Zl5w4aJ07KFavZu/WuGxT1foj6Sk+6IFRZdyG5
VtPczBeo9Zle4Y5P5RlnDx8vD3UKd0E6MfbwA+iBEGlCgDsjHgHd46irFhGtgriZ
Db05zQjyVUkJRYKx1tSKx+rgV+4wT3xLfZmQd4fIc7/eg==
-----END OPENSSH PRIVATE KEY-----"

var dbUrl= "mongodb://myusername:mypassword@cluster0.mongodb.net:27017/mydatabase"
var dummy_info = {
  // Customer module configs
  "users": [
    {
      "username": "admin",
      "password": "admin"
    },
    {
      "username": "roberto",
      "password": "asdfpiuw981"
    }
  ],

  "products": [
    {
      "name": "My public privacy",
      "description": "Grant privacy in public to watch your favorite programs",
      "price": parseInt(Math.random() * 100),
      "image": "product_1.jpg"
    },
    {
      "name": "The USB rocket",
      "description": "Be happy with your USB rocket. Functionality: none. Usability: none. The best choice!",
      "price": parseInt(Math.random() * 100),
      "image": "product_2.jpg"
    },
    {
      "name": "Walker watermelons",
      "description": "Take a walk your watermelons and make it feel comfortable.",
      "price": parseInt(Math.random() * 100),
      "image": "product_3.jpg"
    },
    {
      "name": "Potty Putter",
      "description": "The game for the avid golfers!",
      "price": 20,
      "image": "product_4.jpg"
    },
    {
      "name": "Phone Fingers",
      "description": "Phone fingers work perfectly well with iPhone's touch screen and prevent fingerprints and smudges",
      "price": 3,
      "image": "product_5.jpg"
    },
    {
      "name": "Daddle",
      "description": "Be the best father with Daddle: dad's saddle for horsing around.",
      "price": parseInt(Math.random() * 100),
      "image": "product_6.jpg"
    },
    {
      "name": "HD Vision",
      "description": "Reality is not enough for you? Improve your live with the HD vision glasses.",
      "price": parseInt(Math.random() * 100),
      "image": "product_7.jpg"
    },
    {
      "name": "Hangs free",
      "description": "Say goodbye to the cumbersome cables with the authentic hands free.",
      "price": parseInt(Math.random() * 100),
      "image": "product_8.jpg"
    }
  ]
}

module.exports = dummy_info;
