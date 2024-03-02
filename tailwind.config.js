const toRem = (px) => px / 16 + "rem";
/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./subpages/**/*.{js,ts,jsx,tsx}",
      "./dialogs/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
   ],

   theme: {
      extend: {
         boxShadow: {
            menu: "0px 0px 0px 100px rgba(52, 64, 84, 0.60)",

            tabs2: "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
         },
         fontSize: {
            d2xl: ["4.5rem", toRem(90)],
            dxl: ["3.75rem", toRem(72)],
            dlg: ["3rem", toRem(60)],
            dmd: ["2.25rem", toRem(44)],
            dsm: [toRem(30), toRem(38)],
            dxs: [toRem(24), toRem(32)],
         },

         backgroundImage: {
            "gray-600-600":
               "conic-gradient(from 259.08deg at 50% 50%, #475467 0deg, rgba(71, 84, 103, 0) 360deg);",
            "gray-600-500": "linear-gradient(90deg, #475467 0%, #667085 100%);",
            "gray-700-600": "linear-gradient(45deg, #344054 0%, #475467 100%);",
            "gray-800-600-45":
               "linear-gradient(45deg, #1D2939 0%, #475467 100%);",
            "gray-800-600-90":
               "linear-gradient(63.44deg, #1D2939 16.72%, #475467 83.39%);",
            "gray-800-700":
               "linear-gradient(26.57deg, #1D2939 8.33%, #344054 91.67%);",
            "gray-900-600": "linear-gradient(45deg, #101828 0%, #475467 100%);",
         },
         spacing: {
            0.25: toRem(1),
            2.5: toRem(10),
            3.5: toRem(14),
            4.5: toRem(18),
            5.5: toRem(22),
            6.5: toRem(30),
            18: toRem(72),
            106: toRem(424),
            200: toRem(800),
            17: toRem(68),
            160: toRem(640),
         },
         width: {
            90: toRem(360),
            106: toRem(424),
            150: toRem(600),
            904: toRem(904),
            130: toRem(520),
         },
         colors: {
            white: "#ffffff",
            black: "#000000",
            gray: {
               25: "#FCFCFD",
               50: "#FEFBE8",
               50: "#F9FAFB",
               100: "#F2F4F7",
               200: "#EAECF0",
               300: "#D0D5DD",
               400: "#98A2B3",
               500: "#667085",
               600: "#475467",
               700: "#344054",
               800: "#1D2939",
               900: "#101828",
            },
            primary: {
               25: "#FFF9F5",
               50: "#FFF4ED",
               100: "#FFE6D5",
               200: "#FFD6AE",
               300: "#FF9C66",
               400: "#FF692E",
               500: "#FF4405",
               600: "#E62E05",
               700: "#BC1B06",
               800: "#97180C",
               900: "#771A0D",
            },
            secondary: {
               25: "#F5FAFF",
               50: "#EFF8FF",
               100: "#D1E9FF",
               200: "#B2DDFF",
               300: "#84CAFF",
               400: "#53B1FD",
               500: "#2E90FA",
               600: "#1570EF",
               700: "#175CD3",
               800: "#1849A9",
               900: "#194185",
            },
            error: {
               25: "#FFFBFA",
               50: "#FEF3F2",
               100: "#FEE4E2",
               200: "#FECDCA",
               300: "#FDA29B",
               400: "#F97066",
               500: "#F04438",
               600: "#D92D20",
               700: "#B42318",
               800: "#912018",
               900: "#7A271A",
            },
            warning: {
               25: "#FEFDF0",

               100: "#FEF7C3",
               200: "#FEEE95",
               300: "#FDE272",
               400: "#FAC515",
               500: "#EAAA08",
               600: "#CA8504",
               700: "#A15C07",
               800: "#854A0E",
               900: "#713B12",
            },
            success: {
               25: "#F6FEF9",
               50: "#ECFDF3",
               100: "#D1FADF",
               200: "#A6F4C5",
               300: "#6CE9A6",
               400: "#32D583",
               500: "#12B76A",
               600: "#039855",
               700: "#027A48",
               800: "#05603A",
               900: "#054F31",
            },
         },
      },
   },
};
