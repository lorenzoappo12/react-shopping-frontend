import { Box, Button, Checkbox, IconButton, Tooltip, Typography } from "@mui/material"
import './index.scss';
import { useDispatch, useSelector } from "react-redux";
import { getProductsLoadingState, selectAllProducts } from "../../store/selectors";
import { Product } from "../../store/models";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import { setDeleteModalOpenAction, setSelectedProductsAction } from "../../store/actions/productActions";
import { ProductListprops } from './../../type/shopping.type';

export const ProductList = ({ addItemOnclick, setSelectedProduct }: ProductListprops) => {
    const data = useSelector(selectAllProducts);
    const dispatch = useDispatch();

    const isLoading = useSelector(getProductsLoadingState);
    const onDeleteProduct = () => {

    }
    return (
        <Box className="product">
            <Box className="product-list-header">
                <Typography className="product-title" fontWeight={600} fontSize={'20px'}>Your Items</Typography>
                <Box className="button-item">
                    <Button variant="contained" onClick={addItemOnclick}>Add Item</Button>
                </Box>
            </Box>
            <Box className='product-list-body'>
                {
                    data.length > 0 ? data.map((product: Product) => (
                        <Box className='product-list'>
                            <Box className='product-info'>
                                <Checkbox />
                                <Box>
                                    <Typography fontWeight={600}>
                                        {product.name}
                                    </Typography>
                                    <Typography color={'#959393'}>
                                        {product.description}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Tooltip title="edit">
                                    <IconButton
                                        onClick={() => { setSelectedProduct(product); addItemOnclick() }}
                                    >
                                        <EditIcon sx={{ color: '#959393' }} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <IconButton
                                        onClick={() => { dispatch(setSelectedProductsAction(product)); dispatch(setDeleteModalOpenAction(true)) }}
                                    >
                                        <DeleteIcon sx={{ color: '#959393' }} />
                                    </IconButton>
                                </Tooltip>

                            </Box>
                        </Box>
                    )
                    )
                        : ''
                }
            </Box>
        </Box>

    )
}