import React, { useEffect, useState } from 'react';
import { Modal, TextField, Button, Box, Typography, Select, MenuItem, FormControl, InputLabel, FormControlLabel, Checkbox } from '@mui/material';
import { Product, ProductFormProps } from '../../type/shopping.type';
import './index.scss'


export const ProductForm: React.FC<ProductFormProps> = ({ open, onClose, onSubmit, initialProduct }) => {
    const [product, setProduct] = useState<Product>(initialProduct ?? { name: '', description: '', quantity: '', completed: false });
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
    useEffect(() => {
        setProduct(initialProduct ?? { name: '', description: '', quantity: '', completed: false })
    }, [initialProduct])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(product);
        setProduct({ name: '', description: '', quantity: '', completed: false })
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <div className='form-modal'>
                <Box className='form-modal-header'>
                    <Typography fontFamily={"'Nunito', 'sans-serif'"}>
                        Shopping List
                    </Typography>
                </Box>
                <Box className='form-modal-body'>

                    <Typography fontFamily={"'Nunito', 'sans-serif'"}>{initialProduct ? 'Edit an item' : 'Add an item'}</Typography>
                    <Typography fontFamily={"'Nunito', 'sans-serif'"} color={'#666c72'} marginBottom={1}>{initialProduct ? 'Edit your new item below' : 'Add your new item below'}</Typography>
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
                            <InputLabel id="demo-simple-select-label" sx={{ fontFamily: "'Nunito', 'sans-serif'" }}>How many?</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={product.quantity}
                                label="How many?"
                                onChange={(e) => setProduct((prevProduct) => ({
                                    ...prevProduct,
                                    quantity: e.target.value,
                                }))}
                                sx={{ fontFamily: "'Nunito', 'sans-serif'" }}                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                            </Select>
                        </FormControl>
                        {initialProduct ? <FormControlLabel control={<Checkbox sx={{ color: '#bcbbbb' }}
                            checked={product.completed}
                            onChange={(e) => setProduct((prevProduct) => ({
                                ...prevProduct,
                                completed: e.currentTarget.checked,
                            }))} />} label="Purchased" sx={{ color: '#bcbbbb', fontFamily: "'Nunito', 'sans-serif'" }} /> : ''}
                        <Box className='form-modal-footer'>
                            <Button onClick={onClose} sx={{ color: '#000', marginRight: '20px', fontWeight: '500', fontSize: '12px', fontFamily: "'Nunito', 'sans-serif'" }}>
                                cancel
                            </Button>
                            <Button type="submit" variant="contained" color="primary" sx={{ fontSize: '12px', fontFamily: "'Nunito', 'sans-serif'" }}>
                                {initialProduct ? 'Save Item' : 'Add Task'}
                            </Button>
                        </Box>
                    </form>
                </Box>

            </div>
        </Modal>
    );
};

