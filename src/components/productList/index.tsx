import { Box, Button, Checkbox, IconButton, Tooltip, Typography } from "@mui/material"
import './index.scss';
import { useDispatch, useSelector } from "react-redux";
import { getProductsLoadingState, selectAllProducts } from "../../store/selectors";
import { Product } from "../../store/models";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import { setDeleteModalOpenAction, setSelectedProductsAction } from "../../store/actions/productActions";
import { ProductListprops } from './../../type/shopping.type';

export const ProductList = ({ addItemOnclick, setSelectedProduct, onSubmit }: ProductListprops) => {
    const data = useSelector(selectAllProducts);
    const dispatch = useDispatch();

    const isLoading = useSelector(getProductsLoadingState);

    return (
        <Box className="product">
            <Box className="product-list-header">
                <Typography className="product-title" fontWeight={600} fontSize={'20px'} sx={{ fontFamily: "'Nunito', 'sans-serif'" }}>Your Items</Typography>
                <Box className="button-item">
                    <Button variant="contained" sx={{ textTransform: 'none', fontFamily: "'Nunito', 'sans-serif'" }} onClick={() => { setSelectedProduct(); addItemOnclick() }}>Add Item</Button>
                </Box>
            </Box>
            <Box className='product-list-body'>
                {
                    data.length > 0 ? data.map((product: Product) => (
                        <Box className='product-list'>
                            <Box className='product-info'>
                                <Checkbox checked={product.completed} onChange={() => onSubmit({ ...product, completed: !product.completed })} />
                                <Box>
                                    <Typography fontFamily={"'Nunito', 'sans-serif'"} fontWeight={600} sx={{ textDecoration: product.completed ? 'line-through' : 'none' }}>
                                        {product.name}
                                    </Typography>
                                    <Typography fontFamily={"'Nunito', 'sans-serif'"} color={'#959393'} sx={{ textDecoration: product.completed ? 'line-through' : 'none' }}>
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