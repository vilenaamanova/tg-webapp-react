import React, {useState} from 'react';
import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";

const products = [
    {id: '1', title: 'Джинсы', price: 5000, description: 'lalala'},
    {id: '2', title: 'Джинсы 2', price: 3000, description: 'lalala 2'},
    {id: '3', title: 'Джинсы 3', price: 4000, description: 'lalala 3'},
    {id: '4', title: 'Джинсы 4', price: 6000, description: 'lalala 4'},
    {id: '5', title: 'Джинсы 5', price: 1000, description: 'lalala 5'},
    {id: '6', title: 'Джинсы 6', price: 9000, description: 'lalala 6'},
    {id: '7', title: 'Джинсы 7', price: 3000, description: 'lalala 7'},
    {id: '8', title: 'Джинсы 8', price: 2000, description: 'lalala 8'},
]

const getTotalPrice = (items) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0);
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg} = useTelegram();
    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`,
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;