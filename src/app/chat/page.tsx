import ChatArea from "@/components/Chatarea";
import Header from "@/components/Header";

export default function Chat() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-between selection:text-blue-700 selection:bg-yellow-100">
      <div className="flex w-1/2 h-auto"> 
      <Header name="Pro" />
       <ChatArea />
      </div> 
    </main>
  );
}
