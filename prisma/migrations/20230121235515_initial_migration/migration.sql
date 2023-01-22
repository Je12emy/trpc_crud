-- CreateEnum
CREATE TYPE "BoodType" AS ENUM ('A', 'B', 'AB', 'O');

-- CreateTable
CREATE TABLE "Patient" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "bloodType" "BoodType" NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);
