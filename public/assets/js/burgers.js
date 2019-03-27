$(document).ready(function() {
    
    var burgerName = $("#burger-name");

    // click events for the add a burger and edit burger buttons
    $(document).on("submit", ".burger-form", handleBurgerFormSubmit);
    $(document).on("click", ".change-devoured", handleBurgerEdit);
    $(document).on("click", ".delete", deleteBurgerdata);

    // function to add a new burger
    function handleBurgerFormSubmit(event) {
        event.preventDefault();
        if (!burgerName.val().trim()) {
            return;
        }
        var newBurger = {
            burger_name: burgerName.val().trim(),
            devoured: false
        }
        $.post("/api/burgers", newBurger).then(getBurgers);
    }

    // function to delete a burger
    function deleteBurgerdata() {
        var id = $(this).data("id");
        $.ajax({
            method: "DELETE",
            url: "/api/burgers/" + id
        }).then(getBurgers);
    }

    // function to changed devoured status
    function handleBurgerEdit() {
        var id = $(this).data("id");
        var devouredStatus = $(this).data("devoured");
        var eatIt;
        if (!devouredStatus) {
            eatIt = 1
        } else {
            eatIt = 0
        };
        var newStatus = {devoured: eatIt};
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newStatus
        }).then(getBurgers);
    }

    // reloads the page
    function getBurgers(){
        location.reload();
    };
    
});