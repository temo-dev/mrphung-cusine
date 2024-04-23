"use client";
import { create } from 'zustand'

export const useAppStore = create((set) => ({
  language: 'en',
  dataLayout: [],
  dataHome: [],
  changeLang: (payload) => {
    return set({ language: payload })
  },
  getInitLayout: (payload) => {

    return set({ dataLayout: payload })
  },
  getInitHome: (payload) => {
    return set({ dataHome: payload })
  }

}))