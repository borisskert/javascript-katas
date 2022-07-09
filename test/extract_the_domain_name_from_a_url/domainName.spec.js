const { assert } = require('chai')
const domainName = require('../../src/extract_the_domain_name_from_a_url/domainName')

describe('Sample test', () => {
  it('Should pass sample tests', () => {
    assert.equal(domainName('http://google.com'), 'google')
    assert.equal(domainName('http://google.co.jp'), 'google')
    assert.equal(domainName('www.xakep.ru'), 'xakep')
    assert.equal(domainName('https://youtube.com'), 'youtube')
    assert.equal(domainName('https://123.net'), '123')
    assert.equal(domainName('https://hyphen-site.org'), 'hyphen-site')
    assert.equal(domainName('http://www.codewars.com/kata/'), 'codewars')
    assert.equal(domainName('https://www.xirotpv6.info/index.php'), 'xirotpv6')
    assert.equal(domainName('https://www.3rf3zb5q7q2m7d513v73gk.co.za/'), '3rf3zb5q7q2m7d513v73gk')
  })
})
