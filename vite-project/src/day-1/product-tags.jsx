import { useState } from "react";
import styled from "styled-components";
import {v4} from "uuid";

const NestedTags = () =>{
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Apple iPhone 16 Pro Max 256 GB",
            price: 135000,
            tags: [
              { id: 1, label: "Apple" },
              { id: 2, label: "Smartphone" },
            ],
          },
          {
            id: 2,
            name: "Apple iPhone 16 Pro 256 GB",
            price: 115000,
            tags: [
              { id: 1, label: "Apple" },
              { id: 2, label: "Device" },
            ],
          },
          {
            id: 3,
            name: "Apple iPhone 16 256 GB",
            price: 75000,
            tags: [
              { id: 1, label: "Smartphone" },
              { id: 2, label: "Device" },
            ],
          },
          {
            id: 4,
            name: "Apple iPhone 16 128 GB",
            tags: [
              { id: 1, label: "New Gen Phone" },
              { id: 2, label: "Device" },
            ],
            price: 65000,
          },
          {
            id: 5,
            name: "Kurkure",
            tags: [],
            price: 65000,
          },
    ]);

    const [edit, setEdit] = useState({});

    const onAddTag = (e) => {
        console.log("e-tag:", e.target);
        const {name, value} = e.target;

        setEdit((prev) => ({
            ...prev, [name]: e.target.value
        }))
    }

    const addNewTag = (productId) => {
        setProducts((productList) => {
            return productList.map((p) => {
                if(p.id === productId){
                    p.tags = [...p.tags, {id:v4(), label: edit[productId]}]
                }
                return p;
            })
        })
        setEdit((prev) => ({...prev, [productId]:""}))
    }

    const removeTag = (pid,tid) => {
        setProducts((p) => {
            return p.map((item) => {
                if(item.id !== pid) return item;
                 item.tags = item.tags.filter((tag) => tag.id !== tid);
                 return item;
            })

        })
    }

    /* Only CSS Part */ 
    const ProductContainer = styled.div`
        display: flex;
        gap: 12px;
    `;

    const Item = styled.div`
        height:300px;
        border: 1px solid silver;
    `;

    const TagContainer = styled.div`
        display:flex;
        gap:2px;
        padding:4px; 
        margin:4px;
        height:40px;
    `;

    const TagList = styled.div`
        display:flex;
        gap:8px;
        align-items:center;
        padding:4px; 
        margin:20px 4px;
        height:40px;
    `;

    const Button = {
        backgroundColor:"#2a4fa1",
        color:"#fff",
    }

    return(
        <div>
            <h1>My Products</h1>
            <ProductContainer>
                {products.map((p)=>{
                    return(
                        <Item>
                            <p>Name:{p.name}</p>
                            <hr/>
                            <TagContainer >
                                <input
                                type="text"
                                placeholder="Enter New Tag"
                                value={edit[p.id]?edit[p.id]:""}
                                name={p.id}
                                onChange={onAddTag} 
                                style={{padding:"5px"}}
                                />
                            
                            <button style={Button}  onClick={() => addNewTag(p.id)}>
                                Add
                            </button>
                            
                            </TagContainer>
                            <div>
                                {p?.tags?.length === 0?(
                                    <p>No tags available</p>
                                ):(
                                    p.tags.map((tag) => {
                                        return(
                                            <TagList>
                                                <p>{tag.label}</p>
                                                <button onClick={() => removeTag(p.id,tag.id)} style={Button}>
                                                x
                                                </button>
                                            </TagList>
                                        )
                                    })
                                )
                            }
                            </div>
                        </Item>
                    )
                })}
            </ProductContainer>
        </div>
    )
}

export default NestedTags;