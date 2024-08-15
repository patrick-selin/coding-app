// testModel.js
export interface TestItem {
  id: string;
  content: string;
  important: boolean;
}

export let testItems: TestItem[] = [
  {
    id: "1",
    content: "Test Word 1",
    important: true,
  },
  {
    id: "2",
    content: "Test Word 2",
    important: false,
  },
  {
    id: "3",
    content: "Test Word 3",
    important: true,
  },
];
