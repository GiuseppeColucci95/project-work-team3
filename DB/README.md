## ENTITIES
- products (id, slug, name, description, quantity, image, price, discount_percentage, created_at, updated_at)
- orders (id, promotion_id, first_name, last_name, mail, phone, address, total_not_discounted, total_discounted, shipping, final_price, status, created_at)
- order_product (id, order_id, product_id, quantity)
- tags (id, name, description)
- product_tag (id, product_id, tag_id)
- promotions (id, description, code, discount_percentage, start_date, end_date)
- categories (id, name, description)
- category_product (category_id, product_id)

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
- promotion_id: (BIGINT) - foreign key - NULL
- first_name: VARCHAR(50) - NOT NULL
- last_name: VARCHAR(50) - NOT NULL
- mail: VARCHAR(50) - NOT NULL
- phone: CHAR(10) - NOT NULL
- address: VARCHAR(100) - NOT NULL
- total_not_discounted: DECIMAL(6,2) - NOT NULL
- total_discounted: DECIMAL(6,2) - NOT NULL
- shipping: DECIMAL(6,2) - NOT NULL - default(9,99)
- final_price: DECIMAL(6,2) - NOT NULL
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

## Table name: `promotions`
**Table columns**
- id: (BIGINT) - primary key - auto increments - NOT NULL
- description: VARCHAR(255) - NULL
- code: VARCHAR(20) - NOT NULL
- discount_percentage: (TINYINT) - UNSIGNED - NOT 
- start_date: (DATETIME) - NOT NULL
- end_date: (DATETIME) - NOT NULL

## Table name: `categories`
**Table columns**
- id: (BIGINT) - primary key - auto increments - NOT NULL
- name: VARCHAR(50) - NOT NULL
- description: VARCHAR(255) - NULL

## Table name: `category_product`
**Table columns**
- category_id: (BIGINT) - foreign key - NOT NULL
- product_id: (BIGINT) - foreign key - NOT NULL
