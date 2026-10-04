CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(120) UNIQUE NOT NULL,
  name VARCHAR(180) NOT NULL,
  category VARCHAR(100) NOT NULL,
  description TEXT,
  grade VARCHAR(180),
  origin VARCHAR(80),
  processing_type VARCHAR(120),
  packaging VARCHAR(160),
  retail_price VARCHAR(80),
  wholesale_price VARCHAR(80),
  export_moq VARCHAR(60),
  availability VARCHAR(120),
  stock_quantity VARCHAR(120),
  image_url TEXT,
  last_updated DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE IF NOT EXISTS wholesale_requests (
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(180),
  company VARCHAR(180),
  email VARCHAR(180),
  phone VARCHAR(60),
  product VARCHAR(180),
  quantity VARCHAR(80),
  notes TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS export_inquiries (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(180) NOT NULL,
  company VARCHAR(180) NOT NULL,
  business_email VARCHAR(180) NOT NULL,
  phone VARCHAR(80) NOT NULL,
  country VARCHAR(120) NOT NULL,
  product VARCHAR(180),
  grade VARCHAR(120),
  quantity_required VARCHAR(80),
  destination VARCHAR(180),
  port VARCHAR(120),
  packaging VARCHAR(160),
  target_delivery_date DATE,
  preferred_currency VARCHAR(20),
  incoterm VARCHAR(30),
  additional_requirements TEXT,
  customer_type VARCHAR(120),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS inventory (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES products (id),
  stock_quantity VARCHAR(80),
  available_volume VARCHAR(80),
  warehouse_location VARCHAR(120),
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS website_content (
  id SERIAL PRIMARY KEY,
  section_name VARCHAR(120) UNIQUE NOT NULL,
  headline VARCHAR(220),
  body TEXT,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
