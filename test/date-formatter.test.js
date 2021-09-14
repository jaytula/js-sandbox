/**
 * 
 * @param {number} uts 
 * @param {string} loc 
 */
 function getDate(uts, loc){
  const d = new Date(uts * 1000);

  const month = d.getMonth() + 1
  const day = d.getDate()
  const year = d.getFullYear();
  
  // dd-mm-yyyy
  if(['ar-TN', 'ar-DZ', 'mr-IN', 'en-IN', 'hi-IN', 'tzm-Latn-DZ', 'kok-IN', 'es-CL', 'as-IN', 'sa-IN', 'ta-IN', 'ar-mA', 'arn-CL', 'da-DK', 'fo-FO', 'pt-PT', 'kl-GL'].includes(loc)) {
    return `${day.toString().padStart(2, "0")}-${month.toString().padStart(2, "0")}-${year}`;
  }
  
  // dd/mm/yyyy
  if(['quz-BO', 'fr-LU', 'es-CR', 'vi-VN', 'ar-AE', 'ar-YE', 'es-HN', 'ar-EG', 'he-IL', 'ar-JO', 'es-PE', 'mt-mT', 'es-NI', 'en-Jm', 'it-IT', 'en-IE', 'ar-Om', 'es-ES', 'en-BZ', 'ms-mY', 'es-GT', 'en-CA', 'ar-KW', 'br-FR', 'syr-SY', 'gsw-FR', 'en-TT', 'ar-QA', 'es-EC', 'ur-PK', 'qut-GT', 'rm-CH', 'fr-mC', 'es-VE', 'ar-LB', 'lo-LA', 'es-CO', 'es-mX', 'es-BO', 'es-AR', 'ar-IQ', 'es-DO', 'gd-GB', 'es-PY', 'wo-SN', 'es-UY', 'mi-NZ', 'es-PR', 'oc-FR', 'cy-GB', 'id-ID', 'ca-ES', 'ga-IE', 'es-SV', 'fr-FR', 'co-FR', 'ar-SY', 'ms-BN', 'ga-IE', 'co-FR', 'mi-NZ', 'ar-LY', 'ar-BH', 'lb-LU'].includes(loc)) {
    return `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`;
  }
  
  // mm/dd/yyyy
  if(['en-029', 'fa-IR', 'es-PA' ].includes(loc)) {
    return `${month.toString().padStart(2, "0")}/${day.toString().padStart(2, "0")}/${year}`;
  }
  
  // yyyy/mm/dd
  if(['af-ZA', 'xh-ZA', 'en-ZA', 'ja-JP', 'eu-ES', 'tn-ZA', 'nso-ZA',  ].includes(loc)) {
    return `${year}/${month.toString().padStart(2, "0")}/${day.toString().padStart(2, "0")}`;
  }
  
  // dd.mm.yyyy
  if(['ru-RU', 'ro-RO', 'uz-Cyrl-UZ', 'tt-RU', 'de-LI', 'kk-KZ', 'az-Latn-AZ', 'nb-NO', 'nn-NO', 'fr-CH', 'sma-NO', 'smj-NO', 'de-LU', 'it-CH', 'be-BY', 'hy-Am', 'mk-mK', 'az-Cyrl-AZ', 'se-NO', 'uk-UA', 'de-AT', 'ka-GE', 'tr-TR', 'de-CH'].includes(loc)) {
    return `${day.toString().padStart(2, "0")}.${month.toString().padStart(2, "0")}.${year}`;
  }
  
  // d.mm.yyyy
  if(['et-EE'].includes(loc)) {
    return `${day}.${month.toString().padStart(2, "0")}.${year}`;
  }
  
  // mm.dd.yyyy
    if(['sah-RU', ].includes(loc)) {
    return `${month.toString().padStart(2, "0")}.${day.toString().padStart(2, "0")}.${year}`;
  }
  
  // dd.mm.yy
  if(['tg-Cyrl-TG', 'ba-RU', 'tk-Tm', 'ky-KG'].includes(loc)) {
    return `${day.toString().padStart(2, "0")}.${month.toString().padStart(2, "0")}.${year.toString().slice(2)}`;
  }
  
  // dd/mm/yy
  if(['prs-AF', 'gl-ES', 'ps-AF', 'ar-SA', 'dv-mV'].includes(loc)) {
    return `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year.toString().slice(2)}`;
  }
  
  // dd-mm-yy
  if(['te-IN', 'bn-IN', 'bn-BD', 'kn-IN', 'ml-IN', 'gu-IN', 'or-IN', 'pa-IN'].includes(loc)) {
    return `${day.toString().padStart(2, "0")}-${month.toString().padStart(2, "0")}-${year.toString().slice(2)}`;
  }
  
  // d/mm/yyyy
  if(['fr-BE', 'iu-Latn-CA', 'en-NZ', 'en-AU'].includes(loc)) {
    return `${day}/${month.toString().padStart(2, "0")}/${year}`;
  }
  
  // d-m-yyyy
  if(['fy-NL', 'nl-NL', ].includes(loc)) {
    return `${day}-${month}-${year}`;
  }
  
  // d.m.yyyy
  if(['sr-Latn-BA', 'sr-Latn-CS', 'sv-FI', 'is-IS', 'fi-FI', 'sr-Cyrl-CS', 'sms-FI', 'bs-Cyrl-BA', 'smn-FI', 'hr-HR', 'sr-Cyrl-mE', 'sk-SK', 'cs-CZ', 'se-FI', 'sr-Cyrl-RS', 'bs-Latn-BA', 'sr-Cyrl-RS', 'sr-Latn-RS', 'sl-SI',  ].includes(loc)) {
    return `${day}.${month}.${year}`;
  }
  
  // yyyy-mm-dd 
  if(['sq-AL', 'km-KH', 'fr-CA', 'ko-KR', 'si-LK', 'sv-SE', 'pl-PL', 'se-SE'  ].includes(loc)) {
    return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
  }
  
  // yyyy.mm.dd.
  if(['lv-LV'].includes(loc)) {
    return `${year}.${month.toString().padStart(2, "0")}.${day.toString().padStart(2, "0")}.`;
  }
  
  // dd.m.yyyy
  if(['bg-BG'].includes(loc)) {
    return `${day.toString().padStart(2, "0")}.${month}.${year}`;
  }
  
  // yyyy/m/d
  if(['mn-mong-CN', 'zh-CN', 'zh-TW', 'ii-CN', 'bo-CN'].includes(loc)) {
    return `${year}/${month}/${day}`
  }
  
  // d/m/yyyy
  if(['ha-Latn-NG', 'th-TH', 'pt-BR', 'zh-mO', 'el-GR', 'zh-HK', 'zh-SG', 'en-mY', 'ig-NG', 'am-ET',  'iu-Cans-CA'].includes(loc)) {
    return `${day}/${month}/${year}`
  }
  
  // d/mm/yyyy
  if(['nl-BE', 'en-AU', ].includes(loc)) {
    return `${day}/${month.toString().padStart(2, '0')}/${year}`
  }
  
  // m/d/yyyy
  if(['en-US', 'ne-NP', 'rw-RW', 'en-PH', 'en-ZW', 'sw-KE', 'moh-CA', 'fil-PH'].includes(loc)) {
    return `${month}/${day}/${year}`
  }
  
  // yy.mm.dd
  if(['mn-mN'].includes(loc)) {
    return `${year.toString().slice(2)}.${month.toString().padStart(2, "0")}.${day.toString().padStart(2, "0")}`;
  }
  
  // yyyy.mm.dd
  if(['lt-LT'].includes(loc)) {
    return `${year}.${month.toString().padStart(2, "0")}.${day.toString().padStart(2, "0")}`;
  }
  
  return {
    "en-GB": `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`,
    "yo-NG": `${day}/${month}/${year}`,

    
    "de-DE": `${day.toString().padStart(2, "0")}.${month.toString().padStart(2, "0")}.${year}`,
    "hu-HU": `${year}. ${month.toString().padStart(2, "0")}. ${day.toString().padStart(2, "0")}.`,
    "zh-TW": `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`,
  }[loc]
}
const Test = require('@codewars/test-compat')

describe('Basic tests',() =>{

  it ("en-GB: dd/mm/yyyy", function(){
  Test.assertEquals(getDate(1481020142, 'en-GB'), '06/12/2016');
  });
  it ("en-US: m/d/yyyy", function(){
  Test.assertEquals(getDate(1481020142, 'en-US'), '12/6/2016');
  });
  it ("de-DE: dd.mm.yyyy", function(){
  Test.assertEquals(getDate(1481020142, 'de-DE'), '06.12.2016');
  });
  
  });