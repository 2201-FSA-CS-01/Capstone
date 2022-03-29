// import { getSession } from 'next-auth/react';
// import prisma from '../../../utils/prisma';

// export default async function handler(req, res) {
//   const session = await getSession({ req });
//   try {
//     if (req.method === 'GET') {
//       const user = await prisma.user.findUnique({
//         where: {
//           email: session.user.email,
//         },
//       });
//       console.log(user);
//       res.send(user.mentalxp);
//     }
//   } catch (err) {
//     console.log(err);
//   }
//   if (req.method === 'PUT') {
//     try {
//       const { mentalValue } = req.body;
//       console.log(req.body);
//       if (session.user.email) {
//         const userTask = await prisma.userTask.upsert({
//           where: {
//             user_email: session.user.email,
//           },
//           update: {
//             completedAt: new Date(),
//             completed: true,
//           },
//           create: {
//             user_email: session.user.email,
//             task_id: req.body.id,
//           },
//         });

//         // const user = await prisma.user.update({
//         //   where: {
//         //     email: session.user.email,
//         //   },
//         //   data: {
//         //     mentalxp: mentalValue,
//         //   },
//         // });
//         // res.status(200).send(user, userTask);
//       }
//       res.status(200);
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }
