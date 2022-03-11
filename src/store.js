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
  preWallpaper: 1,
  setPreWallpaper: (num) => {
    set(() => ({ preWallpaper: num }));
  },
  wallpaper: 1,
  setWallpaper: (num) => {
    set(() => ({ wallpaper: num }));
  },
  BColor: "#ff8c00",
  setBColor: (color) => {
    set(() => ({ BColor: color }));
  },
  RightMenuTaskbar: false,
  setRightMenuTaskbar: (bol) => {
    set(() => ({ RightMenuTaskbar: bol }));
  },
  isNight: false,
  setIsNight: (bol) => {
    set(() => ({ isNight: bol }));
  },
  brightness: 0.4,
  setBrightness: (br) => {
    set(() => ({ brightness: br }));
  },
  volIcon: 0,
  setVolIcon: (vol) => {
    set(() => ({ volIcon: vol }));
  },
  volumeBar: false,
  setVolumeBar: (bol) => {
    set(() => ({ volumeBar: bol }));
  },
  wifiBar: false,
  setWifiBar: (bol) => {
    set(() => ({ wifiBar: bol }));
  },
  lang: "ENG",
  setLang: (l) => {
    set(() => ({ lang: l }));
  },
  langOpen: false,
  setLangOpen: (bol) => {
    set(() => ({ langOpen: bol }));
  },
  batteryBar: false,
  setBatteryBar: (bol) => {
    set(() => ({ batteryBar: bol }));
  },
  clockBar: false,
  setClockBar: (bol) => {
    set(() => ({ clockBar: bol }));
  },
}));

export default useStore;
