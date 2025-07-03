function calculateFootprint(miles, electricity, diet) {
    const milesNum = Math.max(0, parseFloat(miles) || 0);
    const electricityNum = Math.max(0, parseFloat(electricity) || 0);
    const dietImpact = { meat: 3, balanced: 2, vegetarian: 1.5, vegan: 1 }[diet] || 0;

    const monthlyFootprint = milesNum * 0.411 + electricityNum * 0.5 + dietImpact;
    const annualFootprint = (monthlyFootprint * 12) / 1000; // tonnes per year

    return {
        monthlyFootprint,
        annualFootprint
    };
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = calculateFootprint;
} else {
    window.calculateFootprint = calculateFootprint;
}
