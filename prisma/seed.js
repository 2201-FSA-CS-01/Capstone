const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const taskData = [
  {
    catagory_name: 'mental',
    name: 'Full night rest',
    value: 1,
  },
  {
    catagory_name: 'mental',
    name: '5 minutes: meditation',
    value: 1,
  },
  {
    catagory_name: 'mental',
    name: '1 act of random kindness',
    value: 1,
  },
  {
    catagory_name: 'mental',
    name: 'Read: 15 minutes',
    value: 1,
  },
  {
    catagory_name: 'mental',
    name: 'Journal thoughts',
    value: 1,
  },
  {
    catagory_name: 'mental',
    name: 'Create something',
    value: 1,
  },
  {
    catagory_name: 'mental',
    name: 'Laugh',
    value: 1,
  },
  {
    catagory_name: 'mental',
    name: 'Social media: break',
    value: 1,
  },
  {
    catagory_name: 'mental',
    name: 'Controlled breathing',
    value: 1,
  },
  {
    catagory_name: 'mental',
    name: 'Enjoy simple pleasures',
    value: 1,
  },
  {
    catagory_name: 'mental',
    name: '3 things you are grateful for',
    value: 1,
  },
  {
    catagory_name: 'mental',
    name: 'Learn something new',
    value: 1,
  },
  {
    catagory_name: 'emotional',
    name: 'Spend time with friend',
    value: 1,
  },
  {
    catagory_name: 'emotional',
    name: 'Practice forgiveness',
    value: 1,
  },
  {
    catagory_name: 'emotional',
    name: 'Thank a stranger',
    value: 1,
  },
  {
    catagory_name: 'emotional',
    name: 'Connect with friend',
    value: 1,
  },
  {
    catagory_name: 'emotional',
    name: 'Write thank you note',
    value: 1,
  },
  {
    catagory_name: 'emotional',
    name: 'Controlled breathing',
    value: 1,
  },
  {
    catagory_name: 'emotional',
    name: 'Clean disorganized space',
    value: 1,
  },
  {
    catagory_name: 'emotional',
    name: '5 things to improve',
    value: 1,
  },
  {
    catagory_name: 'emotional',
    name: 'share a happy memory',
    value: 1,
  },
  {
    catagory_name: 'emotional',
    name: 'List what you love',
    value: 1,
  },
  {
    catagory_name: 'emotional',
    name: 'Smile at strangers',
    value: 1,
  },
  {
    catagory_name: 'emotional',
    name: 'Donate unused item',
    value: 1,
  },
  {
    catagory_name: 'physical',
    name: 'Yoga: 15 minutes',
    value: 1,
  },
  {
    catagory_name: 'physical',
    name: '5 pushups',
    value: 1,
  },
  {
    catagory_name: 'physical',
    name: '10 minute walk',
    value: 1,
  },
  {
    catagory_name: 'physical',
    name: '10 crunches',
    value: 1,
  },
  {
    catagory_name: 'physical',
    name: '15 jumping jacks',
    value: 1,
  },
  {
    catagory_name: 'physical',
    name: '1 minute plank',
    value: 1,
  },
  {
    catagory_name: 'physical',
    name: 'skip unhealthy vice',
    value: 1,
  },
  {
    catagory_name: 'physical',
    name: 'prepare healthy meal',
    value: 1,
  },
  {
    catagory_name: 'physical',
    name: 'eat healthy snack',
    value: 1,
  },
  {
    catagory_name: 'physical',
    name: 'drink glass of water',
    value: 1,
  },
  {
    catagory_name: 'physical',
    name: 'stretch',
    value: 1,
  },
  {
    catagory_name: 'physical',
    name: 'take daily vitamin',
    value: 1,
  },
];

async function main() {
  console.log('Start seeding ...');
  for (const u of taskData) {
    const task = await prisma.task.create({
      data: u,
    });
    console.log(`Created task with id:${task.id}`);
  }
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
