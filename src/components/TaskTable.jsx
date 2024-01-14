import "@fontsource/inter"; 
import { useEffect, useMemo, useState } from 'react';
import { useTable, useGlobalFilter, usePagination } from "react-table";
import React from 'react';
import {DATA,COLUMNS} from './data.jsx';
import '../css/table.css'
import GlobalFilter from "./GlobalFilter.jsx";


export default function TaskTable(){
    
    const columns=useMemo(function(){
        return COLUMNS;
    },[]);
    const data=useMemo(function(){
        return DATA;
    })
    const {getTableProps,
        getTableBodyProps,
        headerGroups,rows,
        prepareRow,
        state,
        setGlobalFilter,
        } = useTable({
        columns:columns,
        data:data,
    },useGlobalFilter);
    const {globalFilter}=state;
    return (
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table {...getTableProps}>
            <thead>
                {
                    headerGroups.map((headerGroup)=>{
                        return (<tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column)=>{
                                    return (<th {...column.getHeaderProps} >
                                    {column.render('Header')}
                                    
                                    </th>)
                                })
                            }           
                        </tr>)
                    })
                }
            </thead>
            <tbody {...getTableBodyProps}>
                {
                    rows.map(row=>{
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell)=>{
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}
