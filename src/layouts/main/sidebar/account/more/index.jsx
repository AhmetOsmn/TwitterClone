import classNames from "classnames";
import { setCurrentAccount } from "~/store/auth/action";
import { useAccount, useAccounts } from "~/store/auth/hook";

const More = ({ close }) => {
  const currentAccount = useAccount();
  const accounts = useAccounts();

  return (
    <div>
      {accounts.map((account) => (
        <button
          type="button"
          disabled={currentAccount.id === account.id}
          onClick={() => {
            setCurrentAccount(account);
            close();
          }}
          className={classNames(
            "py-3 px-4 flex items-center text-left w-full transition-colors",
            {
              "hover:bg-[#eff3f41a]": currentAccount.id !== account.id,
            }
          )}
        >
          <img src={account.avatar} alt="" className="2-10 h-10 rounded-full" />
          <div className="mx-3 flex-1 text-[15px]">
            <h6 className="font-bold leading-[20px]">{account.fullName}</h6>
            <div className="text-[#71767b] leading-[20px]">
              @{account.userName}
            </div>
          </div>
          {currentAccount.id === account.id && (
            <svg
              className="mr-2 ml-3"
              viewBox="0 0 24 24"
              width={18.75}
              height={18.75}
              fill="#00ba7c"
            >
              <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
            </svg>
          )}
        </button>
      ))}

      <div className="h-px bg-[#2f3336] my-3" />

      <button className="py-3 px-4 text-left transation-colors hover:bg-[#eff3f41a] w-full leading-[20px] text-[#e7e9ea] text-[15px] font-bold">
        Var olan bir hesap ekle
      </button>
      <button className="py-3 px-4 text-left transation-colors hover:bg-[#eff3f41a] w-full leading-[20px] text-[#e7e9ea] text-[15px] font-bold">
        Hesapları yönet
      </button>
      <button className="py-3 px-4 text-left transation-colors hover:bg-[#eff3f41a] w-full leading-[20px] text-[#e7e9ea] text-[15px] font-bold">
        <div className="max-w-[228px]">
          @{currentAccount.userName} hesabından çıkış yap
        </div>
      </button>
    </div>
  );
};
export default More;