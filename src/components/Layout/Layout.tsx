import React from 'react'
import Sidebar from './SideBar';

interface LayoutProps {
    children: JSX.Element|undefined;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <React.Fragment>
            <Sidebar children={children} />
        </React.Fragment>
    )
}

export default Layout