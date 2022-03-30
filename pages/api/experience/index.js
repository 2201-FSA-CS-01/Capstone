import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';
import { useAppContext } from '../../../components/context/state.js';

const prisma = new PrismaClient();
console.log(prisma);

export default async (req, res) => {
  const myContext = useAppContext();
  const session = await getSession({ req });

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const mentalXP = req.body;

  const currentXP = await prisma.user.update({
    where: {
      email: session.user.email,
    },
    data: {
      xp: myContext.mentalValue,
    },
  });
  res.json(currentXP);
};
