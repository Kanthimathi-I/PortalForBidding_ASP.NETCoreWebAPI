-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: bidding
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `farmer`
--

DROP TABLE IF EXISTS `farmer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `farmer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `farmer_name` varchar(100) DEFAULT NULL,
  `farmer_mail_id` varchar(100) DEFAULT NULL,
  `product_name` varchar(100) DEFAULT NULL,
  `product_category` varchar(100) DEFAULT NULL,
  `product_quantity` decimal(5,2) DEFAULT NULL,
  `product_base_price` decimal(5,2) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `farmer`
--

LOCK TABLES `farmer` WRITE;
/*!40000 ALTER TABLE `farmer` DISABLE KEYS */;
INSERT INTO `farmer` VALUES (2,'farmer1','farmer1@gmail.com','potato','vegetable',2.00,100.00,'not yet bidded'),(3,'farmer2','farmer2@gmail.com','orange','fruit',1.00,30.90,'not yet bidded'),(4,'farmer1','farmer1@gmail.com','wheat','cereals',1.00,78.90,'not yet bidded'),(7,'farmer1','farmer1@gmail.com','beans','vegetable',1.00,56.00,'not yet bidded'),(11,'farmer5','farmer5@gmail.com',' ladies fingers','vegetable',2.00,100.89,'not yet bidded'),(13,'farmer8','farmer8@gmail.com','Spinach','vegetable',0.50,45.23,'not yet bidded'),(14,'farmer9','farmer9@gmail.com','broccoli','vegetable',4.00,40.23,'not yet bidded'),(16,'farmer11','farmer11@gamil.com','Sweet Potatos','vegetable',2.00,200.70,'not yet bidded'),(18,'farmer12','farmer12@gmail.com','Banana','fruit',12.00,100.90,'not yet bidded'),(19,'farmer2','farmer2@gmail.com','Mango','fruit',5.00,150.00,'not yet bidded'),(22,'farmer18','farmer18@gmail.com','jack fruit','fruit',5.00,100.00,'not yet bidded'),(23,'farmer20','farmer20@gmail.com','Green Grapes','fruit',0.50,60.56,'not yet bidded'),(24,'farmer6','farmer6@gmail.com','watermelon','fruit',2.00,100.00,'not yet bidded'),(25,'farmer3','farmer3@gmail.com','papaya','fruit',2.00,60.23,'not yet bidded'),(26,'farmer6','farmer6@gmail.com','rice','cereals',1.00,60.43,'not yet bidded'),(27,'farmer1','farmer10@gmail.com','Cauliflower','vegetable',3.00,180.00,'not yet bidded'),(28,'farmer8','farmer8@gmail.com','carrot','vegetable',2.00,60.89,'not yet bidded'),(29,'farmer11','farmer11@gmail.com','zucchini ','vegetable',1.00,62.23,'not yet bidded');
/*!40000 ALTER TABLE `farmer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-16 11:26:22
