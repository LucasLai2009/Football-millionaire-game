import { PlayerQuestions } from '../../types';

export const EPIC_PLAYER_QUESTIONS: Record<string, PlayerQuestions> = {
    // 1. Kylian Mbappé
    'p-epi-001': {
        easy: [
            { question: "Which country does Mbappé play for?", options: ["Brazil", "Spain", "France", "Belgium"], correctAnswer: "France" },
            { question: "Which club did Mbappé famously move to from Monaco in 2017?", options: ["Real Madrid", "Barcelona", "Manchester City", "Paris Saint-Germain"], correctAnswer: "Paris Saint-Germain" },
            { question: "What is Mbappé's primary position?", options: ["Midfielder", "Defender", "Forward", "Goalkeeper"], correctAnswer: "Forward" }
        ],
        medium: [
            { question: "At what age did Mbappé score in a World Cup final?", options: ["18", "19", "20", "21"], correctAnswer: "19" },
            { question: "Which manager gave Mbappé his professional debut at AS Monaco?", options: ["Claudio Ranieri", "Didier Deschamps", "Leonardo Jardim", "Thierry Henry"], correctAnswer: "Leonardo Jardim" },
            { question: "What is Mbappé's signature goal celebration?", options: ["Knee slide", "Backflip", "Arms crossed", "Finger to lips"], correctAnswer: "Arms crossed" }
        ],
        hard: [
            { question: "In which Parisian suburb was Mbappé raised?", options: ["Saint-Denis", "Versailles", "Bondy", "Nanterre"], correctAnswer: "Bondy" },
            { question: "Mbappé's father is from Cameroon, but his mother is from which North African country?", options: ["Morocco", "Tunisia", "Egypt", "Algeria"], correctAnswer: "Algeria" },
            { question: "Which shirt number did Mbappé wear when he won the 2018 World Cup?", options: ["7", "9", "10", "29"], correctAnswer: "10" }
        ]
    },
    // 2. Erling Haaland
    'p-epi-002': {
        easy: [
            { question: "Which country does Erling Haaland represent internationally?", options: ["England", "Norway", "Sweden", "Denmark"], correctAnswer: "Norway" },
            { question: "Haaland broke the record for most goals in a single Premier League season with which club?", options: ["Borussia Dortmund", "Manchester United", "Manchester City", "Liverpool"], correctAnswer: "Manchester City" },
            { question: "What is Haaland's primary position?", options: ["Winger", "Forward", "Attacking Midfielder", "Centre-Back"], correctAnswer: "Forward" }
        ],
        medium: [
            { question: "Which Austrian club did Haaland play for before moving to Borussia Dortmund?", options: ["Rapid Vienna", "Austria Wien", "Red Bull Salzburg", "LASK"], correctAnswer: "Red Bull Salzburg" },
            { question: "In 2019, Haaland scored a remarkable nine goals in a single match at the U-20 World Cup. Who was the opponent?", options: ["Tahiti", "Fiji", "Honduras", "New Caledonia"], correctAnswer: "Honduras" },
            { question: "Haaland is known for his 'Zen' meditation goal celebration. Which other sport is this pose associated with?", options: ["Yoga", "Tai Chi", "Karate", "Judo"], correctAnswer: "Yoga" }
        ],
        hard: [
            { question: "Erling Haaland was born in which English city, where his father also played football?", options: ["Manchester", "Leeds", "Nottingham", "Sunderland"], correctAnswer: "Leeds" },
            { question: "What is the name of Haaland's father, who was also a professional footballer for Man City and Leeds?", options: ["Jan Åge Fjørtoft", "Stig Inge Bjørnebye", "Alf-Inge Håland", "Ole Gunnar Solskjær"], correctAnswer: "Alf-Inge Håland" },
            { question: "Before his move to Red Bull Salzburg, Haaland played for which Norwegian club under Ole Gunnar Solskjær?", options: ["Rosenborg", "Viking", "Molde FK", "Brann"], correctAnswer: "Molde FK" }
        ]
    },
    // 3. Kevin De Bruyne
    'p-epi-003': {
        easy: [
            { question: "Which country does Kevin De Bruyne play for?", options: ["Netherlands", "Germany", "France", "Belgium"], correctAnswer: "Belgium" },
            { question: "For which Premier League club is De Bruyne a midfield maestro?", options: ["Manchester United", "Chelsea", "Manchester City", "Arsenal"], correctAnswer: "Manchester City" },
            { question: "What is De Bruyne known for on the pitch?", options: ["His speed", "His tackling", "His passing and assists", "His goalkeeping"], correctAnswer: "His passing and assists" }
        ],
        medium: [
            { question: "Which German club did De Bruyne win the 'Footballer of the Year' award with before joining Man City?", options: ["Bayern Munich", "Borussia Dortmund", "VfL Wolfsburg", "Werder Bremen"], correctAnswer: "VfL Wolfsburg" },
            { question: "Which former Chelsea manager sold De Bruyne in 2014?", options: ["Carlo Ancelotti", "José Mourinho", "Rafa Benítez", "Antonio Conte"], correctAnswer: "José Mourinho" },
            { question: "De Bruyne is a two-time winner of which prestigious Premier League award?", options: ["Golden Boot", "Golden Glove", "PFA Player of the Year", "Young Player of the Year"], correctAnswer: "PFA Player of the Year" }
        ],
        hard: [
            { question: "De Bruyne speaks four languages fluently. Which of these is NOT one of them?", options: ["Dutch", "French", "English", "Spanish"], correctAnswer: "Spanish" },
            { question: "In which Belgian city was Kevin De Bruyne born?", options: ["Brussels", "Antwerp", "Ghent", "Drongen"], correctAnswer: "Drongen" },
            { question: "Before moving to Germany, De Bruyne won the Belgian Pro League with which club?", options: ["Anderlecht", "Club Brugge", "Genk", "Standard Liège"], correctAnswer: "Genk" }
        ]
    },
    // 4. Neymar Jr.
    'p-epi-004': {
        easy: [
            { question: "What country is Neymar Jr. from?", options: ["Argentina", "Portugal", "Brazil", "Colombia"], correctAnswer: "Brazil" },
            { question: "Neymar formed a famous attacking trio called 'MSN' at Barcelona with Messi and whom?", options: ["Suárez", "Sanchez", "Sterling", "Salah"], correctAnswer: "Suárez" },
            { question: "In 2017, Neymar moved from Barcelona to which club for a world-record transfer fee?", options: ["Real Madrid", "Manchester City", "Paris Saint-Germain", "Al-Hilal"], correctAnswer: "Paris Saint-Germain" }
        ],
        medium: [
            { question: "Which Brazilian club did Neymar start his professional career at?", options: ["Corinthians", "Flamengo", "São Paulo", "Santos"], correctAnswer: "Santos" },
            { question: "Neymar won the 2011 FIFA Puskás Award for a goal he scored against which team?", options: ["Corinthians", "Flamengo", "Palmeiras", "São Paulo"], correctAnswer: "Flamengo" },
            { question: "In which Olympic Games did Neymar captain Brazil to their first-ever football gold medal?", options: ["London 2012", "Rio 2016", "Tokyo 2020", "Beijing 2008"], correctAnswer: "Rio 2016" }
        ],
        hard: [
            { question: "What is Neymar's son's name?", options: ["Davi Lucca", "Thiago", "Mateo", "Cristiano Jr."], correctAnswer: "Davi Lucca" },
            { question: "Neymar is the second-highest goalscorer for the Brazilian national team, behind which player?", options: ["Ronaldo", "Romario", "Zico", "Pelé"], correctAnswer: "Pelé" },
            { question: "What was the name of the documentary series about Neymar released on Netflix in 2022?", options: ["Neymar: The King", "Neymar: The Perfect Chaos", "Neymar: The Boy from Brazil", "Neymar: O Jogo Bonito"], correctAnswer: "Neymar: The Perfect Chaos" }
        ]
    },
    // 5. Luka Modrić
    'p-epi-005': {
        easy: [
            { question: "Which country does Luka Modrić captain?", options: ["Serbia", "Slovenia", "Croatia", "Bosnia"], correctAnswer: "Croatia" },
            { question: "For which Spanish giant has Modrić played since 2012?", options: ["Atlético Madrid", "Barcelona", "Real Madrid", "Sevilla"], correctAnswer: "Real Madrid" },
            { question: "What position does Luka Modrić play?", options: ["Striker", "Goalkeeper", "Midfielder", "Defender"], correctAnswer: "Midfielder" }
        ],
        medium: [
            { question: "In what year did Modrić win the Ballon d'Or, breaking the Messi-Ronaldo duopoly?", options: ["2016", "2017", "2018", "2019"], correctAnswer: "2018" },
            { question: "Which English Premier League club did Modrić play for before joining Real Madrid?", options: ["Arsenal", "Chelsea", "Manchester United", "Tottenham Hotspur"], correctAnswer: "Tottenham Hotspur" },
            { question: "In the 2018 World Cup, Croatia reached the final before losing to which team?", options: ["Germany", "Brazil", "France", "Argentina"], correctAnswer: "France" }
        ],
        hard: [
            { question: "During the Croatian War of Independence, Modrić's family became refugees. Which city did they flee to?", options: ["Zagreb", "Split", "Zadar", "Rijeka"], correctAnswer: "Zadar" },
            { question: "Modrić was loaned out from Dinamo Zagreb to which Bosnian club where he developed his tough playing style?", options: ["HŠK Zrinjski Mostar", "FK Sarajevo", "FK Željezničar", "NK Široki Brijeg"], correctAnswer: "HŠK Zrinjski Mostar" },
            { question: "What is the nickname for Modrić's signature outside-of-the-boot pass or shot?", options: ["The Rabona", "The Knuckleball", "The Trivela", "The Elastico"], correctAnswer: "The Trivela" }
        ]
    },
     // 6. Mohamed Salah
    'p-epi-006': {
        easy: [
            { question: "What country does Mohamed Salah represent?", options: ["Algeria", "Morocco", "Egypt", "Tunisia"], correctAnswer: "Egypt" },
            { question: "For which Premier League club is Salah a record-breaking goalscorer?", options: ["Chelsea", "Arsenal", "Liverpool", "Manchester City"], correctAnswer: "Liverpool" },
            { question: "What is Salah's nickname among fans?", options: ["The Pharaoh", "The Egyptian King", "Mo-Salah", "The Desert Rose"], correctAnswer: "The Egyptian King" }
        ],
        medium: [
            { question: "From which Italian club did Liverpool sign Salah in 2017?", options: ["Fiorentina", "Inter Milan", "Roma", "Napoli"], correctAnswer: "Roma" },
            { question: "Salah won the 2018 FIFA Puskás Award for a goal against which rival team?", options: ["Manchester United", "Everton", "Chelsea", "Manchester City"], correctAnswer: "Everton" },
            { question: "Before finding success in Italy, Salah had a difficult spell at which other Premier League club?", options: ["Tottenham Hotspur", "Chelsea", "Manchester United", "Arsenal"], correctAnswer: "Chelsea" }
        ],
        hard: [
            { question: "Which Swiss club was Salah's first European team?", options: ["FC Zurich", "Young Boys", "Grasshopper", "FC Basel"], correctAnswer: "FC Basel" },
            { question: "What is Mohamed Salah's daughter's name?", options: ["Aisha", "Fatima", "Khadija", "Makka"], correctAnswer: "Makka" },
            { question: "Salah scored a last-minute penalty against which country to send Egypt to the 2018 World Cup?", options: ["Ghana", "Nigeria", "Congo", "Cameroon"], correctAnswer: "Congo" }
        ]
    },
    // 7. Robert Lewandowski
    'p-epi-007': {
        easy: [
            { question: "Which country does Robert Lewandowski captain?", options: ["Germany", "Czech Republic", "Poland", "Austria"], correctAnswer: "Poland" },
            { question: "Lewandowski is the all-time top scorer for which German club?", options: ["Borussia Dortmund", "Bayer Leverkusen", "Bayern Munich", "RB Leipzig"], correctAnswer: "Bayern Munich" },
            { question: "What is Lewandowski's primary role on the pitch?", options: ["Creating chances", "Scoring goals", "Defending", "Making saves"], correctAnswer: "Scoring goals" }
        ],
        medium: [
            { question: "Which coach converted Lewandowski from an attacking midfielder to a striker at Lech Poznań?", options: ["Franciszek Smuda", "Adam Nawałka", "Czesław Michniewicz", "Jerzy Engel"], correctAnswer: "Franciszek Smuda" },
            { question: "In 2015, Lewandowski scored 5 goals in just 9 minutes for Bayern Munich against which opponent?", options: ["Borussia Dortmund", "VfL Wolfsburg", "Hamburger SV", "Schalke 04"], correctAnswer: "VfL Wolfsburg" },
            { question: "Which Spanish club did Lewandowski join in 2022?", options: ["Real Madrid", "Atlético Madrid", "Barcelona", "Sevilla"], correctAnswer: "Barcelona" }
        ],
        hard: [
            { question: "What is the name of Lewandowski's wife, who is a famous martial artist and nutritionist?", options: ["Anna", "Katarzyna", "Joanna", "Agnieszka"], correctAnswer: "Anna" },
            { question: "A volcanic eruption in Iceland in 2010 prevented Lewandowski from flying to which English club for a potential transfer?", options: ["Blackburn Rovers", "Manchester United", "Tottenham Hotspur", "Aston Villa"], correctAnswer: "Blackburn Rovers" },
            { question: "Lewandowski won 'The Best FIFA Men's Player' award in which two consecutive years?", options: ["2018 & 2019", "2019 & 2020", "2020 & 2021", "2021 & 2022"], correctAnswer: "2020 & 2021" }
        ]
    },
    // 8. Virgil van Dijk
    'p-epi-008': {
        easy: [
            { question: "Which country does Virgil van Dijk captain?", options: ["Belgium", "Germany", "Netherlands", "France"], correctAnswer: "Netherlands" },
            { question: "For which English club is Van Dijk a commanding central defender?", options: ["Manchester United", "Chelsea", "Liverpool", "Arsenal"], correctAnswer: "Liverpool" },
            { question: "What quality is Van Dijk most known for?", options: ["Pace", "Dribbling", "Defensive dominance", "Goalscoring"], correctAnswer: "Defensive dominance" }
        ],
        medium: [
            { question: "From which Premier League club did Liverpool sign Van Dijk for a world-record fee for a defender?", options: ["Celtic", "Southampton", "Groningen", "Everton"], correctAnswer: "Southampton" },
            { question: "In 2019, Van Dijk won the UEFA Men's Player of the Year Award. Which other two players were on the shortlist?", options: ["Messi & Ronaldo", "Salah & Mané", "Mbappé & Neymar", "Hazard & De Bruyne"], correctAnswer: "Messi & Ronaldo" },
            { question: "Which Scottish club did Van Dijk play for before moving to England?", options: ["Rangers", "Celtic", "Aberdeen", "Hibernian"], correctAnswer: "Celtic" }
        ],
        hard: [
            { question: "Van Dijk worked as what before becoming a professional footballer?", options: ["Bricklayer", "Pot washer", "Delivery driver", "Postman"], correctAnswer: "Pot washer" },
            { question: "In 2012, Van Dijk suffered a life-threatening medical emergency. What was it?", options: ["Heart attack", "Burst appendix and peritonitis", "Brain aneurysm", "Collapsed lung"], correctAnswer: "Burst appendix and peritonitis" },
            { question: "Which Dutch club did Van Dijk start his professional career with?", options: ["Willem II", "Feyenoord", "FC Groningen", "Ajax"], correctAnswer: "FC Groningen" }
        ]
    },
    // 9. Harry Kane
    'p-epi-009': {
        easy: [
            { question: "Which country does Harry Kane captain?", options: ["Republic of Ireland", "Scotland", "England", "Wales"], correctAnswer: "England" },
            { question: "For which London club did Kane become the all-time leading goalscorer?", options: ["Arsenal", "Chelsea", "West Ham", "Tottenham Hotspur"], correctAnswer: "Tottenham Hotspur" },
            { question: "What individual award did Harry Kane win at the 2018 FIFA World Cup?", options: ["Golden Ball", "Golden Glove", "Golden Boot", "Best Young Player"], correctAnswer: "Golden Boot" }
        ],
        medium: [
            { question: "Which German club did Harry Kane join in 2023?", options: ["Borussia Dortmund", "RB Leipzig", "Bayern Munich", "Bayer Leverkusen"], correctAnswer: "Bayern Munich" },
            { question: "As a youth player, Kane was released by which North London rival of Tottenham?", options: ["Arsenal", "West Ham", "Chelsea", "Fulham"], correctAnswer: "Arsenal" },
            { question: "How many times has Harry Kane won the Premier League Golden Boot?", options: ["1", "2", "3", "4"], correctAnswer: "3" }
        ],
        hard: [
            { question: "Kane spent time on loan at several clubs early in his career. Which of these was NOT one of them?", options: ["Leyton Orient", "Millwall", "Norwich City", "Swindon Town"], correctAnswer: "Swindon Town" },
            { question: "Harry Kane is a fan of which American sport and has expressed interest in playing it professionally?", options: ["Baseball", "Basketball", "American Football (NFL)", "Ice Hockey"], correctAnswer: "American Football (NFL)" },
            { question: "Who was the manager that gave Harry Kane his consistent run in the Tottenham first team?", options: ["Harry Redknapp", "André Villas-Boas", "Tim Sherwood", "Mauricio Pochettino"], correctAnswer: "Mauricio Pochettino" }
        ]
    },
    // 10. Sadio Mané
    'p-epi-010': {
        easy: [
            { question: "Which African country does Sadio Mané represent?", options: ["Nigeria", "Ivory Coast", "Senegal", "Ghana"], correctAnswer: "Senegal" },
            { question: "Mané formed a famous attacking trio at Liverpool with Salah and whom?", options: ["Jota", "Firmino", "Origi", "Sturridge"], correctAnswer: "Firmino" },
            { question: "Mané is known for his incredible...", options: ["Height", "Strength", "Speed", "Goalkeeping"], correctAnswer: "Speed" }
        ],
        medium: [
            { question: "Mané holds the record for the fastest-ever Premier League hat-trick, scored in 2 minutes 56 seconds. Which team was it against?", options: ["Sunderland", "Aston Villa", "Norwich City", "Watford"], correctAnswer: "Aston Villa" },
            { question: "From which club did Liverpool sign Sadio Mané?", options: ["Red Bull Salzburg", "Metz", "Southampton", "Génération Foot"], correctAnswer: "Southampton" },
            { question: "In 2022, Mané led Senegal to their first-ever victory in which tournament?", options: ["World Cup", "Africa Cup of Nations", "Olympic Games", "Confederations Cup"], correctAnswer: "Africa Cup of Nations" }
        ],
        hard: [
            { question: "Which French club was Mané's first professional team in Europe?", options: ["Lille", "Monaco", "Metz", "Marseille"], correctAnswer: "Metz" },
            { question: "Sadio Mané is known for his extensive charity work in his home village of...?", options: ["Dakar", "Bambali", "Touba", "Ziguinchor"], correctAnswer: "Bambali" },
            { question: "Which manager signed Mané for both Red Bull Salzburg and Southampton?", options: ["Ronald Koeman", "Mauricio Pochettino", "Roger Schmidt", "This didn't happen"], correctAnswer: "This didn't happen" }
        ]
    }
};
