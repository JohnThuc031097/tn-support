import {
    Collapse,
    Dropdown,
    initTE,
} from "tw-elements";
import { useEffect } from 'react'
import useColorMode from "../../hooks/useColorMode";

export default function TnNavbar() {
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

                        <a
                            id="toggle-color-mode"
                            className="hidden-arrow mr-4 flex items-center text-tn-light-text transition duration-200 hover:text-tn-light-text-hover hover:ease-in-out focus:text-tn-light-text-focus disabled:text-tn-light-text-disabled motion-reduce:transition-none dark:text-tn-dark-text dark:hover:text-tn-dark-text-hover-300 dark:focus:text-tn-dark-text-focus [&.active]:text-tn-light-text-focus dark:[&.active]:text-tn-dark-text-focus"
                            onClick={colorMode.toggleColorMode}
                            href="#!">

                            <span className="[&>svg]:w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                                </svg>
                            </span>
                        </a>
                    </div>
                    {/* <!-- Container with two dropdown menus --> */}
                    <div
                        className="relative"
                        data-te-dropdown-ref
                        data-te-dropdown-alignment="end">
                        {/* <!-- First dropdown trigger --> */}
                        <a
                            className="hidden-arrow mr-4 flex items-center text-tn-light-text transition duration-200 hover:text-tn-light-text-hover hover:ease-in-out focus:text-tn-light-text-focus disabled:text-tn-light-text-disabled motion-reduce:transition-none dark:text-tn-dark-text dark:hover:text-tn-dark-text-hover-300 dark:focus:text-tn-dark-text-focus [&.active]:text-tn-light-text-focus dark:[&.active]:text-tn-dark-text-focus"
                            href="#!"
                            id="dropdownMenuButton1"
                            role="button"
                            data-te-dropdown-toggle-ref
                            aria-expanded="false">
                            {/* <!-- Dropdown trigger icon --> */}
                            <span className="[&>svg]:w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                                        clipRule="evenodd" />
                                </svg>
                            </span>
                            {/* <!-- Notification counter --> */}
                            <span
                                className="absolute -mt-4 ml-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white">
                                1
                            </span>
                        </a>
                        {/* <!-- First dropdown menu --> */}
                        <ul
                            className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                            aria-labelledby="dropdownMenuButton1"
                            data-te-dropdown-menu-ref>
                            {/* <!-- First dropdown menu items --> */}
                            <li>
                                <a
                                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                    href="#"
                                    data-te-dropdown-item-ref>
                                    Action
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                    href="#"
                                    data-te-dropdown-item-ref>
                                    Another action
                                </a>

                            </li>
                            <li>
                                <a
                                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                    href="#"
                                    data-te-dropdown-item-ref>
                                    Something else here
                                </a>

                            </li>
                        </ul>
                    </div>

                    {/* <!-- Second dropdown container --> */}
                    <div
                        className="relative"
                        data-te-dropdown-ref
                        data-te-dropdown-alignment="end">
                        {/* <!-- Second dropdown trigger --> */}
                        <a
                            className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                            href="#"
                            id="dropdownMenuButton2"
                            role="button"
                            data-te-dropdown-toggle-ref
                            aria-expanded="false">
                            {/* <!-- User avatar --> */}
                            <img
                                src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                                className="rounded-full"
                                style={{ height: 25, width: 25 }}
                                alt=""
                                loading="lazy" />
                        </a>
                        {/* <!-- Second dropdown menu --> */}
                        <ul
                            className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                            aria-labelledby="dropdownMenuButton2"
                            data-te-dropdown-menu-ref>
                            {/* <!-- Second dropdown menu items --> */}
                            <li>
                                <a
                                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                    href="#"
                                    data-te-dropdown-item-ref>
                                    Action
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                    href="#"
                                    data-te-dropdown-item-ref>
                                    Another action
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                                    href="#"
                                    data-te-dropdown-item-ref>
                                    Something else here
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}