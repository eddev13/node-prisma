import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { prisma } from "../libs/prisma";
import { Prisma } from "@prisma/client";

export const createUser = async (data: Prisma.UserCreateInput) => {
  try {
    return await prisma.user.create({ data });
  } catch (error) {
    // if (error instanceof PrismaClientKnownRequestError) {
    // }
    return false;
  }
};
