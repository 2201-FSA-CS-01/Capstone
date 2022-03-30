import { getSession } from 'next-auth/react';
import prisma from '../../../utils/prisma';

export default async function handler(req, res) {
  const session = await getSession({ req });
  const { email } = session.user;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    const decrease = user.mentalxp - 5;

    const updateUser = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        mentalxp: decrease,
      },
    });

    res.status(200);
  } catch (err) {
    console.log(err);
  }
}
