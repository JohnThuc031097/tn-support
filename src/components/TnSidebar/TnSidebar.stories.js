import { MenuSidebarStorage } from '../../storages/MenuStorage';
import TnSidebar from './TnSidebar'

export default {
    title: 'Tn Support/Components/Sidebar',
    component: TnSidebar,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
    },
};

export const Default = {
    args: {
        listItem: MenuSidebarStorage,
        selectorContent: '#slim-content'
    },
};