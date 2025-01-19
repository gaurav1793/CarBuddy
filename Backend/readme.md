# Backend API Documentation

## Endpoint
/user/register`

## Description
This endpoint is used to register a new user. It validates the input data, hashes the password, and stores the user information in the database. Upon successful registration, it returns a JSON Web Token (JWT) and the user details.

## Request Body
The request body must be a JSON object containing the following fields:

- `fullname`: An object containing:
    - `firstname`: A string with a minimum length of 3 characters (required).
    - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A valid email address (required).
- `password`: A string with a minimum length of 6 characters (required).

### Example
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
}
```

## Responses

### Success
- **Status Code**: `201 Created`
- **Body**:
    ```json
    {
        "token": "JWT_TOKEN_HERE",
        "user": {
            "_id": "USER_ID",
            "fullname": {
                "firstname": "John",
                "lastname": "Doe"
            },
            "email": "john.doe@example.com"
        }
    }
    ```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Body**:
    ```json
    {
        "errors": [
            {
                "msg": "Invalid Email",
                "param": "email",
                "location": "body"
            },
            {
                "msg": "First name must be at least 3 characters long",
                "param": "fullname.firstname",
                "location": "body"
            },
            {
                "msg": "Password must be at least 6 characters long",
                "param": "password",
                "location": "body"
            }
        ]
    }
    ```

### Email Already Exists
- **Status Code**: `400 Bad Request`
- **Body**:
    ```json
    {
        "message": "Email already exists"
    }
    ```

### Internal Server Error
- **Status Code**: `500 Internal Server Error`
- **Body**:
    ```json
    {
        "message": "Internal server error"
    }
    ```


## Validation
- Validates that `email` is a valid email address.
- Validates that `fullname.firstname` is at least 3 characters long.
- Validates that `password` is at least 6 characters long.

## Controller
- Handles the registration logic, including validation, password hashing, and user creation.
- Generates a JWT token upon successful registration.

## Services
- Contains the `createUser` function which handles the creation of the user in the database.

## Model
- Defines the `User` schema with fields for `fullname`, `email`, `password`, and `socketId`.
- Includes methods for generating a JWT token, comparing passwords, and hashing passwords.

## Endpoint
`/user/login`

## Description
This endpoint is used to authenticate a user. It validates the input data, checks the user's credentials, and returns a JSON Web Token (JWT) and the user details upon successful authentication.

## Request Body
The request body must be a JSON object containing the following fields:

- `email`: A valid email address (required).
- `password`: A string with a minimum length of 6 characters (required).

### Example
```json
{
    "email": "john.doe@example.com",
    "password": "password123"
}
```

## Responses

### Success
- **Status Code**: `200 OK`
- **Body**:
    ```json
    {
        "token": "JWT_TOKEN_HERE",
        "user": {
            "_id": "USER_ID",
            "fullname": {
                "firstname": "John",
                "lastname": "Doe"
            },
            "email": "john.doe@example.com"
        }
    }
    ```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Body**:
    ```json
    {
        "errors": [
            {
                "msg": "Invalid Email",
                "param": "email",
                "location": "body"
            },
            {
                "msg": "Password must be at least 6 characters long",
                "param": "password",
                "location": "body"
            }
        ]
    }
    ```

### Invalid Credentials
- **Status Code**: `401 Unauthorized`
- **Body**:
    ```json
    {
        "message": "Invalid email or password"
    }
    ```

### Internal Server Error
- **Status Code**: `500 Internal Server Error`
- **Body**:
    ```json
    {
        "message": "Internal server error"
    }
    ```

## Validation
- Validates that `email` is a valid email address.
- Validates that `password` is at least 6 characters long.

## Controller
- Handles the login logic, including validation and user authentication.
- Generates a JWT token upon successful authentication.

## Services
- Contains the `findUser` function which handles the retrieval of the user from the database.

## Model
- Defines the `User` schema with fields for `fullname`, `email`, `password`, and `socketId`.
- Includes methods for generating a JWT token, comparing passwords, and hashing passwords.


## Endpoint
`/captian/register`

## Description
This endpoint is used to register a new captian. It validates the input data, hashes the password, and stores the captian information in the database. Upon successful registration, it returns a JSON Web Token (JWT) and the captian details.

## Request Body
The request body must be a JSON object containing the following fields:

- `fullname`: An object containing:
    - `firstname`: A string with a minimum length of 3 characters (required).
    - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A valid email address (required).
- `password`: A string with a minimum length of 6 characters (required).
- `vehicle`: An object containing:
    - `color`: A string with a minimum length of 3 characters (required).
    - `plate`: A string with a minimum length of 3 characters (required).
    - `capacity`: A number with a minimum value of 1 (required).
    - `vehicleType`: A string that must be one of 'car', 'motorcycle', or 'auto' (required).

### Example
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123",
    "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
    }
}
```

## Responses

### Success
- **Status Code**: `201 Created`
- **Body**:
    ```json
    {
        "token": "JWT_TOKEN_HERE",
        "captian": {
            "_id": "CAPTIAN_ID",
            "fullname": {
                "firstname": "John",
                "lastname": "Doe"
            },
            "email": "john.doe@example.com",
            "vehicle": {
                "color": "Red",
                "plate": "XYZ123",
                "capacity": 4,
                "vehicleType": "car"
            }
        }
    }
    ```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Body**:
    ```json
    {
        "errors": [
            {
                "msg": "Invalid Email",
                "param": "email",
                "location": "body"
            },
            {
                "msg": "First name must be at least 3 characters long",
                "param": "fullname.firstname",
                "location": "body"
            },
            {
                "msg": "Password must be at least 6 characters long",
                "param": "password",
                "location": "body"
            },
            {
                "msg": "Color must be at least 3 characters long",
                "param": "vehicle.color",
                "location": "body"
            },
            {
                "msg": "Plate must be at least 3 characters long",
                "param": "vehicle.plate",
                "location": "body"
            },
            {
                "msg": "Capacity must be a number",
                "param": "vehicle.capacity",
                "location": "body"
            },
            {
                "msg": "Invalid Vehicle Type",
                "param": "vehicle.vehicleType",
                "location": "body"
            }
        ]
    }
    ```

### Captian Already Exists
- **Status Code**: `400 Bad Request`
- **Body**:
    ```json
    {
        "message": "Captian already exists"
    }
    ```

### Internal Server Error
- **Status Code**: `500 Internal Server Error`
- **Body**:
    ```json
    {
        "message": "Internal server error"
    }
    ```

## Validation
- Validates that `email` is a valid email address.
- Validates that `fullname.firstname` is at least 3 characters long.
- Validates that `password` is at least 6 characters long.
- Validates that `vehicle.color` is at least 3 characters long.
- Validates that `vehicle.plate` is at least 3 characters long.
- Validates that `vehicle.capacity` is a number with a minimum value of 1.
- Validates that `vehicle.vehicleType` is one of 'car', 'motorcycle', or 'auto'.

## Controller
- Handles the registration logic, including validation, password hashing, and captian creation.
- Generates a JWT token upon successful registration.

## Services
- Contains the `createCaptian` function which handles the creation of the captian in the database.

## Model
- Defines the `Captian` schema with fields for `fullname`, `email`, `password`, `socketId`, `status`, `vehicle`, and `location`.
- Includes methods for generating a JWT token, comparing passwords, and hashing passwords.


## Endpoint
`/captian/login`

## Description
This endpoint is used to authenticate a captian. It validates the input data, checks the captian's credentials, and returns a JSON Web Token (JWT) and the captian details upon successful authentication.

## Request Body
The request body must be a JSON object containing the following fields:

- `email`: A valid email address (required).
- `password`: A string with a minimum length of 6 characters (required).

### Example
```json
{
    "email": "john.doe@example.com",
    "password": "password123"
}
```

## Responses

### Success
- **Status Code**: `200 OK`
- **Body**:
    ```json
    {
        "token": "JWT_TOKEN_HERE",
        "captian": {
            "_id": "CAPTIAN_ID",
            "fullname": {
                "firstname": "John",
                "lastname": "Doe"
            },
            "email": "john.doe@example.com",
            "vehicle": {
                "color": "Red",
                "plate": "XYZ123",
                "capacity": 4,
                "vehicleType": "car"
            }
        }
    }
    ```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Body**:
    ```json
    {
        "errors": [
            {
                "msg": "Invalid Email",
                "param": "email",
                "location": "body"
            },
            {
                "msg": "Password must be at least 6 characters long",
                "param": "password",
                "location": "body"
            }
        ]
    }
    ```

### Invalid Credentials
- **Status Code**: `401 Unauthorized`
- **Body**:
    ```json
    {
        "message": "Invalid email or password"
    }
    ```

### Internal Server Error
- **Status Code**: `500 Internal Server Error`
- **Body**:
    ```json
    {
        "message": "Internal server error"
    }
    ```

## Validation
- Validates that `email` is a valid email address.
- Validates that `password` is at least 6 characters long.

## Controller
- Handles the login logic, including validation and captian authentication.
- Generates a JWT token upon successful authentication.

## Services
- Contains the `findCaptian` function which handles the retrieval of the captian from the database.

## Model
- Defines the `Captian` schema with fields for `fullname`, `email`, `password`, `socketId`, `status`, `vehicle`, and `location`.
- Includes methods for generating a JWT token, comparing passwords, and hashing passwords.

## Endpoint
`/captian/profile`

## Description
This endpoint is used to retrieve the profile of the authenticated captian.

## Responses

### Success
- **Status Code**: `200 OK`
- **Body**:
    ```json
    {
        "_id": "CAPTIAN_ID",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "vehicle": {
            "color": "Red",
            "plate": "XYZ123",
            "capacity": 4,
            "vehicleType": "car"
        }
    }
    ```

### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Body**:
    ```json
    {
        "message": "Unauthorized"
    }
    ```

### Internal Server Error
- **Status Code**: `500 Internal Server Error`
- **Body**:
    ```json
    {
        "message": "Internal server error"
    }
    ```

## Controller
- Handles the logic for retrieving the captian's profile.

## Endpoint
`/captian/logout`

## Description
This endpoint is used to log out the authenticated captian. It clears the authentication token and adds it to a blacklist to prevent reuse.

## Responses

### Success
- **Status Code**: `200 OK`
- **Body**:
    ```json
    {
        "message": "Logged out successfully"
    }
    ```

### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Body**:
    ```json
    {
        "message": "Unauthorized"
    }
    ```

### Internal Server Error
- **Status Code**: `500 Internal Server Error`
- **Body**:
    ```json
    {
        "message": "Internal server error"
    }
    ```

## Controller
- Handles the logic for logging out the captian, including clearing the authentication token and blacklisting it.

## Services
- Contains the `blacklistToken` function which handles adding the token to the blacklist.

## Model
- Defines the `Captian` schema with fields for `fullname`, `email`, `password`, `socketId`, `status`, `vehicle`, and `location`.
- Includes methods for generating a JWT token, comparing passwords, and hashing passwords.