import IconArrowDown from '../TnIcon/TnIconArrowDown'

export default function TnSidenavItem(props) {
    const { title, icon, items } = props
    const IconItem = icon
    return (
        <li className="relative">
            <a
                className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-tn-light-text outline-none transition duration-300 ease-linear hover:bg-tn-light-hover hover:text-inherit hover:outline-none focus:bg-tn-light-focus focus:text-inherit focus:outline-none active:bg-tn-light-focus  active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-tn-dark-text dark:hover:bg-tn-dark-hover dark:focus:bg-tn-dark-focus dark:active:bg-tn-dark-focus"
                data-te-sidenav-link-ref>
                <span
                    className="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-tn-light-text dark:[&>svg]:text-tn-dark-text">
                    <IconItem className="w-5 h-5" />
                </span>
                <span
                    className="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden"
                    data-te-sidenav-slim="false">
                    {title}
                </span>
                {items && (
                    <span
                        className="group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden absolute right-0 ml-auto mr-[0.5rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-tn-light-text dark:[&>svg]:text-tn-dark-text"
                        data-te-sidenav-rotate-icon-ref
                        data-te-sidenav-slim="false">
                        <IconArrowDown className="w-5 h-5" />
                    </span>
                )}
            </a>
            {items && (
                <ul
                    className="!visible relative m-0 hidden list-none p-0 data-[te-collapse-show]:block"
                    data-te-sidenav-collapse-ref>
                    {items.map((item, index) => {
                        return (
                            <li key={index} className="relative">
                                <a
                                    className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-tn-light-text outline-none transition duration-300 ease-linear hover:bg-tn-light-hover hover:text-inherit hover:outline-none focus:bg-tn-light-focus focus:text-inherit focus:outline-none active:bg-tn-light-focus active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-tn-dark-text dark:hover:bg-tn-dark-hover dark:focus:bg-tn-dark-focus dark:active:bg-tn-dark-focus"
                                    data-te-sidenav-link-ref>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            )}
            {/* <hr className="my-4" /> */}
        </li>
    )
}