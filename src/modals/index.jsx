import modals from "~/routes/modals";
import { useModal } from "~/store/modal/hooks";
import { removeModal } from "~/store/modal/actions";

const Modal = () => {
  const modal = useModal();
  const currentModal = modals.find((m) => m.name === modal.name);

  return (
    <div className="fixed inset-0 bg-[color:var(--background-modal)] flex items-center justify-center z-20">
      <div className="bg-[color:var(--background-primary)] rounded-2xl max-h-[90vh] max-w-[600px] overflow-auto">
        {currentModal && <currentModal.element close={removeModal}/>}
      </div>
    </div>
  );
};
export default Modal;
