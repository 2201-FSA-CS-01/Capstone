import { getSession } from 'next-auth/react';
import prisma from '../../../utils/prisma';
export default async function handler(req, res) {
  const session = await getSession({ req });
  try {
    if (req.method === 'GET') {
      const user = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });
      console.log(user);
      res.send(user.emotionalxp);
    }
  } catch (err) {
    console.log(err);
  }
  if (req.method === 'PUT') {
    try {
      if (session.user.email) {
        const { emotionalxp } = await prisma.user.findUnique({
          where: { email: session.user.email },
        });
        if (emotionalxp < 100) {
          const updateEmotionalXp = await prisma.user.update({
            where: { email: session.user.email },
            data: {
              emotionalxp: {
                increment: 20,
              },
            },
          });
          res.status(200).send(updateEmotionalXp);
        }
        res.end();
      }
    } catch (err) {
      console.log(err);
    }
  }
}
