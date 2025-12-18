
import * as Utils from "../function/function.js"

Utils.create_breadcrumbs();
Utils.create_catalog("Автоаксессуары", "../public/auto-goods.png","auto_goods.html" )
Utils.create_catalog("Запчасти", "../public/parts.png","auto_parts.html" )


fetch('https://api.localhost3000')