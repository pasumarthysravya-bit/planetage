export interface Planet {
  name: string;
  color: string;
  textureUrl: string;
  ringColor?: string;
  hasRings?: boolean;
  ringTextureUrl?: string;
  gravity: number;
  gravityFactor: number;
  orbitalPeriod: number;
  dayLength: string;
  ageInBillions: number;
  description: string;
  facts: string[];
}

export const planets: Planet[] = [
  {
    name: "Mercury",
    color: "#9ca3af",
    textureUrl: "/textures/mercury.jpg",
    gravityFactor: 0.378,
    gravity: 3.7,
    orbitalPeriod: 0.2408467,
    dayLength: "176 Earth Days",
    ageInBillions: 4.5,
    description: "The smallest planet and closest to the Sun.",
    facts: [
      "Mercury's surface experiences extreme temperature fluctuations.",
      "It has no moons or rings.",
      "A year on Mercury is just 88 Earth days long."
    ]
  },
  {
    name: "Venus",
    color: "#f59e0b",
    textureUrl: "/textures/venus.jpg",
    gravityFactor: 0.907,
    gravity: 8.87,
    orbitalPeriod: 0.61519726,
    dayLength: "117 Earth Days",
    ageInBillions: 4.5,
    description: "The hottest planet, shrouded in thick clouds.",
    facts: [
      "Venus rotates in the opposite direction to most planets.",
      "Its atmosphere is mostly carbon dioxide.",
      "Venus is often called Earth's 'sister planet'."
    ]
  },
  {
    name: "Earth",
    color: "#3b82f6",
    textureUrl: "/textures/earth.jpg",
    gravityFactor: 1.0,
    gravity: 9.8,
    orbitalPeriod: 1.0,
    dayLength: "24 Hours",
    ageInBillions: 4.54,
    description: "Our home — the only known planet with life.",
    facts: [
      "Earth is the only planet not named after a god.",
      "It is the densest planet in the Solar System.",
      "70% of Earth's surface is covered by water."
    ]
  },
  {
    name: "Mars",
    color: "#ef4444",
    textureUrl: "/textures/mars.jpg",
    gravityFactor: 0.377,
    gravity: 3.72,
    orbitalPeriod: 1.8808158,
    dayLength: "24.6 Hours",
    ageInBillions: 4.5,
    description: "The Red Planet with the tallest volcano in the solar system.",
    facts: [
      "Olympus Mons on Mars is the largest volcano in the Solar System.",
      "Mars has two small moons: Phobos and Deimos.",
      "Sunsets on Mars appear blue."
    ]
  },
  {
    name: "Jupiter",
    color: "#d97706",
    textureUrl: "/textures/jupiter.jpg",
    gravityFactor: 2.36,
    gravity: 24.79,
    orbitalPeriod: 11.862615,
    dayLength: "9.9 Hours",
    ageInBillions: 4.5,
    description: "The largest planet — a massive gas giant with a Great Red Spot.",
    facts: [
      "Jupiter has over 90 moons.",
      "The Great Red Spot is a giant storm larger than Earth.",
      "It has the shortest day of all the planets."
    ]
  },
  {
    name: "Saturn",
    color: "#fde68a",
    textureUrl: "/textures/saturn.jpg",
    hasRings: true,
    ringTextureUrl: "/textures/saturn_ring.png",
    ringColor: "#d4a855",
    gravityFactor: 0.916,
    gravity: 10.44,
    orbitalPeriod: 29.447498,
    dayLength: "10.7 Hours",
    ageInBillions: 4.5,
    description: "Famous for its stunning ring system made of ice and rock.",
    facts: [
      "Saturn has over 145 moons! Titan is the largest.",
      "It is the least dense planet in the Solar System.",
      "Saturn's rings are mostly made of chunks of ice."
    ]
  },
  {
    name: "Uranus",
    color: "#67e8f9",
    textureUrl: "/textures/uranus.jpg",
    gravityFactor: 0.889,
    gravity: 8.69,
    orbitalPeriod: 84.016846,
    dayLength: "17.2 Hours",
    ageInBillions: 4.5,
    description: "An ice giant that rotates on its side.",
    facts: [
      "Uranus rotates on its side, rolling like a barrel.",
      "It is the coldest planet in the Solar System.",
      "Uranus was the first planet discovered using a telescope."
    ]
  },
  {
    name: "Neptune",
    color: "#2563eb",
    textureUrl: "/textures/neptune.jpg",
    gravityFactor: 1.12,
    gravity: 11.15,
    orbitalPeriod: 164.79132,
    dayLength: "16.1 Hours",
    ageInBillions: 4.5,
    description: "The windiest planet, with speeds up to 2,100 km/h.",
    facts: [
      "Neptune has the strongest winds in the Solar System.",
      "It takes Neptune 165 Earth years to orbit the Sun.",
      "Neptune is 30 times farther from the Sun than Earth."
    ]
  }
];
