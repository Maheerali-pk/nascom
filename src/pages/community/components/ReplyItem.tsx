function ReplyItem({ sender, description }: IReplyDetails) {
  return (
    <li className='flex gap-4'>
        <div className='w-12 h-12'>
            <img src='/images/profile.jpg' alt='profile'
                className='rounded-full w-full h-full object-cover'/>
        </div>
        <div className='flex flex-col gap-1'>
          <h3 className='font-semibold'>{sender}</h3>
          <p className='text-base'>{description}</p>
          <button type='button' className='flex gap-1 items-center text-xs text-primary mt-1 w-20 bg-gray-200'>
            <img src='/icons/like.svg' alt='profile' />
            <span className="mt-1">Like</span>
          </button>
        </div>
    </li>
    )
}

export default ReplyItem
