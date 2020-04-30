//31392459391049
/*        
 *      "Host": "undefeated.com",
        "User-Agent": "Mozilla / 5.0(Windows NT 10.0; Win64; x64; rv: 75.0) Gecko / 20100101 Firefox / 75.0",
        "Accept": "application / json, text / javascript; q=0.01",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "multipart/form-data; boundary=---------------------------419095654318413407943172256844",
        "Content-Length": data.length,
        "Origin": "https://undefeated.com",
        "Connection": "keep-alive",
        "Referer": "https://undefeated.com/collections/all/products/adidas-x-human-made-superstar80s-black?variant=31392459391049",
        "Cookie": "__cfduid=d5705571c5cf74ec10c80f02d8cf304091588225947; _shopify_y=f59f474d-3484-4393-90a1-5593adae7526; cart_currency=USD; _orig_referrer=; secure_customer_sig=; _shopify_country=United+States; _y=f59f474d-3484-4393-90a1-5593adae7526; _landing_page=%2F; _s=c9a4b8f8-9B8F-46A9-326D-9C2BBEBE394D; _shopify_s=c9a4b8f8-9B8F-46A9-326D-9C2BBEBE394D; _shopify_fs=2020-04-30T05%3A52%3A27.057Z; _shopify_sa_t=2020-04-30T05%3A52%3A27.202Z; _shopify_sa_p=; _shopify_sa_p=; GlobalE_Data=%7B%22countryISO%22%3A%22US%22%2C%22currencyCode%22%3A%22USD%22%2C%22cultureCode%22%3A%22en-US%22%7D; GlobalE_CT_Data=%7B%22CUID%22%3A%22617355512.613808509.666%22%2C%22CHKCUID%22%3Anull%7D; _ga=GA1.2.455137957.1588225948; _gid=GA1.2.1970173567.1588225948; _gat=1; _fbp=fb.1.1588225947703.1836346000; shopify_pay_redirect=pending; lastRskxRun=1588225994735; rskxRunCookie=0; rCookie=6o6mqj6ufg7wfobkf4rylk9mcq0vj; _shopify_ga=_ga=2.245726276.1970173567.1588225948-455137957.1588225948; form_type=product&utf8=?&id=31392459391049"
        */

const https = require('https')

const data = JSON.stringify({
    form_type: 'product',
    utf8: '%E2%9C%93',
    id: '31392458735689'
})

const options = {
    hostname: 'undefeated.com',
    port: 443,
    path: '/collections/all/products/adidas-x-human-made-superstar80s-white?variant=31392458735689',
    method: 'POST',
    headers: {
        "Host": "undefeated.com",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "en-US, en; q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "multipart/formdata; boundary=---------------------------222265475713096110951387763365",
        "Content-Length": data.length,
        "Origin": "https://undefeated.com",
        "Referer": "https://undefeated.com/collections/all/products/adidas-x-human-made-superstar80s-white?variant=31392458735689",
        "Cookie": "__cfduid=d5705571c5cf74ec10c80f02d8cf304091588225947; _shopify_y=f59f474d-3484-4393-90a1-5593adae7526; cart_currency=USD; _orig_referrer=; secure_customer_sig=; _y=f59f474d-3484-4393-90a1-5593adae7526; _landing_page=%2F; _shopify_fs=2020-04-30T05%3A52%3A27.057Z; GlobalE_Data=%7B%22countryISO%22%3A%22US%22%2C%22currencyCode%22%3A%22USD%22%2C%22cultureCode%22%3A%22en-US%22%7D; GlobalE_CT_Data=%7B%22CUID%22%3A%22617355512.613808509.666%22%2C%22CHKCUID%22%3Anull%7D; _ga=GA1.2.455137957.1588225948; _gid=GA1.2.1970173567.1588225948; _fbp=fb.1.1588225947703.1836346000; lastRskxRun=1588262884653; rskxRunCookie=0; rCookie=6o6mqj6ufg7wfobkf4rylk9mcq0vj; cart=5efcfa36f275c2319f0475ad3bae8da1; cart_ts=1588263083; cart_sig=; _s=cbd535d6-929F-403E-17DF-E242B86F542E; _shopify_s=cbd535d6-929F-403E-17DF-E242B86F542E; _shopify_sa_t=2020-04-30T16%3A04%3A39.046Z; _shopify_sa_p=; _shopify_sa_p=; shopify_pay_redirect=pending; _shopify_s=cbd535d6-929F-403E-17DF-E242B86F542E; _shopify_ga=_ga=2.221609944.1970173567.1588225948-455137957.1588225948"
    }
}

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error)
})

req.write(data)
req.end()