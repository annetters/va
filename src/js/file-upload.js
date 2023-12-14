/* File Upload */

var vauxFileUpload = {

  init: function(uploadObject) {
    
    this.config = {
      fileStore: []
    };

    this.bindUIFunctions(uploadObject, this.config.fileStore);
  },

  bindUIFunctions: function(uploadObject, fileStore) {
    // trigger upload on space & enter (= standard button functionality)
    $(uploadObject).on('keydown', 'label span[role=button]', function(event) {
      if(event.keyCode === 32 || event.keyCode === 13){
        event.preventDefault();
        $('#fileUpload').click();
      }
    });

    $(uploadObject).on('change', 'input', function(event){
      // Add to list and remove progress bar from view (show view/remove buttons)
      vauxFileUpload.uploadFiles(event.target, fileStore);
    });

    // File Actions
    $(uploadObject).on('click', '.file-actions', function(event) {
      if ($(event.target).is("button")) {
        vauxFileUpload.removeFile(event, fileStore);
      }
    });

    
  },

  removeFile: function(event, fileStore) {
    var file = $(event.target).closest('.vaux-file-item'),
        fileName = file.find('.file-info span:first-of-type')[0].innerHTML;

    file.slideUp("fast", function() {
      $(this).remove();

    });

    // Remove file from file list array
    for (var i = 0; i < fileStore.length; i++) {
      if(fileStore[i].name === fileName) {
          fileStore.splice(i,1);
          break;
      }
    }

    // If file list array is empty after this removal, hide the file list container
    var fileList = $(event.target).closest('.vaux-file-list');

    if ($(fileList).children().length === 1) {
      $(fileList).parent().addClass('hidden');
    }
  },

  formatBytes: function(bytes, decimals) {
    if(bytes === 0) return '0 Bytes';
    var k = 1000,
        dm = decimals || 1,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + sizes[i];
  },

  uploadFiles: function(input, fileStore) {
    var list = $(input).siblings('.vaux-file-list-wrapper').children('.vaux-file-list').get(0),
        listContainer;

    $.each( input.files, function(i) {

      var fileName = input.files[i].name,
          fileSize = input.files[i].size,
          fileSizeConverted = vauxFileUpload.formatBytes(fileSize);

      var fileListTemplate = '<li class="vaux-file-item">' +
                               '<div>' +
                                 '<div class="file-info">' +
                                   '<span>' + fileName + '</span> ' +
                                   '<span>(' + fileSizeConverted + ')</span>' +
                                 '</div>' +
                                 '<ul class="file-actions" role="menubar" aria-label="File Actions">' +
                                   '<li class="hidden"><a href="#">View</a></li>' +
                                   '<li class="hidden"><button class="vaux-link" type="button">Remove</button></li>' +
                                   '<li><button class="vaux-link" type="button">Cancel</button></li>' +
                                 '</ul>' +
                               '</div>' +
                               '<progress class="hidden" max="100" value="0">0% uploaded</progress>' +
                              '</li>';
      // append to file list
      $(list).append(fileListTemplate);

      // If file list container is hidden because this is the first added file, show it
      listContainer = $(input).siblings('.vaux-file-list-wrapper').get(0);

      if ($(list).children().length >= 1) {
        $(listContainer).removeClass('hidden');
      }

      // MOCK ERROR
      var errorMessageTemplate = '<span class="usa-input-error-message" id="input-error-message" role="alert">' +
                                 'This file exceeds the 2 MB limit.' +
                                 '</span>';

      if ($(input).attr('data-trigger-error-state')) {
        $(list).children('.vaux-file-item').last().find('> div').append(errorMessageTemplate);
        $(listContainer).children('.usa-input-error').removeClass('hidden');
      // END MOCK ERROR
      } else {
        // Success

        // Add file to fileStore array
        fileStore.push(input.files[i]);

        // target the progress bar and animate upload processing
        var fileProgressBar = $(list).children('.vaux-file-item').last().find('progress').removeClass('hidden');
        vauxFileUpload.updateProgressBar(fileProgressBar);
      }

     

      
    });
  },

  updateProgressBar: function(fileProgressBar) {
    var msecsPerUpdate = 1000/60, // # of milliseconds between updates, this gives 60fps
        progress =  fileProgressBar,
        duration = 3; // # of seconds to animate for
        interval = progress.attr('max')/(duration*1000/msecsPerUpdate);
        
        var animator = function(){
            progress.val(progress.val() + interval);

            if (progress.val() + interval < progress.attr('max')){
               setTimeout(animator, msecsPerUpdate);
            } else {
                progress.val(progress.attr('max'));

                progress.fadeOut();

                vauxFileUpload.adjustActionBar(fileProgressBar);
            }
        };

        animator();
  },

  adjustActionBar: function(fileProgressBar) {
    var actionBar = fileProgressBar.siblings().find('.file-actions').children('li');

    $.each(actionBar, function(i){
      $(actionBar[i]).toggleClass('hidden');
    });
  }

};

$('[data-file-upload-trigger]').each(function(){
  vauxFileUpload.init(this);
});