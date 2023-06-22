/*
  Warnings:

  - You are about to drop the column `userId` on the `game` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `game` DROP FOREIGN KEY `Game_userId_fkey`;

-- AlterTable
ALTER TABLE `game` DROP COLUMN `userId`;
