# sequelizeBurger
# Burger 2: The Sequel

[Deployed App](https://eater-of-burgers-sequel.herokuapp.com/)

### Overview

This homework assignment is **optional**.

In this assignment, you're going to Sequelize the `Burger` app you made last unit. We've split this exercise into three different tiers, all with different tasks and expectations. Finish whichever tier will provide you with the most reasonable challenge.

#### Tier 1: Sequelized! (Basic to Moderate)

* Remove all references to your vanilla MySQL queries and replace them with Sequelize queries.

#### Tier 2: Customer Associations (Challenge)

* Add in a Customer association to the project. This will involve creating at least one new Customer model and connecting it with your Burger model.

* What kind of association you would like to use is up to you. Does a Customer have one Burger? Many Burgers?

* For example, you could make a site that logs the name of which Customer ate which Burger, where each Customer only gets one Burger. If you can't think of another type of association, try this one!

    ![3-Associated](Images/3-Associated.jpg)

* If you do go select this tier, you must edit the handlebars files and CSS stylesheets to implement some sort of additional feature to the site. We don't want you to just connect two models and submit your project. Make your site do something relevant to this association.

#### Bonus! (Challenge)

* Add validations to your models where:

  * A burger's name cannot be null
  * A burger's devoured status is false by default
  * A Customer's name cannot be null

* Order the Burgers you send back to the user in alphabetical order using the Sequelize "order" option.