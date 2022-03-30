import { getSession } from 'next-auth/react';
import prisma from '../../../utils/prisma';

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (session) {
    if (req.method === 'PUT') {
      try {
        if (session.user.email) {
          const user = await prisma.user.update({
            where: { email: session.user.email },
            data: {
              mentalxp: 20,
              physicalxp: 20,
              emotionalxp: 20,
            },
          });
          res.status(200).send(user);
        }
        res.end();
      } catch (err) {
        console.log(err);
      }
    }
  }
}
