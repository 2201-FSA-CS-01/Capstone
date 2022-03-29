import { getSession } from "next-auth/react";
import prisma from "../../../utils/prisma";
export default async function handler(req, res) {
  const session = await getSession({ req });
  try {
    if (req.method === "GET") {
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
}
