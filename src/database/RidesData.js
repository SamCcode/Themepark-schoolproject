const ridesMenu = [
  {
    id: 1,
    name: "Bumper Cars",
    description: "lorem ipsum",
    excitement: 3,
    imageUrl: "assets/bumpercars.jpg",
    category: "family",
  },
  {
    id: 2,
    name: "Haunted House",
    description: "lorem ipsum",
    excitement: 7,
    imageUrl: "assets/hauntedhouse.jpg",
    category: "thrill",
  },
  {
    id: 3,
    name: "Skycoaster",
    description: "lorem ipsum",
    excitement: 9,
    imageUrl: "assets/skycoaster.jpg",
    category: "thrill",
  },
  {
    id: 4,
    name: "Bumper Boats",
    description: "Bumper Boats",
    excitement: 3,
    imageUrl: "assets/bumperboats.jpg",
    category: "family",
  },
  {
    id: 5,
    name: "Merry Go Round",
    description: "Merry Go Round",
    excitement: 2,
    imageUrl: "assets/merrygoround.jpg",
    category: "kids",
  },
  {
    id: 5,
    name: "Drop Tower",
    description: "Drop Tower",
    excitement: 7,
    imageUrl: "assets/droptower.jpg",
    category: "thrill",
  },
  {
    id: 6,
    name: "Ferris wheel",
    description: "Ferris wheel",
    excitement: 4,
    imageUrl: "assets/ferriswheel.jpg",
    category: "family",
  },
  {
    id: 7,
    name: "Freefall",
    description: "Freefall",
    excitement: 6,
    imageUrl: "assets/freefall.jpg",
    category: "thrill",
  },
  {
    id: 8,
    name: "Fun Slide",
    description: "lorem ipsum",
    excitement: 2,
    imageUrl: "assets/funslide.jpg",
    category: "kids",
  },
  {
    id: 9,
    name: "Gyro tower",
    description: "lorem ipsum",
    excitement: 5,
    imageUrl: "assets/gyrotower.jpg",
    category: "thrill",
  },
  {
    id: 10,
    name: "Hurricane",
    description: "Hurricane",
    excitement: 6,
    imageUrl: "assets/hurricane.jpg",
    category: "thrill",
  },
  {
    id: 11,
    name: "Log Flume",
    description: "lorem ipsum",
    excitement: 4,
    imageUrl: "assets/logflume.jpg",
    category: "family",
  },
  {
    id: 12,
    name: "Octopus",
    description: "Octopus",
    excitement: 5,
    imageUrl: "assets/octopus.jpg",
    category: "kids",
  },
  {
    id: 13,
    name: "Pirate Ship",
    description: "Pirate Ship",
    excitement: 2,
    imageUrl: "assets/pirateship.jpg",
    category: "kids",
  },
  {
    id: 14,
    name: "Rainbow",
    description: "lorem ipsum",
    excitement: 6,
    imageUrl: "assets/rainbow.jpg",
    category: "thrill",
  },
  {
    id: 15,
    name: "Rockin Tug",
    description: "Rollercoaster",
    excitement: 9,
    imageUrl: "assets/rockintug.jpg",
    category: "thrill",
  },
  {
    id: 16,
    name: "Round up",
    description: "lorem ipsum",
    excitement: 2,
    imageUrl: "assets/roundup.jpg",
    category: "kids",
  },
];

const categorizedRidesMenu = ridesMenu.reduce((categories, menuItem) => {
  const { category } = menuItem;
  if (!categories[category]) {
    categories[category] = [];
  }
  categories[category].push(menuItem);
  return categories;
}, {});

export {categorizedRidesMenu, ridesMenu}