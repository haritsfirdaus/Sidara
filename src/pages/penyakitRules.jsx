const penyakitRules = {
  "Stroke Hemoragik": {
    G01: 20,
    G02: 5,
    G03: 5,
    G04: 5,
    G05: 20,
    G06: 30,
    G07: 5,
    G08: 10,
  },
  "Stroke Iskemik": {
    G01: 10,
    G03: 10,
    G04: 10,
    G05: 20,
    G06: 30,
    G07: 20,
  },
  "Meningitis": {
    G09: 10,
    G10: 30,
    G11: 60,
  },
  "Epilepsi": {
    G12: 80,
    G13: 10,
    G14: 10,
  },
  "Bell’s Palsy": {
    G05: 60,
    G15: 10,
    G16: 5,
    G17: 15,
    G18: 5,
    G19: 5,
  },
  "Low back pain": {
    G20: 80,
    G21: 10,
    G22: 10,
  },
  "Vertigo": {
    G03: 10,
    G09: 10,
    G23: 20,
    G24: 50,
    G25: 10,
  }
};

export default penyakitRules;