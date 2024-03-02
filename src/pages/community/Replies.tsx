import { useState } from 'react';
import ReplyItem from './components/ReplyItem'

function Replies() {
  const [replyText, setReplyText] = useState('')
  const message = {
    id: 0,
    title: "Need to see potential clients on Upwork with a promo code",
    description: "To work on Upwork, you need a promo code that gives you 20 content after every month, but what to do if you don't get the promo code?", 
    sender: "Zahid Chandio",
    liked: true,
    noOfLikes: 2,
    noOfReplies: 3,
    replies: [
      {
        sender: "Zahid Chandio",
        description: "To work on Upwork, you need a promo code that gives you 20 content after every month, but what to do if you don't get the promo code?",
      }
    ]
  }

  return (
    <div className='px-8'>
      <h1 className='text-xl mb-4'>{message.title}</h1>
      <div className='flex gap-4'>
        <div className='w-1/12'>
          <img src='https://randomuser.me/api/portraits/' alt='profile' className='rounded-full'/>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center justify-between'>
            <h3 className='font-semibold text-sm'>{message?.sender}</h3>
            <p className='text-xs'>2 minutes</p>
          </div>
          <p className='text-sm'>{message?.description}</p>
          <div className='flex items-center justify-between mt-1'>
            <div className='flex items-center gap-2'>
              <span className='text-xs text-primary'>{message?.noOfLikes} Likes</span>
              <button type='button' className='flex gap-1 items-center text-xs text-primary bg-gray-200'>
                <img src='/icons/like.svg' alt='profile' />
                Like
              </button>
            </div>
            {/* {!replying && <button type='button' className='text-xs text-primary bg-gray-200' onClick={() => setReplying(true)}>
                Reply
              </button>
            } */}
          </div>
        </div>
      </div>
      <h1 className='mt-8 text-2xl'>Replies</h1>
      <ul className='mt-4'>
        {
          message?.replies?.length > 0
          && message?.replies?.map((reply, index) => (
            <ReplyItem 
              key={index}
              sender={reply.sender}
              description={reply.description}
            />
          ))
        }
      </ul>
      {/* {replying && ( */}
        <div className="flex flex-col gap-2 mt-8 w-[98%] sm:w-[90%] mx-auto">
          <textarea
            value={replyText}
            className="w-full p-2.5 bg-[rgba(217,217,217,0.10)] rounded-lg outline-none"
            placeholder="Write a reply"
            onChange={(e) => setReplyText(e.target.value)}
          />
          <div className="flex gap-2 justify-end">
            <button
              type="button"
              className="text-xs text-primary bg-primary rounded-md py-2 px-1 w-20 bg-gray-200"
              onClick={() => {}}
            >
              Reply
            </button>
          </div>
        </div>
      {/* )}/ */}
    </div>
  )
}

export default Replies;