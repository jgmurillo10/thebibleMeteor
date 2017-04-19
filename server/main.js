import { Meteor } from 'meteor/meteor';
import { Programs } from '../imports/api/programs';

Meteor.startup(() => {
  // code to run on server at startup
  //BrowserPolicy.content.disallowInlineScripts();
  //BrowserPolicy.content.allowInlineStyles();
  if(BrowserPolicy){
BrowserPolicy.content.allowOriginForAll('*.bootstrapcdn.com');
BrowserPolicy.content.allowOriginForAll('*.googleapis.com');
BrowserPolicy.content.allowOriginForAll('*.rawgit.com');
BrowserPolicy.content.allowOriginForAll('*.jquery.com');
BrowserPolicy.content.allowOriginForAll('*.hotjar.com');
BrowserPolicy.content.allowOriginForAll('*.gstatic.com');
BrowserPolicy.content.allowDataUrlForAll();
  }

});
