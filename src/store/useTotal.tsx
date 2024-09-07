import { create } from 'zustand'

interface TotalItemProps {
  totalItem:number
  setTotalItem:(totalItem:number) => void
}

export const useTotal = create<TotalItemProps>((set) => ({
  totalItem:0,
  setTotalItem:(totalItem) => set({ totalItem })
}))
