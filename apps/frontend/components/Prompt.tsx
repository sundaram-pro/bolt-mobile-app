"use client"
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import { BACKEND_URL } from "@/config";

const Prompt = () => {
  const [prompt, setPrompt] = useState("");
  const { getToken } = useAuth();

  return (
    <div className="w-full h-[20vh]">
      <Textarea 
        placeholder="Create a snake game..." 
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="resize-none"
      />
      <div className="w-full h-fit flex justify-end pt-2">
        <Button 
          className="w-fit h-fit p-2"
          onClick={async () => {
            const token = await getToken();
            try {
              const response = await axios.post(`${BACKEND_URL}/project`, {
                prompt: prompt,
              }, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              // Handle the response here
              console.log(response.data);
            } catch (error) {
              console.error("Error:", error);
            }
          }}
        >
          Generate
        </Button>
      </div>
    </div>
  );
};

export default Prompt;