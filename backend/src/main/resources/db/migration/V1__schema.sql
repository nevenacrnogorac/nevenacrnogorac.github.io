CREATE TABLE artworks (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price VARCHAR(50),
    status VARCHAR(50),
    image VARCHAR(255),
    description TEXT,
    creation_year VARCHAR(10),
    dimensions VARCHAR(100),
    medium VARCHAR(255)
);

CREATE TABLE purchases (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    artwork_id BIGINT,
    email VARCHAR(255) NOT NULL,
    message TEXT,
    created_at TIMESTAMP,
    FOREIGN KEY (artwork_id) REFERENCES artworks(id)
);

CREATE TABLE subscribers (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP
);

-- Initial Data
INSERT INTO artworks (name, price, status, image, description, creation_year, dimensions, medium) VALUES
('Art 1', '1000$', 'NEW', '/images/1.jpg', 'Test desc', '2024', '165 x 190cm', 'mixed media'),
('Art 2', '2000$', 'NEW', '/images/2.jpg', 'Test desc', '2023', '100 x 120cm', 'oil on canvas');
