const users = [
  { name: "Emma Johnson", message: "Sounds good!", image: "/avatars/emma.jpg" },
  { name: "Michael Smith", message: "Hey, how are you?", image: "/avatars/michael.jpg" },
  { name: "James Williams", message: "Hey", image: "/avatars/james.jpg" },
  { name: "Sarah Davis", message: "Good gif now", image: "/avatars/sarah.jpg" },
  { name: "David Brown", message: "Yesterday", image: "/avatars/david.jpg" },
  { name: "Emily Wilson", message: "Last week", image: "/avatars/emily.jpg" },
  { name: "Daniel Miller", message: "", image: "/avatars/daniel.jpg" },
];

export default function Sidebar() {
  return (
    <div className="w-[24%] bg-[#FDFDFD] rounded-3xl p-5 shadow-lg overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Chats</h2>
      {users.map((user, i) => (
        <div key={i} className="flex items-center space-x-4 py-3 rounded-2xl px-4 cursor-pointer hover:bg-[#F0F8F7]">
          <div className="relative">
            <img src={user.image} alt={user.name} className="w-14 h-14 rounded-full" />
            
          </div>
          <div>
            <p className="font-bold text-base text-gray-800">{user.name}</p>
            <p className="text-sm text-gray-500">{user.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
