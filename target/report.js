$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Shop_Wallstickers.feature");
formatter.feature({
  "name": "Wall Stickers",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Wall_Stickers"
    }
  ]
});
formatter.scenario({
  "name": "Loging into the application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Wall_Stickers"
    },
    {
      "name": "@Login_Logout"
    }
  ]
});
formatter.step({
  "name": "User is on the Asian Paints application",
  "keyword": "Given "
});
formatter.match({
  "location": "Shop_catalouge.user_is_on_the_Asian_Paints_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on profile button",
  "keyword": "When "
});
formatter.match({
  "location": "Shop_catalouge.user_clicks_on_profile_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks and enters mobile and clicks on submit",
  "keyword": "When "
});
formatter.match({
  "location": "Shop_catalouge.user_clicks_and_enters_mobile_and_clicks_on_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on and enters otp and clicks on submit",
  "keyword": "When "
});
formatter.match({
  "location": "Shop_catalouge.user_clicks_on_and_enters_otp_and_clicks_on_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on Myprofile",
  "keyword": "And "
});
formatter.match({
  "location": "Shop_catalouge.clicks_on_Myprofile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see the profile",
  "keyword": "Then "
});
formatter.match({
  "location": "Shop_catalouge.able_to_signout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Displaying Shop options",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Wall_Stickers"
    },
    {
      "name": "@Shop_options"
    }
  ]
});
formatter.step({
  "name": "User is on the Asian Paints application",
  "keyword": "Given "
});
formatter.match({
  "location": "Shop_catalouge.user_is_on_the_Asian_Paints_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers  mouse on shop",
  "keyword": "When "
});
formatter.match({
  "location": "Shop_catalouge.user_hovers_mouse_on_shop()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on wallstickers",
  "keyword": "And "
});
formatter.match({
  "location": "Shop_catalouge.click_on_wallstickers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sould able to navigate and display wall stickers name",
  "keyword": "Then "
});
formatter.match({
  "location": "Shop_catalouge.sould_able_to_navigate_and_display_wall_stickers_name()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Exploring Wall Sticker page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Wall_Stickers"
    },
    {
      "name": "@Wall_Sticker_Page"
    }
  ]
});
formatter.step({
  "name": "User is on the Asian Paints application",
  "keyword": "Given "
});
formatter.match({
  "location": "Shop_catalouge.user_is_on_the_Asian_Paints_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers  mouse on shop",
  "keyword": "When "
});
formatter.match({
  "location": "Shop_catalouge.user_hovers_mouse_on_shop()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on wallstickers",
  "keyword": "And "
});
formatter.match({
  "location": "Shop_catalouge.click_on_wallstickers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on loadmore",
  "keyword": "And "
});
formatter.match({
  "location": "Shop_catalouge.clicks_on_loadmore()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Displays all the stickers in that page",
  "keyword": "Then "
});
formatter.match({
  "location": "Shop_catalouge.displays_all_the_stickers_in_that_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Apply the filter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Wall_Stickers"
    },
    {
      "name": "@Apply_Filters"
    }
  ]
});
formatter.step({
  "name": "User is on the Asian Paints application",
  "keyword": "Given "
});
formatter.match({
  "location": "Shop_catalouge.user_is_on_the_Asian_Paints_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hovers  mouse on shop",
  "keyword": "When "
});
formatter.match({
  "location": "Shop_catalouge.user_hovers_mouse_on_shop()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on wallstickers",
  "keyword": "And "
});
formatter.match({
  "location": "Shop_catalouge.click_on_wallstickers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on filters and selects",
  "keyword": "And "
});
formatter.match({
  "location": "Shop_catalouge.clicks_on_filters_and_selects()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on sortby and select one",
  "keyword": "And "
});
formatter.match({
  "location": "Shop_catalouge.clicks_on_sortby_and_select_one()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see the filtered products",
  "keyword": "Then "
});
formatter.match({
  "location": "Shop_catalouge.user_able_to_see_the_filtered_products()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Buy now unsuccessful",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Wall_Stickers"
    },
    {
      "name": "@Invalid_Pincode"
    }
  ]
});
formatter.step({
  "name": "User is on the Wall Stickers page",
  "keyword": "Given "
});
formatter.match({
  "location": "Shop_catalouge.user_is_on_the_Wall_Stickers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on wall sticker",
  "keyword": "When "
});
formatter.match({
  "location": "Shop_catalouge.user_click_on_wall_sticker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the pincode",
  "keyword": "When "
});
formatter.match({
  "location": "Shop_catalouge.user_enter_the_pincode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on buy now button",
  "keyword": "And "
});
formatter.match({
  "location": "Shop_catalouge.click_on_buy_now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Shop_catalouge.error_message_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Buy the product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Buy_Product"
    }
  ]
});
formatter.step({
  "name": "User is on the Wall Stickers page",
  "keyword": "Given "
});
formatter.step({
  "name": "User click on wall sticker",
  "keyword": "When "
});
formatter.step({
  "name": "User enters the pincode \u003cpincode\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click on buy now button",
  "keyword": "And "
});
formatter.step({
  "name": "User able to see the payment page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "pincode"
      ]
    },
    {
      "cells": [
        "534305"
      ]
    },
    {
      "cells": [
        "534306"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Buy the product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wall_Stickers"
    },
    {
      "name": "@Buy_Product"
    }
  ]
});
formatter.step({
  "name": "User is on the Wall Stickers page",
  "keyword": "Given "
});
formatter.match({
  "location": "Shop_catalouge.user_is_on_the_Wall_Stickers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on wall sticker",
  "keyword": "When "
});
formatter.match({
  "location": "Shop_catalouge.user_click_on_wall_sticker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the pincode 534305",
  "keyword": "When "
});
formatter.match({
  "location": "Shop_catalouge.user_enter_the_pincode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on buy now button",
  "keyword": "And "
});
formatter.match({
  "location": "Shop_catalouge.click_on_buy_now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see the payment page",
  "keyword": "Then "
});
formatter.match({
  "location": "Shop_catalouge.user_able_to_see_the_payment_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Buy the product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wall_Stickers"
    },
    {
      "name": "@Buy_Product"
    }
  ]
});
formatter.step({
  "name": "User is on the Wall Stickers page",
  "keyword": "Given "
});
formatter.match({
  "location": "Shop_catalouge.user_is_on_the_Wall_Stickers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on wall sticker",
  "keyword": "When "
});
formatter.match({
  "location": "Shop_catalouge.user_click_on_wall_sticker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the pincode 534306",
  "keyword": "When "
});
formatter.match({
  "location": "Shop_catalouge.user_enter_the_pincode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on buy now button",
  "keyword": "And "
});
formatter.match({
  "location": "Shop_catalouge.click_on_buy_now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see the payment page",
  "keyword": "Then "
});
formatter.match({
  "location": "Shop_catalouge.user_able_to_see_the_payment_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add product to wishlist",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Wall_Stickers"
    },
    {
      "name": "@WishList"
    }
  ]
});
formatter.step({
  "name": "User is on the Wall Stickers page",
  "keyword": "Given "
});
formatter.match({
  "location": "Shop_catalouge.user_is_on_the_Wall_Stickers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on wall sticker",
  "keyword": "When "
});
formatter.match({
  "location": "Shop_catalouge.user_click_on_wall_sticker()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on wishlist button",
  "keyword": "When "
});
formatter.match({
  "location": "Shop_catalouge.user_click_on_wishlist_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on WishList Icon on the top",
  "keyword": "And "
});
formatter.match({
  "location": "Shop_catalouge.click_on_WishList_Icon_on_the_top()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see the product is added to the wishlist",
  "keyword": "Then "
});
formatter.match({
  "location": "Shop_catalouge.user_able_to_see_the_product_is_added_to_the_wishlist()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Get the latest news",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@getLatestNews"
    }
  ]
});
formatter.step({
  "name": "User is on the Asian Paints application",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter mail in textbox \u003cmail\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User click on Subscribe button",
  "keyword": "When "
});
formatter.step({
  "name": "Successful Message is shown",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "mail"
      ]
    },
    {
      "cells": [
        "anjith12@mail.com"
      ]
    },
    {
      "cells": [
        "anjith3455@gmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Get the latest news",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wall_Stickers"
    },
    {
      "name": "@getLatestNews"
    }
  ]
});
formatter.step({
  "name": "User is on the Asian Paints application",
  "keyword": "Given "
});
formatter.match({
  "location": "Shop_catalouge.user_is_on_the_Asian_Paints_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter mail in textbox anjith12@mail.com",
  "keyword": "When "
});
formatter.match({
  "location": "Shop_catalouge.user_enter_mail_in_textbox_anjith_mail_com(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Subscribe button",
  "keyword": "When "
});
formatter.match({
  "location": "Shop_catalouge.user_click_on_Subscribe_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Successful Message is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "Shop_catalouge.error_Message_is_shown()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get the latest news",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Wall_Stickers"
    },
    {
      "name": "@getLatestNews"
    }
  ]
});
formatter.step({
  "name": "User is on the Asian Paints application",
  "keyword": "Given "
});
formatter.match({
  "location": "Shop_catalouge.user_is_on_the_Asian_Paints_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter mail in textbox anjith3455@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "Shop_catalouge.user_enter_mail_in_textbox_anjith_mail_com(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Subscribe button",
  "keyword": "When "
});
formatter.match({
  "location": "Shop_catalouge.user_click_on_Subscribe_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Successful Message is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "Shop_catalouge.error_Message_is_shown()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "clicking on shop catlouge",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Wall_Stickers"
    },
    {
      "name": "@Shop_clciking"
    }
  ]
});
formatter.step({
  "name": "User is on the Asian Paints application",
  "keyword": "Given "
});
formatter.match({
  "location": "Shop_catalouge.user_is_on_the_Asian_Paints_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clciks on shop option",
  "keyword": "When "
});
formatter.match({
  "location": "Shop_catalouge.user_clciks_on_shop_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clciks on EXPLORE NOW and displays Mechanized Tools \u0026 Spares",
  "keyword": "And "
});
formatter.match({
  "location": "Shop_catalouge.user_clciks_on_EXPLORE_NOW_and_displays_Mechanized_Tools_Spares()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Terms \u0026 Conditions",
  "keyword": "And "
});
formatter.match({
  "location": "Shop_catalouge.user_clicks_on_Terms_Conditions()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "displays terms and conditions",
  "keyword": "Then "
});
formatter.match({
  "location": "Shop_catalouge.displays_terms_and_conditions()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Loging out",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Wall_Stickers"
    },
    {
      "name": "@Logout"
    }
  ]
});
formatter.step({
  "name": "User is on the Asian Paints application",
  "keyword": "Given "
});
formatter.match({
  "location": "Shop_catalouge.user_is_on_the_Asian_Paints_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on profile button",
  "keyword": "When "
});
formatter.match({
  "location": "Shop_catalouge.user_clicks_on_profile_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on signout",
  "keyword": "And "
});
formatter.match({
  "location": "Shop_catalouge.licks_on_signout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "able to sign out",
  "keyword": "Then "
});
formatter.match({
  "location": "Shop_catalouge.able_to_sign_out()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Scrolling page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Wall_Stickers"
    },
    {
      "name": "@Chrome_options"
    }
  ]
});
formatter.step({
  "name": "User is on the Asian Paints application",
  "keyword": "Given "
});
formatter.match({
  "location": "Shop_catalouge.user_is_on_the_Asian_Paints_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clciks on shop option",
  "keyword": "When "
});
formatter.match({
  "location": "Shop_catalouge.user_clciks_on_shop_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "able to go to previous page,nexr page,refresh",
  "keyword": "And "
});
formatter.match({
  "location": "Shop_catalouge.able_to_go_to_previous_page_nexr_page_refresh()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "able to show user functions are working",
  "keyword": "Then "
});
formatter.match({
  "location": "Shop_catalouge.able_to_show_user_functions_are_working()"
});
formatter.result({
  "status": "passed"
});
});