# WO Backend


## tables

CREATE TABLE IF NOT EXISTS devices (
    `deviceId` int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `deviceAPIKey` varchar(100) NOT NULL,
    `deviceType` varchar(20) NOT NULL COMMENT 'unset: no registration has been completed\r\nrestricted: the device has been suspend\r\nleasing: leased device\r\nfree: freely usable device',
    `activationCode` varchar(30) NOT NULL,
    `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
)

CREATE TABLE IF NOT EXISTS devicesTypes (
    `deviceId` int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `type` varchar(20) NOT NULL,
    `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
    `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
)
INSERT INTO devicesTypes (type) VALUES ("unset"), ("restricted"), ("leasing"), ("free")

CREATE TABLE IF NOT EXISTS leasingPeriods (
    `leasingConstructionId` int(11) UNSIGNED PRIMARY KEY,
    `leasingConstructionMaximumTraining` int(20) NOT NULL DEFAULT 0,
    `leasingConstructionMaximumDate` timestamp NOT NULL DEFAULT current_timestamp()
)

CREATE TABLE IF NOT EXISTS deviceOwnerDetails (
    `id` int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `billing_name` varchar(200) NOT NULL DEFAULT,
    `address_country` varchar(100) NOT NULL DEFAULT,
    `address_zip` varchar(5) NOT NULL DEFAULT,
    `address_city` varchar(50) NOT NULL DEFAULT,
    `address_street` varchar(100) NOT NULL DEFAULT,
    `vat_number` varchar(20) NOT NULL DEFAULT
)

CREATE TABLE IF NOT EXISTS deviceOwnerDetails (
  `id` int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `billing_name` varchar(200) NOT NULL,
  `address_country` varchar(100) NOT NULL,
  `address_zip` varchar(5) NOT NULL,
  `address_city` varchar(50) NOT NULL,
  `address_street` varchar(100) NOT NULL,
  `vat_number` varchar(20) NOT NULL
)

