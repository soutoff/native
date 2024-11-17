"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnProductObject = void 0;
const return_category_object_1 = require("../category/return-category.object");
exports.returnProductObject = {
    id: true,
    name: true,
    slug: true,
    description: true,
    price: true,
    image: true,
    createdAt: true,
    category: { select: return_category_object_1.returnCategoryObject },
};
//# sourceMappingURL=return-product.objecct.js.map