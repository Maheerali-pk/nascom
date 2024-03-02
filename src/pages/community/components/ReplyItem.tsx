function ReplyItem({ sender, description }: IReplyDetails) {
  return (
    <li className='flex gap-4'>
        <div className='w-1/12'>
            <img src='https://randomuser.me/api/portraits/' alt='profile'
                className='rounded-full'/>
        </div>
        <div className='flex flex-col gap-1'>
          <h3 className='font-semibold text-sm'>{sender}</h3>
          <p className='text-sm'>{description}</p>
          <button type='button' className='flex gap-1 items-center text-xs text-primary mt-1 w-20 bg-gray-200'>
            <img src='/icons/like.svg' alt='profile' />
            <span className="mt-1">Like</span>
          </button>
        </div>
    </li>
    )
}

export default ReplyItem
