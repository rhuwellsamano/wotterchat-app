import React, { useEffect, useState } from "react";
import { Comment, Splash } from "../typings";
import TimeAgo from "react-timeago";
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import { fetchComments } from "../utils/fetchComments";

interface Props {
  splash: Splash;
}

function Splash({ splash }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);

  const refreshComments = async () => {
    const comments: Comment[] = await fetchComments(splash._id);
    setComments(comments);
  };

  useEffect(() => {
    refreshComments();
  }, []);

  console.log("COMMENTS: ", comments);
  return (
    <div className="flex flex-col space-x-3 border-y p-5 border-gray-200">
      <div className="flex space-x-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={splash.profileImg}
          alt=""
        />
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-0 font-bold">{splash.username}</p>
            <img src="/verified.png" alt="" className="h-4 w-4" />
            <p className="hidden text-sm text-gray-500 sm:inline">
              @{splash.username.replace(/\s+/g, "").toLowerCase()} -
            </p>
            <TimeAgo
              className="text-sm text-gray-500"
              date={splash._createdAt}
            />
          </div>

          <p className="pt-1">{splash.text}</p>

          {splash.image && (
            <img
              src={splash.image}
              alt=""
              className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"
            />
          )}
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <ChatAlt2Icon className="h-5 w-5" />
          <p>{comments.length}</p>
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <SwitchHorizontalIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <HeartIcon className="h-5 w-5" />
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <UploadIcon className="h-5 w-5" />
        </div>
      </div>

      {/* COMMENT BOX LOGIC */}

      {comments?.length > 0 && (
        <div className="my-2 mt-5 max-h-44 sapce-y-5 overflow-y-scroll border-t border-gray-200 p-5">
          {comments.map((comment) => (
            <div key={comment._id} className="relative flex space-x-2">
              <hr className="absolute left-5 top-10 h-8 border-x border-wotterblue/30" />
              <img
                src={comment.profileImg}
                alt=""
                className="mt-2 h-7 w-7 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center space-x-1">
                  <p className="mr-1 font-bold">{comment.username}</p>
                  <p className="hidden text-sm text-gray-500 lg:inline">
                    @{comment.username.replace(/\s+/g, "").toLowerCase()} -
                  </p>
                  <TimeAgo
                    className="text-sm text-gray-500"
                    date={comment._createdAt}
                  />
                </div>
                <p>{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Splash;
