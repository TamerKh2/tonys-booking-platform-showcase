/**
 * Sanitized portfolio example.
 *
 * This file demonstrates the shape of availability logic.
 * It is intentionally simplified and is not production code.
 */

export type TimeRange = {
  startMinutes: number;
  endMinutes: number;
};

export function generateAvailableSlots(
  workingWindow: TimeRange,
  appointmentMinutes: number,
  blockedRanges: TimeRange[],
  stepMinutes = 15,
): number[] {
  const slots: number[] = [];

  for (
    let start = workingWindow.startMinutes;
    start + appointmentMinutes <= workingWindow.endMinutes;
    start += stepMinutes
  ) {
    const end = start + appointmentMinutes;

    const overlapsBlockedRange = blockedRanges.some(
      (blocked) => start < blocked.endMinutes && end > blocked.startMinutes,
    );

    if (!overlapsBlockedRange) {
      slots.push(start);
    }
  }

  return slots;
}
