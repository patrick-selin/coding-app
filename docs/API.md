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

| Method | Endpoint               | Description                              |
|--------|------------------------|------------------------------------------|
| POST   | `/api/auth/register`   | Register a new user.                     |
| POST   | `/api/auth/login`      | Authenticate user and return a token.    |
| GET    | `/api/auth/profile`    | Get current user profile.                |
| PUT    | `/api/auth/profile`    | Update current user profile.             |
| POST   | `/api/auth/logout`     | Invalidate the user session.             |

### **Data Structure: Users Table**
| Field       | Type      | Description                                  |
|-------------|-----------|----------------------------------------------|
| `userId`    | String   | Unique identifier for the user.             |
| `name`      | String    | User's full name.                           |
| `email`     | String    | User's email (must be unique).              |
| `password`  | String    | Hashed password.                            |
| `role`      | String    | User role ("Admin", "User").          |
| `createdAt` | Timestamp | Date and time the user was registered.      |

---

## **2. Dashboard**

### **API Endpoints**
| Method | Endpoint               | Description                              |
|--------|------------------------|------------------------------------------|
| GET    | `/api/dashboard/summary` | Fetch key metrics (total customers, sales, revenue). |
| GET    | `/api/dashboard/activity` | Fetch recent activity (e.g., recent sales).          |

---

## **3. Customers**

### **API Endpoints**
| Method | Endpoint               | Description                              |
|--------|------------------------|------------------------------------------|
| GET    | `/api/customers`       | Get a list of all customers (with pagination and filters). |
| GET    | `/api/customers/:id`   | Get details of a specific customer.      |
| POST   | `/api/customers`       | Create a new customer.                   |
| PUT    | `/api/customers/:id`   | Update customer details.                 |
| DELETE | `/api/customers/:id`   | Delete a customer.                       |

### **Data Structure: Customers Table**
| Field           | Type      | Description                                  |
|------------------|-----------|----------------------------------------------|
| `customerId`     | String   | Unique identifier for the customer.         |
| `name`           | String    | Full name of the customer.                  |
| `email`          | String    | Email address of the customer.              |
| `phone`          | String    | Phone number of the customer.               |
| `address`        | String    | Customer's address.                         |
| `createdAt`      | Timestamp | Date and time the customer was added.       |

---

## **4. Sales Tracking**

### **API Endpoints**
| Method | Endpoint           | Description                                                                 |
|--------|--------------------|-----------------------------------------------------------------------------|
| GET    | `/api/sales`       | Get a list of sales (with pagination, filters by customer, date, etc.).     |
| GET    | `/api/sales/:id`   | Get details of a specific sale.                                             |
| POST   | `/api/sales`       | Add a new sale/order (used by your script).          |
| PUT    | `/api/sales/:id`   | Update payment status (e.g., mark as paid).                                 |
| DELETE | `/api/sales/:id`   | Delete a sale (if needed).                                                  |

### **Data Structure: Sales Table**
| Field           | Type      | Description                                  |
|------------------|-----------|----------------------------------------------|
| `saleId`         | String   | Unique identifier for the sale.             |
| `customerId`     | String   | Reference to the customer.                  |
| `totalAmount`    | Decimal   | Total amount of the sale.                   |
| `paymentStatus`  | String    | Payment status: "Paid", "Pending", "Overdue".|
| `date`           | Timestamp | Date and time of the sale.                  |

### **Data Structure: Sale Items Table**
| Field           | Type      | Description                                  |
|------------------|-----------|----------------------------------------------|
| `saleItemId`     | String   | Unique identifier for the sale item.        |
| `saleId`         | String   | Reference to the parent sale.               |
| `productId`      | String   | Reference to the product sold.              |
| `quantity`       | Integer   | Quantity of the product sold.               |
| `price`          | Decimal   | Price per unit of the product.              |

---

## **5. Product Catalog**

### **API Endpoints**
| Method | Endpoint               | Description                              |
|--------|------------------------|------------------------------------------|
| GET    | `/api/products`        | Get a list of products (with pagination and filters). |
| GET    | `/api/products/:id`    | Get details of a specific product.       |
| POST   | `/api/products`        | Add a new product.                       |
| PUT    | `/api/products/:id`    | Update product details.                  |
| DELETE | `/api/products/:id`    | Delete a product.                        |

### **Data Structure: Products Table**
| Field           | Type      | Description                                  |
|------------------|-----------|----------------------------------------------|
| `productId`      | String    | Unique identifier for the product.          |
| `name`           | String    | Name of the product.                        |
| `sku`            | String    | Unique SKU (Stock Keeping Unit) identifier. |
| `price`          | Decimal   | Price of the product.                       |
| `stock`          | Integer   | Quantity in stock.                          |
| `category`       | String    | Category of the product.                    |
| `createdAt`      | Timestamp | Date and time the product was added.        |

---

## **6. Reporting/Analytics**

### **API Endpoints**
| Method | Endpoint               | Description                              |
|--------|------------------------|------------------------------------------|
| GET    | `/api/reports/sales`   | Get sales report (e.g., revenue trends, top customers). |
| GET    | `/api/reports/products`| Get product performance (e.g., best sellers, low stock). |
| GET    | `/api/reports/customers`| Get customer insights (e.g., frequent buyers). |


---

## **7. Notifications**

### **API Endpoints**
| Method | Endpoint               | Description                              |
|--------|------------------------|------------------------------------------|
| GET    | `/api/notifications`   | Fetch notifications (e.g., overdue payments, low stock). |
| POST   | `/api/notifications/mark-read/:id` | Mark a specific notification as read. |

### **Data Structure: Notifications Table**
| Field           | Type      | Description                                  |
|------------------|-----------|----------------------------------------------|
| `notificationId` | String   | Unique identifier for the notification.     |
| `message`        | String    | Notification message.                       |
| `type`           | String    | Type of notification (e.g., "Overdue Payment"). |
| `status`         | String    | "Unread" or "Read".                         |
| `createdAt`      | Timestamp | Date and time the notification was created. |

---

## **Error Handling**
- All error responses (JSON) follow a consistent format:
```json
{
  "error": {
    "code": 400,
    "message": "Bad Request - Missing required parameter."
  }
}
```

- Common Error Codes:
  - `400`: Bad Request
  - `401`: Unauthorized
  - `403`: Forbidden
  - `404`: Not Found
  - `500`: Internal Server Error
