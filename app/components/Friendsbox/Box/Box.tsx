'use client';
import { useGlobalContext } from '@/app/context/context';
import { motion } from 'framer-motion';
import React from 'react';
import PeopleButton from '../Button/PeopleButton';
import UserBox from '../UserBox/UserBox';

export default function Box() {
  const context = useGlobalContext();
  if (!context) return null;
  const { user, users, friendsBox, setFriendsBox } = context;
  return (
    <motion.div
      className={`fixed h-full w-[250px] left-0 top-[80px] pointer-events-none bg-white`}
      animate={{ x: !friendsBox ? -250 : 0 }}
      initial={{ x: -250 }}
      transition={{ type: 'tween' }}
    >
      <PeopleButton friendsBox={friendsBox} setFriendsBox={setFriendsBox} />
      <div className="w-full z-50 h-full flex items-start justify-start gap-5 flex-col p-3">
        {users.map((el, key) => (
          <UserBox user={el} key={key} />
        ))}
      </div>
    </motion.div>
  );
}
