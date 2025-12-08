// import { motion, AnimatePresence } from "framer-motion";

// const ResumeModal = ({ show, onClose }) => {
//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           {/* Modal content */}
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-11/12 md:w-3/4 lg:w-1/2 h-[80vh] flex flex-col overflow-hidden"
//           >
//             <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
//               <h3 className="text-lg font-semibold dark:text-white">My Resume</h3>
//               <button
//                 onClick={onClose}
//                 className="text-gray-600 hover:text-gray-900 dark:text-gray-300"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* Resume Preview */}
//             {/* <iframe
//               src="/resume.pdf"
//               title="Resume"
//               className="flex-1 w-full h-full border-none"
//             /> */}
//             <iframe
//   src="/resume2.pdf"
//   width="100%"
//   height="600px"
//   title="Resume Preview"
//   style={{ border: "none" }}
// ></iframe>


//             {/* Footer with Download button */}
//             <div className="p-4 border-t dark:border-gray-700 text-center">
//               <a
//                 href="/resume2.pdf"
//                 download
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
//               >
//                 Download Resume
//               </a>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ResumeModal;

import { motion, AnimatePresence } from "framer-motion";

const ResumeModal = ({ show, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-11/12 md:w-3/4 lg:w-1/2 h-[80vh] flex flex-col overflow-hidden"
          >
            <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
              <h3 className="text-lg font-semibold dark:text-white">My Resume</h3>
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300"
              >
                ✕
              </button>
            </div>

            {/* Resume Preview – Hidden on Mobile */}
            <iframe
              src="/resume2.pdf"
              title="Resume Preview"
              className="hidden sm:block flex-1 w-full h-full border-none"
            />

            {/* Mobile fallback */}
            <div className="block sm:hidden p-6 text-center flex-1 flex flex-col items-center justify-center">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                PDF preview is not supported on mobile.
              </p>
              <a
                href="/resume2.pdf"
                download
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                Download Resume
              </a>
            </div>

            <div className="p-4 border-t dark:border-gray-700 text-center">
              <a
                href="/resume2.pdf"
                download
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
