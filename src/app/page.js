// src/app/page.js
import Slideshow from "../components/Slideshow";
import Sidebar from "../components/Sidebar";
import PollSidebar from "../components/PollSidebar";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row space-x-4 px-4 py-6">
      <div className="flex-1">
        <Slideshow />
      </div>

      <div className="flex flex-col md:flex-row space-x-4">
        <div className="md:w-1/4">
          <Sidebar />
        </div>

        <div className="md:w-1/4">
          <PollSidebar />
        </div>
      </div>
    </div>
  );
}
