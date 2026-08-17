function calculateInpsContribution(ral){
    const INPS_CONTRIBUTION_RATE = 0.0919;
    return ral * INPS_CONTRIBUTION_RATE;
}

console.log(calculateInpsContribution(30000))

function calculateIRPEF(taxable) {
  const TIER_1 = 28000;
  const TIER_2 = 50000;
  const RATE_1 = 0.23;
  const RATE_2 = 0.33;
  const RATE_3 = 0.43;

  let tax = 0;

  if (taxable <= TIER_1) {
    tax = taxable * RATE_1;
  } else if (taxable <= TIER_2) {
    tax = TIER_1 * RATE_1 +
          (taxable - TIER_1) * RATE_2;
  } else {
    tax = TIER_1 * RATE_1 +
          (TIER_2 - TIER_1) * RATE_2 +
          (taxable - TIER_2) * RATE_3;
  }

  return tax;
}

console.log(calculateIRPEF(27243))

function calculateEmployeeDeduction(taxable) {
  const MIN_DEDUCTION = 690;

  if (taxable <= 15000) {
    return 1955;
  }

  if (taxable <= 28000) {
    const deduction = 1910 + 1190 * ((28000 - taxable) / 13000);
    return Math.max(deduction, MIN_DEDUCTION);
  }

  if (taxable <= 50000) {
    const deduction = 1910 * ((50000 - taxable) / 22000);
    return Math.max(deduction, 0);
  }

  return 0;
}

console.log(calculateEmployeeDeduction(27243));

function calculateRegionalTax(taxable){
  const BRACKETS = [
    { limit: 15000, rate: 0.0123 },
    { limit: 28000, rate: 0.0158 },
    { limit: 55000, rate: 0.0172 },
    { limit: Infinity, rate: 0.0173 }
  ];
  let tax = 0;
  let remaining = taxable;
  let previousLimit = 0;
  for (const bracket of BRACKETS){
    if(remaining <= 0) break;
    const bracketSize = bracket.limit - previousLimit;
    const amountInBracket = Math.min(remaining, bracketSize);
    tax += amountInBracket * bracket.rate;
    remaining -= amountInBracket;
    previousLimit = bracket.limit;
  }
  return tax;
}

console.log(calculateRegionalTax(27243));

function calculateMunicipalTax(taxable) {
  const EXEMPTION_THRESHOLD = 23000;
  const MILAN_RATE = 0.008;

  if (taxable <= EXEMPTION_THRESHOLD) {
    return 0;
  }
  return taxable * MILAN_RATE;
}

console.log(calculateMunicipalTax(27243));