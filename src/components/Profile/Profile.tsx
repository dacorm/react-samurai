import React, {useEffect, useState} from 'react';
import styles from './Profile.module.css'
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import Preloader from "../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from './png-clipart-businessperson-computer-icons-avatar-avatar-heroes-public-relations.png';
import {Field, Form} from "react-final-form";
import {ProfileValidator} from "../../utils/validator";
import Element from "../../hoc/formValidation";
import {messages, profileJson} from "../../redux/profile-reducer";
import {profileType} from "../../redux/auth-reducer";

const Input = Element('input')

const Textarea = Element('textarea')

type ProfileFormProps = {
    onSubmit: (formData: profileFormData) => void
}

const ProfileForm: React.FC<ProfileFormProps> = ({ onSubmit }) => {

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Field name='lookingForAJobDescription' placeholder={'Your skills'} component={Textarea} validate={ProfileValidator} />
                    <Field name='facebook' placeholder={'facebook link'} component={Input} validate={ProfileValidator} type='url' />
                    <Field name='github' placeholder={'github link'} component={Input} validate={ProfileValidator} type='url' />
                    <Field name='instagram' placeholder={'instagram link'} component={Input} validate={ProfileValidator} type='url' />
                    <Field name='twitter' placeholder={'twitter link'} component={Input} validate={ProfileValidator} type='url' />
                    <Field name='vk' placeholder={'vk link'} component={Input} validate={ProfileValidator} type='url' />
                    <div className={styles.container}>
                    <Field name='lookingForAJob' type='checkbox' component='input' />
                    <p>Находитесь в поиске работы?</p>
                    </div>
                    <button type='submit'>Отправить</button>
                </form>
            )}
        />
    );
}

type ProfileProps = {
    setUserProfile: (profile: profileType) => void
    updateStatus: () => void
    profile: profileJson
    isAuth: boolean
    status: string
    userId: number
    updateUserAvatarThunk: (photo: File) => void
    updateUserProfileThunk: (form: extendedProfileForm) => void
    login: string
    id: string | undefined
    posts: messages[]
}

type profileFormData = {
    lookingForAJobDescription: string
    facebook: string
    github: string
    instagram: string
    twitter: string
    vk: string
    lookingForAJob: boolean
}

type extendedProfileForm = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: profileFormData
}

const Profile: React.FC<ProfileProps> = ({ profile, posts, isAuth, status, updateStatus, id, userId, updateUserAvatarThunk, updateUserProfileThunk, login, setUserProfile }) => {
    const [owner, setOwner] = useState(false);
    const [visible, setVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);

    const onSubmit = (formData: profileFormData) => {
        const form = {
            userId: userId,
            aboutMe: login,
            lookingForAJob: formData.lookingForAJob,
            lookingForAJobDescription: formData.lookingForAJobDescription,
            fullName: login,
            contacts: {
                ...formData
            }
        }
        updateUserProfileThunk(form);
        setFormVisible(false);
    }

    const changeAvatarHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            updateUserAvatarThunk(e.target.files[0]);
            setVisible(false);
        }
    }

    const isOwner = () => {
        if (Number(id) === userId) {
            setOwner(true);
        }
    }

    useEffect(() => {
        isOwner();
    }, [id])

    if (!profile) {
        return <Preloader />
    }


    return (
        <div className={styles.content}>
            <div className={styles.profileInfo}>
                <div className={styles.avatar} style={{backgroundImage: `url(${profile.photos!.small ?? userPhoto})`}}/>
                <div className={styles.description}>
                    <p className={styles.text}>{profile.fullName}</p>
                    <ProfileStatus status={status} updateStatus={updateStatus} id={id} />
                    {owner && <button onClick={() => setFormVisible(true)}>Edit profile</button>}
                    {!formVisible &&
                        <>
                        <p className={styles.text}>Facebook: <a href={profile.contacts!.facebook}>{profile.contacts!.facebook}</a></p>
                        <p className={styles.text}>Github: <a href={profile.contacts!.github}>{profile.contacts!.github}</a></p>
                        <p className={styles.text}>Instagram: <a href={profile.contacts!.instagram}>{profile.contacts!.instagram}</a></p>
                        <p className={styles.text}>Twitter: <a href={profile.contacts!.twitter}>{profile.contacts!.twitter}</a></p>
                        <p className={styles.text}>Vk: <a href={profile.contacts!.vk}>{profile.contacts!.vk}</a></p>
                        <p className={styles.text}>{`Статус поиска работы: ${profile.lookingForAJob ? 'Ищу' : 'Нет'}`}</p>
                        <p className={styles.text}>{`Рабочий статус: ${profile.lookingForAJobDescription}`}</p>
                        </>
                    }
                    {formVisible && <ProfileForm onSubmit={onSubmit}/>}
                    {owner && <button onClick={() => setVisible(true)}>Сменить аватар</button>}
                    {visible && <input type='file' onChange={changeAvatarHandler}/>}
                </div>
            </div>
            <MyPostsContainer posts={posts}/>
        </div>
    )
}

export default Profile