import { getSession } from "next-auth/react";
import prisma from "../../../utils/prisma";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (req.method === "POST") {
    if (session) {
      const { goals } = JSON.parse(req.body);
      const response = [];

      async function main() {
        for (const u of goals) {
          const task = await prisma.task.findUnique({
            where: {
              id: u,
            },
          });
          response.push(task);
        }
      }

      main()
        .catch((e) => {
          console.error(e);
        })
        .finally(console.log(response));
    }
  }
}
