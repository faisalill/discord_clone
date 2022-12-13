import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BsSnow3, BsPlus,BsFillCircleFill } from "react-icons/bs";
import { GiSpikedSnail } from "react-icons/gi";
import {SiDiscord} from 'react-icons/si'

const HomePage = () => {
  return (
    <div className="homepage ">
      <div className="green-header flex items-center">
        <text className="header-text">
          This is an unclaimed account. Claim it before it's lost.{" "}
        </text>
        <button className="header-button">Claim Account</button>
      </div>
      <div className="flex flex-row h-[96.2%]">
        <div className="flex-1  body-left">
          <div className="body-left-header">
            <button className="body-left-header-button">
              Find or start a conversation
            </button>
          </div>
          <div className="pt-3 pl-3 pr-3 ">
            <div className="flex items-center  justify-center body-left-tags p-2 bg-body-left-div-bg text-start rounded-md hover:bg-body-center-bg">
              <BsFillPersonFill
                size="25"
                className="text-white relative right-16 "
              />{" "}
              <text className="text-white text-md relative right-10 font-ggsans ">
                Friends
              </text>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-1">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start rounded-md hover:bg-body-center-bg hover:text-white">
              <BsSnow3 size="25" className="text-snow-bg relative right-16 " />{" "}
              <text className=" text-md relative right-10 font-ggsans ">
                Giving
              </text>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-5">
            <div className="flex items-center  justify-center body-left-tags p-2   text-body-text text-start rounded-md hover:bg-body-center-bg  hover:text-white">
              <GiSpikedSnail
                size="25"
                className="text-white relative right-16 "
              />{" "}
              <text className=" text-md relative right-10 font-ggsans ">
                Nitro
              </text>
              <button className="absolute right-9 font-ggsans text-xs font-bold text-white bg-gradient-to-r from-gradient-start to-gradient-end py-1 px-3 rounded-3xl">
                NEW
              </button>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-7">
            <div className="flex items-center  justify-center body-left-tags   text-body-text text-start rounded-md  hover:text-white group">
              <text className="font-ggsans text-xs font-bold">
                DIRECT MESSAGES
              </text>
              <BsPlus
                className="text-plus-icon-bg hover:text-white relative left-5"
                size="18"
              />
              <span className="font-ggsans bg-black p-1 rounded-md relative bottom-7 right-5 scale-0 group-hover:scale-100 transition-all ease-linear">
                Create DM
              </span>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-9">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start bg-left-bottom-bg  rounded-md hover:bg-body-center-bg hover:text-white">
              <BsFillCircleFill size="32" className="text-skeleton-circle relative right-20 " />{" "}
              <text className=" text-skeleton-circle  absolute right-8 font-ggsans bg-skeleton-circle rounded-full w-36 h-5 ">
                .
              </text>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-9">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start bg-left-bottom-bg  rounded-md hover:bg-body-center-bg hover:text-white">
              <BsFillCircleFill size="32" className="text-skeleton-circle relative right-20 " />{" "}
              <text className=" text-skeleton-circle absolute right-8 font-ggsans bg-skeleton-circle rounded-full w-36 h-5 ">
                .
              </text>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-9">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start bg-left-bottom-bg  rounded-md hover:bg-body-center-bg hover:text-white">
              <BsFillCircleFill size="32" className="text-skeleton-circle relative right-20 " />{" "}
              <text className="text-skeleton-circle absolute right-8 font-ggsans bg-skeleton-circle rounded-full w-36 h-5 ">
                .
              </text>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-9">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start bg-left-bottom-bg  rounded-md hover:bg-body-center-bg hover:text-white">
              <BsFillCircleFill size="32" className="text-skeleton-circle relative right-20 " />{" "}
              <text className=" text-skeleton-circle absolute right-8 font-ggsans bg-skeleton-circle rounded-full w-36 h-5 ">
                .
              </text>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-9">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start bg-left-bottom-bg  rounded-md hover:bg-body-center-bg hover:text-white">
              <BsFillCircleFill size="32" className="text-skeleton-circle relative right-20 " />{" "}
              <text className=" text-skeleton-circle absolute right-8 font-ggsans bg-skeleton-circle rounded-full w-36 h-5 ">
                .
              </text>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-9">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start bg-left-bottom-bg  rounded-md hover:bg-body-center-bg hover:text-white">
              <BsFillCircleFill size="32" className="text-skeleton-circle relative right-20 " />{" "}
              <text className=" text-skeleton-circle absolute right-8 font-ggsans bg-skeleton-circle rounded-full w-36 h-5 ">
                .
              </text>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-9">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start  bg-left-bottom-bg  rounded-md hover:bg-body-center-bg hover:text-white">
              <BsFillCircleFill size="32" className="text-skeleton-circle relative right-20 " />{" "}
              <text className=" text-skeleton-circle absolute right-8 font-ggsans bg-skeleton-circle rounded-full w-36 h-5 ">
                .
              </text>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-9">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start bg-left-bottom-bg  rounded-md hover:bg-body-center-bg hover:text-white">
              <BsFillCircleFill size="32" className="text-skeleton-circle relative right-20 " />{" "}
              <text className=" text-skeleton-circle absolute right-8 font-ggsans bg-skeleton-circle rounded-full w-36 h-5 ">
                .
              </text>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-9">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start bg-left-bottom-bg  rounded-md hover:bg-body-center-bg hover:text-white">
              <BsFillCircleFill size="32" className="text-skeleton-circle relative right-20 " />{" "}
              <text className=" text-skeleton-circle absolute right-8 font-ggsans bg-skeleton-circle rounded-full w-36 h-5 ">
                .
              </text>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-9">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start bg-left-bottom-bg  rounded-md hover:bg-body-center-bg hover:text-white">
              <BsFillCircleFill size="32" className="text-skeleton-circle relative right-20 " />{" "}
              <text className=" text-skeleton-circle absolute right-8 font-ggsans bg-skeleton-circle rounded-full w-36 h-5 ">
                .
              </text>
            </div>
          </div>
          <div className=" relative bottom-2 bg-left-bottom-bg">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start bg-left-bottom-bg rounded-md hover:bg-body-center-bg hover:text-white">
              {/* <BsFillCircleFill size="32" className="text-discord-icon-bg relative right-20 "  />{" "} */}
              <div className="h-8 w-8 py-auto rounded-full bg-discord-icon-bg relative right-20 bottom-2 "><SiDiscord size='20' className="text-white relative top-[5px] left-[6px]" /></div>
              <text className=" text-skeleton-circle absolute right-8 bottom-8 font-ggsans bg-skeleton-circle rounded-full w-36 h-5 ">
                .
              </text>
            </div>
          </div>
          
        </div>
        <div className="flex-6.5  body-center">.</div>
      </div>
    </div>
  );
};

export default HomePage;
