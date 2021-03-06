var chai = require('chai');

chai.should();
chai.use(require('casper-chai'));


describe('Google searching', function() {
  before(function() {
    casper.start('http://www.google.fr/');
  });

  it('should retrieve 10 or more results', function() {
    casper.then(function() {
      'Google'.should.not.matchTitle
      'form[action="/search"]'.should.be.inDOM.and.be.visible
      this.fill('form[action="/search"]', {
        q: 'casperjs'
      }, true)
    })

    casper.waitForUrl(/q=casperjs/, function() {
      (/casperjs/).should.matchTitle
    })
  })
})
