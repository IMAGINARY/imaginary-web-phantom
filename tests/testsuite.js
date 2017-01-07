var config = require('./config');

var testcase_filter = casper.cli.options['case'];

var fs = require( 'fs' );
var path = fs.absolute( fs.workingDirectory + '/PhantomCSS-master/phantomcss.js' );
var phantomcss = require( path );

var pagesToTest_frontEnd = {
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
    url: 'fr',
    selector: 'body'
  },
  'german_home' : {
    url: 'de',
    selector: 'body'
  },
  'korean_home' : {
    url: 'ko',
    selector: 'body'
  },
  'spanish_home' : {
    url: 'es',
    selector: 'body'
  },
  'turkish_home' : {
    url: 'tr',
    selector: 'body'
  },
};

var pagesToTest_backEnd = {
  'bgmaterial_add': {
    url: 'node/add/background-material'
  },
  'bgmaterial_edit': {
    url: 'node/833/edit'
  },
  'event_add': {
    url: 'node/add/event'
  },
  'event_edit': {
    url: 'node/942/edit'
  },
  'exhibition_add': {
    url: 'node/add/exhbition'
  },
  'exhibition_edit': {
    url: 'node/132/edit'
  },
  'film_add': {
    url: 'node/add/film'
  },
  'film_edit': {
    url: 'node/565/edit'
  },
  'gallery_add': {
    url: 'node/add/gallery'
  },
  'gallery_edit': {
    url: 'node/181/edit'
  },
  'news_add': {
    url: 'node/add/news'
  },
  'news_edit': {
    url: 'node/953/edit'
  },
  'page_add': {
    url: 'node/add/page'
  },
  'page_edit': {
    url: 'node/17/edit'
  },
  'handson_add': {
    url: 'node/add/physical-ex'
  },
  'handson_edit': {
    url: 'node/453/edit'
  },
  'program_add': {
    url: 'node/add/program'
  },
  'program_edit': {
    url: 'node/828/edit'
  },
  'project_add': {
    url: 'node/add/project'
  },
  'project_edit': {
    url: 'node/857/edit'
  },
  'snapshot_add': {
    url: 'node/add/snapshot'
  },
  'snapshot_edit': {
    url: 'node/940/edit'
  }
};

var onLoad = function() {
  // Hide captcha
  jQuery('#recaptcha_widget_div').hide();
};

var onLoadBackEnd = function() {
  // Open all tabs for screenshot
  jQuery('.node-form fieldset.vertical-tabs-pane').show();
  jQuery('.node-form fieldset.horizontal-tabs-pane').removeClass('horizontal-tab-hidden');
};

casper.test.begin( 'Imaginary visual tests (' + config.baseURL + ')', function (test) {

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

  // Test anonymous pages
  for(var page in pagesToTest_frontEnd) {

    if (testcase_filter !== undefined && testcase_filter !== page) {
      continue;
    }

    casper.thenOpen(config.baseURL + '/' + pagesToTest_frontEnd[page].url + '?testmode=1', (function(page){
      return function() {
        var options = pagesToTest_frontEnd[page];
        if(!options.hasOwnProperty('selector')) {
          options.selector = '#main';
        }

        casper.evaluate(onLoad);
        console.log("Captured " + page);
        phantomcss.screenshot( options.selector, page );
      }
    })(page));
  }

  // Log in
  casper.thenOpen(config.baseURL + '/' + config.loginRoute + '?testmode=1', function then() {
    this.fill('form#user-login', {
      'name': config.testUserEmail,
      'pass': config.testUserPass
    }, true);

  });

  casper.thenOpen(config.baseURL + '/' + 'dashboard' + '?testmode=1', function(){
    this.test.assertTextExists('Welcome to your IMAGINARY content page', 'Logged In');
  });

  // Test back end pages
  for(var page in pagesToTest_backEnd) {

    if (testcase_filter !== undefined && testcase_filter !== page) {
      continue;
    }

    casper.thenOpen(config.baseURL + '/' + pagesToTest_backEnd[page].url + '?testmode=1', (function(page){
      return function() {
        var options = pagesToTest_backEnd[page];
        if(!options.hasOwnProperty('selector')) {
          options.selector = '#main';
        }

        casper.evaluate(onLoad);
        casper.evaluate(onLoadBackEnd);

        console.log("Captured " + page);
        phantomcss.screenshot( options.selector, page );
      }
    })(page));
  }

  // Log out
  casper.thenOpen(config.baseURL + '/' + config.logoutRoute + '?testmode=1', function() {

  });

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
