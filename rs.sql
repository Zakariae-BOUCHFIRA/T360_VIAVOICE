CREATE DATABASE rs CHARACTER SET utf8 COLLATE utf8_general_ci;


CREATE TABLE `rs1` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `rs1` varchar(24) DEFAULT NULL,
  `rs2` varchar(24) DEFAULT NULL,
  `rs3` varchar(24) DEFAULT NULL,
  `rs4` varchar(24) DEFAULT NULL,
  `q1` varchar(24) DEFAULT NULL,
  `q2` varchar(24) DEFAULT NULL,
  `q3` varchar(24) DEFAULT NULL,
  `q3Autre` text DEFAULT NULL,
  `q4` varchar(24) DEFAULT NULL,
  `q4Autre` text DEFAULT NULL,
  `q5` varchar(24) DEFAULT NULL,
  `q6` varchar(24) DEFAULT NULL,
  `q7` varchar(24) DEFAULT NULL,
  `q8` varchar(24) DEFAULT NULL,
  `q9` varchar(24) DEFAULT NULL,
  `q10` varchar(24) DEFAULT NULL,
  `q11` varchar(24) DEFAULT NULL,
  `email` varchar(24) DEFAULT NULL,
  `platform` text NOT NULL,
  `Date creation` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;


CREATE TABLE `visitor_log` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `ip_address` text DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `platform` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;