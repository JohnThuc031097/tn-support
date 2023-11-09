import { MenuNavbarStorage, MenuSidebarStorage } from '../storages/MenuStorage';
import IndexPage from './Index'

export default {
    title: 'Tn Support/Pages/Index',
    component: IndexPage,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
    },
};

export const Default = {
    args: {
        sidebar: {
            listItem: MenuSidebarStorage,
            selectorContent: '#slim-content'
        },
        navbar: {
            listMenu: MenuNavbarStorage,
        }
    },
};