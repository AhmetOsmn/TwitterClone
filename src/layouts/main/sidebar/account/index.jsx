import { Popover, Transition } from "@headlessui/react";
import { useAccount } from "~/store/auth/hook";
import More from "./more";

const Account = () => {
  const account = useAccount();

  return (
    <div className="mt-auto">
      <Popover className="relative">
        <Popover.Button className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex text-left items-center outline-none">
          <img src={account.avatar} alt="" className="2-10 h-10 rounded-full" />
          <div className="mx-3 text-[15px]">
            <h6 className="font-bold leading-[20px]">{account.fullName}</h6>
            <div className="text-[#71767b] leading-[20px]">
              @{account.userName}
            </div>
          </div>
          <svg
            viewBox="0 0 24 24"
            className="ml-auto text-[#e7e9ea]"
            width={18.75}
          >
            <path
              fill="currentColor"
              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            />
          </svg>
        </Popover.Button>
        <Transition
          enter="transition duration-200 ease-out"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-200 ease-out"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
        >
          <Popover.Panel className="absolute bottom-[80px] overflow-hidden py-3 w-[300px] left-1/2 -translate-x-1/2 bg-black rounded-2xl shadow-box">
            {({ close }) => <More close={close} />}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};
export default Account;