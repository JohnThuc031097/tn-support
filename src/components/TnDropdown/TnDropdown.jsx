import TnIconArrowDown from "../TnIcon/TnIconArrowDown"

export default function TnDropdown(props) {
    const { title, icon, urlImg, notice, showTitle, items } = props
    const IconMenu = icon

    return (
        <div
            className="relative"
            data-te-dropdown-ref
            data-te-dropdown-alignment="end">
            {/* <!-- First dropdown trigger --> */}
            <button
                className="hidden-arrow mr-4 flex items-center text-tn-light-text transition duration-200 hover:text-tn-light-text-hover hover:ease-in-out focus:text-tn-light-text-focus disabled:text-tn-light-text-disabled motion-reduce:transition-none dark:text-tn-dark-text dark:hover:text-tn-dark-text-hover dark:focus:text-tn-dark-text-focus [&.active]:text-tn-light-text-focus dark:[&.active]:text-tn-dark-text-focus"
                id="dropdownMenu"
                role="button"
                data-te-dropdown-toggle-ref
                aria-expanded="false">
                {/* <!-- Dropdown trigger icon --> */}
                {(icon && !urlImg) && (
                    <IconMenu className="w-5 h-5" />
                )}
                {(!icon && urlImg) && (
                    <img
                        src={urlImg}
                        className="rounded-full"
                        style={{ height: 25, width: 25 }}
                        alt=""
                        loading="lazy" />
                )}
                {notice && (
                    <span
                        className="absolute -mt-4 ml-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white">
                        {notice}
                    </span>
                )}
                {showTitle && (
                    <>
                        <span className="ml-2 mr-2">{title}</span>
                        <TnIconArrowDown className="w-5 h-5" />
                    </>
                )}
                {/* <!-- Notification counter --> */}
            </button>
            {/* <!-- First dropdown menu --> */}
            {items && (
                <ul
                    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-tn-light bg-clip-padding text-left text-base shadow-lg dark:bg-tn-dark [&[data-te-dropdown-show]]:block"
                    aria-labelledby="dropdownMenu"
                    data-te-dropdown-menu-ref>
                    {/* <!-- First dropdown menu items --> */}
                    {items.map((item, index) => {
                        const IconMenuItem = item?.icon
                        return (
                            <li key={index}>
                                <button
                                    className="flex justify-start items-center w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-tn-light-text hover:bg-tn-light-hover active:text-tn-light-text-focus active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-tn-light-text-disabled dark:text-tn-dark-text dark:hover:bg-tn-dark-text-hover"
                                    data-te-dropdown-item-ref>
                                    <span className="w-5 h-5 mr-4">
                                        {item?.icon && (
                                            <IconMenuItem />
                                        )}
                                    </span>
                                    {item?.title}
                                </button>
                            </li>
                        )
                    })
                    }
                </ul>
            )}
        </div>
    )
}