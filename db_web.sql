-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th6 01, 2019 lúc 11:38 AM
-- Phiên bản máy phục vụ: 5.7.26-0ubuntu0.18.04.1
-- Phiên bản PHP: 7.2.17-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `db_web`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `userId` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` text COLLATE utf8_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`userId`, `username`, `password`, `role`) VALUES
(113, 'admin', '$2b$10$v9JaEIHTtitpgsj1Fv95b.eIgDn2HBWpXTIq72dPAKnRv91E/H/S.', 'admin'),
(370, 'tunghx', '$2b$10$mO502CT/Ae6vSnGq1tNVfO3p3jk8zKG1/nSjkgNuTy5NM5nCruSje', 'teacher'),
(371, 'sonnh', '$2b$10$facZf.cVi.ouCGkJw8.WyOM78qd4dPLcoSZ00lHEksJOb3JVXaLHi', 'teacher'),
(373, 'thudm', '$2b$10$USgbXbXamY73iMC8bI3dN.LDJqXf2tlCxWxRiUDPyFl5VOYJ5CXYi', 'teacher'),
(375, 'hungpn', '$2b$10$sdCoesyNBijiVhHmgpVEGOMl.e4SW/Tn6vkYrtX.0PynAVp2yJNCy', 'teacher'),
(376, 'thuyhq', '$2b$10$IlbqiBnEP86K7P8VzO2ga.ucdz1lxYIvMoQCLp.LjYF7OvAywF62u', 'teacher'),
(381, 'thanhld', '$2b$10$739hYsfLremTlUlPN0X3COLlTFwh/0wG5RzFKM9eTojQ3OBvkhv7y', 'teacher');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `employee`
--

CREATE TABLE `employee` (
  `employeeId` int(255) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username` text COLLATE utf8_unicode_ci NOT NULL,
  `email` text COLLATE utf8_unicode_ci,
  `website` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employeeType` text COLLATE utf8_unicode_ci,
  `degree` text COLLATE utf8_unicode_ci,
  `company` text COLLATE utf8_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `employee`
--

INSERT INTO `employee` (`employeeId`, `name`, `username`, `email`, `website`, `employeeType`, `degree`, `company`) VALUES
(370, ' Hoàng Xuân Tùng', 'tunghx', 'tunghx@vnu.edu.vn', NULL, 'Giảng viên', 'TS', 'Bộ môn Mạng máy tính'),
(371, 'Nguyễn Hoài Sơn', 'sonnh', 'sonnh@vnu.edu.vn', NULL, 'Giảng viên', 'TS', 'Bộ môn Mạng máy tính'),
(373, 'Đào Minh Thư', 'thudm', '', '', 'Giảng viên', 'ThS', 'Bộ môn Mạng máy tính'),
(375, 'Phạm Ngọc Hùng', 'hungpn', 'hungpn@vnu.edu.vn', NULL, 'Giảng viên', 'TS', 'Bộ môn Công nghệ Phần mềm'),
(376, 'Hà Quang Thụy', 'thuyhq', 'thuyhq@vnu.edu.vn', NULL, '', 'PGS. TS', 'Bộ môn Các Hệ thống Thông tin'),
(381, 'Lê Đình Thanh', 'thanhld', 'thanhld@vnu.edu.vn', 'https://uet.vnu.edu.vn/~thanhld', 'Giảng viên', 'TS', 'Phòng thí nghiệm An toàn thông tin');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `field`
--

CREATE TABLE `field` (
  `id` int(11) NOT NULL,
  `parent` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `text` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `field`
--

INSERT INTO `field` (`id`, `parent`, `text`) VALUES
(1, '#', 'ACM '),
(4, '1', 'Computer systems organization'),
(5, '1', 'Networks'),
(6, '5', 'Network architectures'),
(7, '5', 'Network protocols'),
(8, '5', 'Network algorithms'),
(9, '5', 'Network performance evaluation'),
(10, '5', 'Network properties'),
(11, '5', 'Network services'),
(13, '1', 'Software and its engieering'),
(14, '1', 'Theory of computation '),
(15, '5', 'Network pro');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `fieldEmploy`
--

CREATE TABLE `fieldEmploy` (
  `id` int(11) NOT NULL,
  `employeeId` int(11) NOT NULL,
  `fieldId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `fieldEmploy`
--

INSERT INTO `fieldEmploy` (`id`, `employeeId`, `fieldId`) VALUES
(4, 371, 11),
(5, 371, 12),
(7, 371, 7),
(32, 381, 4),
(33, 381, 5),
(34, 381, 6),
(35, 381, 4),
(36, 381, 7),
(37, 381, 8),
(38, 381, 9),
(39, 381, 10),
(40, 381, 11),
(41, 381, 12),
(42, 381, 4),
(43, 381, 5),
(44, 381, 6),
(45, 381, 7),
(46, 381, 8),
(47, 381, 9),
(48, 381, 10),
(49, 381, 11),
(50, 381, 13),
(51, 381, 12),
(52, 381, 1),
(53, 381, 4),
(54, 381, 5),
(55, 381, 6),
(56, 381, 7),
(57, 381, 8),
(58, 381, 9),
(59, 381, 10),
(60, 381, 11),
(61, 381, 12),
(62, 381, 13),
(63, 381, 14),
(64, 373, 14);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `employeeId` int(11) NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `detail` text COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `project`
--

INSERT INTO `project` (`id`, `employeeId`, `name`, `detail`) VALUES
(1, 371, 'Nhà Thông minh', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `units`
--

CREATE TABLE `units` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `unit_type` mediumtext COLLATE utf8_unicode_ci NOT NULL,
  `address` mediumtext COLLATE utf8_unicode_ci,
  `phone` mediumtext COLLATE utf8_unicode_ci,
  `website` mediumtext COLLATE utf8_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `units`
--

INSERT INTO `units` (`id`, `name`, `unit_type`, `address`, `phone`, `website`) VALUES
(1, 'Bộ môn Mạng và Truyền thông Máy tính', 'Bộ môn', '404-E3', '', 'http://fit.uet.vnu.edu.vn/cne/'),
(10, 'Bộ môn Các Hệ thống Thông tin', 'Bộ môn', '305-E3', '+84437547813', 'http://uet.vnu.edu.vn/httt/'),
(11, 'Bộ môn Khoa học Máy tính', 'Bộ môn', '306-E3', '+84437547812', ''),
(12, 'Bộ môn Khoa học và Kỹ thuật tính toán', 'Bộ môn', '308-E3', '+84437547862', ''),
(13, 'Phòng thí nghiệm An toàn thông tin', 'Phòng thí nghiệm', '', '', ''),
(14, 'Phòng Thí nghiệm Công nghệ Tri thức', 'Bộ môn', '318-E3', '+84437547813', 'http://vnlp.net/blog/'),
(15, 'Phòng Thí nghiệm Hệ thống Nhúng', 'Phòng thí nghiệm', '311-E3', '+84437547064', ''),
(16, 'Phòng Thí nghiệm Tương tác Người – Máy', 'Phòng thí nghiệm', '302-E3 ', '+84437547064', ''),
(18, 'IoT-Lab', 'Bộ môn', '404-E3', '', ''),
(24, 'FIMO', 'Phòng thí nghiệm', '', '', '');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`userId`);

--
-- Chỉ mục cho bảng `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employeeId`);

--
-- Chỉ mục cho bảng `field`
--
ALTER TABLE `field`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `fieldEmploy`
--
ALTER TABLE `fieldEmploy`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `account`
--
ALTER TABLE `account`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=383;
--
-- AUTO_INCREMENT cho bảng `employee`
--
ALTER TABLE `employee`
  MODIFY `employeeId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=383;
--
-- AUTO_INCREMENT cho bảng `field`
--
ALTER TABLE `field`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT cho bảng `fieldEmploy`
--
ALTER TABLE `fieldEmploy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
--
-- AUTO_INCREMENT cho bảng `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT cho bảng `units`
--
ALTER TABLE `units`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
