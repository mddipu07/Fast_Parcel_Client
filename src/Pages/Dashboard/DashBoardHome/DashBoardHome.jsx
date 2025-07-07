import React from 'react';
import useUserRole from '../../../Hooks/useUserRole';
import Loading from '../../../Components/Loading/Loading';
import AdminDashBoard from './AdminDashBoard';
import Forbidden from '../../ForBidden/ForBidden';
import UserDashBoard from './UserDashBoard';
import RiderDashBoard from './RiderDashBoard';

const DashBoardHome = () => {
       const {role, roleLoading} = useUserRole();
       if(roleLoading){
       return  <Loading></Loading>
       }
       if(role === 'user'){
          return <UserDashBoard></UserDashBoard>
       }
       else if(role === 'rider'){
        return <RiderDashBoard></RiderDashBoard>
       }
       else if(role === 'admin'){
         return <AdminDashBoard></AdminDashBoard>
       }
       else{
        return <Forbidden></Forbidden>
       }
};

export default DashBoardHome;