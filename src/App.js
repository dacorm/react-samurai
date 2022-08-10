import React, {useEffect, useState} from 'react'
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {NavLink, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Breadcrumb, Layout, Menu} from 'antd'
import "antd/dist/antd.css";
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons'
import Header from './components/Header/Header'
import styles from "./components/Navbar/Navbar.module.css";
import axios from "axios";

const {SubMenu} = Menu
const {Content, Footer, Sider} = Layout


function App() {
    const [id, setId] = useState(0);

    const fetchId = async () => {
        const res = await axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
        setId(res.data.data.id);
    }

    useEffect(() => {
        fetchId();
    }, [])

    return (
        <Layout>
            <Header/>
            <Content style={{padding: '0 50px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                    <Sider className="site-layout-background" width={200}>
                        <Menu
                            mode="inline"
                            /*  defaultSelectedKeys={['7']}*/
                            /*  defaultOpenKeys={['sub1']}*/
                            style={{height: '100%'}}
                        >
                            <SubMenu key="sub1" icon={<UserOutlined/>} title="Menu">
                                <Menu.Item key="1"> <NavLink to={`/profile/${id ?? 2}`}
                                                             className={({isActive}) => isActive ? `${styles.item} ${styles.active}` : `${styles.item}`}>Profile</NavLink></Menu.Item>
                                <Menu.Item key="2"><NavLink to='dialogs'
                                                            className={({isActive}) => isActive ? `${styles.item} ${styles.active}` : `${styles.item}`}>Messages</NavLink></Menu.Item>
                                <Menu.Item key="3"><NavLink to='users'
                                                            className={({isActive}) => isActive ? `${styles.item} ${styles.active}` : `${styles.item}`}>Users</NavLink></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{padding: '0 24px', minHeight: 280}}>

                        <Routes>
                            <Route path="/" element={<ProfileContainer/>}/>
                            <Route path="/profile" element={<ProfileContainer/>}/>
                            <Route path="/profile/:id" element={<ProfileContainer/>}/>
                            <Route path='dialogs' element={<DialogsContainer/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='users' element={<UsersContainer/>}/>
                        </Routes>

                    </Content>
                </Layout>
            </Content>
            <Footer style={{textAlign: 'center'}}>Samurai Social Network ©2022 Created by Utkin Denis</Footer>
        </Layout>


        // <div className="app-wrapper">
        //     <HeaderContainer />
        //     <Navbar />
        //     <Routes>
        //         <Route path="/" element={<ProfileContainer />} />
        //         <Route path="/profile" element={<ProfileContainer />} />
        //         <Route path="/profile/:id" element={<ProfileContainer />} />
        //         <Route path='dialogs' element={<DialogsContainer />} />
        //         <Route path='/login' element={<Login />} />
        //         <Route path='users' element={<UsersContainer />} />
        //     </Routes>
        // </div>
    );
}

export default App;