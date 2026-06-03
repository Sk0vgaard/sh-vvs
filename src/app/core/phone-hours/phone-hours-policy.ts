export type PhoneHoursPhase = 'weekday-open' | 'emergency-only';

export interface PhoneHoursClock {
  now(): Date;
  isPublicHoliday?(date: Date): boolean;
}

const OPEN_START_MINUTES = 7 * 60;
const OPEN_END_MINUTES = 16 * 60;

export function getPhoneHoursPhase(clock: PhoneHoursClock): PhoneHoursPhase {
  const now = clock.now();

  if (clock.isPublicHoliday?.(now)) {
    return 'emergency-only';
  }

  const day = now.getDay();
  const minutesSinceMidnight = now.getHours() * 60 + now.getMinutes();
  const isWeekday = day >= 1 && day <= 5;

  if (isWeekday && minutesSinceMidnight >= OPEN_START_MINUTES && minutesSinceMidnight < OPEN_END_MINUTES) {
    return 'weekday-open';
  }

  return 'emergency-only';
}

export function createFixedClock(isoLocal: string, isPublicHoliday?: (date: Date) => boolean): PhoneHoursClock {
  const fixed = new Date(isoLocal);
  return {
    now: () => new Date(fixed),
    isPublicHoliday,
  };
}
