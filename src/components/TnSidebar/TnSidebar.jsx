import { useEffect, useRef } from "react";
import {
    Sidenav,
    initTE,
} from "tw-elements";

import TnIconPinAngle from '../TnIcon/TnIconPinAngle'
import TnSidebarItem from "./TnSidebarItem";

export default function TnSidebar({ listItem, selectorContent }) {
    const refSidebar = useRef(null)

    useEffect(() => {
        initTE({ Sidenav });
    }, []);

    const handleToggleSlim = () => {
        const sidenavInstance = Sidenav.getInstance(refSidebar.current)
        sidenavInstance?.toggleSlim()
    }

    return (
        <nav
            ref={refSidebar}
            id="sidenav"
            className="dark:bg-tn-dark group fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-tn-light shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-slim='true']:hidden data-[te-sidenav-slim-collapsed='true']:w-[77px] data-[te-sidenav-slim='true']:w-[77px] data-[te-sidenav-hidden='false']:translate-x-0 [&[data-te-sidenav-slim-collapsed='true'][data-te-sidenav-slim='false']]:hidden [&[data-te-sidenav-slim-collapsed='true'][data-te-sidenav-slim='true']]:[display:unset]"
            data-te-sidenav-init
            data-te-sidenav-hidden="false"
            data-te-sidenav-mode="side"
            data-te-sidenav-slim="true"
            // data-te-sidenav-content="#slim-content"
            data-te-sidenav-content={selectorContent}
            data-te-sidenav-slim-collapsed="true">
            <ul className="relative m-0 list-none px-[0.2rem]" data-te-sidenav-menu-ref>
                <a
                    className="relative mb-3 flex items-center justify-center py-6 outline-none"
                    href="#!"
                    data-te-ripple-init
                    data-te-ripple-color="primary">
                    <img
                        id="te-logo"
                        className="mr-2 w-6"
                        src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.png"
                        alt="Tn Logo"
                        draggable="false" />
                    <span
                        className="dark:text-tn-dark-text group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden"
                        data-te-sidenav-slim="false">
                        Tn Monitor
                    </span>
                </a>
                <hr className="my-4" />
                {listItem?.map((item, index) => {
                    return <TnSidebarItem key={index}  {...item} />
                })}
            </ul>
            <div className="absolute bottom-0 w-full">
                <a
                    className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-tn-light-text outline-none transition duration-300 ease-linear hover:bg-tn-light-hover hover:text-inherit hover:outline-none focus:bg-tn-light-focus focus:text-inherit focus:outline-none active:bg-tn-light-focus active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-tn-dark-text dark:hover:bg-tn-dark-hover dark:focus:bg-tn-dark-focus dark:active:bg-tn-dark-focus"
                    onClick={handleToggleSlim}
                    data-te-sidenav-link-ref>
                    <span
                        className="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-tn-light-text dark:[&>svg]:text-tn-dark-text dark:[&>svg]:focus:text-tn-dark-focus">
                        <TnIconPinAngle className="w-5 h-5" />
                    </span>
                    <span
                        className="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden "
                        data-te-sidenav-slim="false">
                        Toggle Slim
                    </span>
                </a>
            </div>
        </nav>
    )
}