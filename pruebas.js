const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.correosaduanas.es/webauth/correosAduanas/public/seguimientoEnvio';

const data = new URLSearchParams();
data.append('_csrf', '534af80d-ff18-44f3-bcf5-1dd2bbe655fe');
data.append('envio.numEnvio', 'CJ660698197US');

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Cookie': 'UISESSION=675C5661DC9011957853392AD7F42B9F; msg_cookie_ADT=true; cookie_ADT_tecnica=true; cookie_ADT_analitica=true; cookie_ADT_publicidad=true; _ga=GA1.2.1382691590.1708985007; _gid=GA1.2.1119940136.1708985007; _gat=1; _ga_QRFLKRM2PS=GS1.2.1708985008.1.1.1708989972.0.0.0',
  'Cache-Control': 'max-age=0',
  'Sec-Ch-Ua': '"Chromium";v="121", "Not A(Brand";v="99"',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Ch-Ua-Platform': '"Windows"',
  'Upgrade-Insecure-Requests': '1',
  'Origin': 'https://www.correosaduanas.es',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.160 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-User': '?1',
  'Sec-Fetch-Dest': 'document',
  'Referer': 'https://www.correosaduanas.es/webauth/correosAduanas/',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'es-ES,es;q=0.9',
  'Priority': 'u=0, i'
};


axios.post(url, data.toString(), { headers })
  .then(response => {
    
    //console.log('Respuesta del servidor:', response.data);
    //console.log(typeof (response.data));
    const retorno = response.data;

    const $ = cheerio.load(retorno);
    const contenido = $('.h2').children('span').eq(1).text();
    console.log(contenido);
  })
  .catch(error => {
    console.error('Error al realizar la solicitud:', error);
  });
  