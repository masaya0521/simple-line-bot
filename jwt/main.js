let jose = require("node-jose");

let privateKey = `
{
    "alg": "RS256",
    "d": "Oj5zZYfVp0rRo-hk0FTIvkE9TUtIBiaHJU7MpdYfKzfIkfbdIQpqvrYqLndssqq_fX3GOKVaVJOzDpH7sQpIGArkXwZ2GAgdlrDGviM8Nu0tZPOUiD9U3ROrTCfwFRq5Rl70ko957yKg5UOXlv2nLL1PeNOG_dht9iwub8hXJLEk2a_FLfuXd6oLn49ZMoJyjfOjDmaqOaArtCSOBaGePQjrxq5vPcxiv-sWrd58AhGhYyJHPx295g_N-ASBZ2_ZMaNER6R4oRYCZ5Am228ouYPDH55QfGLPm8M_lKAh3UrQgK2sytCldtFZFzjKmwIdvct6akQ8Hk6sVcv6Zd__9Q",
    "dp": "D9gsm8PpSfWS8CdkpW4x-bHK1L9DZYKTdEf5NDhllUXKk3lPSX-re8vTdUj088VWExSBJbDpNAjIJD5PNzlMhvp9jRRbLTghjbz271nNhR-R1XqSGzi6GeWftrx-7pZy3RKiLA-bCBd_wG7N5UIXwRhWHGGECsXitzIJIq3yXUE",
    "dq": "g_jeRHHSBqCrYACdopHz3q7F83Fld_jCnwzQnsboF4-ayRfyog9uMSFrUipcca58K5PPbnmBlMneN3nOuVjikSmKQKOxfOClW7hDfzLpcw_Xssu__kQnMJdFcuIOifgk5ainrCfMiR9xvssSyW4ByyPssxraLYsCX0GGnvyi9Hk",
    "e": "AQAB",
    "ext": true,
    "key_ops": [
      "sign"
    ],
    "kty": "RSA",
    "n": "qTuiIxidNQ9WpZUU9zGVFeNKl1VQckxuy3G3-FvmNK9lqa2xQ_aIJ0fTbNthvVvw0RPL4vZhe4OrmyhbbDm85HWoEoJ0q4Uw6OEDq7GN5wjxDFHk5_cdSAmVXeez7EKyFEMQshnwmvQfcAt-5Dli6YErKLqK_mBHK4LRnmOsRebOJhlOjaR2ebZbdSHs59LFEAFQ1KddmYi-vm5jRKVMB9L5xq0H7JD9aDXufpHvk5viZ7NwORWtVG0eS42Lmr1XPiE1fTwCJ0wI7bqWoiHPCztDUA1GN7I-23eD9RdRwkIMt_mhE_UVfa6rxfEKAGX7fS5UL7ByoOIB9pSBbAXTbw",
    "p": "3wX2iiU58dyj8Zza4HxyzE2qJYDjO0Uchznsb9AndaD7Oye9S5lYmlqSGG9ogeKhc9Ndz7pw4HBlATwC8YNJCE2qNAI2oSvrNZTuM_HAmcq4I978zLEeDg9711MBfTeAoivx2kUCLsO68BXmtho6PLS9Zneqdm3T2m7dEfvg8h0",
    "q": "wkGPPojJy1khygWNWJy0f5zbDbn_Lg51Sv72kXEf78LWK0ytMVgn7d_rUlhyDSwTj5TjhIBtATFZisxPr6PMFJWmaLmRGliO8JmgsJNtHiithLM5ElqZzCbbVEmySX8nbixfVbavBsL0YB3oVkvSm13zBeh6xSE7ml4ZWQBPZfs",
    "qi": "FpSdtaETeRlmi_xY-svsuJbvAPFcOxyOdaqhE-d7Nj7GAJ_qy1hQNaUsCapdONQoZ-yMS5L5YdcH1lfGrXhJzydkMukMfRh2RGLdr0XZJWA5kesVtg71Q6tyioV7z78WgTNEKAkQG6qBOHs9wIcm-Jtg9lMn2ETY9ByEjIjbKVc"
  }
`;

let header = {
  alg: "RS256",
  typ: "JWT",
  kid: "46b46bbd-dd0d-4842-98a8-7e595682d49c",
};

let payload = {
  iss: "1657450777",
  sub: "1657450777",
  aud: "https://api.line.me/",
  exp: Math.floor(new Date().getTime() / 1000) + 60 * 30,
  token_exp: 60 * 60 * 24 * 30,
};

jose.JWS.createSign(
  { format: "compact", fields: header },
  JSON.parse(privateKey)
)
  .update(JSON.stringify(payload))
  .final()
  .then((result) => {
    console.log(result);
  });
