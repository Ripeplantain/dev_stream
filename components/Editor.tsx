"use client";

import React, { useState } from "react";
import { ModeToggleBtn } from "./mode-toggle-btn";
import SelectLanguages from "./SelectLanguages";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Room from "@/app/Room";
import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { useLanguageStore } from "@/store/language";
import { compileCode } from "@/services/compile";
import { useToast } from "@//hooks/use-toast";
import { Loader } from "lucide-react";

const Editor = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const sourceCode = useLanguageStore((state) => state.sourceCode);
  const [output, setOutput] = useState<string>("");

  async function executeCode() {
    setIsLoading(true);
    const requestData = {
      language: selectedLanguage.language,
      version: selectedLanguage.version,
      files: [
        {
          content: sourceCode,
        },
      ],
    };
    try {
      const response = await compileCode(requestData);
      setOutput(response.run.output);
      toast({
        title: "Yipeee!!!!",
        description: "Code executed successfully",
        variant: "success",
      });
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Oops!!!",
          description: error.message,
          variant: "destructive",
        });
      }
    }
  }

  return (
    <div className="h-full dark:bg-slate-900 bg-slate-100 rounded-2xl shadow-2xl py-6 px-8">
      {/* Editor Header */}
      <div className="flex items-center justify-between pb-3">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">
          Dev Stream
        </h2>
        <div className="flex items-center space-x-2">
          <ModeToggleBtn />
          <div className="w-[230px]">
            <SelectLanguages />
          </div>
        </div>
      </div>
      {/* Editor itself */}
      <div className="bg-slate-200 dark:bg-slate-950 p-3 rounded-2xl">
        {/* <div className="dark:bg-slate-900">
            
        </div> */}
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full rounded-lg border md:min-w-[450px] dark:bg-slate-900"
        >
          <ResizablePanel defaultSize={50} minSize={35}>
            <Room />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50} minSize={35}>
            {/* Header */}
            <div className="space-y-3 bg-slate-300 dark:bg-slate-900 min-h-full">
              <div className="flex items-center justify-between bg-slate-400 dark:bg-slate-950 px-6 py-2">
                <h2>Output</h2>
                <Button
                  disabled={isLoading}
                  onClick={executeCode}
                  size={"sm"}
                  className="dark:bg-emerald-600 text-slate-200 dark:hover:bg-emerald-700 bg-yellow-800 hover:bg-yellow-900 cursor-pointer"
                >
                  {isLoading ? (
                    <div className="flex">
                      <Loader className="w-4 h-4 mr-2" />
                      <span>Running....</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Play className="w-4 h-4 mr-2" />
                      <span>Run</span>
                    </div>
                  )}
                </Button>
              </div>
              <div className="h-full px-6">
                <div className="h-full  overflow-y-auto p-4">
                  <pre className="text-sm text-slate-900 dark:text-slate-100">
                    {output}
                  </pre>
                </div>
              </div>
            </div>
            {/* Body */}
          </ResizablePanel>
          <ResizableHandle withHandle />
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Editor;
