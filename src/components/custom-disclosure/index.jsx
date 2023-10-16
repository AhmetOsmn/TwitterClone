import { Disclosure } from "@headlessui/react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const CustomDisclosure = ({ title, content = [] }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="h-[52px] flex items-center justify-between w-full px-4 font-bold hover:bg-[#eff3f41a] transation-colors">
            {title}
            <svg className={classNames({
                "rotate-180 text-[#1d9bf0]":open
            })} viewBox="0 0 24 24" width={18.75} height={18.75}>
              <path
                fill="currentColor"
                d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
              />
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            {content.map((item, index) => (
              <Link
              key={index}
                to={item.path}
                className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[#eff3f41a] transation-colors text-white"
              >
                <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                  <path fill="currentColor" d={item.svgD} />
                </svg>
                {item.title}
              </Link>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default CustomDisclosure;
