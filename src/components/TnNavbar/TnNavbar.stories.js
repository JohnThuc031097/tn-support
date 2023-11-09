import TnNavbar from './TnNavbar'
import { MenuNavbarStorage } from '../../storages/MenuStorage';

export default {
    title: 'Tn Support/Components/Navbar',
    component: TnNavbar,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
    },
};

export const Default = {
    args: {
        listMenu: MenuNavbarStorage
    },
};