# API Spec

## Create Product

Request :

- Method : POST
- Endpoint : `/products`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string",
  "price": "number",
  "quantity": "number"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "name": "string",
    "price": "number",
    "quantity": "number",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Get Product

Request :

- Method : GET
- Endpoint : `/products/:id`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "name": "string",
    "price": "number",
    "quantity": "number",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## Update Product

Request :

- Method : PUT
- Endpoint : `/products/:id`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string",
  "price": "number",
  "quantity": "number"
}
```

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": {
    "id": "string, unique",
    "name": "string",
    "price": "number",
    "quantity": "number",
    "createdAt": "date",
    "updatedAt": "date"
  }
}
```

## List Product

Request :

- Method : GET
- Endpoint : `/products`
- Header :
  - Accept: application/json
- Query Param :
  - size : number,
  - page : number

Response :

```json
{
  "code": "number",
  "status": "string",
  "data": [
    {
      "id": "string, unique",
      "name": "string",
      "price": "number",
      "quantity": "number",
      "createdAt": "date",
      "updatedAt": "date"
    },
    {
      "id": "string, unique",
      "name": "string",
      "price": "number",
      "quantity": "number",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
}
```
