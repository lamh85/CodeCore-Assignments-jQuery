// Go to http://vancouver.craigslist.ca


// 1.  Write some jQuery to get the HREF attribute of the first link on the page
// 2.  Write some jQuery to get the number of links on this page
// 3.  Write some jQuery to change the text for all links to be [Your Name]
// 4.  Write some jQuery to make Craigslist's logo link to http://www.google.com

$('a').attr('href');

$('a').length;

$('a').text("Hon Lam");

$('#logo a:first').attr('href','http://www.google.com');