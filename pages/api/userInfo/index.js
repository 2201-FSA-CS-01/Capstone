import { getSession } from 'next-auth/react';
import prisma from '../../../utils/prisma';


export default async function handler(req, res) {
  const session = await getSession({ req });
  if (session) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });
      console.log(user);
      res.send(user)

    } catch (err) {

      console.log(err);
    }
  }
}
