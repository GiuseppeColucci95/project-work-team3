## ENTITIES
- products (id, slug, name, description, quantity, category, image, price, discount_percentage, inserted_at, updated_at)
- orders (id, user_id, total, promotion_id, success, created_at)
- order_product (order_id, product_id, quantity)
- tags (id, name, description)
- product_tag (product_id, tag_id)
- users (id, firstName, lastName, mail, phone, address)
- promotions (id, description, code, discount_percentage, from_data, to_data)
- cart (id, user_id)
- cart_product (cart_id, product_id)
- wishlist (id, user_id)
- wishlist_product (wishlist_id, product_id)

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
- discount_percentage: (TINYINT)
- inserted_at: (TIMESTAMP) - NOT NULL
- updated_at: (TIMESTAMP) - NOT NULL

## Table name: `orders`
**Table columns**
