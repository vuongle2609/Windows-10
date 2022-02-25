import create from "zustand";

const useStore = create((set) => ({
  menuOpen: false,
  setMenuOpen: () => {
    set((state) => ({ menuOpen: !state.menuOpen }));
  },
  setMenuOpenConditional: (bol) => {
    set(() => ({ menuOpen: bol }));
  },
  onApp: false,
  setOnApp: (bol) => {
    set(() => ({
      onApp: bol,
    }));
  },
  appN: null,
  setAppN: (num) => {
    set(() => ({
      appN: num,
    }));
  },
  icon: 0,
  setIcon: (icon) => {
    set(() => ({ icon: icon }));
  },
  showIcon: true,
  setShowIcon: () => {
    set((state) => ({
      showIcon: !state.showIcon,
    }));
  },
  NotePadO: false,
  ChromeO: false,
  VscodeO: false,
  SettingsO: false,
  KrunkerO: false,
  MinecraftO: false,
  AnimeO: false,
  MangaO: false,
  YugiohO: false,
  setYugioh: (bol) => {
    set(() => ({
      YugiohO: bol,
    }));
  },
  setNotePad: (bol) => {
    set(() => ({
      NotePadO: bol,
    }));
  },
  setChrome: (bol) => {
    set(() => ({
      ChromeO: bol,
    }));
  },
  setVscode: (bol) => {
    set(() => ({
      VscodeO: bol,
    }));
  },
  setSettings: (bol) => {
    set(() => ({
      SettingsO: bol,
    }));
  },
  setKrunker: (bol) => {
    set(() => ({
      KrunkerO: bol,
    }));
  },
  setMinecraft: (bol) => {
    set(() => ({
      MinecraftO: bol,
    }));
  },
  setAnime: (bol) => {
    set(() => ({
      AnimeO: bol,
    }));
  },
  setManga: (bol) => {
    set(() => ({
      MangaO: bol,
    }));
  },
  wallpaper: 1,
  setWallpaper: (num) => {
    set(() => ({ wallpaper: num }));
  },
}));

export default useStore;
