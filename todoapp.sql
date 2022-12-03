-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2022 at 09:45 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todoapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`, `type`, `status`, `createdAt`, `updatedAt`) VALUES
(28, 'Fix render for nav bar', 'When you are logIn, you need refresh pager for showing navbar', 'webSite', 'Done', '2022-09-30 00:00:00', '2022-12-02 20:44:49'),
(29, 'remove useless code', '', 'webSite', '', '2022-09-30 00:00:00', '2022-12-02 20:44:49'),
(30, 'fix style for logout pages', '', 'webSite', '', '2022-09-30 00:00:00', '2022-12-02 20:44:49'),
(31, 'Create 404 PAGE', '\n', 'HomeWork', '', '2022-09-30 00:00:00', '2022-12-02 20:44:49'),
(32, 'upload server on the heroku', '', 'webSite', '', '2022-09-30 00:00:00', '2022-12-02 20:44:49'),
(33, 'create database for users', '', 'webSite', '', '2022-09-30 00:00:00', '2022-12-02 20:44:49'),
(34, 'create database for tasks', '', 'webSite', '', '2022-09-30 00:00:00', '2022-12-02 20:44:49'),
(35, 'remove userlist from main page', '', 'webSite', '', '2022-09-30 00:00:00', '2022-12-02 20:44:49'),
(36, 'Create Done function for tasks', '', 'webSite', '', '2022-09-30 00:00:00', '2022-12-02 20:44:49'),
(37, 'Replace login in status to nav bar', '', 'webSite', '', '2022-09-30 00:00:00', '2022-12-02 20:44:49'),
(38, 'Create Edit function for tasks', '', 'webSite', '', '2022-09-30 00:00:00', '2022-12-02 20:44:49'),
(39, 'Change Background for ALL pages', '', 'webSite', '', '2022-09-30 00:00:00', '2022-12-02 20:44:49'),
(52, 'Upload REACT to netlify', '', 'webSite', '', '2022-10-05 12:59:19', '2022-12-02 20:44:49'),
(53, 'Create Separate categories for Tasks', '', 'webSite', '', '2022-10-05 13:00:09', '2022-12-02 20:44:49'),
(61, 'this is home work', 'ewe', 'homeWork', '', '2022-10-06 20:59:45', '2022-12-02 20:44:49'),
(115, '43', '43', 'workTaks', '', '2022-10-17 04:06:34', '2022-12-02 20:44:49'),
(118, 'fix after delete task rwnder', '', 'webSite', '', '2022-10-17 05:45:42', '2022-12-02 20:44:49'),
(119, 'hide taskk for not authorithate user', '', 'webSite', 'Done', '2022-10-17 05:46:29', '2022-12-02 20:44:49'),
(120, 'fix delete function for complete tasks', '', 'webSite', 'Done', '2022-10-17 05:47:42', '2022-12-02 20:44:49'),
(121, 'x ray power supply', '', 'workTask', 'Done', '2022-10-17 05:53:45', '2022-12-02 20:44:49'),
(123, 'fix style for task detail', '', 'webSite', 'Done', '2022-10-17 07:06:14', '2022-12-02 20:44:49'),
(124, 'Calibration Horiba Cito', '', 'workTask', 'Done', '2022-10-17 13:49:38', '2022-12-02 20:44:49'),
(126, 'Revmotology - ext Control', '', 'workTask', 'Done', '2022-10-31 20:31:49', '2022-12-02 20:44:49'),
(127, 'Cito yumizen 1500', 'Software error', '', 'Done', '2022-10-31 20:32:16', '2022-12-02 20:44:49'),
(128, 'Bring Power supply for security', '', 'workTask', 'Done', '2022-11-02 05:35:14', '2022-12-02 20:44:49'),
(129, 'Cito p8000 ', 'Error when device switch off', 'workTask', 'Done', '2022-11-03 05:11:32', '2022-12-02 20:44:49'),
(130, 'ინგოროყვა - LIC# მოცილება', '', 'workTask', 'Done', '2022-11-03 05:12:04', '2022-12-02 20:44:49'),
(131, 'რევმოტოლოგია - ფიფქები.', 'გაგზავნილია 10 პასუხი', 'workTask', 'Done', '2022-11-03 05:13:31', '2022-12-02 20:44:49'),
(132, 'ჩაპიძე - micros 60 ', 'blank - არ ჯდება', 'workTask', 'Done', '2022-11-03 05:23:02', '2022-12-02 20:44:49'),
(134, 'test', 'test', 'webSite', '', '2022-11-03 09:54:36', '2022-12-02 20:44:49'),
(136, 'New Vision C400', 'შემოწმება- გაწმენდა', 'workTask', '', '2022-11-04 05:18:55', '2022-12-02 20:44:49');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pwd` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` bigint(20) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `pwd`, `email`, `mobile`, `createdAt`, `updatedAt`) VALUES
(50, 'Admin', '1234', 'test.testishvili@gmail.com', 555-555-555, '2022-09-30 00:00:00', '2022-12-02 20:44:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=140;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
