import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface ProductsFiltersProps {
    // Define las propiedades que necesites para tus filtros
}

const ProductsFilters: React.FC<ProductsFiltersProps> = () => {
    const [expandedFilter, setExpandedFilter] = useState<string | null>(null);
    const [price, setPrice] = useState<string>('');
    const [availability, setAvailability] = useState<string | null>(null);
    const [size, setSize] = useState<string | null>(null);

    const toggleFilter = (filter: string) => {
        setExpandedFilter(expandedFilter === filter ? null : filter);
    };

    return (
        <div className='flex flex-col justify-center items-center w-full sm:w-1/4 h-full bg-white p-4'>
            <h1 className='text-xl font-bold mb-4'>Filters</h1>
            <ul className='list-none w-full'>
                <li className='mb-2 cursor-pointer hover:text-blue-500' onClick={() => toggleFilter('price')}>
                    <div className='flex justify-between items-center'>
                        <span>Price</span>
                        {expandedFilter === 'price' ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {expandedFilter === 'price' && (
                        <div className='mt-2 w-full'>
                            <input
                                type='text'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder='Enter max price'
                                className='w-full p-2 border border-gray-300 rounded'
                            />
                        </div>
                    )}
                </li>
                <li className='mb-2 cursor-pointer hover:text-blue-500' onClick={() => toggleFilter('availability')}>
                    <div className='flex justify-between items-center'>
                        <span>Availability</span>
                        {expandedFilter === 'availability' ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {expandedFilter === 'availability' && (
                        <div className='mt-2 w-full'>
                            <label className='block mb-2'>
                                <input
                                    type='radio'
                                    name='availability'
                                    value='available'
                                    checked={availability === 'available'}
                                    onChange={() => setAvailability('available')}
                                    className='mr-2'
                                />
                                Available
                            </label>
                            <label className='block'>
                                <input
                                    type='radio'
                                    name='availability'
                                    value='not-available'
                                    checked={availability === 'not-available'}
                                    onChange={() => setAvailability('not-available')}
                                    className='mr-2'
                                />
                                Not Available
                            </label>
                        </div>
                    )}
                </li>
                <li className='mb-2 cursor-pointer hover:text-blue-500' onClick={() => toggleFilter('size')}>
                    <div className='flex justify-between items-center'>
                        <span>Size</span>
                        {expandedFilter === 'size' ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {expandedFilter === 'size' && (
                        <div className='mt-2 w-full'>
                            <label className='block mb-2'>
                                <input
                                    type='radio'
                                    name='size'
                                    value='S'
                                    checked={size === 'S'}
                                    onChange={() => setSize('S')}
                                    className='mr-2'
                                />
                                S
                            </label>
                            <label className='block mb-2'>
                                <input
                                    type='radio'
                                    name='size'
                                    value='M'
                                    checked={size === 'M'}
                                    onChange={() => setSize('M')}
                                    className='mr-2'
                                />
                                M
                            </label>
                            <label className='block mb-2'>
                                <input
                                    type='radio'
                                    name='size'
                                    value='L'
                                    checked={size === 'L'}
                                    onChange={() => setSize('L')}
                                    className='mr-2'
                                />
                                L
                            </label>
                            <label className='block mb-2'>
                                <input
                                    type='radio'
                                    name='size'
                                    value='XL'
                                    checked={size === 'XL'}
                                    onChange={() => setSize('XL')}
                                    className='mr-2'
                                />
                                XL
                            </label>
                            <label className='block'>
                                <input
                                    type='radio'
                                    name='size'
                                    value='XXL'
                                    checked={size === 'XXL'}
                                    onChange={() => setSize('XXL')}
                                    className='mr-2'
                                />
                                XXL
                            </label>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default ProductsFilters;

