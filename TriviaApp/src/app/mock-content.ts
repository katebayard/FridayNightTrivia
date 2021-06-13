
import { Category} from './category';
import { Question } from './question';

 
export const CATEGORIES: Category[] =  [
    { id: 1,
      category: "Presidential Dogs",
      description: "I show you a picture, and you tell me the name of the President",
      questions: [
        {
          id: 1,
          text: "Name the President",
          bonusText: "What is the dog's name",
          imageLink: "",
          hint: "",
          answer: "FDR",
          bonusAnswer: "Fala",
          points: 2,
          asked: false,
          revealed: false
        },
        {
          id: 2,
          text: "Name the President",
          bonusText: "Bonus 1/2 point for the each of the dogs' names",
          imageLink: "",
          hint: "",
          answer: "Biden",
          bonusAnswer: "Champ and Major",
          points: 2,
          asked: false,
          revealed: false
        }
      ]
    },
    { 
      id: 2,
      category: "Name that Broadway Musical",
      description: "I give you a lyric, you tell me the musical",
      questions: [
        {
          id: 3,
          text: "\"Five hundred twenty five thousand six hundred minutes\n\rFive hundred twenty five thousand moments so dear\n\rFive hundred twenty five thousand six hundred minutes\n\rHow do you measure? Measure a year?\"",
          bonusText: "",
          imageLink: "",
          hint: "",
          answer: "Rent",
          bonusAnswer: "",
          points: 1,
          asked: false,
          revealed: false
        },
        {
          id: 4,
          text: "\"Me? I'm the damn fool that shot him.\"",
          bonusText: "",
          imageLink: "",
          hint: "",
          answer: "Hamilton",
          bonusAnswer: "",
          points: 1,
          asked: false,
          revealed: false
        }
      ]
    },
    { 
      id: 3,
      category: "State Slogans",
      description: "I give you the slogan, you name the state.",
      questions: [
        {
          id: 5,
          text: "The Centennial State",
          bonusText: "",
          imageLink: "",
          hint: "",
          answer: "Colorado",
          bonusAnswer: "",
          points: 1,
          asked: false,
          revealed: false
        },
        {
          id: 6,
          text: "The Buckeye State",
          bonusText: "",
          imageLink: "",
          hint: "",
          answer: "Ohio",
          bonusAnswer: "",
          points: 1,
          asked: false,
          revealed: false
        }
      ]
    }
  ]