import React from 'react';
import Book from './Book';

const BookList = ({books}) =>{
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Book ID
                    </th>
                    <th>
                        Title
                    </th>
                    <th>
                        Category
                    </th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => {
                    <Book book={book} />
                })}
            </tbody>
        </table>
    )
}