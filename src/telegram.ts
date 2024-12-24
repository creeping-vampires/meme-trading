declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
        initDataUnsafe: object;
        close(): void;
        expand(): void;
        disableVerticalSwipes(): void;
        isExpanded: boolean;
        themeParams: {
          bg_color: string;
          text_color: string;
          hint_color: string;
          button_color: string;
          button_text_color: string;
        };
        setBackgroundColor(color: string): void;
        setHeaderColor(color: string): void;
      };
    };
  }
}

// Initialize Telegram WebApp
export const Telegram = window.Telegram?.WebApp || null;

export const closeApp = () => Telegram?.close();
export const expandApp = () => Telegram?.expand();
export const getTheme = () => Telegram?.themeParams;
export const disableVerticalSwipes = () => Telegram?.disableVerticalSwipes();
