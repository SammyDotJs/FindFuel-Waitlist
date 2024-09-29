import { motion } from "framer-motion";

type SuccessModalProps = {
  onClose: () => void;
};

const SuccessModal = ({ onClose }: SuccessModalProps) => {
  return (
    <div className="modal" onClick={onClose}>
      <motion.div
        className="px-6 py-2 rounded-full modal-container shadow-xl mt-4"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="pw text-base font-semibold text-white">Success</h3>
      </motion.div>
    </div>
  );
};

export default SuccessModal;
