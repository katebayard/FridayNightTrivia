export interface Question {
    id: number,
    text: string,
    answerOptionsType: string,
    answerOptions: string,
    bonusText: string,
    bonusOptionsType: string,
    bonusOptions: string,
    imageLink: string,
    hint: string,
    answer: string,
    bonusAnswer: string,
    points: number,
    asked: boolean,
    askOrder: number,
    revealed: boolean
  }