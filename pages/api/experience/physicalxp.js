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
      res.send(user.physicalxp);
    }
  } catch (err) {
    console.log(err);
  }

  if (req.method === 'PUT') {
    try {
      if (session.user.email) {
        const { physicalxp } = await prisma.user.findUnique({
          where: { email: session.user.email },
        });
        if (physicalxp < 100) {
          const updatePhysicalXp = await prisma.user.update({
            where: { email: session.user.email },
            data: {
              physicalxp: {
                increment: 20,
              },
            },
          });
          res.status(200).send(updatePhysicalXp);
        }
        res.end();
      }
    } catch (err) {
      console.log(err);
    }
  }
}
