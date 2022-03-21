import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const taskData = [];

async function main() {
  console.log("Start seeding ...");
  for (const u of taskData) {
    const task = await prisma.task.create({
      data: u,
    });
    console.log(`Created task with id:${task.id}`);
  }
  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
