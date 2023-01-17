
export const searchFilter = (goods, value) => {
  
  return goods.filter((goodsItem) => {
    return goodsItem.title.toLowerCase().includes(value.toLowerCase());
  });

};

export const categoryFilter = (goods, text) => {
  
  return goods.filter((goodsItem) => {
    return goodsItem.category === text;
  });

};

export const priceFilter = (goods, min, max) => {
  
  return goods.filter((goodsItem) => {
    if(min === '' && max === ''){
      return goodsItem;
    } else if(min !== '' && max !== ''){

    } else if(min !== '' && max === ''){

    } else if(min === '' && max !== ''){
      
    }
  });

};
