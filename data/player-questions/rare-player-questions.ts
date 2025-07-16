import { PlayerQuestions } from '../../types';

export const RARE_PLAYER_QUESTIONS: Record<string, PlayerQuestions> = {
    // 1. Jude Bellingham
    'p-rar-001': {
        easy: [
            { question: "Which country does Jude Bellingham play for?", options: ["Germany", "Spain", "England", "France"], correctAnswer: "England" },
            { question: "Which Spanish giant did Bellingham join in 2023?", options: ["Barcelona", "Atlético Madrid", "Real Madrid", "Sevilla"], correctAnswer: "Real Madrid" },
            { question: "What position does Bellingham primarily play?", options: ["Defender", "Forward", "Goalkeeper", "Midfielder"], correctAnswer: "Midfielder" }
        ],
        medium: [
            { question: "From which German club did Real Madrid sign Bellingham?", options: ["Bayern Munich", "RB Leipzig", "Borussia Dortmund", "Bayer Leverkusen"], correctAnswer: "Borussia Dortmund" },
            { question: "Which English club retired Bellingham's shirt number when he left?", options: ["Sunderland", "Birmingham City", "West Bromwich Albion", "Aston Villa"], correctAnswer: "Birmingham City" },
            { question: "What shirt number did Bellingham take at Real Madrid, previously worn by Zidane?", options: ["10", "7", "5", "8"], correctAnswer: "5" }
        ],
        hard: [
            { question: "What is Jude Bellingham's younger brother's name, who is also a professional footballer?", options: ["Jack", "Jobe", "Joe", "Josh"], correctAnswer: "Jobe" },
            { question: "Bellingham was part of the England squad that reached the final of which tournament?", options: ["Euro 2020", "World Cup 2018", "Nations League 2019", "Euro 2016"], correctAnswer: "Euro 2020" },
            { question: "In which town near Birmingham was Jude Bellingham born?", options: ["Dudley", "Solihull", "Walsall", "Stourbridge"], correctAnswer: "Stourbridge" }
        ]
    },
    // 2. Jamal Musiala
    'p-rar-002': {
        easy: [
            { question: "Which country does Jamal Musiala represent at senior international level?", options: ["England", "Nigeria", "Germany", "Poland"], correctAnswer: "Germany" },
            { question: "Which German club is Musiala a star player for?", options: ["Borussia Dortmund", "RB Leipzig", "Bayern Munich", "Bayer Leverkusen"], correctAnswer: "Bayern Munich" },
            { question: "What is Musiala's primary position?", options: ["Defensive Midfielder", "Attacking Midfielder", "Centre-Back", "Striker"], correctAnswer: "Attacking Midfielder" }
        ],
        medium: [
            { question: "From which English club's academy did Bayern Munich sign Musiala?", options: ["Arsenal", "Chelsea", "Southampton", "Manchester City"], correctAnswer: "Chelsea" },
            { question: "Musiala represented which country at youth level before switching to Germany?", options: ["Nigeria", "Poland", "England", "France"], correctAnswer: "England" },
            { question: "What is Musiala's nickname, given to him by teammates?", options: ["Magic Mus", "The Wizard", "Bambi", "J-Muz"], correctAnswer: "Bambi" }
        ],
        hard: [
            { question: "In which German city was Jamal Musiala born?", options: ["Munich", "Berlin", "Stuttgart", "Fulda"], correctAnswer: "Stuttgart" },
            { question: "Musiala scored the title-winning goal for Bayern Munich on the final day of the 2022-23 season against which team?", options: ["Borussia Dortmund", "FC Köln", "RB Leipzig", "Union Berlin"], correctAnswer: "FC Köln" },
            { question: "Who was the Bayern Munich manager who gave Musiala his professional debut?", options: ["Niko Kovač", "Jupp Heynckes", "Hansi Flick", "Julian Nagelsmann"], correctAnswer: "Hansi Flick" }
        ]
    },
    // 3. Bukayo Saka
    'p-rar-003': {
        easy: [
            { question: "Which country does Bukayo Saka play for?", options: ["Nigeria", "Ghana", "England", "USA"], correctAnswer: "England" },
            { question: "For which North London club does Saka play?", options: ["Tottenham Hotspur", "Chelsea", "West Ham United", "Arsenal"], correctAnswer: "Arsenal" },
            { question: "Saka is known for playing in which position?", options: ["Goalkeeper", "Centre-Back", "Winger", "Defensive Midfielder"], correctAnswer: "Winger" }
        ],
        medium: [
            { question: "What shirt number does Bukayo Saka wear for Arsenal?", options: ["10", "11", "7", "17"], correctAnswer: "7" },
            { question: "Saka has been named Arsenal's Player of the Season multiple times. How many times (as of 2023)?", options: ["Once", "Twice", "Three times", "Four times"], correctAnswer: "Twice" },
            { question: "Saka's parents are from which African nation?", options: ["Ghana", "Nigeria", "Ivory Coast", "Senegal"], correctAnswer: "Nigeria" }
        ],
        hard: [
            { question: "What does the name 'Bukayo' mean in the Yoruba language?", options: ["Adds to happiness", "God's gift", "Little star", "Born on Sunday"], correctAnswer: "Adds to happiness" },
            { question: "Saka made his senior debut for Arsenal in the Europa League against which team?", options: ["Standard Liège", "Qarabağ", "Vorskla Poltava", "BATE Borisov"], correctAnswer: "Vorskla Poltava" },
            { question: "Saka attended which school in Greenford, London?", options: ["Greenford High School", "William Perkin C of E High School", "The Cardinal Wiseman Catholic School", "Twyford C of E High School"], correctAnswer: "Greenford High School" }
        ]
    },
    // 4. Pedri
    'p-rar-004': {
        easy: [
            { question: "Which country does Pedri represent?", options: ["Portugal", "Brazil", "Spain", "Italy"], correctAnswer: "Spain" },
            { question: "Which La Liga club does Pedri play for?", options: ["Real Madrid", "Atlético Madrid", "Barcelona", "Sevilla"], correctAnswer: "Barcelona" },
            { question: "What is Pedri's primary position?", options: ["Forward", "Midfielder", "Defender", "Goalkeeper"], correctAnswer: "Midfielder" }
        ],
        medium: [
            { question: "From which club did Barcelona sign Pedri in 2020?", options: ["Tenerife", "Las Palmas", "Real Zaragoza", "Málaga"], correctAnswer: "Las Palmas" },
            { question: "Pedri won the Golden Boy award in which year?", options: ["2020", "2021", "2022", "2019"], correctAnswer: "2021" },
            { question: "Which Barcelona legend's shirt number (8) did Pedri inherit?", options: ["Xavi", "Andrés Iniesta", "Sergio Busquets", "Ivan Rakitić"], correctAnswer: "Andrés Iniesta" }
        ],
        hard: [
            { question: "Pedri was born in which of the Canary Islands?", options: ["Gran Canaria", "Lanzarote", "Fuerteventura", "Tenerife"], correctAnswer: "Tenerife" },
            { question: "Pedri's family are big fans of Barcelona, and his grandfather founded which local fan club?", options: ["Peña Barcelonista de Tegueste", "Peña Barcelonista de La Laguna", "Peña Barcelonista de Santa Cruz", "Peña Barcelonista de Güímar"], correctAnswer: "Peña Barcelonista de Tegueste" },
            { question: "In the 2020-21 season, Pedri played a staggering number of games for club and country. How many was it approximately?", options: ["52", "63", "73", "81"], correctAnswer: "73" }
        ]
    },
    // 5. Phil Foden
    'p-rar-005': {
        easy: [
            { question: "Which country does Phil Foden play for?", options: ["Wales", "Scotland", "England", "Republic of Ireland"], correctAnswer: "England" },
            { question: "For which club has Foden played his entire professional career?", options: ["Manchester United", "Liverpool", "Chelsea", "Manchester City"], correctAnswer: "Manchester City" },
            { question: "What city is Phil Foden from?", options: ["Liverpool", "London", "Manchester", "Stockport"], correctAnswer: "Stockport" }
        ],
        medium: [
            { question: "What is Phil Foden's nickname, given to him by fans?", options: ["The Stockport Zidane", "The Stockport Iniesta", "The Stockport Messi", "The Stockport Maradona"], correctAnswer: "The Stockport Iniesta" },
            { question: "Foden won the Golden Ball (best player) at which youth World Cup tournament?", options: ["U-17 World Cup 2017", "U-20 World Cup 2017", "U-17 World Cup 2019", "U-20 World Cup 2019"], correctAnswer: "U-17 World Cup 2017" },
            { question: "What shirt number does Phil Foden wear for Manchester City?", options: ["10", "17", "47", "8"], correctAnswer: "47" }
        ],
        hard: [
            { question: "Foden is a keen angler. What type of fishing does he particularly enjoy?", options: ["Fly fishing", "Sea fishing", "Carp fishing", "Ice fishing"], correctAnswer: "Carp fishing" },
            { question: "Who was the Manchester City manager who gave Foden his senior debut?", options: ["Manuel Pellegrini", "Roberto Mancini", "Pep Guardiola", "Mark Hughes"], correctAnswer: "Pep Guardiola" },
            { question: "Foden has a tattoo on his neck that reads 'Sky is the limit'. In which year did he get it?", options: ["2020", "2021", "2022", "2023"], correctAnswer: "2022" }
        ]
    }
};
