# smart-expense-tracker

## API Endpoints

### POST /users/register

Registers a new user.

#### HTTP Method

`POST`

#### Request Body

```json
{
  "name": "string (min 3 characters)",
  "email": "string (valid email format)",
  "password": "string (min 6 characters)"
}
```

#### Responses

- `201 Created`: User successfully registered.
- `400 Bad Request`: Validation error or missing required fields.
- `500 Internal Server Error`: Server error.

#### Example Responses

- `user`(object):
    "name": "string (min 3 characters)",
    "email": "string (valid email format)",
    "password": "string (min 6 characters)"

- `token`(String): JWT token.

### POST /users/login

Logs in an existing user.

#### HTTP Method

`POST`

#### Request Body

```json
{
  "email": "string (valid email format)",
  "password": "string (min 6 characters)"
}
```

#### Responses

- `200 OK`: User successfully logged in.
- `400 Bad Request`: Validation error or missing required fields.
- `401 Unauthorized`: Invalid email or password.
- `500 Internal Server Error`: Server error.

#### Example Responses

- `user`(object):
    "name": "string",
    "email": "string"

- `token`(String): JWT token.
