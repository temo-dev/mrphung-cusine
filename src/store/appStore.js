"use client";
import { create } from 'zustand'

export const useAppStore = create((set) => ({
  language: 'cs',
  changeLang: (payload) => {
    localStorage.setItem("language", payload);
    return set({ language: payload })
  }

}))