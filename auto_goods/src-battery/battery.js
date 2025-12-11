import "./style-battery.css";
import * as Utils from "../../function/function.js";

Utils.create_button_back();
Utils.create_breadcrumbs();
for (let i = 0; i < 4; i++) {
  Utils.create_product_card();
}
