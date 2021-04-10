/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled.div`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;
    list-style: none;
    height: 60px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background: #0F1B4C;
    }
`;
const SidebarLabel = styled.span`
    margin-left: 10px
`;

const DropdownLink = styled(NavLink)`
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    color: #f5f5f5;
    font-size: 16px;

    &:hover {
        background: #0F1B4C;
        cursor: pointer;
        text-decoration: none;
        color: #f5f5f5
    }
`;

const SidebarMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {
                    item.subNav && subnav ? item.iconOpened
                      : item.subNav ? item.iconClosed : null
                }
        </div>
      </SidebarLink>
      {
            subnav && item.subNav.map((item, index) => (
              <DropdownLink to={item.path} key={index}>
                { item.icon }
                <SidebarLabel>{ item.title }</SidebarLabel>
              </DropdownLink>
            ))
        }
    </>
  );
};

export default SidebarMenu;
