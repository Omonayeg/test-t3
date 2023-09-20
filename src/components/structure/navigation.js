import { Gallery } from "../pages/Gallery"
import { Home } from "../pages/Home"


export const nav = [
     { path:     "/",         name: "Home",        element: <Home />,       isMenu: false,     isPrivate: false  },
     { path:     "/account",  name: "Account",     element: <Gallery />,    isMenu: true,     isPrivate: true  },
]