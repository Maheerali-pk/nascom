// import { useUserDetialsContext } from '../../context/user-details';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MessageItem({id, title, description, sender, liked, noOfLikes = 0, noOfReplies = 0, 
    replyingIndex = null, setReplyingIndex,
    messageIndex = 0 
  }: {
    id: number | null,
    title: string,
    description: string,
    sender: string,
    liked: boolean,
    noOfLikes: number,
    noOfReplies: number,
    replyingIndex: number | null,
    setReplyingIndex: (index: number | null) => void,
    messageIndex: number
  }
  ) {
  // const { userDetails } = useUserDetialsContext();
  // const { name } = userDetails;
  const navigate = useNavigate();

  const [isLiked, setIsLiked] = useState(liked);

  const titleClickHandler = () => {
    navigate(`/community/messsage-replies/${id}`);
  }

  const renderMessage = () => {
    return (
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-lg cursor-pointer" onClick={titleClickHandler}>
          {title?.length > 30 ? `${title.slice(0, 30)}...` : title}
        </p>
        <p className="font-normal text-lg">
          {description}
        </p>
        <div className="flex gap-2 items-center">
          <p className="text-sm">{sender}</p>
          <div className="flex gap-2 items-center justify-between">
              {/* Likes */}
            <div className='flex gap-2 items-center'>
              <button type='button' className={`text-xs text-primary p-0 ring-0 outline-none border-none`} title='like'
                onClick={() => setIsLiked(!isLiked)}
              >
                <svg fill="currentColor" height="22px" width="22px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 486.926 486.926" xml:space="preserve">
                    <g>
                      <path d="M462.8,181.564c-12.3-10.5-27.7-16.2-43.3-16.2h-15.8h-56.9h-32.4v-75.9c0-31.9-9.3-54.9-27.7-68.4
                    c-29.1-21.4-69.2-9.2-70.9-8.6c-5,1.6-8.4,6.2-8.4,11.4v84.9c0,27.7-13.2,51.2-39.3,69.9c-19.5,14-39.4,20.1-41.5,20.8l-2.9,0.7
                    c-4.3-7.3-12.2-12.2-21.3-12.2H24.7c-13.6,0-24.7,11.1-24.7,24.7v228.4c0,13.6,11.1,24.7,24.7,24.7h77.9c7.6,0,14.5-3.5,19-8.9
                    c12.5,13.3,30.2,21.6,49.4,21.6h65.9h6.8h135.1c45.9,0,75.2-24,80.4-66l26.9-166.9C489.8,221.564,480.9,196.964,462.8,181.564z
                    M103.2,441.064c0,0.4-0.3,0.7-0.7,0.7H24.7c-0.4,0-0.7-0.3-0.7-0.7v-228.4c0-0.4,0.3-0.7,0.7-0.7h77.9c0.4,0,0.7,0.3,0.7,0.7
                    v228.4H103.2z M462.2,241.764l-26.8,167.2c0,0.1,0,0.3-0.1,0.5c-3.7,29.9-22.7,45.1-56.6,45.1H243.6h-6.8h-65.9
                    c-21.3,0-39.8-15.9-43.1-36.9c-0.1-0.7-0.3-1.4-0.5-2.1v-191.6l5.2-1.2c0.2,0,0.3-0.1,0.5-0.1c1-0.3,24.7-7,48.6-24
                    c32.7-23.2,49.9-54.3,49.9-89.9v-75.3c10.4-1.7,28.2-2.6,41.1,7c11.8,8.7,17.8,25.2,17.8,49v87.8c0,6.6,5.4,12,12,12h44.4h56.9
                    h15.8c9.9,0,19.8,3.7,27.7,10.5C459,209.864,464.8,225.964,462.2,241.764z" />
                    </g>
                </svg>
              </button>
              {noOfLikes > 0 && <span className="text-sm text-primary mt-1">{noOfLikes}</span>}
            </div>
            <div className='flex gap-2 items-center'>
              <button type='button' className={`text-sm text-primary p-0 ${replyingIndex === messageIndex ? 'stroke-primary-900': 'stroke-gray-500'} hover:stroke-primary-900 outline-none ring-0 border-none`} 
                title='reply'
                onClick={() => setReplyingIndex(messageIndex)}
              >
                <svg stroke="currentColor" fill="currentColor" width="22px" height="22px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                  className="hover:stroke-primary-900"
                >            
                  <title>comment-3</title>
                  <desc>Created with Sketch Beta.</desc>
                  <defs>
              </defs>
                  <g id="Page-1" stroke="currentColor" stroke-width="1" fill="currentColor" fill-rule="evenodd" sketch:type="MSPage">
                      <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-204.000000, -255.000000)" fill="#000000">
                      <path d="M228,267 C226.896,267 226,267.896 226,269 C226,270.104 226.896,271 228,271 C229.104,271 230,270.104 230,269 C230,267.896 229.104,267 228,267 L228,267 Z M220,281 C218.832,281 217.704,280.864 216.62,280.633 L211.912,283.463 L211.975,278.824 C208.366,276.654 206,273.066 206,269 C206,262.373 212.268,257 220,257 C227.732,257 234,262.373 234,269 C234,275.628 227.732,281 220,281 L220,281 Z M220,255 C211.164,255 204,261.269 204,269 C204,273.419 206.345,277.354 210,279.919 L210,287 L217.009,282.747 C217.979,282.907 218.977,283 220,283 C228.836,283 236,276.732 236,269 C236,261.269 228.836,255 220,255 L220,255 Z M212,267 C210.896,267 210,267.896 210,269 C210,270.104 210.896,271 212,271 C213.104,271 214,270.104 214,269 C214,267.896 213.104,267 212,267 L212,267 Z M220,267 C218.896,267 218,267.896 218,269 C218,270.104 218.896,271 220,271 C221.104,271 222,270.104 222,269 C222,267.896 221.104,267 220,267 L220,267 Z" id="comment-3" sketch:type="MSShapeGroup">
                      </path>
                      </g>
                  </g>
              </svg>
              </button>
              {noOfReplies > 0 && <span className="text-sm text-primary">{noOfReplies}</span>}
            </div>
          </div>
          <span className="text-sm text-primary">2 hours ago</span>
        </div>
      </div>
    )
  };

  const renderProfile = () => {
    return (
      <div className="flex items-center justify-center gap-[0.09rem] h-12 w-12 bg-[rgba(217,217,217,0.10)] text-[0.9rem] text-primary rounded-full">
        ZC
      </div>
    );
  };

  return (
    <li className="flex gap-2 pr-8 w-fit">
      { renderProfile()}
      <div
        className="flex justify-between items-start w-fit p-3 lg:pr-4 bg-[rgba(217,217,217,0.10)] rounded-2xl min-w-[13rem] sm:min-w-[15rem] lg:min-w-[17rem] group"
      >
        <div className={`flex flex-col gap-0.5 w-full`}>
          {renderMessage()}
        </div>
      </div>
    </li>
  );
}

export default MessageItem;
