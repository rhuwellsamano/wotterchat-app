import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="px-2 mt-2 col-span-2 hidden lg:inline">
      {/* Search */}
      <div className="flex items-center space-x-2 bg-gray-200 p-3 rounded-full mt-2">
        <SearchIcon className="h-5 w-5 text-cray-500" />
        <input
          type="text"
          placeholder="Search WotterChat"
          className="bg-transparent flex-1 outline-none"
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="garyvee"
        options={{ height: 1000 }}
      />
    </div>
  );
}

export default Widgets;
