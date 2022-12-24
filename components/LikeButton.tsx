import React, { useEffect, useState } from 'react';
import { MdFavorite } from 'react-icons/md';
import { NextPage } from 'next';

import useAuthStore from '../store/authStore';//to know which user liked and and the current user liked it or not

interface IProps { 
    likes: any[];
    flex: string;
    handleLike: () => void;//specifying a type for a function
    handleDislike: () => void;
  }

const LikeButton = ({likes,handleDislike, handleLike}: IProps) => {
    const [alreadyLiked, setAlreadyLiked] = useState(false);
    const { userProfile }: any = useAuthStore();
    const filterLikes = likes?.filter((item)=>item._ref === userProfile?._id);

    useEffect(()=>{
        if(filterLikes?.length > 0){
            setAlreadyLiked(true);
        }else{
            setAlreadyLiked(false);
        }
    },[filterLikes,likes])

  return (
    <div className='flex gap-6'>
     <div className='mt-4 flex flex-col justify-center items-center cursor-pointer'>
        {alreadyLiked ? (
          <div className='bg-primary rounded-full p-2 md:p-4 text-[#F51997] ' onClick={handleDislike} >
            <MdFavorite className='text-lg md:text-2xl' />
          </div>
        ):(
          <div className='bg-primary rounded-full p-2 md:p-4 ' onClick={handleLike} >
            <MdFavorite className='text-lg md:text-2xl' />
          </div>
        )}
         <p className='text-md font-semibold '>{likes?.length || 0}</p>
     </div>
    </div>
  )
}

export default LikeButton
