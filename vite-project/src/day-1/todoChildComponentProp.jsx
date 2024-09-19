import styled from "styled-components";
import DialogComponent from "./dialog";
import { useState } from "react";


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
const ProductList3 = ({ loading, data, onRemove}) => {
    console.log("Inside ProductList: ", { loading, data });

    const [selectedItem, setSelectedItem] = useState(null);
    const [dialogToggle, setDialog] = useState(false);

    if (loading || data === null) {
        return <p>Please wait, while we are loading your data</p>;
    }

    if (data?.length === 0) {
        return <p>No products available</p>;
    }

    const onDeleteItemClicked = (item)=>{
        setSelectedItem(item);
        setDialog(true);
    }

    const onCloseDialog = (deleteProduct)=>{
        if(deleteProduct){
            onRemove(selectedItem);
        }
        setDialog(false);
    }

    return (
        <div>
            <p>My Products</p>
            <hr />
            <DialogComponent
                open={dialogToggle}
                handleClose={() => onCloseDialog(false)}
                onConfirm={() => onCloseDialog(true)}
                title={"Deletion Confirmation"}
                description={`Do you really want to delete ${selectedItem?.title}`}
            />
            <CardContainer>
                {data.map((item) => {
                    return (
                        <CardItem key={item.id}>
                            <button onClick={() => onDeleteItemClicked(item)}>Delete</button>
                            <p>{item.title}</p>
                        </CardItem>
                    );
                })}
            </CardContainer>
        </div>
    );
};

export default ProductList3;