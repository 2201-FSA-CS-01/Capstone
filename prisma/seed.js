import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const taskData = [
  {
    catagory_name: "mental",
    name: "get a full night rest (6-8 hours)",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "5 minutes of meditation",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "perform 1 act of random kindness",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "read for 15 minutes",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "journal your thoughts",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "create something (art, food, music, ect...)",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "laugh",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "take a break from social media",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "practice 2 minutes of controlled breathing",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "enjoy simple pleasures (fresh towel, iced beverage)",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "foster gratitude: list 3 things you are grateful for",
    value: 1,
  },
  {
    catagory_name: "mental",
    name: "learn something new",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "spend time with a friend",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "practice forgiveness",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "express gratitude: thank a stranger",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "connect with a friend",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "write a thank you note",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "2 minutes of controlled breathing",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "clean a disorganized space",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "list 5 specific things you would like to improve",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "share a happy memory",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "list 1 thing you love about 5 different people",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "smile at people you pass on the street",
    value: 1,
  },
  {
    catagory_name: "emotional",
    name: "gift something you are no longer using",
    value: 1,
  },
  {
    catagory_name: "physical",
    name: "15 minutes of yoga",
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
    name: "skip unhealthy vice",
    value: 1,
  },
  {
    catagory_name: "physical",
    name: "prepare a healthy meal",
    value: 1,
  },
  {
    catagory_name: "physical",
    name: "eat a healthy snack",
    value: 1,
  },
  {
    catagory_name: "physical",
    name: "drink 1 glass of water",
    value: 1,
  },
  {
    catagory_name: "physical",
    name: "stretch",
    value: 1,
  },
  {
    catagory_name: "physical",
    name: "take a daily vitamin",
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
