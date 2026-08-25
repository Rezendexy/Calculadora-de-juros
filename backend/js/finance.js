(function (global) {
  "use strict";

  // FV = PMT * [((1+i)^n - 1) / i]
  function futureValue(pmt, i, n) {
    if (i === 0) return pmt * n;
    return pmt * ((Math.pow(1 + i, n) - 1) / i);
  }
  // PMT = FV * i / ((1+i)^n - 1)
  function payment(fv, i, n) {
    if (i === 0) return fv / n;
    return fv * i / (Math.pow(1 + i, n) - 1);
  }
  // Saque A = P * i
  function incomePerpetual(p, i) { return p * i; }
  // Saque B = P * [i(1+i)^n / ((1+i)^n - 1)]
  function incomeDepleting(p, i, n) {
    if (i === 0) return p / n;
    var f = Math.pow(1 + i, n);
    return p * (i * f) / (f - 1);
  }
  // Série de saldos da acumulação: saldo[m] após m meses
  function accumulationSeries(pmt, i, n) {
    var out = new Array(n + 1), bal = 0;
    out[0] = { total: 0, base: 0 };
    for (var m = 1; m <= n; m++) {
      bal = bal * (1 + i) + pmt;
      out[m] = { total: bal, base: pmt * m };
    }
    return out;
  }
  // Série de saldos da fase de saque
  function depletionSeries(p, i, n, withdraw) {
    var out = new Array(n + 1), bal = p;
    out[0] = bal;
    for (var m = 1; m <= n; m++) {
      bal = bal * (1 + i) - withdraw;
      if (bal < 0) bal = 0;
      out[m] = bal;
    }
    return out;
  }

  function months(years) { return Math.max(1, Math.round(years * 12)); }

  global.Finance = {
    futureValue: futureValue,
    payment: payment,
    incomePerpetual: incomePerpetual,
    incomeDepleting: incomeDepleting,
    accumulationSeries: accumulationSeries,
    depletionSeries: depletionSeries,
    months: months
  };
})(window);
