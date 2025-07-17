import { PlayerQuestions } from '../../types';

export const LEGENDARY_PLAYER_QUESTIONS: Record<string, PlayerQuestions> = {
    // 1. Pelé
    'p-leg-001': {
        easy: [
            { question: "Which country did Pelé represent in international football?", options: ["Argentina", "Portugal", "Brazil", "Spain"], correctAnswer: "Brazil" },
            { question: "How many FIFA World Cup titles did Pelé win as a player?", options: ["1", "2", "3", "4"], correctAnswer: "3" },
            { question: "Which Brazilian club did Pelé spend most of his club career with?", options: ["Flamengo", "Corinthians", "Santos", "Palmeiras"], correctAnswer: "Santos" }
        ],
        medium: [
            { question: "What was Pelé\'s full birth name?", options: ["Garrincha", "Zico", "Edson Arantes do Nascimento", "Romario de Souza Faria"], correctAnswer: "Edson Arantes do Nascimento" },
            { question: "In which year did Pelé score a hat-trick in the World Cup semifinal at age 17?", options: ["1962", "1958", "1966", "1970"], correctAnswer: "1958" },
            { question: "Which US club did Pelé join in 1975, helping to popularize soccer in America?", options: ["LA Galaxy", "Tampa Bay Rowdies", "New York Cosmos", "Fort Lauderdale Strikers"], correctAnswer: "New York Cosmos" }
        ],
        hard: [
            { question: "Which number did Pelé famously wear for Brazil and Santos?", options: ["9", "10", "11", "7"], correctAnswer: "10" },
            { question: "Which legendary Uruguayan goalkeeper did Pelé famously dummy in the 1970 World Cup, only to narrowly miss the shot?", options: ["Ladislao Mazurkiewicz", "Roque Máspoli", "Rodolfo Rodríguez", "Fernando Álvez"], correctAnswer: "Ladislao Mazurkiewicz" },
            { question: "In the 1981 film 'Escape to Victory', Pelé starred alongside which famous actor?", options: ["Clint Eastwood", "Sylvester Stallone", "Arnold Schwarzenegger", "Burt Reynolds"], correctAnswer: "Sylvester Stallone" }
        ]
    },
    // 2. Diego Maradona
    'p-leg-002': {
        easy: [
            { question: "Which country did Maradona captain to World Cup glory in 1986?", options: ["Brazil", "Italy", "Argentina", "Spain"], correctAnswer: "Argentina" },
            { question: "Which Italian club did Maradona lead to two historic Serie A titles?", options: ["Juventus", "AC Milan", "Inter Milan", "Napoli"], correctAnswer: "Napoli" },
            { question: "What was Maradona\'s infamous 1986 World Cup goal vs. England called?", options: ["The Hand of God", "The Goal of the Century", "The Divine Goal", "The Miracle Goal"], correctAnswer: "The Hand of God" }
        ],
        medium: [
            { question: "Which Spanish club paid a then-world record fee for Maradona in 1982?", options: ["Real Madrid", "Atlético Madrid", "Sevilla", "Barcelona"], correctAnswer: "Barcelona" },
            { question: "What was the name of Maradona\'s autobiography released in 2000?", options: ["El Pibe de Oro", "La Mano de Dios", "Yo Soy el Diego", "Mi Vida"], correctAnswer: "Yo Soy el Diego" },
            { question: "Which banned substance led to Maradona\'s expulsion from the 1994 World Cup?", options: ["Cocaine", "Ephedrine", "Nandrolone", "Steroids"], correctAnswer: "Ephedrine" }
        ],
        hard: [
            { question: "Which number did Maradona first wear for Argentinos Juniors before inheriting the #10?", options: ["16", "18", "19", "21"], correctAnswer: "16" },
            { question: "Which Argentinian teammate passed the ball to Maradona before he began his 'Goal of the Century' run?", options: ["Jorge Valdano", "Héctor Enrique", "Jorge Burruchaga", "Oscar Ruggeri"], correctAnswer: "Héctor Enrique" },
            { question: "In the 1990 World Cup quarter-final, Maradona assisted the winning goal against which fierce rival?", options: ["England", "West Germany", "Italy", "Brazil"], correctAnswer: "Brazil" }
        ]
    },
    // 3. Lionel Messi
    'p-leg-003': {
        easy: [
            { question: "Which country did Messi lead to a World Cup win in 2022?", options: ["Brazil", "Spain", "Argentina", "Germany"], correctAnswer: "Argentina" },
            { question: "At which club did Messi spend 21 seasons, becoming their all-time top scorer?", options: ["Newell's Old Boys", "Paris Saint-Germain", "Barcelona", "Inter Miami"], correctAnswer: "Barcelona" },
            { question: "How many Ballon d\'Or awards has Messi won, a record in football history?", options: ["5", "6", "7", "8"], correctAnswer: "8" }
        ],
        medium: [
            { question: "What rare condition required Messi to take growth hormone injections as a child?", options: ["Gigantism", "Growth Hormone Deficiency", "Dwarfism", "Marfan Syndrome"], correctAnswer: "Growth Hormone Deficiency" },
            { question: "Who was Messi’s manager during Barcelona’s historic 2008–2012 'tiki-taka' era?", options: ["Frank Rijkaard", "Tito Vilanova", "Luis Enrique", "Pep Guardiola"], correctAnswer: "Pep Guardiola" },
            { question: "Before finally winning it in 2021, how many Copa América finals had Messi lost with Argentina?", options: ["1", "2", "3", "4"], correctAnswer: "3" }
        ],
        hard: [
            { question: "Which Athletic Bilbao defender did Messi famously dribble past multiple times for his stunning 2015 Copa del Rey final goal?", options: ["Mikel Balenziaga", "Aymeric Laporte", "Mikel Rico", "All of them"], correctAnswer: "All of them" },
            { question: "How many goals did Messi score for Barcelona during his record-breaking 91-goal calendar year in 2012?", options: ["73", "79", "85", "91"], correctAnswer: "79" },
            { question: "How many La Liga titles did Messi win with Barcelona?", options: ["8", "9", "10", "11"], correctAnswer: "10" }
        ]
    },
    // 4. Cristiano Ronaldo
    'p-leg-004': {
        easy: [
            { question: "For which club is Cristiano Ronaldo the all-time top scorer?", options: ["Manchester United", "Juventus", "Real Madrid", "Al-Nassr"], correctAnswer: "Real Madrid" },
            { question: "Which Premier League club signed Ronaldo as a teenager in 2003?", options: ["Arsenal", "Liverpool", "Chelsea", "Manchester United"], correctAnswer: "Manchester United" },
            { question: "What is the name of Ronaldo’s iconic goal celebration?", options: ["The Roar", "The Jump", "Siiiu", "The Goat"], correctAnswer: "Siiiu" }
        ],
        medium: [
            { question: "How much did Real Madrid pay Manchester United for Ronaldo in 2009, a world record at the time?", options: ["€88M", "€89M", "€92M", "€94M"], correctAnswer: "£80M" },
            { question: "How many UEFA Champions League titles has Ronaldo won?", options: ["3", "4", "5", "6"], correctAnswer: "5" },
            { question: "What injury forced Ronaldo off in the final of Euro 2016, which Portugal went on to win?", options: ["Ankle sprain", "Knee ligament sprain", "Hamstring tear", "Achilles rupture"], correctAnswer: "Knee ligament sprain" }
        ],
        hard: [
            { question: "Against which club did Ronaldo score his first professional hat-trick for Manchester United?", options: ["Fulham", "Bolton", "Newcastle United", "Portsmouth"], correctAnswer: "Newcastle United" },
            { question: "How many goals did Ronaldo score in his most prolific La Liga season (2014-15)?", options: ["42", "45", "48", "51"], correctAnswer: "48" },
            { question: "Al-Nassr signed Ronaldo in 2023, but what percentage ownership stake in the Saudi club does he own?", options: ["5%", "10%", "15%", "20%"], correctAnswer: "15%" }
        ]
    },
    // 5. Johan Cruyff
    'p-leg-005': {
        easy: [
            { question: "Which country did Cruyff revolutionize with the concept of 'Total Football'?", options: ["Germany", "Spain", "Netherlands", "Belgium"], correctAnswer: "Netherlands" },
            { question: "With which club did Cruyff win three consecutive European Cups as a player?", options: ["Barcelona", "Feyenoord", "Ajax", "PSV"], correctAnswer: "Ajax" },
            { question: "The 'Cruyff Turn' is a famous type of what?", options: ["Goal celebration", "Dribbling move", "Defensive tackle", "Passing technique"], correctAnswer: "Dribbling move" }
        ],
        medium: [
            { question: "Which Spanish club did Cruyff join in 1973 for a world-record fee, winning the league in his first season?", options: ["Real Madrid", "Atlético Madrid", "Valencia", "Barcelona"], correctAnswer: "Barcelona" },
            { question: "How many Ballon d’Or awards did Cruyff win?", options: ["1", "2", "3", "4"], correctAnswer: "3" },
            { question: "Which MLS club did Cruyff briefly play for alongside George Best?", options: ["New York Cosmos", "Los Angeles Aztecs", "Washington Diplomats", "San Diego Sockers"], correctAnswer: "Los Angeles Aztecs" }
        ],
        hard: [
            { question: "Which shirt number did Cruyff famously popularize?", options: ["9", "10", "11", "14"], correctAnswer: "14" },
            { question: "What was the name of Cruyff’s Barcelona team that he managed to their first European Cup?", options: ["The Dream Team", "The Invincibles", "The Galácticos", "The Total Footballers"], correctAnswer: "The Dream Team" },
            { question: "Against which club did Johan Cruyff score the only official own goal of his career?", options: ["FC Amsterdam", "Feyenoord", "PSV", "AZ '67"], correctAnswer: "FC Amsterdam" }
        ]
    },
    // 6. Franz Beckenbauer
    'p-leg-006': {
        easy: [
            { question: "Which country did Beckenbauer captain to World Cup glory in 1974?", options: ["East Germany", "Austria", "West Germany", "Switzerland"], correctAnswer: "West Germany" },
            { question: "What defensive position did Beckenbauer famously redefine?", options: ["Full-back", "Stopper", "Libero/Sweeper", "Holding Midfielder"], correctAnswer: "Libero/Sweeper" },
            { question: "Which club is Beckenbauer most associated with?", options: ["1860 Munich", "Hamburger SV", "Borussia Mönchengladbach", "Bayern Munich"], correctAnswer: "Bayern Munich" }
        ],
        medium: [
            { question: "How many Ballon d’Or awards did Beckenbauer win?", options: ["1", "2", "3", "0"], correctAnswer: "2" },
            { question: "Which US club did Beckenbauer play for alongside Pelé?", options: ["LA Aztecs", "New York Cosmos", "Fort Lauderdale Strikers", "Tampa Bay Rowdies"], correctAnswer: "New York Cosmos" },
            { question: "What was Beckenbauer’s regal nickname?", options: ["Der Kaiser", "Der König", "Der Prinz", "Der Baron"], correctAnswer: "Der Kaiser" }
        ],
        hard: [
            { question: "Beckenbauer is one of only three men to win the World Cup as both a player and a manager. Who are the other two?", options: ["Cruyff & Zidane", "Maldini & Ancelotti", "Mário Zagallo & Didier Deschamps", "Pelé & Maradona"], correctAnswer: "Mário Zagallo & Didier Deschamps" },
            { question: "In the 1970 World Cup semi-final, what injury did Beckenbauer play on with, his arm in a sling?", options: ["Broken wrist", "Dislocated shoulder", "Broken collarbone", "Torn bicep"], correctAnswer: "Dislocated shoulder" },
            { question: "What was Beckenbauer’s official role in Germany’s 2006 World Cup organizing committee?", options: ["President", "Head of Security", "Ambassador", "Head Coach"], correctAnswer: "President" }
        ]
    },
    // 7. Zinedine Zidane
    'p-leg-007': {
        easy: [
            { question: "Which country did Zidane lead to a 1998 World Cup win?", options: ["Italy", "Spain", "Brazil", "France"], correctAnswer: "France" },
            { question: "Which club did Zidane join for a then-world record fee in 2001?", options: ["Juventus", "Barcelona", "Real Madrid", "AC Milan"], correctAnswer: "Real Madrid" },
            { question: "In the 2006 World Cup final, who did Zidane infamously headbutt?", options: ["Gennaro Gattuso", "Fabio Cannavaro", "Gianluigi Buffon", "Marco Materazzi"], correctAnswer: "Marco Materazzi" }
        ],
        medium: [
            { question: "How many Ballon d’Or awards did Zidane win?", options: ["0", "1", "2", "3"], correctAnswer: "1" },
            { question: "Which French club did Zidane play for before joining Juventus?", options: ["Marseille", "Cannes", "Monaco", "Bordeaux"], correctAnswer: "Bordeaux" },
            { question: "Against which club did Zidane score his iconic volley in the 2002 Champions League final?", options: ["Bayer Leverkusen", "Bayern Munich", "Borussia Dortmund", "Schalke 04"], correctAnswer: "Bayer Leverkusen" }
        ],
        hard: [
            { question: "Which shirt number did Zidane wear at Real Madrid?", options: ["10", "21", "5", "7"], correctAnswer: "5" },
            { question: "As a manager, how many consecutive Champions League titles did Zidane win with Real Madrid?", options: ["1", "2", "3", "4"], correctAnswer: "3" },
            { question: "Zidane won the FIFA World Cup Golden Ball in 2006 despite being sent off in the final. How many goals did he score in the tournament?", options: ["2", "3", "4", "5"], correctAnswer: "3" }
        ]
    },
    // 8. Ronaldo Nazário
    'p-leg-008': {
        easy: [
            { question: "Which country did Ronaldo win two World Cups with?", options: ["Argentina", "Portugal", "Brazil", "Spain"], correctAnswer: "Brazil" },
            { question: "What was Ronaldo’s nickname?", options: ["O Rei (The King)", "O Fenômeno (The Phenomenon)", "O Bruxo (The Wizard)", "O Imperador (The Emperor)"], correctAnswer: "O Fenômeno (The Phenomenon)" },
            { question: "For which Spanish club did Ronaldo win the La Liga title in the 2002–03 season?", options: ["Barcelona", "Atlético Madrid", "Valencia", "Real Madrid"], correctAnswer: "Real Madrid" }
        ],
        medium: [
            { question: "Which Spanish club does Ronaldo currently own a majority stake in?", options: ["Getafe", "Rayo Vallecano", "Real Valladolid", "Espanyol"], correctAnswer: "Real Valladolid" },
            { question: "How many Ballon d’Or awards did Ronaldo win?", options: ["1", "2", "3", "0"], correctAnswer: "2" },
            { question: "Which Italian club signed Ronaldo in 1997 for a world-record fee?", options: ["AC Milan", "Juventus", "Lazio", "Inter Milan"], correctAnswer: "Inter Milan" }
        ],
        hard: [
            { question: "What serious knee injury, suffered in 2000, almost ended Ronaldo's career?", options: ["ACL tear", "MCL tear", "Patellar tendon rupture", "Meniscus tear"], correctAnswer: "Patellar tendon rupture" },
            { question: "How many goals did Ronaldo score in the 2002 World Cup, winning the Golden Boot?", options: ["6", "7", "8", "9"], correctAnswer: "8" },
            { question: "Which Brazilian club did Ronaldo join to finish his career?", options: ["Flamengo", "São Paulo", "Vasco da Gama", "Corinthians"], correctAnswer: "Corinthians" }
        ]
    },
    // 9. Gerd Müller
    'p-leg-009': {
        easy: [
            { question: "For which country did Gerd Müller score 68 goals in 62 games?", options: ["Austria", "East Germany", "West Germany", "Switzerland"], correctAnswer: "West Germany" },
            { question: "With which club did Müller become a legendary goalscorer?", options: ["1860 Munich", "Borussia Dortmund", "Hamburger SV", "Bayern Munich"], correctAnswer: "Bayern Munich" },
            { question: "What was Müller’s nickname, referring to his goalscoring?", options: ["Der Bomber", "Der Kaiser", "Der Titan", "Der Torschütze"], correctAnswer: "Der Bomber" }
        ],
        medium: [
            { question: "How many goals did Müller score in the 1970 World Cup to win the Golden Boot?", options: ["8", "10", "12", "13"], correctAnswer: "10" },
            { question: "Which player broke Müller's long-standing record for most goals in a calendar year?", options: ["Cristiano Ronaldo", "Zlatan Ibrahimović", "Lionel Messi", "Robert Lewandowski"], correctAnswer: "Lionel Messi" },
            { question: "How many Ballon d’Or awards did Müller win?", options: ["0", "1", "2", "3"], correctAnswer: "1" }
        ],
        hard: [
            { question: "Which US club did Müller play for at the end of his career?", options: ["New York Cosmos", "LA Aztecs", "Fort Lauderdale Strikers", "Tampa Bay Rowdies"], correctAnswer: "Fort Lauderdale Strikers" },
            { question: "How many goals did Müller score for Bayern Munich in all official competitions?", options: ["398", "453", "566", "612"], correctAnswer: "566" },
            { question: "Which Polish striker broke Müller's record for most goals in a single Bundesliga season?", options: ["Krzysztof Piątek", "Arkadiusz Milik", "Włodzimierz Lubański", "Robert Lewandowski"], correctAnswer: "Robert Lewandowski" }
        ]
    },
    // 10. Alfredo Di Stéfano
    'p-leg-010': {
        easy: [
            { question: "Di Stéfano represented Spain and which other country internationally?", options: ["Italy", "Colombia", "Argentina", "Brazil"], correctAnswer: "Argentina" },
            { question: "Which club did Di Stéfano lead to five consecutive European Cups?", options: ["AC Milan", "Barcelona", "Benfica", "Real Madrid"], correctAnswer: "Real Madrid" },
            { question: "What position did Di Stéfano famously play, covering the entire pitch?", options: ["Goalkeeper", "Centre-back", "Forward", "Winger"], correctAnswer: "Forward" }
        ],
        medium: [
            { question: "Why didn't Di Stéfano play in the 1950 or 1954 World Cups?", options: ["He was injured", "Argentina refused to participate", "He was not selected", "His club wouldn't release him"], correctAnswer: "Argentina refused to participate" },
            { question: "How many Ballon d’Or awards did Di Stéfano win?", options: ["1", "2", "3", "0"], correctAnswer: "2" },
            { question: "Which shirt number did Di Stéfano wear at Real Madrid?", options: ["7", "10", "9", "11"], correctAnswer: "9" }
        ],
        hard: [
            { question: "Which fierce rival club also tried to sign Di Stéfano, leading to a major controversy?", options: ["Atlético Madrid", "Inter Milan", "Juventus", "Barcelona"], correctAnswer: "Barcelona" },
            { question: "What role was Di Stéfano given at Real Madrid after his retirement?", options: ["Head Coach", "Sporting Director", "Honorary President", "Head of Scouting"], correctAnswer: "Honorary President" },
            { question: "During a players' strike in Argentina, which Colombian club did Di Stéfano play for?", options: ["Santa Fe", "Millonarios", "Atlético Nacional", "América de Cali"], correctAnswer: "Millonarios" }
        ]
    },
     // 11. Michel Platini
    'p-leg-011': {
        easy: [
            { question: "Which country did Platini captain to glory at Euro 1984?", options: ["Italy", "Spain", "France", "Belgium"], correctAnswer: "France" },
            { question: "Which Italian club did Platini lead to a European Cup victory?", options: ["AC Milan", "Inter Milan", "Napoli", "Juventus"], correctAnswer: "Juventus" },
            { question: "How many consecutive Ballon d'Or awards did Platini win?", options: ["1", "2", "3", "4"], correctAnswer: "3" }
        ],
        medium: [
            { question: "Which French club did Platini win the Ligue 1 title with before moving to Italy?", options: ["Nancy", "Saint-Étienne", "Monaco", "Marseille"], correctAnswer: "Saint-Étienne" },
            { question: "Against which team did Platini score a famous hat-trick at Euro 1984, without scoring a penalty?", options: ["Spain", "Denmark", "Belgium", "Yugoslavia"], correctAnswer: "Yugoslavia" },
            { question: "What shirt number did Platini famously wear at Juventus?", options: ["9", "10", "11", "21"], correctAnswer: "10" }
        ],
        hard: [
            { question: "What high-ranking political role did Platini later hold in world football?", options: ["FIFA President", "UEFA President", "French FA President", "Head of the ECA"], correctAnswer: "UEFA President" },
            { question: "How many goals did Platini score in the single tournament of Euro 1984, a record that still stands?", options: ["7", "8", "9", "10"], correctAnswer: "9" },
            { question: "A 'disloyal payment' scandal in 2015 led to Platini's ban from football. Who was the other person involved?", options: ["Issa Hayatou", "Chuck Blazer", "Jack Warner", "Sepp Blatter"], correctAnswer: "Sepp Blatter" }
        ]
    },
    // 12. Paolo Maldini
    'p-leg-012': {
        easy: [
            { question: "For which club did Paolo Maldini play his entire 25-season career?", options: ["Inter Milan", "Juventus", "AC Milan", "Roma"], correctAnswer: "AC Milan" },
            { question: "What defensive position is Maldini most famous for?", options: ["Right-back", "Sweeper", "Centre-back / Left-back", "Holding Midfielder"], correctAnswer: "Centre-back / Left-back" },
            { question: "How many Champions League titles did Maldini win?", options: ["3", "4", "5", "6"], correctAnswer: "5" }
        ],
        medium: [
            { question: "Which shirt number was retired by AC Milan in Maldini’s honor?", options: ["6", "4", "3", "5"], correctAnswer: "3" },
            { question: "How many major trophies did Maldini win in total with AC Milan?", options: ["19", "22", "26", "30"], correctAnswer: "26" },
            { question: "How many Serie A titles did Maldini win?", options: ["5", "6", "7", "8"], correctAnswer: "7" }
        ],
        hard: [
            { question: "Against which club did Maldini score his final goal for AC Milan?", options: ["Fiorentina", "Inter Milan", "Atalanta", "Juventus"], correctAnswer: "Atalanta" },
            { question: "What is the name of Maldini's son who has also played for and scored for AC Milan?", options: ["Christian Maldini", "Daniel Maldini", "Andrea Maldini", "Paolo Maldini Jr."], correctAnswer: "Daniel Maldini" },
            { question: "Maldini holds the record for the fastest ever goal in a Champions League final. How fast was it?", options: ["52 seconds", "63 seconds", "71 seconds", "88 seconds"], correctAnswer: "52 seconds" }
        ]
    },
    // 13. Ferenc Puskás
    'p-leg-013': {
        easy: [
            { question: "For which country did Ferenc Puskás score 84 goals in 85 games?", options: ["Spain", "Austria", "Hungary", "Romania"], correctAnswer: "Hungary" },
            { question: "Which Spanish club did Puskás become a legend at in the 1950s and 1960s?", options: ["Barcelona", "Atlético Madrid", "Sevilla", "Real Madrid"], correctAnswer: "Real Madrid" },
            { question: "Which annual FIFA award for the best goal is named after Puskás?", options: ["The Puskás Trophy", "The Puskás Golden Goal", "The FIFA Puskás Award", "The Puskás Medal"], correctAnswer: "The FIFA Puskás Award" }
        ],
        medium: [
            { question: "How many goals did Puskás score in the famous 7-1 European Cup final of 1960?", options: ["2", "3", "4", "5"], correctAnswer: "4" },
            { question: "What was Puskás's iconic shirt number?", options: ["9", "11", "10", "7"], correctAnswer: "10" },
            { question: "What was Ferenc Puskás’ famous nickname, related to his army rank?", options: ["The General", "The Captain", "The Galloping Major", "The Sergeant"], correctAnswer: "The Galloping Major" }
        ],
        hard: [
            { question: "Which Greek club did Puskás coach to the 1971 European Cup Final?", options: ["Olympiacos", "AEK Athens", "PAOK", "Panathinaikos"], correctAnswer: "Panathinaikos" },
            { question: "Puskás is one of only two players to have scored a hat-trick in a European Cup final. Who is the other?", options: ["Alfredo Di Stéfano", "Pierino Prati", "Gerd Müller", "Cristiano Ronaldo"], correctAnswer: "Pierino Prati" },
            { question: "Why was Puskás initially banned by UEFA for two years after leaving Hungary?", options: ["For signing an illegal contract", "For refusing to return to Hungary", "For a violent foul", "For political statements"], correctAnswer: "For refusing to return to Hungary" }
        ]
    },
    // 14. Lev Yashin
    'p-leg-014': {
        easy: [
            { question: "Which country did the legendary Lev Yashin represent?", options: ["Russia", "Ukraine", "Soviet Union", "Belarus"], correctAnswer: "Soviet Union" },
            { question: "What position made Lev Yashin a football legend?", options: ["Striker", "Midfielder", "Defender", "Goalkeeper"], correctAnswer: "Goalkeeper" },
            { question: "Which club did Yashin play his entire career for?", options: ["CSKA Moscow", "Spartak Moscow", "Lokomotiv Moscow", "Dynamo Moscow"], correctAnswer: "Dynamo Moscow" }
        ],
        medium: [
            { question: "How many career penalty saves did Yashin reportedly make?", options: ["Around 50", "Around 100", "Around 150", "Around 200"], correctAnswer: "Around 150" },
            { question: "What was Yashin’s famous nickname?", options: ["The Black Panther", "The Black Spider", "The Iron Curtain", "The Octopus"], correctAnswer: "The Black Spider" },
            { question: "Yashin is the only player of his position to have won which major individual award?", options: ["The Golden Boot", "The Puskás Award", "The Ballon d'Or", "The Golden Foot"], correctAnswer: "The Ballon d'Or" }
        ],
        hard: [
            { question: "What health issue led to the amputation of one of Yashin's legs?", options: ["Gangrene from a knee injury", "A severe fracture", "A blood clot", "Cancer"], correctAnswer: "Gangrene from a knee injury" },
            { question: "In addition to football, Yashin also won a Soviet championship in which other sport?", options: ["Basketball", "Volleyball", "Ice Hockey", "Handball"], correctAnswer: "Ice Hockey" },
            { question: "A trophy is named after Yachin, who has won it the most times?", options: ["Gianluigi Buffon", "Emiliano Martinez", "Manuel Neuer", "Thibaut Courtois"], correctAnswer: "Emiliano Martinez" }
        ]
    },
    // 15. George Best
    'p-leg-015': {
        easy: [
            { question: "Which country did George Best represent internationally?", options: ["England", "Republic of Ireland", "Scotland", "Northern Ireland"], correctAnswer: "Northern Ireland" },
            { question: "With which club did George Best become a global superstar?", options: ["Manchester City", "Liverpool", "Manchester United", "Chelsea"], correctAnswer: "Manchester United" },
            { question: "What was George Best’s most famous on-field skill?", options: ["Long-range shooting", "Heading", "Dribbling", "Tackling"], correctAnswer: "Dribbling" }
        ],
        medium: [
            { question: "How many goals did George Best score in Manchester United's 1967–68 title-winning season?", options: ["22", "28", "32", "35"], correctAnswer: "32" },
            { question: "Which American club did George Best join in 1976?", options: ["New York Cosmos", "LA Aztecs", "Fort Lauderdale Strikers", "San Jose Earthquakes"], correctAnswer: "LA Aztecs" },
            { question: "What was George Best’s most famous shirt number?", options: ["9", "10", "7", "11"], correctAnswer: "7" }
        ],
        hard: [
            { question: "In which European Cup final did George Best score in extra time to help Manchester United win?", options: ["1966 vs. Real Madrid", "1968 vs. Benfica", "1977 vs. Liverpool", "1999 vs. Bayern Munich"], correctAnswer: "1968 vs. Benfica" },
            { question: "Which football legend famously called George Best 'the fifth Beatle'?", options: ["Diego Maradona", "Johan Cruyff", "Pelé", "Franz Beckenbauer"], correctAnswer: "Pelé" },
            { question: "Which addiction famously and tragically affected George Best’s life and career?", options: ["Gambling", "Drugs", "Alcoholism", "Shopping"], correctAnswer: "Alcoholism" }
        ]
    },
    // 16. Eusébio
    'p-leg-016': {
        easy: [
            { question: "Which country did Eusébio star for at the 1966 World Cup?", options: ["Brazil", "Angola", "Portugal", "Mozambique"], correctAnswer: "Portugal" },
            { question: "With which club was Eusébio most famous?", options: ["Sporting CP", "FC Porto", "Benfica", "Belenenses"], correctAnswer: "Benfica" },
            { question: "What was Eusébio's nickname?", options: ["The Black Panther", "The Black Pearl", "The King", "O Mágico"], correctAnswer: "The Black Panther" }
        ],
        medium: [
            { question: "How many goals did Eusébio score at the 1966 World Cup to win the Golden Boot?", options: ["6", "7", "9", "11"], correctAnswer: "9" },
            { question: "In which African country was Eusébio born?", options: ["Angola", "Cape Verde", "Guinea-Bissau", "Mozambique"], correctAnswer: "Mozambique" },
            { question: "What was Eusébio’s most famous shirt number for Portugal?", options: ["9", "10", "11", "13"], correctAnswer: "13" }
        ],
        hard: [
            { question: "In the 1968 European Cup final, Eusébio famously applauded which opponent's save against him?", options: ["Lev Yashin", "Gordon Banks", "Sepp Maier", "Alex Stepney"], correctAnswer: "Alex Stepney" },
            { question: "Which political regime prevented Eusébio from transferring to other European clubs during his prime?", options: ["Soviet Union", "Francoist Spain", "Estado Novo", " Weimar Republic"], correctAnswer: "Estado Novo" },
            { question: "What does the statue of Eusébio outside Benfica’s stadium depict him doing?", options: ["Lifting a trophy", "Celebrating", "Preparing to shoot", "Waving to fans"], correctAnswer: "Preparing to shoot" }
        ]
    },
    // 17. Marco van Basten
    'p-leg-017': {
        easy: [
            { question: "Which country did Marco van Basten win EURO 1988 with?", options: ["Germany", "Italy", "Netherlands", "France"], correctAnswer: "Netherlands" },
            { question: "Which club did van Basten win multiple European Cups with?", options: ["Ajax", "Juventus", "AC Milan", "Barcelona"], correctAnswer: "AC Milan" },
            { question: "Marco van Basten's most famous goal was what type of spectacular strike?", options: ["Bicycle kick", "Diving header", "Scorpion kick", "Volley"], correctAnswer: "Volley" }
        ],
        medium: [
            { question: "How many Ballon d'Or awards did Marco van Basten win?", options: ["1", "2", "3", "4"], correctAnswer: "3" },
            { question: "Which injury tragically forced Marco van Basten to retire early?", options: ["Knee injury", "Hip injury", "Ankle injury", "Back injury"], correctAnswer: "Ankle injury" },
            { question: "Who were van Basten’s famous Dutch teammates at AC Milan?", options: ["Koeman and Wouters", "Bergkamp and Jonk", "Gullit and Rijkaard", "de Boer and Eijkelkamp"], correctAnswer: "Gullit and Rijkaard" }
        ],
        hard: [
            { question: "In his final professional match, the 1993 Champions League final, who was AC Milan's manager?", options: ["Arrigo Sacchi", "Nereo Rocco", "Fabio Capello", "Carlo Ancelotti"], correctAnswer: "Fabio Capello" },
            { question: "What post-playing role did van Basten take with the Dutch national team from 2004-2008?", options: ["Assistant Coach", "Sporting Director", "Head Coach", "Youth Coordinator"], correctAnswer: "Head Coach" },
            { question: "How many goals did Van Basten score against IFK Göteberg, in the 1992 champions league matchup?", options: ["3", "4", "5", "6"], correctAnswer: "4" }
        ]
    },
    // 18. Bobby Charlton
    'p-leg-018': {
        easy: [
            { question: "Which country did Bobby Charlton win the World Cup with in 1966?", options: ["Scotland", "Wales", "England", "Northern Ireland"], correctAnswer: "England" },
            { question: "With which club did Bobby Charlton spend the majority of his career?", options: ["Preston North End", "Manchester City", "Manchester United", "Leeds United"], correctAnswer: "Manchester United" },
            { question: "What was Bobby Charlton’s trademark skill?", options: ["Dribbling", "Heading", "Long-range shooting", "Tackling"], correctAnswer: "Long-range shooting" }
        ],
        medium: [
            { question: "Bobby Charlton was a survivor of which tragic event in 1958?", options: ["The Ibrox disaster", "The Munich air disaster", "The Heysel disaster", "The Superga air disaster"], correctAnswer: "The Munich air disaster" },
            { question: "What was the name of Bobby Charlton's brother, who was also a 1966 World Cup winner?", options: ["Tommy Charlton", "Stan Charlton", "Jack Charlton", "George Charlton"], correctAnswer: "Jack Charlton" },
            { question: "Which number did Bobby Charlton most famously wear for Manchester United?", options: ["7", "8", "9", "11"], correctAnswer: "9" }
        ],
        hard: [
            { question: "Among these records, which one does Bobby Charlton hold?", options: ["Oldest player to feature at the World Cup finals for England", "Most appearances for England", "Most appearances for Man Utd", "Fastest to reach 100 appearances"], correctAnswer: "Wayne Rooney" },
            { question: "In which match did Bobby Charlton score twice to send England to the 1966 World Cup final?", options: ["Quarter-final vs. Argentina", "Semi-final vs. Portugal", "Group stage vs. Mexico", "Final vs. West Germany"], correctAnswer: "Semi-final vs. Portugal" },
            { question: "Among these players, who admires the most Sir Bobby Charlton?", options: ["Endrick", "Cole Palmer", "Désiré Doué", "Lamine Yamal"], correctAnswer: "Endrick" }
        ]
    },
    // 19. Lothar Matthäus
    'p-leg-019': {
        easy: [
            { question: "Which country did Lothar Matthäus captain to the 1990 World Cup?", options: ["East Germany", "Austria", "West Germany", "Germany"], correctAnswer: "West Germany" },
            { question: "With which club did Lothar Matthäus win most of his titles?", options: ["Borussia Mönchengladbach", "Inter Milan", "Bayern Munich", "NY/NJ MetroStars"], correctAnswer: "Bayern Munich" },
            { question: "What position did Lothar Matthäus excel in for most of his career?", options: ["Striker", "Winger", "Goalkeeper", "Midfielder"], correctAnswer: "Midfielder" }
        ],
        medium: [
            { question: "Lothar Matthäus holds the record for playing in how many World Cups?", options: ["3", "4", "5", "6"], correctAnswer: "5" },
            { question: "Which Italian club did Lothar Matthäus play for, winning a Serie A title?", options: ["AC Milan", "Juventus", "Roma", "Inter Milan"], correctAnswer: "Inter Milan" },
            { question: "What was Lothar Matthäus’ famous shirt number for Germany?", options: ["8", "6", "10", "4"], correctAnswer: "10" }
        ],
        hard: [
            { question: "In the 1999 Champions League final, Matthäus was substituted off before which team's dramatic comeback?", options: ["Real Madrid", "Barcelona", "Manchester United", "Juventus"], correctAnswer: "Manchester United" },
            { question: "Which national team did Lothar Matthäus unsuccessfully manage?", options: ["Bulgaria", "Hungary", "Austria", "Both A and B"], correctAnswer: "Both A and B" },
            { question: "Towards the end of his career, what position was Matthäus successfully converted to?", options: ["Shadow Striker", "Inverted Fullback", "Sweeper", "Advanced playmaker"], correctAnswer: "Sweeper" }
        ]
    },
    // 20. Xavi Hernández
    'p-leg-020': {
        easy: [
            { question: "Which country did Xavi win the 2010 World Cup with?", options: ["Brazil", "Argentina", "Spain", "Portugal"], correctAnswer: "Spain" },
            { question: "With which club did Xavi spend most of his career?", options: ["Real Madrid", "Al-Sadd", "Barcelona", "Espanyol"], correctAnswer: "Barcelona" },
            { question: "What was Xavi’s playing style famously known as?", options: ["Catenaccio", "Gegenpressing", "Tiki-taka", "Route One"], correctAnswer: "Tiki-taka" }
        ],
        medium: [
            { question: "How many passes did Xavi complete in the 2011 Champions League final against Man Utd?", options: ["98", "121", "148", "172"], correctAnswer: "148" },
            { question: "Which Qatari club did Xavi join after leaving Barcelona?", options: ["Al-Duhail", "Al-Rayyan", "Al-Gharafa", "Al-Sadd"], correctAnswer: "Al-Sadd" },
            { question: "Who was Xavi’s most famous midfield partner at Barcelona and Spain?", options: ["Sergio Busquets", "Cesc Fàbregas", "David Silva", "Andrés Iniesta"], correctAnswer: "Andrés Iniesta" }
        ],
        hard: [
            { question: "In which UEFA Champions League final did Xavi provide an assist for Lionel Messi’s headed goal, and was also named UEFA’s Man of the Match?", options: ["2006 vs. Arsenal", "2009 vs. Manchester United", "2011 vs. Manchester United", "2015 vs. Juventus"], correctAnswer: "2009 vs. Manchester United" },
            { question: "What was Xavi’s first head coaching job?", options: ["Barcelona B", "Spain U21", "Al-Sadd", "Al-Qadsiah"], correctAnswer: "Al-Sadd" },
            { question: "The 2009 FIFA Club World Cup final victory completed a historic 'sextuple' for Xavi's Barcelona. Who did they beat?", options: ["Boca Juniors", "Internacional", "Santos", "Estudiantes"], correctAnswer: "Estudiantes" }
        ]
    },
    // 21. Andrés Iniesta
    'p-leg-021': {
        easy: [
            { question: "Which country did Andrés Iniesta score the winning goal for in the 2010 World Cup final?", options: ["Argentina", "Netherlands", "Spain", "Brazil"], correctAnswer: "Spain" },
            { question: "Which club did Andrés Iniesta spend most of his career at?", options: ["Vissel Kobe", "Barcelona", "Al-Sadd", "Atlético Madrid"], correctAnswer: "Barcelona" },
            { question: "What message did Andrés Iniesta reveal on his shirt after the 2010 World Cup final?", options: ["Para Siempre", "Gracias Familia", "Dani Jarque – Siempre con nosotros", "Visca Barça"], correctAnswer: "Dani Jarque – Siempre con nosotros" }
        ],
        medium: [
            { question: "How many Champions League titles did Andrés Iniesta win?", options: ["2", "3", "4", "5"], correctAnswer: "4" },
            { question: "Which Japanese club did Andrés Iniesta join in 2018?", options: ["Urawa Red Diamonds", "Vissel Kobe", "Kashima Antlers", "Yokohama F. Marinos"], correctAnswer: "Vissel Kobe" },
            { question: "What rare honor did Andrés Iniesta receive from Real Madrid fans in 2015?", options: ["Named honorary captain", "Standing ovation at the Bernabéu", "Shirt retirement", "Golden boot award"], correctAnswer: "Standing ovation at the Bernabéu" }
        ],
        hard: [
            { question: "In which minute did Andrés Iniesta score the decisive goal in the 2010 FIFA World Cup final, securing Spain’s first-ever World Cup title?", options: ["109th minute", "112th minute", "116th minute", "120th minute"], correctAnswer: "116th minute" },
            { question: "How many assists did Andrés Iniesta provide in Spain's EURO 2012 win?", options: ["1", "3", "5", "7"], correctAnswer: "3" },
            { question: "What is the name of Andrés Iniesta's wine brand?", options: ["Bodega Iniesta", "Viña Iniesta", "Campo Iniesta", "Cepa del Mago"], correctAnswer: "Bodega Iniesta" }
        ]
    },

    // 22. Ronaldinho
    'p-leg-022': {
        easy: [
            { question: "Which country did Ronaldinho win the 2002 World Cup with?", options: ["Argentina", "Brazil", "France", "Portugal"], correctAnswer: "Brazil" },
            { question: "Which club did Ronaldinho win the 2006 Champions League with?", options: ["Barcelona", "AC Milan", "PSG", "Atlético Mineiro"], correctAnswer: "Barcelona" },
            { question: "What was Ronaldinho's signature dribbling move?", options: ["Cruyff Turn", "Elástico/Flip Flap", "Rainbow Flick", "Step Over"], correctAnswer: "Elástico/Flip Flap" }
        ],
        medium: [
            { question: "How many Ballon d'Or awards did Ronaldinho win?", options: ["0", "1", "2", "3"], correctAnswer: "1" },
            { question: "Which Brazilian club did Ronaldinho leave after a dispute over unpaid wages in 2012?", options: ["Flamengo", "Atlético Mineiro", "Fluminense", "Santos"], correctAnswer: "Flamengo" },
            { question: "What shirt number did Ronaldinho wear at AC Milan?", options: ["10", "21", "80", "99"], correctAnswer: "80" }
        ],
        hard: [
            { question: "Which England goalkeeper did Ronaldinho famously lob from 40 yards at the 2002 World Cup?", options: ["David Seaman", "Paul Robinson", "Nigel Martyn", "David James"], correctAnswer: "David Seaman" },
            { question: "In which country was Ronaldinho imprisoned for using a fake passport in 2020?", options: ["Argentina", "Paraguay", "Uruguay", "Bolivia"], correctAnswer: "Paraguay" },
            { question: "Who was the next Brazilian to win the Ballon d'Or after Ronaldinho?", options: ["Neymar", "Kaká", "Ronaldo", "Rivaldo"], correctAnswer: "Kaká" }
        ]
    },

    // 23. Thierry Henry
    'p-leg-023': {
        easy: [
            { question: "Which country is Thierry Henry the all-time top scorer for?", options: ["Belgium", "France", "Senegal", "Martinique"], correctAnswer: "France" },
            { question: "Which Premier League club did Thierry Henry become a legend at?", options: ["Arsenal", "Chelsea", "Liverpool", "Manchester United"], correctAnswer: "Arsenal" },
            { question: "What was Thierry Henry's signature goal celebration?", options: ["Backflip", "Kneeling slide", "Heart hands", "Shhh gesture"], correctAnswer: "Kneeling slide" }
        ],
        medium: [
            { question: "How many Premier League Golden Boots did Thierry Henry win?", options: ["2", "3", "4", "5"], correctAnswer: "4" },
            { question: "Which MLS club did Thierry Henry join in 2010?", options: ["LA Galaxy", "New York Red Bulls", "Toronto FC", "Inter Miami"], correctAnswer: "New York Red Bulls" },
            { question: "Who was Thierry Henry's strike partner during Arsenal's 'Invincibles' season?", options: ["Dennis Bergkamp", "Robin van Persie", "Emmanuel Adebayor", "Nicolas Anelka"], correctAnswer: "Dennis Bergkamp" }
        ],
        hard: [
            { question: "Against which country did Thierry Henry's handball assist a controversial World Cup qualifying goal in 2009?", options: ["Italy", "Ireland", "Scotland", "Germany"], correctAnswer: "Ireland" },
            { question: "How many assists did Thierry Henry provide in Arsenal's 2003–04 unbeaten season?", options: ["6", "7", "8", "10"], correctAnswer: "6" },
            { question: "Which Ligue 1 club did Thierry Henry unsuccessfully manage?", options: ["Monaco", "Marseille", "Lyon", "Bordeaux"], correctAnswer: "Monaco" }
        ]
    },

    // 24. Gianluigi Buffon
    'p-leg-024': {
        easy: [
            { question: "Which country did Gianluigi Buffon win the 2006 World Cup with?", options: ["France", "Germany", "Italy", "Spain"], correctAnswer: "Italy" },
            { question: "Which club did Gianluigi Buffon spend most of his career with?", options: ["AC Milan", "Inter Milan", "Juventus", "Parma"], correctAnswer: "Juventus" },
            { question: "In which year did Gianluigi Buffon win his first Serie A title with Juventus?", options: ["2002", "", "2005", "2012"], correctAnswer: "2017" }
        ],
        medium: [
            { question: "How much did Juventus pay for Gianluigi Buffon in 2001?", options: ["€25 million", "€36 million", "€45 million", "€52 million"], correctAnswer: "€52 million" },
            { question: "Which French club did Gianluigi Buffon play for in 2018–19?", options: ["AS Monaco", "Lyon", "Marseille", "Paris Saint-Germain"], correctAnswer: "Paris Saint-Germain" },
            { question: "Who broke Gianluigi Buffon's Serie A clean sheet record?", options: ["Samir Handanović, 2020", "Walter Zenga", "Dino Zoff", "Christian Abbiati"], correctAnswer: "Samir Handanović, 2020" }
        ],
        hard: [
            { question: "What is the record for the longest streak of minutes without conceding a goal in Serie A, set by Gianluigi Buffon in the 2015-16 season?", options: ["929 minutes", "947 minutes", "974 minutes", "1002 minutes"], correctAnswer: "974 minutes" },
            { question: "How many Champions League finals did Gianluigi Buffon lose?", options: ["1", "2", "3", "4"], correctAnswer: "3" },
            { question: "Against which player did Gianluigi Buffon's record streak without conceding in Serie A finally end, due to a penalty?", options: ["Francesco Totti", "Andrea Belotti", "Mauro Icardi", "Edin Džeko"], correctAnswer: "Andrea Belotti" }
        ]
    },

    // 25. Romário
    'p-leg-025': {
        easy: [
            { question: "Which country did Romário win the 1994 World Cup with?", options: ["Argentina", "Brazil", "Italy", "Netherlands"], correctAnswer: "Brazil" },
            { question: "For which Spanish club did Romário score over 30 goals in a single season?", options: ["Atlético Madrid", "Barcelona", "Real Madrid", "Valencia"], correctAnswer: "Barcelona" },
            { question: "What was Romário's nickname?", options: ["El Fenómeno", "O Baixinho / The Little One", "El Pistolero", "O Rei"], correctAnswer: "O Baixinho / The Little One" }
        ],
        medium: [
            { question: "How many goals did Romário score in his career?", options: ["Around 500", "Around 800", "Around 900", "Around 1000"], correctAnswer: "Around 900" },
            { question: "Which Dutch club did Romário play for before joining Barcelona?", options: ["Ajax", "Feyenoord", "PSV Eindhoven", "FC Twente"], correctAnswer: "PSV Eindhoven" },
            { question: "Who was the Italian goalkeeper Romário scored against in the 1994 World Cup final penalty shootout?", options: ["Gianluca Pagliuca", "Walter Zenga", "Luca Marchegiani", "Francesco Toldo"], correctAnswer: "Gianluca Pagliuca" }
        ],
        hard: [
            { question: "Which political office did Romário hold after retiring?", options: ["Congressman", "Governor", "Mayor", "Senator"], correctAnswer: "Senator" },
            { question: "At which Olympic Games did Romário win the Golden Boot as the tournament’s top scorer?", options: ["1984 Los Angeles", "1988 Seoul", "1992 Barcelona", "1996 Atlanta"], correctAnswer: "1988 Seoul" },
            { question: "Romário scored a hat-trick in his La Liga debut for Barcelona. Against which team did this occur?", options: ["Real Madrid", "Real Sociedad", "Osasuna", "Sevilla"], correctAnswer: "Real Sociedad" }
        ]
    },

    // 26. Roberto Baggio
    'p-leg-026': {
        easy: [
            { question: "For which country did Roberto Baggio miss a decisive penalty in the 1994 World Cup final?", options: ["Argentina", "Brazil", "Italy", "Spain"], correctAnswer: "Italy" },
            { question: "At which club did Roberto Baggio win the Ballon d'Or in 1993?", options: ["AC Milan", "Inter Milan", "Juventus", "Fiorentina"], correctAnswer: "Juventus" },
            { question: "What was Roberto Baggio's famous hairstyle called?", options: ["The Divine Ponytail", "The Mullet", "The Perm", "The Buzzcut"], correctAnswer: "The Divine Ponytail" }
        ],
        medium: [
            { question: "For how many Serie A clubs did Roberto Baggio play?", options: ["4", "5", "7", "9"], correctAnswer: "7" },
            { question: "Which religion did Roberto Baggio convert to in 1988?", options: ["Buddhism", "Islam", "Judaism", "Sikhism"], correctAnswer: "Buddhism" },
            { question: "Who broke Roberto Baggio's Italian transfer record in 1990?", options: ["Christian Vieri", "Alessandro Del Piero", "Gianluigi Buffon", "Gabriel Batistuta"], correctAnswer: "Gianluigi Buffon" }
        ],
        hard: [
            { question: "Roberto Baggio is the only Italian to have scored in three different FIFA World Cups. How many total World Cup goals did he score, holding the record for Italy?", options: ["7", "8", "9", "10"], correctAnswer: "9" },
            { question: "How many goals did Roberto Baggio score at the 1994 World Cup before the final?", options: ["3", "5", "7", "9"], correctAnswer: "5" },
            { question: "Which club retired Roberto Baggio's shirt number 10?", options: ["Brescia", "Fiorentina", "Inter Milan", "Juventus"], correctAnswer: "Brescia" }
        ]
    },
    // 27. Sócrates HERE NEED to check
    'p-leg-027': {
        easy: [
            { question: "Which country did Sócrates captain at the 1982 World Cup?", options: ["Argentina", "Brazil", "Italy", "Spain"], correctAnswer: "Brazil" },
            { question: "What was Sócrates' profession outside football?", options: ["Lawyer", "Medical doctor", "Professor", "Journalist"], correctAnswer: "Medical doctor" },
            { question: "Which club was Sócrates most associated with?", options: ["Corinthians", "Flamengo", "Santos", "São Paulo"], correctAnswer: "Corinthians" }
        ],
        medium: [
            { question: "How did Sócrates protest against Brazil's dictatorship?", options: ["Refused to play", "Led the 'Democracia Corinthiana' movement", "Wrote protest songs", "Wore black armbands"], correctAnswer: "Led the 'Democracia Corinthiana' movement" },
            { question: "Which Italian club did Sócrates play for in 1984–85?", options: ["Fiorentina", "Inter Milan", "Juventus", "Roma"], correctAnswer: "Fiorentina" },
            { question: "What was Sócrates' signature move?", options: ["No-look backheel pass", "Rabona cross", "Elástico dribble", "Bicycle kick"], correctAnswer: "No-look backheel pass" }
        ],
        hard: [
            { question: "Which addiction shortened Sócrates' life and career?", options: ["Alcoholism", "Gambling", "Smoking", "Painkillers"], correctAnswer: "Alcoholism" },
            { question: "How many caps did Sócrates earn for Brazil?", options: ["42", "50", "60", "72"], correctAnswer: "60" },
            { question: "What unusual pre-match ritual did Sócrates have?", options: ["Meditation", "Smoking in the locker room", "Drinking coffee", "Reading poetry"], correctAnswer: "Smoking in the locker room" }
        ]
    },

    // 28. Franco Baresi
    'p-leg-028': {
        easy: [
            { question: "Which club did Franco Baresi spend his entire career at?", options: ["AC Milan", "Inter Milan", "Juventus", "Roma"], correctAnswer: "AC Milan" },
            { question: "What defensive position did Franco Baresi revolutionize?", options: ["Center-back", "Full-back", "Sweeper/Libero", "Wing-back"], correctAnswer: "Sweeper/Libero" },
            { question: "How many European Cups/Champions Leagues did Franco Baresi win?", options: ["1", "2", "3", "4"], correctAnswer: "3" }
        ],
        medium: [
            { question: "Which number was retired by AC Milan in Franco Baresi's honor?", options: ["3", "5", "6", "8"], correctAnswer: "6" },
            { question: "Who was Franco Baresi's famous defensive partner at Milan?", options: ["Alessandro Costacurta", "Billy Costacurta", "Paolo Maldini", "Mauro Tassotti"], correctAnswer: "Paolo Maldini" },
            { question: "How many World Cups did Franco Baresi play in?", options: ["1", "2", "3", "4"], correctAnswer: "3" }
        ],
        hard: [
            { question: "Which injury ruled Franco Baresi out of the 1986 World Cup?", options: ["Broken leg", "Concussion", "Knee ligament tear", "Shoulder dislocation"], correctAnswer: "Knee ligament tear" },
            { question: "What record did Franco Baresi set in the 1994 World Cup final?", options: ["Most tackles", "Oldest outfield player in a final at the time", "Most clearances", "Fastest yellow card"], correctAnswer: "Oldest outfield player in a final at the time" },
            { question: "Which Milan manager called Franco Baresi 'the smartest defender ever'?", options: ["Arrigo Sacchi", "Fabio Capello", "Carlo Ancelotti", "Nereo Rocco"], correctAnswer: "Arrigo Sacchi" }
        ]
    },

    // 29. Karl-Heinz Rummenigge
    'p-leg-029': {
        easy: [
            { question: "Which country did Karl-Heinz Rummenigge win EURO 1980 with?", options: ["East Germany", "France", "Netherlands", "West Germany"], correctAnswer: "West Germany" },
            { question: "Which club did Karl-Heinz Rummenigge become a legend at?", options: ["Bayern Munich", "Borussia Dortmund", "Hamburg", "Köln"], correctAnswer: "Bayern Munich" },
            { question: "How many Ballon d'Or awards did Karl-Heinz Rummenigge win?", options: ["0", "1", "2", "3"], correctAnswer: "2" }
        ],
        medium: [
            { question: "Which Italian club did Karl-Heinz Rummenigge join in 1984?", options: ["AC Milan", "Inter Milan", "Juventus", "Roma"], correctAnswer: "Inter Milan" },
            { question: "What was Karl-Heinz Rummenigge's nickname?", options: ["Der Kaiser", "Kalle", "Der Bomber", "Toni"], correctAnswer: "Kalle" },
            { question: "Who broke Karl-Heinz Rummenigge's Bundesliga scoring record?", options: ["Gerd Müller", "Jupp Heynckes", "Klaus Fischer", "Uwe Seeler"], correctAnswer: "Gerd Müller" }
        ],
        hard: [
            { question: "What executive role does Karl-Heinz Rummenigge currently hold?", options: ["Bayern Munich CEO", "DFB President", "UEFA Vice President", "FIFA Council Member"], correctAnswer: "Bayern Munich CEO" },
            { question: "How many goals did Karl-Heinz Rummenigge score at the 1982 World Cup?", options: ["3", "5", "7", "9"], correctAnswer: "5" },
            { question: "Which Bundesliga rule is associated with Karl-Heinz Rummenigge's transfer?", options: ["Foreign player limits ('Rummenigge Rule')", "Bosman ruling", "Homegrown quota", "Transfer windows"], correctAnswer: "Foreign player limits ('Rummenigge Rule')" }
        ]
    },

    // 30. Kaká
    'p-leg-030': {
        easy: [
            { question: "Which country did Kaká win the 2002 World Cup with?", options: ["Argentina", "Brazil", "Germany", "Italy"], correctAnswer: "Brazil" },
            { question: "At which club did Kaká win the Ballon d'Or in 2007?", options: ["AC Milan", "Real Madrid", "São Paulo", "Inter Milan"], correctAnswer: "AC Milan" },
            { question: "What was Kaká's signature goal celebration?", options: ["Backflip", "Heart hands", "Pointing to the sky", "Kneeling prayer"], correctAnswer: "Pointing to the sky" }
        ],
        medium: [
            { question: "How much did Real Madrid pay for Kaká in 2009?", options: ["€45 million", "€56 million", "€67 million", "€78 million"], correctAnswer: "€67 million" },
            { question: "Which spinal injury nearly ended Kaká's career as a teenager?", options: ["Broken neck", "Fractured vertebra from a swimming pool accident", "Herniated disc", "Scoliosis"], correctAnswer: "Fractured vertebra from a swimming pool accident" },
            { question: "Who was Kaká's famous midfield partner at Milan?", options: ["Andrea Pirlo", "Clarence Seedorf", "Gennaro Gattuso", "Rui Costa"], correctAnswer: "Clarence Seedorf" }
        ],
        hard: [
            { question: "Which MLS club did Kaká join in 2014?", options: ["LA Galaxy", "New York City FC", "Orlando City", "Toronto FC"], correctAnswer: "Orlando City" },
            { question: "How many assists did Kaká provide in the 2006–07 Champions League?", options: ["4", "6", "8", "10"], correctAnswer: "6" },
            { question: "What international humanitarian role does Kaká hold?", options: ["Red Cross Ambassador", "UNICEF Ambassador", "WHO Goodwill Ambassador", "Peace Corps Volunteer"], correctAnswer: "UNICEF Ambassador" }
        ]
    },

    // 31. Kenny Dalglish
    'p-leg-031': {
        easy: [
            { question: "Which country did Kenny Dalglish captain?", options: ["England", "Ireland", "Scotland", "Wales"], correctAnswer: "Scotland" },
            { question: "Which club did Kenny Dalglish become a legend at?", options: ["Celtic", "Liverpool", "Manchester United", "Rangers"], correctAnswer: "Liverpool" },
            { question: "What was Kenny Dalglish's nickname?", options: ["King Kenny", "Sir Kenny", "The Dalglish Dynamo", "Braveheart"], correctAnswer: "King Kenny" }
        ],
        medium: [
            { question: "How many European Cups did Kenny Dalglish win with Liverpool?", options: ["1", "2", "3", "4"], correctAnswer: "3" },
            { question: "Which tragedy did Kenny Dalglish help Liverpool through as manager?", options: ["Bradford fire", "Heysel disaster", "Hillsborough disaster", "Munich air crash"], correctAnswer: "Hillsborough disaster" },
            { question: "Who broke Kenny Dalglish's British transfer record in 1977?", options: ["Bryan Robson in 1981", "No one until Bryan Robson in 1981", "Kevin Keegan", "Trevor Francis"], correctAnswer: "No one until Bryan Robson in 1981" }
        ],
        hard: [
            { question: "Which club did Kenny Dalglish serve as player-manager?", options: ["Blackburn Rovers", "Celtic", "Liverpool", "Newcastle United"], correctAnswer: "Liverpool" },
            { question: "How many goals did Kenny Dalglish score for Scotland?", options: ["12", "20", "30", "42"], correctAnswer: "30" },
            { question: "What cancer charity does Kenny Dalglish support?", options: ["Cancer Research UK", "Macmillan Cancer Support", "Marina Dalglish Appeal", "Marie Curie"], correctAnswer: "Marina Dalglish Appeal" }
        ]
    },

    // 32. Kevin Keegan
    'p-leg-032': {
        easy: [
            { question: "Which country did Kevin Keegan captain?", options: ["England", "Ireland", "Scotland", "Wales"], correctAnswer: "England" },
            { question: "With which German club did Kevin Keegan win the Ballon d'Or?", options: ["Bayern Munich", "Borussia Mönchengladbach", "Hamburg", "Stuttgart"], correctAnswer: "Hamburg" },
            { question: "What was Kevin Keegan's famous hairstyle in the 1970s?", options: ["Afro", "Bald", "Mullet", "Perm"], correctAnswer: "Perm" }
        ],
        medium: [
            { question: "How much did Hamburg pay Liverpool for Kevin Keegan in 1977?", options: ["£250,000", "£500,000", "£750,000", "£1 million"], correctAnswer: "£500,000" },
            { question: "Which club did Kevin Keegan manage during the 'Entertainers' era?", options: ["Fulham", "Manchester City", "Newcastle United", "Southampton"], correctAnswer: "Newcastle United" },
            { question: "Who ended Kevin Keegan's Ballon d'Or streak in 1980?", options: ["Karl-Heinz Rummenigge", "Michel Platini", "Paolo Rossi", "Ruud Gullit"], correctAnswer: "Karl-Heinz Rummenigge" }
        ],
        hard: [
            { question: "Which famous TV rant made Kevin Keegan a media sensation in 1996?", options: ["'I'd love it' rant", "'Squeaky bum time'", "'Football bloody hell'", "'This means more'"], correctAnswer: "'I'd love it' rant" },
            { question: "How many goals did Kevin Keegan score in the 1973–74 season for Liverpool?", options: ["20", "25", "30", "35"], correctAnswer: "30" },
            { question: "Which third-tier English club did Kevin Keegan manage in 1998–99?", options: ["Fulham", "Huddersfield Town", "Portsmouth", "Wimbledon"], correctAnswer: "Fulham" }
        ]
    },

    // 33. Zico
    'p-leg-033': {
        easy: [
            { question: "Which country did Zico star for?", options: ["Argentina", "Brazil", "Italy", "Portugal"], correctAnswer: "Brazil" },
            { question: "Which club is Zico most associated with?", options: ["Flamengo", "Santos", "São Paulo", "Vasco da Gama"], correctAnswer: "Flamengo" },
            { question: "What was Zico's nickname?", options: ["Black Pearl", "Little Bird", "White Pelé", "The Wizard"], correctAnswer: "White Pelé" }
        ],
        medium: [
            { question: "How many goals did Zico score in the 1976–77 season for Flamengo?", options: ["49", "63", "72", "81"], correctAnswer: "81" },
            { question: "Which Italian club did Zico play for from 1983–85?", options: ["Fiorentina", "Inter Milan", "Juventus", "Udinese"], correctAnswer: "Udinese" },
            { question: "Who were Zico's famous midfield partners at the 1982 World Cup?", options: ["Falcão and Cerezo", "Rivellino and Gérson", "Sócrates and Falcão", "Toninho Cerezo and Dirceu"], correctAnswer: "Sócrates and Falcão" }
        ],
        hard: [
            { question: "Which World Cup did Zico miss due to injury?", options: ["1974", "1978", "1982", "1986"], correctAnswer: "1978" },
            { question: "How many free-kick goals did Zico score in his career?", options: ["50+", "75+", "Over 100", "126"], correctAnswer: "Over 100" },
            { question: "Which national team did Zico coach in 2011–12?", options: ["Iraq", "Japan", "Qatar", "Russia"], correctAnswer: "Iraq" }
        ]
    },

    // 34. Stanley Matthews
    'p-leg-034': {
        easy: [
            { question: "Which country did Stanley Matthews play for?", options: ["England", "Northern Ireland", "Scotland", "Wales"], correctAnswer: "England" },
            { question: "What was Stanley Matthews' nickname?", options: ["The Cannon", "The Magician", "The Wizard of Dribble", "Whizzing Stanley"], correctAnswer: "The Wizard of Dribble" },
            { question: "How old was Stanley Matthews when he retired?", options: ["38", "42", "46", "50"], correctAnswer: "50" }
        ],
        medium: [
            { question: "Which club did Stanley Matthews play for until age 50?", options: ["Blackpool", "Port Vale", "Stoke City", "West Bromwich Albion"], correctAnswer: "Stoke City" },
            { question: "Which FA Cup final is named after Stanley Matthews?", options: ["1948", "1953 ('Matthews Final')", "1956", "1961"], correctAnswer: "1953 ('Matthews Final')" },
            { question: "Who knighted Stanley Matthews in 1965?", options: ["King George VI", "Prince Philip", "Queen Elizabeth II", "Winston Churchill"], correctAnswer: "Queen Elizabeth II" }
        ],
        hard: [
            { question: "Which war interrupted Stanley Matthews' football career?", options: ["Korean War", "Vietnam War", "World War I", "World War II"], correctAnswer: "World War II" },
            { question: "How many England caps did Stanley Matthews earn?", options: ["44", "54", "64", "74"], correctAnswer: "54" },
            { question: "Which modern player adopted Stanley Matthews' strict diet?", options: ["Cristiano Ronaldo", "Lionel Messi", "N'Golo Kanté", "Zlatan Ibrahimović"], correctAnswer: "Cristiano Ronaldo" }
        ]
    },

    // 35. Hristo Stoichkov
    'p-leg-035': {
        easy: [
            { question: "Which country did Hristo Stoichkov lead to the 1994 World Cup semi-finals?", options: ["Bulgaria", "Czech Republic", "Hungary", "Yugoslavia"], correctAnswer: "Bulgaria" },
            { question: "With which club did Hristo Stoichkov win the Ballon d'Or?", options: ["Barcelona", "CSKA Sofia", "Parma", "PSG"], correctAnswer: "Barcelona" },
            { question: "What was Hristo Stoichkov's notorious trait?", options: ["Diving", "Fiery temper", "Slow pace", "Weak right foot"], correctAnswer: "Fiery temper" }
        ],
        medium: [
            { question: "How many goals did Hristo Stoichkov score at the 1994 World Cup?", options: ["3", "6", "9", "12"], correctAnswer: "6" },
            { question: "Which MLS club did Hristo Stoichkov join in 2000?", options: ["Chicago Fire", "DC United", "LA Galaxy", "NY/NJ MetroStars"], correctAnswer: "Chicago Fire" },
            { question: "Who was Hristo Stoichkov's coach during Barcelona's 'Dream Team' era?", options: ["Johan Cruyff", "Louis van Gaal", "Bobby Robson", "Terry Venables"], correctAnswer: "Johan Cruyff" }
        ],
        hard: [
            { question: "For what did Hristo Stoichkov receive an 8-month ban in 1990?", options: ["Assaulting a referee", "Bribery", "Doping", "Match-fixing"], correctAnswer: "Assaulting a referee" },
            { question: "How many hat-tricks did Hristo Stoichkov score for Barcelona?", options: ["3", "5", "7", "9"], correctAnswer: "5" },
            { question: "Which political role did Hristo Stoichkov take after retirement?", options: ["Bulgarian FA President", "EU Sports Ambassador", "Advisor to Bulgaria's national team", "Member of Parliament"], correctAnswer: "Advisor to Bulgaria's national team" }
        ]
    },

    // 36. Garrincha
    'p-leg-036': {
        easy: [
            { question: "Which country did Garrincha win two World Cups with?", options: ["Argentina", "Brazil", "Italy", "Uruguay"], correctAnswer: "Brazil" },
            { question: "What physical disability did Garrincha have from childhood?", options: ["Blind in one eye", "Bent right leg", "Missing fingers", "One arm shorter"], correctAnswer: "Bent right leg" },
            { question: "Which club was Garrincha most loyal to?", options: ["Botafogo", "Flamengo", "Palmeiras", "Vasco da Gama"], correctAnswer: "Botafogo" }
        ],
        medium: [
            { question: "How many goals did Garrincha score at the 1962 World Cup?", options: ["2", "4", "6", "8"], correctAnswer: "4" },
            { question: "Which addiction ruined Garrincha's life?", options: ["Alcoholism", "Cocaine", "Gambling", "Painkillers"], correctAnswer: "Alcoholism" },
            { question: "Who was Garrincha's strike partner at the 1958 World Cup?", options: ["Didí", "Jairzinho", "Pelé", "Vavá"], correctAnswer: "Pelé" }
        ],
        hard: [
            { question: "How many children did Garrincha reportedly father?", options: ["At least 8", "At least 10", "At least 12", "At least 14"], correctAnswer: "At least 14" },
            { question: "What does the nickname 'Garrincha' mean?", options: ["Happy feet", "Little bird", "The cripple", "Wandering star"], correctAnswer: "Little bird" },
            { question: "What was Garrincha's last professional club?", options: ["Flamengo", "Olaria", "Portuguesa", "São Paulo"], correctAnswer: "Olaria" }
        ]
    },

    // 37. Dino Zoff
    'p-leg-037': {
        easy: [
            { question: "Which country did Dino Zoff captain to the 1982 World Cup?", options: ["Argentina", "Brazil", "Italy", "Spain"], correctAnswer: "Italy" },
            { question: "How old was Dino Zoff when he won the World Cup as captain?", options: ["36", "38", "40", "42"], correctAnswer: "40" },
            { question: "Which club did Dino Zoff win most of his titles with?", options: ["AC Milan", "Inter Milan", "Juventus", "Napoli"], correctAnswer: "Juventus" }
        ],
        medium: [
            { question: "How many Serie A titles did Dino Zoff win?", options: ["4", "6", "8", "10"], correctAnswer: "6" },
            { question: "What was Dino Zoff's record for minutes without conceding a goal in international football?", options: ["903", "1,142", "1,207", "1,443"], correctAnswer: "1,142" },
            { question: "Who broke Dino Zoff's clean sheet record?", options: ["Gianluigi Buffon", "Paolo Maldini", "Roberto Rosato", "Walter Zenga"], correctAnswer: "Gianluigi Buffon" }
        ],
        hard: [
            { question: "Which manager controversially benched Dino Zoff at the 1974 World Cup?", options: ["Enzo Bearzot", "Ferruccio Valcareggi", "Giovanni Trapattoni", "Vittorio Pozzo"], correctAnswer: "Enzo Bearzot" },
            { question: "How many goals did Dino Zoff concede at the 1982 World Cup?", options: ["3", "6", "9", "12"], correctAnswer: "6" },
            { question: "Which national team did Dino Zoff coach from 1998–2000?", options: ["Italy", "Lazio", "Portugal", "Uruguay"], correctAnswer: "Italy" }
        ]
    },

    // 38. Ruud Gullit
    'p-leg-038': {
        easy: [
            { question: "Which country did Ruud Gullit win EURO 1988 with?", options: ["Belgium", "France", "Netherlands", "West Germany"], correctAnswer: "Netherlands" },
            { question: "With which club did Ruud Gullit win the Ballon d'Or in 1987?", options: ["AC Milan", "Ajax", "PSV Eindhoven", "Sampdoria"], correctAnswer: "AC Milan" },
            { question: "What was Ruud Gullit's iconic hairstyle?", options: ["Afro", "Bald", "Dreadlocks", "Mullet"], correctAnswer: "Dreadlocks" }
        ],
        medium: [
            { question: "How much did AC Milan pay for Ruud Gullit in 1987?", options: ["£3 million", "£6 million", "£9 million", "£12 million"], correctAnswer: "£6 million" },
            { question: "Which Premier League club did Ruud Gullit manage as a player?", options: ["Chelsea", "Leeds United", "Newcastle United", "Tottenham Hotspur"], correctAnswer: "Chelsea" },
            { question: "Who were Ruud Gullit's famous Dutch teammates at Milan?", options: ["Dennis Bergkamp and Frank de Boer", "Edgar Davids and Patrick Kluivert", "Marco van Basten and Frank Rijkaard", "Wesley Sneijder and Arjen Robben"], correctAnswer: "Marco van Basten and Frank Rijkaard" }
        ],
        hard: [
            { question: "Which musical genre did Ruud Gullit release an album in?", options: ["Hip-hop", "Jazz", "Pop", "Reggae"], correctAnswer: "Reggae" },
            { question: "How many goals did Ruud Gullit score at EURO 1988?", options: ["0", "1", "3", "5"], correctAnswer: "1" },
            { question: "Which TV network does Ruud Gullit regularly work for as a pundit?", options: ["BBC", "BeIN Sports/ESPN", "CBS Sports", "Sky Sports"], correctAnswer: "BeIN Sports/ESPN" }
        ]
    },

    // 39. Sandro Mazzola
    'p-leg-039': {
        easy: [
            { question: "Which country did Sandro Mazzola star for?", options: ["Argentina", "Brazil", "Italy", "Spain"], correctAnswer: "Italy" },
            { question: "Which club did Sandro Mazzola spend his career with?", options: ["AC Milan", "Inter Milan", "Juventus", "Roma"], correctAnswer: "Inter Milan" },
            { question: "Who was Sandro Mazzola's famous footballer father?", options: ["Ferruccio Mazzola", "Giuseppe Meazza", "Silvio Piola", "Valentino Mazzola"], correctAnswer: "Valentino Mazzola" }
        ],
        medium: [
            { question: "How many Serie A titles did Sandro Mazzola win with Inter?", options: ["2", "4", "6", "8"], correctAnswer: "4" },
            { question: "Which 1970 World Cup final did Sandro Mazzola miss?", options: ["Benched vs. Brazil", "Injured vs. Brazil", "Suspended vs. Brazil", "Withdrew vs. Brazil"], correctAnswer: "Benched vs. Brazil" },
            { question: "Who was Sandro Mazzola's 'Grande Inter' coach?", options: ["Giovanni Trapattoni", "Helenio Herrera", "Nereo Rocco", "Vittorio Pozzo"], correctAnswer: "Helenio Herrera" }
        ],
        hard: [
            { question: "How many goals did Sandro Mazzola score in Inter's 1964–65 European Cup wins?", options: ["5", "7", "9", "11"], correctAnswer: "7" },
            { question: "Until 2018, who held Inter Milan's all-time goal record?", options: ["Alessandro Altobelli", "Giuseppe Meazza", "Roberto Boninsegna", "Sandro Mazzola"], correctAnswer: "Sandro Mazzola" },
            { question: "What executive role did Sandro Mazzola take at Inter after retiring?", options: ["Club President", "Director of Football", "Scouting Director", "Vice President"], correctAnswer: "Vice President" }
        ]
    },

    // 40. Jairzinho
    'p-leg-040': {
        easy: [
            { question: "Which country did Jairzinho win the 1970 World Cup with?", options: ["Argentina", "Brazil", "Italy", "Uruguay"], correctAnswer: "Brazil" },
            { question: "What was Jairzinho's nickname?", options: ["The Cannon", "The Hurricane", "The Jet", "The Tank"], correctAnswer: "The Hurricane" },
            { question: "Which club was Jairzinho most associated with?", options: ["Botafogo", "Flamengo", "Santos", "Vasco da Gama"], correctAnswer: "Botafogo" }
        ],
        medium: [
            { question: "How many goals did Jairzinho score at the 1970 World Cup?", options: ["5", "7", "9", "11"], correctAnswer: "7" },
            { question: "Which French club did Jairzinho play for in 1974–75?", options: ["Bordeaux", "Lyon", "Marseille", "PSG"], correctAnswer: "Marseille" },
            { question: "Who were Jairzinho's wing partners at the 1970 World Cup?", options: ["Pelé and Rivellino", "Pelé and Tostão", "Rivellino and Tostão", "Tostão and Gérson"], correctAnswer: "Pelé and Rivellino" }
        ],
        hard: [
            { question: "What unique World Cup scoring record does Jairzinho hold?", options: ["Fastest hat-trick", "Most goals in a final", "Scoring in every match of a World Cup-winning campaign", "Youngest scorer"], correctAnswer: "Scoring in every match of a World Cup-winning campaign" },
            { question: "How many goals did Jairzinho score for Botafogo?", options: ["123", "154", "186", "201"], correctAnswer: "186" },
            { question: "Which Bolivian club did Jairzinho coach in 2003?", options: ["Bolívar", "Oriente Petrolero", "The Strongest", "Universitario"], correctAnswer: "Oriente Petrolero" }
        ]
    },

    // 41. Rivelino
    'p-leg-041': {
        easy: [
            { question: "Which country did Rivelino become famous with?", options: ["Argentina", "Brazil", "Italy", "Portugal"], correctAnswer: "Brazil" },
            { question: "What was Rivelino's signature free-kick technique?", options: ["Banana kick", "Knuckleball", "Power drive", "Trivela"], correctAnswer: "Banana kick" },
            { question: "Which club was Rivelino most associated with?", options: ["Corinthians", "Flamengo", "Palmeiras", "São Paulo"], correctAnswer: "Corinthians" }
        ],
        medium: [
            { question: "How many goals did Rivelino score at the 1970 World Cup?", options: ["1", "3", "5", "7"], correctAnswer: "3" },
            { question: "Which shirt number did Rivelino make famous?", options: ["7", "10", "11", "14"], correctAnswer: "11" },
            { question: "Who was Rivelino's midfield partner at the 1970 World Cup?", options: ["Clodoaldo", "Gérson", "Jairzinho", "Tostão"], correctAnswer: "Gérson" }
        ],
        hard: [
            { question: "Which Saudi club did Rivelino play for after leaving Brazil?", options: ["Al-Ahli", "Al-Hilal", "Al-Ittihad", "Al-Nassr"], correctAnswer: "Al-Hilal" },
            { question: "How many goals did Rivelino score for Brazil?", options: ["16", "26", "36", "46"], correctAnswer: "26" },
            { question: "What dental condition affected Rivelino's speech?", options: ["Missing teeth", "No teeth", "Protruding front teeth", "Yellow teeth"], correctAnswer: "Protruding front teeth" }
        ]
    },

    // 42. Bobby Moore
    'p-leg-042': {
        easy: [
            { question: "Which country did Bobby Moore captain to World Cup glory in 1966?", options: ["England", "Northern Ireland", "Scotland", "Wales"], correctAnswer: "England" },
            { question: "Which club was Bobby Moore most loyal to?", options: ["Arsenal", "Chelsea", "Tottenham Hotspur", "West Ham United"], correctAnswer: "West Ham United" },
            { question: "What position did Bobby Moore redefine?", options: ["Center-back", "Full-back", "Goalkeeper", "Midfielder"], correctAnswer: "Center-back" }
        ],
        medium: [
            { question: "What famous defensive play did Bobby Moore make against Pelé in 1970?", options: ["Bicycle clearance", "Overhead kick save", "Perfect sliding tackle", "Two-footed lunge"], correctAnswer: "Perfect sliding tackle" },
            { question: "Which NASL club did Bobby Moore play for in 1976?", options: ["Cosmos", "Ft. Lauderdale Strikers", "San Antonio Thunder", "Tampa Bay Rowdies"], correctAnswer: "San Antonio Thunder" },
            { question: "Who presented Bobby Moore with the 1966 World Cup trophy?", options: ["Duke of Edinburgh", "FIFA President", "Prime Minister", "Queen Elizabeth II"], correctAnswer: "Queen Elizabeth II" }
        ],
        hard: [
            { question: "Which jewelry scandal involved Bobby Moore at the 1970 World Cup?", options: ["Bogotá Bracelet incident", "Gold chain theft", "Rolex controversy", "Silver cup dispute"], correctAnswer: "Bogotá Bracelet incident" },
            { question: "How many England caps did Bobby Moore earn?", options: ["88", "98", "108", "118"], correctAnswer: "108" },
            { question: "Which illness claimed Bobby Moore's life in 1993?", options: ["Bowel cancer", "Heart attack", "Leukemia", "Lung cancer"], correctAnswer: "Bowel cancer" }
        ]
    },

    // 43. Giacinto Facchetti
    'p-leg-043': {
        easy: [
            { question: "Which country did Giacinto Facchetti revolutionize the full-back role for?", options: ["Argentina", "Brazil", "Italy", "Spain"], correctAnswer: "Italy" },
            { question: "Which club did Giacinto Facchetti spend his entire career with?", options: ["AC Milan", "Inter Milan", "Juventus", "Roma"], correctAnswer: "Inter Milan" },
            { question: "How many goals did Giacinto Facchetti score for Inter Milan?", options: ["29", "39", "49", "59"], correctAnswer: "59" }
        ],
        medium: [
            { question: "How many European Cups did Giacinto Facchetti win with Inter?", options: ["1", "2", "3", "4"], correctAnswer: "2" },
            { question: "Who was Giacinto Facchetti's manager at Inter?", options: ["Giovanni Trapattoni", "Helenio Herrera", "Nereo Rocco", "Vittorio Pozzo"], correctAnswer: "Helenio Herrera" },
            { question: "Which shirt number did Giacinto Facchetti wear for Inter?", options: ["2", "3", "4", "5"], correctAnswer: "3" }
        ],
        hard: [
            { question: "What record did Giacinto Facchetti set for goals by a defender in a Serie A season?", options: ["8 in 1963–64", "10 in 1965–66", "12 in 1967–68", "14 in 1969–70"], correctAnswer: "10 in 1965–66" },
            { question: "Who succeeded Giacinto Facchetti as Inter president?", options: ["His brother", "His cousin", "His father", "His son Gianfelice"], correctAnswer: "His son Gianfelice" },
            { question: "What posthumous FIFA honor did Giacinto Facchetti receive in 2004?", options: ["FIFA Centennial Player", "FIFA Fair Play Award", "FIFA Order of Merit", "FIFA Presidential Award"], correctAnswer: "FIFA Centennial Player" }
        ]
    },

    // 44. Frank Rijkaard
    'p-leg-044': {
        easy: [
            { question: "Which country did Frank Rijkaard win EURO 1988 with?", options: ["Belgium", "France", "Netherlands", "West Germany"], correctAnswer: "Netherlands" },
            { question: "Which club's 'Dream Team' did Frank Rijkaard play for?", options: ["AC Milan", "Ajax", "Barcelona", "PSV Eindhoven"], correctAnswer: "AC Milan" },
            { question: "What infamous incident did Frank Rijkaard have at the 1990 World Cup?", options: ["Biting opponent", "Headbutting referee", "Spitting at Rudi Völler", "Throwing boot"], correctAnswer: "Spitting at Rudi Völler" }
        ],
        medium: [
            { question: "How many Champions League/European Cup titles did Frank Rijkaard win as a player and manager?", options: ["2 as player, 1 as manager", "3 as player, 0 as manager", "3 as player, 1 as manager", "4 as player, 2 as manager"], correctAnswer: "3 as player, 1 as manager" },
            { question: "Which club did Frank Rijkaard revive as manager in the 2000s?", options: ["Ajax", "Barcelona", "Bayern Munich", "Chelsea"], correctAnswer: "Barcelona" },
            { question: "Who were Frank Rijkaard's famous Dutch teammates at Milan?", options: ["Dennis Bergkamp and Edgar Davids", "Ruud Gullit and Marco van Basten", "Wesley Sneijder and Arjen Robben", "Wim Jonk and Richard Witschge"], correctAnswer: "Ruud Gullit and Marco van Basten" }
        ],
        hard: [
            { question: "Which position did Johan Cruyff convert Frank Rijkaard to at Barcelona?", options: ["Center-back", "False 9", "Left-back", "Sweeper"], correctAnswer: "Center-back" },
            { question: "How many goals did Frank Rijkaard score in the 1989 European Cup final?", options: ["1", "2", "3", "4"], correctAnswer: "2" },
            { question: "Which Saudi club did Frank Rijkaard coach in 2013–14?", options: ["Al-Ahli", "Al-Hilal", "Al-Ittihad", "Al-Nassr"], correctAnswer: "Al-Nassr" }
        ]
    },

    // 45. George Weah
    'p-leg-045': {
        easy: [
            { question: "Which country did George Weah become president of?", options: ["Ghana", "Ivory Coast", "Liberia", "Nigeria"], correctAnswer: "Liberia" },
            { question: "With which club did George Weah win the Ballon d'Or?", options: ["AC Milan", "Chelsea", "Monaco", "PSG"], correctAnswer: "AC Milan" },
            { question: "What was George Weah's most famous solo goal?", options: ["Against Bayern Munich", "Against Inter Milan", "Against Manchester United", "Against Verona in 1996"], correctAnswer: "Against Verona in 1996" }
        ],
        medium: [
            { question: "How many African Player of the Year awards did George Weah win?", options: ["1", "2", "3", "4"], correctAnswer: "3" },
            { question: "Which French club did George Weah become famous with?", options: ["Bordeaux", "Lyon", "Marseille", "Paris Saint-Germain"], correctAnswer: "Paris Saint-Germain" },
            { question: "Who ended George Weah's Ballon d'Or streak in 1996?", options: ["Jürgen Klinsmann", "Matthias Sammer", "Ronaldo", "Zinedine Zidane"], correctAnswer: "Matthias Sammer" }
        ],
        hard: [
            { question: "Which English club did George Weah join on loan in 2000?", options: ["Arsenal", "Chelsea", "Manchester City", "Tottenham Hotspur"], correctAnswer: "Chelsea" },
            { question: "How many goals did George Weah score for Liberia?", options: ["12", "18", "22", "26"], correctAnswer: "22" },
            { question: "What political office did George Weah hold before becoming president?", options: ["Congressman", "Governor", "Mayor", "Senator"], correctAnswer: "Senator" }
        ]
    },

    // 46. Oliver Kahn
    'p-leg-046': {
        easy: [
            { question: "Which country did Oliver Kahn captain to the 2002 World Cup final?", options: ["England", "France", "Germany", "Netherlands"], correctAnswer: "Germany" },
            { question: "Which club was Oliver Kahn most associated with?", options: ["Bayern Munich", "Borussia Dortmund", "Hamburg", "Stuttgart"], correctAnswer: "Bayern Munich" },
            { question: "What was Oliver Kahn's nickname?", options: ["Der Kaiser", "Der Titan", "The Wall", "The Wolf"], correctAnswer: "Der Titan" }
        ],
        medium: [
            { question: "How many Bundesliga titles did Oliver Kahn win with Bayern?", options: ["5", "6", "7", "8"], correctAnswer: "8" },
            { question: "Which Champions League final did Oliver Kahn win with three penalty saves?", options: ["1999 vs. Manchester United", "2001 vs. Valencia", "2003 vs. Juventus", "2005 vs. Chelsea"], correctAnswer: "2001 vs. Valencia" },
            { question: "Who was Oliver Kahn's main goalkeeping rival for Germany?", options: ["Andreas Köpke", "Hans-Jörg Butt", "Jens Lehmann", "Tim Wiese"], correctAnswer: "Jens Lehmann" }
        ],
        hard: [
            { question: "Which rare World Cup honor did Oliver Kahn receive in 2002?", options: ["Best Defender", "Golden Ball as best player", "Most Clean Sheets", "Player of the Tournament"], correctAnswer: "Golden Ball as best player" },
            { question: "How many red cards did Oliver Kahn receive in his career?", options: ["2", "4", "6", "8"], correctAnswer: "6" },
            { question: "What executive role did Oliver Kahn take at Bayern Munich post-retirement?", options: ["CEO", "Director of Football", "Head of Scouting", "Youth Academy Director"], correctAnswer: "CEO" }
        ]
    },

    // 47. Pavel Nedvěd
    'p-leg-047': {
        easy: [
            { question: "Which country did Pavel Nedvěd captain to the EURO 2004 semi-finals?", options: ["Czech Republic", "Poland", "Russia", "Slovakia"], correctAnswer: "Czech Republic" },
            { question: "With which club did Pavel Nedvěd win the Ballon d'Or in 2003?", options: ["Juventus", "Lazio", "Sparta Prague", "Udinese"], correctAnswer: "Juventus" },
            { question: "What was Pavel Nedvěd's playing style?", options: ["Box-to-box dynamo", "Deep-lying playmaker", "Target man", "Winger"], correctAnswer: "Box-to-box dynamo" }
        ],
        medium: [
            { question: "How much did Juventus pay for Pavel Nedvěd in 2001?", options: ["€25 million", "€33 million", "€41 million", "€49 million"], correctAnswer: "€41 million" },
            { question: "Which EURO 2004 goal by Pavel Nedvěd stunned the Netherlands?", options: ["Bicycle kick", "Free kick", "Long-range strike in the group stage", "Penalty"], correctAnswer: "Long-range strike in the group stage" },
            { question: "Who was Pavel Nedvěd's famous Lazio teammate?", options: ["Alessandro Nesta", "Claudio López", "Juan Sebastián Verón", "Simone Inzaghi"], correctAnswer: "Juan Sebastián Verón" }
        ],
        hard: [
            { question: "Which injury ruled Pavel Nedvěd out of the 2003 Champions League final?", options: ["ACL tear", "Broken foot", "Concussion", "Yellow card suspension, not injury"], correctAnswer: "Yellow card suspension, not injury" },
            { question: "How many goals did Pavel Nedvěd score for the Czech Republic?", options: ["12", "18", "24", "30"], correctAnswer: "18" },
            { question: "What role does Pavel Nedvěd hold at Juventus?", options: ["Assistant Coach", "Director of Football", "Scouting Director", "Vice President"], correctAnswer: "Vice President" }
        ]
    },

    // 48. Gaetano Scirea
    'p-leg-048': {
        easy: [
            { question: "Which country did Gaetano Scirea win the 1982 World Cup with?", options: ["Argentina", "Brazil", "Italy", "Spain"], correctAnswer: "Italy" },
            { question: "Which club did Gaetano Scirea spend his entire career with?", options: ["AC Milan", "Inter Milan", "Juventus", "Roma"], correctAnswer: "Juventus" },
            { question: "What was unique about Gaetano Scirea's disciplinary record?", options: ["Never fouled", "Never received a red card", "Never scored an own goal", "Never substituted"], correctAnswer: "Never received a red card" }
        ],
        medium: [
            { question: "How many Serie A titles did Gaetano Scirea win with Juventus?", options: ["5", "7", "9", "11"], correctAnswer: "7" },
            { question: "What tragedy ended Gaetano Scirea's life in 1989?", options: ["Car crash in Poland", "Drowning accident", "Heart attack", "Plane crash"], correctAnswer: "Car crash in Poland" },
            { question: "Who was Gaetano Scirea's famous defensive partner at Juventus?", options: ["Antonio Cabrini", "Claudio Gentile", "Franco Baresi", "Pietro Vierchowod"], correctAnswer: "Claudio Gentile" }
        ],
        hard: [
            { question: "Which European trophy did Gaetano Scirea never win?", options: ["Cup Winners' Cup", "European Cup", "UEFA Cup", "Lost 1983 European Cup final"], correctAnswer: "Lost 1983 European Cup final" },
            { question: "How many caps did Gaetano Scirea earn for Italy?", options: ["54", "64", "74", "78"], correctAnswer: "78" },
            { question: "What award is named after Gaetano Scirea?", options: ["Best Defender Award", "Fair Play Award", "Serie A Fair Play Award", "Sportsmanship Trophy"], correctAnswer: "Serie A Fair Play Award" }
        ]
    },

    // 49. Mario Kempes
    'p-leg-049': {
        easy: [
            { question: "Which country did Mario Kempes win the 1978 World Cup with?", options: ["Argentina", "Brazil", "Germany", "Netherlands"], correctAnswer: "Argentina" },
            { question: "What was Mario Kempes' iconic hairstyle?", options: ["Afro", "Bald", "Long, curly hair", "Mullet"], correctAnswer: "Long, curly hair" },
            { question: "Which Spanish club did Mario Kempes become a legend at?", options: ["Atlético Madrid", "Barcelona", "Real Madrid", "Valencia"], correctAnswer: "Valencia" }
        ],
        medium: [
            { question: "How many goals did Mario Kempes score at the 1978 World Cup?", options: ["4", "6", "8", "10"], correctAnswer: "6" },
            { question: "How many goals did Mario Kempes score in the 1978 World Cup final?", options: ["1", "2", "3", "4"], correctAnswer: "2" },
            { question: "Who replaced Mario Kempes as Argentina's main striker in the 1982 World Cup?", options: ["Daniel Passarella", "Diego Maradona", "Jorge Valdano", "Osvaldo Ardiles"], correctAnswer: "Diego Maradona" }
        ],
        hard: [
            { question: "Which South American club did Mario Kempes coach after retiring?", options: ["Blooming, Bolivia", "Independiente", "Peñarol", "Universidad de Chile"], correctAnswer: "Blooming, Bolivia" },
            { question: "How many hat-tricks did Mario Kempes score for Valencia?", options: ["3", "5", "7", "9"], correctAnswer: "5" },
            { question: "What unique World Cup record does Mario Kempes hold?", options: ["Fastest hat-trick", "Most goals in a final", "Only Argentinian to win World Cup Golden Boot until 2022", "Youngest Golden Boot winner"], correctAnswer: "Only Argentinian to win World Cup Golden Boot until 2022" }
        ]
    },

    // 50. Miroslav Klose
    'p-leg-050': {
        easy: [
            { question: "For which country is Miroslav Klose the all-time World Cup top scorer?", options: ["Croatia", "Czech Republic", "Germany", "Poland"], correctAnswer: "Germany" },
            { question: "Which club did Miroslav Klose win the 2014 World Cup with?", options: ["Bayern Munich", "Lazio", "Werder Bremen", "Wolfsburg"], correctAnswer: "Bayern Munich" },
            { question: "What was Miroslav Klose's signature goal celebration?", options: ["Backflip", "Front flip", "Heart hands", "Salute"], correctAnswer: "Front flip" }
        ],
        medium: [
            { question: "How many goals did Miroslav Klose score at the 2002 World Cup?", options: ["3", "5", "7", "9"], correctAnswer: "5" },
            { question: "Which Italian club did Miroslav Klose play for from 2011–16?", options: ["AC Milan", "Inter Milan", "Lazio", "Roma"], correctAnswer: "Lazio" },
            { question: "Who broke Miroslav Klose's Bundesliga foreign scorer record?", options: ["Ailton", "Claudio Pizarro", "Robert Lewandowski", "Yoshito Okubo"], correctAnswer: "Robert Lewandowski" }
        ],
        hard: [
            { question: "What profession did Miroslav Klose train for before becoming a footballer?", options: ["Baker", "Carpenter", "Electrician", "Plumber"], correctAnswer: "Carpenter" },
            { question: "How many Champions League goals did Miroslav Klose score?", options: ["14", "18", "24", "30"], correctAnswer: "24" },
            { question: "What coaching role does Miroslav Klose hold as of 2024?", options: ["Austria Salzburg U17 coach", "Bayern Munich assistant", "Germany U21 coach", "Lazio striker coach"], correctAnswer: "Austria Salzburg U17 coach" }
        ]
    },

    // 51. Paolo Rossi
    'p-leg-051': {
        easy: [
            { question: "Which country did Paolo Rossi win the 1982 World Cup with?", options: ["Argentina", "Brazil", "Italy", "Spain"], correctAnswer: "Italy" },
            { question: "What was Paolo Rossi's nickname?", options: ["Il Bomber", "Pablito", "Rossi the Fox", "Toto"], correctAnswer: "Pablito" },
            { question: "Which scandal led to Paolo Rossi's suspension in 1980?", options: ["Doping", "Fake passport", "Match-fixing", "Totonero betting scandal"], correctAnswer: "Totonero betting scandal" }
        ],
        medium: [
            { question: "How many goals did Paolo Rossi score at the 1982 World Cup?", options: ["4", "6", "8", "10"], correctAnswer: "6" },
            { question: "Which club did Paolo Rossi join after his ban?", options: ["AC Milan", "Fiorentina", "Juventus", "Vicenza"], correctAnswer: "Juventus" },
            { question: "Who assisted Paolo Rossi's goal in the 1982 World Cup final?", options: ["Antonio Cabrini", "Bruno Conti", "Claudio Gentile", "Marco Tardelli"], correctAnswer: "Antonio Cabrini" }
        ],
        hard: [
            { question: "Against which team did Paolo Rossi score a hat-trick in the 1982 World Cup?", options: ["Argentina", "Brazil", "Germany", "Poland"], correctAnswer: "Brazil" },
            { question: "How many Serie A titles did Paolo Rossi win?", options: ["1", "2", "3", "4"], correctAnswer: "2" },
            { question: "What illness caused Paolo Rossi's death in 2020?", options: ["COVID-19", "Heart attack", "Lung cancer", "Pancreatic cancer"], correctAnswer: "Lung cancer" }
        ]
    },

    // 52. Just Fontaine
    'p-leg-052': {
        easy: [
            { question: "For which country did Just Fontaine score 13 World Cup goals?", options: ["Belgium", "France", "Italy", "Spain"], correctAnswer: "France" },
            { question: "Which World Cup record does Just Fontaine hold?", options: ["Fastest hat-trick", "Most goals in a single tournament: 13 in 1958", "Oldest scorer", "Youngest hat-trick"], correctAnswer: "Most goals in a single tournament: 13 in 1958" },
            { question: "What injury ended Just Fontaine's career?", options: ["ACL tear", "Broken neck", "Double leg fracture", "Herniated disc"], correctAnswer: "Double leg fracture" }
        ],
        medium: [
            { question: "How many hat-tricks did Just Fontaine score at the 1958 World Cup?", options: ["1", "2", "3", "4"], correctAnswer: "2" },
            { question: "In which country was Just Fontaine born?", options: ["Algeria", "France", "Morocco", "Tunisia"], correctAnswer: "Morocco" },
            { question: "Who was Just Fontaine's strike partner at the 1958 World Cup?", options: ["Jean Vincent", "Maryan Wisnieski", "Raymond Kopa", "Thadée Cisowski"], correctAnswer: "Raymond Kopa" }
        ],
        hard: [
            { question: "Which French club did Just Fontaine coach after retiring?", options: ["Bordeaux", "Marseille", "Paris Saint-Germain", "Stade de Reims"], correctAnswer: "Paris Saint-Germain" },
            { question: "How many career goals did Just Fontaine score for Stade de Reims?", options: ["121 in 150 games", "145 in 180 games", "165 in 200 games", "200 in 250 games"], correctAnswer: "165 in 200 games" },
            { question: "What business did Just Fontaine run after retiring?", options: ["Car dealership", "Hotel chain", "Restaurant", "Sportswear brand"], correctAnswer: "Sportswear brand" }
        ]
    },

    // 53. Jimmy Greaves
    'p-leg-053': {
        easy: [
            { question: "For which country did Jimmy Greaves score 44 goals?", options: ["England", "Ireland", "Scotland", "Wales"], correctAnswer: "England" },
            { question: "Which club was Jimmy Greaves most prolific for?", options: ["AC Milan", "Chelsea", "Tottenham Hotspur", "West Ham United"], correctAnswer: "Tottenham Hotspur" },
            { question: "What record did Jimmy Greaves hold at Tottenham?", options: ["Fastest goal", "Most assists", "Most goals: 266", "Youngest scorer"], correctAnswer: "Most goals: 266" }
        ],
        medium: [
            { question: "Why did Jimmy Greaves miss the 1966 World Cup final?", options: ["Injury", "Manager's decision", "Personal reasons", "Suspension"], correctAnswer: "Injury" },
            { question: "Which Italian club did Jimmy Greaves play for in 1961?", options: ["AC Milan", "Inter Milan", "Juventus", "Roma"], correctAnswer: "AC Milan" },
            { question: "Who broke Jimmy Greaves' First Division goals record?", options: ["Alan Shearer", "Dixie Dean", "Gary Lineker", "Steve Bloomer"], correctAnswer: "Dixie Dean" }
        ],
        hard: [
            { question: "Which addiction did Jimmy Greaves overcome after retirement?", options: ["Alcoholism", "Gambling", "Painkillers", "Smoking"], correctAnswer: "Alcoholism" },
            { question: "How many career hat-tricks did Jimmy Greaves score?", options: ["22", "31", "44", "57"], correctAnswer: "31" },
            { question: "Which TV show made Jimmy Greaves a household name?", options: ["Match of the Day", "Saint and Greavsie", "Soccer Saturday", "The Big Match"], correctAnswer: "Saint and Greavsie" }
        ]
    },

    // 54. David Beckham
    'p-leg-054': {
        easy: [
            { question: "Which country did David Beckham captain?", options: ["England", "Ireland", "Scotland", "Wales"], correctAnswer: "England" },
            { question: "With which club did David Beckham win the Champions League in 1999?", options: ["AC Milan", "LA Galaxy", "Manchester United", "Real Madrid"], correctAnswer: "Manchester United" },
            { question: "What was David Beckham's signature set-piece technique?", options: ["Curling free-kick", "Knuckleball", "Power drive", "Trivela"], correctAnswer: "Curling free-kick" }
        ],
        medium: [
            { question: "How much did Real Madrid pay for David Beckham in 2003?", options: ["€25 million", "€30 million", "€35 million", "€40 million"], correctAnswer: "€35 million" },
            { question: "Which MLS club did David Beckham help launch as an owner?", options: ["Atlanta United", "Inter Miami", "LAFC", "New York City FC"], correctAnswer: "Inter Miami" },
            { question: "Who was David Beckham's famous 'Class of '92' teammate?", options: ["Gary Neville", "Paul Scholes", "Ryan Giggs", "All of the above"], correctAnswer: "All of the above" }
        ],
        hard: [
            { question: "Which foot injury nearly cost David Beckham his place at the 2002 World Cup?", options: ["Broken ankle", "Metatarsal fracture", "Torn ligaments", "Turf toe"], correctAnswer: "Metatarsal fracture" },
            { question: "How many England caps did David Beckham earn?", options: ["95", "105", "115", "125"], correctAnswer: "115" },
            { question: "What UNICEF role does David Beckham hold?", options: ["Ambassador", "Board Member", "Goodwill Ambassador", "Patron"], correctAnswer: "Ambassador" }
        ]
    },

    // 55. Carlos Valderrama
    'p-leg-055': {
        easy: [
            { question: "Which country did Carlos Valderrama captain at three World Cups?", options: ["Chile", "Colombia", "Ecuador", "Peru"], correctAnswer: "Colombia" },
            { question: "What was Carlos Valderrama's iconic hairstyle?", options: ["Blonde afro", "Dreadlocks", "Mullet", "Shaved head"], correctAnswer: "Blonde afro" },
            { question: "Which US club did Carlos Valderrama become famous with?", options: ["Colorado Rapids", "DC United", "LA Galaxy", "Tampa Bay Mutiny"], correctAnswer: "Tampa Bay Mutiny" }
        ],
        medium: [
            { question: "How much did Montpellier pay for Carlos Valderrama in 1988?", options: ["€500,000", "€1 million", "€1.5 million", "€2 million"], correctAnswer: "€1.5 million" },
            { question: "Who was Carlos Valderrama's strike partner at the 1994 World Cup?", options: ["Adolfo Valencia", "Faustino Asprilla", "Freddy Rincón", "René Higuita"], correctAnswer: "Faustino Asprilla" },
            { question: "Which tragedy affected Carlos Valderrama's career in 1994?", options: ["Andrés Escobar's murder", "Drug cartel threats", "Plane crash", "Stadium disaster"], correctAnswer: "Andrés Escobar's murder" }
        ],
        hard: [
            { question: "How many assists did Carlos Valderrama provide in the 1990 World Cup qualifiers?", options: ["8", "10", "12", "14"], correctAnswer: "12" },
            { question: "Which Colombian club did Carlos Valderrama own?", options: ["América de Cali", "Atlético Nacional", "Deportivo Cali", "Unión Magdalena"], correctAnswer: "Unión Magdalena" },
            { question: "What post-career role does Carlos Valderrama have on TV?", options: ["Commentator", "ESPN analyst", "Pundit", "All of the above"], correctAnswer: "All of the above" }
        ]
    },

    // 56. Roger Milla
    'p-leg-056': {
        easy: [
            { question: "Which country did Roger Milla make World Cup history with?", options: ["Cameroon", "Ghana", "Ivory Coast", "Nigeria"], correctAnswer: "Cameroon" },
            { question: "How old was Roger Milla when he scored at the 1994 World Cup?", options: ["38", "40", "42", "44"], correctAnswer: "42" },
            { question: "What was Roger Milla's iconic celebration?", options: ["Backflip", "Corner flag dance", "Shirt over head", "Somersault"], correctAnswer: "Corner flag dance" }
        ],
        medium: [
            { question: "Which French club did Roger Milla play for from 1977–79?", options: ["Bastia", "Monaco", "Montpellier", "Saint-Étienne"], correctAnswer: "Monaco" },
            { question: "How many goals did Roger Milla score at the 1990 World Cup?", options: ["2", "4", "6", "8"], correctAnswer: "4" },
            { question: "Who was Roger Milla's famous teammate in Cameroon's 1990 World Cup run?", options: ["Patrick Mboma", "Rigobert Song", "Samuel Eto'o", "Thomas N'Kono"], correctAnswer: "Thomas N'Kono" }
        ],
        hard: [
            { question: "Which retirement did Roger Milla come back from for the 1990 World Cup?", options: ["1985", "1987", "1989", "Never retired"], correctAnswer: "1987" },
            { question: "How many African Player of the Year awards did Roger Milla win?", options: ["0", "1", "2", "3"], correctAnswer: "2" },
            { question: "What role did Roger Milla take with the Cameroon FA after retiring?", options: ["Advisor", "Coach", "President", "Technical Director"], correctAnswer: "Advisor" }
        ]
    },

    // 57. Cha Bum-kun
    'p-leg-057': {
        easy: [
            { question: "Which country did Cha Bum-kun pioneer Asian football for?", options: ["China", "Japan", "North Korea", "South Korea"], correctAnswer: "South Korea" },
            { question: "Which Bundesliga clubs did Cha Bum-kun become a legend at?", options: ["Bayern Munich and Dortmund", "Eintracht Frankfurt and Bayer Leverkusen", "Hamburg and Stuttgart", "Köln and Gladbach"], correctAnswer: "Eintracht Frankfurt and Bayer Leverkusen" },
            { question: "What was Cha Bum-kun's nickname?", options: ["Cha Boom", "Korean Cannon", "Lightning Cha", "The Asian Pelé"], correctAnswer: "Cha Boom" }
        ],
        medium: [
            { question: "How many Bundesliga goals did Cha Bum-kun score?", options: ["78", "88", "98", "108"], correctAnswer: "98" },
            { question: "Which World Cup did Cha Bum-kun become the first Asian to score in?", options: ["1982", "1986, vs. Italy", "1990", "1994"], correctAnswer: "1986, vs. Italy" },
            { question: "Who broke Cha Bum-kun's K-League goals record?", options: ["Ahn Jung-hwan", "Kim Joo-sung", "Lee Dong-gook", "Park Ji-sung"], correctAnswer: "Lee Dong-gook" }
        ],
        hard: [
            { question: "Which injury nearly ended Cha Bum-kun's career in 1981?", options: ["Achilles tendon tear", "Broken leg", "Knee ligament damage", "Shoulder dislocation"], correctAnswer: "Achilles tendon tear" },
            { question: "How many caps did Cha Bum-kun earn for South Korea?", options: ["101", "111", "121", "131"], correctAnswer: "121" },
            { question: "Which son of Cha Bum-kun played at the 2002 World Cup?", options: ["Cha Du-ri", "Cha Ji-hoon", "Cha Jong-hwan", "Cha Tae-hyun"], correctAnswer: "Cha Du-ri" }
        ]
    }
};
