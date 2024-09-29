import { motion } from "framer-motion";

type FailedModalProps = {
  onClose: () => void;
};

const FailedModal = ({ onClose }: FailedModalProps) => {
  return (
    <div className="modal" onClick={onClose}>
      <motion.div
        className="px-6 py-2 rounded-full modal-container err-modal shadow-xl mt-4"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="err text-base font-semibold">Failed</h3>
      </motion.div>
    </div>
  );
};

export default FailedModal;
