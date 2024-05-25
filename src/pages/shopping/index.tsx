import { Box, Container, Typography } from "@mui/material"
import './index.scss';
import { EmptyPage, ProductForm } from "../../components";
import { useState } from "react";
import { Product } from "../../type/shopping.type";

export const Shopping = () => {
    const [open, setOpen] = useState<boolean>(false);

    const onSubmit = (product: Product) => {
        console.log(product)
    }
    return (
        <div className="product-container">
            <ProductForm onClose={() => setOpen(false)} open={open} onSubmit={onSubmit}/>
                <Box className='product-header'>
                    <Typography>Shopping List</Typography>
                </Box>
                <Container maxWidth="lg" className="product-list">
                    <EmptyPage buttonClick={() => setOpen(true)} buttonText="Add your first item" message="Your shopping list is empty :(" />
                </Container>
        </div>
    )
}