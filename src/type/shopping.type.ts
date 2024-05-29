export interface EmptyPageProps {
    buttonText: string;
    buttonClick: () => void;
    message: string
}

export interface Product {
    id?: number;
    name: string;
    description: string;
    quantity: string;
    isPurchase?: boolean
}

export interface ProductFormProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (product: Product) => void;
    initialProduct?: Product;
}

export interface ProductListprops {
    addItemOnclick: () => void,
    setSelectedProduct: (product?: Product) => void
}