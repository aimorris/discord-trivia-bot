const questions = [
  {
    'question': '7-Eleven stores were temporarily converted into Kwik E-marts to promote the release of what movie?',
    'answer': ['the simpsons', 'simpsons', 'simpsons movie', 'the simpsons movie'],
    'category': 'Arts & Entertainment',
  },
  {
    'question': 'On average, what denomination of U.S. paper currency remains in circulation the longest?',
    'answer': ['100 dollar bill', '100 dollars', 'one hundred', '100', 'one hundred dollars', 'one hundred dollar', 'one hundred dollar bill'],
    'category': 'Society & Humanities',
  },
  {
    'question': 'A 2010 study found that nearly 70% of what imported item failed to live up to its claims of being “extra virgin”?',
    'answer': ['olive oil', 'extra virgin olive oil'],
    'category': 'Science & Geography',
  },
  {
    'question': 'A bit of folk wisdom warns that when you point a finger at someone, how many fingers are pointing back at you?',
    'answer': ['three', '3'],
    'category': 'Society & Humanities',
  },
  {
    'question': 'In "The Simpsons", what member of the Simpson family is commonly seen sucking on a pacifier?',
    'answer': ['maggie', 'maggie simpsons', 'margaret'],
    'category': 'Arts & Entertainment',
  },
  {
    'question': 'In the act that incited WWI, Serbian Gavrilo Princip assassinated Archduke Franz Ferdinand in 1914 in what city?',
    'answer': ['sarajevo'],
    'category': 'Society & Humanities',
  },
  {
    'question': 'How old was Daniel Radcliffe when the first "Harry Potter" film came out?',
    'answer': ['12', 'twelve'],
    'category': 'Arts & Entertainment',
  },
  {
    'question': 'Due to the popularity of "Harry Potter", what word was added to the Oxford English dictionary in 2003?',
    'answer': ['muggle'],
    'category': 'Arts & Entertainment',
  },
  {
    'question': 'In the "Harry Potter" series, what school does Harry Potter attend?',
    'answer': ['hogwarts', 'hogwarts school of witchcraft and wizardry'],
    'category': 'Arts & Entertainment',
  },
  {
    'question': 'What is the fourth book in the "Harry Potter" series?',
    'answer': ['goblet of fire', 'harry potter and the goblet of fire', 'the goblet of fire'],
    'category': 'Arts & Entertainment',
  },
  {
    'question': 'What chemical element has the symbol Pr?',
    'answer': ['praseodymium'],
    'category': 'Science & Geography',
  },
  {
    'question': 'Who was the first United States Secretary of State?',
    'answer': ['thomas jefferson', 'jefferson'],
    'category': 'Society & Humanities',
  },
  {
    'question': 'Which actor played Hannibal Lecter in the "Hannibal" movie trilogy?',
    'answer': ['sir anthony hopkins', 'anthony hopkins', 'hopkins', 'sir anthony'],
    'category': 'Arts & Entertainment',
  },
  {
    'question': 'Margaret Thatcher was the prime minister of which country?',
    'answer': ['united kingdom', 'uk'],
    'category': 'Society & Humanities',
  },
  {
    'question': 'What was the legal first name of King George VI?',
    'answer': ['albert'],
    'category': 'Society & Humanities',
  },
  {
    'question': 'What is the regnal name of the first monarch to abdicate?',
    'answer': ['king edward viii', 'edward viii', 'king edward 8th', 'king edward eighth', 'edward eighth', 'king edward 8', 'edward 8', 'edward eight'],
    'category': 'Society & Humanities',
  },
  {
    'question': 'On the children’s TV "Dora the Explorer", what is the name of the Dora\'s friend monkey?',
    'answer': ['boots'],
    'category': 'Arts & Entertainment',
  },
  {
    'question': 'What kind of whale is featured in the classic tale "Moby Dick"?',
    'answer': ['sperm', 'sperm whale'],
    'category': 'Arts & Entertainment',
  },
  {
    'question': 'What is pluviophobia the fear of?',
    'answer': ['rain', 'storms', 'storm', 'lightning', 'thunder'],
    'category': 'Science & Geography',
  },
  {
    'question': 'What was the first zeppelin made of?',
    'answer': ['aluminum', 'aluminium'],
    'category': 'Science & Geography',
  },
  {
    'question': 'Which major river flows through Gloucester?',
    'answer': ['severn'],
    'category': 'Science & Geography',
  },
  {
    'question': 'In the show "American Dad", character Steve Smith attends what school?',
    'answer': ['pearl bailey', 'pearl bailey school', 'pearl bailey high', 'pearl bailey high school'],
    'category': 'Arts & Entertainment',
  },
  {
    'question': 'What software company shares its name with a building material made from earthen materials?',
    'answer': ['adobe'],
    'category': 'Society & Humanities',
  },
  {
    'question': 'What is the name of the longest river in the Western Hemisphere?',
    'answer': ['amazon', 'the amazon', 'amazon river', 'the amazon river'],
    'category': 'Science & Geography',
  },
  {
    'question': 'What does an anemometer measure?',
    'answer': ['wind', 'wind speed', 'wind velocity', 'wind direction'],
    'category': 'Science & Geography',
  },
  {
    'question': 'What is the capital of Finland?',
    'answer': ['helsinki'],
    'category': 'Science & Geography',
  },
  {
    'question': 'Which country has the same name as a bird?',
    'answer': ['turkey'],
    'category': 'Science & Geography',
  },
  {
    'question': 'What colour is the Art & Literature wedge in the original version of "Trivial Pursuit"?',
    'answer': ['brown'],
    'category': 'Arts & Entertainment',
  },
  {
    'question': 'What is the capital of Tuvalu?',
    'answer': ['funafuti'],
    'category': 'Science & Geography',
  },
  {
    'question': 'In what US state is The Grand Canyon found?',
    'answer': ['colorado', 'co'],
    'category': 'Science & Geography',
  },
  {
    'question': 'What was Mozart\'s first name?',
    'answer': ['wolfgang'],
    'category': 'Arts & Entertainment',
  },
  {
    'question': 'Which country did the French know as Terra Napoleon?',
    'answer': ['australia', 'commonwealth of australia'],
    'category': 'Society & Humanities',
  },
  {
    'question': 'What is the largest Australian state by area?',
    'answer': ['wa', 'western australia'],
    'category': 'Science & Geography',
  },
  {
    'question': 'What is the name of the largest island in the world?',
    'answer': ['greenland'],
    'category': 'Science & Geography',
  },
  {
    'question': 'What is the capital of Eritrea?',
    'answer': ['asmara'],
    'category': 'Science & Geography',
  },
  {
    'question': 'Which Formula One team did both Nigel Mansell and Damon Hill drive for?',
    'answer': ['williams'],
    'category': 'Arts & Entertainment',
  },
  {
    'question': 'What is the birthstone for May?',
    'answer': ['emerald'],
    'category': 'Society & Humanities',
  },
  {
    'question': 'What type of beans did Hannibal Lecter like to eat liver with?',
    'answer': ['fava'],
    'category': 'Arts & Entertainment',
  },
  {
    'question': 'What is the name of the covering on the tip of a shoelace?',
    'answer': ['aglet'],
    'category': 'Society & Humanities',
  },
  {
    'question': 'What chemical element is used in the process of galvanisation?',
    'answer': ['zinc', 'zn'],
    'category': 'Science & Geography',
  },
  {
    'question': 'Which planet has a moon called Europa?',
    'answer': ['jupiter'],
    'category': 'Science & Geography',
  },
  {
    'question': 'The Elo rating system was originally used to rate players of which board game?',
    'answer': ['chess'],
    'category': 'Society & Humanities',
  },
  {
    'question': 'In which US state is Panama City?',
    'answer': ['floria', 'fl'],
    'category': 'Science & Geography',
  },
  {
    'question': 'What term is given to an 11 on the Beaufort Wind Scale?',
    'answer': ['violent storm'],
    'category': 'Science & Geography',
  },
  {
    'question': 'How many bonus points are given in Scrabble if all seven tiles are played at once?',
    'answer': ['fifty', '50'],
    'category': 'Arts & Entertainment',
  },
  {
    'question': 'Who wrote the novel "The Silence of the Lambs"?',
    'answer': ['harris', 'thomas harris'],
    'category': 'Arts & Entertainment',
  },
  {
    'question': 'Fescue is what type of plant?',
    'answer': ['grass'],
    'category': 'Science & Geography',
  },
  {
    'question': 'What is the sequel to the novel "Little Women"?',
    'answer': ['good wives'],
    'category': 'Arts & Entertainment',
  },
  {
    'question': 'Which actress\'s real name was Frances Gumm?',
    'answer': ['judy garland', 'garland'],
    'category': 'Arts & Entertainment',
  },
  {
    'question': 'What is the 30th longest river in the world?',
    'answer': ['the thames river', 'the thames', 'thames river', 'thames'],
    'category': 'Science & Geography',
  },
  {
    'question': 'What is the name of the large, prominent vein in the side of your neck?',
    'answer': ['jugular vein', 'jugular'],
    'category': 'Science & Geography',
  },
  {
    'question': 'The agave plant is the source of which liquor?',
    'answer': ['tequila'],
    'category': 'Science & Geography',
  },
  {
    'question': 'Which Zodiac sign is represented by fish?',
    'answer': ['pisces'],
    'category': 'Science & Geography',
  },
  {
    'question': 'Who played the lead in the movie "The Matrix"?',
    'answer': ['keanu reeves', 'keanu', 'reeves'],
    'category': 'Arts & Entertainment',
  },
  {
    'question': 'What nerve agent was used in the assassination of Kim Jong Nam?',
    'answer': ['sarin', 'sarin gas'],
    'category': 'Society & Humanities',
  },
  {
    'question': 'What animal is the mascot of Coca-Cola?',
    'answer': ['polar bear'],
    'category': 'Society & Humanities',
  },
  {
    'question': 'In the name of the food corned beef, "corn" refers to what seasoning commonly found on dinner tables?',
    'answer': ['salt'],
    'category': 'Society & Humanities',
  },
  {
    'question': 'What is the language isolate with the most native speakers?',
    'answer': ['korean'],
    'category': 'Society & Humanities',
  },
  {
    'question': 'Which animal has the largest penis-to-body size ratio?',
    'answer': ['barnacle'],
    'category': 'Science & Geography',
  },
  {
    'question': 'What was the name of the built in local communication app in the Nintendo DS?',
    'answer': ['pictochat'],
    'category': 'Arts & Entertainment',
  },
  {
    'question': 'What was the name of the US President before Donald Trump?',
    'answer': ['barack obama', 'obama', 'barack'],
    'category': 'Society & Humanities',
  },
  {
    'question': 'What is added to ginger beer to make the non-alcoholic drink Shirley Temple?',
    'answer': ['grenadine'],
    'category': 'Society & Humanities',
  },
];

module.exports = questions;
