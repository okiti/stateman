import create from 'zustand';

type State = {
    count: number;
    inc: () => void;
  };

const countStore = create<State>((set) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 }))
}));

export default countStore;
