import { Dialog } from "@mui/material";
import styled from "styled-components";
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';

const CardContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  padding: 12px;
  box-sizing: border-box;
`;

const CardItem = styled.div`
  width: 220px;
  height: 100px;
  padding: 12px;
  flex-grow: 1;
  border: 1px solid silver;
`;
/**
 * 1. If loading true then show please wait
 * 2. If products is null then show please wait
 * 3. If product is [], then show no products available
 * 4. Render or map the list & print data
 *
 * @param {*} param0
 * @returns
 */
const ProductList3 = ({ loading, data, onRemove, open, onClose, onConfirm, title, message }) => {
    console.log("Inside ProductList: ", { loading, data });

    if (loading || data === null) {
        return <p>Please wait, while we are loading your data</p>;
    }

    if (data?.length === 0) {
        return <p>No products available</p>;
    }

    return (
        <div>
            <p>My Products</p>
            <hr />
            <CardContainer>
                {data.map((item) => {
                    return (
                        <CardItem key={item.id}>
                            <button onClick={() => onRemove()}>Delete</button>
                            <p>{item.title}</p>
                            <Dialog open={open} onClose={onClose}>
                                <DialogTitle>{title }{item.title}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>{message}</DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <button onClick={onClose}>Cancel</button>
                                    <button onClick={()=> onConfirm(item)} >
                                        Delete
                                    </button>
                                </DialogActions>
                            </Dialog>
                        </CardItem>
                           

                    );
                })}
            </CardContainer>
        </div>
    );
};

export default ProductList3;