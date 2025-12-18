import "./style-detailling.css";
import * as Utils from "../../function/function.js"

Utils.create_button_back();
Utils.create_breadcrumbs();
for (let i = 0; i < 5; i++) {
  Utils.create_product_card();
}