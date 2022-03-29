const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const taskData = [
  {
    catagory_name: "mental",
    name: "Full night rest",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "Meditate",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "1 act of kindness",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "Read: 15 minutes",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "Journal thoughts",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "Create something",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "Laugh",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "Social media break",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "Deap breathing",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "Enjoy simple pleasure",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "be grateful",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "Learn something",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "Time with a friend",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "Forgiveness",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "Thank a stranger",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "Contact a friend",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "Thank someone",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "Deap breathing",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "Clean a space",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "set a goal",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "reminisce",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "List what you love",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "Smile at strangers",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "Donate something",
    value: 1,
  },
  {
    catagory_name: "physical",
    name: "Yoga: 15 minutes",
    value: 1,
  },
  {
    catagory_name: "physical",
    name: "5 pushups",
    value: 1,
  },
  {
    catagory_name: "physical",
    name: "10 minute walk",
    value: 1,
  },
  {
    catagory_name: "physical",
    name: "10 crunches",
    value: 1,
  },
  {
    catagory_name: "physical",
    name: "15 jumping jacks",
    value: 1,
  },
  {
    catagory_name: "physical",
    name: "1 minute plank",
    value: 1,
  },
  {
    catagory_name: "physical",
    name: "skip a bad habbit",
    value: 1,
  },
  {
    catagory_name: "physical",
    name: "prepare a good meal",
    value: 1,
  },
  {
    catagory_name: "physical",
    name: "eat healthy snack",
    value: 1,
  },
  {
    catagory_name: "physical",
    name: "drink water",
    value: 1,
  },
  {
    catagory_name: "physical",
    name: "stretch",
    value: 1,
  },
  {
    catagory_name: "physical",
    name: "take daily vitamin",
    value: 1,
  },
];

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
