-- MySQL dump 10.13  Distrib 5.6.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: wasser
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL DEFAULT 1,
  `remito` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_producto_idx` (`id_producto`) USING BTREE,
  KEY `id_usuario_idx` (`id_usuario`) USING BTREE,
  CONSTRAINT `id_producto` FOREIGN KEY (`id_producto`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) COLLATE latin1_spanish_ci NOT NULL,
  `imagen` varchar(45) COLLATE latin1_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'yrttp','');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `precio` varchar(45) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `descripcion` varchar(300) CHARACTER SET latin1 COLLATE latin1_spanish_ci NOT NULL,
  `imagenes` varchar(100) CHARACTER SET latin1 COLLATE latin1_spanish_ci DEFAULT NULL,
  `created_at` timestamp(6) NULL DEFAULT NULL,
  `updated_at` timestamp(6) NULL DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_categorias_idx` (`id_categoria`),
  CONSTRAINT `id_categorias` FOREIGN KEY (`id_categoria`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'asd','13','asd',NULL,NULL,NULL,NULL),(2,'asd','18000','',NULL,'2020-10-10 16:39:55.000000','2020-10-10 16:39:55.000000',NULL),(3,'uriel','18000','','imagenes1602348079749.jpg','2020-10-10 16:41:19.000000','2020-10-10 16:41:19.000000',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) COLLATE latin1_spanish_ci NOT NULL,
  `apellido` varchar(45) COLLATE latin1_spanish_ci NOT NULL,
  `email` varchar(45) COLLATE latin1_spanish_ci NOT NULL,
  `password` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `fecha` date DEFAULT NULL,
  `avatar` varchar(45) COLLATE latin1_spanish_ci DEFAULT NULL,
  `created_at` timestamp(6) NULL DEFAULT NULL,
  `updated_at` timestamp(6) NULL DEFAULT NULL,
  `rol` varchar(45) COLLATE latin1_spanish_ci DEFAULT 'user',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'santiago','pio','santiago@hotmail.com','$2b$12$aT3In9U0H5y1EQ6fyC/EE.Zi93QakvxPsF7yj785w0DaHBkANFy9y',NULL,'avatar1602187401736.jpg','2020-10-08 20:03:22.000000','2020-10-08 20:03:22.000000','user'),(3,'uriel','turrion','natalia@hotmail.com','$2b$12$e5ScI5nKp4QdekrLD2rl0OGbvZHuj4mUScWbIj.x03Gd/uyggR1P2',NULL,'avatar1602206029140.jpg','2020-10-09 01:13:49.000000','2020-10-09 01:13:49.000000','user'),(4,'natali','natalia','vampi@hotmail.com','$2b$12$msQc7jDTiIK6sQWkH9R9euA5vDyFpHhzegmbI71mjlhc056sqVEoe',NULL,'avatar1602206128469.jpg','2020-10-09 01:15:28.000000','2020-10-09 01:15:28.000000','user'),(5,'mauro','turrion','mauroagustinturrion@hotmail.com','$2b$12$/vZARNYaJ6jMr6ri1tGOae3JW4/9ic81LRzkuS1ZB6kTTXmq9QWx.',NULL,'avatar1602259319160.jpg','2020-10-09 16:01:59.000000','2020-10-09 16:01:59.000000','user'),(7,'mariana','miño','mariana.garcia@hotmail.com','$2b$12$p1Chv1xQg5PVXqg3/5ymx.wMgESdENsd/ftZkB8LXmM7S5vn5p/Fi',NULL,'avatar1602265860205.jpg','2020-10-09 17:51:00.000000','2020-10-09 17:51:00.000000','user'),(8,'junior','nicolas','nicolas@gmail.com','$2b$12$zKbn0uFQlpJO7ih.K3ig5eLf2ZcfHRqynmnhEOPX5xS1hTCSLL3Ru',NULL,'avatar1602267311098.jpg','2020-10-09 18:15:11.000000','2020-10-09 18:15:11.000000','user'),(9,'alan','sauce','alan@gmail.com','$2b$12$O6abUeIyXa/y9WLhAa1v2etbhf8Kt.HejYUwoe1LbvTLGoDme5dqy',NULL,'avatar1602343529459.jpg','2020-10-10 15:25:30.000000','2020-10-10 15:25:30.000000','user'),(10,'uriel','turrion','lean@hotmail.com','$2b$12$1ZcKJ2gPoDID7DITITqi8e1UGV8BcFh0Njf7u18DY3bjzM645/14.',NULL,'avatar1602381629533.jpg','2020-10-11 02:00:30.000000','2020-10-11 02:00:30.000000','user'),(11,'facundo','vara','facu@hotmail.com','$2b$12$/G70F/MDxdiG2q82zkG.buOpcEYG/ITNoRjsPPtDmqYEGBt26WrdG',NULL,'avatar1602381709779.jpg','2020-10-11 02:01:50.000000','2020-10-11 02:01:50.000000','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'wasser'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-10 23:09:16
