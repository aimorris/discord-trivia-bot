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
    answers: ['solitaire'],
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
    question: 'The Triassic, Jurassic, and Cretaceous periods make up which era?',
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
  {
    question: 'What name is given to those days which have equal hours of daylight and darkness?',
    answers: ['equinox'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was invented by Ludovic Zamenhof?',
    answers: ['esperanto'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of Aristotle\'s school?',
    answers: ['lyceum'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of the "fake" evolutionary missing link found in Sussex, England?',
    answers: ['piltdownman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where did the Mafia originate?',
    answers: ['sicily'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which American state is known as the Lone Star State?',
    answers: ['texas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which American state passed a bill declaring Pi to be 3?',
    answers: ['indiana'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which English book was written without using the letter \'E\' once?',
    answers: ['avoid'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which French book was written without using the letter \'E\' once?',
    answers: ['ladisparition'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Japanese suicide technique translates to the English "belly cutting"?',
    answers: ['hara-kiri'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which famous piece of artwork depcits the Battle of Hastings?',
    answers: ['bayeuxtapestry'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which gestalt entity produced the cult TV show Red Dwarf?',
    answers: ['(grant(&|and|,)?naylor|naylor(&|and|,)grant)'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the largest of the Egyptian Pyramids?',
    answers: ['pyramidofcheops'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which word is used to mean, malicious enjoyment at the misfortunes of others?',
    answers: ['schadenfreude'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who appears on the 10,000 dollar (US) note?',
    answers: ['salmonchase'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who appears on the 100,000 dollar (US) note?',
    answers: ['woodrowwilson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who appears on the 5,000 dollar (US) note?',
    answers: ['jamesmadison'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who does the Mona Lisa depict?',
    answers: ['madonnalisagherardini'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who does the statue, the Colossus of Rhodes, depict?',
    answers: ['helios'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented the toothbrush?',
    answers: ['williamaddis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is known as the "Father of History"?',
    answers: ['herodotus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is known as the "Father of Modern Economics"?',
    answers: ['adamsmith'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was America named after?',
    answers: ['amerigovespucci'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was responsible for the American style of spelling?',
    answers: ['noahwebster'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the first woman to fly the Atlantic alone?',
    answers: ['ameliaearhart'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Burma was the former name of which country?',
    answers: ['myanmar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Denmark, Norway and Sweden combine to make what?',
    answers: ['scandinavia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many countries have an area less then 10 square miles?',
    answers: ['four(vaticancity,monaco,nauruandtuvalu)'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which city is the Sistine Chapel?',
    answers: ['vaticancity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which continent would you find the Amazon river?',
    answers: ['southamerica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which continent would you find the Amur river?',
    answers: ['asia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which continent would you find the Congo river?',
    answers: ['africa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which continent would you find the Lena river?',
    answers: ['asia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which continent would you find the Mackenzie River?',
    answers: ['northamerica'],
    category: scienceandgeography,
  },
  {
    question: 'In which continent would you find the Mekong river?',
    answers: ['asia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which continent would you find the Mississippi river?',
    answers: ['northamerica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which continent would you find the Niger river?',
    answers: ['africa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which continent would you find the Nile river?',
    answers: ['africa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which continent would you find the Ob river?',
    answers: ['asia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which continent would you find the Volga river?',
    answers: ['europe'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which continent would you find the Yangtze river?',
    answers: ['asia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which continent would you find the Yellow river?',
    answers: ['asia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which continent would you find the Yenisey river?',
    answers: ['asia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country was natural gas first discovered?',
    answers: ['greece'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country was the first Zoo?',
    answers: ['china'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How was William Pitt the Elder\'s son known?',
    answers: ['williampitttheyounger'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country would you find Ayers Rock?',
    answers: ['australia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country would you find Dunkirk?',
    answers: ['france'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which state are the Everglades?',
    answers: ['florida'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On which river was Rome built?',
    answers: ['tiber'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is known as the graveyard of the Atlantic?',
    answers: ['sableisland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the basic unit of currency for Afghanistan?',
    answers: ['afghani'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Albania?',
    answers: ['lek'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Algeria?',
    answers: ['dinar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Andorra?',
    answers: ['peseta'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Angola?',
    answers: ['kwanza'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Antigua and Barbuda?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Argentina?',
    answers: ['peso'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Armenia?',
    answers: ['dram'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Australia?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Austria?',
    answers: ['schilling'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Azerbaijan?',
    answers: ['manat'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Bahamas?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Bahrain?',
    answers: ['dinar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Bangladesh?',
    answers: ['taka'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Barbados?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Belarus?',
    answers: ['rubel'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Belgium?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Belize?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Benin?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Bhutan?',
    answers: ['ngultrum'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Bolivia?',
    answers: ['boliviano'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Bosnia and Herzegovina?',
    answers: ['marka'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Botswana?',
    answers: ['pula'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Brazil?',
    answers: ['real'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Brunei?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Bulgaria?',
    answers: ['lev'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Burkina Faso?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Burundi?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Cambodia?',
    answers: ['riel'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Cameroon?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Canada?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Cape Verde?',
    answers: ['escudo'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Central African Republic?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Chad?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Chile?',
    answers: ['peso'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for China?',
    answers: ['yuan'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Colombia?',
    answers: ['peso'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Comoros?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Costa Rica?',
    answers: ['colon'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Croatia?',
    answers: ['kuna'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Cuba?',
    answers: ['peso'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Cyprus?',
    answers: ['pound'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Czech Republic?',
    answers: ['koruna'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Denmark?',
    answers: ['krone'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Djibouti?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Dominica?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Dominican Republic?',
    answers: ['peso'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Ecuador?',
    answers: ['sucre'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Egypt?',
    answers: ['pound'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for El Salvador?',
    answers: ['colon'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Equatorial Guinea?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Eritrea?',
    answers: ['nakfa'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Estonia?',
    answers: ['kroon'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Ethiopia?',
    answers: ['birr'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Fiji?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Finland?',
    answers: ['markka'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for France?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Gabon?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Gambia?',
    answers: ['dalasi'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Georgia (country)?',
    answers: ['lari'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Germany?',
    answers: ['deutschemark'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Ghana?',
    answers: ['cedi'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Greece?',
    answers: ['drachma'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Grenada?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Guatemala?',
    answers: ['quetzal'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Guinea?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Guinea-Bissau?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Guyana?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Haiti?',
    answers: ['gourde'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Honduras?',
    answers: ['lempira'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Hong Kong?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Hungary?',
    answers: ['forint'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Iceland?',
    answers: ['krona'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for India?',
    answers: ['rupee'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Indonesia?',
    answers: ['rupiah'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Iran?',
    answers: ['rial'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Iraq?',
    answers: ['dinar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Ireland?',
    answers: ['pound'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Israel?',
    answers: ['sheqel'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Italy?',
    answers: ['lira'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Ivory Coast?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Jamaica?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Japan?',
    answers: ['yen'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Jordan?',
    answers: ['dinar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Kazakhstan?',
    answers: ['tenge'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Kenya?',
    answers: ['shilling'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Kiribati?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Kuwait?',
    answers: ['dinar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Kyrgyzstan?',
    answers: ['som'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Laos?',
    answers: ['kip'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Latvia?',
    answers: ['lats'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Lebanon?',
    answers: ['livre'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Lesotho?',
    answers: ['loti'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Liberia?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Libya?',
    answers: ['dinar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Liechtenstein?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Lithuania?',
    answers: ['litas'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Luxembourg?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Macao?',
    answers: ['pataca'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Macedonia?',
    answers: ['denar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Madagascar?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Malawi?',
    answers: ['kwacha'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Malaysia?',
    answers: ['ringgit'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Maldives?',
    answers: ['rufiyaa'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Mali?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Malta?',
    answers: ['lira'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Marshall Islands?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Mauritania?',
    answers: ['ouguiya'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Mauritius?',
    answers: ['rupee'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Mexico?',
    answers: ['peso'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Micronesia?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Moldova?',
    answers: ['leu'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Monaco?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Mongolia?',
    answers: ['tugrik'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Morocco?',
    answers: ['dirham'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Mozambique?',
    answers: ['metical'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Myanmar?',
    answers: ['kyat'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Namibia?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Nauru?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Nepal?',
    answers: ['rupee'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Netherlands?',
    answers: ['guilder'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for New Zealand?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Nicaragua?',
    answers: ['cordoba'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Niger?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Nigeria?',
    answers: ['naira'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for North Korea?',
    answers: ['won'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Norway?',
    answers: ['krone'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Oman?',
    answers: ['rial'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Pakistan?',
    answers: ['rupee'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Palau?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Panama?',
    answers: ['balboa'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Papua New Guinea?',
    answers: ['kina'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Paraguay?',
    answers: ['guarani'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Peru?',
    answers: ['sol'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Philippines?',
    answers: ['peso'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Poland?',
    answers: ['zloty'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Portugal?',
    answers: ['escudo'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Qatar?',
    answers: ['riyal'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Romania?',
    answers: ['leu'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Russia?',
    answers: ['rouble'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Rwanda?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Saint Kitts and Nevis?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Saint Lucia?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Saint Vincent and the Grenadines?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Samoa?',
    answers: ['tala'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for San Marino?',
    answers: ['lira'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Saudi Arabia?',
    answers: ['riyal'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Senegal?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Seychelles?',
    answers: ['rupee'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Sierra Leone?',
    answers: ['leone'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Singapore?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Slovakia?',
    answers: ['koruna'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Slovenia?',
    answers: ['tolar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Solomon Islands?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Somalia?',
    answers: ['shilling'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for South Africa?',
    answers: ['rand'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for South Korea?',
    answers: ['won'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Spain?',
    answers: ['peseta'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Sri Lanka?',
    answers: ['rupee'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Sudan?',
    answers: ['dinar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Suriname?',
    answers: ['guilder'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Swaziland?',
    answers: ['lilangeni'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Sweden?',
    answers: ['krona'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Switzerland?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Syria?',
    answers: ['pound'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Taiwan?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Tajikistan?',
    answers: ['rouble'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Tanzania?',
    answers: ['shilling'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Thailand?',
    answers: ['baht'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Togo?',
    answers: ['franc'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Tonga?',
    answers: ['pa\'anga'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Trinidad and Tobago?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Tunisia?',
    answers: ['dinar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Turkey?',
    answers: ['lira'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Turkmenistan?',
    answers: ['manat'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Tuvalu?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Uganda?',
    answers: ['shilling'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Ukraine?',
    answers: ['hryvnia'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for United Arab Emirates?',
    answers: ['dirham'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for United Kingdom?',
    answers: ['pound'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for United States?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Uruguay?',
    answers: ['peso'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Uzbekistan?',
    answers: ['sum'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Vanuatu?',
    answers: ['vatu'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Vatican City?',
    answers: ['lira'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Venezuela?',
    answers: ['bolivar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Vietnam?',
    answers: ['dong'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Yemen?',
    answers: ['rial'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Yugoslavia?',
    answers: ['dinar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the basic unit of currency for Zambia?',
    answers: ['kwacha'],
    category: societyandhumanities,
  },
  {
    question: 'In Dr Who, what was Tardis an abbreviation of?',
    answers: ['timeandrelativedimensionsinspace'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the basic unit of currency for Zimbabwe?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the capital of Afghanistan?',
    answers: ['kabul'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Algeria?',
    answers: ['algiers'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Andorra?',
    answers: ['andorralavella'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Angola?',
    answers: ['luanda'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Antigua and Barbuda?',
    answers: ['saintjohn\'s'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Armenia?',
    answers: ['yerevan'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Australia?',
    answers: ['canberra'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Austria?',
    answers: ['vienna'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Azerbaijan?',
    answers: ['baku'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Bahrain?',
    answers: ['manama'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Barbados?',
    answers: ['bridgetown'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Belarus?',
    answers: ['minsk'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Belgium?',
    answers: ['brussels'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Belize?',
    answers: ['belmopan'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Bhutan?',
    answers: ['thimphu'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Bolivia?',
    answers: ['lapaz'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Bosnia and Hercegovina?',
    answers: ['sarajevo'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Botswana?',
    answers: ['gaborone'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Brunei?',
    answers: ['bandarseribegawan'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Bulgaria?',
    answers: ['sofia'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Burkina Faso?',
    answers: ['ouagadougou'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Burundi?',
    answers: ['bujumbura'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Cambodia?',
    answers: ['phnompenh'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Canada?',
    answers: ['ottawa'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Cape Verde?',
    answers: ['praia'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Central African Republic?',
    answers: ['bangui'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Chad?',
    answers: ['n\'djamena'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of China?',
    answers: ['beijing'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Comoros?',
    answers: ['moroni'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Congo?',
    answers: ['brazzaville'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Croatia?',
    answers: ['zagreb'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Cuba?',
    answers: ['havana'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Cyprus?',
    answers: ['nicosia'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Czech Republic?',
    answers: ['prague'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Democratic Republic of the Congo?',
    answers: ['kinshasa'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Denmark?',
    answers: ['copenhagen'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Djibouti?',
    answers: ['djibouti'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Dominica?',
    answers: ['roseau'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Dominican Republic?',
    answers: ['santodomingo'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Ecuador?',
    answers: ['quito'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Egypt?',
    answers: ['cairo'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of El Salvador?',
    answers: ['sansalvador'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Equatorial Guinea?',
    answers: ['malabo'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Eritrea?',
    answers: ['asmara'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Estonia?',
    answers: ['tallinn'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Ethiopia?',
    answers: ['addisababa'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Fiji?',
    answers: ['suva'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Finland?',
    answers: ['helsinki'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of France?',
    answers: ['paris'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Gabon?',
    answers: ['libreville'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Gambia?',
    answers: ['banjul'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Germany?',
    answers: ['berlin'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Ghana?',
    answers: ['accra'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Greece?',
    answers: ['athens'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Grenada?',
    answers: ['saintgeorge\'s'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Guatemala?',
    answers: ['guatemala'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Guinea?',
    answers: ['conakry'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Guinea-Bissau?',
    answers: ['bissau'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Guyana?',
    answers: ['georgetown'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Haiti?',
    answers: ['port-au-prince'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Honduras?',
    answers: ['tegucigalpa'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Hungary?',
    answers: ['budapest'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Iran?',
    answers: ['tehran'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Iraq?',
    answers: ['baghdad'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Ireland?',
    answers: ['dublin'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Israel?',
    answers: ['jerusalem'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Jamaica?',
    answers: ['kingston'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Japan?',
    answers: ['tokyo'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Jordan?',
    answers: ['amman'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Kazakhstan?',
    answers: ['astana'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Kenya?',
    answers: ['nairobi'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Kiribati?',
    answers: ['bairiki'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Kuwait?',
    answers: ['kuwaitcity'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Kyrgyzstan?',
    answers: ['bishkek'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Laos?',
    answers: ['vientiane'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Latvia?',
    answers: ['riga'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Lebanon?',
    answers: ['beirut'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Lesotho?',
    answers: ['maseru'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Liberia?',
    answers: ['monrovia'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Libya?',
    answers: ['tripoli'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Liechtenstein?',
    answers: ['vaduz'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Lithuania?',
    answers: ['vilnius'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Luxembourg?',
    answers: ['luxembourg'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Macedonia?',
    answers: ['skopje'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Madagascar?',
    answers: ['antananarivo'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Malawi?',
    answers: ['lilongwe'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Malaysia?',
    answers: ['kualalumpur'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Maldives?',
    answers: ['male'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Mali?',
    answers: ['bamako'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Malta?',
    answers: ['valletta'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Marshall Islands?',
    answers: ['dalap-uliga-davrit'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Mauritania?',
    answers: ['nouakchott'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Mauritius?',
    answers: ['portlouis'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Mexico?',
    answers: ['mexicocity'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Micronesia?',
    answers: ['palikir'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Moldova?',
    answers: ['chisinau'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Monaco?',
    answers: ['monaco'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Mongolia?',
    answers: ['ulaanbaatar'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Morocco?',
    answers: ['rabat'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Mozambique?',
    answers: ['maputo'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Namibia?',
    answers: ['windhoek'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Nauru?',
    answers: ['thedistrictofyaren'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Nepal?',
    answers: ['kathmandu'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Nicaragua?',
    answers: ['managua'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Niger?',
    answers: ['niamey'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Nigeria?',
    answers: ['abuja'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of North Korea?',
    answers: ['pyongyang'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Norway?',
    answers: ['oslo'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Oman?',
    answers: ['muscat'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Pakistan?',
    answers: ['islamabad'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Panama?',
    answers: ['panamacity'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Papua New Guinea?',
    answers: ['portmoresby'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Peru?',
    answers: ['lima'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Philippines?',
    answers: ['manila'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Poland?',
    answers: ['warsaw'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Portugal?',
    answers: ['lisbon'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Qatar?',
    answers: ['doha'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Romania?',
    answers: ['bucharest'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Russia?',
    answers: ['moscow'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Rwanda?',
    answers: ['kigali'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Saint Kitts and Nevis?',
    answers: ['basseterre'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Saint Lucia?',
    answers: ['castries'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Saint Vincent?',
    answers: ['kingstown'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Samoa?',
    answers: ['apia'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of San Marino?',
    answers: ['sanmarino'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Saudi Arabia?',
    answers: ['riyadh'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Senegal?',
    answers: ['dakar'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Seychelles?',
    answers: ['victoria'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Sierra Leone?',
    answers: ['freetown'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Singapore?',
    answers: ['singapore'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Slovakia?',
    answers: ['bratislava'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Slovenia?',
    answers: ['ljubljana'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Solomon Islands?',
    answers: ['honiara'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Somalia?',
    answers: ['mogadishu'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of South Korea?',
    answers: ['seoul'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Spain?',
    answers: ['madrid'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Sudan?',
    answers: ['khartoum'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Suriname?',
    answers: ['paramaribo'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Swaziland?',
    answers: ['mbabane'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Sweden?',
    answers: ['stockholm'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Switzerland?',
    answers: ['bern'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Syria?',
    answers: ['damascus'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Taiwan?',
    answers: ['taipei'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Tajikistan?',
    answers: ['dushanbe'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Thailand?',
    answers: ['bangkok'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of The Bahamas?',
    answers: ['nassau'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of The Netherlands?',
    answers: ['amsterdam'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Tonga?',
    answers: ['nuku\'alofa'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Trinidad and Tobago?',
    answers: ['port-of-spain'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Tunisia?',
    answers: ['tunis'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Turkey?',
    answers: ['ankara'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Turkmenistan?',
    answers: ['ashgabat'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Tuvalu?',
    answers: ['fongafale(funafutiatollisthelocationofthecapitalfongafale!soplsdon\'tcomplainaboutthecorrection;-))'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Uganda?',
    answers: ['kampala'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Ukraine?',
    answers: ['kiev'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of United Kingdom?',
    answers: ['london'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of United States?',
    answers: ['washington'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Uruguay?',
    answers: ['montevideo'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Uzbekistan?',
    answers: ['tashkent'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Vanuatu?',
    answers: ['port-vila'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Vatican City?',
    answers: ['vaticancity'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Venezuela?',
    answers: ['caracas'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Vietnam?',
    answers: ['hanoi'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Yugoslavia?',
    answers: ['belgrade'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Zambia?',
    answers: ['lusaka'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of the country Georgia?',
    answers: ['tbilisi'],
    category: scienceandgeography,
  },
  {
    question: 'What is the name for the deepest part of the ocean?',
    answers: ['abyss'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the world\'s deepest lake?',
    answers: ['lakebaikal'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the world\'s highest mountain?',
    answers: ['mounteverest', 'everest', 'mteverest'],
    category: scienceandgeography,
  },
  {
    question: 'What is the world\'s second highest mountain?',
    answers: ['k2'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What tunnel connects France and Italy?',
    answers: ['montblanctunnel', 'montblanc'],
    category: scienceandgeography,
  },
  {
    question: 'Where are the great Walls of Babylon located in the modern day world?',
    answers: ['iraq'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is most of America\'s gold located?',
    answers: ['fortknox'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which city has the highest population?',
    answers: ['mexicocity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country altered it\'s timezone in order to be the first to see in the year 2000?',
    answers: ['tonga'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country has a flag of a red circle on a white background?',
    answers: ['japan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country has the fourth largest population?',
    answers: ['indonesia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country is also known as Suomi?',
    answers: ['finland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country is the smallest population?',
    answers: ['vaticancity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country\'s ships fly under the Union Jack?',
    answers: ['greatbritain'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which element makes up 2.5% of the Earth\'s crust?',
    answers: ['potassium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which element makes up 2.6% of the Earth\'s crust?',
    answers: ['magnesium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which element makes up 2.83% of the Earth\'s crust?',
    answers: ['sodium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which element makes up 27.72% of the Earth\'s crust?',
    answers: ['silicon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which element makes up 3.63% of the Earth\'s crust?',
    answers: ['calcium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which element makes up 46.6% of the Earth\'s crust?',
    answers: ['oxygen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which element makes up 5% of the Earth\'s crust?',
    answers: ['iron'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which element makes up 8.13% of the Earth\'s crust?',
    answers: ['aluminium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the Earth\'s fifth largest continent?',
    answers: ['antarctica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the Earth\'s fourth largest continent?',
    answers: ['southamerica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the Earth\'s largest continent?',
    answers: ['asia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the Earth\'s second largest continent?',
    answers: ['africa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the Earth\'s second smallest continent?',
    answers: ['europe'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the Earth\'s smallest continent?',
    answers: ['australia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the Earth\'s third largest continent?',
    answers: ['northamerica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which island was born near Iceland in 1963?',
    answers: ['surtsey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which mountains are regarded as the east border of Europe?',
    answers: ['ural'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the layer between the Earth\'s crust and the Earth\'s core?',
    answers: ['mantle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What name is given to the point where a river starts?',
    answers: ['source'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What name is given to the point where two rivers join?',
    answers: ['confluence'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What name is given to the single super-continent that existed 200 million years ago?',
    answers: ['pangaea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which river made The Grand Canyon?',
    answers: ['colorado'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Alexander the Great was king of which country?',
    answers: ['macedonia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'At the time of Julius Caesar, who was the ruler of Egypt?',
    answers: ['cleopatra'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How is the stock market collapse of the 24th October 1929 better known?',
    answers: ['blackthursday'],
    category: societyandhumanities,
  },
  {
    question: 'How many countries joined the United Nations at it\'s start?',
    answers: ['51'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many stab wounds did Julius Caesar have when he died?',
    answers: ['23'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many years were between the creation of the Magna Carta and the American Declaration of Independence?',
    answers: ['561'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How old was Alexander the Great when he died?',
    answers: ['32'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How was the 1839-42 Anglo-Chinese war better known?',
    answers: ['theopiumwar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In 1911 Roald Amundsen became the first person to reach where?',
    answers: ['southpole'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In March 1979, where did a major nuclear accident occur?',
    answers: ['threemileisland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the 17th century which country started taxing beards?',
    answers: ['russia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the 1855 Russian War, what were used to transport Torpedos?',
    answers: ['kites'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the 9th century which city had several thousand bookstores?',
    answers: ['baghdad'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the period 978-1016 England was ruled by which "Unready" king?',
    answers: ['ethelred'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the year 2000 which companies CEO was the worlds second richest man?',
    answers: ['oracle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what type of building did Plato and Aristotle teach?',
    answers: ['gymnasium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which year was the Rosetta stone written?',
    answers: ['196bc'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The 14th July 1789 marked the start of what?',
    answers: ['frenchrevolution'],
    category: 'Needs to be categorised',
  },
  {
    question: 'To which island was Napoleon exiled, after his loss at Waterloo?',
    answers: ['sthelena'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What city was founded in 753 BC?',
    answers: ['rome'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country did Abel Tasman discover in 1642?',
    answers: ['newzealand'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Peter Minuit buy in 1626?',
    answers: ['manhattanisland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Temujin change his name to?',
    answers: ['genghiskhan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What happened at 2:56 on the 21st July 1969?',
    answers: ['firstmannedmoonlanding'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What product was the first TV advert advertising?',
    answers: ['toothpaste'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What purged the Great Plague of London?',
    answers: ['greatfireoflondon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was first worn on the 10th October 1886?',
    answers: ['tuxedo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the destination of the ship \'Mary Celeste\' on it\'s final voyage November 1872, where it should never arrive?',
    answers: ['genoa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first newspaper produced in the United States?',
    answers: ['publickoccurences'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first postage stamp?',
    answers: ['pennyblack'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first transatlantic radio message sent?',
    answers: ['s'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of the government newspaper in ancient Rome?',
    answers: ['acatdiurna(dailyhappenings)'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the nationality of Marco Polo?',
    answers: ['italian'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the nationallity of Rasputin?',
    answers: ['russian'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the predecessor of the United Nations?',
    answers: ['leagueofnations'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where was the Rosetta stone found?',
    answers: ['cairo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the ancient script of Linear A and Linear B found?',
    answers: ['crete'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which American Military Academt was established in 1802 on the Hudson river?',
    answers: ['westpoint'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which British prime minister died in 1965?',
    answers: ['winstonchurchill'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which French king was known as the Sun King?',
    answers: ['louisxiv'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which artificial fiber was invented in 1938?',
    answers: ['nylon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country has the oldest national flag?',
    answers: ['denmark'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which famous ship sank in 1912?',
    answers: ['titanic'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which gangster died on the 25th January 1947?',
    answers: ['alcapone'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which major international organization was created in 1945?',
    answers: ['unitednations'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who imported the first Go set into Britain?',
    answers: ['marcopolo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who in 1893 defined vegtables as plants eaten in a meal and fruits as plants eaten as dessert?',
    answers: ['unitedstatessupremecourt'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who in 1988 became the first elected female prime minister in an Islamic country?',
    answers: ['benazirbhutto'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is famous for historically riding naked on horseback through Coventry, England?',
    answers: ['ladygodiva'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who took the title "Lord Protector of the Commonwelth of England, Scotland, and Ireland"?',
    answers: ['olivercromwell'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was Canada\'s first Prime Minister?',
    answers: ['johna.macdonald', 'macdonald', 'johnmacdonald', 'johnamacdonald'],
    category: societyandhumanities,
  },
  {
    question: 'Who was known as "the wizard of Menlo Park"?',
    answers: ['thomasalvaedison'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of the first dog in space?',
    answers: ['laika'],
    category: scienceandgeography,
  },
  {
    question: 'Who was the first female American astronaut?',
    answers: ['sallyride'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the first fully Danish king of England?',
    answers: ['canutethegreat'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the first man to reach the North Pole?',
    answers: ['robertedwinpeary', 'robertpeary', 'peary'],
    category: societyandhumanities,
  },
  {
    question: 'Douglas Adams is famous for writing what?',
    answers: ['thehitchhiker\'sguidetothegalaxy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is Samuel Clemens better known as?',
    answers: ['marktwain', 'twain'],
    category: artsandentertainment,
  },
  {
    question: 'In which book is Scheherazade a story teller?',
    answers: ['arabiannights'],
    category: artsandentertainment,
  },
  {
    question: 'The book "Wamyouruijoshou" was the first to use what word?',
    answers: ['kite'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What book is the film Blade Runner based on?',
    answers: ['doandroidsdreamofelectricsheep'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the second best-selling book of all time?',
    answers: ['quotationsfromtheworksofchairmanmaotse-tung'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What series has Robert Jordan written?',
    answers: ['wheeloftime'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What trilogy did J.R.R. Tolkien write?',
    answers: ['lordoftherings'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What word is Isaac Asimov famous for coining?',
    answers: ['robotics'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who created Sherlock Holmes?',
    answers: ['sirarthurconandoyle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is associated with the address 221B Baker Street, London?',
    answers: ['sherlockholmes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which was the first Pinball game that used flippers?',
    answers: ['humptydumpty'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote "Ender\'s Game"?',
    answers: ['orsonscottcard'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote "The Wind in the Willows"?',
    answers: ['kennethgrahame', 'grahame'],
    category: artsandentertainment,
  },
  {
    question: 'Who wrote 1984?',
    answers: ['georgeorwell'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the Belgariad?',
    answers: ['leighanddavideddings'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the Discworld series?',
    answers: ['terrypratchett'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the book "The Origin of Species"?',
    answers: ['charlesdarwin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the epic poem Odyssey?',
    answers: ['homer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the novel "The Strange Case of Dr. Jekyll and Mr Hyde"?',
    answers: ['stevenson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the shortest ever letter?',
    answers: ['victorhugo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote three books under the title "Das Kapital"?',
    answers: ['karlmarx'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the square root of -1?',
    answers: ['i'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented logarithms?',
    answers: ['johnnapier'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who proved Fermat\'s Last Theorem?',
    answers: ['andrewwiles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How is german measles also known?',
    answers: ['rubella'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who developed the vaccine for smallpox?',
    answers: ['edwardjenner'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who discovered Penicillin?',
    answers: ['alexanderfleming'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who first used antiseptics?',
    answers: ['josephlister'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What term is used for the speed at which a piece of music is played?',
    answers: ['tempo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the Nutcracker Suite?',
    answers: ['tchaikovsky'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the "touch of Midas" turn everything into?',
    answers: ['gold'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the Norse Watchman of the Gods?',
    answers: ['heimdall'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the Norse god of justice?',
    answers: ['forseti'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the Norse god of poetry?',
    answers: ['bragi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the Norse god of the sky and thunder?',
    answers: ['thor'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the greek equivalent of the roman god Cupid?',
    answers: ['eros'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the greek equivalent of the roman god Diana?',
    answers: ['artemis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the greek equivalent of the roman god Discordia?',
    answers: ['eris'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the greek equivalent of the roman god Juno?',
    answers: ['hera'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the greek equivalent of the roman god Jupiter?',
    answers: ['zeus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the greek equivalent of the roman god Mars?',
    answers: ['ares'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the greek equivalent of the roman god Mercury?',
    answers: ['hermes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the greek equivalent of the roman god Minerva?',
    answers: ['athena'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the greek equivalent of the roman god Neptune?',
    answers: ['poseidon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the greek equivalent of the roman god Pluto?',
    answers: ['hades'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the greek equivalent of the roman god Venus?',
    answers: ['aphrodite'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the greek equivalent of the roman god Vesta?',
    answers: ['hestia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the greek equivalent of the roman god Vulcan?',
    answers: ['hephaistos'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was Ancient Egyptian goddess of fertility, love and beauty?',
    answers: ['bastet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was Ancient Egyptian moon god?',
    answers: ['khonsu'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the ancient Egyptian goddess of the sky and queen of heaven?',
    answers: ['hathor'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the belief that many gods exist, but only one should be worshipped?',
    answers: ['monolatry'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said "If you want something said, ask a man. If you want something done, ask a woman."?',
    answers: ['margaretthatcher'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said "In my free time I do differential and integral calculus"',
    answers: ['karlmarx'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said "The no-mind not-thinks no-thoughts about no-things"?',
    answers: ['buddha'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said \'Everything must either be or not be, whether in the present or in the future\'?',
    answers: ['aristotle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said \'Give me a firm place to stand and I will move the Earth\'?',
    answers: ['archimedes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said \'So far as the laws of mathematics refer to reality they are not certain. And so far as they are certain, they do not refer to reality.\'?',
    answers: ['alberteinstein'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said \'The greater our knowledge increases, the more our ignorance unfolds\'?',
    answers: ['johnf.kennedy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said \'The way of the warrior is the resolute acceptance of death\'?',
    answers: ['miyamotomusashi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said the line "Dr Livingstone, I presume!"?',
    answers: ['henrymortonstanley'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the SI unit for energy?',
    answers: ['joule', 'j'],
    category: scienceandgeography,
  },
  {
    question: 'What is the SI unit for force?',
    answers: ['newton', 'n'],
    category: scienceandgeography,
  },
  {
    question: 'What is the SI unit for frequency?',
    answers: ['hertz', 'hz'],
    category: scienceandgeography,
  },
  {
    question: 'What is the SI unit for power?',
    answers: ['watt', 'w'],
    category: scienceandgeography,
  },
  {
    question: 'What is the SI unit for pressure?',
    answers: ['pascal', 'pa'],
    category: scienceandgeography,
  },
  {
    question: 'What device is used to measure weather pressure?',
    answers: ['barometer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What device used to be described in Greek as "watcher of the small"?',
    answers: ['microscope'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What device was used to determine a ship\'s latitude?',
    answers: ['sextant'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What has superseded Newtonian mechanics of the atomic scale?',
    answers: ['quantummechanics'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the formal name for when a substance breaks down on heating?',
    answers: ['thermaldecomposition'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the luminous intensity of light measured in?',
    answers: ['candela'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the second derivative of distance?',
    answers: ['acceleration'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What scale is used to measure wind speed?',
    answers: ['beaufort'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which scale is based on the speed of sound?',
    answers: ['mach'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is PLO an abbreviation for?',
    answers: ['palestineliberationorganization'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In China why were kites flown on the ninth day of every month?',
    answers: ['tobanishevil'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In ancient Egypt which animal was considered sacred?',
    answers: ['cat'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the holy book of Islam?',
    answers: ['koran'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What religion was founded by Guru Nanak?',
    answers: ['sikhism'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What religion was founded by Lao-tzu?',
    answers: ['taoism'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What religion was founded by Siddhartha Gautama?',
    answers: ['buddhism'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where was Methodism founded?',
    answers: ['oxforduniversity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which group of people elect the pope?',
    answers: ['cardinals'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which tree do Druids regard sacred?',
    answers: ['oak'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which was the longest dinosaur?',
    answers: ['diplodocus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented Tetris?',
    answers: ['alexipazhitnov'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the 1896 Olympics held?',
    answers: ['athens,greece'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the 1900 Olympics held?',
    answers: ['paris,france'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the 1908 Olympics held?',
    answers: ['london,england'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the 1912 Olympics held?',
    answers: ['stockholm,sweden'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the 1920 Olympics held?',
    answers: ['antwerp,belgium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the 1924 Olympics held?',
    answers: ['paris,france'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the 1928 Olympics held?',
    answers: ['amsterdam,thenetherlandserror:ret:amsterdam,(thenetherlands|holland)'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the 1936 Olympics held?',
    answers: ['berlin,germany'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the 1948 Olympics held?',
    answers: ['london,england'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the 1952 Olympics held?',
    answers: ['helsinki', 'finland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the 1956 Olympics held?',
    answers: ['melbourne,australia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the 1960 Olympics held?',
    answers: ['rome,italy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the 1964 Olympics held?',
    answers: ['tokyo,japan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the 1968 Olympics held?',
    answers: ['mexicocity,mexico'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the 1972 Olympics held?',
    answers: ['munich,westgermany'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the 1980 Olympics held?',
    answers: ['moscow,u.s.s.r.'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the 1988 Olympics held?',
    answers: ['seoul,southkorea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the 1992 Olympics held?',
    answers: ['barcelona,spain'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How is the chess term "shah mat" better known?',
    answers: ['checkmate'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many pieces are found in a chess set?',
    answers: ['32'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Tic-Tac-Toe is based on which game?',
    answers: ['ninemenmorris'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does "Dan" mean?',
    answers: ['grade'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the Chess ranking system called?',
    answers: ['elo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the board that Baduk is player on?',
    answers: ['goban'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What sport did James Naismith invent?',
    answers: ['basketball'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which game has 361 intersections?',
    answers: ['go'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With which sport is Babe Ruth associated?',
    answers: ['baseball'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With which sport is Bjorn Borg associated?',
    answers: ['tennis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With which sport is Bobby Moore associated?',
    answers: ['soccer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With which sport is Chirs Evert-Lloyd associated?',
    answers: ['tennis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With which sport is Jack Nicklaus associated?',
    answers: ['golf'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With which sport is Muhammad Ali associated?',
    answers: ['boxing'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With which sport is Pele associated?',
    answers: ['soccer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the reason behind the layout of the Qwerty keyboard?',
    answers: ['toslowdowntypingrates'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was launched on the 4th December 1996?',
    answers: ['marspathfinder'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the Earth\'s first artificial satellite?',
    answers: ['sputnik1'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first lighthouse?',
    answers: ['pharosofalexandria'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of the first plane ever to fly?',
    answers: ['flyer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which was the first manned aircraft to exceed the speed of sound?',
    answers: ['bellx-1'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented the Hovercraft?',
    answers: ['sirchristophercockerell'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented the Telephone?',
    answers: ['alexandergrahambell'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what field of study would you find "flying buttresses"?',
    answers: ['architecture'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This statue was found on the Greek island of Melos in 1820.',
    answers: ['venusdemilo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Dutch master painted 64 self-portraits?',
    answers: ['rembrandt'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the Louvre located?',
    answers: ['paris'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who painted the Mona Lisa?',
    answers: ['leonardodavinci'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the only sign in the zodiac which doesn\'t represent a living thing?',
    answers: ['libra'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which month has a diamond as a birthstone?',
    answers: ['april'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Does Uranus have an aurora?',
    answers: ['yes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many planets are there in our solar system?',
    answers: ['nine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'If you\'re in the northern hemisphere, Polaris, the North Star, can be found by looking which direction?',
    answers: ['north'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the largest planet in the solar system.',
    answers: ['jupiter'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the second-largest planet in the solar system.',
    answers: ['saturn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Big Dipper is part of what constellation?',
    answers: ['ursamajor'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This cluster of stars is also known as the Seven Sisters.',
    answers: ['pleiades'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This comet appears every 76.3 years.',
    answers: ['comethalley'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This planet\'s diameter is most equal to that of the earth\'s.',
    answers: ['venus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does "Ursa Major" mean in everyday English?',
    answers: ['greatbear'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the astronomical name for a group of stars?',
    answers: ['constellation'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name for the theoretical end-product of the gravitational collapse of a massive star?',
    answers: ['blackhole'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name used to describe the "minor planets"?',
    answers: ['asteroids'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the ocean of air around the earth called?',
    answers: ['atmosphere'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the proper name for falling stars?',
    answers: ['meteors'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the term for the path followed a by a small body around a massive body in space?',
    answers: ['orbit'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What phenomenon is caused by the gravitational attraction of the moon?',
    answers: ['tides'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What planet boasts the Great Red Spot?',
    answers: ['jupiter'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This poisonous, oily liquid occurs in tobacco leaves.',
    answers: ['nicotine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This protein makes the blood red in color.',
    answers: ['haemoglobin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Every human has one of these on their tummies.',
    answers: ['navel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many large holes are in your head?',
    answers: ['seven'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This complex substance makes up all living things.',
    answers: ['protoplasm'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is normal body temperature for an adult human (in degrees fahrenheit)?',
    answers: ['98.6'],
    category: 'Needs to be categorised',
  },
  {
    question: 'These flowerless plants grow on bare rocks and tree stumps.',
    answers: ['lichen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This fruit has its seeds on the outside.',
    answers: ['strawberry'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This term means \'cone-bearing trees\'.',
    answers: ['conifers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What fruit bear the Latin name "citrus grandis"?',
    answers: ['grapefruit'],
    category: scienceandgeography,
  },
  {
    question: 'How many days where there in 1976?',
    answers: ['threehundredandsixtysix'],
    category: 'Needs to be categorised',
  },
  {
    question: 'An Andy Panda cartoon gave birth to a famous, cantankerous bird. Name him.',
    answers: ['woodywoodpecker'],
    category: 'Needs to be categorised',
  },
  {
    question: 'An alien creature in a funny hat has opposed both Bugs Bunny and Daffy Duck.  Where is he from?',
    answers: ['mars'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Before Olive Oil met Popeye she was engaged to someone.  Who was he?',
    answers: ['hamgravy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Benny and Cecil were at odds with whom?',
    answers: ['john'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Bugs always finds himself at the wrong end of a gun, usually toted by either Elmer Fudd or who?',
    answers: ['yosemitesam'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Casper the Friendly Ghost frolicked with which witch?',
    answers: ['wendy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Charles Boyer inspired a cartoon skunk. Who?',
    answers: ['pepelepew'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Gadzookie has a large, green friend. Who is he?',
    answers: ['godzilla'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Hanna-Barbera rose to fame by creating what duo for MGM?',
    answers: ['tomandjerry'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How does Wonder Woman control her invisible airplane?',
    answers: ['mentalpowers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the cartoons who was Hokie Wolf\'s sidekick?',
    answers: ['ding'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what city does Fat Albert live?',
    answers: ['philadelphia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Miss Buckley is secretary to what commanding officer?',
    answers: ['generalhalftrack'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name Alley Oop\'s girl friend.',
    answers: ['oola'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name Cathy\'s on again/off again boy friend?',
    answers: ['irving'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name Dennis the Menace\'s next door neighbors.',
    answers: ['mrandmrswilson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name Donald Duck\'s girlfriend?',
    answers: ['daisy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name Hagar the Horrible\'s dog.',
    answers: ['snert'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name Li\'l Abner\'s favorite Indian drink.',
    answers: ['kickapoojoyjuice'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the European hit, now an animated series about underwater people.',
    answers: ['thesnorks'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the apartments the Jetson\'s live in.',
    answers: ['theskypadapartments'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the dog in the Yankee Doodle cartoons.',
    answers: ['chopper'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is "The Fastest Mouse in All of Mexico"?',
    answers: ['speedygonzalez', 'gonzalez'],
    category: artsandentertainment,
  },
  {
    question: 'Name the ranger who was always after Yogi Bear.',
    answers: ['rick'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the town that Fred, Wilma, Barney, and Betty lived in.',
    answers: ['bedrock'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what T.V. show could Tom Terrific be found?',
    answers: ['captainkangaroo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Tess Trueheart married which plainclothes detective?',
    answers: ['dicktracy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What came out of Milton\'s head?',
    answers: ['steam'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What character did Tex Avery first create upon arriving at MGM?',
    answers: ['screwballsquirrel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What comic strip character is Beetle Bailey\'s sister?',
    answers: ['lois(ofhiandlois)'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Dagwood give up to marry Blondie?',
    answers: ['afamilyinheritance'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Peppermint Patty always call Charlie Brown?',
    answers: ['chuck'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Batman\'s butler Alfred\'s last name.',
    answers: ['pennyworth'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Blondie\'s maiden name?',
    answers: ['oop'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Dennis the Menace\'s last name?',
    answers: ['mitchell'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Smokey Stover\'s job?',
    answers: ['fireman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Super Chicken\'s partners name?',
    answers: ['fred'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the mother\'s name in Family Circus?',
    answers: ['thelma'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of Duddley Do-Right\'s horse?',
    answers: ['horse'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the Family Circus\'s dog?',
    answers: ['barf'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What kind of dog is Scooby Doo?',
    answers: ['greatdane'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What type of plant does Broom Hilda sell?',
    answers: ['venusflytrap'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Daffy Duck\'s favorite insult?',
    answers: ['you\'redispicable!'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was George of the Jungle always running in to?',
    answers: ['atree'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first cartoon to feature sound?',
    answers: ['steamboatwillie'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of George of the Jungle\'s pet elephant?',
    answers: ['shep'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of Speed Racer\'s car?',
    answers: ['themachfive'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the original name Charles Schultz had for Peanuts?',
    answers: ['li\'lfolks'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the relationship between Superman and Supergirl?',
    answers: ['cousin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'When Tweety exclaimed, "I thought I saw a putty tat!", who did he see?',
    answers: ['sylvester'],
    category: 'Needs to be categorised',
  },
  {
    question: 'When danger appeared, Quick Draw McGraw became which super hero?',
    answers: ['elkabong'],
    category: 'Needs to be categorised',
  },
  {
    question: 'When not a Birdman, what does Ray Randall do for a living?',
    answers: ['policeofficer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'When not fighting crime, what did Underdog do for a living?',
    answers: ['shoeshineboy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which city are Rocket J. Squirel and Bullwinkle Moose from?',
    answers: ['frostbitefalls'],
    category: artsandentertainment,
  },
  {
    question: 'Where did Clark Kent attend college?',
    answers: ['metropolisuniversity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where did George of the Jungle live?',
    answers: ['imgweegweevalley'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where did Mighty Mouse get his superpowers?',
    answers: ['supermarket'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where do Rocky and Bullwinkle play football?',
    answers: ['what\'samattauniversity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where does George Jetson work?',
    answers: ['spacelysprockets'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where does Yogi Bear Live?',
    answers: ['jellystonepark'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which comic strip was banned from "Stars and Stripes"?',
    answers: ['beetlebailey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which superhero loves peace enough to kill for it?',
    answers: ['peacemaker'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who always tried to kill Krazy Kat?',
    answers: ['captainmarvel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is Donald Duck\'s uncle?',
    answers: ['scrooge'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is Sally Brown\'s sweet baboo?',
    answers: ['linus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is Snoopy\'s arch enemy?',
    answers: ['theredbaron'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is stationed at Camp Swampy in the comic strips?',
    answers: ['beetlebailey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who runs Andy Capp\'s favorite pub?',
    answers: ['jackandjill'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who says, "Th-th-th-that\'s all folks!"',
    answers: ['porkypig'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who shot Bruce Wayne\'s parents?',
    answers: ['chill'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was Dick Dastardly\'s pet?',
    answers: ['muttley'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was always trying to get rent from Andy Capp?',
    answers: ['percy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the Hulk\'s first friend?',
    answers: ['rickjones'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the original voice of Mickey Mouse?',
    answers: ['waltdisney'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Hydrogen Hydroxide is more commonly known as what?',
    answers: ['water'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the heaviest naturally occurring element.',
    answers: ['uranium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the symbol for tin.',
    answers: ['sn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This poisonous gas is in the exhaust fumes from cars.',
    answers: ['carbonmonoxide', 'co'],
    category: scienceandgeography,
  },
  {
    question: 'What is it that turns blue litmus paper red?',
    answers: ['acid'],
    category: scienceandgeography,
  },
  {
    question: 'What is the abbreviation for trinitrotoluene?',
    answers: ['tnt'],
    category: scienceandgeography,
  },
  {
    question: 'What is the chemical symbol for copper?',
    answers: ['cu'],
    category: scienceandgeography,
  },
  {
    question: 'What is the chemical symbol for gold?',
    answers: ['au'],
    category: scienceandgeography,
  },
  {
    question: 'What is the main component of air?',
    answers: ['nitrogen'],
    category: scienceandgeography,
  },
  {
    question: 'What is the more scientific name for quicksilver?',
    answers: ['mercury'],
    category: scienceandgeography,
  },
  {
    question: 'What is the symbol for iron in chemistry?',
    answers: ['fe'],
    category: scienceandgeography,
  },
  {
    question: 'What is the symbol for silver?',
    answers: ['ag'],
    category: scienceandgeography,
  },
  {
    question: 'Name the loner rebel reindeer with the red shiny nose.',
    answers: ['rudolph'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What comic strip is set at Camp Swampy?',
    answers: ['beetlebailey'],
    category: 'Needs to be categorised',
  },
  {
    question: '--isms:  Exalting one\'s country above all others.',
    answers: ['nationalism'],
    category: 'Needs to be categorised',
  },
  {
    question: '--isms:  The belief that there is no God.',
    answers: ['atheism'],
    category: 'Needs to be categorised',
  },
  {
    question: '--isms:  The theory that man cannot prove the existence of a god.',
    answers: ['agnosticism'],
    category: 'Needs to be categorised',
  },
  {
    question: '-ism: The belief in the existence of a god or gods.',
    answers: ['theism'],
    category: 'Needs to be categorised',
  },
  {
    question: '-isms: A diseased condition resulting from the use of beverages such as whiskey.',
    answers: ['alcoholism'],
    category: 'Needs to be categorised',
  },
  {
    question: '-isms: A one-party system of government in which control is maintained by force and regimentation.',
    answers: ['fascism'],
    category: 'Needs to be categorised',
  },
  {
    question: '-isms: A painful stiffness of the muscles and joints',
    answers: ['rheumatism'],
    category: 'Needs to be categorised',
  },
  {
    question: '-isms: A severe or unfavorable judgment.',
    answers: ['criticism'],
    category: 'Needs to be categorised',
  },
  {
    question: '-isms: An economic system characterized by private ownership and competition.',
    answers: ['capitalism'],
    category: 'Needs to be categorised',
  },
  {
    question: '-isms: Excessive emphasis on financial gain.',
    answers: ['commercialism'],
    category: 'Needs to be categorised',
  },
  {
    question: '-isms: Excessive enthusiasm or zeal for a cause.',
    answers: ['fanaticism'],
    category: 'Needs to be categorised',
  },
  {
    question: '-isms: Poisoning caused by a toxin in improperly prepared food.',
    answers: ['botulism'],
    category: 'Needs to be categorised',
  },
  {
    question: '-isms: Public ownership of the basic means of production, distribution, and exchange.',
    answers: ['socialism'],
    category: 'Needs to be categorised',
  },
  {
    question: '-isms: The belief in living a very austere and self-denying life.',
    answers: ['asceticism'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Legal Terms: A crime more serious than a misdemeanor.',
    answers: ['felony'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Legal Terms: A formal agreement enforceable by law.',
    answers: ['contract'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Legal Terms: A supplement to a will.',
    answers: ['codicil'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Legal Terms: The people chosen to render a verdict in a court.',
    answers: ['jury'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Legal Terms: To steal property entrusted to one\'s care.',
    answers: ['embezzle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the pain-inflicting person you go to to get your teeth fixed.',
    answers: ['dentist'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the porceilan chair you sit on at least once a day.',
    answers: ['toilet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This instrument is used for measuring the distance between two points, on a curved surface.',
    answers: ['calliper'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This instrument measures atmospheric pressure.',
    answers: ['barometer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This instrument measures the velocity of the wind.',
    answers: ['anemometer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the fear of enclosed spaces.',
    answers: ['claustrophobia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This word is used as the international radio distress call.',
    answers: ['mayday'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This word means "split personality".',
    answers: ['schizophrenia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does a brandophile collect?',
    answers: ['cigarbands'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does a heliologist study?',
    answers: ['thesun'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does an ornithologist study?',
    answers: ['birds'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a device to stem the flow of blood called?',
    answers: ['tourniquet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a dried plum called?',
    answers: ['prune'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a female swan called?',
    answers: ['pen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a figure with eight equal sides called?',
    answers: ['octagon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is another name for a tombstone inscription?',
    answers: ['epitaph'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is measured by a chronometer?',
    answers: ['time'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the common name for a Japanese dwarf tree?',
    answers: ['bonsai'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the common name for the Aurora Borealis?',
    answers: ['northernlights'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the common term for a "somnambulist"?',
    answers: ['sleepwalker'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name for a branch of a river?',
    answers: ['tributary'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the study of heredity called?',
    answers: ['genetics'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the study of prehistoric plants and animals called?',
    answers: ['paleontology'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the term for a castrated rooster?',
    answers: ['capon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which science studies weather?',
    answers: ['meteorology'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the clothing wrinkle remover that sounds like a kind of metal.',
    answers: ['iron'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A brown crayon is what color?',
    answers: ['brown'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How do you spell abbreviation?',
    answers: ['abbreviation'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many pencils are there in a dozen?',
    answers: ['twelve'],
    category: 'Needs to be categorised',
  },
  {
    question: '"Our Town" is a play by whom?',
    answers: ['thorntonwilder'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The play "Our Town" is set where?',
    answers: ['grover\'scorners'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a sorcerer who deals in black magic called?',
    answers: ['necromancer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From what animal do we get venison?',
    answers: ['deer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From which fish is caviar obtained?',
    answers: ['sturgeon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From which fruit is the liqueur Kirsh made?',
    answers: ['cherry'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Laetrile is associated with the pit of which fruit?',
    answers: ['apricot'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Little round chocolate candies are known as _&m\'s.',
    answers: ['m'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the only fruit named for its color.',
    answers: ['orange'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Natural vanilla flavoring comes from this plant.',
    answers: ['orchid'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Often drunk, this liquid is normally harvested from female cows.',
    answers: ['milk'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Often eaten for breakfast, bacon is actually the flesh of what barnyard animal?',
    answers: ['pig'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Often eaten for breakfast, the egg comes from what barnyard animal?',
    answers: ['chicken'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Rum is made from this plant.',
    answers: ['sugarcane'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What do you get when you add fresh fruit to red wine?',
    answers: ['sangria'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Japanese "sake" made from?',
    answers: ['rice'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the syrup drained from raw sugar?',
    answers: ['molasses'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What kind of nuts are used in marzipan?',
    answers: ['almonds'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the best brandy bottled?',
    answers: ['cognac'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where was Budweiser first brewed?',
    answers: ['st.louis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many balls are used in a game of snooker including the cue ball?',
    answers: ['twentytwo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many dots are there on a pair of dice?',
    answers: ['fortytwo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many squares are there on a chessboard?',
    answers: ['sixtyfour'],
    category: 'Needs to be categorised',
  },
  {
    question: 'If you "peg out" what game are you playing?',
    answers: ['cribbage'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In pool, what color is the eight ball?',
    answers: ['black'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which game might a person have a "full house"?',
    answers: ['poker'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which game or sport are "Staunton" pieces used?',
    answers: ['chess'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which game or sport can a person be "skunked"?',
    answers: ['cribbage'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which sport are terms "spare" and "gutter" used?',
    answers: ['tenpinbowling'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which sport or game are the terms: \'pin\', \'fork\', and \'skewer\' used?',
    answers: ['chess'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which sport or game is the term "rook" used?',
    answers: ['chess'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the only flexible murder weapon in the game of "Cluedo".',
    answers: ['rope'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the only woman suspect in the game of "Cluedo" who isn\'t married.',
    answers: ['missscarlett'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This ancient Chinese game is played with 156 small rectangular tiles.',
    answers: ['mahjongg'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the lowest ranking suit in Bridge.',
    answers: ['clubs'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This term denotes a chess move in which both the king and the rook are moved.',
    answers: ['castling'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What bowling term means three straight strikes?',
    answers: ['turkey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What game or sport is Bobby Fischer identified with?',
    answers: ['chess'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What number is on the opposite side of the "five" on dice?',
    answers: ['two'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What score is not possible for a cribbage hand?',
    answers: ['nineteen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which chess piece is usually valued as 5 points?',
    answers: ['rook'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which game usually begins with, "Is it animal, vegetable, or mineral?"',
    answers: ['twentyquestions'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Chicago Transit Authority is now known as which group?',
    answers: ['chicago'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Wedding rings are normally worn on what finger of your hand?',
    answers: ['ringfinger'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are catalogued under the Dewey decimal system?',
    answers: ['books'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are the 3 big colleges of the Ivy League? (name them alphabetically)',
    answers: ['harvard,princeton,yale'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What company makes Pampers disposable diapers?',
    answers: ['proctor&gamble'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What do the initials U.F.O stand for?',
    answers: ['unidentifiedflyingobject'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What do the letters in SAM missiles refer to?',
    answers: ['surface-to-airmissile'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does IRS stand for?',
    answers: ['internalrevenueservice'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does a compass needle point to?',
    answers: ['north'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the abbreviation a.m. stand for?',
    answers: ['antemeridian'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the acronym CIA stand for?',
    answers: ['centralintelligenceagency'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the minimum IQ score for the genius category?',
    answers: ['onehundredandforty'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is this sign called "&"?',
    answers: ['ampersand'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which U.S. president is on the five-dollar bill?',
    answers: ['abrahamlincoln'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Acadia was the original name of which Canadian province?',
    answers: ['novascotia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Bridgeport is the largest city in which state?',
    answers: ['connecticut'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Brussels is the capital of which country?',
    answers: ['belgium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Frankfort is the capital of which state?',
    answers: ['kentucky'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Guayaquil is the largest city in what country?',
    answers: ['ecuador'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Halifax is the capital of which Canadian province?',
    answers: ['novascotia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Havana is the capital of which country?',
    answers: ['cuba'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He invented the most common projection for world maps.',
    answers: ['gerardusmercator'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He visited Australia and New Zealand, then surveyed the Pacific Coast of North America.',
    answers: ['vancouver'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many stars are on the flag of New Zealand?',
    answers: ['four'],
    category: 'Needs to be categorised',
  },
  {
    question: 'If its 4:00pm in Seattle, Washington what time is it in Portland, Oregon?',
    answers: ['4:00pm'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what city are the famous Tivoli Gardens?',
    answers: ['copenhagen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what city is the Leaning Tower?',
    answers: ['pisa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what city is the Smithsonian Institute?',
    answers: ['washington'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what country is Banff National Park?',
    answers: ['canada'],
    category: scienceandgeography,
  },
  {
    question: 'In what country is Lahore?',
    answers: ['pakistan'],
    category: scienceandgeography,
  },
  {
    question: 'In what country is Mandalay?',
    answers: ['myanmar', 'burma'],
    category: scienceandgeography,
  },
  {
    question: 'In what country is Taipei?',
    answers: ['taiwan'],
    category: scienceandgeography,
  },
  {
    question: 'In what country is Thunder Bay?',
    answers: ['canada'],
    category: scienceandgeography,
  },
  {
    question: 'In what country is the Jutland peninsula?',
    answers: ['denmark'],
    category: scienceandgeography,
  },
  {
    question: 'In what country is the Mekong River Delta?',
    answers: ['vietnam'],
    category: scienceandgeography,
  },
  {
    question: 'In what country is the Waterloo battlefield?',
    answers: ['belgium'],
    category: scienceandgeography,
  },
  {
    question: 'In what country is the highest point in South America?',
    answers: ['argentina'],
    category: scienceandgeography,
  },
  {
    question: 'In what country is the lowest point in South America?',
    answers: ['argentina'],
    category: scienceandgeography,
  },
  {
    question: 'In what country is the source of the Blue Nile?',
    answers: ['ethiopia'],
    category: scienceandgeography,
  },
  {
    question: 'In what island group is Corregidor?',
    answers: ['philippines'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what mountain range is Kicking Horse Pass?',
    answers: ['rocky'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which city is Red Square?',
    answers: ['moscow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which city is Saint Paul\'s Cathedral?',
    answers: ['london'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which city is Wembley Stadium?',
    answers: ['london'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which city is the Bridge of Sighs?',
    answers: ['venice'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which city is the C.N. Tower?',
    answers: ['toronto'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which city is the Canale Grande?',
    answers: ['venice'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which city is the Colliseum located?',
    answers: ['rome'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which city is the Wailing Wall?',
    answers: ['jerusalem'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country is Angel Falls?',
    answers: ['venezuela'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country is Brest? (NOT Breast!)',
    answers: ['france'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country is Chennai (formerly Madras)?',
    answers: ['india'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country is Cusco?',
    answers: ['peru'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country is Loch Ness?',
    answers: ['scotland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country is Normandy?',
    answers: ['france'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country is Sapporo?',
    answers: ['japan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country is the Calabria region?',
    answers: ['italy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country is the Dalai Lama\'s palace?',
    answers: ['tibet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country is the Great Victoria Desert?',
    answers: ['australia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country is the Machu Picchu?',
    answers: ['peru'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country would you find the Yucatan Peninsula?',
    answers: ['mexico'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which ocean or sea are the Seychelles?',
    answers: ['indianocean'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which state are Gettysburg and the Liberty Bell?',
    answers: ['pennsylvania'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which state are the Finger Lakes?',
    answers: ['newyork'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which state is Appomattax?',
    answers: ['virginia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which state is Cape Hatteras?',
    answers: ['northcarolina'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which state is Hoover Dam?',
    answers: ['arizona'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which state is Mount McKinley?',
    answers: ['alaska'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which state is Mount St. Helens?',
    answers: ['washington'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which state is Mount Vernon?',
    answers: ['virginia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which state is Stone Mountain?',
    answers: ['georgia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which state is Walla Walla?',
    answers: ['washington'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which state is the Kennedy Space Center?',
    answers: ['florida'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which state is the Mayo Clinic?',
    answers: ['minnesota'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which state is the Painted Desert?',
    answers: ['arizona'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Into what bay does the Ganges River flow?',
    answers: ['bayofbengal'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Into what body of water does the Danube River flow?',
    answers: ['blacksea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Into what body of water does the Yukon River flow?',
    answers: ['beringsea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Into what sea does the Elbe River flow?',
    answers: ['northsea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Into what sea does the Mackenzie River flow?',
    answers: ['beaufortsea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Khartoum is the capital of which country?',
    answers: ['sudan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Kingston is the capital of which country?',
    answers: ['jamaica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Linz, Austria is a leading port on which river?',
    answers: ['danube'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Madrid and Lisbon are both located near this river.',
    answers: ['tagus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Mount Victoria is the highest peak of this island country.',
    answers: ['fiji'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name a country which has the same name as a bird.',
    answers: ['turkey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the U.S. state with the smallest population.',
    answers: ['alaska'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the capital city of Massachusetts.',
    answers: ['boston'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the capital city of Rhode Island.',
    answers: ['providence'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the capital of Argentina.',
    answers: ['buenosaires'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the capital of Brazil.',
    answers: ['brasilia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the capital of Italy.',
    answers: ['rome'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the city at the west end of Lake Superior.',
    answers: ['duluth'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the continent that consists of a single country.',
    answers: ['australia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the desert located in south-east California.',
    answers: ['mojave'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the large mountain chain in the eastern U.S.A.',
    answers: ['theappalachians'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the largest cathedral in the world.',
    answers: ['st.peter\'s'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the largest city in Canada.',
    answers: ['toronto'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the largest island in the world.',
    answers: ['greenland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the largest lake in Australia.',
    answers: ['eyre'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the largest river forming part of the U.S. - Mexican border.',
    answers: ['riogrande'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the last province to become part of Canada.',
    answers: ['newfoundland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the longest river in Asia.',
    answers: ['yangtze'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the longest river in Nigeria.',
    answers: ['niger'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the most north-easterly of the 48 contiguous states.',
    answers: ['maine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the only Central American country without an Atlantic coastline.',
    answers: ['elsalvador'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the sea between Asia Minor and Greece.',
    answers: ['aegean'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the sea between Korea and China.',
    answers: ['yellowsea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the sea north of Alaska.',
    answers: ['beaufort'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the sea north of Murmansk, Russia.',
    answers: ['barents'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the sea west of Alaska.',
    answers: ['bering'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the second largest country in Africa.',
    answers: ['algeria'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the second largest country in South America.',
    answers: ['argentina'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the second largest lake in North America.',
    answers: ['huron'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the smallest of the Great Lakes.',
    answers: ['ontario'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the strait joining the Atlantic Ocean and the Mediterranean Sea.',
    answers: ['gibraltar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the world\'s most photographed and most climbed mountain.',
    answers: ['fuji'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Nassau is the capital of which country?',
    answers: ['bahamas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what island is Honolulu?',
    answers: ['oahu'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what island is Pearl Harbour?',
    answers: ['oahu'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what island is the Blue Grotto?',
    answers: ['capri'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what island is the U.S. naval base, Guantanamo?',
    answers: ['cuba'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what mountain are four presidents\' faces carved?',
    answers: ['rushmore'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what peninsula are Spain and Portugal located?',
    answers: ['theiberianpeninsula'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what river is the capital city of Canada?',
    answers: ['ottawa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On which river is London, England?',
    answers: ['thames'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On which river is Rome located?',
    answers: ['tiber'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On which river is the Aswan High Dam?',
    answers: ['nile'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Rabat is the capital of which country?',
    answers: ['morocco'],
    category: 'Needs to be categorised',
  },
  {
    question: 'San Francisco Bay is located near what city?',
    answers: ['sanfrancisco'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Seoul is the capital of which country?',
    answers: ['southkorea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'St. George\'s is the capital city of what island country?',
    answers: ['grenada'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Surfing is believed to have originated here.',
    answers: ['hawaii'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Auckland Islands belong to which country?',
    answers: ['newzealand'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Hebrides are part of this country.',
    answers: ['scotland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Ionian and Cyclades are island groups of which country?',
    answers: ['greece'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Little Mermaid is found in the harbour of which city?',
    answers: ['copenhagen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Nationalist Chinese occupy this island.',
    answers: ['taiwan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Thatcher Ferry Bridge crosses what canal?',
    answers: ['panamacanal'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Volta is the largest river in which country?',
    answers: ['ghana'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This Canadian island is the world\'s fifth largest.',
    answers: ['baffin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This Pacific island\'s puzzling monoliths attract ethnologists.',
    answers: ['easterisland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This country is divided at the 38th parallel.',
    answers: ['korea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This country occupies the "horn of Africa".',
    answers: ['somalia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This country\'s flag has a large "R" on it.',
    answers: ['rwanda'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This imaginary line approximately follows the 180 degree meridian through the Pacific Ocean.',
    answers: ['internationaldateline'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is called the "Honeymoon Capital" of the world.',
    answers: ['niagarafalls'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the bridge with the longest span in the U.S.A.',
    answers: ['verrazanonarrows'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the only borough of New York City that is not on an island.',
    answers: ['thebronx'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the port city serving Tokyo.',
    answers: ['yokohama'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the residence of English monarchs.',
    answers: ['buckinghampalace'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This island group is off the east coast of southern South America.',
    answers: ['falklandislands'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This re-opened in 1975 after being closed for 8 years.',
    answers: ['suezcanal'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This section of Manhattan is noted for its Negro and Latin American residents.',
    answers: ['harlem'],
    category: 'Needs to be categorised',
  },
  {
    question: 'To what country do the Faeroe Islands belong?',
    answers: ['denmark'],
    category: 'Needs to be categorised',
  },
  {
    question: 'To what country does the Gaza Strip belong?',
    answers: ['egypt'],
    category: 'Needs to be categorised',
  },
  {
    question: 'True Or False:  The Easter Bunny is from Easter Island.',
    answers: ['false'],
    category: 'Needs to be categorised',
  },
  {
    question: 'True Or False:  There are only virgins on the Virgin Islands.',
    answers: ['false'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Under what river does the Holland Tunnel run?',
    answers: ['hudson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Warsaw is the capital of what country?',
    answers: ['poland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What American city is known as Little Havana?',
    answers: ['miami'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Asian city was once called Edo?',
    answers: ['tokyo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Canadian city is at the west end of Lake Ontario?',
    answers: ['hamilton'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What European country administers the island of Martinique?',
    answers: ['france'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What European country has "Vaduz" as its capital city?',
    answers: ['liechtenstein'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What London borough does the Prime Meridian pass through?',
    answers: ['greenwich'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What U.S. city is known as Insurance City?',
    answers: ['hartford'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What U.S. city is named after Saint Francis of Assisi?',
    answers: ['sanfrancisco'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What U.S. state is known as The Land of 10,000 Lakes?',
    answers: ['minnesota'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What US state is completely surrounded by the Pacific Ocean?',
    answers: ['hawaii'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are drumlins and eskers formed by?',
    answers: ['glaciers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are the worlds four oceans - alphabetically?',
    answers: ['arctic,atlantic,indianandpacific'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What body of water borders Saudi Arabia to the east?',
    answers: ['persiangulf'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What canal connects Lake Ontario and Lake Erie?',
    answers: ['welland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What city boasts the Copacabana Beach and Ipanema?',
    answers: ['riodejaneiro'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What city is associated with Alcatraz?',
    answers: ['sanfrancisco'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What city is on Lake Erie at the mouth of the Cuyahoga River?',
    answers: ['cleveland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What city is the Christian Science Monitor based in?',
    answers: ['boston'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What city is the Kremlin located in?',
    answers: ['moscow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What city was the setting for "Gone With the Wind"?',
    answers: ['atlanta'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What color does the bride wear in China?',
    answers: ['red'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What continent is Cyprus considered to be part of?',
    answers: ['asia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What continent is the home to the greatest number of countries?',
    answers: ['africa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country are the Islands of Quemoy and Matsu part of?',
    answers: ['taiwan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country borders Egypt on the west?',
    answers: ['libya'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country borders Egypt to the south?',
    answers: ['sudan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country does the island of Mykonos belong to?',
    answers: ['greece'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country formed the union of Tanganyika and Zanzibar?',
    answers: ['tanzania'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country has the world\'s most southerly city?',
    answers: ['chile'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country is Phnom Penh the capital of?',
    answers: ['cambodia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country is Santo Domingo the capital of?',
    answers: ['dominicanrepublic'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country is directly north of Israel?',
    answers: ['lebanon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country is directly north of the continental United States?',
    answers: ['canada'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country is directly west of Spain?',
    answers: ['portugal'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country is known as the Hellenic Republic?',
    answers: ['greece'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country is located between Panama and Nicaragua?',
    answers: ['costarica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country owns the island of Corfu?',
    answers: ['greece'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country was once known as Gaul?',
    answers: ['france'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country was the setting for "Casablanca"?',
    answers: ['morocco'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country was the setting for "Doctor Zhivago"?',
    answers: ['russia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What famous geyser erupts regularly at the Yellowstone National Park?',
    answers: ['oldfaithful'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the capital of Alaska?',
    answers: ['juneau'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Bangladesh?',
    answers: ['dacca'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Burma?',
    answers: ['rangoon'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Chile?',
    answers: ['santiago'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Colorado?',
    answers: ['denver'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Florida?',
    answers: ['tallahassee'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of India?',
    answers: ['newdelhi'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Indonesia?',
    answers: ['jakarta'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Kansas?',
    answers: ['topeka'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Maine?',
    answers: ['augusta'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Nebraska',
    answers: ['lincoln'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of New Zealand?',
    answers: ['wellington'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Washington state?',
    answers: ['olympia'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of West Virginia?',
    answers: ['charleston'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Wisconsin?',
    answers: ['madison'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Zimbabwe?',
    answers: ['harare'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of the United Arab Emirates?',
    answers: ['abudhabi'],
    category: scienceandgeography,
  },
  {
    question: 'What is the current name for south-west Africa?',
    answers: ['namibia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the highest mountain in Canada?',
    answers: ['mt.logan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the largest city in Australia, in terms of population?',
    answers: ['sydney'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the largest city in China?',
    answers: ['shanghai'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the largest of the countries in Central America?',
    answers: ['nicaragua'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the monetary unit of India?',
    answers: ['rupee'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the most sacred river in India?',
    answers: ['ganges'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the official language of Egypt?',
    answers: ['arabic'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the principal river of Ireland?',
    answers: ['shannon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the second largest of the United States?',
    answers: ['texas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the smallest Canadian province?',
    answers: ['princeedwardisland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the smallest independent state in the world?',
    answers: ['vaticancity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the smallest of the Central American countries?',
    answers: ['elsalvador'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the world\'s highest city?',
    answers: ['lhasa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What island has Hamilton as its capital?',
    answers: ['bermuda'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What island is known as the Spice Island?',
    answers: ['zanzibar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What mountain range separates Europe from Asia?',
    answers: ['ural'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What prison island was off the coast of French Guiana?',
    answers: ['devil\'sisland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What river has the largest drainage basin?',
    answers: ['amazon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What river is Liverpool on?',
    answers: ['mersey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What river is called "Old Man River"?',
    answers: ['mississippi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What river is known as China\'s Sorrow?',
    answers: ['yellow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What river is the Temple of Karnak near?',
    answers: ['nile'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What sea is between Italy and Yugoslavia?',
    answers: ['adriatic'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What south American country has both a Pacific and Atlantic coastline?',
    answers: ['colombia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What state borders Alabama to the north?',
    answers: ['tennessee'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What state is the Golden State?',
    answers: ['california'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What state was the home to Mayberry?',
    answers: ['northcarolina'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What symbol is on the flag of Vietnam?',
    answers: ['star'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What unit of currency will buy you dinner in Iraq, Jordan, Tunisia, and Yugoslavia?',
    answers: ['dinar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What volcano showers ash on Sicily?',
    answers: ['etna'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What\'s the former name of Istanbul?',
    answers: ['constantinople'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What\'s the highest mountain in the 48 contiguous U.S. states?',
    answers: ['whitney'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where are the Nazca Lines?',
    answers: ['peru'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where are the pyramids located?',
    answers: ['egypt'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is Beacon Street?',
    answers: ['boston'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is Euston Station?',
    answers: ['london'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is George Washington buried?',
    answers: ['mt.vernon,virginia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is Queen Maud Land located?',
    answers: ['antarctica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is Westminster Abbey located?',
    answers: ['london'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the Admirality Arch?',
    answers: ['london'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the Holy Kaaba?',
    answers: ['mecca'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the Parthenon located?',
    answers: ['athens'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the city of Brotherly Love?',
    answers: ['philadelphia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the Pillars of Hercules located?',
    answers: ['gibraltar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Canadian province extends farthest north?',
    answers: ['quebec'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Central American country extends furthest north?',
    answers: ['belize'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which European country has the highest population density?',
    answers: ['monaco'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which European country has the lowest population density?',
    answers: ['iceland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Irish city is famous for its crystal?',
    answers: ['waterford'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which U.S. city is known as Beantown?',
    answers: ['boston'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which U.S. city is known as the Biggest Little City in the World?',
    answers: ['reno'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which U.S. state borders a Canadian territory?',
    answers: ['alaska'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which U.S. state has the least rainfall?',
    answers: ['nevada'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which U.S. state receives the most rainfall?',
    answers: ['hawaii'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which capital is known as the Glass Capital of the World?',
    answers: ['toledo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which city has the largest rodeo in the world?',
    answers: ['calgary'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which city is known as Motown?',
    answers: ['detroit'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which city is known as the Windy City?',
    answers: ['chicago'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which city is on the east side of San Francisco Bay?',
    answers: ['oakland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country administers Christmas Island?',
    answers: ['australia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country are the Galapagos Islands part of?',
    answers: ['ecuador'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country borders Italy, Switzerland, West Germany, Czechoslovakia, Hungary, Yugoslavia, and Liechtenstein?',
    answers: ['austria'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country developed "Tae-Kwan-Do"?',
    answers: ['korea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country has Ankara as its capital?',
    answers: ['turkey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country has Budapest as its capital?',
    answers: ['hungary'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country has the longest land border?',
    answers: ['china'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country hosted the 1982 World Cup of soccer?',
    answers: ['spain'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country uses the "yen" for currency?',
    answers: ['japan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country would come first in an alphabetical list of countries?',
    answers: ['afghanistan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which islands were named after Prince Philip of Spain?',
    answers: ['thephilippines'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which mainland Latin American country is in neither South America nor Central America?',
    answers: ['mexico'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which of the 48 contiguous states extends farthest north?',
    answers: ['minnesota'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which of the U.S. states borders only one other state?',
    answers: ['maine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which river contains the most fresh water?',
    answers: ['amazon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which state has the most hospitals?',
    answers: ['california'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which state is divided into two parts by a large lake?',
    answers: ['michigan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which state is the Evergreen State?',
    answers: ['washington'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which state is the Garden State?',
    answers: ['newjersey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which state is the Wolverine State?',
    answers: ['michigan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With what country is Fidel Castro associated?',
    answers: ['cuba'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With which country is Prince Rainier III identified?',
    answers: ['monaco'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the capital city of Utah.',
    answers: ['saltlakecity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'These limestone deposits rise from the floor of caves.',
    answers: ['stalagmites'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the hardest naturally occurring substance.',
    answers: ['diamond'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What name is used to describe permanently-frozen subsoil?',
    answers: ['permafrost'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This normally has 4 legs and your butt is parked in it right now.',
    answers: ['chair'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the first black nation to gain freedom from European colonial rule.',
    answers: ['haiti'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Britain and Argentina fought over these islands in 1982.',
    answers: ['falklandsislands'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Churchill, F.D. Roosvelt and Stalin met here in 1945.',
    answers: ['yalta'],
    category: 'Needs to be categorised',
  },
  {
    question: 'For what country did Columbus make his historic voyage?',
    answers: ['spain'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Four Japanese carriers were destroyed in this battle.',
    answers: ['midway'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From what country did the U.S. buy the Virgin Islands?',
    answers: ['denmark'],
    category: 'Needs to be categorised',
  },
  {
    question: 'General Sherman burned this city in 1864.',
    answers: ['atlanta'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He allowed the bugging of the Democratic Committee headquarters.',
    answers: ['richardnixon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He discovered the Grand Canyon.',
    answers: ['franciscocoronado'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He is identified with the expression, "Eureka".',
    answers: ['archimedes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He is said to have fiddled while Rome burned.',
    answers: ['nero'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He led 900 followers in a mass suicide in 1979.',
    answers: ['jimjones'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which emperor ordered the persecution of Christians in which Peter and Paul died?',
    answers: ['nero', 'emperornero'],
    category: societyandhumanities,
  },
  {
    question: 'He received the Nobel Peace Prize in 1964 for his civil rights leadership.',
    answers: ['martinlutherkingjr.'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He said, "I have nothing to offer but blood, tears, toil and sweat."',
    answers: ['sirwinstonchurchill'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He shot Lee Harvey Oswald.',
    answers: ['jackruby'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He taught Alexander the Great.',
    answers: ['aristotle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He was assassinated on Dec. 8, 1980 in New York City.',
    answers: ['johnlennon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He was assassinated on Nov. 22, 1963.',
    answers: ['johnfitzgeraldkennedy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He was defeated at the Battle of Little Bighorn.',
    answers: ['generalcuster'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He was stabbed by Gaius Cassius Longinus.',
    answers: ['juliuscaesar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He was the American inventor of the Cotton Gin.',
    answers: ['eliwhitney'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He was the U.S. president during the Civil War.',
    answers: ['abrahamlincoln'],
    category: 'Needs to be categorised',
  },
  {
    question: 'His ship was the H.M.S. Beagle.',
    answers: ['charlesdarwin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How do you write 69 in Roman numerals?',
    answers: ['lxix'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many astronauts manned each Apollo flight?',
    answers: ['three'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How old was John F. Kennedy when he became president?',
    answers: ['fortythree'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In 1902 this volcano erupted, killing 30,000.',
    answers: ['pelee'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what country did "Sepoy Mutiny" occur?',
    answers: ['india'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which city was President Kennedy killed?',
    answers: ['dallas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which city were the Hanging Gardens?',
    answers: ['babylon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country did the Boxer Rebellion take place?',
    answers: ['china'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country was Adolf Hitler born?',
    answers: ['austria'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country was the Rosetta Stone found?',
    answers: ['egypt'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Israel occupied the Golan Heights.  Whose territory was it?',
    answers: ['syria'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Mussolini invaded this country in 1935.',
    answers: ['ethiopia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name Jacques Cousteau\'s research ship.',
    answers: ['calypso'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the incident in which tea was dumped into the harbour.',
    answers: ['bostonteaparty'],
    category: 'Needs to be categorised',
  },
  {
    question: 'She overcame her handicaps to become a lecturer and a scholar.',
    answers: ['helenkeller'],
    category: 'Needs to be categorised',
  },
  {
    question: 'She was Queen of Egypt and mistress of Julius Caesar.',
    answers: ['cleopatra'],
    category: 'Needs to be categorised',
  },
  {
    question: 'She was called "The Maid of Orleans".',
    answers: ['joanofarc'],
    category: 'Needs to be categorised',
  },
  {
    question: 'She was the first First Lady to be received privately by the Pope.',
    answers: ['jackiekennedy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'She was the first woman premier of Israel.',
    answers: ['goldameir'],
    category: 'Needs to be categorised',
  },
  {
    question: 'She was the first woman to fly the Atlantic solo.',
    answers: ['ameliaearhart'],
    category: 'Needs to be categorised',
  },
  {
    question: 'She was the first woman to swim the English channel.',
    answers: ['gertrudecarolineederle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'She was the greatest trick shot artist of all time.',
    answers: ['annieoakley'],
    category: 'Needs to be categorised',
  },
  {
    question: 'She won the 1979 Nobel Peace Prize for her work among the poor.',
    answers: ['motherteresa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Spain ceded Florida to Britain in exchange for this territory.',
    answers: ['cuba'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The "Bay of Pigs" fiasco took place in this country.',
    answers: ['cuba'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Inquisition forced him to recant his belief in the Copernican Theory.',
    answers: ['galileo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Romans built these to convey water.',
    answers: ['aqueducts'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The St. Valentine\'s Day massacre took place in this city.',
    answers: ['chicago'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The last line of this document is "Working men of all countries, unite."',
    answers: ['communistmanifesto'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This F.B.I agent headed the investigation of Al Capone.',
    answers: ['elliotness'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This French peasant girl led the army to victories.',
    answers: ['joanofarc'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This Indian group ruled in early Peru.',
    answers: ['inca'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This Nazi leader had his six children poisoned prior to his own death.',
    answers: ['josephgoebbels'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This Queen of France was beheaded in 1793.',
    answers: ['marieantoinette'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This Roman killed himself after his defeat at Actium.',
    answers: ['marcantony'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This Sioux Indian toured with Buffalo Bill\'s Wild West Show.',
    answers: ['sittingbull'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This Spaniard conquered Mexico.',
    answers: ['hernandocortez'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This U.S. Secretary of State won the Nobel Peace Prize in 1973.',
    answers: ['henrykissinger'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This U.S. president was fatally shot in 1881.',
    answers: ['jamesgarfield'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This assassin of Julius Caesar was his friend.',
    answers: ['brutus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This frontiersman and politician was killed at the Alamo.',
    answers: ['davycrockett'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is said to be history\'s greatest military evacuation.',
    answers: ['dunkirk'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This military attack took place on Dec. 7, 1941.',
    answers: ['pearlharbour'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This organization was founded by William Booth.',
    answers: ['salvationarmy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This racist organization was formed in Tennessee in 1865.',
    answers: ['kukluxklan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This war began on June 25, 1950.',
    answers: ['korean'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This was the largest real estate deal in U.S. history.',
    answers: ['louisianapurchase'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This word describes the Nazi annihilation of Jews.',
    answers: ['holocaust'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Two 747\'s collided here in 1977.',
    answers: ['canaryislands'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What American feminist went bust as a silver dollar?',
    answers: ['susanb.anthony'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Chinese dynasty was overthrown in 1911?',
    answers: ['manchu'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What age preceded the Iron Age?',
    answers: ['thebronzeage'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did President J. Buchanan not have?',
    answers: ['awife'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did presidents Madison, Monroe, Polk, and Garfield have in common?',
    answers: ['thefirstname"james"'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What group landed in America in 1620?',
    answers: ['thepilgrims'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the Roman numeral for fifty?',
    answers: ['l'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the Russian Czar\'s daughter who might-or might not-have survived the Russian revolution?',
    answers: ['anastasia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What volcano destroyed Pompeii?',
    answers: ['vesuvius'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the instrument of execution during the "Reign of Terror"?',
    answers: ['guillotine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of Plato\'s school?',
    answers: ['academy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of the B-29 used at Hiroshima to drop the bomb?',
    answers: ['enolagay'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the nationality of the prisoners in the "Black hole of Calcutta"?',
    answers: ['british'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the third country to get the "bomb"?',
    answers: ['britain'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What\'s the resting place of those buried at sea?',
    answers: ['daveyjones\'slocker'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which U.S. president said, "The buck stops here"?',
    answers: ['truman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which military battle took place in 1815?',
    answers: ['waterloo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which nation was led by Genghis Khan?',
    answers: ['themongols'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which president was responsible for the Louisiana Purchase?',
    answers: ['jefferson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is "The Iron Lady"?',
    answers: ['margaretthatcher'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who led the attack on the Alamo?',
    answers: ['santaana'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who rode naked through the streets of Coventry?',
    answers: ['ladygodiva'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said "Veni, vidi, vici" (I came, I saw, I conquered)?',
    answers: ['juliuscaesar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said: "Let them eat cake"?',
    answers: ['marieantoinette'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang Happy Birthday to John F. Kennedy for his 45th?',
    answers: ['marilynmonroe'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who succeeded Winston Churchill when he resigned in 1955?',
    answers: ['siranthonyeden', 'anthonyeden', 'eden'],
    category: societyandhumanities,
  },
  {
    question: 'Who was "The Mad Monk"?',
    answers: ['rasputin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was George Washington\'s vice-president?',
    answers: ['adams'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the first chancellor of West Germany after WW II?',
    answers: ['konradadenauer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the second man to set foot on the moon?',
    answers: ['edwin"buzz"aldrin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was, "First in war, first in peace and first in the hearts of his countrymen"?',
    answers: ['georgewashington'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What three letters are overly used to indicate "Laugh Out Loud"?',
    answers: ['lol'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Many Meanings:  Fuel, vapor, flattulence, helium.  What is it?',
    answers: ['gas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Multiple Meanings:  Drinking utensils or sight-enhancers.',
    answers: ['glasses'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Multiple Meanings:  Slamming your hands together quickly, or a venereal disease.',
    answers: ['clap'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the soda that is often confused with a drug.',
    answers: ['coke'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This animal is found at the beginning of an (English) encyclopedia',
    answers: ['aardvark'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the only English word formed by the first three letters of the alphabet?',
    answers: ['cab'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What three letter word means the same as "to ingest"?',
    answers: ['eat'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The name for this semi-precious stone comes from the Latin for "sea water"',
    answers: ['aquamarine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does "c\'est la vie" mean?',
    answers: ['that\'slife'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What word contains the combination of letters: "xop"?',
    answers: ['saxophone'],
    category: 'Needs to be categorised',
  },
  {
    question: '"The Diary of Anne Frank" was first published in English under what title?',
    answers: ['thediaryofayounggirl'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Captain Hook, Tiger Lily, and Tinker Bell are characters in what story?',
    answers: ['peterpan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Edgar Allen Poe wrote a famous poem about this animal.',
    answers: ['raven'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From which Shakespeare play is this line taken: "Double, double ... "',
    answers: ['macbeth'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From which Shakespeare play is this line taken: "Goodnight, goodnight! Parting is such sweet sorrow, That I should say goodnight till it be morrow."',
    answers: ['romeoandjuliet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From which Shakespeare play is this line taken: "To be or not to be?"',
    answers: ['hamlet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From which Shakespeare play is this line taken: "What in a name? That which we call a rose, by any other name would smell as sweet."',
    answers: ['romeoandjuliet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many lines are in a sonnet?',
    answers: ['fourteen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many plays is Shakespeare generally credited with today?',
    answers: ['thirtyseven'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the Shakespeare play from this ultra short plot summary: Urged on by his wife, a man murders his king in order to take his place.',
    answers: ['macbeth'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This Shakespearean king was the actual king of Scotland for 17 years.',
    answers: ['macbeth'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This girl hid from the Nazis in Amsterdam.',
    answers: ['annefrank'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Shakespearean play features the line: A plague on both your houses?',
    answers: ['romeoandjuliet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Jeannie C. Riley describe as "a little Peyton Place"?',
    answers: ['harpervalley'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What other name does Stephen King write under?',
    answers: ['richardbachman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What publication was subtitled The What\'s New Magazine?',
    answers: ['popularscience'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of Mother Goose\'s son?',
    answers: ['jack'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What\'s Penthouse\'s sister publication for women?',
    answers: ['viva'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Homer wrote this account of the Trojan War.',
    answers: ['iliad'],
    category: 'Needs to be categorised',
  },
  {
    question: 'You are in a room where all walls face south.  A bear walks by.  What color is it?',
    answers: ['white'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Approximately how many inches are there in one meter?',
    answers: ['thirtynine'],
    category: scienceandgeography,
  },
  {
    question: 'He is known as "The Father of Geometry".',
    answers: ['euclid'],
    category: scienceandgeography,
  },
  {
    question: 'How many corners are there in a cube?',
    answers: ['eight', '8'],
    category: scienceandgeography,
  },
  {
    question: 'How many nickles are there in 2.25?',
    answers: ['fortyfive'],
    category: 'Needs to be categorised',
  },
  {
    question: 'If you cut through a solid sphere what shape will the flat area be?',
    answers: ['circle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the number system which uses only the symbols 1 and 0.',
    answers: ['thebinarysystem'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The square root of 1 is?',
    answers: ['1'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What geometric shape has 4 equal sides?',
    answers: ['square'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Doctors often have this instrument around their neck.',
    answers: ['stethoscope'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Due to a lack of vitamin C, sailors used to contract this disease.',
    answers: ['scurvy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He discovered the process of vaccination for prevention of smallpox.',
    answers: ['edwardjenner'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many bones are there in the human body?',
    answers: ['twohundredandsix'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many chambers does the human heart have?',
    answers: ['four'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many pints of blood does the average human have in his/her body?',
    answers: ['twelve'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the field of psychiatry this term means self-love.',
    answers: ['narcissism'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what organ of the body is insulin produced?',
    answers: ['pancreas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which organ is a clear watery solution known as the "aqueous humor" found?',
    answers: ['eye'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which organ is a pulmonary disease located?',
    answers: ['lung'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which organ is your "hypothalmus" located?',
    answers: ['brain'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the hardest substance in the human body.',
    answers: ['enamel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the largest artery in the human body.',
    answers: ['aorta'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the largest gland in the human body.',
    answers: ['liver'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The lack of this element in the diet is a cause of goitre.',
    answers: ['iodine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'These animals were once used to bleed the sick.',
    answers: ['leeches'],
    category: 'Needs to be categorised',
  },
  {
    question: 'These attach muscles to bones or cartilage.',
    answers: ['tendons'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This branch of medicine deals with old age and its diseases.',
    answers: ['geriatrics'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This disease consists of a purposeless, continual growth of white blood cells.',
    answers: ['leukemia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This fingerlike projection is attached to the large intestine.',
    answers: ['appendix'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is known as "The Royal Disease".',
    answers: ['haemophilia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This large bean-shaped lymph gland can expand and contract as needed.',
    answers: ['spleen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This membrane controls the amount of light entering the eye.',
    answers: ['iris'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This organ is a small pouch that stores bile.',
    answers: ['gallbladder'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This parasite lives in the intestines of man and animals.',
    answers: ['tapeworm'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This small gland attached to the brain exerts a control over growth.',
    answers: ['pituitary'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What disease is also known as "rubella"?',
    answers: ['germanmeasles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What hormone is produced by the adrenal glands?',
    answers: ['adrenaline'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a skin specialist called?',
    answers: ['dermatologist'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is an organism called that lives on or in a host animal?',
    answers: ['parasite'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the biggest disqualifying factor for prospective astronauts?',
    answers: ['eyesight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the medical term for cancer of the blood?',
    answers: ['leukemia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the bone in the lower leg?',
    answers: ['tibia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What kind of poisoning is known as plumbism?',
    answers: ['leadpoisoning'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What toe is the foot reflexology pressure point for the head?',
    answers: ['bigtoe'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where do you find the medulla oblongata?',
    answers: ['brain'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where in the body is the tiniest human muscle?',
    answers: ['ear'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which disease is also known as "Hansen\'s Disease"?',
    answers: ['leprosy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With what body part is otology involved?',
    answers: ['ear'],
    category: 'Needs to be categorised',
  },
  {
    question: 'If the groundhog sees his shadow on Feb. 2, there will be how many more weeks of bad weather?',
    answers: ['six'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This dry, warm wind flows eastward down the slopes of the Rocky Mountains.',
    answers: ['chinook'],
    category: 'Needs to be categorised',
  },
  {
    question: 'At the end of "Planet of the Apes" what protruded from the rocks?',
    answers: ['statueofliberty'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Barbara Streisand was the female lead in "Hello, Dolly".  Who was the male lead?',
    answers: ['waltermatthau'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Charles Laughton played Quasimodo in this epic film.',
    answers: ['hunchbackofnotredame'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He directed "The Godfather".',
    answers: ['francisfordcoppola'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He directed the movie E.T.',
    answers: ['stephenspielberg'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He played Superman in the 1978 movie version.',
    answers: ['christopherreeve'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He starred in "Conan the Barbarian".',
    answers: ['arnoldschwarzenegger'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He starred in, "City Lights".',
    answers: ['charliechaplin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He was known as the "Elephant Man".',
    answers: ['josephmerrick'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He was the villain in "Star Wars".',
    answers: ['darthvader'],
    category: 'Needs to be categorised',
  },
  {
    question: 'His films include: Giant, Written on the Wind, and A Farewell to Arms.',
    answers: ['rockhudson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'His films include: Spartacus, The Vikings, and Ulysses.',
    answers: ['kirkdouglas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In "Gone With the Wind", Scarlett regains her wealth by investing in what type of business?',
    answers: ['sawmill'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In 1975 Jack Nicholson won the best actor Oscar for his role in this film.',
    answers: ['oneflewoverthecuckoo\'snest'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the 1996 version of "Romeo and Juliet", who played Juliet?',
    answers: ['clairedanes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the film "Bright Eyes", Shirley Temple sang about this boat.',
    answers: ['thegoodshiplollipop'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In this 1968 film the husband of an unsuspecting young wife becomes involved with a witch\'s coven.',
    answers: ['rosemary\'sbaby'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which Disney movie is the song "So This Is Love"?',
    answers: ['cinderella'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the Disney cartoon in which the character "Belle" appears.',
    answers: ['beautyandthebeast'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the actor who played the leading role in "The Good, the Bad, and the Ugly".',
    answers: ['clinteastwood'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the first full length color cartoon talking picture.',
    answers: ['snowwhite'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the musical film named after a state.',
    answers: ['oklahoma'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Nick Nolte and Eddie Murphy star in this 1982 film.',
    answers: ['48hours'],
    category: 'Needs to be categorised',
  },
  {
    question: 'She played Lois Lane in the 1978 film version of "Superman".',
    answers: ['margotkidder'],
    category: 'Needs to be categorised',
  },
  {
    question: 'She played a Polish refugee in "Sophie\'s Choice".',
    answers: ['merylstreep'],
    category: 'Needs to be categorised',
  },
  {
    question: 'She played the lead role in "Coal Miner\'s Daughter".',
    answers: ['sissyspacek'],
    category: 'Needs to be categorised',
  },
  {
    question: 'She starred in the 1952 film, "Niagara".',
    answers: ['marilynmonroe'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The first 18 minutes of this movie is black and white.',
    answers: ['wizardofoz'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The song "Matchmaker, Matchmaker" came from which musical play?',
    answers: ['fiddlerontheroof'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This 1974 film started a run of nostalgia culminating in the TV series "Happy Days".',
    answers: ['americangraffiti'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This Disney movie relies heavily on computer animation.',
    answers: ['tron'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This actress appeared in "St. Elmo\'s Fire", "The Scarlett Letter", and "Striptease".',
    answers: ['demimoore'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This actress was Miss Hungary of 1936.',
    answers: ['zsa-zsagabor'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This film starring Julie Andrews and Christopher Plummer wont he best picture Oscar for 1965.',
    answers: ['soundofmusic'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This film starring Richard Beymer and Natalie Wood won the best picture Oscar for 1961.',
    answers: ['westsidestory'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This film was an ambitious concert sequence of cartoons by Walt Disney.',
    answers: ['fantasia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is a classic film about a huge gorilla.',
    answers: ['kingkong'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This magic word was in the movie, "Mary Poppins".',
    answers: ['supercalifragilisticexpialidocious'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This movie directed by Woody Allen won the best picture Oscar in 1978.',
    answers: ['anniehall'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This movie is about the migration of poor workers from the dust bowl to the Californian fruit valleys.',
    answers: ['thegrapesofwrath'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This movie starring Marlon Brando won the best picture award in 1972.',
    answers: ['thegodfather'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This was the first 3-D film.',
    answers: ['bwanadevil'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This was the first cartoon talking picture.',
    answers: ['steamboatwillie'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This was the sequel to "Star Wars".',
    answers: ['theempirestrikesback'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This was the sequel to "The Empire Strikes Back".',
    answers: ['returnofthejedi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What actor appeared in all three of these films, Straw Dogs, Midnight Cowboy, and The Graduate?',
    answers: ['dustinhoffman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What actress has received the most Oscar nominations?',
    answers: ['katherinehepburn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What actress\'s real name was Frances Gumm?',
    answers: ['judygarland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What city\'s police force did Charlie Chan work with?',
    answers: ['honolulu'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What color was Bullitt\'s car?',
    answers: ['green'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country was the setting for "The King and I"?',
    answers: ['siam(thailand)'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What detective duo was featured in Mystery at Devil\'s Paw?',
    answers: ['hardy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the statue of Oscar stand on?',
    answers: ['areeloffilm'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What famous animal character called "Skull Island" home?',
    answers: ['kingkong'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What film did John Wayne win his only Oscar for?',
    answers: ['truegrit'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Hawkeye\'s full name in M.A.S.H.?',
    answers: ['benjaminfranklinpierce'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the destination of the plane at the end of the film "Casablanca"?',
    answers: ['lisbon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of Pearce Brosnan\'s first James Bond film?',
    answers: ['goldeneye'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the Volkswagen in the film, "The Love Bug"?',
    answers: ['herbie'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the rabbit in the film, "Bambi"?',
    answers: ['thumper'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the skunk in the film, "Bambi"?',
    answers: ['flower'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the whale that swallowed Pinocchio.',
    answers: ['monstro'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the stage name of Greta Gustafson?',
    answers: ['gretagarbo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the title of the 1996 sequel to "Terms of Endearment"?',
    answers: ['morningstar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What kind of creature was Chewbacca in "Star Wars"?',
    answers: ['wookiee'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What two words are normally at the end of most movies?',
    answers: ['theend'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was "Rocky\'s" last name?',
    answers: ['balboa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Citizen Kane\'s dying word?',
    answers: ['rosebud'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Dorothy\'s last name in "The Wizard of Oz"?',
    answers: ['gale'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Rocky\'s nickname in the ring?',
    answers: ['theitalianstallion'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Sir Alec Guinness\'s role in "Star Wars"?',
    answers: ['obi-wankenobi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first film directed by Robert Redford?',
    answers: ['ordinarypeople'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of Ashley Wilkes\' plantation in "Gone With the Wind"?',
    answers: ['twelveoaks'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of Han Solo\'s spaceship in "Star Wars"?',
    answers: ['millenniumfalcon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of Luke\'s strange little advisor in "The Empire Strikes Back"?',
    answers: ['yoda'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of the motel in the film "Psycho"?',
    answers: ['batesmotel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the setting for "The Sound of Music"?',
    answers: ['austria'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which actor said, "Love means never having to say you\'re sorry"?',
    answers: ['ryano\'neil'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which character in "Forrest Gump" loved shrimp?',
    answers: ['bubba'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which character sang "Come Out, Come Out, Wherever You Are" in "The Wizard of Oz"?',
    answers: ['glinda'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which character sang, "When you wish upon a star.." in Disney\'s "Pinocchio"?',
    answers: ['jiminycricket'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which comedy duo did the famous, "Who\'s on first?" routine?',
    answers: ['abbottandcostello'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which planet was the "Planet of the Apes"?',
    answers: ['earth'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who co-starred with Julie Andrews in "Mary Poppins"?',
    answers: ['dickvandyke'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who hosted the 1997 Grammy Awards?',
    answers: ['ellendegeneres'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is Warren Beatty\'s sister?',
    answers: ['shirleymaclaine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the fastest mouse in all of Mexico?',
    answers: ['speedygonzalez'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the male lead in the "Naked Gun" movies?',
    answers: ['leslienielsen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the voice of Darth Vadar?',
    answers: ['jamesearljones'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played "Robin" to Val Kilmer\'s "Batman"?',
    answers: ['christophero\'donnell'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played Brad Pitt\'s cop partner in the movie "Seven"?',
    answers: ['morganfreeman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played Dorothy in "The Wizard of Oz"?',
    answers: ['judygarland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played Garth in "Wayne\'s World"?',
    answers: ['danacarvey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played Matt Helm in the movies?',
    answers: ['deanmartin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played Scarlette O\'Hara in "Gone With the Wind"?',
    answers: ['vivienleigh'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played the \'Wicked Witch of the West\' in "The Wizard of Oz"',
    answers: ['margarethamilton'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played the role of Richard Blaine in Casablanca?',
    answers: ['humphreybogart'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who plays the character of the only escapee from Alcatraz in the movie "The Rock"?',
    answers: ['seanconnery'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who portrayed Han Solo in "Star Wars"?',
    answers: ['harrisonford'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who portrayed Moses in "The Ten Commandments"?',
    answers: ['charltonheston'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who produced, directed and starred in "Citizen Kane"?',
    answers: ['orsonwelles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who starred with John Travolta in the movie "Broken Arrow"?',
    answers: ['christianslater'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was C3PO\'s sidekick in "Star Wars"?',
    answers: ['r2d2'],
    category: 'Needs to be categorised',
  },
  {
    question: '"He\'s So Fine", "One Fine Day" and "A Love So Fine" where hits for what fine group?',
    answers: ['thechiffons'],
    category: 'Needs to be categorised',
  },
  {
    question: '"Joy to the World" was a hit in 1971 for what band with three lead vocalists?',
    answers: ['threedognight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Besides "Auld Lang Syne" and "For He\'s a Jolly Good Fellow", what is the most frequently sung song in English?',
    answers: ['happybirthday'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Fifties rock "n" roll was revived by what greased hair, T-shirted, TV frequenting group?',
    answers: ['shanana'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name Jerry Garcia\'s long lived group.',
    answers: ['thegratefuldead'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This female artist enjoyed sucess on both popular and country & western stations with such tunes as "Let Me Be There" and "Have You Never Been Mellow."',
    answers: ['olivianewton-john'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This was the Beatle\'s first film.',
    answers: ['ahardday\'snight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Through 1963 this duo\'s total record sales exceeded 18 million with successes including "Cathy\'s Clown" and "Wake Up Little Suzie".',
    answers: ['theeverlybrothers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Procol Harem tune was based on the Bach cantata "Sleepers Awake"?',
    answers: ['awhitershadeofpale'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What band recorded the 1978 hit album: "Briefcase Full of Blues"?',
    answers: ['thebluesbrothers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What city is also known as Music City, U.S.A.?',
    answers: ['nashville'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country singer/songwriter (and sometimes actor) is known as "the country outlaw"?',
    answers: ['willienelson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What entertainer is allowing one of his songs to be used in a government campaign to beat drunk driving?',
    answers: ['michaeljackson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What famous classical composer continued to compose great music after becoming deaf?',
    answers: ['ludwigvanbeethoven'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What famous singer was known to give automobiles to complete strangers?',
    answers: ['elvispresley'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What group refused to have their pictures taken while they were not in their makeup?',
    answers: ['kiss'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What group\'s biggest-ever hit was Be My Baby?',
    answers: ['theronettes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What song by Don McLean talks about the day Buddy Holly died?',
    answers: ['americanpie'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What song did Aretha Franklin sing in "The Blues Brothers"?',
    answers: ['think'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Elvis Presley\'s wife\'s name?',
    answers: ['priscilla'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was The Beatles\' biggest hit single?',
    answers: ['heyjude'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What\'s the name of B.B. King\'s guitar?',
    answers: ['lucille'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which of Paul Simon\'s musical characters was told to hop on the bus?',
    answers: ['gus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented the electrical bass?',
    answers: ['leofender'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who recorded the 1957 hit "Tammy"?',
    answers: ['debbyreynolds'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who recorded the lengthy song: "In-A-Gadda-Da-Vida" in 1969?',
    answers: ['ironbutterfly'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the first singer in Genesis?',
    answers: ['petergabriel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Whose theme song was Back In The Saddle Again?',
    answers: ['geneautry\'s'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This Greek mountain was known as the home of the gods.',
    answers: ['olympus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What has no reflection, no shadow, and can\'t stand the smell of garlic?',
    answers: ['vampire'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What\'s heaven to fallen Norse warriors?',
    answers: ['valhalla'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where did Robin Hood supposedly live?',
    answers: ['sherwoodforest'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which ancient continent is said to be submerged?',
    answers: ['atlantis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the largest of the dinosaurs.',
    answers: ['brachiosaurus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A calm ocean region near the equator.',
    answers: ['doldrums'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A relationship between two different types of organism which live together for their mutual benefit.',
    answers: ['symbiosis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Dogs bark.  What do donkeys do?',
    answers: ['bray'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Excluding man, what is the longest-lived land mammal?',
    answers: ['elephant'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From what animal is "ambergis" obtained?',
    answers: ['spermwhale'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How man legs does a crab have?',
    answers: ['ten'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many teats does a cow have?',
    answers: ['four'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many tentacles does a squid have?',
    answers: ['ten'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Linseed oil is obtained from the seed of which plant?',
    answers: ['flax'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the fastest land animal over a prolonged distance (1,000 yd. plus)',
    answers: ['antelope'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the heaviest breed of domestic dog.',
    answers: ['st.bernard'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the heaviest flying bird of prey.',
    answers: ['condor'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the largest living bird.',
    answers: ['ostrich'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the largest web-footed bird.',
    answers: ['albatross'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the longest venomous snake.',
    answers: ['cobra'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the mammal living at the highest altitude.',
    answers: ['yak'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the most venomous spider.',
    answers: ['blackwidow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the only native North American marsupial.',
    answers: ['opossum'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the slowest moving land mammal.',
    answers: ['sloth'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the smallest breed of dog.',
    answers: ['chihuahua'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the wild dogs of Australia.',
    answers: ['dingo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Snakes are reptiles.  What are frogs?',
    answers: ['amphibians'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The "canebrake", "timber" and "pygmy" are types of what?',
    answers: ['rattlesnake'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The fins of which fish are made into a soup?',
    answers: ['shark'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The koala bear eats the leaves from this tree.',
    answers: ['eucalyptus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'These marine crustaceans often attach themselves to the hulls of ships.',
    answers: ['barnacles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This animal is armed with bony plates and rolls up into a ball if frightened.',
    answers: ['armadillo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This animal is kept as a house pet to kill cobras.',
    answers: ['mongoose'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This animal is normally measured in "hands".',
    answers: ['horse'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This animal is the symbol of the U.S. Democratic Party.',
    answers: ['donkey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This animal is the symbol of the U.S. Republican Party.',
    answers: ['elephant'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This animal\'s name is the same as that given to a high church official.',
    answers: ['cardinal'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This animal\'s shell is used to make attractive jewelry.',
    answers: ['abalone'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This bird lays its eggs in the nests of other birds.',
    answers: ['cuckoo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the largest of the deer family.',
    answers: ['moose'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the main food of the blue whale.',
    answers: ['plankton'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the only mammal with four knees.',
    answers: ['elephant'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This order of insects contains the most species.',
    answers: ['beetle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This organic gem is a deep red secretion from a marine animal.',
    answers: ['coral'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This small animal is trained to hunt rats and rabbits.',
    answers: ['ferret'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This two ton animal can gallop at over 50 miles an hour.',
    answers: ['rhinoceros'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This ugly creature has patches of red on his rear-end.',
    answers: ['mandrill'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are the pouched animals called?',
    answers: ['marsupials'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What bird is an excellent swimmer, but can\'t fly?',
    answers: ['penguin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does a camel store in its hump?',
    answers: ['fat'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What fish is the fastest?',
    answers: ['sailfish'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a group of larks called?',
    answers: ['exaltation'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a group of peacocks called?',
    answers: ['muster'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a group of whales called?',
    answers: ['pod'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a male goose called?',
    answers: ['gander'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a male swan called?',
    answers: ['cob'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a male swine called?',
    answers: ['boar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a young goose called?',
    answers: ['gosling'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a young swan called?',
    answers: ['cygnet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is an emasculated stallion called?',
    answers: ['gelding'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is another term for a black leopard?',
    answers: ['panther'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the horn of a rhinoceros made of?',
    answers: ['hair'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the only dog that doesn\'t have a pink tongue?',
    answers: ['chow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What large herbivore sleeps only one hour a night?',
    answers: ['antelope'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What name is given to a female calf?',
    answers: ['heifer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What plant is opium derived from?',
    answers: ['poppy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What travels in gaggles?',
    answers: ['geese'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What type of animal is a wallaby?',
    answers: ['marsupial'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What type of animal lives in a formicary?',
    answers: ['ant'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What word is used for a female fox?',
    answers: ['vixen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What word is used for a female sheep?',
    answers: ['ewe'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What word is used for a male deer?',
    answers: ['buck'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What word is used for a male duck?',
    answers: ['drake'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What do oak trees grow from?',
    answers: ['acorns'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What would be kept in an "aviary"?',
    answers: ['birds'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the Ocean of Storms located?',
    answers: ['onthemoon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is Robert Zimmermann?',
    answers: ['bobdylan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are white dwarfs and red giants?',
    answers: ['stars'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are these: chrysolite, beryl, jasper, and tourmaline?',
    answers: ['gems'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the nursery rhyme mother whos last name is that of a bird?',
    answers: ['goose'],
    category: 'Needs to be categorised',
  },
  {
    question: 'True Or False: Contrary to popular belief, a lightbulb actually absorbs darkness?',
    answers: ['false'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Two 1.5 volt batteries, when connected in series, produces _ volts.',
    answers: ['3'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Water freezes at _ degrees Celcius.',
    answers: ['zero'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is measured by a Geiger counter?',
    answers: ['radioactivity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'For what does O.P.E.C. stand?',
    answers: ['theorganizationofpetroleumexportingcountries'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was elected president of France in 1981?',
    answers: ['franciosmitterrand', 'mitterrand'],
    category: societyandhumanities,
  },
  {
    question: 'Name Ronald Reagan\'s first wife.',
    answers: ['wyman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How is the state of Mississippi spelled?',
    answers: ['mississippi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the circular plastic media you put in a CD-ROM drive.',
    answers: ['cd'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On a standard computer keyboard, this is the letter just to the right of Z.',
    answers: ['x'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is required to make all electric things work?',
    answers: ['electricity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What color is a blue crayon?',
    answers: ['blue'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What color is a green crayon?',
    answers: ['green'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What color is a red crayon?',
    answers: ['red'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What company makes Microsoft Windows 2000?',
    answers: ['microsoft'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Whats the abbreviation for United States of America?',
    answers: ['usa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'When spelled backwards, the word "retupmoc" becomes what?',
    answers: ['computer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He led the Israelites out of Egypt.',
    answers: ['moses'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He was the first King of the Hebrews.',
    answers: ['saul'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He was the second King of Israel.',
    answers: ['david'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what month is Christmas observed?',
    answers: ['december'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the holiest day in the Jewish calendar.',
    answers: ['yomkippur'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On which mountain did Moses receive the Ten Commandments?',
    answers: ['sinai'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which city is sacred to Jews, Christians, and Muslims?',
    answers: ['jerusalem'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who founded Mormonism?',
    answers: ['josephsmith'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who founded the People\'s Temple Commune?',
    answers: ['jimjones'],
    category: 'Needs to be categorised',
  },
  {
    question: 'By what chemical process do plants manufacture food?',
    answers: ['photosynthesis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'By what name is Lysergic acid diethylamide better known?',
    answers: ['lsd'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Ethylene glycol is frequently used in automobiles.. How?',
    answers: ['anti-freeze'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He designed the first feasible automobile with an internal combustion engine.',
    answers: ['karlfreidrichbenz'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He invented "bifocal" lenses for eyeglasses.',
    answers: ['benjaminfranklin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He is known for his theory of "Evolution".',
    answers: ['charlesdarwin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He transmitted radio signals across the Atlantic in 1901.',
    answers: ['enricomarconi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He wrote "Sexual Behaviour in the Human Male" in 1948.',
    answers: ['alfredkinsey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many degrees does the earth rotate each hour?',
    answers: ['fifteen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country was the match invented?',
    answers: ['france'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This Russian scientist used dogs to study conditioned reflexes.',
    answers: ['ivanpavlov'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is like an airplane but has its propeller on top instead.',
    answers: ['helicopter'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the reading system used by the blind.',
    answers: ['braille'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This science deals with the motion of projectiles.',
    answers: ['ballistics'],
    category: 'Needs to be categorised',
  },
  {
    question: 'To make a car go backwards you have to put it in what gear?',
    answers: ['reverse'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are these: Ceres, Juno, Iris, and Flora?',
    answers: ['asteroids'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What branch of science studies the motion of air and the forces acting on objects in air?',
    answers: ['aerodynamics'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Lewis E. Waterman invent in 1884?',
    answers: ['fountainpen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the "lithosphere" refer to?',
    answers: ['theearth\'scrust'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the Binet test measure?',
    answers: ['intelligence'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented dynamite?',
    answers: ['alfrednobel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is known as the father of genetics?',
    answers: ['gregormendel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He holds the NHL record for the most goals scored during the regular season.',
    answers: ['waynegretzky'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He was the NBA, MVP in 1976, 77, and 80.',
    answers: ['kareemabdul-jabbar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many feet high is a basketball net?',
    answers: ['ten'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many games must you win to win a normal set in tennis?',
    answers: ['six'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many minutes is a major penalty in hockey?',
    answers: ['five'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many minutes is each period of hockey?',
    answers: ['twenty'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many players are there on a soccer team?',
    answers: ['eleven'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many players are there on a water polo team?',
    answers: ['seven'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many players make up a field hockey team?',
    answers: ['eleven'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many points are awarded for a safety touch in football?',
    answers: ['two'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many referees work a soccer game?',
    answers: ['one'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many seams are there on a football? (American)',
    answers: ['four'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many sides does a home-plate have?',
    answers: ['five'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In pro football a "sudden death" period lasts how many minutes long?',
    answers: ['fifteen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In ten-pin bowling, how many points does a perfect game consist of?',
    answers: ['threehundred'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In this team sport each player gets a chance to play every position.',
    answers: ['volleyball'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what sport is the Heisman trophy awarded?',
    answers: ['americanfootball'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which city is the Cotton Bowl played?',
    answers: ['dallas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which city is the Hockey Hall of Fame located?',
    answers: ['toronto'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which game or sport is a "Zamboni" used?',
    answers: ['hockey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which sport is a "hole-in-one" possible?',
    answers: ['golf'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which sport is the America\'s Cup awarded?',
    answers: ['sailing'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which sport is the Cy Young Trophy awarded?',
    answers: ['baseball'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which sport is the Davis Cup awarded?',
    answers: ['tennis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which sport is the term "love" used?',
    answers: ['tennis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which sport is the term "wishbone" used?',
    answers: ['football'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which sport is the term, "Hang ten" used?',
    answers: ['surfing'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which sport would you find the "slapshot".',
    answers: ['hockey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the hockey trophy awarded to the player demonstrating the best sportsmanship.',
    answers: ['theladybyngtrophy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what type of surface are the tennis matches at Wimbledon played?',
    answers: ['grass'],
    category: 'Needs to be categorised',
  },
  {
    question: 'She was "Sports Illustrated\'s" first female "Sportsman of the Year".',
    answers: ['billiejeanking'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The 1976 Summer Olympics were held in this city.',
    answers: ['montreal'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the most coveted trophy in Candian football.',
    answers: ['greycup'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This sport allows substitutions without a stoppage in play.',
    answers: ['hockey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This sport is called the "American pastime".',
    answers: ['baseball'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This team won their first World Series in 1969.',
    answers: ['newyorkmets'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This traditional Japanese wrestling sport takes place in a circular ring.',
    answers: ['sumo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are large snow bumps known as in skiing terms?',
    answers: ['moguls'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What do runners pass to each other in a relay race?',
    answers: ['baton'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What do the letters ERA mean in baseball?',
    answers: ['earnedrunaverage'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does TKO stand for?',
    answers: ['technicalknockout'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What football player rushed for 2,003 yards in 1973?',
    answers: ['ojsimpson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What game features the largest ball?',
    answers: ['earthball'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is it called when a football team loses possession of the ball due to a misplay?',
    answers: ['turnover'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the heaviest class of weight-lifting?',
    answers: ['superheavyweight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What number wood is a driver in golf?',
    answers: ['one'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What sport do the Harlem Globetrotters play?',
    answers: ['basketball'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What sport has a hooker in a scrum?',
    answers: ['rugby'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What sport would you helicopter to the Bugaboos for?',
    answers: ['skiing'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What trophy is awarded to the winner of the NHL play-offs?',
    answers: ['stanleycup'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What vehicles are involved in the "Tour de France"?',
    answers: ['bicycles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was football player Dick Lane\'s nickname?',
    answers: ['nighttrain'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What\'s the nickname of the University of Georgia football team?',
    answers: ['bulldogs'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where are the U.S. Tennis Open Championships held?',
    answers: ['flushingmeadows,ny'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which NFL team\'s defensive unit was nicknamed "The Purple People Eaters"?',
    answers: ['minnesotavikings'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country won the World Cup of Soccer in 1982.',
    answers: ['italy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which football team was nicknamed the "Orange Crush"?',
    answers: ['denverbroncos'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the only position in soccer allowed to handle the ball?',
    answers: ['goalkeeper'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which position is usually played by the tallest member on a basketball team?',
    answers: ['centre'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which sport has a movement called a "telemark"?',
    answers: ['skiing'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which sport uses stones and brooms?',
    answers: ['curling'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which swimming stroke is named after an insect?',
    answers: ['butterfly'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was known as the "Sultan of Swat"?',
    answers: ['baberuth'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the 1978 Wimbledon Women\'s Singles champ?',
    answers: ['martinanavratilova'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the first NHL player to score 50 goals in one season?',
    answers: ['mauricerichard<--pronounced"reeee-shard"'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the first to win the grand slam of tennis?',
    answers: ['donbudge'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With which sport is Chris Evert Lloyd identified?',
    answers: ['tennis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'When read upside down, what does the term "umop apisdn" signify?',
    answers: ['upsidedown'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the sandy area nearest the ocean.',
    answers: ['beach'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did TVs IMF stand for?',
    answers: ['impossiblemissionforces'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first network series devoted entirely to rock and roll?',
    answers: ['americanbandstand'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was Carl in Five Easy Pieces before going to Walton\'s Mountain?',
    answers: ['waite'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was Chief Marshall of the Mickey Mouse Club?',
    answers: ['waltdisney'],
    category: 'Needs to be categorised',
  },
  {
    question: '"7X" was used to refer to the secret ingredient of which drink?',
    answers: ['cocacola'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Most men do this each morning, using a razor.',
    answers: ['shave'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the implement that removes water from your windshield on your car?',
    answers: ['wiper'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What US state has the Worlds Champion Chili Cookoff every year?',
    answers: ['texas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What bit of Bobby Goldsboro syrup focused on a dying young wife?',
    answers: ['honey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Sally Rogers always wear in her hair?',
    answers: ['abow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the typical American eat 263 of each year? not pizza!!',
    answers: ['eggs'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What game show had people dressed up funny?',
    answers: ['let\'smakeadeal'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Grimace of the McDonald\'s characters?',
    answers: ['atastebud'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Simple Simon fishing for in his mother\'s pail?',
    answers: ['whale'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of the Akla-Seltzer boy?',
    answers: ['speedy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of the dog in RCA Victor\'s trademark?',
    answers: ['nipper'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What\'s the telephone area code for Chicago?',
    answers: ['312'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where did Howdy Doody live?',
    answers: ['doodyville'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were Archie and Edith Bunker\'s chairs enshrined?',
    answers: ['thesmithsonianinstitute'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is also known as Mr. Warmth?',
    answers: ['donrickles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is known as "the world\'s oldest teenager"?',
    answers: ['dickclark'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which word is related to these three: nap, walk, call?',
    answers: ['cat'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which word is related to these three: painting, bowl, nail?',
    answers: ['finger'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which word is related to these three: rat, blue, cottage?',
    answers: ['cheese'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What do the initials \'VCP\' stand for?',
    answers: ['videocassetteplayer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What do the initials \'VCR\' stand for?',
    answers: ['videocassetterecorder'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does \'A&W\' (of root beer fame) stand for ?',
    answers: ['allen&wright'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does \'AOL\' stand for?',
    answers: ['americaonline'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does S.O.S. stand for?',
    answers: ['saveoursouls'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does N.A.S.A stand for?',
    answers: ['nationalaeronauticsandspaceadministration'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the acronym \'scuba\' mean?',
    answers: ['selfcontainedunderwaterbreathingapparatus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the dog on the crackerjack box?',
    answers: ['bingo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is ground being \'rested\' for a season called?',
    answers: ['fallow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'After what were the B52 bombers named?',
    answers: ['afiftieshairdo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many engines are on a B52 bomber?',
    answers: ['eight', '8'],
    category: scienceandgeography,
  },
  {
    question: 'What does a pilot drop to slow an airplane?',
    answers: ['flaps'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the world\'s fastest passenger aircraft?',
    answers: ['concorde'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What type of craft is the US\'s Airforce One?',
    answers: ['boeing747'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Whic country developed the first jet fighter?',
    answers: ['germany'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which two nations built the concorde?',
    answers: ['britainandfrance'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who built the \'Cherokee\' and \'Comanche\' aircraft?',
    answers: ['piper'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who built the hurricane aircraft?',
    answers: ['hawker'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From what is the liqueur kirsch made?',
    answers: ['cherries'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From which plant is tequila derived?',
    answers: ['cactus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what is California also known?',
    answers: ['goldenstate'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what is Minnesota also known?',
    answers: ['gopherstate'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What city is also known as Beantown?',
    answers: ['boston'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What state is \'The Golden State\'?',
    answers: ['california'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What state is also called the \'Garden State\'?',
    answers: ['newjersey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What state is the \'Hoosier State\'?',
    answers: ['indiana'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where are the headquarters of the CIA?',
    answers: ['langley,virginia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which date is inscribed on the book held by the Statue Of Liberty?',
    answers: ['july41776'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the most air polluted city in the United States?',
    answers: ['losangeles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the Kitty Hawk?',
    answers: ['thesmithsonianinstitute'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What mountain has the figures of three mounted confederate heroes of the Civil War?',
    answers: ['stonemountain'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What state is only part of the United States by treaty?',
    answers: ['texas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which two fruits are an anagram of each other?',
    answers: ['lemonandmelon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many litres of air is in an adult lung?',
    answers: ['five'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many times do your ribs move every year during breathing?',
    answers: ['fivemillion'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Like fingerprints, what other print is individual?',
    answers: ['tongueprints'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Of what does the typical man have 13,000?',
    answers: ['whiskers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What do the auricularis muscles move?',
    answers: ['ears'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the Scientific name for the eardrum?',
    answers: ['tympanicmembrane'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the common name for the scapula?',
    answers: ['shoulderblade'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the common name for the sternum?',
    answers: ['breastbone'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the common name for the tympanic membrane?',
    answers: ['eardrum'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the second largest bone in the foot?',
    answers: ['talus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the smallest bone in the human body?',
    answers: ['stirrupbone'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where are one quarter of the bones in the human body?',
    answers: ['feet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the most sensitive finger?',
    answers: ['forefinger'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what is a camelopard also known?',
    answers: ['giraffe'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what is a giraffe also known?',
    answers: ['camelopard'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what is a moose also known?',
    answers: ['algonquin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what is an algonquin more commonaly known?',
    answers: ['moose'],
    category: 'Needs to be categorised',
  },
  {
    question: 'At what age does a filly become a mare?',
    answers: ['five'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Does a wild rabbit live 10, 15 or 20 years?',
    answers: ['10'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How fast (mph) can a kangaroo hop?',
    answers: ['forty'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many hours a day does a ferret sleep?',
    answers: ['twenty'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many hours does an antelope sleep at night?',
    answers: ['one'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many teeth does a walrus have?',
    answers: ['eighteen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'If a robin\'s egg is put in vinegar for thirty days, what colour does it become?',
    answers: ['yellow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name one male fish that gives birth?',
    answers: ['seahorseorpipefish'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Of what are walrus tusks made?',
    answers: ['ivory'],
    category: 'Needs to be categorised',
  },
  {
    question: 'If body temperature was 86 degrees, how many years would a man man live?',
    answers: ['twohundred'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In 1986, what was the maximum fuel capacity (in litres) imposed in Formula 1 racing?',
    answers: ['195'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what do honeybees have a type of hair?',
    answers: ['eyes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Some animals always grow new teeth to replace the old. Name one of them!',
    answers: ['crocodile'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Some animals always grow new teeth to replace the old. Name one of them!',
    answers: ['shark'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What animal can get the disease \'heaves\'?',
    answers: ['horse'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What animal can hop as fast as 40 mph?',
    answers: ['kangaroo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What animal has red patches on its rear?',
    answers: ['mandrill'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What animal lives in a form?',
    answers: ['hare'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What animal lives in a warren?',
    answers: ['rabbit'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What animal\'s milk is more than 54% fat?',
    answers: ['humpbackwhale'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are the only other animals on which the pill works?',
    answers: ['gorillas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What bird is associated with Lundy Island?',
    answers: ['puffin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What colour is a robin\'s egg?',
    answers: ['blue'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What comprises than 54% of humpback whale\'s milk?',
    answers: ['fat'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What dog is named after a Mexican state?',
    answers: ['chihuahua'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What herbivore sleeps one hour a night?',
    answers: ['antelope'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What insect has a type of hair on it\'s eyes?',
    answers: ['honeybees'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a female deer called?',
    answers: ['doe'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a male deer called?',
    answers: ['buck'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a marsupium?',
    answers: ['pouch'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a word for a castrated ram?',
    answers: ['wether'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a young whale called?',
    answers: ['calf'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is another name for the coyote?',
    answers: ['prairiewolf'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is another name for the prairie wolf?',
    answers: ['coyote'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the chihuahua named after?',
    answers: ['amexicanstate'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the heaviest snake?',
    answers: ['anaconda'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the largest lizard?',
    answers: ['komododragon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the longest venomous snake?',
    answers: ['kingcobra'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the scientific name for a turkey\'s wishbone?',
    answers: ['furcula'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the technical name for an animal\'s pouch?',
    answers: ['marsupium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What lives in a formicary?',
    answers: ['ants'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What type of frog is the smallest frog?',
    answers: ['goldfrog'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first animal on the endangered species list?',
    answers: ['peregrinefalcon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What well known marsupial is the wallaby related to?',
    answers: ['kangaroo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where do ants live?',
    answers: ['formicary'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the largest African bird of prey?',
    answers: ['lammergeyer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the largest aquatic bird?',
    answers: ['albatross'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the largest known butterfly?',
    answers: ['queenalexandra\'sbirdwing'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the only animal other than humans that can get leprosy?',
    answers: ['armadillos'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which mammals fly?',
    answers: ['bats'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which snake kills the most humans?',
    answers: ['kingcobra'],
    category: scienceandgeography,
  },
  {
    question: 'With which island is the puffin associated?',
    answers: ['lundyisland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where are there over 58 million dogs?',
    answers: ['usa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the most venomous snake (no, it\'s not the king cobra!)?',
    answers: ['inlandtaipan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Approximately how many years old is the first known written advertisement?',
    answers: ['threethousand'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which ruins was the first known written advertisement found?',
    answers: ['thebes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What date is the \'Ides\' of March?',
    answers: ['fifteenth'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who painted \'Irises\'?',
    answers: ['vincentvangogh'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the art of tracing designs and making impressions of them called?',
    answers: ['lithography'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the largest museum in the world?',
    answers: ['louvre'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is a successful recording artist, talented landscape artist, and author of children\'s books?',
    answers: ['rickyvanshelton'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was born when Pluto, the astrological sign for death, was directly above Dallas, Texas?',
    answers: ['johnf.kennedy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the astrological sign for death?',
    answers: ['pluto'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the zodiacal symbol for Capricorn?',
    answers: ['goat'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which constellation is represented by a goat?',
    answers: ['capricorn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what is Polaris also known?',
    answers: ['northstar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what is the North Star also known?',
    answers: ['polaris'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Saturday is named after which planet?',
    answers: ['saturn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What constellation is represented by scales?',
    answers: ['libra'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the most essential tool in astronomy?',
    answers: ['telescope'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name given to a group of stars?',
    answers: ['constellation'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of brightest asteroid visible from earth?',
    answers: ['vesta'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the only day named after a planet?',
    answers: ['saturday'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the small irregular white cloud that zips around Neptune approximately every 16 hours called?',
    answers: ['scooter'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the technical name for \'falling stars\'?',
    answers: ['meteors'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What planet is nearest the sun?',
    answers: ['mercury'],
    category: 'Needs to be categorised',
  },
  {
    question: 'When does a full moon rise?',
    answers: ['sunset'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the only planet that rotates clockwise?',
    answers: ['venus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who coined the theory that the earth revolves around the sun?',
    answers: ['nicolauscopernicus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who discovered the four largest moons of Jupiter?',
    answers: ['galileo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented the telescope?',
    answers: ['galileogalilei'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the stratosphere immediately above?',
    answers: ['troposphere'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the troposphere immediately lower than?',
    answers: ['stratosphere'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many Air Force One\'s are there?',
    answers: ['two'],
    category: societyandhumanities,
  },
  {
    question: 'Who wore a cabbage leaf under his cap?',
    answers: ['baberuth'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What drink is named after the queen of England who was famous for her \'sanguinary\' persecution of the protestants?',
    answers: ['bloodymary'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is made of fermented grape juice?',
    answers: ['wine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which animal has the largest eyes?',
    answers: ['giantsquid'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what is haemophilia also known?',
    answers: ['royaldisease'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Of what is keratitis an inflammation?',
    answers: ['cornea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what side should you sleep to improve digestion?',
    answers: ['right'],
    category: 'Needs to be categorised',
  },
  {
    question: 'To what disability can keratitis lead?',
    answers: ['blindness'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What appears when the sun activates melanocytes?',
    answers: ['freckles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What body function is improved if you sleep on your right side?',
    answers: ['digestion'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What carries sensations from the tongue to the brain?',
    answers: ['lingualnerve'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the body release that dilates small blood vessels and so causes a person to blush?',
    answers: ['peptides'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the lack of iodine in the diet cause?',
    answers: ['goitre'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the pancreas produce?',
    answers: ['insulin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What element is lacking in a diet when goitre occurs?',
    answers: ['iodine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What falls out with phalacrosis?',
    answers: ['hair'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What falls out with phalacrosis?',
    answers: ['hair'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What fleshy muscular organ is joined to the hyoid bone?',
    answers: ['tongue'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What gland secretes fluid that washes the eyes?',
    answers: ['teargland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is activated for freckles to appear?',
    answers: ['melanocytes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the biological name for the shin bone?',
    answers: ['tibia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the biological term for the voice box?',
    answers: ['larynx'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the common name for the larynx?',
    answers: ['voicebox'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the hardest bone in the human body?',
    answers: ['jawbone'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the latin name for the top set of vertebrae?',
    answers: ['cervical'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the royal disease?',
    answers: ['haemophilia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the tibia more commonly known as?',
    answers: ['shinbone'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What muscle is joined by the lingual nerve to the brain?',
    answers: ['tongue'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What muscles move the ears?',
    answers: ['auricularis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What protein makes blood red?',
    answers: ['haemoglobin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What small region at end of medulla oblongata serves as \'bridge\' to brain?',
    answers: ['pons'],
    category: 'Needs to be categorised',
  },
  {
    question: 'When a tumour is cancerous, what is it said to be?',
    answers: ['malignant'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With age, what organ shrinks faster in males than in females?',
    answers: ['brain'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the birthstone for May?',
    answers: ['emerald'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the birthstone for September?',
    answers: ['sapphire'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Approximately how many years old are oak trees before they produce acorns?',
    answers: ['fifty'],
    category: 'Needs to be categorised',
  },
  {
    question: 'One ragweed plant can release approximately how many grains of pollen?',
    answers: ['onebillion'],
    category: 'Needs to be categorised',
  },
  {
    question: 'To which family does the coffee plant belong?',
    answers: ['madder'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which tree only produces acorns after it is fifty years old?',
    answers: ['oak'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many inches tall are the bearskins worn by the guards at Buckingham Palace?',
    answers: ['twenty'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the House of Lords, where does the Lord Chancellor sit?',
    answers: ['woolsack'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which park are Queen Mary\'s gardens?',
    answers: ['regentspark'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are the only two london boroughs that start with the letter \'e\'?',
    answers: ['ealingandenfield'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does \'The Monument\' in London commemorate?',
    answers: ['greatfireoflondon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the second bridge built across the Thames?',
    answers: ['westminsterbridge'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is Selfridges?',
    answers: ['oxfordstreet,london'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which building commemorates the Great Fire of London?',
    answers: ['monument'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who at Buckingham Palace wears bearskins?',
    answers: ['guards'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Margaret Thatcher\'s nickname?',
    answers: ['ironlady'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the largest inhabited castle in the world?',
    answers: ['windsorcastle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the \'whispering gallery\'?',
    answers: ['st.paul\'scathedral'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where would you find a nave, apse, atrium and narthex?',
    answers: ['basilica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How is 75% of petrol in an engine wasted?',
    answers: ['combustion'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What make of car is a \'Thunderbird\'?',
    answers: ['ford'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What make of car is an \'Espace\'?',
    answers: ['renault'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country has the most cars per mile of road?',
    answers: ['england'],
    category: 'Needs to be categorised',
  },
  {
    question: 'For which cartoon character was Beethoven a favourite composer?',
    answers: ['shroeder'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many freckles did Howdy Doody have?',
    answers: ['fortyeight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The maiden names of which two cartoon characters are Slaghoople and Mcbricker?',
    answers: ['wilmaflintstoneandbettyrubble'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are the names of Donald Duck\'s nephews?',
    answers: ['hueydeweyandlouey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What city do Batman and Robin patrol?',
    answers: ['gothamcity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What expression did Clark Kent\'s newspaper boss like to use?',
    answers: ['greatcaesar\'sghost!'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Dennis the Menace\'s surname?',
    answers: ['mitchell'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first cartoon character called?',
    answers: ['oswaldtherabbit'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What were Wilma Flintstone and Betty Rubble\'s maiden names?',
    answers: ['slaghoopleandmcbricker'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which comic is drawn by Sam Keith?',
    answers: ['themaxx'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which magician did Lothar assist?',
    answers: ['mandrake'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who did the voices of Bugs Bunny, Sylvester and Tweety Pie?',
    answers: ['melblanc'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who drew the comic \'The Maxx\'?',
    answers: ['samkeith'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who patrols Gotham City?',
    answers: ['batmanandrobin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who took dictation from Perry Mason?',
    answers: ['dellastreet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was Barney Rubble\'s best friend?',
    answers: ['fredflintstone'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was Fred Flinstone\'s best friend?',
    answers: ['barneyrubble'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was born on Krypton?',
    answers: ['superman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the black assistant of Mandrake the Magician?',
    answers: ['lothar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the first voice of Mickey Mouse?',
    answers: ['waltdisney'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What film was the last featuring Mel Blanc\'s voice?',
    answers: ['jetsons'],
    category: 'Needs to be categorised',
  },
  {
    question: '20% of what is in the metal part at the end of a pencil?',
    answers: ['sulphur'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what is sulphur also known?',
    answers: ['brimstone'],
    category: 'Needs to be categorised',
  },
  {
    question: 'For what is the chemical formula H2O2?',
    answers: ['hydrogenperoxide'],
    category: 'Needs to be categorised',
  },
  {
    question: 'For what metal is \'Au\' the chemical symbol?',
    answers: ['gold'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Of what is 98% of the weight of water made?',
    answers: ['oxygen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'To what group of elements do cerium, praesiodymium and promethium belong?',
    answers: ['rareearthmetals'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the symbol \'Am\' represent?',
    answers: ['americium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a corrosive substance with a pH value less than 7 called?',
    answers: ['acid'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is calcium oxide commonly called?',
    answers: ['lime'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the atomic number for thalium?',
    answers: ['eightyone'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the atomic number of Bromine?',
    answers: ['thirtyfive'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the atomic number of Molybdenum?',
    answers: ['fortytwo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the atomic number of sulphur?',
    answers: ['16', 'sixteen'],
    category: scienceandgeography,
  },
  {
    question: 'What is the atomic number of uranium?',
    answers: ['ninetytwo', '92'],
    category: scienceandgeography,
  },
  {
    question: 'What is the chemical name for quicksilver?',
    answers: ['mercury'],
    category: scienceandgeography,
  },
  {
    question: 'What is the chemical symbol for gold?',
    answers: ['au'],
    category: scienceandgeography,
  },
  {
    question: 'What is the chemical symbol for iron?',
    answers: ['fe'],
    category: scienceandgeography,
  },
  {
    question: 'What is the heaviest naturally occuring element?',
    answers: ['uranium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the symbol for copper?',
    answers: ['cu'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the symbol for tin?',
    answers: ['sn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What term is applied to ethyl alcohol that has been treated with poison to make it unfit for human consumption?',
    answers: ['denatured'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What type of paper is used to test for acidity and alkalinity?',
    answers: ['litmus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what do approximately 100 people choke to death every year?',
    answers: ['ballpointpens'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How long did it take God to create the Universe?',
    answers: ['sixdays-herestedontheseventh'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many children did Noah have?',
    answers: ['three'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many sayings did Jesus say from the cross?',
    answers: ['seven'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many times did Peter deny Jesus?',
    answers: ['three'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How old was Sarah when she had a child?',
    answers: ['ninety'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On which day was the resurrection of Christ?',
    answers: ['eastersunday'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are the first three words of The Bible?',
    answers: ['inthebeginning'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What two biblical cities did God destroy with fire and brimstone?',
    answers: ['sodomandgomorrah'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which two books in the Old Testament list the ten commandments? (in order of appearance)',
    answers: ['exodusanddeuteronomy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who killed Goliath?',
    answers: ['david'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who replaced Moses as the prophet of the Israelites?',
    answers: ['joshua'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Whose name did God change to Israel?',
    answers: ['jacob'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the \'Twelve days of christmas\', how many items in total are sent by \'my true love\'?',
    answers: ['seventyeight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what is an espadrille worn?',
    answers: ['foot'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are the essential ingredients of a daiquiri?',
    answers: ['rumandlemon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What cocktail is based on rum and lemon?',
    answers: ['daiquiri'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In alphabet radio code, what word is used for \'c\'?',
    answers: ['charlie'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In alphabet radio code, what word is used for \'f\'?',
    answers: ['foxtrot'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In alphabet radio code, what word is used for \'h\'?',
    answers: ['hotel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In alphabet radio code, what word is used for \'t\'?',
    answers: ['tango'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In alphabet radio code, what word is used for \'x\'?',
    answers: ['x-ray'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Using morse code, what does trasmitting using 3 dots, 3 dashes and 3 dots?',
    answers: ['sos'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a south african coin containing 1 troy ounce of gold called?',
    answers: ['krugerrand'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a group of donkeys called?',
    answers: ['herd'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a group of geese called?',
    answers: ['gaggle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What product built Hershey, Pennsylvania?',
    answers: ['chocolate'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which company controls more than 80% of the world\'s rough diamond supply?',
    answers: ['debeers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country did the operating system \'Linux\' come from?',
    answers: ['finland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does \'IBM\' stand for?',
    answers: ['internationalbusinessmachines'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the \'x\' mean when referring to the speed of a CD-rom (eg. 32x)?',
    answers: ['times(fasterthanstandardspeed)'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What type of printer did Seiko develop for the 1964 Tokyo Olympics?',
    answers: ['dotmatrix'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was invented over 3000 years ago that is now considered the first \'computer\'?',
    answers: ['abacus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first version of Microsoft Windows to have networking capabilities?',
    answers: ['windowsforworkgroups'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first version of Microsoft Windows?',
    answers: ['windows286'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the CEO of Apple computers?',
    answers: ['stevejobs'],
    category: 'Needs to be categorised',
  },
  {
    question: 'After who is the \'Ramses\' brand condom named?',
    answers: ['pharaohramsesii'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what is America Online better known?',
    answers: ['aol'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the most widely accepted theory for the creation of the universe?',
    answers: ['bigbang'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was created with the big bang?',
    answers: ['universe'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is kaolin?',
    answers: ['purechinaclay'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is liquid clay used in pottery called?',
    answers: ['slip'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is pure china clay called?',
    answers: ['kaolin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'For which country is the lotus flower the national symbol?',
    answers: ['india'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country is it polite to stick your tongue out at your guests?',
    answers: ['tibet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country is milk the most popular beverage?',
    answers: ['usa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which town does the famous \'running of the bulls\' take place?',
    answers: ['pamplona'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What London landmark has an 11 foot long hand?',
    answers: ['bigben'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What animals are on the Australian coat of arms?',
    answers: ['emuandkangaroo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are the roads of Guam paved with?',
    answers: ['coral'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are the sandals called that are worn in ceremonial japanese tradition?',
    answers: ['tabi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What city do the Italians call the Monaco of bavaria?',
    answers: ['munich'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What famous building is located on the banks of the river Jumna?',
    answers: ['tajmahal'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What happened on screen for the first time in India in 1977?',
    answers: ['screenkiss'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a water taxi known as in Venice?',
    answers: ['gondola'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the most common name in italy?',
    answers: ['mariorossi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of a quarter of Jerusalem that can be translated as \'hundred gates\'?',
    answers: ['meashearim'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the wrought iron tower in Paris?',
    answers: ['eiffeltower'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the national symbol for India?',
    answers: ['lotusflower'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the sacred river of Hinduism?',
    answers: ['ganges', 'ganga', 'gangesriver', 'gangariver'],
    category: societyandhumanities,
  },
  {
    question: 'What is the tribal african word for dowry?',
    answers: ['lobola'],
    category: 'Needs to be categorised',
  },
  {
    question: 'When is turkey traditionally eaten in America?',
    answers: ['thanksgiving'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where are the Hausa and Ibo tribes?',
    answers: ['nigeria'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where do the English monarchs live?',
    answers: ['buckinghampalace'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the Blarney Stone?',
    answers: ['blarneycastle,ireland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where was it once against the law to have a pet dog?',
    answers: ['iceland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where would one eat a taco?',
    answers: ['mexico'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country eats the most turkey per capita?',
    answers: ['israel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which famous museum is in Paris, France?',
    answers: ['louvre'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which nationality calls Munich the \'Monaco of Bavaria\'?',
    answers: ['italians'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the Japanese currency?',
    answers: ['yen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the currency of Guatemala?',
    answers: ['quetzal'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the monetary unit of India?',
    answers: ['rupee'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country has the currency \'yen\'?',
    answers: ['japan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country\'s currency is the Bolivar?',
    answers: ['venezuela'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the currency of Venezuela?',
    answers: ['bolivar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is armagnac?',
    answers: ['brandy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does a chronometer measure?',
    answers: ['time'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a catalogue of languages called?',
    answers: ['ethnologue'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a gondola?',
    answers: ['watertaxi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a one-party system of government in which control is maintained by force and regimentation?',
    answers: ['fascism'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a word for a sorcerer who deals in black magic?',
    answers: ['necromancer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is another name for a sleepwalker?',
    answers: ['somnambulist'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is ornamental work in silver or gold thread called?',
    answers: ['filigree'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name given to a pregnant goldfish?',
    answers: ['twit'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What word means \'to chew the cud\'?',
    answers: ['ruminate'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What has 336 dimples?',
    answers: ['agolfball'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Sleeping sickness is carried by which insect?',
    answers: ['tsetsefly'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What disease is carried by the tsetse fly?',
    answers: ['sleepingsickness'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the international cry for help?',
    answers: ['mayday'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What degree do the intials \'DDS\' stand for?',
    answers: ['doctorofdentalsurgery'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What egyptian object is also known as \'the key to the Nile\'?',
    answers: ['ankh'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what was Sony\'s video recorder known?',
    answers: ['betamax'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the only insect that can turn its head?',
    answers: ['prayingmantis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Recycling one glass jar saves enough energy to watch TV for how many hours?',
    answers: ['three'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is Sir Herbert Baker buried?',
    answers: ['westminsterabbey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'For how much did an American urologist buy Napoleon\'s penis? (US Dollars)',
    answers: ['$3800'],
    category: 'Needs to be categorised',
  },
  {
    question: 'For what are Allen and Wright most famous?',
    answers: ['rootbeer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Surrey town is famed for its salts?',
    answers: ['epsom'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the most rural state in the USA?',
    answers: ['northdakota'],
    category: 'Needs to be categorised',
  },
  {
    question: 'If hell is a lake of fire, what would the temperature be? (in degrees Fahrenheit)',
    answers: ['833'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the main character in \'Touched By An Angel\'?',
    answers: ['monica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many stars are there on the New Zealand flag?',
    answers: ['four'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What colours are on the Belgian flag?',
    answers: ['yellow,blackandred'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country used to have a plain green flag?',
    answers: ['libya'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Whose flag has the national arms on one side and the treasury seal on the other?',
    answers: ['paraguay'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many times its own length can the average flea jump?',
    answers: ['150'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the tallest of Robin Hood\'s men?',
    answers: ['littlejohn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many herbs and spices are used in Kentucky Fried Chicken?',
    answers: ['eleven'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many pieces of bun are in a Mcdonald\'s Big Mac?',
    answers: ['three'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country did edam cheese originate?',
    answers: ['holland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country did the word \'biscuit\' originate?',
    answers: ['france'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What breakfast cereal was invented at Battle Creek Sanitarium?',
    answers: ['cornflakes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Charles Jung invent?',
    answers: ['fortunecookies'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is another name for the carambula?',
    answers: ['starfruit'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the most widely used seasoning?',
    answers: ['salt'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the oldest known vegetable?',
    answers: ['pea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were Cornflakes invented?',
    answers: ['battlecreeksanitarium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were fortune cookies invented?',
    answers: ['unitedstates'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented fortune cookies?',
    answers: ['charlesjung'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented the Egg Mcmuffin?',
    answers: ['edpeterson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What berries give gin its flavour?',
    answers: ['juniperberries'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A tayberry is a cross between which two fruits?',
    answers: ['blackberryandraspberry'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Unlike other oranges, what does a navel orange not have?',
    answers: ['seeds'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What fruits are usually served \'belle helene\'?',
    answers: ['pears'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a cross between a blackberry and a raspberry?',
    answers: ['tayberry'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is another name for the star fruit?',
    answers: ['carambula'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is most of the vitamin C in fruits?',
    answers: ['skin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is San Francisco\'s equivalent to Sydney\'s \'City To Surf\' race?',
    answers: ['baytobreakersfootrace'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the metal part of a lamp surrounding the bulb and supporting the shade called?',
    answers: ['harp'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many dots are on a twister mat?',
    answers: ['thirty'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many folds does a Monopoly board have?',
    answers: ['one'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many numbers are on the spinner in the game of \'Life\'?',
    answers: ['ten'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How much does Park Place cost in Monopoly (in US Dollars)?',
    answers: ['450'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In a game of horseshoes, how many feet apart must the stakes be?',
    answers: ['forty'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In roulette, what number is green?',
    answers: ['zero'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Moving anti-clockwise on a dartboard, what is the number next to \'4\'?',
    answers: ['eighteen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'To what do opposite faces of a dice always add up?',
    answers: ['seven'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is another name for the card game \'Blackjack\'?',
    answers: ['twenty-one'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is another name for the card game \'Twenty-one\'?',
    answers: ['blackjack'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the best possible score in blackjack?',
    answers: ['twentyone'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the most popular sport in england?',
    answers: ['darts'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the tallest piece on a chessboard?',
    answers: ['king'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What number is at 12 o\'clock on a dartboard?',
    answers: ['20'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What sport/game is Bobby Fischer associated with?',
    answers: ['chess'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where did the card game \'bridge\' originate?',
    answers: ['turkey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where does the annual Poker World Series take place?',
    answers: ['lasvegas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Approximately how many pounds of cereal will the average american/canadian eat every year?',
    answers: ['twelve'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the birthstone for August?',
    answers: ['peridot'],
    category: 'Needs to be categorised',
  },
  {
    question: 'During which month is the longest day in the Northern hemisphere?',
    answers: ['june'],
    category: 'Needs to be categorised',
  },
  {
    question: 'During which month is the longest day in the Southern hemisphere?',
    answers: ['december'],
    category: 'Needs to be categorised',
  },
  {
    question: 'During which month is the shortest day in the Northern hemisphere?',
    answers: ['december'],
    category: 'Needs to be categorised',
  },
  {
    question: 'During which month is the shortest day in the Southern hemisphere?',
    answers: ['june'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does a month beginning with a Sunday always have?',
    answers: ['fridaythe13th'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What game usually starts with \'is it animal, vegetable or mineral\'?',
    answers: ['twentyquestions'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the office used by the president in the Whitehouse?',
    answers: ['ovaloffice'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is viewed during a a pyrotechnic display?',
    answers: ['fireworks'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What system do the blind use for reading?',
    answers: ['braille'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where will children as young as 15 be jailed for cheating on their finals?',
    answers: ['bangladesh'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With what day does a month start if it has a Friday the 13th?',
    answers: ['sunday'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many chromosomes do each body cell contain?',
    answers: ['fortysix'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the capital of Democratic Republic of the Congo?',
    answers: ['kinshasa'],
    category: scienceandgeography,
  },
  {
    question: 'As what is Constantinople now known?',
    answers: ['istanbul'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what is Formosa now known?',
    answers: ['taiwan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what is Krung Thep is more commonly known?',
    answers: ['bangkok'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what is the South Pole also known?',
    answers: ['amundsenscottstation'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what was the Taj Mahal originally built?',
    answers: ['tomb'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Five US states border which ocean?',
    answers: ['pacificocean'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many Great Lakes are there?',
    answers: ['five'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many countries border the black sea?',
    answers: ['six-turkey,georgia,russia,ukraine,romaniaandbulgaria'],
    category: 'Needs to be categorised',
  },
  {
    question: 'If you flew due West from Portugal, what is the first continent you would reach?',
    answers: ['northamerica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what state is Silicon Valley?',
    answers: ['california'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which city is Westminster Abbey?',
    answers: ['london'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which city is Westminster Abbey?',
    answers: ['london'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which city is the Arch of Hadrian?',
    answers: ['athens'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which city is the famous Bond Street?',
    answers: ['london'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country is Tobruk?',
    answers: ['libya'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country is the largest active volcano in the world?',
    answers: ['ecuador'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which county are all ten of England\'s highest peaks?',
    answers: ['cumbria'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which modern day country is ancient Troy?',
    answers: ['turkey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which state is Tupelo?',
    answers: ['mississippi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which state is the Natchez Trail?',
    answers: ['mississippi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Into what ocean does the Zambezi River empty?',
    answers: ['indianocean'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Into which bay does the Golden Gate Strait lead?',
    answers: ['sanfranciscobay'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Into which estuary do the Trent and Ouse flow?',
    answers: ['humber'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Is Belfast in Northern or Southern Ireland?',
    answers: ['northern'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Is Dublin in Northern or Southern ireland?',
    answers: ['southern'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Near what river is the Temple of Karnak?',
    answers: ['nile'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Of what are Quemoy and Matsu part?',
    answers: ['taiwan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Of which country does the Kalahari Desert cover 84%?',
    answers: ['botswana'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On the London Underground, which station has a different name on two of its platforms?',
    answers: ['bankandmonument'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On the banks of which river is the Taj Mahal?',
    answers: ['riverjumna'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what island is Pearl Harbor?',
    answers: ['oahu'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what river is Blackpool?',
    answers: ['riverfylde'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what river is Liverpool?',
    answers: ['mersey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what sea is the Crimea?',
    answers: ['blacksea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On which coast of Australia is Sydney?',
    answers: ['east'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Through which ocean does the International Date Line approximately follow the 180 degree meridian?',
    answers: ['pacificocean'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Central American country extends furthest north?',
    answers: ['belize'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Scandinavian capital begins and ends with the same letter?',
    answers: ['oslo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What continent is part of both the East and Aest hemispheres?',
    answers: ['antarctica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country borders Egypt on the West?',
    answers: ['libya'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country borders Egypt to the South?',
    answers: ['sudan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country borders Libya on the East?',
    answers: ['egypt'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country borders Sudan to the North?',
    answers: ['egypt'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country has the biggest population?',
    answers: ['china'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country is situated between Panama and Nicaragua?',
    answers: ['costarica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country is surrounded by Brazil, Argentina and Bolivia?',
    answers: ['paraguay'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country was once known as \'The Breadbasket of Russia\'?',
    answers: ['ukraine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country\'s capital is Caracas?',
    answers: ['venezuela'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What divides the American North from the South?',
    answers: ['themason-dixonline'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What do Americans traditionally eat on thanksgiving day?',
    answers: ['turkey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the George Washington Bridge span?',
    answers: ['hudsonriver'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a peanut if it is not a pea or a nut?',
    answers: ['legume'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is also known as Amundsen Scott Station?',
    answers: ['southpole'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the Southernmost country in continental Europe?',
    answers: ['spain'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the capital of Albania?',
    answers: ['tirana'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Australia?',
    answers: ['canberra'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Bangladesh?',
    answers: ['dhaka'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Barbados?',
    answers: ['bridgetown'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Brazil?',
    answers: ['brasilia'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Burkina Faso?',
    answers: ['ouagadougou'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of California?',
    answers: ['sacramento'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Chile?',
    answers: ['santiago'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Colombia?',
    answers: ['bogota'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Cyprus?',
    answers: ['nicosia'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Djibouti?',
    answers: ['djibouti'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Equatorial Guinea?',
    answers: ['malabo'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Gabon?',
    answers: ['libreville'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Gambia?',
    answers: ['banjul'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Ghana?',
    answers: ['accra'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Guatemala?',
    answers: ['guatemala'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Guinea-Bissau?',
    answers: ['bissau'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Honduras?',
    answers: ['tegucigalpa'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Hungary?',
    answers: ['budapest'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Idaho?',
    answers: ['boise'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Illinois?',
    answers: ['springfield'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of India?',
    answers: ['newdelhi'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Iowa?',
    answers: ['desmoines'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Italy?',
    answers: ['rome'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Jamaica?',
    answers: ['kingston'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Kuwait?',
    answers: ['kuwait'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Liechtenstein?',
    answers: ['vaduz'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Luxembourg?',
    answers: ['luxembourg'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Luxembourg?',
    answers: ['luxembourg'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Malawi?',
    answers: ['lilongwe'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Mali?',
    answers: ['bamako'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Mauritius?',
    answers: ['portlouis'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Mexico?',
    answers: ['mexicocity'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Michigan?',
    answers: ['lansing'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Missouri?',
    answers: ['jeffersoncity'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Mongolia?',
    answers: ['ulanbator'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Montana?',
    answers: ['helena'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Nepal?',
    answers: ['kathmandu'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of New York state?',
    answers: ['albany'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Nigeria?',
    answers: ['abuja'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of North Carolina?',
    answers: ['raleigh'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of North Dakota?',
    answers: ['bismarck'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Ohio?',
    answers: ['columbus'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Papua New Guinea?',
    answers: ['portmoresby'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Pennsylvania?',
    answers: ['harrisburg'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Rwanda?',
    answers: ['kigali'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Saudi Arabia?',
    answers: ['riyadh'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Senegal?',
    answers: ['dakar'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Singapore?',
    answers: ['singapore'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Tennessee?',
    answers: ['nashville'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Texas?',
    answers: ['austin'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Thailand?',
    answers: ['bangkok'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Togo?',
    answers: ['lome'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Turkey?',
    answers: ['ankara'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Uruguay?',
    answers: ['montevideo'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Virginia?',
    answers: ['richmond'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Wyoming?',
    answers: ['cheyenne'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of the Dominican Republic?',
    answers: ['santodomingo'],
    category: scienceandgeography,
  },
  {
    question: 'What is the circle of the earth at 0 degrees latitude called?',
    answers: ['equator'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the correct name of Bangkok?',
    answers: ['krungthep'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the deepest land gorge in the world?',
    answers: ['grandcanyon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the fifth largest country in the world?',
    answers: ['brazil'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the highest peak in Fiji?',
    answers: ['mountvictoria'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the largest city in China?',
    answers: ['shanghai'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the largest city in Ecuador?',
    answers: ['guayaquil'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the largest city in Switzerland?',
    answers: ['zurich'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the largest country in Central America?',
    answers: ['nicaragua'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the largest exclusively Indonesian island?',
    answers: ['sumatra'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the largest ocean?',
    answers: ['pacificocean'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the most mountainous country in Europe?',
    answers: ['switzerland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the oldest town in Belgium?',
    answers: ['tongeren'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the only borough of New York City that is not on an island?',
    answers: ['bronx'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the river capital of the world?',
    answers: ['akron'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the saltiest sea in the world?',
    answers: ['thedeadsea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the second largest continent in the world?',
    answers: ['africa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the second largest ocean?',
    answers: ['atlanticocean'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the second largest state in the USA?',
    answers: ['texas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the smallest Canadian province?',
    answers: ['princeedwardisland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the smallest state in the USA?',
    answers: ['rhodeisland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the windiest place on earth?',
    answers: ['mountwashington,newhampshire'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the world\'s highest waterfall?',
    answers: ['angelfalls'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the world\'s largest desert?',
    answers: ['saharadesert'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the world\'s largest lake?',
    answers: ['caspiansea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the world\'s largest sea?',
    answers: ['mediterranean'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the world\'s widest river?',
    answers: ['amazon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What lake is approximately 394,000 sq. km in area?',
    answers: ['caspiansea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What ocean is found along the East border of Asia?',
    answers: ['pacificocean'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What place is known as \'the land nowhere near\'?',
    answers: ['capethreepoints'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What seaport\'s name is spanish for \'white house\'?',
    answers: ['casablanca'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What small island is in the bay of Naples?',
    answers: ['isleofcapri'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where are the \'wallops\'?',
    answers: ['hampshire'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where are the Nazca lines?',
    answers: ['peru'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where are the two steepest streets in the USA?',
    answers: ['sanfrancisco'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is Angel Falls?',
    answers: ['venezuela'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is Calcutta?',
    answers: ['india'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is Cape Hatteras?',
    answers: ['northcarolina'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is Eurodisney?',
    answers: ['paris,france'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is Gorky Park?',
    answers: ['moscow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is Lake Maracaibo?',
    answers: ['venezuela'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is Mount Washington?',
    answers: ['newhampshire'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is Tabasco?',
    answers: ['mexico'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is Tongeren?',
    answers: ['belgium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which US state is Area 51 located in?',
    answers: ['nevada', 'nv'],
    category: scienceandgeography,
  },
  {
    question: 'Where is the Blue Grotto - la Grotta Azzurra ?',
    answers: ['capri,italy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the Machu Picchu?',
    answers: ['peru'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the Taj Mahal?',
    answers: ['india'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the bridge of San Luis Rey?',
    answers: ['peru'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the land of 10,000 lakes?',
    answers: ['minnesota'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the statue \'Le Petit Pissoir\'?',
    answers: ['brussels'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the wailing wall?',
    answers: ['jerusalem'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the world\'s biggest prison camp?',
    answers: ['siberia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the world\'s largest desert?',
    answers: ['northafrica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Californian desert drops below sea level?',
    answers: ['deathvalley'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which English county has the smallest perimeter?',
    answers: ['isleofwight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Portuguese colony reverted to China in December 1999?',
    answers: ['macau'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which South American country has both a Pacific and Atlantic coastline?',
    answers: ['colombia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which US state gets the most rainfall?',
    answers: ['hawaii'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which bridge spans the Hudson River?',
    answers: ['georgewashingtonbridge'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country administers Martinique?',
    answers: ['france'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country has the most emigrants?',
    answers: ['mexico'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country is known as the roof of the world?',
    answers: ['tibet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country occupies the \'horn\' of Africa?',
    answers: ['somalia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country owns Corfu?',
    answers: ['greece'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which imaginery line approximately follows the 180 degree meridian through the Pacific Ocean?',
    answers: ['internationaldateline'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the largest lake in South America?',
    answers: ['lakemaracaibo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the most populated state/territory in Australia?',
    answers: ['newsouthwales'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the most remote island in the southern atlantic ocean?',
    answers: ['bouvetisland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the only musical bird that can fly backwards?',
    answers: ['hummingbird'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the only sea below sea level?',
    answers: ['deadsea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the smallest independent country?',
    answers: ['vaticancity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which island country lies to the West of Australia?',
    answers: ['mauritius'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which large city is on the Southeastern coast of Australia?',
    answers: ['sydney'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which ocean has an area of approximately 166 sq. km?',
    answers: ['pacificocean'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which river passes through Germany, Austria, Slovakia, Hungary, Croatia, Yugoslavia, Romania, Bulgaria and Ukraine before arriving at the Black Sea?',
    answers: ['danube'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which tropic passes through Australia?',
    answers: ['tropicofcapricorn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who owns the island of Bermuda?',
    answers: ['britain'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Approximately what percentage of the earth do the oceans cover?',
    answers: ['seventyone'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the highest active volcano in the world?',
    answers: ['cotopaxi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the most reliable geyser in the world?',
    answers: ['oldfaithful'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What type of rock is marble?',
    answers: ['metamorphic'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the sum of all the angles in a square? (in degrees)',
    answers: ['threehundredandsixty'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the glass capital of the world?',
    answers: ['toledo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'By raising your legs slowly and laying on your back, in what can you not sink?',
    answers: ['quicksand'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented the predecessor to today\'s computers?',
    answers: ['charlesbabbage'],
    category: 'Needs to be categorised',
  },
  {
    question: 'After who was America named?',
    answers: ['amerigovespucci'],
    category: 'Needs to be categorised',
  },
  {
    question: 'After who was Mickey Mouse named?',
    answers: ['mickeyrooney'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Approximately how many children did pharaoh Ramses II father?',
    answers: ['onehundredandsixty'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what was Istanbul previously known?',
    answers: ['constantinople'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what was Taiwan formerly known?',
    answers: ['formosa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what was winchester known by the Romans?',
    answers: ['ventabulgarum'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Between which countries was the shortest war in history?',
    answers: ['zanzibarandengland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'By who was Gerald Ford almost assassinated?',
    answers: ['squeakyfromme'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From what did Alexander the Great suffer?',
    answers: ['epilepsy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'George Washington Carver advocated planting peanuts and sweet potatoes to replace what?',
    answers: ['cottonandtobacco'],
    category: 'Needs to be categorised',
  },
  {
    question: 'George Washington Carver advocated planting what to replace cotton and tobacco?',
    answers: ['peanutsandsweetpotatoes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Germany was split into two zones by which agreement?',
    answers: ['yaltaagreement'],
    category: 'Needs to be categorised',
  },
  {
    question: 'His wife was Roxana, his horse was Bacephalus, he was?',
    answers: ['alexanderthegreat'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many British officers were forced by Indian troops into the Black Hole of Calcutta?',
    answers: ['146'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many people were killed in the battle of Lexington?',
    answers: ['eight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many years was Nelson Mandela in prison?',
    answers: ['twentyseven'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In 1962, for what did Britain and France sign an agreement to build together?',
    answers: ['concorde'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In 1975, what re-opened after an 8 year closure?',
    answers: ['suezcanal'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the 15th century, what was the war between the houses of Lancaster and York?',
    answers: ['waroftheroses'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which battle was George A. Custer defeated?',
    answers: ['battleoflittlebighorn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country was paper money first used?',
    answers: ['china'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Near what falls did Jimmy Angel crash his plane in 1937?',
    answers: ['angelfalls'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Of which Cambodian party was Pol Pot the leader?',
    answers: ['khmerrouge'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Of which ship was Miles Standish captain?',
    answers: ['themayflower'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what date did America become an independant nation?',
    answers: ['july4th,1776'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what day of the week did Solomon Grundy die?',
    answers: ['saturday'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what was Pennsylvania incorrectly spelled?',
    answers: ['libertybell'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The date of which Christian festival was fixed in 325AD by the Council of Nicaea?',
    answers: ['easter'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Through the streets of what town did Lady Godiva ride naked?',
    answers: ['coventry'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What 19th century war between Russia and England, Turkey, Britain and France, was named after a peninsula in the Black Sea?',
    answers: ['crimeanwar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What English city was known to the Romans as Venta Bulgarum?',
    answers: ['winchester'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Shakespearean king was actually king of Scotland for 17 years?',
    answers: ['macbeth'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What United States president was in office during the civil war?',
    answers: ['abrahamlincoln'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What colour was Diana Spencer\'s engagement photograph suit?',
    answers: ['blue'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country was formerly known as Siam?',
    answers: ['thailand'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country was ruled by Pol Pot, leader of the Khmer Rouge party?',
    answers: ['cambodia(kampuchea)'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did \'DMZ\' stand for in the vietnam war?',
    answers: ['demilitarizedzone'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did David Stirling found?',
    answers: ['sas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Ed Peterson invent?',
    answers: ['eggmcmuffin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Eli Whitney invent?',
    answers: ['cottongin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Erik Rotheim invent in 1926?',
    answers: ['aerosol'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Henry Shrapnel invent?',
    answers: ['theexplodingshell'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Louis Cartier invent?',
    answers: ['wristwatch'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Marie Curie die of on 4th July, 1934?',
    answers: ['radiationpoisoning'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Pennsylvania legalise before any other colony?',
    answers: ['witchcraft'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Victorian women bathe in to try to enlarge their breasts?',
    answers: ['strawberries'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What famous artist could write with both his left and right hand at the same time?',
    answers: ['leonardodavinci'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What food was almost non-existent in Ireland in the 1840\'s?',
    answers: ['potatoes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the 15\' by 18\' cell that 146 captured british officers were forced into by indian troops in the 19th century called?',
    answers: ['blackholeofcalcutta'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What kind of teeth did George Washington have?',
    answers: ['wooden'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What missionary station was built by Albert Schweitzer?',
    answers: ['lambarene'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What period is also known as the age of fish?',
    answers: ['devonianperiod'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What pre-tv radio show turned film caused people to commit suicide when it was first aired?',
    answers: ['waroftheworlds'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What war lasted from June 5 to June 11, 1967?',
    answers: ['sixdaywar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Alaska called before 1867?',
    answers: ['russianamerica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Alexander The Great\'s wife\'s name?',
    answers: ['roxana'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was George A Custer\'s horses\' name?',
    answers: ['comanche'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was King Arthur\'s mother\'s name?',
    answers: ['igraine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Russian America called after 1867?',
    answers: ['alaska'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Thailand formerly known as?',
    answers: ['siam'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was named after Amerigo Vespucci?',
    answers: ['america'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the D-Day invasion password?',
    answers: ['mickeymouse'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the capital of East Germany?',
    answers: ['eastberlin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first American colony to legalise witchcraft?',
    answers: ['pennsylvania'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first fighting vehicle?',
    answers: ['warchariot'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first product to have a barcode?',
    answers: ['wrigley\'sgum'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first ship to reach the Titanic after it sank?',
    answers: ['carpathia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the last chinese dynasty?',
    answers: ['manchu'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the leading cause of death in the late 19th century?',
    answers: ['tuberculosis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of the first ironclad warship ever launched?',
    answers: ['hmswarrior'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of the scandal that resulted in the resignation of president Nixon?',
    answers: ['watergate'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What wonder stood 32m high in rhodes harbour?',
    answers: ['colossusofrhodes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'When was D-day?',
    answers: ['june6th,1944'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the day when Julius Caesar was murdered?',
    answers: ['idesofmarch'],
    category: societyandhumanities,
  },
  {
    question: 'When was the Greek alphabet first used?',
    answers: ['800bc'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where did \'The Mayflower\' take the pilgrims?',
    answers: ['newworld'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where did Bill and Hilary Clinton switch on Christmas lights in 1995?',
    answers: ['belfast,northernireland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where did Churchill, Roosevelt and Stalin meet in 1945?',
    answers: ['yalta'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where did Guinevere retire to die?',
    answers: ['amesbury'],
    category: 'Needs to be categorised',
  },
  {
    question: 'When was the date of the Christian festival Easter fixed by the Council of Nicaea?',
    answers: ['325ad'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where did the Bay Of Pigs take place?',
    answers: ['cuba'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where did the Birkenhead sink?',
    answers: ['dangerpoint'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where did the bayonet originate?',
    answers: ['bayonne,france'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where was Napoleon defeated?',
    answers: ['waterloo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where was Nelson mandela in prison?',
    answers: ['robbenisland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were numerous French nuclear tests conducted?',
    answers: ['muraroaatoll'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the Hanging Gardens?',
    answers: ['babylon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the first books printed?',
    answers: ['china'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Apollo space mission put the first men on the moon ?',
    answers: ['apollo11'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Baltic seaport was the German rocket centre during WWII?',
    answers: ['peenemunde'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of Buffy\'s doll in the 1970\'s show \'Family Affair\'?',
    answers: ['mrs.beasley'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Spanish explorer first travelled to Jamaica?',
    answers: ['christophercolumbus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which US president said \'the buck stops here\'?',
    answers: ['harrytruman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which british comedian was the first man to appear on the cover of \'playboy\'?',
    answers: ['petersellers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country blew up a Greenpeace ship in New Zealand?',
    answers: ['france'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country was split into two zones by the Yalta agreement?',
    answers: ['germany'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which emperor made his horse a senator?',
    answers: ['caligula'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which famous actor is honored in a statue in Leicester Square?',
    answers: ['charliechaplin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which famous explorer visited Australia and New Zealand, then surveyed the Pacific coast of North America?',
    answers: ['captaingeorgevancouver'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which frontiersman died at the Alamo?',
    answers: ['davycrockett'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which houses fought the War of the Roses?',
    answers: ['lancasterandyork'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the most ancient walled city?',
    answers: ['jericho'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which nation did Moshoeshoe found?',
    answers: ['basotho'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which nation was led by Genghis Khan?',
    answers: ['mongolia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which nursery rhyme was the first gramophone recording?',
    answers: ['maryhadalittlelamb'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which period was first, jurassic or carboniferous?',
    answers: ['carboniferous'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which president was responsible for the \'Louisiana Purchase\'?',
    answers: ['thomasjefferson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which racist organisation was formed in Tennessee in 1865?',
    answers: ['kukluxklan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which film starring Julie Andrews and Christopher Plummer won the Oscar for best picture in 1965?',
    answers: ['thesoundofmusic'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which ship did Charles Darwin captain?',
    answers: ['hmsbeagle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which was the first Chinese dynasty?',
    answers: ['shang'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which was the first magazine to publish a hologram on its cover?',
    answers: ['nationalgeographic'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who advocated planting peanuts and sweet potatoes to replace cotton and tobacco?',
    answers: ['georgewashingtoncarver'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who appeared on the back of a US banknote in 1875?',
    answers: ['pocahontas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who assassinated John Lennon?',
    answers: ['markdavidchapman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who assassinated president Kennedy?',
    answers: ['leeharveyoswald'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who became president of South Africa in 1989?',
    answers: ['f.w.deklerk'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who built Camelot?',
    answers: ['kingarthur'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who built the Lambarene missionary station?',
    answers: ['albertschweitzer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who built the Taj Mahal?',
    answers: ['shahjahan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who burned Atlanta in 1864?',
    answers: ['generalsherman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who captained the HMS Beagle?',
    answers: ['charlesdarwin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who committed the first daytime robbery?',
    answers: ['frankandjessejames'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who developed the first nuclear submarine?',
    answers: ['sovietunion'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who did Squeaky Fromme try to assassinate?',
    answers: ['geraldford'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who died three days after Elvis Presley?',
    answers: ['grouchomarx'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who died three days before Groucho Marx?',
    answers: ['elvispresley'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who discovered the Grand Canyon?',
    answers: ['franciscocoronado'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who drafted most of the American Declaration of Independence?',
    answers: ['thomasjefferson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who fiddled while Rome burned?',
    answers: ['nero'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who fixed the date of the Christian festival \'Easter\'?',
    answers: ['councilofnicaea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who forced 146 captured British officers into the Black Hole of Calcutta?',
    answers: ['indiantroops'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who introduced bagpipes to the British Isles?',
    answers: ['romans'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented crop insurance?',
    answers: ['benjaminfranklin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented the aerosol?',
    answers: ['erikrotheim'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented the ballpoint pen?',
    answers: ['georgoandlaszlobiro'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented the cotton gin?',
    answers: ['eliwhitney'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented the exploding shell?',
    answers: ['henryshrapnel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'If Brazil had won the 1998 tournament, how many times would they have won the soccer World Cup?',
    answers: ['five'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented the gatling gun?',
    answers: ['richardgatling'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented the wristwatch?',
    answers: ['louiscartier'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is considered the father of medicine?',
    answers: ['hippocrates'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which mathematician is famously identified with the word \'eureka\'?',
    answers: ['archimedes'],
    category: societyandhumanities,
  },
  {
    question: 'Who is known as the high priest of revenge?',
    answers: ['philipseldon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is known for his \'theory of evolution\'?',
    answers: ['charlesdarwin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is recognised as the father of geometry?',
    answers: ['euclid'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who killed Jesse James?',
    answers: ['robertford'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who led 900 followers in a mass suicide in 1979?',
    answers: ['jimjones'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who led the children of Israel out of Egypt?',
    answers: ['moses'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who led the mongols?',
    answers: ['genghiskhan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who married actress Nancy Davis?',
    answers: ['ronaldreagan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who met in Yalta in 1945 (in alphabetical order)?',
    answers: ['churchillrooseveltstalin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who ordered the persecution of the Christians in which Peter and Paul died?',
    answers: ['nero'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who presided over the trial of Jesus?',
    answers: ['pontiuspilate'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who received the nobel peace prize in 1964 for civil rights leadership?',
    answers: ['martinlutherkingjr'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who ruled rome when Christ was born?',
    answers: ['augustuscaesar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said \'eureka\'?',
    answers: ['archimedes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said \'public service is my motto\'?',
    answers: ['alcapone'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sailed to the new world in \'The mayflower\'?',
    answers: ['pilgrims'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who shot Abraham Lincoln?',
    answers: ['johnwilkesbooth'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who started the second Punic war?',
    answers: ['carthage'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who succeeded Winston Churchill as Prime Minister of England?',
    answers: ['anthonyeden'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who tried to create the \'Great Society\'?',
    answers: ['lyndonbjohnson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was \'The Elephant Man\'?',
    answers: ['josephmerrick'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was George Washington\'s vice-president?',
    answers: ['johnadams'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was Joseph Merrick?',
    answers: ['theelephantman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was King Arthur\'s foster-father?',
    answers: ['ector'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was Ulysses\' son, who grew to manhood in his absence?',
    answers: ['telemachus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was assassinated on December 8, 1980 in New York City?',
    answers: ['johnlennon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was assassinated on November 22, 1963 in Dallas, Texas?',
    answers: ['presidentjohnf.kennedy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was captain of \'The Mayflower\'?',
    answers: ['milesstandish'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was defeated at the Battle of Little Bighorn?',
    answers: ['georgea.custer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was forced by Indian troops into the Black Hole of Calcutta?',
    answers: ['britishofficers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was given the only Nobel Peace Prize award during WWI?',
    answers: ['internationalredcross'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was kidnapped on the night of March 1, 1932?',
    answers: ['charleslindberghjr'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was known as \'the peanut president\'?',
    answers: ['jimmycarter'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the first (and last) catholic president?',
    answers: ['johnfitzeraldkennedy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the first person to break the sound barrier?',
    answers: ['chuckyeager'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the first person to swim the English Channel?',
    answers: ['captainmatthewwebb'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the first woman in space?',
    answers: ['valentinatereshkova'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the lead singer for Creedence Clearwater Revival, and recently released \'Blue Moon Swamp\'?',
    answers: ['johnfogerty'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the leader of the Khmer Rouge?',
    answers: ['polpot'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the only survivor of Custer\'s last stand?',
    answers: ['hishorse'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who were the first people to be elected into the Aviation Hall Of Fame?',
    answers: ['thewrightbrothers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'The Starry Messenger\'?',
    answers: ['galileo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What hobby was developed by the Palmer Paint Company?',
    answers: ['paintingbynumbers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented painting by numbers?',
    answers: ['palmerpaintcompany'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many years in a vicennial?',
    answers: ['twenty'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who hit the first golf shot on the moon?',
    answers: ['alansheppard'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the abbreviation \'UNICEF\' stand for?',
    answers: ['unitednationschildrens\'emergencyfund'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In mIRC, what colour does control-K + 4 give?',
    answers: ['red'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On IRC, how do you ask age, sex, location?',
    answers: ['asl'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On irc, what does a/s/l mean?',
    answers: ['age/sex/location'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What animal can live several weeks without its head?',
    answers: ['cockroach'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country is the biggest producer and exporter of mohair?',
    answers: ['southafrica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who founded the SAS?',
    answers: ['davidstirling'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented \'bifocal\' lenses for eyeglasses?',
    answers: ['benjaminfranklin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented the most common projection for world maps?',
    answers: ['gerardusmercator'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the old gag, where is Prince Albert?',
    answers: ['inacan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From what Irish words is \'Dublin\' derived?',
    answers: ['dubhlinn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From what language is the term \'finito\'?',
    answers: ['italian'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Merging the words \'melt\' and \'weld\' created which word?',
    answers: ['meld'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Other than Germany, whose official language is German?',
    answers: ['austria'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The word rodent comes from the italian \'rodere\', which means?',
    answers: ['gnaw'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What city\'s name is derived from the words \'dubh linn\'?',
    answers: ['dublin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does \'alma mater\' mean in English?',
    answers: ['bountifulmother'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does \'majuba\' mean?',
    answers: ['placeofrockpigeons'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does \'shogun\' mean in English?',
    answers: ['militarygovernor'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the Irish \'dubh linn\' mean?',
    answers: ['blackpool'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the word \'karate\' translate to in English?',
    answers: ['openhand'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is \'blackpool\' in Irish?',
    answers: ['dubhlinn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is \'bountiful mother\' in Latin?',
    answers: ['almamater'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is \'military governor\' in Japanese?',
    answers: ['shogun'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the English word for \'fiesta\'?',
    answers: ['festival'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the Israeli \'knesset\'?',
    answers: ['parliament'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the Old English word for \'sneeze\'?',
    answers: ['fneasan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the Spanish word for \'festival\'?',
    answers: ['fiesta'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the language of Hungary?',
    answers: ['magyar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the literal meaning of \'pince-nez\'?',
    answers: ['pinchnose'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the meaning of the Mercedes Benz motto \'Das beste oder nichts\'?',
    answers: ['thebestornothing'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the official language of Austria?',
    answers: ['german'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What two words make the word \'meld\'?',
    answers: ['meltandweld'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the language of ancient India?',
    answers: ['sanskrit'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country was it once against the law to slam your car door?',
    answers: ['switzerland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How fast does the tip of a standard rotary mower travel? (in km/h)',
    answers: ['twohundred'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the Lone Ranger\'s real name?',
    answers: ['johnreid'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where does Nessie live?',
    answers: ['lochness'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who are santa\'s reindeer, in alphabetical order?',
    answers: ['blitzen,comet,dancer,dasher,prancerandvixen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who created the round table?',
    answers: ['merlin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was Bonnie Parker\'s partner?',
    answers: ['clydebarrow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was Clyde Barrow\'s partner?',
    answers: ['bonnieparker'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was John Reid?',
    answers: ['loneranger'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the Lone Ranger\'s Indian companion?',
    answers: ['tonto'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what did H.G. Wells refer to Adolf Hitler?',
    answers: ['acertifiablelunatic'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many books are there in Anne Rice\'s vampire series?',
    answers: ['five'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many stories did enid blyton publish in 1959?',
    answers: ['fiftynine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In \'A Christmas Carol\', how many ghosts visited Scrooge?',
    answers: ['four'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In \'A Christmas Carol\', what was the name of the miser?',
    answers: ['ebenezerscrooge'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In \'Alice In Wonderland\', who never stopped sobbing?',
    answers: ['mockturtle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In \'Romeo and Juliet\', about what was Mercutio\'s long monologue?',
    answers: ['queenmab'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In \'Romeo and Juliet\', who gave a long monologue about Queen Mab?',
    answers: ['mercutio'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In \'Romeo and Juliet\', who said \'I have a faint cold, fear thrills through my veins\'?',
    answers: ['juliet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In \'Romeo and Juliet\', who says \'make the bridal bed in that dim monument where Tybalt lies?',
    answers: ['juliet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In \'Romeo and Juliet\', who says \'what must be must be\'?',
    answers: ['juliet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In one of Donald Horne\'s novels, as what was Australia dubbed?',
    answers: ['theluckycountry'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In one of Donald Horne\'s novels, which was \'the lucky country\'?',
    answers: ['australia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the Dr Seuss books, which elephant hatched an egg?',
    answers: ['horton'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which book did four ghosts visit Scrooge?',
    answers: ['achristmascarol'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what book was \'Three Days Of The Condor\' based?',
    answers: ['sixdaysofthecondor'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Dr Seuss character steals Christmas?',
    answers: ['grinch'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What controversial book did Germaine Greer write?',
    answers: ['thefemaleeunuch'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What shakespearean play refers to the date of epiphany?',
    answers: ['twelfthnight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What story features flopsy, mopsy and cottontail?',
    answers: ['peterrabbit'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What subject did \'Mr. Chips\' teach?',
    answers: ['latin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was H.G Wells\' first novel?',
    answers: ['thetimemachine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Lestat\'s last name?',
    answers: ['delioncourt'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What were the dolls in the novel \'Valley Of The Dolls\'?',
    answers: ['pills'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What were the two cities in \'A Tale Of Two Cities\'?',
    answers: ['londonandparis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Tennesee Williams play is about a Sicilian-American woman?',
    answers: ['therosetattoo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which book featured the miser Scrooge?',
    answers: ['achristmascarol'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the only book written by Margaret Mitchell?',
    answers: ['gonewiththewind'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who created \'Horton\' the elephant?',
    answers: ['dr.seuss'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who created \'Maudie Frickett\'?',
    answers: ['jonathanwinters'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who created \'The Saint\'?',
    answers: ['lesliecharteris'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who did Macduff kill?',
    answers: ['macbeth'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who did author Leslie Charteris create?',
    answers: ['thesaint'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who dubbed Australia \'the lucky country\'?',
    answers: ['donaldhorne'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who killed Macbeth?',
    answers: ['macduff'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said \'But, soft! what light through yonder window breaks\'?',
    answers: ['romeo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was Winnie the Pooh\'s neighbour?',
    answers: ['piglet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the author of \'Dracula\'?',
    answers: ['bramstoker'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the human companion of Willow?',
    answers: ['madmardigan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'1984\'?',
    answers: ['georgeorwell'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'A Christmas Carol\'?',
    answers: ['charlesdickens'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'A Tale Of Two Cities\'?',
    answers: ['charlesdickens'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'A Tale Of Two Cities\'?',
    answers: ['charlesdickens'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'Alice In Wonderland\'?',
    answers: ['lewiscarroll'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'Gone With The Wind\'?',
    answers: ['margaretmitchell'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'Psycho\'?',
    answers: ['robertbloch'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'The Birds\'?',
    answers: ['daphnedumaurier'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'The Female Eunuch\'?',
    answers: ['germainegreer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'The Hobbit\'?',
    answers: ['j.r.r.tolkien'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'The Rose Tattoo\'?',
    answers: ['tennesseewilliams'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'The Time Machine\'?',
    answers: ['h.g.wells'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'Valley Of The Dolls\'?',
    answers: ['jacquelinesusann'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'Weird Harold and Fat Albert\'?',
    answers: ['billcosby'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'little lamb, who made thee\'?',
    answers: ['williamblake'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the \'Dragonriders Of Pern\' series?',
    answers: ['annemccaffrey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the \'Father Brown\' crime stories?',
    answers: ['g.k.chesterton'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the \'Myth\' series?',
    answers: ['robertasprin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the \'Noddy\' books?',
    answers: ['enidblyton'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the vampire series that featured Lestat as the main character?',
    answers: ['annerice'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who\'s last words were \'Thus with a kiss I die\'?',
    answers: ['romeo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How old was the world\'s oldest man?',
    answers: ['onehundredandfortyone'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the world\'s oldest man?',
    answers: ['birnarayanchaudhari'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On a ship, what is the line that indicates the maximum load that may be transported?',
    answers: ['plimsollline'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many different letters are used in the roman numeral system?',
    answers: ['seven'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is 65% of 60?',
    answers: ['39'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the maximum number of integer degrees in a reflex angle?',
    answers: ['threehundredandfiftynine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the maximum number of integer degrees in an acute angle?',
    answers: ['eightynine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the maximum number of integer degrees in an obtuse angle?',
    answers: ['onehundredandseventynine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the minimum number of integer degrees in a reflex angle?',
    answers: ['onehundredandeightyone'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the minimum number of integer degrees in an acute angle?',
    answers: ['one'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the minimum number of integer degrees in an obtuse angle?',
    answers: ['ninetyone'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the only digit that has the same number of letters as its value?',
    answers: ['four'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the square root of one quarter?',
    answers: ['onehalf'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What instrument measures walking distance?',
    answers: ['pedometer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what body part does an osteopath specialise?',
    answers: ['bones'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Heroin is the brand name of morphine once marketed by which pharmaceutical company?',
    answers: ['bayer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the early 20th century, rattlesnake venom was used to treat which illness?',
    answers: ['epilepsy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'North American Indians ate watercress to dissolve what in the bladder?',
    answers: ['gravelandstones'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On what part of the body is an \'LTK procedure\' performed?',
    answers: ['eyes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did North American Indians eat to dissolve gravel and stones in the bladder?',
    answers: ['watercress'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does a sphygmomanometer measure?',
    answers: ['bloodpressure'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does hepatitis affect?',
    answers: ['liver'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What instrument measures blood pressure?',
    answers: ['sphygmomanometer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a the technical name for a heart attack?',
    answers: ['myocardialinfarct'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is acute nasopharyngitis?',
    answers: ['acold'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is another name for consumption?',
    answers: ['tuberculosis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is another name for tuberculosis?',
    answers: ['consumption'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was given to children to rid them of threadworm?',
    answers: ['saltenema'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who ate watercress to dissolve gravel and stones in the bladder?',
    answers: ['northamericanindians'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented the smallpox vaccine?',
    answers: ['edwardjenner'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the first to use rubber gloves during surgery?',
    answers: ['dr.w.s.halstead'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As a result of their wearing high leather collars to protect their necks from sabres, as what were the first US marines known?',
    answers: ['leathernecks'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What do the letters \'SAM\' mean in SAM missiles?',
    answers: ['surfacetoair'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the mascot of the US naval academy?',
    answers: ['goat'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the naval equivalent of an army Major?',
    answers: ['lieutenantcommander'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With which hand do soldiers salute?',
    answers: ['right'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What forms when a diamond is cut with a laser?',
    answers: ['graphitedust'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is also known as the \'bishop\'s stone\'?',
    answers: ['amethyst'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the violet variety of quartz otherwise known as?',
    answers: ['amethyst'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Approximately how deep are the deepest mines? (in km)',
    answers: ['four'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country is the largest gold refinery?',
    answers: ['southafrica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the deepest mine in the world?',
    answers: ['westerndeeplevelsmine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the largest gold refinery?',
    answers: ['randrefinery'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where are the deepest mines?',
    answers: ['southafrica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Graphite dust is formed when what is cut with a laser?',
    answers: ['diamond'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are Swedish buns called?',
    answers: ['danishes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What has no reflection, no shadow, and can\'t stand the smell of garlic?',
    answers: ['vampire'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which man has the most monuments erected in his honour?',
    answers: ['buddha'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which woman has the most monuments erected in her honour?',
    answers: ['virginmary'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From which team did Marlboro switch its backing to Mclaren in the 1974 season?',
    answers: ['brm'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many pole positions did Ayrton Senna score?',
    answers: ['sixtyfive'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In 1976, James Hunt was disqualified after winning which Grand Prix?',
    answers: ['british'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the first automobile racetrack in America.',
    answers: ['indianapolismotorspeedway'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Over what time period is the Le Mans endurance motor race?',
    answers: ['twentyfourhours'],
    category: 'Needs to be categorised',
  },
  {
    question: 'To which team did Marlboro switch its backing from BRM in the 1974 season?',
    answers: ['mclaren'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What colours was the Ferrari Formula 1 car in the 1964 US Grand prix?',
    answers: ['blueandwhite'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What event marked the 1954 french grand prix?',
    answers: ['thereturnofmercedes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where do the Italians host the Grand Prix?',
    answers: ['monza'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which car won the 1953 Italian Grand Prix?',
    answers: ['maserati'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which new engine regulation replaced the 2.5 litre rule at the start of the 1961 season?',
    answers: ['1.5litrerule'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who hosts the Monza Grand Prix?',
    answers: ['italy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who qualified for pole position in the 1984 Brazilian Grand Prix?',
    answers: ['eliodeangelis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was disqualified after winning the 1976 British Grand Prix?',
    answers: ['jameshunt'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the driver for the Jordan team in the 1998 Grand Prix?',
    answers: ['damonhill'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who won the 1966 F1 championship?',
    answers: ['jackbrabham'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Whose motto is \'Be prepared\'?',
    answers: ['boyscouts'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who conquered the Matterhorn in 1865?',
    answers: ['edwardwhymper'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was Lauren Bacall\'s first husband?',
    answers: ['humphreybogart'],
    category: 'Needs to be categorised',
  },
  {
    question: 'About which family are the Godfather films?',
    answers: ['corleone'],
    category: 'Needs to be categorised',
  },
  {
    question: 'For which film did Art Carney win best actor Oscar in 1974?',
    answers: ['harryandtonto'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In \'Star Wars\', who was C3P0\'s sidekick?',
    answers: ['r2d2'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In \'The Shining\' what was the child\'s imaginary friend\'s name (the one who told him things that were going to happen)?',
    answers: ['tony'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the \'Nightmare On Elm Street\' films, who played Freddy Krueger?',
    answers: ['robertenglund'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the film \'American Hot Wax\', who did Jay Leno play?',
    answers: ['mookie'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the film \'American Hot Wax\', who played the \'Mookie\'?',
    answers: ['jayleno'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the film \'Hackers\', how old was \'zero_kool\' when he was first arrested?',
    answers: ['eleven'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the film \'Home Alone\', who played the baddies?',
    answers: ['joepescianddanielstern'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the film \'Pretty Woman\', for who was Goldie Hawn the body double?',
    answers: ['juliaroberts'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the film \'The Day Of The Jackal\', who played the Jackal?',
    answers: ['edwardfox'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what did someone squish her hands to make the sound of e.t walking?',
    answers: ['jelly'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what film did Whoopi Goldberg make her screen debut?',
    answers: ['thecolorpurple'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which James Bond film does the villain cheat at golf?',
    answers: ['goldfinger'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which film did Henry Fonda play a fallen priest?',
    answers: ['thefugitive'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which film did Paul Newman and Robert Redford hold hands and jump into a river?',
    answers: ['butchcassidyandthesundancekid'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which film was Goldie Hawn the body double for Julia Roberts?',
    answers: ['prettywoman'],
    category: artsandentertainment,
  },
  {
    question: 'Juliette Binoche won an academy award for best supporting role in which film?',
    answers: ['englishpatient'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Pancho was whose faithful sidekick?',
    answers: ['ciscokid\'s'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Tippi Hedren is best known for her lead role in which film?',
    answers: ['thebirds'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Was Shirley Temple 21, 25 or 29 when she made her last film?',
    answers: ['21'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Marlon Brando film was widely banned?',
    answers: ['lasttangoinparis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Dorothy\'s house land on in \'The Wizard Of Oz\'?',
    answers: ['thewickedwitchofthewest'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What film featured a cat named Mr. Bigglesworth?',
    answers: ['austinpowers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What film is generally considered the worst film ever made?',
    answers: ['attackofthekillertomatoes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What film marked James Cagney\'s return to the screen after 20 years?',
    answers: ['ragtime'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What film starred Helen Hunt, Cary Elwes and Bill Paxton?',
    answers: ['twister'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What film starred Rosie O\'Donnell, Rita Wilson and Meg Ryan?',
    answers: ['sleeplessinseattle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the film in which Steven Segal\'s character dies?',
    answers: ['executivedecision'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the sequel to the film \'Every Which Way But Loose\'?',
    answers: ['everywhichwayyoucan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Ben Stiller\'s character called in \'Mystery Men\'?',
    answers: ['mr.furious', 'mrfurious', 'misterfurious'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Eddie Murphy\'s character name in \'Beverley Hills Cop\'?',
    answers: ['axelfoley'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Garth\'s last name in \'Wayne\'s World\'?',
    answers: ['algar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was John Wayne\'s real name?',
    answers: ['marionmorrison'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Keanu Reeves\' computer world alias in \'The Matrix\'?',
    answers: ['neo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Keanu Reeves\' first big film?',
    answers: ['pointbreak'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Kevin Bacon\'s first big hit?',
    answers: ['footloose'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was painted on Peter Fonda\'s helmet motorcycle helmet in \'Easy Rider\'?',
    answers: ['starsandstripes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first film directed by Robert Redford?',
    answers: ['ordinarypeople'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of the pinball machine in the film \'Tommy\'?',
    answers: ['wizard'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of the two space shuttles in \'Armegeddon\'?',
    answers: ['freedomandindependence'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was used for blood in the film \'psycho\'?',
    answers: ['chocolatesyrup'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which basketball star played a genie in \'Kazaam\'?',
    answers: ['shaquilleo\'neal'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which film preceded \'Magnum Force\' and \'The Enforcer\'?',
    answers: ['dirtyharry'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which films are about the Corleone family?',
    answers: ['thegodfatherfilms'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which was the first \'Indiana Jones\' film?',
    answers: ['raidersofthelostark'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who appeared in \'St. Elmo\'s Fire\', \'The Scarlett Letter\' and \'Striptease\'?',
    answers: ['demimoore'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who did Charlie Becker play in \'The Wizard of Oz\'?',
    answers: ['themayorofthemunchkins'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who directed \'The Shining\'?',
    answers: ['stanleykubrick'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who directed the Movie \'Psycho\' from Robert Bloch?',
    answers: ['alfredhitchcock'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who directed the classic thriller \'The Birds\'?',
    answers: ['alfredhitchcock'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who directed the film \'Ordinary People\'?',
    answers: ['robertredford'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who directed the film \'The Birds\' from Daphne du Maurier?',
    answers: ['alfredhitchcock'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who does the voice for Yoda in the Star Wars films?',
    answers: ['frankoz'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played \'Johnny Mnemonic\'?',
    answers: ['keanureeves'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played Clyde to Faye Dunaway\'s Bonnie?',
    answers: ['warrenbeatty'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played Dr. Frankenfurter in the pop-culture film \'The Rocky Horror Picture Show?',
    answers: ['timcurry'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played Dr. Kildare?',
    answers: ['richardchamberlain'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played Eddie in the pop-culture film \'The Rocky Horror Picture Show?',
    answers: ['meatloaf'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played Hopalong Cassidy?',
    answers: ['williamboyd'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played Louis in \'Interview With The Vampire\'?',
    answers: ['bradpitt'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played Queen Amidala in the latest \'Star Wars\' film?',
    answers: ['natalieportman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played in the film \'Ragtime\' after 20 years offscreen?',
    answers: ['jamescagney'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played the \'Universal Soldier\'?',
    answers: ['jean-claudevandamme'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played the mayor of the munchkins in \'The Wizard of Oz\'?',
    answers: ['charliebecker'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played the murder victim in the original version of \'Psycho\'?',
    answers: ['janetleigh'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played the president of the U.S in \'Air Force One\'?',
    answers: ['harrisonford'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played the title role in the \'Mad Max\' series of films?',
    answers: ['melgibson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played the title role in the 1978 version of \'Superman\'?',
    answers: ['christopherreeve'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who starred in \'Conan The Barbarian\'?',
    answers: ['arnoldschwarzenegger'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who starred in the 1952 film \'Niagara\'?',
    answers: ['marilynmonroe'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who starred in the film \'The Man With Two Brains\'?',
    answers: ['stevemartin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who starred in the film version of \'To Kill A Mockingbird\'?',
    answers: ['gregorypeck'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was Dr. Zhivago\'s great love?',
    answers: ['lara'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was John Wayne\'s musical co-star in true grit?',
    answers: ['glencampbell'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was Miss Hungary in 1936?',
    answers: ['zsa-zsagabor'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the Cisco Kid\'s faithful sidekick?',
    answers: ['pancho'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the director of \'Terminator\' and \'Titanic\'?',
    answers: ['jamescameron'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the villain in \'Star Wars\'?',
    answers: ['darthvader'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Whose films include \'Giant\', \'Written On The Wind\' and \'A Farewell To Arms\'?',
    answers: ['rockhudson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which film did Jay Leno play \'Mookie\'?',
    answers: ['americanhotwax'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What animal has the same name as a high church official?',
    answers: ['cardinal'],
    category: 'Needs to be categorised',
  },
  {
    question: '\'Hang On Sloopy\' was the official rock song of which band?',
    answers: ['ohio'],
    category: 'Needs to be categorised',
  },
  {
    question: '\'White Room\' was a hit off which Eric Clapton album?',
    answers: ['cream'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what is Merle Haggard also known as?',
    answers: ['okiefrommuskogee'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Besides the Stones, which group had the longest touring career until the founder\'s death in 1995?',
    answers: ['thegratefuldead'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Bill Justis was a studio musician when he recorded this \'sloppy\' instrumental in october 1957?',
    answers: ['raunchy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Crosby, Stills and Nash\'s debut album included a song about a girl and the colour of her eyes. Name that song.',
    answers: ['sweetjudyblueeyes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'For whom did Colonel Tom Parker act as manager?',
    answers: ['elvispresley'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Formerly with Spencer Davis, he went on to form Traffic with Dave Mason. He is?',
    answers: ['stevewinwood'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From what platform does the \'Chattanooga Choo Choo\' leave Pennsylvania station?',
    answers: ['twentynine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From which station does the \'Chattanooga Choo Choo\' leave?',
    answers: ['pennsylvaniastation'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Hey! What was the name of the hit song released by \'The Romantics\' in February 1980?',
    answers: ['that\'swhatilikeaboutyou'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many members are in the \'fairfield four\'?',
    answers: ['five'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How old was Leann Rhimes when she became a country music star?',
    answers: ['fourteen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How old was Leann Rhimes when she recorded her first album?',
    answers: ['eleven'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In \'La Traviata\', what does Violetta sing?',
    answers: ['semprelibera'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In \'La Traviata\', who sings \'Sempre Libera\'?',
    answers: ['violetta'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In 1958, who had a pop music hit with \'Willie and the Hand Jive\'?',
    answers: ['johnnyotis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In 1968, who released \'Carnival of life\' and \'Recital\'?',
    answers: ['leemichaels'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In 1981, who won song of the year with \'Sailing\'?',
    answers: ['christophercross'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In 1987, who released her second album \'Solitude Standing\'?',
    answers: ['suzannevega'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In a 1976 release, who wanted to \'fly like an eagle\'?',
    answers: ['stevemillerband'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In late 1957, Buddy Holly\'s solo release \'Peggy Sue\' challenged which song recorded with The Crickets?',
    answers: ['ohboy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the opera \'Don Giovanni\', what was Leporello?',
    answers: ['servant'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which Verdi opera does Violetta sing \'Sempre Libera\'?',
    answers: ['latraviata'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which opera does Leporello entertain a vengeful jilted lover?',
    answers: ['dongiovanni'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Michael di Lorenzo was one of the lead dancers on which Michael Jackson video?',
    answers: ['beatit'],
    category: 'Needs to be categorised',
  },
  {
    question: 'R. Kelly sings: \'If I can see it then I can do it, if I just believe it, there\'s nothing to it\'. What\'s the song title?',
    answers: ['ibelieveicanfly'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Savage Garden took 13 nominations and 10 wins at which awards?',
    answers: ['ariaawards'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Don Mclean song laments the day Buddy Holly died?',
    answers: ['americanpie'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What album holds the world record for copies sold?',
    answers: ['thriller'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are the separators on a guitar neck called?',
    answers: ['frets'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What classic rock band sang the song \'Paint It, Black\'?',
    answers: ['rollingstones'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did George Harrison discover on the Witwatersrand?',
    answers: ['gold'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Sheryl Crow do before she became a singer?',
    answers: ['teach'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the term \'DJ\' mean?',
    answers: ['discjockey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What hardcore rock group sings, \'Blind\' and \'Clown\'?',
    answers: ['korn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What instrument are you playing when you perform a rim shot?',
    answers: ['drums'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What instrument does an organ grinder play?',
    answers: ['hurdygurdy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Cape Town\'s major choir called?',
    answers: ['philharmonicchoir'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Elton John\'s real name?',
    answers: ['reginalddwight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Vanilla Ice\'s real name?',
    answers: ['robertvanwinkle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a cello\'s full name?',
    answers: ['violoncello'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a violoncello usually called?',
    answers: ['cello'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name given to the type of West Indian music made famous by artists such as Bob Marley and Peter Tosh?',
    answers: ['reggae'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the official birthplace of country music?',
    answers: ['bristol'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What license plate number is on the Volkswagon on the cover of The Beatles\' \'Abbey Road\' Album?',
    answers: ['281f'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What song did Elton John and George Michael sing as a duet?',
    answers: ['don\'tletthesungodownonme'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What song was originally \'Good Morning To You\' before the words were changed and it was published in 1935?',
    answers: ['happybirthdaytoyou'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What song\'s words were changed and then published in 1935 as \'Happy Birthday To You\'?',
    answers: ['goodmorningtoyou'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Elvis Presley\'s twin brother\'s name?',
    answers: ['garon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Jethro Tull before donating his name to a British epic rock group?',
    answers: ['agriculturist'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the average age of United States soldiers in the Vietnam war?',
    answers: ['nineteen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first CD pressed in the USA?',
    answers: ['bornintheusa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the original name of Paul McCartney\'s fictional church cleaner \'Eleanor Rigby\'?',
    answers: ['missdaisyhawkins'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where did George Harrison discover gold?',
    answers: ['witwatersrand'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the Rock and Roll Hall Of Fame?',
    answers: ['cleveland,ohio'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which 1960\'s group sang a song inspired by \'Alice In Wonderland\'?',
    answers: ['thejeffersonairplane'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which 1980\'s Pink Floyd album was made into a film that starred Bob Geldof, and featured the artwork of cartoonist Gerald Scarfe?',
    answers: ['thewall'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Australian duo took 13 nominations and 10 wins at the ARIA awards?',
    answers: ['savagegarden'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Elton John song was re-recorded as a requiem for Lady Diana Spencer?',
    answers: ['candleinthewind'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which british group recorded the 1983 hit \'Owner Of A Lonely Heart\'?',
    answers: ['yes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country and western singer is known as the \'okie from muskogee\'?',
    answers: ['merlehaggard'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which singer is a former school teacher?',
    answers: ['sherylcrow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which singer/songwriter worked in a factory making toilets for airplanes before he recorded \'Aint No Sunshine\'?',
    answers: ['billwithers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who \'imagined\' a better world?',
    answers: ['johnlennon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who advised us to \'break on through to the other side\'?',
    answers: ['jimmorrison(ofthedoors)'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who appeared solo at the Woodstock festival after leaving \'The Lovin\' Spoonful\'?',
    answers: ['johnsebastian'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who began his career with \'The Yardbirds\' and established himself as one of the best rock guitarists of his generation?',
    answers: ['ericclapton'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who began his professional career with Black Sabbath?',
    answers: ['ozzyosbourne'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who collaborated with John Lennon on \'Whatever Gets You Through The Night\'?',
    answers: ['eltonjohn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who did a version of \'One Bourbon, One Scotch, One Beer\' on his 1977 debut album?',
    answers: ['georgethorogood'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who did the music for the 1970\'s film \'Saturday Night Fever\'?',
    answers: ['beegees'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who discovered gold on the Witwatersrand?',
    answers: ['georgeharrison'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who founded \'Live Aid\' and \'Band Aid\'?',
    answers: ['bobgeldof&midgeure'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is Reginald Dwight known as?',
    answers: ['eltonjohn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is Robert van Winkle?',
    answers: ['vanillaice'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the elder statesman of \'british blues\', and fronted \'The Bluesbreakers\'?',
    answers: ['johnmayall'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the lead singer of \'The Doors\'?',
    answers: ['jimmorrison'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the only singer to have no.1 hits in the 50\'s, 60\'s, 70\'s, 80\'s and 90\'s?',
    answers: ['cliffrichard'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who produced \'Sgt Pepper\'s Lonely Hearts Club Band\'?',
    answers: ['georgemartin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who recorded \'A Boy Named Sue\'?',
    answers: ['johnnycash'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who released \'Time, Love and Tenderness\' in 1981?',
    answers: ['michaelbolton'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who released \'Tuesday Night Music Club\' in 1993?',
    answers: ['sherylcrow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who released a chart-busting album in 1976 which featured \'The Lido Shuffle\'?',
    answers: ['bozscaggs'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who released the double album \'Goodbye Yellow Brick Road\' in 1973?',
    answers: ['eltonjohn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang \'All Right Now\'?',
    answers: ['free'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang \'Any Way You Want Me\'?',
    answers: ['elvispresley'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang \'Bad Case Of Loving You\'?',
    answers: ['robertpalmer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang \'Beat It\'?',
    answers: ['michaeljackson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang \'Beauty and the Beast\'?',
    answers: ['celinedion'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang \'Born In The USA\'?',
    answers: ['brucespringsteen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang \'Forever and Ever, Amen\'?',
    answers: ['randytravis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang \'Good Morning To You?',
    answers: ['mildredandpattyhill'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang \'I\'m A Believer\'?',
    answers: ['monkees'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang \'In The Air Tonight\'?',
    answers: ['philcollins'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang \'Islands In The Stream\' with Dolly Parton?',
    answers: ['kennyrogers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang \'Islands In The Stream\' with Kenny Rogers?',
    answers: ['dollyparton'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang \'Jet Airliner\'?',
    answers: ['stevemillerband'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang \'Rescue Me\'?',
    answers: ['fontellabass'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang \'That\'s Alright Mama\'?',
    answers: ['elvispresley'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang \'We\'ve only just begun\'?',
    answers: ['carpenters'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang \'You Can Call Me Al\'?',
    answers: ['paulsimon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang about \'Commitment\'?',
    answers: ['leannrhimes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang about \'The Boogie Woogie Bugle Boy Of Company B\'?',
    answers: ['theandrewssisters'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang about Desmond and Molly Jones?',
    answers: ['thebeatles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang for \'Bad company\' and \'Free\', then went out on his own?',
    answers: ['paulrodgers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang with \'The Dakotas\'?',
    answers: ['billyj.kramer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sings \'Sweet Home Alabama\'?',
    answers: ['lynyrdskynyrd'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wanted \'a lover with a slow hand\'?',
    answers: ['thepointersisters'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wanted \'a new drug\'?',
    answers: ['hueylewisandthenews'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was \'hooked on a feeling\'?',
    answers: ['bluesuede'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was a member of \'Crosby, Stills and Nash\' and \'The Hollies\'?',
    answers: ['grahamnash'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the Indian maiden in Johnny Preston\'s \'Running Bear\'?',
    answers: ['littlewhitedove'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the first female to enter the Billboard charts in 1985?',
    answers: ['whitneyhouston'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the oldest member of The Beatles?',
    answers: ['ringostarr'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the only songwriter to win the Eurovision Song Contest twice?',
    answers: ['johnnylogan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'Roll Over Beethoven\'?',
    answers: ['chuckberry'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the opera \'The Giant\'?',
    answers: ['sergeiprokofiev'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the opera \'The Masked Ball\'?',
    answers: ['giuseppeverdi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the opera \'Tosca\'?',
    answers: ['giacomopuccini'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the opera \'norma\'?',
    answers: ['vincenzobellini'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the oprea \'La Traviata\'?',
    answers: ['guiseppeverdi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the song \'Do They Know It\'s Christmas\' with Bob Geldof?',
    answers: ['midgeure'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the song \'Do They Know It\'s Christmas\' with Midge Ure?',
    answers: ['bobgeldof'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who\'s first release was \'Talking Heads 77\'?',
    answers: ['psychokiller'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology, the riddle of what did Oedipus solve?',
    answers: ['sphinx'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Egyptian mythology, what is the life force called?',
    answers: ['ka'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Egyptian mythology, who is known as the god of the desert?',
    answers: ['ash'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Egyptian mythology, who is the god of the underworld?',
    answers: ['osiris'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Egyptian mythology, who was Horus\' mother?',
    answers: ['isis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Egyptian mythology, who was Isis the wife of?',
    answers: ['osiris'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In English mythology, who caused the death of the Lady of Shallot?',
    answers: ['sirlancelot'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology who did Athena turn into a spider?',
    answers: ['arachne'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology, how many heads did Hydra have?',
    answers: ['nine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology, into what did Athena turn Arachne?',
    answers: ['spider'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology, what animal is associated with Athena?',
    answers: ['owl'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology, what did Daedalus construct for Minos?',
    answers: ['labyrinth'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology, what was Minos the king of?',
    answers: ['crete'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology, where did Perseus kill his grandfather?',
    answers: ['larrisangames'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology, who did Jocasta marry?',
    answers: ['oedipus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology, who did Minos hire to construct the labyrinth?',
    answers: ['daedalus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology, who had nine heads?',
    answers: ['hydra'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology, who hired Daedalus to construct the labyrinth?',
    answers: ['minos'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology, who ruled over the island of Samos?',
    answers: ['polycrates'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology, who solved the riddle of the Sphinx?',
    answers: ['oedipus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology, who turned Arachne into a spider?',
    answers: ['athena'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology, who was Jason\'s wife?',
    answers: ['medea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology, who was Medea\'s husband?',
    answers: ['jason'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology, who was the only mortal gorgon?',
    answers: ['medusa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology, who was the son of Peleus and Thetis?',
    answers: ['achilles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology, who were Achilles\' parents?',
    answers: ['peleusandthetis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What mythical Scottish town appears for one day every 100 years?',
    answers: ['brigadoon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Norse god had the Valkyries as handmaidens?',
    answers: ['odin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Titan had snakes for hair?',
    answers: ['medusa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who did the Norse god Odin have as handmaidens?',
    answers: ['valkyries'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the Greek messenger god?',
    answers: ['hermes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the Norse god of lightning?',
    answers: ['odin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the Norse god of mischief?',
    answers: ['loki'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the Norse god of thunder and war?',
    answers: ['thor'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the mother of Apollo and Artemis?',
    answers: ['leto'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was Hercules\' father?',
    answers: ['zeus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was Hercules\' stepmother?',
    answers: ['hera'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the Greek god of fire?',
    answers: ['hephaestus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the Greek god of prophecy and archery?',
    answers: ['apollo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the Greek god of wine?',
    answers: ['dionysus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the Greek goddess of spring?',
    answers: ['persephone'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who, in Egyptian mythology, is the god of the dead?',
    answers: ['anubis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which people invented the compass?',
    answers: ['chinese'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Approximately how many pounds of salt is in every gallon of seawater?',
    answers: ['onequarter'],
    category: 'Needs to be categorised',
  },
  {
    question: 'At which time of year do children grow fastest?',
    answers: ['springtime'],
    category: 'Needs to be categorised',
  },
  {
    question: 'By what process is rock worn down by the weather?',
    answers: ['erosion'],
    category: 'Needs to be categorised',
  },
  {
    question: 'During pregnancy, how many times its normal size does the human uterus expand?',
    answers: ['fivehundred'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many hearts do earthworms have?',
    answers: ['five'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Of what do earthworms have five?',
    answers: ['hearts'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What animal has bony plates and rolls up into a ball if it is frightened?',
    answers: ['armadillo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What has approximately 1/4 pound of salt in every gallon?',
    answers: ['seawater'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the heart rate of the blue whale? (in beats per minute)',
    answers: ['nine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'When does the human uterus expand 500 times its normal size?',
    answers: ['duringpregnancy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What can be either new, last or gibbous?',
    answers: ['themoon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sat on her tuffet?',
    answers: ['littlemissmuffet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the song \'Skip To My Lou\', in what beverage are the flies?',
    answers: ['buttermilk'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where did Little Miss Muffet sit?',
    answers: ['onhertuffet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is Mother Goose\'s son?',
    answers: ['jack'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Is wholemeal bread brown or white?',
    answers: ['brown'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Lack of Vitamin D causes which disease?',
    answers: ['rickets'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Rickets is caused by a lack of which vitamin?',
    answers: ['vitamind'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Six ounces of orange juice contains the minimum daily requirement for which vitamin?',
    answers: ['vitaminc'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does iron deficiency cause?',
    answers: ['anaemia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What makes brown bread healthier than white bread?',
    answers: ['wholemeal'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Basmati is a type of what?',
    answers: ['rice'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does a notaphile collect?',
    answers: ['banknotes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does a philluminist collect?',
    answers: ['matchboxlabels'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does an ombrometer measure?',
    answers: ['rainfall'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a \'funambulist\'?',
    answers: ['atightropewalker'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a pugilist?',
    answers: ['boxer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is another name for a  tightrope walker?',
    answers: ['funambulist'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is someone who collects banknotes called?',
    answers: ['notaphile'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With what is rainfall measured?',
    answers: ['ombrometer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a \'somnambulist\'?',
    answers: ['sleepwalker'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which south african oil company has estblished the only commercially proven \'oil from coal\' operations in the world?',
    answers: ['sasol'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In ancient Greece, where were the original Olympics held?',
    answers: ['olympia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Olympic motto \'citius, altius, fortius\' means what?',
    answers: ['faster,higher,stronger'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the Olympic motto in the original Latin?',
    answers: ['citius,altius,fortius'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the 1956 Summer Olympics held?',
    answers: ['melbourne,australia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were the 1960 summer Olympics held?',
    answers: ['rome,italy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who did Zola Budd trip in the 1984 Los Angeles Olympics?',
    answers: ['marydecker'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who tripped Mary Decker in the 1984 Los Angeles Olympics?',
    answers: ['zolabudd'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many episodes were there in the original Star Trek series?',
    answers: ['seventyfive'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In \'Star Trek\', what is Data\'s rank?',
    answers: ['lieutenantcommander'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In \'Star Trek\', who was the captain of the \'Enterprise C\'?',
    answers: ['rachelgarret'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the registry number of the enterprise in the original Star Trek?',
    answers: ['ncc1701'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played Deanna Troi in \'Star Trek The Next Generation\'?',
    answers: ['marinasirtis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What colour on black produces the most visible combination?',
    answers: ['yellow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On maps, what is the technical name for the \'you are here\' arrow?',
    answers: ['ideolocator'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The last line of which document is \'working men of all countries, unite!\'?',
    answers: ['communistmanifesto'],
    category: 'Needs to be categorised',
  },
  {
    question: 'At what angle above the horizon must the sun be to create a rainbow? (in degrees)',
    answers: ['forty'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Waves \'break\' when their height is how much more than the depth of the water?',
    answers: ['seventenths'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name given to elementary particles originating in the sun and other stars, that continuously rain down on the earth?',
    answers: ['cosmicrays'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In England, what is the Speaker of the House not allowed to do?',
    answers: ['speak'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Of which island do Ireland, Britain, Iceland and Norway dispute ownership?',
    answers: ['rockall'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does Israel call its parliament?',
    answers: ['knesset'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which island do the nationalist Chinese occupy?',
    answers: ['taiwan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which nation calls its parliament \'The Knesset\'?',
    answers: ['israel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who succeeded Charles de Gaulle as president of France?',
    answers: ['georgespompidour'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented popsicles?',
    answers: ['frankepperson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As who is Vincent Furnier known?',
    answers: ['alicecooper'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Alice Cooper\'s real name?',
    answers: ['vincentfurnier'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Conway Twitty\'s real name?',
    answers: ['haroldlloydjenkins'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Harold Lloyd Jenkins\' stage name?',
    answers: ['conwaytwitty'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Wynonna Judd\'s real name?',
    answers: ['christinaclairciminella'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is Anne Mae Bullock better known as?',
    answers: ['tinaturner'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is Christina Claire Ciminella otherwise known as?',
    answers: ['wynonnajudd'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Of what did Sigmund Freud have a morbid fear?',
    answers: ['ferns'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'Sexual Behavior In The Human Male\' in 1948?',
    answers: ['alfredkinsey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With what branch of medicine is Franz Mesmer associated?',
    answers: ['hypnotism'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What city has the most underground stations in the world?',
    answers: ['newyork'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the spokesperson for the exercise tapes \'Tae Bo\'?',
    answers: ['billyblanks'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the common name for lysergic acid diethylamide?',
    answers: ['lsd'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the \'c\' in the equation e=mc^2 stand for?',
    answers: ['speedoflight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A catholic minister is known as a?',
    answers: ['priest'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what city does a certain church forbid burping or sneezing?',
    answers: ['omaha,nebraska'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Of the 266 popes, how many died violently?',
    answers: ['thirtythree'],
    category: 'Needs to be categorised',
  },
  {
    question: 'To where do Muslims make pilgrimage?',
    answers: ['mecca'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is God called in the Muslim faith?',
    answers: ['allah'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a person who has made a pilgimage to Mecca?',
    answers: ['hajji'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What religious movement was founded by William Booth?',
    answers: ['salvationarmy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who founded the Salvation Army?',
    answers: ['williambooth'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are 35% of people using personal ads for dating?',
    answers: ['married'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the patron saint of skiers?',
    answers: ['st.bernard'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country has the third most satellites in orbit?',
    answers: ['france'],
    category: scienceandgeography,
  },
  {
    question: 'How many beams of light are used to record a holograph?',
    answers: ['two', '2'],
    category: scienceandgeography,
  },
  {
    question: 'In what does a rhinologist specialise?',
    answers: ['humannose', 'nose', 'noses', 'humannoses'],
    category: scienceandgeography,
  },
  {
    question: 'The strength of early lasers were measured in which units?',
    answers: ['gillettes'],
    category: scienceandgeography,
  },
  {
    question: 'In which branch of science are monocotyledon and dicotyledon terms?',
    answers: ['botany'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Of what did Aristotle say all things were made up?',
    answers: ['air,earth,fire,andwater'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Of what is genetics the study?',
    answers: ['heredity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Paedology is the study of ...... ?',
    answers: ['soil'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Wilhelm Roentgen discover in 1895?',
    answers: ['x-rays'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does breaking the sound barrier cause?',
    answers: ['asonicboom'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the Rankine scale measure?',
    answers: ['temperature'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is name applied to the study of soil?',
    answers: ['paedology'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the number of blue razor blades a given beam can puncture?',
    answers: ['gillette'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the scientific name for brimstone?',
    answers: ['sulphur'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the scientific name for earth\'s outer layer of surface soil or crust?',
    answers: ['lithosphere'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the study of prehistoric plants and animals?',
    answers: ['paleontology'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the study of the composition of substances and the changes they undergo?',
    answers: ['chemistry'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the study of the earth\'s physical divisions termed?',
    answers: ['geography'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the term that refers to the search for the existence of ghosts?',
    answers: ['eidology'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first recorded message?',
    answers: ['maryhadalittlelamb'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which freezes faster - hot or cold water?',
    answers: ['hot'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who developed the laws of electrolysis?',
    answers: ['michaelfaraday'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who discovered X-rays?',
    answers: ['wilhelmroentgen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who first transmitted radio signals across the Atlantic?',
    answers: ['enricomarconi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said all things were made up of air, earth, fire, and water?',
    answers: ['aristotle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who spoke the first recorded message?',
    answers: ['thomasedison'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the boy scout motto?',
    answers: ['beprepared'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who founded the Boy Scouts?',
    answers: ['lordbadenpowell'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many legs does a crab have?',
    answers: ['ten', '10'],
    category: scienceandgeography,
  },
  {
    question: 'What is cerumen?',
    answers: ['earwax'],
    category: scienceandgeography,
  },
  {
    question: 'What is the scientific name for earwax?',
    answers: ['cerumen'],
    category: scienceandgeography,
  },
  {
    question: 'What is a female calf called?',
    answers: ['heifer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a female cat called?',
    answers: ['queen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a male cat called?',
    answers: ['tom'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a person who makes barrels called?',
    answers: ['cooper'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a resident of Manchester called?',
    answers: ['mancunian'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a resident of liverpool?',
    answers: ['liverpudlian'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is another word for a female sheep?',
    answers: ['ewe'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is podobromhidrosis?',
    answers: ['smellyfeet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name given to male sheep?',
    answers: ['ram'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name given to the switching of letters in an expression (e.g. saying Jag of Flapan instead of Flag of Japan)?',
    answers: ['spoonerism'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the study of weather technically called?',
    answers: ['meteorology'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the covering on the tip of a shoelace called?',
    answers: ['aglet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'After who was Deana Carter named?',
    answers: ['deanmartin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What instrument does Woody Allen play?',
    answers: ['clarinet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Cher\'s maiden name?',
    answers: ['sarkassian'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Tina Turner\'s birth name?',
    answers: ['annamaebullock', 'annamae', 'bullock', 'maebullock'],
    category: artsandentertainment,
  },
  {
    question: 'What is tattooed on Glen Campbell\'s arm?',
    answers: ['dagger'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What musical instrument did Jack Benny play?',
    answers: ['violin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Betty Grable\'s nickname?',
    answers: ['thelegs'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Don Rickles\' nickname?',
    answers: ['mr.warmth'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is Melanie Griffith\'s mother?',
    answers: ['tippihedren'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is Tippi Hedren\'s daughter?',
    answers: ['melaniegriffith'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is married to Eddie Van Halen?',
    answers: ['valeriebertanelli'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is married to Valerie Bertanelli?',
    answers: ['eddievanhalen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who married Mutt Lange?',
    answers: ['shaniatwain'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who married Shania Twain?',
    answers: ['robertmuttlange'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said \'you\'d be surprised how much it costs to look this cheap\'?',
    answers: ['dollyparton'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which state is the Houston Space Centre?',
    answers: ['texas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the biggest criterion for prospective astronauts?',
    answers: ['eyesight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As who is Cassius Clay now known?',
    answers: ['mohammedali', 'muhammadali', 'ali'],
    category: societyandhumanities,
  },
  {
    question: 'How many sides does a baseball homeplate have?',
    answers: ['five'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many stitches are on a regulation baseball?',
    answers: ['108'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In baseball, who won their first world series in 1969?',
    answers: ['newyorkmets'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In hockey, what is the equivalent of a rugby scrum?',
    answers: ['face-off'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In rugby, what is the equivalent of a hockey face-off?',
    answers: ['scrum'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In showjumping, how many points are incurred for knocking down a fence?',
    answers: ['four'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what sport did the word \'crestfallen\' originate?',
    answers: ['cockfighting'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what sport do you find \'coursing\'?',
    answers: ['greyhoundracing'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what sport is the term \'terminal speed\' used?',
    answers: ['dragracing'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Other than England, which european country took part in the 1996 cricket World Cup?',
    answers: ['netherlands'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Other than skiing, which sport takes place on a piste?',
    answers: ['fencing'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are the two basic aids in orienteering?',
    answers: ['mapandcompass'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is soccer star Pele\'s real name?',
    answers: ['edsonarantesdonascimento'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the maximum number of clubs a golfer may use in a round?',
    answers: ['fourteen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the misshapen ear that boxers often have called?',
    answers: ['cauliflowerear'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name given to a rower who competes in an individual event?',
    answers: ['sculler'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the regulation height for a pin in tenpin bowling? (in inches)',
    answers: ['fifteen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the score of a forfeited baseball game?',
    answers: ['9-0', '0-9'],
    category: artsandentertainment,
  },
  {
    question: 'What is the score of a forfeited softball game?',
    answers: ['7-0', '0-7'],
    category: artsandentertainment,
  },
  {
    question: 'What nationality is Gabriela Sabatini?',
    answers: ['argentinian'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What sport has sprint, tandem and team pursuit events?',
    answers: ['cycling'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What sport is sometimes called \'rugger\'?',
    answers: ['rugbyunion'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What sport/game is Chris Evert associated with?',
    answers: ['tennis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What trophy is awarded to the winner of the NHL playoffs?',
    answers: ['stanleycup'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Jack Nicklaus\' nickname?',
    answers: ['goldenbear'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Mohammed Ali\'s original name?',
    answers: ['cassiusclay'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is Capitol Hill?',
    answers: ['washingtondc'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country always leads the opening Olympic procession?',
    answers: ['greece'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which cricket player holds the world record for the highest individual score in first-class cricket?',
    answers: ['brianlara'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which sport allows substitutions without stoppage in play?',
    answers: ['hockey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which tennis star wore denim shorts during matches?',
    answers: ['andreagassi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who did \'Tennis World\' name rookie of the year in 1974?',
    answers: ['martinanavratilova'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who had the nickname \'Golden Bear\'?',
    answers: ['jacknicklaus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who has played in the most consecutive baseball games?',
    answers: ['calripkenjr'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who holds the NHL record for the most goals scored during a regular season?',
    answers: ['waynegretzky'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who hosted the 1999 cricket World Cup?',
    answers: ['england'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is Edson Arantes do Nascimento better known as?',
    answers: ['pele'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the 1990 Wimbledon women\'s singles runner-up?',
    answers: ['zinagarrison'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the NBA MVP in 1976, 1977 and 1980?',
    answers: ['kareemabdul-jabbar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the NBA\'s most valuable player in 1976, 1977 and 1980?',
    answers: ['kareemabdul-jabbar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the last Briton to win the men\'s singles at Wimbledon?',
    answers: ['fredperry'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the only boxer to knock out Mohammed Ali?',
    answers: ['larryholmes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who won the 1982 soccer world cup?',
    answers: ['italy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With what did cricketer Mansoor Ali Khan Pataudi frequently play with in his hands?',
    answers: ['glasseye'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With what sport is Chris Boardman associated?',
    answers: ['cycling'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With what sport is Gabriela Sabatini associated?',
    answers: ['tennis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With what sport is Jack Nicklaus associated?',
    answers: ['golf'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What swimming stroke is named after an insect?',
    answers: ['butterfly'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many tentacles does a squid have?',
    answers: ['ten'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What were comfrey baths were believed to restore?',
    answers: ['virginity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'According to superstition, what do you make when you stub the toes on your right foot?',
    answers: ['awish'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Captain Matthew Webb swim first?',
    answers: ['englishchannel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As who is Terry Bollea known?',
    answers: ['hulkhogan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'For which ad campaign was the line \'I can\'t believe I ate the whole thing\' used?',
    answers: ['alkaseltzer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From where was Ricky in \'I Love Lucy\'?',
    answers: ['cuba'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In \'Coronation Street\', who is Ken and Denise\'s son?',
    answers: ['daniel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the TV series \'Seinfeld\', who does Michael Richards play?',
    answers: ['kramer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the TV series \'Seinfeld\', who plays Kramer?',
    answers: ['michaelrichards'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the TV series \'The Brady Bunch\', what was Cindy\'s toy doll\'s name?',
    answers: ['kittycarrieall'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the TV series \'The Fall Guy\', who did Lee Majors play?',
    answers: ['coltseavers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the TV series \'The Fall Guy\', who played Colt Seavers?',
    answers: ['leemajors'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the TV sitcom \'Married With Children\', what is the dog\'s name?',
    answers: ['buck'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the children\'s tv series \'Sesame Street\', what two characters were roomates?',
    answers: ['bertandernie'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Kelsey Grammer sings and plays the theme song for which TV show?',
    answers: ['frasier'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On \'Dragnet\', who played officer Bill Gannon?',
    answers: ['harrymorgan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On \'The Lucy Show\', who played Vivian Bagley?',
    answers: ['vivianvance'],
    category: 'Needs to be categorised',
  },
  {
    question: 'To which elemetary school did TV\'s \'Brady Bunch\' go?',
    answers: ['dixiecanyonelementary'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What TV network features programming just for children?',
    answers: ['nickelodeon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What TV series from 1970-1974 starred Susan Dey?',
    answers: ['partridgefamily'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Dr. David Banner become when he got angry?',
    answers: ['theincrediblehulk'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Hulk Hogan\'s real name?',
    answers: ['terrybollea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Kermit D Frog\'s girlfriend\'s name?',
    answers: ['misspiggy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the drummer\'s name in \'The Muppet Show\'?',
    answers: ['animal'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the frog\'s name in \'The Muppet Show\'?',
    answers: ['kermitdfrog'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of Jaleel White\'s character in the tv series \'Family ties\'?',
    answers: ['steveurkel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What night club did Ricky work at on \'I Love Lucy\'?',
    answers: ['thetropicana'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What show/game has characters such as Bulbasaur and Pikachu?',
    answers: ['pokemon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Lucy\'s maiden name on \'I Love Lucy\'?',
    answers: ['mcgillicuddy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of Ross\' pet monkey on \'Friends\'?',
    answers: ['marcel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which famous male actor made his name in \'I Dream Of Jeannie\'?',
    answers: ['larryhagman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who did Larry Hagman portray in the TV series \'Dallas\'?',
    answers: ['j.r.ewing'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who did Pat Sajak play on the soapie \'Days Of Our Lives\'?',
    answers: ['kevinhathaway'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who did Patrick Duffy portray in the TV series \'Dallas\'?',
    answers: ['bobbyewing'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who did Vivian Vance play on \'The Lucy Show\'?',
    answers: ['vivianbagley'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who killed Kenny?',
    answers: ['they'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played Bobby Ewing in the TV series \'Dallas\'?',
    answers: ['patrickduffy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played George Costanza on \'Seinfeld\'?',
    answers: ['jasonalexander'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played Kevin Hathaway on the soapie \'Days Of Our Lives\'?',
    answers: ['patsajak'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played Steve Erkel in \'Family Matters\'?',
    answers: ['jaleelwhite'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played commander Riker in \'Star Trek\'?',
    answers: ['jonathanfrakes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who plays many voices, such as Dr Nick, and Moe on \'The Simpsons\'?',
    answers: ['hankazaria'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sings and plays the theme song for the TV show \'Frasier\'?',
    answers: ['kelseygrammer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who starred as \'ouboet\' in the first TV series of \'Orkney Snork Nie\'?',
    answers: ['frankopperman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the alter ego of \'The Incredible Hulk\'?',
    answers: ['dr.davidbanner'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who were Lucy and Ricky\'s next door neighbours and best friends?',
    answers: ['fredandethel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Over what place in india is it forbidden to fly an airplane?',
    answers: ['tajmahal'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who has the world\'s largest double-decker tram fleet?',
    answers: ['hongkong'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What colour thread is used for filigree?',
    answers: ['silverorgold'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of the first space shuttle ever built?',
    answers: ['enterprise'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the opera \'La Traviata\', what was Violetta\'s occupation?',
    answers: ['courtesan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the largest theme resort hotel?',
    answers: ['lostcity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What can be tulip, balloon or flute?',
    answers: ['wineglasses'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From what were balloons originally made?',
    answers: ['animalbladders'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What toy was originally made from the bladder of an animal?',
    answers: ['balloon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What city does Orly airport serve?',
    answers: ['paris'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which airline has the registration prefix \'VR\'?',
    answers: ['cathaypacific'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which city is served by Ringway Airport?',
    answers: ['manchester'],
    category: 'Needs to be categorised',
  },
  {
    question: '5% of Canadians don\'t know the first seven words of the Canadian anthem, but know the first nine words of which anthem?',
    answers: ['theamericananthem'],
    category: 'Needs to be categorised',
  },
  {
    question: '7% of Americans don\'t know the first nine words of the American anthem, but know the first seven words of which anthem?',
    answers: ['canadiananthem'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How much do nine pennies weigh?',
    answers: ['oneounce'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Like what can a fully ripened cranberry be dribbled?',
    answers: ['basketball'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Of what are throat, foxing and platform parts?',
    answers: ['shoe'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What have woodpecker scalps, porpoise teeth and giraffe tails all been used as?',
    answers: ['money'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is \'mother\'s ruin\'?',
    answers: ['gin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the range, in miles, of an Aim-7 Sparrow?',
    answers: ['twentyeight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What keeps one from crying when peeling onions?',
    answers: ['chewinggum'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the only real person to ever have been the head on a Pez dispenser?',
    answers: ['betsyross'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How long is the longest tunnel? (in kms)',
    answers: ['onehundredandsixtynine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the world\'s longest tunnel?',
    answers: ['thewatersupplytunnel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the Kennedy Space Centre?',
    answers: ['capecanaveral,florida'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the USA, for how many years is a patent good?',
    answers: ['seventeen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is on a 5000 acre landfill at the head of Jamaica Bay near New York City?',
    answers: ['johnf.kennedyairport'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the most popular street name in the US?',
    answers: ['parkstreet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Nancy Davis Reagan\'s birth name?',
    answers: ['annefrancesrobbins'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the Statue Of Liberty originally named?',
    answers: ['libertyenlighteningtheworld'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is Stone Mountain?',
    answers: ['atlanta'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where were Tommy Lee Jones and Al Gore freshman roommates?',
    answers: ['harvarduniversity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which city is a \'player with railroads, and the nation\'s freight handler\'?',
    answers: ['chicago'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which two cities are known as the twin cities?',
    answers: ['minneapolisandsaintpaul'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the only man to have been both chief justice and president of the US?',
    answers: ['williamtaft', 'taft'],
    category: societyandhumanities,
  },
  {
    question: 'Who was Al Gore\'s freshman roommate at Harvard?',
    answers: ['tommyleejones'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was Tommy Lee Jones\' freshman roommate at Harvard?',
    answers: ['algore'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was born Anne Frances Robbins?',
    answers: ['nancydavisreagan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was born Sarah Jane Fulks?',
    answers: ['janewymanreagan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the first black mayor of Chicago?',
    answers: ['haroldwashington'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Jane Wyman Reagan\'s birth name?',
    answers: ['sarahjanefulks'],
    category: 'Needs to be categorised',
  },
  {
    question: 'If locked in a completely sealed room, of what will you die before you suffocate?',
    answers: ['carbonmonoxidepoisoning'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the biggest calibre cannon?',
    answers: ['kremlin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Approximately how many times a minute does lightning strike the earth?',
    answers: ['sixthousand'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which US state holds the record for most snowfall in a day, recorded February 7, 1916?',
    answers: ['alaska'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is 9 metres high, 7 metres wide and 2,500 kilometres long?',
    answers: ['greatwallofchina'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Good Rhine wines are bottled in what colour bottles?',
    answers: ['brown'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How much wood can a woodchuck chuck if a woodchuck could chuck wood?',
    answers: ['allthewoodthatawoodchuckcouldifawoodchuckcouldchuckwood'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which word is related to these three: rat, blue, cottage?',
    answers: ['cheese'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Pardon?',
    answers: ['forgive'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What arabian peninsula nations recently merged under communist leadership?',
    answers: ['yemen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a calm ocean region near the equator called?',
    answers: ['doldrums'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which two teams automatically qualified for the France \'98 soccer world cup?',
    answers: ['franceandbrazil'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Sartre, de Beauvoir and Camus all belonged to this philosophical movement.',
    answers: ['existentialism'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Indifference to pleasure or pain; Greek philosophical system following the teachings of Zeno.',
    answers: ['stoicism'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A collection of literary pieces?',
    answers: ['anthology'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The study of animal and plant tissues?',
    answers: ['histology'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does SOS stand for',
    answers: ['saveoursouls'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the abbreviation N/A mean?',
    answers: ['notapplicable'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What statuette is awarded annually for the best television commercial?',
    answers: ['clio'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the national airline of Indonesia?',
    answers: ['garuda'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What do the letters VOSP on a brandy bottle stand for?',
    answers: ['veryspecialoldpale'],
    category: 'Needs to be categorised',
  },
  {
    question: 'There are 4 towns in the United States with the name of what other bird in their names?',
    answers: ['chicken'],
    category: 'Needs to be categorised',
  },
  {
    question: 'There are 61 towns in the United States with the name of what bird in their names?',
    answers: ['turkey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A mouth-like opening into the body; also the porous openings on the surface of leaves.',
    answers: ['stomata'],
    category: 'Needs to be categorised',
  },
  {
    question: 'After a bolus has been digested in the stomach, it is called ______ as it moves into the small intestine.',
    answers: ['chyme'],
    category: 'Needs to be categorised',
  },
  {
    question: 'These essential body cells do not contain nuclei?',
    answers: ['redbloodcells'],
    category: scienceandgeography,
  },
  {
    question: 'These glands are located on top of the kidneys.',
    answers: ['adrenal'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This organ of the excretory system is composed of small tubules called nephridia?',
    answers: ['kidney'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the term for a mass of mood moving from your mouth to your stomach called?',
    answers: ['bolus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What period takes place shortly after chilbrith?',
    answers: ['postpartum'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Whats the technical name for the skull ?',
    answers: ['cranium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'These essential body cells do not contain nuclei.',
    answers: ['redbloodcells'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Colosseum received its name not for its size, but for a colossal statue of who that stood close by?',
    answers: ['nero'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the animal kingdom, if reptiles are in class reptilia, then birds are in class ____',
    answers: ['aves'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Often hunted for its fur, this South American rodent bathes in dust and is often sold in the pet trade.',
    answers: ['chinchilla'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On Borneo and Sumatra, the literal translation of this ape\'s name means \"man of the forest.\"',
    answers: ['orang-utan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Term for an emasculated male pig',
    answers: ['barrow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Komodo Dragon, the biggest known lizard to science, is endemic to the Komodo islands of what country?',
    answers: ['indonesia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The closest living relative of this African mammal is the giraffe.',
    answers: ['okapi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The insect class \"hymenoptera\" includes ants and these colonial honey-makers.',
    answers: ['bees'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The silkworm only eats the leaves of what plant?',
    answers: ['mulberry'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What aminal is the logo of the World Wildlife Fund?',
    answers: ['panda'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is a small flightless bird, also New Zealand\'s national symbol?',
    answers: ['kiwi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which plant is known for attracting hummingbirds?',
    answers: ['hibiscus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The greyhound, along with this smaller relative, is used in the sport of coursing.',
    answers: ['whippet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the fastest breed of dog after the greyhound?',
    answers: ['whippet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A receptacle for holy water in a church is a ....?',
    answers: ['font'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Towards which direction does the Tower of Pisa lean?',
    answers: ['south'],
    category: 'Needs to be categorised',
  },
  {
    question: 'French impressionist Claude -----',
    answers: ['monet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Spanish modernist and cubist Pablo -------',
    answers: ['picasso'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The surrealist painter Salvador Dali was a native of which country?',
    answers: ['spain'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what opera would you find Lt. Pinkerton?',
    answers: ['madamebutterfly'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are arranged in the Japanese art of Ikebana?',
    answers: ['flowers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which date starts the astrological year?',
    answers: ['march21'],
    category: 'Needs to be categorised',
  },
  {
    question: 'At the equator, what is the brightest star in the night sky?',
    answers: ['sirius'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Excluding the sun, what star is closest to the earth?',
    answers: ['proximacentauri(akaalphacentauri)'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many moons does Mercury have?',
    answers: ['none'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which constellation would you look to find the center of The Milky Way?',
    answers: ['sagittarius'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Mercury\'s period of orbit takes how many earth days?',
    answers: ['eightyeight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On which planet are the craters Brahms and Liszt?',
    answers: ['mercury'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Phobos and Deimos are the moons of which planet?',
    answers: ['mars'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The four Galilean moons of Jupiter are: Callisto, Io, Ganymede, and _________',
    answers: ['europa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This astronomer had a metal nose',
    answers: ['tychobrahe'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This moon is our solar system\'s most cratered satellite:',
    answers: ['callisto'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What do scientists predict will happen when the universe ends?',
    answers: ['thebigcrunch'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the sixth planet from our sun?',
    answers: ['saturn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the sixth planet from our sun?',
    answers: ['saturn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where are the 4 major moons of Jupiter discovered by?',
    answers: ['galileo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which astronomer first observed 4 moons of Jupiter in 1610?',
    answers: ['galileogalilei'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which moon is the largest satellite in our solar system?',
    answers: ['ganymede'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which moon is the second largest satellite in our solar system?',
    answers: ['titan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which of Neptune\'s moons is the biggest?',
    answers: ['triton'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who discovered Uranus?',
    answers: ['friedrichwilhelmherschel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the heaviest element that can be formed by regular fusion reactions in the core of a star?',
    answers: ['iron'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A cluster or bunch of bananas is called a ?',
    answers: ['hand'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Individual bananas are called ?',
    answers: ['fingers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This drink is made from espresso coffee, steamed milk and chocolate.',
    answers: ['mocha'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What \'S\' was a king of israel who was famous for his wisdom?',
    answers: ['solomon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many animals of each kind did Moses take onto the ark?',
    answers: ['none(itwasnoahnotmoses)'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the holy cup of Christ called?',
    answers: ['holygrail'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The first skyscraper in the United States was built in which city?',
    answers: ['chicago'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The latin word for lips is:',
    answers: ['labia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This cell organelle is responsible for protein production?',
    answers: ['ribosome'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What chemical compound causes pain in muscles after exercise?',
    answers: ['lacticacid'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The national bird of India is the?',
    answers: ['peacock'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the birthstone for February?',
    answers: ['amethyst'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the body part that separates the abdomen from the thorax?',
    answers: ['diaphragm'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Linen is obtained from the fibers of what plant?',
    answers: ['flax'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The leaves of the tomato plant are poisonous, they contain ________',
    answers: ['strychnine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This plant has leaves with delicate trigger hairs, allowing it to sense and trap insects.',
    answers: ['venusflytrap'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This spikey succulent, native of Africa, is often an additive in creams and lotions.',
    answers: ['aloevera'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What gives leaves their colour ?',
    answers: ['chlorophyll'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the term for a tree which sheds its foliage at the end of the growing season?',
    answers: ['deciduous'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the term for the group of plants that catch and digest insects?',
    answers: ['carnivorous'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Why is the Empire State Building so called?',
    answers: ['itsintheempirestate'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This brand boasts 57 varieties?',
    answers: ['heinz'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Fat Albert and friends was created by ...... ?',
    answers: ['billcosby'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Tarzan had a chimpanzee, what was his name?',
    answers: ['cheetah'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Peter Parker\'s secret identity?',
    answers: ['spiderman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of Yogi Bear\'s best freind',
    answers: ['booboo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of Barney and Betty Rubble\'s son?',
    answers: ['bambam'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Mel Blanc, the voice of Bugs Bunny, was allergic to what?',
    answers: ['carrots'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Mickey Mouse is known as what in Italy?',
    answers: ['topolino'],
    category: 'Needs to be categorised',
  },
  {
    question: 'After how many years marriage do you celebrate your emerald wedding anniversary',
    answers: ['55'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the chort for of ctc stand for?',
    answers: ['caretochat'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Ascorbic acid is commonly reffered to as Vitamin - ?',
    answers: ['c'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Chemical Element Pa?',
    answers: ['protactinium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Coal is predominantly made up of this element.',
    answers: ['carbon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Electrum is a natural alloy of gold and what other metal?',
    answers: ['silver'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He founded our modern periodic table. Surname only?',
    answers: ['mendeleev'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In organic chemistry nomenclature, the prefix \"meth\" means how many atoms of carbon?',
    answers: ['one'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Peanuts are one of the ingredients of?',
    answers: ['dynamite'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The atomic weights in the periodic table are stated in proportion to the weight of what element, with atomic number 6?',
    answers: ['carbon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The chemical compound sodium chloride is often sprinkled on food before ingestion. What is it\'s common name?',
    answers: ['salt'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This Latin word meaning \"iron\" is the reason for iron\'s modern day chemical symbol (Fe).',
    answers: ['ferrum'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What chemical element gets is name from the greek word meaning \'stranger\'?',
    answers: ['xenon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What element is represented by the symbol W?',
    answers: ['tungsten'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What foul smelling compound is commonly known as rotten egg gas?',
    answers: ['hydrogensulphide'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the chemical element Pa?',
    answers: ['protactinium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the chemical symbol for californium?',
    answers: ['cf'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the chemical symbol for curium?',
    answers: ['cm'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the chemical symbol for einsteinium?',
    answers: ['es'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the chemical symbol for lead?',
    answers: ['pb'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the chemical symbol for mercury?',
    answers: ['hg'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the chemical symbol for radium?',
    answers: ['ra'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the chemical symbol for radon?',
    answers: ['rn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the chemical symbol for tungsten?',
    answers: ['w'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the heaviest of the naturally occuring Noble gases?',
    answers: ['radon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the modern name for Plumbum?',
    answers: ['lead'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the most reactive element?',
    answers: ['fluorine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the symbol for Iron?',
    answers: ['fe'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Whats the chemical symbol for Helium ?',
    answers: ['he'],
    category: 'Needs to be categorised',
  },
  {
    question: 'When traces of a calcium compound are held in a bunsen flame, the colour of the flame changes to ...?',
    answers: ['red'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Russian chemist (1834-1907) founded our modern periodic table?',
    answers: ['dmitryivanovichmendeleyev'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which chemical element is represented by the symbol Pa?',
    answers: ['protactinium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which chemical element was foremerly known as the latin \"Kalium\", hence bears the symbol \"K\"?',
    answers: ['potassium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which isotope of carbon is used for dating (give number) ?',
    answers: ['14'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which substance has the chemical formula  H3PO4?',
    answers: ['phosphoricacid'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which substance has the chemical formula H2SO4?',
    answers: ['sulfuricacid'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which substance has the chemical formula HCl?',
    answers: ['hydrochloricacid'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which substance has the chemical formula HNO3?',
    answers: ['nitricacid'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which substance has the chemical formula NaOH?',
    answers: ['sodiumhydroxide'],
    category: 'Needs to be categorised',
  },
  {
    question: 'According to popular belief brides walk to the what in the church? (not the aisle)',
    answers: ['thenaveofthechurch'],
    category: 'Needs to be categorised',
  },
  {
    question: 'To make Drambuie, you add some honey to what type of whiskey?',
    answers: ['scotch'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Vodka or gin, ____ juice and sugar make a gimlet.',
    answers: ['lime'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What percentage of Antarctica is ice?',
    answers: ['nintyeight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A meaningless distraction is a ... herring.',
    answers: ['red'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many is a baker\'s dozen?',
    answers: ['thirteen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is often referred to as \"the oldest profession\"?',
    answers: ['prostitution'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does DMA stand for?',
    answers: ['directmemoryaccess'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the acronym COBOL stand for?',
    answers: ['commonbusinessorientedlanguage'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Linux is a clone of what operating system?',
    answers: ['unix'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does ASCII stand for?',
    answers: ['americanstandardcodeforinformationinterchange'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does CR-ROM stand for?',
    answers: ['compactdiskreadonlymemory'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does bit stands for?',
    answers: ['binarydigit'],
    category: 'Needs to be categorised',
  },
  {
    question: 'At the outbreak of WWI what country\'s airforce consisted of only 50 men?',
    answers: ['unitedstates'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who owns Weight Watchers?',
    answers: ['heinzfoods'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What term is given to the center of a black hole?',
    answers: ['singularity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'A Brief History of Time\'?',
    answers: ['stephenhawking'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country has the highest kidnapping rate?',
    answers: ['colombia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A chinese imperial dragon has how many toes?',
    answers: ['five'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the monetary unit of Malaysia?',
    answers: ['ringgit'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From which country is UN Secretary General Kofi Annan?',
    answers: ['ghana'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country is the importation of bubble gum illegal?',
    answers: ['singapore'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A catalogue of words and synonyms.',
    answers: ['thesaurus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'An iron hook with a handle used for landing large fish.',
    answers: ['gaff'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The practice of women taking more than one husband is called?',
    answers: ['polyandry'],
    category: 'Needs to be categorised',
  },
  {
    question: '-isms: A psychological disorder marked by self absorption, short attention span and an inability to treat others as people.',
    answers: ['autism'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A form of government where the ruler is the absolute dictator, unhindered by laws or constitutional government.',
    answers: ['totalitarianism'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Barbie`s full name?',
    answers: ['barbaramillicentroberts'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What spirit is added to brandy to make a sidecar?',
    answers: ['cointreauortriplesec'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Heroin is derived from which plant?',
    answers: ['opiumpoppy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does LED stand for?',
    answers: ['lightemittingdiode'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Magician walked through the great wall of china?',
    answers: ['davidcopperfield'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is know as \'The Greatest Show On Earth\'?',
    answers: ['barnum&baileycircus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the longest running musical in Broadway history?',
    answers: ['cats'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the world\'s largest insect?',
    answers: ['goliathbeetle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country is the world\'s biggest gold producer?',
    answers: ['southafrica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'by what name is Allen Konigsberg better known?',
    answers: ['woodyallen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'where is the comemoration statue of fictional character Sherlock holems?',
    answers: ['bakerstreet,london'],
    category: 'Needs to be categorised',
  },
  {
    question: 'French farmers get help from this barnyard animal to dig out truffles.',
    answers: ['pig'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many buttons does a double breasted suit have?',
    answers: ['six'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On which item of clothing are the letters YKK often found?',
    answers: ['zipper'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which President weighed 352 pounds?',
    answers: ['taft'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the Pink panter in the Pink Pather film?',
    answers: ['adiamond'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Citizen Kane\'s first name?',
    answers: ['charles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first James Bond Film?',
    answers: ['dr.no', 'drno'],
    category: artsandentertainment,
  },
  {
    question: 'Who play Captian Jean-Luc Picard in Star Trek the Next Generation?',
    answers: ['patrickstewart'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played the Agent james Bond in the 1966 film \'Casino Royale\'?',
    answers: ['davidniven'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote and preformed the soundtrack for Live and let die?',
    answers: ['paulmccartneyandwings'],
    category: 'Needs to be categorised',
  },
  {
    question: 'what is the only X Rated film to have won the best film Oscar?',
    answers: ['midnightcowboy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is James Bonds Recurring Foe?',
    answers: ['ernststavroblofeld'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many stars are there on Brazil\'s flag?',
    answers: ['twentythree'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Lebanese flag bears which tree?',
    answers: ['cedar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the correct name for the Union Jack Flag?',
    answers: ['theunionflag'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Ethanoic (or acetic) acid is the major constituent of which everyday condiment?',
    answers: ['vinegar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'These beans are the most often used in the production of bean sprouts.',
    answers: ['mungbeans'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This spiny fruit with a pungent odor and rich yellow flesh is considered \"The King of Fruits\" by many southeast asians.',
    answers: ['durian'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the animal product used in the making of the Italian dessert \'cassata\'?',
    answers: ['eggwhite'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which fruit has the most calories per gram?',
    answers: ['avocado'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From which country does the \'lassi\' originate?',
    answers: ['india'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Tequila is made from an extract of which species of cactus?',
    answers: ['agave'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The agave cactus is the source of which liquor?',
    answers: ['tequila'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What colour is caffine?',
    answers: ['white'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name given to the watery part of milk left after making cheese?',
    answers: ['whey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In snooker, how many points are accumulated in a perfect break?',
    answers: ['onehundredandfortyseven'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the game of chess, which piece has the most freedom to move?',
    answers: ['queen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This chess term means \"in passing\"',
    answers: ['enpassant'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are a cheesboard\'s vertical rows called?',
    answers: ['files'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are a chessboard\'s horizontal rows called?',
    answers: ['ranks'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This weapon lends its name to a type of woman\'s shoe with a slender, tapered high-heel.',
    answers: ['stiletto'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is this sign called \"*\"?',
    answers: ['asterisk'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many lines make up a number on a digital clock?',
    answers: ['seven'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many stars on the european union flag?',
    answers: ['12'],
    category: 'Needs to be categorised',
  },
  {
    question: 'If you were in a bar and someone gave you a \'mickey Finn\' what would you be drinking?',
    answers: ['adruggeddrink'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This Toy is based on a Filipino Hunters Weapon what is it?',
    answers: ['yoyo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country had RCH on its cars?',
    answers: ['chile'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the distress signal SOS stand for?',
    answers: ['saveoursouls'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a Digamy?',
    answers: ['asecondlegalmarriage'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a Googol?',
    answers: ['thelargestnamednumber'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a Gopak?',
    answers: ['arussiandance'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the purple ink used to stamp meat made from?',
    answers: ['darkgrapeskins'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented the ball point pen?',
    answers: ['laszloandgeorgbiro'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is Bibendum better known as?',
    answers: ['themichelinman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what country is The Blue Lagoon?',
    answers: ['iceland'],
    category: scienceandgeography,
  },
  {
    question: 'In which country would you find the spectacular rock formation known as The Three Sisters?',
    answers: ['australia'],
    category: 'Needs to be categorised',
  },
  {
    question: '\"Yellow River\" is the common name for which Chinese river?',
    answers: ['hwangho'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Alba is the Celtic name for what country?',
    answers: ['scotland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many time zones are there in China?',
    answers: ['one'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In total, how many provinces and territories are there in Canada?',
    answers: ['thirteen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what Province Is Dublin?',
    answers: ['leinster'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what US state is Panama City?',
    answers: ['florida'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what country is the currency named after the water being called the Pula?',
    answers: ['botswana'],
    category: scienceandgeography,
  },
  {
    question: 'In which country is K2, the second-highest mountain in the world, located?',
    answers: ['pakistan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country would you find Angkor Wat?',
    answers: ['cambodia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which state is the source of the Mississippi River?',
    answers: ['minnesota'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Jakarta is located on which Indonesian island?',
    answers: ['java'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Located above and just below the Arctic Circle, this region became an official territory of Canada in April 1999.',
    answers: ['nunavut'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Monaco has the same flag as what other country?',
    answers: ['indonesia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the highest mountain in Africa.',
    answers: ['mt.kilimanjaro'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Near what major city is Mount Fuji?',
    answers: ['tokyo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Andaman Islands belong to which country?',
    answers: ['india'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The City of Fireze is better known is english as what?',
    answers: ['florence'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Indus River flows through which country?',
    answers: ['pakistan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Palk Strait runs between which two countries?',
    answers: ['indiaandsrilanka'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The island of Hispaniola consists of the Dominican Republic and this country.',
    answers: ['haiti'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This Moslem republic in asia was formerly part of India.',
    answers: ['pakistan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This country is divided into two parts: Sabah and Sarawak on the island of Borneo, and a peninsula north of Singapore.',
    answers: ['malaysia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This coutry holds the distinction of being the least densely populated in the world.',
    answers: ['mongolia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the longest mountain chain in the world.',
    answers: ['andes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This mountain, found in the California Cascades, is famous for it\'s twin peaks?',
    answers: ['mountshasta'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This mountain, found in the California Cascades, is famous for it\'s twin peaks?',
    answers: ['mountshasta'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Vilnius is the capital of which country?',
    answers: ['lithuania'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What \'I\' was once Mesopotamia?',
    answers: ['iraq'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What 2 countries have square flags?',
    answers: ['switzerlandandthevatican'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What American state has a Thames river?',
    answers: ['connecticut'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What US Citys name means \'straits\' or \'channel\'?',
    answers: ['detroit'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What US state has the most tornadoes on average?',
    answers: ['texas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What color are French Letter Boxes?',
    answers: ['yellow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country has a birth rate of 0?',
    answers: ['thevaticancity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country has the world\'s most southerly city?',
    answers: ['chile'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is South America\'s highest peak in the Andes, Argentina?',
    answers: ['aconcagua'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is capital of Lithuania?',
    answers: ['vilnius'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is capital of Ukraine?',
    answers: ['kiev'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the capital city of New Zealand?',
    answers: ['wellington'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the capital of Brazil?',
    answers: ['brasilia'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Croatia?',
    answers: ['zagreb'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Estonia?',
    answers: ['tallin'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Guam?',
    answers: ['agana'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Hawaii?',
    answers: ['honolulu'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Honduras?',
    answers: ['tegucigalpa'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Madagascar?',
    answers: ['antananarivo'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Moldova?',
    answers: ['kishinev'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Nicaragua?',
    answers: ['managua'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Wales?',
    answers: ['cardiff'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Wales??',
    answers: ['cardiff'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of the Italian province Lazio?',
    answers: ['rome'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capitol of Iceland?',
    answers: ['reykjavik'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the highest mountain in Europe?',
    answers: ['montblanc'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the highest mountain in the Appalachian range?',
    answers: ['mt.mitchell'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the highest mountain in the world?',
    answers: ['mounteverest'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the highest point in South America?',
    answers: ['aconcagua'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the highest waterfall in the USA?',
    answers: ['yosemite'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the largest island in the Caribbean?',
    answers: ['cuba'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the largest island in the East Indies?',
    answers: ['borneo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the largest island in the Indian Ocean?',
    answers: ['madagascar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the largest island in the Mediterranean?',
    answers: ['sicily'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the largest island in the Philippines?',
    answers: ['luzon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the largest island in the world?',
    answers: ['greenland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the largest lake in Europe?',
    answers: ['lakelagoda'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the largest natural lake found in Africa?',
    answers: ['lakevictoria'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the largest of the pyramids in Egypt?',
    answers: ['cheops'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the longest mountain range in the world?',
    answers: ['andes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the longest river in Australia?',
    answers: ['darling'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the famous large coral reef located off the coast of northeastern Australia?',
    answers: ['greatbarrierreef'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the large natural landmark in northern Australia also known as Uluru?',
    answers: ['ayersrock'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the mountain chain separating most of Spain from France?',
    answers: ['pyrenees'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the only country in the world whose name starts with \'O\'?',
    answers: ['oman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the second highest peak in Africa?',
    answers: ['mt.kenya'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the world\'s longest concrete dam?',
    answers: ['grandcouleedam'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What two US states are rectangular?',
    answers: ['coloradoandwyoming'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the former name of Thailand?',
    answers: ['siam'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the hightest mountain in the world before the discovery of everest?',
    answers: ['mounteverest'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What\'s the capital of Poland?',
    answers: ['warsaw'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is Dogger Bank?',
    answers: ['thenorthsea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the original London Bridge located?',
    answers: ['lakehavasu,'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the tallest building in the world?',
    answers: ['kualalumpur,malaysia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which city is home to the 4th largest pyramid in the world?',
    answers: ['lasvegas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the only South East Asian country that is a member of the British Commonwealth?',
    answers: ['malaysia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the only land-locked country in South East Asia?',
    answers: ['laos'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which river produces the most sediment?',
    answers: ['yellowriver'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which sea is located between Australia and New Zealand?',
    answers: ['tasman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is regarded as the most influential monarch of Russian Romanov Dynasty?',
    answers: ['peteri'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Wracked by heavy monsoon rains 3 to 4 months of the year, this is the wettest and most flood-prone nation in Asia.',
    answers: ['bangladesh'],
    category: 'Needs to be categorised',
  },
  {
    question: 'if you climbed the Euromast what country would you be in?',
    answers: ['rotterdam'],
    category: 'Needs to be categorised',
  },
  {
    question: 'in what country do people speak the Language they call Nihongo?',
    answers: ['japan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'what country has the highest per capita tea consumption?',
    answers: ['ireland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'what country has the oldest constitution that still exists?',
    answers: ['america'],
    category: 'Needs to be categorised',
  },
  {
    question: 'what river separates the city of Florence?',
    answers: ['arno'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the second highest peak in Mexico?',
    answers: ['popocatepetl'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A line that touches a circle at only one point is called a ....... ?',
    answers: ['tangent'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A line that touches a circle at two points is called a .....',
    answers: ['chord'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many degrees in an interior angles of an equilateral triangle?',
    answers: ['sixty'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many faces does a dodecahedron have?',
    answers: ['twelve', '12'],
    category: scienceandgeography,
  },
  {
    question: 'The longest side in a right-angled triangle is called the .......',
    answers: ['hypotenuse'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The volume of which solid is given by the formula 4/3(pi)r^3?',
    answers: ['sphere'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name given to a quadrilateral with one, and only one, pair of sides parallel to each other?',
    answers: ['trapezium'],
    category: 'Needs to be categorised',
  },
  {
    question: '\"deinos\" and \"sauros\" roughly translate to?',
    answers: ['terriblelizard'],
    category: 'Needs to be categorised',
  },
  {
    question: 'After the fall of the iron curtain, Russian leader Mikhail Gorbachev introduced a period of restructuring known as ________.',
    answers: ['perestroika'],
    category: 'Needs to be categorised',
  },
  {
    question: 'After the fall of the manchu dynasty, there existed three political parties in china: The KMT, Nationalists and The ...... ?',
    answers: ['communists'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Also known as the \'Isle of Apples\', Christ and Joseph of Aramathea travelled here in ancient times.',
    answers: ['avalon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Elizabeth I was the daughter of which king?',
    answers: ['henryviii'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Gangster Al Capone, boss of the Chicago underworld, was finally gaoled for 11 years for what crime?',
    answers: ['taxevasion'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many presidents of the United States fought in the Civil War?',
    answers: ['six'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In 1959, Tibet was invaded by which country?',
    answers: ['china'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what war did the jet fighters first battle each other?',
    answers: ['thekoreanwar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which English town was William Shakespeare born?',
    answers: ['stratford-upon-avon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which war did Florence Nightingale earn her reputation ?',
    answers: ['crimeanwar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Near which Belarus City did the biggest ever tank battle take place during WWII?',
    answers: ['kursk'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Queen Cleopatra proclaimed herself to be which Egyptian goddess?',
    answers: ['isis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Ritchie Valens and The Big Bopper were killed in a plane crash in 1959. Which other famous singer was killed in that crash?',
    answers: ['buddyholly'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Rorke\'s Drift was a battle in which war?',
    answers: ['thezuluwar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Sir Stamford Raffles founded which minor Asian nation?',
    answers: ['singapore'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The American M4 tank is better known as what?',
    answers: ['theshermantank'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Greek army under Leonides was annihilated here by Persians in 480BC.',
    answers: ['thermopylae'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The _____ universe was replaced by the Copernican universe.',
    answers: ['ptolemic'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The birthplace of Napoleon, also the capital of Corsica, is?',
    answers: ['ajaccio'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The massacre at Kent State occurred as students protested the bombing of Cambodia and the _____ war.',
    answers: ['vietnam'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The three buildings of the Acropolis are the Propylaea, the Erectheum, and the _________.',
    answers: ['parthenon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'These fighters always began a bout by saying, \"Hail Emperor, those about to die salute you.\"?',
    answers: ['gladiators'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This Chinese dynasty lasted from 1368 to 1644.',
    answers: ['ming'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This European war was named after a peninsula between the Black sea and the sea of Azov?',
    answers: ['crimeanwar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This European war was named after a peninsula between the Black sea and the sea of Azov?',
    answers: ['crimeanwar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This U.S. President suffered from polio during WWII.',
    answers: ['franklindroosevelt'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What American city was called New Amsterdam in the early 17th century?',
    answers: ['newyork'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Venetian traveler and explorer landed in China and reached Kublai Khan\'s court in 1275?',
    answers: ['marcopolo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What city holds the distinction of opening the world\'s first public library in 1747?',
    answers: ['warsaw,poland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What colour was added to the French flag during the French revolution?',
    answers: ['white'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Anne Boleyn have three of?',
    answers: ['breasts'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Julius Caesar cross to signal a revolt against the senate?',
    answers: ['rubikon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Napoleon have built to commemorate his victories?',
    answers: ['arcdetriomphe'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What do historians call the journey made by Mao to the Northwest of China after Chiang Kai-Shek had driven his forces out of the South and East?',
    answers: ['thelongmarch'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the former name of Sri Lanka?',
    answers: ['ceylon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the German Officer who lived and died in Madrid and rescued Mussolini?',
    answers: ['ottoskorzeny'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What treaty, signed in 1713, ended the War of the Spanish Succession?',
    answers: ['treatyofutrecht'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Europe\'s first super-high-speed passenger train powered by?',
    answers: ['electricity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Operation Sea Lion in WWII?',
    answers: ['theinvasionofbritian'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was name of the Titanic\'s sister ship?',
    answers: ['lucitania'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the initial capital of USSR?',
    answers: ['leningrad'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the last Port of call for the Titanic?',
    answers: ['queenstown'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the most Eastern country in Alexander The Great\'s command at his peak?',
    answers: ['india'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name given to the atom bomb that was dropped on Hiroshima?',
    answers: ['fatman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What were \'Little Boy\' and \'Fat Man\'?',
    answers: ['atombombs'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where did the battle of Waterloo take place?',
    answers: ['belgium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where did the most famous encirclement of the Nazi troops during WWII take place?',
    answers: ['stalingrad'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the infamous Lubjanka prison?',
    answers: ['moscow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which English King issued the Magna Carta in 1215?',
    answers: ['kingjohn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country ruled Cambodia immediately before WWII?',
    answers: ['france'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which island was Napoleon from?',
    answers: ['corsica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which poisonous concoction was Socrates given to drink to carry out his death sentence?',
    answers: ['hemlock'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which police-dog was one of Stalin\'s favourites?',
    answers: ['berya'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who denounced Stalin?',
    answers: ['nikita'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who did Henry VIII marry when he was 18?',
    answers: ['catharineofaragon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who discovered the tomb of Tutankhamen?',
    answers: ['howardcarter'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented the record player ?',
    answers: ['thomasalvaedison'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is Prince Vladimir Tepes better known as?',
    answers: ['dracula'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who outlawed gladiator sports in Rome?',
    answers: ['caesar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who ruled England at the time of Shakespeare?',
    answers: ['elizabethi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who shot President James Garfield?',
    answers: ['charlesguiteau'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was Henry VIII\'s second wife?',
    answers: ['anneboleyn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the Taj Mahal built in memory of?',
    answers: ['mumtajmahal'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the father of Elizabeth I?',
    answers: ['henryviii'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the last American president to sport facial hair?',
    answers: ['taft'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the man convicted of masterminding the 1969 LaBianca-Tate murders, later to become known as the Helter Skelter killings?',
    answers: ['charlesmanson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the most famous leader of the Carthagenians?',
    answers: ['hannibal'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the mother of Elizabeth I?',
    answers: ['anneboleyn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Whose army did Admiral Nelson defeat at the battle of Trafalgar?',
    answers: ['napoleon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which light wood is commonly used for making aeromodels?',
    answers: ['balsa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who directed \"Jurassic Park III?\"',
    answers: ['joejohnston'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Drill a hole into/a crude uncouth person (answer in the form of word1/word2)?',
    answers: ['bore/boor'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Scram!/foot apparel (answer in form of word1/word2)',
    answers: ['shoo/shoe'],
    category: 'Needs to be categorised',
  },
  {
    question: 'To save up as for future use/a vast multitude (answer in the form of word1/word2)?',
    answers: ['hoard/horde'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote mIRC?',
    answers: ['khaledmardam-bey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does FTP stand for?',
    answers: ['filetransferprotocol'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the acronym HTML stand for?',
    answers: ['hypertextmarkuplanguage'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is IRC an acronym for?',
    answers: ['internetrelaychat'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did john logie baird invent in 1925?',
    answers: ['television'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Indifference to pleasure of pain; Grrek philosophical system following the teachings of Zeno?',
    answers: ['stoicism'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Speaking of G.B. Shaw, he originally adhered to a form of communism called?',
    answers: ['fabianism'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The social and philosophic creedo of Irish playwright George Bernard Shaw is called:',
    answers: ['shavianism'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was originally called the Chinese gooseberry?',
    answers: ['kiwi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How do you say \"I Love You\" in German?',
    answers: ['ichliebedich'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the Greek root word \'chrom\' mean?',
    answers: ['color'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the first letter in the Greek alphabet?',
    answers: ['alpha'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the last letter in the Greek alphabet?',
    answers: ['omega'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the official language of Senegal?',
    answers: ['french'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the only english word that contains all the vowels in alphabetical order?',
    answers: ['facetious'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From which language does the term \'Mayday\' come?',
    answers: ['french'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Scots call it \'shinty\' - what do Canadians and Americans call it?',
    answers: ['hockey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which word means \"profound boredom\" in both french and english?',
    answers: ['ennui'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This defense is also know as compulsion by threat.',
    answers: ['duress'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of the Lady Godiva\'s horse?',
    answers: ['aethenoth'],
    category: 'Needs to be categorised',
  },
  {
    question: '\"Now is the winter of our discontent\" is a line from which Shakespearian play?',
    answers: ['richardiii'],
    category: 'Needs to be categorised',
  },
  {
    question: 'According To \"The Hitchhikers Guide To The Galaxy\" what number is the answer to everything?',
    answers: ['fortytwo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Author of \"The Lighthouse\" and \"Eminent Victorians\"?',
    answers: ['virginiawoolf'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Author of such works as Gravity\'s Rainbow, V, The Crying of Lot 49 and most recently, Mason & Dixon?',
    answers: ['thomaspynchon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Bob Kane created who?',
    answers: ['batman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Faulkner penned this book with 4 distinctive sections: the Benjy section, Quentin\'s section, Jason and then Dilsey\'s sections.',
    answers: ['thesoundandthefury'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From which of Shakespeare\'s plays is this line: \"All the world\'s a stage...\"',
    answers: ['asyoulikeit'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He penned the founding novel of the utopian genre, \"Utopia.\"?',
    answers: ['sirthomasmore'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He wrote Ulysses, Giacomo Joyce, Dubliners and Finnegans Wake, among others.',
    answers: ['jamesjoyce'],
    category: 'Needs to be categorised',
  },
  {
    question: 'His many Romantic odes include \'Ode to Melancholy\' and \'Ode to a Graecian Urn\'',
    answers: ['johnkeats'],
    category: 'Needs to be categorised',
  },
  {
    question: 'His many Romantic odes include Ode to Melancholy and Ode to a Graecian Urn?',
    answers: ['keats'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In HG Wells \"The Time Machine,\" two races of the future are the child-like Eloi, and the underground monsters called the ____?',
    answers: ['morlocks'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In What book would you find a Hefalump?',
    answers: ['winniethepooh'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the author of \'The Catcher in the Rye\'',
    answers: ['j.d.salinger'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the author of his famous and only novel \'Doctor Zhivago\', which presents a panoramic view of Russian society at the time of the 1917 Revolution.',
    answers: ['borispasternak'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Sherlock Holmes lived at 221b ..... street?',
    answers: ['baker'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The ____ ____ school of poetry includes poets such as Frank O\'Hara, John Ashbery and Kenneth Koch',
    answers: ['newyork'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The ____ generation included such authors as Jack Kerouac, William S. Burroughs and Allen Ginsburg.',
    answers: ['beat'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The fallacy of personifying inanimate objects, often in bad taste?',
    answers: ['patheticfallacy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The two races in HG Well\'s \"The Time Machine\" are the child-like Eloi and the subterannean ______?',
    answers: ['morlocks'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This Romantic poet and husband to Mary Shelley drowned in a boating accident.',
    answers: ['percybyssheshelley'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This Romantic poet and wife of Mary Shelley drowned in a boating accident?',
    answers: ['percybyssheshelley'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This book, Oscar Wilde\'s only novel, was used as evidence in his sodomy trial?',
    answers: ['thepictureofdoriangray'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This early American statesman and inventor wrote the book, \"Fart proudly\"?',
    answers: ['benjaminfranklin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the choice and arrangement of words and phrases in a literary work. It is the vocabulary that the author, poet or playwright uses to create style and effect in a piece of writing?',
    answers: ['diction'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Irish playwright and author, wrote \"The Importance of Being Ernest\" and \"A Picture of Dorian Grey\" among others?',
    answers: ['oscarwilde'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Was Sherlock Holmes\' 7% solution in \'The Sign of Four\'?',
    answers: ['cocaine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What famous character did Edgar Rice Burroughs create?',
    answers: ['tarzan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What famous character did Edgar Rice Burroughs create?',
    answers: ['tarzan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is an Icelandic epic called?',
    answers: ['saga'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of Hamlet\'s tragic admirer?',
    answers: ['ophelia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the main character in Homer\'s Odyssey?',
    answers: ['odysseus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the opposite of an utopia?',
    answers: ['dystopia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What play by Shakespeare features the following characters: Cornwall, Gloucester, Regan, and Goneril?',
    answers: ['kinglear'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Dante\'s last name?',
    answers: ['alighieri'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was sherlock holmes most famous novel?',
    answers: ['thehoundofthebaskervilles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the sequel to Louisa May Alcott\'s \"Little Women\"?',
    answers: ['littlemen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Shakesperian play features the line \"Now is the winter of our discontent\"?',
    answers: ['richardiii'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which US author penned the novels \"Of Mice and Men\" and \"East Of Eden\"?',
    answers: ['johnsteinbeck'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which US dramatist was once married to Marylin Monroe and penned the plays \"Death Of A Salesman\" and \"The Crucible\"?',
    answers: ['arthurmiller'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which poet, in his \"Elegy Written in a Country Churchyard\" told us that \"Full many a flower is born to blush unseen / And waste its sweetnes on the desert air.\"?',
    answers: ['thomasgray'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who created Winnie the Pooh?',
    answers: ['a.a.milne'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is karen Blixen better known as?',
    answers: ['isaakdinesen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the author of \"Brave New World\" ?',
    answers: ['aldoushuxley'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the author of \"Harry Potter\" ?',
    answers: ['joanrowling', 'jkrowling', 'jk.rowling', 'j.k.rowling', 'rowling'],
    category: artsandentertainment,
  },
  {
    question: 'Who is the protagonist of Milton\'s Paradise Lost?',
    answers: ['satan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who writes the discworld novels?',
    answers: ['terrypratchett'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \"Animal Farm\"?',
    answers: ['georgeorwell'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \"Ten Little Indians?\"',
    answers: ['agathachristie'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \"The Rime of the Ancient Mariner?\"',
    answers: ['samueltaylorcoleridge'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \"The count of Monte-Christo\"?',
    answers: ['dumas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'Rendezvous with Rama\'?',
    answers: ['sirarthurc.clarke'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'The Canterbury Tales\'?',
    answers: ['geoffreychaucer', 'chaucer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'The Great Gatsby\'?',
    answers: ['f.scottfitzgerald'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote \'To Kill A Mockingbird\'?',
    answers: ['harperlee'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote Great Expectations?',
    answers: ['charlesdickens'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote The Canterbury Tales?',
    answers: ['geoffreychaucer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the epic poems, the Iliad and the Odyssey?',
    answers: ['homer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the famous series of Discworld books?',
    answers: ['terrypratchett'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the long religious epic, \"Paradise Lost\"?',
    answers: ['johnmilton'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the threepenny opera?',
    answers: ['bertoltbrecht'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What famous character did Edgar Rice Burroughs create?',
    answers: ['tarzan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'If its 4:45PM on Kathmandu what time is it in Madrid?',
    answers: ['noon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The American Soceity of Magicians has status of being what?',
    answers: ['thelargestmagicorganistation'],
    category: 'Needs to be categorised',
  },
  {
    question: '2 + 5 x 6 = ?',
    answers: ['32'],
    category: 'Needs to be categorised',
  },
  {
    question: '2.7182 is the approximation for which variable used in logarithms?',
    answers: ['e'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Benoit Mandelbrot discovered what mathematical structures?',
    answers: ['fractals'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Solve this: 10*3+2?',
    answers: ['32'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The first antiderivative of acceleration is:',
    answers: ['velocity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name given to a curve that approaches a line, but never quite touches it?',
    answers: ['asymptote'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name given to the number equal to 10 raised to the power of 100?',
    answers: ['a\"googol\"'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is x to the power of zero equal to?',
    answers: ['one'],
    category: 'Needs to be categorised',
  },
  {
    question: 'If you count from 1 to 100, how many 7\'s will you come across?',
    answers: ['20'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is next in the series 1 8 27 ?? 125 216?',
    answers: ['64'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The sulphate of which metal is used to render the alimentary canal opaque to X-rays (symbol Ba)?',
    answers: ['barium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This alkaloid extracted from chincona bark, ______ is commonly used in malaria therapy.',
    answers: ['quinine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This condition characterized by the swelling of the thyroid gland is caused by an iodine deficiency.',
    answers: ['goitre'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is hyperglycemia commonly known as ?',
    answers: ['diabetes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the main component of Brass and Bronze?',
    answers: ['copper'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What metal do you get from Hematite?',
    answers: ['iron'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The valuable blue form of corundum is called:',
    answers: ['sapphire'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the yellow variety of quartz?',
    answers: ['citrine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What metal is the major constituent of Rubies ?',
    answers: ['aluminium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what modified vegetable did Cinderalla travel to the ball in?',
    answers: ['pumpkin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the largest denomination dollar bill issued?',
    answers: ['$100'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the United States at the turn of the century there were how many states (numerical)?',
    answers: ['fortyfive'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many Oscars did Ben Hur win?',
    answers: ['eleven'],
    category: 'Needs to be categorised',
  },
  {
    question: 'John Travolta, Samuel Jackson, Uma Thurman starred in which 1994 Quentin Tarantino film?',
    answers: ['pulpfiction'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Richard Strauss\' majestic overture \"Also Sprach Zarathustra\" was the theme music for which Stanley Kubrick film?',
    answers: ['2001:aspaceodyessy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the Oscar-winning theme song from \"Breakfast at Tiffany\'s\"?',
    answers: ['moonriver'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who directed the movie \"Blade Runner\"?',
    answers: ['ridleyscott'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played the first James Bond?',
    answers: ['seanconnery'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played the lead in the movie \"Braveheart\"?',
    answers: ['melgibson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played the lead in the movie \"Castaway\"?',
    answers: ['tomhanks'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played the lead in the movie \"Erin Brokovich\"?',
    answers: ['juliaroberts'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played the lead in the movie \"Mission Impossible\"?',
    answers: ['tomcruise'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played the lead in the movie \"Snatch\"?',
    answers: ['bradpitt'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played the lead in the movie \"The Mask\"?',
    answers: ['jimcarrey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played the lead in the movie \"The Matrix\"?',
    answers: ['keanureeves'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the first James Bond?',
    answers: ['seanconnery'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who directed \'2001: A Space Odyssey\' and \'A Clockwork Orange\'.',
    answers: ['stanleykubrick'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Before being married to Pamela Anderson what other famous actress was Tommy Lee married to?',
    answers: ['heatherlocklear'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He was the voice of draco the dragon in the movie Dragonheart.',
    answers: ['seanconnery'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many storm troopers were seen in Star Trek?',
    answers: ['none(itwasstarwars)'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the late actor who played Obi-Wan Kenobi in Star Wars?',
    answers: ['alecguiness'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Orson Wells was nominated for four oscars for which legendary movie?',
    answers: ['citizenkane'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Rolling Stones first hit was written by what group?',
    answers: ['thebeatles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Vincent Vega appeared in which movie?',
    answers: ['pulpfiction'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Hannibal Lecter like to eat with liver?',
    answers: ['favabeans'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What movie starred Nicholas Cage and John Travolta, one as a police officer, the other as a villain?',
    answers: ['faceoff'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was John Wayne\'s real name?',
    answers: ['marionmichaelmorrison'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the last movie of the late Brandon Lee?',
    answers: ['thecrow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the original name of \"Little Rascals\"?',
    answers: ['ourgang'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What\'s the name of the Mummy in the film \"The Mummy\"?',
    answers: ['imhotep'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where does young Anakin Skywalker come from?',
    answers: ['tatooine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which actor won Oscars twice for \'best male performance\' in the \'90s?',
    answers: ['tomhanks'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which movie is the highest grossing movie of all time?',
    answers: ['titanic'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who directed citizen kane?',
    answers: ['orsonwelles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who had, next to Samuel Jackson, a leading roll in \'Unbreakable\'?',
    answers: ['brucewillis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played \'The Scorpion King\' in the recent movie \'The Mummy Returns\'?',
    answers: ['dwightjohnson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who plays the lead role in The Usual Suspects?',
    answers: ['kevinspacey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the star of Barberella?',
    answers: ['janefonda', 'fonda'],
    category: artsandentertainment,
  },
  {
    question: 'Who were the 2 lead characters in the movie Life?',
    answers: ['eddiemurphyandmartinlawrence'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who were the rivals of the T-Birds in the movie \"Grease\"?',
    answers: ['scorpions'],
    category: 'Needs to be categorised',
  },
  {
    question: '\'The Who\' had a guiness world record for what?',
    answers: ['loudestband'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A __________ helps to set and maintain your tempo while playing.',
    answers: ['metronome'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A set of graduated steel bars set in a frame and hit with a hammer, used in the orchestra.',
    answers: ['glockenspiel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'An arrangement for five performers is called a:',
    answers: ['quintet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Andre Rieu and the Johann Strauss Orchestra are famous for what musical love piece',
    answers: ['romeoandjuliet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Band: \" ......... And the Bad Seeds\"',
    answers: ['nickcave'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Band: Elvis Costello and the ........... ?',
    answers: ['attractions'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Beethoven\'s Sixth Symphony shares it\'s popular name with a method of animal farming. What is it?',
    answers: ['pastoral'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Composer of the Brandenburg Concerti: J.S. ----',
    answers: ['bach'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He wrote the operas \"The Magic Flute\" and \"The Marriage of Figaro\"',
    answers: ['wolfgangamadeusmozart'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many flats are in the key of B flat major?',
    answers: ['two'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many semitones are there in an octave?',
    answers: ['twelve'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many strings are there on a bass guitar?',
    answers: ['four'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many strings are there on a standard guitar?',
    answers: ['six'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many strings are there on a violin?',
    answers: ['four'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many strings does a harp have?',
    answers: ['47'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many symphonies did Beethoven complete?',
    answers: ['eight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Ian Gillain is the singer for this legendary band',
    answers: ['deeppurple'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In 1962 Chubby Checker had a hit with a pop song and novelty dance that remains famous today. What was that dance?',
    answers: ['thetwist'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the 60s Mokees Song Here comes Tommorow who does Davey Jones say he Loves?',
    answers: ['sandraandmary'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the Gene Pitney how many hours was it from Tulsa?',
    answers: ['24'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which London recording studios did The Beatles record the majority of their work?',
    answers: ['abbeyroad'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Paul Mccartney played these instruments?',
    answers: ['bassguitarandpiano'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Russian modernist Igor ---------',
    answers: ['stravinsky'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Singing without instrumental back up is called what?',
    answers: ['capella'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Hard Rock Cafe is named after a song by what band?',
    answers: ['thedoors'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The initials of the band NIN stand for?',
    answers: ['nineinchnails'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The key of A major has ___ sharps.',
    answers: ['three'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The rolling stones first recorded song was?',
    answers: ['comeon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The standard major scale is also known as the _______ mode.',
    answers: ['ionian'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This band\'s highly original video for \"Whip it,\" characterized by red flower pot hats was criticized for being both sado-masochistic and racist.',
    answers: ['devo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This band\'s highly original video for \"Whip it,\" characterized by red flower pot hats was criticized for being both sado-masochistic and racist?',
    answers: ['devo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This electronic instrument\'s creator was surnamed Moog, and his models are worth a fortune! Other brands include Roland, Korg, and Casio.',
    answers: ['synthesizer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This gypsy swing guitarist nearly had his left hand destroyed by fire as a child?',
    answers: ['djangoreinhardt'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This term means to play crisply, with the notes separated?',
    answers: ['staccato'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This term means to play moderately slow and gracefully?',
    answers: ['adagio'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This term means to play smoothly.',
    answers: ['legato'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This term means to play smoothly?',
    answers: ['legato'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This term means to play smoothly?',
    answers: ['legato'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This was the first video to play on MTV?',
    answers: ['videokilledtheradiostar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'To gradually decrease in volume.',
    answers: ['decrescendo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'To gradually decrease in volume?',
    answers: ['decrescendo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'To gradually decrease in volume?',
    answers: ['decrescendo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'To play music smoothly?',
    answers: ['legato'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Turn, Side and Why does it always rain on me are all songs from what UK band?',
    answers: ['travis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What composer was working on his 10th symphony at the time of his death?',
    answers: ['ludwigvanbeethoven'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What do the initials B.B. stand for in B.B. King\'s name?',
    answers: ['bluesboy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What do the initials of the band NIN stand for?',
    answers: ['nineinchnails'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the Italian term \"poco a poco\" mean?',
    answers: ['littlebylittle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a Hurdy-Gurdy?',
    answers: ['afiddle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the Indian musical instrument made popular in western rock by The Beatles and Ravi Shankar?',
    answers: ['sitar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the term used for \'slowly\' in music?',
    answers: ['lento'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What job was Sting before he was a rock star?',
    answers: ['teacher'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What kind of eyes did the girl in \"Lucy In The Sky With Diamonds\" have?',
    answers: ['kaleidoscope'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Eric Claptons Nick Name?',
    answers: ['slowhand'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first video to be played on MTV?',
    answers: ['videokilledtheradiostar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the last Beatles album to be released before they broke up in 1970?',
    answers: ['letitbe'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name given to the popular genre of rock that arose in the Pacific Northwest (Seattle) in the early 1990s.',
    answers: ['grunge'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Whats the smallest size grand piano?',
    answers: ['ababygrand'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Beatle wrote The Octopus\'s song?',
    answers: ['ringostarr'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which British group holds the record for the album to remain in the US Billboard charts for the longest time?',
    answers: ['pinkfloyd'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which German duo have sold over 85 million records?',
    answers: ['moderntalking'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which band does Eddie Vedder with?',
    answers: ['pearljam'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which band included rock greats Roy Orbison, Tom Petty, George Harrison, and Bob Dylan?',
    answers: ['thetravellingwilburys'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which beatle was the first to release a solo record?',
    answers: ['ringostarr'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which brand of guitar is played by Jimmy Page, Slash, and Brian May?',
    answers: ['gibsonlespaul'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which formber Beatle released the hit single \"My Sweet Lord\"?',
    answers: ['georgeharrison'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which instruments is used to tune the orchestra?',
    answers: ['oboe'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which large tuned orchestral drum is also known as a kettledrum?',
    answers: ['tympani'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which of Beethoven\'s symphonies was the legendary \"Incomplete\"?',
    answers: ['the9thsymphony'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who are the lead singers of the band \"Full Metal Racquets\"?',
    answers: ['johnmcenroeandpatcash'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented the synthesiser ?',
    answers: ['bobmoog'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is Declan Patrick McManus better known as?',
    answers: ['elviscostello'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is Gordon Sumner better known as?',
    answers: ['sting'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is lead guitarist for Guns\'n\'Roses?',
    answers: ['slash'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the autor of the song \'Blue Suede Shoes\'?',
    answers: ['carlperkins'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the lead singer of limp bizkit?',
    answers: ['freddurst'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the lead singer of the Rolling Stones?',
    answers: ['mickjagger'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the lead vocalist of U2?',
    answers: ['bono'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who recorded the 1969 hit \"Space Oddity\"?',
    answers: ['davidbowie'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang \'Mull of Kintyre\'?',
    answers: ['wings'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang Puff The Magic Dragon?',
    answers: ['peter,paulandmary'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang the song \"Pretty Woman?\"',
    answers: ['royorbison'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sings \"Imitation Of Life\"?',
    answers: ['r.e.m.'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the frontman of Nirvana?',
    answers: ['kurtcobain'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote Tubular Bells?',
    answers: ['mikeoldfield'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With which period in music do we associate composers such as Beethoven, Mozart and Haydn?',
    answers: ['classicalperiod'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With which period in music do we associate composers such as Tchaikovsky, Mendelssohn, and Chopin?',
    answers: ['romanticperiod'],
    category: 'Needs to be categorised',
  },
  {
    question: 'With which period in music do we associate with composers such as Bach, Handel and Vivaldi?',
    answers: ['baroqueperiod'],
    category: 'Needs to be categorised',
  },
  {
    question: 'who is Steveland Morris better known as?',
    answers: ['steviewonder'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What dod Pandora Release when she opened the box?',
    answers: ['miseryandevil'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Egyptian Ibis-headed god?',
    answers: ['thoth'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He was condemned in Hades to forever push a boulder uphill, only for it to come rolling down before it reached the top.',
    answers: ['sisyphus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He was the father of Zeus',
    answers: ['cronus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'His wife was Penelope and his son, Telemachus. He was exiled from his home on Ithaca for angering the gods.',
    answers: ['odysseus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'His wife was Penelope and his son, Telemachus. He was exiled from his home on Ithaca for angering the gods?',
    answers: ['odysseus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'His wife was Penelope and his son, Telemachus. He was exiled from his home on Ithaca for angering the gods?',
    answers: ['odysseus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology, who drove the sun across the sky in his chariot?',
    answers: ['helios'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Greek mythology, who was the beautiful young man Echo fell in love with?',
    answers: ['narcissus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Norse myth, there were two separate races of gods: the Aesir gods which included Odin and Thor, and the ____ gods from whom descended Freya.',
    answers: ['vanir'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Norse myth, there were two separate races of gods: the Aesir gods which included Odin and Thor, and the ____ gods from whom descended Freya?',
    answers: ['vanir'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In Norse mythology who was Odin\'s blood-brother?',
    answers: ['loki'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what animal form did Zeus seduce Europa?',
    answers: ['bull'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Roman god of doorways and passages. Two headed deity from which we get the name of one of our months?',
    answers: ['janus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Greek goddess of fertility, also known as a protectress of witches.',
    answers: ['hecate'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Though the touch of gold was removed, Midas was forever cursed by Athena to have the ears of which animal?',
    answers: ['donkey'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Greek muse of dance and choral song?',
    answers: ['terpsichore'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the birthstone for January?',
    answers: ['garnet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the most famous of the rivers in the Underworld, the river of \'Hate\' which dead souls must cross over?',
    answers: ['styx'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of the mythical hero-king who slew Grendal?',
    answers: ['beowulf'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the town that ancient Greeks believed to be the centre of the world, and was the home of a famous oracle?',
    answers: ['delphi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Roman God was the equivalent of the Greek God Dionysus?',
    answers: ['bacchus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Saint killed the dragon?',
    answers: ['george'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the Roman goddess of destiny?',
    answers: ['fortuna'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who killed a dragon in ancient mythology?',
    answers: ['st.george'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the Greek God of prophecy & archery, music & healing, light & truth, agriculture and cattle?',
    answers: ['apollo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What were the \'Golden Apples\' in Greek myth?',
    answers: ['apricots'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How is Venom put into the body?',
    answers: ['bitesorstings'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Animals and plants which produce light are said to be:',
    answers: ['bioluminescent'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a small, flightless bird native to New Zealand?',
    answers: ['kiwi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the only other animal besides humans to have unique prints?',
    answers: ['koalas', 'koala', 'koalabear', 'koalabears'],
    category: scienceandgeography,
  },
  {
    question: 'In roman numerals what does the letter M with a Bar over it stand for?',
    answers: ['onemillion'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Peter Piper picked a peck of what?',
    answers: ['pickledpeppers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The lack of what vitamin causes beriberi (numbness in the hands and feet)?',
    answers: ['b1'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What colour do you get when you mix blue and red together?',
    answers: ['purple'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What colour do you get when you mix blue and yellow together?',
    answers: ['green'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Complete the Palindrome: satan, oscillate my metallic ________',
    answers: ['sonatas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What size is A-0 paper?',
    answers: ['onesquaremeter'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the first element in alphabetical order?',
    answers: ['actinium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the last element in alphabetical order?',
    answers: ['zirconium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In addition to writing novels, Jonathan Swift also wrote social and philosophical commentary. In one satirical piece, \"A Modest Proposal,\" what did he suggest should be made out of the skin of children?',
    answers: ['gloves'],
    category: 'Needs to be categorised',
  },
  {
    question: '-isms: The belief in God as a \"divine clockmaker,\" originating in the age of Enlightenment.',
    answers: ['deism'],
    category: 'Needs to be categorised',
  },
  {
    question: '-isms: This branch of philosophy, characterised by the idea: \"The greatest pleasure and happiness for the greatest number,\" was founded by Jeremy Bentham and James Mill.',
    answers: ['utilitarianism'],
    category: 'Needs to be categorised',
  },
  {
    question: 'After contracting this disease, Friedrich Nietzsche went crazy and eventually died.',
    answers: ['syphilis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As opposed to Plato, this Greek philosopher believed knowledge was a process of observation and classication.',
    answers: ['aristotle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Author of \"The World as Will\" and \"Representation\", pessimistic forbearer of Nietzsche?',
    answers: ['arthurschopenhauer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Book: Thus Spoke _______ (Friedrich Nietzsche)',
    answers: ['zarathustra'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Early deconstructionist, Jacques _____',
    answers: ['derrida'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Epicurus, who believed that pleasure is the highest good, gave us which term synonymous with hedonistic?',
    answers: ['epicurean'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In linguistics, this frenchman presented the concept of the signifier and the signified (surname only)?',
    answers: ['saussare'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what he called his \"Copernican Revolution\" this German philosopher proposed that the mind imposes space time, and causality on nature. He is Immanuel ---- ?',
    answers: ['immanuelkant'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Pessimistic author of The World as Will and Representation. Major influence on Nietzsche.',
    answers: ['arthurschopenhauer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Sartre, Camus and de Beauvoir all belonged to a movement known as ----',
    answers: ['existentialism'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This Greek philosopher believed man is born with all knowledge and life and education are processes of remembering what is forgotten at birth.',
    answers: ['plato'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the working class called in marxist terminology?',
    answers: ['proletariat'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What short book by Niccolo Machiavelli is a collection of rules and principles one must abide by in order to seize and hold power?',
    answers: ['theprince'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What sort of man did Plato propose to rule his \"Republic\"?',
    answers: ['aphilosopherking'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which French philosopher explored existentialist philosophy in his landmark book \"Nausea\" published in 1938?',
    answers: ['jean-paulsartre'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Greek philosopher proposed the Theory of Forms in \"The Republic\"?',
    answers: ['plato'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Ailurophobia is the fear of?',
    answers: ['cats'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Mottephobia is the fear of what?',
    answers: ['moths'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Of what are xenophobics afraid?',
    answers: ['strangers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Ranidaphobia is the fear of what?',
    answers: ['frogs'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Someone who is androphobic has a fear of what?',
    answers: ['men'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The most common phobia, arachnephobia, is a phobia of?',
    answers: ['spiders'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The second most common phobia, anthropophobia, is a fear of?',
    answers: ['people'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Panphopia a fear of?',
    answers: ['everything'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is hippopotomonstrosesquippedaliophobia the fear of?',
    answers: ['longwords'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which French Philosopher used a method of systematic doubt to arrive at his famous conclusion \"Cogito ergo sum\" (I think therefore I am)?',
    answers: ['renedescartes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A piece of glass that separates light into the visible spectrum is called a _____.',
    answers: ['prism'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Absolute zero (zero degrees kelvin) is only theoretical. The lowest laboratory temperature achieved is 280 picoKelvin. In which Scandinavian country was this produced?',
    answers: ['finland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As the speed of a body approaches the speed of light, its mass approaches ........',
    answers: ['infinity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'For what did Pieter Zeeman receive the Nobel prize in Physics?',
    answers: ['zeemaneffect'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Light rays consist of small packets of energy called .....',
    answers: ['photons'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The force perpendicular to the surface of an object which counters the gravitational force?',
    answers: ['normalforce'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The unit of electrical resistance is the .....',
    answers: ['ohm'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Units of frequency?',
    answers: ['hertz'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Units of frequency?',
    answers: ['hertz'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the clear homogeneous liquid portion of a nuclear protoplasm?',
    answers: ['karyolymph'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which colour has highest wavelength in the visible spectrum?',
    answers: ['red'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which particles are emitted by cathode ray tubes?',
    answers: ['electrons'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the biggest mosque in the world?',
    answers: ['madina,saudiarabia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which establishments don\'t have windows or watches?',
    answers: ['casino\'s'],
    category: 'Needs to be categorised',
  },
  {
    question: '\"Scotch pine\", \"Douglas fir\", \"Noble fir\", \"Fraser fir\" are all commonly used as what?',
    answers: ['christmastrees'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Margaret Thatcher was what?',
    answers: ['firstwomanprimeminister'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What title to the Ambassadors of Britian Get given?',
    answers: ['ambassadortothecourtofsaintjames'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the current world population, to the nearest billion?',
    answers: ['six'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A psychological disorder in which the patient refuses to eat.',
    answers: ['anorexianervosa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He developed the theory of the \'collective unconscious\' and was also interested in dream interpretation.',
    answers: ['carlgustavjung'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which behaviorist conducted the \"Little Albert\" experiment?',
    answers: ['johnwatson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many letters does abbreviation have?',
    answers: ['12'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What key is to the right of T on a keyboard?',
    answers: ['y'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What letters are missing from here - abcdeghijlmopqrstuvwxy?',
    answers: ['f,k,n,z'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many points are required to win this quiz?',
    answers: ['30'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Follows the Phrase \'Eye for Eye, Tooth for Tooth\'?',
    answers: ['handforhand,footforfoot'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who Said \"Who controls the past controls the future. Who controls the present controls the past\"?',
    answers: ['georgeorwell'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said  \"The reports of my death are greatly exaggerated.\"?',
    answers: ['marktwain'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said \"For every action there is an equal and opposite reaction\"?',
    answers: ['alberteienstein'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said \"Forgive your enemies, but never forget their names\"?',
    answers: ['johnf.kennedy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said \"That\'s one small step for man, one giant leap for mankind\"?',
    answers: ['neilarmstrong'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said \"The hunger for love is much more difficult to remove than the hunger for bread.\"?',
    answers: ['motherteresa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said \'We\'re not in the hamburger business, we\'re in showbusiness\'?',
    answers: ['raykroc'],
    category: 'Needs to be categorised',
  },
  {
    question: 'who said  \"He who opens a school door, closes a prison\"?',
    answers: ['victorhugo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'who said  \"Religion... is the opium of the masses\"?',
    answers: ['karlmarx'],
    category: 'Needs to be categorised',
  },
  {
    question: 'who said  \"Today Europe tomorrow the world\"?',
    answers: ['adolfhitler'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Of what is \'FM\' an abbreviation?',
    answers: ['frequencymodulation'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which organic compound is the psychoactive ingredient in Budweiser?',
    answers: ['ethanol'],
    category: 'Needs to be categorised',
  },
  {
    question: 'According to the Bible, how many years did Methuselah live?',
    answers: ['969'],
    category: 'Needs to be categorised',
  },
  {
    question: 'According to the Bible, who were the brothers of Jesus?',
    answers: ['jamesandjohn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In theology, the study of final things such as death, judgement and the end of the world is called:',
    answers: ['eschatology'],
    category: 'Needs to be categorised',
  },
  {
    question: 'These wounds of christ mysteriously appear on believers who sometimes weep blood as well.',
    answers: ['stigmata'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This roman soldier pierced the crucified Christ on His side with his spear.',
    answers: ['longinus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What animal\'s meat can a Hindu not eat?',
    answers: ['cow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What animal\'s meat can a Muslim not eat?',
    answers: ['pig'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the 1st book of the Hindu scripture?',
    answers: ['rigveda'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name given to the supreme reality in Hinduism?',
    answers: ['brahman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the field where Christ was crucified?',
    answers: ['calvary'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the shortest verse in the bible? (John 11:35)',
    answers: ['jesuswept.'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first sign shown to Moses by God according to the Bible?',
    answers: ['burningbush'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is referred to in the New Testament as \'the disciple Jesus loved\'?',
    answers: ['john'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Lord\'s Prayer appears in the Bible how many times (written numerically)?',
    answers: ['two'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the Prince of Wales?',
    answers: ['princecharles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Borborygmus?',
    answers: ['stomachnoises'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A scientist who studies reptiles and amphibians is known as a:',
    answers: ['herpetologist'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He is the Most Durable TV Astronomer',
    answers: ['patrickmoore'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the electomagnetic spectrum, what comes between X-rays and Light?',
    answers: ['ultravioletlight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On the Moh Hardness scale what has a hardness of 10?',
    answers: ['diamond'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Sound travels fastest through which state of matter?',
    answers: ['solid'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Carloline Institute of Stockholm won the nobel prize for what?',
    answers: ['physiologyandmedicine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The study of the size, composition and distribution of the human population.',
    answers: ['demography'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What 2 planets do not have moons?',
    answers: ['mercuryandvenus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Einstein get the nobel prize for?',
    answers: ['thephotelectriceffect'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does LPG stands for?',
    answers: ['liquidpetroleumgas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What engery does an Eolic power station?',
    answers: ['windpower'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Cytology the study of?',
    answers: ['thestructureofcells'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the chief constituent of air?',
    answers: ['nitrogen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the second hardest gem after diamond?',
    answers: ['sapphire'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What science does Professor Stephen Hawking study and teach?',
    answers: ['astrophysics'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What two planets dont have moons?',
    answers: ['mercuryandvenus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What would a Conchologist be intrested in?',
    answers: ['shells'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who devised the periodic table of elements?',
    answers: ['mendelev'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who discovered Vitamin C?',
    answers: ['linuspauling'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented the centigrade scale?',
    answers: ['anderscelsius'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the only person two win two nobel prizes?',
    answers: ['mariecurie'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who made the first phone call to the moon?',
    answers: ['richardnixon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'what Vitamin is Thiamine?',
    answers: ['vitaminb1'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which period came after the Triassic Period?',
    answers: ['jurassic', 'jurassicperiod'],
    category: scienceandgeography,
  },
  {
    question: 'Whose ghost appears at the dinner table in \'Macbeth\'?',
    answers: ['banquo\'s'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A \"gyre\" is another term for what shape?',
    answers: ['coil'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Kenny G\'s real surname?',
    answers: ['gorelick'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was Marilyn Monroe\'s given name at birth?',
    answers: ['normajeanmortenson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As light as a .......',
    answers: ['feather'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As old as the .....?',
    answers: ['hills'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As old as the ...?',
    answers: ['hills'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many Astronaughs crewed the Gemini series of Spacecraft?',
    answers: ['two'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Sun is how much more dense than water?',
    answers: ['1.41'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a Blue Moon?',
    answers: ['2ndfullmoonin1month'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the only man-made structure on earth that can been seen from space?',
    answers: ['greatwallofchina'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What lies between mars and jupiter?',
    answers: ['theasteroidbelt'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the first man in space?',
    answers: ['yurigagarin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many hurdles in a 400m hurdle race?',
    answers: ['10'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many pockets on a standard snooker table?',
    answers: ['6'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In american football where is the Orange Bowl?',
    answers: ['miami'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In baseball, how many outs are there in an inning?',
    answers: ['six'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what sport would you find a \'Sukahara\'?',
    answers: ['gymnastics'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country is the famous Maracana stadium?',
    answers: ['brazil'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Polo consists of 8 periods called what?',
    answers: ['chukkers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The greyhound, along with this smaller relative, is used in the sport of coursing?',
    answers: ['whippet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The name of the only weapon in women\'s fencing?',
    answers: ['foil'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The two tire manufacturers in F1 are Bridgestone and ........?',
    answers: ['michelin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This football team was formerly known as the Frankford Yellow Jackets?',
    answers: ['philadelphiaeagles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are a cheesboard\'s vertical rows called?',
    answers: ['files'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are a chessboard\'s horizontal rows called?',
    answers: ['ranks'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are the only two colours a table tennis ball is allowed to be in competitions?',
    answers: ['whiteandyellow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What football team was formerly known as the Frankford Yellow Jackets?',
    answers: ['philadelphiaeagles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is James Naismith best known for?',
    answers: ['inventingbasketball'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What sport do neither participents or spectators know the score until the end?',
    answers: ['boxing'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Whats the main feature of a speedway motorbike?',
    answers: ['nobrakes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which European club has won the most european cups in the 90s?',
    answers: ['acmilan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country was judo developed in?',
    answers: ['japan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which team won the UEFA cup this year?',
    answers: ['liverpool'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which weight division in boxing lies between flyweight and featherweight?',
    answers: ['bantamweight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which weight division in boxing lies between flyweight and featherweight?',
    answers: ['batamweight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who fell behind Roger Maris in 1961 for the homerun record?',
    answers: ['mickeymantle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the first american to win the Formula 1 championship?',
    answers: ['philhill'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the first unseeded player to win Wimbeldon?',
    answers: ['borisbecker'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who won the 2001 FA Cup?',
    answers: ['liverpool'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the international governing board of football (soccer)?',
    answers: ['fifa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Grand Slam tennis event is played on a clay surface?',
    answers: ['frenchopen'],
    category: artsandentertainment,
  },
  {
    question: 'Frown, it is not well regarded.',
    answers: ['worldwrestlingfederation'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many bends in a standard paperclip?',
    answers: ['three'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Every citizen of Kentucky is required by law to take a what once a year?',
    answers: ['bath'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Luxor hotel in Las Vegas has the most powerful what?',
    answers: ['light'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Tinky winky, Dipsy LaLa and Po are know as what?',
    answers: ['theteletubbies'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who played Charlie in Charlies Angels?',
    answers: ['johnforsythe'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the 70s Hit Captain Scarlet and the Mysterons what is the name of the company Scralet works for?',
    answers: ['spectrum'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Josie and the ________',
    answers: ['pussycats'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the name of the restaurant the TV series \"Happy Days\"?',
    answers: ['arnolds'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which TV horse could talk?',
    answers: ['mr.ed'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What colour is the \'Black box\' on commercial planes?',
    answers: ['orange'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does the CAT in CAT-SCAN stand for?',
    answers: ['computerisedaxialtomography'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the Jaguar Car called before 1945?',
    answers: ['ss'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Writer established the three laws of robotics?',
    answers: ['isaacasimov'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the founder of Lotus Cars Ltd.?',
    answers: ['colinchapman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'on aircraft what does VTOL stand for?',
    answers: ['verticaltakeoffandlanding'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The eldest sister in the TV Series Charmed, is played by who?',
    answers: ['shannondoherty'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where does Gonzo from the Muppet Show come from?',
    answers: ['outerspace'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is -459.7 F also know as?',
    answers: ['absolutezero'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the Southeast Asian method of dying fabric using wax to create designs.',
    answers: ['batik'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Michael Jackson caught fire while filming a commercial for which carbonated beverage?',
    answers: ['pepsi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the last word in the New Testament?',
    answers: ['amen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Whats the largest organ in the human body?',
    answers: ['skin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'To the nearest 0.1 km, how many kilometers in a mile?',
    answers: ['1.6'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Gilbert and Sullivan work tells the story of a Japanese emperor who bans flirting?',
    answers: ['themikado'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where do the souls of unbaptised babies go after death, according to Catholocism?',
    answers: ['limbo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where do the souls of unbaptised babies go after death, according to Catholocism?',
    answers: ['limbo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is \'Zulu\' time?',
    answers: ['greenwichmeantime'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the youngest American President',
    answers: ['theodoreroosevelt'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Presidential highway links the towns of Gore and Clinton in which country?',
    answers: ['newzealand'],
    category: 'Needs to be categorised',
  },
  {
    question: 'An adjective meaning \'pertaining to the sun.\'',
    answers: ['solar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How much does a cubic meter of water weigh?',
    answers: ['oneton'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What house was the biggest in america until the Cival war?',
    answers: ['thewhitehouse'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the full name of the flavour enhancer MSG?',
    answers: ['monosodiumglutamate'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what city in Georgia is it illegal to tie a giraffe to a telephone pole or street lamp?',
    answers: ['atlanta'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Roman statues were made with detachable whats, so that one what could be removed and replaced by another?',
    answers: ['heads'],
    category: 'Needs to be categorised',
  },
  {
    question: 'At funerals in ancient China, when the lid of the coffin was closed, mourners took a few steps backward incase their WHAT got caught in the box?',
    answers: ['shadow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The longest one-syllable word in the English language is?',
    answers: ['screeched'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The lowest country in the world is?',
    answers: ['thenetherlands'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Pony, Shot and Jigger are all units to measure what?',
    answers: ['spirits'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said \"The great masses of the people will more easily fall victims to a big lie than to a small one.\"?',
    answers: ['adolfhitler'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who said \"The great masses of the people will more easily fall victims to a big lie than to a small one.\"?',
    answers: ['adolfhitler'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Teddy Roosevelt banned the a what from the White House for environmental reasons?',
    answers: ['christmastree'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which nation has an AK-47 assault rifle on its flag?',
    answers: ['mozambique'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A goldfish has a memory of how many seconds?',
    answers: ['three'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The only river that flows both north and south of the equator is the?',
    answers: ['congo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The only place in the world where one can see the sun rise on the Pacific Ocean and set on the Atlantic is in which country?',
    answers: ['panama'],
    category: 'Needs to be categorised',
  },
  {
    question: '\"Carmine\" is a shade of which color?',
    answers: ['red'],
    category: 'Needs to be categorised',
  },
  {
    question: '\"The Coffee Cantata\" was written by who?',
    answers: ['johannsebastianbach'],
    category: 'Needs to be categorised',
  },
  {
    question: '-isms: Indifference to pleasure of pain; Greek philosophical system following the teachings of Zeno?',
    answers: ['stoicism'],
    category: 'Needs to be categorised',
  },
  {
    question: '-isms: The social and philosophic creedo of Irish playwright George Bernard Shaw is called:',
    answers: ['shavianism'],
    category: 'Needs to be categorised',
  },
  {
    question: '-isms: This 20th century pihlosophical movement with thinkers and writers such as Sartre and Camus is responsible for the Theatre of the Absurd',
    answers: ['existentialism'],
    category: 'Needs to be categorised',
  },
  {
    question: '-isms: This 20th century pihlosophical movement with thinkers and writers such as Sartre and Camus is responsible for the Theatre of the Absurd',
    answers: ['exitentialism'],
    category: 'Needs to be categorised',
  },
  {
    question: '-ologies: Study of the history and development of words?',
    answers: ['etymology'],
    category: 'Needs to be categorised',
  },
  {
    question: '-ologies: Study of the sound system of languages; the analysis and classification of phenomes',
    answers: ['phonology'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A \"gyre\" is another term for what shape?',
    answers: ['coil'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A \"gyre\" is another term for what shape?',
    answers: ['coil'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A catalogue of words and synonyms?',
    answers: ['thesaurus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'A catalogue of words and synonyms?',
    answers: ['thesaurus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'All of the clocks in what movie are stuck on 4:20?',
    answers: ['pulpfiction'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Americans eat approximately 100 acres of what each day?',
    answers: ['pizza'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Arnold Schwarzenegger played Doug Quaid in which 1990 film?',
    answers: ['totalrecall'],
    category: 'Needs to be categorised',
  },
  {
    question: 'As what are male bees also known?',
    answers: ['drones'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Betta Splendens, known for its labrynth gills that allow it to live in small plastic cups, it\'s long bright fins and aggression to males of the same species is also called the:',
    answers: ['siamesefightingfish'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Biology: In Linnaean classifcation, the group which comes directly under Kingdom.',
    answers: ['phylum'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Bob Ayling is the Chief Executive of which British company?',
    answers: ['britishairways'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Bon Jovi and Ritchie Sambora both list this band as their influence?',
    answers: ['thebeatles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Business and Advertising: This brand boasts 57 varieties?',
    answers: ['heinz'],
    category: 'Needs to be categorised',
  },
  {
    question: 'By what name is Salicylic Acid better known as?',
    answers: ['aspirin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Characters such as those in chinese in which a word is represented by a picture, are called:',
    answers: ['ideograms'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Chinchillas bathe in what seemingly paradoxic substance?',
    answers: ['dust'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Clearly the best player on this channel is?',
    answers: ['mingtea'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Crossword Clues: On the sheltered side (4)',
    answers: ['alee'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Crossword Clues: Shriveled-up and dry. (4)',
    answers: ['sere'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Dating back to the 1600s, thermometers were filled with what instead of mercury?',
    answers: ['brandy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Dog Breeds: This small, sausage shaped dog was bred to hunt small underground mammals in their dens.',
    answers: ['dachsund'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Eric Clapton shared a woman with this superb guitarist and songwriter. Later, it inspired his to write Layla.',
    answers: ['georgeharrison'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Famous Lyrics: \"There\'s a lady who knows all that glitters is gold and she\'s _____ _ _____ __ _____\"',
    answers: ['buyingastairwaytoheaven'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Fill in the missing word - balloon____, gold ____, sword ____?',
    answers: ['fish'],
    category: 'Needs to be categorised',
  },
  {
    question: 'For what movie did Humphrey Bogart win his only Oscar?',
    answers: ['theafricanqueen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'From which movie comes the song \"Under the Sea\"?',
    answers: ['littlemermaid'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Grover Cleveland is the only United States president to have been married where?',
    answers: ['whitehouse'],
    category: 'Needs to be categorised',
  },
  {
    question: 'He was the worlds most prolific inventor in the 1970\'s and 1980\'s with inventions such as Calculators, Digital Watch, Home Computer and Pocket Televisions?',
    answers: ['sirclivesinclair'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Homonyms: To burn or char/a prophet or diviner. (answer in the form of word1/word2)',
    answers: ['sear/seer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How did Mork, in \"Mork and Mindy\" say hello?',
    answers: ['nanoonanoo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many US states border an ocean?',
    answers: ['twentythree'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many countries have a life expectancy of over 80 years?',
    answers: ['four(andorra,sanmarino,australia,japan)'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many countries have a life expectancy of over 80 years?',
    answers: ['four(andorra,sanmarino,australia,japan)'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many days do dragon flies live for on average?',
    answers: ['one'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many eyeballs does a four-eyed fish have?',
    answers: ['2'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many frets on a stratocaster?',
    answers: ['twentytwo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many keys are there on a grand piano?',
    answers: ['eightyeight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many prongs are there on a dinner fork?',
    answers: ['4'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How many red stripes are there on the American flag?',
    answers: ['7'],
    category: 'Needs to be categorised',
  },
  {
    question: 'How was the Sword of Damocles suspended?',
    answers: ['fromasinglehair'],
    category: 'Needs to be categorised',
  },
  {
    question: 'If bats are nocturnal and horses diurnal, than coyotes and others animals that roam at the twilight hours and dawn are called:',
    answers: ['crepuscular'],
    category: 'Needs to be categorised',
  },
  {
    question: 'If bats are nocturnal and horses diurnal, then coyotes and others animals that roam at dawn and the twilight hours are called?',
    answers: ['crepuscular'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In a Spanish bar, what are topaz?',
    answers: ['snacks'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In a computer, what is a CPU?',
    answers: ['centralprocessingunit'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In addition to writing novels, Jonathan Swift also wrote social and philosophical commentary. In one satirical piece, \"A Modest Proposal,\" what did he suggest should be made out of the skin of children?',
    answers: ['gloves'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In ancient Rome, it was considered a sin to eat the flesh of what bird?',
    answers: ['woodpecker'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the 1988 film Twins, what were the character names of Arnold Schwarzenneger and Danny De Vito?',
    answers: ['juliusandvincent'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In the song American Pie, who did the word \'jester\' refer to?',
    answers: ['bobdylan', 'dylan'],
    category: artsandentertainment,
  },
  {
    question: 'In what American State is the city of Nevada?',
    answers: ['missouri'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In what movie did Charlie Chaplin first speak on film?',
    answers: ['thegreatdictator'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which 1989 film did Kevin Costner play Ray Kinsella?',
    answers: ['fieldofdreams'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which city is the highest steeple?',
    answers: ['ulm'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which city was Hugh Grant arrested with Divine Brown?',
    answers: ['losangeles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which country were pizzas made first?',
    answers: ['italy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'In which state is Michael Jackson\'s Never Land Ranch?',
    answers: ['california'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Indians eat using which hand?',
    answers: ['right'],
    category: 'Needs to be categorised',
  },
  {
    question: 'International Phonetic Alphabet: C',
    answers: ['charlie'],
    category: 'Needs to be categorised',
  },
  {
    question: 'International Phonetice Alphabet: F',
    answers: ['foxtrot'],
    category: 'Needs to be categorised',
  },
  {
    question: 'International Phonetice Alphabet: N',
    answers: ['november'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Isaac Newton dropped out of school when he was a teenager, at his mother\'s request. She hoped he would become a successful?',
    answers: ['farmer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'It\'s impossible to sneeze with your eyes ....?',
    answers: ['open'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Jim Backus was the voice of Mr. ______?',
    answers: ['magoo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Joan Collins was how old when she posed semi-nude for \"Playboy\" in 1983?',
    answers: ['50'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Lack of Vitamin D results in .... ?',
    answers: ['rickets'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Linen is obtained from the fibers of what plant?',
    answers: ['flax'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Linen is obtained from the fibers of what plant?',
    answers: ['flax'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Literature Scramble: lxrnaadee lzynsshietno (Author of Gulag Archipelago)',
    answers: ['alexandersolzhenitsyn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Literature: In HG Wells \"The Time Machine,\" two races of the future are the child-like Eloi, and the subterranean monsters called the .... ?',
    answers: ['morlocks'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Little used name for either corner of the eye?',
    answers: ['canthus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Mark Twain referred to the what as the \"stomach Steinway.\"?',
    answers: ['accordion'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Math: The answer to a division problem is called the ....?',
    answers: ['quotient'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Music: This Vienese piano manufacturer includes 3 extra bass keys. It is the favorite piano of such performers as Tori Amos.',
    answers: ['bosendorfer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the Oscar-winning actor who played Ron Jenkins in TVs Coronation Street?',
    answers: ['benkingsley'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the Teletubbies?',
    answers: ['laalaa,tinkywinky,dipsyandpo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Name the dagger which lends its name to a type of women\'s shoes with slender pointed heels?',
    answers: ['stiletto'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Neil Tennant and Chris Lowe make up what pop band?',
    answers: ['petshopboys'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Never look a gift horse in the ....?',
    answers: ['mouth'],
    category: 'Needs to be categorised',
  },
  {
    question: 'On the average, there are how many peas in a pod?',
    answers: ['eight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Phil Collins appeared in which Spielberg film with Robin Williams?',
    answers: ['hook'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Philosophy: Epicurus, who believed that pleasure is the highest good, gave us which term synonymous with hedonistic?',
    answers: ['epicurean'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Physics: Energy and Momentum are never lost, they are .... ?',
    answers: ['conserved'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Physics: The color white is the absence or presence of all color?',
    answers: ['presence'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Self-praise is no ....?',
    answers: ['recommendation'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Shakespeare\'s lovers Romeo and Juliet lived in which Italian city?',
    answers: ['verona'],
    category: 'Needs to be categorised',
  },
  {
    question: 'She was a reletive of Sir Philip Sydney and the Countess of Pembroke, authored the famous sonnet sequence Pamphilia to Amphilanthus?',
    answers: ['ladymarywroth'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Slow and steady wins the ....?',
    answers: ['race'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Synonymous with obituary; a list of recently deceased.',
    answers: ['necrology'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Synonymous with obituary; a list of recently deceased.?',
    answers: ['necrology'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The French TGV train is called Traine Griende Viesta, what does that mean in english?',
    answers: ['trainwithgreatspeed'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Hubble telescope is named after this astronomer?',
    answers: ['edwinhubble'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Kremlin is located in this city?',
    answers: ['moscow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Louvre in Paris, was originally a what, before it was changed to a museum durung the French Revolution?',
    answers: ['palace'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The Teddy bear was named after which US president?',
    answers: ['theodoreroosevelt'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The agave cactus is the source of which liquor?',
    answers: ['tequila'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The analysis of blood splatter patterns, insect specimens taken from a crime victim, and ballistic information are all part of a larger crime-solving science known as:',
    answers: ['forensics'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The closest living relative of this African mammal is the Giraffe?',
    answers: ['okapi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The drink Absinthe is also known as?',
    answers: ['wormwood'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The first person other than royalty to be portrayed on a British stamp was?',
    answers: ['williamshakespeare'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The greyhound, along with this smaller relative, is used in the sport of coursing?',
    answers: ['whippet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The highest man-made temperature was .... million degrees Celsius?',
    answers: ['70'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The large Hollywood sign in LA was originally?',
    answers: ['hollywoodland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The largest University is in which country??',
    answers: ['paris,france'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The leaces of the tomato plant are poisonous, they contain ....?',
    answers: ['strychnine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The leaves of the tomato plant are poisonous, they contain ________?',
    answers: ['strychnine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The longest one-syllable word in the English language is?',
    answers: ['screeched'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The major religion in Haiti is?',
    answers: ['voodoo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The most common colour on national flags is?',
    answers: ['red'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The okapi is most closely related to what african mammal?',
    answers: ['giraffe'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The opal is the birthstone for which month of the year?',
    answers: ['october'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The pH scale is a logarithmic scales used to measure acidity in solutions. What does pH stand for?',
    answers: ['potentialofhydrogen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'The song Proud Mary was writted by ....?',
    answers: ['creedenceclearwaterrevival'],
    category: 'Needs to be categorised',
  },
  {
    question: 'These are words in different languages that have the same original source, eg: \"water\" (english) and \"wasser\" (german)?',
    answers: ['cognates'],
    category: 'Needs to be categorised',
  },
  {
    question: 'These are words in different languages that have the same original source, eg: \"water\" (english) and \"wasser\" (german)?',
    answers: ['cognates'],
    category: 'Needs to be categorised',
  },
  {
    question: 'These beans are the most often used in the production of bean sprouts.',
    answers: ['mungbeans'],
    category: 'Needs to be categorised',
  },
  {
    question: 'These establishments don\'t have windows or clocks?',
    answers: ['casinos'],
    category: 'Needs to be categorised',
  },
  {
    question: 'These fighters always began a bout by saying, \"Hail Emperor, those about to die salute you!\"?',
    answers: ['gladiators'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This Irish republic political movement founded in 1905 to promote Ireland\'s independence, is translated as \"Ourselves Alone.\" What is it commonly called?',
    answers: ['sinnfein'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This Is Bon Jovi\'s latest album?',
    answers: ['crush'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This actor played Blondie in The Good, The Bad, and The Ugly?',
    answers: ['clinteastwood'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This animal can\'t jump?',
    answers: ['elephant'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This band was named band of the year in America in 1969?',
    answers: ['creedenceclearwaterrevival'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This city can be abbreivated to 3% of its size \"El Pueblo de Nuestra Senora la Reina de los Angeles de Porciuncula\"?',
    answers: ['la'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This city is the capital of Armenia?',
    answers: ['yerevan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This city is the capital of Australian Capital Territorry?',
    answers: ['canberra'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This first king of Israel reputedly had 700 wives?',
    answers: ['soloman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This instrument has black and white keys?',
    answers: ['piano'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the Southeast Asian method of dying fabric using wax to create designs?',
    answers: ['batik'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the Southeast Asian method of dying fabric using wax to create designs?',
    answers: ['batik'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the capital of Ukraine?',
    answers: ['kiev'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This is the medical name for shoulder blade?',
    answers: ['scapula'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This more efficient distillate of coal was one of the main fuels of the industrial revolution:',
    answers: ['coke'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This spikey succulent, native of Africa is often an additive in creams and lotions?',
    answers: ['aloevera'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This spikey succulent, native of Africa is often an additive in creams and lotions?',
    answers: ['aloevera'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This sport gave us the term \"Hang Ten.\"?',
    answers: ['surfing'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This superb composer has composed scores to over 400 films?',
    answers: ['enniomorricone'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This term for those who oppose technological progress stems from 19th century working men who thought machinery would cause unemployment and societal degradation.',
    answers: ['luddites'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This term refers to any crown-shaped structure. It\'s also the name of a beer.',
    answers: ['corona'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This weapon lends its name to a type of woman\'s shoe with a slender, tapered high-heel?',
    answers: ['stiletto'],
    category: 'Needs to be categorised',
  },
  {
    question: 'This world leader was born in 1870?',
    answers: ['lenin'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Time magazine named what its \"Man of the Year\" in 1982?',
    answers: ['computer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Van Gogh started to draw at the age of?',
    answers: ['27'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What \'B\' comes before man, seller and and foot forward?',
    answers: ['best'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What \'C\' is a type of tank or the leader of a tribe?',
    answers: ['chieftan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What \'D\' goes before centre, line and cert?',
    answers: ['dead'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What \'D\' goes before wit, weather and wine?',
    answers: ['dry'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What \'H\' shows that precious metals are authentic?',
    answers: ['hallmark'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What \'K\' is a fuel used by planes?',
    answers: ['kerosene'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What \'K\' is the home of bourbon whiskey?',
    answers: ['kentucky'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What \'L\' is another name for a maze?',
    answers: ['labyrinth'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What \'L\' is obtained from Galena?',
    answers: ['lead'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What \'N\' was the city where Mrs Ghandi was assassinated?',
    answers: ['newdelhi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What \'Q\' are the doubts or scruples of conscience?',
    answers: ['qualm\'s'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What \'S\' are the translations shown on the screen during a film of a different language?',
    answers: ['subtitles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What \'V\' is a word meaning a farewell?',
    answers: ['valediction'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What \'V\' is an old soldier?',
    answers: ['veteran'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What \'W\' goes before ear, meal and germ?',
    answers: ['wheat'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What \'W\' is a pattern in blue, first seen on english chine in the 18th century?',
    answers: ['willow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What \'W\' is software distributed by Microsoft that rarely works and uses system resources at an astronomical rate?',
    answers: ['windows'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Chinese zodiac sign is this year?',
    answers: ['snake'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Greek slave wrote fables?',
    answers: ['aesop'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Hebrew word means \'so be it\'?',
    answers: ['amen'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What Lake is the biggest in europe?',
    answers: ['ladoga'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What TV show had a character named Potsie?',
    answers: ['happydays'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What US state was once an independent republic?',
    answers: ['texas'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What animal appears on an australian 5 cent coin?',
    answers: ['echidna'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What animal is incapable of making a sound that will echo?',
    answers: ['duck'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are Australian \'Lamingtons\'?',
    answers: ['chocolatecakes'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are Blenheim, Lord Derby and Peasgood?',
    answers: ['apples'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are a chessboard\'s horizontal rows called?',
    answers: ['ranks'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are a chessboard\'s vertical rows called?',
    answers: ['files'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What are the colours of the five olympic rings?',
    answers: ['red,blue,green,yellow,black'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country calles themselves Siomi?',
    answers: ['finland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country calls themselves Cymru?',
    answers: ['wales'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country calls themselves Magyar?',
    answers: ['hungary'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country calls themselves Nipon?',
    answers: ['japan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country do most stolen US cars end up in?',
    answers: ['mexico'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country has the largest armed force?',
    answers: ['china'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country has the largest school, with an enrollment of about 25,000?',
    answers: ['philippines'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country is the largest Spanish-speaking country in the world?',
    answers: ['mexico'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What country was formerly called Ceylon?',
    answers: ['srilanka'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Alfred Hitchcock Fear?',
    answers: ['eggs'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Dr John S. Pemberton concoct in a three-legged pot in his backyard in 1886?',
    answers: ['cocacola'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did Sally Rogers always wear in her hair?',
    answers: ['abow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did William the Conqueror regard as a sign of victory in the battle of Hastings and also appears on the Bayeux Tapestry?',
    answers: ['halley\'scomet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did people use before the hearing aid was invented?',
    answers: ['eartrumpet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What did the americans buy of Russia for $7,200,000 in 1867?',
    answers: ['alaska'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What do you get when you mix blue and yellow?',
    answers: ['green'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does \"zucchero\" mean in italian?',
    answers: ['sugar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does \'int\' stand for in the C programming language?',
    answers: ['integer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does Thermos mean in greek?',
    answers: ['hot'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does UFC stand for?',
    answers: ['ultimatefightingchampionships'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does a philographist collect?',
    answers: ['autographs'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What does a traveler suffer from if he has Nostomania?',
    answers: ['intensehomesickness'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What drink has a totally tropical taste?',
    answers: ['lilt'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What drug can be found in tonic water?',
    answers: ['quinine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What element do all organic compounds contain?',
    answers: ['carbon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What family do these fruits belong to - Kumquat, Pommelo, Ugli Fruit?',
    answers: ['citrus'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What film did the Beatles make for television?',
    answers: ['magicalmysterytour'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What fruit family do almonds belong?',
    answers: ['peach'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What game of chance is physically the most demanding for the loser?',
    answers: ['russianroulette'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What happend in the final episode of M.A.S.H. hence the theme tune?',
    answers: ['theyallcommitedsuicidethethemeiscalled\'suicideispainless\''],
    category: 'Needs to be categorised',
  },
  {
    question: 'What has 1,792 steps in it?',
    answers: ['eiffeltower'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What hats were worn by British troops during the Napoleonic wars of the early 1800s?',
    answers: ['shakos'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What holiday does Japan celebrate on December 23?',
    answers: ['birthdayoftheemperor'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What in the wild west was known as The Peacemaker?',
    answers: ['colt45'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Israel\'s domestic intelligence agency called?',
    answers: ['shinbet'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is South Korea\'s national dish called?',
    answers: ['kimchee'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Tina Turner\'s real name?',
    answers: ['anniemaebullock'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is Wales\' national dish called?',
    answers: ['cawl'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a lower than average tide normally occuring at the first and third quarters of the moon called?',
    answers: ['neaptide'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is a volcano that is neither active nor extinct?',
    answers: ['dormant'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is non-rhyming poetry called?',
    answers: ['blankverse'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is rock star Sting\'s real name?',
    answers: ['gordonsummer'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is tatooed on John Bon Jovi`s arm?',
    answers: ['superman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is th name of the famous hyrogen gas filled airship that crashed in 1936?',
    answers: ['hindenburg'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the Capital of Costa Rica?',
    answers: ['sanjose'],
    category: scienceandgeography,
  },
  {
    question: 'What is the Decalogue normally called?',
    answers: ['tencommandments'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the Taj Majal made of?',
    answers: ['marble'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the URL for the quiz website?',
    answers: ['http://www.meta-x.de/quiz'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the art of creating decorative shapes by trimming trees and shrubs?',
    answers: ['topiary'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the capital of Austria?',
    answers: ['vienna'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Belize?',
    answers: ['belmopan'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Brazil?',
    answers: ['brasilia'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Dominica?',
    answers: ['roseau'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Nauru?',
    answers: ['yaren'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Romania?',
    answers: ['bucharest'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of Venezuela?',
    answers: ['caracas'],
    category: scienceandgeography,
  },
  {
    question: 'What is the capital of the Northern Territorry of Australia?',
    answers: ['darwin'],
    category: scienceandgeography,
  },
  {
    question: 'What is the chalice used by Jesus Christ at the Last Supper called?',
    answers: ['holygrail'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the currency of Slovenia?',
    answers: ['dollar'],
    category: societyandhumanities,
  },
  {
    question: 'What is the currency of Vietnam?',
    answers: ['dong'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the front of a saddle called?',
    answers: ['pommel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the major german airline (member of star alliance)?',
    answers: ['lufthansa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the most common surname in the world?',
    answers: ['chang'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name given to jealousy shown towards a new baby by an older brother or sister?',
    answers: ['siblingrivalry'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the name of the spaceship in the film Alien?',
    answers: ['nostromo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the only country that has never imposed censorship for adult films?',
    answers: ['belgium'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the only fish that can blink at you with both eyes?',
    answers: ['shark'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the only place on earth that does not have a time zone?',
    answers: ['antarctica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the opposite of an Utopia?',
    answers: ['dystopia'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the term for the group of plants that catch and digest insects?',
    answers: ['carnivorous'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What is the working class called in marxist terminology?',
    answers: ['proletariat'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What kind of charcters were MTV\'s Sifl and Olly?',
    answers: ['sockpuppets'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What name is given to the large Russian utensil for making tea?',
    answers: ['samovar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What newspaper do the Flintstones read?',
    answers: ['thedailyslate'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What now famous painter was once so impoverished that he kept warm by burning his own paintings?',
    answers: ['pablopicasso'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What part of Betty Grable was insured for over a million dollars?',
    answers: ['herlegs'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What part of the human body grows to 20 times its size at birth?',
    answers: ['nose'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What russian leader was killed with an icepick?',
    answers: ['trotsky'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What sea separate Naples and Algiers?',
    answers: ['meditteranean'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What substance was used to build the Kinga Chapel in Poland?',
    answers: ['salt'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What talent did Dumbo the elephant have?',
    answers: ['hecouldfly'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What three European countries begin with the letter \'A\' (alphabetically)?',
    answers: ['albania,andorraandaustria'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What three letter word can be placed before these words to make a new word - \"light\" \"break\" \"time\"?',
    answers: ['day'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What tiny vessel connects an artery with a vein?',
    answers: ['capillary'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What two countries were known as \'The Yellow Peril\' in then 1890\'s?',
    answers: ['chinaandjapan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What university was founded in 1160??',
    answers: ['oxforduniversity'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was first successfully tested in Alamogordo, New Mexico?',
    answers: ['atomicbomb'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the American Pie in Don Macleans song?',
    answers: ['buddyholly\'scrashedairplane'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first model Rolls Royce called?',
    answers: ['silverghost'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What was the first product to have a bar code on it?',
    answers: ['wrigley\'sgum'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What weapons did the indians use to defeat custer?',
    answers: ['winchesterspecials'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What word can be a verb, noun, adjective, preposition, conjunction, interjection and a verbal auxiliary?',
    answers: ['like'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What\'s next in the series 2, 3, 4, 6, 8, 12, 14, 18, 20, ?',
    answers: ['24'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What\'s the capital of Majorca?',
    answers: ['palma'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What\'s the highest mountain in Africa?',
    answers: ['kilimanjaro'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What\'s the name of Blur\'s frontman?',
    answers: ['damonalbarn'],
    category: 'Needs to be categorised',
  },
  {
    question: 'What\'s the world\'s largest Gulf?',
    answers: ['gulfofmexico'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Whats the ball on the top of a flagpole called?',
    answers: ['truck'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Whats the birthstone for July?',
    answers: ['ruby'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Whats the chemical formula CH3COOH commonly known as?',
    answers: ['vinegar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where in Europe it is illegal to flush the toilet after 10 P.M. if you live in an apartment?',
    answers: ['switzerland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the Guggenheim Museum?',
    answers: ['newyork'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the Lubianka prison located?',
    answers: ['moscow'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the coldest desert in the world?',
    answers: ['antarctica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the famous Blaze nightclub located?',
    answers: ['melbourne'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Where is the original London Bridge located?',
    answers: ['lakehavasu,arizona'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Batman TV villain leads the Molehill Mob?',
    answers: ['riddler'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which Group sang the song \"November Rain\"?',
    answers: ['gunsnroses'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which US comapny makes the most profit per second??',
    answers: ['ford'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which arabic country has the biggest proportion of Christians?',
    answers: ['lebanon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which british leader was born in a ladies\' room during a dance?',
    answers: ['winstonchurchill'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which car\'s name translates from latin as \'I Roll\'?',
    answers: ['volvo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country did France beat to take the 1998 world cup?',
    answers: ['brazil'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country had the hottest temparture ever recorded in Sept. 13, 1922, at 136 F / 58 C',
    answers: ['libya(elazizia)'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country has the greatest number of islands?',
    answers: ['finland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country has won the most nobel peace prizes?',
    answers: ['usa'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which country was host to the 1999 cricket world cup?',
    answers: ['england'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which famous author also writes under the name pen name of Richard Bachman?',
    answers: ['stevenking'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which female singer collaborated with Eminem with the song \"Stan\"?',
    answers: ['dido'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which group sang the Song \"Hotel California\"?',
    answers: ['eagles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which group sang the Song \"Last Resort\"?',
    answers: ['paparoach'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which group sang the Song \"The Call\"?',
    answers: ['backstreetboys'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which group sang the song \"All The Small Things\"?',
    answers: ['blink182'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which group sang the song \"Everything you want\"?',
    answers: ['verticalhorizon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which group sang the song \"Fuel\"?',
    answers: ['metallica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which group sang the song \"Go Let It Out\"?',
    answers: ['oasis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which group sang the song \"I Have A Dream\"?',
    answers: ['westlife'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which group sang the song \"Its Gonna Be Me\"?',
    answers: ['n\'sync'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which group sang the song \"Learn To Fly\"?',
    answers: ['foofighters'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which group sang the song \"Ordinary World\"?',
    answers: ['duranduran'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which group sang the song \"Original Prankster\"?',
    answers: ['offspring'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which group sang the song \"Picture Of You\"?',
    answers: ['boyzone'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which group sang the song \"Rollin\"?',
    answers: ['limpbizkit'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which group sang the song \"Smells Like Teen Spirit\"?',
    answers: ['nirvana'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which group sang the song \"Thank You For Loving Me\"?',
    answers: ['bonjovi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which group sang the song \"Unforgiven\"?',
    answers: ['metallica'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which group sang the song \"sleeping child\"?',
    answers: ['michaellearnstorock'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which instrument did George Harrison of the Beatles play?',
    answers: ['leadguitar'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the language that is most spoken in the world?',
    answers: ['chinese'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which is the only species of mammal that can\'t jump?',
    answers: ['elephant'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which pop artist died in New York in 1987?',
    answers: ['andywarhol'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which song is used in the movie \"Loser\"?',
    answers: ['teenagedirtbag'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which state has the only royal palace in the United States?',
    answers: ['hawaii'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which team won the recently concluded UEFA cup?',
    answers: ['liverpool'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which two British cities, along with ancient Rome, were built on seven hills?',
    answers: ['edinburghandsheffield'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which was the first rock group to use lasers in a live performance?',
    answers: ['thewho'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Which weight division in boxing lies between flyweight and featherweight?',
    answers: ['bantamweight'],
    category: 'Needs to be categorised',
  },
  {
    question: 'While USSR sent Laika the dog into space, the USA sent Laska and Benjy, which were?',
    answers: ['mice'],
    category: 'Needs to be categorised',
  },
  {
    question: 'While grass grows the horse ....?',
    answers: ['starves'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who did Nathuram Godsay Murder in 1948?',
    answers: ['mahatmagandhi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who did Peeping Tom peep at?',
    answers: ['ladygodiva'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who died on Saint Helena?',
    answers: ['napoleon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who fought in the 1967 Six Days War?',
    answers: ['arabsandisraelis'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who fought the 100 years war?',
    answers: ['franceandengland'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who founded the McDonalds Chain?',
    answers: ['raykroc'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invaded England in 55 BC?',
    answers: ['romans'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented lava lamps?',
    answers: ['cravenwalker', 'edwardcravenwalker', 'walker', 'edwardcraven'],
    category: scienceandgeography,
  },
  {
    question: 'Who invented the compact disc or CD?',
    answers: ['philips'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented the radio?',
    answers: ['guglielmomarconi'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who invented the television?',
    answers: ['johnlogiebaird'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is Julia Wells Better known as?',
    answers: ['julieandrews'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the famous giantkiller?',
    answers: ['jack'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the only musician in history to bring out two albums to reach number one in one year?',
    answers: ['dmx'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the only person to win oscars for best actress and best song?',
    answers: ['barbarastreisand'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who is the patron saint of lovers?',
    answers: ['saintvalentine'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who owns Weight Watchers?',
    answers: ['heinz'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who owns Weight Watchers?',
    answers: ['heinz'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who plays centerfield for the Seattle Mariners?',
    answers: ['mikecameron'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who pulled the thorn from the lion\'s paw?',
    answers: ['androcles'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who returned to Britain in 2001 after 35 years on the run?',
    answers: ['ronniebiggs'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who allegedly said that a computer will never need more than 640k of memory in 1981?',
    answers: ['billgates', 'gates'],
    category: scienceandgeography,
  },
  {
    question: 'Who sang the Song \"American Pie\"?',
    answers: ['donmclean'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang the Song \"Beautiful Day\"?',
    answers: ['u2'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang the Song \"Gangsta\'s Paradise\"?',
    answers: ['coolio'],
    category: artsandentertainment,
  },
  {
    question: 'Who sang the Song \'Electric Youth\'?',
    answers: ['debbiegibson'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang the song \"Another Brick In The Wall\"?',
    answers: ['pinkfloyd'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang the song \"Californication\"?',
    answers: ['redhotchillipeppers'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang the song \"Desert Rose\"?',
    answers: ['sting'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang the song \"I Want You\"?',
    answers: ['savagedarden'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang the song \"I\'ll Be Missing You\"?',
    answers: ['puffdaddy'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang the song \"Run To You\"?',
    answers: ['bryanadams'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang the song \"The Way I Am\"?',
    answers: ['eminem'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang the song \"We Didn\'t Start The Fire\"?',
    answers: ['billyjoel'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang the song \'Ironic\'?',
    answers: ['alanismorisette'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sang the theme song to the James Bond movie, \"A View to A Kill\"?',
    answers: ['duranduran'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sings the song Clint Eastwood?',
    answers: ['gorillaz'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who stars in the movie \"Tomb Raider\"?',
    answers: ['angelinajolie'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who sung the Song \"Fast Car\"?',
    answers: ['tracychapman'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was Oberon\'s wife?',
    answers: ['titania'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the first Christian missionary?',
    answers: ['paul'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the first person to present an Oscar (Academy Award) to himself?',
    answers: ['waltdisney'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the last Scottish Prime Minister of Britain?',
    answers: ['siralecdouglashome'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the only World Heavyweight boxing Champion to go undefeated throughout his career?',
    answers: ['rockymarciano'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the only person to ever play in the Super Bowl and World Series?',
    answers: ['deionsanders'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the star of the film Bachelor Party?',
    answers: ['tomhanks'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was the title character in The Merchant of Venice?',
    answers: ['antonio'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who was voted \"Time Magazine\'s\" man of the year in 1938?',
    answers: ['adolfhitler'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the novel that the play \"Les Miserables\" is based on?',
    answers: ['victorhugo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who wrote the original story \"The Lost World\"?',
    answers: ['sirarthurconandoyle'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who\'s first girlfriend was named Thelma Pickles?',
    answers: ['johnlennon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who\'s first girlfriend was named Thelma Pickles?',
    answers: ['johnlennon'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Who\'s mugshot number was BK4454813?',
    answers: ['hughgrant'],
    category: 'Needs to be categorised',
  },
  {
    question: 'Yogi Bear\'s sidekick was?',
    answers: ['booboo'],
    category: 'Needs to be categorised',
  },
  {
    question: 'ho was singer of the QUEEN?',
    answers: ['freddiemercury'],
    category: 'Needs to be categorised',
  },
  {
    question: 'how many strings on a seven string guitar?',
    answers: ['seven'],
    category: 'Needs to be categorised',
  },
  {
    question: 'the \"ZIP\" in ZIP Code is an abrieviation of?',
    answers: ['zoningimprovementplan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'the largest rough diamond is a?',
    answers: ['cullinan'],
    category: 'Needs to be categorised',
  },
  {
    question: 'what is the most frequently seen comet?',
    answers: ['encke'],
    category: 'Needs to be categorised',
  },
  {
    question: 'what is the name of the cryptography machine used by the german\'s in WW2?',
    answers: ['enigma'],
    category: 'Needs to be categorised',
  },
  {
    question: 'what was the name of the principal in archie comics??',
    answers: ['weatherbee'],
    category: 'Needs to be categorised',
  },
  {
    question: 'which two great physicists developed calculus independently of each other?',
    answers: ['isaacnewtonandleibniz'],
    category: 'Needs to be categorised',
  },
];

module.exports = questions;
