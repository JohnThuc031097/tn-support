import {
    Collapse,
    Dropdown,
    initTE,
} from "tw-elements";
import { useEffect } from 'react'
import useColorMode from "../../hooks/useColorMode";
import TnIconLightDown from "../TnIcon/TnIconLightDown";
import TnDropdown from "../TnDropdown/TnDropdown";

export default function TnNavbar({ listMenu }) {
    const colorMode = useColorMode()

    useEffect(() => {
        initTE({ Collapse, Dropdown });
    }, [])

    return (
        // <!--Main navigation container-- >
        <nav
            className="flex-no-wrap relative flex w-full items-center justify-center bg-tn-light dark:bg-tn-dark py-2 shadow-md shadow-black/5 dark:shadow-black/10">
            <div className="flex w-full flex-wrap items-center justify-end px-3">
                {/* <!-- Right elements --> */}
                <div className="relative flex items-center">
                    <div
                        className="relative"
                        data-te-dropdown-ref
                        data-te-dropdown-alignment="end">
                        <button
                            id="toggle-color-mode"
                            className="hidden-arrow mr-4 flex items-center text-tn-light-text transition duration-200 hover:text-tn-light-text-hover hover:ease-in-out focus:text-tn-light-text-focus disabled:text-tn-light-text-disabled motion-reduce:transition-none dark:text-tn-dark-text dark:hover:text-tn-dark-text-hover-300 dark:focus:text-tn-dark-text-focus [&.active]:text-tn-light-text-focus dark:[&.active]:text-tn-dark-text-focus"
                            onClick={colorMode.toggleColorMode}
                            href="#!">
                            <TnIconLightDown className="w-5 h-5" />
                        </button>
                    </div>
                    {listMenu && listMenu.map((items, index) => {
                        return (
                            <TnDropdown key={index} {...items} />
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}