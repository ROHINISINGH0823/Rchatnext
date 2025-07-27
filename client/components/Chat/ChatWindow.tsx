export default function ChatWindow() {
  return (
    <div className="flex flex-col justify-between w-[50%] rounded-3xl shadow-lg p-6 bg-white">

      {/* Header */}
      <div className="flex items-center space-x-4 border-b border-gray-200 pb-4">
        <img src="/avatars/emma.jpg" className="w-12 h-12 rounded-full" />
        <h2 className="font-bold text-xl text-gray-800">Emma Johnson</h2>
        <div className="ml-auto text-3xl text-gray-400 cursor-pointer">...</div>
      </div>

      {/* Messages area */}
      <div className="relative flex-1 overflow-y-auto chat-messages-bg">
        <div className="relative z-10 flex flex-col gap-2 px-6 py-4 text-sm">
          <div className="bg-white px-5 py-3 rounded-2xl max-w-[70%] shadow-md">Hi! Are we still meeting at 3 PM?</div>
          <div className="bg-[#DCF8C6] px-5 py-3 rounded-2xl max-w-[70%] self-end shadow-md">Yes, I’ll be there!</div>
          <div className="bg-[#DCF8C6] px-5 py-3 rounded-2xl max-w-[70%] self-end shadow-md">Sounds good!</div>
        </div>
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 mt-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-6 py-3 rounded-full border-none outline-none text-base bg-white shadow-inner"
        />
        <button className="bg-[#25D366] text-white p-3 rounded-full text-2xl shadow-lg">
          &#10148;
        </button>
      </div>
    </div>
  );
}
