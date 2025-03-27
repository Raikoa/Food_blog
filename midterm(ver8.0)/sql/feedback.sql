CREATE TABLE IF NOT EXISTS `pairings` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `blog_id` INT NOT NULL,
    `suggestion` VARCHAR(255) NOT NULL,
    `user_name` VARCHAR(100),
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
);