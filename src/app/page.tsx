import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-32">
      <h2 className="font-bold text-2xl">Welcome to GitHub With Search</h2>
      <div className="w-1/4 text-center mt-4">
        <SearchBar />
      </div>
    </div>
  );
}
