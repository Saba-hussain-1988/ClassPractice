let book: {
    name: string,
    publishedYear: Date,
    auther:{
        name: string,
        location: string,
    },
    isFamous: boolean,
}={
    name: 'The Prince',
    publishedYear: new Date(1532),
    auther:{
        name:' Niccolò Machiavelli',
        location: 'Italy',
    },
    isFamous: true,
};


console.log(book.name ,'by', book.auther.name);