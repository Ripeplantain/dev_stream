'use client';

import React from "react";
import { ModeToggleBtn } from "./mode-toggle-btn";
import SelectLanguages from "./SelectLanguages";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const Editor = () => {

  return (
    <div className="min-h-screen dark:bg-slate-900 bg-slate-100 rounded-2xl shadow-2xl py-6 px-8">
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
      <div className="bg-slate-400 dark:bg-slate-950 p-3">
        {/* <div className="dark:bg-slate-900">
            
        </div> */}
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full rounded-lg border md:min-w-[450px] dark:bg-slate-900 "
        >
          <ResizablePanel defaultSize={50} minSize={35}>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50} minSize={35}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Two</span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Three</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Editor;
