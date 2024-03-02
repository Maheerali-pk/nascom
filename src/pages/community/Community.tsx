import { useState } from 'react';
import MessageItem from './components/MessageItem';

function Community() {
  const [replyingIndex, setReplyingIndex] = useState<number | null>(null);
  const messages = [
    { 
      id: 0,
      title: "Need to see potential clients on Upwork with a promo code",
      description: "To work on Upwork, you need a promo code that gives you 20 content after every month, but what to do if you don't get the promo code?", 
      sender: "Zahid Chandio",
      liked: true,
      noOfLikes: 2,
      noOfReplies: 3,
    },
    { 
      id: 1,
      title: "Need to see potential clients on Upwork with a promo code",
      description: "To work on Upwork, you need a promo code that gives you 20 content after every month, but what to do if you don't get the promo code?", 
      sender: "Zahid Chandio",
      liked: false,
      noOfLikes: 3,
      noOfReplies: 2,
    },
  ];

  return (
    <div className='px-8'>
    <h1 className='text-2xl mb-4'>Recent Forum Activity</h1>
    <ul className='flex flex-col gap-4'>
      { messages?.length > 0
        && messages?.map((message, index) => (
          <MessageItem
            key={message.title}
            id={message.id}
            title={message.title}
            description={message.description}
            sender={message.sender}
            liked={message.liked}
            noOfLikes={message.noOfLikes}
            noOfReplies={message.noOfReplies}
            replyingIndex = {replyingIndex}
            setReplyingIndex = {setReplyingIndex}
            messageIndex={index}
          />
        ))}
    </ul>
    </div>
  )
}

export default Community
