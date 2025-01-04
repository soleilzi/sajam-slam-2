import { create } from 'zustand'

export const useStreamers = create((set) => ({
  streamers: [],
  streamer: null,
  setStreamers: (streamers) => set({streamers}),

  fetchStreamers: async () => {
    const res = await fetch("/api/streamers");
    const data = await res.json();
    set({ streamers: data.data });
  },

  fetchStreamerByID: async (sid) => {
    const res = await fetch(`/api/streamers/${sid}`);
    const data = await res.json()
    if (data.success) {
      set({ streamer: data.data });
      return { success: true, streamer: data.data }
    }
    return { success: false, message: data.message };
  },
}))