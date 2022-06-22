import create from 'zustand';
import seedQuestions from './questions';

type Question = {
  id: string;
  question: string;
  category: string;
  answers: string[];
}

type Store = {
  questions: Question[];
  filtered: Question[];
  createQuestion: (question: Question) => void;
  updateQuestion: (id: string, question: { question?: string; category?: string; answer?: string }) => void;
  deleteQuestion: (id: string) => void;
  filterByCategory: (id: string) => void;
};

const questionStore = create<Store>((set, get) => ({
  filtered: [],
  questions: [...seedQuestions],
  createQuestion: (newQuestion: Question) => {
    const questionList = get().questions;
    questionList.push(newQuestion);
    set({ questions: questionList });
  },

  updateQuestion: (id, data) => {
    const { question, category, answer } = data;
    const questions = get().questions;
    const updateQuestion = questions.map((q) => {
      let result;
      if (q.id === id) {
        result = {
          id,
          question: question || q.question,
          category: category || q.category,
          answers: answer ? [answer] : q.answers
        };
      } else {
        result = q;
      }
      return result;
    });
    set({ questions: updateQuestion });
  },

  deleteQuestion: (id: string) => {
    const questions = get().questions;
    const index = questions.findIndex((e) => e.id === id);
    questions.splice(index, 1);
    set({ questions });
  },

  filterByCategory: (cat: string) => {
    const questions = get().questions;
    const filtered = questions.filter((q) => q.category === cat);
    set({ filtered });
  }
}));

export default questionStore;
