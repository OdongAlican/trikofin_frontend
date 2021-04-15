/* eslint-disable import/prefer-default-export */

import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Personal Info',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Signature',
        path: '/signature',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Identification',
        path: '/identification',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Contact Info',
        path: '/contactinfo',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Views',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Views1',
        path: '/viewsone',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: 'Views2',
        path: '/Viewstwo',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <AiIcons.AiFillHome />,
  },
];
