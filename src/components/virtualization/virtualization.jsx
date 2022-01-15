import DataVirtualize from './dataVirtualize';
import UserData from './userData';
import { useState } from 'react';
import './virtualization.css';

const Virtualization = (props)=>{
    const [userData , setUserData] = useState({});
    const handleData =(data,reset)=>{
        setUserData({...data});
        props.handleReset(reset);
    }
    return(
        <div className='virtualization'>
            <UserData handleData={handleData}/>
            <DataVirtualize data={userData}/>
        </div>
    )
}

export default Virtualization;