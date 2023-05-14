import React, {ChangeEvent, ChangeEventHandler, useState} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
   id?: string
   page: number
   itemsCountForPage: number
   totalCount: number
   onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
   {
      page, itemsCountForPage, totalCount, onChange, id = 'hw15',
   }
) => {
   const lastPage = totalCount     //  10 // пишет студент // вычислить количество страниц
   // const [sortNum, setSortNum] = useState(itemsCountForPage)

   const onChangeCallback = (event: any, page: number) => {
      // пишет студент

      // const num = event.currentTarget.value ? +event.currentTarget.value : itemsCountForPage
      // console.log(event.currentTarget.value)
      const num = event.currentTarget.value ? +event.currentTarget.value : itemsCountForPage
      // console.log(num)
      onChange(page, num)


      // console.log(event.currentTarget)

   }

   const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
      onChangeCallback(event, page)

      // setSortNum(+event.currentTarget.value)
      // console.log(page)
      // пишет студент
      // onChangeCallback(event, page)
      // console.log(+event.currentTarget.value)
   }

   return (
      <div className={s.pagination}>
         <Pagination
            id={id + '-pagination'}
            sx={{
               // стили для Pagination // пишет студент
            }}
            page={page}
            count={lastPage}
            onChange={onChangeCallback}
            hideNextButton
            hidePrevButton
         />

         <span className={s.text1}>
                показать
            </span>

         <SuperSelect
            id={id + '-pagination-select'}
            value={itemsCountForPage}
            options={[
               {id: 4, value: 4},
               {id: 7, value: 7},
               {id: 10, value: 10},
            ]}
            onChange={onChangeSelect}
         />

         <span className={s.text2}>
                строк в таблице
            </span>
      </div>
   )
}

export default SuperPagination