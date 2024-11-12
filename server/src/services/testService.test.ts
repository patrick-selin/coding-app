import { describe, it, expect, vi } from "vitest";
import { getAllTestItems } from "./testService";

describe("getAllTestItems", () => {
  it("should return a list of test items", async () => {
    const mockDb = {
      select: vi.fn().mockReturnThis(),
      from: vi
        .fn()
        .mockResolvedValue([
          { id: "123", content: "Test item", important: true },
        ]),
    };

    const result = await getAllTestItems(mockDb);
    expect(result).toEqual([
      { id: "123", content: "Test item", important: true },
    ]);
  });
});
