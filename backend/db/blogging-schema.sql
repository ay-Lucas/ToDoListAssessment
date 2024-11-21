CREATE TABLE Users (
    id SERIAL PRIMARY KEY, -- Auto-incrementing unique id 
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Automatically set timestamp
);

CREATE TABLE Posts (
    id SERIAL PRIMARY KEY, -- Auto-incrementing unique identifier
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Automatically set timestamp
    FOREIGN KEY (user_id) REFERENCES Users (id) ON DELETE CASCADE
);

CREATE TABLE Comments (
    id SERIAL PRIMARY KEY, -- Auto-incrementing unique id 
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Automatically set timestamp
    FOREIGN KEY (post_id) REFERENCES Posts (id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users (id) ON DELETE CASCADE
);
