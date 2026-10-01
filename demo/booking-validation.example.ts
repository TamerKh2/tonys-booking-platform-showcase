/**
 * Sanitized portfolio example.
 *
 * Simplified booking validation demonstrating defensive checks.
 * This is not copied from the production application.
 */

export type BookingRequest = {
  customerId: string;
  staffId: string;
  serviceId: string;
  startsAt: Date;
};

export type BookingValidationResult =
  | { ok: true }
  | { ok: false; reason: string };

export function validateBookingRequest(
  request: BookingRequest,
  now = new Date(),
): BookingValidationResult {
  if (!request.customerId || !request.staffId || !request.serviceId) {
    return { ok: false, reason: "Missing required booking information." };
  }

  if (request.startsAt.getTime() <= now.getTime()) {
    return { ok: false, reason: "Appointment must be scheduled in the future." };
  }

  return { ok: true };
}
