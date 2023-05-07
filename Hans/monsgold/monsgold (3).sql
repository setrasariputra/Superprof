-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 07 Bulan Mei 2023 pada 19.08
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `monsgold`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_grup`
--

CREATE TABLE `tbl_grup` (
  `id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `grup_name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_grup`
--

INSERT INTO `tbl_grup` (`id`, `product_id`, `grup_name`, `created_at`) VALUES
(1, 1, 'Kubu \nWOTLK Kanan', '2023-04-01 09:50:43'),
(2, 1, 'Kubu \nWOTLK Kiri', '2023-04-01 09:50:51'),
(3, 2, 'Kubu \r\nDragon Fly Kanan', '2023-04-01 09:50:51'),
(4, 2, 'Kubu \r\nDragon Fly Kiri', '2023-04-01 09:50:51');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_messages`
--

CREATE TABLE `tbl_messages` (
  `id` bigint(20) NOT NULL,
  `from_user_id` bigint(20) NOT NULL,
  `destination_user_id` bigint(20) NOT NULL,
  `message` text NOT NULL,
  `view` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_messages`
--

INSERT INTO `tbl_messages` (`id`, `from_user_id`, `destination_user_id`, `message`, `view`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 2, 'Gold sudah dikirim', 1, '2023-03-30 08:17:43', NULL, NULL),
(2, 1, 2, 'pembyaran sudah diterima', 0, '2023-03-30 07:46:42', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_orders`
--

CREATE TABLE `tbl_orders` (
  `id` bigint(20) NOT NULL,
  `order_number` varchar(255) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `product` varchar(255) NOT NULL,
  `server` varchar(255) NOT NULL,
  `kubu` varchar(255) NOT NULL,
  `status` enum('request order','pembayaran diterima','barang dikirim') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_price`
--

CREATE TABLE `tbl_price` (
  `id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `server_id` bigint(20) NOT NULL,
  `grup_id` bigint(20) NOT NULL,
  `price` bigint(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_price`
--

INSERT INTO `tbl_price` (`id`, `product_id`, `server_id`, `grup_id`, `price`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 1, 1, 25000, '2023-04-06 06:29:48', NULL, NULL),
(2, 1, 2, 1, 30000, '2023-04-06 06:30:32', NULL, NULL),
(3, 1, 1, 2, 19000, '2023-04-06 06:30:35', NULL, NULL),
(4, 1, 2, 2, 19000, '2023-04-06 06:30:35', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_product`
--

CREATE TABLE `tbl_product` (
  `id` bigint(20) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_product`
--

INSERT INTO `tbl_product` (`id`, `product_name`, `created_at`) VALUES
(1, 'WOTLK', '2023-04-01 09:43:35'),
(2, 'Dragon Fly', '2023-04-01 09:43:46');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_profilepict`
--

CREATE TABLE `tbl_profilepict` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `file_size` bigint(20) NOT NULL,
  `file_type` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_profilepict`
--

INSERT INTO `tbl_profilepict` (`id`, `user_id`, `file_name`, `file_size`, `file_type`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, '1679899677-Aplikasi_Teknologi_Finansial_dapat_Mengurangi_Pengangguran_di_Indonesia.jpeg', 65448, 'image/jpeg', '2023-03-27 06:47:57', NULL, NULL),
(2, 2, '1680161833-Apakah_BPJS_Ketenagakerjaan_Bisa_dilanjutkan_di_Kantor_Baru.png', 41215, 'image/png', '2023-03-30 07:37:13', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_server`
--

CREATE TABLE `tbl_server` (
  `id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `server_name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_server`
--

INSERT INTO `tbl_server` (`id`, `product_id`, `server_name`, `created_at`) VALUES
(1, 1, 'Server WOTLK 01', '2023-04-01 09:45:44'),
(2, 1, 'Server WOTLK 02', '2023-04-01 09:45:44'),
(3, 2, 'Server Dragon Fly 01', '2023-04-01 09:45:44'),
(4, 2, 'Server Dragon Fly 02', '2023-04-01 09:45:44');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `email`, `password`, `fullname`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'setrasariputra@gmail.com', '25f9e794323b453885f5181f1b624d0b', 'Wisnu Kuncoro', '2023-04-01 09:23:52', NULL, NULL),
(2, 'hans@gmail.com', '25f9e794323b453885f5181f1b624d0b', 'Hans Nugroho', '2023-04-01 09:24:10', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tbl_grup`
--
ALTER TABLE `tbl_grup`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tbl_messages`
--
ALTER TABLE `tbl_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tbl_orders`
--
ALTER TABLE `tbl_orders`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tbl_price`
--
ALTER TABLE `tbl_price`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tbl_profilepict`
--
ALTER TABLE `tbl_profilepict`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tbl_server`
--
ALTER TABLE `tbl_server`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tbl_grup`
--
ALTER TABLE `tbl_grup`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `tbl_messages`
--
ALTER TABLE `tbl_messages`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `tbl_orders`
--
ALTER TABLE `tbl_orders`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `tbl_price`
--
ALTER TABLE `tbl_price`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `tbl_product`
--
ALTER TABLE `tbl_product`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `tbl_profilepict`
--
ALTER TABLE `tbl_profilepict`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `tbl_server`
--
ALTER TABLE `tbl_server`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
