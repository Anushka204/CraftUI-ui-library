import AIInput_01 from "@/components/codesnippetui/ai-input/ai-input-01";
import AIInput_02 from "@/components/codesnippetui/ai-input/ai-input-02";
import AIInput_03 from "@/components/codesnippetui/ai-input/ai-input-03";
import AIInput_04 from "@/components/codesnippetui/ai-input/ai-input-04";
import AIInput_07 from "@/components/codesnippetui/ai-input/ai-input-07";
import Alert02 from "@/components/codesnippetui/alert/alert-02";
import Faq03 from "@/components/codesnippetui/faq/faq-03";
import {HeroSection} from "@/components/landing/hero";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black/5 overflow-x-hidden">
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen px-6 lg:px-4 gap-4 sm:gap-12 ">
        <HeroSection/>
        <Faq03/>
      </div>
      <div className="flex flex-col justify-center gap-10"></div>
      
    </main>
  );
}
