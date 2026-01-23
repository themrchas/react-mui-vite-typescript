import { createTheme } from "@mui/material/styles";

/*
export default {
  styleOverrides: {
    root: {
      "& .MuiMenuItem-root.Mui-selected": {
        backgroundColor: "rgba(25,118,210,0.15)"
      },
      "& .MuiMenuItem-root.Mui-selected:hover": {
        backgroundColor: "rgba(25,118,210,0.25)"
      }
    }
  }
};

*/



export const menuItemFish = createTheme({
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "rgba(210, 59, 25, 0.15)",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "rgba(210, 59, 25, 0.25)",
          },
        },
      },
    },
  },
});


export const menuItemDog = createTheme({
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "rgba(210, 59, 25, 0.15)",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "rgba(210, 59, 25, 0.25)",
          },
        },
      },
    },
  },
});

export const menuAnimals = createTheme({
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "rgba(210, 59, 25, 0.15)",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "rgba(210, 59, 25, 0.25)",
          },
        },
      },
    },
  },
});

