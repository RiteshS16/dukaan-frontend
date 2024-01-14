import React from 'react';



const renderCurrencyColumn = (cell) => {
    const formattedCurrency = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR', // Set the currency code to INR for Indian Rupee
    }).format(cell.value);
  
    return <span>{formattedCurrency}</span>;
  };

export  const COLUMNS=[
    { Header: 'Order Id', accessor: 'orderId'},
    { Header: 'Order Date', accessor: 'orderDate'},
    { Header: 'Order Amount', accessor: 'orderAmount', Cell: renderCurrencyColumn},
    { Header: 'Transaction fees', accessor: 'transactionFees', Cell: renderCurrencyColumn}
]
export const DATA=[{
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20001',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20002',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20002',
        orderDate:'12Jan23',
        orderAmount:236,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:236,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:236,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:238,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:239,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    },
    {
        orderId:'#20000',
        orderDate:'12Jan23',
        orderAmount:234,
        transactionFees:22
    }];



