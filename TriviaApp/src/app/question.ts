export interface Question {
    id: number,
    text: string,
    bonusText: string,
    imageLink: string,
    hint: string,
    answer: string,
    bonusAnswer: string,
    points: number,
    asked: boolean,
    askOrder: number,
    revealed: boolean
  }