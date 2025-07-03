const calculateFootprint = require('./calculator');

test('calculates footprint for known values', () => {
    const result = calculateFootprint(100, 300, 'balanced');
    expect(result.monthlyFootprint).toBeCloseTo(193.1, 1);
    expect(result.annualFootprint).toBeCloseTo(2.3172, 2);
});
