export const exams = {
    jeeadv: {
      name: 'ADVANCE',
      date: new Date('2026-06-01T08:00:00')
    },
    jeemain: {
      name: 'MAINS',
      date: new Date('2026-01-22T09:00:00')
    }
  }
  
  export type ExamType = keyof typeof exams
  
  