// This file contains dummy information data
var token = vishnu_ppZ67
var SECRET_TOKEN=example_token123
var API_KEY=example_api_key456
var PASSWORD=example_password789
var header =  "Authorization: Basic QWxhZGRpbjpPcGVuU2VzYW1l"

# Custom API keys or tokens
CUSTOM_API_KEY=your_custom_api_key_here
CUSTOM_API_TOKEN=your_custom_api_token_here

# Internal URLs or endpoints
INTERNAL_API_URL=http://internal-api.example.com
INTERNAL_DB_ENDPOINT=mysql://internal-db.example.com:3306/database_name

# Configuration settings
ENCRYPTION_KEY=your_encryption_key_here
DB_CONNECTION_STRING=your_database_connection_string_here

# Custom secrets or credentials
CUSTOM_SECRET=my_custom_secret_here
CUSTOM_CREDENTIALS=username:password

# License keys or activation codes
LICENSE_KEY=your_license_key_here
ACTIVATION_CODE=your_activation_code_here

const rsaPrivateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA4mzPoj4XlO3oxKoanJrKCyGgJ4m98MCtlA8l9IrSo+AKtHdp
kZjQ2ALbwlfnrH2O/i+kEeS/RTnX5yoew0h3PqEMNwXmUMUzIZ4eezndre3aB8sL
1w17y/6bTjN7zY3SCF3B6YPzzRgWIm4NkSc7qifN8hOF/MoAMZMG+gJWDmrTMyAG
c2GNKp/jCvMfJfnt8PtDut2TUKsjCT2+vp0w0TcZx/ZvNz+J9mfUA4d6VytT8U6z
6SMqC9K6rF0d03a+AlvPbmtReYCM0/xgA0kTOB
-----END RSA PRIVATE KEY-----`;


var key1="-----BEGIN OPENSSH PRIVATE KEY-----cTrx9VGoMgJGUjChtcSkfWfUbHw/+t2Xz4b1uF03sUwZfYn7Xs4yoCQ9vSnPJbTJTtbjAwAAN2DiUljUcZ3vm3lnMDJ1XX72sn/Bw+g1u9kiV7Rg/qSuhPVbLYrlNnbTNWEepi9xigxSSlC2VZLZkH+O7DZL3CQLB5e2j9pG8tMjDJfl9bMw8IbCykJuuyuUBbUmMprNI8rL56QUaQwNJqzbE9G6WzCpzwwD6Cm9aBo7hHXwNQlQjQrKvqg53dmzQ7HQCV3moJffEzV7aP6TWZvjok1y6CX4a2r6+5zny6Pt11oAwR55ZL8xMsnebIYv0zWp0IznpJR6VYQfumquWl1gIlnx+ubexre1zqlyftgCtWqJeO88szS7bAq3txhs3aJ2dXZJWlI1fBEnXOV6jQdAf7tNm7jtIyOeLZouTxDzWrM2g4xnuR3SgTc3eZ7CWFCWio4XfR5YjS1F/kkgp5e8W8Zl5w4aJ07KFavZu/WuGxT1foj6Sk+6IFRZdyG5VtPczBeo9Zle4Y5P5RlnDx8vD3UKd0E6MfbwA+iBEGlCgDsjHgHd46irFhGtgriZDb05zQjyVUkJRYKx1tSKx+rgV+4wT3xLfZmQd4fIc7/eg==-----END OPENSSH PRIVATE KEY-----"

var dbUrl= "mongodb://myusername:mypassword@cluster0.mongodb.net:27017/mydatabase"

# Custom API keys or tokens
MY_CUSTOM_API_KEY=abc123xyz456
SPECIAL_API_TOKEN=secret_token_789

# Internal URLs or endpoints
DEV_INTERNAL_API=http://dev.internal-api.example.com
PROD_DB_ENDPOINT=postgres://prod-db.example.com:5432/mydatabase

# Configuration settings
SECRET_ENCRYPTION_KEY=my_secret_encryption_key
CUSTOM_DB_CONNECTION_STRING=jdbc:mysql://custom-db.example.com:3306/mydatabase

# Custom secrets or credentials
SUPER_SECRET_KEY=super_secret_key_value
USER_CREDENTIALS=admin:admin@123

# License keys or activation codes
DEMO_LICENSE_KEY=DEMO-123-456-789
TEST_ACTIVATION_CODE=TEST-ABC-DEF-123


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
