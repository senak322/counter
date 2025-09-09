import { getDisableTime } from "./getDisableTime";
import { BUTTON_DISABLE_TIME } from "../config/timerConfig";
import { describe, it, expect } from "vitest";

describe("getDisableTime", () => {
  it("multiplies the value by BUTTON_DISABLE_TIME and converts it to ms", () => {
    expect(getDisableTime(2)).toBe(2 * 1000 * BUTTON_DISABLE_TIME);
    expect(getDisableTime(10)).toBe(10 * 1000 * BUTTON_DISABLE_TIME);
  });
});
