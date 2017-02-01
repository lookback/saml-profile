const parseString = require('xml2js').parseString;
const fs = require('fs');

const samlAssertionFilePath = process.argv[2]
const xmlRequest = fs.readFileSync(samlAssertionFilePath).toString('utf8');
parseString(xmlRequest, function(err, res) {
  if (err) {
    console.error(err)
  } else {
    const profile = res['samlp:Response']['saml:Assertion'][0]['saml:AttributeStatement'][0]['saml:Attribute']
    console.log(profile)
  }
})

