/**
 * mock_data.js
 */
const json = `
[{"id":1,"first_name":"Vickie","last_name":"Cerith","email":"vcerith0@seesaa.net","gender":"Female","salary":1807},
{"id":2,"first_name":"Conrade","last_name":"Scanes","email":"cscanes1@hexun.com","gender":"Male","salary":1923},
{"id":3,"first_name":"Rosemaria","last_name":"Frenzl","email":"rfrenzl2@alexa.com","gender":"Female","salary":1426},
{"id":4,"first_name":"Adelice","last_name":"Snell","email":"asnell3@cisco.com","gender":"Female","salary":4259},
{"id":5,"first_name":"Freeman","last_name":"Audiss","email":"faudiss4@cdc.gov","gender":"Male","salary":1911},
{"id":6,"first_name":"Munmro","last_name":"Pollie","email":"mpollie5@un.org","gender":"Male","salary":4705},
{"id":7,"first_name":"Dianna","last_name":"Jellico","email":"djellico6@furl.net","gender":"Female","salary":4442},
{"id":8,"first_name":"Shandie","last_name":"McPhelim","email":"smcphelim7@businessweek.com","gender":"Female","salary":1397},
{"id":9,"first_name":"Zak","last_name":"Orsay","email":"zorsay8@amazon.com","gender":"Male","salary":4354},
{"id":10,"first_name":"Merna","last_name":"Sara","email":"msara9@ocn.ne.jp","gender":"Female","salary":3291},
{"id":11,"first_name":"Consuela","last_name":"Sellars","email":"csellarsa@wiley.com","gender":"Female","salary":3036},
{"id":12,"first_name":"Trev","last_name":"Emanueli","email":"temanuelib@bandcamp.com","gender":"Male","salary":4471},
{"id":13,"first_name":"Janey","last_name":"Worswick","email":"jworswickc@tripod.com","gender":"Female","salary":4646},
{"id":14,"first_name":"Fran","last_name":"Masselin","email":"fmasselind@techcrunch.com","gender":"Male","salary":1704},
{"id":15,"first_name":"Holly-anne","last_name":"Vaadeland","email":"hvaadelande@rambler.ru","gender":"Female","salary":3373},
{"id":16,"first_name":"Morton","last_name":"Dingle","email":"mdinglef@edublogs.org","gender":"Male","salary":1844},
{"id":17,"first_name":"Cynthy","last_name":"Toyne","email":"ctoyneg@constantcontact.com","gender":"Female","salary":2809},
{"id":18,"first_name":"Bent","last_name":"Chapelle","email":"bchapelleh@fotki.com","gender":"Male","salary":3740},
{"id":19,"first_name":"Sasha","last_name":"Safe","email":"ssafei@time.com","gender":"Male","salary":2711},
{"id":20,"first_name":"Meryl","last_name":"Braz","email":"mbrazj@phpbb.com","gender":"Female","salary":3993}]
`;

const members =JSON.parse(json); //json을 문자열 => 객체타입으로 변환.
console.log(members);