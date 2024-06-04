import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductAction, setDeleteModalOpenAction } from '../../store/actions/productActions';
import {
  getDeleteModalOpen,
  getDeleteProductResponse,
  getSelectedProducts,
} from '../../store/selectors';
import { useEffect } from 'react';

const style: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 2,
};

export const DeletePromptModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(getDeleteModalOpen);
  const selectedProduct = useSelector(getSelectedProducts);
  const deleteResponse = useSelector(getDeleteProductResponse);

  const onDeleteProducts = () => {
    const { id } = selectedProduct ?? {};
    dispatch(deleteProductAction(id ?? 0));
  };

  const handleClose = () => {
    dispatch(setDeleteModalOpenAction(false));
  };

  useEffect(() => {
    if (deleteResponse?.isSuccessful === true) {
      dispatch(setDeleteModalOpenAction(false));
    } else if (deleteResponse?.isSuccessful === false) {
      alert(`Failed to save`);
    }
  }, [deleteResponse, dispatch]);

  return (
    <div>
      <Modal
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography fontFamily={"'Nunito', 'sans-serif'"} id="modal-modal-title" variant="h6" component="h2">
            Delete product?
          </Typography>
          <Typography fontFamily={"'Nunito', 'sans-serif'"} id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you wish to delete the product?
          </Typography>
          <Box display={'flex'} justifyContent={'flex-end'} marginTop={2}>
            <Button sx={{ fontFamily: "'Nunito', 'sans-serif'" }} onClick={onDeleteProducts}>Delete</Button>
            <Button sx={{ fontFamily: "'Nunito', 'sans-serif'" }} onClick={handleClose}>Close</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

