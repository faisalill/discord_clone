import React, {useState} from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BsSnow3, BsPlus, BsFillCircleFill } from "react-icons/bs";
import { GiSpikedSnail } from "react-icons/gi";
import { SiDiscord } from "react-icons/si";
import { MdOutlineMic, MdInbox, MdHelp } from "react-icons/md";
import { RiHeadphoneFill, RiMessage2Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";

const HomePage = () => {
  const [ShowButtonText, setShowButtonText] = useState(false)
  const [InputText, setInputText] = useState("")
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
          <div className="pt-3 pl-3 pr-3 relative bottom-4 right-1">
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
              <BsFillCircleFill
                size="32"
                className="text-skeleton-circle relative right-20 "
              />{" "}
              <text className=" text-skeleton-circle  absolute right-8 font-ggsans bg-skeleton-circle rounded-full w-36 h-5 ">
                .
              </text>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-9">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start bg-left-bottom-bg  rounded-md hover:bg-body-center-bg hover:text-white">
              <BsFillCircleFill
                size="32"
                className="text-skeleton-circle relative right-20 "
              />{" "}
              <text className=" text-skeleton-circle absolute right-8 font-ggsans bg-skeleton-circle rounded-full w-36 h-5 ">
                .
              </text>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-9">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start bg-left-bottom-bg  rounded-md hover:bg-body-center-bg hover:text-white">
              <BsFillCircleFill
                size="32"
                className="text-skeleton-circle relative right-20 "
              />{" "}
              <text className="text-skeleton-circle absolute right-8 font-ggsans bg-skeleton-circle rounded-full w-36 h-5 ">
                .
              </text>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-9">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start bg-left-bottom-bg  rounded-md hover:bg-body-center-bg hover:text-white">
              <BsFillCircleFill
                size="32"
                className="text-skeleton-circle relative right-20 "
              />{" "}
              <text className=" text-skeleton-circle absolute right-8 font-ggsans bg-skeleton-circle rounded-full w-36 h-5 ">
                .
              </text>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-9">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start bg-left-bottom-bg  rounded-md hover:bg-body-center-bg hover:text-white">
              <BsFillCircleFill
                size="32"
                className="text-skeleton-circle relative right-20 "
              />{" "}
              <text className=" text-skeleton-circle absolute right-8 font-ggsans bg-skeleton-circle rounded-full w-36 h-5 ">
                .
              </text>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-9">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start bg-left-bottom-bg  rounded-md hover:bg-body-center-bg hover:text-white">
              <BsFillCircleFill
                size="32"
                className="text-skeleton-circle relative right-20 "
              />{" "}
              <text className=" text-skeleton-circle absolute right-8 font-ggsans bg-skeleton-circle rounded-full w-36 h-5 ">
                .
              </text>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-9">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start  bg-left-bottom-bg  rounded-md hover:bg-body-center-bg hover:text-white">
              <BsFillCircleFill
                size="32"
                className="text-skeleton-circle relative right-20 "
              />{" "}
              <text className=" text-skeleton-circle absolute right-8 font-ggsans bg-skeleton-circle rounded-full w-36 h-5 ">
                .
              </text>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-9">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start bg-left-bottom-bg  rounded-md hover:bg-body-center-bg hover:text-white">
              <BsFillCircleFill
                size="32"
                className="text-skeleton-circle relative right-20 "
              />{" "}
              <text className=" text-skeleton-circle absolute right-8 font-ggsans bg-skeleton-circle rounded-full w-36 h-5 ">
                .
              </text>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-9">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start bg-left-bottom-bg  rounded-md hover:bg-body-center-bg hover:text-white">
              <BsFillCircleFill
                size="32"
                className="text-skeleton-circle relative right-20 "
              />{" "}
              <text className=" text-skeleton-circle absolute right-8 font-ggsans bg-skeleton-circle rounded-full w-36 h-5 ">
                .
              </text>
            </div>
          </div>
          <div className="pt-3 pl-3 pr-3 relative bottom-9">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start bg-left-bottom-bg  rounded-md hover:bg-body-center-bg hover:text-white">
              <BsFillCircleFill
                size="32"
                className="text-skeleton-circle relative right-20 "
              />{" "}
              <text className=" text-skeleton-circle absolute right-8 font-ggsans bg-skeleton-circle rounded-full w-36 h-5 ">
                .
              </text>
            </div>
          </div>
          <div className=" relative  bg-left-bottom-bg">
            <div className="flex items-center  justify-center body-left-tags p-2  text-body-text text-start ">
              <div className="h-8 w-8 py-auto rounded-full bg-discord-icon-bg relative  right-24 ">
                <SiDiscord
                  size="20"
                  className="text-white relative top-[5px] left-[6px]"
                />
              </div>
              <span className="font-ggsans absolute left-12 bottom-5 font-bold text-white text-sm">
                fiveeyyy
              </span>
              <span className="font-ggsans absolute left-12 bottom-2  text-left-bottom-bottom-number text-xs">
                #1745
              </span>
              <div className="absolute bottom-2 p-1 rounded-md right-20 hover:bg-body-left-div-bg group hover:text-white">
                <MdOutlineMic size="22" />
                <span className="left-bottom-tooltip group-hover:scale-100">
                  Unmute
                </span>
              </div>
              <div className="absolute bottom-2 p-1 rounded-md right-11 hover:bg-body-left-div-bg group hover:text-white">
                <RiHeadphoneFill size="22" />
                <span className="left-bottom-tooltip group-hover:scale-100">
                  Deafen
                </span>
              </div>
              <div className="absolute bottom-2 p-1 rounded-md right-2 hover:bg-body-left-div-bg group hover:text-white">
                <IoMdSettings size="22" />
                <span className="left-bottom-tooltip group-hover:scale-100">
                  Settings
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-6.5  body-center">
          <div className="body-center-header items-center">
            <div className="flex w-max p-1  relative  top-2 left-5">
              <BsFillPersonFill size="22" className="text-body-text " />
              <span className="font-ggsans ml-1 text-text-hover font-semibold">
                Friends
              </span>
            </div>
            <div className="bg-body-left-div-bg w-[2px] h-6 relative left-28 bottom-5 rounded-full"></div>
            <div className="relative items-center left-[128px] bottom-11 hover:bg-body-left-div-bg group w-max py-0 px-[8px] rounded-md ">
              <text className="font-ggsans text-normal-text group-hover:text-text-hover">
                Online
              </text>
            </div>
            <div className="relative left-[208px]  items-center bottom-[68px] hover:bg-body-left-div-bg group w-max py-0 px-[8px] rounded-md ">
              <text className="font-ggsans text-normal-text group-hover:text-text-hover">
                All
              </text>
            </div>
            <div className="relative left-[265px] bottom-[93px] items-center hover:bg-body-left-div-bg group w-max py-0 px-[8px] rounded-md ">
              <text className="font-ggsans text-normal-text group-hover:text-text-hover">
                Pending
              </text>
            </div>
            <div className="relative left-[355px] bottom-[117px] items-center hover:bg-body-left-div-bg group w-max py-0 px-[8px] rounded-md ">
              <text className="font-ggsans text-normal-text group-hover:text-text-hover">
                Blocked
              </text>
            </div>
            <div className="relative left-[439px] bottom-[142px] items-center  group w-max py-0 px-[8px] rounded-md ">
              <text className="font-ggsans text-add-friend-text ">
                Add friend
              </text>
            </div>
            <div className="group absolute right-[116px] top-[50px]">
              <RiMessage2Fill
                className="text-plus-icon-bg hover:text-text-hover"
                size="23"
              />
              <span className="bg-black fixed right-16 top-20 scale-0 group-hover:scale-100 transition-all    text-white w-max py-1  px-2 rounded-md ">
                New Group DM
              </span>
            </div>
            <div className="bg-body-left-div-bg w-[2px] h-6 absolute right-24 top-[49px] rounded-full"></div>
            <div className="group absolute right-[55px] top-[50px]">
              <MdInbox
                className="text-plus-icon-bg hover:text-text-hover"
                size="23"
              />
              <span className="bg-black fixed right-10 top-20 scale-0 group-hover:scale-100 transition-all    text-white w-max py-1  px-2 rounded-md ">
                Inbox
              </span>
            </div>
            <div className="group absolute right-[15px] top-[50px]">
              <MdHelp
                className="text-plus-icon-bg hover:text-text-hover"
                size="23"
              />
              <span className="bg-black fixed right-1 top-20 scale-0 group-hover:scale-100 transition-all    text-white w-max py-1  px-2 rounded-md ">
                Help
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="flex-2.8">
              <div className=" ">
                <h1 className="font-ggsans font-bold relative top-[18px] left-8 text-sidebar-icon-text-hover">
                  ADD FRIEND
                </h1>
                <p className="font-ggsans-light text-sm font-extralight relative top-6 left-8 text-body-center-text">
                  You can add a friend with their Discord Tag. It's cAsE
                  sEnSitIvE!
                </p>
                <div className="bg-sidebar-bg h-[50px] py-3 px-4 w-[94.7%] rounded-lg left-8 relative top-10 ">
                  <input
                    className="bg-inherit font-ggsans-light placeholder-body-text focus:outline-none text-body-text border-0 border-inherit "
                    placeholder="Enter a Username#0000"
                    onChange={(e)=>{setInputText(e.target.value)}}
                  />
                  <button className={InputText === "" ? "font-ggsans-light font-bold text-sm py-[6px] px-[17px] rounded-sm relative left-[69.5%] bottom-1 bg-button-bg text-button-text-bg   " : "font-ggsans-light font-bold text-sm py-[6px] px-[17px] rounded-sm relative left-[69.5%] bottom-1 bg-snow-bg text-text-hover"}>Send Friend Request</button>
                </div>
                <div className="w-[100%] h-[1px] relative top-[60px] bg-division"></div>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-black">.</div>
              <div>.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
