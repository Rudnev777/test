import "./style-disks.css";
import * as Utils from "../../function/function.js"

Utils.create_breadcrumbs();
Utils.create_button_back();
for (let i = 0; i < 6; i++) {
  Utils.create_product_card();
}