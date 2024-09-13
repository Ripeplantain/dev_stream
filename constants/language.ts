export const languageOptions = [
  {
    language: "javascript",
    version: "1.32.3",
    aliases: ["deno-js"],
    runtime: "deno",
  },
  {
    language: "typescript",
    version: "1.32.3",
    aliases: ["deno-ts"],
    runtime: "deno",
  },
  {
    language: "python",
    version: "3.10.0",
    aliases: ["py", "py3", "python3", "python3.10"],
  },
  { language: "ruby", version: "3.0.1", aliases: ["ruby3", "rb"] },
  { language: "php", version: "8.2.3", aliases: [] },
  {
    language: "csharp.net",
    version: "5.0.201",
    aliases: [
      "csharp",
      "c#",
      "cs",
      "c#.net",
      "cs.net",
      "c#-dotnet",
      "cs-dotnet",
      "csharp-dotnet",
      "dotnet-c#",
      "dotnet-cs",
      "dotnet-csharp",
    ],
    runtime: "dotnet",
  },
  { language: "java", version: "15.0.2", aliases: [] },
  { language: "go", version: "1.16.2", aliases: ["go", "golang"] },
  { language: "swift", version: "5.3.3", aliases: ["swift"] },
  { language: "rust", version: "1.68.2", aliases: ["rs"] },
  { language: "kotlin", version: "1.8.20", aliases: ["kt"] },
  { language: "dart", version: "2.19.6", aliases: [] },
  { language: "c", version: "10.2.0", aliases: ["gcc"], runtime: "gcc" },
  {
    language: "c++",
    version: "10.2.0",
    aliases: ["cpp", "g++"],
    runtime: "gcc",
  },
  { language: "bash", version: "5.2.0", aliases: ["sh"] },
];

export const codeSnippets = {
  javascript: `function sum(a, b) {  
  return a + b;
}`,
  typescript: `function sum(a: number, b: number): number {  
return a + b;
}`,
  python: `def sum(a, b):  return a + b`,
  ruby: `def sum(a, b)  a + bend`,
  php: `function sum($a, $b) {  return $a + $b;}`,
  "csharp.net": `public int Sum(int a, int b) {  return a + b;}`,
  java: `public int sum(int a, int b) {  return a + b;}`,
  go: `func sum(a int, b int) int {  return a + b;}`,
  swift: `func sum(a: Int, b: Int) -> Int {  return a + b;}`,
  rust: `fn sum(a: i32, b: i32) -> i32 {  a + b}`,
  kotlin: `fun sum(a: Int, b: Int): Int {  return a + b;}`,
  dart: `int sum(int a, int b) =>  a + b;`,
  c: `int sum(int a, int b) {  return a + b;}`,
  "c++": `int sum(int a, int b) {  return a + b;}`,
  bash: `sum() {  echo $(($1 + $2));}`,
};
