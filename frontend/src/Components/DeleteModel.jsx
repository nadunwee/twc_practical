function Model({ visible, onClose, onBackground }) {
  if (!visible) return null;

  function handleClose(e) {
    if (e.target.id == "container") onBackground();
  }

  return (
    <div
      id="container"
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white text-black w-[809px] h-[215px] rounded-3xl p-12 text-center  font-medium">
        <p className="text-twc-green text-[25px]">
          Do you want to delete the contact
        </p>
        <button
          onClick={onClose}
          className="bg-twc-green text-white p-2 rounded-full w-[80px] mt-4 text-lg "
        >
          Yes
        </button>
        <button
          onClick={handleClose}
          id="container"
          className="bg-twc-green text-white p-2 rounded-full w-[80px] mt-4 text-lg "
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Model;
