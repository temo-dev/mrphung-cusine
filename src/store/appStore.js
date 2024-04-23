"use client";
import { create } from 'zustand'
import axios from 'axios'

const getLayout = async () => {
  const res = await axios.get("https://cms-mr-phung.onrender.com/api/get-layout")
  return { "layout": res.data }
}
const getHome = async () => {
  const res = await axios.get("https://cms-mr-phung.onrender.com/api/get-home-page")
  return { "home": res.data }
}

const getChef = async () => {
  const res = await axios.get("https://cms-mr-phung.onrender.com/api/get-all-chef-page")
  return { "chef": res.data }
}
const getGallery = async () => {
  const res = await axios.get("https://cms-mr-phung.onrender.com/api/get-gallery-page")
  return { "gallery": res.data }
}


const initialState = {
  isLoading: true,
  language: 'en',
  dataLayout: [],
  dataHome: [],
  dataGallery: [],
  dataChef: [],
}

export const useGetData = create((set, get) => ({
  ...initialState,
  execute: async () => {
    set({ ...initialState, loading: true })
    try {
      Promise.all([getLayout(), getHome(), getChef(), getGallery()]).then(res => {
        const layout = res.find(item => item.layout)
        const home = res.find(item => item.home)
        const chef = res.find(item => item.chef)
        const gallery = res.find(item => item.gallery)
        set({ ...initialState, isLoading: false, dataLayout: layout?.layout, dataHome: home?.home, dataChef: chef?.chef, dataGallery: gallery?.gallery })
      })
    } catch (error) {
      console.log(error)
      set({ ...initialState })
    }
  },
  changeLang: (payload) => set({ language: payload }),

}))