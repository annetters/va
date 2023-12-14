/* Typeahead Input */

var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

var colors = ['Blue', 'Orange', 'Yellow', 'Red', 'Purple', 'Black', 'White', 'Green',
  'Tangerine', 'Aqua', 'Teal', 'Ruby', 'Gray', 'Emerald'
];

$('[data-typeahead-trigger]').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  source: substringMatcher(states),
},
{
  name: 'colors',
  source: substringMatcher(colors),
});

$('[data-typeahead-trigger]').keyup(function() {
  $('.tt-dataset').each(function(){
    var children = $(this).children().length,
        hasChildren;

    children === 0 ? hasChildren = false : hasChildren = true;

    if (hasChildren === false) {
      $(this).prev().addClass('hidden').removeClass('show');
    } else {
      $(this).prev().addClass('show').removeClass('hidden');
    }

  });
});

$('.tt-dataset').each(function(){

  var datasetName = this.classList[1].slice(11),
      groupNameTemplate = '<div class="vaux-typeahead-menu_group">' +
                          '<span class="vaux-typeahead-menu_group-label">' +
                          datasetName +
                          '</span></div>';



  $(this).before(groupNameTemplate);
});