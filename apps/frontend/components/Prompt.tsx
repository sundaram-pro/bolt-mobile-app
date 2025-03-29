import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Prompt = () => {
  return (
    <div className="w-full h-[20vh]">
      <Textarea placeholder="Create a snake game..." />
      <div className="w-full h-fit flex justify-end pt-2">
        <Button className="w-fit h-fit p-2">Generate</Button>
      </div>
    </div>
  );
};

export default Prompt;
