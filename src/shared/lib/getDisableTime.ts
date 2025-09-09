import { BUTTON_DISABLE_TIME } from "../config/timerConfig"

export const getDisableTime = (value: number) => {
    return value * 1000 * BUTTON_DISABLE_TIME
}