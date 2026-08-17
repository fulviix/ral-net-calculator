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
