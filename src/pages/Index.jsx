import TnNavbar from "../components/TnNavbar/TnNavbar";
import TnSidebar from "../components/TnSidebar/TnSidebar";

export default function IndexPage(props) {
    const { sidebar, navbar } = props
    return (
        <div id="container" className="flex flex-col justify-start">
            <div id="content-left">
                <TnSidebar {...sidebar} />
            </div>
            <div id="content-right" className="flex flex-row justify-end">
                <div id="content-right-top" className="w-full">
                    <TnNavbar {...navbar} />
                </div>
                <div id="content-right-center" className="bg-tn-light dark:bg-tn-dark"></div>
                <div id="content-right-bottom"></div>
            </div>
        </div>
    )
}