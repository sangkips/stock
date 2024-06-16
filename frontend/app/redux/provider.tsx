"use client";

import { makeStore } from "./store";
import { Provider } from "react-redux";

interface props {
     children: React.ReactNode 
}
// use correct props distructuring
export default function CustomProvider({ children }: props) {
    const store = makeStore();
    return <Provider store={store}>{children}</Provider>;
}


