
/* This code goes ABOVE the main HTML Comment Box code!
 replace the text in the single quotes below to customize labels.*/

hcb_user = {
    /* L10N */
    comments_header : 'Questions to the Pastor',
    name_label : 'Name',
    content_label: 'Enter your comment or question here',
    submit : 'Submit',
    logout_link : '<img title="log out" src="//www.htmlcommentbox.com/static/images/door_out.png" alt="[logout]" class="hcb-icon"/>',
    admin_link : '<img src="//www.htmlcommentbox.com/static/images/door_in.png" alt="[login]" class="hcb-icon"/>',
    no_comments_msg: 'No one has commented yet. Be the first!',
    add:'Add your comment',
    again: 'Post another comment',
  /*  rss:'<img src="//www.htmlcommentbox.com/static/images/feed.png" class="hcb-icon" alt="rss"/> ',*/
    said:'said:',
    prev_page:'<img src="//www.htmlcommentbox.com/static/images/arrow_left.png" class="hcb-icon" title="previous page" alt="[prev]"/>',
    next_page:'<img src="//www.htmlcommentbox.com/static/images/arrow_right.png" class="hcb-icon" title="next page" alt="[next]"/>',
    showing:'Showing',
    to:'to',
    website_label:'website (optional)',
    email_label:'email',
    anonymous:'Anonymous',
    mod_label:'(mod)',
    subscribe:'email me replies',
    are_you_sure:'Do you want to flag this comment as inappropriate?',

    reply:'<img src="//www.htmlcommentbox.com/static/images/reply.png"/> reply',
    flag:'<img src="//www.htmlcommentbox.com/static/images/flag.png"/> flag',
    like:'<img src="//www.htmlcommentbox.com/static/images/like.png"/> like',

    /* dates */
    days_ago:'days ago',
    hours_ago:'hours ago',
    minutes_ago:'minutes ago',
    within_the_last_minute:'within the last minute',

    msg_thankyou:'Thank you for commenting!',
    msg_approval:'(this comment is not published until approved)',
    msg_approval_required:'Thank you for commenting! Your comment will appear once approved by a moderator.',

    err_bad_html:'Your comment contained bad html.',
    err_bad_email:'Please enter a valid email address.',
    err_too_frequent:'You must wait a few seconds between posting comments.',
    err_comment_empty:'Your comment was not posted because it was empty!',
    err_denied:'Your comment was not accepted.',

    /* SETTINGS */
    MAX_CHARS: 8192,
    PAGE:'', /* ID of the webpage to show comments for. defaults to the webpage the user is currently visiting. */
    ON_COMMENT: function(){}, /* Function to call after commenting. */
    RELATIVE_DATES:true /* show dates in the form "X hours ago." etc. */
};

 if(!window.hcb_user){
   hcb_user={comments_header:'Questions to the Pastor'};
 } (function(){
   var s=document.createElement("script"),
   l=hcb_user.PAGE || (""+window.location).replace(/'/g,"%27"), h="//www.htmlcommentbox.com";
   s.setAttribute("type","text/javascript");
   s.setAttribute("src", h+"/jread?page="+encodeURIComponent(l).replace("+","%2B")+"&mod=%241%24wq1rdBcg%24%2Fr6ay7Hxoi2hz.AxeotCS1"+"&opts=16862&num=10&ts=1532583350766");if (typeof s!="undefined")
 document.getElementsByTagName("head")[0].appendChild(s);})();
