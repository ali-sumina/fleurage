-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 28, 2023 at 05:32 PM
-- Server version: 5.7.39
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Fleurage`
--
CREATE DATABASE IF NOT EXISTS `Fleurage` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `Fleurage`;

-- --------------------------------------------------------

--
-- Table structure for table `bouquets`
--

DROP TABLE IF EXISTS `bouquets`;
CREATE TABLE `bouquets` (
  `id` int(8) NOT NULL,
  `title` varchar(256) NOT NULL,
  `description` varchar(700) NOT NULL,
  `price` int(8) NOT NULL,
  `stock` tinyint(1) NOT NULL,
  `image` varchar(108) NOT NULL,
  `display` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bouquets`
--

INSERT INTO `bouquets` (`id`, `title`, `description`, `price`, `stock`, `image`, `display`) VALUES
(1, 'Lavender Bliss Bouquet', 'Elegant Bouquets Featuring Fragrant Lavender Blooms', 60, 0, 'product1.png', 1),
(2, 'Garden Symphony Bouquet', 'Exotic Hibiscus Bouquets for a Vibrant Floral Display', 55, 1, 'product2.png', 1),
(3, 'Harmonious Hues Bouquet', 'Lavender and Hibiscus Bouquets for a Fragrant Gift', 80, 0, 'product3.png', 1);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `id` int(8) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `login`
--

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bouquets`
--
ALTER TABLE `bouquets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bouquets`
--
ALTER TABLE `bouquets`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

--Stored Procedures

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `createProduct`(IN `title` VARCHAR(256), IN `description` VARCHAR(800), IN `price` INT(8), IN `stock` BOOLEAN, IN `image` VARCHAR(256))
INSERT INTO bouquets (`title`, `description`, `price`, `stock`, `image`)
VALUES (title, description, price, stock, image)$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteProduct`(IN `id` INT(8))
DELETE FROM bouquets 
WHERE bouquets.id = id$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllProducts`()
SELECT * FROM bouquets$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getProductByID`(IN `id` INT(8))
SELECT * FROM bouquets
WHERE bouquets.id = id$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `showProdByLastInsertID`(IN `image` LONGBLOB, IN `title` VARCHAR(64), IN `description` VARCHAR(256), IN `price` INT(8), IN `stock` BOOLEAN)
BEGIN
INSERT INTO bouquets (`image`, `title`, `description`, `price`, `stock`)
VALUES (image, title, description, price, stock);

SELECT *
FROM bouquets
WHERE bouquets.id = LAST_INSERT_ID();

END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateDisplay`(IN `id` INT(8), IN `display` BOOLEAN)
BEGIN

UPDATE bouquets
SET bouquets.display = display
WHERE bouquets.id = id;

SELECT * FROM bouquets
WHERE bouquets.id = id;

END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateProduct`(IN `id` INT(8), IN `newtitle` VARCHAR(256), IN `newdescription` VARCHAR(256), IN `newprice` INT(8), IN `newstock` BOOLEAN, IN `newimage` VARCHAR(256))
BEGIN

	UPDATE bouquets
	SET
    bouquets.price = newprice,
    bouquets.title = newtitle,
    bouquets.description = newdescription,
    bouquets.stock = newstock,
    bouquets.image = newimage
	WHERE bouquets.id = id;
    
    SELECT * FROM bouquets
    WHERE bouquets.id = id;

END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateStock`(IN `id` INT(8), IN `stock` BOOLEAN)
BEGIN

UPDATE bouquets
SET bouquets.stock = stock
WHERE bouquets.id = id;

SELECT * FROM bouquets
WHERE bouquets.id = id;

END$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `validateUser`(IN `email` VARCHAR(128), IN `password` VARCHAR(128))
SELECT * FROM login
WHERE login.email = email AND login.password = password$$
DELIMITER ;
