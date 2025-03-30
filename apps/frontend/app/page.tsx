import Appbar from "@/components/Appbar";
import Prompt from "@/components/Prompt";
import TemplateButtons from "@/components/TemplateButtons";

export default function Home() {
  return (
    <div className="p-4">
      <Appbar />
      <div className="max-w-4xl mx-auto pt-32">
        <div className="text-3xl font-bold text-center">
          What do you want to build?
        </div>
        <div className="text-sm text-muted-foreground text-center p-4">
          Prompt, click generate and watch your app come to life
        </div>
        <div className="w-full">
          <Prompt />
        </div>
      </div>
      <div className="max-w-2xl mx-auto pt-4">
        <TemplateButtons />
      </div>
    </div>
  );
}
