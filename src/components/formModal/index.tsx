import React, { useEffect, useState } from 'react';
import { Modal, TextField, Button, Box, Typography, Select, MenuItem, FormControl, InputLabel, FormControlLabel, Checkbox } from '@mui/material';
import { Product, ProductFormProps } from '../../type/shopping.type';
import './index.scss'


export const ProductForm: React.FC<ProductFormProps> = ({ open, onClose, onSubmit, initialProduct }) => {
    const [product, setProduct] = useState<Product>(initialProduct || { name: '', description: '', quantity: '', isPurchase: false });
    const [charCount, setCharCount] = useState<number>(initialProduct ? initialProduct.description.length : 0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        if (name === 'description') {
            setCharCount(value.length);
        }
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    useEffect( () => {
        if(initialProduct){
            setProduct(initialProduct)
        }
        else {
            setProduct(product)
        }

    },[initialProduct])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(product);
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <div className='form-modal'>
                <Box className='form-modal-header'>
                    <Typography>
                        Shopping List
                    </Typography>
                </Box>
                <Box className='form-modal-body'>

                    <Typography>{initialProduct ? 'Edit an item' : 'Add an item'}</Typography>
                    <Typography color={'#666c72'} marginBottom={1}>{initialProduct ? 'Edit your new item below' : 'Add your new item below'}</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            sx={{ mb: 2 }}
                        />
                        <textarea
                            aria-label="Description"
                            placeholder="Description"
                            name="description"
                            value={product.description}
                            onChange={handleChange}
                            className='textarea-desc'
                        />
                        <FormControl fullWidth className='select-quantity'>
                            <InputLabel id="demo-simple-select-label">How many?</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={product.quantity}
                                label="How many?"
                                onChange={(e) => setProduct((prevProduct) => ({
                                    ...prevProduct,
                                    quantity: e.target.value,
                                }))}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControlLabel control={<Checkbox sx={{ color: '#bcbbbb' }}
                            onChange={(e) => setProduct((prevProduct) => ({
                                ...prevProduct,
                                isPurchase: e.currentTarget.checked,
                            }))} />} label="Purchased" sx={{ color: '#bcbbbb' }} />
                        <Box className='form-modal-footer'>
                            <Button onClick={onClose} sx={{ color: '#000', marginRight: '20px', fontWeight: '500', fontSize: '12px' }}>
                                cancel
                            </Button>
                            <Button type="submit" variant="contained" color="primary" sx={{ fontSize: '12px' }}>
                                {initialProduct ? 'Save Item' : 'Add Task'}
                            </Button>
                        </Box>
                    </form>
                </Box>

            </div>
        </Modal>
    );
};

