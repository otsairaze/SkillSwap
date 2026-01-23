/*
  Warnings:

  - Added the required column `status` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `level` on the `UserSkill` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "SkillLevel" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- CreateEnum
CREATE TYPE "SkillStatus" AS ENUM ('PENDING', 'SUCCESS', 'ERROR');

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "status" "SkillStatus" NOT NULL;

-- AlterTable
ALTER TABLE "UserSkill" DROP COLUMN "level",
ADD COLUMN     "level" "SkillLevel" NOT NULL;

-- DropEnum
DROP TYPE "SKillLevel";
