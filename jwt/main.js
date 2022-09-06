let jose = require("node-jose");

let privateKey = `
{
    "p": "4h8yEw4q9VkzhXMgXZsIZVkEuZ49EmtWYk9zs0hPTa24ejjRMA6KTYh_va0GlaChO9t0MVQVuduznt-OFZyRAinr4svU4MKD2A3gTHJJCxs0xICva8rkHXqxfPwXngpb5L_xFURbXcSTzMcKckWuOpyPznAgY4XsZxw0t7ewj9E",
    "kty": "RSA",
    "q": "pVhBdRN5K3MEiZzU4__TsrtSBJDD_stu60m73iIvsHIrvK3Dmfl-J1zhsyOvi3NH9mVXpUimBwP8nTe-BlVM71G7_EotFHeKH1zTmBlx6AOngmrc40W2Hd__OZW0NfC_xOTvI_Ea2BNGoGtcrIGVFLTivJ4y9wAVOKA058zJ0ls",
    "d": "ObzE_-TROJazDm-ry-8TKRBMGzwcwTK6lMFSk7n-Xp6h7cDauSdRRYnZivC1lh5plVG3I9aUmPTRbVk7nrPqOlp4WWKQ27lyLd5IogbArpXgnBSkp9Zy0lWzvOsI3gHNnYuehyksHB53FIK93t838JfDQoXUUzalNoNwAGfkTNZxT4GIXGMGzNck2Z_urOATMf8-wdad-u4a5IB2KfHugwH2kw-Zig7fbdcN4_DeKWpuigdesa48Yj_hRJRws-mVFp-xHlGJehumnM_v8FLD85ap8L1hwvBqdJQeurcLXYzZbtdp9a5GpJI7gzOTMoEdxIKlEIIbaOKv4rkkztdhoQ",
    "e": "AQAB",
    "use": "sig",
    "kid": "536e453c-aa93-4449-8e90-add2608783c6",
    "qi": "XQ2puK9LT5yimyJXlXb4nHEBzPGe3sYbaZW_gMK4iHuM8cseImwLNP8ZIeGaNx5X_hZ6ZOzkjtYJjY85fvaWa2UDGdGlEw3ZO-Nk0Qu_exBrqZgZAsua75TjpJRw01Yd1TNBx5MYuvhltJLsjW-uSjcE-rZoO74FEe9pYYeQjI4",
    "dp": "Qq_wlK4Y_ULRbwoFAZY3Y6xdOGDyofwF_fhwpu8sdDxHq8QV7ZZcM4GOKuJcjsRQyNZv7hxeS_H_h1tnC_igy4KRjtGOdrrnJ1DwVZte72eWqF1LXv73R7pnnfS7AmELuOriruL6Dy1qaXpKGmlyeNazkq5-3tsgXUh0Q7po2AE",
    "alg": "RS256",
    "dq": "Wj1ovDT8lLIZb-Ggby9YotuJT-SSk6UDzHZZikquLGajaD6N2qNILsOKivKXBEzOobN9uj-EHaAXZtbdZyd27cZ2CqORJvJ299b5xLFecXpNGeio1YFee7-c1BjYWfgjMZqgycT1GairizINSjkO3FY8ySSuPBBXhKgrN7eVDrE",
    "n": "kgwP0NPaoAwhSh9iLlRaT7FSRbNsl6T5-j-bB3xAT1UbsxOJ9v06S3_54bpYlEAkjlrO-i1vmSzfSVnqFXnjWThWRvPmBDth3Ka7hQm9UXjiAvTzYxXGFjyhALqa_-DQCtdrqIhi8E4hAuSu--kGgnFKg3G-21KJuqnVzsXrClGkxbmVufx0MJjJxr1YGfkTMG8i0dovS9tnkioDAkt1knupiYk5ir_WiNy4T-70T5s3ktC5_4Uz10hS-rWeUxiihzG8G7ceg84-Kt5jKP_AgUnel-ksRyfgSJCYC9nHyz913a3ALj3Dzt7TBaxwAjlxESrdNz5RE9DNDZfPmNWRSw"
  }
`;

let header = {
  alg: "RS256",
  typ: "JWT",
  kid: "536e453c-aa93-4449-8e90-add2608783c6",
};

let payload = {
  iss: "1234567890",
  sub: "1234567890",
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
