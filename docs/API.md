# **CRM App API Documentation**

## **Overview**

This API allows users to manage customers, sales, and products in a CRM system. It provides endpoints for managing customer information, tracking sales and payments, managing a product catalog, and generating reports.

### **Base URL**

```
http://localhost:80/api1/
```

### **Authentication**

This API uses Bearer token authentication. You must include a valid token in the `Authorization` header for all secured endpoints.

#### **Example Header**

```
Authorization: Bearer <your-token>
```

## **1. Authentication & User Management**

### **API Endpoints**

| Method | Endpoint             | Description                           |
| ------ | -------------------- | ------------------------------------- |
| POST   | `/api/auth/register` | Register a new user.                  |
| POST   | `/api/auth/login`    | Authenticate user and return a token. |
| GET    | `/api/auth/profile`  | Get current user profile.             |
| PUT    | `/api/auth/profile`  | Update current user profile.          |
| POST   | `/api/auth/logout`   | Invalidate the user session.          |

### **Data Structure: Users Table**

| Field       | Type      | Description                            |
| ----------- | --------- | -------------------------------------- |
| `userId`    | String    | Unique identifier for the user.        |
| `name`      | String    | User's full name.                      |
| `email`     | String    | User's email (must be unique).         |
| `password`  | String    | Hashed password.                       |
| `role`      | String    | User role ("Admin", "User").           |
| `createdAt` | Timestamp | Date and time the user was registered. |

---
