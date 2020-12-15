-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: wasser
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Canilla Grifería Lavatorio Baño Temporizada  ','2007','GRIFERIA LAVATORIO - Modelo: Grifería Temporizada Pressmatic - Color: Cromo - Material volante: Metálico - Material del pico: Metálico - Material cuadro : Metálico - Incluye flexibles: no - Incluye desagote: no - Tipo de pico: Fijo - Tipo de lluvia con aireador - Tiempo de cierre de agua: (ver manua','imagenes1602561971947.png',NULL,'2020-10-13 04:06:11.000000',1),(4,'Griferia Canilla Monocomando cromado','5600','CARACTERÍSTICAS DEL PRODUCTO: Griferia Canilla Monocomando Lavatorio De Baño - Mezcladora De Agua Fría Caliente. - Material: Metal Con Terminación De Excelente Cromado - Ideal Para Lavatorio De Baño. - Pico Fijo. - Aireador Espumante ( Evita Salpicar El Agua) ( Y Ahorra El Consumo De Agua) - Cartuch','imagenes1608045211319.png','2020-10-13 04:16:12.000000','2020-12-15 15:13:31.000000',NULL),(5,'Grifería Monocomando Fv Coty P/ Lavatorio Alt','15630','GRIFERIA FV COTY 0181.02/D9 MONOCOMANDO LAVATORIO ALTO - Colores disponibles: Cromo. - Tecnología: Cierre cerámico. - Garantía: 5 años - Tipo de instalación: Apto para calefón y/o termotanque. - Flexibles - Elemento de fijaciones - Instrucciones de instalación','imagenes1602562736658.png','2020-10-13 04:18:56.000000','2020-10-13 04:18:56.000000',NULL),(6,'Grifería Lavatorio Monocomando Alta','2860','Grifería lavatorio monocomando - Color negra - Material ABS -Altura total 28 cm -Altura hasta el pico 22 cm -Cartucho cierre cerámico 40 mm Incluye flexibles Conexión de bronce','imagenes1602563866172.png','2020-10-13 04:37:46.000000','2020-10-13 04:37:46.000000',NULL),(7,'Grifo de cocina monocomando Piazza Emblem cro','3620','- Marca: Piazza - Modelo: Emblem (ex - Yvon) - Color: Cromo - Material volante: Metálico - Material del pico: Metálico - Material cuadro: Latón - Tipo de cartucho: Ø 40 mm - Excelente Cromado - Mecanismo Metálico - Presión Mínima: 0,4 kg/cm2 - Tipo de cierre: Monocomando - Pico basculante con filtro','imagenes1602564456805.png','2020-10-13 04:46:44.000000','2020-10-13 04:47:36.000000',NULL),(8,'Grifo de cocina monocomando Piazza','17100','','imagenes1608045157947.png','2020-10-13 04:49:44.000000','2020-12-15 15:12:37.000000',NULL),(9,'Grifo de cocina monocomando FV Swing','17000','Diseño de vanguardia, funcional y práctico El control monocomando es un sistema moderno, durable y de fácil instalación. Te permite accionar la apertura y el cierre del caudal con una sola mano. Flexible y giratorio Su giro de 360ª hace que puedas ajustar la dirección y el ángulo del grifo. Es ideal','imagenes1602565992593.png','2020-10-13 05:13:12.000000','2020-10-13 05:13:12.000000',NULL),(10,'Grifo de cocina monocomando Hydros','299','\r\nGrifo de cocina monocomando Hydros\r\n$2.990,00\r\nColor: \r\nSeleccione un color\r\nDiseño de vanguardia, funcional y práctico El control monocomando es un sistema moderno, durable y de fácil instalación. Te permite accionar la apertura y el cierre del caudal con una sola mano. Flexible y giratorio Su gi','imagenes1602570348627.png','2020-10-13 06:25:48.000000','2020-10-13 06:25:48.000000',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Pio','Clusellas','Pio@adminWasser.com','$2b$12$6VJmSez0Tn0yltwCMvscheSBXX2AqmbcJVLDr3c8oqsHC54dE5mIa',NULL,'customFileLang1608045545865.jpg','2020-10-13 04:00:03.000000','2020-12-15 15:19:05.000000','admin'),(2,'Eric','Mena','eric@adminwasser.com','$2b$12$wAPijYQPI6FeB/7sjVK0y.U7vTQoz2uMhcPpQfeSeKoa4M.MheO.6',NULL,'avatar1602568980737.jpg','2020-10-13 06:03:01.000000','2020-10-13 06:03:01.000000','admin'),(6,'Lean','Bucco','leanbucco@gmail.com','$2b$12$dwK9ALCrdGDprPwFhnz9xOvLw5j2Oi2OwoS0kYdJcGxHL3bQFATpC',NULL,'avatar1608046566413.png','2020-12-15 15:36:07.000000','2020-12-15 15:36:07.000000','user'),(12,'Lean','Turrion','Leanturrion@gmail.com','$2b$12$bK3g0OozoptwlatDUeZ3TuJDD9J4RaAAOcgNYTsy6Ryo4NajWqNgi',NULL,'avatar1608045631732.jpg','2020-12-15 15:20:32.000000','2020-12-15 15:20:32.000000','admin'),(16,'Facu','Vara','sibeeriano@gmail.com','$2b$12$Vkf4DIONsTLXbcA9QgecgOsZqgjbisAxs6iGbYIhOo7qp1jojagvi',NULL,'customFileLang1608046298063.png','2020-12-15 15:05:55.000000','2020-12-15 15:31:38.000000','admin'),(17,'Nacho','Vuotto','nachovuotto@digitalhouse.com','$2b$12$J4f.qk6H8WyvzbGS.OgkrO3EYwLUcqLZZ0Nenzseiu.ZfKfXVtbV.',NULL,'avatar1608046177143.jpg','2020-12-15 15:29:37.000000','2020-12-15 15:29:37.000000','admin'),(18,'Common','User','commonuser@gmail.com','$2b$12$8CCynrn2UiowYzln3TygJuGu8o/hLCXgNRMQgcqp7n2VTA6ApLHWW',NULL,'avatar1608047099456.png','2020-12-15 15:45:00.000000','2020-12-15 15:45:00.000000','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-15 12:52:00
