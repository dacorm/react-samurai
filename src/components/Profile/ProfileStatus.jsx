import React, {useEffect, useRef, useState} from 'react';

const ProfileStatus = ({status, updateStatus, id}) => {
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