import { createFixedClock, getPhoneHoursPhase } from './phone-hours-policy';

describe('getPhoneHoursPhase', () => {
  it('returns weekday-open on Monday at 10:00', () => {
    const clock = createFixedClock('2026-06-01T10:00:00');

    expect(getPhoneHoursPhase(clock)).toBe('weekday-open');
  });

  it('returns emergency-only on Monday at 17:00', () => {
    const clock = createFixedClock('2026-06-01T17:00:00');

    expect(getPhoneHoursPhase(clock)).toBe('emergency-only');
  });

  it('returns emergency-only on Monday before 07:00', () => {
    const clock = createFixedClock('2026-06-01T06:30:00');

    expect(getPhoneHoursPhase(clock)).toBe('emergency-only');
  });

  it('returns emergency-only on Saturday at 10:00', () => {
    const clock = createFixedClock('2026-06-06T10:00:00');

    expect(getPhoneHoursPhase(clock)).toBe('emergency-only');
  });

  it('returns emergency-only on a public holiday that falls on a weekday', () => {
    const clock = createFixedClock('2026-06-01T10:00:00', () => true);

    expect(getPhoneHoursPhase(clock)).toBe('emergency-only');
  });

  it('returns weekday-open at 07:00 and emergency-only at 16:00 on Friday', () => {
    expect(getPhoneHoursPhase(createFixedClock('2026-06-05T07:00:00'))).toBe('weekday-open');
    expect(getPhoneHoursPhase(createFixedClock('2026-06-05T16:00:00'))).toBe('emergency-only');
  });
});
