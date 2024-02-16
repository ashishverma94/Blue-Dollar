import React from 'react'

interface IPROPS{
    name: String,
    source : string,
    buy_price: String,
    sell_price: String,
}

const Row: React.FC<IPROPS> = ({name = "xyz",source = "#", buy_price = 0.0, sell_price = 0.0}) => {
  return (
    <div className='row'>
          <div className='row-element1'>
            <a target='_blank' href={source}>{name}</a>
          </div>
          <div className='row-element2'>
            {buy_price}
          </div>
          <div className='row-element2'>
            {sell_price}
          </div>
        </div>
  )
}

export default Row