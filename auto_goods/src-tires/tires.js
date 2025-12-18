import "./style-tires.css";
import * as Utils from "../../function/function.js"

Utils.create_button_back();
Utils.create_breadcrumbs();
for (let i = 0; i < 3; i++) {
  Utils.create_product_card();
}