'use server';
import prisma from '../../lib/prisma';

export async function getUsers() {
  return await prisma.user.findMany();
}

export async function addUser(name, email) {
  try {
    return await prisma.user.create({
      data: { name, email },
    });
  } catch (error) {
    throw new Error('User with this email already exists');
  }
}

export async function deleteUser(userId) {
  try {
    await prisma.user.delete({
      where: { id: parseInt(userId) },
    });
  } catch (error) {
    throw new Error('Unable to delete user');
  }
}
