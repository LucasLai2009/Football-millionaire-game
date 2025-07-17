import { PlayerQuestions } from '../../types';

export const COMMON_PLAYER_QUESTIONS: Record<string, PlayerQuestions> = {
    // 1. Jordan Henderson
    'p-com-001': {
        easy: [
            { question: "Which country does Jordan Henderson represent?", options: ["Wales", "Scotland", "England", "Republic of Ireland"], correctAnswer: "England" },
            { question: "Henderson was the captain of which club when they won the Premier League and Champions League?", options: ["Sunderland", "Liverpool", "Manchester United", "Al-Ettifaq"], correctAnswer: "Liverpool" },
            { question: "What position does Jordan Henderson play?", options: ["Striker", "Midfielder", "Defender", "Goalkeeper"], correctAnswer: "Midfielder" }
        ],
        medium: [
            { question: "From which club did Liverpool sign Jordan Henderson in 2011?", options: ["Newcastle United", "Sunderland", "Middlesbrough", "Coventry City"], correctAnswer: "Sunderland" },
            { question: "Who did Henderson succeed as the full-time captain of Liverpool?", options: ["Jamie Carragher", "Daniel Agger", "Steven Gerrard", "Lucas Leiva"], correctAnswer: "Steven Gerrard" },
            { question: "What is the name of the shuffling run Henderson sometimes does before lifting a trophy?", options: ["The Hendo Hustle", "The Hendo Hop", "The Hendo Shuffle", "The Hendo Dance"], correctAnswer: "The Hendo Shuffle" }
        ],
        hard: [
            { question: "Which Dutch club did Henderson join in January 2024?", options: ["Feyenoord", "PSV Eindhoven", "Ajax", "AZ Alkmaar"], correctAnswer: "Ajax" },
            { question: "In 2020, Henderson was named the FWA Footballer of the Year. What does FWA stand for?", options: ["Football Writers' Association", "Football Worldwide Association", "FIFA World Awards", "Fans' Writing Association"], correctAnswer: "Football Writers' Association" },
            { question: "Henderson was an ambassador for which UK public health service during the COVID-19 pandemic?", options: ["St John Ambulance", "British Red Cross", "NHS Charities Together", "Public Health England"], correctAnswer: "NHS Charities Together" }
        ]
    },
    // 2. César Azpilicueta
    'p-com-002': {
        easy: [
            { question: "What country is César Azpilicueta from?", options: ["Portugal", "France", "Spain", "Argentina"], correctAnswer: "Spain" },
            { question: "For which London club was Azpilicueta a long-serving captain?", options: ["Arsenal", "Tottenham", "Fulham", "Chelsea"], correctAnswer: "Chelsea" },
            { question: "What is Azpilicueta's nickname given by Chelsea fans?", options: ["Azpi", "Dave", "César", "The Captain"], correctAnswer: "Dave" }
        ],
        medium: [
            { question: "From which French club did Chelsea sign Azpilicueta?", options: ["Lyon", "Monaco", "Marseille", "Lille"], correctAnswer: "Marseille" },
            { question: "Which Spanish club did Azpilicueta join after leaving Chelsea in 2023?", options: ["Real Madrid", "Barcelona", "Atlético Madrid", "Valencia"], correctAnswer: "Atlético Madrid" },
            { question: "Azpilicueta is one of only a few players to have won the Premier League, FA Cup, League Cup, Champions League, Europa League, and what other major trophy with Chelsea?", options: ["Community Shield", "UEFA Super Cup", "FIFA Club World Cup", "Intertoto Cup"], correctAnswer: "FIFA Club World Cup" }
        ],
        hard: [
            { question: "At which Spanish club did Azpilicueta begin his professional career?", options: ["Athletic Bilbao", "Real Sociedad", "Osasuna", "Racing Santander"], correctAnswer: "Osasuna" },
            { question: "What shirt number did Azpilicueta wear for the majority of his time at Chelsea?", options: ["2", "24", "28", "3"], correctAnswer: "28" },
            { question: "Under which manager was Azpilicueta first made Chelsea's full club captain?", options: ["José Mourinho", "Antonio Conte", "Maurizio Sarri", "Frank Lampard"], correctAnswer: "Maurizio Sarri" }
        ]
    },
    // 3. James Ward-Prowse
    'p-com-003': {
        easy: [
            { question: "What country is James Ward-Prowse from?", options: ["Wales", "Scotland", "England", "Republic of Ireland"], correctAnswer: "England" },
            { question: "For which club did Ward-Prowse play for 20 years, from the age of 8?", options: ["Portsmouth", "Bournemouth", "Southampton", "Brighton"], correctAnswer: "Southampton" },
            { question: "James Ward-Prowse is particularly famous for his skill in what area?", options: ["Tackling", "Heading", "Free-kicks", "Goalkeeping"], correctAnswer: "Free-kicks" }
        ],
        medium: [
            { question: "Which club did Ward-Prowse join in the summer of 2023?", options: ["Arsenal", "Tottenham Hotspur", "West Ham United", "Newcastle United"], correctAnswer: "West Ham United" },
            { question: "Ward-Prowse is second on the all-time list for Premier League free-kick goals. Who is first?", options: ["David Beckham", "Cristiano Ronaldo", "Thierry Henry", "Gianfranco Zola"], correctAnswer: "David Beckham" },
            { question: "What is Ward-Prowse's signature pre-free kick routine?", options: ["He kisses the ball", "He puffs out his cheeks", "He takes three steps back", "He adjusts his socks"], correctAnswer: "He puffs out his cheeks" }
        ],
        hard: [
            { question: "In which city was James Ward-Prowse born?", options: ["Southampton", "Winchester", "Portsmouth", "Bournemouth"], correctAnswer: "Portsmouth" },
            { question: "At the 2013 Toulon Tournament, Ward-Prowse was one of three England players named in the Team of the Tournament. Which of these was NOT one of the others?", options: ["John Stones", "Ross Barkley", "Nathan Redmond", "Eric Dier"], correctAnswer: "Ross Barkley" },
            { question: "What is James Ward-Prowse's middle name?", options: ["William", "Walter", "Warren", "Wayne"], correctAnswer: "Walter" }
        ]
    },
    // 4. Kieran Trippier
    'p-com-004': {
        easy: [
            { question: "What country does Kieran Trippier represent?", options: ["Wales", "England", "Scotland", "Republic of Ireland"], correctAnswer: "England" },
            { question: "Trippier is known for his excellent crossing from which position?", options: ["Left-Back", "Right-Back", "Centre-Back", "Winger"], correctAnswer: "Right-Back" },
            { question: "Which Premier League club does Trippier currently play for?", options: ["Tottenham Hotspur", "Burnley", "Newcastle United", "Manchester City"], correctAnswer: "Newcastle United" }
        ],
        medium: [
            { question: "Trippier scored a famous free-kick for England in the 2018 World Cup semi-final against which team?", options: ["France", "Belgium", "Croatia", "Colombia"], correctAnswer: "Croatia" },
            { question: "Which Spanish club did Trippier win the La Liga title with?", options: ["Real Madrid", "Barcelona", "Sevilla", "Atlético Madrid"], correctAnswer: "Atlético Madrid" },
            { question: "Trippier started his career at which Premier League club, though never made a league appearance for them?", options: ["Manchester City", "Manchester United", "Liverpool", "Chelsea"], correctAnswer: "Manchester City" }
        ],
        hard: [
            { question: "What is Kieran Trippier's nickname, referring to his hometown?", options: ["The Bury Ronaldo", "The Bolton Beckham", "The Bury Beckham", "The Salford Star"], correctAnswer: "The Bury Beckham" },
            { question: "In 2021, Trippier was banned from football for 10 weeks for breaching rules related to what?", options: ["Doping", "Betting", "Social Media Conduct", "Agent payments"], correctAnswer: "Betting" },
            { question: "Which manager signed Trippier for both Burnley and Tottenham Hotspur?", options: ["Eddie Howe", "Sean Dyche", "Mauricio Pochettino", "Harry Redknapp"], correctAnswer: "Sean Dyche" }
        ]
    },
    // 5. Olivier Giroud
    'p-com-005': {
        easy: [
            { question: "What country does Olivier Giroud play for?", options: ["Belgium", "Switzerland", "France", "Canada"], correctAnswer: "France" },
            { question: "Giroud is known for playing in which position?", options: ["Winger", "Striker", "Midfielder", "Defender"], correctAnswer: "Striker" },
            { question: "Which two London clubs did Giroud win the FA Cup with?", options: ["Tottenham & West Ham", "Arsenal & Chelsea", "Fulham & QPR", "Crystal Palace & Millwall"], correctAnswer: "Arsenal & Chelsea" }
        ],
        medium: [
            { question: "Giroud won the 2017 FIFA Puskás Award for what type of goal for Arsenal against Crystal Palace?", options: ["Bicycle kick", "Scorpion kick", "Volley", "Diving header"], correctAnswer: "Scorpion kick" },
            { question: "Which Italian club did Giroud join from Chelsea and win the Serie A title with?", options: ["Juventus", "Inter Milan", "AC Milan", "Napoli"], correctAnswer: "AC Milan" },
            { question: "Despite being France's starting striker, how many shots on target did Giroud have at the 2018 World Cup?", options: ["Ten", "Five", "One", "Zero"], correctAnswer: "Zero" }
        ],
        hard: [
            { question: "With which French club did Giroud win the Ligue 1 title in 2012, finishing as top scorer?", options: ["Grenoble", "Tours", "Montpellier", "Marseille"], correctAnswer: "Montpellier" },
            { question: "In a 2023 match for AC Milan against Genoa, Giroud famously had to do what for the final minutes?", options: ["Play as a goalkeeper", "Play with a broken arm", "Wear a defender's shirt", "Take a penalty"], correctAnswer: "Play as a goalkeeper" },
            { question: "What is Olivier Giroud's middle name?", options: ["Jonathan", "Nicolas", "Sébastien", "Christophe"], correctAnswer: "Jonathan" }
        ]
    }
};
