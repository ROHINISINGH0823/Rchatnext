const stories = [
  { name: "Amy", image: "/avatars/amy.jpg" },
  { name: "Mark", image: "/avatars/mark.jpg" },
  { name: "Olivia", image: "/avatars/olivia.jpg" },
  { name: "Jacob", image: "/avatars/jacob.jpg" },
  { name: "Jacob", image: "/avatars/jacob2.jpg" },
  { name: "Sophia", image: "/avatars/sophia.jpg" },
];

export default function StoriesPanel() {
  return (
    <div className="w-[24%] bg-[#FDFDFD] rounded-3xl p-5 shadow-lg overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Stories</h2>
      <div className="grid grid-cols-3 gap-y-8 gap-x-4">
        {stories.map((story, i) => (
          <div key={i} className="flex flex-col items-center">
            <img
              src={story.image}
              alt={story.name}
              className="w-20 h-20 rounded-full border-4 border-[#BDEFD5]"
            />
            <p className="text-sm mt-3 font-bold text-gray-800">{story.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
