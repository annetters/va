## UX Guidelines

[Veteran's Affairs UX Guide - File Upload](#)

### Code Guidance

* Javascript/File handling: Files that are uploaded should be added to FileList, remove should remove them from this list. FileList is readonly and therefore can't be manipulated. The solution is to create an array that is manipulated throughout this process and then on submit of the form the array is used to create the final FileList object before submission. fileStore is the array created to hold the file objects for each upload instance.