import DataVirtualize from './dataVirtualize';
import UserData from './userData';
import { useState } from 'react';
import './virtualization.css';

const Virtualization = ()=>{
    const [userData , setUserData] = useState({});
    const handleData =(data)=>{
        setUserData({...data});
    }
    return(
        <div className='virtualization'>
            <UserData handleData={handleData}/>
            <DataVirtualize data={userData}/>
        </div>
    )
}

export default Virtualization;