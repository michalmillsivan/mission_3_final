-- CREATE SCHEMA `meeting_menagement` ;

-- CREATE TABLE `meeting_menagement`.`developers_teams` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `team_name` VARCHAR(45) NOT NULL,
--   PRIMARY KEY (`id`));



-- CREATE TABLE `meeting_menagement`.`meetings` (
-- `meeting_id` INT NOT NULL AUTO_INCREMENT,
-- `team_id` VARCHAR(45) NOT NULL,
-- `starting_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
-- `ending_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
-- `description` VARCHAR(45) NULL,
-- `meeting_room` INT NULL,
-- PRIMARY KEY (`meeting_id`));

-- INSERT INTO meeting_menagement.developers_teams(id, team_name) VALUES 
-- (1, 'UI Team'),
-- (2, 'Mobile Team'),
-- (3, 'React Team')

-- INSERT INTO `meeting_menagement`.`meetings` (`meeting_id`, `team_id`, `description`, `meeting_room`) VALUES ('1', '1', 'doing importent stuff', 'Blue Room');
-- INSERT INTO `meeting_menagement`.`meetings` (`meeting_id`, `team_id`, `description`, `meeting_room`) VALUES ('2', '2', 'we are working', 'New York Room');
-- INSERT INTO `meeting_menagement`.`meetings` (`meeting_id`, `team_id`, `description`, `meeting_room`) VALUES ('3', '1', 'coding', 'Large Board Room');
-- INSERT INTO `meeting_menagement`.`meetings` (`meeting_id`, `team_id`, `description`, `meeting_room`) VALUES ('4', '3', 'yes stuff', 'Blue Room');
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: meeting_menagement
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `developers_teams`
--

DROP TABLE IF EXISTS `developers_teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `developers_teams` (
  `id` int NOT NULL AUTO_INCREMENT,
  `team_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `developers_teams`
--

LOCK TABLES `developers_teams` WRITE;
/*!40000 ALTER TABLE `developers_teams` DISABLE KEYS */;
INSERT INTO `developers_teams` VALUES (1,'UI Team'),(2,'Mobile Team'),(3,'React Team');
/*!40000 ALTER TABLE `developers_teams` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-10 23:12:08


-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: meeting_menagement
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `meetings`
--

DROP TABLE IF EXISTS `meetings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meetings` (
  `meeting_id` int NOT NULL AUTO_INCREMENT,
  `team_id` int NOT NULL,
  `starting_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `ending_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `description` varchar(45) DEFAULT NULL,
  `meeting_room` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`meeting_id`),
  KEY `team_id_idx` (`team_id`),
  CONSTRAINT `inex1` FOREIGN KEY (`team_id`) REFERENCES `developers_teams` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meetings`
--

LOCK TABLES `meetings` WRITE;
/*!40000 ALTER TABLE `meetings` DISABLE KEYS */;
INSERT INTO `meetings` VALUES (1,1,'2024-10-09 16:47:11','2024-10-09 16:47:11','doing importent stuff','Blue Room'),(2,2,'2024-10-09 16:47:11','2024-10-09 16:47:11','we are working','New York Room'),(3,1,'2024-10-09 16:47:11','2024-10-09 16:47:11','coding','Large Board Room'),(4,3,'2024-10-09 16:47:11','2024-10-09 16:47:11','yes stuff','Blue Room'),(5,2,'2024-10-09 16:47:11','2024-10-09 16:47:11','cody kokokokokok','New York Room'),(6,2,'2024-10-09 16:47:11','2024-10-09 16:47:11','akcdnlncdkwvknlkwvvdklkokok','New York Room');
/*!40000 ALTER TABLE `meetings` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-10 23:12:08

