import { Button, Grid, Typography } from "@mui/material";
import './index.scss';
import { EmptyPageProps } from "../../type/shopping.type";

export const EmptyPage = ({
    buttonClick,
    buttonText,
    message
}: EmptyPageProps) => (
    <Grid container spacing={2} justifyContent={'center'} className="emptyPageContainer">
        <Grid item className='emptyPageBox' xs={8}>
            <Typography marginBottom={2} color={'#b4b5b7'}>{message ?? ''}</Typography>
            <Button onClick={buttonClick} variant="contained">
                {buttonText}
            </Button>
        </Grid>
    </Grid>
)