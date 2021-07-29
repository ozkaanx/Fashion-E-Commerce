-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 30 Tem 2021, 00:06:34
-- Sunucu sürümü: 10.4.18-MariaDB
-- PHP Sürümü: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `db`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `aboutpage`
--

CREATE TABLE `aboutpage` (
  `about_Id` int(11) NOT NULL,
  `about_title` varchar(100) NOT NULL,
  `about_description` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `aboutpage`
--

INSERT INTO `aboutpage` (`about_Id`, `about_title`, `about_description`) VALUES
(1, 'ABOUT TİTLE', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel euismod erat. Sed dapibus neque et augue condimentum, sit amet viverra metus facilisis. Sed vel nisl et sapien malesuada commodo. Fusce id neque velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut non ante at ipsum aliquet semper. Integer tincidunt sollicitudin porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lorem justo, dignissim eget turpis non, varius porta ante. Integer sit amet dictum arcu. Sed est mauris, ullamcorper id risus venenatis, bibendum sodales velit. Fusce porta, metus sit amet rutrum interdum, ante mi tristique nulla, id dictum ex diam et magna. Aliquam id scelerisque urna. Quisque faucibus enim ut mi feugiat, eu pellentesque lectus consequat.\r\n\r\nCras quis sapien justo. Cras pharetra felis et est rhoncus, id feugiat mi condimentum. Vestibulum dui nisi, convallis vel ex sit amet, blandit consectetur ligula. Ut interdum ultrices odio ut rhoncus. Proin sed sodales orci. Curabitur venenatis ullamcorper condimentum. Morbi gravida mi eu ligula laoreet faucibus. Donec diam neque, venenatis sed mi vel, porta faucibus dolor. Nam ac blandit quam. Mauris sagittis lobortis turpis ut pharetra. Mauris sagittis, lectus dignissim tincidunt ornare, lorem augue sodales eros, non viverra tellus tortor ac libero.');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `category`
--

CREATE TABLE `category` (
  `category_Id` int(200) NOT NULL,
  `categoryName` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `category`
--

INSERT INTO `category` (`category_Id`, `categoryName`) VALUES
(81, 'Black Nike'),
(82, 'White Nike'),
(83, 'Pink Nike'),
(84, 'aa');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `contactpage`
--

CREATE TABLE `contactpage` (
  `contactId` int(11) NOT NULL,
  `mapLink` varchar(10000) NOT NULL,
  `adress` varchar(111) NOT NULL,
  `telephone` varchar(111) NOT NULL,
  `mail` varchar(111) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `contactpage`
--

INSERT INTO `contactpage` (`contactId`, `mapLink`, `adress`, `telephone`, `mail`) VALUES
(1, 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12035.61307426967!2d29.0302485!3d41.0492444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x610428581d04560e!2zT3J0YWvDtnksIEJvxJ9hemnDp2kgS8O2cHLDvHPDvCwgMzQzNDcgQmXFn2lrdGHFny_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1625147572179!5m2!1str!2str', 'İstanbul Mah.İstanbul Cad.No:34 Kat:4 İstanbul - İstanbul', '0534 334 34 34', 'ozkan.ttr1@gmail.com');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `product`
--

CREATE TABLE `product` (
  `productId` int(200) NOT NULL,
  `productName` varchar(1000) NOT NULL,
  `categoryId` int(200) NOT NULL,
  `sizeId` int(200) NOT NULL,
  `productStock` int(200) NOT NULL,
  `productPrice` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `image` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `product`
--

INSERT INTO `product` (`productId`, `productName`, `categoryId`, `sizeId`, `productStock`, `productPrice`, `description`, `image`) VALUES
(26, 'Black Nike T-Shirt', 81, 6, 25, '100', 'Etiam sem nisl, placerat in vehicula id, euismod ullamcorper leo. Quisque vitae felis et ex eleifend convallis. In hac habitasse platea dictumst. Donec sapien odio, fringilla eget augue id, convallis rutrum felis. Suspendisse tristique id velit at venenatis. Cras eu tempor neque. Duis efficitur dui ac sem egestas, a dapibus justo ullamcorper. Aliquam iaculis bibendum rutrum. Ut non arcu ligula. Nunc volutpat ex eget libero luctus, in egestas massa pretium. Integer iaculis ipsum in nisi efficitur, sed semper ante molestie. Vestibulum cursus consequat auctor. Quisque iaculis orci at facilisis tristique. Proin tincidunt ligula ut magna feugiat semper. Ut maximus vel purus ut elementum.', 'cruequrvf0y6wscryq3i'),
(27, 'White Nike T-Shirt', 82, 7, 25, '100', 'Fusce leo arcu, semper ut erat eu, pulvinar efficitur velit. Maecenas feugiat nisi id faucibus sagittis. Suspendisse sollicitudin luctus orci, a porta erat tempor vel. Aliquam egestas felis lectus, et porttitor leo viverra vitae. Nullam id diam et dolor condimentum consectetur et et ex. Pellentesque scelerisque sapien ex, fringilla vehicula mi vestibulum non. Sed est nibh, fringilla ut tincidunt ut, mattis sed augue. Praesent in viverra leo. Proin porta felis varius, aliquam sem eu, vestibulum diam. Pellentesque laoreet nulla mi. Donec eu arcu augue. In tellus turpis, gravida ac accumsan in, porta sit amet orci. Ut tincidunt nibh eget imperdiet tempus. Integer eu sodales nunc, non lacinia ex. Mauris nec lacinia elit.', 'akzbjgneh31rfrz0hisj'),
(28, 'Pink Nike T-Shirt', 83, 8, 44, '120', 'Fusce leo arcu, semper ut erat eu, pulvinar efficitur velit. Maecenas feugiat nisi id faucibus sagittis. Suspendisse sollicitudin luctus orci, a porta erat tempor vel. Aliquam egestas felis lectus, et porttitor leo viverra vitae. Nullam id diam et dolor condimentum consectetur et et ex. Pellentesque scelerisque sapien ex, fringilla vehicula mi vestibulum non. Sed est nibh, fringilla ut tincidunt ut, mattis sed augue. Praesent in viverra leo. Proin porta felis varius, aliquam sem eu, vestibulum diam. Pellentesque laoreet nulla mi. Donec eu arcu augue. In tellus turpis, gravida ac accumsan in, porta sit amet orci. Ut tincidunt nibh eget imperdiet tempus. Integer eu sodales nunc, non lacinia ex. Mauris nec lacinia elit.', 'avqri7kbfvo7adnxvre7'),
(29, 'Black Nike T-Shirt', 81, 9, 12, '123', 'Etiam sem nisl, placerat in vehicula id, euismod ullamcorper leo. Quisque vitae felis et ex eleifend convallis. In hac habitasse platea dictumst. Donec sapien odio, fringilla eget augue id, convallis rutrum felis. Suspendisse tristique id velit at venenatis. Cras eu tempor neque. Duis efficitur dui ac sem egestas, a dapibus justo ullamcorper. Aliquam iaculis bibendum rutrum. Ut non arcu ligula. Nunc volutpat ex eget libero luctus, in egestas massa pretium. Integer iaculis ipsum in nisi efficitur, sed semper ante molestie. Vestibulum cursus consequat auctor. Quisque iaculis orci at facilisis tristique. Proin tincidunt ligula ut magna feugiat semper. Ut maximus vel purus ut elementum.', 'ug31mub4w4rdvpec7tzx'),
(30, 'White Nike T-Shirt', 82, 6, 23, '344', 'Etiam sem nisl, placerat in vehicula id, euismod ullamcorper leo. Quisque vitae felis et ex eleifend convallis. In hac habitasse platea dictumst. Donec sapien odio, fringilla eget augue id, convallis rutrum felis. Suspendisse tristique id velit at venenatis. Cras eu tempor neque. Duis efficitur dui ac sem egestas, a dapibus', 'bh0wpnhbc9nljghdxh0l'),
(31, 'Pink Nike T-Shirt', 83, 7, 55, '555', 'Etiam sem nisl, placerat in vehicula id, euismod ullamcorper leo. Quisque vitae felis et ex eleifend convallis. In hac habitasse platea dictumst. Donec sapien odio, fringilla eget augue id, convallis rutrum felis. Suspendisse tristique id velit at venenatis. Cras eu tempor neque. Duis efficitur dui ac sem egestas, a dapibus justo ullamcorper. Aliquam iaculis bibendum rutrum. Ut non arcu ligula. Nunc volutpat ex eget libero luctus, in egestas massa pretium. Integer iaculis ipsum in nisi efficitur, sed semper ante molestie. Vestibulum cursus consequat auctor. Quisque iaculis orci at facilisis tristique. Proin tincidunt ligula ut magna feugiat semper. Ut maximus vel purus ut elementum.', 'kgeprcye4o8u1sipzdty'),
(32, 'Black Nike T-Shirt', 81, 9, 233, '233', 'Etiam sem nisl, placerat in vehicula id, euismod ullamcorper leo. Quisque vitae felis et ex eleifend convallis. In hac habitasse platea dictumst. Donec sapien odio, fringilla eget augue id, convallis rutrum felis. Suspendisse tristique id velit at venenatis. Cras eu tempor neque. Duis efficitur dui ac sem egestas, a dapibus justo ullamcorper. Aliquam iaculis bibendum rutrum. Ut non arcu ligula. Nunc volutpat ex eget libero luctus, in egestas massa pretium. Integer iaculis ipsum in nisi efficitur, sed semper ante molestie. Vestibulum cursus consequat auctor. Quisque iaculis orci at facilisis tristique. Proin tincidunt ligula ut magna feugiat semper. Ut maximus vel purus ut elementum.', 'azsvortwumsfvvcyrcnj');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `size`
--

CREATE TABLE `size` (
  `size_Id` int(200) NOT NULL,
  `sizeName` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `size`
--

INSERT INTO `size` (`size_Id`, `sizeName`) VALUES
(6, 'Small'),
(7, 'Medium'),
(8, 'Large'),
(9, 'X-Large');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `users`
--

CREATE TABLE `users` (
  `user_Id` int(100) NOT NULL,
  `username` varchar(10000) NOT NULL,
  `password` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `users`
--

INSERT INTO `users` (`user_Id`, `username`, `password`) VALUES
(1, 'admin', 'admin');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `aboutpage`
--
ALTER TABLE `aboutpage`
  ADD PRIMARY KEY (`about_Id`);

--
-- Tablo için indeksler `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_Id`);

--
-- Tablo için indeksler `contactpage`
--
ALTER TABLE `contactpage`
  ADD PRIMARY KEY (`contactId`);

--
-- Tablo için indeksler `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productId`),
  ADD KEY `categoryId` (`categoryId`,`sizeId`),
  ADD KEY `sizeId` (`sizeId`);

--
-- Tablo için indeksler `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`size_Id`);

--
-- Tablo için indeksler `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_Id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `aboutpage`
--
ALTER TABLE `aboutpage`
  MODIFY `about_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tablo için AUTO_INCREMENT değeri `category`
--
ALTER TABLE `category`
  MODIFY `category_Id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- Tablo için AUTO_INCREMENT değeri `contactpage`
--
ALTER TABLE `contactpage`
  MODIFY `contactId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tablo için AUTO_INCREMENT değeri `product`
--
ALTER TABLE `product`
  MODIFY `productId` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Tablo için AUTO_INCREMENT değeri `size`
--
ALTER TABLE `size`
  MODIFY `size_Id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Tablo için AUTO_INCREMENT değeri `users`
--
ALTER TABLE `users`
  MODIFY `user_Id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Dökümü yapılmış tablolar için kısıtlamalar
--

--
-- Tablo kısıtlamaları `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `category` (`category_Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`sizeId`) REFERENCES `size` (`size_Id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
