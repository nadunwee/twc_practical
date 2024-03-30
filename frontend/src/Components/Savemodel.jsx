function Model({ visible, onClose, onBackground, type }) {
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
          Your Contacts has been {type} successfully!
        </p>
        <button
          onClick={onClose}
          className="bg-twc-green text-white p-2 rounded-full w-[80px] mt-4 text-lg "
        >
          Okey
        </button>
      </div>
    </div>
  );
}

export default Model;
