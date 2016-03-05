var fs = require( 'fs' );
var path = fs.absolute( fs.workingDirectory + '/PhantomCSS-master/phantomcss.js' );
var phantomcss = require( path );

var baseURL = 'http://imaginary.local/';

var pagesToTest = {
  'home' : {
    url: '',
    selector: 'body'
  },
  'events_list' : {
    url: 'events'
  },
  'events_detail' : {
    url: 'event/rsme-imaginary-at-murcia-spain'
  },
  'programs_list' : {
    url: 'programs'
  },
  'programs_list_user': {
    url: 'programs?tid[]=170'
  },
  'programs_detail' : {
    url: 'program/future-of-glaciers-the-module'
  },
  'galleries_list' : {
    url: 'galleries'
  },
  'galleries_list_user' : {
    url: 'galleries?tid[]=170'
  },
  'galleries_detail' : {
    url: 'gallery/surfer-gallery-by-bianca-violet'
  },
  'handson_list' : {
    url: 'physical-exhibits'
  },
  'handson_list_user': {
    url: 'physical-exhibits?tid[]=170'
  },
  'handson_detail' : {
    url: 'hands-on/lawsons-minimal-surface-of-genus-2'
  },
  'films_list' : {
    url: 'films'
  },
  'films_list_user': {
    url: 'films?tid[]=170'
  },
  'films_detail' : {
    url: 'film/katzengold'
  },
  'texts_list' : {
    url: 'texts'
  },
  'snapshots_list' : {
    url: 'snapshots'
  },
  'snapshots_detail' : {
    url: 'snapshot/special-values-of-zeta-functions-and-areas-of-triangles'
  },
  'bgmaterials_list' : {
    url: 'background-materials'
  },
  'bgmaterials_detail' : {
    url: 'background-material/surfer-in-math-art-education-and-science-communication'
  },
  'exhibitions_list' : {
    url: 'exhibitions'
  },
  'exhibitions_detail' : {
    url: 'exhibition/imaginary-through-the-eyes-of-mathematics'
  },
  'newsletter_list': {
    url: 'newsletter/imaginary-newsletter'
  },
  'newsletter_detail': {
    url: 'content/imaginary-newsletter-6'
  },
  'newsletter_subscription': {
    url: 'newsletter/subscriptions'
  },
  'entdeckerbox': {
    url: 'imaginary-entdeckerbox'
  },
  'register': {
    url: 'member/register'
  },
  'about' : {
    url: 'about'
  },
  'users' : {
    url: 'users'
  },
  'projects_list' : {
    url: 'projects'
  },
  'projects_detail' : {
    url: 'content/imaginary-israel'
  },
  'participate' : {
    url: 'participate'
  },
  'contact' : {
    url: 'contact'
  },
  'privacy_policy' : {
    url: 'content/privacy-policy'
  },
  'legal_notice' : {
    url: 'content/impressum'
  },
  'terms_of_use' : {
    url: 'content/terms-of-use'
  },
  'french_home' : {
    url: 'fr'
  },
  'german_home' : {
    url: 'de'
  },
  'korean_home' : {
    url: 'ko'
  },
  'spanish_home' : {
    url: 'es'
  },
  'turkish_home' : {
    url: 'tr'
  },
};

casper.test.begin( 'Imaginary visual tests (' + baseURL + ')', function (test) {

  phantomcss.init({
    rebase: casper.cli.get( "rebase" ),
    casper: casper,
    libraryRoot: fs.absolute( fs.workingDirectory + '/PhantomCSS-master/' ),
    screenshotRoot: fs.absolute( fs.workingDirectory + '/screenshots' ),
    failedComparisonsRoot: fs.absolute( fs.workingDirectory + '/failures' ),
    addLabelToFailedImage: false,
    mismatchTolerance: 0.05
  });

  casper.on( 'remote.message', function ( msg ) {
    this.echo( msg );
  });

  casper.on( 'error', function ( err ) {
    this.die( "PhantomJS has errored: " + err );
  });

  casper.on( 'resource.error', function ( err ) {
    casper.log( 'Resource load error: ' + err, 'warning' );
  });

  casper.start();

  casper.viewport( 1024, 768 );

  for(var page in pagesToTest) {

    casper.thenOpen(baseURL + '/' + pagesToTest[page].url + '?testmode=1', (function(page){
      return function() {
        var options = pagesToTest[page];
        if(!options.hasOwnProperty('selector')) {
          options.selector = '#main';
        }

        console.log("Captured " + page);
        phantomcss.screenshot( options.selector, page );
      }
    })(page));
  }

  casper.then( function now_check_the_screenshots() {
    // compare screenshots
    phantomcss.compareAll();
  });

  casper.run( function () {
    console.log( '\nTHE END.' );
    // phantomcss.getExitStatus() // pass or fail?
    casper.test.done();
  });

});

phantomcss.turnOffAnimations();
