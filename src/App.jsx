import { ColorModeProvider } from './contexts/ColorModeContext'
import IndexPage from './pages/Index'
import { MenuNavbarStorage, MenuSidebarStorage } from './storages/MenuStorage'

function App() {
    const sidebar = {
        listItem: MenuSidebarStorage,
        selectorContent: '#slim-content'
    }
    const navbar = {
        listMenu: MenuNavbarStorage,
    }

    return (
        <ColorModeProvider>
            <IndexPage sidebar={sidebar} navbar={navbar} />
        </ColorModeProvider>
    )
}

export default App
