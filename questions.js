const artsandentertainment = 'Arts & Entertainment';
const societyandhumanities = 'Society & Humanities';
const scienceandgeography = 'Science & Geography';

const questions = [
  {
    question: '7-Eleven stores were temporarily converted into Kwik E-marts to promote the release of what movie?',
    answers: ['thesimpsons', 'simpsons', 'simpsonsmovie', 'thesimpsonsmovie'],
    category: artsandentertainment,
  },
  {
    question: 'On average, what denomination of U.S. paper currency remains in circulation the longest?',
    answers: ['100dollarbill', '100dollars', 'onehundred', '100', 'onehundreddollars', 'onehundreddollar', 'onehundreddollarbill'],
    category: societyandhumanities,
  },
  {
    question: 'A 2010 study found that nearly 70% of what imported item failed to live up to its claims of being "extra virgin"?',
    answers: ['oliveoil', 'extravirginoliveoil'],
    category: scienceandgeography,
  },
  {
    question: 'A bit of folk wisdom warns that when you point a finger at someone, how many fingers are pointing back at you?',
    answers: ['three', '3'],
    category: societyandhumanities,
  },
  {
    question: 'In "The Simpsons", what member of the Simpson family is commonly seen sucking on a pacifier?',
    answers: ['maggie', 'maggiesimpson', 'margaret'],
    category: artsandentertainment,
  },
  {
    question: 'In the act that incited WWI, Serbian Gavrilo Princip assassinated Archduke Franz Ferdinand in 1914 in what city?',
    answers: ['sarajevo'],
    category: societyandhumanities,
  },
  {
    question: 'How old was Daniel Radcliffe when the first "Harry Potter" film came out?',
    answers: ['12', 'twelve'],
    category: artsandentertainment,
  },
  {
    question: 'Due to the popularity of "Harry Potter", what word was added to the Oxford English dictionary in 2003?',
    answers: ['muggle'],
    category: artsandentertainment,
  },
  {
    question: 'In the "Harry Potter" series, what school does Harry Potter attend?',
    answers: ['hogwarts', 'hogwartsschoolofwitchcraftandwizardry'],
    category: artsandentertainment,
  },
  {
    question: 'What is the fourth book in the "Harry Potter" series?',
    answers: ['gobletoffire', 'harrypotterandthegobletoffire', 'thegobletoffire'],
    category: artsandentertainment,
  },
  {
    question: 'What chemical element has the symbol Pr?',
    answers: ['praseodymium'],
    category: scienceandgeography,
  },
  {
    question: 'Who was the first United States Secretary of State?',
    answers: ['thomasjefferson', 'jefferson'],
    category: societyandhumanities,
  },
  {
    question: 'Which actor played Hannibal Lecter in the "Hannibal" movie trilogy?',
    answers: ['siranthonyhopkins', 'anthonyhopkins', 'hopkins', 'siranthony'],
    category: artsandentertainment,
  },
  {
    question: 'Margaret Thatcher was the prime minister of which country?',
    answers: ['united kingdom', 'uk'],
    category: societyandhumanities,
  },
  {
    question: 'What was the legal first name of King George VI?',
    answers: ['albert'],
    category: societyandhumanities,
  },
  {
    question: 'What is the regnal name of the first monarch to abdicate?',
    answers: ['kingedwardviii', 'edwardviii', 'kingedward8th', 'kingedwardeighth', 'edwardeighth', 'kingedward8', 'edward8', 'edwardeight'],
    category: societyandhumanities,
  },
  {
    question: 'On the children\'s TV "Dora the Explorer", what is the name of the Dora\'s friend monkey?',
    answers: ['boots'],
    category: artsandentertainment,
  },
  {
    question: 'What kind of whale is featured in the classic tale "Moby Dick"?',
    answers: ['sperm', 'spermwhale'],
    category: artsandentertainment,
  },
  {
    question: 'What is pluviophobia the fear of?',
    answers: ['rain', 'storms', 'storm', 'lightning', 'thunder'],
    category: scienceandgeography,
  },
  {
    question: 'What was the first zeppelin made of?',
    answers: ['aluminum', 'aluminium'],
    category: scienceandgeography,
  },
  {
    question: 'Which major river flows through Gloucester?',
    answers: ['severn'],
    category: scienceandgeography,
  },
  {
    question: 'In the show "American Dad", character Steve Smith attends what school?',
    answers: ['pearlbailey', 'pearlbaileyschool', 'pearlbaileyhigh', 'pearlbaileyhighschool'],
    category: artsandentertainment,
  },
  {
    question: 'What software company shares its name with a building material made from earthen materials?',
    answers: ['adobe'],
    category: societyandhumanities,
  },
  {
    question: 'What is the name of the longest river in the Western Hemisphere?',
    answers: ['amazon', 'theamazon', 'amazonriver', 'theamazonriver'],
    category: scienceandgeography,
  },
  {
    question: 'What does an anemometer measure?',
    answers: ['wind', 'windspeed', 'windvelocity', 'winddirection'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Finland?',
    answers: ['helsinki'],
    category: scienceandgeography,
  },
  {
    question: 'Which country has the same name as a bird?',
    answers: ['turkey'],
    category: scienceandgeography,
  },
  {
    question: 'What colour is the Art & Literature wedge in the original version of "Trivial Pursuit"?',
    answers: ['brown'],
    category: artsandentertainment,
  },
  {
    question: 'What is the capital of Tuvalu?',
    answers: ['funafuti'],
    category: scienceandgeography,
  },
  {
    question: 'In what US state is The Grand Canyon found?',
    answers: ['arizona', 'az'],
    category: scienceandgeography,
  },
  {
    question: 'What was Mozart\'s first name?',
    answers: ['wolfgang'],
    category: artsandentertainment,
  },
  {
    question: 'Which country did the French know as Terra Napoleon?',
    answers: ['australia', 'commonwealthofaustralia'],
    category: societyandhumanities,
  },
  {
    question: 'What is the largest Australian state by area?',
    answers: ['wa', 'westernaustralia'],
    category: scienceandgeography,
  },
  {
    question: 'What is the name of the largest island in the world?',
    answers: ['greenland'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Eritrea?',
    answers: ['asmara'],
    category: scienceandgeography,
  },
  {
    question: 'Which Formula One team did both Nigel Mansell and Damon Hill drive for?',
    answers: ['williams'],
    category: artsandentertainment,
  },
  {
    question: 'What is the birthstone for May?',
    answers: ['emerald'],
    category: societyandhumanities,
  },
  {
    question: 'What type of beans did Hannibal Lecter like to eat liver with?',
    answers: ['fava'],
    category: artsandentertainment,
  },
  {
    question: 'What is the name of the covering on the tip of a shoelace?',
    answers: ['aglet'],
    category: societyandhumanities,
  },
  {
    question: 'What chemical element is used in the process of galvanisation?',
    answers: ['zinc', 'zn'],
    category: scienceandgeography,
  },
  {
    question: 'Which planet has a moon called Europa?',
    answers: ['jupiter'],
    category: scienceandgeography,
  },
  {
    question: 'The Elo rating system was originally used to rate players of which board game?',
    answers: ['chess'],
    category: societyandhumanities,
  },
  {
    question: 'In which US state is Panama City?',
    answers: ['florida', 'fl'],
    category: scienceandgeography,
  },
  {
    question: 'What term is given to an 11 on the Beaufort Wind Scale?',
    answers: ['violentstorm'],
    category: scienceandgeography,
  },
  {
    question: 'How many bonus points are given in Scrabble if all seven tiles are played at once?',
    answers: ['fifty', '50'],
    category: artsandentertainment,
  },
  {
    question: 'Who wrote the novel "The Silence of the Lambs"?',
    answers: ['harris', 'thomasharris'],
    category: artsandentertainment,
  },
  {
    question: 'Fescue is what type of plant?',
    answers: ['grass'],
    category: scienceandgeography,
  },
  {
    question: 'What is the sequel to the novel "Little Women"?',
    answers: ['goodwives'],
    category: artsandentertainment,
  },
  {
    question: 'Which actress\'s real name was Frances Gumm?',
    answers: ['judygarland', 'garland'],
    category: artsandentertainment,
  },
  {
    question: 'What is the 30th longest river in the world?',
    answers: ['thethamesriver', 'thethames', 'thamesriver', 'thames'],
    category: scienceandgeography,
  },
  {
    question: 'What is the name of the large, prominent vein in the side of your neck?',
    answers: ['jugularvein', 'jugular'],
    category: scienceandgeography,
  },
  {
    question: 'The agave plant is the source of which liquor?',
    answers: ['tequila'],
    category: scienceandgeography,
  },
  {
    question: 'Which Zodiac sign is represented by fish?',
    answers: ['pisces'],
    category: scienceandgeography,
  },
  {
    question: 'Who played the lead in the movie "The Matrix"?',
    answers: ['keanureeves', 'reeves'],
    category: artsandentertainment,
  },
  {
    question: 'What nerve agent was used in the assassination of Kim Jong Nam?',
    answers: ['sarin', 'saringas'],
    category: societyandhumanities,
  },
  {
    question: 'What animal is the mascot of Coca-Cola?',
    answers: ['polarbear'],
    category: societyandhumanities,
  },
  {
    question: 'In the name of the food corned beef, "corn" refers to what seasoning commonly found on dinner tables?',
    answers: ['salt'],
    category: societyandhumanities,
  },
  {
    question: 'Which language isolate has the most native speakers?',
    answers: ['korean'],
    category: societyandhumanities,
  },
  {
    question: 'Which animal has the largest penis-to-body size ratio?',
    answers: ['barnacle'],
    category: scienceandgeography,
  },
  {
    question: 'What was the name of the built in local communication app in the Nintendo DS?',
    answers: ['pictochat'],
    category: artsandentertainment,
  },
  {
    question: 'What was the name of the US President before Donald Trump?',
    answers: ['barackobama', 'obama', 'barack'],
    category: societyandhumanities,
  },
  {
    question: 'What is added to ginger beer to make the non-alcoholic drink "Shirley Temple"?',
    answers: ['grenadine'],
    category: societyandhumanities,
  },
  {
    question: 'In the abbreviation for the medical procedure popularly known as an MRI, what does the "I" stand for?',
    answers: ['imaging'],
    category: scienceandgeography,
  },
  {
    question: 'The River Indus in Pakistan begins at what lake?',
    answers: ['manasarovar', 'lake manasarovar'],
    category: scienceandgeography,
  },
  {
    question: 'On the 2010 Forbes 400 list, what billionaire identifies himself as residing in Medina, Washington?',
    answers: ['gates', 'bill gates'],
    category: societyandhumanities,
  },
  {
    question: 'A common ingredient in ice cream and toothpaste, carrageenan is an extract of what?',
    answers: ['seaweed', 'redseaweed'],
    category: scienceandgeography,
  },
  {
    question: 'On Twitter, a proper "Twaiku" poem consists of 140 characters or fewer and how many syllables?',
    answers: ['seven', '7'],
    category: societyandhumanities,
  },
  {
    question: 'In the full name of the military alliance NATO, the "T" stands for what?',
    answers: ['treaty'],
    category: societyandhumanities,
  },
  {
    question: 'In the human body, the pericardium is a membrane that surrounds what organ?',
    answers: ['heart', 'theheart'],
    category: scienceandgeography,
  },
  {
    question: 'In the military, a Huey is a type of what?',
    answers: ['helicopter'],
    category: societyandhumanities,
  },
  {
    question: 'Which prehistoric dinosaur do paleontologists believe was likely covered in feathers?',
    answers: ['velociraptor'],
    category: scienceandgeography,
  },
  {
    question: 'A group of what birds is known as murder?',
    answers: ['crow'],
    category: scienceandgeography,
  },
  {
    question: 'Patients who elect to have malar augmentation surgery wish to increase the size of their what?',
    answers: ['cheeks', 'cheek'],
    category: scienceandgeography,
  },
  {
    question: 'In the popular drink bubble tea, "bubbles" or boba are typically made from what?',
    answers: ['tapioca'],
    category: scienceandgeography,
  },
  {
    question: 'In the Republican party abbreviation GOP, the "G" stands for what?',
    answers: ['grand'],
    category: societyandhumanities,
  },
  {
    question: 'In the song "Frosty The Snowman", what part of Frosty\'s face is made of a button?',
    answers: ['nose'],
    category: societyandhumanities,
  },
  {
    question: 'Performed to assist breathing, a tracheotomy is a surgery on what part of the body?',
    answers: ['trachea', 'windpipe', 'windpipe'],
    category: scienceandgeography,
  },
  {
    question: 'Celebrated on February 6th, Waitangi Day is the national holiday of which nation?',
    answers: ['newzealand'],
    category: societyandhumanities,
  },
  {
    question: 'Klondike is a popular variety of what card game?',
    answers: ['society'],
    category: artsandentertainment,
  },
  {
    question: 'A mochaccino is traditionally made by adding what ingredient to a cappuccino?',
    answers: ['chocolate', 'cocoa', 'cacao'],
    category: societyandhumanities,
  },
  {
    question: 'Physicist Stephen Hawking\'s bestselling 1988 book on the cosmos is titled "A Brief History of" what?',
    answers: ['time'],
    category: artsandentertainment,
  },
  {
    question: 'A BLAT sandwich has bacon, lettuce, tomato, and what?',
    answers: ['avocado'],
    category: societyandhumanities,
  },
  {
    question: 'In the world of DC Comics, Barbara Gordon is better known as what comic book superhero?',
    answers: ['batgirl', 'batgirl'],
    category: artsandentertainment,
  },
  {
    question: 'Mistletoe plants normally have what color berries?',
    answers: ['white'],
    category: scienceandgeography,
  },
  {
    question: 'In the \'70s, what sport transitioned from traditional white balls to "optic yellow", which were more visible to TV viewers?',
    answers: ['tennis'],
    category: artsandentertainment,
  },
  {
    question: 'A person who is said to be "playing the back nine" is participating in what sport?',
    answers: ['golf'],
    category: artsandentertainment,
  },
  {
    question: 'A pescetarian breaks from the vegetarian code by eating which food?',
    answers: ['fish'],
    category: societyandhumanities,
  },
  {
    question: 'Popular in India, paneer is a type of what food?',
    answers: ['cheese'],
    category: societyandhumanities,
  },
  {
    question: 'A popular brunch cocktail, the Bellini is typically made by mixing champagne with what pureed fruit?',
    answers: ['peach', 'peaches'],
    category: societyandhumanities,
  },
  {
    question: 'A popular holiday dish that features a chicken stuffed inside a duck stuffed inside a turkey goes by what name?',
    answers: ['turducken'],
    category: societyandhumanities,
  },
  {
    question: 'A popular tourist destination in Europe, Prague is the capital of what country?',
    answers: ['czechrepublic', 'czechia'],
    category: scienceandgeography,
  },
  {
    question: 'Prior to becoming a world famous Italian tenor, Andrea Bocelli had what occupation?',
    answers: ['lawyer'],
    category: artsandentertainment,
  },
  {
    question: 'What element\'s name is based on the Spanish for "little silver"?',
    answers: ['platinum'],
    category: scienceandgeography,
  },
  {
    question: 'In what U.S. state would you find Arches National Park?',
    answers: ['utah', 'ut'],
    category: scienceandgeography,
  },
  {
    question: '"The Olive" is a boat belonging to what cartoon character?',
    answers: ['popeye'],
    category: artsandentertainment,
  },
  {
    question: 'Garry Kasparov\'s 2007 book is titled "How Life Imitates" what?',
    answers: ['chess', 'howlifeimitateschess'],
    category: artsandentertainment,
  },
  {
    question: 'A man without any clothes is cheekily said to be going "the full" what?',
    answers: ['monty', 'thefullmonty', 'fullmonty'],
    category: societyandhumanities,
  },
  {
    question: 'In "Star Wars: The Empire Strikes Back", Han Solo memorably says, "Laugh it Up Fuzzball" to what character?',
    answers: ['chewbacca'],
    category: artsandentertainment,
  },
  {
    question: 'What group of reptilian heroes are referred to as "heroes in a half shell" in their original TV show theme?',
    answers: ['tmnt', 'teenagemutantninjaturtles', 'tmht', 'teenagemutantheroturtles'],
    category: artsandentertainment,
  },
  {
    question: 'Strikers, midfielders, and defenders are roles in what sport?',
    answers: ['soccer', 'football'],
    category: artsandentertainment,
  },
  {
    question: 'The Serengeti National Park is located in which country?',
    answers: ['tanzania'],
    category: scienceandgeography,
  },
  {
    question: 'What is the name of Scooby Doo\'s nephew?',
    answers: ['scrappy', 'scrappydoo'],
    category: artsandentertainment,
  },
  {
    question: 'The Great Molasses Flood occurred in what city in January 1919?',
    answers: ['boston'],
    category: societyandhumanities,
  },
  {
    question: 'What fictional Skunk character was created by Warner Bros and was first introduced in 1945?',
    answers: ['pepelepew'],
    category: artsandentertainment,
  },
  {
    question: 'Which controversial American comedian was arrested after performing a set on seven words you can\'t say on television?',
    answers: ['georgecarlin', 'carlin'],
    category: artsandentertainment,
  },
  {
    question: 'What is the smallest landlocked country?',
    answers: ['vaticancity', 'vatican', 'thevatican', 'holysee', 'theholysee'],
    category: scienceandgeography,
  },
  {
    question: 'Which actor has starred in movies such The Matrix, John Wick, and Constantine?',
    answers: ['reeves', 'keanureeves'],
    category: artsandentertainment,
  },
  {
    question: 'What term refers to the one in a million chance of death?',
    answers: ['micromort'],
    category: scienceandgeography,
  },
  {
    question: 'The state of Rhodesia was the predecessor to which modern-day country?',
    answers: ['zimbabwe'],
    category: scienceandgeography,
  },
  {
    question: 'Which fish are named for having lower jaws which are distinctively much longer than their upper jaws?',
    answers: ['halfbeak', 'halfbeaks'],
    category: scienceandgeography,
  },
  {
    question: 'Which nation\'s symbol is an eagle perched on a cactus with a writhing snake in its beak?',
    answers: ['mexico'],
    category: societyandhumanities,
  },
  {
    question: 'Which landlocked country was formerly known as Kirghizia?',
    answers: ['kyrgyzstan'],
    category: scienceandgeography,
  },
  {
    question: 'How many strings does a mandolin have?',
    answers: ['8', 'eight'],
    category: artsandentertainment,
  },
  {
    question: 'The internet domain ".fm" is the country-code top-level domain for which Pacific Ocean island nation?',
    answers: ['micronesia', 'federatedmicronesia', 'federatedstatesofmicronesia'],
    category: scienceandgeography,
  },
  {
    question: 'Who was the President of the United States during the signing of the Gadsden Purchase?',
    answers: ['franklinpierce', 'pierce'],
    category: scienceandgeography,
  },
  {
    question: 'What is the 100th digit of Pi?',
    answers: ['9', 'nine'],
    category: scienceandgeography,
  },
  {
    question: 'What is the name for the auditory illusion of a note that seems to be rising infinitely?',
    answers: ['shepard', 'shepardtone', 'shepardscale'],
    category: scienceandgeography,
  },
  {
    question: 'The moons Miranda, Ariel, Umbriel, Titania and Oberon orbit which planet?',
    answers: ['uranus'],
    category: scienceandgeography,
  },
  {
    question: 'What colour is the circle on the Japanese flag?',
    answers: ['red'],
    category: societyandhumanities,
  },
  {
    question: 'Brian May was the guitarist for which band?',
    answers: ['queen'],
    category: artsandentertainment,
  },
  {
    question: 'In which year did the first Monster Hunter game get released?',
    answers: ['2004'],
    category: artsandentertainment,
  },
  {
    question: 'Brazil was a former colony under which country?',
    answers: ['portugal'],
    category: scienceandgeography,
  },
  {
    question: 'Who painted The Starry Night?',
    answers: ['vincentvangogh', 'gogh', 'vangogh'],
    category: societyandhumanities,
  },
  {
    question: 'What was the name of the chemical that was dropped on Vietnam during the Vietnam war?',
    answers: ['agentorange'],
    category: societyandhumanities,
  },
  {
    question: 'How many nipples does an echidna have?',
    answers: ['0', 'zero', 'none', 'nil'],
    category: scienceandgeography,
  },
  {
    question: 'What is the thylacine more commonly known as?',
    answers: ['tasmaniantiger', 'thetasmaniantiger'],
    category: scienceandgeography,
  },
  {
    question: 'What is an egg-laying mammal called?',
    answers: ['montreme', 'amonotreme'],
    category: scienceandgeography,
  },
  {
    question: 'What is an egg-laying mammal called?',
    answers: ['montreme', 'amonotreme'],
    category: scienceandgeography,
  },
  {
    question: 'What famous race was established in 1903?',
    answers: ['tourdefrance', 'thetourdefrance'],
    category: societyandhumanities,
  },
  {
    question: 'Which country was the first to give women the right to vote?',
    answers: ['newzealand'],
    category: societyandhumanities,
  },
  {
    question: 'What was the largest pure gold nugget (weighing 70.92kg) ever discovered called?',
    answers: ['thewelcomestranger', 'welcomestranger'],
    category: societyandhumanities,
  },
  {
    question: 'In what city was the Olympic torch first lit?',
    answers: ['olympia'],
    category: societyandhumanities,
  },
  {
    question: 'How many mascots did the Sydney Olympics have?',
    answers: ['3', 'three'],
    category: societyandhumanities,
  },
  {
    question: 'By what name is Maurice Micklewhite better known as?',
    answers: ['michaelcaine', 'caine', 'sirmichaelcaine'],
    category: artsandentertainment,
  },
  {
    question: 'Which US President\'s domestic policy was called the Square Deal?',
    answers: ['teddyroosevelt', 'roosevelt', 'theodoreroosevelt'],
    category: societyandhumanities,
  },
  {
    question: 'Which play is also known as "The Scottish Play"?',
    answers: ['macbeth'],
    category: societyandhumanities,
  },
  {
    question: 'By what name is Robert Zimmerman better known as?',
    answers: ['bobdylan', 'dylan'],
    category: artsandentertainment,
  },
  {
    question: 'By what name is Richard Starkey better known as?',
    answers: ['ringostarr', 'starr'],
    category: artsandentertainment,
  },
  {
    question: 'By what name is Reginald Dwight better known as?',
    answers: ['eltonjohn', 'john'],
    category: artsandentertainment,
  },
  {
    question: 'What is the main ingredient in the soup Borscht?',
    answers: ['beetroot', 'beetroots', 'beet', 'beets'],
    category: societyandhumanities,
  },
  {
    question: 'What bird has the biggest wingspan?',
    answers: ['albatross'],
    category: scienceandgeography,
  },
  {
    question: 'What do you call a group of rhinoceros?',
    answers: ['acrash', 'crash'],
    category: scienceandgeography,
  },
  {
    question: 'Which country is Mt Etna in?',
    answers: ['italy'],
    category: scienceandgeography,
  },
  {
    question: 'To what genus of tree does the wattle belong?',
    answers: ['acacia'],
    category: scienceandgeography,
  },
  {
    question: 'What word describes a part of your hand and a type of tree?',
    answers: ['palm'],
    category: scienceandgeography,
  },
  {
    question: 'What is the name given to the art of miniaturising trees and maintaining their small size?',
    answers: ['bonsai'],
    category: artsandentertainment,
  },
  {
    question: 'What creature is depicted on the Welsh Flag?',
    answers: ['dragon', 'adragon', 'reddragon', 'areddragon'],
    category: societyandhumanities,
  },
  {
    question: 'What is the flower emblem of Wales?',
    answers: ['daffodil'],
    category: societyandhumanities,
  },
  {
    question: 'Who is the patron saint of Wales?',
    answers: ['stdavid', 'david'],
    category: societyandhumanities,
  },
  {
    question: 'What nut is used to make marzipan?',
    answers: ['almond'],
    category: societyandhumanities,
  },
  {
    question: 'What famous playwright has his birthday on 23rd April?',
    answers: ['shakespeare', 'williamshakespeare', 'bardofavon'],
    category: societyandhumanities,
  },
  {
    question: 'Which country celebrates its National Day on 17th May?',
    answers: ['norway'],
    category: societyandhumanities,
  },
  {
    question: 'What was signed on 15th June 1215?',
    answers: ['themagnacarta', 'magnacarta'],
    category: societyandhumanities,
  },
  {
    question: 'Which Vice President was the only one to serve two full terms as President?',
    answers: ['jefferson', 'thomasjefferson'],
    category: societyandhumanities,
  },
  {
    question: 'What is the only animal, other than a human, that can catch leprosy?',
    answers: ['armadillo', 'thearmadillo'],
    category: scienceandgeography,
  },
  {
    question: 'The inspiration for the Pokemon region of Orre is from what American city?',
    answers: ['phoenix'],
    category: artsandentertainment,
  },
  {
    question: 'Which legendary games designer/producer created the Super Mario Brothers franchise for Nintendo?',
    answers: ['shigerumiyamoto', 'miyamoto'],
    category: artsandentertainment,
  },
  {
    question: 'Which magazine always features an obituary on its last page?',
    answers: ['rollingstone'],
    category: artsandentertainment,
  },
  {
    question: 'Who was the first male to appear on the cover of Playboy in 1964?',
    answers: ['petersellers', 'sellers'],
    category: artsandentertainment,
  },
  {
    question: 'In which movie did Bruce Willis play the role of Corben Dallas?',
    answers: ['thefifthelement', 'fifthelement'],
    category: artsandentertainment,
  },
  {
    question: 'Which movie director tries to include a shooting star scene in every film he makes, claiming it is for luck?',
    answers: ['stevenspielberg', 'spielberge'],
    category: artsandentertainment,
  },
  {
    question: 'Which actor played the role of Chewbacca in the Star Wars trilogy?',
    answers: ['petermayhew', 'mayhew'],
    category: artsandentertainment,
  },
  {
    question: 'Which actor played the role of Chewbacca in the Star Wars trilogy?',
    answers: ['petermayhew', 'mayhew'],
    category: artsandentertainment,
  },
  {
    question: 'The theme tune for "Monty Python\'s Flying Circus" was written by which composer?',
    answers: ['sousa', 'johnsousa', 'philipsousa', 'johnphilipsousa'],
    category: artsandentertainment,
  },
  {
    question: 'What was the working title for The Beatles\' song "Yesterday"?',
    answers: ['scrambledegg'],
    category: artsandentertainment,
  },
  {
    question: 'According to Olympic rules, how many feathers must a badminton bird (shuttlecock) have?',
    answers: ['14', 'fourteen'],
    category: artsandentertainment,
  },
  {
    question: 'Which planet is covered in thick clouds of carbon dioxide and sulphuric acid?',
    answers: ['venus'],
    category: scienceandgeography,
  },
  {
    question: 'Which planet is known as the red planet?',
    answers: ['mars'],
    category: scienceandgeography,
  },
  {
    question: 'In which organ is bile produced?',
    answers: ['liver'],
    category: scienceandgeography,
  },
  {
    question: 'Which breed of dog has an inability to bark?',
    answers: ['basenji'],
    category: scienceandgeography,
  },
  {
    question: 'What is the name of the process used by green plants for using solar power to produce ATP?',
    answers: ['photosynthesis'],
    category: scienceandgeography,
  },
  {
    question: 'What is the study of insects called?',
    answers: ['entomology'],
    category: scienceandgeography,
  },
  {
    question: 'What name is given to a male bee?',
    answers: ['drone'],
    category: scienceandgeography,
  },
  {
    question: 'What name is given to animals that eat both plants and meat?',
    answers: ['omnivore', 'omnivores'],
    category: scienceandgeography,
  },
  {
    question: 'What name is given to animals that only eat meat?',
    answers: ['carnivore', 'carnivores'],
    category: scienceandgeography,
  },
  {
    question: 'What name is given to animals that only eat plants?',
    answers: ['herbivore', 'herbivores'],
    category: scienceandgeography,
  },
  {
    question: 'Which bird became extinct in 1861?',
    answers: ['dodo', 'thedodo'],
    category: scienceandgeography,
  },
  {
    question: 'Which element has the chemical symbol name "Au"?',
    answers: ['gold'],
    category: scienceandgeography,
  },
  {
    question: 'Which element has the chemical symbol name "Na"?',
    answers: ['sodium'],
    category: scienceandgeography,
  },
  {
    question: 'Which element has the chemical symbol name "Sb"?',
    answers: ['antimony'],
    category: scienceandgeography,
  },
  {
    question: 'Which element has the chemical symbol name "Sn"?',
    answers: ['tin'],
    category: scienceandgeography,
  },
  {
    question: 'What is another name for iron oxide?',
    answers: ['rust'],
    category: scienceandgeography,
  },
  {
    question: 'What name is given to a chemical reaction which releases heat?',
    answers: ['exothermic'],
    category: scienceandgeography,
  },
  {
    question: 'Who invented dynamite?',
    answers: ['alfrednobel', 'nobel'],
    category: scienceandgeography,
  },
  {
    question: 'In computers, how many bits are in a nibble?',
    answers: ['4', 'four'],
    category: scienceandgeography,
  },
  {
    question: 'How many feet are in a nautical mile?',
    answers: ['6080', 'sixthousandandeighty'],
    category: scienceandgeography,
  },
  {
    question: 'How many herrings are in a warp?',
    answers: ['4', 'four'],
    category: scienceandgeography,
  },
  {
    question: 'How many muscles are in an average human?',
    answers: ['639', 'sixhundredandthirtynine'],
    category: scienceandgeography,
  },
  {
    question: 'How many seconds are in a day?',
    answers: ['86400', 'eightysixthousandfourhundred'],
    category: scienceandgeography,
  },
  {
    question: 'In a period of 400 years how many times does the 1st of January fall on a Sunday?',
    answers: ['58', 'fiftyeight'],
    category: scienceandgeography,
  },
  {
    question: 'In a chemical reaction, the substance which is oxidized itself is called what?',
    answers: ['reductant', 'reducing agent', 'reducer'],
    category: scienceandgeography,
  },
  {
    question: 'The Triassic, Jurrasic, and Cretaceous periods make up which era?',
    answers: ['mesozoic', 'mesozoic era'],
    category: scienceandgeography,
  },
  {
    question: 'The term sesquiquadricentennial represents how many years ?',
    answers: ['450', 'fourhundredandfifty'],
    category: scienceandgeography,
  },
  {
    question: 'What is the height of a horse measured in?',
    answers: ['hands'],
    category: scienceandgeography,
  },
  {
    question: 'What famous stone structure is located near Salisbury?',
    answers: ['stonehenge'],
    category: scienceandgeography,
  },
  {
    question: 'What is "LCD" an abbreviation of?',
    answers: ['liquidcrystaldisply'],
    category: scienceandgeography,
  },
  {
    question: 'What is "e.g." an abbreviation of?',
    answers: ['exempligratia'],
    category: societyandhumanities,
  },
  {
    question: 'Which record label reached fame in the 50\'s with acts such as "Marvin Gaye" and "The Temptations"?',
    answers: ['motown'],
    category: artsandentertainment,
  },
  {
    question: 'What musician\'s fans are commonly refered to as Dickheads?',
    answers: ['dickdale', 'dale'],
    category: artsandentertainment,
  },
  {
    question: 'The popular sea shanty "The Wellerman" has its origins in which country?',
    answers: ['newzealand'],
    category: societyandhumanities,
  },
  {
    question: 'What is the lead in pencils made from?',
    answers: ['graphite', 'carbon'],
    category: scienceandgeography,
  },
  {
    question: 'The music festival "Tomorrowland" happens in which country?',
    answers: ['belgium'],
    category: artsandentertainment,
  },
];

module.exports = questions;
