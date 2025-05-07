## ENTITIES
- products (id, slug, name, description, quantity, category, image, price, discount_percentage, inserted_at, updated_at)
- orders (id, user_id, promotion_id, total, status, created_at)
- order_product (id, order_id, product_id, quantity)
- tags (id, name, description)
- product_tag (id, product_id, tag_id)
- users (id, firstName, lastName, mail, phone, address)
- promotions (id, description, code, discount_percentage, start_date, end_date)
- cart (id, user_id, total)
- cart_product (id, cart_id, product_id)
- wishlist (id, user_id)
- wishlist_product (id, wishlist_id, product_id)

## Table name: `products`
**Table columns**
- id: (BIGINT) - primary key - auto increments - NOT NULL
- slug: VARCHAR(100) - NOT NULL
- name: VARCHAR(50) - NOT NULL
- description: VARCHAR(500) - NOT NULL
- quantity: (SMALLINT) - NOT NULL - UNSIGNED
- category: VARCHAR(100) - NOT NULL
- image: VARCHAR(100) - NOT NULL
- price: DECIMAL(5,2) - NOT NULL
- discount_percentage: (TINYINT) - UNSIGNED - NULL
- inserted_at: (TIMESTAMP) - NOT NULL
- updated_at: (TIMESTAMP) - NOT NULL

## Table name: `orders`
**Table columns**
- id: (BIGINT) - primary key - auto increments - NOT NULL
- user_id: (BIGINT) - foreign key - NOT NULL
- promotion_id: (BIGINT) - foreign key - NULL
- total: DECIMAL(6,2) - NOT NULL
- status: VARCHAR(50) - NOT NULL
- created_at: (TIMESTAMP) - NOT NULL

## Table name: `order_product`
**Table columns**
- order_id: (BIGINT) - foreign key - NOT NULL
- product_id: (BIGINT) - foreign key - NOT NULL
- quantity: (TINYINT) - UNSIGNED - NOT NULL

## Table name: `tags`
**Table columns**
- id: (BIGINT) - primary key - auto increments - NOT NULL
- name: VARCHAR(50) - NOT NULL
- description: VARCHAR(500) - NOT NULL

## Table name: `product_tag`
**Table columns**
- product_id: (BIGINT) - foreign key - NOT NULL
- tag_id: (BIGINT) - foreign key - NOT NULL

## Table name: `users`
**Table columns**
- id: (BIGINT) - primary key - auto increments - NOT NULL
- firstName: VARCHAR(100) - NOT NULL
- lastName: VARCHAR(100) - NOT NULL
- mail: VARCHAR(100) - NOT NULL
- phone: CHAR(10) - NULL
- address: VARCHAR(255) - NOT NULL

## Table name: `promotions`
**Table columns**
- id: (BIGINT) - primary key - auto increments - NOT NULL
- description: VARCHAR(255) - NULL
- code: VARCHAR(20) - NOT NULL
- discount_percentage: (TINYINT) - UNSIGNED - NOT 
- start_date: (DATETIME) - NOT NULL
- end_date: (DATETIME) - NOT NULL

## Table name: `cart`
**Table columns**
- id: (BIGINT) - primary key - auto increments - NOT NULL
- user_id: (BIGINT) - foreign key - NOT NULL
- total: DECIMAL(6,2) - NOT NULL

## Table name: `cart_product`
**Table columns**
- cart_id: (BIGINT) - NOT NULL
- product_id: (BIGINT) - foreign key - NOT NULL

## Table name: `wishlist`
**Table columns**
- id: (BIGINT) - primary key - auto increments - NOT NULL
- name: VARCHR(50) - NOT NULL - default
- user_id: (BIGINT) - foreign key - NOT NULL

## Table name: `wishlist_product`
**Table columns**
- wishlist_id: (BIGINT) - foreign key - NOT NULL
- product_id: (BIGINT) - foreign key - NOT NULL

