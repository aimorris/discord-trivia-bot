const questions = [
  {
    question: '7-Eleven stores were temporarily converted into Kwik E-marts to promote the release of what movie?',
    answers: ['thesimpsons', 'simpsons', 'simpsonsmovie', 'thesimpsonsmovie'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'On average, what denomination of U.S. paper currency remains in circulation the longest?',
    answers: ['100dollarbill', '100dollars', 'onehundred', '100', 'onehundreddollars', 'onehundreddollar', 'onehundreddollarbill'],
    category: 'Society & Humanities',
  },
  {
    question: 'A 2010 study found that nearly 70% of what imported item failed to live up to its claims of being "extra virgin"?',
    answers: ['oliveoil', 'extravirginoliveoil'],
    category: 'Science & Geography',
  },
  {
    question: 'A bit of folk wisdom warns that when you point a finger at someone, how many fingers are pointing back at you?',
    answers: ['three', '3'],
    category: 'Society & Humanities',
  },
  {
    question: 'In "The Simpsons", what member of the Simpson family is commonly seen sucking on a pacifier?',
    answers: ['maggie', 'maggiesimpson', 'margaret'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'In the act that incited WWI, Serbian Gavrilo Princip assassinated Archduke Franz Ferdinand in 1914 in what city?',
    answers: ['sarajevo'],
    category: 'Society & Humanities',
  },
  {
    question: 'How old was Daniel Radcliffe when the first "Harry Potter" film came out?',
    answers: ['12', 'twelve'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'Due to the popularity of "Harry Potter", what word was added to the Oxford English dictionary in 2003?',
    answers: ['muggle'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'In the "Harry Potter" series, what school does Harry Potter attend?',
    answers: ['hogwarts', 'hogwartsschoolofwitchcraftandwizardry'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'What is the fourth book in the "Harry Potter" series?',
    answers: ['gobletoffire', 'harrypotterandthegobletoffire', 'thegobletoffire'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'What chemical element has the symbol Pr?',
    answers: ['praseodymium'],
    category: 'Science & Geography',
  },
  {
    question: 'Who was the first United States Secretary of State?',
    answers: ['thomasjefferson', 'jefferson'],
    category: 'Society & Humanities',
  },
  {
    question: 'Which actor played Hannibal Lecter in the "Hannibal" movie trilogy?',
    answers: ['siranthonyhopkins', 'anthonyhopkins', 'hopkins', 'siranthony'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'Margaret Thatcher was the prime minister of which country?',
    answers: ['united kingdom', 'uk'],
    category: 'Society & Humanities',
  },
  {
    question: 'What was the legal first name of King George VI?',
    answers: ['albert'],
    category: 'Society & Humanities',
  },
  {
    question: 'What is the regnal name of the first monarch to abdicate?',
    answers: ['kingedwardviii', 'edwardviii', 'kingedward8th', 'kingedwardeighth', 'edwardeighth', 'kingedward8', 'edward8', 'edwardeight'],
    category: 'Society & Humanities',
  },
  {
    question: 'On the children\'s TV "Dora the Explorer", what is the name of the Dora\'s friend monkey?',
    answers: ['boots'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'What kind of whale is featured in the classic tale "Moby Dick"?',
    answers: ['sperm', 'spermwhale'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'What is pluviophobia the fear of?',
    answers: ['rain', 'storms', 'storm', 'lightning', 'thunder'],
    category: 'Science & Geography',
  },
  {
    question: 'What was the first zeppelin made of?',
    answers: ['aluminum', 'aluminium'],
    category: 'Science & Geography',
  },
  {
    question: 'Which major river flows through Gloucester?',
    answers: ['severn'],
    category: 'Science & Geography',
  },
  {
    question: 'In the show "American Dad", character Steve Smith attends what school?',
    answers: ['pearlbailey', 'pearlbaileyschool', 'pearlbaileyhigh', 'pearlbaileyhighschool'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'What software company shares its name with a building material made from earthen materials?',
    answers: ['adobe'],
    category: 'Society & Humanities',
  },
  {
    question: 'What is the name of the longest river in the Western Hemisphere?',
    answers: ['amazon', 'theamazon', 'amazonriver', 'theamazonriver'],
    category: 'Science & Geography',
  },
  {
    question: 'What does an anemometer measure?',
    answers: ['wind', 'windspeed', 'windvelocity', 'winddirection'],
    category: 'Science & Geography',
  },
  {
    question: 'What is the capital of Finland?',
    answers: ['helsinki'],
    category: 'Science & Geography',
  },
  {
    question: 'Which country has the same name as a bird?',
    answers: ['turkey'],
    category: 'Science & Geography',
  },
  {
    question: 'What colour is the Art & Literature wedge in the original version of "Trivial Pursuit"?',
    answers: ['brown'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'What is the capital of Tuvalu?',
    answers: ['funafuti'],
    category: 'Science & Geography',
  },
  {
    question: 'In what US state is The Grand Canyon found?',
    answers: ['arizona', 'az'],
    category: 'Science & Geography',
  },
  {
    question: 'What was Mozart\'s first name?',
    answers: ['wolfgang'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'Which country did the French know as Terra Napoleon?',
    answers: ['australia', 'commonwealthofaustralia'],
    category: 'Society & Humanities',
  },
  {
    question: 'What is the largest Australian state by area?',
    answers: ['wa', 'westernaustralia'],
    category: 'Science & Geography',
  },
  {
    question: 'What is the name of the largest island in the world?',
    answers: ['greenland'],
    category: 'Science & Geography',
  },
  {
    question: 'What is the capital of Eritrea?',
    answers: ['asmara'],
    category: 'Science & Geography',
  },
  {
    question: 'Which Formula One team did both Nigel Mansell and Damon Hill drive for?',
    answers: ['williams'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'What is the birthstone for May?',
    answers: ['emerald'],
    category: 'Society & Humanities',
  },
  {
    question: 'What type of beans did Hannibal Lecter like to eat liver with?',
    answers: ['fava'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'What is the name of the covering on the tip of a shoelace?',
    answers: ['aglet'],
    category: 'Society & Humanities',
  },
  {
    question: 'What chemical element is used in the process of galvanisation?',
    answers: ['zinc', 'zn'],
    category: 'Science & Geography',
  },
  {
    question: 'Which planet has a moon called Europa?',
    answers: ['jupiter'],
    category: 'Science & Geography',
  },
  {
    question: 'The Elo rating system was originally used to rate players of which board game?',
    answers: ['chess'],
    category: 'Society & Humanities',
  },
  {
    question: 'In which US state is Panama City?',
    answers: ['florida', 'fl'],
    category: 'Science & Geography',
  },
  {
    question: 'What term is given to an 11 on the Beaufort Wind Scale?',
    answers: ['violentstorm'],
    category: 'Science & Geography',
  },
  {
    question: 'How many bonus points are given in Scrabble if all seven tiles are played at once?',
    answers: ['fifty', '50'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'Who wrote the novel "The Silence of the Lambs"?',
    answers: ['harris', 'thomasharris'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'Fescue is what type of plant?',
    answers: ['grass'],
    category: 'Science & Geography',
  },
  {
    question: 'What is the sequel to the novel "Little Women"?',
    answers: ['goodwives'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'Which actress\'s real name was Frances Gumm?',
    answers: ['judygarland', 'garland'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'What is the 30th longest river in the world?',
    answers: ['thethamesriver', 'thethames', 'thamesriver', 'thames'],
    category: 'Science & Geography',
  },
  {
    question: 'What is the name of the large, prominent vein in the side of your neck?',
    answers: ['jugularvein', 'jugular'],
    category: 'Science & Geography',
  },
  {
    question: 'The agave plant is the source of which liquor?',
    answers: ['tequila'],
    category: 'Science & Geography',
  },
  {
    question: 'Which Zodiac sign is represented by fish?',
    answers: ['pisces'],
    category: 'Science & Geography',
  },
  {
    question: 'Who played the lead in the movie "The Matrix"?',
    answers: ['keanureeves', 'reeves'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'What nerve agent was used in the assassination of Kim Jong Nam?',
    answers: ['sarin', 'saringas'],
    category: 'Society & Humanities',
  },
  {
    question: 'What animal is the mascot of Coca-Cola?',
    answers: ['polarbear'],
    category: 'Society & Humanities',
  },
  {
    question: 'In the name of the food corned beef, "corn" refers to what seasoning commonly found on dinner tables?',
    answers: ['salt'],
    category: 'Society & Humanities',
  },
  {
    question: 'Which language isolate has the most native speakers?',
    answers: ['korean'],
    category: 'Society & Humanities',
  },
  {
    question: 'Which animal has the largest penis-to-body size ratio?',
    answers: ['barnacle'],
    category: 'Science & Geography',
  },
  {
    question: 'What was the name of the built in local communication app in the Nintendo DS?',
    answers: ['pictochat'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'What was the name of the US President before Donald Trump?',
    answers: ['barackobama', 'obama', 'barack'],
    category: 'Society & Humanities',
  },
  {
    question: 'What is added to ginger beer to make the non-alcoholic drink "Shirley Temple"?',
    answers: ['grenadine'],
    category: 'Society & Humanities',
  },
  {
    question: 'In the abbreviation for the medical procedure popularly known as an MRI, what does the "I" stand for?',
    answers: ['imaging'],
    category: 'Science & Geography',
  },
  {
    question: 'The River Indus in Pakistan begins at what lake?',
    answers: ['manasarovar', 'lake manasarovar'],
    category: 'Science & Geography',
  },
  {
    question: 'On the 2010 Forbes 400 list, what billionaire identifies himself as residing in Medina, Washington?',
    answers: ['gates', 'bill gates'],
    category: 'Society & Humanities',
  },
  {
    question: 'A common ingredient in ice cream and toothpaste, carrageenan is an extract of what?',
    answers: ['seaweed', 'redseaweed'],
    category: 'Science & Geography',
  },
  {
    question: 'On Twitter, a proper "Twaiku" poem consists of 140 characters or fewer and how many syllables?',
    answers: ['seven', '7'],
    category: 'Society & Humanities',
  },
  {
    question: 'In the full name of the military alliance NATO, the "T" stands for what?',
    answers: ['treaty'],
    category: 'Society & Humanities',
  },
  {
    question: 'In the human body, the pericardium is a membrane that surrounds what organ?',
    answers: ['heart', 'theheart'],
    category: 'Science & Geography',
  },
  {
    question: 'In the military, a Huey is a type of what?',
    answers: ['helicopter'],
    category: 'Society & Humanities',
  },
  {
    question: 'Which prehistoric dinosaur do paleontologists believe was likely covered in feathers?',
    answers: ['velociraptor'],
    category: 'Science & Geography',
  },
  {
    question: 'A group of what birds is known as murder?',
    answers: ['crow'],
    category: 'Science & Geography',
  },
  {
    question: 'Patients who elect to have malar augmentation surgery wish to increase the size of their what?',
    answers: ['cheeks', 'cheek'],
    category: 'Science & Geography',
  },
  {
    question: 'In the popular drink bubble tea, "bubbles" or boba are typically made from what?',
    answers: ['tapioca'],
    category: 'Science & Geography',
  },
  {
    question: 'In the Republican party abbreviation GOP, the "G" stands for what?',
    answers: ['grand'],
    category: 'Society & Humanities',
  },
  {
    question: 'In the song "Frosty The Snowman", what part of Frosty\'s face is made of a button?',
    answers: ['nose'],
    category: 'Society & Humanities',
  },
  {
    question: 'Performed to assist breathing, a tracheotomy is a surgery on what part of the body?',
    answers: ['trachea', 'windpipe', 'windpipe'],
    category: 'Science & Geography',
  },
  {
    question: 'Celebrated on February 6th, Waitangi Day is the national holiday of which nation?',
    answers: ['newzealand'],
    category: 'Society & Humanities',
  },
  {
    question: 'Klondike is a popular variety of what card game?',
    answers: ['society'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'A mochaccino is traditionally made by adding what ingredient to a cappuccino?',
    answers: ['chocolate', 'cocoa', 'cacao'],
    category: 'Society & Humanities',
  },
  {
    question: 'Physicist Stephen Hawking\'s bestselling 1988 book on the cosmos is titled "A Brief History of" what?',
    answers: ['time'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'A BLAT sandwich has bacon, lettuce, tomato, and what?',
    answers: ['avocado'],
    category: 'Society & Humanities',
  },
  {
    question: 'In the world of DC Comics, Barbara Gordon is better known as what comic book superhero?',
    answers: ['batgirl', 'batgirl'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'Mistletoe plants normally have what color berries?',
    answers: ['white'],
    category: 'Science & Geography',
  },
  {
    question: 'In the \'70s, what sport transitioned from traditional white balls to "optic yellow", which were more visible to TV viewers?',
    answers: ['tennis'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'A person who is said to be "playing the back nine" is participating in what sport?',
    answers: ['golf'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'A pescetarian breaks from the vegetarian code by eating which food?',
    answers: ['fish'],
    category: 'Society & Humanities',
  },
  {
    question: 'Popular in India, paneer is a type of what food?',
    answers: ['cheese'],
    category: 'Society & Humanities',
  },
  {
    question: 'A popular brunch cocktail, the Bellini is typically made by mixing champagne with what pureed fruit?',
    answers: ['peach', 'peaches'],
    category: 'Society & Humanities',
  },
  {
    question: 'A popular holiday dish that features a chicken stuffed inside a duck stuffed inside a turkey goes by what name?',
    answers: ['turducken'],
    category: 'Society & Humanities',
  },
  {
    question: 'A popular tourist destination in Europe, Prague is the capital of what country?',
    answers: ['czechrepublic', 'czechia'],
    category: 'Science & Geography',
  },
  {
    question: 'Prior to becoming a world famous Italian tenor, Andrea Bocelli had what occupation?',
    answers: ['lawyer'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'What element\'s name is based on the Spanish for "little silver"?',
    answers: ['platinum'],
    category: 'Science & Geography',
  },
  {
    question: 'In what U.S. state would you find Arches National Park?',
    answers: ['utah', 'ut'],
    category: 'Science & Geography',
  },
  {
    question: '"The Olive" is a boat belonging to what cartoon character?',
    answers: ['popeye'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'Garry Kasparov\'s 2007 book is titled "How Life Imitates" what?',
    answers: ['chess', 'howlifeimitateschess'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'A man without any clothes is cheekily said to be going "the full" what?',
    answers: ['monty', 'thefullmonty', 'fullmonty'],
    category: 'Society & Humanities',
  },
  {
    question: 'In "Star Wars: The Empire Strikes Back", Han Solo memorably says, "Laugh it Up Fuzzball" to what character?',
    answers: ['chewbacca'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'What group of reptilian heroes are referred to as "heroes in a half shell" in their original TV show theme?',
    answers: ['tmnt', 'teenagemutantninjaturtles', 'tmht', 'teenagemutantheroturtles'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'Strikers, midfielders, and defenders are roles in what sport?',
    answers: ['soccer', 'football'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'The Serengeti National Park is located in which country?',
    answers: ['tanzania'],
    category: 'Science & Geography',
  },
  {
    question: 'What is the name of Scooby Doo\'s nephew?',
    answers: ['scrappy', 'scrappydoo'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'The Great Molasses Flood occurred in what city in January 1919?',
    answers: ['boston'],
    category: 'Society & Humanities',
  },
  {
    question: 'What fictional Skunk character was created by Warner Bros and was first introduced in 1945?',
    answers: ['pepelepew'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'Which controversial American comedian was arrested after performing a set on seven words you can\'t say on television?',
    answers: ['georgecarlin', 'carlin'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'What is the smallest landlocked country?',
    answers: ['vaticancity', 'vatican', 'thevatican', 'holysee', 'theholysee'],
    category: 'Science & Geography',
  },
  {
    question: 'Which actor has starred in movies such The Matrix, John Wick, and Constantine?',
    answers: ['reeves', 'keanureeves'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'What term refers to the one in a million chance of death?',
    answers: ['micromort'],
    category: 'Science & Geography',
  },
  {
    question: 'The state of Rhodesia was the predecessor to which modern-day country?',
    answers: ['zimbabwe'],
    category: 'Science & Geography',
  },
  {
    question: 'Which fish are named for having lower jaws which are distinctively much longer than their upper jaws?',
    answers: ['halfbeak', 'halfbeaks'],
    category: 'Science & Geography',
  },
  {
    question: 'Which nation\'s symbol is an eagle perched on a cactus with a writhing snake in its beak?',
    answers: ['mexico'],
    category: 'Society & Humanities',
  },
  {
    question: 'Which landlocked country was formerly known as Kirghizia?',
    answers: ['kyrgyzstan'],
    category: 'Science & Geography',
  },
  {
    question: 'How many strings does a mandolin have?',
    answers: ['8', 'eight'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'The internet domain ".fm" is the country-code top-level domain for which Pacific Ocean island nation?',
    answers: ['micronesia'],
    category: 'Science & Geography',
  },
  {
    question: 'Who was the President of the United States during the signing of the Gadsden Purchase?',
    answers: ['franklinpierce', 'pierce'],
    category: 'Science & Geography',
  },
  {
    question: 'What is the 100th digit of Pi?',
    answers: ['9', 'nine'],
    category: 'Science & Geography',
  },
  {
    question: 'What is the name for the auditory illusion of a note that seems to be rising infinitely?',
    answers: ['shepard', 'shepardtone', 'shepardscale'],
    category: 'Science & Geography',
  },
  {
    question: 'The moons Miranda, Ariel, Umbriel, Titania and Oberon orbit which planet?',
    answers: ['uranus'],
    category: 'Science & Geography',
  },
  {
    question: 'What colour is the circle on the Japanese flag?',
    answers: ['red'],
    category: 'Society & Humanities',
  },
  {
    question: 'Brian May was the guitarist for which band?',
    answers: ['queen'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'In which year did the first Monster Hunter game get released?',
    answers: ['2004'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'Brazil was a former colony under which country?',
    answers: ['portugal'],
    category: 'Science & Geography',
  },
  {
    question: 'Who painted The Starry Night?',
    answers: ['vincentvangogh', 'gogh', 'vangogh'],
    category: 'Society & Humanities',
  },
  {
    question: 'What was the name of the chemical that was dropped on Vietnam during the Vietnam war?',
    answers: ['agentorange'],
    category: 'Society & Humanities',
  },
  {
    question: 'How many nipples does an echidna have?',
    answers: ['0', 'zero', 'none', 'nil'],
    category: 'Science & Geography',
  },
  {
    question: 'What is the thylacine more commonly known as?',
    answers: ['tasmaniantiger', 'thetasmaniantiger'],
    category: 'Science & Geography',
  },
  {
    question: 'What is an egg-laying mammal called?',
    answers: ['montreme', 'amonotreme'],
    category: 'Science & Geography',
  },
  {
    question: 'What is an egg-laying mammal called?',
    answers: ['montreme', 'amonotreme'],
    category: 'Science & Geography',
  },
  {
    question: 'What famous race was established in 1903?',
    answers: ['tourdefrance', 'thetourdefrance'],
    category: 'Society & Humanities',
  },
  {
    question: 'Which country was the first to give women the right to vote?',
    answers: ['newzealand'],
    category: 'Society & Humanities',
  },
  {
    question: 'What was the largest pure gold nugget (weighing 70.92kg) ever discovered called?',
    answers: ['thewelcomestranger', 'welcomestranger'],
    category: 'Society & Humanities',
  },
  {
    question: 'In what city was the Olympic torch first lit?',
    answers: ['olympia'],
    category: 'Society & Humanities',
  },
  {
    question: 'How many mascots did the Sydney Olympics have?',
    answers: ['3', 'three'],
    category: 'Society & Humanities',
  },
  {
    question: 'By what name is Maurice Micklewhite better known as?',
    answers: ['michaelcaine', 'caine', 'sirmichaelcaine'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'Which US President\'s domestic policy was called the Square Deal?',
    answers: ['teddyroosevelt', 'roosevelt', 'theodoreroosevelt'],
    category: 'Society & Humanities',
  },
  {
    question: 'Which play is also known as "The Scottish Play"?',
    answers: ['macbeth'],
    category: 'Society & Humanities',
  },
  {
    question: 'By what name is Robert Zimmerman better known as?',
    answers: ['bobdylan', 'dylan'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'By what name is Richard Starkey better known as?',
    answers: ['ringostarr', 'starr'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'By what name is Reginald Dwight better known as?',
    answers: ['eltonjohn', 'john'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'What is the main ingredient in the soup Borscht?',
    answers: ['beetroot', 'beetroots', 'beet', 'beets'],
    category: 'Society & Humanities',
  },
  {
    question: 'What bird has the biggest wingspan?',
    answers: ['albatross'],
    category: 'Science & Geography',
  },
  {
    question: 'What do you call a group of rhinoceros?',
    answers: ['acrash', 'crash'],
    category: 'Science & Geography',
  },
  {
    question: 'Which country is Mt Etna in?',
    answers: ['italy'],
    category: 'Science & Geography',
  },
  {
    question: 'To what genus of tree does the wattle belong?',
    answers: ['acacia'],
    category: 'Science & Geography',
  },
  {
    question: 'What word describes a part of your hand and a type of tree?',
    answers: ['palm'],
    category: 'Science & Geography',
  },
  {
    question: 'What is the name given to the art of miniaturising trees and maintaining their small size?',
    answers: ['bonsai'],
    category: 'Arts & Entertainment',
  },
  {
    question: 'What creature is depicted on the Welsh Flag?',
    answers: ['dragon', 'adragon', 'reddragon', 'areddragon'],
    category: 'Society & Humanities',
  },
  {
    question: 'What is the flower emblem of Wales?',
    answers: ['daffodil'],
    category: 'Society & Humanities',
  },
  {
    question: 'Who is the patron saint of Wales?',
    answers: ['stdavid', 'david'],
    category: 'Society & Humanities',
  },
  {
    question: 'What nut is used to make marzipan?',
    answers: ['almond'],
    category: 'Society & Humanities',
  },
  {
    question: 'What famous playwright has his birthday on 23rd April?',
    answers: ['shakespeare', 'williamshakespeare', 'bardofavon'],
    category: 'Society & Humanities',
  },
  {
    question: 'Which country celebrates its National Day on 17th May?',
    answers: ['norway'],
    category: 'Society & Humanities',
  },
  {
    question: 'What was signed on 15th June 1215?',
    answers: ['themagnacarta', 'magnacarta'],
    category: 'Society & Humanities',
  },
  {
    question: 'Which Vice President was the only one to serve two full terms as President?',
    answers: ['jefferson', 'thomasjefferson'],
    category: 'Society & Humanities',
  },
];

module.exports = questions;
