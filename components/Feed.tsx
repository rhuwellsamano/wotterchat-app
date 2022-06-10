import { RefreshIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Splash } from "../typings";
import SplashBox from "./SplashBox";
import SplashComponent from "../components/Splash";
import { fetchSplashes } from "../utils/fetchSplashes";
import toast from "react-hot-toast";

interface Props {
  splashes: Splash[];
}

function Feed({ splashes: splashesProp }: Props) {
  const [splashes, setSplashes] = useState<Splash[]>(splashesProp);
  console.log(splashes);

  const handleRefresh = async () => {
    const refreshToast = toast.loading("Refreshing...");
    const splashes = await fetchSplashes();
    setSplashes(splashes);
    toast.success("Feed Updated!", {
      id: refreshToast,
    });
  };

  return (
    <div className="col-span-7 lg:col-span-5 border-x">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          onClick={handleRefresh}
          className="h-8 w-8 mr-5 mt-5 cursor-pointer text-wotterblue transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
        />
      </div>
      <div>
        <SplashBox />
      </div>
      {/* FEED */}
      <div>
        {splashes.map((splash) => (
          <SplashComponent key={splash._id} splash={splash} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
