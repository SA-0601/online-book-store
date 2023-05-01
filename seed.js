require('dotenv').config();
require("./config/database");

const Category = require('./models/category');
const Book = require('./models/book');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Children', sortOrder: 10},
    {name: 'Fantasy', sortOrder: 20},
    {name: 'Mystery', sortOrder: 30},
    {name: 'Horror', sortOrder: 40},
    {name: 'Science', sortOrder: 50},
    {name: 'History', sortOrder: 60},
    {name: 'Exercise', sortOrder: 70},
  ]);

  await Book.deleteMany({});
  const books = await Book.create([
    {name: 'Good Night Moon',author: 'Margaret Wise Brown', image: 'https://i.postimg.cc/8PNGYCjc/Goodnightmoon.jpg', category: categories[0], year: 1990, price: 3.95},
    {name: 'The snail and the whale',author: 'Julia Donaldson', image: 'https://i.postimg.cc/sXbY28GH/snailnwhale.jpg', category: categories[0], year: 2013, price: 5.50},
    {name: 'Fox in Socks',author: 'Dr. Suess', image: 'https://i.postimg.cc/k51DJbRT/foxinsocks.jpg', category: categories[0], year: 1990, price: 5.95},
    {name: 'How do dinosaurs say goodnight?',author: 'Jane Yolen', image: 'https://i.postimg.cc/X7GqVqn8/dinosaurs.jpg', category: categories[0], year: 2000, price: 4.95},
    {name: `Harry Potter and the Sorcerer's Stone`,author: 'J. K. Rowling', image: 'https://i.postimg.cc/D0fCqRwv/harrypotter.jpg', category: categories[1], year: 2008, price: 7.95},
    {name: 'The lost princess of Oz',author: 'L. Frank Baum', image: 'https://i.postimg.cc/rmjjFgCv/lostprincess.jpg', category: categories[1], year: 1993, price: 5.95},
    {name: 'Hansel and Gretel',author: 'Brothers Grimm', image: 'https://i.postimg.cc/Qt3YMFLW/hanselngretal.jpg', category: categories[1], year: 1990, price: 3.95},
    {name: 'The Complete Chronicles of Narnia',author: 'C. S. Lewis', image: 'https://i.postimg.cc/SsgLpRm4/narnia.jpg', category: categories[1], year: 2000, price: 3.95},
    {name: 'Five on a Treasure Island',author: 'Enid Blyton', image: 'https://i.postimg.cc/R0DV5x28/famousfive.jpg', category: categories[2], year: 2009, price: 4.50},
    {name: 'Moon Spinners',author: 'R. L. Stine', image: 'https://i.postimg.cc/fRdv0Mf7/moonspinners.jpg', category: categories[2], year: 1993, price: 3.95},
    {name: `Let's get invisible!`,author: 'Margaret Wise Brown', image: 'https://i.postimg.cc/DzbR0V8R/goosebumps.jpg', category: categories[2], year: 1990, price: 3.95},
    {name: `Detection unlimited`,author: 'Georgette Heyer', image: 'https://i.postimg.cc/qRJg0G7h/detection.jpg', category: categories[2], year: 1993, price: 4.30},
    {name: `Thinner`,author: 'Stephen King', image: 'https://i.postimg.cc/RFt3g0qG/thinner.jpg', category: categories[3], year: 1991, price: 3.95},
    {name: `The Dark Half`,author: 'Stephen King', image: 'https://i.postimg.cc/mg9PSDqD/darkhalf.jpg', category: categories[3], year: 1989, price: 3.95},
    {name: 'The day of the triffids',author: 'John Wyndham', image: 'https://i.postimg.cc/TY0K7FY8/triffids.jpg', category: categories[3], year: 2003, price: 4.50},
    {name: 'The Lake House',author: 'James Patterson', image: 'https://i.postimg.cc/Wb3WtRyS/lakehouse.jpg', category: categories[4], year: 2005, price: 4.50},
    {name: `Selected stories`,author: 'H.G. Wells', image: 'https://i.postimg.cc/dQnNqQ5L/hgwells.jpg', category: categories[4], year: 2004, price: 3.95},
    {name: 'Star Wars: Heir to the Empire',author: 'Timothy Zahn', image: 'https://i.postimg.cc/7hg2ZLkb/starwars.jpg', category: categories[4], year: 1991, price: 4.95},
    {name: 'The ancient world',author: 'D. Brendan Nagle', image: 'https://i.postimg.cc/2yjWcDWt/ancientworld.jpg', category: categories[5], year: 1999, price: 3.95},
    {name: 'Rome and Romans (Time Traveler Series)',author: 'Heather Amery', image: 'https://i.postimg.cc/LX5YLTMd/romeromans.jpg', category: categories[5], year: 1998, price: 3.95},
    {name: 'Pyramids (Topic Books)',author: 'Fiona MacDonald', image: 'https://i.postimg.cc/CMtDCW1c/pyramids.jpg', category: categories[5], year: 2001, price: 4.50},
    {name: 'The first civilizations',author: 'Glyn Edmund Daniel', image: 'https://i.postimg.cc/TYwmnTfL/civilizations.jpg', category: categories[5], year: 2003, price: 3.95},
    {name: 'The 36-hour day',author: 'Nancy L. Mace', image: 'https://i.postimg.cc/LsqVRRmz/36hourday.jpg', category: categories[6], year: 2012, price: 5.95},
    {name: 'Lifetime physical fitness and wellness',author: 'Werner W. K. Hoeger', image: 'https://i.postimg.cc/T1SrpsyH/physicalfitness.jpg', category: categories[6], year: 2011, price: 3.95},
    {name: 'The psychology of exercise',author: 'Curt Lox', image: 'https://i.postimg.cc/Bn2xnMJM/psychology.jpg', category: categories[6], year: 2011, price: 4.50},
    {name: 'Get moving!',author: 'Mari C. Schuh', image: 'https://i.postimg.cc/Dz8ncYmc/getmoving.jpg', category: categories[6], year: 2013, price: 4.95},
    {name: 'Simply yoga',author: 'Yolanda Pettinato', image: 'https://i.postimg.cc/brTw5SP0/yoga.jpg', category: categories[6], year: 2004, price: 3.50},
  ]);

  console.log(books)

  process.exit();

})();