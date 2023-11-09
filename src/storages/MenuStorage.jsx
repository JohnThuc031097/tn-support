import TnIconAccount from "../components/TnIcon/TnIconAccount";
import TnIconDashboard from "../components/TnIcon/TnIconDashboard";
import TnIconLogout from "../components/TnIcon/TnIconLogout";
import TnIconNotification from "../components/TnIcon/TnIconNotification";
import TnIconSettings from "../components/TnIcon/TnIconSettings";
import TnIconSync from "../components/TnIcon/TnIconSync";

export const MenuSidebarStorage = [
    {
        title: 'Dashboard',
        icon: TnIconDashboard,
        onClick: () => console.log('Click ' + this.title)
    },
    {
        title: 'Syncs',
        icon: TnIconSync,
        items: [
            {
                title: 'Menu',
                onClick: () => console.log('Click ' + this.title)
            },
            {
                title: 'Master Data',
                onClick: () => console.log('Click ' + this.title)
            },
            {
                title: 'Customer',
                onClick: () => console.log('Click ' + this.title)
            },
        ]
    },
    {
        title: 'Settings',
        icon: TnIconSettings,
        items: [
            {
                title: 'Profile',
                onClick: () => console.log('Click ' + this.title)
            },
        ]
    },

]

export const MenuNavbarStorage = [
    {
        title: 'notification',
        showTitle: false,
        icon: TnIconNotification,
        urlImg: null,
        notice: "0",
        items: null
    },
    {
        title: 'profile',
        showTitle: false,
        icon: null,
        urlImg: 'https://tecdn.b-cdn.net/img/new/avatars/2.jpg',
        notice: null,
        items: [
            {
                icon: TnIconAccount,
                title: 'My Account',
            },
            {
                icon: TnIconSettings,
                title: 'Settings',
            },
            {
                icon: TnIconLogout,
                title: 'Logout',
            },
        ]
    },
]