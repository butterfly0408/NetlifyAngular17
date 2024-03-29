import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./blockContent";
import category from "./category";
import product from "./product";
import productVariant from "./productVariant";


export default createSchema({
    name: "default",
    types: schemaTypes.concat([
        blockContent, category, product, productVariant
    ]),
})