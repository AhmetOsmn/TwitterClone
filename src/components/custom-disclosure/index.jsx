import { Disclosure } from "@headlessui/react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { setModal } from "~/store/modal/actions";

const CustomDisclosure = ({ title, content = [] }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="h-[52px] flex items-center justify-between w-full px-4 font-bold hover:bg-[color:var(--background-secondary)] transation-colors">
            {title}
            <svg
              className={classNames({
                "rotate-180 text-[color:var(--color-primary)]": open,
              })}
              viewBox="0 0 24 24"
              width={18.75}
              height={18.75}
            >
              <path
                fill="currentColor"
                d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
              />
            </svg>
          </Disclosure.Button>
          <Disclosure.Panel>
            {content.map((item, index) =>
              item.isAppearance ? (
                <button
                  key={index}
                  to={item.path}
                  onClick={() => setModal("appearance")}
                  className="flex items-center px-3 h-11 w-full gap-3 text-[15px] font-medium hover:bg-[color:var(--background-secondary)] transation-colors"
                >
                  <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                    <path fill="currentColor" d={item.svgD} />
                  </svg>
                  {item.title}
                </button>
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium hover:bg-[color:var(--background-secondary)] transation-colors"
                >
                  <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                    <path fill="currentColor" d={item.svgD} />
                  </svg>
                  {item.title}
                </Link>
              )
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default CustomDisclosure;
