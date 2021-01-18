import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={ isOpen } onClick={ toggle }>
            <Icon onClick={ toggle }>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Home</SidebarLink>
                <SidebarLink to="/">Especialidad</SidebarLink>
                <SidebarLink to="/">Menú</SidebarLink>
                <SidebarLink to="/">Nosotros</SidebarLink>
                <SidebarLink to="/">Reservas</SidebarLink>
                <SidebarLink to="/">Contacto</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Hacer Pedido</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
