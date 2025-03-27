CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Saved` varchar(255),
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `user_name` (`user_name`),
  KEY `password` (`password`),
  KEY `date` (`date`),
  KEY `Saved` (`Saved`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `users`(`id`, `user_id`, `user_name`, `password`, `date`, `Saved`) 
SELECT 0, 000, 'admin', '1234', NOW(), NULL
WHERE NOT EXISTS (
    SELECT 1 FROM `users` WHERE `user_name` = 'admin'
)
ON DUPLICATE KEY UPDATE 
    `date` = NOW();


-- 設定自動遞增起始值
ALTER TABLE `users`
  AUTO_INCREMENT=1;
COMMIT;
