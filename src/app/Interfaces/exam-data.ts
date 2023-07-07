export interface ExamData {

  id:number
  exam_name:string,
  questions:Quest[]

}

interface Quest
{
  num:number,
  question:string,
  options:string[],
  answer:string
}
