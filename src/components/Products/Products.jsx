import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

const products = [
    {
        id: 1,
        name: 'shoes',
        description: 'Runing shoes',
        price: '$5',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/be6f4f03-835b-4ed7-89ef-b90b933cc29a/scarpa-da-gara-su-strada-zoomx-vaporfly-next-2-m9HkHj.png'
    },
    {
        id: 2,
        name: 'Macbook',
        description: 'Apple Mackbook',
        price: '$10',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmuFvfdifyKrUHww7iYrtw7Yw8_Sr90fEvjA&usqp=CAU'
    }
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                        <Product product={product} />
                    </Grid>
                ))};
            </Grid>
        </main>
    )
}

export default Products;