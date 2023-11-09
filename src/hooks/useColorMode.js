import { useContext } from "react";
import { ColorModeContext } from "../contexts/ColorModeContext";

export default function useColorMode() {
    const colorModeContext = useContext(ColorModeContext)
    return colorModeContext
}