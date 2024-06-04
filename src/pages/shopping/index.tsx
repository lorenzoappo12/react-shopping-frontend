import { AlertProps, Box, Container, Typography } from "@mui/material"
import './index.scss';
import { CommonSnakbar, DeletePromptModal, EmptyPage, ProductForm, ProductList } from "../../components";
import { useEffect, useState } from "react";
import { Product } from "../../type/shopping.type";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsAction, saveProductAction, setSelectedProductsAction } from "../../store/actions/productActions";
import { getProductSaveResponse, selectAllProducts } from "../../store/selectors";

export const Shopping = () => {
    const [open, setOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    const data = useSelector(selectAllProducts);
    const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();
    const [message, setMessage] = useState<string>('')
    const [openAlert, setOpenAlert] = useState<boolean>(false)
    const [severity, setseverity] = useState<AlertProps['severity']>('info')
    const saveResponse = useSelector(getProductSaveResponse);

    useEffect(() => {
        dispatch(setSelectedProductsAction(null));
        dispatch(fetchAllProductsAction());
    }, [dispatch]);

    const onSubmit = (product: Product) => {
        dispatch(saveProductAction(product as any));
    }
    useEffect(() => {
        if (saveResponse?.isSuccessful === true) {
            setseverity('success');
            setMessage('Successfully Saved')
            setOpenAlert(true)
        } else if (saveResponse?.isSuccessful === false) {
            setseverity('error');
            setMessage(saveResponse?.error?.message ?? '')
            setOpenAlert(true)
        }
    }, [saveResponse, dispatch]);
    return (
        <div className="product-container">
            <CommonSnakbar
                message={message}
                open={openAlert}
                severity={severity}
                setOpen={setOpenAlert}
            />
            <ProductForm onClose={() => { setOpen(false) }} open={open} onSubmit={onSubmit} initialProduct={selectedProduct} />
            <DeletePromptModal />
            <Box className='product-header'>
                <Typography fontFamily={"'Dosis', 'sans-serif'"}>SHOPPING LIST</Typography>
            </Box>
            <Container maxWidth="lg" className="product-list">
                {data.length > 0 ?
                    <ProductList addItemOnclick={() => setOpen(true)} setSelectedProduct={setSelectedProduct} onSubmit={onSubmit} /> :
                    <EmptyPage buttonClick={() => setOpen(true)} buttonText="Add your first item" message="Your shopping list is empty :(" />
                }
            </Container>
        </div>
    )
}