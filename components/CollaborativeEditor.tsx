"use client";

import * as Y from "yjs";
import { LiveblocksYjsProvider } from "@liveblocks/yjs";
import { useRoom } from "@liveblocks/react/suspense";
import { useCallback, useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { MonacoBinding } from "y-monaco";
import { Awareness } from "y-protocols/awareness";
import { useTheme } from "next-themes";
import { useLanguageStore } from "@/store/language";

// Collaborative text editor with simple rich text, live cursors, and live avatars
export function CollaborativeEditor() {
  const [editorRef, setEditorRef] = useState<editor.IStandaloneCodeEditor>();
  const room = useRoom();
  const theme = useTheme();
  // const [sourceCode, setSourceCode] = useState<string>("");
  const defaultLanguage = useLanguageStore((state) => state.selectedLanguage);
  const sourceCode = useLanguageStore((state) => state.sourceCode);
  const setSourceCode = useLanguageStore((state) => state.setSourceCode);
  

  // Set up Liveblocks Yjs provider and attach Monaco editor
  useEffect(() => {
    let yProvider: LiveblocksYjsProvider;
    let yDoc: Y.Doc;
    let binding: MonacoBinding;

    if (editorRef) {
      yDoc = new Y.Doc();
      const yText = yDoc.getText("monaco");
      yProvider = new LiveblocksYjsProvider(room, yDoc);

      // Attach Yjs to Monaco
      binding = new MonacoBinding(
        yText,
        editorRef.getModel() as editor.ITextModel,
        new Set([editorRef]),
        yProvider.awareness as Awareness
      );

      editorRef.focus();
    }

    return () => {
      yDoc?.destroy();
      yProvider?.destroy();
      binding?.destroy();
    };
  }, [editorRef, room]);

  const handleOnMount = useCallback((e: editor.IStandaloneCodeEditor) => {
    setEditorRef(e);
  }, []);

  const handleOnChange = () => {
    setSourceCode(editorRef?.getValue() || "");
  }

  return (
    <Editor
      onMount={handleOnMount}
      height="80vh"
      width="100hw"
      theme={theme.theme==="dark"?"vs-dark":"vs-light"}
      defaultLanguage={defaultLanguage.language}
      options={{
        tabSize: 2,
      }}
      value={sourceCode}
      onChange={handleOnChange}
    />
  );
}