import { Box, Container, Typography } from "@mui/material"
import './index.scss';
import { EmptyPage } from "../../components";

export const Shopping = () => {
    return (
        <div className="product-container">
            <Box className='product-header'>
                <Typography>Shopping List</Typography>
            </Box>
            <Container maxWidth="lg" className="product-list">
                <EmptyPage buttonClick={() => { console.log('click') }} buttonText="Add your first item" message="Your shopping list is empty :(" />
            </Container>
        </div>
    )
}