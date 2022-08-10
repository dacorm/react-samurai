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
import {useDispatch} from "react-redux";
import {authThunk} from "./redux/auth-reducer";

const {SubMenu} = Menu
const {Content, Footer, Sider} = Layout


function App() {
    const dispatch = useDispatch();
    const [id, setId] = useState(0);

    const fetchId = async () => {
        const res = await axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
        setId(res.data.data.id);
    }

    useEffect(() => {
        fetchId();
        // @ts-ignore
        dispatch(authThunk())
    }, [])

    return (
        <Layout>
            {/*@ts-ignore*/}
            <Header/>
            <Content style={{padding: '0 50px'}}>
                {/*@ts-ignore*/}
                <Breadcrumb style={{margin: '16px 0'}}>
                    {/*@ts-ignore*/}
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    {/*@ts-ignore*/}
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    {/*@ts-ignore*/}
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
                            {/*@ts-ignore*/}
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
                            {/*@ts-ignore*/}
                            <Route path="/" element={<ProfileContainer/>}/>
                            {/*@ts-ignore*/}
                            <Route path="/profile" element={<ProfileContainer/>}/>
                            {/*@ts-ignore*/}
                            <Route path="/profile/:id" element={<ProfileContainer/>}/>
                            {/*@ts-ignore*/}
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