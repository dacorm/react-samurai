import React, {useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
    id: string | undefined
}

const ProfileStatus: React.FC<ProfileStatusType> = ({status, updateStatus, id}) => {
    const [visible, setVisible] = useState(false);
    const [userStatus, setUserStatus] = useState(status);


    useEffect(() => {
        setUserStatus(status)
    }, [id, status])

    return (
        <>
            {!visible && <p onClick={() => setVisible(true)}>{userStatus ?? 'Empty'}</p>}
            {visible && <input autoFocus={true} onBlur={() => {
                setVisible(false)
                updateStatus(userStatus)
            }} value={userStatus ?? ''}
               onChange={(e) => {
               setUserStatus(e.target.value)
            }}
            />}
        </>
    );
};

export default ProfileStatus;