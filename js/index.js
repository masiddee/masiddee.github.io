$(document).ready(function() {
    // Listen for clicks on different DOM elements, and call their respective functions
    $('.add-to-list').click(addToListItem);
    $('.clear-list').click(clearAllListItems);
    // For rendered elements, we use event delegation
    $('#todo').on('click','.remove',removeThisListItem);
    $('#todo').on('click','.edit',editThisListItem);
    $('#todo').on('click','span',toggleThisListItem);
    $('.clear-complete').click(removeCompletedListItems);

    // Create variables
    var clearConfirm;
    var count = 0;
    var newListItemText = '';

    // Listen for keyup event on "Enter" key to also capture values from input fields
    $('.container').on('keyup','input[type="text"]',function(event){
        if(event.which === 13){
            if($(this).hasClass('new-list-item')){
                addToListItem();
            }else if($(this).hasClass('edited-list-item')){
                newListItemText = $(this).val();
                $(this).parent().replaceWith(saveEditedListItem(newListItemText));
            }
        }
    });

    // Add new item to the list
    function addToListItem (){
        // Capture value of this input field
        var newListItem = $('.new-list-item').val();
        
        // Render DOM element to the page with the above value
        $("#todo").append(`<li class="list-item">
                            <span>${newListItem}</span>
                            <button class="edit">Edit</button>
                            <button class="remove">Remove</button></li>`);
        
        // Reset the input field to be blank for new submission
        $('.new-list-item').val('');

        addCount();
    }

    // Remove all of the items
    function clearAllListItems(){
        $('#todo li').remove();

        // reset count to 0 since we removed all of the list items
        count = 0;

        // update the new count in the DOM
        $('.count').html(count);
    }

    // Remove an individual list item
    function removeThisListItem() {
        $(this).parent().remove();
        delCount();
    }

    // Edit an individual list item
    function editThisListItem() {
        // Capture the text of the current list item
        var currListItemText = $(this).siblings('span').text();

        // Replace the <span> with an input field
        // Set the default value to the currListItemText variable from above
        $(this).parent().html(`<input class="edited-list-item" 
                                type="text" value="${currListItemText}">
                                <button class="save-edit">Save Edit</button>`);

        // Capture the new value from the input field on button click
        // Replace the input field
        $('#todo').on('click','.save-edit',function() {
            newListItemText = $(this).siblings('input').val();
            $(this).parent().replaceWith(saveEditedListItem(newListItemText));
        });
    }

    // Toggle whether an item is completed or not
    function toggleThisListItem() {
        $(this).toggleClass('completed');
        
        if($(this).hasClass('completed')){
            delCount();
        }else{
            addCount();
        }
    }

    // Remove any completed to-do list items
    function removeCompletedListItems() {
        // Loop through all current #todo <li> elements 
        $('#todo li').each(function(){
            // If they have a class of "completed", remove that <li> element
            if($(this).children('span').hasClass('completed')){
                $(this).remove();
            }
        });
    }

    // Save updated list item, and return the HTML
    function saveEditedListItem(item) {
        return `<li class="list-item">
                <span>${item}</span>
                <button class="edit">Edit</button>
                <button class="remove">Remove</button></li>`;
    }

    // Increment count total and output to HTML
    function addCount() {
        count++;
        $('.count').html(count);
    }

    // Decrement count total and output to HTML
    function delCount() {
        count--;
        $('.count').html(count);
    }

});