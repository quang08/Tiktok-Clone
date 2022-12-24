import type { NextPage } from 'next';
import React from 'react';
import axios from 'axios';
import {Video} from '../types'

import VideoCard from '../components/VideoCard'
import NoResults from '../components/NoResults'
import { BASE_URL } from '../utils';

interface IProps {
  videos: Video[] //Home component will accept an array of Video-typed data
}

const Home = ({videos}: IProps) => {
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length 
        ? videos?.map((video: Video) => ( //map video type of Video
          <VideoCard post={video} key={video._id} />
        )) 
        : <NoResults text={`No Videos`} />}
    </div>
  )
}

export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let response = await axios.get(`${BASE_URL}/api/post`);

  if(topic) {
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  }
  
  return {
    props: { videos: response.data },
  }; 
}

export default Home 
