// Imports
import { atom, selector } from 'recoil'

// App imports
import { list } from '../_actions/notequery'

// note list
export const noteList = selector({
  key: 'noteList',
  get: async ({ get }) => {
    // force update cached data based on user
   
    get(noteUpdatedOn)

    let notes = []

    try {
      const { data } = await list()

      if(data && data.success) {
        notes = data.list
      }
    } catch (e) {
      console.log(e.message)
    }

    return notes
  }
})

// note count
export const noteUpdatedOn = atom({
  key: 'noteUpdatedOn',
  default: new Date()
})