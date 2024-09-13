import { languageOptions } from "@/constants/language";
import { create } from "zustand";

interface languageOptions {
    language: string;
    version: string;
    aliases: string[];
    runtime?: string;
}

type LanguageStore = {
    languageOptions:  languageOptions[];
    selectedLanguage: languageOptions;
    sourceCode: string;
    setSelectedLanguage: (language: languageOptions) => void;
    setSourceCode: (sourceCode: string) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
    languageOptions: languageOptions,
    selectedLanguage: languageOptions[0],
    sourceCode: "",
    setSelectedLanguage: (language) => 
        set(() => ({selectedLanguage: language})),
    setSourceCode: (sourceCode) =>
        set(() => ({sourceCode: sourceCode}))
}))