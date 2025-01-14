import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-48 md:mt-32">
      <h2 className="font-bold text-4xl md:text-2xl text-center">
        Welcome to GitHub With Search
      </h2>
      <div className="w-full md:w-1/4 text-center mt-8 md:mt-4">
        <SearchBar />
      </div>
    </div>
  );
}
