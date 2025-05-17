const questions = 
[
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Madrid', isCorrect: false },
      { answerText: 'Berlin', isCorrect: false },
    ],
  },
  {
    questionText: 'Who painted the Mona Lisa?',
    answerOptions: [
      { answerText: 'Pablo Picasso', isCorrect: false },
      { answerText: 'Michelangelo', isCorrect: false },
      { answerText: 'Vincent van Gogh', isCorrect: false },
      { answerText: 'Leonardo da Vinci', isCorrect: true },
    ],
  },
  {
    questionText: 'Which planet is known as the Red Planet?',
    answerOptions: [
      { answerText: 'Jupiter', isCorrect: false },
      { answerText: 'Saturn', isCorrect: false },
      { answerText: 'Mars', isCorrect: true },
      { answerText: 'Venus', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the largest ocean on Earth?',
    answerOptions: [
      { answerText: 'Arctic Ocean', isCorrect: false },
      { answerText: 'Atlantic Ocean', isCorrect: false },
      { answerText: 'Pacific Ocean', isCorrect: true },
      { answerText: 'Indian Ocean', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the smallest prime number?',
    answerOptions: [
      { answerText: '3', isCorrect: false },
      { answerText: '5', isCorrect: false },
      { answerText: '2', isCorrect: true },
      { answerText: '1', isCorrect: false },
    ],
  },
  {
    questionText: 'Which element has the chemical symbol O?',
    answerOptions: [
      { answerText: 'Osmium', isCorrect: false },
      { answerText: 'Gold', isCorrect: false },
      { answerText: 'Oxygen', isCorrect: true },
      { answerText: 'Oganesson', isCorrect: false },
    ],
  },
  {
    questionText: 'Who wrote "Romeo and Juliet"?',
    answerOptions: [
      { answerText: 'Jane Austen', isCorrect: false },
      { answerText: 'Charles Dickens', isCorrect: false },
      { answerText: 'Mark Twain', isCorrect: false },
      { answerText: 'William Shakespeare', isCorrect: true },
    ],
  },
  {
    questionText: 'Which country is home to the Great Barrier Reef?',
    answerOptions: [
      { answerText: 'Brazil', isCorrect: false },
      { answerText: 'Thailand', isCorrect: false },
      { answerText: 'Mexico', isCorrect: false },
      { answerText: 'Australia', isCorrect: true },
    ],
  },
  {
    questionText: 'What is the capital of Japan?',
    answerOptions: [
      { answerText: 'Seoul', isCorrect: false },
      { answerText: 'Tokyo', isCorrect: true },
      { answerText: 'Bangkok', isCorrect: false },
      { answerText: 'Beijing', isCorrect: false },
    ],
  },
  {
    questionText: 'Which vitamin is also known as ascorbic acid?',
    answerOptions: [
      { answerText: 'Vitamin C', isCorrect: true },
      { answerText: 'Vitamin A', isCorrect: false },
      { answerText: 'Vitamin D', isCorrect: false },
      { answerText: 'Vitamin B', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the hardest natural substance on Earth?',
    answerOptions: [
      { answerText: 'Gold', isCorrect: false },
      { answerText: 'Platinum', isCorrect: false },
      { answerText: 'Diamond', isCorrect: true },
      { answerText: 'Quartz', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is known as the father of modern physics?',
    answerOptions: [
      { answerText: 'Galileo Galilei', isCorrect: false },
      { answerText: 'Stephen Hawking', isCorrect: false },
      { answerText: 'Albert Einstein', isCorrect: true },
      { answerText: 'Isaac Newton', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the largest mammal on Earth?',
    answerOptions: [
      { answerText: 'African Elephant', isCorrect: false },
      { answerText: 'Giraffe', isCorrect: false },
      { answerText: 'Blue Whale', isCorrect: true },
      { answerText: 'Polar Bear', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of these is not a primary color?',
    answerOptions: [
      { answerText: 'Red', isCorrect: false },
      { answerText: 'Green', isCorrect: true },
      { answerText: 'Yellow', isCorrect: false },
      { answerText: 'Blue', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the capital of Canada?',
    answerOptions: [
      { answerText: 'Montreal', isCorrect: false },
      { answerText: 'Vancouver', isCorrect: false },
      { answerText: 'Toronto', isCorrect: false },
      { answerText: 'Ottawa', isCorrect: true },
    ],
  },
  {
    questionText: 'In which year did World War II end?',
    answerOptions: [
      { answerText: '1947', isCorrect: false },
      { answerText: '1945', isCorrect: true },
      { answerText: '1950', isCorrect: false },
      { answerText: '1943', isCorrect: false },
    ],
  },
  {
    questionText: 'Which gas do plants absorb from the atmosphere?',
    answerOptions: [
      { answerText: 'Hydrogen', isCorrect: false },
      { answerText: 'Oxygen', isCorrect: false },
      { answerText: 'Carbon Dioxide', isCorrect: true },
      { answerText: 'Nitrogen', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the chemical formula for water?',
    answerOptions: [
      { answerText: 'N2', isCorrect: false },
      { answerText: 'CO2', isCorrect: false },
      { answerText: 'H2O', isCorrect: true },
      { answerText: 'O2', isCorrect: false },
    ],
  },
  {
    questionText: 'Which is the largest planet in our solar system?',
    answerOptions: [
      { answerText: 'Neptune', isCorrect: false },
      { answerText: 'Earth', isCorrect: false },
      { answerText: 'Jupiter', isCorrect: true },
      { answerText: 'Saturn', isCorrect: false },
    ],
  },
  {
    questionText: 'Who invented the telephone?',
    answerOptions: [
      { answerText: 'Nikola Tesla', isCorrect: false },
      { answerText: 'Alexander Graham Bell', isCorrect: true },
      { answerText: 'Albert Einstein', isCorrect: false },
      { answerText: 'Thomas Edison', isCorrect: false },
    ],
  },
  {
    questionText: 'Which country is home to the kangaroo?',
    answerOptions: [
      { answerText: 'New Zealand', isCorrect: false },
      { answerText: 'South Africa', isCorrect: false },
      { answerText: 'Australia', isCorrect: true },
      { answerText: 'Brazil', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the smallest bone in the human body?',
    answerOptions: [
      { answerText: 'Stapes', isCorrect: true },
      { answerText: 'Radius', isCorrect: false },
      { answerText: 'Femur', isCorrect: false },
      { answerText: 'Patella', isCorrect: false },
    ],
  },
  {
    questionText: 'Which planet is closest to the Sun?',
    answerOptions: [
      { answerText: 'Mars', isCorrect: false },
      { answerText: 'Earth', isCorrect: false },
      { answerText: 'Venus', isCorrect: false },
      { answerText: 'Mercury', isCorrect: true },
    ],
  },
  {
    questionText: 'What is the main component of the Sun?',
    answerOptions: [
      { answerText: 'Carbon', isCorrect: false },
      { answerText: 'Helium', isCorrect: false },
      { answerText: 'Hydrogen', isCorrect: true },
      { answerText: 'Oxygen', isCorrect: false },
    ],
  },
  {
    questionText: 'Which is the longest river in the world?',
    answerOptions: [
      { answerText: 'Yangtze', isCorrect: false },
      { answerText: 'Nile', isCorrect: true },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Mississippi', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the capital of Brazil?',
    answerOptions: [
      { answerText: 'Rio de Janeiro', isCorrect: false },
      { answerText: 'Buenos Aires', isCorrect: false },
      { answerText: 'Brasília', isCorrect: true },
      { answerText: 'São Paulo', isCorrect: false },
    ],
  },
  {
    questionText: 'Which country gifted the Statue of Liberty to the US?',
    answerOptions: [
      { answerText: 'Italy', isCorrect: false },
      { answerText: 'England', isCorrect: false },
      { answerText: 'France', isCorrect: true },
      { answerText: 'Spain', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the currency of Japan?',
    answerOptions: [
      { answerText: 'Yuan', isCorrect: false },
      { answerText: 'Dollar', isCorrect: false },
      { answerText: 'Won', isCorrect: false },
      { answerText: 'Yen', isCorrect: true },
    ],
  },
  {
    questionText: 'What is the tallest mountain in the world?',
    answerOptions: [
      { answerText: 'Denali', isCorrect: false },
      { answerText: 'Mount Everest', isCorrect: true },
      { answerText: 'K2', isCorrect: false },
      { answerText: 'Kilimanjaro', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of these is not a reptile?',
    answerOptions: [
      { answerText: 'Crocodile', isCorrect: false },
      { answerText: 'Penguin', isCorrect: true },
      { answerText: 'Lizard', isCorrect: false },
      { answerText: 'Snake', isCorrect: false },
    ],
  },
  {
    questionText: 'Who was the first person to walk on the moon?',
    answerOptions: [
      { answerText: 'Buzz Aldrin', isCorrect: false },
      { answerText: 'John Glenn', isCorrect: false },
      { answerText: 'Yuri Gagarin', isCorrect: false },
      { answerText: 'Neil Armstrong', isCorrect: true },
    ],
  },
  {
    questionText: 'What is the largest organ in the human body?',
    answerOptions: [
      { answerText: 'Heart', isCorrect: false },
      { answerText: 'Skin', isCorrect: true },
      { answerText: 'Lung', isCorrect: false },
      { answerText: 'Liver', isCorrect: false },
    ],
  },
  {
    questionText: 'Which planet has the most moons?',
    answerOptions: [
      { answerText: 'Earth', isCorrect: false },
      { answerText: 'Mars', isCorrect: false },
      { answerText: 'Saturn', isCorrect: true },
      { answerText: 'Jupiter', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the study of fossils called?',
    answerOptions: [
      { answerText: 'Geology', isCorrect: false },
      { answerText: 'Paleontology', isCorrect: true },
      { answerText: 'Archaeology', isCorrect: false },
      { answerText: 'Anthropology', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the capital of Egypt?',
    answerOptions: [
      { answerText: 'Marrakech', isCorrect: false },
      { answerText: 'Luxor', isCorrect: false },
      { answerText: 'Alexandria', isCorrect: false },
      { answerText: 'Cairo', isCorrect: true },
    ],
  },
  {
    questionText: 'What is the speed of light?',
    answerOptions: [
      { answerText: '500,000 km/s', isCorrect: false },
      { answerText: '1,000,000 km/s', isCorrect: false },
      { answerText: '150,000 km/s', isCorrect: false },
      { answerText: '300,000 km/s', isCorrect: true },
    ],
  },
  {
    questionText: 'Which blood type is known as the universal donor?',
    answerOptions: [
      { answerText: 'Type AB', isCorrect: false },
      { answerText: 'Type A', isCorrect: false },
      { answerText: 'Type O', isCorrect: true },
      { answerText: 'Type B', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the capital of China?',
    answerOptions: [
      { answerText: 'Shanghai', isCorrect: false },
      { answerText: 'Tokyo', isCorrect: false },
      { answerText: 'Beijing', isCorrect: true },
      { answerText: 'Hong Kong', isCorrect: false },
    ],
  },
  {
    questionText: 'Which continent is the driest?',
    answerOptions: [
      { answerText: 'Australia', isCorrect: false },
      { answerText: 'Antarctica', isCorrect: true },
      { answerText: 'Africa', isCorrect: false },
      { answerText: 'Asia', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the freezing point of water in Fahrenheit?',
    answerOptions: [
      { answerText: '100°F', isCorrect: false },
      { answerText: '32°F', isCorrect: true },
      { answerText: '212°F', isCorrect: false },
      { answerText: '0°F', isCorrect: false },
    ],
  },
  {
    questionText: 'Who discovered penicillin?',
    answerOptions: [
      { answerText: 'Jonas Salk', isCorrect: false },
      { answerText: 'Marie Curie', isCorrect: false },
      { answerText: 'Alexander Fleming', isCorrect: true },
      { answerText: 'Louis Pasteur', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the capital of Italy?',
    answerOptions: [
      { answerText: 'Milan', isCorrect: false },
      { answerText: 'Rome', isCorrect: true },
      { answerText: 'Naples', isCorrect: false },
      { answerText: 'Venice', isCorrect: false },
    ],
  },
  {
    questionText: 'Which is the most abundant element in the universe?',
    answerOptions: [
      { answerText: 'Carbon', isCorrect: false },
      { answerText: 'Oxygen', isCorrect: false },
      { answerText: 'Helium', isCorrect: false },
      { answerText: 'Hydrogen', isCorrect: true },
    ],
  },
  {
    questionText: 'What is the smallest country in the world?',
    answerOptions: [
      { answerText: 'Liechtenstein', isCorrect: false },
      { answerText: 'Monaco', isCorrect: false },
      { answerText: 'Vatican City', isCorrect: true },
      { answerText: 'Maldives', isCorrect: false },
    ],
  },
  {
    questionText: 'Which planet is known as the Evening Star?',
    answerOptions: [
      { answerText: 'Jupiter', isCorrect: false },
      { answerText: 'Venus', isCorrect: true },
      { answerText: 'Mars', isCorrect: false },
      { answerText: 'Mercury', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the capital of Russia?',
    answerOptions: [
      { answerText: 'St. Petersburg', isCorrect: false },
      { answerText: 'Minsk', isCorrect: false },
      { answerText: 'Moscow', isCorrect: true },
      { answerText: 'Kiev', isCorrect: false },
    ],
  },
  {
    questionText: 'Which organ produces insulin?',
    answerOptions: [
      { answerText: 'Kidney', isCorrect: false },
      { answerText: 'Liver', isCorrect: false },
      { answerText: 'Gallbladder', isCorrect: false },
      { answerText: 'Pancreas', isCorrect: true },
    ],
  },
  {
    questionText: 'What is the boiling point of water in Celsius?',
    answerOptions: [
      { answerText: '200°C', isCorrect: false },
      { answerText: '0°C', isCorrect: false },
      { answerText: '100°C', isCorrect: true },
      { answerText: '50°C', isCorrect: false },
    ],
  },
  {
    questionText: 'Which country is home to the Taj Mahal?',
    answerOptions: [
      { answerText: 'Pakistan', isCorrect: false },
      { answerText: 'Nepal', isCorrect: false },
      { answerText: 'Bangladesh', isCorrect: false },
      { answerText: 'India', isCorrect: true },
    ],
  },
  {
    questionText: 'What is the largest desert in the world?',
    answerOptions: [
      { answerText: 'Arabian Desert', isCorrect: false },
      { answerText: 'Kalahari Desert', isCorrect: false },
      { answerText: 'Sahara Desert', isCorrect: true },
      { answerText: 'Gobi Desert', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of these is not a noble gas?',
    answerOptions: [
      { answerText: 'Helium', isCorrect: false },
      { answerText: 'Chlorine', isCorrect: true },
      { answerText: 'Argon', isCorrect: false },
      { answerText: 'Neon', isCorrect: false },
    ],
  },
  {
    questionText: 'In which galaxy is our solar system located?',
    answerOptions: [
      { answerText: 'Andromeda', isCorrect: false },
      { answerText: 'Whirlpool', isCorrect: false },
      { answerText: 'Triangulum', isCorrect: false },
      { answerText: 'Milky Way', isCorrect: true },
    ],
  },
  {
    questionText: 'Which country has the largest population?',
    answerOptions: [
      { answerText: 'Brazil', isCorrect: false },
      { answerText: 'United States', isCorrect: false },
      { answerText: 'India', isCorrect: true },
      { answerText: 'Russia', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the symbol for gold on the periodic table?',
    answerOptions: [
      { answerText: 'Au', isCorrect: true },
      { answerText: 'Go', isCorrect: false },
      { answerText: 'Gd', isCorrect: false },
      { answerText: 'Ag', isCorrect: false },
    ],
  },
  {
    questionText: 'Which famous scientist developed the theory of relativity?',
    answerOptions: [
      { answerText: 'Galileo Galilei', isCorrect: false },
      { answerText: 'Stephen Hawking', isCorrect: false },
      { answerText: 'Albert Einstein', isCorrect: true },
      { answerText: 'Isaac Newton', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the name of the largest bone in the human body?',
    answerOptions: [
      { answerText: 'Radius', isCorrect: false },
      { answerText: 'Humerus', isCorrect: false },
      { answerText: 'Femur', isCorrect: true },
      { answerText: 'Tibia', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the capital of Spain?',
    answerOptions: [
      { answerText: 'Seville', isCorrect: false },
      { answerText: 'Valencia', isCorrect: false },
      { answerText: 'Madrid', isCorrect: true },
      { answerText: 'Barcelona', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the main language spoken in Brazil?',
    answerOptions: [
      { answerText: 'English', isCorrect: false },
      { answerText: 'Portuguese', isCorrect: true },
      { answerText: 'Spanish', isCorrect: false },
      { answerText: 'French', isCorrect: false },
    ],
  },
  {
    questionText: 'Which planet has a ring system?',
    answerOptions: [
      { answerText: 'Venus', isCorrect: false },
      { answerText: 'Jupiter', isCorrect: false },
      { answerText: 'Mars', isCorrect: false },
      { answerText: 'Saturn', isCorrect: true },
    ],
  },
  {
    questionText: 'What is the capital of Australia?',
    answerOptions: [
      { answerText: 'Melbourne', isCorrect: false },
      { answerText: 'Perth', isCorrect: false },
      { answerText: 'Canberra', isCorrect: true },
      { answerText: 'Sydney', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the currency of the United Kingdom?',
    answerOptions: [
      { answerText: 'Yen', isCorrect: false },
      { answerText: 'Dollar', isCorrect: false },
      { answerText: 'Pound Sterling', isCorrect: true },
      { answerText: 'Euro', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of these is not a fundamental force of nature?',
    answerOptions: [
      { answerText: 'Gravity', isCorrect: false },
      { answerText: 'Strong Nuclear', isCorrect: false },
      { answerText: 'Magnetism', isCorrect: true },
      { answerText: 'Electromagnetic', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the smallest ocean?',
    answerOptions: [
      { answerText: 'Indian', isCorrect: false },
      { answerText: 'Southern', isCorrect: false },
      { answerText: 'Arctic', isCorrect: true },
      { answerText: 'Atlantic', isCorrect: false },
    ],
  },
  {
    questionText: 'Which country is known as the Land of the Rising Sun?',
    answerOptions: [
      { answerText: 'China', isCorrect: false },
      { answerText: 'Vietnam', isCorrect: false },
      { answerText: 'Japan', isCorrect: true },
      { answerText: 'Thailand', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the name of the longest river in Africa?',
    answerOptions: [
      { answerText: 'Zambezi', isCorrect: false },
      { answerText: 'Niger', isCorrect: false },
      { answerText: 'Congo', isCorrect: false },
      { answerText: 'Nile', isCorrect: true },
    ],
  },
  {
    questionText: 'Who wrote "A Brief History of Time"?',
    answerOptions: [
      { answerText: 'Carl Sagan', isCorrect: false },
      { answerText: 'Brian Cox', isCorrect: false },
      { answerText: 'Stephen Hawking', isCorrect: true },
      { answerText: 'Neil deGrasse Tyson', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the capital of South Korea?',
    answerOptions: [
      { answerText: 'Busan', isCorrect: false },
      { answerText: 'Tokyo', isCorrect: false },
      { answerText: 'Seoul', isCorrect: true },
      { answerText: 'Pyongyang', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the most abundant gas in Earth\'s atmosphere?',
    answerOptions: [
      { answerText: 'Oxygen', isCorrect: false },
      { answerText: 'Nitrogen', isCorrect: true },
      { answerText: 'Hydrogen', isCorrect: false },
      { answerText: 'Carbon Dioxide', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the capital of Germany?',
    answerOptions: [
      { answerText: 'Hamburg', isCorrect: false },
      { answerText: 'Frankfurt', isCorrect: false },
      { answerText: 'Berlin', isCorrect: true },
      { answerText: 'Munich', isCorrect: false },
    ],
  },
  {
    questionText: 'Which is the largest continent?',
    answerOptions: [
      { answerText: 'Europe', isCorrect: false },
      { answerText: 'Africa', isCorrect: false },
      { answerText: 'North America', isCorrect: false },
      { answerText: 'Asia', isCorrect: true },
    ],
  },
  {
    questionText: 'What is the currency of China?',
    answerOptions: [
      { answerText: 'Won', isCorrect: false },
      { answerText: 'Yuan', isCorrect: true },
      { answerText: 'Rupee', isCorrect: false },
      { answerText: 'Yen', isCorrect: false },
    ],
  },
  {
    questionText: 'Which blood type is known as the universal recipient?',
    answerOptions: [
      { answerText: 'Type A', isCorrect: false },
      { answerText: 'Type O', isCorrect: false },
      { answerText: 'Type AB', isCorrect: true },
      { answerText: 'Type B', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the capital of Mexico?',
    answerOptions: [
      { answerText: 'Monterrey', isCorrect: false },
      { answerText: 'Mexico City', isCorrect: true },
      { answerText: 'Guadalajara', isCorrect: false },
      { answerText: 'Cancún', isCorrect: false },
    ],
  },
  {
    questionText: 'Which planet is known as the Blue Planet?',
    answerOptions: [
      { answerText: 'Mars', isCorrect: false },
      { answerText: 'Earth', isCorrect: true },
      { answerText: 'Neptune', isCorrect: false },
      { answerText: 'Venus', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the largest bird in the world?',
    answerOptions: [
      { answerText: 'Penguin', isCorrect: false },
      { answerText: 'Eagle', isCorrect: false },
      { answerText: 'Ostrich', isCorrect: true },
      { answerText: 'Condor', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of these is not a primary color in light?',
    answerOptions: [
      { answerText: 'Blue', isCorrect: false },
      { answerText: 'Green', isCorrect: false },
      { answerText: 'Yellow', isCorrect: true },
      { answerText: 'Red', isCorrect: false },
    ],
  },
];

export default questions;