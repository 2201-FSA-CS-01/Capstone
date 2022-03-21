import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const taskData = [
  {
    catagory_name: "mental",
    name: "get a full night rest (6-8 hours)",
  },
  {
    catagory_name: "mental",
    name: "5 minutes of meditation",
  },
  {
    catagory_name: "mental",
    name: "perform 1 act of random kindness",
  },
  {
    catagory_name: "mental",
    name: "read for 15 minutes",
  },
  {
    catagory_name: "mental",
    name: "journal your thoughts",
  },
  {
    catagory_name: "mental",
    name: "create something (art, food, music, ect...)",
  },
  {
    catagory_name: "mental",
    name: "laugh",
  },
  {
    catagory_name: "mental",
    name: "take a break from social media",
  },
  {
    catagory_name: "mental",
    name: "practice 2 minutes of controlled breathing",
  },
  {
    catagory_name: "mental",
    name: "enjoy simple pleasures (fresh towel, iced beverage)",
  },
  {
    catagory_name: "mental",
    name: "foster gratitude: list 3 things you are grateful for",
  },
  {
    catagory_name: "mental",
    name: "learn something new",
  },
  {
    catagory_name: "emotional",
    name: "spend time with a friend",
  },
  {
    catagory_name: "emotional",
    name: "practice forgiveness",
  },
  {
    catagory_name: "emotional",
    name: "express gratitude: thank a stranger",
  },
  {
    catagory_name: "emotional",
    name: "connect with a friend",
  },
  {
    catagory_name: "emotional",
    name: "write a thank you note",
  },
  {
    catagory_name: "emotional",
    name: "2 minutes of controlled breathing",
  },
  {
    catagory_name: "emotional",
    name: "clean a disorganized space",
  },
  {
    catagory_name: "emotional",
    name: "list 5 specific things you would like to improve",
  },
  {
    catagory_name: "emotional",
    name: "share a happy memory",
  },
  {
    catagory_name: "emotional",
    name: "list 1 thing you love about 5 different people",
  },
  {
    catagory_name: "emotional",
    name: "smile at people you pass on the street",
  },
  {
    catagory_name: "emotional",
    name: "gift something you are no longer using",
  },
  {
    catagory_name: "physical",
    name: "15 minutes of yoga",
  },
  {
    catagory_name: "physical",
    name: "5 pushups",
  },
  {
    catagory_name: "physical",
    name: "10 minute walk",
  },
  {
    catagory_name: "physical",
    name: "10 crunches",
  },
  {
    catagory_name: "physical",
    name: "15 jumping jacks",
  },
  {
    catagory_name: "physical",
    name: "1 minute plank",
  },
  {
    catagory_name: "physical",
    name: "skip unhealthy vice",
  },
  {
    catagory_name: "physical",
    name: "prepare a healthy meal",
  },
  {
    catagory_name: "physical",
    name: "eat a healthy snack",
  },
  {
    catagory_name: "physical",
    name: "drink 1 glass of water",
  },
  {
    catagory_name: "physical",
    name: "stretch",
  },
  {
    catagory_name: "physical",
    name: "take a daily vitamin",
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
