import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SidebarMenu from './SidebarMenu';

const SideBar = styled.nav`
    width: 100%
    height: 100vh;
`

const SidebarWrap = styled.div`
    width: 100%;
`

const Sidebar = () => {
    return (
        <div className="sidebar-section">
            <SideBar>
                <SidebarWrap>
                    {
                        SidebarData.map((item, index) => (
                            <SidebarMenu item={item} key={index}/>
                        ))
                    }
                </SidebarWrap>
            </SideBar>
        </div>
    )
}

export default Sidebar
